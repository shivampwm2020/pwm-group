import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ViewTransitions } from "next-view-transitions";

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
    <ViewTransitions>
      <html lang="en" className="h-full scroll-smooth">
        <body
          className={`${inter.className} h-full antialiased bg-gradient-to-br from-blue-50 to-indigo-50 overflow-x-hidden m-0 p-0`}
        >
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />

          {/* Add Analytics */}
          <Analytics />
        </body>
      </html>
    </ViewTransitions>
  );
}
