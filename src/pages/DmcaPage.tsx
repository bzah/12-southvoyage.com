import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://southvoyage.com/" },
    { "@type": "ListItem", position: 2, name: "DMCA", item: "https://southvoyage.com/dmca" },
  ],
};

const DmcaPage = () => {
  return (
    <>
      <Helmet>
        <title>DMCA Policy — SouthVoyage</title>
        <meta name="description" content="DMCA Copyright Policy for SouthVoyage.com. Learn how to submit a copyright infringement notice or counter-notification." />
        <link rel="canonical" href="https://southvoyage.com/dmca" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      <Navbar />
      <main className="pt-16">
        <section className="bg-sand py-16">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">DMCA Copyright Policy</h1>
            <p className="font-body text-sm text-muted-foreground">Last updated: April 4, 2026</p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-3xl space-y-8 font-body text-sm text-muted-foreground leading-relaxed">
            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">Overview</h2>
              <p>SouthVoyage.com respects the intellectual property rights of others and expects our users to do the same. In accordance with the Digital Millennium Copyright Act (DMCA), we will respond promptly to notices of alleged copyright infringement that comply with the DMCA.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">Filing a DMCA Notice</h2>
              <p className="mb-3">If you believe that content on our website infringes your copyright, please send a written notice to our designated agent with the following information:</p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>A physical or electronic signature of the copyright owner or authorized representative.</li>
                <li>Identification of the copyrighted work claimed to have been infringed.</li>
                <li>Identification of the material on our website that you claim is infringing, with enough detail for us to locate it (e.g., URL).</li>
                <li>Your contact information: name, address, telephone number, and email address.</li>
                <li>A statement that you have a good faith belief that the use of the material is not authorized by the copyright owner, its agent, or the law.</li>
                <li>A statement, under penalty of perjury, that the information in the notice is accurate and that you are the copyright owner or authorized to act on behalf of the owner.</li>
              </ol>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">Counter-Notification</h2>
              <p>If you believe your content was removed in error, you may submit a counter-notification including:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Your physical or electronic signature</li>
                <li>Identification of the material that was removed and its former location</li>
                <li>A statement under penalty of perjury that you believe the material was removed by mistake</li>
                <li>Your name, address, and telephone number, and consent to the jurisdiction of the federal court in your district</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">Designated Agent</h2>
              <p>DMCA notices and counter-notifications should be sent to:</p>
              <div className="bg-card rounded-xl border border-border p-5 mt-3">
                <p className="font-semibold text-foreground">DMCA Agent — SouthVoyage.com</p>
                <p>Email: <a href="mailto:dmca@southvoyage.com" className="text-primary hover:underline">dmca@southvoyage.com</a></p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">Repeat Infringers</h2>
              <p>In accordance with the DMCA, we will terminate access for users who are repeat infringers in appropriate circumstances.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DmcaPage;
