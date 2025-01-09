import "./qualifications.scss";
import { faCloudDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	CplusplusOriginal,
	Css3Original,
	EclipseOriginal,
	GitOriginal,
	Html5Original,
	IntellijOriginal,
	JavaOriginal,
	JavascriptOriginal,
	LatexOriginal,
	NeovimOriginal,
	NodejsOriginal,
	NpmOriginalWordmark,
	PostgresqlOriginal,
	PythonOriginal,
	RailsOriginalWordmark,
	ReactOriginal,
	RubyOriginal,
	SassOriginal,
	TypescriptOriginal,
	VimOriginal,
	VscodeOriginal,
} from "devicons-react";

export default function Qualifications() {
	return (
		<>
			<header className="qualifications">
				<h1>Technical Qualifications</h1>
			</header>

			<a href="#resume" className="skip-link">
				Skip to Resume
			</a>
			<div id="resume">
				<div className="h2" role="heading" aria-level={2}>
					Resume
				</div>
				<p className="resume">
					<iframe
						className="resume"
						title="Huy Lai Resume"
						src="/assets/Resume.pdf"
					/>
				</p>
				<p className="qualifications">
					If the resume failed to load, download it{" "}
					<a href="/assets/Resume.pdf" download="HuyLaiResume.pdf">
						<FontAwesomeIcon icon={faCloudDownload} />
					</a>
					.<br />
				</p>
			</div>

			<a href="#skills" className="skip-link">
				Skip to Skills
			</a>
			<div id="skills">
				<div className="h2" role="heading" aria-level={2}>
					Technical Skills
				</div>
				<p className="qualifications">
					<CplusplusOriginal size="100" />
					<JavaOriginal size="100" />
					<PythonOriginal size="100" />
					<GitOriginal size="100" />
					<LatexOriginal size="100" />
					<JavascriptOriginal size="100" />
					<TypescriptOriginal size="100" />
					<Html5Original size="100" />
					<Css3Original size="100" />
					<SassOriginal size="100" />
					<ReactOriginal size="100" />
					<NodejsOriginal size="100" />
					<NpmOriginalWordmark size="100" />
					<PostgresqlOriginal size="100" />
					<RubyOriginal size="100" />
					<RailsOriginalWordmark size="100" />
					<br />
					Software Engineering
					<br />
					Software Development
					<br />
					Teamwork
					<br />
					Decision Making
					<br />
					Customer Service
					<br />
				</p>

				<div className="h2" role="heading" aria-level={2}>
					Development Environments
				</div>
				<p className="qualifications">
					<EclipseOriginal size="100" />
					<IntellijOriginal size="100" />
					<VscodeOriginal size="100" />
					<NeovimOriginal size="100" />
					<VimOriginal size="100" />
				</p>
			</div>

			<a href="#interest" className="skip-link">
				Skip to Interests
			</a>
			<div id="interest">
				<div className="h2" role="heading" aria-level={2}>
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
					DeepMind&apos;s AlphaGo.
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
}
