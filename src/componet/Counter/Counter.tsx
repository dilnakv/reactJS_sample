import { useEffect, useState } from "react";
import styles from './Counter.module.css'

export const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() =>{
      console.log("Component mounted");
    },[]);

    useEffect(() =>{
      console.log("Count updated");
      document.title = `Count: ${count}`;
    },[count]);
    
    const handleIncrement = () => {
        setCount(count + 1);
    }
    return(
    <div className={styles.divStye}>
      <p>Count: {count}</p>
      <button className = {styles.button} onClick={handleIncrement}> + </button>
    </div>
    );
}