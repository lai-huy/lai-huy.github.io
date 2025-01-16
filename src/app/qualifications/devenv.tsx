import {
	EclipseOriginal,
	IntellijOriginal,
	NanoOriginal,
	NeovimOriginal,
	VimOriginal,
	VscodeOriginal,
} from "devicons-react";

export default function DevEnv() {
	return (
		<div id="devenv">
			<div className="h2" role="heading" aria-level={2}>
				Development Environments
			</div>
			<p className="qualifications">
				<EclipseOriginal size="8rem" />
				<IntellijOriginal size="8rem" />
				<VscodeOriginal size="8rem" />
				<NanoOriginal size="8rem" />
				<NeovimOriginal size="8rem" />
				<VimOriginal size="8rem" />
			</p>
		</div>
	);
}
