import React from "react"

import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai"

import "./products.css"

const buttonStyles = {
  fontSize: "13px",
  textAlign: "center",
  color: "#fff",
  outline: "none",
  padding: "12px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "var(--primary-500)",
  borderRadius: "15px",
  letterSpacing: "1.5px",
  cursor: "pointer",
  border: "none",
}

const littleButtonStyles = {
  padding: "2px",
  color: "#fff",
  backgroundColor: "var(--primary-500)",
  border: "none",
  margin: "0.5rem 1rem",
  borderRadius: "70px",
  cursor: "pointer",
}

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
              style={littleButtonStyles}
              onClick={() => decrementItem(sku.id)}
            >
              <AiOutlineArrowDown />
            </button>
            {itemDetails.quantity}
            <button
              style={littleButtonStyles}
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
      <button style={buttonStyles} onClick={() => removeItem(sku.id)}>
        REMOVE FROM CART
      </button>
    </div>
  )
}

export default CartItemCard
