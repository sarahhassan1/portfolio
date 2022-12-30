import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import background from "./photo.jpg";
import profilepic from "./pp.jpg";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
// import { Typography } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container fluid>
      <Row
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Col xs={12} sm={4} md={4}>
          <img src={profilepic} width="370" height="500" alt="" />
        </Col>
      </Row>

      <Container className="p-10">
        <Row
          style={{
            flexDirection: "row-reverse",
            justifyContent: "flex-end",
          }}
        >
          <h1 className=".mb-14" style={{ fontSize: "5rem", color: "white" }}>
            Frontend <div></div> Developer
          </h1>
          <h3 style={{ fontSize: "25px", color: "white" }}>
            {" "}
            I enjoy developing high-quality front-end products with excellent
            user experiences.
          </h3>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
