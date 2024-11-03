/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 現在はリダイレクトを無効化しています。
  // 全てのパスを "/"にリダイレクトすると、
  // 他のページにアクセスできなくなってしまうためです。
  redirects: async () => {
    return [
      {
        source: "/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
