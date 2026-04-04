import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://southvoyage.com/" },
    { "@type": "ListItem", position: 2, name: "Cookie Policy", item: "https://southvoyage.com/cookies" },
  ],
};

const CookiePolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy — SouthVoyage</title>
        <meta name="description" content="Cookie Policy for SouthVoyage.com. Learn about the cookies we use, why we use them, and how to manage your cookie preferences." />
        <link rel="canonical" href="https://southvoyage.com/cookies" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      <Navbar />
      <main className="pt-16">
        <section className="bg-sand py-16">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">Cookie Policy</h1>
            <p className="font-body text-sm text-muted-foreground">Last updated: April 4, 2026</p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-3xl space-y-8 font-body text-sm text-muted-foreground leading-relaxed">
            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">What Are Cookies?</h2>
              <p>Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences, analyze traffic, and improve your browsing experience.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">Cookies We Use</h2>
              <div className="overflow-x-auto mt-3">
                <table className="w-full border border-border rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-sand">
                      <th className="px-4 py-3 text-left font-display text-sm font-semibold text-foreground">Type</th>
                      <th className="px-4 py-3 text-left font-display text-sm font-semibold text-foreground">Purpose</th>
                      <th className="px-4 py-3 text-left font-display text-sm font-semibold text-foreground">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 font-semibold text-foreground">Essential</td>
                      <td className="px-4 py-3">Required for the website to function properly (e.g., session management)</td>
                      <td className="px-4 py-3">Session</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 font-semibold text-foreground">Analytics</td>
                      <td className="px-4 py-3">Help us understand how visitors interact with the website (e.g., Google Analytics)</td>
                      <td className="px-4 py-3">Up to 2 years</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 font-semibold text-foreground">Affiliate</td>
                      <td className="px-4 py-3">Track referrals to affiliate partners (e.g., GetYourGuide) for commission attribution</td>
                      <td className="px-4 py-3">30–90 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">Third-Party Cookies</h2>
              <p>Third-party services such as Google Analytics and GetYourGuide may set their own cookies when you interact with their features on our website. These cookies are governed by the respective third party's privacy and cookie policies.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">Managing Cookies</h2>
              <p>You can control and delete cookies through your browser settings. Most browsers allow you to block or delete cookies. However, disabling cookies may affect the functionality of certain website features.</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong className="text-foreground">Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                <li><strong className="text-foreground">Firefox:</strong> Settings → Privacy & Security → Cookies</li>
                <li><strong className="text-foreground">Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                <li><strong className="text-foreground">Edge:</strong> Settings → Cookies and Site Permissions</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">Contact</h2>
              <p>If you have questions about our use of cookies, contact us at <a href="mailto:contact@southvoyage.com" className="text-primary hover:underline">contact@southvoyage.com</a>.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CookiePolicyPage;
