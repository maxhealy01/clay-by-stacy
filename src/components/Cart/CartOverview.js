import React, { useState } from "react"

import { useShoppingCart } from "use-shopping-cart"

import CartItems from "./CartItems"
import { loadStripe } from "@stripe/stripe-js"
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLIC_KEY)

import "./cart.css"

const Cart = () => {
  const [loading, setLoading] = useState(false)
  /* Gets the totalPrice and a method for redirecting to stripe */
  const {
    formattedTotalPrice,
    redirectToCheckout,
    cartCount,
    clearCart,
    cartDetails,
  } = useShoppingCart()
  console.log(cartDetails)
  async function handleClick(event) {
    event.preventDefault()

    const stripe = await stripePromise

    // Create a useable array of line items, as per stripe's requirements
    const cartKeys = Object.keys(cartDetails)

    let lineItems = []
    cartKeys.forEach(key => {
      lineItems.push({
        price: cartDetails[key].id,
        quantity: cartDetails[key].quantity,
      })
    })

    if (cartCount > 0) {
      setLoading(true)
      const { error } = await stripe.redirectToCheckout({
        lineItems: lineItems,
        mode: "payment",
        successUrl: "https://claybystacy.net/success",
        cancelUrl: "https://claybystacy.net",
      })
      // const response = await fetch("/.netlify/functions/create-session", {
      //   method: "post",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(cartDetails),
      // })
      //   .then(res => res.json())
      //   .then(redirectToCheckout({ sessionId: response.sessionId }))
      //   .catch(error => {
      //     /* Error handling */
      //   })
    }
  }
  return (
    <div>
      {/* This is where we'll render our cart */}

      <CartItems />
      <p>Number of Items: {cartCount}</p>
      <p>Total: {formattedTotalPrice}</p>

      {/* Redirects the user to Stripe */}
      <button disabled={loading} className="big-button" onClick={handleClick}>
        {loading ? "Loading..." : "CHECKOUT"}
      </button>
      <button className="big-button" onClick={clearCart}>
        CLEAR CART
      </button>
    </div>
  )
}

export default Cart
