"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const CAP_TABS = [
  {
    id: "strategy",
    label: "Cloud Strategy",
    title: "Cloud Strategy",
    body: "We begin by conducting a thorough discovery and assessment of your existing infrastructure, whether on-premise, in the cloud, or hybrid. Our goal is to understand your current cloud posture, business objectives, and technology landscape to shape a strategy that aligns with both operational needs and long-term vision. We define a clear roadmap for cloud adoption, modernization, and optimization—providing strategic guidance at every stage of your cloud journey to ensure resilience, scalability, and value realization.",
    image: "/images/cloud/strategy.png",
  },
  {
    id: "infrastructure",
    label: "Cloud Infrastructure",
    title: "Cloud Infrastructure",
    body: "Our cloud infrastructure services are built to support secure, scalable, and high-performing environments tailored to your application and business needs. Infrastructure is designed with reliability, availability, and operational efficiency in mind, whether deploying new workloads, migrating from on-premise systems, or shifting across cloud providers. Security, compliance, and scalability are embedded by design to ensure a future-ready foundation for enterprise growth.",
    image: "/images/cloud/infrastructure.png",
  },
  {
    id: "migration",
    label: "Migration and Modernization",
    title: "Migration and Modernization",
    body: "Successful cloud adoption goes beyond basic lift-and-shift approaches. Applications are assessed for modernization potential to fully leverage native cloud capabilities. Legacy systems are refactored, rewritten, or re-architected into modular, scalable, and event-driven architectures that align with evolving business goals. By utilizing the full suite of cloud services, applications are transformed to become agile, resilient, and optimized for sustained performance and innovation.",
    image: "/images/cloud/migration.png",
  },
  {
    id: "devops",
    label: "DevOps",
    title: "DevOps",
    body: "Our DevOps practices are implemented to accelerate development cycles, enhance collaboration, and ensure consistent delivery across environments. Automation, continuous integration and delivery, and infrastructure as code form the backbone of streamlined operations. Monitoring, security, and governance are integrated from the start, enabling faster releases, reduced downtime, and higher quality across the software lifecycle.",
    image: "/images/cloud/devops.png",
  },
];

export default function CapabilitiesTabs() {
  const [active, setActive] = useState(0);
  const [locked, setLocked] = useState(false);
  const wrapperRef = useRef(null);
  const isThrottled = useRef(false);

  // Trigger scroll-lock only when this section is fully visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setLocked(entry.isIntersecting && entry.intersectionRatio === 1);
      },
      {
        threshold: [1],
      }
    );

    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  // Scroll-lock behavior: down only
  useEffect(() => {
    const onWheel = (e) => {
      if (!locked || isThrottled.current || e.deltaY <= 0) return;

      e.preventDefault();
      isThrottled.current = true;

      setTimeout(() => {
        isThrottled.current = false;
      }, 700); // throttle time

      // Scroll down → activate next tab
      setActive((prev) => {
        const next = Math.min(prev + 1, CAP_TABS.length - 1);
        return next;
      });
    };

    if (locked && active < CAP_TABS.length - 1) {
      window.addEventListener("wheel", onWheel, { passive: false });
      document.body.style.overflow = "hidden";
    } else {
      window.removeEventListener("wheel", onWheel);
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("wheel", onWheel);
      document.body.style.overflow = "";
    };
  }, [locked, active]);

  // After last tab, allow scroll again
  useEffect(() => {
    if (!locked || active !== CAP_TABS.length - 1) return;

    const unlock = (e) => {
      if (e.deltaY > 0) {
        setLocked(false);
      }
    };

    window.addEventListener("wheel", unlock, { passive: false });
    return () => window.removeEventListener("wheel", unlock);
  }, [locked, active]);

  const handleTabClick = (i) => {
    setActive(i);
  };

  const tab = CAP_TABS[active];

  return (
    <div ref={wrapperRef} className="relative">
      <div>
        <div
          role="tablist"
          aria-label="Cloud capabilities"
          className="mt-5 flex flex-wrap gap-4"
        >
          {CAP_TABS.map((t, i) => {
            const selected = i === active;
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={selected}
                aria-controls={`panel-${t.id}`}
                id={`tab-${t.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => handleTabClick(i)}
                className={[
                  "rounded-full px-5 md:px-6 py-2.5 text-sm md:text-lg transition hover:cursor-pointer",
                  selected
                    ? "bg-black text-white border border-black"
                    : "border border-black/30 text-black hover:bg-black hover:text-white",
                ].join(" ")}
              >
                {t.label}
              </button>
            );
          })}
        </div>
        <div
          id={`panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${tab.id}`}
          className="mt-10 grid gap-10 lg:grid-cols-2 items-start"
        >
          <div>
            <h3 className="text-xl md:text-[32px] font-semibold">
              {tab.title}
            </h3>
            <div className="rounded-2xl overflow-hidden block md:hidden mt-2">
              <div className="relative aspect-[16/9]">
                <Image
                  key={tab.image}
                  src={tab.image}
                  alt={tab.title}
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>
            </div>
            <p className="mt-2 md:mt-4 text-base md:text-lg leading-relaxed text-black whitespace-pre-line">
              {tab.body}
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden hidden md:block">
            <div className="relative aspect-[16/9]">
              <Image
                key={tab.image}
                src={tab.image}
                alt={tab.title}
                fill
                sizes="(min-width:1024px) 50vw, 100vw"
                className="object-cover"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
