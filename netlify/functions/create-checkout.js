const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: 'Method Not Allowed' };
    }
    
    const { profile, subProfile, packageType, userDetails, precioCalculado } = JSON.parse(event.body);

    // Identificar el dominio base
    const domain = process.env.URL || 'http://localhost:5173';
    
    let title = `Inscripción ${packageType} - ${profile}`;
    if (subProfile) title += ` (${subProfile})`;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      metadata: {
        nombre: userDetails.nombre,
        email: userDetails.email,
        tel: userDetails.tel,
        paquete: packageType, // Fase 2 y 3, Múltiples Fases, etc.
        perfil: profile,
        tags: 'CNADOTpago'
      },
      line_items: [
        {
          price_data: {
            currency: 'mxn',
            product_data: {
              name: title,
              description: `A nombre de: ${userDetails.nombre} | Inst: ${userDetails.inst}`,
            },
            unit_amount: precioCalculado * 100, // Stripe maneja el precio en centavos
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${domain}/.netlify/functions/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${domain}/pago-cancelado`,
      customer_email: userDetails.email,
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: session.id, url: session.url }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ error: error.message }),
    };
  }
};
