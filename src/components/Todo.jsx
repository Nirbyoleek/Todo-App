import React from "react";
import "../App.css";

const Todo = ({ text, todos, setTodos, todo }) => {
  const deleteTodo = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (todo.id === item.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div>
      <div className="Todo">
        <input type="checkbox" className="Check" onClick={completeHandler} />
        <div className={`Item ${todo.completed ? "completed" : ""}`}>
          {text}
        </div>
        <button className="Buttons" onClick={deleteTodo}>
          X
        </button>
      </div>
    </div>
  );
};
export default Todo;
