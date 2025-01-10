"use client";

import "./home.scss";
import Link from "next/link";
import { GithubOriginal, LinkedinOriginal } from "devicons-react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const mcs: string =
	"https://catalog.tamu.edu/graduate/colleges-schools-interdisciplinary/engineering/computer-science/mcs/#programrequirementstext";
const bs_cs: string =
	"https://catalog.tamu.edu/undergraduate/engineering/computer-science/bs/#programrequirementstext";
const cyber_minor: string =
	"https://catalog.tamu.edu/undergraduate/engineering/cybersecurity-minor/#programrequirementstext";
const math_minor: string =
	"https://catalog.tamu.edu/undergraduate/arts-and-sciences/mathematics/minor/#programrequirementstext";
const github: string = "https://github.com/lai-huy";
const linkedin: string = "https://www.linkedin.com/in/huy-lai-93a2b4211/";
const email: string = "mailto:lai.huy.075@gmail.com";

export default function Home() {
	const handleGithubClick = () => {
		window.open(github, "_blank");
	};

	const handleLinkedinClick = () => {
		window.open(linkedin, "_blank");
	};

	const handleEmailClick = () => {
		window.open(email);
	};

	function isMobileDevice(): boolean {
		const userAgent =
			typeof window !== "undefined" ? navigator.userAgent : "";
		return /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/.test(
			userAgent
		);
	}

	const isMobile = isMobileDevice();

	return (
		<div
			className={`background ${isMobile ? "mobile" : "desktop"}`}
			role="main"
		>
			<header className="name">
				<h1>
					<span className="name">Huy Quang Lai</span>
				</h1>
			</header>
			<a href="#about" className="skip-link">
				Skip to about me
			</a>
			<div className="about" role="heading" aria-level={2}>
				<span className="about">About Me</span>
			</div>
			<div id="about">
				<p className="about">
					Howdy! I am a student at{" "}
					<Link href="https://www.tamu.edu/">
						Texas A&M University
					</Link>{" "}
					currently studying for a Master of Computer Science.
				</p>
			</div>

			<a href="#prog" className="skip-link">
				Skip to MCS Requirements
			</a>
			<div id="prog">
				<p className="prog_req">
					Learn more about the MCS <Link href={mcs}>here</Link>.
				</p>
			</div>

			<div id="about">
				<p className="about">
					I received my Bachelor of Science in Computer Science from{" "}
					<Link href="https://www.tamu.edu/">
						Texas A&M University
					</Link>{" "}
					.<br />I also have a Minor in Cybersecurity and a Minor in
					Mathematics.
				</p>
			</div>

			<a href="#prog" className="skip-link">
				Skip to BS Requirements
			</a>
			<div id="prog">
				<p className="prog_req">
					Learn more about the BS in Computer Science{" "}
					<Link href={bs_cs}>here</Link>.<br />
					Learn more about the Minor in Cybersecurity{" "}
					<Link href={cyber_minor}>here</Link>.<br />
					Learn more about the Minor in Mathematics{" "}
					<Link href={math_minor}>here</Link>.
				</p>
			</div>

			<a href="#social" className="skip-link">
				Skip to my online profiles.
			</a>
			<div id="social">
				<p className="links">
					<button
						aria-label="Go to my GitHub profile"
						className="btn-hover github"
						onClick={handleGithubClick}
					>
						<GithubOriginal size="85" className="devicon github" />
					</button>

					<button
						aria-label="Go to my LinkedIn profile"
						className="btn-hover linkedin"
						onClick={handleLinkedinClick}
					>
						<LinkedinOriginal size="85" className="devicon" />
					</button>

					<button
						aria-label="Send me an email"
						className="btn-hover email"
						onClick={handleEmailClick}
					>
						<FontAwesomeIcon icon={faEnvelope} />
					</button>
				</p>
			</div>
		</div>
	);
}
