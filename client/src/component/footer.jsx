import React from "react";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";
import mail2 from "../img/mail2.png";
class Footer extends React.Component {
	render() {
		return (
			<div id="footer" className="container-fluid text-center py-5">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-8 mx-auto">

							<a
								className="px-3"
								href="https://github.com/vmidor"
								target="_blank"
								rel="noopener noreferrer">
								<img src={github} alt="" />
							</a>
							<a
								href="https://www.linkedin.com/in/viktoriia-m-b85aa5209/"
								target="_blank"
								rel="noopener noreferrer">
								<img src={linkedin} alt="" />
							</a>
							<a
								href="https://www.linkedin.com/in/viktoriia-m-b85aa5209/"
								target="_blank"
								rel="noopener noreferrer">
								<img src={mail2} alt="" />
							</a>

						</div>
					</div>

				</div>
			</div>
		);
	}
}

export default Footer;
