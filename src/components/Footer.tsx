import { Link } from "react-router-dom";
import brandMark from "@/assets/southvoyage-icon.png";
import { useI18n } from "@/lib/i18n";

const PARTNER = "partner_id=0IQTGX8&utm_medium=online_publisher";
const GYG = "https://www.getyourguide.com";

const destLinks = [
  { slug: "south-beach-miami" },
  { slug: "key-west" },
  { slug: "new-orleans" },
  { slug: "south-padre-island" },
  { slug: "savannah" },
] as const;

const Footer = () => {
  const { content } = useI18n();
  const footer = content.footer;

  return (
    <footer className="bg-foreground py-14 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 mb-12">
          <div className="md:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 min-w-0">
              <img src={brandMark} alt="SouthVoyage logo" className="h-10 w-10 object-contain shrink-0" loading="lazy" width={1024} height={1024} />
              <span className="font-display text-xl sm:text-2xl font-bold text-sand truncate">
                South<span className="text-primary">Voyage</span>
              </span>
            </Link>
            <p className="font-body text-sand/60 text-sm mt-3">{footer.tagline}</p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-sand mb-4 uppercase tracking-wider">{footer.destinations}</h4>
            <ul className="space-y-2">
              {destLinks.map((d, index) => (
                <li key={d.slug}>
                  <Link to={`/destinations/${d.slug}`} className="font-body text-sm text-sand/60 hover:text-primary transition-colors">{footer.destinationsList[index]}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-sand mb-4 uppercase tracking-wider">{footer.resources}</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="font-body text-sm text-sand/60 hover:text-primary transition-colors">{footer.travelBlog}</Link></li>
              <li><Link to="/about" className="font-body text-sm text-sand/60 hover:text-primary transition-colors">{footer.aboutUs}</Link></li>
              <li><Link to="/contact" className="font-body text-sm text-sand/60 hover:text-primary transition-colors">{footer.contact}</Link></li>
              <li><Link to="/blog/best-hotels-south-beach-miami" className="font-body text-sm text-sand/60 hover:text-primary transition-colors">{footer.bestHotels}</Link></li>
              <li><Link to="/blog/top-food-tours-new-orleans" className="font-body text-sm text-sand/60 hover:text-primary transition-colors">{footer.foodTours}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-sand mb-4 uppercase tracking-wider">{footer.legal}</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="font-body text-sm text-sand/60 hover:text-primary transition-colors">{footer.privacy}</Link></li>
              <li><Link to="/terms" className="font-body text-sm text-sand/60 hover:text-primary transition-colors">{footer.terms}</Link></li>
              <li><Link to="/cookies" className="font-body text-sm text-sand/60 hover:text-primary transition-colors">{footer.cookies}</Link></li>
              <li><Link to="/dmca" className="font-body text-sm text-sand/60 hover:text-primary transition-colors">{footer.dmca}</Link></li>
              <li><Link to="/legal" className="font-body text-sm text-sand/60 hover:text-primary transition-colors">{footer.legalNotice}</Link></li>
              <li><Link to="/parents-info" className="font-body text-sm text-sand/60 hover:text-primary transition-colors">{footer.parentsInfo}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sand/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4">
          <p className="font-body text-xs text-sand/40 text-left">
            © {new Date().getFullYear()} SouthVoyage.com — {footer.rights}
          </p>
          <p className="font-body text-xs text-sand/40 text-left md:text-right">
            {footer.poweredBy}{" "}
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
