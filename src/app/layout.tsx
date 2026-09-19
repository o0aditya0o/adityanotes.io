import type { Metadata } from "next";
import { JetBrains_Mono, Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-mono',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://adityanotes.io'),
  title: {
    default: "Aditya Notes — Work, Life, Books, & Projects",
    template: "%s | Aditya Notes",
  },
  description: "A minimal space for ideas, reflections, and experiments.",
  authors: [{ name: "Aditya" }],
  creator: "Aditya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adityanotes.io",
    siteName: "Aditya Notes",
    title: "Aditya Notes — Work, Life, Books, & Projects",
    description: "A minimal space for ideas, reflections, and experiments.",
    images: [
      {
        url: "/images/me.png",
        width: 800,
        height: 800,
        alt: "Aditya Notes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Notes — Work, Life, Books, & Projects",
    description: "A minimal space for ideas, reflections, and experiments.",
    images: ["/images/me.png"],
  },
};

import StarryBackground from "@/components/StarryBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} ${fraunces.variable} ${inter.variable}`}>
        <StarryBackground />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
