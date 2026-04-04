import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Calendar, Clock, ArrowLeft, MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import { getDestinationBySlug } from "@/data/destinations";
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

  "miami-beach-oceanfront-hotels-guide": (
    <article className="prose-custom">
      <p>Waking up to the sound of waves and stepping onto a balcony overlooking the turquoise Atlantic — that's the Miami Beach oceanfront hotel experience. But with hundreds of properties lining the coast from South Beach to Sunny Isles, choosing the right one can be overwhelming. This guide breaks down everything you need to know about booking the perfect oceanfront stay.</p>

      <h2>Ocean Drive vs. Collins Avenue: Which Street Is Better?</h2>
      <p><strong>Ocean Drive</strong> (South Beach, 1st–15th Street) is the iconic strip with Art Deco hotels directly facing the beach. These tend to be smaller, boutique-style properties with 30–80 rooms. They're perfect for travelers who want to be in the heart of the action — sidewalk cafes, people-watching, and the beach literally steps away. However, rooms can be noisy at night due to the nightlife below.</p>
      <p><strong>Collins Avenue</strong> runs one block west and is home to the larger, more modern resort-style hotels. Properties here typically offer bigger rooms, rooftop pools, full-service spas, and more polished amenities. Many still have direct beach access via private walkways. For a balance of oceanfront living and quieter evenings, Collins Avenue is the smarter choice.</p>

      <h2>Understanding Room Categories</h2>
      <p>Miami Beach hotels use specific room categories that directly affect your view and price:</p>
      <ul>
        <li><strong>Ocean View</strong> — Partial ocean view, often from a side angle. $30–$80 less per night than Ocean Front.</li>
        <li><strong>Ocean Front</strong> — Direct, unobstructed ocean view. The premium choice. Expect to pay $50–$150 more than a standard room.</li>
        <li><strong>City View / Garden View</strong> — Faces away from the ocean. Significantly cheaper, sometimes 40% less than Ocean Front.</li>
        <li><strong>Pool View</strong> — Overlooks the hotel pool. A good middle ground in price and atmosphere.</li>
      </ul>
      <p><strong>Pro tip:</strong> If you're on a budget, book a City View room at an oceanfront hotel. You'll still have beach access, pool access, and all resort amenities — just without the view from your room. You'll save $80–$200 per night.</p>

      <h2>Best Areas Along Miami Beach</h2>
      <h3>South Beach (1st–23rd Street)</h3>
      <p>The most famous stretch. Art Deco charm, vibrant nightlife, and the widest sand beach. Hotels range from $180–$600/night. Best for nightlife seekers, couples, and first-time visitors.</p>

      <h3>Mid-Beach (24th–63rd Street)</h3>
      <p>Quieter and more upscale. Home to the Faena, Edition, and Fontainebleau — some of the most prestigious hotels in Miami. Hotels range from $300–$1,000/night. Best for luxury travelers and families who want beach without the party scene.</p>

      <h3>North Beach / Surfside (64th–96th Street)</h3>
      <p>Residential and relaxed. Fewer tourists, more local restaurants, beautiful uncrowded beaches. Hotels range from $150–$400/night. Best for extended stays and budget-conscious travelers who still want oceanfront.</p>

      <h3>Bal Harbour / Sunny Isles (North of 96th)</h3>
      <p>Ultra-luxury territory with towering condo-hotel skyscrapers and the upscale Bal Harbour Shops. Hotels range from $350–$1,200/night. Best for high-end travelers and shoppers.</p>

      <h2>When to Book for the Best Rates</h2>
      <ul>
        <li><strong>Peak season (Dec–Apr):</strong> Highest prices, best weather. Book 2–3 months ahead.</li>
        <li><strong>Shoulder season (May–Jun, Nov):</strong> 30–40% savings, still great weather. The sweet spot.</li>
        <li><strong>Summer (Jul–Sep):</strong> Lowest rates (40–50% off peak), but hot, humid, and occasional storms.</li>
        <li><strong>Book on Tuesday or Wednesday</strong> for the best online rates — hotel pricing algorithms typically lower rates mid-week.</li>
      </ul>

      <h2>What Amenities to Prioritize</h2>
      <ul>
        <li><strong>Beach service:</strong> Ask if the hotel provides complimentary beach chairs and umbrellas. Renting them separately costs $20–$40/day per set.</li>
        <li><strong>Resort fee:</strong> Many Miami Beach hotels charge $25–$55/night in resort fees on top of the room rate. Factor this into your budget.</li>
        <li><strong>Parking:</strong> Oceanfront hotels typically charge $30–$60/night for valet parking. If you don't need a car, skip it entirely — South Beach is very walkable.</li>
        <li><strong>Pool quality:</strong> A great pool can make or break your stay. Rooftop pools with ocean views are the gold standard.</li>
      </ul>

      <div className="cta-box">
        <h3>Explore Miami Beach</h3>
        <p>Book top-rated tours, water sports, and activities along Miami Beach.</p>
        <a href={`${GYG}/miami-beach-l181/?${PARTNER}`} target="_blank" rel="noopener noreferrer" className="cta-link">
          Browse Miami Beach Tours →
        </a>
      </div>
    </article>
  ),

  "best-restaurants-new-orleans-french-quarter": (
    <article className="prose-custom">
      <p>The French Quarter is where New Orleans' culinary legend was born. Within these historic blocks, you'll find restaurants that have been serving Creole masterpieces for over a century alongside exciting newcomers pushing Southern cuisine forward. Here are the 12 best restaurants in the French Quarter for 2026.</p>

      <h2>1. Antoine's — Since 1840</h2>
      <p>America's oldest family-run restaurant, Antoine's has been serving French-Creole cuisine for over 185 years. The Oysters Rockefeller were invented here in 1889. The dining rooms are grand, the service is old-school formal, and the Pommes de Terre Soufflées are legendary. Reservations essential. Entrées $28–$55.</p>

      <h2>2. Galatoire's — Friday Lunch Institution</h2>
      <p>Galatoire's Friday lunch is a New Orleans tradition — a multi-hour, multi-course, multi-cocktail affair that's as much social event as dining experience. The Trout Meunière and Shrimp Rémoulade are perfect. The downstairs dining room (no reservations, first-come-first-served) is where the magic happens. Business casual required. Entrées $25–$48.</p>

      <h2>3. Arnaud's</h2>
      <p>A grand Creole dining room with tile floors, ceiling fans, and impeccable service. The Shrimp Arnaud (cold shrimp in Creole rémoulade) is a must-order starter. The Filet de Boeuf and Bananas Foster are outstanding. Don't miss the Germaine Cazenave Wells Mardi Gras Museum upstairs. Entrées $30–$52.</p>

      <h2>4. Café Du Monde — The Beignet Legend</h2>
      <p>Open 24 hours (closed Christmas Day), Café Du Monde has been serving café au lait and powdered-sugar beignets since 1862. It's touristy, it's always crowded, and it's absolutely essential. Go at 2am for the shortest lines and most atmospheric experience. Cash only. Beignets $4.53 for an order of three.</p>

      <h2>5. Brennan's</h2>
      <p>Famous for inventing Bananas Foster in 1951, Brennan's offers elegant Creole dining in a stunning pink French Colonial building. The brunch is legendary — Eggs Hussarde and Turtle Soup are must-orders. The courtyard is one of the most romantic dining spots in the Quarter. Brunch entrées $18–$38, dinner $32–$55.</p>

      <h2>6. GW Fins — Best Seafood</h2>
      <p>Consistently rated one of the best seafood restaurants in the country. GW Fins sources fish from around the globe and prepares it with New Orleans flair. The Scalibut (lobster-crusted fish) and Seared Yellowfin Tuna are outstanding. Modern atmosphere, exceptional wine list. Entrées $32–$55.</p>

      <h2>7. Sylvain — Neighborhood Bistro</h2>
      <p>A cozy, candlelit neighborhood restaurant hidden in a courtyard off Chartres Street. Sylvain serves elevated Southern comfort food — fried chicken thighs with collard greens, roasted bone marrow, and an outstanding cheeseburger. Great cocktails. Entrées $18–$32.</p>

      <h2>8. Mr. B's Bistro</h2>
      <p>The Brennan family's more casual concept, Mr. B's is known for BBQ Shrimp (not what you'd expect — butter-poached shrimp in Worcestershire and pepper) and their Gumbo Ya Ya. Lively atmosphere, excellent cocktails, and a great jazz brunch on Sundays. Entrées $24–$42.</p>

      <h2>9. Central Grocery — The Original Muffuletta</h2>
      <p>This tiny Italian grocery on Decatur Street invented the muffuletta sandwich in 1906. A round sesame loaf stuffed with Italian meats, cheeses, and olive salad. A half is enough for most people. Cash only, take-out, and prepare to wait in line. Full muffuletta $19.</p>

      <h2>10. Coop's Place — Dive Bar Dining</h2>
      <p>Don't let the dive-bar atmosphere fool you — Coop's serves some of the best Cajun food in the Quarter. The Rabbit & Sausage Jambalaya is a legend, and the Fried Chicken is juicy perfection. No minors allowed. Cash only. Entrées $12–$22. Expect a line.</p>

      <h2>11. Muriel's Jackson Square</h2>
      <p>Beautiful dining rooms overlooking Jackson Square, with a resident ghost (seriously — they set a place for him). The Goat Cheese Croutons, Wood-Grilled Filet, and Bread Pudding Soufflé are outstanding. Balcony seating available. Entrées $28–$48.</p>

      <h2>12. Felix's Restaurant & Oyster Bar</h2>
      <p>A more laid-back alternative to the famous Acme Oyster House across the street, Felix's has been shucking since 1946. Chargrilled oysters, raw oysters, and a solid Gumbo in a casual, no-frills atmosphere. Oysters $16–$24/dozen.</p>

      <h2>Tips for Dining in the French Quarter</h2>
      <ul>
        <li><strong>Make reservations</strong> for fine dining (Antoine's, Galatoire's, Arnaud's, Brennan's) — especially weekends</li>
        <li><strong>Dress code:</strong> Upscale restaurants require business casual. No shorts, flip-flops, or tank tops</li>
        <li><strong>Lunch is often cheaper</strong> than dinner at the same restaurants, with the same menu quality</li>
        <li><strong>Ask locals</strong> where they eat — the best meal might be off the tourist path</li>
        <li><strong>Take a food tour</strong> to sample multiple restaurants with historical context from a local guide</li>
      </ul>

      <div className="cta-box">
        <h3>Book a French Quarter Food Tour</h3>
        <p>Sample the best of New Orleans cuisine with an expert local guide.</p>
        <a href={`${GYG}/new-orleans-l60/?q=food+tour&${PARTNER}`} target="_blank" rel="noopener noreferrer" className="cta-link">
          Browse New Orleans Food Tours →
        </a>
      </div>
    </article>
  ),

  "key-west-snorkeling-best-time-guide": (
    <article className="prose-custom">
      <p>Key West sits next to the only living coral barrier reef in North America — the Florida Reef, stretching 170 miles along the Florida Keys. Snorkeling here means swimming over colorful coral formations, spotting sea turtles, nurse sharks, and hundreds of tropical fish species. But timing matters. Here's everything you need to know about when, where, and how to snorkel in Key West.</p>

      <h2>Best Time of Year to Snorkel in Key West</h2>

      <h3>April – July: The Best Season (★★★★★)</h3>
      <p>This is the prime snorkeling window. Water temperatures are comfortable (78–84°F), visibility is at its peak (60–100 feet), seas are calm, and marine life is most active. April–May offers the best balance of clear water, comfortable temperatures, and fewer crowds. June–July is warmer but slightly more prone to afternoon thunderstorms (which usually clear quickly).</p>

      <h3>August – October: Good but Warmer (★★★★)</h3>
      <p>Water temperatures reach 85°F+ and visibility remains good (40–70 feet). Hurricane season (June–November) brings occasional rough weather, but most days are still snorkeling-friendly. Book flexible tours with cancellation policies during this period. Prices are lower and crowds thinner.</p>

      <h3>November – March: Cool but Clear (★★★)</h3>
      <p>Water temperature drops to 70–76°F — comfortable with a wetsuit or rash guard but chilly without one. Visibility is variable (30–60 feet) due to winter swells. Wind and wave conditions can cancel trips more frequently. However, clear days in winter can offer exceptional visibility. Prices are lowest November and early December.</p>

      <h2>Best Snorkeling Spots in Key West</h2>

      <h3>1. The Dry Rocks (Most Popular)</h3>
      <p>Home to the famous Christ of the Abyss statue — a 9-foot bronze statue submerged in 25 feet of water. The surrounding reef hosts elkhorn coral, brain coral, and schools of yellowtail snapper. Most tour boats stop here. Depth: 5–25 feet. Best for beginners and intermediate snorkelers.</p>

      <h3>2. Sand Key Reef</h3>
      <p>A beautiful shallow reef near the Sand Key Lighthouse, about 7 miles south of Key West. Large formations of star coral and fan coral, with frequent sightings of sea turtles, rays, and barracuda. Depth: 5–20 feet. Less crowded than Dry Rocks.</p>

      <h3>3. Rock Key</h3>
      <p>A vibrant reef with excellent coral coverage and diverse fish life. Parrotfish, angelfish, and sergeant majors are common here. Depth: 8–30 feet. Great for intermediate snorkelers who want more diverse marine life.</p>

      <h3>4. Western Dry Rocks</h3>
      <p>Further offshore (9 miles out), this site offers the clearest water and most diverse marine life in the Key West area. Reef sharks, eagle rays, and large groupers are frequently spotted. Depth: 15–65 feet. Better for confident swimmers. Fewer tour operators go here, so it's less crowded.</p>

      <h2>What to Expect on a Snorkeling Tour</h2>
      <ul>
        <li><strong>Duration:</strong> Half-day tours last 3–4 hours; full-day trips run 6–7 hours with lunch</li>
        <li><strong>Cost:</strong> $45–$95 per person for half-day; $85–$150 for full-day</li>
        <li><strong>Equipment:</strong> Mask, snorkel, and fins are always included. Some tours provide wetsuits seasonally</li>
        <li><strong>Group size:</strong> Large catamarans carry 40–100 people; smaller boats take 6–20 for a more intimate experience</li>
        <li><strong>Departure:</strong> Morning trips (8–9am) typically have calmer water and better visibility than afternoon trips</li>
      </ul>

      <h2>Tips for the Best Experience</h2>
      <ul>
        <li><strong>Book morning departures</strong> — water is calmest and visibility is best before noon</li>
        <li><strong>Choose a smaller boat</strong> if possible — less crowded reefs and more personal attention from guides</li>
        <li><strong>Wear reef-safe sunscreen</strong> — chemical sunscreens damage coral. Look for mineral-based (zinc oxide) formulas</li>
        <li><strong>Bring an underwater camera</strong> — many tours rent GoPro cameras or offer photo packages</li>
        <li><strong>Don't touch the coral</strong> — it's alive and extremely fragile. Even light touches can kill coral polyps</li>
        <li><strong>Take seasickness precautions</strong> — take Dramamine 30 minutes before departure if you're prone to motion sickness</li>
      </ul>

      <div className="cta-box">
        <h3>Book Your Snorkeling Trip</h3>
        <p>Reserve a top-rated Key West snorkeling tour with instant confirmation and free cancellation.</p>
        <a href={`${GYG}/key-west-l200/?q=snorkeling&${PARTNER}`} target="_blank" rel="noopener noreferrer" className="cta-link">
          Browse Key West Snorkeling Tours →
        </a>
      </div>
    </article>
  ),

  "perfect-weekend-savannah-georgia": (
    <article className="prose-custom">
      <p>Savannah is the kind of city that wraps you in Southern charm from the moment you arrive. With its moss-draped oaks, meticulously preserved squares, and world-class food scene, it's the ideal weekend getaway. Here's how to make the most of 2–3 days in one of America's most beautiful cities.</p>

      <h2>Day 1: Historic District & Southern Cuisine</h2>

      <h3>Morning: Trolley Tour Overview</h3>
      <p>Start with a <strong>hop-on hop-off trolley tour</strong> ($35, 1.5 hours for the full loop). This gives you an overview of the entire Historic District — all 22 squares, major landmarks, and neighborhoods — so you can decide what to explore in depth later. The narrated history is excellent and entertaining.</p>

      <h3>Midday: Forsyth Park & Lunch</h3>
      <p>Walk through <strong>Forsyth Park</strong>, Savannah's crown jewel. The iconic 1858 fountain is one of the most photographed landmarks in the South. Grab lunch at <strong>Collins Quarter</strong> on Bull Street — their Lavender Mocha and avocado toast are outstanding, or go classic Southern at <strong>Mrs. Wilkes' Dining Room</strong> (arrive by 10:30am for the communal-style lunch — fried chicken, collard greens, mac and cheese, and a dozen more dishes family-style).</p>

      <h3>Afternoon: Explore the Squares</h3>
      <p>Savannah has 22 original squares, each with unique character. The must-sees: <strong>Chippewa Square</strong> (the Forrest Gump bench scene), <strong>Monterey Square</strong> (Mercer Williams House from Midnight in the Garden of Good and Evil), and <strong>Lafayette Square</strong> (Cathedral of St. John the Baptist — stunning stained glass). Walk at your own pace, stopping for photos and people-watching.</p>

      <h3>Evening: Dinner & Ghost Tour</h3>
      <p>Dinner at <strong>The Olde Pink House</strong> — upscale Southern cuisine in a gorgeous 1771 Georgian mansion. Try the fried green tomatoes, she-crab soup, and crispy scored flounder. After dinner, take a <strong>haunted ghost walking tour</strong> ($25, 1.5 hours). Savannah is considered one of the most haunted cities in America, and the evening tours through dimly lit squares are genuinely atmospheric.</p>

      <h2>Day 2: River Street, Art & SCAD</h2>

      <h3>Morning: River Street & Brunch</h3>
      <p>Start with brunch at <strong>Huey's on the River</strong> — beignets, Eggs Benedict, and river views. Then walk along <strong>River Street</strong>, the cobblestoned waterfront promenade lined with shops, galleries, and candy stores in converted cotton warehouses. Watch the massive container ships pass by on the Savannah River.</p>

      <h3>Afternoon: SCAD Galleries & Shopping</h3>
      <p>The <strong>Savannah College of Art and Design</strong> has transformed the city into an arts destination. Visit the <strong>SCAD Museum of Art</strong> (free admission) and browse student galleries throughout the Historic District. Then walk <strong>Broughton Street</strong> for shopping — a mix of local boutiques, galleries, and national retailers.</p>

      <h3>Evening: Cocktails & Dinner</h3>
      <p>Savannah allows open containers in the Historic District (plastic cups, 16oz limit) — so grab a to-go cocktail from <strong>The Alley Cat Lounge</strong> (speakeasy, ring the doorbell) or <strong>Artillery</strong> and stroll through the squares at golden hour. Dinner at <strong>The Grey</strong> (James Beard-nominated, reserve ahead) or <strong>Husk</strong> (Southern farm-to-table in a restored building).</p>

      <h2>Day 3: Bonaventure Cemetery & Tybee Island</h2>

      <h3>Morning: Bonaventure Cemetery</h3>
      <p>Take a <strong>guided tour of Bonaventure Cemetery</strong> ($25, 2 hours) — one of the most hauntingly beautiful cemeteries in the world. Spanish moss drapes over Victorian-era monuments and live oaks, creating an atmosphere that's more peaceful garden than graveyard. The stories of the people buried here are fascinating.</p>

      <h3>Afternoon: Tybee Island Beach Day</h3>
      <p>Drive 20 minutes east to <strong>Tybee Island</strong> — Savannah's beach. It's a laid-back island with a wide, sandy beach, a historic lighthouse (climb 178 steps for panoramic views), and excellent seafood. Rent beach chairs, swim in the Atlantic, and have a late lunch at <strong>The Crab Shack</strong> — outdoor dining with low-country boil platters and views of the marsh.</p>

      <h2>Budget Breakdown (Per Person)</h2>
      <ul>
        <li><strong>Hotel (2 nights):</strong> $300–$600 (Historic District B&B or boutique hotel)</li>
        <li><strong>Food (3 days):</strong> $150–$300 (mix of casual and upscale dining)</li>
        <li><strong>Tours & Activities:</strong> $80–$150 (trolley, ghost tour, cemetery tour)</li>
        <li><strong>Total estimate:</strong> $530–$1,050 per person for a full weekend</li>
      </ul>

      <div className="cta-box">
        <h3>Book Savannah Tours</h3>
        <p>Reserve trolley tours, ghost walks, food tours, and Tybee Island excursions.</p>
        <a href={`${GYG}/savannah-l936/?${PARTNER}`} target="_blank" rel="noopener noreferrer" className="cta-link">
          Browse Savannah Tours →
        </a>
      </div>
    </article>
  ),
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const faqJsonLd = post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  } : null;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://southvoyage.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://southvoyage.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://southvoyage.com/blog/${post.slug}` },
    ],
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
        {faqJsonLd && <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>}
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
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

        {/* Destination CTA */}
        {post.relatedDestinationSlug && (() => {
          const dest = getDestinationBySlug(post.relatedDestinationSlug!);
          if (!dest) return null;
          return (
            <section className="py-12 mt-16">
              <div className="container mx-auto px-4 max-w-3xl">
                <Link
                  to={`/destinations/${dest.slug}`}
                  className="group flex flex-col md:flex-row items-stretch rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-elevated transition-all duration-300"
                >
                  <div className="md:w-2/5 aspect-[16/9] md:aspect-auto overflow-hidden">
                    <img
                      src={dest.heroImage}
                      alt={`${dest.name} travel guide`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width={400}
                      height={300}
                    />
                  </div>
                  <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center bg-card">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-secondary" />
                      <span className="font-body text-xs uppercase tracking-wider text-secondary font-semibold">Destination Guide</span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      Explore {dest.name}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground mb-4">{dest.tagline} — Hotels, tours, activities, and everything you need to plan your trip.</p>
                    <span className="font-body text-sm font-semibold text-primary group-hover:underline">Read the Full Guide →</span>
                  </div>
                </Link>
              </div>
            </section>
          );
        })()}

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
