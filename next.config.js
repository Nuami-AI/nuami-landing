/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    globalNotFound: true,
  },
  async rewrites() {
    return [{ source: "/ir", destination: "/ir.pdf" }];
  },
  async headers() {
    return [
      {
        source: "/ir",
        headers: [{ key: "Content-Disposition", value: 'inline; filename="IR_nuami_2610.pdf"' }],
      },
    ];
  },
};

module.exports = nextConfig;
