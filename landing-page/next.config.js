/** @type {import('next').NextConfig} */

const config = {};
module.exports = {
  rewrites: async () => {
    return [
      {
        source: '/fr/communities',
        destination: 'https://communities.eze.wiki',
        // locale: false,
      },
    ];
  },
};
