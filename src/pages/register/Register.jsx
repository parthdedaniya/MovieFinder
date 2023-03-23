const Register = () => {
	return (
		<div className="register">
			<div className="formHeader">
				<h2 className="formTitle">Register</h2>
			</div>
			<hr />
			<form className="registerForm">
				<label for="name">Name:</label>
				<input type="text" id="name" v-model="name" />
				<label for="email">Email:</label>
				<input type="text" id="email" v-model="email" />
				<label for="password">Password:</label>
				<input type="password" id="password" v-model="password" />
				<label for="cPassword">Confirm Password:</label>
				<input type="password" id="cPassword" v-model="cPassword" />
				<button type="submit" className="submitForm">
					Register
				</button>
			</form>
		</div>
	);
};

export default Register;
