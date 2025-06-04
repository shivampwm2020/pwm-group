import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaLinkedinIn, FaGithub, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import SlideIn from "./SlideIn";

const socialLinks = [
  {
    href: "https://x.com/_shivammaurya__",
    label: "X",
    icon: FaSquareXTwitter,
  },
  {
    href: "https://www.linkedin.com/company/programming-with-maurya/",
    label: "LinkedIn",
    icon: FaLinkedinIn,
  },
  {
    href: "https://www.youtube.com/@ProgrammingwithMaurya21",
    label: "YouTube",
    icon: FaYoutube,
  },
];

export default function Footer() {
  return (
    <footer className="bg-white ">
      <SlideIn>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-gray-700">
            {/* Logo & Description */}
            <div>
              <div className="flex flex-col items-start gap-2 mb-4">
                <Image
                  src="/pwm_logo.svg"
                  alt="PWM Logo"
                  width={85}
                  height={85}
                />
              </div>
              <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
                Empowering enterprises with cutting-edge technology solutions,
                driving growth and innovation.
              </p>

              {/* Social Icons */}
              <div className="mt-4 flex gap-4">
                {socialLinks.map(({ href, label, icon: Icon }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-700 transition"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-widest mb-4">
                Products
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/products/explaingithub"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    ExplainGitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/repoflicks"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    RepoFlicks
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/sarkarisamadhan"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    SarkariSamadhan
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services & Community */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-widest mb-4">
                Services & Community
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/services/aiution"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    AIution
                  </Link>
                </li>
                <li>
                  <Link
                    href="/community/production-gurus"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    The Production Gurus
                  </Link>
                </li>
                <li>
                  <Link
                    href="/journey"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    Our Journey
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Info */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-widest mb-4">
                Company
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <Link
                    href="/journey"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    Our Journey
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="pt-4 pb-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500 font-mono">
              © 2020–2025 PWM Group. All rights reserved. MSME Certified (Indian
              Government) – UDYAM-UP-75-0023553
            </p>
          </div>
        </div>
      </SlideIn>
    </footer>
  );
}
