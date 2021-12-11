const config = {
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['media.yasbr.com', 'pbs.twimg.com'],
  },
  redirects: async () => [
    {
      source: '/DM',
      destination:
        'https://twitter.com/messages/compose?recipient_id=895843232',
      permanent: true,
    },
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
    {
      source: '/dribbble',
      destination: 'https://dribbble.com/yassinebridi',
      permanent: true,
    },
  ],
  rewrites: async () => [
    {
      source: '/js/script.js',
      destination: 'https://a.yasbr.com/js/plausible.js',
    },
    {
      source: '/api/event',
      destination: 'https://a.yasbr.com/api/event',
    },
    {
      source: '/sitemap.xml',
      destination: '/api/sitemap',
    },
    {
      source: '/rss.xml',
      destination: '/api/rss',
    },
  ],
  // headers: async () => [
  //   {
  //     source: '/(.*)',
  //     headers: securityHeaders,
  //   },
  // ],
  webpack: (config, { dev, isServer }) => {
    // if (isServer) {
    //   require('./scripts/generate-sitemap');
    //   require('./scripts/generate-rss');
    // }

    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }

    return config;
  },
};

module.exports = config;
