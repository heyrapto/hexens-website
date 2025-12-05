"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/contants";
import { Button } from "../ui/button";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center h-[7vh]">
        <Image src="/images/logo.svg" width={80} height={80} alt="Logo" />

        <div className="flex gap-5 items-center">
          <ul className="flex gap-6">
            {navItems.map((n, i) => (
              <li key={i} className="inline-flex items-center gap-2 cursor-pointer">
                <a href="">{n.title}</a>
                {n.dropdownItems && (
                    <FaChevronDown className="text-sm text-[#242424] font-thin" />
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