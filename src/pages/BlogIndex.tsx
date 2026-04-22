import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://southvoyage.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://southvoyage.com/blog" },
  ],
};

const blogIndexJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Southern USA Travel Blog | SouthVoyage",
  url: "https://southvoyage.com/blog",
  description:
    "Southern USA travel blog with South Beach hotel guides, Key West tips, New Orleans food, Savannah itineraries, and South Padre advice.",
  mainEntity: {
    "@type": "Blog",
    name: "SouthVoyage Blog",
    url: "https://southvoyage.com/blog",
  },
};

const BlogIndex = () => {
  return (
    <>
      <Helmet>
        <title>Southern USA Travel Blog | SouthVoyage</title>
        <meta
          name="description"
          content="Southern USA travel blog with South Beach hotel guides, Key West tips, New Orleans food, Savannah itineraries, and South Padre advice."
        />
        <meta name="keywords" content="southern usa travel blog, south beach miami travel tips, key west travel guide, new orleans food tours, savannah weekend itinerary, south padre island hotel guide, southern usa hotel reviews, best things to do in key west, travel tips american south" />
        <link rel="canonical" href="https://southvoyage.com/blog" />
        <meta property="og:title" content="Southern USA Travel Blog | SouthVoyage" />
        <meta property="og:description" content="Southern USA travel blog with South Beach hotel guides, Key West tips, New Orleans food, Savannah itineraries, and South Padre advice." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://southvoyage.com/blog" />
        <meta property="og:image" content="https://southvoyage.com/social/blog-og.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="SouthVoyage blog social share image" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Southern USA Travel Blog | SouthVoyage" />
        <meta name="twitter:description" content="Southern USA travel blog with South Beach hotel guides, Key West tips, New Orleans food, Savannah itineraries, and South Padre advice." />
        <meta name="twitter:image" content="https://southvoyage.com/social/blog-og.png" />
        <script type="application/ld+json">{JSON.stringify(blogIndexJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      <Navbar />
      <main className="pt-16">
        {/* Blog Hero */}
        <section className="bg-sand py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">
              SouthVoyage Blog
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-4">
              Travel Guides & Tips
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert hotel reviews, destination guides, and insider tips to help you
              explore the best of the Southern United States.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            {/* Featured post */}
            <Link
              to={`/blog/${blogPosts[0].slug}`}
              className="group block mb-10 md:mb-12 bg-card rounded-2xl border border-border overflow-hidden hover:shadow-elevated transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={1200}
                    height={600}
                  />
                </div>
                <div className="p-5 sm:p-6 lg:p-12 flex flex-col justify-center">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-body font-semibold mb-4 w-fit">
                    {blogPosts[0].category} — Featured
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="font-body text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-4 text-sm font-body text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {blogPosts[0].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {blogPosts[0].readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Rest of posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.slice(1).map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width={1200}
                      height={600}
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-primary/10 text-primary px-2.5 py-0.5 rounded-full text-xs font-body font-semibold mb-3">
                      {post.category}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap items-center gap-3 text-xs font-body text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
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

export default BlogIndex;
