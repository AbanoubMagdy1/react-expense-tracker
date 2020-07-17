import React,{useContext} from 'react'
import TodoForm from './TodoForm';
import Todos from './Todos'
import './TodoApp.css'
import arrayMove from 'array-move'
import {TodosContext, DispatchContext} from './Context/TodosContext'

function TodoApp(){
    const todos = useContext(TodosContext)
    const dispatch = useContext(DispatchContext)
    const onSortEnd = ({oldIndex, newIndex}) => {
        const newTodos = arrayMove(todos, oldIndex, newIndex);
        dispatch({type : "REARRANGE", todos : newTodos})
    }
    return (
        <div className="TodoApp">
            <h1>Todo app</h1>
            <TodoForm/>
            <Todos 
                onSortEnd={onSortEnd}
                axis="y"
                distance={20}
            />
        </div>
    )
}

export default TodoApp