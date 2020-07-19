import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel } from "react-bootstrap"
import { Link } from "gatsby"
import "../components/styles.css"

export default class navbar extends Component {
  render() {
    return (
      <div className="carouselDiv">
        <Carousel>
          <Carousel.Item>
            <img
              src="https://i.imgur.com/sIrkIER.jpg text=First slide"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Shower Doors</h3>
              <p>3/8" Heavy Glass</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://i.imgur.com/LnIXxEL.jpg text=Second slide"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Shower Doors</h3>
              <p>Hydroslide 180</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://i.imgur.com/9Eif3Xf.jpg text=Third slide"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Shower Doors</h3>
              <p>Hydroslide 90</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.imgur.com/lb1SoR9.jpg"></img>
            <Carousel.Caption>
              <h3>Shower Doors</h3>
              <p>Bypass Unit 6000 Shw 1</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.imgur.com/jMXqhCH.jpg"></img>
            <Carousel.Caption>
              <h3>Shower Doors</h3>
              <p>Bypass Unit 6000 Shw 2</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.imgur.com/IKgJz9u.jpg"></img>
            <Carousel.Caption>
              <h3>Shower Doors</h3>
              <p>Bypass Unit 6000 Shw ERS</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.imgur.com/DMQ74zY.jpg"></img>
            <Carousel.Caption>
              <h3>Shower Doors</h3>
              <p>Kwikstal Unit Freestyle Swg Neo E</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.imgur.com/UdL60Xt.jpg"></img>
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.imgur.com/Q1wBrvw.jpg"></img>
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.imgur.com/07pj24H.jpg"></img>
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.imgur.com/DtsGW0x.jpg"></img>
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.imgur.com/MH7IkV5.jpg"></img>
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.imgur.com/XxOdmzs.jpg"></img>
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.imgur.com/3VtdhQ7.jpg"></img>
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.imgur.com/7PBX5sc.jpg"></img>
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.imgur.com/iXGRglu.jpg"></img>
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.imgur.com/1lqAuot.jpg"></img>
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://imgur.com/iYOYHIe.jpg"></img>
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}
