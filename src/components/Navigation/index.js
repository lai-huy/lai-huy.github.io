import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faBars, faBellConcierge, faGraduationCap, faHome, faSuitcase, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import './navigation.scss';

const Sidebar = () => {
	const [showNav, setShowNav] = useState(false);

	return (<>
		<div className="nav-bar">
			<nav className={showNav ? 'mobile-show' : ''} role="navigation">
				<NavLink activeClassName="active" className="home-link" to="/" onClick={() => setShowNav(false)}>
					<FontAwesomeIcon icon={faHome} color="#4d4d4e" />
					<span className="visually-hidden">Home</span>
				</NavLink>
				<NavLink activeClassName="active" className="portfolio-link" to="/portfolio" onClick={() => setShowNav(false)}>
					<FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
					<span className="visually-hidden">Portfolio</span>
				</NavLink>
				<NavLink activeClassName="active" className="qualifications-link" to="/qualifications" onClick={() => setShowNav(false)}>
					<FontAwesomeIcon icon={faGraduationCap} color="#4d4d4e" />
					<span className="visually-hidden">Qualifications</span>
				</NavLink>
				<NavLink activeClassName="active" className="service-link" to="/service" onClick={() => setShowNav(false)}>
					<FontAwesomeIcon icon={faBellConcierge} color="#4d4d4e" />
					<span className="visually-hidden">Service</span>
				</NavLink>
				<FontAwesomeIcon onClick={() => setShowNav(false)} icon={faTimes} color="#ffd700" size="3x" className="close-icon" />
			</nav>

			<ul>
				<li>
					<a href="https://www.linkedin.com/in/huy-lai-93a2b4211/" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" className="anchor-icon" />
						<span className="visually-hidden">LinkedIn</span>
					</a>
				</li>
				<li>
					<a href="https://github.com/lai-huy" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faGithub} color="#4d4d4e" className="anchor-icon" />
						<span className="visually-hidden">GitHub</span>
					</a>
				</li>
			</ul>
			<FontAwesomeIcon onClick={() => setShowNav(true)} icon={faBars} color="#ffd700" size="3x" className="hamburger-icon" />
		</div>
	</>);
};

export default Sidebar;
