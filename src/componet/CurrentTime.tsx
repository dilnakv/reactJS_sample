import { useState, useEffect } from "react";

export const CurrentTime = () => {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    console.log("Component mounted");
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 10000);

    return () => {
      console.log("Component unmounted");
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial", marginTop: "20px" }}>
      <h2>Current Time</h2>
      <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{time}</p>
    </div>
  );
};
