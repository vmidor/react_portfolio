import React from "react";
import PropTypes from "prop-types";

import WOW from "wowjs";

export default class Background extends React.Component {
	componentDidMount() {
		new WOW.WOW().init();
	}

	render() {
		return (
			<div id="my-background" className="background">
				<div id="stars" />
				<div id="stars2" />
				<div id="stars3" />
				<div className="top-container flex">
				<h1 class="subtitle">Hello, I'm</h1>
                    <h2 class="title">Viktoriia Midor</h2>
                    <h1 class="subtitle profession">Web Developer</h1>
					{/* offset can be cahnged in node modules wowjs default file */}
					
				</div>
			</div>
		);
	}
}

Background.propTypes = {
	aboutRef: PropTypes.object,
	bounceIn: PropTypes.string
};
