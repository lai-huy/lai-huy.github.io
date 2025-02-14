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
				<EclipseOriginal size="8rem" aria-label="Eclipse" />
				<IntellijOriginal size="8rem" aria-label="Intellij" />
				<VscodeOriginal size="8rem" aria-label="Visual Studio Code" />
				<NanoOriginal size="8rem" aria-label="Nano" />
				<NeovimOriginal size="8rem" aria-label="Neovim" />
				<VimOriginal size="8rem" aria-label="Vim" />
			</p>
		</div>
	);
}
