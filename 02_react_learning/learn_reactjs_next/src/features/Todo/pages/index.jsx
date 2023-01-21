import React from 'react';
import PropTypes from 'prop-types';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const todoList = [
    {
      id: 1,
      title: 'Eat',
    },
    {
      id: 2,
      title: 'Sleep',
    },
    {
      id: 3,
      title: 'Code',
    },
  ];

  return <div>TodoFeatures</div>;
}

export default TodoFeature;
