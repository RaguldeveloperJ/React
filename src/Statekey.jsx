import React,{useState} from 'react'
import Formevent from './Formevent';

const Statekey = () => {
    let [state,setState]=useState("");

    let keyPress=(event)=>{
        setState("Key is preesedd")
    }
    let keyUp=()=>{
        setState("Key is up")
    }
    let keyDown=()=>{
        setState("Key is Down")
    }
  return (
    <>
       <div className="headclickevents">
        <h1>Key-Events</h1>
      </div>
      <div className="mainclickevents">
        <div className="clickEvent">
            <h2>{state}</h2>
          <input type="text" onKeyPress={keyPress} onKeyUp={keyUp} onKeyDown={keyDown}  placeholder='Type something...'/>
        </div>
      </div>
      <hr/>
      <Formevent/>
    </>
  )
}

export default Statekey