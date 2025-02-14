import {
	CplusplusOriginal,
	Css3Original,
	CucumberPlain,
	FirebaseOriginal,
	GithubOriginal,
	GitOriginal,
	GooglecloudOriginal,
	GrpcOriginal,
	HadoopOriginal,
	HerokuOriginal,
	Html5Original,
	JavaOriginal,
	JavascriptOriginal,
	JupyterOriginalWordmark,
	LatexOriginal,
	MatplotlibOriginal,
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
} from "devicons-react";

export default function Skill() {
	return (
		<div>
			<a href="#skills" className="skip-link">
				Skip to Skills
			</a>
			<div id="skills">
				<div className="h2" role="heading" aria-level={2}>
					Technical Skills
				</div>
				<p className="qualifications">
					<CplusplusOriginal size="8rem" aria-label="C++" />
					<GrpcOriginal size="8rem" aria-label="gRPC" />
					<JavaOriginal size="8rem" aria-label="Java" />
					<HadoopOriginal size="8rem" aria-label="Hadoop" />
					<PythonOriginal size="8rem" aria-label="Python" />
					<MatplotlibOriginal size="8rem" aria-label="Matplotlib" />
					<ScikitlearnOriginal
						size="8rem"
						aria-label="SciKit-Learn"
					/>
					<TensorflowOriginal size="8rem" aria-label="TensorFlow" />
					<PytorchOriginal size="8rem" aria-label="PyTorch" />
					<NumpyOriginal size="8rem" aria-label="NumPy" />
					<PandasOriginal size="8rem" aria-label="Pandas" />
					<JupyterOriginalWordmark size="8rem" aria-label="Jupyter" />
					<GitOriginal size="8rem" aria-label="Git" />
					<GithubOriginal
						size="8rem"
						className="github"
						aria-label="GitHub"
					/>
					<LatexOriginal
						size="8rem"
						className="latex"
						aria-label="LaTeX"
					/>
					<JavascriptOriginal size="8rem" aria-label="JavaScript" />
					<TypescriptOriginal size="8rem" aria-label="TypeScript" />
					<Html5Original
						size="8rem"
						aria-label="HyperText Markup Language 5"
					/>
					<Css3Original
						size="8rem"
						aria-label="Cascading Style Sheets"
					/>
					<SassOriginal
						size="8rem"
						aria-label="Syntactically Awesome Style Sheets"
					/>
					<ReactOriginal size="8rem" aria-label="React" />
					<NodejsOriginal size="8rem" aria-label="Node.js" />
					<NpmOriginalWordmark size="8rem" aria-label="npm" />
					<NextjsOriginal size="8rem" aria-label="Next.js" />
					<RubyOriginal size="8rem" aria-label="Ruby" />
					<RspecOriginal size="8rem" aria-label="RSpec" />
					<RailsOriginalWordmark
						size="8rem"
						aria-label="Ruby on Rails"
					/>
					<CucumberPlain
						size="8rem"
						color="#00A818"
						aria-label="Cucumber"
					/>
					<HerokuOriginal size="8rem" aria-label="Heroku" />
					<GooglecloudOriginal
						size="8rem"
						aria-label="Google Cloud"
					/>
					<FirebaseOriginal size="8rem" aria-label="Firebase" />
					<PostgresqlOriginal size="8rem" aria-label="PostgreSQL" />
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
			</div>
		</div>
	);
}
