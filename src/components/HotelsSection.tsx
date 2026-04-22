import { useI18n } from "@/lib/i18n";

const PARTNER = "partner_id=0IQTGX8&utm_medium=online_publisher";
const GYG = "https://www.getyourguide.com";

const hotels = [
  { link: `${GYG}/miami-beach-l181/?q=hotels&${PARTNER}` },
  { link: `${GYG}/miami-l178/?q=hotels&${PARTNER}` },
  { link: `${GYG}/key-west-l200/?q=hotels&${PARTNER}` },
  { link: `${GYG}/south-padre-island-l4439/?q=hotels&${PARTNER}` },
] as const;

const HotelsSection = () => {
  const { content } = useI18n();
  const section = content.home.hotels;

  return (
    <section id="hotels" className="py-24 bg-sand">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-coral mb-3">
            {section.eyebrow}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            {section.title}
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">{section.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hotels.map((hotel, index) => {
            const item = section.cards[index];
            return (
              <a
                key={hotel.link}
                href={hotel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card rounded-2xl border border-border p-8 hover:shadow-elevated transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4 gap-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                      {item.name}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">{item.location}</p>
                  </div>
                  <span className="font-body text-sm font-bold text-secondary whitespace-nowrap">
                    {item.priceRange}
                  </span>
                </div>

                <p className="font-body text-muted-foreground text-sm mb-5">{item.description}</p>

                <div className="flex items-center gap-3 flex-wrap">
                  {item.amenities.map((amenity) => (
                    <span key={amenity} className="bg-muted px-3 py-1 rounded-full text-xs font-body font-medium text-muted-foreground">
                      {amenity}
                    </span>
                  ))}
                  <span className="ml-auto font-body text-sm font-semibold text-primary group-hover:underline">
                    {section.checkAvailability} →
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HotelsSection;
