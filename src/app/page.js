/* eslint-disable @next/next/no-img-element */
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import WhatWeDo from "./components/WhatWeDo";
import Image from "next/image";
import { CgArrowLongRight } from "react-icons/cg";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Link from "next/link";

const stories = [
  {
    title: "Empowering Solar Energy Company",
    body: "Solar web portal with CMR-integrated Quote system",
    img: "/images/success-1.jpg",
    link: "/case-study/urjamithra",
  },
  {
    title: "Powering Fintech Trust",
    body: "KYC Automation, Escrow Payments & Instant Credit Scoring",
    img: "/images/success-2.png",
    link: "/case-study/veriffhome",
  },
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSlider />
      <WhatWeDo />
      <section className="relative bg-black text-white py-16 px-4 lg:px-20">
        <div className="absolute inset-0 pointer-events-none bg-[url('/images/success-bg.png')] bg-left-top bg-no-repeat" />
        <div className="relative z-10">
          <h2 className="text-center text-3xl md:text-[56px] font-extrabold mb-12">
            Success <span className="text-[#8e8e8e]">Stories</span>
          </h2>
          <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {stories.map((story, i) => (
              <Link
                key={i}
                href={story.link}
                className="group rounded-lg hover:cursor-pointer"
              >
                <div className="rounded-lg overflow-hidden shadow-lg transform transition duration-300 group-hover:-translate-y-1">
                  <img
                    src={story.img}
                    alt={story.title}
                    className="w-full group-hover:scale-105 transition duration-300 md:h-[360] 2xl:object-cover rounded-lg"
                  />
                  <div className="p-5">
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">
                      {story.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-300 line-clamp-3">
                      {story.body}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <Link
              href="/portfolio"
              className="flex items-center gap-3 px-8 py-3 border border-white rounded-full text-base md:text-lg font-semibold hover:bg-white hover:text-black transition hover:cursor-pointer"
            >
              View More
              <CgArrowLongRight size={35} />
            </Link>
          </div>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </main>
  );
}
