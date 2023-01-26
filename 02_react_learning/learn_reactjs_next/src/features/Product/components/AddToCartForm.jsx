import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@material-ui/core';
import InputField from 'components/form-controls/InputField';
import QuantityField from 'components/form-controls/QuantityField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

AddToCartForm.propTypes = {
  onSubmit: PropTypes.func,
};

function AddToCartForm({ onSubmit = null }) {
  /** Validation */
  const schema = yup.object().shape({
    quantity: yup
      .number()
      .min(1, 'Please enter at least 1')
      .required('Please enter quantity')
      .typeError('Pleass enter a number'),
  });

  const form = useForm({
    /** Nếu không khai báo defaultValue thì nó sẽ hiểu là undefined (uncontrol) */
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema),
  });

  /** Handle Submit */
  const handleSubmit = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <QuantityField name="quantity" form={form} label="Quantity" />

      <Button type="submit" variant="contained" color="primary" fullWidth size="small" style={{ width: '250px' }}>
        Buy
      </Button>
    </form>
  );
}

export default AddToCartForm;
