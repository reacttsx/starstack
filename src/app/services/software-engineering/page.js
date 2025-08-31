/* eslint-disable @next/next/no-img-element */
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import ServiceHero from "@/app/components/ServiceHero";
import Image from "next/image";

const models = [
  {
    icon: "/icons/dedicated.png",
    title: "Dedicated Team Model",
    copy: "A hand-picked team works exclusively on your project, acting as an extension of your in-house crew.",
    img: "/images/engagement/dedicated.jpg",
  },
  {
    icon: "/icons/time-material.png",
    title: "Time & Material Model",
    copy: "Pay only for the time and resources used, with the flexibility to adapt as your project evolves.",
    img: "/images/engagement/time-material.jpg",
  },
  {
    icon: "/icons/fixed-price.png",
    title: "Fixed Price Model",
    copy: "A clear budget and timeline upfront for projects with well-defined requirements.",
    img: "/images/engagement/fixed-price.jpg",
  },
];

export default function SoftwareEngineering() {
  return (
    <main>
      <Navbar />
      <ServiceHero
        bgVideo={{
          src: "/videos/software-engineering.mp4",
          poster: "/videos/software-engineering.jpg",
        }}
        rightImage="/images/software-engineering.png"
        rightImgMobile="/images/software-engineering.png"
        eyebrow="Software Engineering"
        title={
          "We build software systems that empower outcomes, scale impact,  and deliver lasting value."
        }
        description={
          "Driven by innovation, built with precision. Your trusted partner in software engineering  excellence."
        }
        offsetForNavbar
      />
      <section className="px-4 lg:px-20 py-12 lg:mt-[-240px]">
        <h2 className="text-3xl md:text-[56px] font-bold tracking-tight">
          <span className="text-black">Our Software Engineering</span>{" "}
          <span className="text-[#8e8e8e]">Capabilities</span>
        </h2>
        <div className="mt-5 md:mt-10 grid gap-5 md:grid-cols-12 items-center">
          <div className="md:col-span-6">
            <div className="rounded-xl ring-1 ring-black/15 overflow-hidden block md:hidden mb-5">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/capabilities/enterprise.jpg"
                  alt="Enterprise development"
                  fill
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
            </div>
            <h3 className="text-xl md:text-[32px] font-semibold">
              Enterprise Software Development
            </h3>
            <p className="mt-4 text-base md:text-lg leading-relaxed">
              We specialize in building robust, scalable enterprise software
              that aligns with your organization’s goals and operational
              complexity. We build software solutions that are designed to
              streamline workflows, enhance productivity, and support
              mission-critical functions across departments.
            </p>
          </div>
          <div className="md:col-span-6 hidden md:block">
            <div className="rounded-xl ring-1 ring-black/15 overflow-hidden">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/capabilities/enterprise.jpg"
                  alt="Enterprise development"
                  fill
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-12 grid gap-5 md:grid-cols-12 items-center">
          <div className="md:col-span-6">
            <div className="rounded-xl ring-1 ring-black/15 overflow-hidden">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/capabilities/webapp.jpg"
                  alt="Web application development"
                  fill
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-6">
            <h3 className="text-xl md:text-[32px] font-semibold">
              Web Application Development
            </h3>
            <p className="mt-4 text-base md:text-lg leading-relaxed">
              We build modern, high-performance web applications that combine
              clean design with powerful functionality. Our web app development
              services are designed to support diverse use cases—from customer
              portals to complex platforms—while ensuring scalability,
              usability, and a seamless experience across all devices and user
              types.
            </p>
          </div>
        </div>
        <div className="mt-10 md:mt-12 grid gap-5 md:grid-cols-12 items-center">
          <div className="md:col-span-6">
            <div className="rounded-xl ring-1 ring-black/15 overflow-hidden block md:hidden mb-5">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/capabilities/mobile-application.jpg"
                  alt="Mobile Application Development"
                  fill
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
            </div>
            <h3 className="text-xl md:text-[32px] font-semibold">
              Mobile Application Development
            </h3>
            <p className="mt-4 text-base md:text-lg leading-relaxed">
              Our expertise spans both native development and hybrid
              technologies for cross-platform efficiency. From ideation to
              deployment, we ensure every app meets platform standards, user
              expectations, and long-term performance goals, empowering brands
              to connect, engage, and grow through intuitive UX and reliable
              mobile architecture.
            </p>
          </div>
          <div className="md:col-span-6 hidden md:block">
            <div className="rounded-xl ring-1 ring-black/15 overflow-hidden">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/capabilities/mobile-application.jpg"
                  alt="Mobile Application Development"
                  fill
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-12 grid gap-5 md:grid-cols-12 items-center">
          <div className="md:col-span-6">
            <div className="rounded-xl ring-1 ring-black/15 overflow-hidden">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/capabilities/application.jpg"
                  alt="Application Modernization"
                  fill
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-6">
            <h3 className="text-xl md:text-[32px] font-semibold">
              Application Modernization
            </h3>
            <p className="mt-4 text-base md:text-lg leading-relaxed">
              We specialize in modernizing legacy systems to make them more
              scalable, efficient, and easier to maintain. Our proven expertise
              enables us to transform outdated applications into agile,
              high-performing solutions that align with today’s digital
              standards.
            </p>
          </div>
        </div>
        <div className="mt-10 md:mt-12 grid gap-5 md:grid-cols-12 items-center">
          <div className="md:col-span-6">
            <div className="rounded-xl ring-1 ring-black/15 overflow-hidden block md:hidden mb-5">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/capabilities/quality.jpg"
                  alt="Quality Assurance & Testing"
                  fill
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
            </div>
            <h3 className="text-xl md:text-[32px] font-semibold">
              Quality Assurance & Testing
            </h3>
            <p className="mt-4 text-base md:text-lg leading-relaxed">
              Quality is at the core of everything we deliver. By leveraging a
              strategic mix of automated and manual testing methods, we
              guarantee reliability, performance, and security at every stage of
              the development lifecycle, delivering deployment-ready products
              with confidence.
            </p>
          </div>
          <div className="md:col-span-6 hidden md:block">
            <div className="rounded-xl ring-1 ring-black/15 overflow-hidden">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/capabilities/quality.jpg"
                  alt="Quality Assurance & Testing"
                  fill
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 lg:px-20 pb-5">
        <h2 className="text-4xl md:text-[56px] font-bold tracking-tight">
          <span className="text-black">Our engagement</span>{" "}
          <span className="text-[#8e8e8e]">models</span>
        </h2>
        <div className="mt-5 md:mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {models.map((m) => (
            <article
              key={m.title}
              className="rounded-2xl overflow-hidden ring-1 ring-black/10 shadow-[0_8px_28px_rgba(0,0,0,0.12)] bg-black flex flex-col justify-between"
            >
              <div className="bg-black text-white p-7 min-h-[270px] flex flex-col">
                <Image src={m.icon} alt={m.title} width={100} height={100} />
                <h3 className="text-xl md:text-[32px] font-semibold leading-snug mt-5 md:h-20 xl:h-auto">
                  {m.title}
                </h3>
                <p className="mt-3 text-base md:text-lg leading-relaxed">{m.copy}</p>
              </div>
              <img
                src={m.img}
                alt={m.title}
                className="object-cover h-[236px] w-full"
              />
            </article>
          ))}
        </div>
      </section>
      <ContactSection service="Software Engineering" />
      <Footer />
    </main>
  );
}
