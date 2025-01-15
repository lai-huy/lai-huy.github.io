import { faCloudDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Resume() {
	return (
		<div>
			<a href="#resume" className="skip-link">
				Skip to Resume
			</a>
			<div id="resume">
				<div className="h2" role="heading" aria-level={2}>
					Resume
				</div>
				<p className="resume">
					<iframe
						className="resume"
						title="Huy Lai Resume"
						src="/assets/Resume.pdf"
					/>
				</p>
				<p className="qualifications">
					If the resume failed to load, download it{" "}
					<a href="/assets/Resume.pdf" download="HuyLaiResume.pdf">
						<FontAwesomeIcon icon={faCloudDownload} />
					</a>
					.<br />
				</p>
			</div>
		</div>
	);
}
