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
      return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14" fill="none" color="#242424"><path fill="currentColor" d="M1.94 8.864H.875V9.93H1.94V8.864ZM3.538 8.864H2.471V9.93h1.066V8.864ZM1.94 7.266H.875v1.066H1.94V7.266ZM3.538 7.266H2.471v1.066h1.066V7.266ZM1.94 5.668H.875v1.066H1.94V5.668ZM3.538 5.668H2.471v1.066h1.066V5.668ZM6.733 7.266H5.668v1.066h1.065V7.266ZM8.331 7.266H7.266v1.066H8.33V7.266ZM6.733 5.668H5.668v1.066h1.065V5.668ZM8.331 5.668H7.266v1.066H8.33V5.668ZM9.929 7.266H8.864v1.066h1.065V7.266ZM9.929 5.668H8.864v1.066h1.065V5.668ZM5.135 12.06H4.07v1.065h1.065V12.06ZM6.733 12.06H5.668v1.065h1.065V12.06ZM5.135 10.462H4.07v1.065h1.065v-1.065ZM6.733 10.462H5.668v1.065h1.065v-1.065ZM8.331 12.06H7.266v1.065H8.33V12.06ZM8.331 10.462H7.266v1.065H8.33v-1.065ZM5.135 2.473H4.07v1.065h1.065V2.473ZM3.538 2.473H2.471v1.065h1.066V2.473ZM6.733 2.473H5.668v1.065h1.065V2.473ZM5.135.875H4.07V1.94h1.065V.875ZM6.733.875H5.668V1.94h1.065V.875ZM8.331 2.473H7.266v1.065H8.33V2.473ZM8.324.875H7.266V1.94h1.058V.875ZM9.93 3.538V2.473H8.863v1.065h1.065ZM9.929 1.94V.875H8.864V1.94h1.065ZM11.527 2.473H10.46v1.065h1.066V2.473ZM11.527.875H10.46V1.94h1.066V.875ZM13.124.875H12.06V1.94h1.066V.875ZM11.527 12.06H10.46v1.065h1.066V12.06ZM13.124 12.06H12.06v1.065h1.066V12.06ZM11.527 10.462H10.46v1.065h1.066v-1.065ZM13.124 10.462H12.06v1.065h1.066v-1.065ZM11.527 8.864H10.46V9.93h1.066V8.864ZM13.124 8.864H12.06V9.93h1.066V8.864ZM11.527 7.266H10.46v1.066h1.066V7.266ZM13.124 7.266H12.06v1.066h1.066V7.266ZM11.527 5.668H10.46v1.066h1.066V5.668ZM13.124 5.668H12.06v1.066h1.066V5.668ZM1.94 4.07H.875v1.066H1.94V4.07ZM3.538 4.07H2.471v1.066h1.066V4.07Z"></path></svg>; 
    }
    if (title === "Token Risks API") {
      return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" color="#242424" viewBox="0 0 19 20"><path d="M6.45.67h-1.56v1.56h1.56V.67ZM8.89.67h-1.56v1.56h1.56V.67ZM11.33.67h-1.56v1.56h1.56V.67ZM13.78.67h-1.56v1.56h1.56V.67ZM4,3.11h-1.56v1.56h1.56v-1.56ZM6.45,3.11h-1.56v1.56h1.56v-1.56ZM8.89,3.11h-1.56v1.56h1.56v-1.56ZM11.33,3.11h-1.56v1.56h1.56v-1.56ZM13.78,3.11h-1.56v1.56h1.56v-1.56ZM16.22,3.11h-1.56v1.56h1.56v-1.56ZM1.56,5.55H0v1.56h1.56v-1.56ZM4,5.55h-1.56v1.56h1.56v-1.56ZM6.45,5.55h-1.56v1.56h1.56v-1.56ZM8.89,5.55h-1.56v1.56h1.56v-1.56ZM11.33,5.55h-1.56v1.56h1.56v-1.56ZM18.67,5.55h-1.56v1.56h1.56v-1.56ZM1.56,8H0v1.56h1.56v-1.56ZM4,8h-1.56v1.56h1.56v-1.56ZM6.45,8h-1.56v1.56h1.56v-1.56ZM8.89,8h-1.56v1.56h1.56v-1.56ZM18.67,8h-1.56v1.56h1.56v-1.56ZM1.56,10.44H0v1.56h1.56v-1.56ZM4,10.44h-1.56v1.56h1.56v-1.56ZM6.45,10.44h-1.56v1.56h1.56v-1.56ZM18.67,10.44h-1.56v1.56h1.56v-1.56ZM1.56,12.89H0v1.56h1.56v-1.56ZM4,12.89h-1.56v1.56h1.56v-1.56ZM18.67,12.89h-1.56v1.56h1.56v-1.56ZM1.56,15.33H0v1.56h1.56v-1.56ZM4,15.33h-1.56v1.56h1.56v-1.56ZM18.67,15.33h-1.56v1.56h1.56v-1.56ZM1.56,17.77H0v1.56h1.56v-1.56ZM4,17.77h-1.56v1.56h1.56v-1.56ZM6.45,17.77h-1.56v1.56h1.56v-1.56ZM8.89,17.77h-1.56v1.56h1.56v-1.56ZM11.33,17.77h-1.56v1.56h1.56v-1.56ZM13.78,17.77h-1.56v1.56h1.56v-1.56ZM16.22,17.77h-1.56v1.56h1.56v-1.56ZM18.67,17.77h-1.56v1.56h1.56v-1.56Z" fill="currentColor"></path></svg>; // You can replace this with an actual icon component
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
        <nav className="max-w-440 mx-auto flex justify-between items-center h-[7vh] px-6 md:px-10">
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