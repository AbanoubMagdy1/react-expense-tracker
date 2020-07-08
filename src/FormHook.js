import React from 'react';
import useInput from './Hooks/useInput'

function FormHook(){
    const [email, setEmail] = useInput();
    return (
        <div>
            <h3>The input value is : {email}</h3>
            <input type="text" value={email} onChange={setEmail}/>
        </div>
    )
}

export default FormHook