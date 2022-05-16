module.exports = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/email": { page: "/email" },
      "/email/index": { page: "/email" },
      "/error": { page: "/error" },
      "/error/index": { page: "/error" },
      "/thanks": { page: "/thanks" },
      "/thanks/index": { page: "/thanks" },
    };
  },
};
