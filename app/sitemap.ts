import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://hasnainali.vercel.app", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://hasnainali.vercel.app/blog", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: "https://hasnainali.vercel.app/blog/kag-vs-rag", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://hasnainali.vercel.app/blog/ai-for-healthcare", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://hasnainali.vercel.app/blog/gcp-pubsub-ai-outreach", lastModified: new Date(), changeFrequency: "monthly", priority: 0.95 },
    { url: "https://hasnainali.vercel.app/blog/agentic-ai-systems", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];
}
