import { blogPosts, type BlogPost } from "@/data/blogPosts";
import { destinations, getDestinationBySlug, type Destination } from "@/data/destinations";

type RelatedContext = {
  pathname: string;
  keywords: string;
};

type RelatedResults = {
  relatedBlogs: BlogPost[];
  relatedDestinations: Destination[];
};

const STOP_WORDS = new Set([
  "a", "an", "and", "at", "best", "for", "from", "guide", "hotels", "hotel", "in", "is", "of", "on", "or", "the", "to", "travel", "trip", "with",
]);

const splitKeywords = (value: string) =>
  value
    .toLowerCase()
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);

const splitWords = (value: string) =>
  value
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .map((part) => part.trim())
    .filter((part) => part.length > 2 && !STOP_WORDS.has(part));

const keywordOverlapScore = (sourceKeywords: string, candidateKeywords: string) => {
  const sourcePhrases = splitKeywords(sourceKeywords);
  const candidatePhrases = splitKeywords(candidateKeywords);
  const phraseMatches = sourcePhrases.filter((phrase) => candidatePhrases.includes(phrase)).length;

  const sourceWords = new Set(splitWords(sourceKeywords));
  const candidateWords = new Set(splitWords(candidateKeywords));
  const wordMatches = [...sourceWords].filter((word) => candidateWords.has(word)).length;

  return phraseMatches * 4 + wordMatches;
};

const getPageContext = ({ pathname, keywords }: RelatedContext) => {
  const blogMatch = pathname.match(/^\/blog\/([^/]+)$/);
  if (blogMatch) {
    const blog = blogPosts.find((post) => post.slug === blogMatch[1]);
    return { type: "blog" as const, blog };
  }

  const destinationMatch = pathname.match(/^\/destinations\/([^/]+)$/);
  if (destinationMatch) {
    const destination = getDestinationBySlug(destinationMatch[1]);
    return { type: "destination" as const, destination };
  }

  return { type: "page" as const, keywords };
};

export const getRelatedContent = ({ pathname, keywords }: RelatedContext): RelatedResults => {
  const context = getPageContext({ pathname, keywords });

  const relatedDestinations = destinations
    .map((candidate) => {
      let score = keywordOverlapScore(keywords, `${candidate.keywords}, ${candidate.name}, ${candidate.tagline}`);

      if (context.type === "destination") {
        if (!context.destination || candidate.slug === context.destination.slug) return null;
        if (context.destination.relatedSlugs.includes(candidate.slug)) score += 10;
        if (candidate.relatedSlugs.includes(context.destination.slug)) score += 4;
        if (candidate.relatedBlogSlugs.some((slug) => context.destination.relatedBlogSlugs.includes(slug))) score += 2;
      }

      if (context.type === "blog") {
        if (!context.blog) return null;
        if (context.blog.relatedDestinationSlug === candidate.slug) score += 12;
        if (candidate.relatedBlogSlugs.includes(context.blog.slug)) score += 5;
      }

      return { candidate, score };
    })
    .filter((item): item is { candidate: Destination; score: number } => Boolean(item))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((item) => item.candidate);

  const relatedBlogs = blogPosts
    .map((candidate) => {
      let score = keywordOverlapScore(keywords, `${candidate.keywords}, ${candidate.title}, ${candidate.excerpt}, ${candidate.category}`);

      if (context.type === "blog") {
        if (!context.blog || candidate.slug === context.blog.slug) return null;
        if (candidate.relatedDestinationSlug && candidate.relatedDestinationSlug === context.blog.relatedDestinationSlug) score += 7;
        if (context.blog.relatedDestinationSlug && candidate.relatedDestinationSlug === context.blog.relatedDestinationSlug) score += 4;
      }

      if (context.type === "destination") {
        if (!context.destination) return null;
        if (candidate.relatedDestinationSlug === context.destination.slug) score += 12;
        if (context.destination.relatedBlogSlugs.includes(candidate.slug)) score += 6;
      }

      return { candidate, score };
    })
    .filter((item): item is { candidate: BlogPost; score: number } => Boolean(item))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((item) => item.candidate);

  return { relatedBlogs, relatedDestinations };
};