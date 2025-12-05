"use client";

import Image from "next/image";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

const Solutions = () => {
  const networks = [
    { name: "ethereum", logo: "/images/polygon.svg" }, // Using polygon as placeholder - you may need to add ethereum logo
    { name: "Filecoin", logo: "/images/polygon.svg" }, // Placeholder
    { name: "BLAST", logo: "/images/polygon.svg" }, // Placeholder
    { name: "sei", logo: "/images/polygon.svg" }, // Placeholder
    { name: "zkSync", logo: "/images/zksync.svg" }
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-10">
        {/* Title with blue square */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 bg-blue-600"></div>
          <h2 className="text-2xl font-semibold text-[#242424] uppercase tracking-wide">
            OUR SOLUTIONS
          </h2>
        </div>

        {/* Separator line */}
        <div className="w-full h-px bg-gray-300 mb-12"></div>

        {/* Glider Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Glider Blueprint */}
            <Card
              title="GLIDER BLUEPRINT"
              figure={5}
              content={
                <div className="w-full h-full min-h-[400px] flex items-center justify-center">
                  <Image
                    src="/images/solutions/glider.svg"
                    alt="Glider Blueprint"
                    width={500}
                    height={400}
                    className="object-contain"
                  />
                </div>
              }
            />

            {/* Glider Content */}
            <div className="flex flex-col">
              <h3 className="text-4xl font-bold text-[#242424] mb-6">Glider</h3>
              <div className="space-y-4 text-[#242424] mb-8">
                <p>
                  Glider is a scalable technology for tagging and finding logic in smart contracts, 
                  ensuring access to relevant information.
                </p>
                <p>
                  It serves as a core data provider for Web3, enabling developers and security 
                  professionals to navigate complex smart contract ecosystems efficiently.
                </p>
                <p>
                  With Glider, you can discover, analyze, and understand smart contract 
                  relationships and dependencies across multiple blockchain networks.
                </p>
              </div>

              {/* Networks Protected */}
              <div className="border-t border-gray-300 pt-6 mb-6">
                <h4 className="text-sm font-semibold text-[#242424] mb-4 uppercase">
                  NETWORKS PROTECTED BY GLIDER
                </h4>
                <div className="flex flex-wrap gap-4 items-center">
                  {networks.map((network, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Image
                        src={network.logo}
                        alt={network.name}
                        width={40}
                        height={40}
                        className="object-contain opacity-60"
                      />
                      <span className="text-sm text-gray-600 lowercase">{network.name}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm font-semibold text-[#242424]">
                  $200M+ onchain assets already secured
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <Button variant="primary" className="w-auto px-6">
                  Launch IDE
                </Button>
                <Button variant="secondary" className="w-auto px-6 border border-[#242424]">
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Remedy Bug Bounty Section */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Remedy Content */}
            <div className="flex flex-col">
              <h3 className="text-4xl font-bold text-[#242424] mb-6">Remedy Bug Bounty</h3>
              <p className="text-[#242424] mb-6">
                The safest Bug Bounty platform in the space with more than{" "}
                <strong>$5,514,000</strong> rewards awaiting for hunters to collect.
              </p>

              <ul className="space-y-4 mb-6 text-[#242424]">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>
                    Highest-quality triage by dedicated in-house team of elite experts. No AI or any pseudo-processing.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>
                    Gated report filtering ensures you receive only valid reports.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>
                    Co-marketing activities planned together from the day 1.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>
                    Seamless integration with your Slack, JIRA and other corpo software.
                  </span>
                </li>
              </ul>

              <p className="text-[#242424] mb-6">
                The only platform powered by Engram, Zero-Knowledge Proof of Duplicates, which adds 
                an extra layer of protection and transparency.
              </p>

              {/* Buttons */}
              <div className="flex gap-4">
                <Button variant="primary" className="w-auto px-6">
                  List your program
                </Button>
                <Button variant="secondary" className="w-auto px-6 border border-[#242424]">
                  View all programs
                </Button>
              </div>
            </div>

            {/* Remedy Blueprint */}
            <Card
              title="BB BLUEPRINT"
              figure={6}
              content={
                <div className="w-full h-full min-h-[400px] flex items-center justify-center">
                  <Image
                    src="/images/solutions/blueprint.svg"
                    alt="Bug Bounty Blueprint"
                    width={500}
                    height={400}
                    className="object-contain"
                  />
                </div>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;