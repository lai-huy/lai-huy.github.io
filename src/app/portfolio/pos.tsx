import { NodejsOriginal, ReactOriginal } from "devicons-react";
import Image from "next/image";

const pos_github: string = String.raw`https://github.com/CSCE315-Spring23/Team_44_Project_3`;

export default function POS() {
	return (
		<div>
			<a href="#pos" className="skip-link">
				Skip to point of sale system
			</a>
			<h2 className="h2" role="heading" aria-level={2}>
				Point of Sale System
			</h2>
			<div className="pos">
				<Image
					className="logo_left"
					src="/assets/images/CFA_MSC.jpg"
					alt="Chick-fil-A at the Memorial Student Center"
					width={1920}
					height={1281}
					priority={false}
					loading="eager"
				/>
				<p className="pos">
					For this project, our team developed a full-stack
					Point-of-Sale (POS) web application tailored for the{" "}
					<a href="https://www.chick-fil-a.com/locations/tx/texas-am-university-memorial-student-center">
						Chick-fil-A location at Texas A&M University&apos;s
						Memorial Student Center
					</a>
					.
					<br />
					Utilizing <a href="https://react.dev/">React</a> for the
					frontend and <a href="https://nodejs.org/">Node.js</a> for
					the backend, we created an intuitive interface that
					streamlines order processing for both customers and staff.
					<br />
					The application integrates seamlessly with a structured SQL
					database, ensuring efficient data management and real-time
					updates.
					<br />
					Key features include dynamic menu displays, order
					customization, and secure transaction handling, all designed
					to enhance the dining experience and operational efficiency.
					<br />
					<br />
					Throughout the development process, we adhered to agile
					methodologies, conducting regular scrum meetings to plan
					sprints, address challenges, and implement user feedback.
					<br />
					This collaborative approach allowed us to iteratively refine
					the application, incorporating features such as
					accessibility enhancements and responsive design to cater to
					a diverse user base.
					<br />
					The project not only honed our technical skills in modern
					web development frameworks but also emphasized the
					importance of teamwork and adaptability in software
					engineering.
					<br />
					<br />
					The source code and further documentation are available on
					our <a href={pos_github}>GitHub repository</a>.
					<br />
					<ReactOriginal size="128" aria-label="React" />
					<NodejsOriginal size="128" aria-label="Node.js" />
				</p>
			</div>
		</div>
	);
}
