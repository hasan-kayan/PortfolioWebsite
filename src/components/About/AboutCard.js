import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hasan KAYAN </span>
            from <span className="purple"> Ankara, Türkiye</span>
            <br />
            I am currently employed as a full stack software developer at
            Poliark.
            <br />I am workin on a AI based web application that allows users to
            create architectural designs with a great user experience. My main
            duty at this project is developing the design mechanism and the
            backend of the application. You can vist{" "}
            <a href="kend.ai" style={{ color: "purple" }}>
              {" "}
              kend.ai
            </a>{" "}
            to see the project.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
