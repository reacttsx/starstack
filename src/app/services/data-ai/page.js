import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import ServiceHero from "@/app/components/ServiceHero";
import Image from "next/image";

const aiServices = [
  {
    title: "Data & AI Services",
    img: "/images/services/data-ai.jpg",
    body: "Starstack helps businesses unlock the true potential of their data through intelligent, AI-powered solutions. By combining advanced analytics, custom machine learning models, and deep AI capabilities, we transform raw data into actionable insights and smarter systems, fueling innovation, automation, and sustainable growth.",
  },
  {
    title: "Generative AI",
    img: "/images/services/generative-ai.jpg",
    body: "We build generative AI models that can create content, simulate scenarios, and enhance decision-making across domains. Whether it’s text, image, audio, or code, our services leverage cutting-edge transformer models and fine-tuned algorithms to deliver creative, high-impact outcomes tailored to business needs.",
  },
  {
    title: "Computer Vision",
    img: "/images/services/computer-vision.jpg",
    body: "Our computer vision solutions enable systems to see, interpret, and act on visual data. From object detection and facial recognition to defect analysis and video intelligence, we design and deploy vision models that power automation, enhance safety, and deliver intelligent insights in real time.",
  },
  {
    title: "Machine Learning Models",
    img: "/images/services/ml-models.jpg",
    body: "We develop custom machine learning models that are designed to solve specific business challenges, whether it’s predictive analytics, classification, anomaly detection, or recommendation engines. Every model we build is data-grounded, performance-tuned, and optimized for accuracy and scalability.",
  },
  {
    title: "Natural Language Processing (NLP)",
    img: "/images/services/nlp-models.jpg",
    body: "We create NLP solutions that allow machines to understand, interpret, and generate  human language with context and nuance. From chatbots and language translation to  sentiment analysis and document intelligence, our NLP services deliver seamless  interactions and deep language understanding across use cases.",
  },
  {
    title: "Model Integration & Deployment",
    img: "/images/services/model-integration.jpg",
    body: "We ensure that AI models move from lab to production with speed and confidence. Our  end-to-end model integration and deployment services include API wrapping, real-time  inferencing pipelines, monitoring frameworks, and CI/CD for AI, enabling scalable,  secure, and efficient operationalization of intelligence.",
  },
];

export default function DataAi() {
  return (
    <main>
      <Navbar />
      <ServiceHero
        bgVideo={{
          src: "/videos/data-AI.mp4",
          poster: "/videos/data-AI.jpg",
        }}
        rightImage="/images/data-AI.jpg"
        rightImgMobile="/images/data-AI.jpg"
        eyebrow="Data & AI"
        title={
          "Data-Driven Intelligence. AI-Powered Possibilities.  Real-World Impact."
        }
        description={
          "Unlocking the next era of innovation by turning data into actionable intelligence with AI  at the core."
        }
        offsetForNavbar
      />
      <section className="px-4 lg:px-20 pt-12 md:py-8 lg:mt-[-150px]">
        <h2 className="text-3xl md:text-[56px] font-bold tracking-tight">
          <span className="text-black">Our</span>{" "}
          <span className="text-[#8e8e8e]">Services</span>
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {aiServices.map((s) => (
            <article
              key={s.title}
              className="rounded-2xl bg-black text-white p-6 md:p-7 ring-1 ring-white/10"
            >
              <div className="rounded-xl overflow-hidden">
                <div className="relative aspect-[16/6]">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    sizes="(min-width:1024px) 45vw, 100vw"
                    className="object-cover"
                    priority={false}
                  />
                </div>
              </div>
              <h3 className="mt-5 text-xl md:text-[32px] font-semibold">
                {s.title}
              </h3>
              <p className="mt-3 text-white text-base md:text-lg leading-relaxed">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </section>
      <ContactSection service="Data & AI" />
      <Footer />
    </main>
  );
}
