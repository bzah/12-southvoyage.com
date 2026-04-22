import { useI18n } from "@/lib/i18n";

const PARTNER = "partner_id=0IQTGX8&utm_medium=online_publisher";
const GYG = "https://www.getyourguide.com";

const hotels = [
  { link: `${GYG}/miami-beach-l181/?q=hotels&${PARTNER}` },
  { link: `${GYG}/miami-l178/?q=hotels&${PARTNER}` },
  { link: `${GYG}/key-west-l200/?q=hotels&${PARTNER}` },
  { link: `${GYG}/south-padre-island-l4439/?q=hotels&${PARTNER}` },
] as const;

const bookingNotes = [
  "Oceanfront and historic-core hotels usually carry the highest conversion because travelers want to stay close to the main attractions.",
  "Shoulder-season dates often produce the best mix of lower nightly rates and strong weather across South Beach, Key West, and Savannah.",
  "Use the destination guides to compare hotel areas before clicking through so readers land on booking pages with stronger intent.",
] as const;

const HotelsSection = () => {
  const { content } = useI18n();
  const section = content.home.hotels;

  return (
    <section id="hotels" className="py-20 md:py-24 bg-sand">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-coral mb-3">
            {section.eyebrow}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
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
                className="group bg-card rounded-2xl border border-border p-6 sm:p-8 hover:shadow-elevated transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-3 sm:gap-4">
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
                  <span className="sm:ml-auto w-full sm:w-auto pt-1 sm:pt-0 font-body text-sm font-semibold text-primary group-hover:underline">
                    {section.checkAvailability} →
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-coral mb-3">Booking advice</p>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">How readers pick better stays</h3>
            <ul className="space-y-3">
              {bookingNotes.map((note) => (
                <li key={note} className="font-body text-sm leading-relaxed text-muted-foreground border-b border-border pb-3 last:border-b-0 last:pb-0">
                  {note}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">Stay search</p>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">Browse more hotel options</h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground mb-5">
                Visitors comparing family resorts, boutique hotels, and beachfront stays can jump directly to more availability options from here.
              </p>
            </div>
            <a
              href={`${GYG}/s/?q=southern+usa+hotels&${PARTNER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full bg-gradient-ocean px-6 py-4 rounded-full text-center font-body font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Search Southern Hotel Deals
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelsSection;
