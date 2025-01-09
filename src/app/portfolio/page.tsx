import "./portfolio.scss";
import Link from "next/link";

import {
	CucumberPlain,
	JupyterOriginalWordmark,
	NodejsOriginal,
	NumpyOriginal,
	PandasOriginal,
	PythonOriginal,
	ReactOriginal,
	RspecOriginal,
} from "devicons-react";

const bvcog: string =
	"https://github.com/BVCOG-Contract-Management/BVGOG-Contract-Manager";
const chess: string = "https://github.com/lai-huy-075/Chess";
const forge: string =
	"https://files.minecraftforge.net/net/minecraftforge/forge/";
const mpm: string = "https://github.com/lai-huy/CSCE-421-Final-Project/";
const rm_github: string = "https://github.com/TAMU-Robomasters/Simulation";
const skyblock: string = "https://wiki.hypixel.net/Introduction";
const skyblock_gh: string = "https://github.com/MrPineapple070/SkyBlock-1.19.2";
const scriptsearch_frontend: string =
	"https://github.com/Script-Search/frontend";
const scriptsearch_backend: string = "https://github.com/Script-Search/backend";
const tamu_rm: string = "https://tamurobomasters.com/";
const report_421: string =
	"https://github.com/lai-huy/CSCE-421-Final-Project/raw/master/Final%20report/Final%20Project.pdf";
const report_735: string =
	"https://github.com/lai-huy/StrassenMP/raw/main/Major%20Project.pdf";

export default function Portfolio() {
	return (
		<div>
			<header className="portfolio">
				<h1>Technical Portfolio</h1>
			</header>

			<a href="#bvcog" className="skip-link">
				Skip to BVCOG CMS
			</a>
			<div className="h2" role="heading" aria-level={2}>
				Brazos Valley Council of Governments Contract Management System
			</div>
			<div id="bvcog">
				<img
					className="left_wrap"
					src="/assets/images/BVCOG.png"
					alt="Brazos Valley Council of Governments"
					fetchPriority="low"
					loading="lazy"
					decoding="async"
				/>
				<p className="bvcog">
					A full stack application to serve as a contract management
					system for Brazos Valley Council of Governments.
					<br />
					BVCOG sent contracts electronically to the
					contracts@bvcog.org email address, with very little
					description as to what the contract was about, who it was
					with, when it expired, and whether it could be renewed.
					<br />
					Sometimes contracts would expire without them taking the
					appropriate action, or they would continue perpetually on a
					month-to-month basis resulting in disallowed costs.
					<br />
					<br />
					Some features include an Amazon-style review system for
					vendors. Users can review vendors based on how previous
					contracts went so that better vendors can be selected in the
					future.
					<br />
					Highly-customizable reports can be generated in Portable
					Document Format for both users and contracts.
					<br />
					Uses RSpec and Cucumber to ensure test-driven development
					and behavior-driven development.
					<br />
					<CucumberPlain color="#00A818" size="100" />
					<RspecOriginal size="100" />
				</p>
			</div>
			<div id="bvcog">
				<p className="bvcog">
					You can view the source code for this project{" "}
					<a href={bvcog}>here</a>
					.<br />
					You can watch this video below that demonstrates the product
					that a team of students and I worked on.
				</p>
			</div>

			<p className="youtube">
				<iframe
					className="youtube"
					src="https://www.youtube.com/embed/txoTtKQXOrc"
					title="BVCOG CMS Final Presentation & Demo"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				/>
			</p>

			<a href="#scriptsearch" className="skip-link">
				Skip to Script Search
			</a>
			<div className="h2" role="heading" aria-level={2}>
				Script Search 🔎
			</div>
			<div id="scriptsearch">
				<img
					className="right_wrap"
					src="/assets/images/ScriptSearch Logo.svg"
					alt="ScriptSearch 🔎"
					fetchPriority="low"
					loading="lazy"
					decoding="async"
				/>

				<p className="scriptsearch">
					Retrieving specific information from vast video data on
					platforms like YouTube presents a formidable challenge due
					to the limitations of traditional metadata-based methods.
					<br />
					These methods often struggle to capture the intricacies of
					video content accurately.
					<br />
					Additionally, the sheer amount of content uploaded to
					YouTube ensures that a comprehensively nuanced search would
					take an unreasonable amount of time and effort.
					<br />
					By storing YouTube transcripts and developing a dedicated
					website, this solution aims to enhance search experiences,
					optimizing performance while maintaining a balance between
					speed and accuracy.
					<br />
					The system enables flexible searches with sorting and
					filtering capabilities, empowering users to efficiently
					locate videos based on specific words or phrases they
					recall.
					<br />
					Evaluation encompasses rigorous unit testing, integration
					testing, user acceptance testing, and user studies to ensure
					both functionality and user satisfaction.
					<br />
					Overall, the website provides an effective tool for
					navigating and accessing video content with precision and
					ease.
					<br />
					You can view the source code for the front end{" "}
					<Link href={scriptsearch_frontend}>here</Link> and the back
					end <Link href={scriptsearch_backend}>here</Link>.
					<br />
					<img
						className="logo"
						src="/assets/images/Cloud Functions Logo.svg"
						alt="Minecraft Forge"
						fetchPriority="low"
						loading="lazy"
						decoding="async"
					/>
					<img
						className="logo"
						src="/assets/images/PubSub Logo.svg"
						alt="Minecraft Forge"
						fetchPriority="low"
						loading="lazy"
						decoding="async"
					/>
				</p>
			</div>
			<p className="youtube">
				<iframe
					className="youtube"
					src="https://www.youtube.com/embed/jeOV_euLox4?si=wxvLCOi18dTVhi75"
					title="ScriptSearch 🔎"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				/>
			</p>

			<a href="#strassen" className="skip-link">
				Skip to Strassen&apos;s Algorithm
			</a>
			<div className="h2" role="heading" aria-level={2}>
				StrassenMP
			</div>
			<div id="strassen">
				<img
					className="right_wrap"
					src="/assets/images/OpenMP Logo.png"
					alt="OpenMP"
					fetchPriority="low"
					loading="lazy"
					decoding="async"
				/>
				<p className="strassen">
					Implemented a parallel version of Strassen&apos;s matrix
					multiplication algorithm using OpenMP directives in C/C++.
					<br />
					The project aimed to leverage parallelism to improve the
					efficiency of large-scale matrix multiplication tasks.
					<br />
					Developed a scalable parallel algorithm based on
					Strassen&apos;s matrix multiplication technique, utilizing
					OpenMP directives for parallelization.
					<br />
					Optimized the code to efficiently distribute workload across
					multiple threads, achieving significant speedup compared to
					the sequential version.
					<br />
					Conducted rigorous testing and performance analysis to
					evaluate the scalability and efficiency of the parallel
					implementation across various input sizes and hardware
					configurations.
					<br />
					Documented the design, implementation details, and
					performance evaluation results comprehensively for future
					reference and potential publication.
				</p>
			</div>

			<p className="pdf_document">
				<iframe
					className="pdf_document"
					src={`https://docs.google.com/viewer?url=${report_735}&embedded=true`}
					title="Strassen's Matrix Multiplication Report"
				/>
			</p>

			<a href="#robomasters" className="skip-link">
				Skip to TAMU RoboMasters
			</a>
			<div className="h2" role="heading" aria-level={2}>
				TAMU RoboMasters
			</div>
			<div id="robomasters">
				<img
					className="right_wrap"
					src="/assets/images/RoboMastersFullTeam.jpg"
					alt="TAMU RoboMasters"
					fetchPriority="low"
					loading="lazy"
					decoding="async"
				/>
				<p className="tamu_rm">
					A project that I have been apart of is the Simulation
					subteam.
					<br />
					This subteam was a part of the Computer Vision team, which
					was, intern, part of TAMU RoboMasters.
					<br />
					Some of the work I did on this project can be found on the
					team&apos;s GitHub page found{" "}
					<Link href={rm_github}>here</Link>.
					<br />
					<br />
					The purpose of the simulation was to be able to emulate the
					robots developed by the team along with their control
					capabilities.
					<br />
					Certain robots would be manually controlled while others
					were automated.
					<br />
					At times, the physical robots were unavailable to the
					Computer Vision team as the Hardware team were working on
					the robots to make them better.
					<br />
					<br />
					To solve this problem, the CV Team created the Simulation
					SubTeam to create a simulation.
					<br />
					With this Simulation, they would hope to be able to test
					their new algorithms.
					<br />
					Some of these algorithms include, new de-noise algorithms,
					more optimal armor plate detector.
					<br />
					Learn more about TAMU RoboMasters{" "}
					<Link href={tamu_rm}>here</Link>.
				</p>
			</div>

			<p className="youtube">
				<iframe
					title="About TAMU RoboMasters"
					className="youtube"
					src="https://www.youtube.com/embed/U1AJqZkFVnw"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				/>
			</p>

			<a href="#pos" className="skip-link">
				Skip to point of sale system
			</a>
			<div className="h2" role="heading" aria-level={2}>
				Point of Sale System
			</div>
			<div id="pos">
				<img
					className="left_wrap"
					src="/assets/images/CFA_MSC.jpg"
					alt="Chick-fil-A at the Memorial Student Center"
					fetchPriority="low"
					loading="lazy"
					decoding="async"
				/>
				<p className="pos">
					A Node.js and React project that creates a Point-of-Sale
					webpage for a Restaurant located at the Memorial Student
					Center at Texas A&M University. Our specific restaurant was
					Chick-fil-A.
					<br />
					Using Google OAuth to authenticate administrator logins,
					adequate role-based access control is enforced.
					<br />
					This project also uses a Google Translate API to ensure
					proper internationalization.
					<br />
					Finally, this project uses a weather API to display weather
					information as well as recomend certain items during cooler
					weather.
					<br />
					A custom REST API to communicate between the front-end and
					the back-end of the application.
					<br />
					<br />
					You can view the source code for this project{" "}
					<a href="https://github.com/CSCE315-Spring23/Team_44_Project_3">
						here
					</a>
					.
					<br />
					<ReactOriginal size="100" />
					<NodejsOriginal size="100" />
				</p>
			</div>

			<a href="#mpm" className="skip-link">
				Skip to Mortality Prediction Model
			</a>
			<div className="h2" role="heading" aria-level={2}>
				Mortality Prediction Model
			</div>
			<div id="mpm">
				<img
					className="mpm"
					src="https://xgboost.ai/images/logo/xgboost-logo.png"
					alt="Mortality Prediction Model"
					fetchPriority="low"
					loading="lazy"
					decoding="async"
				/>
				<p className="mpm">
					Developed a predictive in-hospital mortality model utilizing
					a dataset of several thousand patients.
					<br />
					Experimented with three different training methods and
					compared their perforce.
					<br />
					Used Logistic Regression, Random Forest, and Extreme
					Gradient Boosting to compare against the Professor&apos;s
					Model.
					<br />
					The model had a final Area Under the Receiver Operating
					Characteristic curve (AUC-ROC) Score of 0.89288 which was 5%
					better than the Professor&apos;s Model.
					<br />
					See the source code for this project{" "}
					<Link href={mpm}>here</Link>.
					<br />
					<NumpyOriginal size="128" />
					<PandasOriginal size="128" />
					<PythonOriginal size="128" />
					<JupyterOriginalWordmark size="128" />
				</p>
			</div>
			<p className="pdf_document">
				<iframe
					className="pdf_document"
					src={`https://docs.google.com/viewer?url=${report_421}&embedded=true`}
					title="Mortality Prediction Model Report"
				/>
			</p>

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
					This project assisted me in learning the build-in Java GUI
					Libraries such as Java Swing.
					<br />
					External libraries such as JavaFX were not used for this
					project.
					<br />
					<br />
					Additionally, this projeect helped me learn about the
					software design process.
					<br />
					Software engineering tasks such as Design, Implementation,
					Testing and Maintanence.
					<br />
					This also assisted me alot in learning about bug testing and
					determining the origin of bugs.
					<br />
					<br />
					Future plans for this software include:
					<br />
					Connecting the program to the internet to allow users to
					play on this software remotely
					<br />
					Add security to ensure only moves are sent and processed.
					<br />
					Training a Machine Learning algorithm to play chess.
					<br />
					Implementing other variants of Chess such as Chess960, Fog
					of War, or Duck Chess.
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
					Another personal project I developed was a Minecraft Mod.
					<br />
					This projects attempts to emulate the functionality seen in
					Hypixel&apos;s SkyBlock.
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
					For example image file formats, renduring of models, and the
					generation of loot tables were standardized within the code.
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
	);
}
