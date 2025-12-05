"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/contants";
import { Button } from "../ui/button";
import Image from "next/image";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const getSolutionIcon = (title: string) => {
    if (title === "Glider") {
      return "G"; // You can replace this with an actual icon component
    }
    if (title === "Token Risks API") {
      return "📄"; // You can replace this with an actual icon component
    }
    return null;
  };

  const toggleMobileDropdown = (index: number) => {
    setMobileDropdownOpen(mobileDropdownOpen === index ? null : index);
  };

  return (
    <>
      <div
        className={`w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-white" : "bg-transparent"
        }`}
      >
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center h-[7vh] px-6 md:px-10">
          <Image src="/images/logo.svg" width={80} height={80} alt="Logo" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-5 items-center">
            <ul className="flex gap-6">
              {navItems.map((n, i) => (
                <li
                  key={i}
                  className="relative inline-flex items-center gap-2 cursor-pointer"
                  onMouseEnter={() => n.dropdownItems && setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <a href={n.href || "#"} className="text-[#242424] hover:text-gray-600 transition-colors">
                    {n.title}
                  </a>
                  {n.dropdownItems && (
                    <>
                      <FaChevronDown className="text-sm text-[#242424] font-thin" />
                      {hoveredIndex === i && (
                        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 min-w-[200px] py-2">
                          {n.dropdownItems.map((item, idx) => (
                            <a
                              key={idx}
                              href={item.href || "#"}
                              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors text-[#242424] cursor-pointer"
                            >
                              {getSolutionIcon(item.title) && (
                                <span className="text-sm">{getSolutionIcon(item.title)}</span>
                              )}
                              <span className="flex-1">{item.title}</span>
                              {item.href && (
                                <FiExternalLink className="text-xs text-gray-400" />
                              )}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ul>

            <Button variant="primary">Request a quote</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <Button variant="primary" className="hidden sm:inline-flex">
              Request a quote
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#242424] p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <HiMenu className="text-2xl" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white lg:hidden">
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-[#242424]">hexens</h2>
              <div className="flex items-center gap-4">
                <Button variant="primary" className="hidden sm:inline-flex">
                  Request a quote
                </Button>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#242424] p-2"
                  aria-label="Close menu"
                >
                  <FaTimes className="text-2xl" />
                </button>
              </div>
            </div>

            {/* Mobile Menu Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="space-y-0">
                {navItems.map((n, i) => (
                  <li key={i} className="border-b border-gray-200">
                    {n.dropdownItems ? (
                      <>
                        <button
                          onClick={() => toggleMobileDropdown(i)}
                          className="w-full flex items-center justify-between py-4 text-left text-[#242424] hover:text-gray-600 transition-colors"
                        >
                          <span>{n.title}</span>
                          <FaChevronDown
                            className={`text-sm transition-transform ${
                              mobileDropdownOpen === i ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {mobileDropdownOpen === i && (
                          <div className="pb-4 pl-4 space-y-2">
                            {n.dropdownItems.map((item, idx) => (
                              <a
                                key={idx}
                                href={item.href || "#"}
                                className="flex items-center gap-3 py-2 text-[#242424] hover:text-gray-600 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {getSolutionIcon(item.title) && (
                                  <span className="text-sm">{getSolutionIcon(item.title)}</span>
                                )}
                                <span className="flex-1">{item.title}</span>
                                {item.href && (
                                  <FiExternalLink className="text-xs text-gray-400" />
                                )}
                              </a>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <a
                        href={n.href || "#"}
                        className="block py-4 text-[#242424] hover:text-gray-600 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {n.title}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;