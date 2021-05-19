module.exports = {
  future: {
    webpack5: false,
  },
  async redirects() {
    return [
      {
        source: '/twitter',
        destination: 'https://twitter.com/yassinebridi',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/yassinebridi',
        permanent: true,
      },
    ];
  },
};
