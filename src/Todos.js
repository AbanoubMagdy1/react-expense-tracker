import React, {useContext} from 'react'
import Todo from './Todo'
import {SortableContainer} from 'react-sortable-hoc'
import "./Todos.css"
import {TodosContext} from './Context/TodosContext'
const Todos = SortableContainer((props) => {
    const todos = useContext(TodosContext)
    return (
        <div>
            {todos.map((todo, i) => {
                return (
                    <Todo
                        key={i}
                        i={i}
                        todo={todo}
                        index={i}
                    />
                )
            })}
        </div>
    )
})

export default Todos