declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type EventParams = Record<string, string | number | boolean | null | undefined>;

const AFFILIATE_HOST_PATTERNS = ["getyourguide.com"];
const DOWNLOAD_EXTENSION_REGEX = /\.(pdf|docx?|xlsx?|csv|zip|rar|7z|txt|rtf|ics|mp3|mp4|mov|avi|webm|png|jpe?g|webp|svg)$/i;

const cleanParams = (params: EventParams) =>
  Object.fromEntries(Object.entries(params).filter(([, value]) => value !== undefined && value !== null));

export const trackEvent = (eventName: string, params: EventParams = {}) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, cleanParams(params));
};

export const trackPageView = (pagePath: string, pageTitle?: string) => {
  trackEvent("page_view", {
    page_title: pageTitle,
    page_path: pagePath,
    page_location: typeof window !== "undefined" ? window.location.href : undefined,
  });
};

const normalizeHostname = (hostname: string) => hostname.replace(/^www\./, "").toLowerCase();

export const isExternalUrl = (url: URL) => {
  if (typeof window === "undefined") {
    return false;
  }

  return normalizeHostname(url.hostname) !== normalizeHostname(window.location.hostname);
};

export const isAffiliateUrl = (url: URL) => {
  const hostname = normalizeHostname(url.hostname);
  return AFFILIATE_HOST_PATTERNS.some((pattern) => hostname === pattern || hostname.endsWith(`.${pattern}`))
    || url.searchParams.has("partner_id");
};

export const isDownloadUrl = (anchor: HTMLAnchorElement, url: URL) =>
  anchor.hasAttribute("download") || DOWNLOAD_EXTENSION_REGEX.test(url.pathname);

export const getAnchorText = (anchor: HTMLAnchorElement) => {
  const ariaLabel = anchor.getAttribute("aria-label");
  const datasetLabel = anchor.dataset.analyticsLabel;
  const text = anchor.textContent?.trim();

  return datasetLabel || ariaLabel || text || urlToLabel(anchor.href);
};

const urlToLabel = (href: string) => {
  try {
    const url = new URL(href, typeof window !== "undefined" ? window.location.origin : "https://southvoyage.com");
    return url.pathname.replace(/^\//, "") || url.hostname;
  } catch {
    return href;
  }
};

export const getLinkContext = (anchor: HTMLAnchorElement) => {
  const section = anchor.closest("section[id]") as HTMLElement | null;
  return {
    link_text: getAnchorText(anchor),
    link_url: anchor.href,
    section_id: section?.id,
    page_path: typeof window !== "undefined" ? window.location.pathname : undefined,
  };
};

export const getDownloadParams = (anchor: HTMLAnchorElement, url: URL) => ({
  ...getLinkContext(anchor),
  file_name: url.pathname.split("/").pop(),
  file_extension: url.pathname.split(".").pop()?.toLowerCase(),
});

export const getOutboundParams = (anchor: HTMLAnchorElement, url: URL) => ({
  ...getLinkContext(anchor),
  outbound_host: normalizeHostname(url.hostname),
});

export const getAffiliateParams = (anchor: HTMLAnchorElement, url: URL) => ({
  ...getOutboundParams(anchor, url),
  affiliate_network: normalizeHostname(url.hostname).includes("getyourguide") ? "GetYourGuide" : "partner",
});