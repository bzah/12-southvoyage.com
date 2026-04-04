import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

const BlogIndex = () => {
  return (
    <>
      <Helmet>
        <title>Travel Blog — Southern USA Guides, Hotels & Tips | SouthVoyage</title>
        <meta
          name="description"
          content="Read expert travel guides for the American South. Hotel reviews, tour recommendations, and insider tips for South Beach, Key West, New Orleans & more."
        />
        <link rel="canonical" href="https://southvoyage.com/blog" />
      </Helmet>

      <Navbar />
      <main className="pt-16">
        {/* Blog Hero */}
        <section className="bg-sand py-20">
          <div className="container mx-auto px-4 text-center">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">
              SouthVoyage Blog
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">
              Travel Guides & Tips
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert hotel reviews, destination guides, and insider tips to help you
              explore the best of the Southern United States.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            {/* Featured post */}
            <Link
              to={`/blog/${blogPosts[0].slug}`}
              className="group block mb-12 bg-card rounded-2xl border border-border overflow-hidden hover:shadow-elevated transition-all duration-300"
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
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-body font-semibold mb-4 w-fit">
                    {blogPosts[0].category} — Featured
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="font-body text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm font-body text-muted-foreground">
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
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs font-body text-muted-foreground">
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
