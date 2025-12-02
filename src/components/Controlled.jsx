import React, { useState } from 'react';

function ControlledExample() {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Entered Name: " + name);
  };

  return (
    <>
      <h2>Controlled Component</h2>

      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={name}          
          onChange={handleChange} 
        />
        <button type="submit">Submit</button>
        <h2>{name}</h2>
      </form>
    </>
  );
}

export default ControlledExample;
