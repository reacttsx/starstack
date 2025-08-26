/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import OurClients from "./OurClients";

const services = [
  {
    icon: "/icons/digital-ai.png",
    title: "Digital & AI Consulting",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    image: "/images/person-chart.png",
  },
  {
    icon: "/icons/experience-design.png",
    title: "Experience Design",
    description: "Experience Design description here.",
    image: "/images/experience.png",
  },
  {
    icon: "/icons/software-engineering.png",
    title: "Software Engineering",
    description: "Software Engineering description here.",
    image: "/images/software.png",
  },
  {
    icon: "/icons/web3.png",
    title: "Web 3.0",
    description: "Web 3.0 description here.",
    image: "/images/web3.png",
  },
  {
    icon: "/icons/data-ai.png",
    title: "Data & AI",
    description: "Data & AI description here.",
    image: "/images/data.png",
  },
  {
    icon: "/icons/cloud-services.png",
    title: "Cloud Services",
    description: "Cloud Services description here.",
    image: "/images/cloud.png",
  },
];

export default function WhatWeDo() {
  const sectionRef = useRef(null);
  const sentinelRef = useRef(null);

  const [idx, setIdx] = useState(null);

  const max = services.length - 1;

  const lock = () => (document.documentElement.style.overflow = "hidden");

  const unlock = () => (document.documentElement.style.overflow = "");

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) {
          setIdx(0);
          lock();
        } else {
          unlock();
        }
      },
      { threshold: 0 }
    );
    if (sentinelRef.current) io.observe(sentinelRef.current);
    return () => {
      io.disconnect();
      unlock();
    };
  }, []);

  useEffect(() => {
    const step = (dir) => setIdx((i) => Math.min(Math.max(i + dir, 0), max));

    const wheel = (e) => {
      if (document.documentElement.style.overflow !== "hidden") return;
      e.preventDefault();
      if (idx === 0 && e.deltaY < 0) {
        unlock();
        return;
      }
      if (idx === max && e.deltaY > 0) {
        unlock();
        return;
      }
      step(e.deltaY > 0 ? 1 : -1);
    };

    const key = (e) => {
      if (document.documentElement.style.overflow !== "hidden") return;
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        wheel({ deltaY: e.key === "ArrowDown" ? 1 : -1 });
      }
    };

    window.addEventListener("wheel", wheel, { passive: false });
    window.addEventListener("keydown", key);

    return () => {
      window.removeEventListener("wheel", wheel);
      window.removeEventListener("keydown", key);
    };
  }, [idx, max]);

  const current = services[idx] ?? services[0];

  return (
    <>
      <div ref={sentinelRef} className="h-px" />
      <section
        ref={sectionRef}
        className="py-10 md:py-20 px-4 lg:px-20 bg-white"
      >
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl lg:text-[56px] font-bold mb-8 lg:mb-14 text-black">
              What <span className="text-[#8e8e8e]">We Do</span>
            </h2>
            {services.map((item, i) => {
              const active = i === idx;

              return (
                <div
                  key={i}
                  onClick={() => setIdx(idx === i ? null : i)}
                  className={`border-b-2 border-[#BEBEBE] pb-4 cursor-pointer ${
                    services.length === i + 1 ? "border-b-0!" : ""
                  }`}
                >
                  <div
                    className={`flex justify-between ${
                      active ? "items-start" : "items-center"
                    }`}
                  >
                    <div
                      className={`flex ${
                        active ? "items-start" : "items-center"
                      } gap-4`}
                    >
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={42}
                        height={42}
                      />
                      <div>
                        <h4
                          className={`font-semibold text-xl lg:text-[32px] transition-colors ${
                            active
                              ? "text-black lg:text-[#032E40]"
                              : "text-black lg:text-[#B4B4B4]"
                          }`}
                        >
                          {item.title}
                        </h4>
                        <div
                          className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                            active ? "max-h-[350px] lg:max-h-[300px] mt-3" : "max-h-0 mt-0"
                          }`}
                        >
                          <img
                            src={current.image}
                            alt={current.title}
                            className="mx-auto object-contain mb-5 lg:hidden"
                          />
                          <p className="text-base lg:text-[22px] text-[#032E40]">
                            {item.description}
                          </p>
                          <div className="mt-5 flex items-center gap-2 text-xl text-black cursor-pointer">
                            Learn more
                            <Image
                              src="/icons/line.png"
                              width={44}
                              height={16}
                              alt="line"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lg:hidden">
                      {idx === i ? (
                        <FiChevronUp size={26} color="#000000" />
                      ) : (
                        <FiChevronDown size={26} color="#000000" />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex-1 relative hidden lg:block">
            <img
              src={current.image}
              alt={current.title}
              className="mx-auto object-contain"
            />
          </div>
        </div>
        <div className="w-full mt-10 md:mt-20">
          <OurClients />
        </div>
      </section>
    </>
  );
}
