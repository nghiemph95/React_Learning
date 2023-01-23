import { unwrapResult } from '@reduxjs/toolkit';
import { register } from 'features/Auth/userSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';

Register.propTypes = {};

function Register(props) {
  /** get dispatch */
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      // auto set username = email
      values.username = values.email;
      // create action
      const action = register(values);
      // dispatch action
      const resultAction = await dispatch(action);
      // get result after dispatch
      const user = unwrapResult(resultAction);
      console.log('New user', user);
    } catch (error) {
      console.log('Failed to register: ', error);
    }
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
