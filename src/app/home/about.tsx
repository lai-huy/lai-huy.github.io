const mcs: string = String.raw`https://catalog.tamu.edu/graduate/colleges-schools-interdisciplinary/engineering/computer-science/mcs/#programrequirementstext`;
const bs_cs: string = String.raw`https://catalog.tamu.edu/undergraduate/engineering/computer-science/bs/#programrequirementstext`;
const cyber_minor: string = String.raw`https://catalog.tamu.edu/undergraduate/engineering/cybersecurity-minor/#programrequirementstext`;
const math_minor: string = String.raw`https://catalog.tamu.edu/undergraduate/arts-and-sciences/mathematics/minor/#programrequirementstext`;
const tamu: string = String.raw`https://www.tamu.edu/`;

export default function About() {
	return (
		<div>
			<a href="#about" className="skip-link">
				Skip to about me
			</a>
			<div className="about" role="heading" aria-level={2}>
				<span className="about">About Me</span>
			</div>
			<div id="about">
				<p className="about">
					Howdy! I am a student at{" "}
					<a href={tamu}>Texas A&M University</a> currently studying
					for a <a href={mcs}>Master of Computer Science</a>.
					<br />
					<br />I received my{" "}
					<a href={bs_cs}>
						Bachelor of Science Computer Science
					</a>{" "}
					from <a href={tamu}>Texas A&M University</a> .
					<br />I also have a{" "}
					<a href={cyber_minor}>Minor in Cybersecurity</a> and a{" "}
					<a href={math_minor}> Minor in Mathematics</a>.
				</p>
			</div>
		</div>
	);
}
