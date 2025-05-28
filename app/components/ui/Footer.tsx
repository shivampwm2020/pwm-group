import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-gray-700">
          {/* Logo & Description */}
          <div>
            <div className="flex flex-col items-start gap-2 mb-4">
              <Image
                src="/pwm_logo.svg"
                alt="PWM Logo"
                width={65}
                height={65}
              />
              <span className="font-bold text-xl text-gray-900 tracking-wide">
                PWM Group
              </span>
            </div>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              Empowering enterprises with cutting-edge technology solutions,
              driving growth and innovation.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition"
              >
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition"
              >
                <span className="sr-only">LinkedIn</span>
                <FaLinkedinIn className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition"
              >
                <span className="sr-only">GitHub</span>
                <FaGithub className="h-5 w-5" />
              </a>
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
        <div className="pt-6 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500 font-mono">
            © 2024 PWM Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
