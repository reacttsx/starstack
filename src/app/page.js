import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import WhatWeDo from "./components/WhatWeDo";
import Image from "next/image";
import { CgArrowLongRight } from "react-icons/cg";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const stories = [
  {
    title: "Empowering E-Commerce",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard",
    img: "/images/success-1.png",
  },
  {
    title: "Empowering E-Commerce",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard",
    img: "/images/success-2.png",
  },
  {
    title: "Empowering E-Commerce",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard",
    img: "/images/success-3.png",
  },
  {
    title: "Empowering E-Commerce",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard",
    img: "/images/success-4.png",
  },
  {
    title: "Empowering E-Commerce",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard",
    img: "/images/success-5.png",
  },
  {
    title: "Empowering E-Commerce",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard",
    img: "/images/success-6.png",
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
          <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {stories.map((story, i) => (
              <article key={i} className="group">
                <div className="rounded-lg overflow-hidden shadow-lg transform transition duration-300 group-hover:-translate-y-1">
                  <div className="relative h-56">
                    <Image
                      src={story.img}
                      alt={story.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-5 bg-[#111]">
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">
                      {story.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-300 line-clamp-3">
                      {story.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <button className="flex items-center gap-3 px-8 py-3 border border-white rounded-full text-base md:text-lg font-semibold hover:bg-white hover:text-black transition hover:cursor-pointer">
              View More
              <CgArrowLongRight size={35} />
            </button>
          </div>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </main>
  );
}
