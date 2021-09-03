import React from "react"

import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai"

const cardStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "flex-start",
  padding: "1rem",
  marginBottom: "1rem",
  boxShadow: "5px 5px 25px 0 rgba(46,61,73,.2)",
  backgroundColor: "#fff",
  borderRadius: "6px",
  maxWidth: "300px",
}
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

const littleButtonStyles = {
  padding: "2px",
}

const CartItemCard = ({ sku }) => {
  const { removeItem, decrementItem, incrementItem, cartDetails } =
    useShoppingCart()
  const itemDetails = cartDetails[sku.id]

  console.log(itemDetails)

  return (
    <div style={cardStyles}>
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
