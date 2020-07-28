import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel } from "react-bootstrap"
import { Link } from "gatsby"
import "../components/styles.css"
import Layout from "../components/layout"

export default class navbar extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Carousel className="carouselDiv text-center mx-auto d-block img-fluid ">
            <Carousel.Item className="carouselItem">
              <img
                src="https://i.imgur.com/X14ndHi.jpg text=First slide"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Framed Mirrors</h3>
                <p>Moen Inspirations</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
              <img
                src="https://i.imgur.com/6AiZRFG.jpg text=Second slide"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Framed Mirrors</h3>
                <p>953129 WB</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
              <img
                src="https://i.imgur.com/TcdLOmP.jpg text=Third slide"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Framed Mirrors</h3>
                <p>953543 WBS</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
              <img src="https://i.imgur.com/1sMNTcb.jpg"></img>
              <Carousel.Caption>
                <h3>Framed Mirrors</h3>
                <p>952935</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
              <img src="https://i.imgur.com/GRHR8Sx.jpg"></img>
              <Carousel.Caption>
                <h3>Framed Mirrors</h3>
                <p>952636 WB</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
              <img src="https://i.imgur.com/S4ZVuDz.jpg"></img>
              <Carousel.Caption>
                <h3>Framed Mirrors</h3>
                <p>952635 SG</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
              <img src="https://i.imgur.com/9vADX5U.jpg"></img>
              <Carousel.Caption>
                <h3>Framed Mirrors</h3>
                <p>952532 WBB</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
              <img src="https://i.imgur.com/LLLib0V.jpg"></img>
              <Carousel.Caption>
                <h3>Framed Mirrors</h3>
                <p>952531 WBG</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
              <img src="https://i.imgur.com/rxmrcNd.jpg"></img>
              <Carousel.Caption>
                <h3>Framed Mirrors</h3>
                <p>952431 WBW</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
              <img src="https://i.imgur.com/2GtDDXI.jpg"></img>
              <Carousel.Caption>
                <h3>Framed Mirrors</h3>
                <p>9532</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
              <img src="https://i.imgur.com/nJqP1Hk.jpg"></img>
              <Carousel.Caption>
                <h3>Framed Mirrors</h3>
                <p>9531 WB</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
              <img src="https://i.imgur.com/v8rBMF2.jpg"></img>
              <Carousel.Caption>
                <h3>Framed Mirrors</h3>
                <p>9508</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Layout>
      </div>
    )
  }
}
