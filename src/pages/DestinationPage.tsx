import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Clock, Star, ArrowLeft, ChevronDown, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDestinationBySlug, destinations } from "@/data/destinations";
import { blogPosts } from "@/data/blogPosts";
import NotFound from "./NotFound";
import { useState } from "react";

const DestinationPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const dest = slug ? getDestinationBySlug(slug) : undefined;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!dest) return <NotFound />;

  const related = destinations.filter((d) => dest.relatedSlugs.includes(d.slug));
  const relatedBlogs = blogPosts.filter((p) => dest.relatedBlogSlugs.includes(p.slug));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: dest.name,
    description: dest.metaDescription,
    url: `https://southvoyage.com/destinations/${dest.slug}`,
    touristType: ["Leisure", "Adventure", "Cultural"],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dest.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <Helmet>
        <title>{dest.metaTitle}</title>
        <meta name="description" content={dest.metaDescription} />
        <meta name="keywords" content={dest.keywords} />
        <link rel="canonical" href={`https://southvoyage.com/destinations/${dest.slug}`} />
        <meta property="og:title" content={dest.metaTitle} />
        <meta property="og:description" content={dest.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://southvoyage.com/destinations/${dest.slug}`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
          <img
            src={dest.heroImage}
            alt={`${dest.name} travel destination`}
            className="absolute inset-0 w-full h-full object-cover"
            width={800}
            height={600}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-foreground/10" />
          <div className="relative z-10 container mx-auto px-4 pb-12">
            <Link to="/#destinations" className="inline-flex items-center gap-1 text-sand/70 font-body text-sm hover:text-sand transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" /> All Destinations
            </Link>
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-2">{dest.tagline}</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-sand mb-3">{dest.name}</h1>
          </div>
        </section>

        {/* Intro + Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="font-body text-lg leading-relaxed text-muted-foreground mb-12">
              {dest.introText}
            </p>

            {dest.sections.map((section, i) => (
              <div key={i} className="mb-12">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {section.heading}
                </h2>
                <div className="font-body text-base leading-relaxed text-muted-foreground whitespace-pre-line">
                  {section.content.split("**").map((part, j) =>
                    j % 2 === 0 ? part : <strong key={j} className="text-foreground font-semibold">{part}</strong>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tours */}
        <section className="py-16 bg-sand">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary mb-3">
                Book Experiences
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                Top Tours & Activities in {dest.name.split(",")[0]}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {dest.topTours.map((tour) => (
                <a
                  key={tour.title}
                  href={tour.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-card rounded-2xl border border-border p-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="font-body text-sm font-semibold text-foreground">{tour.rating}</span>
                    <span className="font-body text-xs text-muted-foreground">({tour.reviews.toLocaleString()})</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                    {tour.title}
                  </h3>
                  <div className="flex items-center gap-4 mb-4 text-muted-foreground text-sm font-body">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {tour.duration}</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="font-body text-lg font-bold text-secondary">{tour.price}</span>
                    <span className="font-body text-sm font-semibold text-primary group-hover:underline">Book Now →</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href={dest.gygSearchLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-ocean px-8 py-4 rounded-full font-body font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Browse All {dest.name.split(",")[0]} Tours
              </a>
            </div>
          </div>
        </section>

        {/* Hotels */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <p className="font-body text-sm uppercase tracking-[0.2em] text-coral mb-3">
                Where to Stay
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                Best Hotel Areas in {dest.name.split(",")[0]}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dest.hotelAreas.map((area) => (
                <div
                  key={area.name}
                  className="bg-card rounded-2xl border border-border p-6"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-display text-lg font-bold text-foreground">{area.name}</h3>
                    <span className="font-body text-sm font-semibold text-secondary whitespace-nowrap ml-4">
                      {area.priceRange}
                    </span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-sand">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {dest.faqs.map((faq, i) => (
                <div key={i} className="bg-card rounded-xl border border-border overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-display text-base font-semibold text-foreground pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 animate-fade-in">
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related destinations */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
              Explore More Destinations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/destinations/${r.slug}`}
                  className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300 aspect-[4/3]"
                >
                  <img
                    src={r.heroImage}
                    alt={`${r.name} travel destination`}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-display text-xl font-bold text-sand">{r.name}</h3>
                    <p className="font-body text-sm text-sand/70">{r.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DestinationPage;
