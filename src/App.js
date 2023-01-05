import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import profilepic from "./pp.jpg";
import { Card, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
// import { rgbToHex } from "@mui/material";
// import { yellow } from "@mui/material/colors";

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
          {/* <Card> */}
          <div className="blackoverlay">
            <p class="font-weight-bold">
              {" "}
              <h1
                // className="blackoverlay"
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
                  class="text-nowrap"
                  // className="blackoverlay"
                  style={{ fontSize: "5.5rem", color: "white" }}
                >
                  {" "}
                  Developer
                </h1>{" "}
              </p>
            </div>
          </div>
          {/* </Card> */}
          <div class="space"> </div>
          <h3
            className="blackoverlay"
            style={{ fontSize: "25px", color: "white" }}
          >
            {" "}
            I enjoy developing{" "}
            <span style={{ color: "yellow" }}>high-quality </span> front-end
            products with <span style={{ color: "yellow" }}>excellent</span>{" "}
            user experiences.
          </h3>
          <span class="text-nowrap" className="blackoverlay"></span>
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
