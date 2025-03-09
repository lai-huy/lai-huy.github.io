import type { NextConfig } from "next";

let envImageUnoptimize = process.env.NODE_ENV !== "production" ? false : true;

const nextConfig: NextConfig = {
	output: process.env.NODE_ENV !== "production" ? undefined : "export",
	trailingSlash: true,
	reactStrictMode: true,
	images: {
		unoptimized: envImageUnoptimize,
		remotePatterns: [
			{
				hostname: "images.unsplash.com",
			},
			{
				hostname: "raw.githubusercontent.com",
			},
			{
				hostname: "app.fide.com",
			},
			{
				hostname: "xgboost.ai",
			},
			{
				hostname: "script-search.github.io",
			},
		],
	},
};

export default nextConfig;
