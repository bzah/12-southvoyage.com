const PARTNER = "partner_id=0IQTGX8&utm_medium=online_publisher";
const GYG = "https://www.getyourguide.com";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <span className="font-display text-2xl font-bold text-sand">
              South<span className="text-primary">Voyage</span>
            </span>
            <p className="font-body text-sand/60 text-sm mt-3">
              Your ultimate guide to exploring the best destinations, tours, and hotels across the Southern United States.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-sand mb-4 uppercase tracking-wider">Destinations</h4>
            <ul className="space-y-2">
              {["South Beach Miami", "Key West", "New Orleans", "South Padre Island", "Savannah"].map((d) => (
                <li key={d}>
                  <a href="#destinations" className="font-body text-sm text-sand/60 hover:text-primary transition-colors">{d}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-sand mb-4 uppercase tracking-wider">Popular Tours</h4>
            <ul className="space-y-2">
              {["South Beach Walking Tour", "Key West Snorkeling", "French Quarter Food Tour", "Everglades Airboat Ride", "Savannah Trolley Tour"].map((t) => (
                <li key={t}>
                  <a href="#tours" className="font-body text-sm text-sand/60 hover:text-primary transition-colors">{t}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-sand mb-4 uppercase tracking-wider">Hotels</h4>
            <ul className="space-y-2">
              {["South Beach Hotels", "Oceanfront Hotels Miami", "Key West Resorts", "South Padre Island Hotels", "Best Hotels Savannah"].map((h) => (
                <li key={h}>
                  <a href="#hotels" className="font-body text-sm text-sand/60 hover:text-primary transition-colors">{h}</a>
                </li>
              ))}
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
