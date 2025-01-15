"use client";

import { isMobile } from "react-device-detect";
import Navbar from "../navigation/nav";
import "../navigation/nav.scss";
import About from "./about";
import "./home.scss";
import Social from "./social";

export default function Home() {
	return (
		<div className="page">
			<Navbar />
			<div
				className={`content background ${
					isMobile ? "mobile" : "desktop"
				}`}
				role="main"
			>
				<header className="name">
					<h1>
						<span className="name">Huy Quang Lai</span>
					</h1>
				</header>
				<About />

				<a href="#social" className="skip-link">
					Skip to my online profiles.
				</a>
				<Social />
			</div>
		</div>
	);
}
