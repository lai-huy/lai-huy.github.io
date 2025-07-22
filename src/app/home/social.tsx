import { GithubOriginal, LinkedinOriginal } from "devicons-react";
import { motion } from "motion/react";
import Image from "next/image";

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
		<div id="social" role="region" aria-label="Social links">
			<nav className="links">
				<motion.button
					aria-label="GitHub profile"
					data-tip="GitHub profile"
					className="btn-hover github"
					onClick={handleGithubClick}
					variants={buttonVariants}
					initial="initial"
					whileHover="whileHover"
					whileTap="whileTap"
					tabIndex={0}
					transition={{
						duration: 0.5,
						ease: "easeOut"
					}}
				>
					<GithubOriginal size={48} className="github" />
					<span className="visually-hidden">GitHub profile</span>
				</motion.button>

				<motion.button
					aria-label="LinkedIn profile"
					data-tip="LinkedIn profile"
					className="btn-hover linkedin"
					onClick={handleLinkedinClick}
					variants={buttonVariants}
					initial="initial"
					whileHover="whileHover"
					whileTap="whileTap"
					tabIndex={0}
					transition={{
						duration: 0.5,
						ease: "easeOut"
					}}
				>
					<LinkedinOriginal size={48} />
					<span className="visually-hidden">LinkedIn profile</span>
				</motion.button>

				<motion.button
					aria-label="Email"
					data-tip="Email"
					className="btn-hover email"
					onClick={handleEmailClick}
					variants={buttonVariants}
					initial="initial"
					whileHover="whileHover"
					whileTap="whileTap"
					tabIndex={0}
					transition={{
						duration: 0.5,
						ease: "easeOut"
					}}
				>
					<Image
						className="email"
						alt="Email"
						src="/assets/images/gmail.svg"
						width={48}
						height={48}
						priority={false}
						loading="eager"
					/>
					<span className="visually-hidden">Email</span>
				</motion.button>
			</nav>
		</div>
	);
}
