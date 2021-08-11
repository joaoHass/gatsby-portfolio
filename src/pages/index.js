import * as React from "react"
import Layout from "../components/Layout/Layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
          alt="Mac Miller, the most dope forever, staring at the camera"
          src="../images/mac.jpg"
        />
      </Layout>
    </main>
  )
}
export default IndexPage
