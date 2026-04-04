import destKeyWest from "@/assets/dest-key-west.jpg";
import destNewOrleans from "@/assets/dest-new-orleans.jpg";
import destSouthPadre from "@/assets/dest-south-padre.jpg";
import destMiamiBeach from "@/assets/dest-miami-beach.jpg";
import destSavannah from "@/assets/dest-savannah.jpg";

const GYG_BASE = "https://www.getyourguide.com";
const PARTNER = "partner_id=0IQTGX8&utm_medium=online_publisher";

const destinations = [
  {
    name: "South Beach, Miami",
    description: "Iconic Art Deco architecture, world-class nightlife, and pristine white sand beaches along Ocean Drive.",
    image: destMiamiBeach,
    link: `${GYG_BASE}/miami-l178/?${PARTNER}`,
    tag: "Most Popular",
  },
  {
    name: "Key West",
    description: "The southernmost point of the US, famous for stunning sunsets, Hemingway's home, and vibrant coral reefs.",
    image: destKeyWest,
    link: `${GYG_BASE}/key-west-l200/?${PARTNER}`,
    tag: "Island Paradise",
  },
  {
    name: "New Orleans",
    description: "The birthplace of jazz, legendary Cajun cuisine, and the unforgettable energy of the French Quarter.",
    image: destNewOrleans,
    link: `${GYG_BASE}/new-orleans-l60/?${PARTNER}`,
    tag: "Culture & Music",
  },
  {
    name: "South Padre Island",
    description: "Texas' premier beach destination with dolphin watching, deep-sea fishing, and year-round sunshine.",
    image: destSouthPadre,
    link: `${GYG_BASE}/south-padre-island-l4439/?${PARTNER}`,
    tag: "Beach Escape",
  },
  {
    name: "Savannah",
    description: "Charming squares draped in Spanish moss, historic architecture, and Southern hospitality at its finest.",
    image: destSavannah,
    link: `${GYG_BASE}/savannah-l936/?${PARTNER}`,
    tag: "Historic South",
  },
];

const DestinationsSection = () => {
  return (
    <section id="destinations" className="py-24 bg-sand">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">
            Where to Go
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Top Southern Destinations
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Explore the most captivating cities and beaches across the American South,
            each offering unforgettable experiences and warm hospitality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First card - featured large */}
          <a
            href={destinations[0].link}
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-2 lg:col-span-2 group relative rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300 aspect-[2/1]"
          >
            <img
              src={destinations[0].image}
              alt={`${destinations[0].name} - Southern USA travel destination`}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              width={800}
              height={600}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <span className="inline-block bg-gradient-ocean px-3 py-1 rounded-full text-xs font-body font-semibold text-primary-foreground mb-3">
                {destinations[0].tag}
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-sand mb-2">{destinations[0].name}</h3>
              <p className="font-body text-sand/80 text-sm md:text-base max-w-lg">{destinations[0].description}</p>
            </div>
          </a>

          {/* Remaining cards */}
          {destinations.slice(1).map((dest) => (
            <a
              key={dest.name}
              href={dest.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300 aspect-[4/5]"
            >
              <img
                src={dest.image}
                alt={`${dest.name} - Southern USA travel destination`}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block bg-gradient-sunset px-3 py-1 rounded-full text-xs font-body font-semibold text-primary-foreground mb-3">
                  {dest.tag}
                </span>
                <h3 className="font-display text-xl font-bold text-sand mb-1">{dest.name}</h3>
                <p className="font-body text-sand/80 text-sm">{dest.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
