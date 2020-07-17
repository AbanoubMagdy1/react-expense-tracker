import React from 'react';
import TodoApp from './TodoApp';
import {TodosProvider} from './Context/TodosContext'
import './App.css';
/*import BoxContainer from './BoxContainer'
import CounterHook from './CounterHook'
import Toggler from './Toggler'
import FormHook from './FormHook'*/

function App() {
  return (
    <div className="App">
      <TodosProvider>
        <TodoApp/>
      </TodosProvider>
    </div>
  );
}

export default App;
