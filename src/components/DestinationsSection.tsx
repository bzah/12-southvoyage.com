import { Link } from "react-router-dom";
import destKeyWest from "@/assets/dest-key-west.jpg";
import destNewOrleans from "@/assets/dest-new-orleans.jpg";
import destSouthPadre from "@/assets/dest-south-padre.jpg";
import destMiamiBeach from "@/assets/dest-miami-beach.jpg";
import destSavannah from "@/assets/dest-savannah.jpg";
import { useI18n } from "@/lib/i18n";

const destinations = [
  { image: destMiamiBeach, slug: "south-beach-miami" },
  { image: destKeyWest, slug: "key-west" },
  { image: destNewOrleans, slug: "new-orleans" },
  { image: destSouthPadre, slug: "south-padre-island" },
  { image: destSavannah, slug: "savannah" },
] as const;

const DestinationsSection = () => {
  const { content } = useI18n();
  const section = content.home.destinations;

  return (
    <section id="destinations" className="py-24 bg-sand">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">
            {section.eyebrow}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            {section.title}
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">{section.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            to={`/destinations/${destinations[0].slug}`}
            className="md:col-span-2 lg:col-span-2 group relative rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300 aspect-[2/1]"
          >
            <img
              src={destinations[0].image}
              alt={`${section.cards[0].name} - Southern USA travel destination`}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              width={800}
              height={600}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <span className="inline-block bg-gradient-ocean px-3 py-1 rounded-full text-xs font-body font-semibold text-primary-foreground mb-3">
                {section.cards[0].tag}
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-sand mb-2">{section.cards[0].name}</h3>
              <p className="font-body text-sand/80 text-sm md:text-base max-w-lg">{section.cards[0].description}</p>
            </div>
          </Link>

          {destinations.slice(1).map((dest, index) => {
            const item = section.cards[index + 1];
            return (
              <Link
                key={dest.slug}
                to={`/destinations/${dest.slug}`}
                className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300 aspect-[4/5]"
              >
                <img
                  src={dest.image}
                  alt={`${item.name} - Southern USA travel destination`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block bg-gradient-sunset px-3 py-1 rounded-full text-xs font-body font-semibold text-primary-foreground mb-3">
                    {item.tag}
                  </span>
                  <h3 className="font-display text-xl font-bold text-sand mb-1">{item.name}</h3>
                  <p className="font-body text-sand/80 text-sm">{item.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
