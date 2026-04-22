import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DestinationsSection from "@/components/DestinationsSection";
import ToursSection from "@/components/ToursSection";
import HotelsSection from "@/components/HotelsSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import Footer from "@/components/Footer";
import { useI18n } from "@/lib/i18n";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://southvoyage.com/" }],
};

const Index = () => {
  const { content } = useI18n();
  const home = content.home;

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
        <link rel="canonical" href="https://southvoyage.com/" />
        <meta property="og:title" content={home.ogTitle} />
        <meta property="og:description" content={home.ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://southvoyage.com/" />
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
