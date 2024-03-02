import { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentD() {
  const value = useContext(UserContext);
  return (
    <div className="box">
      <h1>ComponentD</h1>
      <h1>{`Bye : ${value}`}</h1>
    </div>
  );
}

export default ComponentD;
