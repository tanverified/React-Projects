import React, { useState } from "react";
import "./App.css";

const App = () => {
  let time = new Date().toLocaleTimeString();

  const [currentTime, setCurrentTime] = useState(time);

  setInterval(() => {
    time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  }, 1000);

  return (
    <>
      <div className="clock">{currentTime}</div>
    </>
  );
};

export default App;
