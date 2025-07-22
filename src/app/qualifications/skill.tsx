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
		<div id="skills">
			<h2 className="h2" role="heading" aria-level={2}>
				Technical Skills
			</h2>
			<div className="qualifications">
				<div className="tooltip" data-tip="C++"><CplusplusOriginal size="8rem" aria-label="C++" /></div>
				<div className="tooltip" data-tip="gRPC"><GrpcOriginal size="8rem" aria-label="gRPC" /></div>
				<div className="tooltip" data-tip="Java"><JavaOriginal size="8rem" aria-label="Java" /></div>
				<div className="tooltip" data-tip="Hadoop"><HadoopOriginal size="8rem" aria-label="Hadoop" /></div>
				<div className="tooltip" data-tip="Python"><PythonOriginal size="8rem" aria-label="Python" /></div>
				<div className="tooltip" data-tip="Matplotlib"><MatplotlibOriginal size="8rem" aria-label="Matplotlib" /></div>
				<div className="tooltip" data-tip="SciKit-Learn"><ScikitlearnOriginal
					size="8rem"
					aria-label="SciKit-Learn"
				/></div>
				<div className="tooltip" data-tip="TensorFlow"><TensorflowOriginal size="8rem" aria-label="TensorFlow" /></div>
				<div className="tooltip" data-tip="PyTorch"><PytorchOriginal size="8rem" aria-label="PyTorch" /></div>
				<div className="tooltip" data-tip="NumPy"><NumpyOriginal size="8rem" aria-label="NumPy" /></div>
				<div className="tooltip" data-tip="Pandas"><PandasOriginal size="8rem" aria-label="Pandas" /></div>
				<div className="tooltip" data-tip="Jupyter"><JupyterOriginalWordmark size="8rem" aria-label="Jupyter" /></div>
				<div className="tooltip" data-tip="Git"><GitOriginal size="8rem" aria-label="Git" /></div>
				<div className="tooltip" data-tip="GitHub"><GithubOriginal
					size="8rem"
					className="github"
					aria-label="GitHub"
				/></div>
				<div className="tooltip" data-tip="LaTeX"><LatexOriginal
					size="8rem"
					className="latex"
					aria-label="LaTeX"
				/></div>
				<div className="tooltip" data-tip="JavaScript"><JavascriptOriginal size="8rem" aria-label="JavaScript" /></div>
				<div className="tooltip" data-tip="TypeScript"><TypescriptOriginal size="8rem" aria-label="TypeScript" /></div>
				<div className="tooltip" data-tip="HTML5"><Html5Original
					size="8rem"
					aria-label="HyperText Markup Language 5"
				/></div>
				<div className="tooltip" data-tip="CSS3"><Css3Original
					size="8rem"
					aria-label="Cascading Style Sheets"
				/></div>
				<div className="tooltip" data-tip="Sass"><SassOriginal
					size="8rem"
					aria-label="Syntactically Awesome Style Sheets"
				/></div>
				<div className="tooltip" data-tip="React"><ReactOriginal size="8rem" aria-label="React" /></div>
				<div className="tooltip" data-tip="Node.js"><NodejsOriginal size="8rem" aria-label="Node.js" /></div>
				<div className="tooltip" data-tip="npm"><NpmOriginalWordmark size="8rem" aria-label="npm" /></div>
				<div className="tooltip" data-tip="Next.js"><NextjsOriginal size="8rem" aria-label="Next.js" /></div>
				<div className="tooltip" data-tip="Ruby"><RubyOriginal size="8rem" aria-label="Ruby" /></div>
				<div className="tooltip" data-tip="RSpec"><RspecOriginal size="8rem" aria-label="RSpec" /></div>
				<div className="tooltip" data-tip="Ruby on Rails"><RailsOriginalWordmark
					size="8rem"
					aria-label="Ruby on Rails"
				/></div>
				<div className="tooltip" data-tip="Cucumber"><CucumberPlain
					size="8rem"
					color="#00A818"
					aria-label="Cucumber"
				/></div>
				<div className="tooltip" data-tip="Heroku"><HerokuOriginal size="8rem" aria-label="Heroku" /></div>
				<div className="tooltip" data-tip="Google Cloud"><GooglecloudOriginal
					size="8rem"
					aria-label="Google Cloud"
				/></div>
				<div className="tooltip" data-tip="Firebase"><FirebaseOriginal size="8rem" aria-label="Firebase" /></div>
				<div className="tooltip" data-tip="PostgreSQL"><PostgresqlOriginal size="8rem" aria-label="PostgreSQL" /></div>
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
			</div>
		</div>
	);
}
