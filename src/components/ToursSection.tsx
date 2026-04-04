import { MapPin, Clock, Star } from "lucide-react";

const PARTNER = "partner_id=0IQTGX8&utm_medium=online_publisher";
const GYG = "https://www.getyourguide.com";

const tours = [
  {
    title: "Miami: South Beach Art Deco Walking Tour",
    location: "Miami Beach, FL",
    duration: "2 hours",
    rating: 4.8,
    reviews: 1240,
    price: "From $25",
    link: `${GYG}/miami-beach-l181/miami-south-beach-art-deco-walking-tour-t61497/?${PARTNER}`,
  },
  {
    title: "Key West: Snorkeling Trip with Breakfast & Lunch",
    location: "Key West, FL",
    duration: "6.5 hours",
    rating: 4.7,
    reviews: 890,
    price: "From $95",
    link: `${GYG}/key-west-l200/key-west-snorkeling-trip-with-breakfast-lunch-t23404/?${PARTNER}`,
  },
  {
    title: "New Orleans: French Quarter Food Walking Tour",
    location: "New Orleans, LA",
    duration: "3 hours",
    rating: 4.9,
    reviews: 2150,
    price: "From $39",
    link: `${GYG}/new-orleans-l60/new-orleans-french-quarter-food-walking-tour-t68934/?${PARTNER}`,
  },
  {
    title: "South Padre Island: Dolphin Watch & Snorkeling",
    location: "South Padre Island, TX",
    duration: "3 hours",
    rating: 4.6,
    reviews: 560,
    price: "From $45",
    link: `${GYG}/south-padre-island-l4439/?${PARTNER}`,
  },
  {
    title: "Savannah: Trolley Tour of Historic District",
    location: "Savannah, GA",
    duration: "1.5 hours",
    rating: 4.7,
    reviews: 1800,
    price: "From $35",
    link: `${GYG}/savannah-l936/savannah-hop-on-hop-off-trolley-tour-t69012/?${PARTNER}`,
  },
  {
    title: "Everglades: Airboat Ride & Wildlife Show",
    location: "Miami, FL",
    duration: "4 hours",
    rating: 4.5,
    reviews: 3200,
    price: "From $29",
    link: `${GYG}/miami-l178/everglades-airboat-ride-wildlife-show-t28374/?${PARTNER}`,
  },
];

const ToursSection = () => {
  return (
    <section id="tours" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary mb-3">
            Experiences & Activities
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Popular Tours & Activities
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Book the best-rated tours and activities across the Southern USA.
            Handpicked experiences with verified reviews and instant confirmation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour) => (
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
                <span className="font-body text-xs text-muted-foreground">({tour.reviews.toLocaleString()} reviews)</span>
              </div>

              <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {tour.title}
              </h3>

              <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center gap-1 text-muted-foreground text-sm font-body">
                  <MapPin className="w-3.5 h-3.5" /> {tour.location}
                </span>
                <span className="flex items-center gap-1 text-muted-foreground text-sm font-body">
                  <Clock className="w-3.5 h-3.5" /> {tour.duration}
                </span>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="font-body text-lg font-bold text-secondary">{tour.price}</span>
                <span className="font-body text-sm font-semibold text-primary group-hover:underline">
                  View Details →
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={`${GYG}/s/?q=southern+usa&${PARTNER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-ocean px-8 py-4 rounded-full font-body font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Browse All Tours
          </a>
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
