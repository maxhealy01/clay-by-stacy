import React from "react"
import { graphql, StaticQuery } from "gatsby"
import SkuCard from "./SkuCard"

const conatinerStyles = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  padding: "1rem 0 1rem 0",
}

export default props => (
  <StaticQuery
    query={graphql`
      query ProductPrices {
        prices: allStripePrice(
          filter: { active: { eq: true }, currency: { eq: "usd" } }
          sort: { fields: [unit_amount] }
        ) {
          edges {
            node {
              id
              active
              currency
              unit_amount
              product {
                images
                id
                name
                description
              }
            }
          }
        }
      }
    `}
    render={({ prices }) => (
      <div style={conatinerStyles}>
        {prices.edges.map(({ node: price }) => {
          const newSku = {
            sku: price.id,
            name: price.product.name,
            price: price.unit_amount,
            currency: price.currency,
            images: price.product.images,
            description: price.product.description,
          }
          return <SkuCard key={price.id} sku={newSku} />
        })}
      </div>
    )}
  />
)
