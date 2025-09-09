import React from "react";


const Register = () => {
  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form className="auth-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      <div className="social-login">
        <button className="google-btn" type="button">Register with Google</button>
        <button className="facebook-btn" type="button">Register with Facebook</button>
      </div>
    </div>
  );
};

export default Register;
