import heroImage from "@/assets/hero-south-beach.jpg";
import { useI18n } from "@/lib/i18n";

const HeroSection = () => {
  const { content } = useI18n();
  const hero = content.home.hero;

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="South Beach Miami aerial sunset view with turquoise ocean and Art Deco buildings"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/60" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <p
          className="text-sand font-body text-sm md:text-base uppercase tracking-[0.3em] mb-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          {hero.eyebrow}
        </p>
        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-sand leading-tight mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          {hero.titleTop}<br />
          <span className="text-gradient-sunset">{hero.titleAccent}</span>
        </h1>
        <p
          className="font-body text-lg md:text-xl text-sand/80 max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          {hero.description}
        </p>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="#destinations"
            className="bg-gradient-ocean px-8 py-4 rounded-full font-body font-semibold text-primary-foreground hover:opacity-90 transition-opacity text-base"
          >
            {hero.primaryCta}
          </a>
          <a
            href="#tours"
            className="border-2 border-sand/40 px-8 py-4 rounded-full font-body font-semibold text-sand hover:bg-sand/10 transition-colors text-base"
          >
            {hero.secondaryCta}
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-sand/40 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-sand/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
