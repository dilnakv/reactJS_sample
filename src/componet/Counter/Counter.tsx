import { useState } from "react";
import './Counter.css'

export const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }
    return(
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <p>Count: {count}</p>
      <button className = 'button' onClick={handleIncrement}> + </button>
    </div>
    );
}