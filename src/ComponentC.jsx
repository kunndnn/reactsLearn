import ComponentD from "./ComponentD";
import { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentC() {
  const value = useContext(UserContext);

  return (
    <div className="box">
      <h1>ComponentC</h1>
      <h1>{`Hello again : ${value}`}</h1>

      <ComponentD />
    </div>
  );
}

export default ComponentC;
