import React, { useState } from "react";
import MouseEvent from "./MouseEvent";

const Events = () => {
  let [clicks, setClicks] = useState("Click the Button");
  let click = () => {
    setClicks("Button Clicked");
  };

  let [doubleClicks, setDoubleClicks] = useState(0);
  let double = () => {
    setDoubleClicks(doubleClicks + 1);
  };
  return (
    <>
    <div className="headclickevents">
      <h1>Click-Events</h1>
    </div>
      <div className="mainclickevents">
        
        <div className="clickEvent">
          <h2>{clicks}</h2>
          <button onClick={click}>onclick</button>
        </div>
        <div className="clickEvent">
          <h2>{doubleClicks}</h2>
          <button onDoubleClick={double}>onDoubleclick</button>
        </div>
      </div>
      <hr />
      <MouseEvent />
    </>
  );
};

export default Events;
