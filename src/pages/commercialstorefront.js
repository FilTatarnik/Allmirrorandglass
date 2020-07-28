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
    <Carousel className="carouselDiv text-center mx-auto d-block img-fluid ">
      <Carousel.Item className="carouselItem">
        <img
          src="https://i.imgur.com/0NYb58T.jpg text=First slide"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Commercial Storefront</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselItem">
        <img
          src="https://i.imgur.com/yNRerHg.jpg text=Second slide"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Commercial Storefront</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselItem">
        <img
          src="https://i.imgur.com/l0fvYRZ.jpg text=Third slide"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Commercial Storefront</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselItem">
        <img src="https://i.imgur.com/3Uwp7wG.jpg"></img>
        <Carousel.Caption>
          <h3>Commercial Storefront</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselItem">
        <img src="https://i.imgur.com/H5rcLJr.jpg"></img>
        <Carousel.Caption>
          <h3>Commercial Storefront</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselItem">
        <img src="https://i.imgur.com/pVqNOz3.jpg"></img>
        <Carousel.Caption>
          <h3>Commercial Storefront</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselItem">
        <img src="https://i.imgur.com/UkvdwcK.jpg"></img>
        <Carousel.Caption>
          <h3>Commercial Storefront</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselItem">
        <img src="https://i.imgur.com/6ozEGiy.jpg"></img>
        <Carousel.Caption>
          <h3>Commercial Storefront</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselItem">
        <img src="https://i.imgur.com/1gAShuY.jpg"></img>
        <Carousel.Caption>
          <h3>Commercial Storefront</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </Layout>
)

export default CommercialStorefront
