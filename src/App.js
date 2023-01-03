import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import profilepic from "./pp.jpg";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container className="m-5 p-5" fluid>
      <Row
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Col>
          <h1 className="mb-14" style={{ fontSize: "5rem", color: "white" }}>
            Frontend <div></div> Developer
          </h1>
          <h3 className="mb-14" style={{ fontSize: "25px", color: "white" }}>
            {" "}
            I enjoy developing high-quality front-end products with excellent
            user experiences.
          </h3>{" "}
        </Col>
        <Col>
          <img
            className="profilepic"
            src={profilepic}
            width="370"
            height="500"
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
