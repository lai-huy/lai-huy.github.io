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
			<p className="qualifications">
				<span title="Eclipse"><EclipseOriginal size="8rem" aria-label="Eclipse" /></span>
				<span title="Intellij"><IntellijOriginal size="8rem" aria-label="Intellij" /></span>
				<span title="Visual Studio Code"><VscodeOriginal size="8rem" aria-label="Visual Studio Code" /></span>
				<span title="Nano"><NanoOriginal size="8rem" aria-label="Nano" /></span>
				<span title="Neovim"><NeovimOriginal size="8rem" aria-label="Neovim" /></span>
				<span title="Vim"><VimOriginal size="8rem" aria-label="Vim" /></span>
			</p>
		</div>
	);
}
