"use client";

import Image from "next/image";
import clsx from "clsx";
import { FiArrowUpRight } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function ServiceHero({
  bgVideo,
  rightImage,
  rightImgMobile,
  eyebrow = "Digital & AI Consulting",
  title,
  description,
  heightClass = "min-h-[70svh] md:min-h-[60vh]",
  offsetForNavbar = false,
}) {
  const router = useRouter();

  return (
    <section
      className={clsx(
        "relative w-full text-white overflow-x-hidden overflow-y-visible",
        heightClass
      )}
      style={
        offsetForNavbar
          ? { paddingTop: "calc(var(--nav-height) + 25px)" }
          : undefined
      }
    >
      <video
        key={bgVideo.src}
        className="absolute inset-0 h-[90%] lg:h-[70%] w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={bgVideo.poster}
      >
        <source src={bgVideo.src} type={bgVideo.type ?? "video/mp4"} />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/0 h-[90%] lg:h-[70%]" />
      <div className="relative h-full">
        <div className="mx-auto h-full px-6 lg:px-20 grid items-center lg:pb-[180px]">
          <div>
            {eyebrow && (
              <p className="mb-4 text-base md:text-lg text-[#ADADAD]">
                {eyebrow}
              </p>
            )}
            <h1 className="font-bold tracking-tight leading-[1.05] text-3xl md:text-5xl">
              {title.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <div className="mt-6 flex justify-between items-start gap-5">
              <div>
                {description && (
                  <p className="text-base md:text-2xl text-white/85 max-w-2xl">
                    {description.split("\n").map((line, i) => (
                      <span key={i} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                )}
                <div className="mt-8">
                  <button
                    className="group flex items-center gap-3 border border-white text-white px-6 py-2.5 rounded-full text-base md:text-lg font-bold transition-colors duration-300 hover:bg-white hover:text-black hover:cursor-pointer"
                    onClick={() => router.push("/contact-us")}
                  >
                    {`Let's`} connect
                    <span className="bg-white text-black rounded-full p-1 transition-colors duration-300 group-hover:bg-black group-hover:text-white">
                      <FiArrowUpRight size={14} />
                    </span>
                  </button>
                </div>
              </div>
              <div className="hidden lg:block w-[560px] max-w-[40vw]">
                <div className="rounded-2xl border-3 border-white/90 overflow-hidden shadow-2xl">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={rightImage}
                      alt=""
                      fill
                      sizes="560px"
                      className="object-cover"
                      priority={false}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="block lg:hidden w-full max-w-md mt-10 mx-auto">
              <div className="rounded-2xl border-3 border-white/90 overflow-hidden shadow-2xl">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={rightImgMobile}
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
