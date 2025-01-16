import Navbar from "../navigation/nav";
import "../navigation/nav.scss";
import Awards from "./awards";
import DevEnv from "./devenv";
import Interest from "./interest";
import "./qualifications.scss";
import Resume from "./resume";
import Skill from "./skill";

export default function Qualifications() {
	return (
		<main className="page">
			<Navbar />
			<div className="content">
				<header className="qualifications">
					<h1>Technical Qualifications</h1>
				</header>

				<Resume />
				<Awards />
				<Skill />
				<DevEnv />
				<Interest />
			</div>
		</main>
	);
}
