type EventName =
  | "demo_play" | "demo_complete" | "contact_click"
  | "founder_linkedin_click" | "follow_signup"
  | "architecture_expand" | "investor_mode_view";

export function track(name: EventName, properties: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  // PostHog integration: window.posthog?.capture(name, properties)
  // Vercel Analytics integration: import { track } from "@vercel/analytics"
  if (process.env.NODE_ENV === "development") console.debug("[analytics]", name, properties);
}
