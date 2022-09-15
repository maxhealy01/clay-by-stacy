import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout/Layout"
import Seo from "../components/seo"
import "./styles/gallery.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="row">
      <div className="column">
        <StaticImage
          src="../images/gallery/lady.jpg"
          quality={95}
          alt={"A female clay sculpture lying down."}
        />
        <StaticImage
          src="../images/gallery/custom1.jpg"
          quality={95}
          alt={"Several objects decorated with floral clay patterns."}
        />
        <StaticImage
          src="../images/gallery/work1.jpg"
          quality={95}
          alt={"The artist working on one of her sculptures."}
        />
        <StaticImage
          src="../images/gallery/kiln1.jpg"
          quality={95}
          alt={"Several clay objects ready for the oven."}
        />
        <StaticImage
          src="../images/gallery/lady2.jpg"
          quality={95}
          alt={"A female clay sculpture lying down, from front."}
        />
      </div>
      <div className="column">
        <StaticImage
          src="../images/gallery/custom2.jpg"
          quality={95}
          alt={"Seven clay figures and a dog on a couch."}
        />
        <StaticImage
          src="../images/gallery/kiln2.jpg"
          quality={95}
          alt={"Several clay objects ready for the oven."}
        />
        <StaticImage
          src="../images/gallery/work2.jpg"
          quality={95}
          alt={"The artist working on floral clay patterns."}
        />
        <StaticImage
          src="../images/gallery/lady3.jpg"
          quality={95}
          alt={"A female clay sculpture lying down."}
        />
        <StaticImage
          src="../images/gallery/work3.jpg"
          quality={95}
          alt={"The artist working on figures for a nativity scene."}
        />
      </div>
    </div>
  </Layout>
)

export default IndexPage
