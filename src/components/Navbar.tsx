import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import brandMark from "@/assets/southvoyage-icon.png";
import { useI18n } from "@/lib/i18n";
import { languages, type Language } from "@/lib/translations";

const navLinks = [
  { key: "home", href: "/" },
  { key: "destinations", href: "#destinations" },
  { key: "tours", href: "#tours" },
  { key: "hotels", href: "#hotels" },
  { key: "activities", href: "#activities" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
  { key: "blog", href: "/blog" },
] as const;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, content, languageNames } = useI18n();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 gap-4">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={brandMark} alt="SouthVoyage logo" className="h-10 w-10 object-contain" width={1024} height={1024} />
          <span className="text-2xl font-display font-bold text-foreground">
            South<span className="text-primary">Voyage</span>
          </span>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm font-body font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {content.nav[link.key]}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1 rounded-full border border-border bg-card p-1" aria-label={content.nav.language}>
            {languages.map((code) => {
              const active = language === code;
              return (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLanguage(code as Language)}
                  className={`min-w-10 rounded-full px-3 py-1.5 text-xs font-body font-semibold transition-colors ${
                    active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-pressed={active}
                  aria-label={`${content.nav.language}: ${languageNames[code]}`}
                >
                  {languageNames[code]}
                </button>
              );
            })}
          </div>
          <a
            href="#tours"
            className="bg-gradient-ocean px-5 py-2 rounded-full text-sm font-body font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            {content.nav.bookTour}
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 animate-fade-in">
          <div className="flex items-center gap-1 rounded-full border border-border bg-card p-1 my-3 w-fit">
            {languages.map((code) => {
              const active = language === code;
              return (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLanguage(code as Language)}
                  className={`min-w-10 rounded-full px-3 py-1.5 text-xs font-body font-semibold transition-colors ${
                    active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-pressed={active}
                >
                  {languageNames[code]}
                </button>
              );
            })}
          </div>

          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-base font-body font-medium text-foreground hover:text-primary transition-colors"
            >
              {content.nav[link.key]}
            </a>
          ))}
          <a
            href="#tours"
            onClick={() => setIsOpen(false)}
            className="block mt-2 bg-gradient-ocean text-center px-5 py-3 rounded-full text-sm font-body font-semibold text-primary-foreground"
          >
            {content.nav.bookTour}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
