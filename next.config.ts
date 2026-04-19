import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    formats: ["image/webp", "image/avif"],
  },
  async redirects() {
    // Belt-and-braces root redirect. Production's next-intl middleware already does this
    // on Vercel, but in Next.js 16 + next-intl 4 dev the middleware matcher doesn't fire
    // on the exact root path. A framework-level redirect in the config works in both.
    return [
      {
        source: "/",
        destination: "/nl",
        permanent: false,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
