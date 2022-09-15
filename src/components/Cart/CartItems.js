import React from "react"
import CartItemCard from "../Products/CartItemCard"

import { useShoppingCart } from "use-shopping-cart"

import "./cart.css"

const CartItems = () => {
  const { cartDetails } = useShoppingCart()

  const cart = []

  for (const sku in cartDetails) {
    const cartEntry = cartDetails[sku]
    cart.push(cartEntry)
  }

  return (
    <div className="cart-container">
      {cart.map(item => {
        const newSku = {
          id: item.id,
          name: item.name,
          price: item.price,
          currency: item.currency,
          images: item.images[0],
        }
        return <CartItemCard key={item.id} sku={newSku} />
      })}
    </div>
  )
}

export default CartItems
