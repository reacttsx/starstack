import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export default function PrivacyPolicy() {
  return (
    <main>
      <Navbar staticHeader />
      <section className="px-4 lg:px-20 pt-12 md:py-8 mt-20">
        <h2 className="text-3xl md:text-[56px] font-bold tracking-tight">
          <span className="text-black">Privacy</span>{" "}
          <span className="text-[#8e8e8e]">Policy</span>
        </h2>
        <nav
          aria-label="Table of contents"
          className="mt-8 mb-10 border border-neutral-200 rounded-xl p-4 md:p-5 bg-white/70"
        >
          <p className="font-semibold mb-2">On this page</p>
          <ul className="grid gap-2 text-sm md:text-[15px]">
            <li>
              <a className="hover:underline" href="#introduction">
                Introduction
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#security">
                Security
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#cookies">
                Cookies
              </a>
              <ul className="ml-5 mt-1 list-disc marker:text-neutral-400">
                <li>
                  <a className="hover:underline" href="#what-are-cookies">
                    What are Cookies?
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#types-of-cookies">
                    Types of Cookies We Use
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="hover:underline" href="#manage-cookies">
                How to Manage Cookies
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        <article className="prose prose-neutral max-w-full prose-headings:font-extrabold prose-h2:mt-12 prose-h3:mt-8">
          <section id="introduction">
            <h2>Introduction</h2>
            <p>
              Starstack Technologies Private Limited (“Starstack”) values the
              privacy of everyone who visits our website. This Privacy Policy
              explains how we collect, use, and protect your information when
              you interact with our website.
            </p>
            <p>
              We do not link IP addresses to personally identifiable
              information, which means that while a user’s browsing session may
              be tracked, the individual identity remains anonymous.
            </p>
            <p>
              At times, our website may request your contact details, such as
              your name, email address, or phone number through forms or
              registrations. This information is used only for the purpose
              intended:
            </p>
            <ul>
              <li>
                If you submit a query or request our services, we may respond
                using the contact information provided.
              </li>
              <li>
                If you register for an event, you may receive event-specific
                communication.
              </li>
            </ul>
            <p>
              We also use certain web technologies, including cookies, to better
              understand visitor preferences and provide an improved user
              experience.
            </p>
            <p>
              Please note, Starstack may be required by law to disclose personal
              information. Such disclosure will occur only when we have a
              good-faith belief that it is necessary to comply with a legal
              obligation, court order, or to protect our legal rights.
            </p>
            <p>
              Our website may also contain links to external websites. Starstack
              is not responsible for the privacy practices or content of those
              third-party sites.
            </p>
          </section>

          <section id="security">
            <h2>Security</h2>
            <p>
              We take reasonable measures to protect your data from loss,
              misuse, or unauthorized access. Information is stored behind
              firewalls and access is restricted to authorized Starstack
              personnel only.
            </p>
          </section>

          <section id="cookies">
            <h2>Cookies</h2>

            <section id="what-are-cookies">
              <h3>What are Cookies?</h3>
              <p>
                Cookies are small text files stored on your browser by a
                website. They help us measure website usage, improve navigation,
                and personalize your browsing experience. Cookies may sometimes
                be linked to user preferences, but they are not inherently
                connected to personal data.
              </p>
            </section>

            <section id="types-of-cookies">
              <h3>Types of Cookies We Use</h3>
              <ul>
                <li>
                  <strong>Strictly Necessary Cookies</strong> – These are
                  essential for the website to function properly. They ensure
                  security and accessibility of our services.
                </li>
                <li>
                  <strong>Functionality Cookies</strong> – These cookies allow
                  us to remember your preferences, such as pre-filled web forms
                  or personalized content based on your location or selected
                  interests.
                </li>
                <li>
                  <strong>Third-Party Cookies</strong> – We may embed content
                  such as YouTube videos or social sharing widgets, which can
                  set their own cookies. Additionally, we use Google Analytics
                  (including remarketing features) to help us understand visitor
                  behavior and serve relevant content or ads.
                </li>
              </ul>
            </section>

            <p>
              By continuing to use this website, you consent to the placement of
              cookies on your device.
            </p>
          </section>

          <section id="manage-cookies">
            <h2>How to Manage Cookies</h2>
            <p>
              You can set your browser to notify you before receiving a cookie,
              giving you the option to accept or reject it. Most browsers also
              allow you to disable cookies entirely. However, please note that
              turning cookies off may limit some website features.
            </p>
          </section>

          <section id="contact">
            <h2>Contact Us</h2>
            <p>
              If you have questions about this Policy, website practices, or
              data usage, please contact us at{" "}
              <a href="mailto:info@starstacktech.com">info@starstacktech.com</a>
              .
            </p>
          </section>
        </article>
      </section>
      <ContactSection service="Cloud Services" />
      <Footer />
    </main>
  );
}
