"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const mainLinks = [
    { href: "/commercial/storefront-repair", label: "Storefront Repair/New" },
    { href: "/residential/window-repair", label: "Window Repair" },
    { href: "/residential/shower-doors", label: "Shower Doors" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/community", label: "Connect" },
  ];

  return (
    <nav className="bg-white shadow-subtle sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/companylogo-207w.webp"
              alt="Budget Glass Company Logo"
              width={155}
              height={60}
              className="h-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-semibold ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <span className="btn bg-gray-300 text-gray-600 cursor-not-allowed">
              Coming Soon
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-gray-600 mb-1.5" />
            <div className="w-6 h-0.5 bg-gray-600 mb-1.5" />
            <div className="w-6 h-0.5 bg-gray-600" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 font-semibold ${
                    pathname === link.href
                      ? "text-primary bg-neutral-lightest"
                      : "text-gray-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <span className="btn bg-gray-300 text-gray-600 cursor-not-allowed mx-4">
                Coming Soon
              </span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
