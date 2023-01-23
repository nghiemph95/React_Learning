import { unwrapResult } from '@reduxjs/toolkit';
import { login } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginForm ';

Login.propTypes = {
  closeDialog: PropTypes.func,
};

function Login(props) {
  // get dispatch
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      // create action
      const action = login(values);
      // dispatch action
      const resultAction = await dispatch(action);
      // get result after dispatch
      const user = unwrapResult(resultAction);

      //close digalog when complete
      const { closeDialog } = props;
      if (closeDialog) closeDialog();
    } catch (error) {
      console.log('Failed to login: ', error);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
