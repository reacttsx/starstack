"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  FiChevronDown,
  FiChevronRight,
  FiChevronLeft,
  FiMenu,
  FiX,
} from "react-icons/fi";

const services = [
  {
    href: "/services/digital-and-ai-consulting",
    label: "Digital & AI Consulting",
  },
  { href: "/services/experience-design", label: "Experience Design" },
  { href: "/services/software-engineering", label: "Software Engineering" },
  { href: "/services/web3", label: "Web 3.0" },
  { href: "/services/data-ai", label: "Data & AI" },
  { href: "/services/cloud", label: "Cloud Services" },
];

const Navbar = ({ staticHeader = false }) => {
  const [openDesktop, setOpenDesktop] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const timer = useRef(null);
  const pathname = usePathname();

  const isActive = (href) => pathname === href || pathname.startsWith(href);
  const isServicesActive = pathname.startsWith("/services");

  useEffect(() => {
    const root = document.documentElement;

    if (mobileOpen) root.style.overflow = "hidden";
    else root.style.overflow = "";

    return () => {
      root.style.overflow = "";
    };
  }, [mobileOpen]);

  const enter = () => {
    if (timer.current) window.clearTimeout(timer.current);
    setOpenDesktop(true);
  };

  const leave = () => {
    timer.current = window.setTimeout(() => setOpenDesktop(false), 120);
  };

  return (
    <header className={`absolute top-0 left-0 w-full z-40 py-4 px-4 lg:px-20 ${staticHeader ? "bg-black" : ""}`}>
      <div className="flex items-center justify-between">
        <Link href="/" className="block">
          <Image
            src="/logo.png"
            alt="Starstack"
            width={140}
            height={22}
            className="md:w-[233px] md:h-[28px]"
          />
        </Link>
        <nav className="hidden lg:flex gap-12 items-center text-lg text-white">
          <div
            className="relative inline-block"
            onMouseEnter={enter}
            onMouseLeave={leave}
          >
            <button
              className={`inline-flex items-center gap-1 text-[#919191] hover:text-white transition ${
                openDesktop || pathname.includes("services") ? "text-white" : ""
              }`}
              aria-haspopup="menu"
              aria-expanded={openDesktop}
            >
              Services <FiChevronDown className="ml-1 h-4 w-4" />
            </button>
            {openDesktop && (
              <div
                role="menu"
                className="absolute left-0 top-full mt-2 w-[360px] z-50"
              >
                <div className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl overflow-hidden">
                  <ul className="py-2">
                    {services.map((s, i) => {
                      const active = isActive(s.href);

                      return (
                        <li key={s.href}>
                          <Link
                            href={s.href}
                            className={[
                              "flex items-center gap-3 px-5 py-3 transition",
                              i !== services.length - 1
                                ? "border-b border-[#7373734D]"
                                : "",
                              active
                                ? "text-white"
                                : "text-[#919191] hover:text-white focus:text-white",
                            ].join(" ")}
                          >
                            <span className="flex-1">{s.label}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            )}
          </div>
          <Link
            href="/portfolio"
            className={[
              "transition",
              isActive("/portfolio")
                ? "text-white"
                : "text-[#919191] hover:text-white",
            ].join(" ")}
          >
            Portfolio
          </Link>
          <Link
            href="/about-us"
            className={[
              "transition",
              isActive("/about-us")
                ? "text-white"
                : "text-[#919191] hover:text-white",
            ].join(" ")}
          >
            About Us
          </Link>
          <Link
            href="/contact-us"
            className={[
              "px-4 py-2 rounded-full text-base font-bold transition border",
              isActive("/contact-us")
                ? "bg-white text-black border-white"
                : "border-white hover:bg-white hover:text-black",
            ].join(" ")}
          >
            Contact Us
          </Link>
        </nav>
        <button
          className="lg:hidden text-white/90"
          aria-label="Open menu"
          onClick={() => {
            setMobileOpen(true);
            setShowServices(false);
          }}
        >
          <FiMenu className="h-7 w-7" />
        </button>
      </div>
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black text-white">
          <div className="flex items-center justify-between px-5 py-4">
            {!showServices ? (
              <span className="w-6" />
            ) : (
              <button
                className="p-2 -ml-2"
                onClick={() => setShowServices(false)}
                aria-label="Back"
              >
                <FiChevronLeft className="h-6 w-6" />
              </button>
            )}

            <button
              className="p-2 -ml-2"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <FiX className="h-6 w-6" />
            </button>
          </div>
          <div className="relative h-[calc(100dvh-56px)] overflow-hidden">
            <div
              className={`absolute inset-0 px-8 pt-2 transition-transform duration-300 ${
                showServices ? "-translate-x-full" : "translate-x-0"
              }`}
            >
              <ul className="text-base space-y-6">
                <li>
                  <button
                    onClick={() => setShowServices(true)}
                    className={[
                      "flex w-full items-center justify-between py-3",
                      isServicesActive ? "text-white" : "text-white/80",
                    ].join(" ")}
                  >
                    <span>Services</span>
                    <FiChevronRight className="h-5 w-5" />
                  </button>
                  <div className="h-px w-full bg-white/15" />
                </li>
                <li>
                  <Link
                    href="/about-us"
                    onClick={() => setMobileOpen(false)}
                    className={[
                      "block py-3",
                      isActive("/about-us") ? "text-white" : "text-white/80",
                    ].join(" ")}
                  >
                    About Us
                  </Link>
                  <div className="h-px w-full bg-white/15" />
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    onClick={() => setMobileOpen(false)}
                    className={[
                      "block py-3",
                      isActive("/portfolio") ? "text-white" : "text-white/80",
                    ].join(" ")}
                  >
                    Portfolio
                  </Link>
                  <div className="h-px w-full bg-white/15" />
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    onClick={() => setMobileOpen(false)}
                    className={[
                      "block py-3",
                      isActive("/contact-us") ? "text-white" : "text-white/80",
                    ].join(" ")}
                  >
                    Contact Us
                  </Link>
                  <div className="h-px w-full bg-white/15" />
                </li>
              </ul>
            </div>
            <div
              className={`absolute inset-0 px-8 pt-2 transition-transform duration-300 ${
                showServices ? "translate-x-0" : "translate-x-full"
              }`}
              aria-hidden={!showServices}
            >
              <ul className="text-base space-y-6">
                {services.map((s, i) => {
                  const active = isActive(s.href);

                  return (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        onClick={() => setMobileOpen(false)}
                        className={[
                          "block py-3",
                          active ? "text-white" : "text-white/80",
                        ].join(" ")}
                      >
                        {s.label}
                      </Link>
                      {i !== services.length - 1 && (
                        <div className="h-px w-full bg-white/15" />
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
