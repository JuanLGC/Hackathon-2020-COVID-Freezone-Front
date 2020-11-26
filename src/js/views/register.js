import React, { Fragment } from "react";
import logo from "../../img/Logo.png";
import "../../styles/register.scss";
import { ButtonLogin } from "../component/buttonLogin";

export const RegisterView = () => (
	<Fragment>
		<div className="container">
			<img className="register-logo" src={logo} />
			<p className="covid-register">Covid</p>
			<p className="freezone-register">Freezone</p>
			<div className="inputs-register">
				<label className="label-login">Email</label>
				<input type="text" className="input-login" />
				<label className="label-login">Password</label>
				<input type="password" className="input-login" />
				<label className="label-login">Repeat Password</label>
				<input type="password" className="input-login" />
				<label className="label-login">Access Code</label>
				<input type="number" className="input-login" />
			</div>
			<ButtonLogin classButton="register-button" buttonTitle="Register" />
		</div>
	</Fragment>
);
