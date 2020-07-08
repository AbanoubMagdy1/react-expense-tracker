import { useState } from 'react';

function useInput(initialVal = ""){
    const [input, setInput] = useState(initialVal);
    const handleInput = (e) => {
        setInput(e.target.value)
    }
    return [input, handleInput]
}
export default useInput;