import { FormEvent, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { Mail, MessageSquare, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { useI18n } from "@/lib/i18n";
import { buildAlternateLinks, getLanguagePath, ogLocaleByLanguage } from "@/lib/seo";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://southvoyage.com/" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://southvoyage.com/contact" },
  ],
};

const initialFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const icons = [Mail, MessageSquare, MapPin] as const;

const ContactPage = () => {
  const location = useLocation();
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { content, language } = useI18n();
  const contact = content.contact;
  const canonicalUrl = getLanguagePath(location.pathname, language);
  const alternateLinks = buildAlternateLinks(location.pathname);

  const contactPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: contact.metaTitle,
    url: "https://southvoyage.com/contact",
    description: contact.metaDescription,
    mainEntity: {
      "@type": "Organization",
      name: "SouthVoyage",
      url: "https://southvoyage.com",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "contact@southvoyage.com",
        availableLanguage: ["English", "Spanish", "French", "Russian"],
      },
    },
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    const { error } = await supabase.functions.invoke("send-contact-email", {
      body: formData,
    });

    setIsSubmitting(false);

    if (error) {
      toast({
        title: contact.toastErrorTitle,
        description: contact.toastErrorDescription,
        variant: "destructive",
      });
      return;
    }

    toast({
      title: contact.toastSuccessTitle,
      description: contact.toastSuccessDescription,
    });
    setFormData(initialFormState);
  };

  return (
    <>
      <Helmet>
        <title>{contact.metaTitle}</title>
        <meta name="description" content={contact.metaDescription} />
        <meta name="keywords" content={contact.metaKeywords} />
        <link rel="canonical" href={canonicalUrl} />
        {alternateLinks.map((link) => (
          <link key={link.hrefLang} rel="alternate" hrefLang={link.hrefLang} href={link.href} />
        ))}
        <meta property="og:locale" content={ogLocaleByLanguage[language]} />
        <script type="application/ld+json">{JSON.stringify(contactPageJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      <Navbar />
      <main className="pt-16">
        <section className="bg-sand py-20">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">{contact.heroEyebrow}</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">{contact.heroTitle}</h1>
            <p className="font-body text-lg text-muted-foreground">{contact.heroDescription}</p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {contact.cards.map((item, index) => {
                const Icon = icons[index];
                return (
                  <div key={item.title} className="bg-card rounded-2xl border border-border p-8 text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="font-body text-sm font-semibold text-primary mb-1">{item.desc}</p>
                    <p className="font-body text-xs text-muted-foreground">{item.sub}</p>
                  </div>
                );
              })}
            </div>

            <div className="max-w-2xl mx-auto">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">{contact.formTitle}</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-1.5 block">{contact.name}</label>
                    <input type="text" value={formData.name} onChange={(e) => setFormData((current) => ({ ...current, name: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder={contact.namePlaceholder} required autoComplete="name" />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-1.5 block">{contact.email}</label>
                    <input type="email" value={formData.email} onChange={(e) => setFormData((current) => ({ ...current, email: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder={contact.emailPlaceholder} required autoComplete="email" />
                  </div>
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-1.5 block">{contact.subject}</label>
                  <input type="text" value={formData.subject} onChange={(e) => setFormData((current) => ({ ...current, subject: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder={contact.subjectPlaceholder} required />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-1.5 block">{contact.message}</label>
                  <textarea rows={5} value={formData.message} onChange={(e) => setFormData((current) => ({ ...current, message: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" placeholder={contact.messagePlaceholder} required />
                </div>
                <button type="submit" disabled={isSubmitting} className="bg-gradient-ocean px-8 py-3.5 rounded-full font-body font-semibold text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed">
                  {isSubmitting ? contact.sending : contact.send}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
