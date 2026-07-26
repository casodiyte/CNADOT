const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: 'Method Not Allowed' };
    }
    
    const { profile, subProfile, packageType, userDetails } = JSON.parse(event.body);

    let price = 0;
    let title = '';

    // Lógica de precios según lo indicado por el usuario
    if (profile === 'Coordinador(a) de Donación' || profile === 'Coordinadores') {
      price = 7000;
      title = 'Inscripción Fase 1-2-3 (Coordinadores Anáhuac)';
    } else if (profile === 'Prueba (5 MXN)') {
      price = 5;
      title = 'Inscripción de Prueba (5 MXN)';
    } else if (profile === 'Cirujanos') {
      price = 9000;
      title = `Inscripción Fase 1-2-4-5-6 (Cirujanos${subProfile ? ' - ' + subProfile : ''})`;
    } else if (profile === 'Perfusionistas') {
      price = 5000;
      title = 'Inscripción Fase 1-2-4-5-6 (Perfusionistas)';
    } else if (profile === 'Enfermeros Quirúrgicos' || profile === 'Enfermeros') {
      price = 4000;
      title = 'Inscripción Fase 1-2-4-5-6 (Enfermeros Quirúrgicos)';
    } else if (profile === 'Médicos Especialistas' || (profile && profile.startsWith('Especialistas'))) {
      price = 4000;
      title = `Inscripción Fase 1-2-4-5-6 (Médicos Especialistas${subProfile ? ' - ' + subProfile : ''})`;
    } else {
      return { statusCode: 400, body: JSON.stringify({ error: 'Perfil inválido: ' + profile }) };
    }

    // Identificar el dominio base
    // En Netlify, process.env.URL contiene el dominio principal (ej: https://midominio.com)
    // process.env.DEPLOY_URL contiene el dominio específico de la rama o deploy preview
    const domain = process.env.URL || 'http://localhost:5173';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'mxn',
            product_data: {
              name: title,
              description: `A nombre de: ${userDetails.nombre} | Inst: ${userDetails.inst}`,
            },
            unit_amount: price * 100, // Stripe maneja el precio en centavos
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${domain}/pago-exito`,
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
