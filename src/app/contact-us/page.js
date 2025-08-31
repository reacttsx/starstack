import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

export const metadata = {
  title: "Contact Starstack | Hire Our Software Development Team",
  description:
    "Get in touch with Starstack. Connect with our team for digital consulting, AI, cloud, and software engineering services.",
};

export default function ContactUs() {
  return (
    <main className="bg-white text-black">
      <Navbar />
      <HeroImage
        imageSrc="/images/contact.png"
        imageAlt="Let’s Connect and Create Something Great"
        eyebrow="Contact Us"
        title={"Let’s Connect and\nCreate Something\nGreat"}
        description="From ideas to execution, we’re with you. Let’s bring your vision to life together."
        align="left"
      />
      <section className="px-6 md:px-20">
        <div
          className="py-12 px-3 md:px-5 text-center bg-no-repeat! bg-cover! text-white rounded-2xl mt-10"
          style={{ background: "url(/images/contact-bg.png)" }}
        >
          <p className="text-base md:text-lg">
            We’d love to hear from you. Drop us a message and we’ll get back to
            you soon.
          </p>
          <h1 className="text-[23px] md:text-[56px] font-semibold md:font-bold my-5">
            Starstack Technologies Pvt. Ltd.
          </h1>
          <h3 className="text-[19px] md:text-2xl">
            Intelligence that transforms. Solutions that scale.
          </h3>
        </div>
      </section>
      <ContactSection title="Have a project or idea? We're listening." />
      <Footer />
    </main>
  );
}
