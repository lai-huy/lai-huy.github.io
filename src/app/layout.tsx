import "./globals.scss";
import type { Metadata } from "next";
import { Navbar } from "./navigation/nav";

export const metadata: Metadata = {
	title: "Huy Quang Lai",
	description: "My personal website",
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
