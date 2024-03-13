/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'www.openstreetmap.org',
              pathname: '**',
            },
        ],
    }
};

export default nextConfig;
