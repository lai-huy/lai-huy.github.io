import Image from "next/image";

const chess: string = String.raw`https://github.com/lai-huy-075/Chess`;

export default function Chess() {
	return (
		<div>
			<h2 className="h2" role="heading" aria-level={2}>
				Chess
			</h2>
			<div className="chess">
				<Image
					className="logo_right"
					src="https://app.fide.com/upload/28659/6bd8407bf6d5ceee8602e3fad4c3511f.jpg"
					alt="Chess"
					width={1200}
					height={725}
					priority={false}
					loading="eager"
				/>
				<p className="chess">
					A personal project I developed was a Java Chess program.
					<br />
					This project assisted me in learning the build-in Java GUI
					Libraries such as Java Swing.
					<br />
					External libraries such as JavaFX were not used for this
					project.
				</p>
				<p className="chess">
					Additionally, this projeect helped me learn about the
					software design process.
					<br />
					Software engineering tasks such as Design, Implementation,
					Testing and Maintanence.
					<br />
					This also assisted me alot in learning about bug testing and
					determining the origin of bugs.
				</p>
				<p className="chess">
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
				</p>
				<p className="chess">
					The{" "}
					<a href={chess} target="_blank" rel="noopener noreferrer">
						source code for this project can be found on GitHub
					</a>
					.
				</p>
			</div>
		</div>
	);
}
