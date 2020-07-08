import React from 'react'
import Todo from './Todo'
import {SortableContainer} from 'react-sortable-hoc'
import "./Todos.css"

const Todos = SortableContainer((props) => {
    return (
        <div>
            {props.todos.map((todo, i) => {
                return (
                    <Todo
                        key={i}
                        todo={todo}
                        todos={props.todos}
                        index={i}
                        i={i}
                        remove={props.remove}
                        edit={props.edit}
                    />
                )
            })}
        </div>
    )
})

export default Todos