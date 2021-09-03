import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
