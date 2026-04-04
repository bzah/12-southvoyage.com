import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, Clock } from "lucide-react";

const BlogPreviewSection = () => {
  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">
            Travel Guides & Tips
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            From the Blog
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Expert travel guides, hotel reviews, and insider tips to help you plan
            the perfect Southern getaway.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
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
              <div className="p-5">
                <span className="inline-block bg-primary/10 text-primary px-2.5 py-0.5 rounded-full text-xs font-body font-semibold mb-3">
                  {post.category}
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
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

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-block border-2 border-primary px-8 py-4 rounded-full font-body font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
