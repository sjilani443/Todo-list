import React, { useState } from "react";
import "./App.css";
import Inputcontainer from "./components/Inputcontainer";
import Todocontainer from "./components/Todocontainer";

function App() {
  const [inputval, setinputval] = useState("");
  const [todos, setTodos] = useState([]);
  const handlechange = (e) => {
    setinputval(e.target.value);
  };
  const addTodos = () => {
    if (inputval != " ") {
      setTodos((prevTodos) => [...prevTodos, inputval]);
      setinputval("");
    }
  };
  const tododelete = (todoIndex) => {
    console.log(todoIndex);
    setTodos((prevTodos) => {
      const newarray = prevTodos.filter((prevTodos,prevTodosIndex) => {
        return prevTodosIndex != todoIndex;
      });
      return newarray;
      console.log(newarray);
    });

    console.log(todos);
  };

  return (
    <>
      <h1>To-do List</h1>
      <div className="main">
        <Inputcontainer
          Inputvalue={inputval}
          handlechange={handlechange}
          addTodo={addTodos}
        />
        <Todocontainer todos={todos} tododelete={tododelete} />
      </div>
    </>
  );
}

export default App;
