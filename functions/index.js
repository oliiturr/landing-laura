const functions = require('firebase-functions');
const mercadopago = require('mercadopago');

// Configurá tu access token de MercadoPago
mercadopago.configurations.setAccessToken('TEST-6370359946765305-070514-c8376083d55abcd2dceb5592a0a44635-241534187');

exports.crearPreferencia = functions.https.onCall(async (data, context) => {
  const { nombre, whatsapp, motivo, horario } = data;

  const preference = {
    items: [
      {
        title: "Consulta Legal",
        quantity: 1,
        unit_price: 10,  // ajustá el precio
      },
    ],
    back_urls: {
  success: "https://wa.me/5493541680585?text=Hola,%20ya%20realicé%20el%20pago%20de%20la%20consulta.%20Quisiera%20coordinar%20el%20día%20y%20hora.",
  failure: "https://tusitio.com/error",
  pending: "https://tusitio.com/pendiente"
},
auto_return: "approved",

    // Agregá metadata si querés guardar detalles en MP
    metadata: {
      nombre,
      whatsapp,
      motivo,
      horario,
    }
  };

  try {
    const response = await mercadopago.preferences.create(preference);
    return { preferenceId: response.body.id };
  } catch (error) {
    console.error(error);
    throw new functions.https.HttpsError('internal', 'Error creando preferencia');
  }
});
