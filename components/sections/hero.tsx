"use client";

import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="relative w-full h-[900px] overflow-hidden">

      {/* Background Video */}
      <video
        src="/videos/introduction.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      ></video>

      {/* Content Wrapper */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1440px] mx-auto w-full px-6 md:px-10">

          <div className="max-w-200">
            <h1 className="text-4xl md:text-6xl font-medium leading-tight">
              We Craft the Future of <br /> Web3 Cybersecurity
            </h1>

            <p className="mt-4 text-lg md:text-xl">
            Hexens is a premier cybersecurity solution provider, specializing in emerging technologies.
            </p>

            <p className="mt-4 text-lg md:text-xl">With over three years of flawless track record and more than two hundred security reviews completed, Hexens became a trusted partner to the most impactful companies in the industry.</p>

            <Button variant="primary" className="mt-8">
              Request a quote
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;