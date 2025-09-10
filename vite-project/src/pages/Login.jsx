
import React from "react";

const Login = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		// Add login logic here
	};
	return (
		<div className="auth-container">
			<h2>Login</h2>
			<form className="auth-form" onSubmit={handleSubmit}>
				<input type="email" placeholder="Email" required />
				<input type="password" placeholder="Password" required />
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default Login;
