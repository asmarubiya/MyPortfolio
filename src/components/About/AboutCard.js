import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Asma Rubiya </span>
            from <span className="purple"> Bhimavaram, India.</span>
            <br />
            I am currently pursuing B.tech 7th semester in the stream of Information Technology.
            <br />
            I am an Undergraduate at SRKR Engineering College.
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Solving Chegg Problems
            </li>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "You can be the master of your fate, You could be the master of your soul, but you have to realize that life is coming from you not at you"{" "}
          </p>
          <footer className="blockquote-footer">Timothee Chalamet</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
