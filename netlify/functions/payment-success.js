const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

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
      } else if (paquete.includes('Fase 2') && paquete.includes('4, 5 y 6')) {
        diasAsistencia = "28, 30 de Sept., 1 y 2 de Octubre de 2026";
      } else if (paquete.includes('Fase 2')) {
        diasAsistencia = "28 de Septiembre de 2026";
      } else if (paquete.includes('4, 5 y 6')) {
        diasAsistencia = "30 de Sept., 1 y 2 de Octubre de 2026";
      } else if (paquete === 'Múltiples Fases') {
        diasAsistencia = "Del 28 de Septiembre al 2 de Octubre de 2026";
      }

      // Notificar a Formspree como COMPRA EXITOSA
      try {
        await fetch("https://formspree.io/f/mgawkwgw", {
          method: "POST",
          body: JSON.stringify({
            Nombres: nombreCompleto,
            Email: email,
            Telefono: metadata.tel || "No proporcionado",
            Paquete: paquete,
            MontoPagado: `$${paymentAmount} MXN`,
            OrderId: orderId
          }),
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });
      } catch (err) {
        console.error("Error al enviar a Formspree backend:", err);
      }

      const API_KEY = process.env.BREVO_API_KEY;
      // Lista de PAGADOS (CNADOT #17) y plantilla "CNADOT · Pago confirmado"
      const LIST_ID = process.env.BREVO_LIST_PAGADOS || process.env.BREVO_LIST_ID || 17;
      const TEMPLATE_ID = process.env.BREVO_TEMPLATE_PAGO || 15;

      if (email && API_KEY) {
        const brevoHeaders = {
          'api-key': API_KEY,
          'Content-Type': 'application/json',
          Accept: 'application/json'
        };

        let nombre = nombreCompleto;
        let apellidos = "";
        if (nombreCompleto.includes(" ")) {
          const parts = nombreCompleto.split(" ");
          nombre = parts[0];
          apellidos = parts.slice(1).join(" ");
        }

        // 1. Guardar/actualizar el contacto en la lista de CNADOT
        if (LIST_ID) {
          try {
            const contactRes = await fetch('https://api.brevo.com/v3/contacts', {
              method: 'POST',
              headers: brevoHeaders,
              body: JSON.stringify({
                email,
                updateEnabled: true,
                listIds: [Number(LIST_ID)],
                attributes: {
                  FIRSTNAME: nombre,
                  LASTNAME: apellidos,
                  FASE: paquete,
                  DIAS: diasAsistencia,
                  MONTO: `$${paymentAmount} MXN`,
                  ORDEN: orderId.slice(-8),
                  FECHA_P: paymentDate,
                  ETIQUETAS: 'CNADOTpagado'
                }
              })
            });
            if (!contactRes.ok) console.error("Brevo contacto error:", await contactRes.text());
          } catch (err) {
            console.error("Error al guardar contacto en Brevo:", err);
          }
        }

        // 2. Enviar el correo de pago confirmado (transaccional)
        if (TEMPLATE_ID) {
          try {
            const mailRes = await fetch('https://api.brevo.com/v3/smtp/email', {
              method: 'POST',
              headers: brevoHeaders,
              body: JSON.stringify({
                to: [{ email, name: nombreCompleto || email }],
                templateId: Number(TEMPLATE_ID),
                params: {
                  FNAME: nombre,
                  FASE: paquete,
                  DIAS: diasAsistencia,
                  MONTO: `$${paymentAmount} MXN`,
                  ORDEN: orderId.slice(-8),
                  FECHA_P: paymentDate,
                  YEAR: currentYear
                }
              })
            });
            if (!mailRes.ok) console.error("Brevo email error:", await mailRes.text());
          } catch (err) {
            console.error("Error al enviar correo con Brevo:", err);
          }
        } else {
          console.error("Falta BREVO_TEMPLATE_PAGO: no se envió el correo de confirmación.");
        }
      }
    }
  } catch (error) {
    console.error("Error validando pago en servidor:", error);
  }

  // Redirigimos al usuario a la página de Éxito
  return {
    statusCode: 302,
    headers: { Location: '/pago-exito' },
  };
};
