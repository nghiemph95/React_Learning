import React from 'react';
import PropTypes from 'prop-types';
import InputField from 'components/form-controls/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  /** Validation */
  const schema = yup.object().shape({
    title: yup.string().required('Please enter title!').min(5, 'Title is to short'),
  });

  const form = useForm({
    /** Nếu không khai báo defaultValue thì nó sẽ hiểu là undefined (uncontrol) */
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  /** Handle Submit */
  const handleSubmit = (values) => {
    console.log('TODO FORM: ', values);
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="title" form={form} label="Todo" />
    </form>
  );
}

export default TodoForm;
