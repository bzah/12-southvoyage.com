import blogSouthBeach from "@/assets/blog-south-beach-hotels.jpg";
import blogSouthPadre from "@/assets/blog-south-padre-hotels.jpg";
import blogNewOrleans from "@/assets/blog-new-orleans-food.jpg";
import blogKeyWest from "@/assets/blog-key-west-activities.jpg";

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
];
