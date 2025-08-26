import Image from "next/image";
import clsx from "clsx";

export default function HeroImage({
  imageSrc,
  imageAlt = "",
  eyebrow,
  title,
  description,
  heightClass = "",
  priority = true,
  align = "left",
}) {
  const justifyMap = {
    left: "justify-items-start text-left",
    center: "justify-items-center text-center",
    right: "justify-items-end text-right",
  }[align];

  return (
    <section
      className={clsx(
        "relative w-full overflow-hidden text-white",
        heightClass
      )}
      style={{ paddingTop: "var(--nav-height, 0px)" }}
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
            "linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.685609) 53.58%, #000 100%)",
        }}
      />
      <div className="relative z-10">
        <div
          className={clsx(
            "mx-auto px-6 lg:px-20",
            "grid items-center",
            justifyMap,
            "min-h-[calc(85svh-var(--nav-height,0px))] md:min-h-[calc(100svh-var(--nav-height,0px))]"
          )}
        >
          <div className="max-w-3xl">
            {eyebrow && (
              <p className="text-sm md:text-base lg:text-lg text-[#ADADAD]">
                {eyebrow}
              </p>
            )}
            <h1 className="font-bold text-3xl md:text-5xl lg:text-[56px] md:leading-16">
              {title.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>
            {description && (
              <p className="mt-4 text-base md:text-lg lg:text-[22px] text-white max-w-96 lg:max-w-2xl">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
