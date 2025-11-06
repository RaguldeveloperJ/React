import React, { useState } from 'react';


export default function Count() {
    let [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }
    function decrement() {
        setCount(count - 1);
    }
    function Reset() {
        setCount(0);
    }


    return (
        <>
            <div className='Maincount'>
                <h1>Count:{count}</h1>
                <div className='count'>
                    <button onClick={increment}>Increment</button>
                    <button onClick={decrement}>Decrement</button>
                    <button onClick={Reset}>Reset</button>
                </div>
            </div>

        </>
    )


}