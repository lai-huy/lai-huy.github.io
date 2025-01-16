export default function Interest() {
	return (
		<div>
			<a href="#interest" className="skip-link">
				Skip to Interests
			</a>
			<div id="interest">
				<div className="h2" role="heading" aria-level={2}>
					Technical Interests
				</div>
				<p className="qualifications">
					I am interested in learning more about Cybersecurity.
					<br />
					As more of our world becomes digitized, technology and its
					capabilities will become increasingly intertwined with our
					lives.
					<br />
					As a result, Cybersecurity will be criticalin ensuring that
					these devices cannot be compromised by malicious attackers.
					<br />
					Additionally, an increasing amount of personal data about
					users will be more readily available as more of these
					devices begin to communicate with one another.
					<br />
					It is essentual that these systems cannot be compromised.
				</p>

				<p className="qualifications">
					Additionally, I am intereted in Machine Learning.
					<br />
					With the need for increased automation with in our new
					digitized word, machine learning will help is ensuring that
					these automated systems can respond to potential problems.
					<br />
					We have seen the capabilities of Machine Learning with
					DeepMind&apos;s AlphaGo.
					<br />
					Learn more about AlphaGo{" "}
					<a href="https://www.deepmind.com/research/highlighted-research/alphago">
						here
					</a>
					.
				</p>
			</div>
		</div>
	);
}