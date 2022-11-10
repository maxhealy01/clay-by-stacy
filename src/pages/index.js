import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import GalleryImage from "../components/GalleryImage/GalleryImage"
import Layout from "../components/Layout/Layout"
import Seo from "../components/seo"
import "./styles/gallery.css"

import lady from "../images/gallery/lady.jpg"
import lady2 from "../images/gallery/lady2.jpg"
import lady3 from "../images/gallery/lady3.jpg"
import custom from "../images/gallery/custom1.jpg"
import custom2 from "../images/gallery/custom2.jpg"
import work from "../images/gallery/work1.jpg"
import work2 from "../images/gallery/work2.jpg"
import work3 from "../images/gallery/work3.jpg"
import kiln from "../images/gallery/kiln1.jpg"
import kiln2 from "../images/gallery/kiln2.jpg"

const IndexPage = () => {
  const rowOneImgs = [
    {
      src: lady,
      alt: "A female clay sculpture lying down.",
    },
    {
      src: custom,
      alt: "Several objects decorated with floral clay patterns.",
    },
    {
      src: work,
      alt: "The artist working on one of her sculptures.",
    },
    {
      src: kiln,
      alt: "Several clay objects ready for the oven.",
    },
    {
      src: lady2,
      alt: "A female clay sculpture lying down, from front.",
    },
  ]
  const rowTwoImgs = [
    {
      src: custom2,
      alt: "Seven clay figures and a dog on a couch.",
    },
    {
      src: kiln2,
      alt: "Several clay objects ready for the oven.",
    },
    {
      src: work2,
      alt: "The artist working on floral clay patterns.",
    },
    {
      src: lady3,
      alt: "A female clay sculpture lying down.",
    },
    {
      src: work3,
      alt: "The artist working on figures for a nativity scene.",
    },
  ]

  return (
    <Layout>
      <Seo title="Home" />
      <div className="row">
        <div className="column">
          {rowOneImgs.map(img => (
            <GalleryImage img={img} />
          ))}
        </div>
        <div className="column">
          {rowTwoImgs.map(img => (
            <GalleryImage img={img} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
