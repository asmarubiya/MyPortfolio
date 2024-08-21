import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVercel,
  SiJupyter,
  SiRstudio,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /> {/* Visual Studio Code */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel /> {/* Vercel */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter /> {/* Jupyter */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRstudio /> {/* R Studio */}
      </Col>
    </Row>
  );
}

export default Toolstack;
