import PropTypes from "prop-types";
import React from "react";

const TextInput = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        className="form-control my-2"
        type={props.type}
        name={props.name}
        id={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
  type: "text",
  placeholder: "",
  label: "",
};

export default TextInput;
