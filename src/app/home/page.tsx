"use client";

import Navbar from "../navigation/nav";
import "../navigation/nav.scss";
import About from "./about";
import "./home.scss";
import Social from "./social";
import Face from "./face";
import { motion } from "motion/react";
import { Layout } from "../components/scrolling";
import "../components/layout.scss";

const fadeInUp = {
	initial: {
		opacity: 0,
		y: 20
	},
	animate: {
		opacity: 1,
		y: 0
	},
	transition: {
		duration: 0.8
	}
};

const fadeIn = {
	initial: {
		opacity: 0
	},
	animate: {
		opacity: 1
	},
	transition: {
		duration: 0.5
	}
};

export default function Home() {
	return (
		<main className="page">
			<Navbar />
			<Layout>
				<motion.div
					variants={fadeInUp}
					initial="initial"
					animate="animate"
					className="hero-section"
				>
					<header className="hero-header">
						<h1 className="hero-name">Huy Quang Lai</h1>
						<p className="hero-tagline">Computer Science Student • Software Engineer </p>
					</header>
				</motion.div>
				<motion.div
					variants={fadeIn}
					initial="initial"
					animate="animate"
					transition={{ delay: 0.3 }}
					className="about-section"
				>
					<div className="about-container">
						<About />
						<Face />
					</div>
				</motion.div>
				<motion.div
					variants={fadeIn}
					initial="initial"
					animate="animate"
					transition={{ delay: 0.5 }}
					className="social-section"
				>
					<Social />
				</motion.div>
			</Layout>
		</main>
	);
}
