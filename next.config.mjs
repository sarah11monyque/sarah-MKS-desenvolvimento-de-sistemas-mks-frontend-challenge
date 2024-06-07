/** @type {import('next').NextConfig} */
const path = import ('path')
 
const nextConfig = {
    compiler: {
        styledComponents: true
      },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'mks-sistemas.nyc3.digitaloceanspaces.com',
            port: '',
            pathname: '/products/**',
          },
        ],
    }
};

export default nextConfig;
