import React from "react";
import Todo from "./Todo";
import "../App.css";
const TodoList = ({
  todos,
  setTodos,
  filteredTodos,
  setStatus,
  setFilteredTodos,
}) => {
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => todo.completed === false));
  };

  return (
    <div>
      <div className="MainList">
        <div className="TodoList">
          <ul>
            {filteredTodos.map((todo) => (
              <Todo
                text={todo.text}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
                key={todo.id}
              />
            ))}
          </ul>
        </div>
        <div className="TodoList2">
          <div id="ItemsLength">{todos.length} items in list</div>
          <div>
            <button
              value="Completed"
              onClick={statusHandler}
              className="Buttons"
            >
              Completed
            </button>
            <button value="Pending" onClick={statusHandler} className="Buttons">
              Pending
            </button>
            <button value="All" onClick={statusHandler} className="Buttons">
              All
            </button>
          </div>
          <div>
            <button className="Buttons" onClick={clearCompleted}>
              Clear Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TodoList;
