import React from "react"

import Layout from "../components/Layout/Layout"
import Seo from "../components/seo"

import CartOverview from "../components/Cart/CartOverview"

import { loadStripe } from "@stripe/stripe-js"
import { CartProvider } from "use-shopping-cart"

const stripePromise = loadStripe(
  process.env.GATSBY_STRIPE_PUBLISHABLE_KEY
).toString()

const Cart = () => {
  return (
    <Layout>
      <CartProvider
        mode="client-only"
        stripe={stripePromise}
        successUrl={`${window.location.origin}/page-2/`}
        cancelUrl={`${window.location.origin}/`}
        currency="USD"
        allowedCountries={["US", "GB", "CA"]}
        billingAddressCollection={true}
      >
        <Seo title="Cart" />
        <CartOverview />
      </CartProvider>
    </Layout>
  )
}

export default Cart
