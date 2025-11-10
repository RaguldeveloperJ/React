import React, { useState } from "react";
import TouchEvent from "./TouchEvent";

const Formevent = () => {
  let [form, setForm] = useState("");

  let onblur = () => {
    setForm("Input field is blurred");
  };
  let onFocus = () => {
    setForm("Input field is focused");
  };
  return (
    <>
      <div className="headclickevents">
        <h1>Form-Events</h1>
      </div>
      <div className="mainclickevents">
        <div className="clickEvent">
          <h2>{form}</h2>
          <input
            type="text"
            placeholder="Type something..."
            onBlur={onblur}
            onFocus={onFocus}
          />
        
        </div>
      </div>
      <hr />
      <TouchEvent />
    </>
  );
};

export default Formevent;
