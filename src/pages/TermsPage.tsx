import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://southvoyage.com/" },
    { "@type": "ListItem", position: 2, name: "Terms of Service", item: "https://southvoyage.com/terms" },
  ],
};

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service — SouthVoyage</title>
        <meta name="description" content="Review the SouthVoyage Terms of Service covering website use, affiliate links, third-party bookings, intellectual property, liability limitations, content accuracy, and acceptable use for our Southern USA travel guide." />
        <meta name="keywords" content="southvoyage terms of service, travel website terms and conditions, affiliate disclaimer terms, southern usa travel guide legal terms" />
        <link rel="canonical" href="https://southvoyage.com/terms" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      <Navbar />
      <main className="pt-16">
        <section className="bg-sand py-16">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">Terms of Service</h1>
            <p className="font-body text-sm text-muted-foreground">Last updated: April 4, 2026</p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-3xl space-y-8 font-body text-sm text-muted-foreground leading-relaxed">
            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>By accessing and using SouthVoyage.com ("the website"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the website.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">2. Description of Service</h2>
              <p>SouthVoyage.com is a travel information website that provides curated guides, hotel recommendations, tour listings, and travel tips for destinations across the Southern United States. We are an affiliate publisher, not a travel agency, tour operator, or hotel booking service.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">3. Affiliate Links & Third-Party Services</h2>
              <p>Our website contains affiliate links to third-party booking platforms, including GetYourGuide. When you click these links and make a purchase, we may earn a commission at no additional cost to you. We are not responsible for the products, services, content, or practices of third-party websites. All bookings are subject to the third party's own terms and conditions.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">4. Content Accuracy</h2>
              <p>We strive to provide accurate and up-to-date information. However, travel details — including prices, availability, schedules, and policies — may change without notice. We recommend verifying all information directly with the service provider before making travel decisions or bookings.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">5. Intellectual Property</h2>
              <p>All content on this website — including text, images, graphics, logos, and design — is the property of SouthVoyage.com and is protected by copyright law. You may not reproduce, distribute, modify, or republish any content without our prior written permission.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">6. User Conduct</h2>
              <p>You agree not to use the website for any unlawful purpose, attempt to gain unauthorized access to our systems, interfere with the website's operation, or scrape or harvest content without permission.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">7. Limitation of Liability</h2>
              <p>SouthVoyage.com and its operators shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the website, reliance on any information provided, or any transactions with third-party services linked from this website.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">8. Disclaimer of Warranties</h2>
              <p>The website and its content are provided "as is" and "as available" without warranties of any kind, express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">9. Changes to Terms</h2>
              <p>We reserve the right to modify these Terms of Service at any time. Changes become effective immediately upon posting. Your continued use of the website after changes constitutes acceptance of the revised terms.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">10. Contact</h2>
              <p>For questions about these Terms of Service, contact us at <a href="mailto:contact@southvoyage.com" className="text-primary hover:underline">contact@southvoyage.com</a>.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TermsPage;
