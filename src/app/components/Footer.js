"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const services = [
  {
    name: "Digital & AI Consulting",
    link: "/services/digital-and-ai-consulting",
  },
  { name: "Experience Design", link: "/services/experience-design" },
  { name: "Software Engineering", link: "/services/software-engineering" },
  { name: "Web 3.0", link: "/services/web3" },
  { name: "Data & AI", link: "/services/data-ai" },
  { name: "Cloud Services", link: "/services/cloud" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  // { label: "Cookies", href: "#" },
  // { label: "Cookie Settings", href: "#" },
  // { label: "Terms and Conditions", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="md:hidden">
        <div className="flex justify-center pt-10">
          <Image
            src="/logo.png"
            alt="Starstack"
            width={190}
            height={40}
            priority
          />
        </div>
        <p className="mx-auto mt-4 max-w-sm px-6 text-center text-base text-white/40">
          Be sure to take a look at our{" "}
          <Link href="/privacy-policy" className="underline underline-offset-4">
            Privacy Policy
          </Link>
        </p>
        <hr className="mx-5 mt-5 border-[#2D2D2D] border-2" />
        <div className="py-6 text-center">
          <div className="text-base mb-3">Contacts</div>
          <div className="flex items-center justify-center gap-3">
            <Social
              href="https://www.linkedin.com/company/starstack/"
              label="LinkedIn"
            >
              <FaLinkedinIn className="h-4 w-4" />
            </Social>
            <Social
              href="https://www.instagram.com/starstack.tech?igsh=MXhpbDB3bWp2YmluMA=="
              label="Instagram"
            >
              <FaInstagram className="h-4 w-4" />
            </Social>
            <Social href="https://x.com/Starstack_tech" label="X / Twitter">
              <FaXTwitter className="h-4 w-4" />
            </Social>
            <Social
              href="https://www.facebook.com/share/1G8H2Jgbx1/?mibextid=wwXIfr"
              label="Facebook"
            >
              <FaFacebookF className="h-4 w-4" />
            </Social>
          </div>
        </div>
        <hr className="mx-5 border-[#2D2D2D] border-2" />
        <div className="px-6 py-6 grid grid-cols-3 gap-4 text-base">
          <div>
            <div className="mb-3">Services</div>
            <ul className="space-y-2 text-[#ADADAD] text-xs">
              {services.map((s) => (
                <li key={s.name}>
                  <Link href={s.link} className="hover:opacity-80">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center">
            <div className="mb-3">About Us</div>
          </div>
          <div className="text-right">
            <div className="mb-3">Portfolio</div>
          </div>
        </div>
        <hr className="mx-5 border-[#2D2D2D] border-2" />
        <div className="px-6 py-5 text-center text-xs text-[#FCFCFC]">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            {legal.map((l, i) => (
              <span key={l.label} className="flex items-center gap-2">
                <Link href={l.href} className="hover:opacity-80">
                  {l.label}
                </Link>
                {i !== legal.length - 1 && (
                  <span className="text-white/40">|</span>
                )}
              </span>
            ))}
          </div>
          <div className="mt-4 text-white text-xs">
            &copy; {new Date().getFullYear()} Starstack Technologies Pvt. Ltd.
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="px-4 lg:px-20 py-10 md:py-14">
          <div className="flex justify-between gap-10 items-start">
            <div className="space-y-4 flex-1">
              <div className="flex items-center gap-10 text-base lg:text-lg text-white text-nowrap">
                <Link
                  href="/services"
                  className="opacity-90 hover:opacity-100 transition"
                >
                  Services
                </Link>
                <Link
                  href="/about-us"
                  className="opacity-90 hover:opacity-100 transition"
                >
                  About Us
                </Link>
                <Link
                  href="/portfolio"
                  className="opacity-90 hover:opacity-100 transition"
                >
                  Portfolio
                </Link>
              </div>
              <ul className="mt-2 space-y-3 text-base lg:text-lg text-[#ADADAD]">
                {services.map((s) => (
                  <li key={s.name}>
                    <Link
                      href={s.link}
                      className="opacity-80 hover:opacity-100 transition"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center flex-1">
              <div className="flex justify-center">
                <Image
                  src="/logo.png"
                  alt="Starstack"
                  width={190}
                  height={40}
                  priority
                />
              </div>
              <p className="mt-4 text-base lg:text-lg text-white/40">
                Be sure to take a look at our{" "}
                <Link href="/privacy-policy" className="underline underline-offset-4">
                  Privacy Policy
                </Link>
              </p>
              <div className="mt-5">
                <div className="text-base text-white">Contacts</div>
                <div className="mt-3 flex items-center justify-center gap-3">
                  <Social
                    href="https://www.linkedin.com/company/starstack/"
                    label="LinkedIn"
                  >
                    <FaLinkedinIn className="h-4 w-4" />
                  </Social>
                  <Social
                    href="https://www.instagram.com/starstack.tech?igsh=MXhpbDB3bWp2YmluMA=="
                    label="Instagram"
                  >
                    <FaInstagram className="h-4 w-4" />
                  </Social>
                  <Social
                    href="https://x.com/Starstack_tech"
                    label="X / Twitter"
                  >
                    <FaXTwitter className="h-4 w-4" />
                  </Social>
                  <Social
                    href="https://www.facebook.com/share/1G8H2Jgbx1/?mibextid=wwXIfr"
                    label="Facebook"
                  >
                    <FaFacebookF className="h-4 w-4" />
                  </Social>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-end">
              <ul className="space-y-3 text-base lg:text-lg text-[#FCFCFC]">
                {legal.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="opacity-100 hover:opacity-80 transition"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-6 text-center text-lg text-white">
            &copy; {new Date().getFullYear()} Starstack Technologies Pvt. Ltd.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

function Social({ href, label, children }) {
  return (
    <Link
      href={href}
      target="_blank"
      aria-label={label}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition hover:bg-transparent hover:text-white hover:ring-1 hover:ring-white/50"
    >
      {children}
    </Link>
  );
}
