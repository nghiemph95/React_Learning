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

  const handleTodoList = (todo, idx) => {
    console.log(todo, idx);
    // clone current array
    const newTodoList = [...todoList];
    // toggle state
    const newTodo = {
      ...(newTodoList[idx].status === "new" ? "completed" : "new"),
    };

    // update todolis
    newTodoList[idx] = newTodo;
    setTodoList(newTodoList);
  };

  return (
    <div>
      <h3>TodoList</h3>
      <TodoList todoList={todoList} onTodoClick={handleTodoList} />
    </div>
  );
}

export default TodoFeature;
