import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "bourdon — cross-agent memory federation",
  description:
    "Federate memory across coding agents. One glossary, many runtimes. Local-first, BSL 1.1.",
  metadataBase: new URL("https://bourdon.ai"),
  openGraph: {
    title: "bourdon",
    description: "Cross-agent memory federation.",
    url: "https://bourdon.ai",
    siteName: "bourdon",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-zinc-100">
        {children}
      </body>
    </html>
  );
}
