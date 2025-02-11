import { useState } from "react";

function App1(){
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    return (
        <center className="min-h-screen bg-orange-400 p-5 text-xl">
        <input value={task} placeholder="Enter Task..." onChange={(e) => {
            setTask(e.target.value);
            //console.log(task);
        }} className=""/>
        <button onClick={() => {
            setTodos([...todos, task]);
            setTask("");
        }}>Add</button>

        <ul>
        {todos.map((todo, index) => (
                <li key={index}>
                    {todo}
                    <button onClick={() => {
                        setTask(todo);
                        setTodos(todos.filter((_, inx) => inx !== index));
                    }}>Edit</button>
                    <button onClick={() => {
                        setTodos(todos.filter((_, inx) => inx !== index));
                    }}>Delete</button>
                </li>
            ))}
        </ul>
        </center>
    )
}

export default App1;