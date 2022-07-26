import React from "react"

import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai"

import "./products.css"

const CartItemCard = ({ sku }) => {
  const { removeItem, decrementItem, incrementItem, cartDetails } =
    useShoppingCart()
  const itemDetails = cartDetails[sku.id]

  return (
    <div className="card">
      <h4>
        {sku.name}{" "}
        <span>
          <div>
            <button
              className="small-button"
              onClick={() => decrementItem(sku.id)}
            >
              <AiOutlineArrowDown />
            </button>
            {itemDetails.quantity}
            <button
              className="small-button"
              onClick={() => incrementItem(sku.id)}
            >
              <AiOutlineArrowUp />
            </button>
          </div>
        </span>
      </h4>
      <img src={sku.images} />
      <p>
        Price:{" "}
        {formatCurrencyString({
          value: parseInt(sku.price, 10),
          currency: sku.currency,
        })}
      </p>
      <button className="big-button" onClick={() => removeItem(sku.id)}>
        REMOVE FROM CART
      </button>
    </div>
  )
}

export default CartItemCard
