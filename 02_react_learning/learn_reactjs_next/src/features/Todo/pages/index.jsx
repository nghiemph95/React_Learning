import React from 'react';
import PropTypes from 'prop-types';
import TodoList from '../components/TodoList';
import { useState } from 'react';

TodoFeature.propTypes = {};

function TodoFeature(props) {
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

  /** State */
  const [todoList, setTodoList] = useState(initTodoList);

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

  return (
    <div>
      <h3> Todo List</h3>
      <TodoList todoList={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default TodoFeature;
