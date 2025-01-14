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
					for a Master of Computer Science.
				</p>
			</div>
			<a href="#prog" className="skip-link">
				Skip to MCS Requirements
			</a>
			<div id="prog">
				<p className="prog_req">
					Learn more about the MCS <a href={mcs}>here</a>.
				</p>
			</div>
			<div id="about">
				<p className="about">
					I received my Bachelor of Science in Computer Science from{" "}
					<a href={tamu}>Texas A&M University</a> .
					<br />I also have a Minor in Cybersecurity and a Minor in
					Mathematics.
				</p>
			</div>

			<a href="#prog" className="skip-link">
				Skip to BS Requirements
			</a>
			<div id="prog">
				<p className="prog_req">
					Learn more about the BS in Computer Science{" "}
					<a href={bs_cs}>here</a>.<br />
					Learn more about the Minor in Cybersecurity{" "}
					<a href={cyber_minor}>here</a>.<br />
					Learn more about the Minor in Mathematics{" "}
					<a href={math_minor}>here</a>.
				</p>
			</div>
		</div>
	);
}
