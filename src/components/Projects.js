import React, { Component }  from 'react';
import { Container, Row, Col, Tab, Nav  } from 'react-bootstrap';
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Music App Daily UI 10.png";
import projImg2 from "../assets/img/Advertising Agence Landing Page.png";
import projImg3 from "../assets/img/Frame.png";
import projImg4 from "../assets/img/Landing Page.png";
import projImg5 from "../assets/img/logo1.png";
import projImg6 from "../assets/img/Movie.png";
import projImg7 from "../assets/img/Food App.png";
import projImg8 from "../assets/img/Alert.png";
import projImg9 from "../assets/img/Prototype.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
      {
        title: "Mobile App",
        description: "UI Design",
        imgUrl: projImg1,
      },
      {
        title: "Agency Landing Page",
        description: "UI Design",
        imgUrl: projImg2,
      },
      {
        title: "Mock Up Design",
        description: "UI Design",
        imgUrl: projImg3,
      },
      {
        title: "Landing Page",
        description: "UI Design",
        imgUrl: projImg4,
      },
      {
        title: "Logo Design",
        description: "Logo Design",
        imgUrl: projImg5,
      },
      {
        title: "Movie App",
        description: "Mobile App ReactNative",
        imgUrl: projImg6,
      },
      {
        title: "Food App",
        description: "Mobile App Flutter",
        imgUrl: projImg7,
      },
      {
        title: "Alert UI Design",
        description: "UI/UX Design",
        imgUrl: projImg8,
      },
      {
        title: "Prototyping",
        description: "Figma",
        imgUrl: projImg9,
      },
    ];

    return (
        <section className="project" id="projects">
          <Container>
            <Row>
              <Col size={12}>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Projects</h2>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              projects.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
        </section>
      )
    }