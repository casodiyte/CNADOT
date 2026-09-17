// Alta/actualización de contacto en Brevo (reemplaza subscribe-mailchimp.js)
const BREVO_URL = 'https://api.brevo.com/v3/contacts';

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { email, nombre, apellidos, tags } = JSON.parse(event.body);

    const API_KEY = process.env.BREVO_API_KEY;
    const LIST_ID = process.env.BREVO_LIST_ID || 17; // lista CNADOT

    if (!API_KEY) {
      console.error('Falta BREVO_API_KEY en Netlify.');
      return { statusCode: 500, body: JSON.stringify({ error: 'Faltan variables de entorno en Netlify' }) };
    }

    // updateEnabled: true => si el contacto ya existe, lo actualiza en vez de fallar
    const response = await fetch(BREVO_URL, {
      method: 'POST',
      headers: {
        'api-key': API_KEY,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
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

    if (!response.ok) {
      const detalle = await response.text();
      console.error('Brevo contacts error:', detalle);
      return { statusCode: 502, body: JSON.stringify({ error: 'Brevo rechazó el contacto', detalle }) };
    }

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (error) {
    console.error('Error al registrar en Brevo:', error);
    return { statusCode: 500, body: JSON.stringify({ error: error.toString() }) };
  }
};
