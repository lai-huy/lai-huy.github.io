import {
	faGraduationCap,
	faHome,
	faSuitcase,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GithubOriginal, LinkedinOriginal } from "devicons-react";
import Link from "next/link";
import "./nav.scss";
import "../globals.scss";

export default function Navbar() {
	return (
		<div className="nav-bar">
			<nav className="" role="navigation">
				<Link className="home-link" href="/" key="/" aria-label="Home">
					<FontAwesomeIcon
						icon={faHome}
						color="#4d4d4e"
						aria-hidden={true}
					/>
					<span className="visually-hidden">Home</span>
				</Link>
				<Link
					className="portfolio-link"
					href="/portfolio"
					key="/portfolio"
					aria-label="Portfolio"
				>
					<FontAwesomeIcon
						icon={faSuitcase}
						color="#4d4d4e"
						aria-hidden={true}
					/>
					<span className="visually-hidden">Portfolio</span>
				</Link>
				<Link
					className="qualifications-link"
					href="/qualifications"
					key="/qualifications"
					aria-label="Qualifications"
				>
					<FontAwesomeIcon
						icon={faGraduationCap}
						color="#4d4d4e"
						aria-hidden={true}
					/>
					<span className="visually-hidden">Qualifications</span>
				</Link>
			</nav>

			<ul
				role="menu"
				className="navigation"
				aria-label="Social Media Links"
			>
				<li role="menuitem" aria-label="LinkedIn">
					<a
						href="https://www.linkedin.com/in/huy-lai-93a2b4211/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
					>
						<LinkedinOriginal size="32" aria-hidden={true} />
						<span className="visually-hidden">LinkedIn</span>
					</a>
				</li>
				<li role="menuitem" aria-label="GitHub">
					<a
						href="https://github.com/lai-huy"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
					>
						<GithubOriginal
							size="32"
							className="devicon github"
							aria-hidden={true}
						/>
						<span className="visually-hidden">GitHub</span>
					</a>
				</li>
			</ul>
		</div>
	);
}
