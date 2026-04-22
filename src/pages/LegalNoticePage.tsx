import { Helmet } from "react-helmet-async";
import { Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://southvoyage.com/" },
    { "@type": "ListItem", position: 2, name: "Legal Notice", item: "https://southvoyage.com/legal" },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Legal Notice | SouthVoyage",
  url: "https://southvoyage.com/legal",
  description:
    "SouthVoyage Legal Notice and Impressum with operator details, affiliate disclosure, copyright, and liability information.",
};

const LegalNoticePage = () => {
  return (
    <>
      <Helmet>
        <title>Legal Notice | SouthVoyage</title>
        <meta name="description" content="SouthVoyage Legal Notice and Impressum with operator details, affiliate disclosure, copyright, and liability information." />
        <meta name="keywords" content="southvoyage legal notice, impressum southvoyage, affiliate disclosure travel website, liability disclaimer, website operator information" />
        <link rel="canonical" href="https://southvoyage.com/legal" />
        <script type="application/ld+json">{JSON.stringify(webPageJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      <Navbar />
      <main className="pt-16">
        <section className="bg-sand py-16">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">Legal Notice</h1>
            <p className="font-body text-sm text-muted-foreground">Impressum · Last updated: April 4, 2026</p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-3xl space-y-8 font-body text-sm text-muted-foreground leading-relaxed">
            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">Website Operator</h2>
              <p>SouthVoyage.com is an independently operated travel information and affiliate website dedicated to providing curated travel guides, hotel recommendations, and tour listings for destinations across the Southern United States.</p>
              <div className="bg-card rounded-xl border border-border p-5 mt-3">
                <p><strong className="text-foreground">Website:</strong> southvoyage.com</p>
                <p><strong className="text-foreground">Email:</strong> <a href="mailto:contact@southvoyage.com" className="text-primary hover:underline">contact@southvoyage.com</a></p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">Affiliate Disclosure</h2>
              <p>SouthVoyage.com participates in affiliate programs, including the GetYourGuide Partner Program. When you book a tour, activity, or experience through our affiliate links, we may earn a commission at no additional cost to you. This compensation helps support our editorial team and allows us to continue creating free, high-quality travel content.</p>
              <p className="mt-2">Our editorial recommendations are independent and not influenced by affiliate partnerships. We only recommend products and services we genuinely believe provide value to travelers.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">Liability Disclaimer</h2>
              <p>All information on this website — including hotel descriptions, tour details, prices, ratings, and travel tips — is provided for informational purposes only and is based on our research at the time of publication. Prices, availability, schedules, and policies may change without notice.</p>
              <p className="mt-2">SouthVoyage.com shall not be liable for any losses, damages, or inconveniences arising from the use of information on this website or from booking through third-party links. We strongly recommend verifying all details directly with service providers before making travel decisions.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">External Links</h2>
              <p>Our website contains links to external websites operated by third parties. We have no control over the content, privacy practices, or availability of these sites. The inclusion of a link does not imply endorsement of the linked website. We are not responsible for any content or damages that may arise from visiting external sites.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">Copyright</h2>
              <p>© {new Date().getFullYear()} SouthVoyage.com — All rights reserved. All content on this website, including text, photographs, graphics, logos, and page layout, is the intellectual property of SouthVoyage.com and may not be reproduced, distributed, or transmitted without prior written permission.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">Dispute Resolution</h2>
              <p>We are committed to resolving any disputes amicably. If you have a complaint or concern regarding our website or content, please contact us at <a href="mailto:contact@southvoyage.com" className="text-primary hover:underline">contact@southvoyage.com</a> before taking any legal action.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LegalNoticePage;
