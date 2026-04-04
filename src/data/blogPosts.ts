import blogSouthBeach from "@/assets/blog-south-beach-hotels.jpg";
import blogSouthPadre from "@/assets/blog-south-padre-hotels.jpg";
import blogNewOrleans from "@/assets/blog-new-orleans-food.jpg";
import blogKeyWest from "@/assets/blog-key-west-activities.jpg";
import blogMiamiOceanfront from "@/assets/blog-miami-oceanfront.jpg";
import blogNolaRestaurants from "@/assets/blog-nola-restaurants.jpg";
import blogKeyWestSnorkeling from "@/assets/blog-key-west-snorkeling.jpg";
import blogSavannahWeekend from "@/assets/blog-savannah-weekend.jpg";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  metaDescription: string;
  keywords: string;
  relatedDestinationSlug?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "best-hotels-south-beach-miami",
    title: "Best Hotels in South Beach Miami 2026",
    excerpt: "From luxury oceanfront resorts to charming Art Deco boutique hotels, discover the top-rated places to stay in South Beach Miami for every budget.",
    image: blogSouthBeach,
    date: "April 2, 2026",
    readTime: "8 min read",
    category: "Hotels",
    metaDescription: "Discover the best hotels in South Beach Miami for 2026. Oceanfront resorts, boutique Art Deco hotels, and budget-friendly stays with reviews and booking tips.",
    keywords: "best hotels south beach miami, south beach hotels, oceanfront hotels south beach miami, south beach miami hotel, miami beach oceanfront hotels",
    relatedDestinationSlug: "south-beach-miami",
  },
  {
    slug: "miami-beach-oceanfront-hotels-guide",
    title: "Miami Beach Oceanfront Hotels: Complete Booking Guide",
    excerpt: "Everything you need to know about booking an oceanfront hotel in Miami Beach — best streets, room types, price seasons, and insider tips for ocean-view rooms.",
    image: blogMiamiOceanfront,
    date: "April 4, 2026",
    readTime: "10 min read",
    category: "Hotels",
    metaDescription: "Complete guide to Miami Beach oceanfront hotels. Compare Collins Avenue vs Ocean Drive, learn the best booking seasons, and find ocean-view rooms at every price point.",
    keywords: "miami beach oceanfront hotels, oceanfront hotels miami beach, miami beach hotels ocean view, collins avenue hotels miami, ocean drive hotels miami beach, beachfront hotels miami",
    relatedDestinationSlug: "south-beach-miami",
  },
  {
    slug: "best-restaurants-new-orleans-french-quarter",
    title: "12 Best Restaurants in the New Orleans French Quarter",
    excerpt: "A curated guide to the finest dining in the French Quarter — from legendary Creole institutions to hidden neighborhood gems serving unforgettable Cajun cuisine.",
    image: blogNolaRestaurants,
    date: "April 3, 2026",
    readTime: "11 min read",
    category: "Food & Dining",
    metaDescription: "Discover the 12 best restaurants in New Orleans French Quarter for 2026. Classic Creole cuisine, Cajun fine dining, romantic spots, and budget-friendly local favorites.",
    keywords: "best restaurants new orleans french quarter, french quarter restaurants, new orleans restaurants, where to eat french quarter, best food new orleans, cajun restaurants french quarter",
  },
  {
    slug: "key-west-snorkeling-best-time-guide",
    title: "Key West Snorkeling: Best Time, Best Spots & What to Expect",
    excerpt: "When should you snorkel in Key West for the clearest water? Which reef sites are best? Our complete guide covers seasons, tours, costs, and pro tips.",
    image: blogKeyWestSnorkeling,
    date: "April 1, 2026",
    readTime: "9 min read",
    category: "Activities",
    metaDescription: "The best time to snorkel in Key West, Florida. Seasonal guide to water clarity, reef conditions, top snorkeling spots, tour prices, and expert tips for beginners.",
    keywords: "key west snorkeling best time, key west snorkeling, best snorkeling key west, key west reef snorkeling, when to snorkel key west, key west snorkeling tours",
  },
  {
    slug: "how-to-choose-hotels-south-padre-island",
    title: "How to Choose Hotels Near South Padre Island",
    excerpt: "A complete guide to finding the perfect hotel on South Padre Island — from beachfront condos to family resorts, with tips on the best areas to stay.",
    image: blogSouthPadre,
    date: "March 28, 2026",
    readTime: "7 min read",
    category: "Hotels",
    metaDescription: "Learn how to choose the best hotels near South Padre Island. Beachfront condos, family resorts, and insider tips on the best areas and seasons to visit.",
    keywords: "south padre island hotels, hotels near south padre island, south padre island resorts, best hotels south padre island",
  },
  {
    slug: "top-food-tours-new-orleans",
    title: "Top 10 Food Tours in New Orleans You Can't Miss",
    excerpt: "From the French Quarter to the Garden District, explore the best food tours that showcase New Orleans' legendary Cajun and Creole cuisine.",
    image: blogNewOrleans,
    date: "March 20, 2026",
    readTime: "6 min read",
    category: "Tours",
    metaDescription: "The best food tours in New Orleans for 2026. Explore French Quarter restaurants, Cajun cooking classes, and Creole food walks with local guides.",
    keywords: "new orleans food tours, french quarter food tour, new orleans tours, cajun food tour new orleans",
  },
  {
    slug: "best-things-to-do-key-west",
    title: "15 Best Things to Do in Key West, Florida",
    excerpt: "Snorkeling coral reefs, sunset sailing, Hemingway's home, and the famous Duval Street — the ultimate Key West activity guide for 2026.",
    image: blogKeyWest,
    date: "March 15, 2026",
    readTime: "9 min read",
    category: "Activities",
    metaDescription: "Discover the 15 best things to do in Key West, Florida. Snorkeling, sunset cruises, historic sites, and water sports with booking tips and prices.",
    keywords: "things to do key west, key west activities, key west tours, key west snorkeling, best key west attractions",
  },
  {
    slug: "perfect-weekend-savannah-georgia",
    title: "The Perfect Weekend in Savannah, Georgia",
    excerpt: "How to spend 2–3 days in Savannah — a day-by-day itinerary covering trolley tours, historic squares, Southern cuisine, ghost walks, and Tybee Island.",
    image: blogSavannahWeekend,
    date: "March 10, 2026",
    readTime: "8 min read",
    category: "Travel Guide",
    metaDescription: "Plan the perfect weekend in Savannah, Georgia. Day-by-day itinerary with trolley tours, historic squares, best restaurants, ghost tours, and a Tybee Island day trip.",
    keywords: "weekend in savannah georgia, savannah itinerary, things to do savannah weekend, savannah travel guide, savannah georgia trip, savannah 2 day itinerary",
  },
];
