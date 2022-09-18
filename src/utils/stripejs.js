/**
 * This is a singleton to ensure we only instantiate Stripe once.
 */
import { loadStripe } from "@stripe/stripe-js"

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(`${process.env.GATSBY_STRIPE_SECRET_KEY}`)
  }

  return stripePromise
}

export default getStripe
