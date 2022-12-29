import "./App.css";
import React from "react";
import background from "./photo.jpg";
import Container from "react-dom";
import Container from "@material-ui/core/Container";

function App() {
  // return (

  return (
    <Container maxWidth="sm">
      <Typography
        component="div"
        style={{
          backgroundColor: "Orange",
          height: "100vh",
        }}
      >
        will this work? who knows
      </Typography>
    </Container>

    // <Container>
    //   <div>
    //     object fit
    //     <img src={background} width="500" height="600" alt="" />
    //   </div>
    // </Container>
  );
}

//     <div
//       style={{
//         width: "500%",
//         height: "600%",
//         backgroundImage: `url(${background})`,
//       }}
//     >
//       Hello World
//     </div>
//   );
// }

export default App;
