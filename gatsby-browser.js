// /**
//  * Implement Gatsby's Browser APIs in this file.
//  *
//  * See: https://www.gatsbyjs.com/docs/browser-apis/
//  */

// // You can delete this file if you're not using it
// const React = require("react")
// const { CartProvider } = require("use-shopping-cart")

<<<<<<< HEAD
// exports.wrapRootElement = ({ element }) => {
//   return (
//     <CartProvider
//       mode="payment"
//       cartMode="client-only"
//       stripe={process.env.GATSBY_STRIPE_SECRET_KEY}
//       successUrl="https://claybystacy.net/success"
//       cancelUrl="https://claybystacy.net/"
//       currency="USD"
//       allowedCountries={["US", "GB", "CA"]}
//       billingAddressCollection={true}
//     >
//       {element}
//     </CartProvider>
//   )
// }
=======
import React from "react"
import { Provider } from "react-redux"
import { CartProvider } from "use-shopping-cart"

export const wrapRootElement = ({ element }) => {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={`${process.env.GATSBY_STRIPE_SECRET_KEY}`}
      successUrl="https://claybystacy.net/success"
      cancelUrl="https://claybystacy.net/"
      currency="USD"
      allowedCountries={["US", "GB", "CA"]}
      billingAddressCollection={true}
    >
      {element}
    </CartProvider>
  )
}
>>>>>>> parent of 35785f4 (Got rid of gatsby-plugin-use-shopping-cart, created a wrapper component instead)
