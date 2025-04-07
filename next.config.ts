import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If your site will be in a subdirectory (like username.github.io/repo-name)
  // uncomment and update the following line:
  // basePath: '/your-repo-name',
}

export default nextConfig
