import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel } from "react-bootstrap"
import { Link } from "gatsby"

export default class navbar extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              src="https://i.imgur.com/sIrkIER.jpg text=First slide"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://i.imgur.com/LnIXxEL.jpg text=Second slide"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://i.imgur.com/9Eif3Xf.jpg text=Third slide"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.imgur.com/lb1SoR9.jpg"></img>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.imgur.com/jMXqhCH.jpg"></img>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.imgur.com/IKgJz9u.jpg"></img>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.imgur.com/DMQ74zY.jpg"></img>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.imgur.com/UdL60Xt.jpg"></img>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.imgur.com/Q1wBrvw.jpg"></img>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.imgur.com/07pj24H.jpg"></img>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.imgur.com/DtsGW0x.jpg"></img>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.imgur.com/MH7IkV5.jpg"></img>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.imgur.com/XxOdmzs.jpg"></img>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.imgur.com/3VtdhQ7.jpg"></img>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.imgur.com/7PBX5sc.jpg"></img>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.imgur.com/iXGRglu.jpg"></img>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.imgur.com/1lqAuot.jpg"></img>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://imgur.com/iYOYHIe"></img>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}
