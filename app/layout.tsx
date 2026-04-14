import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hasnain Ali — Senior AI Engineer",
  description:
    "Senior AI Engineer specialising in LLMs, RAG & Agentic Systems. Built systems handling 117K+ automated interactions and generating $2M+ annual revenue. Available for remote contracts and full-time roles.",
  keywords: [
    "AI Engineer", "LLM", "RAG", "LangGraph", "Machine Learning", "Python",
    "Senior AI Engineer", "Agentic AI", "NLP", "KAG", "Neo4j",
  ],
  authors: [{ name: "Hasnain Ali", url: "https://www.linkedin.com/in/hasnainali3/" }],
  openGraph: {
    title: "Hasnain Ali — Senior AI Engineer",
    description: "Built systems handling 117K+ automated interactions → $2M+ ARR. LLMs · RAG · Agentic AI · Python · GCP.",
    url: "https://hasnainali.vercel.app",
    siteName: "Hasnain Ali",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hasnain Ali — Senior AI Engineer",
    description: "Built systems handling 117K+ automated interactions → $2M+ ARR.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-text antialiased">{children}</body>
    </html>
  );
}
