"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "../ui/card";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "What is a smart contract audit?",
      answer: "A smart contract audit is a thorough review of your blockchain-based contract's code to identify vulnerabilities, inefficiencies, or security flaws. Hexens provides industry-leading **smart contract audit services** using both automated **Solidity audit tools** and manual analysis by expert auditors to ensure your project is secure before deployment."
    },
    {
      id: 2,
      question: "How can I secure my Web3 application from cyber threats?",
      answer: "Securing a Web3 application requires a multi-layered approach, including **smart contract vulnerability scanning, penetration testing for Web3**, and continuous monitoring. Hexens specializes in **Web3 cybersecurity services**, including **DevSecOps, social engineering training, DDOS protection**, and ongoing **security advisory** to protect your decentralized application against emerging threats."
    },
    {
      id: 3,
      question: "What are the top 5 security frameworks?",
      answer: "The top five security frameworks for blockchain and Web3 include:\n1. NIST Cybersecurity Framework\n2. OWASP Smart Contract Top 10\n3. ISO/IEC 27001\n4. MITRE ATT&CK for blockchain\n5. CIS Controls\n\nHexens integrates these **Web3 security frameworks** into its auditing and advisory process to provide robust, standards-compliant solutions."
    },
    {
      id: 4,
      question: "What is the Web3 framework?",
      answer: "The **Web3 framework** refers to the combination of decentralized technologies, smart contracts, and blockchain infrastructure that enable trustless, peer-to-peer applications. Security in this framework is critical - Hexens uses advanced **blockchain audit tools** and custom solutions like **Glider** and **Remedy** to detect and mitigate vulnerabilities early in development."
    },
    {
      id: 5,
      question: "What is Web3 penetration testing?",
      answer: "Web3 penetration testing is a comprehensive security assessment that simulates real-world attacks on your blockchain application, smart contracts, and decentralized infrastructure. Hexens conducts thorough **Web3 penetration testing** to identify vulnerabilities before malicious actors can exploit them."
    },
    {
      id: 6,
      question: "What's the best digital wallet to store NFTs securely?",
      answer: "The best digital wallet for storing NFTs securely depends on your specific needs. Hardware wallets like Ledger and Trezor offer the highest security for long-term storage, while software wallets like MetaMask provide convenience for active trading. Hexens recommends using hardware wallets for high-value NFT collections and provides **wallet security audits** to ensure your chosen solution meets security standards."
    },
    {
      id: 7,
      question: "What's the difference between a digital wallet and a crypto wallet?",
      answer: "While often used interchangeably, a digital wallet is a broader term that can refer to any electronic payment system, whereas a crypto wallet specifically stores cryptocurrency private keys and interacts with blockchain networks. Both require robust security measures, and Hexens offers **wallet security services** for both types."
    },
    {
      id: 8,
      question: "What services does Hexens offer for Web3 cybersecurity?",
      answer: "Hexens provides end-to-end **cybersecurity for DeFi projects**, including: Smart contract audits, Blockchain penetration testing, Security advisory, Bug bounty program setup (via **Remedy**), DevSecOps integration, Social engineering simulation, DDOS mitigation services. As a leading **blockchain security company**, Hexens ensures your Web3 project is secure from launch to scale."
    },
    {
      id: 9,
      question: "What's the best bug bounty platform?",
      answer: "**Remedy Bug Bounty** is the safest and most effective bug bounty platform in the Web3 space, powered by Engram (Zero-Knowledge Proof of Duplicates) for enhanced security and transparency. With over $5.5M in rewards and expert triage, Remedy ensures only valid, high-quality reports reach your team."
    },
    {
      id: 10,
      question: "How do I secure blockchain applications?",
      answer: "Securing blockchain applications requires a comprehensive approach: conduct regular **smart contract audits**, implement **penetration testing**, establish **DevSecOps practices**, use **security monitoring tools** like Glider, and participate in bug bounty programs. Hexens provides all these services to ensure your blockchain application is secure."
    },
    {
      id: 11,
      question: "What services does Hexens offer?",
      answer: "Hexens is a top-tier **blockchain security company** offering: Smart contract auditing, Web3 penetration testing, Security advisory, DevSecOps implementation, Custom tools like Glider and Remedy, Security training and simulation services. From early-stage audits to full-scale **Web3 audits** and hardening, Hexens helps you build with confidence."
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const formatAnswer = (answer: string) => {
    // Split by newlines first
    const lines = answer.split('\n').filter(line => line.trim());
    const hasNumberedList = lines.some(line => /^\d+\./.test(line.trim()));
    
    if (hasNumberedList) {
      return (
        <div className="text-left space-y-2">
          {lines.map((line, i) => {
            if (/^\d+\./.test(line.trim())) {
              // It's a numbered item - center it
              const boldParts = line.split(/(\*\*.*?\*\*)/g);
              return (
                <div key={i}>
                  {boldParts.map((boldPart, j) => {
                    if (boldPart.startsWith('**') && boldPart.endsWith('**')) {
                      return <strong key={j}>{boldPart.slice(2, -2)}</strong>;
                    }
                    return <span key={j}>{boldPart}</span>;
                  })}
                </div>
              );
            } else {
              // Regular text paragraph
              const boldParts = line.split(/(\*\*.*?\*\*)/g);
              return (
                <div key={i} className={i > 0 ? 'mt-4' : ''}>
                  {boldParts.map((boldPart, j) => {
                    if (boldPart.startsWith('**') && boldPart.endsWith('**')) {
                      return <strong key={j}>{boldPart.slice(2, -2)}</strong>;
                    }
                    return <span key={j}>{boldPart}</span>;
                  })}
                </div>
              );
            }
          })}
        </div>
      );
    }
    
    // Regular formatting with bold support
    const parts = answer.split(/(\*\*.*?\*\*)/g);
    return (
      <div className="text-left">
        {parts.map((part, i) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i}>{part.slice(2, -2)}</strong>;
          }
          return <span key={i}>{part}</span>;
        })}
      </div>
    );
  };

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-10">
        {/* Title with blue square */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 bg-blue-600"></div>
          <h2 className="text-2xl font-medium text-[#242424] uppercase tracking-wide">
            FAQ
          </h2>
        </div>

        {/* Separator line */}
        <div className="w-full h-px bg-gray-300 mb-12"></div>

        {/* FAQ Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: FAQ Graphic */}
          <Card
            title="42"
            figure={8}
            showPattern={false}
            className="md:h-[600px] h-[400px]"
            content={
              <div className="w-full h-full flex items-center justify-center p-6">
                <Image
                  src="/images/faq-image.webp"
                  alt="FAQ Graphic"
                  fill
                  className="object-contain"
                />
              </div>
            }
          />

          {/* Right: FAQ List */}
          <div className="flex flex-col md:max-h-[600px] md:overflow-y-auto">
            {faqs.map((faq, index) => (
              <div key={faq.id} className="border-b border-gray-300 last:border-b-0">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full py-4 flex items-start justify-between text-left cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500 font-medium">
                      [Q.{String(faq.id).padStart(2, '0')}]
                    </span>
                    <span className="text-[#242424] font-medium">
                      {faq.question}
                    </span>
                  </div>
                  <span className="text-[#242424] text-xl font-light ml-4">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="pb-4 pl-12 pr-4 text-left">
                    <div className="text-[#242424] leading-relaxed">
                      {formatAnswer(faq.answer)}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;