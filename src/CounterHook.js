import React, {useReducer} from 'react'
import Button from '@material-ui/core/Button'

function CounterUseReducer(){
    const reducer = (state, action) => {
        switch(action.type){
            case 'increase' :
                return {counter : state.counter++}
            case 'decrease' :
                return {counter : state.counter--}
            default :
                throw new Error()        
        }
    }
    const [state, dispatch] = useReducer(reducer, {counter : 0});
    return (
        <div>
            <h1>The counter is : {state.counter}</h1>
            <Button
                variant='contained'
                color='primary'
                onClick={() => dispatch({type : 'decrease'})}
            >
                Subtract 1
            </Button>
            <Button
                variant='contained'
                color='primary'
                onClick={() => dispatch({type : 'increase'})}
            >
                Add 1
            </Button>
        </div>
    )
}

export default CounterUseReducer;