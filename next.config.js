/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    ENVIRONMENT: process.env.ENVIRONMENT,
    MERCHANTID: process.env.MERCHANTID,
    VERIFY_KEY: process.env.VERIFY_KEY
  }
}

module.exports = nextConfig
