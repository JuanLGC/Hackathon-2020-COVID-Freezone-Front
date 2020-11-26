import React, { Fragment } from "react";
import "../../styles/loginInput.scss";

export const LoginInput = () => {
	return (
		<Fragment>
			<div className="inputs">
				<label className="label-login">Email</label>
				<input type="text" className="input-login" />
				<label className="label-login">Password</label>
				<input type="password" className="input-login" />
			</div>
		</Fragment>
	);
};
