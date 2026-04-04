import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found — SouthVoyage</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="The page you're looking for doesn't exist. Explore Southern USA travel destinations, hotels, and tours on SouthVoyage." />
      </Helmet>
      <Navbar />
      <main className="flex min-h-[60vh] items-center justify-center bg-background px-4">
        <div className="text-center max-w-lg">
          <h1 className="mb-2 text-7xl font-bold font-heading text-primary">404</h1>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">Page Not Found</h2>
          <p className="mb-8 text-muted-foreground">
            Sorry, the page <code className="bg-muted px-2 py-0.5 rounded text-sm">{location.pathname}</code> doesn't exist. It may have been moved or removed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
              Go to Homepage
            </Link>
            <Link to="/blog" className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-foreground font-medium hover:bg-muted transition-colors">
              Browse Blog
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
