import {useState, useEffect} from 'react'

export default function(key, initVal){
    const [state, setState] = useState(() => {
        let val;
        try{
            val = JSON.parse(localStorage.getItem(key) || String(initVal))
        } catch(e){
            val = initVal
        }
        return val
    })
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    },[state,key])
    return [state, setState]
}