import React from "react"
import Layout from "../components/Layout/Layout"
import { useShoppingCart } from "use-shopping-cart"

const SuccessPage = () => {
  // const { clearCart } = useShoppingCart()
  // clearCart()
  return (
    <Layout>
      <main className="page">
        <div>Yay! Your products will be arriving shortly!</div>
      </main>
    </Layout>
  )
}

export default SuccessPage
