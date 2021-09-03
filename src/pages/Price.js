import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const ItemTemplate = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <main className="page">
        <div className="center">yo</div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSingleProduct($name: String) {
    stripePrice(product: { name: { eq: $name } }) {
      product {
        description
        name
        images
      }
      currency
      id
      unit_amount
    }
  }
`

export default ItemTemplate
