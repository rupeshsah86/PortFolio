import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://rupu-sah-portfolio.vercel.app"
  ),
  title: {
    default: "Rupesh Kumar — Full-Stack Engineer | Backend Systems | AI/ML",
    template: "%s | Rupesh Kumar",
  },
  description:
    "Full-Stack Engineer & Computer Science student at Sri Eshwar College of Engineering. Hands-on experience in backend systems, database engineering, open-source contributions, and applied AI/ML.",
  keywords: [
    "Rupesh Kumar",
    "Full Stack Engineer",
    "Backend Developer",
    "Software Engineer Intern",
    "Java",
    "Spring Boot",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Machine Learning",
    "PostgreSQL",
    "Portfolio",
  ],
  authors: [{ name: "Rupesh Kumar" }],
  creator: "Rupesh Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rupu-sah-portfolio.vercel.app",
    title: "Rupesh Kumar — Full-Stack Engineer | Backend Systems | AI/ML",
    description:
      "Full-Stack Engineer with hands-on experience in backend systems, database engineering, open-source contributions, and applied AI/ML. Seeking Software Engineering & Full-Stack Internships.",
    siteName: "Rupesh Kumar Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rupesh Kumar — Full-Stack Engineer | Backend Systems | AI/ML",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rupesh Kumar — Full-Stack Engineer | Backend Systems | AI/ML",
    description:
      "Full-Stack Engineer with hands-on experience in backend systems, database engineering, open-source contributions, and applied AI/ML.",
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
  url: "https://rupu-sah-portfolio.vercel.app",
  sameAs: [
    "https://github.com/rupeshsah86",
    "https://www.linkedin.com/in/rupesh-shah-a480b8324/",
    "https://x.com/RupeshshahB86",
  ],
  knowsAbout: [
    "Software Architecture",
    "Backend Systems",
    "Full-Stack Web Development",
    "Java",
    "Spring Boot",
    "Next.js",
    "React",
    "Node.js",
    "Python",
    "Machine Learning",
    "PostgreSQL",
    "MySQL",
    "Docker",
    "Open Source Software",
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
