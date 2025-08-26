"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import clsx from "clsx";

export default function CaseStudyHero({
  imageSrc,
  imageAlt = "",
  title,
  category,
  eyebrow = "Case Study",
  backHref,
  heightClass = "h-[440px] lg:h-[520px]",
  priority = true,
  align = "left",
}) {
  const router = useRouter();
  const back = () => (backHref ? router.push(backHref) : router.back());

  const alignMap = {
    left: "justify-items-start text-left",
    center: "justify-items-center text-center",
    right: "justify-items-end text-right",
  }[align];

  return (
    <section
      className={clsx(
        "relative w-full overflow-hidden text-white pt-5 md:pt-0",
        heightClass
      )}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="100vw"
        priority={priority}
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.685609) 53.58%, #000000 100%)",
        }}
      />
      <div className="relative z-10 h-full">
        <div
          className={clsx(
            "mx-auto h-full px-4 md:px-8 lg:px-20",
            "grid items-start md:items-center",
            alignMap
          )}
        >
          <div>
            <button
              onClick={back}
              aria-label="Go back"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/70 bg-black/20 backdrop-blur-sm hover:bg-white/10 transition mb-10"
            >
              <FiArrowLeft className="h-5 w-5" />
            </button>
            {eyebrow && (
              <p className="mb-3 text-base md:text-lg text-[#ADADAD]">
                {eyebrow}
              </p>
            )}
            <h1 className="font-extrabold tracking-tight leading-[1.05] text-3xl md:text-[56px]">
              {title}
            </h1>
            {category && (
              <span className="mt-6 inline-block rounded-full border border-white/60 px-5 py-2 text-base md:text-lg">
                {category}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
