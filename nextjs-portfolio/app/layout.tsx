import type { Metadata } from "next";
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
    "3rd-year CS Engineering student at Sri Eshwar College of Engineering. I build full-stack systems, ML pipelines, and scalable backend architectures. Open to internships and engineering roles.",
  keywords: [
    "Rupesh Kumar",
    "Full Stack Developer",
    "CS Student",
    "React",
    "Node.js",
    "Python",
    "Software Engineer",
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
      "3rd-year CS student building full-stack systems, ML pipelines, and scalable architectures. Open to internships.",
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
    description: "3rd-year CS student building full-stack systems and scalable architectures.",
    creator: "@RupeshshahB86",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300;0,14..32,400;0,14..32,500;0,14..32,600;0,14..32,700;0,14..32,800;0,14..32,900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
