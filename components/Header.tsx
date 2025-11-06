"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to determine if a link is active
  const isActive = (path: string) => {
    return pathname === path;
  };

  // Function to get the navigation link styles based on active state
  const getLinkStyles = (path: string) => {
    const baseStyles = scrolled ? "text-black" : "text-white";
    const hoverStyles = "hover:text-[#FF6B00] transition-colors";
    const activeStyles = isActive(path)
      ? "font-bold text-[#FF6B00] border-b-2 border-[#FF6B00]"
      : "";

    return `${baseStyles} ${hoverStyles} ${activeStyles}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-300 h-[80px] flex items-center ${
        scrolled ? "bg-white shadow-md" : "bg-black"
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={
                  scrolled ? "/logos/light_logo.png" : "/logos/dark_logo.png"
                }
                alt="RiteWat Energy Solutions"
                width={130}
                height={40}
                className="transition-all duration-300"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className={getLinkStyles("/")}>
              Home
            </Link>
            <Link href="/about-us" className={getLinkStyles("/about-us")}>
              About Us
            </Link>
            <Link href="/products" className={getLinkStyles("/products")}>
              Products
            </Link>
            <Link href="/contact" className={getLinkStyles("/contact")}>
              Contact
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a
              href="/contact"
              className="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-6 rounded-full transition-colors"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${
              scrolled ? "text-black" : "text-white"
            } focus:outline-none`}
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden absolute top-[80px] left-0 w-full ${
              scrolled ? "bg-white" : "bg-black"
            } py-4 border-t ${
              scrolled ? "border-gray-200" : "border-gray-800"
            }`}
          >
            <nav className="flex flex-col space-y-4 container mx-auto px-4">
              <Link
                href="/"
                className={getLinkStyles("/")}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className={getLinkStyles("/about-us")}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/products"
                className={getLinkStyles("/products")}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/contact"
                className={getLinkStyles("/contact")}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="/contact"
                className="bg-[#E17A3A] hover:bg-[#FF6B00] text-white font-bold py-2 px-6 rounded-full transition-colors inline-block"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
