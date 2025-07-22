import Navbar from "../navigation/nav";
import BVCOG from "./bvcog";
import Chess from "./chess";
import Clip from "./clip";
import MPM from "./mpm";
import POS from "./pos";
import RoboMasters from "./robomasters";
import ScriptSearch from "./scriptsearch";
import Skyblock from "./skyblock";
import Strassen from "./strassen";
import { Layout } from "../components/scrolling";
import "../navigation/nav.scss";
import "./portfolio.scss";
import "../components/layout.scss";

export default function Portfolio() {
	return (
		<main className="page">
			<Navbar />
			<Layout isPortfolio>
				<header className="portfolio">
					<h1>Technical Portfolio</h1>
				</header>

				<BVCOG />
				<ScriptSearch />
				<Clip />
				<MPM />
				<RoboMasters />
				<Strassen />
				<POS />
				<Chess />
				<Skyblock />
			</Layout>
		</main>
	);
}
