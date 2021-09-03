import React from "react"
import Skus from "../components/Products/Skus"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { loadStripe } from "@stripe/stripe-js"

const ProductsPage = () => {
  return (
    <Layout>
      <SEO title="Products" />
      <Skus />
    </Layout>
  )
}

export default ProductsPage
