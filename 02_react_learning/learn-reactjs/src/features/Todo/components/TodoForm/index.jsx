import React from "react";
import PropTypes from "prop-types";
import InputField from "../../../../components/form-controls/InputField";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const form = useForm;

  return (
    <div>
      todoForm
      <InputField />
    </div>
  );
}

export default TodoForm;
