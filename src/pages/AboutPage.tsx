import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MapPin, Globe, Users, Shield, Compass, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "SouthVoyage",
  url: "https://southvoyage.com",
  description:
    "SouthVoyage helps travelers discover the best tours, hotels, and experiences across the Southern United States — from South Beach Miami to New Orleans, Key West, and beyond.",
  areaServed: [
    { "@type": "State", name: "Florida" },
    { "@type": "State", name: "Louisiana" },
    { "@type": "State", name: "Georgia" },
    { "@type": "State", name: "Texas" },
  ],
  knowsAbout: [
    "Southern United States travel",
    "South Beach Miami hotels",
    "Key West tours",
    "New Orleans food tours",
    "South Padre Island resorts",
    "Savannah Georgia tourism",
  ],
  sameAs: [],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://southvoyage.com/" },
    { "@type": "ListItem", position: 2, name: "About Us", item: "https://southvoyage.com/about" },
  ],
};

const values = [
  {
    icon: Compass,
    title: "Expert Curation",
    description:
      "We handpick every tour, hotel, and activity recommendation based on real traveler reviews, local insights, and firsthand experience across the American South.",
  },
  {
    icon: Heart,
    title: "Traveler-First",
    description:
      "Our guides are designed to save you time and money. We highlight the best seasons to visit, insider booking tips, and honest price comparisons.",
  },
  {
    icon: Users,
    title: "Local Knowledge",
    description:
      "From the French Quarter's hidden gems to South Beach's best-kept secrets, we partner with local experts who know these destinations inside out.",
  },
  {
    icon: Globe,
    title: "Trusted Partners",
    description:
      "We work exclusively with reputable booking platforms to ensure secure reservations, instant confirmations, and hassle-free cancellation policies.",
  },
];

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About SouthVoyage — Your Southern USA Travel Guide</title>
        <meta
          name="description"
          content="SouthVoyage is your expert guide to the Southern United States. Discover curated tours, hotel recommendations, and travel guides for South Beach, Key West, New Orleans, Savannah & more."
        />
        <meta
          name="keywords"
          content="about southvoyage, southern usa travel guide, south beach travel agency, key west travel guide, new orleans travel, savannah tourism"
        />
        <link rel="canonical" href="https://southvoyage.com/about" />
        <meta property="og:title" content="About SouthVoyage — Your Southern USA Travel Guide" />
        <meta
          property="og:description"
          content="Expert travel guides, hotel reviews, and tour recommendations for the best destinations in the American South."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://southvoyage.com/about" />
        <script type="application/ld+json">{JSON.stringify(localBusinessJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-sand py-20">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">
              About Us
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              Your Guide to the <span className="text-primary">American South</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              SouthVoyage helps thousands of travelers discover the best tours, hotels, and hidden
              gems across the Southern United States — from the Art Deco glamour of South Beach to
              the soulful streets of New Orleans.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary mb-3">
                  Our Mission
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Making Southern Travel Effortless
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed mb-4">
                  We believe the Southern United States is one of the most diverse and exciting travel
                  regions in the world. From turquoise Gulf waters and barrier island beaches to
                  world-class cuisine, live music, and centuries of history — there's something here
                  for every type of traveler.
                </p>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  SouthVoyage was created to cut through the noise. We research, review, and curate
                  the best experiences so you can spend less time planning and more time exploring.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card rounded-2xl border border-border p-6 text-center">
                  <span className="font-display text-3xl font-bold text-primary">5</span>
                  <p className="font-body text-sm text-muted-foreground mt-1">Destinations</p>
                </div>
                <div className="bg-card rounded-2xl border border-border p-6 text-center">
                  <span className="font-display text-3xl font-bold text-secondary">50+</span>
                  <p className="font-body text-sm text-muted-foreground mt-1">Curated Tours</p>
                </div>
                <div className="bg-card rounded-2xl border border-border p-6 text-center">
                  <span className="font-display text-3xl font-bold text-accent">8</span>
                  <p className="font-body text-sm text-muted-foreground mt-1">Travel Guides</p>
                </div>
                <div className="bg-card rounded-2xl border border-border p-6 text-center">
                  <span className="font-display text-3xl font-bold text-coral">4</span>
                  <p className="font-body text-sm text-muted-foreground mt-1">US States</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-sand">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">
                Why SouthVoyage
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                What Sets Us Apart
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-card rounded-2xl border border-border p-8 hover:shadow-elevated transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <v.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{v.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Destinations we cover */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary mb-3">
              Our Coverage
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Destinations We Cover
            </h2>
            <p className="font-body text-base text-muted-foreground mb-10">
              We specialize in the most sought-after destinations across Florida, Louisiana, Georgia,
              and Texas — with more coming soon.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "South Beach, Miami", slug: "south-beach-miami" },
                { name: "Key West, Florida", slug: "key-west" },
                { name: "New Orleans, Louisiana", slug: "new-orleans" },
                { name: "South Padre Island, Texas", slug: "south-padre-island" },
                { name: "Savannah, Georgia", slug: "savannah" },
              ].map((d) => (
                <Link
                  key={d.slug}
                  to={`/destinations/${d.slug}`}
                  className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-5 py-2.5 font-body text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  {d.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Notice */}
        <section className="py-20 bg-sand">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="w-6 h-6 text-muted-foreground" />
              <h2 className="font-display text-2xl font-bold text-foreground">Legal Notice</h2>
            </div>

            <div className="space-y-6 font-body text-sm text-muted-foreground leading-relaxed">
              <div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">
                  Website Operator
                </h3>
                <p>
                  SouthVoyage.com is an independently operated travel information and affiliate website.
                  We provide curated travel guides, hotel recommendations, and tour listings for
                  destinations across the Southern United States.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">
                  Affiliate Disclosure
                </h3>
                <p>
                  SouthVoyage.com participates in affiliate programs, including the GetYourGuide
                  Partner Program. When you book a tour or activity through our links, we may earn a
                  commission at no additional cost to you. This helps support our team and allows us
                  to continue creating free travel content.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">
                  Content & Accuracy
                </h3>
                <p>
                  All information on this website — including hotel descriptions, tour details,
                  prices, and travel tips — is provided for informational purposes and based on our
                  research at the time of publication. Prices, availability, and details may change.
                  We recommend verifying all information directly with the service provider before
                  booking.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">
                  Copyright
                </h3>
                <p>
                  © {new Date().getFullYear()} SouthVoyage.com — All rights reserved. All content,
                  including text, images, and design, is the property of SouthVoyage.com and may not
                  be reproduced without written permission.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">
                  Contact
                </h3>
                <p>
                  For questions, corrections, or business inquiries, please contact us at{" "}
                  <a
                    href="mailto:contact@southvoyage.com"
                    className="text-primary hover:underline"
                  >
                    contact@southvoyage.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Explore?
            </h2>
            <p className="font-body text-muted-foreground mb-8">
              Start planning your Southern adventure with our curated destination guides and
              top-rated tour recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#destinations"
                className="inline-block bg-gradient-ocean px-8 py-4 rounded-full font-body font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Explore Destinations
              </Link>
              <Link
                to="/blog"
                className="inline-block border-2 border-primary px-8 py-4 rounded-full font-body font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Read the Blog
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
