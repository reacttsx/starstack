import CapabilitiesTabs from "@/app/components/CapabilitiesTabs";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import ServiceHero from "@/app/components/ServiceHero";

export default function Cloud() {
  return (
    <main>
      <Navbar />
      <ServiceHero
        bgVideo={{
          src: "/videos/cloud-service.mp4",
          poster: "/videos/cloud-service.jpg",
        }}
        rightImage="/images/cloud-service.png"
        rightImgMobile="/images/cloud-service.png"
        eyebrow="Cloud Services"
        title={
          "Migrate and Modernize your applications with our Cloud  Engineering services"
        }
        description={
          "Accelerate innovation and reduce operational complexity with tailored cloud  engineering solutions."
        }
        offsetForNavbar
      />
      <section className="px-4 lg:px-20 pt-12 md:py-8 lg:mt-[-240px] relative z-[60]">
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
