const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const crypto = require('crypto');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const sig = event.headers['stripe-signature'];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let stripeEvent;

  try {
    stripeEvent = stripe.webhooks.constructEvent(event.body, sig, endpointSecret);
  } catch (err) {
    console.error(`Webhook Error: ${err.message}`);
    return { statusCode: 400, body: `Webhook Error: ${err.message}` };
  }

  // Manejar el evento de pago completado exitosamente
  if (stripeEvent.type === 'checkout.session.completed') {
    const session = stripeEvent.data.object;
    
    // Recuperar metadata que enviamos desde create-checkout.js
    const metadata = session.metadata || {};
    const email = metadata.email || session.customer_details?.email;
    const nombreCompleto = metadata.nombre || session.customer_details?.name || "";
    const tags = metadata.tags ? [metadata.tags] : ["CNADOTpago"];

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

        try {
          await fetch(mailchimpUrl, {
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
                LNAME: apellidos
              },
              tags: tags
            })
          });
          console.log(`Mailchimp success for ${email}`);
        } catch (e) {
          console.error(`Mailchimp error for ${email}:`, e);
        }
      } else {
        console.error("No Mailchimp API Key found in ENV.");
      }
    }
  }

  return { statusCode: 200, body: JSON.stringify({ received: true }) };
};
