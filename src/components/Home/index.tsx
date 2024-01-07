import React from "react";
import { GithubOriginal, LinkedinOriginal } from "devicons-react";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./home.scss";

const bs_cs =
	"https://catalog.tamu.edu/undergraduate/engineering/computer-science/bs/#programrequirementstext";
const cyber_minor =
	"https://catalog.tamu.edu/undergraduate/engineering/cybersecurity-minor/#programrequirementstext";
const math_minor =
	"https://catalog.tamu.edu/undergraduate/arts-and-sciences/mathematics/minor/#programrequirementstext";
const github = "https://github.com/lai-huy";
const linkedin = "https://www.linkedin.com/in/huy-lai-93a2b4211/";
const email = "mailto:lai.huy.075@gmail.com";
const phone = "tel:5122107909";

const Home = () => {
	const handleGithubClick = () => {
		window.open(github, "_blank");
	};

	const handleLinkedinClick = () => {
		window.open(linkedin, "_blank");
	};

	const handleEmailClick = () => {
		window.open(email);
	};

	const handlePhoneClick = () => {
		window.open(phone);
	};

	return (
		<div className="background" role="main">
			<header className="name">
				<h1>
					<span className="name">Huy Quang Lai</span>
				</h1>
			</header>
			<a href="#about" className="skip-link">
				Skip to about me
			</a>
			<div className="about" role="heading" aria-level={2}>
				<span className="about">About Me</span>
			</div>
			<div id="about">
				<p className="about">
					Howdy! I am a student at{" "}
					<Link to="https://www.tamu.edu/">Texas A&M University</Link>{" "}
					currently studying for a Bachelor of Science in Computer
					Science with a Minor in Cybersecurity and Mathematics.
				</p>
			</div>

			<a href="#prog" className="skip-link">
				Skip to Program Requirements
			</a>
			<div id="prog">
				<p className="prog_req">
					Learn more about the BS in Computer Science{" "}
					<Link to={bs_cs}>here</Link>.<br />
					Learn more about the Minor in Cybersecurity{" "}
					<Link to={cyber_minor}>here</Link>.<br />
					Learn more about the Minor in Mathematics{" "}
					<Link to={math_minor}>here</Link>.
				</p>
			</div>

			<a href="#social" className="skip-link">
				Skip to my online profiles.
			</a>
			<div id="social">
				<p className="links">
					<button
						aria-label="Go to my GitHub profile"
						className="btn-hover github"
						onClick={handleGithubClick}
					>
						<GithubOriginal size="100" />
					</button>

					<button
						aria-label="Go to my LinkedIn profile"
						className="btn-hover linkedin"
						onClick={handleLinkedinClick}
					>
						<LinkedinOriginal size="100" />
					</button>

					<button
						aria-label="Send me an email"
						className="btn-hover email"
						onClick={handleEmailClick}
					>
						<FontAwesomeIcon icon={faEnvelope} />
					</button>

					<button
						aria-label="Send me a phone call"
						className="btn-hover phone"
						onClick={handlePhoneClick}
					>
						<FontAwesomeIcon icon={faPhone} />
					</button>
				</p>
			</div>
		</div>
	);
};

export default Home;
