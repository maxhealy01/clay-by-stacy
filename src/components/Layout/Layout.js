/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "../Navbar/Navbar.js"
import "./Layout.css"
import "../../assets/css/main.css"

import { CartProvider } from "use-shopping-cart"
import getStripe from "../../utils/stripejs.js"

const Layout = ({ children }) => {
  getStripe()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.GATSBY_STRIPE_PUBLIC_KEY}
      successUrl="claybystacy.net/success"
      cancelUrl="claybystacy.net/"
      currency="USD"
      allowedCountries={["US", "GB", "CA"]}
      billingAddressCollection={true}
    >
      <Navbar />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
    </CartProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
