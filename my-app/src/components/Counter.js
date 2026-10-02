import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Simple Counter</h2>

            <button onClick={() => setCount(count - 1)}>
                -
            </button>

            <span style={{
                margin: "0 15px",
                fontSize: "20px"
            }}>
                {count}
            </span>

            <button onClick={() => setCount(count + 1)}>
                +
            </button>
        </div>
    );
}

export default Counter;
