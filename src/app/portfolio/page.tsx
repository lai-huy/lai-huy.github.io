import Link from "next/link";
import Navbar from "../navigation/nav";
import "./portfolio.scss";

import BVCOG from "./bvcog";
import Clip from "./clip";
import POS from "./pos";
import RoboMasters from "./robomasters";
import ScriptSearch from "./scriptsearch";
import Strassen from "./strassen";
import MPM from "./mpm";

const chess: string = "https://github.com/lai-huy-075/Chess";
const forge: string =
	"https://files.minecraftforge.net/net/minecraftforge/forge/";
const skyblock: string = "https://wiki.hypixel.net/Introduction";
const skyblock_gh: string = "https://github.com/MrPineapple070/SkyBlock-1.19.2";

export default function Portfolio() {
	return (
		<div className="page">
			<Navbar />
			<div className="content">
				<header className="portfolio">
					<h1>Technical Portfolio</h1>
				</header>

				<BVCOG />
				<ScriptSearch />
				<Strassen />
				<RoboMasters />
				<POS />
				<Clip />
				<MPM />

				<a href="#chess" className="skip-link">
					Skip to chess
				</a>
				<div className="h2" role="heading" aria-level={2}>
					Chess
				</div>
				<div id="chess">
					<img
						className="right_wrap"
						src="https://repository-images.githubusercontent.com/488395489/22d1519c-feda-4238-8fce-e01b690b5094"
						alt="Chess"
						fetchPriority="low"
						loading="lazy"
						decoding="async"
					/>
					<p className="chess">
						A personal project I developed was a Java Chess program.
						<br />
						This project assisted me in learning the build-in Java
						GUI Libraries such as Java Swing.
						<br />
						External libraries such as JavaFX were not used for this
						project.
						<br />
						<br />
						Additionally, this projeect helped me learn about the
						software design process.
						<br />
						Software engineering tasks such as Design,
						Implementation, Testing and Maintanence.
						<br />
						This also assisted me alot in learning about bug testing
						and determining the origin of bugs.
						<br />
						<br />
						Future plans for this software include:
						<br />
						Connecting the program to the internet to allow users to
						play on this software remotely
						<br />
						Add security to ensure only moves are sent and
						processed.
						<br />
						Training a Machine Learning algorithm to play chess.
						<br />
						Implementing other variants of Chess such as Chess960,
						Fog of War, or Duck Chess.
						<br />
						<br />
						The source code for this project can be found{" "}
						<Link href={chess}>here</Link>.
					</p>
				</div>

				<a href="#skyblock" className="skip-link">
					Skip to Hypixel SkyBlock
				</a>
				<div className="h2" role="heading" aria-level={2}>
					SkyBlock Minecraft Mod
				</div>
				<div id="skyblock">
					<img
						className="left_wrap"
						src="/assets/images/SkyBlock.jpg"
						alt="Hypixel SkyBlock"
						fetchPriority="low"
						loading="lazy"
						decoding="async"
					/>
					<p className="sb">
						Another personal project I developed was a Minecraft
						Mod.
						<br />
						This projects attempts to emulate the functionality seen
						in Hypixel&apos;s SkyBlock.
						<br />
						This project assisted me in learning about working with
						existing code and adding modifications ontop of it.
						<br />
						This also assisted me in learning client-side and
						server-side programming and allocate tasks to each
						accordingly.
						<br />
						<br />
						This mod was developed using Forge as a framework.
						<br />
						Learn more about Minecraft Forge{" "}
						<Link href={forge}>here</Link>.<br />
						<br />
						This project also helped me understand maintaining a
						standard already established.
						<br />
						For example image file formats, renduring of models, and
						the generation of loot tables were standardized within
						the code.
						<br />
						<br />
						More information about SkyBlock can be found{" "}
						<Link href={skyblock}>here</Link>.<br />
						The source code for this can be found{" "}
						<Link href={skyblock_gh}>here</Link>.<br />
						<br />
						<img
							className="logo"
							src="/assets/images/Forge_Logo.png"
							alt="Minecraft Forge"
							fetchPriority="low"
							loading="lazy"
							decoding="async"
						/>
					</p>
				</div>
			</div>
		</div>
	);
}
