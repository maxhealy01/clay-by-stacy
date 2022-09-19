import React from "react"

import Layout from "../components/Layout/Layout"
import Seo from "../components/seo"

import CartOverview from "../components/Cart/CartOverview"

const Cart = () => {
  return (
    <Layout>
      <Seo title="Cart" />
      <CartOverview />
    </Layout>
  )
}

export default Cart
