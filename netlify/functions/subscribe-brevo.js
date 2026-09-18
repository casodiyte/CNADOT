// Alta de contacto en Brevo + correo de "registro recibido".
// Reemplaza a subscribe-mailchimp.js (que nunca corrio: tenia un const duplicado).
exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { email, nombre, apellidos, tags } = JSON.parse(event.body);

    const API_KEY = process.env.BREVO_API_KEY;
    // Lista de REGISTROS ("cnadot lista" #18). Separada de la de pagados (#17) a
    // proposito: asi nadie que solo se registro puede recibir el correo de pago.
    const LIST_ID = process.env.BREVO_LIST_REGISTRO || 18;
    const TEMPLATE_ID = process.env.BREVO_TEMPLATE_REGISTRO || 17;

    if (!API_KEY) {
      console.error('Falta BREVO_API_KEY en Netlify.');
      return { statusCode: 500, body: JSON.stringify({ error: 'Falta BREVO_API_KEY en Netlify' }) };
    }

    const brevoHeaders = {
      'api-key': API_KEY,
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };

    // 1. Guardar/actualizar el contacto (updateEnabled evita que falle si ya existe)
    const contactRes = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: brevoHeaders,
      body: JSON.stringify({
        email,
        updateEnabled: true,
        listIds: [Number(LIST_ID)],
        attributes: {
          FIRSTNAME: nombre || '',
          LASTNAME: apellidos || '',
          ETIQUETAS: (tags || []).join(', ')
        }
      })
    });

    if (!contactRes.ok) {
      const detalle = await contactRes.text();
      console.error('Brevo contacto error:', detalle);
      return { statusCode: 502, body: JSON.stringify({ error: 'Brevo rechazo el contacto', detalle }) };
    }

    // 2. Enviar el correo de registro recibido
    try {
      const mailRes = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: brevoHeaders,
        body: JSON.stringify({
          to: [{ email, name: `${nombre || ''} ${apellidos || ''}`.trim() || email }],
          templateId: Number(TEMPLATE_ID),
          params: {
            FNAME: nombre || '',
            YEAR: new Date().getFullYear().toString()
          }
        })
      });
      if (!mailRes.ok) console.error('Brevo email registro error:', await mailRes.text());
    } catch (err) {
      // El contacto ya quedo guardado; no tiramos el registro por un fallo de correo
      console.error('Error al enviar correo de registro:', err);
    }

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (error) {
    console.error('Error al registrar en Brevo:', error);
    return { statusCode: 500, body: JSON.stringify({ error: error.toString() }) };
  }
};
