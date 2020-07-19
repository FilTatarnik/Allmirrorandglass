import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BathAccessories = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Bath Accessories</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BathAccessories
