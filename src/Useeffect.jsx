import React, { useState, useEffect } from "react";

const Useeffect = () => {
  let [count, setCount] = useState(0);
  useEffect(() => {
    if (count >= 5) {
      alert("Count is 5");
    }
  }, [count]);
  return (
    <div className="useeffect-hook">
      <h1>UseEffect Hook Example</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default Useeffect;
