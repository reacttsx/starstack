/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import OurClients from "./OurClients";
import Link from "next/link";

const services = [
  {
    icon: "/icons/digital-ai.png",
    title: "Digital & AI Consulting",
    description:
      "Bridge the gap between business goals and emerging technologies with tailored digital strategies.",
    image: "/images/person-chart.png",
    link: "/services/digital-and-ai-consulting",
  },
  {
    icon: "/icons/experience-design.png",
    title: "Experience Design (UI/UX)",
    description:
      "Crafting intuitive, human-centered designs that deliver seamless digital experiences.",
    image: "/images/experience.png",
    link: "/services/experience-design",
  },
  {
    icon: "/icons/software-engineering.png",
    title: "Software Engineering",
    description:
      "Building robust, scalable, and modern applications that accelerate business growth.",
    image: "/images/software.png",
    link: "/services/software-engineering",
  },
  {
    icon: "/icons/web3.png",
    title: "Web 3.0 Development",
    description:
      "Empowering businesses with decentralized, transparent, and future-ready solutions.",
    image: "/images/web3.png",
    link: "/services/web3",
  },
  {
    icon: "/icons/data-ai.png",
    title: "Data & AI",
    description:
      "Turning data into actionable intelligence with advanced AI-driven insights.",
    image: "/images/data.png",
    link: "/services/data-ai",
  },
  {
    icon: "/icons/cloud-services.png",
    title: "Cloud Services",
    description:
      "Unlock agility, scalability, and security with cloud-native solutions.",
    image: "/images/cloud.png",
    link: "/services/cloud",
  },
];

export default function WhatWeDo() {
  const [idx, setIdx] = useState(0);

  const current = services[idx] ?? services[0];

  return (
    <section className="py-10 md:py-20 px-4 lg:px-20 bg-white">
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
                          active
                            ? "max-h-[350px] lg:max-h-[300px] mt-3"
                            : "max-h-0 mt-0"
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
                        <Link
                          href={item.link}
                          className="mt-5 flex items-center gap-2 text-xl text-black cursor-pointer"
                        >
                          Learn more
                          <Image
                            src="/icons/line.png"
                            width={44}
                            height={16}
                            alt="line"
                          />
                        </Link>
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
  );
}
