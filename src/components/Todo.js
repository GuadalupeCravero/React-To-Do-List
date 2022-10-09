import React from "react";
import "./Todo.css";

function Todo( {todo, toggleComplete, removeTodo }){
    function handleCheckboxClick(){
        toggleComplete(todo.id);

    }

    function handleRemoveClick() {
        removeTodo(todo.id);
    }


    return(
        <div style={{ display: "flex",
        justifyContent:"center",
    marginTop:"20px"}}>
        <input type="checkbox" onClick={handleCheckboxClick}/>
        <ul
        style={{
            color: "black",
            fontSize:"20px",
            textDecoration: todo.completed ? "line-through" : null
        }}
        >
        {todo.task}</ul>

        <button style={{
            fontSize:"10px",
            backgroundColor:"#FF8787",
            color:"white",
            border:"none",
            borderRadius:"10px",
            marginLeft: "10px"
        }}onClick={handleRemoveClick}>Remove</button>

        </div>

    );

}

export default Todo;