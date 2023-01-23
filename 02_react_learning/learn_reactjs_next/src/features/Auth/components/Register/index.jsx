import { unwrapResult } from '@reduxjs/toolkit';
import { register } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';

Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register(props) {
  // get dispatch
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

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

      //close digalog when complete
      const { closeDialog } = props;
      if (closeDialog) closeDialog();

      enqueueSnackbar('Register completed', { variant: 'success' });
    } catch (error) {
      console.log('Failed to register: ', error);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
