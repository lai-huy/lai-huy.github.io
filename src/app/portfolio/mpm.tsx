import {
	JupyterOriginalWordmark,
	NumpyOriginal,
	PandasOriginal,
	PythonOriginal,
} from "devicons-react";

const mpm_github: string = String.raw`https://github.com/lai-huy/CSCE-421-Final-Project/`;
const mpm_report: string = String.raw`https://raw.githubusercontent.com/lai-huy/Machine-Learning-for-Mortality-Prognosis/main/Final%20report/Final%20Project.pdf`;
export default function MPM() {
	return (
		<div>
			<a href="#mpm" className="skip-link">
				Skip to Mortality Prediction Model
			</a>
			<div className="h2" role="heading" aria-level={2}>
				Mortality Prediction Model
			</div>
			<div id="mpm">
				<img
					className="left_wrap"
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
					See the <a href={mpm_github}>source code</a> for this
					project.
					<br />
					<NumpyOriginal size="128" aria-label="NumPy"/>
					<PandasOriginal size="128" aria-label="Pandas"/>
					<PythonOriginal size="128" aria-label="Python"/>
					<JupyterOriginalWordmark size="128" aria-label="Jupyter"/>
				</p>
			</div>
			<p className="pdf_document">
				<iframe
					className="pdf_document"
					src={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${mpm_report}#zoom=page-width&sidebar=0`}
                    title="Mortality Prediction Model Report"
				/>
			</p>
		</div>
	);
}
