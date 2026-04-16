"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

/**
 * PostHog analytics — env-gated. Only initialises when both host and key are set
 * (production environments). Uses cookieless mode for GDPR compliance by default.
 *
 * Enable in Phase 5 by setting NEXT_PUBLIC_POSTHOG_KEY + NEXT_PUBLIC_POSTHOG_HOST
 * in the Vercel production environment.
 */
export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;

    if (!key || !host) return; // not configured — skip

    posthog.init(key, {
      api_host: host,
      person_profiles: "identified_only",
      capture_pageview: true,
      capture_pageleave: true,
      persistence: "memory", // cookieless mode for GDPR
      disable_session_recording: false,
      loaded: (ph) => {
        if (process.env.NODE_ENV === "development") ph.debug();
      },
    });
  }, []);

  return <>{children}</>;
}
