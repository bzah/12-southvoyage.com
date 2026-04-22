import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://southvoyage.com/" },
    { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://southvoyage.com/privacy" },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy — SouthVoyage",
  url: "https://southvoyage.com/privacy",
  description:
    "SouthVoyage Privacy Policy covering personal data, analytics, cookies, and contact form information for our travel website.",
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy — SouthVoyage</title>
        <meta name="description" content="SouthVoyage Privacy Policy covering personal data, analytics, cookies, and contact form information for our travel website." />
        <meta name="keywords" content="southvoyage privacy policy, travel website privacy policy, cookie and analytics policy, personal data protection travel site, southern usa travel website privacy" />
        <link rel="canonical" href="https://southvoyage.com/privacy" />
        <script type="application/ld+json">{JSON.stringify(webPageJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      <Navbar />
      <main className="pt-16">
        <section className="bg-sand py-16">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">Privacy Policy</h1>
            <p className="font-body text-sm text-muted-foreground">Last updated: April 4, 2026</p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-3xl space-y-8 font-body text-sm text-muted-foreground leading-relaxed">
            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">1. Introduction</h2>
              <p>SouthVoyage.com ("we," "our," or "us") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website southvoyage.com.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">2. Information We Collect</h2>
              <p className="mb-3">We may collect the following types of information:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong className="text-foreground">Usage Data:</strong> Pages visited, time spent, referral source, browser type, device type, and IP address (anonymized where possible).</li>
                <li><strong className="text-foreground">Cookies & Tracking:</strong> We use cookies and similar tracking technologies for analytics and to improve your experience. See our Cookie Policy for details.</li>
                <li><strong className="text-foreground">Contact Information:</strong> If you contact us via email or a contact form, we collect your name, email address, and message content.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>To operate, maintain, and improve our website</li>
                <li>To analyze website traffic and user behavior (via Google Analytics or similar tools)</li>
                <li>To respond to your inquiries and communication</li>
                <li>To display relevant affiliate offers and travel recommendations</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">4. Third-Party Services</h2>
              <p>We use third-party services that may collect information about you:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong className="text-foreground">GetYourGuide:</strong> When you click affiliate links, you are redirected to GetYourGuide's website, which has its own privacy policy.</li>
                <li><strong className="text-foreground">Analytics:</strong> We may use Google Analytics to track and analyze website traffic. Google may use cookies to collect anonymized usage data.</li>
                <li><strong className="text-foreground">Hosting:</strong> Our website is hosted on secure servers that may log standard access information.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">5. Cookies</h2>
              <p>We use cookies to analyze traffic and enhance your experience. You can control cookie settings through your browser. Disabling cookies may affect some website functionality. For more details, see our <a href="/cookies" className="text-primary hover:underline">Cookie Policy</a>.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">6. Data Retention</h2>
              <p>We retain personal information only as long as necessary to fulfill the purposes described in this policy. Contact form submissions are retained for up to 12 months, after which they are securely deleted.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">7. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Object to or restrict our processing of your data</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="mt-2">To exercise these rights, contact us at <a href="mailto:contact@southvoyage.com" className="text-primary hover:underline">contact@southvoyage.com</a>.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">8. Children's Privacy</h2>
              <p>Our website is not directed at children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us immediately. See our <a href="/parents-info" className="text-primary hover:underline">Parents Info</a> page for more details.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">9. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. We encourage you to review this page periodically.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">10. Contact</h2>
              <p>If you have questions about this Privacy Policy, contact us at <a href="mailto:contact@southvoyage.com" className="text-primary hover:underline">contact@southvoyage.com</a>.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
