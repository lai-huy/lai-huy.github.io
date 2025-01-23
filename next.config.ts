import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    trailingSlash: true,
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
