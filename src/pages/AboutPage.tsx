import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MapPin, Globe, Users, Shield, Compass, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useI18n } from "@/lib/i18n";
import { buildAlternateLinks, getLanguagePath, ogLocaleByLanguage } from "@/lib/seo";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "SouthVoyage",
  url: "https://southvoyage.com",
  areaServed: [
    { "@type": "State", name: "Florida" },
    { "@type": "State", name: "Louisiana" },
    { "@type": "State", name: "Georgia" },
    { "@type": "State", name: "Texas" },
  ],
  sameAs: [],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://southvoyage.com/" },
    { "@type": "ListItem", position: 2, name: "About Us", item: "https://southvoyage.com/about" },
  ],
};

const icons = [Compass, Heart, Users, Globe] as const;
const destinationSlugs = ["south-beach-miami", "key-west", "new-orleans", "south-padre-island", "savannah"] as const;

const AboutPage = () => {
  const { content, language } = useI18n();
  const location = useLocation();
  const about = content.about;
  const canonicalUrl = getLanguagePath(location.pathname, language);
  const alternateLinks = buildAlternateLinks(location.pathname);

  const businessJsonLd = {
    ...localBusinessJsonLd,
    description: about.metaDescription,
  };

  const aboutPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: about.metaTitle,
    url: "https://southvoyage.com/about",
    description: about.metaDescription,
    inLanguage: ["en", "es", "fr", "ru"],
    mainEntity: {
      "@type": "Organization",
      name: "SouthVoyage",
      url: "https://southvoyage.com",
      description: about.metaDescription,
      areaServed: ["Florida", "Louisiana", "Georgia", "Texas"],
    },
  };

  return (
    <>
      <Helmet>
        <title>{about.metaTitle}</title>
        <meta name="description" content={about.metaDescription} />
        <meta name="keywords" content={about.metaKeywords} />
        <link rel="canonical" href={canonicalUrl} />
        {alternateLinks.map((link) => (
          <link key={link.hrefLang} rel="alternate" hrefLang={link.hrefLang} href={link.href} />
        ))}
        <meta property="og:title" content={about.metaTitle} />
        <meta property="og:description" content={about.ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content={ogLocaleByLanguage[language]} />
        <script type="application/ld+json">{JSON.stringify(businessJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(aboutPageJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      <Navbar />
      <main className="pt-16">
        <section className="bg-sand py-20">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">{about.heroEyebrow}</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              {about.heroTitleTop} <span className="text-primary">{about.heroTitleAccent}</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">{about.heroDescription}</p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary mb-3">{about.missionEyebrow}</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">{about.missionTitle}</h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed mb-4">{about.missionParagraphs[0]}</p>
                <p className="font-body text-base text-muted-foreground leading-relaxed">{about.missionParagraphs[1]}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {about.stats.map((stat, index) => (
                  <div key={stat.label} className="bg-card rounded-2xl border border-border p-6 text-center">
                    <span className={`font-display text-3xl font-bold ${index === 0 ? "text-primary" : index === 1 ? "text-secondary" : index === 2 ? "text-accent" : "text-coral"}`}>{stat.value}</span>
                    <p className="font-body text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-sand">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">{about.valuesEyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">{about.valuesTitle}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {about.values.map((value, index) => {
                const Icon = icons[index];
                return (
                  <div key={value.title} className="bg-card rounded-2xl border border-border p-8 hover:shadow-elevated transition-shadow duration-300">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary mb-3">{about.coverageEyebrow}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">{about.coverageTitle}</h2>
            <p className="font-body text-base text-muted-foreground mb-10">{about.coverageDescription}</p>
            <div className="flex flex-wrap justify-center gap-3">
              {about.destinations.map((destination, index) => (
                <Link
                  key={destinationSlugs[index]}
                  to={`/destinations/${destinationSlugs[index]}`}
                  className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-5 py-2.5 font-body text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  {destination}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-sand">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="w-6 h-6 text-muted-foreground" />
              <h2 className="font-display text-2xl font-bold text-foreground">{about.legalTitle}</h2>
            </div>

            <div className="space-y-6 font-body text-sm text-muted-foreground leading-relaxed">
              {about.legalSections.map((section, index) => (
                <div key={section.title}>
                  <h3 className="font-display text-base font-semibold text-foreground mb-2">{section.title}</h3>
                  {index === about.legalSections.length - 1 ? (
                    <p>
                      {section.description}{" "}
                      <a href="mailto:contact@southvoyage.com" className="text-primary hover:underline">
                        contact@southvoyage.com
                      </a>
                      .
                    </p>
                  ) : index === about.legalSections.length - 2 ? (
                    <p>
                      {section.description.replace("© SouthVoyage.com", `© ${new Date().getFullYear()} SouthVoyage.com`)}
                    </p>
                  ) : (
                    <p>{section.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{about.ctaTitle}</h2>
            <p className="font-body text-muted-foreground mb-8">{about.ctaDescription}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#destinations"
                className="inline-block bg-gradient-ocean px-8 py-4 rounded-full font-body font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
              >
                {about.ctaPrimary}
              </Link>
              <Link
                to="/blog"
                className="inline-block border-2 border-primary px-8 py-4 rounded-full font-body font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {about.ctaSecondary}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
