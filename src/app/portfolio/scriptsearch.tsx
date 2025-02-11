import { FirebaseOriginal } from "devicons-react";

const scriptsearch_frontend: string = String.raw`https://github.com/Script-Search/frontend`;
const scriptsearch_backend: string = String.raw`https://github.com/Script-Search/backend`;
const scriptsearch_report: string = String.raw`https://raw.githubusercontent.com/Script-Search/Report/main/Capstone%20Project%20Report.pdf`;

export default function ScriptSearch() {
	return (
		<div>
			<a href="#scriptsearch" className="skip-link">
				Skip to Script Search
			</a>
			<div className="h2" role="heading" aria-level={2}>
				Script Search 🔎
			</div>
			<div id="scriptsearch">
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
					You can view the source code for the{" "}
					<a href={scriptsearch_frontend}>front end</a> and{" "}
					<a href={scriptsearch_backend}>back end</a>.
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
					<FirebaseOriginal size="100" />
				</p>
				<img
					className="right_wrap"
					src="/assets/images/ScriptSearch Logo.svg"
					alt="ScriptSearch 🔎"
					fetchPriority="low"
					loading="lazy"
					decoding="async"
				/>
			</div>
			<p className="youtube">
				<iframe
					className="youtube"
					src="https://www.youtube.com/embed/jeOV_euLox4"
					title="ScriptSearch 🔎"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				/>
			</p>
			<p className="pdf_document">
				<iframe
					className="pdf_document"
					src={`https://docs.google.com/viewer?url=${scriptsearch_report}&embedded=true`}
					title="Strassen's Matrix Multiplication Report"
				/>
			</p>
		</div>
	);
}
