import './navigation.scss';
import {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import {faHome, faGraduationCap, faBellConcierge, faSuitcase, faBars, faClose, } from '@fortawesome/free-solid-svg-icons';
import {Link, NavLink} from 'react-router-dom';

const Sidebar = () => {
	const [showNav, setShowNav] = useState(false);

	return (<>
		<div className="nav-bar">
			<nav className={showNav ? 'mobile-show' : ''}>
				<NavLink exact="true" activeclassname="active" to="/" onClick={() => setShowNav(false)}>
					<FontAwesomeIcon icon={faHome} color="#4d4d4e" />
				</NavLink>
				<NavLink activeclassname="active" className="portfolio-link" to="/portfolio" onClick={() => setShowNav(false)}>
					<FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
				</NavLink>
				<NavLink activeclassname="active" className="qualifications-link" to="/qualifications" onClick={() => setShowNav(false)}>
					<FontAwesomeIcon icon={faGraduationCap} color="#4d4d4e" />
				</NavLink>
				<NavLink activeclassname="active" className="service-link" to="/service" onClick={() => setShowNav(false)}>
					<FontAwesomeIcon icon={faBellConcierge} color="#4d4d4e" />
				</NavLink>
				<FontAwesomeIcon onClick={() => setShowNav(false)} icon={faClose} color="#ffd700" size="3x" className='close-icon' />
			</nav>
			<ul>
				<li>
					<Link to="https://www.linkedin.com/in/huy-lai-93a2b4211/" target="_blank" rel="noreferrer">
						<FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" className="anchor-icon" />
					</Link>
				</li>
				<li>
					<Link to="https://github.com/lai-huy" target="_blank" rel="noreferrer">
						<FontAwesomeIcon icon={faGithub} color="#4d4d4e" className="anchor-icon" />
					</Link>
				</li>
			</ul>
			<FontAwesomeIcon onClick={() => setShowNav(true)} icon={faBars} color="#ffd700" size="3x" className='hamburger-icon' />
		</div>
	</>);
};

export default Sidebar;
