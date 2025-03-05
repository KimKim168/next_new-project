/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:'images.unsplash.com',
                hostname: "127.0.0.1",
                port: "8000",

            }
        ]
    }
};

export default nextConfig;
