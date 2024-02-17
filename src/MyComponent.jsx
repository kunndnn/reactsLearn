import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest"); //initial state of the state
  const [age, setAge] = useState(0);
  const updateName = () => {
    setName("bob");
  };
  const [isEmployed, setIsEmployed] = useState(false);
  const incrementAge = () => {
    setAge(age + 1);
  };
  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  };
  // const decrementAge = () => {
  //   if (age > 1) {
  //     setAge(0);
  //   } else {
  //     setAge(age - 1);
  //   }
  // };
  // const resetAge = () => {
  //   setAge(0);
  // };
  return (
    <div>
      <p>Name :{name}</p>
      <button onClick={updateName}>Set Name</button>
      <p>Age :{age}</p>
      <button onClick={incrementAge}>Increment Age</button>{" "}
      <p>Is employee : {isEmployed ? "yes" : "no"}</p>
      <button onClick={toggleEmployedStatus}>Toggle Status</button>
      {/* <button onClick={decrementAge}>Increment Age</button>
      <button onClick={resetAge}>Increment Age</button> */}
    </div>
  );
}

export default MyComponent;
