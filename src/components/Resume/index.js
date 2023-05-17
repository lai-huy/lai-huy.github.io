import "./resume.scss";
import tamu_rm from "../../assets/images/TAMU RM Logo.png";
import lifeguard from "../../assets/images/Austin Parks and Rec.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

const Resume = () => {
	return (<>
		<header className="resume">
			<h1 className="name">Huy Quang Lai</h1>
			<p className="location">
				10208 Echoridge Dr., Austin, Texas 78750<br />
				Email: <a href="mailto:lai.huy.075@gmail.com">lai.huy.075@gmail.com</a><br />
				Phone: <a href="tel:5122107909">+1 (512)-210-7909</a><br />
				<a href="https://www.linkedin.com/in/huy-lai-93a2b4211">LinkedIn</a>
			</p>
		</header>

		<div className="h2" role="heading" aria-level="2">Objective</div>
		<p className="resume">Seeking an internship to apply what I have learned and to gain relevant industry experiences.</p>

		<div className="h2" role="heading" aria-level="2">Education</div>
		<div className="h3" role="heading" aria-level="3">Bachelor of Science in Computer Science</div>
		<p className="resume"><b>Texas A&M University</b>, College Station, Texas</p >

		<div className="h3" role="heading" aria-level="3">GPA</div>
		<p className="resume">3.7/4.0</p>

		<div className="h2" role="heading" aria-level="2">Courses</div>
		<p className="resume">
			<ul>
				<li>CSCE 629: Analysis of Algorithms</li>
				<li>CSCE 421: Machine Learning</li>
				<li>CSCE 402: Law and Policy in Cybersecurity</li>
				<li>CSCE 315: Programmng Studio</li>
				<li>CSCE 314: Programming Languages</li>
				<li>CSCE 313: Introduction to Computer Systems</li>
				<li>CSCE 312: Computer Organization</li>
				<li>CSCE 222: Discrete Structures for Computing</li>
				<li>CSCE 221: Data Structures and Algorithms</li>
				<li>CSCE 181: Introduction to Computing</li>
				<li>CSCE 121: Introduction to Program Design and Concepts</li>
			</ul>
		</p>

		<div className="h3" role="heading" aria-level="3">Honors and Awards</div>
		<p className="resume">
			<ul className="resume">
				<li>Computer Science Honors</li>
			</ul>
		</p>

		<div className="h3" role="heading" aria-level="3">Clubs</div>
		<p className="resume">
			<a href="https://tamurobomasters.com/"><img src={tamu_rm} alt="TAMU RoboMasters" className="tamu_rm" /></a>
		</p>

		<div className="h2" role="heading" aria-level="2">Experiences</div>
		<p className="resume"><b>Simulation Team Lead</b>, Texas A&M University RoboMasters</p>
		<p className="resume">January 2022 - May 2022</p>
		<ul className="resume">
			<li>Implemented a simulation environment using Unity.</li>
			<li>Integrated Computer Vision software into the simulation environment.</li>
			<li>Communicated current simulation issues with team members and provided practical solutions.</li>
		</ul>

		<p className="resume"><b>Lifeguard</b>, City of Austin Parks and Recreation Department</p>
		<p className="resume">Summer 2018, Summer 2021</p>
		<ul className="resume">
			<li>Promoted water safe habits to patrons.</li>
			<li>Proactively search for and prevent life-threatening dangers.</li>
			<li>Coordinated response to emergencies.</li>
		</ul>
		<img src={lifeguard} alt="City of Austin Parks and Recreation" className="lifeguard" />

		<div className="h2" role="heading" aria-level="2">Activities</div>
		<div className="h3" role="heading" aria-level="3">Personal Projects</div>
		<ul className="resume">
			<li>Basic machine learning algorithms from Udemy</li>
			<li>Java code for Chess and Minesweeper games.</li>
		</ul>
		<a href="https://github.com/lai-huy-075"><FontAwesomeIcon icon={faGithub} /></a>

		<div className="h3" role="heading" aria-level="3">School code Repositories</div>
		<ul className="resume">
			<li>Includes code on Data Structures and Algorithms</li>
			<li>Works on Simulation Team with TAMU RoboMasters</li>
		</ul>
		<a href="https://github.com/lai-huy"><FontAwesomeIcon icon={faGithub} /></a>

		<div className="h3" role="heading" aria-level="3">CyberSecurity Summer Camp</div>
		<p className="resume">University of Texas at Austin, Summer 2018</p>
		<ul className="resume">
			<li>Exposure to real-world tools and techniques.</li>
			<li>Knowledge gained on vulnerabilities and countermeasures for current security and privacy.</li>
		</ul>
	</>);
};

export default Resume;
