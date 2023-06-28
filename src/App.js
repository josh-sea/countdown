import React, { useState } from "react";
import CountdownTimer from "./components/countdown";
import { Container, Menu, Segment } from "semantic-ui-react";
import { Fireworks } from "@fireworks-js/react";
import RoyGame from "./components/roygame";

const App = () => {
  const [activeItem, setActiveItem] = useState("countdown");

  return (
    <>
      <Menu secondary>
        <Menu.Item
          name="countdown"
          active={activeItem === "countdown"}
          onClick={() => setActiveItem("countdown")}
        />
        <Menu.Item
          name="roy"
          active={activeItem === "roy"}
          onClick={() => setActiveItem("roy")}
        />
      </Menu>
      {activeItem === "roy" && (
        <Segment basic style={{ height: "90vh" }}>
          <RoyGame />
        </Segment>
      )}
      {activeItem === "countdown" && (
        <Segment
          basic
          style={{
            height: "95vh",
            marginTop: 0,
            paddingTop: 0,
          }}
        >
          <Fireworks
            options={{
              rocketsPoint: {
                min: 0,
                max: 100,
              },
            }}
            style={{
              left: 0,
              width: "100%",
              height: "95vh",
              position: "fixed",
              background: "#000",
            }}
          />
          <CountdownTimer />
        </Segment>
      )}
    </>
  );
};

export default App;
