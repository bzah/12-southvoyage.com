import { MapPin, Clock, Star } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const PARTNER = "partner_id=0IQTGX8&utm_medium=online_publisher";
const GYG = "https://www.getyourguide.com";

const tours = [
  {
    rating: 4.8,
    reviews: 1240,
    link: `${GYG}/miami-beach-l181/miami-south-beach-art-deco-walking-tour-t61497/?${PARTNER}`,
  },
  {
    rating: 4.7,
    reviews: 890,
    link: `${GYG}/key-west-l200/key-west-snorkeling-trip-with-breakfast-lunch-t23404/?${PARTNER}`,
  },
  {
    rating: 4.9,
    reviews: 2150,
    link: `${GYG}/new-orleans-l60/new-orleans-french-quarter-food-walking-tour-t68934/?${PARTNER}`,
  },
  {
    rating: 4.6,
    reviews: 560,
    link: `${GYG}/south-padre-island-l4439/?${PARTNER}`,
  },
  {
    rating: 4.7,
    reviews: 1800,
    link: `${GYG}/savannah-l936/savannah-hop-on-hop-off-trolley-tour-t69012/?${PARTNER}`,
  },
  {
    rating: 4.5,
    reviews: 3200,
    link: `${GYG}/miami-l178/everglades-airboat-ride-wildlife-show-t28374/?${PARTNER}`,
  },
] as const;

const quickGuides = [
  {
    title: "Book popular tours early",
    description: "Top-rated food tours, snorkeling trips, and sunset cruises often sell out first on weekends and holiday periods.",
  },
  {
    title: "Compare timing, not just price",
    description: "Morning tours usually bring cooler weather, calmer water, and better photo conditions across Florida, Georgia, and Louisiana.",
  },
  {
    title: "Bundle nearby experiences",
    description: "Use destination pages to pair one headline attraction with one neighborhood tour so visitors spend more time exploring and less time planning.",
  },
] as const;

const ToursSection = () => {
  const { content } = useI18n();
  const section = content.home.tours;

  return (
    <section id="tours" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary mb-3">
            {section.eyebrow}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            {section.title}
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">{section.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour, index) => {
            const item = section.cards[index];
            return (
              <a
                key={tour.link}
                href={tour.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card rounded-2xl border border-border p-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-1 mb-3">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span className="font-body text-sm font-semibold text-foreground">{tour.rating}</span>
                  <span className="font-body text-xs text-muted-foreground">({tour.reviews.toLocaleString()} {section.reviewsLabel})</span>
                </div>

                <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                  {item.title}
                </h3>

                <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-4 mb-4">
                  <span className="flex items-center gap-1 text-muted-foreground text-sm font-body">
                    <MapPin className="w-3.5 h-3.5" /> {item.location}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground text-sm font-body">
                    <Clock className="w-3.5 h-3.5" /> {item.duration}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border gap-4 flex-wrap">
                  <span className="font-body text-lg font-bold text-secondary">{item.price}</span>
                  <span className="font-body text-sm font-semibold text-primary group-hover:underline shrink-0">
                    {section.viewDetails} →
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-6">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary mb-3">Planning tips</p>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">How to choose the right Southern experience</h3>
            <div className="space-y-4">
              {quickGuides.map((guide) => (
                <div key={guide.title} className="border-b border-border last:border-b-0 pb-4 last:pb-0">
                  <h4 className="font-display text-lg font-semibold text-foreground mb-1">{guide.title}</h4>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground">{guide.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">Affiliate picks</p>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">Reserve tours with flexible cancellation</h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground mb-5">
                Use our destination guides to compare the most-booked city walks, snorkeling trips, food tours, and sightseeing cruises before checkout.
              </p>
            </div>
            <a
              href={`${GYG}/s/?q=best+southern+usa+tours&${PARTNER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full bg-gradient-ocean px-6 py-4 rounded-full text-center font-body font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Compare Top Southern Tours
            </a>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href={`${GYG}/s/?q=southern+usa&${PARTNER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto bg-gradient-ocean px-8 py-4 rounded-full font-body font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            {section.browseAll}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
