import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IndustryPortfolio from "../components/IndustryPortfolio";
import { CgArrowLongRight } from "react-icons/cg";
import OurClients from "../components/OurClients";

export const metadata = {
  title: "Starstack Portfolio | Case Studies in Digital & AI Consulting",
  description:
    "Explore Starstack's portfolio of software engineering, digital consulting, and AI solutions. Real projects showcasing our expertise and client success.",
};

const data = [
  {
    id: 1,
    title: "Empowering Solar Energy Company",
    blurb: "Solar web portal with CMR-integrated Quote system",
    image: "/images/portfolio1.png",
    categories: ["Renewable Energy"],
    link: "/case-study/urjamithra",
  },
  {
    id: 2,
    title: "Powering Fintech Trust",
    blurb: "KYC Automation, Escrow Payments & Instant Credit Scoring",
    image: "/images/portfolio2.png",
    categories: ["Banking & Insurance"],
    link: "/case-study/veriffhome",
  },
];

export default function Portfolio() {
  return (
    <main className="bg-white text-black">
      <Navbar />
      <HeroImage
        imageSrc="/images/portfolio.png"
        imageSrcMob="/images/portfolio-mob.png"
        imageAlt="Explore how we engineer impact across industries."
        eyebrow="Portfolio"
        title={"Explore how we\nengineer impact\nacross industries."}
        description="Backed by strategy and built to scale, our solutions don’t just solve problems they shape industries."
        align="left"
      />
      <section className="px-4 lg:px-20 py-10">
        <IndustryPortfolio items={data} />
        <button className="flex items-center gap-3 px-8 py-2 border border-black rounded-full text-base md:text-lg font-semibold hover:bg-black hover:text-white transition hover:cursor-pointer mx-auto mt-10">
          View More
          <CgArrowLongRight size={35} />
        </button>
        <div className="mt-20 mb-10">
          <OurClients />
        </div>
      </section>
      <Footer />
    </main>
  );
}
