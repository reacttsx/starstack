export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export const pageview = (url) => {
  if (!GA_ID) return;
  // GA4 page_view
  // https://developers.google.com/analytics/devguides/collection/ga4/reference/events#page_view
  window.gtag?.("event", "page_view", {
    page_location: typeof window !== "undefined" ? window.location.href : url,
    page_path: url,
  });
};

export const gaEvent = (name, params) => {
  if (!GA_ID) return;
  window.gtag?.("event", name, params || {});
};
