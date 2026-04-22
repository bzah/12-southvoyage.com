import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen, Clock, MapPin, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFound from "./NotFound";
import { blogPosts } from "@/data/blogPosts";
import { getDestinationBySlug } from "@/data/destinations";
import { destinationTopics, getDestinationTopicContent, isDestinationTopic, type DestinationTopic } from "@/lib/destinationTopics";

const topicLabels: Record<DestinationTopic, string> = {
  hotels: "Hotels",
  tours: "Tours",
  "things-to-do": "Things to Do",
};

const DestinationTopicPage = () => {
  const { slug, topic } = useParams<{ slug: string; topic: string }>();
  const destination = slug ? getDestinationBySlug(slug) : undefined;

  if (!destination || !topic || !isDestinationTopic(topic)) {
    return <NotFound />;
  }

  const topicContent = getDestinationTopicContent(destination, topic);
  const destinationBlogs = topicContent.relatedBlogs.length > 0
    ? topicContent.relatedBlogs
    : blogPosts.filter((post) => post.relatedDestinationSlug === destination.slug).slice(0, 3);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://southvoyage.com/" },
      { "@type": "ListItem", position: 2, name: "Destinations", item: "https://southvoyage.com/#destinations" },
      { "@type": "ListItem", position: 3, name: destination.name, item: `https://southvoyage.com/destinations/${destination.slug}` },
      { "@type": "ListItem", position: 4, name: topicLabels[topic], item: `https://southvoyage.com/destinations/${destination.slug}/${topic}` },
    ],
  };

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: topicContent.title,
    description: topicContent.description,
    url: `https://southvoyage.com/destinations/${destination.slug}/${topic}`,
    about: {
      "@type": "TouristDestination",
      name: destination.name,
    },
  };

  return (
    <>
      <Helmet>
        <title>{topicContent.title}</title>
        <meta name="description" content={topicContent.description} />
        <meta name="keywords" content={topicContent.keywords} />
        <link rel="canonical" href={`https://southvoyage.com/destinations/${destination.slug}/${topic}`} />
        <meta property="og:title" content={topicContent.title} />
        <meta property="og:description" content={topicContent.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://southvoyage.com/destinations/${destination.slug}/${topic}`} />
        <script type="application/ld+json">{JSON.stringify(collectionJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      <Navbar />
      <main className="pt-16">
        <section className="relative h-[52vh] min-h-[320px] flex items-end overflow-hidden">
          <img
            src={destination.heroImage}
            alt={`${destination.name} ${topicLabels[topic]}`}
            className="absolute inset-0 h-full w-full object-cover"
            width={1200}
            height={700}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/35 to-foreground/10" />
          <div className="relative z-10 container mx-auto px-4 pb-8 sm:pb-12">
            <Link to={`/destinations/${destination.slug}`} className="mb-4 inline-flex items-center gap-1 text-sm font-body text-sand/75 transition-colors hover:text-sand">
              <ArrowLeft className="h-4 w-4" /> Back to {destination.name}
            </Link>
            <p className="mb-2 font-body text-sm uppercase tracking-[0.2em] text-primary">{topicContent.eyebrow}</p>
            <h1 className="max-w-4xl font-display text-3xl font-bold leading-tight text-sand sm:text-4xl md:text-6xl">{topicContent.heading}</h1>
            <p className="mt-4 max-w-3xl font-body text-base leading-relaxed text-sand/85 sm:text-lg">{topicContent.intro}</p>
          </div>
        </section>

        <section className="bg-background py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid gap-4 md:grid-cols-3">
              {destinationTopics.map((destinationTopic) => {
                const isActive = destinationTopic === topic;
                return (
                  <Link
                    key={destinationTopic}
                    to={`/destinations/${destination.slug}/${destinationTopic}`}
                    className={`rounded-2xl border p-5 transition-colors ${
                      isActive
                        ? "border-primary bg-primary/10"
                        : "border-border bg-card hover:border-primary/40"
                    }`}
                  >
                    <p className="font-display text-lg font-semibold text-foreground">{topicLabels[destinationTopic]}</p>
                    <p className="mt-2 font-body text-sm text-muted-foreground">SEO landing page for {destination.name} {topicLabels[destinationTopic].toLowerCase()} keywords.</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-sand py-14 md:py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="mb-10 text-center">
              <p className="mb-3 font-body text-sm uppercase tracking-[0.2em] text-secondary">{topicContent.eyebrow}</p>
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">{topicContent.primarySectionTitle}</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {topicContent.primaryItems.map((item) => (
                <div key={item.title} className="rounded-2xl border border-border bg-card p-6">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold text-foreground">{item.title}</h3>
                    {item.accent && <span className="shrink-0 font-body text-sm font-semibold text-secondary">{item.accent}</span>}
                  </div>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:underline"
                    >
                      Open option <ArrowRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-14 md:py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="mb-10 text-center">
              <p className="mb-3 font-body text-sm uppercase tracking-[0.2em] text-coral">Plan smarter</p>
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">{topicContent.secondarySectionTitle}</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {topicContent.secondaryItems.map((item) => (
                <div key={item.title} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:underline"
                    >
                      View activity <ArrowRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {topic === "tours" && (
          <section className="bg-sand py-14 md:py-16">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="mb-10 text-center">
                <p className="mb-3 font-body text-sm uppercase tracking-[0.2em] text-primary">Book now</p>
                <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">Featured tours in {destination.name.split(",")[0]}</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {destination.topTours.slice(0, 6).map((tour) => (
                  <a key={tour.title} href={tour.link} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-elevated">
                    <div className="mb-3 flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="font-body font-semibold text-foreground">{tour.rating}</span>
                      <span className="font-body">({tour.reviews.toLocaleString()})</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{tour.title}</h3>
                    <div className="mt-3 flex items-center gap-2 font-body text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" /> {tour.duration}
                    </div>
                    <p className="mt-4 font-body text-base font-bold text-secondary">{tour.price}</p>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {destinationBlogs.length > 0 && (
          <section className="bg-background py-14 md:py-16">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="mb-10 text-center">
                <p className="mb-3 font-body text-sm uppercase tracking-[0.2em] text-primary">Related guides</p>
                <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">More on {destination.name.split(",")[0]}</h2>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {destinationBlogs.map((post) => (
                  <Link key={post.slug} to={`/blog/${post.slug}`} className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-elevated">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={800} height={500} />
                    </div>
                    <div className="p-5">
                      <div className="mb-2 flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <span className="font-body text-xs uppercase tracking-wider text-primary">{post.category}</span>
                      </div>
                      <h3 className="font-display text-lg font-semibold text-foreground transition-colors group-hover:text-primary">{post.title}</h3>
                      <p className="mt-2 font-body text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="bg-sand py-14 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="rounded-3xl border border-border bg-card p-8 md:p-10 text-center">
              <div className="mb-3 inline-flex items-center gap-2 font-body text-sm uppercase tracking-[0.2em] text-secondary">
                <MapPin className="h-4 w-4" /> Main destination guide
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">Return to the full {destination.name} travel guide</h2>
              <p className="mx-auto mt-4 max-w-2xl font-body text-sm leading-relaxed text-muted-foreground">
                See the complete destination overview with hotels, tours, FAQs, related blog posts, and all essential planning details in one place.
              </p>
              <Link to={`/destinations/${destination.slug}`} className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-ocean px-8 py-4 font-body font-semibold text-primary-foreground transition-opacity hover:opacity-90">
                Open main destination page <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DestinationTopicPage;