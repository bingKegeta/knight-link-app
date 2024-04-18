/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api/users",
        destination: "http://localhost:8000/v1/api/users",
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/events/feedback",
        destination: "http://localhost:8000/v1/api/events/feedback",
      },
    ];
  },
};

export default nextConfig;
