import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Compass, MapPin, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const notFoundJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Page Not Found — SouthVoyage",
  description:
    "The page you're looking for doesn't exist. Explore Southern USA travel destinations, hotels, and tours on SouthVoyage.",
  url: "https://southvoyage.com/404",
};

const NotFound = () => {
  const location = useLocation();
  const quickLinks = [
    { to: "/", label: "Home", icon: Compass },
    { to: "/blog", label: "Travel Blog", icon: Search },
    { to: "/destinations/key-west", label: "Key West Guide", icon: MapPin },
  ];

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found — SouthVoyage</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="The page you're looking for doesn't exist. Explore Southern USA travel destinations, hotels, and tours on SouthVoyage." />
        <link rel="canonical" href="https://southvoyage.com/404" />
        <script type="application/ld+json">{JSON.stringify(notFoundJsonLd)}</script>
      </Helmet>
      <Navbar />
      <main className="bg-background px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <div className="grid gap-8 rounded-2xl border border-border bg-card p-8 shadow-sm md:grid-cols-[1.2fr_0.8fr] md:p-10">
            <div>
              <p className="mb-3 font-body text-sm uppercase tracking-[0.18em] text-secondary">Error 404</p>
              <h1 className="font-display text-5xl font-bold text-foreground md:text-6xl">This page took a wrong turn.</h1>
              <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-muted-foreground">
                We couldn&apos;t find <span className="font-semibold text-foreground">{location.pathname}</span>. The link may be outdated, moved, or typed incorrectly.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link to="/" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-body font-medium text-primary-foreground transition-opacity hover:opacity-90">
                  <ArrowLeft className="h-4 w-4" /> Back to homepage
                </Link>
                <Link to="/blog" className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 font-body font-medium text-foreground transition-colors hover:bg-muted">
                  Browse latest guides
                </Link>
              </div>
            </div>
            <div className="space-y-3">
              {quickLinks.map(({ to, label, icon: Icon }) => (
                <Link key={to} to={to} className="flex items-center justify-between rounded-md border border-border bg-background px-4 py-4 transition-colors hover:bg-muted">
                  <span className="inline-flex items-center gap-3 font-body font-medium text-foreground">
                    <Icon className="h-4 w-4 text-primary" /> {label}
                  </span>
                  <ArrowLeft className="h-4 w-4 rotate-180 text-muted-foreground" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
