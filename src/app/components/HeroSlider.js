"use client";

import Slider from "react-slick";
import { FiArrowUpRight } from "react-icons/fi";
import { useRouter } from "next/navigation";

const slides = [
  {
    id: 1,
    video: "/videos/slider-home-1.mp4",
    heading: `Immersive\nExperience Design`,
    subheading:
      "Craft intuitive, elegant interfaces that move users, from first click to lasting engagement.",
  },
  {
    id: 2,
    video: "/videos/slider-home-2.mp4",
    heading: `Agile Product\nEngineering Teams`,
    subheading:
      "Build and scale modern digital products with lean, cross-functional teams that deliver real value, fast.",
  },
  {
    id: 3,
    video: "/videos/slider-home-3.mp4",
    heading: `Intelligent Solutions\nwith AI at the Core`,
    subheading: `Infuse intelligence into your products, automate, optimise,\nand innovate with explainable AI.`,
  },
  {
    id: 4,
    video: "/videos/slider-home-4.mp4",
    heading: `Future-Ready Web\n& Mobile Platforms`,
    subheading:
      "Build secure, scalable apps that perform flawlessly across devices, and grow with your vision.",
  },
];

export default function HeroSlider() {
  const router = useRouter();

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 7000,
    fade: true,
    pauseOnHover: false,
    appendDots: (dots) => (
      <div className="absolute bottom-10 left-10 z-20">
        <ul className="flex gap-1">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-10 md:w-16 h-1 rounded bg-[#535353] transition-all duration-300" />
    ),
  };

  return (
    <section className="relative h-[85vh] text-white overflow-hidden">
      <Slider {...settings} className="h-[85vh]">
        {slides.map((slide) => (
          <div key={slide.id} className="relative h-[85vh] w-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-[-2]"
            >
              <source src={slide.video} type="video/mp4" />
            </video>
            <div
              className="absolute inset-0 z-[-1]"
              style={{
                background:
                  "linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.685609) 53.58%, #000000 100%)",
              }}
            />
            <div className="flex items-center justify-start h-full px-6 lg:px-20">
              <div className="max-w-2xl">
                <h1 className="text-3xl md:text-[56px] font-bold mb-4">
                  {slide.heading.split("\n").map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </h1>
                <p className="text-base md:text-[22px] mb-16 text-white">
                  {slide.subheading.split("\n").map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                <button
                  className="group flex items-center gap-3 border border-white text-white px-6 py-2.5 rounded-full text-lg font-bold transition-colors duration-300 hover:bg-white hover:text-black hover:cursor-pointer"
                  onClick={() => router.push("/contact-us")}
                >
                  {`Let's`} connect
                  <span className="bg-white text-black rounded-full p-1 transition-colors duration-300 group-hover:bg-black group-hover:text-white">
                    <FiArrowUpRight size={14} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
