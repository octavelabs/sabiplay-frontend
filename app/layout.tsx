import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

/**
 * The Figma file uses two licensed fonts that aren't publicly distributable:
 *   - Display: "Heuvel Grotesk DEMO"
 *   - Body:    "Helmet Neue"
 * We map them to the closest free equivalents and expose CSS variables so the
 * originals are used automatically if they are ever installed locally.
 */
const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SabiPlay — Learn. Compete. Earn.",
  description:
    "Join live quiz battles, prove your brilliance, and earn cash for every victory.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-white font-body text-ink antialiased">{children}</body>
    </html>
  );
}
