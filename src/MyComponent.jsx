// useEffect()= react hook that tells react to do thiscode when(pick one):
// this component re-renders
// this component mounts
// the state of a value

// useEffect(function,[dependencies])

// 1. useEffect(()=>{}) //runs after every re-render
// 2. useEffect(()=>,[]) runs only on mount
// 3. useEffect(()=>,[value]) //runs on mount + when value changes
// uses:
// #1 event listeners
// #2 DOM manipulation
// #3 subscriptions (real-time updates)
// #4 fetching data from an api
// #5 clean up when a component unmounts
import { useState, useEffect } from "react";

function MyComponents() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("event listener added");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("event listener removed");
    };
  }, []);

  useEffect(() => {
    document.title = `size: ${width} x ${height}`;
  }, [width, height]);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {}, []);

  return (
    <>
      <p>wiindow width :{width}</p>
      <p>wiindow height :{height}</p>
    </>
  );
}

export default MyComponents;
