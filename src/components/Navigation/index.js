import "./navigation.scss";
import {Link} from 'react-router-dom';


const Navigation = () => {
    return (<>
        <nav role="navigation">
            <div id="menuToggle">
                <input type="checkbox" />

                <span></span>
                <span></span>
                <span></span>

                <ul id="menu">
                    <Link href="../../index.html">
                        <li>Home</li>
                    </Link>
                    <a href="portfolio.html">
                        <li>Technical Portfolio</li>
                    </a>
                    <a href="qualifications.html">
                        <li>Qualifications</li>
                    </a>
                    <a href="service.html">
                        <li>Service</li>
                    </a>
                </ul>
            </div>
        </nav>
    </>);
};

export default Navigation;

