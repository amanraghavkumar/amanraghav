// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // output: 'export',
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   images: { unoptimized: true },
//   basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
//   assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
// // };

// // module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   images: {
//     unoptimized: true,
//   },
// };

// module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },

  // ❌ Ye dono hata de agar likha ho to
  // basePath: '/portfolio',
  // assetPrefix: '/portfolio/',
};

export default nextConfig;
