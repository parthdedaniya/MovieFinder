import "./login.css";

const Login = () => {
	return (
		<div className="login">
			<div className="formHeader">
				<h2 className="formTitle">Login</h2>
			</div>
			<hr />
			<form className="loginForm">
				<label for="email">Email:</label>
				<input type="text" id="email" />
				<label for="password">Password:</label>
				<input type="password" id="password" />
				<button type="submit" className="submitForm">
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
