import { faCloudDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const resume = String.raw`https://raw.githubusercontent.com/lai-huy/Resume/main/resume.pdf`;

export default function Resume() {
	return (
		<div id="resume">
			<h2 className="h2" role="heading" aria-level={2}>
				Resume
			</h2>
			<p className="resume">
				<iframe
					className="resume"
					title="Huy Lai Resume"
					src={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${resume}#zoom=page-width&sidebar=0`}
				/>
			</p>
			<p className="qualifications">
				If the resume failed to load, download it{" "}
				<a href={resume} download="HuyLaiResume.pdf" aria-label="Download Resume">
					<FontAwesomeIcon icon={faCloudDownload} />
				</a>
				.<br />
			</p>
		</div>
	);
}
