import React from "react";

function LoginForm(props) {
  const { values, onInputChange, handleSubmit, errors } = props;

  return (
    <form className="login-form">
      <div className={errors}>
        {<p>{errors.username}</p>}
        {<p>{errors.password}</p>}
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
      <label className="password-input">
        Password{" "}
        <input
          value={values.password}
          onChange={onInputChange}
          name="password"
          type="text"
        />
      </label>
      <button onClick={handleSubmit} name="login">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
