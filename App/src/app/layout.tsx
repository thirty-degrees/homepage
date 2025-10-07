import type { Metadata, Viewport } from "next";
import {
  Geist,
  Geist_Mono,
  Space_Mono,
  DM_Sans,
  DM_Serif_Display,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Thirty Degrees",
  description: "An overview of apps developed by Thirty Degrees",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
    other: [
      {
        rel: "icon",
        url: "/icon1.png",
      },
      {
        rel: "icon",
        url: "/icon0.svg",
        type: "image/svg+xml",
      },
    ],
  },
  appleWebApp: {
    title: "Thirty Degrees",
  },
};

export const viewport: Viewport = {
  themeColor: "#fcffd6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceMono.variable} ${dmSans.variable} ${dmSerifDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
