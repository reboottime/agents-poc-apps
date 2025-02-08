/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: (process.env.NODE_ENV === "production")
    ? "https://www.happyhacking.com"
    : "",
  images: {
    domains: ["https://www.happyhacking.com"],
  },
};

export default nextConfig;
