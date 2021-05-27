import PropTypes from "prop-types";
import React from "react";
import TextInput from './TextInput';

const Form = ({
  values,
  changeHandler,
  agreement,
  agreementHandler,
  submitHandler,
}) => {
  return (
    <form onSubmit={submitHandler}>
      <TextInput  
		 label="Enter Your Name" 
		 name="name" 
		 value={values.name} 
		 onChange={changeHandler} 
		 /> 
       <TextInput
        label="Enter Your Email"
        type="email"
        name="email"
        value={values.email}
        onChange={changeHandler}
      />
      <TextInput
	  label="Enter Your Password"
        type="password"
        name="password"
        value={values.password}
        onChange={changeHandler}
	  /> 
      <TextInput
        type="date"
        name="birthDate"
        value={values.birthDate}
        onChange={changeHandler}
      />

      <div className="form-group">
        <label>
          <input
            type="radio"
            name="gender" 
            value="Male"
            onChange={changeHandler}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender" 
            value="Female"
            onChange={changeHandler}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender" 
            value="Other"
            onChange={changeHandler}
          />
          Other
        </label>
      </div> 
     <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="agreement"
            checked={agreement}
            onChange={agreementHandler}
          />
          I agree
        </label>
      </div>
      <button className="btn btn-primary" type="submit">
        Create User
      </button> 
    </form>
  );
};

Form.propTypes = {
  values: PropTypes.object.isRequired,
  agreement: PropTypes.bool.isRequired,
  changeHandler: PropTypes.func.isRequired,
  agreementHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
};
export default Form;
