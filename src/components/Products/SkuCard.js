import React from "react"
import { Link } from "gatsby"
import slugify from "slugify"

import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"

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

const SkuCard = ({ sku }) => {
  const { addItem } = useShoppingCart()

  const slug = slugify(sku.name, { lower: true })

  return (
    <div style={cardStyles}>
      <Link key={sku.id} to={`/item/${slug}`}>
        <h4>{sku.name}</h4>
        <div className="img-holder">
          <img src={sku.images} />
        </div>
      </Link>
      <p>
        Price:{" "}
        {formatCurrencyString({
          value: parseInt(sku.price, 10),
          currency: sku.currency,
        })}
      </p>
      <button style={buttonStyles} onClick={() => addItem(sku)}>
        ADD TO CART
      </button>
    </div>
  )
}

export default SkuCard
