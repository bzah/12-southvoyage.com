import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, Clock } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const PARTNER = "partner_id=0IQTGX8&utm_medium=online_publisher";
const GYG = "https://www.getyourguide.com";

const BlogPreviewSection = () => {
  const { content } = useI18n();
  const section = content.home.blog;

  return (
    <section id="blog" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">
            {section.eyebrow}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            {section.title}
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">{section.description}</p>
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

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">More planning content</p>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Guide-style articles that move readers closer to booking</h3>
            <p className="font-body text-sm leading-relaxed text-muted-foreground mb-4">
              Our hotel guides, food roundups, snorkeling explainers, and weekend itineraries are written to answer the exact questions travelers ask before they reserve activities or choose where to stay.
            </p>
            <p className="font-body text-sm leading-relaxed text-muted-foreground">
              This denser editorial approach mirrors successful city-guide publishers: more useful local detail, more decision-support, and clearer paths into tours and hotel searches.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary mb-3">Affiliate shortcut</p>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">See trending bookable experiences</h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground mb-5">
                Send readers straight from inspiration into activities they can reserve now across the American South.
              </p>
            </div>
            <a
              href={`${GYG}/s/?q=southern+usa+activities&${PARTNER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full bg-gradient-ocean px-6 py-4 rounded-full text-center font-body font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Browse Popular Activities
            </a>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-block w-full sm:w-auto border-2 border-primary px-8 py-4 rounded-full font-body font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {section.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
