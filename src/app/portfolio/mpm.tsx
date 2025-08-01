import {
	JupyterOriginalWordmark,
	NumpyOriginal,
	PandasOriginal,
	PythonOriginal,
} from "devicons-react";
import Image from "next/image";

const mpm_github: string = String.raw`https://github.com/lai-huy/CSCE-421-Final-Project/`;
const mpm_report: string = String.raw`https://raw.githubusercontent.com/lai-huy/Machine-Learning-for-Mortality-Prognosis/main/Final%20report/Final%20Project.pdf`;

export default function MPM() {
	return (
		<div>
			<h2 className="h2" role="heading" aria-level={2}>
				Mortality Prediction Model
			</h2>
			<div className="mpm">
				<Image
					className="logo_right"
					src="https://xgboost.ai/images/logo/xgboost-logo.png"
					alt="Mortality Prediction Model"
					width={408}
					height={141}
					priority={false}
					loading="eager"
				/>
				<p className="mpm">
					This project focuses on developing a predictive model for
					in-hospital patient mortality using machine learning
					techniques.
					<br />
					Leveraging the eICU dataset, which includes critical patient
					metrics such as heart rate, blood pressure, and oxygen
					saturation, the study employs an XGBoostClassifier model to
					enhance mortality prediction accuracy.
					<br />
					Through rigorous data preprocessing, feature selection, and
					hyperparameter tuning, the model achieved an AUC-ROC score
					of 0.89, outperforming the baseline and demonstrating strong
					predictive capabilities.
					<br />
					<br />
					The research highlights the importance of machine learning
					in healthcare by identifying key indicators of patient
					mortality, allowing for more informed clinical decisions.
					<br />
					By analyzing feature importance, the study provides valuable
					insights into which health parameters most significantly
					impact patient outcomes.
					<br />
					The findings suggest potential applications in real-time
					hospital monitoring systems, where predictive analytics can
					assist medical professionals in prioritizing patient care
					and improving overall treatment strategies.
					<br />
					<br />
					You can find the{" "}
					<a href={mpm_github} target="_blank" rel="noopener noreferrer">
						source code for this project on GitHub
					</a>
					.
					<br />
					<NumpyOriginal size="128" aria-label="NumPy" />
					<PandasOriginal size="128" aria-label="Pandas" />
					<PythonOriginal size="128" aria-label="Python" />
					<JupyterOriginalWordmark size="128" aria-label="Jupyter" />
				</p>
			</div>
			<div className="pdf_document">
				<iframe
					className="pdf_document"
					src={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${mpm_report}#zoom=page-width&sidebar=0`}
					title="Mortality Prediction Model Report"
				/>
			</div>
		</div>
	);
}
