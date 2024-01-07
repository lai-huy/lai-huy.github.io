import React from "react";
import { GithubOriginal, LinkedinOriginal } from "devicons-react";
import {
	faBars,
	faBellConcierge,
	faGraduationCap,
	faHome,
	faKey,
	faSuitcase,
	faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navigation.scss";

const Sidebar = () => {
	const [showNav, setShowNav] = useState(false);

	return (
		<div className="nav-bar">
			<nav className={showNav ? "mobile-show" : ""} role="navigation">
				<NavLink
					className="home-link"
					to="/"
					onClick={() => setShowNav(false)}
				>
					<FontAwesomeIcon icon={faHome} color="#4d4d4e" />
					<span className="visually-hidden">Home</span>
				</NavLink>
				<NavLink
					className="portfolio-link"
					to="/portfolio"
					onClick={() => setShowNav(false)}
				>
					<FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
					<span className="visually-hidden">Portfolio</span>
				</NavLink>
				<NavLink
					className="qualifications-link"
					to="/qualifications"
					onClick={() => setShowNav(false)}
				>
					<FontAwesomeIcon icon={faGraduationCap} color="#4d4d4e" />
					<span className="visually-hidden">Qualifications</span>
				</NavLink>
				<NavLink
					className="service-link"
					to="/service"
					onClick={() => setShowNav(false)}
				>
					<FontAwesomeIcon icon={faBellConcierge} color="#4d4d4e" />
					<span className="visually-hidden">Service</span>
				</NavLink>
				<NavLink
					className="keys-link"
					to="/keys"
					onClick={() => setShowNav(false)}
				>
					<FontAwesomeIcon icon={faKey} color="#4d4d4e" />
					<span className="visually-hidden">Keys</span>
				</NavLink>
				<FontAwesomeIcon
					onClick={() => setShowNav(false)}
					icon={faTimes}
					color="#ffd700"
					size="3x"
					className="close-icon"
				/>
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
						<GithubOriginal size="32" color="" />
						<span className="visually-hidden">GitHub</span>
					</a>
				</li>
			</ul>
			<FontAwesomeIcon
				onClick={() => setShowNav(true)}
				icon={faBars}
				color="#ffd700"
				size="3x"
				className="hamburger-icon"
			/>
		</div>
	);
};

export default Sidebar;
