import Image from "next/image";

const Partners = () => {
  const partners = [
    { name: "Eigen Cloud", logo: "/images/eigen.svg" },
    { name: "1inch", logo: "/images/1inch.svg" },
    { name: "LayerZero", logo: "/images/layer-zero.svg" },
    { name: "LIDO", logo: "/images/lido.svg" },
    { name: "polygon", logo: "/images/polygon.svg" },
    { name: "MANTLE", logo: "/images/mantle.svg" },
    { name: "FUEL", logo: "/images/fuel.svg" },
    { name: "RISC ZERO", logo: "/images/risc.svg" },
    { name: "TOKEMAK", logo: "/images/tokmak.svg" },
    { name: "ZKsync", logo: "/images/zksync.svg" },
    { name: "NU", logo: "/images/nu.svg" },
    { name: "Ava Labs", logo: "/images/avalabs.svg" },
    { name: "TON", logo: "/images/ton.svg" },
    { name: "PancakeSwap", logo: "/images/pancake-swap.svg" },
    { name: "O USUAL", logo: "/images/usual.svg" },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-10">
        {/* Title with blue square */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 bg-blue-600"></div>
          <h2 className="text-2xl font-semibold text-[#242424] uppercase tracking-wide">
            TRUSTED BY
          </h2>
        </div>

        {/* Separator line */}
        <div className="w-full h-px bg-gray-300 mb-12"></div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full h-20 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain max-w-full max-h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;