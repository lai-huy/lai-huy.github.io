import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    basePath: "/",
    trailingSlash: true,
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
