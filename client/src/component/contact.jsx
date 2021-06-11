import React from "react";
import PropTypes from "prop-types";

export default class Contact extends React.Component {
	render() {
		return (
			<div id="my-contact" className="container text-center my-5">
				<h1 id="contact" className={"mb-3" + this.props.fadeInLeft}>
					Please feel free to contact me
				{/* <a href="mailto:victoria.pushenko@yahoo.com">
						<div class="far fa-envelope fa-1x"></div>
					</a> */}
				</h1>

			</div>
		);
	}
}

Contact.propTypes = {
	fadeInLeft: PropTypes.string,
	shake: PropTypes.string
};
