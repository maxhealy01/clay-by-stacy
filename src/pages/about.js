import { StaticImage } from "gatsby-plugin-image"
import React from "react"

import Layout from "../components/Layout/Layout"
import Seo from "../components/seo"
import "./styles/about.css"

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About" />
      <main className="page">
        <div className="picture">
          <StaticImage src="../images/portrait.jpg" quality={95} width={200} />
        </div>
        <p>
          My name is Stacy Healy. I’ve been making clay art for over thirty
          years. Over that period I’ve been able to work in a variety of styles,
          including small figures depicting families and pets, Christmas tree
          ornaments, decorative patterns to adorn everyday items, and more
          realistic sculptures.
        </p>
        <p>
          For thirty-six years, I’ve been a loving mother, and nothing has
          brought me more joy than my three beautiful boys. At the same time,
          I’ve been an artist my whole life, and this website coincides with my
          public debut, containing work that I feel is representative of my
          artistic vision.
        </p>
        <p>I hope you enjoy it.</p>
      </main>
    </Layout>
  )
}

export default AboutPage
