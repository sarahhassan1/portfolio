import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import profilepic from "./pp.jpg";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { rgbToHex } from "@mui/material";
import { yellow } from "@mui/material/colors";

function App() {
  return (
    <Container className="m-5 p-5" fluid>
      {" "}
      <Row
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10vh",
        }}
      >
        <Col md={{ offset: 1 }}>
          {" "}
          {/* <div className="blackoverlay"> */}
          <p class="font-weight-bold">
            {" "}
            <h1
              className="blackoverlay"
              style={{ fontSize: "5.5rem", color: "yellow" }}
            >
              Frontend <div></div>
            </h1>{" "}
          </p>
          <div class="text-nowrap">
            {" "}
            <p class="font-weight-bold">
              {" "}
              <h1
                className="blackoverlay"
                style={{ fontSize: "5.5rem", color: "white" }}
              >
                {" "}
                Developer
              </h1>{" "}
            </p>
          </div>
          <div class="space"> </div>
          <h3
            class="text-nowrap"
            className="blackoverlay"
            style={{ fontSize: "25px", color: "white" }}
          >
            {" "}
            I enjoy developing{" "}
            <div style={{ color: "yellow" }}>high-quality</div>front-end
            products with <div style={{ color: "yellow" }}>excellent</div> user
            experiences.
          </h3>
          <p class="text-nowrap" className="blackoverlay">
            <h3 style={{ fontSize: "25px", color: "white" }}>
              {" "}
              I enjoy developing
            </h3>{" "}
            <p style={{ fontSize: "25px", color: "yellow" }}> high-quality </p>
            <h3 style={{ fontSize: "25px", color: "white" }}>
              {" "}
              front-end products with
            </h3>
            <h3 style={{ fontSize: "25px", color: "yellow" }}> excellent </h3>
            <h3 style={{ fontSize: "25px", color: "white" }}>
              {" "}
              user experiences.
            </h3>{" "}
          </p>
          {/* </div>{" "} */}
        </Col>
        <Col md={{ offset: 1 }}>
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
