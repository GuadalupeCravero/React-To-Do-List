import React, { useEffect, useState } from 'react';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const LOCAL_STORAGE_KEY= "react-todo-list-todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse (localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);



  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));

  }, [todos]);

  function addTodo(todo){
    setTodos([todo, ...todos]);

  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if(todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }
function removeTodo(id) {
  setTodos(todos.filter(todo => todo.id !== id));
}
  return (
    
    <div style={{
    backgroundColor:"#EDEDED",
    height:"200vh",
    width:"100%"
    }} className="App">
        <p style={{
          color:"#E26868",
          fontSize:"60px",
          fontWeight:"600",
          padding:"40px 0px 10px",
          marginRight:"20px"
        }}>React To Do list</p>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
         />
    </div>
  );
}

export default App;
