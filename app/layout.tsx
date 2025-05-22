import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PWM Group",
  description: "Empowering India through Technology, AI, and Innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${inter.className} h-full antialiased bg-gradient-to-br from-blue-50 to-indigo-50 `}
      >
        {/* Main Navigation */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <Footer />

        {/* Add Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
