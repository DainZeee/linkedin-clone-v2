/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'links.papareact.com',
            
          },
          {
            protocol: 'https',
            hostname: 'img.clerk.com',
            
          },
          {
            protocol: 'https',
            hostname: 'linkedinmattd.blob.core.windows.net',
            
          },
          {
            protocol: 'https',
            hostname: 'linkedinclone.blob.core.windows.net',
          },
          {
            protocol: 'https',
            hostname: 'vercel.com',
          },
          {
            protocol: 'https',
            hostname: 'vercel.app',
          },
          {
            protocol: 'https',
            hostname: 'linkedinmattyd.blob.core.windows.net',
            
          },
          {
            protocol: 'http',
            hostname: 'linkedinmattyd.blob.core.windows.net',
            
          },
        ],
      },
};

export default nextConfig;
