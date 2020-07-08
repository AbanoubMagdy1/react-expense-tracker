import React, {useState} from 'react';
import useToggle from './Hooks/useToggle'

function Toggler(){
    const [isHappy, setIsHappy] = useToggle(true);
    const [isPlaying, setIsPlaying] = useToggle(true);
    
    return (
        <div>
            <h1 onClick={setIsHappy}>
                {isHappy ? "I am happy" : "I am sad"}
            </h1>
            <h1 onClick={setIsPlaying}>
                {isPlaying ? "Playing" : "Studying"}
            </h1>
        </div>
    )
}

export default Toggler