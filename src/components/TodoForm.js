import React , {useState} from 'react';
import { v4 as uuidv4 } from "uuid";
import "./TodoForm.css"

function TodoForm({addTodo}) {
    const [todo, setTodo] = useState({
        id:"",
        task:"",
        completed: false
    });

    function handleTaskInputChange(e){
        setTodo({...todo, task: e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        if(todo.task.trim()) {
            addTodo({ ...todo, id: uuidv4() });
            // reset task

          setTodo({ ...todo, task: ""});  
        }
    }

return (
   <form style={{justifyContent:"center",
   paddingTop:"30px",

   
   }} onSubmit={handleSubmit}>
     <input
     placeholder="Enter a task"
     name="task"
     type="text"
     value={todo.task}
     onChange={handleTaskInputChange}
     />
    <button style={{ 
        fontSize:"15px",
        backgroundColor:"#FF8787",
        color:"white",
        border:"none",
        borderRadius:"20px",
        padding:"15px 10px",
        marginLeft:"10px"

    }}type="submit">submit</button>
   </form>
);
}


export default TodoForm;