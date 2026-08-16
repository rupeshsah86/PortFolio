import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-rupesh.vercel.app"
  ),
  title: {
    default: "Rupesh Kumar — Building software that scales.",
    template: "%s | Rupesh Kumar",
  },
  description:
    "Full-stack software engineer & CS student. I build full-stack systems, ML pipelines, and scalable backend architectures.",
  keywords: [
    "Rupesh Kumar",
    "Full Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Machine Learning",
    "Portfolio",
  ],
  authors: [{ name: "Rupesh Kumar" }],
  creator: "Rupesh Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rupeshkumar.dev",
    title: "Rupesh Kumar — Building software that scales.",
    description:
      "Full-stack systems, ML pipelines, and scalable backend architectures. Open to engineering roles and internships.",
    siteName: "Rupesh Kumar Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rupesh Kumar — Building software that scales.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rupesh Kumar — Building software that scales.",
    description: "Full-stack systems, ML pipelines, and scalable backend architectures.",
    creator: "@RupeshshahB86",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rupesh Kumar",
  jobTitle: "Full-Stack Software Engineer",
  url: "https://rupeshkumar.dev",
  sameAs: [
    "https://github.com/rupeshshah86",
    "https://linkedin.com/in/rupeshshah86",
    "https://twitter.com/RupeshshahB86",
  ],
  knowsAbout: [
    "Software Architecture",
    "Full-Stack Web Development",
    "Next.js",
    "React",
    "Node.js",
    "Python",
    "Machine Learning",
    "PostgreSQL",
    "Docker",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300;0,14..32,400;0,14..32,500;0,14..32,600;0,14..32,700;0,14..32,800;0,14..32,900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
