import heroImage from "@/assets/hero-south-beach.jpg";
import { useI18n } from "@/lib/i18n";

const HeroSection = () => {
  const { content } = useI18n();
  const hero = content.home.hero;

  return (
    <section className="relative min-h-[620px] sm:min-h-[680px] md:h-screen md:min-h-[600px] flex items-center justify-center overflow-hidden pt-16 pb-16 sm:pt-20 sm:pb-20">
      <img
        src={heroImage}
        alt="South Beach Miami aerial sunset view with turquoise ocean and Art Deco buildings"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/60" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <p
          className="text-sand font-body text-[10px] xs:text-[11px] sm:text-sm md:text-base uppercase tracking-[0.18em] sm:tracking-[0.3em] mb-3 sm:mb-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          {hero.eyebrow}
        </p>
        <h1
          className="font-display text-[2.35rem] xs:text-[2.7rem] sm:text-6xl md:text-7xl lg:text-8xl font-bold text-sand leading-[0.95] sm:leading-tight mb-4 sm:mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          {hero.titleTop}<br />
          <span className="text-gradient-sunset">{hero.titleAccent}</span>
        </h1>
        <p
          className="font-body text-[15px] sm:text-lg md:text-xl text-sand/80 max-w-[19rem] sm:max-w-2xl mx-auto mb-6 sm:mb-10 opacity-0 animate-fade-up leading-relaxed"
          style={{ animationDelay: "0.6s" }}
        >
          {hero.description}
        </p>
        <div
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 opacity-0 animate-fade-up w-full max-w-[19rem] xs:max-w-[21rem] sm:max-w-none mx-auto"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="#destinations"
            className="bg-gradient-ocean w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-body font-semibold text-primary-foreground hover:opacity-90 transition-opacity text-sm sm:text-base text-center"
          >
            {hero.primaryCta}
          </a>
          <a
            href="#tours"
            className="border-2 border-sand/40 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-body font-semibold text-sand hover:bg-sand/10 transition-colors text-sm sm:text-base text-center"
          >
            {hero.secondaryCta}
          </a>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-sand/40 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-sand/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
