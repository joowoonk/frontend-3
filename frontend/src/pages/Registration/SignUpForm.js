import React from "react";

function SignUpForm(props) {

  const {
    values,
    onInputChange,
    onCheckboxChange,
    handleSubmit,
    errors,
  } = props;

  return (
    <>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <div className="errors">
          {<p>{errors.username}</p>}
          {<p>{errors.password}</p>}
          {<p>{errors.terms}</p>}
        </div>

        <label className="username-input">
          Username{" "}
          <input
            value={values.username}
            onChange={onInputChange}
            name="username"
            type="text"
          />
        </label>
        <label>
          Password{" "}
          <input
            value={values.password}
            onChange={onInputChange}
            name="password"
            type="password"
          />
        </label>
        <label>
          Confirm Password{" "}
          <input
            value={values.confirmPassword}
            onChange={onInputChange}
            name="confirmPassword"
            type="password"
          />
        </label>
        <label className="terms-input">
          Terms and Conditions{" "}
          <input
            value={values.terms}
            onChange={onCheckboxChange}
            name="terms"
            type="checkbox"
          />
        </label>
        <button name="submit">Create Account</button>
      </form>
    </>
  );
}

export default SignUpForm;
