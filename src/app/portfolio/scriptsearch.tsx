import {
	FirebaseOriginal,
	GithubactionsOriginal,
	GithubOriginal,
	GoOriginal,
	PuppeteerOriginal,
	PytestOriginal,
	PythonOriginal,
	ReactOriginal,
} from "devicons-react";
import Image from "next/image";

const scriptsearch_frontend: string = String.raw`https://github.com/Script-Search/frontend`;
const scriptsearch_backend: string = String.raw`https://github.com/Script-Search/backend`;
const scriptsearch_report: string = String.raw`https://raw.githubusercontent.com/Script-Search/Report/main/Capstone%20Project%20Report.pdf`;

export default function ScriptSearch() {
	return (
		<div>
			<a href="#scriptsearch" className="skip-link">
				Skip to Script Search
			</a>
			<h2 role="heading" aria-level={2}>
				Script Search 🔎
			</h2>
			<div className="scriptsearch">
				<Image
					className="logo_right"
					src="https://script-search.github.io/frontend/ScriptSearch_New_Logo.png"
					alt="ScriptSearch 🔎"
					width={398}
					height={396}
					priority={false}
					loading="eager"
				/>
				<h3 className="h3">Overview</h3>
				<p className="scriptsearch">
					ScriptSearch 🔎 is a full-stack web application designed to
					revolutionize the way users interact with video content.
					<br />
					Traditional video platforms often make it difficult to
					locate precise information within lengthy videos, especially
					educational or technical content.
					<br />
					ScriptSearch solves this by enabling transcript-based
					keyword search, providing timestamped video segments where
					the terms appear.
					<br />
					Users simply input a keyword or phrase, and ScriptSearch
					returns direct links to relevant moments in YouTube videos.
					<br />
				</p>
				<p className="scriptsearch">
					This project was developed as part of a capstone initiative,
					driven by real-world research, user needs, and performance
					benchmarks.
					<br />
					It combines accessible UI design, cloud-based microservices,
					and scalable real-time indexing to provide a seamless and
					responsive experience.
				</p>
				<h3 className="h3">The Problem</h3>
				<p className="scriptsearch">
					In today&apos;s digital era, video is a dominant medium for
					sharing knowledge. <br />
					Platforms like YouTube host an immense archive of
					educational, instructional, and professional content. <br />
					However, the search functionality is largely limited to
					titles, descriptions, and tags &mdash; metadata that often
					lacks precision and depth.
				</p>
				<p className="scriptsearch">
					For users trying to find a specific concept explained in a
					45-minute lecture or a particular quote from a podcast,
					traditional keyword-based search is inefficient and
					frustrating. <br />
					This gap leads to:
				</p>
				<ul className="scriptsearch">
					<li>
						Time wasted scrubbing through video timelines manually.
					</li>
					<li>
						Difficulty revisiting key moments from previously
						watched content.
					</li>
					<li>
						Inaccessibility for users with cognitive or time
						constraints.
					</li>
				</ul>
				<p className="scriptsearch">
					We identified that a transcript-driven search model &mdash;
					similar to searching through a document &mdash; could solve
					this issue.
				</p>
				<h3>The Solution & Impact</h3>
				<p className="scriptsearch">
					ScriptSearch addresses this need through a combination of
					web scraping, natural language indexing, and real-time
					querying.
					<br />
					Here&apos;s how it works:
				</p>
				<ul className="scriptsearch">
					<li>
						<b>Transcript Extraction:</b> Scripts are either pulled
						from YouTube&apos;s auto-generated transcripts or
						extracted using custom scraping tools.
					</li>
					<li>
						<b>Indexing & Search:</b> These transcripts are indexed
						using <a href="https://typesense.org/">Typesense</a>, an
						open-source search engine optimized for speed and typo
						tolerance.
					</li>
					<li>
						<b>User Interface:</b> A lightweight, accessible
						frontend allows users to search for terms and instantly
						receive timestamped results.
					</li>
					<li>
						<b>Cloud Microservices:</b> A distributed scraping
						system powered by Go-based microservices and Google
						Cloud Pub/Sub ensures rapid ingestion of video data.
					</li>
				</ul>
				<h4>Key Features:</h4>
				<ul className="scriptsearch">
					<li>
						&#x1F50D; Instant search with typo-tolerant results{" "}
					</li>
					<li>
						&#x23F1; Timestamped links to exact moments in the video
					</li>
					<li>&#x1F3AF; Context-rich result previews</li>
					<li>
						&#x1F4C8; Sub-20s indexing and querying for new videos
					</li>
					<li>
						&#x267F; Accessibility-first UI tested with screen
						readers
					</li>
				</ul>
				<h4>Real-World Impact:</h4>
				<p className="scriptsearch">
					ScriptSearch was tested across a sample group of 25 users in
					academia and tech.
					<br />
					Over 80% of users reported a major improvement in
					information retrieval speed, and several identified
					previously "lost" moments they were able to quickly recover.
					<br />
					The system also laid groundwork for use cases in:
				</p>
				<ul className="scriptsearch">
					<li>Educational platforms</li>
					<li>Corporate training</li>
					<li>Legal and compliance video reviews</li>
				</ul>
				<h3 className="h3">Technology Stack</h3>
				<div className="tech-stack">
					<div className="stack-item">
						<span>Backend:</span>
						<GoOriginal size="4rem" aria-label="Go" />
						<PythonOriginal size="4rem" aria-label="Python" />
					</div>
					<div className="stack-item">
						<span>Frontend:</span>
						<ReactOriginal size="4rem" aria-label="React" />
					</div>
					<div className="stack-item">
						<span>Database & Search:</span>
						<FirebaseOriginal size="4rem" aria-label="Firebase" />
						<span>
							<a
								href="https://typesense.org/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image
									src="https://avatars.githubusercontent.com/u/19822348?v=4"
									alt="Typesense"
									width={460}
									height={460}
									className="logo"
								/>
							</a>
						</span>
					</div>
					<div className="stack-item">
						<span>Cloud Infrastructure:</span>
						<Image
							src="/assets/images/Cloud Functions Logo.svg"
							alt="Google Cloud Functions"
							width={4}
							height={4}
							priority={false}
							loading="eager"
							className="logo"
						/>
						<Image
							src="/assets/images/PubSub Logo.svg"
							alt="Google Pub/Sub"
							width={4}
							height={4}
							priority={false}
							loading="eager"
							className="logo"
						/>
						<Image
							src="/assets/images/Cloud Run Logo.svg"
							alt="Google Cloud Run"
							width={4}
							height={4}
							priority={false}
							loading="eager"
							className="logo"
						/>
					</div>
					<div className="stack-item">
						<span>Scraping Tools:</span>
						<Image
							src="https://repository-images.githubusercontent.com/307260205/b6a8d716-9c7b-40ec-bc44-6422d8b741a0"
							alt="YT-DLP"
							width={500}
							height={500}
							priority={false}
							loading="eager"
							className="logo"
						/>
						<PuppeteerOriginal size="4rem" aria-label="Puppeteer" />
					</div>
					<div className="stack-item">
						<span>Testing:</span>
						<PytestOriginal size="4rem" aria-label="Pytest" />
					</div>
					<div className="stack-item">
						<span>Accessibility:</span>
						<span>
							ARIA roles, semantic HTML, keyboard navigation,
							screen reader support
						</span>
					</div>
					<div className="stack-item">
						<span>Deployment:</span>
						<span>GitHub Pages (Frontend)</span>
						<Image
							src="/assets/images/Cloud Run Logo.svg"
							alt="Google Cloud Run"
							width={4}
							height={4}
							priority={false}
							loading="eager"
							className="logo"
						/>
					</div>
					<div className="stack-item">
						<span>Version Control & CI:</span>
						<GithubOriginal
							size="4rem"
							aria-label="GitHub"
							className="light"
						/>
						<GithubactionsOriginal
							size="4rem"
							aria-label="GitHub Actions"
						/>
					</div>
				</div>
			</div>
			<h3>Resources</h3>
			<p className="scriptsearch">
				<a href={scriptsearch_frontend}>Frontend GitHub Repository</a>
				<br />
				<a href={scriptsearch_backend}>Backend GitHub Repository</a>
				<br />
			</p>
			<div className="youtube">
				<iframe
					className="youtube"
					src="https://www.youtube.com/embed/jeOV_euLox4"
					title="ScriptSearch 🔎"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				/>
			</div>
			<div className="pdf_document">
				<iframe
					className="pdf_document"
					src={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${scriptsearch_report}#zoom=page-width&sidebar=0`}
					title="Strassen's Matrix Multiplication Report"
				/>
			</div>
		</div>
	);
}
