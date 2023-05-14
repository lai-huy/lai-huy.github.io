import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./qualifications.scss";
import {faJava, faPython, faSass, faReact, faJs, faHtml5, faCss3} from "@fortawesome/free-brands-svg-icons";
import faCpp from "../../assets/images/Cpp Logo.svg";

const Qualifications = () => {
    return (<>
        <header className="qualifications"><h1>Technical Qualifications</h1></header>

        <div className="h2">Resume</div>
        <div className="resume">
            <p className="resume">
                <iframe title="resume" className="resume" src="https://drive.google.com/file/d/1RPcuAaha0OvmkaqKLNcUz6VR9HenJvZ0/preview"
                    allow="autoplay"></iframe>
            </p>
            <p className="qualifications">
                Read a more in-depth version of my resume <a href="resume.html">here</a>.<br />
                If the resume failed to load, download it <a
                    href="https://drive.google.com/file/d/1RPcuAaha0OvmkaqKLNcUz6VR9HenJvZ0/preview"
                    download="HuyLaiResume.pdf">here</a>.<br />
            </p>
        </div>

        <div className="skills">
            <div className="h2">Technical Skills</div>
            <p className="qualifications">
                Software Engineering<br />
                Software Development<br />
                <FontAwesomeIcon icon={faJava} />
                <img className="svg-inline--fa fa-cpp" src={faCpp} alt="c++" />
                <FontAwesomeIcon icon={faPython} />
                <FontAwesomeIcon icon={faHtml5} />
                <FontAwesomeIcon icon={faCss3} />
                <FontAwesomeIcon icon={faSass} />
                <FontAwesomeIcon icon={faReact} />
                <FontAwesomeIcon icon={faJs} /><br />
                Teamwork<br />
                Decision Making<br />
                Customer Service<br />
            </p>
        </div>

        <div className="interest">
            <div className="h2">Technical Interests</div>
            <p className="qualifications">
                I am interested in learning more about Cybersecurity.<br />
                As more of our world becomes digitized, technology and its capabilities will become increasingly
                intertwined
                with our lives.<br />
                As a result, Cybersecurity will be criticalin ensuring that these devices cannot be compromised by
                malicious
                attackers.<br />
                Additionally, an increasing amount of personal data about users will be more readily available as more
                of
                these
                devices begin to communicate with one another.<br />
                It is essentual that these systems cannot be compromised.
            </p>

            <p className="qualifications">
                Additionally, I am intereted in Machine Learning.<br />
                With the need for increased automation with in our new digitized word, machine learning will help is
                ensuring
                that these automated systems can respond to potential problems.<br />
                We have seen the capabilities of Machine Learning with DeepMind's AlphaGo.<br />
                Learn more about AlphaGo <a
                    href="https://www.deepmind.com/research/highlighted-research/alphago">here</a>.
            </p>
        </div>
    </>);
};

export default Qualifications;
