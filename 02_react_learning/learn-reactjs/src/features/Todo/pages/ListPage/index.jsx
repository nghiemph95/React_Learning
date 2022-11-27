import React from "react";
import { useState } from "react";
import TodoList from "../../components/TodoList";
import queryString from "query-string";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import { useEffect } from "react";
import { useMemo } from "react";
import TodoForm from "../../components/TodoForm";

ListPage.propTypes = {};

function ListPage(props) {
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

  const location = useLocation();

  //use navigate
  const history = useHistory();

  //check path
  const match = useRouteMatch();

  const [todoList, setTodoList] = useState(initTodoList);
  const [filterStatus, setFilterStatus] = useState(() => {
    const params = queryString.parse(location.search);

    return params.status || "all";
  });

  useEffect(() => {
    const params = queryString.parse(location.search);

    setFilterStatus(params.status || "all");
  }, [location.search]);

  const handleTodoClickFromChildren = (todo, idx) => {
    // clone current array to the new one
    const newTodoList = [...todoList];

    // toggle state
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };

    // update todolis
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    // setFilterStatus("all");
    const queryParams = { status: "all" };
    history.push({
      pathname: match.path, // path hiện tại
      search: queryString.stringify(queryParams), // cập nhật lại lên URL
    });
  };

  const handleShowCompletedClick = () => {
    // setFilterStatus("completed");
    const queryParams = { status: "completed" };
    history.push({
      pathname: match.path, // path hiện tại
      search: queryString.stringify(queryParams), // cập nhật lại lên URL
    });
  };

  const handleShowNewClick = () => {
    // setFilterStatus("new");
    const queryParams = { status: "new" };
    history.push({
      pathname: match.path, // path hiện tại
      search: queryString.stringify(queryParams), // cập nhật lại lên URL
    });
  };

  const filterTodoList = useMemo(() => {
    return todoList.filter(
      (element) => filterStatus === "all" || element.status === filterStatus
    );
  }, [todoList, filterStatus]);

  const handleTodoFormSubmit = (values) => {
    console.log("Form submit: ", values);
  };

  return (
    <div>
      <h3>What to do</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />
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

export default ListPage;
