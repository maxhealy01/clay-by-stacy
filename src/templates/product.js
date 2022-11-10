import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import Seo from "../components/seo"

const ItemTemplate = ({ data, pageContext }) => {
  const item = data.stripePrice.product
  console.log(item)
  return (
    <Layout>
      <Seo title={item.name} />
      <main className="page">
        <div className="center">{item.name}</div>
        <img src={item.images} />
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetProductBySlug($slug: String) {
    stripePrice(fields: { slug: { eq: $slug } }) {
      product {
        images
        name
        id
      }
      unit_amount
      unit_amount_decimal
      currency
    }
  }
`

export default ItemTemplate
