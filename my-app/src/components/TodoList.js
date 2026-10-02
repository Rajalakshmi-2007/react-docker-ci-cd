import React, { useState } from "react";

function TodoList() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        if (task.trim() !== "") {
            setTodos([...todos, task]);
            setTask("");
        }
    };

    return (
        <div>
            <h2>Todo</h2>

            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Task"
            />

            <button
                onClick={addTodo}
                style={{ marginLeft: "5px" }}
            >
                Add
            </button>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
