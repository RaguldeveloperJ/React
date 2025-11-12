import React, { useState } from "react";

const Props = (prop) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  let data = () => {
    setName(prop.name);
    setAge(prop.age);
    setCity(prop.city);
  };
  return (
    <>
      <div className="prop">
        <button className="btn" onClick={data}>
          Click
        </button>
        <div className="prop-name">
          <h3>
            <b>Name :</b> {name}
          </h3>
          <h3>
            <b>Age :</b> {age}
          </h3>
          <h3>
            <b>City :</b> {city}
          </h3>
        </div>
      </div>
    </>
  );
};

export default Props;
