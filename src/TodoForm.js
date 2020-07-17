import React, {useState, useContext, memo} from 'react'
import Button from '@material-ui/core/Button'
import "./TodoForm.css" 
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator'
import {DispatchContext} from './Context/TodosContext'


function TodoForm(){
    const dispatch = useContext(DispatchContext)
  
    const [todo, setTodo] = useState("")

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleSubmissoin = () => {
        dispatch({type : "ADD", task : todo});
        setTodo("");
    }
    console.log("TODO FORM RENDER")
    return (
        <div className="TodoForm">
            <ValidatorForm
                style={{padding : "0.5rem 1rem"}}
                onSubmit={handleSubmissoin}
            >
                <TextValidator
                    
                    label="Todo"
                    onChange={handleChange}
                    value={todo}
                    fullWidth
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <Button 
                    style={{marginLeft : "1rem"}}
                    type="submit"
                    variant='contained'
                    color="primary"    
                >
                    Submit
                </Button>
            </ValidatorForm>

        </div>
    )
}

export default memo(TodoForm)