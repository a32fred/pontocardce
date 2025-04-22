/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'i.pinimg.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'via.placeholder.com' },
      { protocol: 'https', hostname: 'www.topdata.com.br' },
      { protocol: 'https', hostname: 'www.controlid.com.br' },
      { protocol: 'https', hostname: 'www.micromap.com.br' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
      { protocol: 'https', hostname: 'ihxsistemas.com.br' },
    ],
  },

  trailingSlash: true,
  productionBrowserSourceMaps: true,
  skipMiddlewareUrlNormalize: true,
  skipTrailingSlashRedirect: true,
  compress: true,
  swcMinify: true
};

export default nextConfig;
