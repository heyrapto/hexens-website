import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { navItems } from "@/contants";

const Footer = () => {
  const solutions = [
    { name: "Glider", icon: "🔧" },
    { name: "Token Risks API", icon: "📄" },
    { name: "Remedy Bug Bounty", icon: "R" }
  ];

  return (
    <footer className="w-full bg-[#000000] text-white">
      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Left: Logo and Social Media */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white">hexens</h2>
            </div>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/hexens"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors"
                aria-label="LinkedIn"
              >
                <span className="text-xl">in</span>
              </a>
              <a
                href="https://twitter.com/hexens_io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors"
                aria-label="Twitter"
              >
                <FaXTwitter className="text-xl" />
              </a>
              <a
                href="https://github.com/hexens"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-400 transition-colors"
                aria-label="Other"
              >
                <span className="text-xl w-6 h-6 flex items-center justify-center border border-white rounded-full">
                  O
                </span>
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-medium text-gray-400 uppercase mb-4">
              COMPANY
            </h3>
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href || "#"}
                    className="text-white hover:text-gray-400 transition-colors text-sm"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-medium text-gray-400 uppercase mb-4">
              SOLUTIONS
            </h3>
            <ul className="space-y-2">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-xs">{solution.icon}</span>
                  <a
                    href="#"
                    className="text-white hover:text-gray-400 transition-colors text-sm"
                  >
                    {solution.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts Column */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-medium text-gray-400 uppercase mb-4">
              CONTACTS
            </h3>
            <div className="space-y-2 text-sm text-white">
              <div>
                <p className="font-medium mb-1">Address:</p>
                <p className="text-gray-300">
                  71-75 Shelton Street<br />
                  Covent Garden London<br />
                  WC2H 9JQ UNITED KINGDOM
                </p>
              </div>
              <div>
                <p className="font-medium mb-1">Phone:</p>
                <a
                  href="tel:+44-808-2711555"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +44-808-2711555
                </a>
              </div>
              <div>
                <p className="font-medium mb-1">Email:</p>
                <a
                  href="mailto:info@hexens.io"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@hexens.io
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © Copyright Hexens 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;