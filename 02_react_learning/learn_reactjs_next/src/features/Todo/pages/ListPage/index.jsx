import TodoForm from 'features/Todo/components/TodoForm';
import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import TodoList from '../../components/TodoList';

ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
  ];

  const location = useLocation();

  /** Sử dụng useHistory để navigate */
  const history = useHistory();

  /** Sử dụng đường dẫn cha */
  const match = useRouteMatch();

  /** State */
  const [todoList, setTodoList] = useState(initTodoList);

  const [filterStatus, setFilterStatus] = useState(() => {
    const param = queryString.parse(location.search);

    return param.status || 'all';
  });

  /** Control */
  useEffect(() => {
    setFilterStatus(queryString.parse(location.search).status || 'all');
  }, [location.search]);

  const handleTodoClick = (todo, idx) => {
    // clone current array to new one
    const newTodoList = [...todoList];

    // toggle state
    const newTodo = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };

    newTodoList[idx] = newTodo;

    //update todoList
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    // setFilterStatus('all');
    const queryParams = { status: 'all' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const handleShowCompletedClick = () => {
    // setFilterStatus('completed');
    const queryParams = { status: 'completed' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const handleShowNewClick = () => {
    // setFilterStatus('new');
    const queryParams = { status: 'new' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const renderTodoList = useMemo(() => {
    return todoList.filter((todo) => filterStatus === 'all' || filterStatus === todo.status);
  }, [todoList, filterStatus]);

  const handleTodoFormSubmit = (values) => {
    console.log('Form submit: ', values);
  };

  return (
    <div>
      <h3>What to do</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />

      <h3> Todo List</h3>
      <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />

      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default ListPage;
