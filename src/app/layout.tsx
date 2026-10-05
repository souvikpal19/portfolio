import type { Metadata } from "next";
import { Space_Grotesk, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Souvik Pal — AI/ML Engineer & Developer",
  description:
    "Portfolio of Souvik Pal — Fourth-year CS undergraduate at Swami Vivekananda University, AI/ML Engineer, and ICISE 2023 Published Researcher.",
  keywords: [
    "Souvik Pal",
    "AI ML Engineer",
    "Python Developer",
    "Swami Vivekananda University",
    "ICISE 2023",
    "NPTEL Java Elite",
  ],
  authors: [{ name: "Souvik Pal" }],
  openGraph: {
    title: "Souvik Pal — AI/ML Engineer & Developer",
    description: "Portfolio of Souvik Pal — AI/ML Engineer, Researcher, and Developer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full bg-[#FFFDF5] text-[#000000] font-sans antialiased selection:bg-[#FFD93D] selection:text-[#000000]">
        {children}
      </body>
    </html>
  );
}
