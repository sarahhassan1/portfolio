import "./App.css";
import React from "react";
// import background from "./photo.jpg";
import profilepic from "./pp.jpg";
import { Image, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function App() {
  // class App extends Component {
  //   render() {
  //     const myStyle = {
  //       backgroundImage: `url(${background})`,
  //       height: "100vh",
  //       marginTop: "-70px",
  //       fontSize: "50px",
  //       backgroundSize: "cover",
  //       backgroundRepeat: "no-repeat",
  //     };

  return (
    <Container fluid>
      {/* <div style={myStyle}>
        <h1>GeeksForGeeks</h1>
      </div> */}

      {/* <Image width="1500" className="rounded mx-auto d-block" src="/.pp.jpg" /> */}
      <Row className="justify-content-md-center">
        <Col xs={12} sm={4} md={4}>
          <img src={profilepic} width="370" height="500" alt="" />
        </Col>
      </Row>

      {/* <div class="container-fluid">
        <img src={profilepic} justify="right" width="370" height="500" alt="" />
      </div> */}
    </Container>
  );
}

export default App;

// old react logo with linkedin hyperlink

// return (

// import logo from "./logo.svg";
// import "./App.css";
// import Container from "react-bootstrap/Container";

// function App() {
//   return (
//     <div className="App">
//       <Container fixed>
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             hi! my name is <code>sarah.hassan</code> and welcome to my
//             portfolio!
//           </p>
//           <a
//             className="App-link"
//             href="https://www.linkedin.com/in/sarah-hassan1/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             connect with me on LinkedIn
//           </a>
//         </header>
//       </Container>
//     </div>
//   );
// }

// export default App;
