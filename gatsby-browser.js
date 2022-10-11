// /**
//  * Implement Gatsby's Browser APIs in this file.
//  *
//  * See: https://www.gatsbyjs.com/docs/browser-apis/
//  */

// // You can delete this file if you're not using it
// const React = require("react")
// const { CartProvider } = require("use-shopping-cart")

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
