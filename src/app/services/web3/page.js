import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import ServiceHero from "@/app/components/ServiceHero";

const web3Services = [
  {
    title: "Web 3.0 Development",
    body: "We empower enterprises and startups to embrace the decentralized internet with next-generation Web 3.0 development services. From architecture to deployment, our services integrate blockchain, smart contracts, and tokenized ecosystems to deliver secure, transparent, and user-centric platforms.",
    variant: "dark",
  },
  {
    title: "dApp Development",
    body: "We design and develop decentralized applications (dApps) that operate autonomously on blockchain networks. We build dApps with intuitive interfaces and solid backend logic, offering end-users complete transparency, data ownership, and unmatched security, all while maintaining optimal performance and scalability.",
    variant: "light",
  },
  {
    title: "DeFi Development",
    body: "We create decentralized finance (DeFi) platforms that redefine how users interact with financial systems. Our expertise covers lending protocols, decentralized exchanges, liquidity pools, and staking platforms, enabling users to transact, invest, and earn with full control and zero intermediaries.",
    variant: "dark",
  },
  {
    title: "Smart Contract Development",
    body: "Our smart contract development services focus on precision, efficiency, and security. We write, test, and deploy smart contracts for Ethereum, Polygon, Solana, and other blockchain ecosystems, enabling trustless automation for complex business processes, from token issuance to governance mechanisms.",
    variant: "light",
  },
  {
    title: "NFT Development",
    body: "We build custom NFT platforms that unlock new digital ownership experiences, from digital art and collectibles to real-world asset tokenization. Our solutions are secure, interoperable, and designed to deliver rich, interactive experiences for creators, collectors, and marketplaces alike.",
    variant: "dark",
  },
  {
    title: "DAO Development",
    body: "We design and implement Decentralized Autonomous Organizations (DAOs) that enable community-driven governance and decision-making. Our frameworks facilitate transparent voting systems, automated treasury management, and protocol upgrades, ensuring your ecosystem evolves collaboratively and securely.",
    variant: "light",
  },
];

export default function Web3() {
  return (
    <main>
      <Navbar />
      <ServiceHero
        bgVideo={{
          src: "/videos/web-3.mp4",
          poster: "/videos/web-3.jpg",
        }}
        rightImage="/images/web-3.png"
        rightImgMobile="/images/web-3.png"
        eyebrow="Web 3.0"
        title={
          "Decentralized by Design. Powered by Blockchain. Future-Ready  Solutions."
        }
        description={
          "Transforming industries with blockchain-powered systems designed for tomorrow’s challenges."
        }
        offsetForNavbar
      />
      <section className="px-4 lg:px-20 pt-12 md:py-8 lg:mt-[-240px]">
        <h2 className="text-3xl md:text-[56px] font-bold tracking-tight">
          <span className="text-black">Our Web 3.0</span>{" "}
          <span className="text-[#8e8e8e]">Services</span>
        </h2>
        <div className="mt-8 grid gap-6 lg:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {web3Services.map((s) => {
            const dark = s.variant === "dark";

            return (
              <article
                key={s.title}
                className={[
                  "rounded-2xl p-6 md:px-5 md:py-15 h-full",
                  dark
                    ? "bg-black text-white shadow-[0_8px_28px_rgba(0,0,0,0.18)] ring-2 ring-black"
                    : "bg-white text-black ring-2 ring-black",
                ].join(" ")}
              >
                <h3
                  className={[
                    "text-xl md:text-[32px] font-semibold leading-snug",
                    dark ? "text-white" : "text-black",
                  ].join(" ")}
                >
                  {s.title}
                </h3>
                <p
                  className={[
                    "mt-3 text-base md:text-lg leading-relaxed",
                    dark ? "text-white" : "text-black",
                  ].join(" ")}
                >
                  {s.body}
                </p>
              </article>
            );
          })}
        </div>
      </section>
      <ContactSection service="Web 3.0" />
      <Footer />
    </main>
  );
}
