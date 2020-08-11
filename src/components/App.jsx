import React, { useState } from "react";

function App() {
  let timeString = new Date().toLocaleTimeString();
  const [time, getTime] = useState(timeString);

  function clickTime() {
    const newTime = new Date().toLocaleTimeString();
    getTime(newTime);
  }

  function everySec() {
    setInterval(clickTime, 1000);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={clickTime}>Get Time</button>
    </div>
  );
}

export default App;
