import React, { useState, useEffect } from "react";
import { Header, Segment } from "semantic-ui-react";

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState("");
  const [event, setEvent] = useState("");

  useEffect(() => {
    const targetDates = [
      {
        event: "Joe and Josh's Bromantic Weekend Extravaganza",
        date: new Date("June 23, 2023 20:00:00 EDT").getTime(),
      },
      {
        event: "Brooks-Cocciardi Fourth of July Cape Cod Adventure",
        date: new Date("July 1, 2023 8:00:00 EDT").getTime(),
      },
      {
        event: "Dr. Love's & Amelia Rose's Birthday!!!!!",
        date: new Date("July 25, 2023 8:00:00 EDT").getTime(),
      },
      {
        event: "Josh's Birthday!!!!",
        date: new Date("August 14, 2023 8:00:00 EDT").getTime(),
      },
      {
        event: "Campbell's Birthday!!!!",
        date: new Date("August 23, 2023 8:07:00 EDT").getTime(),
      },
      {
        event: "Josh and Ashley's Wedding Anniversary!!!!",
        date: new Date("August 30, 2023 14:00:00 EDT").getTime(),
      },
    ];

    const sortByClosestEvent = (targetDates) => {
      const currentDate = new Date().getTime();

      targetDates.sort((a, b) => {
        return a.date - b.date;
      });

      const closestEvent = targetDates.find((targetDate) => {
        return targetDate.date - currentDate >= 0;
      });

      return closestEvent;
    };

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const getEvent = sortByClosestEvent(targetDates);
      const targetDate = getEvent.date;
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setCountdown("Countdown Complete, refresh for the next event!");
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        setEvent(getEvent.event);
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
        {event}
      </Header>
      <Header as="h3" style={{ color: "white" }}>
        {countdown}
      </Header>
    </Segment>
  );
};

export default CountdownTimer;
