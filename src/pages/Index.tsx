import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DestinationsSection from "@/components/DestinationsSection";
import ToursSection from "@/components/ToursSection";
import HotelsSection from "@/components/HotelsSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "SouthVoyage",
  url: "https://southvoyage.com",
  description:
    "Discover the best tours, hotels, and attractions across the Southern United States. Book top-rated experiences in South Beach, Key West, New Orleans, and more.",
  areaServed: {
    "@type": "Place",
    name: "Southern United States",
  },
  sameAs: [],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://southvoyage.com/" },
  ],
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>SouthVoyage — Best Tours, Hotels & Destinations in the South USA</title>
        <meta
          name="description"
          content="Explore the American South: book top-rated tours in South Beach Miami, Key West, New Orleans & more. Find oceanfront hotels, activities & travel guides at SouthVoyage.com."
        />
        <meta name="keywords" content="south beach hotels, south hotel, south padre island hotels, miami beach hotels, key west tours, new orleans tours, southern usa travel, oceanfront hotels south beach miami, best hotels south beach miami" />
        <link rel="canonical" href="https://southvoyage.com/" />
        <meta property="og:title" content="SouthVoyage — Discover the American South" />
        <meta property="og:description" content="Book top-rated tours, hotels and activities across South Beach, Key West, New Orleans and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://southvoyage.com/" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
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
