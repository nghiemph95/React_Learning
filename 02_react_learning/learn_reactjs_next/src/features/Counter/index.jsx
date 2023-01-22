import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';
import { useDispatch } from 'react-redux';

function CounterFeature(props) {
  /** Sử dụng hook useSelector để lấy state trong redux ra */
  const count = useSelector((state) => state.count);

  /** Sử dụng hook useDispatch để lấy ra dispatch */
  const dispatch = useDispatch();

  /** Controller */
  const handleIncreaseClick = () => {
    const action = increase(); // action creator

    dispatch(action);
  };

  const handleDecreaseClick = () => {
    const action = decrease(); // action creator

    dispatch(action);
  };

  return (
    <div>
      Counter: {count}
      <div>
        <button onClick={handleIncreaseClick}>Increase</button>
        <button onClick={handleDecreaseClick}>Increase</button>
      </div>
    </div>
  );
}

export default CounterFeature;
