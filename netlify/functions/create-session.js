// Serverless Function: Let's validate the product the user wants and create a Stripe Session.
const stripe = require("stripe")(process.env.GATSBY_STRIPE_SECRET_KEY)

exports.handler = async event => {
  try {
    const productJSON = JSON.parse(event.body)
    const line_items = productJSON
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_address_collection: {
        allowed_countries: ["US", "CA"],
      },
      success_url: `${process.env.URL}/success`,
      cancel_url: process.env.URL,
      line_items,
    })
    return {
      statusCode: 200,
      body: JSON.stringify({ sessionId: session.id }),
    }
  } catch (error) {
    /* Error handling */
  }
}
