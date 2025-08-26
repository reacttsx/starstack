import CapabilitiesTabs from "@/app/components/CapabilitiesTabs";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import ServiceHero from "@/app/components/ServiceHero";

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

export default function Cloud() {
  return (
    <main>
      <Navbar />
      <ServiceHero
        bgVideo={{
          src: "/videos/cloud-service.mp4",
          poster: "/videos/cloud-service.jpg",
        }}
        rightImage="/images/cloud-service.jpg"
        rightImgMobile="/images/cloud-service.jpg"
        eyebrow="Cloud Services"
        title={
          "Migrate and Modernize your applications with our Cloud  Engineering services"
        }
        description={
          "Accelerate innovation and reduce operational complexity with tailored cloud  engineering solutions."
        }
        offsetForNavbar
      />
      <section className="px-4 lg:px-20 pt-12 md:py-8 lg:mt-[-150px] relative">
        <h2 className="text-3xl md:text-[56px] font-bold tracking-tight">
          <span className="text-black">Our</span>{" "}
          <span className="text-[#8e8e8e]">Capabilities</span>
        </h2>
        <CapabilitiesTabs />
      </section>
      <ContactSection service="Cloud Services" />
      <Footer />
    </main>
  );
}
