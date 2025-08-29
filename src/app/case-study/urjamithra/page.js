import CaseStudyHero from "@/app/components/CaseStudyHero";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export default function Urjamithra() {
  return (
    <main className="bg-white text-black">
      <CaseStudyHero
        imageSrc="/images/urjamithra.png"
        imageAlt="Urjamithra case header"
        title="Urjamithra Solar Web Portal with CRM-Integrated Quote System"
        category="Banking & Insurance"
      />
      <section className="px-4 lg:px-20 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-[56px] font-bold tracking-tight">
              Background
            </h2>
            <div className="overflow-hidden block md:hidden mt-6">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/case1.png"
                  alt="Tablet CRM dashboard"
                  fill
                  sizes="(min-width:1024px) 50vw, 100vw"
                  className="object-contain"
                />
              </div>
            </div>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-[#1F1F1F]">
              Urjamithra, founded in 2018 and promoted by ANERT (Govt. of
              Kerala), is a leading solar power solutions provider in Kerala
              with over 700 residential and 200+ commercial projects completed.
              To expand its digital reach and simplify customer engagement, the
              company wanted a smart web portal featuring an intuitive quote
              generator with dynamic fields, tools to analyze clients’ current
              electricity usage for accurate solar power recommendations, and
              seamless CRM integration for automated lead assignment and
              efficient sales follow-ups.
            </p>
          </div>
          <div className="overflow-hidden hidden md:block">
            <div className="relative aspect-[16/9]">
              <Image
                src="/images/case1.png"
                alt="Tablet CRM dashboard"
                fill
                sizes="(min-width:1024px) 50vw, 100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-16 md:mt-24">
          <h3 className="text-3xl md:text-[56px] font-bold tracking-tight text-center md:text-left">
            Challenges
          </h3>
          <div className="mt-5 grid gap-x-10 gap-y-5 md:gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="md:flex items-start gap-4">
              <Image
                src="/icons/challenge1.png"
                alt="Lack of an online system"
                width={80}
                height={80}
                className="mx-auto md:mx-0 w-auto h-20"
              />
              <div className="mt-2 md:mt-0">
                <p className="text-base md:text-lg leading-relaxed text-center md:text-left">
                  Lack of an online system to collect and manage quote requests
                  efficiently.
                </p>
              </div>
            </div>
            <div className="md:flex items-start gap-4">
              <Image
                src="/icons/challenge2.png"
                alt="No centralized CRM"
                width={80}
                height={80}
                className="mx-auto md:mx-0 w-auto h-16"
              />
              <div className="mt-2 md:mt-0">
                <p className="text-base md:text-lg leading-relaxed text-center md:text-left">
                  No centralized CRM to track leads and sales conversions.
                </p>
              </div>
            </div>
            <div className="md:flex items-start gap-4">
              <Image
                src="/icons/challenge3.png"
                alt="Delays in manual handling"
                width={80}
                height={80}
                className="mx-auto md:mx-0 w-auto h-20"
              />
              <div className="mt-2 md:mt-0">
                <p className="text-base md:text-lg leading-relaxed text-center md:text-left">
                  Delays in manual handling of customer consultations and
                  quotations.
                </p>
              </div>
            </div>
            <div className="md:flex items-start gap-4">
              <Image
                src="/icons/challenge4.png"
                alt="Need to improve digital credibility"
                width={80}
                height={80}
                className="mx-auto md:mx-0 w-auto h-16"
              />
              <div className="mt-2 md:mt-0">
                <p className="text-base md:text-lg leading-relaxed text-center md:text-left">
                  Need to improve digital credibility.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 md:mt-24">
          <h3 className="text-3xl md:text-[56px] font-bold tracking-tight text-center md:text-left">
            Solutions
          </h3>
          <div className="mt-5 grid gap-x-10 gap-y-5 md:gap-y-10 grid-cols-1 md:grid-cols-3">
            <div className="md:flex items-start gap-4">
              <Image
                src="/icons/solution1.png"
                alt="Designed and developed a web portal for quote generation"
                width={80}
                height={80}
                className="mx-auto md:mx-0 w-20 h-20"
              />
              <div className="mt-2 md:mt-0">
                <p className="text-base md:text-lg leading-relaxed text-center md:text-left">
                  Designed and developed a web portal for quote generation
                  prominently across the site with smart fields along with
                  features for analyzing clients current electricity for
                  providing required units(kw) solar power plants.
                </p>
              </div>
            </div>
            <div className="md:flex items-start gap-4">
              <Image
                src="/icons/solution2.png"
                alt="Integrated the quote functionality directly with their CRM"
                width={80}
                height={80}
                className="mx-auto md:mx-0 w-16 h-16"
              />
              <div className="mt-2 md:mt-0">
                <p className="text-base md:text-lg leading-relaxed text-center md:text-left">
                  Integrated the quote functionality directly with their CRM,
                  auto-assigning leads to their sales team based on location and
                  type.
                </p>
              </div>
            </div>
            <div className="md:flex items-start gap-4">
              <Image
                src="/icons/solution3.png"
                alt="Enabled the sales team to access lead details instantly"
                width={80}
                height={80}
                className="mx-auto md:mx-0 w-20 h-20"
              />
              <div className="mt-2 md:mt-0">
                <p className="text-base md:text-lg leading-relaxed text-center md:text-left">
                  Enabled the sales team to access lead details instantly, send
                  faster quotations, and track follow-ups.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 md:mt-24">
          <h3 className="text-3xl md:text-[56px] font-bold tracking-tight text-center">
            Tech Stack <span className="text-[#8e8e8e]">Used</span>
          </h3>
          <div className="flex justify-center items-center gap-2 sm:gap-5 md:gap-10 mt-10">
            <Image
              src="/icons/react.png"
              alt="Urjamithra tech stack"
              width={45}
              height={40}
            />
            <Image
              src="/icons/tailwind.png"
              alt="Urjamithra tech stack"
              width={65}
              height={40}
            />
            <Image
              src="/icons/nodejs.png"
              alt="Urjamithra tech stack"
              width={148}
              height={40}
            />
            <Image
              src="/icons/aws.png"
              alt="Urjamithra tech stack"
              width={67}
              height={40}
            />
          </div>
        </div>
        <div className="mt-16 md:mt-24">
          <h3 className="text-3xl md:text-[56px] font-bold tracking-tight text-center">
            Value <span className="text-[#8e8e8e]">Created</span>
          </h3>
          <div className="mt-10 flex flex-col lg:flex-row gap-8 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-black/10">
            <div className="flex-1 px-5 pb-6 pt-0 md:pt-6 text-center">
              <Image
                src="/icons/value1.png"
                alt="Value created"
                width={68}
                height={60}
                className="mx-auto"
              />
              <p className="text-[15px] md:text-base leading-relaxed mt-5">
                Reduced quote response time from 24 hours to less than 3 hours.
              </p>
            </div>
            <div className="flex-1 px-5 pb-6 pt-0 md:pt-6 text-center">
              <Image
                src="/icons/value2.png"
                alt="Value created"
                width={68}
                height={60}
                className="mx-auto"
              />
              <p className="text-[15px] md:text-base leading-relaxed mt-5">
                Increased website inquiries by 4x within the first month.
              </p>
            </div>
            <div className="flex-1 px-5 pb-6 pt-0 md:pt-6 text-center">
              <Image
                src="/icons/value3.png"
                alt="Value created"
                width={68}
                height={60}
                className="mx-auto"
              />
              <p className="text-[15px] md:text-base leading-relaxed mt-5">
                Improved lead conversion rate by nearly 3× due to automation and
                faster follow-ups.
              </p>
            </div>
            <div className="flex-1 px-5 pb-6 pt-0 md:pt-6 text-center">
              <Image
                src="/icons/value4.png"
                alt="Value created"
                width={68}
                height={60}
                className="mx-auto"
              />
              <p className="text-[15px] md:text-base leading-relaxed mt-5">
                Created a hassle-free consultation experience that boosted
                customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
