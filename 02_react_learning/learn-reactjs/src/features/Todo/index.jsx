import React from "react";
import { useState } from "react";
import TodoList from "./components/TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "Code",
      status: "new",
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);

  const handleTodoClickFromChildren = (todo, idx) => {
    console.log(todo, idx);
    // clone current array
    const newTodoList = [...todoList];
    // toggle state
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };

    // update todolis
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {};

  const handleShowCompletedClick = () => {};

  const handleShowNewClick = () => {};

  return (
    <div>
      <h3>TodoList</h3>
      <TodoList todoList={todoList} onTodoClick={handleTodoClickFromChildren} />

      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default TodoFeature;
