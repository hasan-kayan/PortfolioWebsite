import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import udemy from "../../Assets/Projects/udemy.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="CodeStandartsTool"
              description="A tool that helps us to write better codes with standart, checks the project. This tool later will allow user to declare own coding standart and enforce them in projects while commits."
              ghLink="https://github.com/hasan-kayan/CodeStandartsTool"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="MeshSubtractor3D"
              description="This project provides a set of utility classes that extend the functionality of Three.js geometries with Constructive Solid Geometry (CSG) capabilities, using the three-csg-ts library. Our goal is to provide an easy-to-use interface for performing complex geometry operations such as union, subtraction, and intersection."
              ghLink="https://github.com/hasan-kayan/MeshSubtractor3D"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Custom Activities For UiPath"
              description="Here you can find each activity set, source codes, nuget packages and development process notes. At this folder you are going to finde completed activities but at this folder activities developed in different project structures because of that each activty has its own nuget package. These activities are the completed ones, not the all Excel Activities."
              ghLink="https://github.com/hasan-kayan/Custom_Activities_For_UiPath"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={udemy}
              isBlog={false}
              title="Custom Activities For UiPath"
              description="This is a Python script that scrapes Udemy coupons from three different websites: real.discount, discudemy.com, and couponscorpion.com. It uses Selenium and BeautifulSoup libraries to navigate the webpages, extract data and write to a CSV file."
              ghLink="https://github.com/hasan-kayan/Udemy_Coupon_Scrapper"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
