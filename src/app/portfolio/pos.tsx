import { NodejsOriginal, ReactOriginal } from "devicons-react";
import Image from "next/image";

const pos_github: string = String.raw`https://github.com/CSCE315-Spring23/Team_44_Project_3`;

export default function POS() {
	return (
		<div>
			<a href="#pos" className="skip-link">
				Skip to point of sale system
			</a>
			<div className="h2" role="heading" aria-level={2}>
				Point of Sale System
			</div>
			<div className="pos">
				<Image
					className="left_wrap"
					src="/assets/images/CFA_MSC.jpg"
					alt="Chick-fil-A at the Memorial Student Center"
					width={1920}
					height={1281}
					priority={false}
					loading="eager"
				/>
				<p className="pos">
					A Node.js and React project that creates a Point-of-Sale
					webpage for a Restaurant located at the Memorial Student
					Center at Texas A&M University. Our specific restaurant was
					Chick-fil-A.
					<br />
					Using Google OAuth to authenticate administrator logins,
					adequate role-based access control is enforced.
					<br />
					This project also uses a Google Translate API to ensure
					proper internationalization.
					<br />
					Finally, this project uses a weather API to display weather
					information as well as recomend certain items during cooler
					weather.
					<br />
					A custom REST API to communicate between the front-end and
					the back-end of the application.
					<br />
					<br />
					You can view the{" "}
					<a href={pos_github}>Point of Sale source code</a> by
					clicking the previous link.
					<br />
					<ReactOriginal size="128" aria-label="React" />
					<NodejsOriginal size="128" aria-label="Node.js" />
				</p>
			</div>
		</div>
	);
}
