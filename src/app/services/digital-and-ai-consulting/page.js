import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import ServiceHero from "@/app/components/ServiceHero";
import Image from "next/image";

export const metadata = {
  title: "Digital & AI Consulting Services | Cloud & Data Strategy - Starstack",
  description:
    "Transform your business with Starstack's digital consulting, AI solutions, and cloud strategy services. Helping enterprises unlock efficiency and growth.",
};

const aiReadiness = [
  {
    img: "/images/ai/infra.jpg",
    title: "Data & Infrastructure Evaluation",
    body: "Assess the quality, accessibility, and scalability of your data and technology stack to ensure they meet the foundational requirements for AI adoption.",
  },
  {
    img: "/images/ai/usecases.jpg",
    title: "Business & Use Case Alignment",
    body: "Identify and prioritize AI use cases that align with strategic goals and deliver measurable value across business functions.",
  },
  {
    img: "/images/ai/talent.jpg",
    title: "Talent & Capability Review",
    body: "Analyze internal AI and data capabilities to determine readiness and identify gaps in skills, tools, or operational maturity.",
  },
  {
    img: "/images/ai/roadmap.jpg",
    title: "Strategic AI Roadmap",
    body: "Provide a clear, actionable roadmap outlining technology, investments, and timelines for successful enterprise-wide AI integration.",
  },
];

export default function DigitalAndAIConsulting() {
  return (
    <main>
      <Navbar />
      <ServiceHero
        bgVideo={{
          src: "/videos/digital-AI.mp4",
          poster: "/videos/digital-AI.jpg",
        }}
        rightImage="/images/digital-AI.png"
        rightImgMobile="/images/digital-AI.png"
        eyebrow="Digital & AI Consulting"
        title={
          "Enabling Digital Product and AI Success through Strategy, Insight, and Scalable Execution."
        }
        description={
          "From product vision to AI execution, we drive outcomes\nthrough insight, strategy, and technology."
        }
        offsetForNavbar
      />
      <section className="px-4 lg:px-20 py-12 lg:mt-[-240px]">
        <h2 className="text-3xl md:text-[56px] font-extrabold tracking-tight">
          <span className="text-black">Digital Platform</span>{" "}
          <span className="text-[#8e8e8e]">&amp; Product Management</span>
        </h2>
        <div className="mt-8 grid gap-2 md:grid-cols-2">
          <div className="rounded-2xl bg-black text-white p-6 md:p-8">
            <div className="flex items-center gap-8">
              <Image
                src="/icons/product-vision.png"
                alt="Product Vision"
                width={136}
                height={136}
                className="w-[68px] lg:w-[136px] h-[68px] lg:h-[136px]"
              />
              <div>
                <h3 className="text-xl md:text-3xl font-semibold">
                  Product Vision
                </h3>
                <p className="mt-2 text-base md:text-base xl:text-lg leading-relaxed">
                  Establish a well-defined, strategic vision for the product
                  that aligns with the business objectives and effectively
                  addresses the needs of end users.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-black text-white p-6 md:p-8">
            <div className="flex items-center gap-8">
              <Image
                src="/icons/product-roadmap.png"
                alt="Product Roadmap"
                width={136}
                height={136}
                className="w-[68px] lg:w-[136px] h-[68px] lg:h-[136px]"
              />
              <div>
                <h3 className="text-xl md:text-3xl font-semibold">
                  Product Roadmap
                </h3>
                <p className="mt-2 text-base md:text-base xl:text-lg leading-relaxed">
                  Develop a comprehensive plan that outlines key product
                  features, delivery timelines, future enhancements, and
                  critical milestones to ensure successful execution.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-black text-white p-6 md:p-8">
            <div className="flex items-center gap-8">
              <Image
                src="/icons/business-analysis.png"
                alt="Business Analysis"
                width={136}
                height={136}
                className="w-[68px] lg:w-[136px] h-[68px] lg:h-[136px]"
              />
              <div>
                <h3 className="text-xl md:text-3xl font-semibold">
                  Business Analysis
                </h3>
                <p className="mt-2 text-base md:text-base xl:text-lg leading-relaxed">
                  Understand the business needs and translate them into
                  practical product features that add real value.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-black text-white p-6 md:p-8">
            <div className="flex items-center gap-8">
              <Image
                src="/icons/goto-market.png"
                alt="Go-to-Market Strategy"
                width={136}
                height={136}
                className="w-[68px] lg:w-[136px] h-[68px] lg:h-[136px]"
              />
              <div>
                <h3 className="text-xl md:text-3xl font-semibold">
                  Go-to-Market Strategy
                </h3>
                <p className="mt-2 text-base md:text-base xl:text-lg leading-relaxed">
                  Establish a well-defined, strategic vision for the product
                  that aligns with the business objectives and effectively
                  addresses the needs of end users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 lg:px-20 md:pb-5 pt-0">
        <h2 className="text-3xl md:text-[56px] font-bold tracking-tight">
          <span className="text-black">AI Readiness</span>{" "}
          <span className="text-[#8e8e8e]">Assessment</span>
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {aiReadiness.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl overflow-hidden shadow-[0_6px_24px_rgba(0,0,0,0.12)] ring-1 ring-black/10 bg-black"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(min-width:1024px) 25vw, (min-width:768px) 50vw, 100vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
              <div className="bg-black text-white p-4">
                <h3 className="text-xl md:text-[32px] font-semibold leading-tight md:min-h-30 2xl:min-h-20">
                  {item.title}
                </h3>
                <p className="mt-3 text-base md:text-lg leading-relaxed">
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <ContactSection service="Digital & AI Consulting" />
      <Footer />
    </main>
  );
}
