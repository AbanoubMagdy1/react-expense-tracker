import { useEffect, useReducer} from 'react';

export default function useLocalStorageReducer(reducer, key, initVal){
    const [state, dispatch] = useReducer(reducer, initVal, () => {
        let val;
        try{
            val = JSON.parse(localStorage.getItem(key), String(initVal));
        } catch (e){
            val = initVal;
        }
        return val;
    })
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    },[state, key]);
    return [state, dispatch]
}