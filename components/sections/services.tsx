import { Card } from "../ui/card";
import { 
  FaShieldAlt, 
  FaBug,
  FaBrain,
  FaCog
} from "react-icons/fa";
import { 
  SiBlockchaindotcom 
} from "react-icons/si";

const Services = () => {
  const services = [
    {
      title: "BLOCKCHAIN SECURITY",
      figure: 1,
      icon: <SiBlockchaindotcom className="w-6 h-6 text-white" />,
      heading: "Blockchain Security",
      items: [
        "Smart Contract Audit",
        "L1/L2 Security Review",
        "ZK, FHE, and Novel Cryptography Security",
        "Centralized Exchange Security",
        "Hardware & Software Wallet Audit"
      ]
    },
    {
      title: "SECURITY CONSULTANCY",
      figure: 2,
      icon: <div className="relative w-6 h-6"><FaShieldAlt className="w-6 h-6 text-white absolute" /><FaCog className="w-3 h-3 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" /></div>,
      heading: "Security Consultancy",
      items: [
        "System Architecture Review",
        "Internal & Certification Compliance",
        "DDoS Protection",
        "DevSecOps Consulting/Advisory",
        "Social Engineering Trainings and Tests"
      ]
    },
    {
      title: "APPLICATION AND NETWORK SECURITY",
      figure: 3,
      icon: <FaBug className="w-6 h-6 text-white" />,
      heading: "Application and Network Security",
      items: [
        "Penetration Testing",
        "Mobile Application Security",
        "Source Code Review",
        "Stress Testing",
        "Cloud Security Services"
      ]
    },
    {
      title: "AI/ML SECURITY SERVICES",
      figure: 4,
      icon: <FaBrain className="w-6 h-6 text-white" />,
      heading: "AI/ML Security Services",
      items: [
        "AI Agents Security Audits",
        "Source Code Review",
        "MLOps Pipeline Threat Analysis",
        "AI Red Teaming",
        "Adversarial ML Testing",
        "LLM Security Assessments"
      ]
    }
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-440 mx-auto w-full px-6 md:px-10">
        {/* Title with blue square */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 bg-blue-600"></div>
          <h2 className="text-2xl font-medium text-[#242424] uppercase tracking-wide">
            SERVICES
          </h2>
        </div>

        {/* Separator line */}
        <div className="w-full h-px bg-gray-300 mb-12"></div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              figure={service.figure}
              className="min-h-[400px]"
              content={
                <div className="flex flex-col items-start text-left">
                  <div className="mb-6 flex justify-center bg-black p-2">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#242424] mb-6">
                    {service.heading}
                  </h3>
                  <ul className="space-y-3 text-left w-full">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-[#242424]">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;