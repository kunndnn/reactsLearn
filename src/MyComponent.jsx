// useState()=Re-renders the component when the state value changes.

// useRef() = "use Reference" Does not cause re-rnders when its value changes, when you want a component to "remember" some info., but you dont' want that info. to trigger new renders.
// 1. Accessing/Interacting with DOM elements
// 2. Handling Focus, Animations, and Transitions
// 3. Managing Timers and Intervals
import { useState, useEffect, useRef } from "react";

function MyComponent() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    console.log("component rendered");
  });
  function handleClick1() {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "yellow";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }
  function handleClick2() {
    inputRef2.current.focus();
    inputRef2.current.style.backgroundColor = "yellow";
    inputRef1.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }
  function handleClick3() {
    inputRef3.current.focus();
    inputRef3.current.style.backgroundColor = "yellow";
    inputRef2.current.style.backgroundColor = "";
    inputRef1.current.style.backgroundColor = "";
  }

  // let [number, setNumber] = useState(0);
  return (
    <div>
      <button onClick={handleClick1}>click me</button>
      <input ref={inputRef1} />
      <button onClick={handleClick2}>click me</button>
      <input ref={inputRef2} />
      <button onClick={handleClick3}>click me</button>
      <input ref={inputRef3} />
    </div>
  );
}

export default MyComponent;
