import type { NextConfig } from "next";

const securityHeaders = [
    {
        key: "X-Content-Type-Options",
        value: "nosniff",
    },
    {
        key: "X-Frame-Options",
        value: "DENY",
    },
    {
        key: "Referrer-Policy",
        value: "strict-origin-when-cross-origin",
    },
    {
        key: "Content-Security-Policy",
        value: `
            default-src 'self';
            script-src 'self' 'unsafe-inline' 'unsafe-eval';
            style-src 'self' 'unsafe-inline';
            img-src 'self' data: https://res.cloudinary.com https://*.cloudinary.com;
            font-src 'self' data: https://fonts.gstatic.com;
            connect-src 'self' https://res.cloudinary.com https://*.cloudinary.com;
            `
            .replace(/\s+/g, " ")
            .trim(),
    },
];


const nextConfig: NextConfig = {
    reactCompiler: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
        ],
    },
    poweredByHeader: false,
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: securityHeaders,
            },
        ];
    },
};

export default nextConfig;
