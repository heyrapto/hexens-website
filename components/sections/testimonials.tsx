"use client";

import { useState } from "react";
import Image from "next/image";

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  logo: string;
  companies?: Array<{ name: string; logo: string }>;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      quote:
        "Hexens' deep knowledge of software security and ZK attack surface gave the critical outside perspective to reach production readiness for our zero knowledge virtual machine and launch 1.0",
      author: "Kevin",
      title: "Head of Security",
      company: "RISC ZERO",
      logo: "/images/risc.svg",
    },
    {
      quote:
        "Hexens is a hidden gem. Their attention to detail is unmatched. We started working with them for a single project to test them out but loved them so much that we gave them two more projects before the first engagement even got completed. They actually care about security and customer experience.",
      author: "Mudit Gupta",
      title: "CTO",
      company: "polygon",
      logo: "/images/polygon.svg",
    },
    {
      quote:
        "The Lido DAO first approached Hexens when picking audit service providers for the Lido v2 upgrade – the most significant and complex yet. We were impressed with how the Hexens team provided a thorough code audit with meaningful findings while consistently meeting the ETAs. Many thanks to the team!",
      author: "Gregory",
      title: "",
      company: "LIDO",
      logo: "/images/lido.svg",
    },
    {
      quote:
        "Our experience with Hexens has been quite positive. One time, they went above and beyond the scope and found a clever out-of-scope remote code execution vulnerability. I highly recommend working with Hexens.",
      author: "Nanak Nihal",
      title: "Founder",
      company: "",
      logo: "",
      companies: [
        { name: "Holonym", logo: "/images/holonym.svg" },
        { name: "Silk", logo: "/images/silk.svg" },
      ],
    },
    {
      quote:
        "I'd like to express my gratitude to the Hexens team for keeping the strict timelines, the quality of work, and the support provided throughout the remediation process. Many thanks once again!",
      author: "Nikolaos Frestis",
      title: "Senior Project Manager",
      company: "c-Labs",
      logo: "/images/clabs.svg",
    },
    {
      quote:
        "Thank you, Hexens.io, for being professional, responsive, and delivering a high-quality audit.",
      author: "Burak Benligiray",
      title: "Core Technical Team Lead",
      company: "API3",
      logo: "/images/api3.svg",
    },
    {
      quote:
        "#Hexens is a security consulting company, providing a myriad of #DeFi projects with the best services by introducing a whole new approach to #cybersecurity solutions.",
      author: "Adam Adamov",
      title: "CBDO",
      company: "ALGEBRA LABS",
      logo: "/images/algebra.svg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = testimonials[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePageClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-10">
        {/* Title with blue square */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 bg-blue-600"></div>
          <h2 className="text-2xl font-medium text-[#242424] uppercase tracking-wide">
            TESTIMONIALS
          </h2>
        </div>

        {/* Separator line */}
        <div className="w-full h-px bg-gray-300 mb-12"></div>

        {/* Testimonial Content */}
        <div className="flex flex-col items-center text-center mb-2 min-h-[300px]">
          <p className="text-lg md:text-xl text-[#242424] max-w-4xl mb-8 leading-relaxed">
            {currentTestimonial.quote}
          </p>
 
          <div className="flex flex-col items-center">
            <p className="font-bold text-[#242424] text-lg mb-1">
              {currentTestimonial.author}
            </p>
            {currentTestimonial.title && (
              <p className="text-gray-600 text-sm mb-2">{currentTestimonial.title}</p>
            )}

            {/* Company Logo(s) */}
            {currentTestimonial.companies ? (
              <div className="flex items-center justify-center gap-4 mt-3">
                {currentTestimonial.companies.map((comp, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Image
                      src={comp.logo}
                      alt={comp.name}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            ) : currentTestimonial.logo ? (
              <div className="flex flex-col items-center mt-3">
                <Image
                  src={currentTestimonial.logo}
                  alt={currentTestimonial.company}
                  width={80}
                  height={80}
                  className="object-contain mb-1"
                />
              </div>
            ) : null}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePrevious}
            className="text-[#242424] hover:text-blue-600 transition-colors text-xl font-light cursor-pointer"
            aria-label="Previous testimonial"
          >
            [&lt;]
          </button>

          <div className="flex items-center gap-1">
            {testimonials.map((_, index) => (
              <span key={index} className="flex items-center">
                <button
                  onClick={() => handlePageClick(index)}
                  className={`text-lg font-light transition-colors cursor-pointer ${
                    index === currentIndex
                      ? "text-blue-600 font-medium"
                      : "text-gray-800 hover:text-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  {String(index + 1).padStart(2, "0")}
                </button>
                {index < testimonials.length - 1 && (
                  <span className="text-gray-800 mx-1.5">/</span>
                )}
              </span>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="text-[#242424] hover:text-blue-600 transition-colors text-xl font-light cursor-pointer"
            aria-label="Next testimonial"
          >
            [&gt;]
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;