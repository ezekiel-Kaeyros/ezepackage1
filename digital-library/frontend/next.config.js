/** @type {import('next').NextConfig} */

const config = {};

// module.exports = {
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.node = {
//         fs: "empty",
//       };
//     }

//     config.module.rules.push({
//       test: /\.node$/,
//       use: "ignore-loader",
//     });

//     return config;
//   },
// };


module.exports = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};