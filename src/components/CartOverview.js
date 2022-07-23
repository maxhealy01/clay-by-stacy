import React, { useState, useEffect } from "react"

import { useShoppingCart } from "use-shopping-cart"
import { loadStripe } from "@stripe/stripe-js"

import CartItems from "./CartItems"

const buttonStyles = {
  fontSize: "13px",
  textAlign: "center",
  color: "#fff",
  outline: "none",
  padding: "12px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "coral",
  borderRadius: "6px",
  letterSpacing: "1.5px",
}

const Cart = () => {
  const [loading, setLoading] = useState(false)
  /* Gets the totalPrice and a method for redirecting to stripe */
  const { formattedTotalPrice, redirectToCheckout, cartCount, clearCart } =
    useShoppingCart()

  loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY).then(res => {
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
        style={buttonStyles}
        disabled={loading}
        onClick={() => {
          setLoading(true)
          redirectToCheckout()
        }}
      >
        {loading ? "Loading..." : "Checkout"}
      </button>
      <button style={buttonStyles} onClick={clearCart}>
        Clear cart
      </button>
    </div>
  )
}

export default Cart
