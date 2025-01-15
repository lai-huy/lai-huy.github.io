import type { Metadata } from "next";

export const metadata: Metadata = {
	metadataBase: new URL("https://lai-huy.github.io"),
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
			<body>{children}</body>
		</html>
	);
}
