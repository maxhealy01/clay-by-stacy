import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ItemTemplate = ({ data, pageContext }) => {
  const item = data.stripePrice.product

  return (
    <Layout>
      <SEO title={item.name} />
      <main className="page">
        <div className="center">yo</div>
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
        description
        id
      }
      unit_amount
      unit_amount_decimal
      currency
    }
  }
`

export default ItemTemplate
