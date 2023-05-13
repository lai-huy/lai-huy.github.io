import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import "./home.scss";

const Home = () => {
	return (<>
		<header className="name"><span className="name">Huy Quang Lai</span></header>

		<div id="flex_index">
			<h2 className="about"><span className="about">About Me</span></h2>
			<div id="about">
				<p className="about">
					Howdy! I am a student at <a href="https://www.tamu.edu/">Texas A&M University</a> current
					studying for a Bachelor of Science in Computer Science
					with a Minor in Cybersecurity and Mathematics.
				</p>
			</div>

			<div id="social">
				<p className="links">
					<a href="https://github.com/lai-huy" target="_blank" rel="noreferrer">
						<FontAwesomeIcon icon={faGithub} className="github" />
					</a>

					<a href="https://www.linkedin.com/in/huy-lai-93a2b4211/" target="_blank" rel="noreferrer">
						<FontAwesomeIcon icon={faLinkedin} className="linkedin" />
					</a>

					<a href="mailto:lai.huy.075@gmail.com" target="_blank" rel="noreferrer">
						<FontAwesomeIcon icon={faEnvelope} className="email" />
					</a>

					<a href="tel:5122107909" target="_blank" rel="noreferrer">
						<FontAwesomeIcon icon={faPhone} className="phone" />
					</a>
				</p>
			</div>

			<div id="prog">
				<p className="prog_req">
					Learn more about the BS in Computer Science <a
						href="https://catalog.tamu.edu/undergraduate/engineering/computer-science/bs/#programrequirementstext">here</a>.<br />
					Learn more about the Minor in Cybersecurity <a
						href="https://catalog.tamu.edu/undergraduate/engineering/cybersecurity-minor/#programrequirementstext">here</a>.<br />
					Learn more about the Minor in Mathematics <a
						href="https://catalog.tamu.edu/undergraduate/arts-and-sciences/mathematics/minor/#programrequirementstext">here</a>.
				</p>
			</div>
		</div>
	</>);
};

export default Home;
