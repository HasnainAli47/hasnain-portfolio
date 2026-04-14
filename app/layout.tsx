import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

/* ─── SEO ──────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://hasnainali.vercel.app"),
  title: {
    default: "Hasnain Ali | Senior AI Engineer – LLMs, RAG, KAG, Agentic AI",
    template: "%s | Hasnain Ali – AI Engineer",
  },
  description:
    "Hasnain Ali is a Senior AI Engineer specialising in LLMs, RAG, KAG, LangGraph, and Agentic AI systems for healthcare, legal, real estate, and SaaS. Built autonomous outreach systems generating $2M+ ARR. Available for remote contracts and full-time roles.",
  keywords: [
    "AI Engineer", "Senior AI Engineer", "LLM Engineer", "Machine Learning Engineer",
    "RAG Engineer", "KAG", "Knowledge-Augmented Generation", "LangGraph developer",
    "Agentic AI", "Autonomous AI systems", "AI for healthcare", "AI for legal",
    "AI for real estate", "AI for SaaS", "Python AI developer", "OpenAI developer",
    "Gemini AI", "NLP engineer", "LangChain developer", "Neo4j graph RAG",
    "LoRA fine-tuning", "AI consultant", "AI contractor", "remote AI engineer",
    "GCP ML engineer", "AI automation", "voice AI", "Twilio AI", "ElevenLabs",
    "AI outreach", "Hasnain Ali", "Pakistan AI engineer", "hire AI engineer",
  ],
  authors: [{ name: "Hasnain Ali", url: "https://www.linkedin.com/in/hasnainali3/" }],
  creator: "Hasnain Ali",
  publisher: "Hasnain Ali",
  openGraph: {
    type: "website",
    url: "https://hasnainali.vercel.app",
    siteName: "Hasnain Ali – Senior AI Engineer",
    title: "Hasnain Ali | Senior AI Engineer – LLMs, RAG, KAG & Agentic AI",
    description:
      "Built AI systems handling 117K+ automated interactions generating $2M+ ARR. Expert in LLMs, RAG/KAG, LangGraph, and autonomous pipelines for healthcare, legal, and real estate. Open to remote contracts and full-time roles.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hasnain Ali | Senior AI Engineer – LLMs, RAG, KAG & Agentic AI",
    description:
      "Built AI systems → $2M+ ARR. Expert in LLMs, RAG, KAG, LangGraph. Open to remote work.",
    creator: "@hasnainali",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: "https://hasnainali.vercel.app" },
  category: "technology",
  verification: {
    google: "cCCtJPAlfgyqMLfVUEEs2ooa9gs4638LLziBBaU_JDo",
  },
};

/* ─── JSON-LD structured data ──────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://hasnainali.vercel.app/#person",
      name: "Hasnain Ali",
      url: "https://hasnainali.vercel.app",
      image: "https://hasnainali.vercel.app/hasnain-ali.jpg",
      jobTitle: "Senior AI Engineer",
      description:
        "Senior AI Engineer specialising in LLMs, RAG, KAG, LangGraph, Agentic AI, and autonomous systems for healthcare, legal, real estate, and SaaS companies.",
      email: "codingwithhasnain@gmail.com",
      telephone: "+923135085477",
      address: { "@type": "PostalAddress", addressCountry: "PK", addressRegion: "Islamabad" },
      sameAs: [
        "https://www.linkedin.com/in/hasnainali3/",
        "https://github.com/HasnainAli47",
        "https://pypi.org/user/HasnainAli47/",
      ],
      knowsAbout: [
        "Large Language Models", "RAG", "Knowledge-Augmented Generation", "LangGraph",
        "Agentic AI", "LangChain", "Neo4j", "PyTorch", "LoRA", "QLoRA",
        "OpenAI API", "Gemini API", "Python", "FastAPI", "Django",
        "GCP", "AWS", "Docker", "Pinecone", "pgvector",
        "AI for healthcare", "AI for legal", "AI for real estate",
        "Autonomous AI pipelines", "Voice AI", "Twilio", "ElevenLabs",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Senior AI Engineer",
        occupationLocation: { "@type": "Country", name: "Remote" },
        skills:
          "LLMs, RAG, KAG, LangGraph, Python, GCP, Neo4j, PyTorch, OpenAI, Agentic AI",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://hasnainali.vercel.app/#website",
      url: "https://hasnainali.vercel.app",
      name: "Hasnain Ali – Senior AI Engineer Portfolio",
      description: "Portfolio of Hasnain Ali, Senior AI Engineer specialising in LLMs, RAG, KAG, and Agentic AI systems.",
      author: { "@id": "https://hasnainali.vercel.app/#person" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          background: "#05050f",
          color: "#eeeeff",
          fontFamily: "'Inter', system-ui, sans-serif",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        {children}

        {/* Google Analytics 4 */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{page_path:window.location.pathname});`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
