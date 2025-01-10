import "./globals.scss";
import type { Metadata } from "next";
import { Navbar } from "./navigation/nav";

export const metadata: Metadata = {
	title: "Huy Quang Lai",
	description: "My personal website",
	openGraph: {
		title: "Huy Quang Lai",
		description: "My personal website",
		images: [
			{
				url: "/assets/images/face.jpg",
				alt: "Huy Lai",
				width: 1851,
				height: 2600,
			},
		],
		type: "website",
	},
	twitter: {
		title: "Huy Quang Lai",
		description: "My personal website",
		card: "summary_large_image",
		images: ["/assets/images/face.jpg"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="antialiased">
				<main className="">
					<Navbar />
					{children}
				</main>
			</body>
		</html>
	);
}
