import type { Metadata } from "next";
import "./globals.css";
import { Inter, Lora, Pathway_Extreme } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const lora = Lora({ subsets: ["latin"], variable: "--font-serif" });
const body = Pathway_Extreme({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Abdullah Hayat's CV",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cv.abdullahhayat.com",
    siteName: "Abdullah Hayat's CV",
    title: "Abdullah Hayat's CV",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-zinc-50 text-base text-zinc-900 antialiased">
      <body
        className={cn(
          inter.variable,
          lora.variable,
          body.variable,
          "w-screen overflow-x-hidden font-sans selection:bg-zinc-900 selection:text-zinc-50"
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
