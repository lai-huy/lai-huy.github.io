import {
	GithubOriginal,
	GitOriginal,
	JupyterOriginal,
	PythonOriginal,
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

				<h3 className="h3">Overview</h3>
				<p className="clip">
					This project, Improving CLIP Training, focuses on enhancing
					the foundational CLIP (Contrastive Language-Image
					Pretraining) architecture.
					<br />
					CLIP is known for learning visual concepts from natural
					language supervision, aligning text and image embeddings in
					a shared latent space.
					<br />
					However, while powerful, its training process still leaves
					room for optimization in areas like convergence speed,
					generalization, and representation quality.
				</p>
				<p className="clip">
					The project introduces a series of experiments aimed at
					improving CLIP by modifying its training
					components—specifically, the optimizer and loss function.{" "}
					<br />
					By challenging the defaults in the original CLIP design,
					this work offers insights into how subtle changes in
					training dynamics can lead to more robust and flexible
					multimodal models.
				</p>

				<h3 className="h3">The Problem</h3>
				<p className="clip">
					CLIP&apos;s training pipeline has proven to be
					groundbreaking, but certain limitations hinder its full
					potential.
					<br />
					This project identifies key weaknesses in the standard
					training procedure, particularly in how the model is
					optimized and supervised.
				</p>
				<ul className="clip">
					<li>
						<b>Optimizer Rigidity:</b> The original CLIP
						implementation relies heavily on default optimizers,
						which may not be ideal for training such large-scale,
						multimodal models efficiently.
					</li>
					<li>
						<b>Unbalanced Data Augmentation:</b> While images
						undergo augmentation, text inputs remain static,
						limiting the variety of language-image pairs seen during
						training.
					</li>
					<li>
						<b>Underutilized Loss Function Space:</b> The
						contrastive loss used in CLIP is effective but not
						necessarily optimal; other loss functions could
						potentially provide stronger gradients and better
						alignment.
					</li>
					<li>
						<b>Lack of Modular Experimentation Tools:</b> Original
						implementations are not always structured for easily
						swapping out core training components, which slows down
						research iteration.
					</li>
				</ul>

				<h3>The Solution &amp; Impact</h3>
				<p className="clip">
					To tackle the limitations outlined, this project introduces
					multiple enhancements to the CLIP training regimen. <br />
					These improvements focus on increasing training flexibility,
					embedding quality, and overall model performance in
					zero-shot and retrieval tasks. <br />
					Key solutions and their impacts include:
				</p>
				<ul className="clip">
					<li>
						<b>Integration of Alternative Optimizers:</b>{" "}
						Implemented and tested optimizers like AdamW and LAMB to
						improve learning stability and performance.
					</li>
					<li>
						<b>Custom Contrastive Loss Functions:</b> Developed
						variants of the standard contrastive loss to experiment
						with better semantic alignment of embeddings.
					</li>
					<li>
						<b>Customizable Training Pipeline:</b> Offered modular
						scripts and a Jupyter notebook for rapid experimentation
						and prototyping.
					</li>
					<li>
						<b>Improved Generalization:</b> Preliminary experiments
						suggest the modified training regime enhances the
						model&apos;s ability to generalize across image-text
						domains.
					</li>
				</ul>
				<h3 className="h3">Technology Stack</h3>
				<div className="tech-stack">
					<div className="stack-item">
						<span>Programming Language:</span>
						<a href="https://www.python.org/">
							<PythonOriginal size="4rem" aria-label="Python" />
						</a>
						<a href="https://jupyter.org/">
							<JupyterOriginal size="4rem" aria-label="Jupyter" />
						</a>
					</div>
					<div className="stack-item">
						<span>Machine Learning Framework:</span>
						<a href="https://pytorch.org/">
							<PytorchOriginal size="4rem" aria-label="PyTorch" />
						</a>
						<a href="https://www.tensorflow.org/">
							<TensorflowOriginal
								size="4rem"
								aria-label="TensorFlow"
							/>
						</a>
						<a href="https://scikit-learn.org/stable/">
							<ScikitlearnOriginal
								size="4rem"
								aria-label="SciKit-Learn"
							/>
						</a>
					</div>
					<div className="stack-item">
						<span>Version Control:</span>
						<a href="https://git-scm.com/">
							<GitOriginal size="4rem" aria-label="Git" />
						</a>
					</div>
					<div className="stack-item">
						<span>Platform:</span>
						<a href="https://github.com/">
							<GithubOriginal
								className="light"
								size="4rem"
								aria-label="GitHub"
							/>
						</a>
					</div>
				</div>

				<h3 className="h3">Resources</h3>
				<p className="clip">
					<a href={clip_github}>GitHub Repository</a>
				</p>
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
		</div>
	);
}
