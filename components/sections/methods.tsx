"use client";

import Image from "next/image";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

const Methods = () => {
  const metrics = [
    {
      icon: "/images/methods/cobweb.svg",
      value: "$85 BLN USD+",
      description: "TOTAL NET ASSETS UNDER OUR PROTECTION",
      tagline: "We are on a great mission"
    },
    {
      icon: "/images/methods/magnet.svg",
      value: "91%",
      description: "CUSTOMER RETENTION",
      tagline: "Our customers stay with us"
    },
    {
      icon: "/images/methods/target.svg",
      value: "90%",
      description: "AUDIT REPORTS CONTAINS CRITICAL VULNERABILITIES",
      tagline: "We save industries"
    },
    {
      icon: "/images/methods/folder.svg",
      value: "130+",
      description: "PERFORMED AUDITS",
      tagline: "For the leading Web3 projects, such as Polygon, EigenLayer, Lido and others"
    }
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-10">
        {/* Title with blue square */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 bg-blue-600"></div>
          <h2 className="text-2xl font-semibold text-[#242424] uppercase tracking-wide">
            UNIQUE METHODOLOGY - EXCEPTIONAL RESULTS
          </h2>
        </div>

        {/* Separator line */}
        <div className="w-full h-px bg-gray-300 mb-12"></div>

        {/* Methodology Section */}
        <div className="mb-16">
            
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Methodology Content */}
            <div className="flex flex-col">
              <p className="text-sm text-gray-600 mb-4">[HEXENS METHODOLOGY FOR SMART CONTRACT AUDIT]</p>
              <p className="text-[#242424] mb-6">
                We run two dedicated security teams on every project, each staffed by multiple senior auditors. 
                This robust cross-checking mechanism ensures unparalleled thoroughness and quality.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-600"></div>
                  <span className="text-[#242424]">Two dedicated teams</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-600"></div>
                  <span className="text-[#242424]">Four+ senior security engineers</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-600"></div>
                  <span className="text-[#242424]">No parallel audits - exclusive focus</span>
                </li>
              </ul>
            </div>

            {/* Methodology Diagram */}
            <Card
              title="METHODOLOGY"
              figure={7}
              content={
                <div className="w-full h-full min-h-[300px] flex items-center justify-center p-8">
                  <Image
                    src="/images/methods/method.svg"
                    alt="Methodology Diagram"
                    width={500}
                    height={300}
                    className="object-contain"
                  />
                </div>
              }
            />
          </div>
        </div>

        {/* Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 p-6 flex flex-col items-center text-center"
            >
              <div className="mb-4 flex justify-center">
                <Image
                  src={metric.icon}
                  alt={metric.description}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <h3 className="text-3xl font-bold text-[#242424] mb-3">
                {metric.value}
              </h3>
              <p className="text-xs text-gray-600 mb-4 uppercase tracking-wide">
                {metric.description}
              </p>
              <p className="text-sm text-[#242424] italic">
                {metric.tagline}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-300">
          <p className="text-xl font-semibold text-[#242424]">
            Indisputable quality and unique approach to every case
          </p>
          <Button variant="primary" className="w-auto px-6">
            View reports
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Methods;