import React from "react";
import "../App.css";

const Todo = ({ text, todos, setTodos, todo, setComplete, complete }) => {
  const deleteTodo = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  return (
    <div>
      <div className="Todo">
        <input type="radio" onClick={setComplete(true)} className="Check" on />
        <div id={complete ? "Item-comp" : "Item"}>{text}</div>
        <button className="butItems" onClick={deleteTodo}>
          x
        </button>
      </div>
    </div>
  );
};
export default Todo;
