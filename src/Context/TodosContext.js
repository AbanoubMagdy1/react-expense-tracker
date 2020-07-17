import React, {createContext} from 'react';
import todosReducer from '../reducers/todosReducer'
import useLocalStorageReducer from '../Hooks/useLocalStorageReducer'

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props){
    const starterTodos = ["Wash the car", "Study Your lessons", "Feed the dog"];
    const [todos, dispatch] = useLocalStorageReducer(todosReducer, "todos", starterTodos);

    return (
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}