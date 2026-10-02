import React from "react";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";

function App() {
    return (
        <div style={{
            textAlign: "center",
            marginTop: "40px",
            fontFamily: "Arial, sans-serif"
        }}>
            <h1>🚀 React + Docker CI/CD</h1>

            <Counter />

            <hr style={{ margin: "20px 0" }} />

            <TodoList />
        </div>
    );
}

export default App;
