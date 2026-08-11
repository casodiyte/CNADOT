const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    if (event.httpMethod !== 'GET') {
      return { statusCode: 405, body: 'Method Not Allowed' };
    }

    // List recent paid checkout sessions (up to 100 max)
    // We filter by payment_status: 'paid' to only count successful registrations
    const sessions = await stripe.checkout.sessions.list({
      limit: 100,
    });

    let fase23Count = 0;
    let fase456Count = 0;

    sessions.data.forEach(session => {
      if (session.payment_status === 'paid' && session.metadata) {
        // Only count purchases made by 'Coordinador(a) de Donación'
        if (session.metadata.perfil === 'Coordinador(a) de Donación') {
          const packageStr = session.metadata.paquete || '';
          
          if (packageStr.includes('Fase 2 y 3')) {
            fase23Count++;
          }
          if (packageStr.includes('Fases 4, 5 y 6')) {
            fase456Count++;
          }
        }
      }
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        fase23Count,
        fase456Count,
        fase23SoldOut: fase23Count >= 24,
        fase456SoldOut: fase456Count >= 6
      }),
    };
  } catch (error) {
    console.error("Availability Check Error:", error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: error.message }),
    };
  }
};
