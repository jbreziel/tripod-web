import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tripodbv.nl"),
  title: {
    default: "Tripod BV — Hoogwaardige renovaties in Noord-Holland",
    template: "%s | Tripod BV",
  },
  description:
    "Kwaliteitsrenovaties voor huiseigenaren en expats in Haarlem, Amsterdam en Noord-Holland. Eigen team, transparante prijzen, vakwerk met 20 jaar ervaring.",
  authors: [{ name: "Tripod BV" }],
  creator: "Tripod BV",
  publisher: "Tripod BV",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
