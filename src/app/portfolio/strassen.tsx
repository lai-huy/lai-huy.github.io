const strassenmp_report: string = String.raw`https://github.com/lai-huy/StrassenMP/raw/main/Major%20Project.pdf`;

export default function Strassen() {
	return (
		<div>
			<a href="#strassen" className="skip-link">
				Skip to Strassen&apos;s Algorithm
			</a>
			<div className="h2" role="heading" aria-level={2}>
				StrassenMP
			</div>
			<div id="strassen">
				<img
					className="right_wrap"
					src="/assets/images/OpenMP Logo.png"
					alt="OpenMP"
					fetchPriority="low"
					loading="lazy"
					decoding="async"
				/>
				<p className="strassen">
					Implemented a parallel version of Strassen&apos;s matrix
					multiplication algorithm using OpenMP directives in C/C++.
					<br />
					The project aimed to leverage parallelism to improve the
					efficiency of large-scale matrix multiplication tasks.
					<br />
					Developed a scalable parallel algorithm based on
					Strassen&apos;s matrix multiplication technique, utilizing
					OpenMP directives for parallelization.
					<br />
					Optimized the code to efficiently distribute workload across
					multiple threads, achieving significant speedup compared to
					the sequential version.
					<br />
					Conducted rigorous testing and performance analysis to
					evaluate the scalability and efficiency of the parallel
					implementation across various input sizes and hardware
					configurations.
					<br />
					Documented the design, implementation details, and
					performance evaluation results comprehensively for future
					reference and potential publication.
				</p>
			</div>
			<p className="pdf_document">
				<iframe
					className="pdf_document"
					src={`https://docs.google.com/viewer?url=${strassenmp_report}&embedded=true`}
					title="Strassen's Matrix Multiplication Report"
				/>
			</p>
		</div>
	);
}
