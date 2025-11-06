import React, { useState } from "react";

const TouchEvent = () => {
  let [touch, setTouch] = useState("");
  let handleTouchStart = () => {
    setTouch("green");
  };
  let handleTouchEnd = () => {
    setTouch("red");
  };
  let handleTouchMove = () => {
    setTouch("yellow");
  };
  return (
    <>
      <div className="headclickevents">
        <h2>Touch-Events</h2>
        <div className="mainclickevents">
          <div className="clickEvent">
            <div
              className="touchbox"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onTouchMove={handleTouchMove}
              style={{ backgroundColor: touch,border:"2px solid black", height:"150px", width:"150px", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"20px", fontWeight:"bold", userSelect:"none" }}>
              Touch Here
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TouchEvent;
