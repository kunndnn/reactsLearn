// 1. useEffect(()=>{}) //runs after every re-render
// 2. useEffect(()=>,[]) runs only on mount
// 3. useEffect(()=>,[value]) //runs on mount + when value changes

import { useState, useEffect } from "react";

function MyComponents() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");
  useEffect(() => {
    document.title = `count: ${count} ${color}`;
  }, [count, color]);
  function addCount() {
    setCount((c) => c + 1);
  }
  function subtractCount() {
    setCount((c) => c - 1);
  }
  function changeColor() {
    setColor(color === "red" ? "green" : "red");
  }
  return (
    <>
      <p style={{ color }}>Count :</p>
      {count}
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>subtract</button>
      <button onClick={changeColor}>Change Color</button>
    </>
  );
}

export default MyComponents;
