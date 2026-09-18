// Alta de contacto en Brevo para los REGISTROS.
// El correo de "registro recibido" NO se manda aqui: lo dispara la automatizacion
// "registro cnadot" (#13) cuando el contacto entra a la lista 18. Si algun dia se
// apaga esa automatizacion, hay que volver a mandarlo desde aqui.
// Ojo: solo se mandan atributos que existen en la cuenta de Brevo
// (FIRSTNAME, LASTNAME, TAGS). Uno inexistente hace que Brevo rechace el contacto.
exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { email, nombre, apellidos, tags } = JSON.parse(event.body);

    const API_KEY = process.env.BREVO_API_KEY;
    // Lista de REGISTROS ("cnadot lista" #18), separada de la de pagados (#17)
    // para que quien solo se registro nunca reciba el correo de pago.
    const LIST_ID = process.env.BREVO_LIST_REGISTRO || 18;

    if (!API_KEY) {
      console.error('Falta BREVO_API_KEY en Netlify.');
      return { statusCode: 500, body: JSON.stringify({ error: 'Falta BREVO_API_KEY en Netlify' }) };
    }

    const res = await fetch('https://api.brevo.com/v3/contacts', {
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
          TAGS: (tags || []).join(', ')
        }
      })
    });

    if (!res.ok) {
      const detalle = await res.text();
      console.error('Brevo contacto error:', detalle);
      return { statusCode: 502, body: JSON.stringify({ error: 'Brevo rechazo el contacto', detalle }) };
    }

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (error) {
    console.error('Error al registrar en Brevo:', error);
    return { statusCode: 500, body: JSON.stringify({ error: error.toString() }) };
  }
};
