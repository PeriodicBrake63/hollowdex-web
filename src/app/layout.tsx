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
  metadataBase: new URL("https://hollowdex.periodicbrake.fr"),
  title: {
    default: "HollowDex | The Ultimate Hollow Knight Discord Bot",
    template: "%s | HollowDex",
  },
  description:
    "HollowDex is the ultimate Hollow Knight creature collection Discord bot. Catch, trade, and battle using dynamic trading cards featuring enemies, bosses, and entities from all across Hallownest. Add to your server today!",
  keywords: [
    "Hollowdex",
    "Hollow Knight",
    "Hollow Knight Discord Bot",
    "Hollow Knight Trading Cards",
    "Hollow Knight Bestiary",
    "Hallownest",
    "Discord Bot",
    "Game Bot",
    "Boss Guide",
    "Hollow Knight Enemy Guide",
  ],
  authors: [
    { name: "gamrston", url: "https://hollowdex.periodicbrake.fr/contact" },
  ],
  creator: "gamrston",
  publisher: "HollowDex",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hollowdex.periodicbrake.fr",
    siteName: "HollowDex",
    title: "HollowDex | The Ultimate Hollow Knight Discord Bot",
    description:
      "The ultimate Hollow Knight creature collection Discord bot. Catch, trade, and battle using dynamic trading cards featuring enemies from all across Hallownest.",
    images: [
      {
        url: "/hollowdex-logo.png",
        width: 512,
        height: 512,
        alt: "HollowDex Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HollowDex | The Ultimate Hollow Knight Discord Bot",
    description:
      "The ultimate Hollow Knight creature collection Discord bot. Catch, trade, and battle using dynamic trading cards!",
    creator: "@gamrston",
    images: ["/hollowdex-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://hollowdex.periodicbrake.fr",
  },
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
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="Pl7LKG2wfUCTKvsMr2wNLcku0pgp-ZNOaZNqZaO4mcM"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} font-sans antialiased selection:bg-primary/30 min-h-screen bg-background text-foreground flex flex-col`}
      >
        <div className="pointer-events-none fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(#2a2a2a_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
