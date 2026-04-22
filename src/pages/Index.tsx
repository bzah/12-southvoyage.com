import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DestinationsSection from "@/components/DestinationsSection";
import ToursSection from "@/components/ToursSection";
import HotelsSection from "@/components/HotelsSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import Footer from "@/components/Footer";
import { useI18n } from "@/lib/i18n";
import { buildAlternateLinks, getLanguagePath, ogLocaleByLanguage } from "@/lib/seo";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://southvoyage.com/" }],
};

const Index = () => {
  const { content, language } = useI18n();
  const location = useLocation();
  const home = content.home;
  const canonicalUrl = getLanguagePath(location.pathname, language);
  const alternateLinks = buildAlternateLinks(location.pathname);

  const travelAgencyJsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "SouthVoyage",
    url: "https://southvoyage.com",
    description: home.metaDescription,
    areaServed: {
      "@type": "Place",
      name: "Southern United States",
    },
    sameAs: [],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SouthVoyage",
    url: "https://southvoyage.com/",
    description: home.metaDescription,
    inLanguage: ["en", "es", "fr", "ru"],
    publisher: {
      "@type": "Organization",
      name: "SouthVoyage",
      url: "https://southvoyage.com",
    },
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SouthVoyage",
    url: "https://southvoyage.com",
    logo: "https://southvoyage.com/favicon.png",
    description: home.metaDescription,
    areaServed: ["Florida", "Louisiana", "Georgia", "Texas"],
  };

  return (
    <>
      <Helmet>
        <title>{home.metaTitle}</title>
        <meta name="description" content={home.metaDescription} />
        <meta name="keywords" content={home.metaKeywords} />
        <link rel="canonical" href={canonicalUrl} />
        {alternateLinks.map((link) => (
          <link key={link.hrefLang} rel="alternate" hrefLang={link.hrefLang} href={link.href} />
        ))}
        <meta property="og:title" content={home.ogTitle} />
        <meta property="og:description" content={home.ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://southvoyage.com/social/home-og.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="SouthVoyage social share image featuring Southern USA travel destinations" />
        <meta property="og:locale" content={ogLocaleByLanguage[language]} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={home.ogTitle} />
        <meta name="twitter:description" content={home.ogDescription} />
        <meta name="twitter:image" content="https://southvoyage.com/social/home-og.png" />
        <script type="application/ld+json">{JSON.stringify(travelAgencyJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      <Navbar />
      <main>
        <HeroSection />
        <DestinationsSection />
        <ToursSection />
        <HotelsSection />
        <BlogPreviewSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
