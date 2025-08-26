"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const clients = [
  "/logos/urjamithra.png",
  "/logos/nordfield.png",
  "/logos/reconive.png",
  "/logos/urjamithra.png",
  "/logos/nordfield.png",
  "/logos/nordfield.png",
  "/logos/nordfield.png",
  "/logos/nordfield.png",
];

const OurClients = () => {
  return (
    <div className="mx-auto flex flex-col md:flex-row md:items-center gap-8 justify-start">
      <div className="flex-shrink-0 flex items-center gap-6">
        <div className="flex md:block gap-3">
          <h3 className="text-3xl md:text-4xl font-bold text-black">Our</h3>
          <h3 className="text-3xl md:text-4xl font-bold text-[#8e8e8e]">Clients</h3>
        </div>
        <div className="h-24 w-[3px] bg-[#C9C9C9] hidden md:block" />
      </div>
      <div className="flex-1 overflow-hidden">
        <Slider
          dots={false}
          arrows={false}
          infinite
          autoplay
          speed={5000}
          autoplaySpeed={0}
          cssEase="linear"
          slidesToShow={5}
          slidesToScroll={1}
          responsive={[
            { breakpoint: 1280, settings: { slidesToShow: 6 } },
            { breakpoint: 1024, settings: { slidesToShow: 5 } },
            { breakpoint: 768, settings: { slidesToShow: 4 } },
            { breakpoint: 480, settings: { slidesToShow: 3} },
          ]}
        >
          {clients.map((logo, i) => (
            <div key={i} className="flex justify-center items-center px-4">
              <Image
                src={logo}
                alt={`Client ${i}`}
                width={100}
                height={50}
                className="object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurClients;
