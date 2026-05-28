import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bourdon.ai"),
  title: "bourdon — recognition-first memory for AI agents",
  description:
    "Bourdon is a recognition-first AI memory runtime with a federated agentic memory shared across AI agents. Recognition first. Hydration second. Archive descent third.",
  openGraph: {
    title: "bourdon — recognition-first memory for AI agents",
    description:
      "Every memory framework optimizes for retrieval. Bourdon optimizes for the felt experience of memory — the moment-by-moment shape of the response.",
    url: "https://bourdon.ai",
    siteName: "bourdon",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
