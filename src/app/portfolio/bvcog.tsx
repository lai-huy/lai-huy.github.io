import {
	CucumberPlain,
	GithubactionsOriginal,
	GithubOriginal,
	HerokuOriginal,
	PostgresqlOriginal,
	RailsOriginalWordmark,
	ReactOriginal,
	RspecOriginal,
	RubyOriginal,
} from "devicons-react";
import Image from "next/image";

const bvcog: string = String.raw`https://github.com/BVCOG-Contract-Management/BVGOG-Contract-Manager`;
const bvcog_report: string = String.raw`https://raw.githubusercontent.com/BVCOG-Contract-Management/BVGOG-Contract-Manager/main/documentation/Fall2023/BVCOG_FinalReport.pdf`;

export default function BVCOG() {
	return (
		<div>
			<a href="#bvcog" className="skip-link">
				Skip to BVCOG CMS
			</a>
			<h2 className="h2" role="heading" aria-level={2}>
				Brazos Valley Council of Governments Contract Management System
			</h2>
			<div className="bvcog">
				<Image
					className="logo_left"
					src="/assets/images/BVCOG.png"
					alt="Brazos Valley Council of Governments"
					width={1080}
					height={648}
					priority={false}
					loading="eager"
				/>
				<h3 className="h3">Overview</h3>
				<p className="bvcog">
					The Brazos Valley Council of Governments (BVCOG) Contract
					Management System is a custom-built, full-stack web
					application that modernizes how contracts are handled within
					a regional government organization.
					<br />
					Designed and developed by a student-led engineering team,
					the application replaces BVCOG&apos;s outdated,
					email-centric process with a centralized digital platform.
				</p>
				<p className="bvcog">
					The system provides a structured way to manage contract
					data, track important dates, review vendors, and generate
					reports &mdash; reducing administrative risks and increasing
					transparency.
					<br />
					It was developed in close collaboration with BVCOG staff,
					ensuring that real-world workflows and pain points directly
					influenced the system design.
				</p>

				<h3 className="h3">The Problem</h3>
				<p className="bvcog">
					Prior to this project, BVCOG&apos;s contract management
					relied heavily on a shared email inbox, which introduced
					major inefficiencies and risks:
				</p>
				<ul className="bvcog">
					<li>
						<b>Lack of Metadata:</b> Contracts were submitted
						without key details like expiration dates, responsible
						parties, or renewal conditions.
					</li>
					<li>
						<b>Manual Oversight:</b> Tracking contract statuses and
						deadlines was inconsistent and depended on individual
						memory or spreadsheets.
					</li>
					<li>
						<b>Vendor Confusion:</b> Historical performance data was
						unavailable, leading to repeated engagements with
						underperforming vendors.
					</li>
					<li>
						<b>Financial Risk:</b> Several instances were reported
						where contracts were auto-renewed or extended beyond
						their intended scope due to missed deadlines.
					</li>
				</ul>
				<p className="bvcog">
					These issues presented not just operational friction but
					also legal and financial vulnerabilities.
					<br />A modern, structured system was urgently needed.
				</p>

				<h3>The Solution & Impact</h3>
				<p className="bvcog">
					BVCOG CMS was developed to solve the inefficiencies of
					manual contract handling through a modern, metadata-driven
					platform tailored for administrative workflows.
					<br />
					Here&apos;s how it works:
				</p>
				<ul className="bvcog">
					<li>
						<b>Smart Contract Submission:</b> Users submit contracts
						through structured forms that require critical metadata
						like expiration dates, vendor details, and renewal
						status.
					</li>
					<li>
						<b>Vendor Feedback System:</b> Inspired by product
						reviews, BVCOG staff can rate and comment on vendor
						performance, creating a referenceable history for future
						decisions.
					</li>
					<li>
						<b>Automated Reports:</b> Admins can generate PDF
						summaries of contracts and vendor data for audits or
						internal presentations, reducing the need for manual
						compilation.
					</li>
					<li>
						<b>Reliable Testing Pipeline:</b> The system leverages
						RSpec for unit testing and Cucumber for behavior-driven
						development, ensuring reliability and maintainability.
					</li>
				</ul>

				<h4>Key Features:</h4>
				<ul className="bvcog">
					<li>&#x1F4C1; Metadata-enforced contract creation</li>
					<li>&#x1F50D; Vendor history and feedback integration</li>
					<li>&#x1F4C4; Exportable, filtered PDF reports</li>
					<li>&#x1F9EA; Full test suite with RSpec and Cucumber</li>
				</ul>

				<h4>Real-World Impact:</h4>
				<p className="bvcog">
					The system was adopted by BVCOG staff and tested with real
					contract workflows.
					<br />
					Staff reported improved clarity, reduced email volume, and
					fewer missed deadlines.
					<br />
					Most importantly, the CMS introduced an auditable trail of
					contract decisions, which directly supports future legal and
					operational reviews.
				</p>
				<h3 className="h3">Technology Stack</h3>
				<div className="tech-stack">
					<div className="stack-item">
						<span>Backend:</span>
						<RailsOriginalWordmark
							size="4rem"
							aria-label="Ruby on Rails"
						/>
						<RubyOriginal size="4rem" aria-label="Ruby" />
					</div>
					<div className="stack-item">
						<span>Frontend:</span>
						<ReactOriginal size="4rem" aria-label="React" />
					</div>
					<div className="stack-item">
						<span>Database:</span>
						<PostgresqlOriginal
							size="4rem"
							aria-label="PostgreSQL"
						/>
					</div>
					<div className="stack-item">
						<span>Testing:</span>
						<RspecOriginal size="4rem" aria-label="RSpec" />
						<CucumberPlain
							size="4rem"
							color="#23d96c"
							aria-label="Cucumber"
						/>
					</div>
					<div className="stack-item">
						<span>Authentication:</span>
						<a href="https://github.com/heartcombo/devise">
							<Image
								src="https://raw.githubusercontent.com/heartcombo/devise/main/devise.png"
								alt="Devise"
								width={300}
								height={125}
								priority={false}
								loading="eager"
								className="logo"
							/>
						</a>
					</div>
					<div className="stack-item">
						<span>PDF Generation:</span>
						<a href="https://github.com/prawnpdf/prawn">
							<Image
								src="https://prawnpdf.org/images/prawn.png"
								alt="Prawn"
								width={141}
								height={142}
								priority={false}
								loading="eager"
								className="logo"
							/>
						</a>
					</div>
					<div className="stack-item">
						<span>Deployment:</span>
						<HerokuOriginal size="4rem" aria-label="Heroku" />
					</div>
					<div className="stack-item">
						<span>Version Control & CI:</span>
						<GithubOriginal size="4rem" aria-label="GitHub" />
						<GithubactionsOriginal
							size="4rem"
							aria-label="GitHub Actions"
						/>
					</div>
					<div className="stack-item">
						<span>Accessibility:</span>
						<span>WAI-ARIA practices, screen reader testing</span>
					</div>
				</div>
			</div>

			<h3>Resources</h3>
			<p className="bvcog">
				<a href={bvcog}>GitHub repository</a>
			</p>
			<div className="youtube">
				<iframe
					className="youtube"
					src="https://www.youtube.com/embed/gBti422JxDE"
					title="BVCOG CMS Final Presentation & Demo"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				/>
			</div>
			<div className="pdf_document">
				<iframe
					className="pdf_document"
					src={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${bvcog_report}#zoom=page-width&sidebar=0`}
					title="BVCOG Contract Management System Report"
				/>
			</div>
		</div>
	);
}
