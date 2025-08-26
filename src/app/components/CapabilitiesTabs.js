"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// ---- Content data (edit copy & image paths) ----
const CAP_TABS = [
  {
    id: "strategy",
    label: "Cloud Strategy",
    title: "Cloud Strategy",
    body: "We begin by conducting a thorough discovery and assessment of your existing infrastructure, whether on-premise, in the cloud, or hybrid. Our goal is to understand your current cloud posture, business objectives, and technology landscape to shape a strategy that aligns with both operational needs and long-term vision. We define a clear roadmap for cloud adoption, modernization, and optimization—providing strategic guidance at every stage of your cloud journey to ensure resilience, scalability, and value realization.",
    image: "/images/cloud/strategy.jpg",
  },
  {
    id: "infrastructure",
    label: "Cloud Infrastructure",
    title: "Cloud Infrastructure",
    body: "Design and implement secure, scalable foundations on AWS, Azure, or GCP. We architect networks, identity, storage, and compute that follow best practices for cost, reliability, and security.",
    image: "/images/cloud/infrastructure.jpg",
  },
  {
    id: "migration",
    label: "Migration and Modernization",
    title: "Migration & Modernization",
    body: "Plan and execute migrations with minimal downtime. Re-platform or re-factor apps into containerized and serverless architectures to improve performance and reduce operational burden.",
    image: "/images/cloud/migration.jpg",
  },
  {
    id: "devops",
    label: "DevOps",
    title: "DevOps",
    body: "Adopt CI/CD pipelines, infrastructure as code, automated testing, and observability to speed up releases and improve reliability across environments.",
    image: "/images/cloud/devops.jpg",
  },
];

export default function CapabilitiesTabs() {
  const [active, setActive] = useState(0);

  const tab = CAP_TABS[active];

  return (
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
              onClick={() => setActive(i)}
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
          <h3 className="text-xl md:text-[32px] font-semibold">{tab.title}</h3>
          <div className="rounded-2xl overflow-hidden block md:hidden mt-2">
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
  );
}
