import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {};

TodoList.defaultProps = {
  todoList: [],
};

function TodoList({ todoList }) {
  return <ul></ul>;
}

export default TodoList;
