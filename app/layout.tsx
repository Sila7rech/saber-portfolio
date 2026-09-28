import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import { LenisProvider } from "@/providers/lenis-provider";
import { ThemeProvider } from "@/providers/theme-provider";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saber-bradai.vercel.app"),
  title: {
    default: "Saber Bradai | Full Stack Developer",
    template: "%s | Saber Bradai",
  },
  description:
    "Premium portfolio of Saber Bradai, a Full Stack Developer focused on modern interfaces, resilient systems, and high-performance web experiences.",
  applicationName: "Saber Bradai Portfolio",
  openGraph: {
    type: "website",
    title: "Saber Bradai | Full Stack Developer",
    description:
      "Modern, dark-luxury portfolio with polished motion, premium spacing, and production-ready architecture.",
    url: "/",
    siteName: "Saber Bradai Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saber Bradai | Full Stack Developer",
    description:
      "Modern, dark-luxury portfolio with polished motion, premium spacing, and production-ready architecture.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background text-foreground" suppressHydrationWarning>
        <ThemeProvider>
          <LenisProvider>{children}</LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
