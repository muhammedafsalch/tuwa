const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
    output: isDev ? undefined : 'export',
    trailingSlash: true,

    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'flagcdn.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'upload.wikimedia.org',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'cdn-icons-png.flaticon.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'source.unsplash.com',
          port: '',
          pathname: '/**',
        },
        {
            protocol: 'https',
            hostname: 'images.pexels.com',
            port: '',
            pathname: '/**',
          },
      ],
    },
  };
  
  export default nextConfig;
  