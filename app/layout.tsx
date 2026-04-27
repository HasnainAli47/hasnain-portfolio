import type { Metadata } from "next";
import Script from "next/script";
import ContactProvider from "@/components/ContactProvider";
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
    "Hasnain Ali is a Senior AI Engineer specialising in LLMs, RAG, KAG, LangGraph, and Agentic AI for healthcare, legal, real estate, and SaaS. Shipped a $2M+ ARR autonomous outreach system at Speculo and an end-to-end AI receptionist demo for Brightly Family Dental. Available for remote contracts and full-time roles.",
  applicationName: "Hasnain Ali Portfolio",
  manifest: "/manifest.webmanifest",
  keywords: [
    "AI Engineer", "Senior AI Engineer", "LLM Engineer", "Machine Learning Engineer",
    "RAG Engineer", "KAG", "Knowledge-Augmented Generation", "LangGraph developer",
    "Agentic AI", "Autonomous AI systems", "AI agent engineer", "AI for healthcare",
    "AI receptionist", "AI for dentists", "AI for legal", "AI for real estate",
    "AI for SaaS", "Python AI developer", "OpenAI developer", "Anthropic Claude",
    "Gemini AI", "NLP engineer", "LangChain developer", "Neo4j graph RAG",
    "LoRA fine-tuning", "QLoRA", "AI consultant", "AI contractor", "remote AI engineer",
    "GCP ML engineer", "AWS Bedrock", "AI automation", "voice AI", "Twilio AI",
    "ElevenLabs voice agent", "AI outreach", "AI SDR", "MCP server", "Model Context Protocol",
    "Hasnain Ali", "Pakistan AI engineer", "Dubai AI engineer", "hire AI engineer",
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
      "Senior AI Engineer. Shipped a $2M+ ARR autonomous outreach system at Speculo (117K emails plus 10K voice calls in hours), a 40 percent accuracy lift via Neo4j KAG on legal docs at Smart Advocate, and an end-to-end AI receptionist demo for Brightly Family Dental. Open to remote contracts and full-time roles.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hasnain Ali | Senior AI Engineer – LLMs, RAG, KAG & Agentic AI",
    description:
      "Shipped $2M+ ARR autonomous outreach at Speculo, 40 percent KAG accuracy lift on legal RAG, and a live AI receptionist demo for healthcare. Open to remote.",
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
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon",
  },
  other: {
    "theme-color": "#7c3aed",
    "color-scheme": "dark",
    "format-detection": "telephone=no",
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
      image: "https://hasnainali.vercel.app/opengraph-image",
      jobTitle: "Senior AI Engineer",
      description:
        "Senior AI Engineer specialising in LLMs, RAG, KAG, LangGraph, Agentic AI, and autonomous voice plus email systems for healthcare, legal, real estate, and SaaS companies.",
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
        "OpenAI API", "Anthropic Claude", "Gemini API", "Python", "FastAPI", "Django",
        "GCP", "AWS", "Docker", "Pinecone", "pgvector",
        "Model Context Protocol", "AI receptionist",
        "AI for healthcare", "AI for legal", "AI for real estate",
        "Autonomous AI pipelines", "Voice AI", "Twilio", "ElevenLabs",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Senior AI Engineer",
        occupationLocation: { "@type": "Country", name: "Remote" },
        skills:
          "LLMs, RAG, KAG, LangGraph, Python, GCP, Neo4j, PyTorch, OpenAI, Agentic AI, Voice AI, MCP",
      },
      makesOffer: [
        { "@type": "Offer", name: "AI Engineering Contract", availability: "https://schema.org/InStock" },
        { "@type": "Offer", name: "Full-Time AI Engineer Role", availability: "https://schema.org/InStock" },
      ],
      workExample: [
        { "@id": "https://hasnainali.vercel.app/#speculo" },
        { "@id": "https://hasnainali.vercel.app/#smart-advocate" },
        { "@id": "https://hasnainali.vercel.app/#brightly" },
        { "@id": "https://hasnainali.vercel.app/#convopilot" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://hasnainali.vercel.app/#website",
      url: "https://hasnainali.vercel.app",
      name: "Hasnain Ali – Senior AI Engineer Portfolio",
      description: "Portfolio of Hasnain Ali, Senior AI Engineer specialising in LLMs, RAG, KAG, and Agentic AI systems.",
      author: { "@id": "https://hasnainali.vercel.app/#person" },
      inLanguage: "en",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://hasnainali.vercel.app/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "CreativeWork",
      "@id": "https://hasnainali.vercel.app/#speculo",
      name: "Speculo.ai – Autonomous AI Outreach System",
      url: "https://speculo.ai",
      author: { "@id": "https://hasnainali.vercel.app/#person" },
      description:
        "End-to-end autonomous outreach engine: 117K personalised emails plus 10K AI voice calls in hours via Twilio, ElevenLabs, HubSpot. Contributed to over $2M ARR with zero humans in the loop.",
      keywords: "AI outreach, voice AI, Twilio, ElevenLabs, LangGraph, agentic AI, $2M ARR",
    },
    {
      "@type": "CreativeWork",
      "@id": "https://hasnainali.vercel.app/#smart-advocate",
      name: "Smart Advocate – Production Legal AI Platform",
      url: "https://smartadvocate.com",
      author: { "@id": "https://hasnainali.vercel.app/#person" },
      description:
        "Replaced standard RAG with Neo4j Knowledge-Augmented Generation (KAG) on 10K+ legal case files, lifting accuracy 40 percent. Multi-GPU LoRA finetuning, OCR, citation guards, and chronology generation for a US plaintiff firm.",
      keywords: "legal AI, KAG, Neo4j, RAG, LoRA, multi-GPU, citation guards",
    },
    {
      "@type": "CreativeWork",
      "@id": "https://hasnainali.vercel.app/#brightly",
      name: "Brightly Family Dental – AI Receptionist",
      url: "https://www.linkedin.com/posts/hasnainali3_aiautomation-voiceai-aiagents-ugcPost-7454493971289980929-ORrZ",
      author: { "@id": "https://hasnainali.vercel.app/#person" },
      description:
        "End-to-end AI receptionist for a dental practice handling inbound and outbound calls, SMS, email, and calendar invites. Routes unknown queries to human staff instead of hallucinating.",
      keywords: "AI receptionist, healthcare voice AI, Twilio, ElevenLabs, LangGraph, dental AI",
    },
    {
      "@type": "CreativeWork",
      "@id": "https://hasnainali.vercel.app/#convopilot",
      name: "ConvoPilot – Multi-Tenant RAG Framework",
      author: { "@id": "https://hasnainali.vercel.app/#person" },
      description:
        "Modular multi-tenant RAG platform with PII redaction, evaluation dashboards, and A/B testing across LLM providers and vector strategies.",
      keywords: "multi-tenant RAG, PII redaction, eval dashboards, Pinecone, LangGraph",
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
        <ContactProvider>{children}</ContactProvider>

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
