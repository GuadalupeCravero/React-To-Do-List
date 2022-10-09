import React from 'react';
import Todo from "./Todo";

function TodoList ({ todos, removeTodo, toggleComplete }) {
    return (
        <ul style={{
            padding:"90px 90px",
            width:"50%",
            marginLeft:"300px",
        }}>
            {todos.map(todo => (
                <Todo
                 key={todo.id}
                  todo={todo}
                  removeTodo={removeTodo}
                  toggleComplete={toggleComplete}
                   />
            ))}
        </ul>
    );
}

export default TodoList;