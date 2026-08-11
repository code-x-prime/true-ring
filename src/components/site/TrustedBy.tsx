import Image from "next/image";

const partners = [
  { name: "Aditya Birla Housing Finance", logo: "/logos/aditya-birla-housing-finance.png" },
  { name: "Ambit Finvest", logo: "/logos/ambit-finvest.png" },
  { name: "AU Small Finance Bank", logo: "/logos/au-small-finance-bank.png" },
  { name: "Authum Finance", logo: "/logos/authum-finance.png" },
  { name: "Electronica Finance", logo: "/logos/electronica-finance.png" },
  { name: "Equitas Small Finance Bank", logo: "/logos/equitas-small-finance-bank.png" },
  { name: "ESAF Small Finance Bank", logo: "/logos/esaf-small-finance-bank.png" },
  { name: "HDFC Bank", logo: "/logos/hdfc-bank.png" },
  { name: "Hinduja Housing Finance", logo: "/logos/hinduja-housing-finance.png" },
  { name: "ICICI Bank", logo: "/logos/icici-bank.png" },
  { name: "IDBI Bank", logo: "/logos/idbi-bank.png" },
  { name: "IndusInd Bank", logo: "/logos/indusind-bank.png" },
  { name: "Kotak Mahindra Bank", logo: "/logos/kotak-mahindra-bank.png" },
  { name: "L&T Finance", logo: "/logos/lt-finance.jpeg" },
  { name: "Maxemo Capital", logo: "/logos/maxemo-capital.png" },
  { name: "Poonawalla Fincorp", logo: "/logos/poonawalla-fincorp.png" },
  { name: "SMFG India Credit", logo: "/logos/smfg-india-credit.png" },
  { name: "TVS Credit", logo: "/logos/tvs-credit.png" },
  { name: "Ujjivan Small Finance Bank", logo: "/logos/ujjivan-small-finance-bank.png" },
  { name: "YES BANK", logo: "/logos/yes-bank.png" },
];

export function TrustedBy() {
  return (
    <section className="bg-background relative z-10 py-8 px-6">
      <div className="mx-auto max-w-7xl rounded-3xl border border-hairline/80 bg-mist/60 p-8 sm:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 items-center">

          {/* Left Panel: Text Context */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-ink mb-2">
              Our Partnerships
            </h3>
            <p className="text-xs sm:text-sm text-graphite leading-relaxed mb-3">
              Dynamic Teams, Trusted Partnerships, Lasting Impact. Powering high-growth sales and support teams globally.
            </p>
            <p className="text-[11px] text-graphite leading-relaxed">
              Truering is a product of Brighto Credit Information Private Limited.
              <br />
              © 2026 Brighto Credit Information Private Limited. All Rights Reserved.
            </p>
          </div>

          {/* Right Panel: Partner Logo Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="bg-white dark:bg-zinc-950 border border-hairline/60 rounded-2xl p-3 flex items-center justify-center h-16 sm:h-20 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] hover:shadow-md hover:border-truering-orange/30 transition-all duration-300"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={40}
                  className="max-h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
