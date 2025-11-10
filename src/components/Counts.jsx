import React, { useState } from "react";
import Useeffect from "./Useeffect";

export default function Count() {
  let [count, setCount] = useState(0);

  let increment = () => {
    setCount(count + 1);
  };
  let decrement = () => {
    setCount(count - 1);
  };
  let reset = () => {
    setCount(0);
  };
  return (
    <>
      <div className="Maincount">
        <h1>Count:{count}</h1>
        <div className="count">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
      <Useeffect />
    </>
  );
}
