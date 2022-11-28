import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import React from "react";

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  return (
    <div>
      <TextField fullWidth />
    </div>
  );
}

export default InputField;
