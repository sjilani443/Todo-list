import React from "react";

function Inputcontainer({ Inputvalue, handlechange,addTodo }) {
  return (
    <div className="inputcontainer">
      <input onChange={handlechange} type="text" value={Inputvalue} />
      <button onClick={addTodo}>+</button>
    </div>
  );
}

export default Inputcontainer;
