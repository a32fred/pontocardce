/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração moderna para images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'www.topdata.com.br',
      },
      {
        protocol: 'https',
        hostname: 'www.controlid.com.br',
      },
      {
        protocol: 'https',
        hostname: 'www.micromap.com.br',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
      {
        protocol: 'https',
        hostname: 'ihxsistemas.com.br',
      }
    ],
  },

  // Configurações para hospedagem compartilhada
  output: 'standalone', // Gera pasta independente com todas dependências
  trailingSlash: true, // Melhora compatibilidade com servidores estáticos
  productionBrowserSourceMaps: true, // Facilita debug em produção
  skipMiddlewareUrlNormalize: true,
  skipTrailingSlashRedirect: true



};

export default nextConfig;
