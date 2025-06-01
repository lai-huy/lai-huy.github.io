const bs_cs: string = String.raw`https://raw.githubusercontent.com/lai-huy/lai-huy.github.io/main/public/assets/awards/bs_cs.pdf`;
const mcs: string = String.raw`https://raw.githubusercontent.com/lai-huy/lai-huy.github.io/main/public/assets/awards/mcs.pdf`;
const fall22: string = String.raw`https://raw.githubusercontent.com/lai-huy/lai-huy.github.io/main/public/assets/awards/fall22.pdf`;
const spring23: string = String.raw`https://raw.githubusercontent.com/lai-huy/lai-huy.github.io/main/public/assets/awards/spring23.pdf`;
const AP_scholar: string = String.raw`https://raw.githubusercontent.com/lai-huy/lai-huy.github.io/main/public/assets/awards/ap_scholar.pdf`;

export default function Awards() {
	return (
		<div id="awards">
			<div className="h2" role="heading" aria-level={2}>
				Awards
			</div>
			<p className="awards">
                <iframe
                    className="award"
                    title="Master of Computer Science"
                    src={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${mcs}#zoom=page-width&sidebar=0`}
                />
				<iframe
					className="award"
					title="Bachelor of Science in Computer Science"
					src={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${bs_cs}#zoom=page-width&sidebar=0`}
				/>
				<iframe
					className="award"
					title="Dean's Honor Roll"
					src={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${spring23}#zoom=page-width&sidebar=0`}
				/>
				<iframe
					className="award"
					title="Distinguished Student Award"
					src={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${fall22}#zoom=page-width&sidebar=0`}
				/>
				<iframe
					className="award"
					title="AP Scholar Award"
					src={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${AP_scholar}#zoom=page-width&sidebar=0`}
				/>
			</p>
		</div>
	);
}
