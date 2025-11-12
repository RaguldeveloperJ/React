import React, { useState, useEffect } from "react";

const Useeffect = () => {
  let [count, setCount] = useState(0);
  useEffect(() => {
    if (count > 5) {
      alert("Count is More than 5");
    }
  }, [count]);

  const clickhandler = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>
        <div className="useeffect-hook">
          <h1>UseEffect Hook </h1>
          <h2>Count: {count}</h2>
          <button onClick={clickhandler}>Increment Count</button>
        </div>
      </div>
    </>
  );
};

export default Useeffect;
