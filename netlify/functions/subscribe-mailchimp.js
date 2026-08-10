const crypto = require('crypto');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { email, nombre, apellidos, tags } = JSON.parse(event.body);

    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    
    if (!API_KEY || !AUDIENCE_ID) {
      console.error("Missing Mailchimp configuration in Netlify.");
      return { statusCode: 500, body: JSON.stringify({ error: 'Faltan variables de entorno en Netlify' }) };
    }

    // El servidor usX se extrae del final de la API key (ej. ...-us13)
    const SERVER = process.env.MAILCHIMP_SERVER || API_KEY.split('-')[1];

    // MD5 hash del email para Mailchimp
    const md5 = crypto.createHash('md5').update(email.toLowerCase()).digest("hex");
    const mailchimpUrl = `https://${SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${md5}`;

    // Hacemos el llamado a Mailchimp (usando el fetch nativo de Node 18+)
    const response = await fetch(mailchimpUrl, {
      method: 'PUT', // PUT crea si no existe, o actualiza si ya existe
      headers: {
        Authorization: `Basic ${Buffer.from(`any:${API_KEY}`).toString('base64')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email_address: email,
        status_if_new: 'subscribed',
        merge_fields: {
          FNAME: nombre || "",
          LNAME: apellidos || "",
          YEAR: new Date().getFullYear().toString()
        },
        tags: tags || []
      })
    });

    const data = await response.json();
    
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, data })
    };
  } catch (error) {
    console.error("Error al registrar en Mailchimp:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.toString() })
    };
  }
};
