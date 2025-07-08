export default function About() {
	return (
		<div className="about-section">
			<h2 className="about-title" role="heading" aria-level={2}>
				About Me
			</h2>
			<div className="about-content">
				<p className="about-text">
					Howdy! I am an aspiring Software Engineer with a Master of Computer Science degree from Texas A&M University.
					I have also earned a Bachelor&apos;s in Computer Science and minors in Cybersecurity and Mathematics.
				</p>
				<p className="about-text">
					With a solid foundation in software development and problem-solving, I specialize in building efficient and scalable applications.
				</p>
				<p className="about-text">
					My portfolio showcases a diverse range of projects that highlight my technical expertise across multiple domains.
					I have built sophisticated machine learning models, including a mortality prediction system using XGBoost and an advanced CLIP training improvement project.
					I have also led the development of full-stack applications, from a point-of-sale system for Chick-fil-A to ScriptSearch, a transcript-based video search platform.
					Additionally, I have contributed to enterprise-level software development with the Brazos Valley Council of Governments Contract Management System, enhancing their legacy code with improved access control and dynamic forms.
				</p>
			</div>
		</div>
	);
}
