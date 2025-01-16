export default function Awards() {
	return (
		<div id="awards">
			<div className="h2" role="heading" aria-level={2}>
				Awards
			</div>
			<p className="awards">
				<iframe
					className="award"
					title="Bachelor of Science in Computer Science"
					src="/assets/awards/bs_cs.pdf"
				/>
				<iframe
					className="award"
					title="Distinguished Student Award"
					src="/assets/awards/fall22.pdf"
				/>
				<iframe
					className="award"
					title="Dean's Honor Roll"
					src="/assets/awards/spring23.pdf"
				/>
				<iframe
					className="award"
					title="AP Scholar Award"
					src="/assets/awards/ap_scholar.pdf"
				/>
			</p>
		</div>
	);
}
