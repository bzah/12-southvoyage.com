import { Helmet } from "react-helmet-async";
import { ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://southvoyage.com/" },
    { "@type": "ListItem", position: 2, name: "Parents Info", item: "https://southvoyage.com/parents-info" },
  ],
};

const ParentsInfoPage = () => {
  return (
    <>
      <Helmet>
        <title>Parents Info — Online Safety for Children | SouthVoyage</title>
        <meta name="description" content="Read SouthVoyage Parents Info for guidance on children's privacy, COPPA compliance, online safety, parental controls, third-party travel booking links, and how families can use our travel content responsibly." />
        <meta name="keywords" content="southvoyage parents info, children's privacy policy, coppa compliance website, online safety for families, parental controls travel website" />
        <link rel="canonical" href="https://southvoyage.com/parents-info" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      <Navbar />
      <main className="pt-16">
        <section className="bg-sand py-16">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <ShieldCheck className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">Parents Info</h1>
            <p className="font-body text-sm text-muted-foreground">Keeping families safe online</p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-3xl space-y-8 font-body text-sm text-muted-foreground leading-relaxed">
            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">Our Commitment to Children's Safety</h2>
              <p>SouthVoyage.com is committed to protecting the privacy and safety of children online. Our website is designed for a general adult audience interested in travel planning. We do not knowingly target, collect information from, or market to children under the age of 13.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">COPPA Compliance</h2>
              <p>In compliance with the Children's Online Privacy Protection Act (COPPA), we do not:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Knowingly collect personal information from children under 13</li>
                <li>Allow children under 13 to submit personal data through our contact forms</li>
                <li>Use behavioral tracking or targeted advertising directed at children</li>
              </ul>
              <p className="mt-2">If we discover that we have inadvertently collected information from a child under 13, we will delete it promptly.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">Parental Controls</h2>
              <p>We encourage parents and guardians to supervise their children's internet use. Here are some steps you can take:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Use parental control tools built into your browser or operating system</li>
                <li>Monitor which websites your children visit and the information they share online</li>
                <li>Discuss online safety and responsible internet use with your children</li>
                <li>Set clear rules about sharing personal information online</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">Third-Party Links</h2>
              <p>Our website contains links to third-party services (such as GetYourGuide) that have their own privacy policies and data collection practices. We recommend parents review the privacy policies of any third-party website before allowing their children to interact with it.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">Family Travel Content</h2>
              <p>While our travel guides occasionally mention family-friendly activities (such as snorkeling in Key West or beach activities on South Padre Island), all booking and purchasing decisions should be made by adults. We recommend that parents review all travel plans and bookings before confirmation.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">Contact Us</h2>
              <p>If you are a parent or guardian and believe your child has provided personal information to us, or if you have questions about our practices regarding children's data, please contact us immediately at <a href="mailto:contact@southvoyage.com" className="text-primary hover:underline">contact@southvoyage.com</a>. We will take steps to remove the information and ensure compliance.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ParentsInfoPage;
