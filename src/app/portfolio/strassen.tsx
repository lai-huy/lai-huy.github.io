import Image from "next/image";
import { MathJaxContext, MathJax } from "better-react-mathjax";
const strassenmp_report: string = String.raw`https://raw.githubusercontent.com/lai-huy/StrassenMP/main/Major%20Project.pdf`;
const strassenmp_github: string = String.raw`https://github.com/lai-huy/StrassenMP`;

export default function Strassen() {
	return (
		<MathJaxContext>
			<h2 className="h2" role="heading" aria-level={2}>
				StrassenMP
			</h2>
			<div className="strassen">
				<Image
					className="logo_right"
					src="/assets/images/OpenMP Logo.png"
					alt="OpenMP"
					width={1467}
					height={476}
					priority={false}
					loading="eager"
				/>
				<p className="strassen">
					As part of a graduate course in high-performance computing,
					I implemented a parallelized version of Strassen&apos;s
					matrix multiplication algorithm using OpenMP in C++. The
					project focused on reducing computational complexity by
					replacing the standard{" "}
					<MathJax inline>{"\\(\\mathcal{O}(n^3)\\)"}</MathJax> matrix
					multiplication with Strassen&apos;s recursive{" "}
					<MathJax inline>
						{"\\(\\mathcal{O}\\left(n^{\\log_27}\\right)\\)"}
					</MathJax>{" "}
					approach.
					<br />
					I parallelized the computation of the algorithm&apos;s seven
					intermediate matrix products as well as the final
					combination of submatrices, allowing the program to scale
					effectively across multiple threads.
					<br />
					The implementation supports configurable matrix sizes and
					recursion thresholds, enabling flexible experimentation.
					<br />
					<br />
					I conducted performance benchmarking across various matrix
					dimensions and thread counts, analyzing speedup, efficiency,
					and memory usage.
					<br />
					To prevent memory overload, I implemented controlled
					deallocation and synchronization techniques.
					<br />
					The final solution demonstrated significant runtime
					improvements as shown in plotted performance graphs.
					<br />
					This project sharpened my skills in multithreading,
					algorithmic optimization, and systems-level programming
					capabilities directly applicable to software engineering
					roles focused on performance, scalability, and parallel
					computation.
					<br />
					<br />
					You can find the{" "}
					<a href={strassenmp_github}>
						source code for this project on GitHub
					</a>
					.
				</p>
			</div>
			<div className="pdf_document">
				<iframe
					className="pdf_document"
					src={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${strassenmp_report}#zoom=page-width&sidebar=0`}
					title="Strassen's Matrix Multiplication Report"
				/>
			</div>
		</MathJaxContext>
	);
}
