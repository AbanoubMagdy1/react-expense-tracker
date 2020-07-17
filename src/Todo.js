import React, {useState, useEffect, useContext, memo} from 'react'
import "./Todo.css"
import {SortableElement} from 'react-sortable-hoc'
import DeleteIcon from '@material-ui/icons/Delete'
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator'
import Button from '@material-ui/core/Button'
import {DispatchContext} from './Context/TodosContext';


const Todo = SortableElement((props) =>{
    const dispatch  = useContext(DispatchContext);
    const [deleted, setDelete] = useState(false);
    const [editing, setEditing] = useState(false);
    const [todo, setTodo] = useState(props.todo)
    console.log("TODO RERENDERED", props.todo)
    useEffect(() => {
        setEditing(false)
        setTodo(props.todo);  
    },[props]);

    const handleSubmit = () => {
        dispatch({type : "EDIT", task : todo, index : props.i})
    }
    const removal = () => {
        setDelete(true);
        setTimeout(() => {
            setDelete(false)
            dispatch({type : "REMOVE", task : props.todo})
        },400)
    }
    return (
        <div className={`Todo ${deleted ? 'disable' : ''}`}>  
            <DeleteIcon onClick={removal}/>
            <div className="body">
                { editing 
                ? (
                    <ValidatorForm
                        onSubmit={handleSubmit}
                    >
                    <TextValidator
                        label="Todo"
                        onChange={(e) => {setTodo(e.target.value)}}
                        value={todo}
                        autoFocus
                        validators={['required']}
                        errorMessages={['this field is required']}
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
                        onClick={() => {setEditing(true)}}
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

export default memo(Todo)