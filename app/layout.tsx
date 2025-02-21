import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Programming with Maurya",
  description: "Empowering India through Technology, AI, and Innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Main Navigation */}
        <nav className="fixed w-full bg-white/80 backdrop-blur-sm border-b z-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <span className="font-bold text-xl">PWM Group</span>
                <span className="text-neutral-400 text-sm hidden sm:inline">|</span>
                <span className="text-neutral-600 text-sm hidden sm:inline">Programming with Maurya</span>
              </Link>

              {/* Navigation Items */}
              <div className="hidden md:flex items-center gap-8">
                <Link href="/" className="text-neutral-600 hover:text-black transition-colors">
                  Home
                </Link>
                <Link href="/journey" className="text-neutral-600 hover:text-black transition-colors">
                  Journey
                </Link>
                <div className="relative group">
                  <button className="text-neutral-600 hover:text-black transition-colors">
                    Solutions
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <Link href="https://sarkarisamadhan.in" className="block px-4 py-2 text-neutral-600 hover:text-black hover:bg-neutral-50">
                      Sarkari Samadhan
                    </Link>
                    <Link href="/aiution" className="block px-4 py-2 text-neutral-600 hover:text-black hover:bg-neutral-50">
                      Aiution
                    </Link>
                    <Link href="/goal-ninja" className="block px-4 py-2 text-neutral-600 hover:text-black hover:bg-neutral-50">
                      Goal Ninja
                    </Link>
                  </div>
                </div>
                <Link href="/contact" className="text-neutral-600 hover:text-black transition-colors">
                  Contact
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button className="md:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="pt-16">
          {children}
        </div>

        {/* Footer */}
        <footer className="border-t py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Programming with Maurya</h3>
                <p className="text-neutral-600">
                  Empowering India through Technology, AI, and Innovation
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Solutions</h4>
                <ul className="space-y-2">
                  <li><a href="https://sarkarisamadhan.in" className="text-neutral-600 hover:text-black">Sarkari Samadhan</a></li>
                  <li><Link href="/aiution" className="text-neutral-600 hover:text-black">Aiution</Link></li>
                  <li><Link href="/goal-ninja" className="text-neutral-600 hover:text-black">Goal Ninja</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-neutral-600 hover:text-black">About Us</Link></li>
                  <li><Link href="/journey" className="text-neutral-600 hover:text-black">Our Journey</Link></li>
                  <li><Link href="/contact" className="text-neutral-600 hover:text-black">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Connect</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-neutral-600 hover:text-black">LinkedIn</a></li>
                  <li><a href="#" className="text-neutral-600 hover:text-black">Twitter</a></li>
                  <li><a href="#" className="text-neutral-600 hover:text-black">GitHub</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t mt-8 pt-8 text-center text-neutral-600">
              <p>© 2024 Programming with Maurya. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
