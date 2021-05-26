import React, { useState } from "react";
import Todo from "./Todo";
import "../App.css";
const TodoList = ({ todos, setTodos }) => {
  const [complete, setComplete] = useState(false);

  return (
    <div className="TodoList">
      {todos.length > 1 ? (
        <p>Empty List</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <Todo
              text={todo.text}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              complete={complete}
              setComplete={setComplete}
            />
          ))}
        </ul>
      )}
      <div className="itemsLeft"></div>
    </div>
  );
};
export default TodoList;
