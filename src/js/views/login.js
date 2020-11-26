import React, { Fragment } from "react";
import logo from "../../img/Logo.png";
import "../../styles/home.scss";
import { ButtonLogin } from "../component/buttonLogin";
import { LoginInput } from "../component/LoginInput";

export const Login = () => (
	<Fragment>
		<div className="container">
			<img className="home-logo" src={logo} />
			<p className="covid">Covid</p>
			<p className="freezone">Freezone</p>
			<LoginInput />
			<ButtonLogin classButton="login-button" buttonTitle="Login" />
		</div>
	</Fragment>
);
