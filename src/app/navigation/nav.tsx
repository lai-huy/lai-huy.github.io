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

export function Navbar() {
	return (
		<div className="nav-bar">
			<nav className="" role="navigation">
				<Link className="home-link" href="/" key="/">
					<FontAwesomeIcon icon={faHome} color="#4d4d4e" />
					<span className="visually-hidden">Home</span>
				</Link>
				<Link
					className="portfolio-link"
					href="/portfolio"
					key="/portfolio"
				>
					<FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
					<span className="visually-hidden">Portfolio</span>
				</Link>
				<Link
					className="qualifications-link"
					href="/qualifications"
					key="/qualifications"
				>
					<FontAwesomeIcon icon={faGraduationCap} color="#4d4d4e" />
					<span className="visually-hidden">Qualifications</span>
				</Link>
			</nav>

			<ul role="menu" className="navigation">
				<li>
					<a
						href="https://www.linkedin.com/in/huy-lai-93a2b4211/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<LinkedinOriginal size="32" />
						<span className="visually-hidden">LinkedIn</span>
					</a>
				</li>
				<li>
					<a
						href="https://github.com/lai-huy"
						target="_blank"
						rel="noopener noreferrer"
					>
						<GithubOriginal size="32" className="devicon github" />
						<span className="visually-hidden">GitHub</span>
					</a>
				</li>
			</ul>
		</div>
	);
}
