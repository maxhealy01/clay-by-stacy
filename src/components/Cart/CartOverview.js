import React, { useState } from "react"

import { useShoppingCart } from "use-shopping-cart"

import CartItems from "./CartItems"
import getStripe from "../../utils/stripejs.js"

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

    if (cartCount > 0) {
      setLoading(true)
      const response = await fetch("/.netlify/functions/create-session", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cartDetails),
      })
        .then(res => res.json())
        .catch(error => {
          /* Error handling */
        })

      redirectToCheckout({ sessionId: response.sessionId })
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
