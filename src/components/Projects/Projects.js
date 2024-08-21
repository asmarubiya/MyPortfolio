import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pathfindingV2 from "../../Assets/Projects/pathfindingV2.png"; // Replace with actual path
import java2048 from "../../Assets/Projects/java2048.png"; // Replace with actual path
import youtubeClone from "../../Assets/Projects/youtubeClone.png"; // Replace with actual path
import portfolio from "../../Assets/Projects/portfolio.png"; // Replace with actual path
import web3Research from "../../Assets/Projects/web3Research.png"; // Replace with actual path
import pathfindingV1 from "../../Assets/Projects/pathfindingV1.png"; // Replace with actual path

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
              imgPath={pathfindingV2}
              isBlog={false}
              title="Pathfinding Visualizer V2.0"
              description="An advanced pathfinding visualizer that demonstrates various algorithms for pathfinding, including A*, Dijkstra's, and more, with an improved user interface and additional features."
              ghLink="https://github.com/asmarubiya/Pathfinding-Visualizer2.0" // Replace with your actual link
              demoLink="https://pathfinding-visualizer-v2.vercel.app/" // Replace with your actual demo link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtubeClone}
              isBlog={false}
              title="YouTube Clone"
              description="A clone of YouTube built with React, featuring video playback, user authentication, and a video search functionality."
              ghLink="https://github.com/yourusername/youtube-clone" // Replace with your actual link
              demoLink="https://youtube-clone-demo.com" // Replace with your actual demo link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio Website"
              description="A personal portfolio website built with React and Node.js to showcase my projects and skills, featuring a responsive design and interactive elements."
              ghLink="https://github.com/asmarubiya/MyPortfolio" // Replace with your actual link
              demoLink="https://portfolio-demo.com" // Replace with your actual demo link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={java2048}
              isBlog={false}
              title="2048 Game with Java"
              description="A classic 2048 game implemented in Java, focusing on core Java components and optimization for a smooth gaming experience."
              ghLink="https://github.com/asmarubiya/2048game" // Replace with your actual link
              demoLink="https://github.com/asmarubiya/2048game/blob/main/README.md" // Replace with your actual demo link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={web3Research}
              isBlog={false}
              title="Web3 Research Paper"
              description="A research paper on the workings of the Internet and Web3 technologies, published on Zenodo. It explores the foundational aspects and future implications of Web3."
              ghLink="https://github.com/asmarubiya/Web3-ResearchPaper" // Replace with your actual link
              demoLink="https://zenodo.org/records/13319235" // Replace with your actual demo link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pathfindingV1}
              isBlog={false}
              title="Pathfinding Visualizer V1.0"
              description="An earlier version of the pathfinding visualizer, showcasing fundamental pathfinding algorithms and their visualization."
              ghLink="https://github.com/asmarubiya/PathFindingVisualiser" // Replace with your actual link
              demoLink="https://github.com/asmarubiya/PathFindingVisualiser/blob/main/README.md" // Replace with your actual demo link
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
