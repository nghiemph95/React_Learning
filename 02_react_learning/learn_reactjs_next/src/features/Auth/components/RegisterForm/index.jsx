import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, makeStyles, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

/** Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
  },

  avatar: {
    margin: '0 auto',
    backgroundColor: theme.palette.secondary.main,
  },

  title: {
    textAlign: 'center',
    margin: theme.spacing(2, 0, 3, 0), // top = 2, right = 0, bottom = 3, left = 0
  },

  submit: {
    margin: theme.spacing(3, 0, 2), // top = 3, left/right = 0, bottom = 2
  },
}));

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  /** Styles */
  const classes = useStyles();

  /** Validation */
  const schema = yup.object().shape({});

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
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography className={classes.title} component="h3" variant="h5">
        Create an Account
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" form={form} label="Full Name" />
        <InputField name="email" form={form} label="Email" />
        <PasswordField name="password" form={form} label="Password" />
        <PasswordField name="retypePassword" form={form} label="Retype Password" />
      </form>

      <Button type="submit" className={classes.submit} variant="contained" color="primary" fullWidth>
        Create an Account
      </Button>
    </div>
  );
}

export default RegisterForm;
