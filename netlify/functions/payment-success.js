const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const crypto = require('crypto');

exports.handler = async (event) => {
  const sessionId = event.queryStringParameters.session_id;

  // Si no hay sesión, simplemente enviarlo a la página de éxito
  if (!sessionId) {
    return {
      statusCode: 302,
      headers: { Location: '/pago-exito' },
    };
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    
    // Solo procesamos si el pago fue un éxito real
    if (session.payment_status === 'paid') {
      const metadata = session.metadata || {};
      const email = metadata.email || session.customer_details?.email;
      const nombreCompleto = metadata.nombre || session.customer_details?.name || "";
      const paquete = metadata.paquete || "Múltiples Fases";
      const paymentAmount = (session.amount_total / 100).toLocaleString('es-MX', { minimumFractionDigits: 2 });
      const paymentDate = new Date(session.created * 1000).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' });
      const orderId = session.id;
      const currentYear = new Date().getFullYear().toString();
      
      // Días de asistencia exactos basados en el paquete
      let diasAsistencia = "Fechas por definir";
      if (paquete.includes('Fase 2 y 3') && paquete.includes('4, 5 y 6')) {
        diasAsistencia = "Del 28 de Septiembre al 2 de Octubre de 2026";
      } else if (paquete.includes('Fase 2 y 3')) {
        diasAsistencia = "28, 29 y 30 de Septiembre de 2026";
      } else if (paquete.includes('Fase 2')) {
        diasAsistencia = "28 de Septiembre de 2026";
      } else if (paquete.includes('4, 5 y 6')) {
        diasAsistencia = "30 de Sept., 1 y 2 de Octubre de 2026";
      } else if (paquete === 'Múltiples Fases') {
        diasAsistencia = "Del 28 de Septiembre al 2 de Octubre de 2026";
      }

      if (email) {
        const API_KEY = process.env.MAILCHIMP_API_KEY;
        const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
        
        if (API_KEY && AUDIENCE_ID) {
          const SERVER = process.env.MAILCHIMP_SERVER || API_KEY.split('-')[1];
          const md5 = crypto.createHash('md5').update(email.toLowerCase()).digest("hex");
          const mailchimpUrl = `https://${SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${md5}`;

          let nombre = nombreCompleto;
          let apellidos = "";
          if (nombreCompleto.includes(" ")) {
             const parts = nombreCompleto.split(" ");
             nombre = parts[0];
             apellidos = parts.slice(1).join(" ");
          }

          // Enviar datos actualizados a Mailchimp para el correo de recibo de pago
          const putResponse = await fetch(mailchimpUrl, {
            method: 'PUT',
            headers: {
              Authorization: `Basic ${Buffer.from(`any:${API_KEY}`).toString('base64')}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email_address: email,
              status_if_new: 'subscribed',
              merge_fields: {
                FNAME: nombre,
                LNAME: apellidos,
                FASE: paquete,           // Etiqueta Mailchimp: *|FASE|*
                DIAS: diasAsistencia,    // Etiqueta Mailchimp: *|DIAS|*
                MONTO: `$${paymentAmount} MXN`, // Etiqueta Mailchimp: *|MONTO|*
                ORDEN: orderId.slice(-8),// Etiqueta Mailchimp: *|ORDEN|* (últimos 8)
                FECHA_P: paymentDate,    // Etiqueta Mailchimp: *|FECHA_P|*
                YEAR: currentYear        // Etiqueta Mailchimp: *|YEAR|*
              }
            })
          });

          if (!putResponse.ok) {
             console.error("Mailchimp PUT error:", await putResponse.text());
          }

          // Mailchimp requires a separate endpoint to safely add tags
          const tagsResponse = await fetch(`${mailchimpUrl}/tags`, {
            method: 'POST',
            headers: {
              Authorization: `Basic ${Buffer.from(`any:${API_KEY}`).toString('base64')}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              tags: [
                { name: "CNADOTpagado", status: "active" }
              ]
            })
          });

          if (!tagsResponse.ok) {
             console.error("Mailchimp TAGS error:", await tagsResponse.text());
          }
        }
      }
    }
  } catch (error) {
    console.error("Error validando pago en servidor:", error);
  }

  // Después de registrar en Mailchimp, Redirigimos al usuario a la página bonita de Éxito
  return {
    statusCode: 302,
    headers: { Location: '/pago-exito' },
  };
};
