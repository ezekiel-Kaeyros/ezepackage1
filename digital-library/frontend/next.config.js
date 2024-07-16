// /** @type {import('next').NextConfig} */

// const config = {};
// module.exports = {
//   webpack5: true,
//   images: {
//     domains: ['res.cloudinary.com'],
//   },
//   webpack: (config) => {
//     config.resolve.fallback = { fs: false };
//     return config;
//   },
// };

// /** @type {import('next').NextConfig} */

// const config = {
//   webpack5: true,
//   images: {
//     domains: ['res.cloudinary.com'],
//   },
//   webpack: (config) => {
//     config.resolve.fallback = { fs: false };
//     return config;
//   },
// };

// module.exports = config;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['res.cloudinary.com'],
//   },
//   webpack: (config) => {
//     config.resolve.fallback = { fs: false };
//     config.module.rules.push({
//       test: /\.mjs$/,
//       type: 'javascript/auto',
//     });
//     return config;
//   },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  webpack: (config, { isServer }) => {
    config.resolve.fallback = { fs: false };

    // Ensure that .mjs files are handled correctly
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false,
      },
    });

    // If the build is for the server, handle the pdf.worker.min.js
    if (!isServer) {
      config.module.rules.push({
        test: /pdf\.worker(\.min)?\.js$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[contenthash].[ext]',
            publicPath: '_next/static/worker',
            outputPath: 'static/worker',
          },
        },
      });
    }

    return config;
  },
};

module.exports = nextConfig;
