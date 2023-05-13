import "./navigation.scss";
import {NavLink} from 'react-router-dom';
import {faHome, faSuitcase} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useState} from 'react';

const Navigation = () => {
    const [showNav, setShowNav] = useState(false);

    return (<>
        <nav role="navigation">
            <div id="menuToggle">
                <input type="checkbox" />

                <span></span>
                <span></span>
                <span></span>

                <ul id="menu">
                    <li><NavLink activeclassname="active" className="home-link" to="/" onClick={() => setShowNav(false)}>
                        <FontAwesomeIcon icon={faHome} />
                    </NavLink></li>
                    <li><NavLink activeclassname="active" className="portfolio-link" to="/portfolio" onClick={() => setShowNav(false)}>
                        <FontAwesomeIcon icon={faSuitcase} />
                    </NavLink></li>
                    <li><NavLink activeclassname="active" className="qualification-link" to="/qualifications" onClick={() => setShowNav(false)}>
                        <FontAwesomeIcon icon={faSuitcase} />
                    </NavLink></li>
                    <li><NavLink activeclassname="active" className="service-link" to="/service" onClick={() => setShowNav(false)}>
                        <FontAwesomeIcon icon={faSuitcase} />
                    </NavLink></li>
                </ul>
            </div>
        </nav>
    </>);
};

export default Navigation;

