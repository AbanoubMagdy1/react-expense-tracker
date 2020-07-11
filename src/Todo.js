import React, {useState, useEffect} from 'react'
import "./Todo.css"
import {SortableElement} from 'react-sortable-hoc'
import DeleteIcon from '@material-ui/icons/Delete'
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator'
import Button from '@material-ui/core/Button'

const Todo = SortableElement((props) =>{
    const [deleted, setDelete] = useState(false);
    const [edit, setEdit] = useState(false);
    const [todo, setTodo] = useState(props.todo)
   
    useEffect(() => {
        ValidatorForm.addValidationRule('unique', (value) => {
            console.log(props.todo)
            return props.todos.every(todo => todo !== value) || value === props.todo
        });    
    },[edit])

    useEffect(() => {
        setTodo(props.todo);
        setEdit(false);    
    },[props.todos]);
    const handleSubmit = () => {
        props.edit(todo, props.i)
    }
    const remove = () => {
        setDelete(true);
        setTimeout(() => {
            setDelete(false)
            props.remove(props.todo)
        },400)
    }
    return (
        <div className={`Todo ${deleted ? 'disable' : ''}`}>  
            <DeleteIcon onClick={remove}/>
            <div className="body">
                { edit 
                ? (
                    <ValidatorForm
                    onSubmit={handleSubmit}
                >
                    <TextValidator
                        label="Todo"
                        onChange={(e) => {setTodo(e.target.value)}}
                        value={todo}
                        autoFocus
                        validators={['required', 'unique']}
                        errorMessages={['this field is required', 'Todo is already existed']}
                    />
                    <Button 
                        type="submit"
                        variant='contained'
                        color="primary"    
                    >
                        Submit
                    </Button>
                </ValidatorForm>
                )
                : (
                <div>
                    <div className="text">
                        {props.todo}
                    </div>
                    <Button
                        onClick={() => {setEdit(true)}}
                        variant="contained"
                        color="secondary"
                    >
                        Edit    
                    </Button>   
                </div>
                )
                }
            </div>
            
        </div>
    )
})

export default Todo