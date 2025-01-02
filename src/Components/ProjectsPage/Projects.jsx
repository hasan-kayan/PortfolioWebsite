import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import projectData from "./Projects.json";

// Import images
import editor from "../../Assets/Projects/codeEditor.png";
import three from "../../Assets/Projects/three.png";
import uipath from "../../Assets/Projects/uipath.jpeg";
import udemy from "../../Assets/Projects/udemy.png";
import wise from "../../Assets/Projects/wise.jpg";
import kend from "../../Assets/Projects/kend.jpg";

// Create an object to map image keys to imports
const images = {
  editor: editor,
  three: three,
  uipath: uipath,
  udemy: udemy,
  wise: wise,
};

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectData.map((project, index) => (
            <Col key={index} md={4} className="project-card">
              <ProjectCard
                imgPath={images[project.imgKey]} // Use the mapped image
                isBlog={project.isBlog}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
