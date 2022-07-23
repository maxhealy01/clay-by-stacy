import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <main className="page">
        <p>Here are a few facts about me!</p>
      </main>
    </Layout>
  )
}

export default AboutPage
