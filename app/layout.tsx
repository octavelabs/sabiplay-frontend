import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppQueryProvider } from "./lib/react-query/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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
    <html lang="en" className={body.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nata+Sans:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white font-body text-ink antialiased">
          <AppQueryProvider>
            {children}
            <ToastContainer />
          </AppQueryProvider>
        </body>
    </html>
  );
}
