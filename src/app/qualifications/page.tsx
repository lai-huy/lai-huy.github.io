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
						<CplusplusOriginal size="128" />
						<JavaOriginal size="128" />
						<PythonOriginal size="128" />
						<MatplotlibOriginal size="128" />
						<ScikitlearnOriginal size="128" />
						<TensorflowOriginal size="128" />
						<PytorchOriginal size="128" />
						<NumpyOriginal size="128" />
						<PandasOriginal size="128" />
						<JupyterOriginalWordmark size="128" />
						<GitOriginal size="128" />
						<GithubOriginal size="128" className="github" />
						<LatexOriginal size="128" className="latex" />
						<JavascriptOriginal size="128" />
						<TypescriptOriginal size="128" />
						<Html5Original size="128" />
						<Css3Original size="128" />
						<SassOriginal size="128" />
						<ReactOriginal size="128" />
						<NodejsOriginal size="128" />
						<NpmOriginalWordmark size="128" />
						<NextjsOriginal size="128" />
						<RubyOriginal size="128" />
						<RspecOriginal size="128" />
						<RailsOriginalWordmark size="128" />
						<CucumberPlain size="128" color="#00A818" />
						<HerokuOriginal size="128" />
						<GooglecloudOriginal size="128" />
						<FirebaseOriginal size="128" />
						<PostgresqlOriginal size="128" />
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
						<EclipseOriginal size="128" />
						<IntellijOriginal size="128" />
						<VscodeOriginal size="128" />
						<NanoOriginal size="128" />
						<NeovimOriginal size="128" />
						<VimOriginal size="128" />
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
