import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import InputField from 'components/form-controls/InputField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  /** Validation */
  const schema = yup.object().shape({
    title: yup.string().required('Please enter title!').min(5, 'Title is to short'),
  });

  const form = useForm({
    /** Nếu không khai báo defaultValue thì nó sẽ hiểu là undefined (uncontrol) */
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });

  /** Handle Submit */
  const handleSubmit = (values) => {
    const { onSubmit } = props;

    if (onSubmit) {
      onSubmit(values);
    }

    form.reset();
  };

  return (
    <div>
      <Avatar>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography component="h3" variant="h5">
        Create an Account
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" form={form} label="Full Name" />
        <InputField name="email" form={form} label="Email" />
        <InputField name="password" form={form} label="Password" />
        <InputField name="retypePassword" form={form} label="Retype Password" />
      </form>
    </div>
  );
}

export default RegisterForm;
