import React from 'react';

const LoginForm = () => {
  return (
    <div className="login-form">
    <br />
      <h2 className="login-form__title">Welcome</h2>
      <div className="login-form__field">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
      </div>
      <div className="login-form__field">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>
      <h3 className="login-form__login">Log In</h3>
    </div>
  );
};

export default LoginForm;
