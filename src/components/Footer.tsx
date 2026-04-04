import { Link } from "react-router-dom";

const PARTNER = "partner_id=0IQTGX8&utm_medium=online_publisher";
const GYG = "https://www.getyourguide.com";

const destLinks = [
  { label: "South Beach Miami", slug: "south-beach-miami" },
  { label: "Key West", slug: "key-west" },
  { label: "New Orleans", slug: "new-orleans" },
  { label: "South Padre Island", slug: "south-padre-island" },
  { label: "Savannah", slug: "savannah" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <Link to="/">
              <span className="font-display text-2xl font-bold text-sand">
                South<span className="text-primary">Voyage</span>
              </span>
            </Link>
            <p className="font-body text-sand/60 text-sm mt-3">
              Your ultimate guide to exploring the best destinations, tours, and hotels across the Southern United States.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-sand mb-4 uppercase tracking-wider">Destinations</h4>
            <ul className="space-y-2">
              {destLinks.map((d) => (
                <li key={d.slug}>
                  <Link to={`/destinations/${d.slug}`} className="font-body text-sm text-sand/60 hover:text-primary transition-colors">{d.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-sand mb-4 uppercase tracking-wider">Popular Tours</h4>
            <ul className="space-y-2">
              {["South Beach Walking Tour", "Key West Snorkeling", "French Quarter Food Tour", "Everglades Airboat Ride", "Savannah Trolley Tour"].map((t) => (
                <li key={t}>
                  <a href="/#tours" className="font-body text-sm text-sand/60 hover:text-primary transition-colors">{t}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-sand mb-4 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="font-body text-sm text-sand/60 hover:text-primary transition-colors">Travel Blog</Link></li>
              <li><Link to="/about" className="font-body text-sm text-sand/60 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/blog/best-hotels-south-beach-miami" className="font-body text-sm text-sand/60 hover:text-primary transition-colors">Best Hotels South Beach</Link></li>
              <li><Link to="/blog/how-to-choose-hotels-south-padre-island" className="font-body text-sm text-sand/60 hover:text-primary transition-colors">South Padre Island Hotels</Link></li>
              <li><Link to="/blog/top-food-tours-new-orleans" className="font-body text-sm text-sand/60 hover:text-primary transition-colors">New Orleans Food Tours</Link></li>
              <li><Link to="/blog/best-things-to-do-key-west" className="font-body text-sm text-sand/60 hover:text-primary transition-colors">Key West Activities</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sand/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-sand/40">
            © {new Date().getFullYear()} SouthVoyage.com — All rights reserved.
          </p>
          <p className="font-body text-xs text-sand/40">
            Tours & activities powered by{" "}
            <a
              href={`${GYG}/?${PARTNER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              GetYourGuide
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
