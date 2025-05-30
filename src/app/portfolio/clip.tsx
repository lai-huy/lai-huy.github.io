import {
	PytorchOriginal,
	ScikitlearnOriginal,
	TensorflowOriginal,
} from "devicons-react";
import Image from "next/image";

const clip_github: string = String.raw`https://github.com/lai-huy/Improving-CLIP-Training`;
const clip_report: string = String.raw`https://raw.githubusercontent.com/lai-huy/Improving-CLIP-Training/main/Improving%20CLIP%20Training.pdf`;
export default function Clip() {
	return (
		<div>
			<a href="#clip" className="skip-link">
				Skip to Improving CLIP
			</a>
			<h2 className="h2" role="heading" aria-level={2}>
				Improving CLIP Training
			</h2>
			<div className="clip">
				<Image
					className="logo_left"
					src="https://raw.githubusercontent.com/openai/CLIP/main/CLIP.png"
					alt="CLIP Training"
					width={2162}
					height={762}
					priority={false}
					loading="eager"
				/>
				<p className="clip">
					This project focuses on improving the training of CLIP
					(Contrastive Language-Image Pretraining) models by
					optimizing the global contrastive loss for bimodal
					contrastive self-supervised learning.
					<br />
					Self-supervised learning (SSL) has gained prominence for its
					ability to generalize across downstream tasks in areas such
					as natural language processing and computer vision.
					<br />
					Among SSL frameworks, Contrastive Learning (CL) has proven
					effective by maximizing the similarity between positive
					pairs and minimizing it between negative pairs.
					<br />
					While CLIP has demonstrated success in aligning image and
					text representations, challenges persist, such as slow
					convergence in large-scale bimodal datasets.
					<br />
					Participants are tasked with accelerating global contrastive
					loss optimization and enhancing model performance on
					provided benchmarks.
					<br />
					<br />
					Trainig of CLIP models used a 100k subset of the Conceptual
					Captions 3M dataset for training and validate the models on
					MSCOCO and ImageNet datasets.
					<br />
					They must evaluate model performance based on retrieval
					accuracy and zero-shot classification metrics.
					<br />
					Models are restricted to using ResNet-50 and DistilBERT as
					encoders, with fixed hyperparameters, and must compare at
					least two optimizers and three loss functions.
					<br />
					Deliverables include model code, trained models, and a
					detailed report covering experimental results, all adhering
					to specified guidelines.
					<br />
					Evaluation criteria include experimental breadth, report
					quality, presentation, and innovative ideas.
					<br />
					<br />
					The following video presents the results of this project.
					<br />
					Additionally a report is provided for more in-depth
					analysis.
					<br />
					You can view the{" "}
					<a href={clip_github}>
						source code for Improving CLIP Training on GitHub
					</a>
					.
					<br />
					<PytorchOriginal size="100" aria-label="PyTorch" />
					<TensorflowOriginal size="100" aria-label="TensorFlow" />
					<ScikitlearnOriginal size="100" aria-label="SciKit-Learn" />
				</p>
			</div>
			<div className="youtube">
				<iframe
					title="Improving CLIP Training"
					className="youtube"
					src="https://www.youtube.com/embed/-O5g3cn_PkM"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				/>
			</div>
			<div className="pdf_document">
				<iframe
					className="pdf_document"
					src={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${clip_report}#zoom=page-width&sidebar=0`}
					title="Improving CLIP Training"
				/>
			</div>
		</div>
	);
}
