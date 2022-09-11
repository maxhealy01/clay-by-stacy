import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import CartOverview from "../components/CartOverview"

const Cart = () => {
  return (
    <Layout>
      <Seo title="Cart" />
      <CartOverview />
    </Layout>
  )
}

export default Cart
