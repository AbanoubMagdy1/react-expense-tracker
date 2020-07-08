import React, {useState} from 'react'

function CounterHook(){
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h1>The counter is : {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Add 1</button>
        </div>
    )
}

export default CounterHook;