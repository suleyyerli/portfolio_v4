import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Espace from "@/components/Espace";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "suleyyerli",
  description: "Bienvenue sur mon portfolio",
  keywords:
    "développeur web, React, Next.js, TypeScript, portfolio, SLAM, BTS SIO, SIO, option SLAM",
  authors: [{ name: "Suleyman Suleyyerli" }],
  openGraph: {
    title: "Portfolio BTS SIO option SLAM",
    description: "Portfolio étudiant en BTS SIO option SLAM",
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head />
      <body className="antialiased font-geistSans bg-black">
        <div className="max-w-2xl mx-4 lg:mx-auto">
          <header className="header">
            <Header />
          </header>
          <Espace />
          <div className="max-w-8xl mx-auto px-4">{children}</div>
          <Espace />
          <Footer />
        </div>
      </body>
    </html>
  );
}
