import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import Seo from "../components/seo"
import "./styles/about.css"

const CustomPage = () => {
  return (
    <Layout>
      <Seo title="Custom" />
      <main className="page">
        <div className="custom-row">
          <div className="card">
            <h4>Dogs</h4>
            <Link to="/custom/dogs">
              <div className="img-holder">
                <p>futureimage</p>
                {/* <img src={sku.images} alt={sku.description} /> */}
              </div>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default CustomPage
