import Image from "next/image";

const rm_github: string = "https://github.com/TAMU-Robomasters/Simulation";
const tamu_rm: string = "https://tamurobomasters.com/";

export default function RoboMasters() {
	return (
		<div>
			<h2 className="h2" role="heading" aria-level={2}>
				TAMU RoboMasters
			</h2>
			<div className="robomasters">
				<Image
					className="logo_left"
					src="/assets/images/RoboMastersFullTeam.jpg"
					alt="TAMU RoboMasters"
					width={5472}
					height={3648}
					priority={false}
					loading="eager"
				/>
				<p className="tamu_rm">
					A project that I have been apart of is the Simulation
					subteam.
					<br />
					This subteam was a part of the Computer Vision team, which
					was, intern, part of TAMU RoboMasters.
					<br />
					Some of the work I did on this project can be found on the
					team&apos;s <a href={rm_github} target="_blank" rel="noopener noreferrer">GitHub page</a>.
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
					Learn more about them by visiting{" "}
					<a href={tamu_rm} target="_blank" rel="noopener noreferrer">RoboMaster&apos;s homepage</a>.
				</p>
			</div>
			<div className="youtube">
				<iframe
					title="About TAMU RoboMasters"
					className="youtube"
					src="https://www.youtube.com/embed/U1AJqZkFVnw"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				/>
			</div>
		</div>
	);
}
