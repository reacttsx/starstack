"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import clsx from "clsx";
import Link from "next/link";

const DEFAULT_ALL = "All Industries";

const IndustryPortfolio = ({
  items,
  categories,
  defaultCategory = DEFAULT_ALL,
}) => {
  const pills = useMemo(() => {
    const base = new Set(categories ?? []);

    if (!categories)
      items.forEach((i) => i.categories.forEach((c) => base.add(c)));

    return [DEFAULT_ALL, ...Array.from(base)];
  }, [categories, items]);

  const [active, setActive] = useState(defaultCategory);

  const filtered = useMemo(() => {
    if (active === DEFAULT_ALL) return items;

    return items.filter((i) => i.categories.includes(active));
  }, [items, active]);

  return (
    <section>
      <div
        role="tablist"
        aria-label="Industries"
        className="flex gap-3 md:gap-4 pb-10 flex-wrap"
      >
        {pills.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(cat)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setActive(cat);
              }}
              className={clsx(
                "whitespace-nowrap rounded-full px-5 py-2 text-base md:text-lg border transition hover:cursor-pointer",
                isActive
                  ? "bg-black text-white border-black"
                  : "bg-transparent text-black border-black hover:bg-black/90 hover:text-white"
              )}
            >
              {cat}
            </button>
          );
        })}
      </div>
      <h2 className="mt-6 mb-6 md:mb-5 text-[30px] md:text-[56px] font-bold tracking-tight">
        <span className="text-black">
          {active === DEFAULT_ALL ? "All" : active.split(" ")[0]}
        </span>{" "}
        <span className="text-[#8e8e8e]">
          {active === DEFAULT_ALL
            ? "Industries"
            : active.split(" ").slice(1).join(" ") || "Industries"}
        </span>
      </h2>
      <div className="grid gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <Link href={item.link} key={item.id} className="group">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl ring-1 ring-black/10">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                priority={false}
              />
            </div>
            <h3 className="mt-5 text-xl md:text-[32px] font-semibold leading-tight">
              {item.title}
            </h3>
            <p className="mt-2 text-base md:text-lg text-black">
              {item.blurb}
            </p>
          </Link>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="py-16 text-center text-gray-500">
          No projects found for <span className="font-semibold">{active}</span>.
        </div>
      )}
    </section>
  );
};

export default IndustryPortfolio;
