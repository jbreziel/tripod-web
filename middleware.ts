import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Exact root — needed for the `/` → `/nl` redirect under Next.js 16 + Turbopack.
    // The regex matcher below doesn't reliably fire on the empty path in this combo.
    "/",
    // Match all other paths except:
    // - /api routes
    // - Next.js internals (_next, _vercel)
    // - Files with extensions (fonts, images, etc.)
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
