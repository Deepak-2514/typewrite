/** @type {import('next').NextConfig} */
const nextConfig = {
  // Server Actions are stable since Next 14; the old experimental flag is gone.
  pageExtensions: ["js", "jsx", "ts", "tsx"],
};

export default nextConfig;
