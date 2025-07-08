import Navbar from "../navigation/nav";
import "../navigation/nav.scss";
import BVCOG from "./bvcog";
import Chess from "./chess";
import Clip from "./clip";
import MPM from "./mpm";
import "./portfolio.scss";
import POS from "./pos";
import RoboMasters from "./robomasters";
import ScriptSearch from "./scriptsearch";
import Skyblock from "./skyblock";
import Strassen from "./strassen";
import { ContentLayout } from "../components/layout";
import "../components/layout.scss";

export default function Portfolio() {
	return (
		<main className="page">
			<Navbar />
			<ContentLayout isPortfolio>
				<div className="content">
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
				</div>
			</ContentLayout>
		</main>
	);
}
