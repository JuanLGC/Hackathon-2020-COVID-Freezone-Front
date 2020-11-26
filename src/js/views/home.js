import React from "react";
import logo from "../../img/Logo.png";
import "../../styles/home.scss";
import { ButtonLogin } from "../component/buttonLogin";

export const Home = () => (
	<div className="container">
		<img className="home-logo" src={logo} />
		<p className="covid">Covid</p>
		<p className="freezone">Freezone</p>
		<ButtonLogin classButton="home-login-button" buttonTitle="Login" />
		<ButtonLogin classButton="home-register-button" buttonTitle="Register" />
	</div>
);
