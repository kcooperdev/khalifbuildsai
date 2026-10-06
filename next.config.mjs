/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  outputFileTracingIncludes: {
    "/api/guide": ["./private/use-ai-to-get-ahead.pdf"],
    "/api/guide/download": ["./private/use-ai-to-get-ahead.pdf"],
  },
}

export default nextConfig
