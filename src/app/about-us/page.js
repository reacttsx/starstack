import Image from "next/image";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactButton from "../components/ContactButton";

export const metadata = {
  title: "About Starstack | IT Consulting & Software Experts",
  description:
    "Learn about Starstack an AI and software development company helping global clients with AI, cloud, and digital solutions",
};

export default function AboutUs() {
  return (
    <main className="bg-white text-black">
      <Navbar />
      <HeroImage
        imageSrc="/images/about-us.png"
        imageAlt="Innovation. Impact. Integrity. This is our story."
        eyebrow="About Us"
        title={"Innovation. Impact.\nIntegrity. This is our story."}
        description="Guided by a strong vision and core values, we turn challenges into opportunities that inspire growth and trust."
        align="left"
      />
      <section className="px-6 md:px-20">
        <div className="mt-5 md:mt-10">
          <h1 className="text-3xl md:text-[56px] font-bold text-center mb-5">
            Who We <span className="text-[#8e8e8e]">Are</span>
          </h1>
          <p className="mb-5 text-base md:text-lg">
            Starstack is an AI-powered digital transformation company built for
            the next frontier of technology. We help ambitious startups,
            visionary enterprises, and forward-thinking institutions navigate
            and lead in the digital era through a powerful combination of
            design, engineering, and intelligence.
          </p>
          <p className="text-base md:text-lg">
            Whether {`it's`} creating a smart new platform, exploring AI
            possibilities, or helping teams move to the cloud, we focus on
            making things that are not just scalable, but truly useful and
            impactful.
          </p>
        </div>
        <div className="bg-black rounded-[20px] text-center text-white py-10 px-10 lg:px-40 xl:px-50 2xl:px-96 mt-10 md:mt-15">
          <div className="md:flex items-start">
            <Image
              src="/icons/quote.png"
              alt="About Us"
              width={81}
              height={64}
              className="mx-auto"
            />
            <div>
              <p className="text-base md:text-lg mt-8">
                “We see ourselves as partners in progress, collaborating with
                our clients to craft solutions that are thoughtful, scalable,
                and equitable. Guided by curiosity and integrity, our mission is
                to create technology that solves real problems and is ready for
                what’s next.”
              </p>
              <p className="text-base md:text-lg font-semibold mt-5 md:mt-8">
                Vishnu V Phalgunan,{" "}
                <span className="text-[#969696] font-normal">
                  Founder & CEO, Starstack
                </span>
              </p>
            </div>
          </div>
        </div>
        <h1 className="text-3xl md:text-[56px] font-bold text-center mt-10 md:mt-20 mb-5">
          Our <span className="text-[#8e8e8e]">Culture</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="text-center">
            <div className="h-24">
              <Image
                src="/icons/design.png"
                alt=""
                width={65}
                height={98}
                className="mx-auto"
              />
            </div>
            <h3 className="text-xl md:text-[32px] font-semibold mt-4">
              Culture by Design
            </h3>
            <p className="text-base md:text-lg">
              For us, culture isn’t an afterthought, it’s the foundation of
              everything we build.We are a team of curious minds, problem
              solvers, and makers who thrive on collaboration and continuous
              learning. Innovation drives us, but integrity grounds us.
            </p>
          </div>
          <div className="text-center">
            <div className="h-24">
              <Image
                src="/icons/teams.png"
                alt=""
                width={90}
                height={85}
                className="mx-auto"
              />
            </div>
            <h3 className="text-xl md:text-[32px] font-semibold mt-4">
              Open Ideas, Empowered Teams
            </h3>
            <p className="text-base md:text-lg">
              We believe great ideas can come from anywhere, so we keep our
              structure flat, our feedback open, and our teams empowered.
              Everyone at Starstack is encouraged to take ownership, ask better
              questions, and challenge the status quo.
            </p>
          </div>
          <div className="text-center">
            <div className="h-24">
              <Image
                src="/icons/innovation.png"
                alt=""
                width={110}
                height={110}
                className="mx-auto"
              />
            </div>
            <h3 className="text-xl md:text-[32px] font-semibold mt-4">
              Diversity Drives Innovation
            </h3>
            <p className="text-base md:text-lg">
              We celebrate diversity, not just in backgrounds, but in
              perspectives, skills, and ways of thinking. Whether {`we're`}
              designing intelligent products, solving tough technical
              challenges, or brainstorming over a cup of coffee, we do it with
              passion, purpose, and a shared sense of possibility.
            </p>
          </div>
          <div className="text-center">
            <div className="h-24">
              <Image
                src="/icons/build.png"
                alt=""
                width={92}
                height={107}
                className="mx-auto"
              />
            </div>
            <h3 className="text-xl md:text-[32px] font-semibold mt-4">
              Building what matters
            </h3>
            <p className="text-base md:text-lg">
              This is a place where creativity meets clarity, and where every
              line of code or pixel of design brings us and our clients one step
              closer to real world transformation.
            </p>
          </div>
        </div>
        <div
          className="my-10 md:my-20 text-center p-10 rounded-[40px]"
          style={{
            background:
              "linear-gradient(103.86deg, #000000 9.09%, #626262 101.14%)",
          }}
        >
          <h1 className="text-3xl lg:text-[86px] text-white font-bold leading-tight">
            Interested in
          </h1>
          <h2 className="text-3xl lg:text-[86px] text-white italic leading-tight">
            Partnering with Us?
          </h2>
          <ContactButton />
        </div>
      </section>
      <Footer />
    </main>
  );
}
