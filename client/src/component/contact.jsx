import React from "react";
import PropTypes from "prop-types";

export default class Contact extends React.Component {
	render() {
		return (
			<div id="my-contact" className="container text-center my-5">
				<h1 id="contact" className={"mb-3 " + this.props.fadeInLeft}>
				Please feel free to send me an email
				<a href="mailto:victoria.pushenko@yahoo.com">
                <i class="far fa-envelope fa-1x"></i>
                </a>
			
				</h1>
				
			</div>
		);
	}
}

Contact.propTypes = {
	fadeInLeft: PropTypes.string,
	shake: PropTypes.string
};
