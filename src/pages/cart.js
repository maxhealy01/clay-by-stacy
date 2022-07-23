import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import SkuCard from "../components/Products/SkuCard"
import Skus from "../components/Products/Skus"
import CartOverview from "../components/CartOverview"

const CartExample = () => {
  return (
    <Layout>
      <SEO title="Cart" />
      <CartOverview />
    </Layout>
  )
}

export default CartExample
