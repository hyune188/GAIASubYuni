import {useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const increament = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div>
            <h2>count: {count}</h2>
            <button onClick={increament}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter;