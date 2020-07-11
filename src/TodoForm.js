import React, {useState, useEffect} from 'react'
import Button from '@material-ui/core/Button'
import "./TodoForm.css" 
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator'

function TodoForm(props){
    useEffect(() => {
        ValidatorForm.addValidationRule('unique', (value) => {
            return props.todos.every(todo => todo !== value)
        });
    })

    const [todo, setTodo] = useState("")

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleSubmit = () => {
        props.handleSubmit(todo);
        setTodo("");
    }
    return (
        <div className="TodoForm">
            <ValidatorForm
                style={{padding : "0.5rem 1rem"}}
                onSubmit={handleSubmit}
            >
                <TextValidator
                    
                    label="Todo"
                    onChange={handleChange}
                    value={todo}
                    fullWidth
                    validators={['required', 'unique']}
                    errorMessages={['this field is required', 'Todo is already existed']}
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

export default TodoForm