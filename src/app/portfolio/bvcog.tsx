import {
	BulmaPlain,
	CucumberPlain,
	GithubactionsOriginal,
	GithubOriginal,
	HerokuOriginal,
	JqueryOriginal,
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
					The BVCOG Contract Management System (CMS) is a web
					application enhanced in Fall 2023 by a Texas A&M CSCE 606
					team.
					<br />
					Building upon legacy code, the team delivered a more refined
					user experience with improved access control, dynamic forms,
					and precision-driven reporting.
				</p>
				<p className="bvcog">
					The Fall 2023 team introduced an upgraded role hierarchy for
					Admins, Gatekeepers, and Users, improved contract entry
					fields, and introduced logical workflows to streamline data
					entry, auditability, and reporting — all shaped by ongoing
					client feedback and in-person demos.
				</p>

				<h3 className="h3">Key Problems Addressed</h3>
				<ul className="bvcog">
					<li>
						<b>Unstructured Contract Input:</b> Users lacked
						guidance on entering key metadata.
					</li>
					<li>
						<b>Limited Permissions:</b> Access controls were
						insufficient, risking improper contract approval.
					</li>
					<li>
						<b>Confusing UI:</b> Vendor selection, date fields, and
						contract types needed clarification and better
						structure.
					</li>
				</ul>

				<h3>The Fall 2023 Enhancements</h3>
				<ul className="bvcog">
					<li>
						<b>Role-Based Permissions:</b> Introduced distinct
						privileges for Admins, Gatekeepers, and Users.
					</li>
					<li>
						<b>Improved Contract Entry:</b> Logical field ordering
						and added hints for usability.
					</li>
					<li>
						<b>Vendor Autocomplete:</b> Vendor search updated with
						real-time suggestions using jQuery.
					</li>
					<li>
						<b>Dynamic Contract Values:</b> Supports calculated,
						total, or non-monetary value contracts.
					</li>
					<li>
						<b>Contract Decision History:</b> Tracks rejections and
						updates with reasons.
					</li>
					<li>
						<b>Report Generation:</b> Filtered reporting by contract
						type with export capability.
					</li>
				</ul>

				<h4>Features Implemented:</h4>
				<ul className="bvcog">
					<li>&#x1F465; Role hierarchy (Admin, Gatekeeper, User)</li>
					<li>&#x1F50E; Vendor autocomplete via jQuery</li>
					<li>&#x1F4C4; Contract reports by type</li>
					<li>&#x1F4DD; Field hints and validation messages</li>
					<li>&#x1F4CB; Contract decision logging</li>
				</ul>

				<h4>User Feedback</h4>
				<p className="bvcog">
					The BVCOG team received positive feedback from stakeholders
					after four demo sessions.
					<br />
					Changes were iterative and based on direct guidance from
					administrators and real use-case simulations.
					<br />
					The final system significantly reduced errors and improved
					transparency.
				</p>

				<h3 className="h3">Technology Stack</h3>
				<div className="tech-stack">
					<div className="stack-item">
						<span>Backend:</span>
						<a href="https://rubyonrails.org/">
							<RailsOriginalWordmark
								size="4rem"
								aria-label="Ruby on Rails"
							/>
						</a>
						<a href="https://www.ruby-lang.org/en/">
							<RubyOriginal size="4rem" aria-label="Ruby" />
						</a>
					</div>
					<div className="stack-item">
						<span>Frontend:</span>
						<a href="https://react.dev/">
							<ReactOriginal size="4rem" aria-label="React" />
						</a>
					</div>
					<div className="stack-item">
						<span>Database:</span>
						<a href="https://www.postgresql.org/">
							<PostgresqlOriginal
								size="4rem"
								aria-label="PostgreSQL"
							/>
						</a>
					</div>
					<div className="stack-item">
						<span>Testing:</span>
						<a href="https://rspec.info/">
							<RspecOriginal size="4rem" aria-label="Rspec" />
						</a>
						<a href="https://cucumber.io/">
							<CucumberPlain
								size="4rem"
								color="#23d96c"
								aria-label="Cucumber"
							/>
						</a>
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
						<a href="https://www.heroku.com/">
							<HerokuOriginal size="4rem" aria-label="Heroku" />
						</a>
					</div>
					<div className="stack-item">
						<span>Version Control & CI:</span>
						<a href="https://github.com/">
							<GithubOriginal
								className="light"
								size="4rem"
								aria-label="GitHub"
							/>
						</a>
						<a href="https://github.com/features/actions">
							<GithubactionsOriginal
								size="4rem"
								aria-label="GitHub Actions"
							/>
						</a>
					</div>
					<div className="stack-item">
						<span>Additional Tools:</span>
						<span>
							<a href="https://github.com/scambra/devise_invitable">
								Devise Inviteable
							</a>
						</span>
						,
						<span>
							<a href="https://github.com/kaminari/kaminari">
								<Image
									src="https://avatars.githubusercontent.com/u/5637951?s=200&v=4"
									alt="Kaminari"
									width={82}
									height={82}
									priority={false}
									loading="eager"
									className="logo"
								/>
							</a>
						</span>
						,
						<span>
							<a href="https://github.com/joshuajansen/bulma-rails">
								<BulmaPlain size="4rem" aria-label="Bulma" />
							</a>
						</span>
						,
						<span>
							<a href="https://www.osohq.com/">
								<Image
									src="https://raw.githubusercontent.com/osohq/oso/refs/heads/main/vscode/oso/oso_logo.png"
									alt="Oso"
									width={1123}
									height={794}
									priority={false}
									loading="eager"
									className="logo"
								/>
							</a>
						</span>
						,
						<span>
							<a href="https://jquery.com/">
								<JqueryOriginal
									size="4rem"
									aria-label="JQuery"
								/>
							</a>
						</span>
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
		</div>
	);
}
