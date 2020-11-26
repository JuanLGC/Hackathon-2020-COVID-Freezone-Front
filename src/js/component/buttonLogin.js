import React, { Fragment } from "react";
import "../../styles/buttonLogin.scss";
import PropTypes from "prop-types";

export const ButtonLogin = props => {
	return (
		<Fragment>
			<button className={props.classButton}>{props.buttonTitle}</button>
		</Fragment>
	);
};

ButtonLogin.propTypes = {
	buttonTitle: PropTypes.string,
	classButton: PropTypes.string
};
