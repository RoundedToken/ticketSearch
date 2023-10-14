/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        serverUrl: 'http://localhost:3000/api',
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.postimg.cc',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

module.exports = nextConfig;
