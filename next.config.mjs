import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com", port: "" },
    ],
    domains: ["cdn-icons-png.flaticon.com"],
  },
};

export default nextConfig;
