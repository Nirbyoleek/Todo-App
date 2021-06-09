import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "Completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "Pending":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    filterHandler();
  }, [todos, status]);

  return (
    <div className="App">
      <div className="Head">
        <p className="Header"> TODO </p>
        <Form
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          setStatus={setStatus}
        />
      </div>
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        setStatus={setStatus}
        setFilteredTodos={setFilteredTodos}
      />
    </div>
  );
}

export default App;
