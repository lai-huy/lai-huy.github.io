import "./home.scss";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GithubOriginal, LinkedinOriginal } from "devicons-react";

const github: string = "https://github.com/lai-huy";
const linkedin: string = "https://www.linkedin.com/in/huy-lai-93a2b4211/";
const email: string = "mailto:lai.huy.075@gmail.com";

export default function Social() {
	const handleGithubClick = () => {
		window.open(github, "_blank");
	};

	const handleLinkedinClick = () => {
		window.open(linkedin, "_blank");
	};

	const handleEmailClick = () => {
		window.open(email);
	};

	return (
		<div id="social">
			<p className="links">
				<button
					aria-label="Go to my GitHub profile"
					className="btn-hover github"
					onClick={handleGithubClick}
				>
					<GithubOriginal size="5rem" className="devicon github" />
				</button>

				<button
					aria-label="Go to my LinkedIn profile"
					className="btn-hover linkedin"
					onClick={handleLinkedinClick}
				>
					<LinkedinOriginal size="5rem" className="devicon" />
				</button>

				<button
					aria-label="Send me an email"
					className="btn-hover email"
					onClick={handleEmailClick}
				>
					<FontAwesomeIcon icon={faEnvelope} className="devicon" />
				</button>
			</p>
		</div>
	);
}
