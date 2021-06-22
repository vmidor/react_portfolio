import React from "react";
import pic from "../img/pic.png";
import PropTypes from "prop-types";

export default class About extends React.Component {
	render() {
		return (
			<div
				id="about-container"
				className="content-containers container text-center mt-5">
				<h1 id="about" className={this.props.bounceLeft}>
					Journey into Web Development as a biggener
				</h1>
				

				<div className="row" style={{ marginTop: 7 + "rem" }}>
					<div className="col-12 col-lg-6 hidden">
						<img
							className={"img-fluid " + this.props.fadeIn}
							src={pic}
							alt=""
							style={{
								height: 750 + "px",
								width: 750 + "px"
							}}
						/>
					
					</div>
					<div
						className={"col-12 col-sm-12 col-md-12 col-lg-6 " + this.props.fadeIn}>
						My education background comprise of Bachelor’s degree in labor
                            and Commercial Law from University in Ukraine. Currently engaged in
                            Cooding BootCamp at UNC Charlotte with hands on experience
                            using API's, JavaScript, CSS and others frameworks.
                            The last three years of experience in retail has taught me
                            the values of teamwork, communication, and sharing a vision.
						
					</div>
				</div>
			</div>
		);
	}
}

About.propTypes = {
	bounceLeft: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
