import {
	faCss3Alt,
	faGitAlt,
	faHtml5,
	faJava,
	faJs,
	faNode,
	faNpm,
	faPython,
	faReact,
	faSass,
} from "@fortawesome/free-brands-svg-icons";
import { faCloudDownload, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import resume from "../../assets/Resume.pdf";
import faCpp from "../../assets/images/Cpp Logo.svg";
import faPostgreSQL from "../../assets/images/PostgreSQL Logo.svg";
import faEclipse from "../../assets/images/Eclipse Logo.svg";
import faVSCode from "../../assets/images/VS Code Logo.svg";
import "./qualifications.scss";

const Qualifications = () => {
	return (
		<>
			<header className="qualifications">
				<h1>Technical Qualifications</h1>
			</header>

			<a href="#resume" className="skip-link">
				Skip to Resume
			</a>
			<div id="resume">
				<div className="h2" role="heading" aria-level="2">
					Resume
				</div>
				<p className="resume">
					<iframe title="resume" className="resume" src={resume} />
				</p>
				<p className="qualifications">
					Read a more in-depth version of my resume{" "}
					<Link to="/resume">here</Link>.<br />
					If the resume failed to load, download it{" "}
					<a href={resume} download="HuyLaiResume.pdf">
						<FontAwesomeIcon icon={faCloudDownload} />
					</a>
					.<br />
				</p>
			</div>

			<a href="#skills" className="skip-link">
				Skip to Skills
			</a>
			<div id="skills">
				<div className="h2" role="heading" aria-level="2">
					Technical Skills
				</div>
				<p className="qualifications">
					Software Engineering
					<br />
					Software Development
					<br />
					<img
						className="svg-inline--fa fa-cpp resume"
						src={faCpp}
						alt="c++"
					/>
					<FontAwesomeIcon icon={faJava} className="resume" />
					<FontAwesomeIcon icon={faPython} className="resume" />
					<FontAwesomeIcon icon={faGitAlt} className="resume" />
					<FontAwesomeIcon icon={faJs} className="resume" />
					<FontAwesomeIcon icon={faHtml5} className="resume" />
					<FontAwesomeIcon icon={faCss3Alt} className="resume" />
					<FontAwesomeIcon icon={faSass} className="resume" />
					<FontAwesomeIcon icon={faReact} className="resume" />
					<FontAwesomeIcon icon={faNode} className="resume" />
					<FontAwesomeIcon icon={faNpm} className="resume" />
					<FontAwesomeIcon icon={faDatabase} className="resume" />
					<img
						className="svg-inline--fa fa-postgresql resume"
						src={faPostgreSQL}
						alt="PostgreSQL"
					/>
					<br />
					Teamwork
					<br />
					Decision Making
					<br />
					Customer Service
					<br />
				</p>

				<div className="h2" role="heading" aria-level="2">
					Integrated Development Environments
				</div>
				<p className="qualifications">
					<img
						className="svg-inline--fa fa-eclipse resume"
						src={faEclipse}
						alt="Eclipse IDE"
					/>
					<img
						className="svg-inline--fa fa-vscode resume"
						src={faVSCode}
						alt="Visual Studio Code"
					/>
				</p>
			</div>

			<a href="#interest" className="skip-link">
				Skip to Interests
			</a>
			<div id="interest">
				<div className="h2" role="heading" aria-level="2">
					Technical Interests
				</div>
				<p className="qualifications">
					I am interested in learning more about Cybersecurity.
					<br />
					As more of our world becomes digitized, technology and its
					capabilities will become increasingly intertwined with our
					lives.
					<br />
					As a result, Cybersecurity will be criticalin ensuring that
					these devices cannot be compromised by malicious attackers.
					<br />
					Additionally, an increasing amount of personal data about
					users will be more readily available as more of these
					devices begin to communicate with one another.
					<br />
					It is essentual that these systems cannot be compromised.
				</p>

				<p className="qualifications">
					Additionally, I am intereted in Machine Learning.
					<br />
					With the need for increased automation with in our new
					digitized word, machine learning will help is ensuring that
					these automated systems can respond to potential problems.
					<br />
					We have seen the capabilities of Machine Learning with
					DeepMind's AlphaGo.
					<br />
					Learn more about AlphaGo{" "}
					<a href="https://www.deepmind.com/research/highlighted-research/alphago">
						here
					</a>
					.
				</p>
			</div>
		</>
	);
};

export default Qualifications;
