"use client";

import { useMemo, useState } from "react";
import { MdPhoneInTalk } from "react-icons/md";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import countryList from "react-select-country-list";

const countries = ["Country", "India", "USA", "UK", "Germany", "UAE"];
const services = [
  "Services I’m Interested In",
  "Digital & AI Consulting",
  "Experience Design",
  "Software Engineering",
  "Web 3.0",
  "Data & AI",
  "Cloud Services",
];

const ContactSection = ({ title = "", service = "" }) => {
  const [loading, setLoading] = useState(false);

  const options = useMemo(() => countryList().getData(), [])

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    // TODO: send data to your API
    // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
    setTimeout(() => setLoading(false), 600);
    form.reset();
  }

  return (
    <section className="px-4 lg:px-20 py-14 bg-white text-black">
      <div className="grid lg:grid-cols-[1fr_420px] gap-8">
        <form onSubmit={handleSubmit} className="rounded-2xl" noValidate>
          <h2
            className={`mb-8 ${
              title
                ? "text-[32px] font-semibold text-left"
                : "md:text-center text-3xl md:text-[56px] font-extrabold"
            }`}
          >
            {!title ? (
              <>
                Contact <span className="text-[#8E8E8E]">Us</span>
              </>
            ) : (
              title
            )}
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              name="firstName"
              placeholder="First name"
              className="h-11 rounded-full border border-gray-200 px-4 text-sm outline-none focus:border-gray-300 focus:ring-2 focus:ring-black/10"
            />
            <input
              name="lastName"
              placeholder="Last name"
              className="h-11 rounded-full border border-gray-200 px-4 text-sm outline-none focus:border-gray-300 focus:ring-2 focus:ring-black/10"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <input
              name="company"
              placeholder="Company Name"
              className="h-11 rounded-full border border-gray-200 px-4 text-sm outline-none focus:border-gray-300 focus:ring-2 focus:ring-black/10"
            />
            <input
              type="email"
              name="workEmail"
              placeholder="Work Email"
              className="h-11 rounded-full border border-gray-200 px-4 text-sm outline-none focus:border-gray-300 focus:ring-2 focus:ring-black/10"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            <select
              name="country"
              className="h-11 rounded-full border border-gray-200 px-4 text-sm outline-none focus:border-gray-300 focus:ring-2 focus:ring-black/10"
            >
              <option value="">Select Country</option>
              {options.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
            <input
              name="phone"
              placeholder="Phone Number"
              className="h-11 rounded-full border border-gray-200 px-4 text-sm outline-none focus:border-gray-300 focus:ring-2 focus:ring-black/10"
            />
            <select
              name="service"
              className="h-11 rounded-full border border-gray-200 px-4 text-sm outline-none focus:border-gray-300 focus:ring-2 focus:ring-black/10 col-span-2 md:col-span-1"
              defaultValue={service || services[0]}
            >
              {services.map((s) => (
                <option key={s} value={s} disabled={s === services[0]}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <textarea
            name="message"
            rows={5}
            placeholder="Tell Us About Your Project"
            className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-300 focus:ring-2 focus:ring-black/10"
          />
          <div className="mt-0 md:mt-5">
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex items-center gap-3 rounded-full bg-black px-6 py-3 text-base md:text-sm font-semibold shadow-sm transition hover:opacity-90 disabled:opacity-50 text-white"
            >
              {loading ? "Sending…" : "Send a Message"}
            </button>
          </div>
        </form>
        <aside className="rounded-2xl bg-black text-white p-6 md:p-8 relative overflow-hidden">
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#FFFFFF1F]" />
          <div className="pointer-events-none absolute bottom-10 right-16 h-25 w-25 rounded-full bg-[#FFF9F921]" />
          <h3 className="text-xl md:text-[28px] font-semibold">
            Contact Information
          </h3>
          <p className="mt-1 text-base md:text-lg text-[#C9C9C9]">
            Say something to start a live chat!
          </p>
          <ul className="mt-6 space-y-4 text-base md:text-lg">
            <li className="flex items-start gap-3">
              <MdPhoneInTalk className="h-5 w-5 shrink-0" />
              <span>+91 9567 113 777</span>
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="h-5 w-5 shrink-0" />
              <span>contact@starstacktech.com</span>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="h-5 w-5 shrink-0" />
              <div>
                <div className="font-medium">KOCHI</div>
                <div className="text-base">
                  Registered Office Address: 55/1688
                  <br />
                  Suraj Buildings, Club Road,
                  <br />
                  Kadavanthra, Kochi - 682020
                  <br />
                  (headquarters, Delivery center, R&amp;D)
                </div>
                <div className="mt-2">
                  <div className="font-medium">USA</div>
                  <div className="text-base">
                    San Francisco, California
                    <br /> (sales HQ)
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
};

export default ContactSection;
