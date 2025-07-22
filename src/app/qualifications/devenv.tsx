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
			<h2 className="h2" role="heading" aria-level={2}>
				Development Environments
			</h2>
			<div className="qualifications">
				<div className="tooltip" data-tip="Eclipse"><EclipseOriginal size="8rem" aria-label="Eclipse" /></div>
				<div className="tooltip" data-tip="Intellij"><IntellijOriginal size="8rem" aria-label="Intellij" /></div>
				<div className="tooltip" data-tip="Visual Studio Code"><VscodeOriginal size="8rem" aria-label="Visual Studio Code" /></div>
				<div className="tooltip" data-tip="Nano"><NanoOriginal size="8rem" aria-label="Nano" /></div>
				<div className="tooltip" data-tip="Neovim"><NeovimOriginal size="8rem" aria-label="Neovim" /></div>
				<div className="tooltip" data-tip="Vim"><VimOriginal size="8rem" aria-label="Vim" /></div>
			</div>
		</div>
	);
}
