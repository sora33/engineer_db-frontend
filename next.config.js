/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/:path*",
        destination: "/login",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
