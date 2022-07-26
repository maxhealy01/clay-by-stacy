import React from "react"
import Skus from "../components/Products/Skus"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import { loadStripe } from "@stripe/stripe-js"

const ProductsPage = () => {
  return (
    <Layout>
      <SEO title="Products" />
      <Skus />
      <p>
        You can make inquiries regarding custom products in the contact page!
        Pricing will vary according to the number of figures and the scale of
        the project.
      </p>
    </Layout>
  )
}

export default ProductsPage
