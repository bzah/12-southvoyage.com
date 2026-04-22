import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Compass, BookOpen } from "lucide-react";
import { getRelatedContent } from "@/lib/internalLinks";
import { useI18n } from "@/lib/i18n";

const staticPageKeywords: Record<string, string> = {
  "/blog": "southern usa travel blog, south beach miami travel tips, key west travel guide, new orleans food tours, savannah weekend itinerary, south padre island hotel guide",
  "/privacy": "travel website privacy policy, cookies, personal data, southern usa travel website privacy",
  "/terms": "travel website terms and conditions, affiliate disclaimer terms, southern usa travel guide legal terms",
  "/cookies": "travel website cookies, affiliate tracking cookies, analytics cookies policy",
  "/dmca": "copyright infringement notice, dmca takedown request, travel website content",
  "/legal": "affiliate disclosure travel website, liability disclaimer, website operator information",
  "/parents-info": "children's privacy policy, online safety for families, family travel website",
};

const InternalLinksWidget = () => {
  const location = useLocation();
  const { content } = useI18n();

  const pageKeywords = useMemo(() => {
    if (location.pathname === "/") return content.home.metaKeywords;
    if (location.pathname === "/about") return content.about.metaKeywords;
    if (location.pathname === "/contact") return content.contact.metaKeywords;
    return staticPageKeywords[location.pathname] ?? "southern usa travel, beach destinations, hotel guides, food tours, weekend trips";
  }, [content.about.metaKeywords, content.contact.metaKeywords, content.home.metaKeywords, location.pathname]);

  const { relatedBlogs, relatedDestinations } = useMemo(
    () => getRelatedContent({ pathname: location.pathname, keywords: pageKeywords }),
    [location.pathname, pageKeywords],
  );

  if (relatedBlogs.length === 0 && relatedDestinations.length === 0) return null;

  return (
    <section className="border-t border-sand/10 pt-10 mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-sand/10 bg-sand/5 p-6 md:p-7">
          <div className="flex items-center gap-2 mb-4">
            <Compass className="h-4 w-4 text-primary" />
            <h2 className="font-display text-lg font-semibold text-sand">Related destinations</h2>
          </div>
          <div className="space-y-3">
            {relatedDestinations.map((destination) => (
              <Link
                key={destination.slug}
                to={`/destinations/${destination.slug}`}
                className="group flex items-start justify-between gap-4 rounded-xl border border-sand/10 px-4 py-3 transition-colors hover:border-primary/50 hover:bg-sand/5"
              >
                <div>
                  <h3 className="font-display text-base font-semibold text-sand group-hover:text-primary transition-colors">
                    {destination.name}
                  </h3>
                  <p className="font-body text-sm text-sand/60 mt-1">{destination.tagline}</p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-sand/40 group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-sand/10 bg-sand/5 p-6 md:p-7">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="h-4 w-4 text-primary" />
            <h2 className="font-display text-lg font-semibold text-sand">Related travel guides</h2>
          </div>
          <div className="space-y-3">
            {relatedBlogs.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex items-start justify-between gap-4 rounded-xl border border-sand/10 px-4 py-3 transition-colors hover:border-primary/50 hover:bg-sand/5"
              >
                <div>
                  <h3 className="font-display text-base font-semibold text-sand group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-body text-sm text-sand/60 mt-1">{post.category} · {post.readTime}</p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-sand/40 group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternalLinksWidget;