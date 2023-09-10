import React, {useState} from 'react';
import styles from './Counter.module.scss'
const Counter = () => {
    const [count, setCount] = useState<number>(0);
    return (
        <div>
            <h1>
                {count}
            </h1>
            <div>
                <button className={styles.a} onClick={()=>setCount(count+1)}>Inc</button>
                <button onClick={()=>setCount(count-1)}>Dec</button>
            </div>

        </div>
    );
};

export default Counter;
