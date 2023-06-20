import React from "react";
import CountdownTimer from "./components/countdown";
import { Container } from "semantic-ui-react";
import { Fireworks } from "@fireworks-js/react";

function App() {
  return (
    <Container fluid>
      <Fireworks
        options={{
          rocketsPoint: {
            min: 0,
            max: 100,
          },
        }}
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          position: "fixed",
          background: "#000",
        }}
      />
      <CountdownTimer />
    </Container>
  );
}

export default App;
