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
  const [filterStatus, setFilterStatus] = useState("all");

  const handleTodoClickFromChildren = (todo, idx) => {
    console.log(todo, idx);
    // clone current array
    const newTodoList = [...todoList];
    // toggle state
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };

    // update todolisss
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setFilterStatus("all");
  };

  const handleShowCompletedClick = () => {
    setFilterStatus("completed");
  };

  const handleShowNewClick = () => {
    setFilterStatus("new");
  };

  const filterTodoList = todoList.filter(
    (element) => filterStatus === "all" || element.status === filterStatus
  );

  return (
    <div>
      <h3>TodoList</h3>
      <TodoList
        todoList={filterTodoList}
        onTodoClick={handleTodoClickFromChildren}
      />

      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default TodoFeature;
