import { Box, FormHelperText, IconButton } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function QuantityField(props) {
  const { form, name, label, disabled } = props;

  /** Lấy thông tin Error ra */
  const { errors, setValue } = form;

  /** Show error khi field đc touch */
  const hasError = !!errors[name];

  return (
    <div>
      <FormControl error={hasError} fullWidth margin="normal" variant="outlined">
        <InputLabel htmlFor={name}>{label}</InputLabel>

        <Controller
          name={name}
          control={form.control}
          render={({ onChange, onBlur, value, name }) => (
            <Box>
              <IconButton onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1)}>
                <RemoveCircleOutline />
              </IconButton>

              <OutlinedInput
                id={name}
                type="number"
                label={label}
                disabled={disabled}
                error={!!hasError}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              />

              <IconButton onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1)}>
                <AddCircleOutline />
              </IconButton>
            </Box>
          )}
        />

        <FormHelperText>{errors[name]?.message}</FormHelperText>
      </FormControl>
    </div>
  );
}

export default QuantityField;
