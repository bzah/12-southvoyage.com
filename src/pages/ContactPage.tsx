import { FormEvent, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Mail, MessageSquare, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

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

const ContactPage = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        title: "Message not sent",
        description: "Please try again in a moment or email us directly.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message sent",
      description: "Thanks for reaching out — we’ll get back to you soon.",
    });
    setFormData(initialFormState);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us — SouthVoyage</title>
        <meta name="description" content="Contact SouthVoyage for Southern USA travel questions, hotel and tour recommendations, partnership inquiries, press requests, content updates, or destination corrections related to South Beach, Key West, New Orleans, Savannah, and more." />
        <meta name="keywords" content="contact southvoyage, southern usa travel help, south beach travel questions, key west travel advice, new orleans travel contact, partnership inquiries southvoyage, travel guide corrections" />
        <link rel="canonical" href="https://southvoyage.com/contact" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      <Navbar />
      <main className="pt-16">
        <section className="bg-sand py-20">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">Contact</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">Get in Touch</h1>
            <p className="font-body text-lg text-muted-foreground">
              Have a question, suggestion, or partnership inquiry? We'd love to hear from you.
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { icon: Mail, title: "Email Us", desc: "contact@southvoyage.com", sub: "We respond within 24–48 hours" },
                { icon: MessageSquare, title: "Content Corrections", desc: "editor@southvoyage.com", sub: "Help us keep info accurate" },
                { icon: MapPin, title: "Coverage Area", desc: "Southern United States", sub: "FL, LA, GA, TX & expanding" },
              ].map((item) => (
                <div key={item.title} className="bg-card rounded-2xl border border-border p-8 text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="font-body text-sm font-semibold text-primary mb-1">{item.desc}</p>
                  <p className="font-body text-xs text-muted-foreground">{item.sub}</p>
                </div>
              ))}
            </div>

            <div className="max-w-2xl mx-auto">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Name</label>
                    <input type="text" value={formData.name} onChange={(e) => setFormData((current) => ({ ...current, name: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Your name" required autoComplete="name" />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Email</label>
                    <input type="email" value={formData.email} onChange={(e) => setFormData((current) => ({ ...current, email: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="you@email.com" required autoComplete="email" />
                  </div>
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Subject</label>
                  <input type="text" value={formData.subject} onChange={(e) => setFormData((current) => ({ ...current, subject: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="What's this about?" required />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Message</label>
                  <textarea rows={5} value={formData.message} onChange={(e) => setFormData((current) => ({ ...current, message: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" placeholder="Tell us more..." required />
                </div>
                <button type="submit" disabled={isSubmitting} className="bg-gradient-ocean px-8 py-3.5 rounded-full font-body font-semibold text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed">
                  {isSubmitting ? "Sending..." : "Send Message"}
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
