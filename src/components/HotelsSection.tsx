import { Star, Wifi, Car, UtensilsCrossed } from "lucide-react";

const PARTNER = "partner_id=0IQTGX8&utm_medium=online_publisher";
const GYG = "https://www.getyourguide.com";

const hotels = [
  {
    name: "South Beach Oceanfront Hotels",
    description: "Stay steps from the sand in Miami's most iconic beachfront properties. Art Deco charm meets luxury amenities.",
    location: "South Beach, Miami",
    priceRange: "$180 – $600/night",
    link: `${GYG}/miami-beach-l181/?q=hotels&${PARTNER}`,
    amenities: ["Oceanfront", "Pool", "Dining"],
  },
  {
    name: "Miami Beach Oceanfront Resorts",
    description: "World-class oceanfront resorts with infinity pools, spa treatments, and direct beach access in Miami Beach.",
    location: "Miami Beach, FL",
    priceRange: "$250 – $900/night",
    link: `${GYG}/miami-l178/?q=hotels&${PARTNER}`,
    amenities: ["Resort", "Spa", "Beach"],
  },
  {
    name: "Best Hotels in Key West",
    description: "Charming boutique hotels and tropical resorts. Wake up to turquoise waters and palm-lined pools.",
    location: "Key West, FL",
    priceRange: "$150 – $450/night",
    link: `${GYG}/key-west-l200/?q=hotels&${PARTNER}`,
    amenities: ["Boutique", "Pool", "Free WiFi"],
  },
  {
    name: "South Padre Island Hotels",
    description: "Beachfront condos and family-friendly resorts on the Texas coast. Perfect for water sports and relaxation.",
    location: "South Padre Island, TX",
    priceRange: "$120 – $350/night",
    link: `${GYG}/south-padre-island-l4439/?q=hotels&${PARTNER}`,
    amenities: ["Beachfront", "Family", "Parking"],
  },
];

const HotelsSection = () => {
  return (
    <section id="hotels" className="py-24 bg-sand">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-coral mb-3">
            Where to Stay
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Best Southern Hotels
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Find the perfect accommodation — from beachfront resorts in South Beach to
            charming boutique hotels in Savannah. Book with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hotels.map((hotel) => (
            <a
              key={hotel.name}
              href={hotel.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-2xl border border-border p-8 hover:shadow-elevated transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                    {hotel.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">{hotel.location}</p>
                </div>
                <span className="font-body text-sm font-bold text-secondary whitespace-nowrap">
                  {hotel.priceRange}
                </span>
              </div>

              <p className="font-body text-muted-foreground text-sm mb-5">{hotel.description}</p>

              <div className="flex items-center gap-3 flex-wrap">
                {hotel.amenities.map((a) => (
                  <span key={a} className="bg-muted px-3 py-1 rounded-full text-xs font-body font-medium text-muted-foreground">
                    {a}
                  </span>
                ))}
                <span className="ml-auto font-body text-sm font-semibold text-primary group-hover:underline">
                  Check Availability →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelsSection;
