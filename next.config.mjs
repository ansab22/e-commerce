/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  transpilePackages: ["@ant-design", "@rc-component", "antd", "rc-util"],
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig; // ✅ ES Module ke liye `export default` use karein
