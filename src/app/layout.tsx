import type { Metadata } from "next";
import { Cinzel, Sora } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "600"],
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Bayes | Professional IT Services",
  description:
    "Bayes delivers professional IT services across high-performance web pages, system integrations, and APIs.",
  openGraph: {
    title: "Bayes | Professional IT Services",
    description:
      "Professional IT services across high-performance web pages, system integrations, and APIs.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bayes | Professional IT Services",
    description:
      "Professional IT services across high-performance web pages, system integrations, and APIs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${sora.variable} ${cinzel.variable}`}>
        {children}
      </body>
    </html>
  );
}
