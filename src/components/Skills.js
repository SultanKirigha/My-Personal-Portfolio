import React, { Component }  from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter4 from "../assets/img/meter4.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>I strive to design solutions that improve the quality of life of millions of people.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image"/>
                                <h5>Web Development</h5>
                                <h6>90%</h6>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image"/>
                                <h5>Mobile App Development</h5>
                                <h6>98%</h6>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image"/>
                                <h5>UI/UX Design</h5>
                                <h6>95%</h6>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image"/>
                                <h5>Logo Design</h5>
                                <h6>84%</h6>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            {/* <img className='background-image-left' src={colorSharp}/> */}
        </section>
      )
}