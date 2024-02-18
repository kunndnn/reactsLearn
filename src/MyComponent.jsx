import { useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);
  function incremetCount() {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  }
  function decrementCount() {
    setCount((c) => c - 1);
    setCount((c) => c - 1);
    setCount((c) => c - 1);
  }
  const resetCount = () => {
    setCount((c) => (c = 0));
  };
  return (
    <div className="container">
      <h2>{count}</h2>
      <button onClick={incremetCount}>increment</button>
      <button onClick={decrementCount}>decrement</button>
      <button onClick={resetCount}>reset</button>
    </div>
  );
}

export default MyComponent;
