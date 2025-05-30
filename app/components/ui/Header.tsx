"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/pwm_logo.svg";
import gsap from "gsap";
import clsx from "clsx";
import useScrollDirection from "@/app/hooks/useScrollDirection";
import { GoMail } from "react-icons/go";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "Community", path: "/community" },
  { name: "Journey", path: "/journey" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const direction = useScrollDirection();
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isCondensedVisible, setIsCondensedVisible] = useState(false);
  const [isFullNavVisible, setIsFullNavVisible] = useState(false);

  const active =
    navItems.find(
      (item) => pathname === item.path || pathname.startsWith(`${item.path}/`)
    ) || navItems[0];

  const condensedRef = useRef(null);
  const fullNavRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!condensedRef.current) return;

    if (direction === "down" && !isHovered && !isCondensedVisible) {
      gsap.to(condensedRef.current, {
        autoAlpha: 1,
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });
      setIsCondensedVisible(true);
    } else if ((direction === "up" || isHovered) && isCondensedVisible) {
      gsap.to(condensedRef.current, {
        autoAlpha: 0,
        x: 20,
        duration: 0.5,
        ease: "power3.in",
      });
      setIsCondensedVisible(false);
    }
  }, [direction, isHovered, isCondensedVisible]);

  useEffect(() => {
    if (!fullNavRef.current) return;

    if (isHovered && !isFullNavVisible) {
      gsap.to(fullNavRef.current, {
        autoAlpha: 1,
        x: 0,
        duration: 0.4,
        ease: "power2.out",
        pointerEvents: "auto",
      });
      setIsFullNavVisible(true);
    } else if (!isHovered && isFullNavVisible) {
      gsap.to(fullNavRef.current, {
        autoAlpha: 0,
        x: 20,
        duration: 0.4,
        ease: "power2.in",
        pointerEvents: "none",
      });
      setIsFullNavVisible(false);
    }
  }, [isHovered, isFullNavVisible]);

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <div className="hidden lg:block mb-6">
        {/* Full navbar only at top */}
        {!hasScrolled && (
          <div className="fixed top-4 left-0 right-0 z-40">
            <div className="container mx-auto px-8 py-4 flex items-center justify-between">
              {/* Logo */}
              <Link href="/" aria-label="Logo">
                <Image src={logo} alt="Logo" width={75} height={75} priority />
              </Link>

              {/* Nav links */}
              <div className="bg-white bg-opacity-90 backdrop-blur-md px-2 py-1 rounded-[10px] shadow-lg flex gap-4 border border-gray-200">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={clsx(
                      "uppercase font-semibold px-3 py-1 rounded-[10px] text-[1rem] transition-colors",
                      pathname === item.path ||
                        pathname.startsWith(`${item.path}/`)
                        ? "bg-blue-700 text-white"
                        : "text-blue-700 hover:bg-blue-200"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Condensed || Active text */}
        <div className="fixed top-4 left-0 right-0 z-40 pointer-events-none">
          <div className="container mx-auto px-8 py-4 flex justify-end">
            <div
              ref={condensedRef}
              className="opacity-0 pointer-events-auto"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-[10px] shadow-md cursor-pointer hover:bg-gray-200 transition-all">
                <span className="font-mono text-sm font-bold text-blue-700">
                  ||
                </span>
                <span className="uppercase font-bold text-[1rem] text-blue-700">
                  {active.name}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Hover-expanded full nav from condensed */}
        <div className="fixed top-4 left-0 right-0 z-40 pointer-events-none">
          <div className="container mx-auto px-4 flex justify-end">
            <nav
              ref={fullNavRef}
              className="opacity-0 pointer-events-none"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="bg-white bg-opacity-90 backdrop-blur-md mt-6 mx-8 px-2 py-1 rounded-[10px] shadow-lg flex gap-4 transition-all duration-300 border border-gray-200">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={clsx(
                      "uppercase font-semibold px-3 py-1 rounded-[10px] text-sm transition-colors",
                      pathname === item.path ||
                        pathname.startsWith(`${item.path}/`)
                        ? "bg-blue-700 text-white"
                        : "text-blue-700 hover:bg-blue-200"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* MOBILE NAVBAR */}
      <div className="lg:hidden fixed top-0 left-0 w-full z-50 px-4 py-3 flex items-center justify-between">
        {!hasScrolled && (
          <Link href="/">
            <Image src={logo} alt="Logo" width={70} height={70} className="" />
          </Link>
        )}

        <div className="flex items-center gap-4 bg-gray-300 px-4 py-2 rounded-lg shadow-md">
          <Link href="/contact">
            <GoMail className="text-2xl text-blue-700" />
          </Link>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <RxCross2 className="text-2xl text-blue-700" />
            ) : (
              <RxHamburgerMenu className="text-2xl text-blue-700" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-6 text-blue-700 text-xl font-semibold lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
