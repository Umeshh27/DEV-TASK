import React from "react";


const Login = () => {
  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form className="auth-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <div className="social-login">
        <button className="google-btn" type="button">Login with Google</button>
        <button className="facebook-btn" type="button">Login with Facebook</button>
      </div>
    </div>
  );
};

export default Login;
