import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HollowDex - Home",
  description: "HollowDex web platform",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="google-site-verification" content="Pl7LKG2wfUCTKvsMr2wNLcku0pgp-ZNOaZNqZaO4mcM" />
      </head>
      <body
        className={`${spaceGrotesk.variable} font-sans antialiased selection:bg-primary/30 min-h-screen bg-background text-foreground flex flex-col`}
      >
        <div className="pointer-events-none fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(#2a2a2a_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
