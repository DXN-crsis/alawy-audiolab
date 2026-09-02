const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // widths that actually occur: 1-col phone, 2-col phone, 3-col tablet, 4-col desktop
    deviceSizes: [360, 420, 540, 640, 828, 1080, 1200, 1920],
    imageSizes: [64, 96, 128, 200, 256, 384],
    minimumCacheTTL: 31536000,
  },
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
