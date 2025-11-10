import React, { useState } from "react";
import Keys from "./Statekey";

const MouseEvent = () => {
  let [mouse, setMouse] = useState("over the Button");

  let mouses = () => {
    setMouse("Mouse Over");
  };
  let mouseout = () => {
    setMouse("Mouse Out");
  };

  return (
    <>
      <div className="headclickevents">
        <h1>Mouse-Events</h1>
      </div>
      <div className="mainclickevents">
        <div className="clickEvent">
          <h2>{mouse}</h2>
          <button onMouseOver={mouses} onMouseOut={mouseout}>
            onclick
          </button>
          
        </div>
      </div>
      <hr />
      <Keys />
    </>
  );
};

export default MouseEvent;
