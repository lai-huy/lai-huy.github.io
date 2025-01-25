import type { NextConfig } from "next";

let envImageUnoptimize = process.env.NODE_ENV !== "production" ? false : true;

const nextConfig: NextConfig = {
    output: process.env.NODE_ENV !== "production" ? undefined: "export",
    trailingSlash: true,
    reactStrictMode: true,
    images: {
        unoptimized: envImageUnoptimize,
        remotePatterns: [
            {
                "hostname": "images.unsplash.com",
            }
        ]
    },
};

export default nextConfig;
