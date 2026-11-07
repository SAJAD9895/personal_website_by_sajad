import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sajad K | Software Engineer, AI Educator & Business Automation",
  description:
    "Explore the professional portfolio of Sajad K, a Software Engineer, AI Educator and Forward Deployment Engineer focused on software development, practical AI education and business automation.",
  keywords: [
    "Sajad K",
    "Software Engineer",
    "AI Educator",
    "AI Trainer",
    "Forward Deployment Engineer",
    "Business Automation",
    "Flutter Developer",
    "Prompt Engineering",
    "Generative AI",
    "Kerala",
    "India",
  ],
  authors: [{ name: "Sajad K" }],
  creator: "Sajad K",
  openGraph: {
    type: "website",
    title: "Sajad K | Software Engineer, AI Educator & Business Automation",
    description:
      "Explore the professional portfolio of Sajad K, a Software Engineer, AI Educator and Forward Deployment Engineer focused on software development, practical AI education and business automation.",
    siteName: "Sajad K",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sajad K | Software Engineer, AI Educator & Business Automation",
    description:
      "Software Engineer, AI Educator and Forward Deployment Engineer focused on practical technology solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0b0b0f" />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
