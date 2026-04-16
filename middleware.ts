import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match all paths except:
    // - /api routes
    // - Next.js internals (_next, _vercel)
    // - Files with extensions (fonts, images, etc.)
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
