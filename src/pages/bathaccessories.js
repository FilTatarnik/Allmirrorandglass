import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel } from "react-bootstrap"
import { Link } from "gatsby"
import "../components/styles.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BathAccessories = () => (
  <div>
    <Layout>
      <Carousel className="carouselDiv text-center mx-auto d-block img-fluid ">
        <Carousel.Item className="carouselItem">
          <img
            src="https://i.imgur.com/KaWTFRd.jpg"
            text="First slide"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Accessories</h3>
            <p>Vision Circular Push Pull</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselItem">
          <img src=" text=Second slide" alt="Second slide" />

          <Carousel.Caption>
            <h3>Accessories</h3>
            <p>Vision Clamp Round Bevel Edge</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselItem">
          <img src=" text=Third slide" alt="Third slide" />

          <Carousel.Caption>
            <h3>Accessories</h3>
            <p>Vision Push Pull</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselItem">
          <img src=""></img>
          <Carousel.Caption>
            <h3>Accessories</h3>
            <p>Vision Victorian Push Pull</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselItem">
          <img src=""></img>
          <Carousel.Caption>
            <h3>Accessories</h3>
            <p>Vision Swing Hinge Square Edge</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselItem">
          <img src=""></img>
          <Carousel.Caption>
            <h3>Accessories</h3>
            <p>Concerto Pull</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselItem">
          <img src=""></img>
          <Carousel.Caption>
            <h3>Accessories</h3>
            <p>Concerto Straight</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Layout>
  </div>
)

export default BathAccessories
