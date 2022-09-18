import React, { useState } from "react"

import { useShoppingCart } from "use-shopping-cart"
import { loadStripe } from "@stripe/stripe-js"

import CartItems from "./CartItems"

import "./cart.css"

const Cart = () => {
  const [loading, setLoading] = useState(false)
  /* Gets the totalPrice and a method for redirecting to stripe */
  const { formattedTotalPrice, redirectToCheckout, cartCount, clearCart } =
    useShoppingCart()

  loadStripe(`${process.env.GATSBY_STRIPE_PUBLISHABLE_KEY}`).then(res => {
    console.log(res)
  })

  return (
    <div>
      {/* This is where we'll render our cart */}

      <CartItems />
      <p>Number of Items: {cartCount}</p>
      <p>Total: {formattedTotalPrice}</p>

      {/* Redirects the user to Stripe */}
      <button
        disabled={loading}
        className="big-button"
        onClick={() => {
          setLoading(true)
          await redirectToCheckout()
        }}
      >
        {loading ? "Loading..." : "CHECKOUT"}
      </button>
      <button className="big-button" onClick={clearCart}>
        CLEAR CART
      </button>
    </div>
  )
}

export default Cart
