import Image from "next/image";
const strassenmp_report: string = String.raw`https://raw.githubusercontent.com/lai-huy/StrassenMP/main/Major%20Project.pdf`;
const strassenmp_github: string = String.raw`https://github.com/lai-huy/StrassenMP`;

export default function Strassen() {
	return (
		<div>
			<a href="#strassen" className="skip-link">
				Skip to Strassen&apos;s Algorithm
			</a>
			<div className="h2" role="heading" aria-level={2}>
				StrassenMP
			</div>
			<div className="strassen">
				<p className="strassen">
                    As part of a graduate-level high-performance computing course, I implemented a parallel version of Strassen’s matrix multiplication algorithm using OpenMP in C++.
                    <br/>
                    This project involved optimizing recursive matrix operations by parallelizing both the computation of Strassen’s seven intermediate products and the combination of matrix quadrants.
                    <br/>
                    I designed the program to accept configurable matrix sizes and recursion thresholds, enabling detailed performance analysis across varying workloads.
                    <br/>
                    Through extensive benchmarking, I evaluated speedup, efficiency, and memory usage, applying best practices in thread management and memory optimization.
                    <br/>
                    This experience strengthened my skills in parallel programming, algorithm optimization, and performance engineering on shared-memory architectures.
                    <br />
                    The source code for this project can be found on{" "} <a href={strassenmp_github}>GitHub</a>.
                </p>
				<Image
					className="right_wrap"
					src="/assets/images/OpenMP Logo.png"
					alt="OpenMP"
					width={1467}
					height={476}
					priority={false}
					loading="eager"
				/>
			</div>
			<p className="pdf_document">
				<iframe
					className="pdf_document"
					src={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${strassenmp_report}#zoom=page-width&sidebar=0`}
					title="Strassen's Matrix Multiplication Report"
				/>
			</p>
		</div>
	);
}
