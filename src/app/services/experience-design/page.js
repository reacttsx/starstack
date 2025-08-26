import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import ServiceHero from "@/app/components/ServiceHero";
import Image from "next/image";

const servicesProcess = [
  {
    title: "Design Audit",
    body: "Evaluate and enhance user experience by analyzing content, interaction standards, and usability best practices.",
  },
  {
    title: "Design Strategy",
    body: "Define the product’s purpose, vision, and goals aligned with user expectations, and translate them into strategic features.",
  },
  {
    title: "UX Design",
    body: "Structure intuitive experiences by designing information architecture, user flows, and low-fidelity wireframes.",
  },
  {
    title: "UI Design",
    body: "Develop visual direction through mood boards and interactive concepts, delivering high-fidelity, prototype-ready designs.",
  },
  {
    title: "Design System",
    body: "Establish scalable design standards and build a reusable component library.",
  },
];

export default function ExperienceDesign() {
  return (
    <main>
      <Navbar />
      <ServiceHero
        bgVideo={{
          src: "/videos/experinced-design.mp4",
          poster: "/videos/experinced-design.jpg",
        }}
        rightImage="/images/experinced-design.jpg"
        rightImgMobile="/images/experinced-design.jpg"
        eyebrow="Experience Design"
        title={
          "Design experiences that captivate emotions, drive connections and  earn loyalty"
        }
        description={
          "We design experiences to make users feel, focus, and follow through."
        }
        offsetForNavbar
      />
      <section className="px-4 lg:px-20 py-12 lg:mt-[-150px]">
        <div className="grid gap-10 md:grid-cols-12 items-start">
          <div className="md:col-span-5 hidden md:block">
            <div className="rounded-xl ring-1 ring-black/15 overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/process.jpg"
                  alt="Design planning on desk"
                  fill
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className="object-cover border-3 border-black rounded-xl"
                  priority={false}
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <h2 className="text-3xl lg:text-[56px] font-bold tracking-tight">
              <span className="text-black">Our Services</span>{" "}
              <span className="text-[#8e8e8e]">&amp; Process</span>
            </h2>
            <div className="lg:col-span-5 block md:hidden mt-5">
              <div className="rounded-xl ring-1 ring-black/15 overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/process.jpg"
                    alt="Design planning on desk"
                    fill
                    sizes="(min-width:1024px) 40vw, 100vw"
                    className="object-cover border-3 border-black rounded-xl"
                    priority={false}
                  />
                </div>
              </div>
            </div>
            <p className="mt-4 text-lg leading-relaxed text-black">
              At Starstack, we design experiences that are fun, user-friendly,
              and engaging for each user. We create designs that respect and
              reflect local cultures, traditions, beliefs, and values, ensuring
              they feel familiar, thoughtful, and deeply rooted in the
              communities they serve.
            </p>
            <div className="mt-8 grid gap-x-10 gap-y-5 md:grid-cols-2">
              {servicesProcess.map((it, i) => (
                <article key={it.title}>
                  <h2 className="text-[32px] font-semibold text-[#636363] leading-tight">
                    {String(i + 1).padStart(2, "0")}
                  </h2>
                  <h3 className="text-xl lg:text-[32px] font-extrabold leading-tight text-[#032E40] mb-1">
                    {it.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-black">
                    {it.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ContactSection service="Experience Design" />
      <Footer />
    </main>
  );
}
