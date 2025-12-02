import React, { useRef } from 'react';

function UncontrolledExample() {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Entered Name: " + inputRef.current.value);
    console.log(inputRef.current.value);
    
  };

  return (
    <>
      <h2>Uncontrolled Component</h2>

      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          ref={inputRef}     
        />
        <button type="submit">Submit</button>
    
        
      </form>
    </>
  );
}

export default UncontrolledExample;
