import React, { useState, useEffect } from "react";
import { Header, Segment } from "semantic-ui-react";

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const targetDate = new Date("June 23, 2023 20:00:00 EDT").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setCountdown("Countdown Complete");
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Segment
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "rgba(0,0,0,0)",
        flexDirection: "column",
      }}
    >
      <Header as="h2" style={{ color: "white" }}>
        Joe and Josh Weekend Extravagenza
      </Header>
      <Header as="h3" style={{ color: "white" }}>
        {countdown}
      </Header>
    </Segment>
  );
};

export default CountdownTimer;
