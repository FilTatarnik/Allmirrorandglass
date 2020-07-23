import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel } from "react-bootstrap"
import { Link } from "gatsby"
import "../components/styles.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

const CommercialStorefront = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Commercial Storefront</h1>
    <Carousel className="carouselDiv text-center mx-auto d-block img-fluid "></Carousel>
  </Layout>
)

export default CommercialStorefront
