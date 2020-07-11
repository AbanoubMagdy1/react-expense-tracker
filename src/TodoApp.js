import React from 'react'
import useLocalStorageState from './Hooks/useLocalStorageState'
import TodoForm from './TodoForm';
import Todos from './Todos'
import './TodoApp.css'
import arrayMove from 'array-move'

function TodoApp(){

    const starterTodos = ["Wash the car", "Study Your lessons", "Feed the dog"];
    const [todos, setTodos] = useLocalStorageState("todos", starterTodos);
    const handleSubmit = (todo) => {
        setTodos([...todos, todo])
    }

    const onSortEnd = ({oldIndex, newIndex}) => {
        const newTodos = arrayMove(todos, oldIndex, newIndex);
        setTodos(newTodos)
    }
    const remove = (todo) => {
        console.log(todos, todo)
        setTodos(todos.filter(t => t !== todo))
    }
    const edit = (todo, index) => {
        console.log(todo, index)
        const newTodos = todos.map((t, i) => i === index ? todo : t)
        setTodos(newTodos)
    }
    return (
        <div className="TodoApp">
            <h1>Todo app</h1>
            <TodoForm
                todos={todos}
                handleSubmit={handleSubmit}
            />
            <Todos
                todos={todos}
                onSortEnd={onSortEnd}
                axis="y"
                distance={20}
                remove={remove}
                edit={edit}
            />
        </div>
    )
}

export default TodoApp