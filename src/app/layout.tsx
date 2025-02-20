import type { Metadata } from "next";
import { Geist, Geist_Mono, Abyssinica_SIL } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const abyssinicaSIL = Abyssinica_SIL({
  weight: "400",
  variable: "--font-abyssinica-sil",
  subsets: ["latin"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Portfolio of Nurio34",
  description:
    "I'm a passionate web developer crafting high-performance, user-friendly applications with modern technologies. Let's build something amazing together!",
  icons: {
    icon: "/meta/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Portfolio of Nurio34",
    description:
      "I'm a passionate web developer crafting high-performance, user-friendly applications with modern technologies. Let's build something amazing together!",
    url: "https://portfolio-nurio34s-projects.vercel.app",
    siteName: "Portfolio of Nurio34",
    images: [
      {
        url: "https://portfolio-nurio34s-projects.vercel.app/background-2.webp?v=1",
        alt: "Portfolio of Nurio34",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio of Nurio34",
    description:
      "I'm a passionate web developer crafting high-performance, user-friendly applications with modern technologies. Let's build something amazing together!",
    images: [
      "https://portfolio-nurio34s-projects.vercel.app/background-2.webp?v=1",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${abyssinicaSIL.variable} antialiased`}
      >
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
