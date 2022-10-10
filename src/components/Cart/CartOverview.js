import React, { useState } from "react"

import { useShoppingCart } from "use-shopping-cart"

import CartItems from "./CartItems"

import "./cart.css"

const Cart = () => {
  const [loading, setLoading] = useState(false)
  /* Gets the totalPrice and a method for redirecting to stripe */
  const { formattedTotalPrice, redirectToCheckout, cartCount, clearCart } =
    useShoppingCart()

  async function handleClick(event) {
    event.preventDefault()

    if (cartCount > 0) {
      setStatus("idle")
      try {
        const result = await redirectToCheckout()
        if (result?.error) {
          console.error(result)
          setStatus("redirect-error")
        }
      } catch (error) {
        console.error(error)
        setStatus("redirect-error")
      }
    } else {
      setStatus("missing-items")
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
