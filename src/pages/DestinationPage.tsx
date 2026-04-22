import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Clock, Star, ArrowLeft, ChevronDown, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDestinationBySlug, destinations } from "@/data/destinations";
import { blogPosts } from "@/data/blogPosts";
import NotFound from "./NotFound";
import { useState } from "react";
import { destinationTopics } from "@/lib/destinationTopics";

const topicLabels = {
  hotels: "Hotels",
  tours: "Tours",
  "things-to-do": "Things to Do",
} as const;

const DestinationPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const dest = slug ? getDestinationBySlug(slug) : undefined;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!dest) return <NotFound />;

  const related = destinations.filter((d) => dest.relatedSlugs.includes(d.slug));
  const relatedBlogs = blogPosts.filter((p) => dest.relatedBlogSlugs.includes(p.slug));
  const destinationName = dest.name.split(",")[0];
  const planningHighlights = [
    `Stay close to the main visitor zone in ${destinationName} if you want to walk between food, nightlife, and top attractions.`,
    `Book your headline tour first, then choose a hotel area that reduces transfers and keeps mornings easy.`,
    `Use the related guides below to compare neighborhoods, seasonal timing, and the best-value experiences before you click through.`,
  ];

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

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://southvoyage.com/" },
      { "@type": "ListItem", position: 2, name: "Destinations", item: "https://southvoyage.com/#destinations" },
      { "@type": "ListItem", position: 3, name: dest.name, item: `https://southvoyage.com/destinations/${dest.slug}` },
    ],
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
        <meta property="og:image" content={`https://southvoyage.com/social/destinations/${dest.slug}.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`${dest.name} travel guide social share image`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={dest.metaTitle} />
        <meta name="twitter:description" content={dest.metaDescription} />
        <meta name="twitter:image" content={`https://southvoyage.com/social/destinations/${dest.slug}.png`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative h-[58vh] min-h-[340px] sm:min-h-[400px] flex items-end overflow-hidden">
          <img
            src={dest.heroImage}
            alt={`${dest.name} travel destination`}
            className="absolute inset-0 w-full h-full object-cover"
            width={800}
            height={600}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-foreground/10" />
          <div className="relative z-10 container mx-auto px-4 pb-8 sm:pb-12">
            <Link to="/#destinations" className="inline-flex items-center gap-1 text-sand/70 font-body text-sm hover:text-sand transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" /> All Destinations
            </Link>
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-2">{dest.tagline}</p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-sand mb-3 leading-tight max-w-3xl">{dest.name}</h1>
          </div>
        </section>

        {/* Intro + Content */}
        <section className="py-14 md:py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="font-body text-lg leading-relaxed text-muted-foreground mb-12">
              {dest.introText}
            </p>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-12">
              {destinationTopics.map((topic) => (
                <Link
                  key={topic}
                  to={`/destinations/${dest.slug}/${topic}`}
                  className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40 hover:bg-primary/5"
                >
                  <p className="font-display text-lg font-semibold text-foreground">{topicLabels[topic]}</p>
                  <p className="mt-2 font-body text-sm text-muted-foreground">
                Dedicated SEO landing page for {destinationName} {topicLabels[topic].toLowerCase()} keywords.
                  </p>
                </Link>
              ))}
            </div>

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
        <section className="py-14 md:py-16 bg-sand">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary mb-3">
                Book Experiences
              </p>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
                Top Tours & Activities in {destinationName}
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
                  <div className="flex flex-wrap items-center gap-3 mb-4 text-muted-foreground text-sm font-body">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {tour.duration}</span>
                  </div>
                  <div className="flex items-center justify-between flex-wrap gap-3 pt-4 border-t border-border">
                    <span className="font-body text-lg font-bold text-secondary">{tour.price}</span>
                    <span className="font-body text-sm font-semibold text-primary group-hover:underline shrink-0">Book Now →</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href={dest.gygSearchLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto bg-gradient-ocean px-8 py-4 rounded-full font-body font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Browse All {destinationName} Tours
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 max-w-5xl mx-auto">
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary mb-3">Local planning strategy</p>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">What converts better than a generic tour list</h3>
                <ul className="space-y-3">
                  {planningHighlights.map((highlight) => (
                    <li key={highlight} className="font-body text-sm leading-relaxed text-muted-foreground border-b border-border pb-3 last:border-b-0 last:pb-0">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">Affiliate booking</p>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">See more tours and activity dates</h3>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground mb-5">
                    Travelers who have already read a destination summary usually respond best to a direct search CTA with clear intent.
                  </p>
                </div>
                <a
                  href={dest.gygSearchLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-gradient-ocean px-6 py-4 rounded-full text-center font-body font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  Search {destinationName} Activities
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Hotels */}
        <section className="py-14 md:py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <p className="font-body text-sm uppercase tracking-[0.2em] text-coral mb-3">
                Where to Stay
              </p>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
                Best Hotel Areas in {destinationName}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dest.hotelAreas.map((area) => (
                <a
                  key={area.name}
                  href={dest.gygSearchLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card rounded-2xl border border-border p-6"
                >
                  <div className="flex flex-col sm:flex-row items-start justify-between mb-2 gap-2">
                    <h3 className="font-display text-lg font-bold text-foreground">{area.name}</h3>
                    <span className="font-body text-sm font-semibold text-secondary whitespace-nowrap sm:ml-4">
                      {area.priceRange}
                    </span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground">{area.description}</p>
                  <span className="mt-4 inline-block font-body text-sm font-semibold text-primary group-hover:underline">
                    Check stays in this area →
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-sand p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6 items-start">
                <div>
                  <p className="font-body text-sm uppercase tracking-[0.2em] text-coral mb-3">Hotel booking notes</p>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">Where readers usually book next</h3>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground mb-4">
                    HCMC-style travel publishers convert hotel traffic by pairing neighborhood advice, sample price bands, and a direct path into availability search. This section does the same without cluttering the guide.
                  </p>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground">
                    Encourage readers to compare 2–3 hotel areas first, then click through once they know whether they want walkability, beach access, nightlife, or quieter family-friendly stays.
                  </p>
                </div>
                <a
                  href={dest.gygSearchLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-border bg-card p-6 block hover:shadow-elevated transition-shadow"
                >
                  <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">Search stays</p>
                  <h4 className="font-display text-2xl font-bold text-foreground mb-3">Compare {destinationName} hotel options</h4>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground mb-5">
                    Open more listings, dates, and price options for this destination in one click.
                  </p>
                  <span className="font-body text-sm font-semibold text-primary">Browse Hotels & Packages →</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 md:py-16 bg-sand">
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

        {/* Related blog articles */}
        {relatedBlogs.length > 0 && (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">
                  Travel Guides & Tips
                </p>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
                  Read More About {dest.name.split(",")[0]}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {relatedBlogs.map((post) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        width={800}
                        height={450}
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="w-3.5 h-3.5 text-primary" />
                        <span className="font-body text-xs uppercase tracking-wider text-primary font-semibold">{post.category}</span>
                        <span className="font-body text-xs text-muted-foreground">· {post.readTime}</span>
                      </div>
                      <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
                        {post.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}


        <section className="py-14 md:py-16 bg-background">
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
