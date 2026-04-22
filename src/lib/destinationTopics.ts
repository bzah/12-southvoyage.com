import { blogPosts } from "@/data/blogPosts";
import type { Destination } from "@/data/destinations";

export type DestinationTopic = "hotels" | "tours" | "things-to-do";

export const destinationTopics: DestinationTopic[] = ["hotels", "tours", "things-to-do"];

export const isDestinationTopic = (value: string): value is DestinationTopic =>
  destinationTopics.includes(value as DestinationTopic);

const destinationLabel = (destination: Destination) => destination.name.split(",")[0];

export const getDestinationTopicContent = (destination: Destination, topic: DestinationTopic) => {
  const label = destinationLabel(destination);
  const relatedBlogs = blogPosts.filter((post) => post.relatedDestinationSlug === destination.slug).slice(0, 3);

  if (topic === "hotels") {
    return {
      title: `${label} Hotels Guide | SouthVoyage`,
      description: `${label} hotels guide with the best areas to stay, price ranges, booking tips, and hotel picks for every travel style.`,
      keywords: `${destination.keywords}, ${label.toLowerCase()} hotels, best hotels in ${label.toLowerCase()}, where to stay in ${label.toLowerCase()}`,
      eyebrow: "Where to stay",
      heading: `Best hotels in ${label}`,
      intro: `Compare the best hotel areas in ${destination.name}, from budget-friendly stays to premium resorts, with quick guidance on location, price range, and who each area suits best.`,
      primarySectionTitle: `Top hotel areas in ${label}`,
      primaryItems: destination.hotelAreas.map((area) => ({
        title: area.name,
        body: area.description,
        accent: area.priceRange,
      })),
      secondarySectionTitle: `Booking tips for ${label}`,
      secondaryItems: destination.faqs.slice(0, 3).map((faq) => ({
        title: faq.question,
        body: faq.answer,
      })),
      relatedBlogs,
    };
  }

  if (topic === "tours") {
    return {
      title: `${label} Tours Guide | SouthVoyage`,
      description: `${label} tours guide with top-rated experiences, booking tips, activity ideas, and the best tours for first-time visitors.`,
      keywords: `${destination.keywords}, ${label.toLowerCase()} tours, best tours in ${label.toLowerCase()}, ${label.toLowerCase()} activities`,
      eyebrow: "Book experiences",
      heading: `Best tours in ${label}`,
      intro: `Discover the highest-value tours and activities in ${destination.name}, including popular sightseeing options, water activities, cultural experiences, and practical booking advice.`,
      primarySectionTitle: `Top-rated ${label} tours`,
      primaryItems: destination.topTours.map((tour) => ({
        title: tour.title,
        body: `${tour.duration} • ${tour.rating} rating from ${tour.reviews.toLocaleString()} travelers.`,
        accent: tour.price,
        link: tour.link,
      })),
      secondarySectionTitle: `Why travelers book tours in ${label}`,
      secondaryItems: destination.sections.slice(0, 3).map((section) => ({
        title: section.heading,
        body: section.content.replace(/\*\*/g, ""),
      })),
      relatedBlogs,
    };
  }

  return {
    title: `Things to Do in ${label} | SouthVoyage`,
    description: `Best things to do in ${label}, from must-see attractions and local favorites to tours, day plans, and travel tips.`,
    keywords: `${destination.keywords}, things to do in ${label.toLowerCase()}, what to do in ${label.toLowerCase()}, ${label.toLowerCase()} attractions`,
    eyebrow: "Plan your itinerary",
    heading: `Best things to do in ${label}`,
    intro: `Build your itinerary around the standout experiences in ${destination.name}, with a mix of iconic attractions, neighborhood highlights, and easy book-now activities.`,
    primarySectionTitle: `Top things to do in ${label}`,
    primaryItems: destination.sections.map((section) => ({
      title: section.heading,
      body: section.content.replace(/\*\*/g, ""),
    })),
    secondarySectionTitle: `Popular activities to book`,
    secondaryItems: destination.topTours.slice(0, 4).map((tour) => ({
      title: tour.title,
      body: `${tour.duration} • ${tour.price}`,
      link: tour.link,
    })),
    relatedBlogs,
  };
};
