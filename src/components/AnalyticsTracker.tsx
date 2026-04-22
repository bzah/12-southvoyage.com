import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  getAffiliateParams,
  getDownloadParams,
  getOutboundParams,
  isAffiliateUrl,
  isDownloadUrl,
  isExternalUrl,
  trackEvent,
  trackPageView,
} from "@/lib/analytics";

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const pagePath = `${location.pathname}${location.search}${location.hash}`;
    trackPageView(pagePath, document.title);
  }, [location]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest("a[href]") as HTMLAnchorElement | null;

      if (!anchor) {
        return;
      }

      const rawHref = anchor.getAttribute("href");

      if (!rawHref || rawHref.startsWith("#") || rawHref.startsWith("mailto:") || rawHref.startsWith("tel:")) {
        return;
      }

      let url: URL;

      try {
        url = new URL(rawHref, window.location.origin);
      } catch {
        return;
      }

      if (isDownloadUrl(anchor, url)) {
        trackEvent("file_download", getDownloadParams(anchor, url));
        return;
      }

      if (!isExternalUrl(url)) {
        return;
      }

      if (isAffiliateUrl(url)) {
        trackEvent("affiliate_click", getAffiliateParams(anchor, url));
        return;
      }

      trackEvent("outbound_click", getOutboundParams(anchor, url));
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
};

export default AnalyticsTracker;