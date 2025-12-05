"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/contants";
import { Button } from "../ui/button";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getSolutionIcon = (title: string) => {
    if (title === "Glider") {
      return "G"; // You can replace this with an actual icon component
    }
    if (title === "Token Risks API") {
      return "📄"; // You can replace this with an actual icon component
    }
    return null;
  };

  return (
    <div
      className={`w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center h-[7vh] px-6 md:px-10">
        <Image src="/images/logo.svg" width={80} height={80} alt="Logo" />

        <div className="flex gap-5 items-center">
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
      </nav>
    </div>
  );
};

export default Navbar;