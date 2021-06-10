import React from "react";
import crypto from "../img/crypto.png";
import aguaDeLuz from "../img/directory.png";

import PropTypes from "prop-types";

export default class Projects extends React.Component {

	render() {
		return (
			<React.Fragment>
				<div id="my-projects" className="container-fluid bg-light mt-5">
					<div className=" project-container container bg-light pb-5">
						<h1
							id="projects"
							className={"text-center " + this.props.fadeInRight}>
							Projects
						</h1>
						<div className="row my-5">
							<div
								className={
									"testbg col-12 col-md-3 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Stocks News</h2>
									</div>
									<div>
										<button
											id="crypto-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var cryptoModal = document.getElementById(
													"crypto"
												);
												modalBG.style.display = "block";
												cryptoModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>

							{/*user directory card*/}
							<div
								className={
									"test2bg col-12 col-md-3 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>User directory</h2>
									</div>
									<div>
										<button
											id="userd-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var directModal = document.getElementById(
													"userd"
												);
												modalBG.style.display = "block";
												directModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>





					{/*hidden modals*/}
					<div id="gallery-card">
						<div id="crypto" className="modal-card">
							<div className="visual">
								<img src={crypto} alt="" />
							</div>
							<div className="modal-info">
								<h2>Stocks News</h2>
								<div className="modal-description">
									<ul>
										<li>
											Platform where you can find stock information and
											search for relevant articles and Reddit posts
									</li>

									</ul>
								</div>
								<div className="modal-bottom">
									<a href="https://naisthorpe.github.io/crypto-stock-app/" target="_blank">
										<h3>View Demo</h3>
									</a>
									<p
										className="close-icon"
										style={{
											textAlign: "right",
											fontWeight: 900,
											fontSize: 2 + "rem",
											cursor: "pointer"
										}}
										onClick={() => {
											var modalBG = document.getElementById(
												"gallery-card"
											);
											var cryptoModal = document.getElementById(
												"crypto"
											);
											modalBG.style.display = "none";
											cryptoModal.style.display = "none";
										}}>
										&#10005;
								</p>
								</div>
							</div>
						</div>




						{/*user directory card*/}
						<div id="userd" className="modal-card">
							<div className="visual">
								<img src={aguaDeLuz} alt="" />
							</div>
							<div className="modal-info">
								<h2>User directory</h2>
								<div className="modal-description">
									<ul>
										<li>
											Manager or employee can view non-sensitive data
											about other employees. They can filter employees by:
											Name, DOB, cell phone or email.
									</li>
										<li>
											Developed withBootstrap,
											ReactJS, Service Workers, and etc.
									</li>
									</ul>
								</div>
								<div className="modal-bottom">
									<a
										href="https://guarded-falls-04801.herokuapp.com"
										target="_blank">
										<h3>View Demo</h3>
									</a>
									<p
										className="close-icon"
										style={{
											textAlign: "right",
											fontWeight: 900,
											fontSize: 2 + "rem",
											cursor: "pointer"
										}}
										onClick={() => {
											var modalBG = document.getElementById(
												"gallery-card"
											);
											var directModal = document.getElementById(
												"userd"
											);
											modalBG.style.display = "none";
											directModal.style.display = "none";
										}}>
										&#10005;
								</p>
								</div>
							</div>
						</div>

					</div>
				</div>
			</React.Fragment>
		);
	}
}

Projects.propTypes = {
	bounceIn: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
