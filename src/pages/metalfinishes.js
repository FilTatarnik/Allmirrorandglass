import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel } from "react-bootstrap"
import { Link } from "gatsby"
import "../components/styles.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

const MetalFinishes = () => (
  <div>
    <Layout>
      <Carousel className="carouselDiv text-center mx-auto d-block img-fluid ">
        <Carousel.Item className="carouselItem">
          <img
            src="https://i.imgur.com/IpOMMTD.jpg"
            text="First slide"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Shower Doors</h3>
            <p>7000 Framed Series</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselItem">
          <img
            src="https://i.imgur.com/CYfrE6p.jpg"
            text="Second slide"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Shower Doors</h3>
            <p>Kwikstal Unit Prov Prestige Swing |</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselItem">
          <img
            src="https://i.imgur.com/AxrvTXK.jpg"
            text="Third slide"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Shower Doors</h3>
            <p>1/4" Junior Geneva Series</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselItem">
          <img src="https://i.imgur.com/h9ozKlf.jpg"></img>
          <Carousel.Caption>
            <h3>Shower Doors</h3>
            <p>Bypass - Frameless Style Series</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselItem">
          <img src="https://i.imgur.com/h3lE0WX.jpg"></img>
          <Carousel.Caption>
            <h3>Shower Doors</h3>
            <p>Bypass - Framed 7000 Series</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselItem">
          <img src="https://i.imgur.com/y0Z28Z8.jpg"></img>
          <Carousel.Caption>
            <h3>Shower Doors</h3>
            <p>Hydroslide 90</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselItem">
          <img src="https://i.imgur.com/khDcPAr.jpg"></img>
          <Carousel.Caption>
            <h3>Shower Doors</h3>
            <p>Bypass Unit 6000 Shw 1</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselItem">
          <img src="https://i.imgur.com/XDdS7XA.jpg"></img>
          <Carousel.Caption>
            <h3>Shower Doors</h3>
            <p>Bypass Unit 6000 Shw ERS</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselItem">
          <img src="https://i.imgur.com/CmLQK1Y.jpg"></img>
          <Carousel.Caption>
            <h3>Shower Doors</h3>
            <p>Hydroslide 180</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselItem">
          <img src="https://i.imgur.com/9ce9y3O.jpg"></img>
          <Carousel.Caption>
            <h3>Shower Doors</h3>
            <p>Bypass Unit 6000 Shw 2</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselItem">
          <img src="https://i.imgur.com/xiZQ81R.jpg"></img>
          <Carousel.Caption>
            <h3>Shower Doors</h3>
            <p>3/8" Heavy Glass</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Layout>
  </div>
)

export default MetalFinishes
