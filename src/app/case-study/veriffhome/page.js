import CaseStudyHero from "@/app/components/CaseStudyHero";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export default function Veriffhome() {
  return (
    <main className="bg-white text-black">
      <CaseStudyHero
        imageSrc="/images/veriffhome.png"
        imageAlt="Veriffhome case header"
        title="VeriffHome - A Fintech Platform for Identity Verification,  Escrow Payments & Credit Scoring"
        category="Renewable Energy"
        backHref="/industries"
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
                  src="/images/veriffcase1.png"
                  alt="Veriffhome"
                  fill
                  sizes="(min-width:1024px) 50vw, 100vw"
                  className="object-contain rounded-xl border border-black"
                />
              </div>
            </div>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-[#1F1F1F]">
              An US-based fintech startup, aimed to create a trusted rental and
              payments platform tailored for property managers and tenants.
              Their goal was to ensure safe transactions through verified user
              identities, escrow-secured payments, and dynamic credit risk
              scoring. To support their go-to-market strategy, they needed a
              robust full-stack system with automated verification workflows,
              scoring dashboards, and integrated payment rails.
            </p>
          </div>
          <div className="overflow-hidden hidden md:block">
            <div className="relative aspect-[16/9]">
              <Image
                src="/images/veriffcase1.png"
                alt="Veriffhome"
                fill
                sizes="(min-width:1024px) 50vw, 100vw"
                className="object-contain rounded-xl border border-black"
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
                src="/icons/challenge11.png"
                alt="Manual KYC processes"
                width={80}
                height={80}
                className="mx-auto md:mx-0 w-auto h-20"
              />
              <div className="mt-2 md:mt-0">
                <p className="text-base md:text-lg leading-relaxed text-center md:text-left">
                  Manual KYC processes causing delays and user drop-offs.
                </p>
              </div>
            </div>
            <div className="md:flex items-start gap-4">
              <Image
                src="/icons/challenge21.png"
                alt="No reliable system"
                width={80}
                height={80}
                className="mx-auto md:mx-0 w-auto h-16"
              />
              <div className="mt-2 md:mt-0">
                <p className="text-base md:text-lg leading-relaxed text-center md:text-left">
                  No reliable system to manage escrowed payments securely.
                </p>
              </div>
            </div>
            <div className="md:flex items-start gap-4">
              <Image
                src="/icons/challenge31.png"
                alt="Inability to assess tenant"
                width={80}
                height={80}
                className="mx-auto md:mx-0 w-auto h-20"
              />
              <div className="mt-2 md:mt-0">
                <p className="text-base md:text-lg leading-relaxed text-center md:text-left">
                  Inability to assess tenant creditworthiness in real time.
                </p>
              </div>
            </div>
            <div className="md:flex items-start gap-4">
              <Image
                src="/icons/challenge41.png"
                alt="Lack of centralized tools"
                width={80}
                height={80}
                className="mx-auto md:mx-0 w-auto h-16"
              />
              <div className="mt-2 md:mt-0">
                <p className="text-base md:text-lg leading-relaxed text-center md:text-left">
                  Lack of centralized tools for admins to monitor verifications
                  and payments.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 md:mt-24">
          <h3 className="text-3xl md:text-[56px] font-bold tracking-tight text-center md:text-left">
            Solutions
          </h3>
          <div className="mt-5 grid gap-x-10 gap-y-5 md:gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Image
                src="/icons/solution11.png"
                alt="Designed and developed a web portal for quote generation"
                width={80}
                height={80}
                className="mx-auto w-20 h-20"
              />
              <div className="mt-2">
                <p className="text-base md:text-lg leading-relaxed text-center md:text-left">
                  Built a custom KYC/ID verification engine using Plaid for bank
                  linking and Passport.js for secure authentication, optimized
                  for web and mobile.
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/icons/solution21.png"
                alt="Integrated the quote functionality directly with their CRM"
                width={80}
                height={80}
                className="mx-auto w-16 h-16"
              />
              <div className="mt-2 md:mt-6">
                <p className="text-base md:text-lg leading-relaxed text-center md:text-left">
                  Developed an escrow payment system with Stripe Connect and
                  Veriff, allowing tenants and landlords to transact safely,
                  with auto-release conditions.
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/icons/solution31.png"
                alt="Enabled the sales team to access lead details instantly"
                width={80}
                height={80}
                className="mx-auto w-20 h-20"
              />
              <div className="mt-2">
                <p className="text-base md:text-lg leading-relaxed text-center md:text-left">
                  Designed a credit scoring engine using soft credit data,
                  payment behavior, and fraud signals to provide risk scores
                  instantly.
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/icons/solution41.png"
                alt="Enabled the sales team to access lead details instantly"
                width={80}
                height={80}
                className="mx-auto w-20 h-20"
              />
              <div className="mt-2">
                <p className="text-base md:text-lg leading-relaxed text-center md:text-left">
                  Created an internal admin dashboard to manage users, track
                  verifications, and handle dispute resolutions efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 md:mt-24">
          <h3 className="text-3xl md:text-[56px] font-bold tracking-tight text-center">
            Tech Stack <span className="text-[#8e8e8e]">Used</span>
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-5 md:gap-10 lg:gap-20 mt-10">
            <Image
              src="/icons/react.png"
              alt="Veriffhome tech stack"
              width={45}
              height={40}
            />
            <Image
              src="/icons/tailwind.png"
              alt="Veriffhome tech stack"
              width={65}
              height={40}
            />
            <Image
              src="/icons/nodejs.png"
              alt="Veriffhome tech stack"
              width={148}
              height={40}
            />
            <Image
              src="/icons/mongodb.png"
              alt="Veriffhome tech stack"
              width={148}
              height={40}
            />
            <Image
              src="/icons/aws.png"
              alt="Veriffhome tech stack"
              width={67}
              height={40}
            />
            <Image
              src="/icons/stripe.png"
              alt="Veriffhome tech stack"
              width={96}
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
                src="/icons/value11.png"
                alt="Value created"
                width={68}
                height={60}
                className="mx-auto"
              />
              <p className="text-[15px] md:text-base leading-relaxed mt-5">
                Reduced identity verification time from 48 hours to under 5
                minutes
              </p>
            </div>
            <div className="flex-1 px-5 pb-6 pt-0 md:pt-6 text-center">
              <Image
                src="/icons/value21.png"
                alt="Value created"
                width={68}
                height={60}
                className="mx-auto"
              />
              <p className="text-[15px] md:text-base leading-relaxed mt-5">
                Escrow-based payments increased transaction security and built
                user trust
              </p>
            </div>
            <div className="flex-1 px-5 pb-6 pt-0 md:pt-6 text-center">
              <Image
                src="/icons/value31.png"
                alt="Value created"
                width={68}
                height={60}
                className="mx-auto"
              />
              <p className="text-[15px] md:text-base leading-relaxed mt-5">
                Risk scoring improved tenant filtering and reduced payment
                defaults
              </p>
            </div>
            <div className="flex-1 px-5 pb-6 pt-0 md:pt-6 text-center">
              <Image
                src="/icons/value41.png"
                alt="Value created"
                width={68}
                height={60}
                className="mx-auto"
              />
              <p className="text-[15px] md:text-base leading-relaxed mt-5">
                Boosted admin productivity by 60% with real-time dashboards and
                automation
              </p>
            </div>
            <div className="flex-1 px-5 pb-6 pt-0 md:pt-6 text-center">
              <Image
                src="/icons/value51.png"
                alt="Value created"
                width={68}
                height={60}
                className="mx-auto"
              />
              <p className="text-[15px] md:text-base leading-relaxed mt-5">
                Helped the client pass early compliance checks and attract
                pre-seed investment
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
