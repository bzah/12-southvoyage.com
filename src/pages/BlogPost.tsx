import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import NotFound from "./NotFound";

const PARTNER = "partner_id=0IQTGX8&utm_medium=online_publisher";
const GYG = "https://www.getyourguide.com";

const articleContent: Record<string, React.ReactNode> = {
  "best-hotels-south-beach-miami": (
    <article className="prose-custom">
      <p>South Beach Miami is one of the most iconic beach destinations in the world. Whether you're looking for a luxury oceanfront resort or a charming boutique hotel in the heart of the Art Deco Historic District, there's a perfect stay for every traveler. Here's our curated guide to the best hotels in South Beach Miami for 2026.</p>

      <h2>Why Stay in South Beach?</h2>
      <p>South Beach offers a unique blend of stunning white-sand beaches, world-class dining, vibrant nightlife, and cultural attractions. The neighborhood's famous Art Deco architecture makes it one of the most photogenic destinations in the United States. With ocean views, palm-lined streets, and year-round warm weather, South Beach Miami is a top choice for both relaxation and adventure.</p>

      <h2>Best Oceanfront Hotels in South Beach Miami</h2>
      <p>For travelers who want to wake up steps from the sand, oceanfront hotels along Collins Avenue and Ocean Drive offer unbeatable convenience. Many feature rooftop pools, private beach access, and stunning Atlantic Ocean views. Look for hotels between 5th and 20th streets for the best beachfront experience.</p>

      <h3>What to Look For</h3>
      <ul>
        <li><strong>Direct beach access</strong> — Many premium hotels offer private beach chairs and umbrellas</li>
        <li><strong>Pool facilities</strong> — Rooftop and poolside bars are a South Beach staple</li>
        <li><strong>Art Deco charm</strong> — Restored 1930s buildings with modern amenities inside</li>
        <li><strong>Walking distance to restaurants</strong> — Ocean Drive and Lincoln Road are dining hotspots</li>
      </ul>

      <h2>Best Boutique Hotels in South Beach</h2>
      <p>South Beach's Art Deco District is home to dozens of beautifully restored boutique hotels. These intimate properties often feature 30–80 rooms, personalized service, and design-forward interiors that celebrate Miami's glamorous heritage. They're perfect for couples, solo travelers, and anyone who prefers character over corporate chains.</p>

      <h2>Budget-Friendly Options</h2>
      <p>South Beach also has great value hotels, especially on side streets between Collins Avenue and Washington Avenue. These properties offer clean, comfortable rooms at a fraction of the oceanfront prices — typically $120–$200 per night — while still being a short walk from the beach and nightlife.</p>

      <h2>Best Time to Book</h2>
      <p>Peak season runs from December through April, when prices are highest. For the best deals, visit in May–June or September–November when the weather is still excellent but hotel rates drop 30–50%. Book at least 2 months ahead for peak season travel.</p>

      <div className="cta-box">
        <h3>Ready to Book?</h3>
        <p>Explore top-rated tours and activities in South Beach Miami to complement your stay.</p>
        <a href={`${GYG}/miami-beach-l181/?${PARTNER}`} target="_blank" rel="noopener noreferrer" className="cta-link">
          Browse South Beach Tours →
        </a>
      </div>
    </article>
  ),

  "how-to-choose-hotels-south-padre-island": (
    <article className="prose-custom">
      <p>South Padre Island, located at the southern tip of Texas, is a paradise for beach lovers, families, and water sports enthusiasts. Choosing the right hotel can make or break your trip. This guide will help you find the perfect accommodation based on your travel style, budget, and preferences.</p>

      <h2>Understanding South Padre Island's Layout</h2>
      <p>South Padre Island is a narrow barrier island stretching about 5 miles from the main causeway to the northern tip. The south end near the causeway has most restaurants, shops, and nightlife. The northern section is quieter, with larger resort-style properties and more secluded beaches. Understanding this layout is key to choosing the right area for your stay.</p>

      <h2>Types of Accommodation</h2>

      <h3>Beachfront Resorts</h3>
      <p>Full-service resorts with pools, restaurants, fitness centers, and organized activities. Ideal for families and travelers who want everything in one place. Expect to pay $200–$400 per night during peak season.</p>

      <h3>Beachfront Condos</h3>
      <p>Condominiums with full kitchens, multiple bedrooms, and private balconies are the most popular option on South Padre Island. They're perfect for families and groups, offering more space and value than hotel rooms. Many condo complexes include pools, hot tubs, and direct beach access. Rates range from $150–$350 per night.</p>

      <h3>Budget Hotels & Motels</h3>
      <p>Several budget-friendly options are located near the causeway. While they may not have oceanfront views, they're a short drive or bike ride from the beach. Rates start around $80–$130 per night.</p>

      <h2>Best Areas to Stay</h2>
      <ul>
        <li><strong>South end (near causeway)</strong> — Best for nightlife, restaurants, and easy access to the mainland</li>
        <li><strong>Mid-island</strong> — Quieter beaches, family-friendly, good balance of convenience and tranquility</li>
        <li><strong>North end</strong> — Most secluded, larger resorts, ideal for relaxation and nature lovers</li>
      </ul>

      <h2>When to Visit</h2>
      <p>South Padre Island enjoys warm weather from March through November. Spring Break (March) is the busiest and most expensive time. Summer (June–August) is popular with families. For the best combination of great weather and lower prices, visit in September–October or April–May.</p>

      <h2>Tips for Booking</h2>
      <ul>
        <li>Book directly with condo management companies for better rates and flexibility</li>
        <li>Check if the property includes beach chairs and umbrellas — these can cost $20–$40 per day to rent</li>
        <li>Look for properties with covered parking, as sun exposure can heat up cars quickly</li>
        <li>Ask about pet policies if you're traveling with furry friends — many South Padre properties are pet-friendly</li>
      </ul>

      <div className="cta-box">
        <h3>Explore South Padre Island</h3>
        <p>Book unforgettable tours and activities — from dolphin watching to deep-sea fishing.</p>
        <a href={`${GYG}/south-padre-island-l4439/?${PARTNER}`} target="_blank" rel="noopener noreferrer" className="cta-link">
          Browse South Padre Island Tours →
        </a>
      </div>
    </article>
  ),

  "top-food-tours-new-orleans": (
    <article className="prose-custom">
      <p>New Orleans is America's most flavorful city. From gumbo and jambalaya to beignets and po'boys, the food here tells a story of French, African, Spanish, and Caribbean influences. A food tour is the best way to taste it all while learning the history behind every dish.</p>

      <h2>Why Take a Food Tour in New Orleans?</h2>
      <p>With thousands of restaurants across the city, choosing where to eat can be overwhelming. A guided food tour solves this by taking you to the best spots — including hidden gems you'd never find on your own. Local guides share the history, culture, and cooking techniques that make New Orleans cuisine truly unique.</p>

      <h2>Best French Quarter Food Tours</h2>
      <p>The French Quarter is the epicenter of New Orleans dining. Walking food tours here typically visit 5–7 restaurants over 2.5–3 hours, covering classic dishes like crawfish étouffée, muffuletta sandwiches, pralines, and of course, the legendary beignets at Café Du Monde. Tours range from $35–$75 per person, with food included.</p>

      <h2>Garden District & Uptown Food Walks</h2>
      <p>For a different perspective, Garden District food tours explore the uptown dining scene along Magazine Street and St. Charles Avenue. You'll find more modern Creole cuisine, craft cocktails, and upscale Southern comfort food in this beautiful, tree-lined neighborhood.</p>

      <h2>Cajun Cooking Classes</h2>
      <p>For a hands-on experience, Cajun cooking classes let you learn to make gumbo, jambalaya, and other signature dishes from scratch. Classes typically last 2–3 hours and include eating everything you cook, plus cocktail pairings. A fantastic rainy-day activity or a unique date night.</p>

      <h2>Best Time for Food Tours</h2>
      <p>Food tours run year-round, but spring (March–May) and fall (October–November) offer the most comfortable walking weather. Book morning tours in summer to avoid the heat. Always book at least a few days ahead — popular tours sell out, especially during Mardi Gras season and Jazz Fest.</p>

      <div className="cta-box">
        <h3>Book Your Food Tour</h3>
        <p>Explore the best food tours and cooking classes in New Orleans.</p>
        <a href={`${GYG}/new-orleans-l60/?q=food+tour&${PARTNER}`} target="_blank" rel="noopener noreferrer" className="cta-link">
          Browse New Orleans Food Tours →
        </a>
      </div>
    </article>
  ),

  "best-things-to-do-key-west": (
    <article className="prose-custom">
      <p>Key West, the southernmost point of the continental United States, is a tropical paradise known for its laid-back atmosphere, crystal-clear waters, and colorful history. From snorkeling vibrant coral reefs to watching legendary sunsets at Mallory Square, here are the 15 best things to do in Key West.</p>

      <h2>1. Snorkeling at the Coral Reef</h2>
      <p>Key West sits next to North America's only living coral barrier reef. Snorkeling trips take you to pristine reef formations teeming with tropical fish, sea turtles, and colorful corals. Half-day trips start from $45 and include equipment. For the best visibility, visit between April and July.</p>

      <h2>2. Sunset at Mallory Square</h2>
      <p>Every evening, locals and visitors gather at Mallory Square for the famous Sunset Celebration. Street performers, artists, and food vendors create a festive atmosphere as the sun dips below the Gulf of Mexico horizon. It's free and absolutely unmissable.</p>

      <h2>3. Visit Hemingway's Home & Museum</h2>
      <p>Ernest Hemingway lived and wrote some of his greatest works in this beautiful Spanish Colonial house. Today, you can tour the home, see his writing studio, and meet the famous six-toed cats that still roam the grounds. Admission is $18 for adults.</p>

      <h2>4. Duval Street Pub Crawl</h2>
      <p>Duval Street stretches from the Atlantic Ocean to the Gulf of Mexico and is lined with bars, restaurants, and live music venues. A pub crawl along this iconic strip is a Key West rite of passage — don't miss the famous rum runners and key lime martinis.</p>

      <h2>5. Kayaking in the Mangroves</h2>
      <p>Guided kayak tours through Key West's mangrove forests offer a peaceful escape from the bustling town. You'll paddle through crystal-clear shallows, spotting rays, juvenile sharks, and exotic birds in their natural habitat.</p>

      <h2>6–15. More Must-Do Activities</h2>
      <ul>
        <li><strong>Jet skiing</strong> around the island</li>
        <li><strong>Dry Tortugas National Park</strong> day trip by ferry or seaplane</li>
        <li><strong>Key lime pie tasting</strong> at Kermit's and Blue Heaven</li>
        <li><strong>Butterfly Conservatory</strong> — a tropical oasis with 50+ butterfly species</li>
        <li><strong>Fishing charters</strong> for tarpon, mahi-mahi, and sailfish</li>
        <li><strong>Fort Zachary Taylor Beach</strong> — the best beach on the island</li>
        <li><strong>Conch Train Tour</strong> — 90-minute narrated ride through historic Key West</li>
        <li><strong>Scuba diving</strong> at Vandenberg wreck site</li>
        <li><strong>Glass-bottom boat tours</strong> over the reef</li>
        <li><strong>Southernmost Point marker</strong> — the iconic photo op</li>
      </ul>

      <div className="cta-box">
        <h3>Book Key West Activities</h3>
        <p>Reserve your snorkeling trip, sunset cruise, or island tour with instant confirmation.</p>
        <a href={`${GYG}/key-west-l200/?${PARTNER}`} target="_blank" rel="noopener noreferrer" className="cta-link">
          Browse Key West Tours →
        </a>
      </div>
    </article>
  ),
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post || !slug || !articleContent[slug]) {
    return <NotFound />;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    author: { "@type": "Organization", name: "SouthVoyage" },
    publisher: { "@type": "Organization", name: "SouthVoyage", url: "https://southvoyage.com" },
    mainEntityOfPage: `https://southvoyage.com/blog/${post.slug}`,
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | SouthVoyage</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.keywords} />
        <link rel="canonical" href={`https://southvoyage.com/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://southvoyage.com/blog/${post.slug}`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <div className="relative aspect-[21/9] max-h-[480px] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            width={1200}
            height={600}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-foreground/10" />
        </div>

        <div className="container mx-auto px-4 max-w-3xl -mt-20 relative z-10">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elevated border border-border">
            <Link to="/blog" className="inline-flex items-center gap-1 text-primary font-body text-sm font-medium hover:underline mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>

            <span className="block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-body font-semibold w-fit mb-4">
              {post.category}
            </span>

            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm font-body text-muted-foreground mb-10">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> {post.readTime}
              </span>
            </div>

            {articleContent[slug]}
          </div>
        </div>

        {/* Related posts */}
        <section className="py-20 bg-sand mt-16">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">More from the Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {blogPosts
                .filter((p) => p.slug !== slug)
                .slice(0, 3)
                .map((p) => (
                  <Link
                    key={p.slug}
                    to={`/blog/${p.slug}`}
                    className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-elevated transition-all duration-300"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        width={1200}
                        height={600}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                        {p.title}
                      </h3>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
