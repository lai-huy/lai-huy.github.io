import { faCloudDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	CplusplusOriginal,
	Css3Original,
	CucumberPlain,
	EclipseOriginal,
	FirebaseOriginal,
	GithubOriginal,
	GitOriginal,
	GooglecloudOriginal,
	HerokuOriginal,
	Html5Original,
	IntellijOriginal,
	JavaOriginal,
	JavascriptOriginal,
	JupyterOriginalWordmark,
	LatexOriginal,
	MatplotlibOriginal,
	NanoOriginal,
	NeovimOriginal,
	NextjsOriginal,
	NodejsOriginal,
	NpmOriginalWordmark,
	NumpyOriginal,
	PandasOriginal,
	PostgresqlOriginal,
	PythonOriginal,
	PytorchOriginal,
	RailsOriginalWordmark,
	ReactOriginal,
	RspecOriginal,
	RubyOriginal,
	SassOriginal,
	ScikitlearnOriginal,
	TensorflowOriginal,
	TypescriptOriginal,
	VimOriginal,
	VscodeOriginal,
} from "devicons-react";
import Navbar from "../navigation/nav";
import "../navigation/nav.scss";
import "./qualifications.scss";

export default function Qualifications() {
	return (
		<div className="page">
			<Navbar />
			<div className="content">
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
						<a
							href="/assets/Resume.pdf"
							download="HuyLaiResume.pdf"
						>
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
						<CplusplusOriginal size="8rem" />
						<JavaOriginal size="8rem" />
						<PythonOriginal size="8rem" />
						<MatplotlibOriginal size="8rem" />
						<ScikitlearnOriginal size="8rem" />
						<TensorflowOriginal size="8rem" />
						<PytorchOriginal size="8rem" />
						<NumpyOriginal size="8rem" />
						<PandasOriginal size="8rem" />
						<JupyterOriginalWordmark size="8rem" />
						<GitOriginal size="8rem" />
						<GithubOriginal size="8rem" className="github" />
						<LatexOriginal size="8rem" className="latex" />
						<JavascriptOriginal size="8rem" />
						<TypescriptOriginal size="8rem" />
						<Html5Original size="8rem" />
						<Css3Original size="8rem" />
						<SassOriginal size="8rem" />
						<ReactOriginal size="8rem" />
						<NodejsOriginal size="8rem" />
						<NpmOriginalWordmark size="8rem" />
						<NextjsOriginal size="8rem" />
						<RubyOriginal size="8rem" />
						<RspecOriginal size="8rem" />
						<RailsOriginalWordmark size="8rem" />
						<CucumberPlain size="8rem" color="#00A818" />
						<HerokuOriginal size="8rem" />
						<GooglecloudOriginal size="8rem" />
						<FirebaseOriginal size="8rem" />
						<PostgresqlOriginal size="8rem" />
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
						<EclipseOriginal size="8rem" />
						<IntellijOriginal size="8rem" />
						<VscodeOriginal size="8rem" />
						<NanoOriginal size="8rem" />
						<NeovimOriginal size="8rem" />
						<VimOriginal size="8rem" />
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
						As more of our world becomes digitized, technology and
						its capabilities will become increasingly intertwined
						with our lives.
						<br />
						As a result, Cybersecurity will be criticalin ensuring
						that these devices cannot be compromised by malicious
						attackers.
						<br />
						Additionally, an increasing amount of personal data
						about users will be more readily available as more of
						these devices begin to communicate with one another.
						<br />
						It is essentual that these systems cannot be
						compromised.
					</p>

					<p className="qualifications">
						Additionally, I am intereted in Machine Learning.
						<br />
						With the need for increased automation with in our new
						digitized word, machine learning will help is ensuring
						that these automated systems can respond to potential
						problems.
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
			</div>
		</div>
	);
}
