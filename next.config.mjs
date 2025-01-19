// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         domains: ["cdn.sanity.io"],
//     },
// };

// export default nextConfig;

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
            },
        ],
    },
};

export default nextConfig;

