const mcs: string = String.raw`https://catalog.tamu.edu/graduate/colleges-schools-interdisciplinary/engineering/computer-science/mcs/#programrequirementstext`;
const bs_cs: string = String.raw`https://catalog.tamu.edu/undergraduate/engineering/computer-science/bs/#programrequirementstext`;
const cyber_minor: string = String.raw`https://catalog.tamu.edu/undergraduate/engineering/cybersecurity-minor/#programrequirementstext`;
const math_minor: string = String.raw`https://catalog.tamu.edu/undergraduate/arts-and-sciences/mathematics/minor/#programrequirementstext`;
const tamu: string = String.raw`https://www.tamu.edu/`;

export default function About() {
	return (
		<div className="about-section">
			<h2 className="about-title" role="heading" aria-level={2}>
				About Me
			</h2>
			<div className="about-content">
				<p className="about-text">
					Howdy! I'm a Computer Science professional with a Master's degree from Texas A&M University.
					I've also earned a Bachelor's in Computer Science and minors in Cybersecurity and Mathematics.
				</p>
				<p className="about-text">
					With a solid foundation in software development and problem-solving, I specialize in building efficient and scalable applications.
					My academic journey has equipped me with expertise in algorithms, data structures, and cybersecurity principles.
				</p>
				<p className="about-text">
					I have a particular interest in full-stack development, cloud computing, and security.
					When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities.
				</p>
			</div>
		</div>
	);
}
