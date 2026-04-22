import destMiamiBeach from "@/assets/dest-miami-beach.jpg";
import destKeyWest from "@/assets/dest-key-west.jpg";
import destNewOrleans from "@/assets/dest-new-orleans.jpg";
import destSouthPadre from "@/assets/dest-south-padre.jpg";
import destSavannah from "@/assets/dest-savannah.jpg";

const PARTNER = "partner_id=0IQTGX8&utm_medium=online_publisher";
const GYG = "https://www.getyourguide.com";

export interface DestinationTour {
  title: string;
  duration: string;
  rating: number;
  reviews: number;
  price: string;
  link: string;
}

export interface DestinationHotelArea {
  name: string;
  description: string;
  priceRange: string;
}

export interface DestinationFaq {
  question: string;
  answer: string;
}

export interface Destination {
  slug: string;
  name: string;
  tagline: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  introText: string;
  sections: { heading: string; content: string }[];
  topTours: DestinationTour[];
  hotelAreas: DestinationHotelArea[];
  faqs: DestinationFaq[];
  gygSearchLink: string;
  relatedSlugs: string[];
  relatedBlogSlugs: string[];
}

export const destinations: Destination[] = [
  {
    slug: "south-beach-miami",
    name: "South Beach, Miami",
    tagline: "Sun, Style & Art Deco Glamour",
    heroImage: destMiamiBeach,
    metaTitle: "South Beach Miami Travel Guide | SouthVoyage",
    metaDescription: "South Beach Miami travel guide with oceanfront hotels, Art Deco tours, nightlife, beach tips, and top things to do.",
    keywords: "south beach hotels, south beach miami, oceanfront hotels south beach miami, best hotels in south beach miami, miami beach oceanfront hotels, south beach tours, things to do south beach miami, art deco district miami, where to stay in south beach, south beach nightlife guide",
    introText: "South Beach is Miami's crown jewel — a world-famous stretch of white sand, turquoise water, and iconic Art Deco architecture that has captivated travelers for decades. Whether you're seeking luxury oceanfront resorts, vibrant nightlife on Ocean Drive, or a relaxing day under the palms, South Beach delivers an experience like no other destination in the United States.",
    sections: [
      {
        heading: "Why Visit South Beach Miami?",
        content: "South Beach combines stunning natural beauty with urban sophistication. The neighborhood's Art Deco Historic District features over 800 pastel-colored buildings from the 1930s and 1940s, making it one of the most photographed places in the world. Beyond the architecture, you'll find world-class restaurants along Lincoln Road, designer shopping at Bal Harbour, and a beach scene that attracts celebrities, models, and sun-seekers from every corner of the globe. The weather is exceptional year-round, with average temperatures between 70°F and 85°F, making South Beach a perfect destination any time of year.",
      },
      {
        heading: "Best Areas to Stay in South Beach",
        content: "The heart of South Beach runs from South Pointe Park at the southern tip up to about 23rd Street. **Ocean Drive (1st–15th Street)** is ground zero for the Art Deco scene, with bustling sidewalk cafes, live music, and the most iconic beach views. **Collins Avenue** runs parallel one block west and offers a mix of luxury hotels and boutique properties. **Lincoln Road (16th–17th Street)** is a pedestrian-only shopping and dining district, perfect for those who want walkable restaurants and nightlife. **Mid-Beach (23rd–44th Street)** is quieter and more upscale, home to the Faena and Edition hotels — ideal for travelers who want South Beach proximity without the noise.",
      },
      {
        heading: "Best Time to Visit",
        content: "Peak season runs December through April, when the weather is dry and warm (highs around 78°F). This is also when hotel prices are highest and Art Basel, the South Beach Wine & Food Festival, and Ultra Music Festival take place. **Shoulder season (May–June, November)** offers the best value — still great weather, fewer crowds, and hotel rates 30–40% lower. Summer (July–September) is hot and humid with occasional afternoon thunderstorms, but oceanfront breezes and lower prices make it a viable option for budget-conscious travelers.",
      },
      {
        heading: "Getting Around",
        content: "South Beach is one of the most walkable neighborhoods in Florida. The free South Beach Local trolley runs along Washington Avenue, making it easy to get around without a car. Ride-sharing services are abundant, and bike rentals (including Citi Bike stations) are a popular way to explore. If you're staying in South Beach, a car is unnecessary — most hotels, restaurants, and attractions are within a 15-minute walk.",
      },
    ],
    topTours: [
      { title: "South Beach Art Deco Walking Tour", duration: "2 hours", rating: 4.8, reviews: 1240, price: "From $25", link: `${GYG}/miami-beach-l181/miami-south-beach-art-deco-walking-tour-t61497/?${PARTNER}` },
      { title: "Miami: Everglades Airboat Ride & Wildlife Show", duration: "4 hours", rating: 4.5, reviews: 3200, price: "From $29", link: `${GYG}/miami-l178/everglades-airboat-ride-wildlife-show-t28374/?${PARTNER}` },
      { title: "Miami Beach: Jet Ski Rental Experience", duration: "1 hour", rating: 4.6, reviews: 890, price: "From $75", link: `${GYG}/miami-beach-l181/?q=jet+ski&${PARTNER}` },
      { title: "South Beach: Sunset Cruise with Drinks", duration: "2 hours", rating: 4.7, reviews: 650, price: "From $45", link: `${GYG}/miami-beach-l181/?q=sunset+cruise&${PARTNER}` },
      { title: "Miami: Biscayne Bay Sightseeing Cruise", duration: "1.5 hours", rating: 4.4, reviews: 2100, price: "From $30", link: `${GYG}/miami-l178/?q=biscayne+bay&${PARTNER}` },
      { title: "Miami: Little Havana Food & Culture Walking Tour", duration: "2.5 hours", rating: 4.9, reviews: 1800, price: "From $39", link: `${GYG}/miami-l178/?q=little+havana+food&${PARTNER}` },
    ],
    hotelAreas: [
      { name: "Oceanfront on Ocean Drive", description: "Classic Art Deco hotels steps from the sand with sidewalk dining and Ocean views.", priceRange: "$200 – $500/night" },
      { name: "Collins Avenue Luxury", description: "High-end resorts with rooftop pools, spas, and private beach service.", priceRange: "$350 – $900/night" },
      { name: "Lincoln Road & Washington Ave", description: "Boutique hotels in the heart of shopping and dining. Short walk to the beach.", priceRange: "$150 – $350/night" },
      { name: "Mid-Beach (Faena District)", description: "Ultra-luxury properties with a quieter, more exclusive atmosphere.", priceRange: "$400 – $1,200/night" },
    ],
    faqs: [
      { question: "What is the best month to visit South Beach Miami?", answer: "March and April offer ideal weather (75–82°F), moderate hotel prices, and exciting events like the Miami Open. For budget travelers, May and November provide great weather at 30–40% lower hotel rates." },
      { question: "Are South Beach hotels oceanfront?", answer: "Many are. Hotels along Ocean Drive and Collins Avenue between 1st and 20th streets offer direct beach access. Most include beach chair and umbrella service for guests." },
      { question: "Is South Beach walkable?", answer: "Yes! South Beach is one of the most walkable neighborhoods in the US. Most attractions, restaurants, and the beach are within a 10–15 minute walk from any hotel in the area." },
      { question: "How much should I budget for a South Beach vacation?", answer: "A mid-range trip costs roughly $250–$400/day for a couple, including hotel, dining, and activities. Budget travelers can manage $150–$200/day with hostels or side-street hotels." },
    ],
    gygSearchLink: `${GYG}/miami-beach-l181/?${PARTNER}`,
    relatedSlugs: ["key-west", "new-orleans", "south-padre-island"],
    relatedBlogSlugs: ["best-hotels-south-beach-miami", "miami-beach-oceanfront-hotels-guide"],
  },
  {
    slug: "key-west",
    name: "Key West, Florida",
    tagline: "America's Tropical Paradise",
    heroImage: destKeyWest,
    metaTitle: "Key West Travel Guide | SouthVoyage",
    metaDescription: "Key West travel guide with snorkeling tips, sunset cruises, hotel areas, reef tours, and historic attractions.",
    keywords: "key west tours, things to do key west, key west hotels, key west snorkeling, key west activities, key west florida, key west attractions, best key west tours, key west sunset cruise, key west travel guide 2026",
    introText: "Key West is the southernmost point of the continental United States — a sun-drenched island paradise where colorful Victorian houses line palm-shaded streets, legendary sunsets paint the sky every evening, and crystal-clear waters teem with tropical marine life. Just 4 miles long and 1 mile wide, this small island packs an enormous amount of charm, history, and adventure.",
    sections: [
      {
        heading: "Why Visit Key West?",
        content: "Key West offers a rare combination of tropical beauty, rich history, and laid-back island culture. The island was home to Ernest Hemingway, Harry Truman, and Tennessee Williams, and their legacy lives on in beautifully preserved homes and museums. The surrounding waters host North America's only living coral barrier reef, making Key West one of the best snorkeling and diving destinations in the world. Add in world-famous sunsets at Mallory Square, the lively atmosphere of Duval Street, and fresh-caught seafood at every turn, and you have a destination that delivers something for every type of traveler.",
      },
      {
        heading: "Best Water Activities",
        content: "Key West's crystal-clear waters are the main attraction. **Snorkeling** trips to the reef depart daily and cost $45–$85, with equipment included. **Scuba diving** at sites like the USNS Vandenberg wreck is world-class. **Kayaking** through the mangrove backcountry is a peaceful way to spot wildlife. **Jet skiing**, **parasailing**, and **paddleboarding** are available at multiple locations. For fishing enthusiasts, Key West is a premier destination for **deep-sea fishing** — charter boats target tarpon, mahi-mahi, sailfish, and yellowtail snapper.",
      },
      {
        heading: "Historic Attractions",
        content: "**Hemingway Home & Museum** ($18 admission) is a must-visit, with the famous six-toed cats still roaming the gardens. **Harry S. Truman Little White House** offers guided tours of the president's winter retreat. **Fort Zachary Taylor State Park** combines Civil War-era history with Key West's best public beach. The **Key West Lighthouse** provides panoramic views of the island and harbor. And no visit is complete without a photo at the **Southernmost Point buoy** — the iconic red, yellow, and black marker just 90 miles from Cuba.",
      },
      {
        heading: "Best Time to Visit Key West",
        content: "Key West is warm year-round, but **December through April** is peak season with perfect weather (75–82°F) and the busiest crowds. **June through November** is the off-season with lower prices, warmer temperatures (85–90°F), and occasional tropical storms. The best balance of weather and value is **late April–May** or **early December** — warm, fewer crowds, and reasonable hotel rates.",
      },
    ],
    topTours: [
      { title: "Key West: Snorkeling Trip with Breakfast & Lunch", duration: "6.5 hours", rating: 4.7, reviews: 890, price: "From $95", link: `${GYG}/key-west-l200/key-west-snorkeling-trip-with-breakfast-lunch-t23404/?${PARTNER}` },
      { title: "Key West: Sunset Sailing with Wine & Appetizers", duration: "2 hours", rating: 4.8, reviews: 1450, price: "From $65", link: `${GYG}/key-west-l200/?q=sunset+sail&${PARTNER}` },
      { title: "Key West: Glass-Bottom Boat Tour", duration: "2 hours", rating: 4.5, reviews: 720, price: "From $40", link: `${GYG}/key-west-l200/?q=glass+bottom+boat&${PARTNER}` },
      { title: "Key West: Conch Train Narrated Tour", duration: "1.5 hours", rating: 4.6, reviews: 2300, price: "From $35", link: `${GYG}/key-west-l200/?q=conch+train&${PARTNER}` },
      { title: "Key West: Jet Ski Island Tour", duration: "1.5 hours", rating: 4.7, reviews: 540, price: "From $80", link: `${GYG}/key-west-l200/?q=jet+ski&${PARTNER}` },
      { title: "Key West: Dolphin Watch & Eco Tour", duration: "3 hours", rating: 4.6, reviews: 680, price: "From $55", link: `${GYG}/key-west-l200/?q=dolphin+watch&${PARTNER}` },
    ],
    hotelAreas: [
      { name: "Old Town / Duval Street", description: "Walk to everything — bars, restaurants, museums, and sunset celebrations at Mallory Square.", priceRange: "$200 – $500/night" },
      { name: "Oceanfront Resorts (South Beach)", description: "Full-service resorts with pools, beaches, and water sports centers at the island's south end.", priceRange: "$300 – $700/night" },
      { name: "New Town", description: "Budget-friendly hotels and chain properties with parking, short drive or bike ride to Old Town.", priceRange: "$120 – $250/night" },
    ],
    faqs: [
      { question: "How do I get to Key West?", answer: "You can fly into Key West International Airport (EYW) or drive the scenic Overseas Highway from Miami (3.5 hours, 160 miles). The drive crosses 42 bridges through the Florida Keys — one of the most beautiful road trips in America." },
      { question: "Is Key West good for families?", answer: "Yes! The Butterfly Conservatory, Aquarium, Conch Train tour, and snorkeling trips are all family-friendly. Just note that Duval Street is very lively at night." },
      { question: "What food is Key West known for?", answer: "Key lime pie (of course!), fresh stone crab claws, conch fritters, and yellowtail snapper. Blue Heaven and Santiago's Bodega are local favorites." },
      { question: "Do I need a car in Key West?", answer: "No. Key West is very small (4 miles long) and best explored by foot, bicycle, or scooter. Parking is limited and expensive." },
    ],
    gygSearchLink: `${GYG}/key-west-l200/?${PARTNER}`,
    relatedSlugs: ["south-beach-miami", "south-padre-island", "savannah"],
    relatedBlogSlugs: ["best-things-to-do-key-west", "key-west-snorkeling-best-time-guide"],
  },
  {
    slug: "new-orleans",
    name: "New Orleans, Louisiana",
    tagline: "Where Every Street Tells a Story",
    heroImage: destNewOrleans,
    metaTitle: "New Orleans Travel Guide | SouthVoyage",
    metaDescription: "New Orleans travel guide with French Quarter tours, Creole food tips, jazz clubs, hotel advice, and local highlights.",
    keywords: "new orleans tours, things to do new orleans, french quarter food tour, new orleans activities, new orleans hotels, new orleans travel guide, cajun food tour new orleans, new orleans jazz, where to stay in new orleans, new orleans itinerary",
    introText: "New Orleans is America's most culturally rich city — a place where French, African, Spanish, and Caribbean influences have fused into something entirely unique. From the wrought-iron balconies of the French Quarter to the jazz-filled streets of Frenchmen Street, from the legendary beignets at Café Du Monde to the vibrant energy of Mardi Gras, New Orleans is a feast for every sense.",
    sections: [
      {
        heading: "Why Visit New Orleans?",
        content: "No other American city offers the same depth of culture, cuisine, and celebration as New Orleans. The music scene is unmatched — live jazz, blues, brass bands, and zydeco pour out of clubs and street corners every night. The food is legendary: gumbo, jambalaya, crawfish étouffée, po'boys, and pralines are just the beginning. And the city's festive spirit — embodied by Mardi Gras, Jazz Fest, and dozens of neighborhood festivals — makes every visit feel like a celebration. Beyond the parties, New Orleans offers profound history, from its role in the Civil Rights movement to the distinctive above-ground cemeteries that earn the nickname 'Cities of the Dead.'",
      },
      {
        heading: "Neighborhoods to Explore",
        content: "**French Quarter (Vieux Carré)** is the historic heart — Jackson Square, Bourbon Street, and Royal Street's antique shops and art galleries. **Frenchmen Street** in the Marigny neighborhood is where locals go for live music — multiple clubs within a few blocks playing jazz, funk, and blues every night. **Garden District** features stunning antebellum mansions, Magazine Street shopping, and Commander's Palace restaurant. **Warehouse District / Arts District** has world-class museums including the National WWII Museum (rated #1 attraction in the US). **Bywater** is the hip, artsy neighborhood with colorful shotgun houses, street art, and emerging restaurants.",
      },
      {
        heading: "Must-Try Food Experiences",
        content: "Food is New Orleans' greatest art form. A **French Quarter food walking tour** ($35–$75) is the best way to sample classics from multiple restaurants with historical context. Must-eat dishes include: **beignets** (Café Du Monde), **gumbo** (Dooky Chase's), **po'boys** (Domilise's), **muffuletta** (Central Grocery), **crawfish étouffée** (Bon Ton Café), and **red beans & rice** (Popeyes is surprisingly good, but Buster Holmes is the original). For a splurge, book a table at **Commander's Palace** in the Garden District — their jazz brunch with 25-cent martinis is legendary.",
      },
      {
        heading: "Best Time to Visit",
        content: "**October through May** is prime visiting season with comfortable temperatures (60–80°F). **Mardi Gras** (February/March) is the ultimate New Orleans experience but hotels book up months in advance. **Jazz Fest** (late April/early May) draws world-class musicians. **October–November** is a hidden gem season with great weather, Food & Wine festivals, and lower prices. **Summer (June–September)** is hot, humid, and rainy — but hotel rates drop significantly and the city's indoor attractions shine.",
      },
    ],
    topTours: [
      { title: "New Orleans: French Quarter Food Walking Tour", duration: "3 hours", rating: 4.9, reviews: 2150, price: "From $39", link: `${GYG}/new-orleans-l60/new-orleans-french-quarter-food-walking-tour-t68934/?${PARTNER}` },
      { title: "New Orleans: Garden District Walking Tour", duration: "2 hours", rating: 4.7, reviews: 980, price: "From $25", link: `${GYG}/new-orleans-l60/?q=garden+district&${PARTNER}` },
      { title: "New Orleans: Haunted Ghost & Vampire Tour", duration: "2 hours", rating: 4.6, reviews: 1450, price: "From $25", link: `${GYG}/new-orleans-l60/?q=ghost+tour&${PARTNER}` },
      { title: "New Orleans: Swamp & Bayou Boat Tour", duration: "4 hours", rating: 4.5, reviews: 1200, price: "From $49", link: `${GYG}/new-orleans-l60/?q=swamp+tour&${PARTNER}` },
      { title: "New Orleans: Jazz & Heritage Bus Tour", duration: "3 hours", rating: 4.8, reviews: 750, price: "From $55", link: `${GYG}/new-orleans-l60/?q=jazz+tour&${PARTNER}` },
      { title: "New Orleans: Cemetery & Voodoo Walking Tour", duration: "2 hours", rating: 4.7, reviews: 1650, price: "From $29", link: `${GYG}/new-orleans-l60/?q=cemetery+tour&${PARTNER}` },
    ],
    hotelAreas: [
      { name: "French Quarter", description: "In the heart of the action — walkable to everything but can be noisy at night.", priceRange: "$180 – $500/night" },
      { name: "Warehouse District / CBD", description: "Modern hotels near the National WWII Museum. Quieter, with easy streetcar access.", priceRange: "$150 – $400/night" },
      { name: "Garden District", description: "Beautiful B&Bs in historic mansions. Charming, tree-lined streets with a local feel.", priceRange: "$120 – $350/night" },
      { name: "Marigny / Bywater", description: "Artsy, eclectic neighborhood near Frenchmen Street's live music scene.", priceRange: "$100 – $280/night" },
    ],
    faqs: [
      { question: "Is New Orleans safe for tourists?", answer: "The main tourist areas (French Quarter, Garden District, Warehouse District) are generally safe. Use common sense — stick to well-lit streets at night, travel in groups on Bourbon Street, and keep valuables secure." },
      { question: "What is the best food to try in New Orleans?", answer: "Must-try dishes include beignets, gumbo, crawfish étouffée, po'boys, muffuletta sandwiches, jambalaya, and red beans & rice. Take a food tour to sample them all with local context." },
      { question: "How many days do you need in New Orleans?", answer: "3–4 days is ideal to explore the French Quarter, take a food tour, visit the National WWII Museum, enjoy live jazz, and take a day trip to the bayou." },
      { question: "What is Mardi Gras like?", answer: "Mardi Gras is a massive citywide celebration with parades, music, costumes, and king cake. It's an unforgettable experience but extremely crowded. Book hotels 6+ months in advance." },
    ],
    gygSearchLink: `${GYG}/new-orleans-l60/?${PARTNER}`,
    relatedSlugs: ["south-beach-miami", "savannah", "south-padre-island"],
    relatedBlogSlugs: ["top-food-tours-new-orleans", "best-restaurants-new-orleans-french-quarter"],
  },
  {
    slug: "south-padre-island",
    name: "South Padre Island, Texas",
    tagline: "Texas' Premier Beach Escape",
    heroImage: destSouthPadre,
    metaTitle: "South Padre Island Travel Guide | SouthVoyage",
    metaDescription: "South Padre Island travel guide with beachfront hotels, dolphin tours, fishing charters, family beach tips, and best areas.",
    keywords: "south padre island hotels, south padre island tours, things to do south padre island, south padre island activities, south padre island vacation, south padre island beach, south padre island texas, beachfront condos south padre island, family travel south padre island",
    introText: "South Padre Island is a 34-mile barrier island off the southern tip of Texas, known for its warm Gulf waters, sugar-white sand beaches, and incredible wildlife. Whether you're a family seeking dolphin-watching adventures, a couple looking for a romantic beach getaway, or a group of friends ready for water sports and nightlife, South Padre Island offers an authentic, uncrowded beach experience that larger Florida destinations can't match.",
    sections: [
      {
        heading: "Why Choose South Padre Island?",
        content: "South Padre Island offers what many beach destinations have lost — unspoiled stretches of sand, affordable pricing, and a genuine small-town atmosphere. The island is one of the top birdwatching destinations in North America, with the World Birding Center attracting nature enthusiasts year-round. Sea turtle rescue operations at Sea Turtle Inc. offer educational experiences for all ages. The warm Gulf waters are perfect for swimming, with gentle waves ideal for families. And the fishing — both surf casting and deep-sea charters — is among the best on the Texas coast.",
      },
      {
        heading: "Top Water Activities",
        content: "**Dolphin watching** is South Padre's signature experience — bottlenose dolphins frequently swim alongside tour boats in the Laguna Madre. **Snorkeling** in the jetty areas reveals surprising marine diversity. **Kiteboarding and windsurfing** thrive thanks to consistent Gulf breezes. **Deep-sea fishing** charters target red snapper, king mackerel, and mahi-mahi. **Parasailing** offers breathtaking aerial views of the island and surrounding waters. For a unique experience, try **bioluminescence kayaking** on summer nights when the water glows with microscopic organisms.",
      },
      {
        heading: "Family-Friendly Activities",
        content: "South Padre Island is exceptionally family-friendly. **Sea Turtle Inc.** is a rescue and rehabilitation center where kids can learn about endangered sea turtles. **Schlitterbahn Waterpark** (one of the best in Texas) offers thrills for all ages. **Sandcastle lessons** from professional sculptors are a unique beach activity. The **South Padre Island Birding & Nature Center** has boardwalk trails through coastal wetlands. And the gentle Gulf waves with gradually sloping sandy bottoms make the beaches safe for young children.",
      },
      {
        heading: "When to Visit",
        content: "South Padre Island is warm enough for beach activities from **March through November**. **Spring Break (March)** is the island's wildest season — fun if that's your scene, but families should avoid it. **Summer (June–August)** is peak family season with the warmest water temperatures (80–85°F). **Fall (September–November)** offers excellent weather, fewer crowds, lower prices, and the best fishing. **Winter (December–February)** is mild (65–72°F) — pleasant for birding and fishing but too cool for most beach swimming.",
      },
    ],
    topTours: [
      { title: "South Padre Island: Dolphin Watch Eco Tour", duration: "2 hours", rating: 4.7, reviews: 850, price: "From $35", link: `${GYG}/south-padre-island-l4439/?q=dolphin&${PARTNER}` },
      { title: "South Padre: Sunset Sailing Cruise", duration: "2 hours", rating: 4.6, reviews: 420, price: "From $45", link: `${GYG}/south-padre-island-l4439/?q=sunset+cruise&${PARTNER}` },
      { title: "South Padre Island: Parasailing Adventure", duration: "1 hour", rating: 4.5, reviews: 380, price: "From $75", link: `${GYG}/south-padre-island-l4439/?q=parasailing&${PARTNER}` },
      { title: "South Padre: Deep-Sea Fishing Charter", duration: "6 hours", rating: 4.8, reviews: 620, price: "From $120", link: `${GYG}/south-padre-island-l4439/?q=fishing&${PARTNER}` },
      { title: "South Padre: Horseback Riding on the Beach", duration: "1.5 hours", rating: 4.7, reviews: 340, price: "From $55", link: `${GYG}/south-padre-island-l4439/?q=horseback&${PARTNER}` },
      { title: "South Padre: Jet Ski Rental", duration: "1 hour", rating: 4.4, reviews: 290, price: "From $80", link: `${GYG}/south-padre-island-l4439/?q=jet+ski&${PARTNER}` },
    ],
    hotelAreas: [
      { name: "South End (Near Causeway)", description: "Close to restaurants, shops, and nightlife. Most hotel and condo options are here.", priceRange: "$120 – $300/night" },
      { name: "Mid-Island Beachfront", description: "Quieter beaches with family-friendly condo complexes and resort-style amenities.", priceRange: "$150 – $350/night" },
      { name: "North End", description: "Most secluded and private. Large resorts with full amenities and pristine beaches.", priceRange: "$180 – $400/night" },
    ],
    faqs: [
      { question: "How do I get to South Padre Island?", answer: "Fly into Valley International Airport (HRL) in Harlingen, TX (30 minutes away) or South Padre Island-Brownsville Airport (BRO). Drive from San Antonio (5 hours), Houston (6 hours), or across the Mexican border from Matamoros." },
      { question: "Is South Padre Island good for Spring Break?", answer: "South Padre is one of the most popular Spring Break destinations in the US. It's great for college students but families should visit at other times. Spring Break typically runs mid-March." },
      { question: "What's the water temperature?", answer: "Gulf water temperatures range from 65°F in winter to 85°F in summer. Swimming is comfortable from April through November." },
      { question: "Are there restaurants on the island?", answer: "Yes! The south end near the causeway has dozens of restaurants. Highlights include Pier 19 (seafood with bay views), Daddy's Seafood & Cajun Kitchen, and Louie's Backyard." },
    ],
    gygSearchLink: `${GYG}/south-padre-island-l4439/?${PARTNER}`,
    relatedSlugs: ["south-beach-miami", "key-west", "new-orleans"],
    relatedBlogSlugs: ["how-to-choose-hotels-south-padre-island"],
  },
  {
    slug: "savannah",
    name: "Savannah, Georgia",
    tagline: "The Jewel of the South",
    heroImage: destSavannah,
    metaTitle: "Savannah Travel Guide | SouthVoyage",
    metaDescription: "Savannah travel guide with trolley tours, historic squares, Southern food, haunted walks, hotel tips, and weekend ideas.",
    keywords: "savannah tours, things to do savannah, savannah hotels, savannah georgia, savannah trolley tour, savannah ghost tour, savannah travel guide, historic savannah, weekend in savannah georgia, savannah itinerary",
    introText: "Savannah is the most enchanting city in the American South — a place where centuries-old oak trees draped in Spanish moss shade 22 meticulously preserved garden squares, horse-drawn carriages clip-clop along cobblestone streets, and every corner reveals another layer of history, beauty, and Southern charm. Founded in 1733, Savannah is Georgia's oldest city and one of the most beautiful in the United States.",
    sections: [
      {
        heading: "Why Visit Savannah?",
        content: "Savannah's Historic District is the largest National Historic Landmark District in the United States, spanning 2.5 square miles of perfectly preserved 18th and 19th-century architecture. The city's 22 original squares — each a miniature park surrounded by historic homes, churches, and monuments — create an urban landscape unlike anything else in America. Beyond the beauty, Savannah offers world-class dining, a thriving arts scene, some of the country's best ghost tours, and the warm, genuine hospitality that defines Southern culture. It's also wonderfully walkable and compact, making it perfect for a long weekend getaway.",
      },
      {
        heading: "Must-See Attractions",
        content: "**Forsyth Park** is Savannah's signature landmark — a 30-acre park anchored by its iconic 1858 fountain. **Cathedral of St. John the Baptist** is a stunning French Gothic church with remarkable stained glass windows. **Bonaventure Cemetery** (featured in 'Midnight in the Garden of Good and Evil') is hauntingly beautiful. **River Street** is a nine-block waterfront promenade with shops, restaurants, and galleries in converted cotton warehouses. **Mercer Williams House** is the setting of the famous book and film, now open for tours. And **SCAD (Savannah College of Art and Design)** has transformed the city into a thriving arts destination with galleries throughout the Historic District.",
      },
      {
        heading: "Southern Cuisine in Savannah",
        content: "Savannah's food scene is exceptional. **Mrs. Wilkes' Dining Room** serves family-style Southern lunch (fried chicken, collard greens, mac and cheese) — the line forms at 10am and it's worth every minute. **The Grey** (James Beard-nominated) occupies a restored Greyhound bus station and serves inventive Southern cuisine. **Leopold's Ice Cream** has been scooping since 1919. **The Olde Pink House** offers upscale Southern dining in a gorgeous 1771 mansion. For a food tour, walking tours of the Historic District combine history with tastings at 5–7 restaurants.",
      },
      {
        heading: "Best Time to Visit",
        content: "**March through May** is peak season with perfect weather (65–82°F), blooming azaleas, and St. Patrick's Day celebrations (Savannah throws the second-largest St. Patrick's Day parade in the US). **October–November** is equally lovely with mild temperatures and fall foliage. **Summer (June–August)** is hot and humid (90°F+) but offers lower hotel rates. **Winter (December–February)** is mild (50–65°F) and very affordable — a great time for uncrowded sightseeing and cozy restaurant-hopping.",
      },
    ],
    topTours: [
      { title: "Savannah: Hop-On Hop-Off Trolley Tour", duration: "1.5 hours", rating: 4.7, reviews: 1800, price: "From $35", link: `${GYG}/savannah-l936/savannah-hop-on-hop-off-trolley-tour-t69012/?${PARTNER}` },
      { title: "Savannah: Haunted Ghost Walking Tour", duration: "1.5 hours", rating: 4.8, reviews: 2200, price: "From $25", link: `${GYG}/savannah-l936/?q=ghost+tour&${PARTNER}` },
      { title: "Savannah: Historic District Food Walking Tour", duration: "3 hours", rating: 4.9, reviews: 1100, price: "From $45", link: `${GYG}/savannah-l936/?q=food+tour&${PARTNER}` },
      { title: "Savannah: Horse-Drawn Carriage Tour", duration: "1 hour", rating: 4.6, reviews: 950, price: "From $30", link: `${GYG}/savannah-l936/?q=carriage+tour&${PARTNER}` },
      { title: "Savannah: Bonaventure Cemetery Guided Tour", duration: "2 hours", rating: 4.8, reviews: 680, price: "From $25", link: `${GYG}/savannah-l936/?q=bonaventure&${PARTNER}` },
      { title: "Savannah: Dolphin & Nature Cruise at Tybee Island", duration: "3 hours", rating: 4.5, reviews: 540, price: "From $40", link: `${GYG}/savannah-l936/?q=dolphin+tybee&${PARTNER}` },
    ],
    hotelAreas: [
      { name: "Historic District", description: "Walk to every major attraction. Charming inns, B&Bs, and boutique hotels in restored mansions.", priceRange: "$150 – $400/night" },
      { name: "Riverfront / River Street", description: "Waterfront hotels with views of the Savannah River. Steps from shops, restaurants, and nightlife.", priceRange: "$180 – $450/night" },
      { name: "Victorian District / Forsyth Park", description: "Quieter, tree-lined streets near Forsyth Park. Beautiful B&Bs with Southern charm.", priceRange: "$120 – $300/night" },
      { name: "Tybee Island (Beach)", description: "Savannah's beach town, 20 minutes east. Laid-back island vibe with oceanfront rentals.", priceRange: "$100 – $280/night" },
    ],
    faqs: [
      { question: "How many days do you need in Savannah?", answer: "2–3 days is perfect for exploring the Historic District, taking a trolley tour, enjoying the food scene, and visiting Bonaventure Cemetery. Add a day for Tybee Island if you want beach time." },
      { question: "Is Savannah walkable?", answer: "Extremely! The Historic District is flat, compact, and beautiful to explore on foot. Most major attractions are within a 1-mile radius. The trolley tour is great for getting an overview before walking." },
      { question: "What is Savannah known for?", answer: "Its 22 historic squares, Spanish moss-draped oak trees, Southern cuisine, ghost tours, and appearances in films like Forrest Gump and Midnight in the Garden of Good and Evil." },
      { question: "Can you drink in public in Savannah?", answer: "Yes! Savannah allows open containers in the Historic District (in plastic cups, up to 16oz). This makes it a uniquely relaxed city for strolling with a cocktail." },
    ],
    gygSearchLink: `${GYG}/savannah-l936/?${PARTNER}`,
    relatedSlugs: ["new-orleans", "key-west", "south-beach-miami"],
    relatedBlogSlugs: ["perfect-weekend-savannah-georgia"],
  },
];

export const getDestinationBySlug = (slug: string) =>
  destinations.find((d) => d.slug === slug);
