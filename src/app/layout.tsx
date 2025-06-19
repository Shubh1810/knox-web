import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue, Inter, Metal_Mania, Roboto_Condensed } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const metalMania = Metal_Mania({
  variable: "--font-metal-mania",
  subsets: ["latin"],
  weight: "400",
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Knox - Your Ultimate MacOS Assistive Touch",
  description: "Your Context-aware AI Assistant connected across all your apps, tools and data. The ultimate MacOS assistive touch experience.",
  keywords: ["Knox", "MacOS", "AI Assistant", "Assistive Touch", "Productivity", "Desktop App"],
  authors: [{ name: "Knox Team" }],
  creator: "Knox Team",
  publisher: "Knox Team",
  
  // Open Graph / Facebook
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://knox.ai", // Replace with your actual domain
    siteName: "Knox",
    title: "Knox - Your Ultimate MacOS Assistive Touch",
    description: "Your Context-aware AI Assistant connected across all your apps, tools and data.",
    images: [
      {
        url: "/knoxlogo.png",
        width: 1200,
        height: 630,
        alt: "Knox - MacOS Assistive Touch",
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Knox - Your Ultimate MacOS Assistive Touch",
    description: "Your Context-aware AI Assistant connected across all your apps, tools and data.",
    images: ["/knoxlogo.png"],
    creator: "@knox_ai", // Replace with your actual Twitter handle
  },
  
  // Additional meta tags
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
  
  // Favicon and icons
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  
  // Manifest
  manifest: "/site.webmanifest",
  
  // Theme color
  themeColor: "#130043",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${inter.variable} ${metalMania.variable} ${robotoCondensed.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
