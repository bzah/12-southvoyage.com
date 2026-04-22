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
          content="Explore the best of the American South with SouthVoyage. Compare South Beach Miami hotels, Key West snorkeling tours, New Orleans food experiences, Savannah getaways, and South Padre Island beach trips with expert travel tips, booking advice, and curated guides."
        />
        <meta name="keywords" content="southern usa travel, south beach miami hotels, best hotels south beach miami, miami beach oceanfront hotels, key west tours, key west snorkeling, new orleans tours, french quarter food tours, south padre island hotels, savannah georgia travel guide, things to do in the american south, southern usa vacation ideas" />
        <link rel="canonical" href="https://southvoyage.com/" />
        <meta property="og:title" content="SouthVoyage — Discover the American South" />
        <meta property="og:description" content="Find destination guides, hotel tips, food tours, beach escapes, and top-rated activities across South Beach, Key West, New Orleans, Savannah, and South Padre Island." />
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
