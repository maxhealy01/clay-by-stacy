import React from "react"
import { Link } from "gatsby"
import slugify from "slugify"

import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"
import "./products.css"

const SkuCard = ({ sku }) => {
  const { addItem } = useShoppingCart()

  const slug = slugify(sku.name, { lower: true })

  return (
    <div className="card">
      <h4>{sku.name}</h4>
      {/* <Link key={sku.id} to={`/item/${slug}`}> */}
      <div className="img-holder">
        <img src={sku.images} alt={sku.description} />
      </div>
      {/* </Link> */}
      <p>
        Price:{" "}
        {formatCurrencyString({
          value: parseInt(sku.price, 10),
          currency: sku.currency,
        })}
      </p>
      <button className="big-button" onClick={() => addItem(sku)}>
        ADD TO CART
      </button>
    </div>
  )
}

export default SkuCard
