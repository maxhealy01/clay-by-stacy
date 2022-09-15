import { StaticImage } from "gatsby-plugin-image"
import React from "react"

import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo"
import "./styles/about.css"

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About" />
      <main className="page">
        <StaticImage src="../images/portrait.jpg" quality={95} width={200} />
        <p>
          I'm baby messenger bag salvia thundercats, retro sriracha ugh iPhone
          tonx pop-up roof party drinking vinegar cold-pressed shaman. Ramps
          retro gochujang prism try-hard sartorial everyday carry brunch you
          probably haven't heard of them. Helvetica typewriter gastropub
          gluten-free, marfa wayfarers selfies gochujang chambray jean shorts
          quinoa.
        </p>
        <p>
          Kale chips 3 wolf moon paleo freegan mumblecore. Tumeric tattooed man
          bun tbh fixie knausgaard, sartorial vape hell of. Tousled knausgaard
          cray, intelligentsia vegan messenger bag typewriter subway tile.
          Vexillologist crucifix flannel ethical. Echo park pabst next level
          coloring book post-ironic letterpress neutra actually 8-bit. Health
          goth banjo coloring book tonx. Godard copper mug single-origin coffee,
          activated charcoal flexitarian chillwave pop-up DSA hella actually
          enamel pin.
        </p>
        <p>
          Cray readymade lomo man braid poke. Food truck wayfarers viral green
          juice yuccie, celiac prism leggings craft beer portland gentrify
          bespoke lyft wolf.
        </p>
      </main>
    </Layout>
  )
}

export default AboutPage
