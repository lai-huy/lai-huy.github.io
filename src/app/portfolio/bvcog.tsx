import { CucumberPlain, RspecOriginal } from "devicons-react";

const bvcog: string = String.raw`https://github.com/BVCOG-Contract-Management/BVGOG-Contract-Manager`;
const bvcog_report: string = String.raw`https://raw.githubusercontent.com/BVCOG-Contract-Management/BVGOG-Contract-Manager/main/documentation/Fall2023/BVCOG_FinalReport.pdf`;

export default function BVCOG() {
	return (
		<div>
			<a href="#bvcog" className="skip-link">
				Skip to BVCOG CMS
			</a>
			<div className="h2" role="heading" aria-level={2}>
				Brazos Valley Council of Governments Contract Management System
			</div>
			<div className="bvcog">
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
					<CucumberPlain
						color="#00A818"
						size="100"
						aria-label="Cucumber"
					/>
					<RspecOriginal size="100" aria-label="RSpec" />
				</p>
			</div>
			<div className="bvcog">
				<p className="bvcog">
					You can view the{" "}
					<a href={bvcog}>
						BVCOG Contract Management System source code on GitHub
					</a>
					.
					<br />
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
			<p className="pdf_document">
				<iframe
					className="pdf_document"
					src={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${bvcog_report}#zoom=page-width&sidebar=0`}
					title="BVCOG Contract Management System Report"
				/>
			</p>
		</div>
	);
}
