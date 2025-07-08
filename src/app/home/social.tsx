import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GithubOriginal, LinkedinOriginal } from "devicons-react";
import { motion } from "framer-motion";

const github: string = "https://github.com/lai-huy";
const linkedin: string = "https://www.linkedin.com/in/huy-lai-93a2b4211/";
const email: string = "mailto:lai.huy.075@gmail.com";

const buttonVariants = {
	initial: {
		scale: 0.95,
		opacity: 1
	},
	animate: {
		scale: 1,
		opacity: 1
	},
	whileHover: {
		scale: 1.05
	},
	whileTap: {
		scale: 0.95
	}
};

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
				<motion.button
					aria-label="Go to my GitHub profile"
					className="btn-hover github"
					onClick={handleGithubClick}
					variants={buttonVariants}
					initial="initial"
					whileHover="whileHover"
					whileTap="whileTap"
					transition={{
						duration: 0.5,
						ease: "easeOut"
					}}
				>
					<GithubOriginal
						size="5rem"
						className="devicon github"
					/>
				</motion.button>

				<motion.button
					aria-label="Go to my LinkedIn profile"
					className="btn-hover linkedin"
					onClick={handleLinkedinClick}
					variants={buttonVariants}
					initial="initial"
					whileHover="whileHover"
					whileTap="whileTap"
					transition={{
						duration: 0.5,
						ease: "easeOut"
					}}
				>
					<LinkedinOriginal size="5rem" className="devicon" />
				</motion.button>

				<motion.button
					aria-label="Send me an email"
					className="btn-hover email"
					onClick={handleEmailClick}
					variants={buttonVariants}
					initial="initial"
					whileHover="whileHover"
					whileTap="whileTap"
					transition={{
						duration: 0.5,
						ease: "easeOut"
					}}
				>
					<FontAwesomeIcon
						icon={faEnvelope}
						className="devicon"
					/>
				</motion.button>
			</p>
		</div>
	);
}
