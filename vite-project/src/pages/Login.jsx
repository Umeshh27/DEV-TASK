import React from "react";



const Login = ({ onLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLogin) onLogin(); // Simulate login
  };
  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <div className="social-login">
        <button className="google-btn" type="button" onClick={onLogin}>Login with Google</button>
        <button className="facebook-btn" type="button" onClick={onLogin}>Login with Facebook</button>
      </div>
    </div>
  );
};

export default Login;
