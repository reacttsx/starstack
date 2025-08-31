"use client";

import { useMemo } from "react";
import { MdPhoneInTalk } from "react-icons/md";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import countryList from "react-select-country-list";
import { FiChevronDown } from "react-icons/fi";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Script from "next/script";

const services = [
  "Services I’m Interested In",
  "Digital & AI Consulting",
  "Experience Design",
  "Software Engineering",
  "Web 3.0",
  "Data & AI",
  "Cloud Services",
];
const FREE_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "yahoo.co.in",
  "ymail.com",
  "rocketmail.com",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "msn.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "proton.me",
  "protonmail.com",
  "pm.me",
  "aol.com",
  "yandex.com",
  "yandex.ru",
  "zoho.com",
  "gmx.com",
  "gmx.de",
  "mail.com",
  "fastmail.com",
  "hey.com",
  "tutanota.com",
  "tuta.io",
  "hushmail.com",
  "inbox.com",
  "rediffmail.com",
]);

const ContactSection = ({ title = "", service = "" }) => {
  const countries = useMemo(() => countryList().getData(), []);
  const defaultService =
    service && services.includes(service) ? service : services[0];

  const schema = Yup.object({
    firstName: Yup.string()
      .trim()
      .min(2, "Enter at least 2 characters")
      .required("First name is required"),
    lastName: Yup.string()
      .trim()
      .min(2, "Enter at least 2 characters")
      .required("Last name is required"),
    company: Yup.string().trim().required("Company name is required"),
    workEmail: Yup.string()
      .email("Enter a valid work email")
      .required("Work email is required")
      .test(
        "work-email",
        "Please use your work email (no personal providers like Gmail/Yahoo)",
        (val) => {
          if (!val) return false;
          const domain = val.split("@")[1]?.toLowerCase().trim();
          if (!domain) return false;
          return !FREE_EMAIL_DOMAINS.has(domain);
        }
      ),
    country: Yup.string().required("Country is required"),
    phone: Yup.string()
      .matches(/^[0-9+()\-\s]{7,20}$/, "Enter a valid phone number")
      .required("Phone is required"),
    service: Yup.string()
      .test(
        "not-placeholder",
        "Please select a service",
        (val) => !!val && val !== services[0]
      )
      .required("Please select a service"),
    message: Yup.string()
      .trim()
      .min(10, "Please provide at least 10 characters")
      .required("Tell us about your project"),
  });

  const getRecaptchaToken = async (action) => {
    if (!process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY) return null;

    if (typeof window === "undefined" || !window.grecaptcha) {
      await new Promise((r) => setTimeout(r, 100));
    }

    if (!window.grecaptcha) return null;

    return new Promise((resolve) => {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY, { action })
          .then((t) => resolve(t))
          .catch(() => resolve(null));
      });
    });
  };

  const inputClass = (touched, error) =>
    [
      "h-11 w-full rounded-full border px-4 text-sm outline-none appearance-none",
      error && touched
        ? "border-red-500 ring-2 ring-red-100"
        : "border-gray-200 focus:border-gray-300 focus:ring-2 focus:ring-black/10",
    ].join(" ");

  const selectWrap = "relative w-full";
  const selectChevron =
    "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-black";

  return (
    <section className="px-4 lg:px-20 py-14 bg-white text-black">
      {process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY && (
        <Script
          id="recaptcha-v3"
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      )}
      <div className="grid lg:grid-cols-[1fr_420px] gap-8">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            company: "",
            workEmail: "",
            country: "",
            phone: "",
            service: defaultService,
            message: "",
          }}
          validationSchema={schema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            try {
              const recaptchaToken = await getRecaptchaToken("contact_form");
              console.log(recaptchaToken);

              if (!recaptchaToken) {
                alert("reCAPTCHA failed to load. Please try again.");
                return;
              }

              const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...values, recaptchaToken }),
              });

              if (!res.ok) {
                const msg = await res.text();
                throw new Error(msg || "Submission failed");
              }

              resetForm();
              alert("Thanks! We’ll get back to you soon.");
            } catch (err) {
              alert(err?.message || "Something went wrong.");
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting, touched, errors }) => (
            <Form className="rounded-2xl" noValidate>
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
                <div>
                  <Field
                    name="firstName"
                    placeholder="First name"
                    className={inputClass(touched.firstName, errors.firstName)}
                    aria-invalid={!!(touched.firstName && errors.firstName)}
                  />
                  <ErrorMessage
                    name="firstName"
                    component="p"
                    className="mt-1 text-xs text-red-600"
                  />
                </div>
                <div>
                  <Field
                    name="lastName"
                    placeholder="Last name"
                    className={inputClass(touched.lastName, errors.lastName)}
                    aria-invalid={!!(touched.lastName && errors.lastName)}
                  />
                  <ErrorMessage
                    name="lastName"
                    component="p"
                    className="mt-1 text-xs text-red-600"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Field
                    name="company"
                    placeholder="Company Name"
                    className={inputClass(touched.company, errors.company)}
                    aria-invalid={!!(touched.company && errors.company)}
                  />
                  <ErrorMessage
                    name="company"
                    component="p"
                    className="mt-1 text-xs text-red-600"
                  />
                </div>
                <div>
                  <Field
                    type="email"
                    name="workEmail"
                    placeholder="Work Email"
                    className={inputClass(touched.workEmail, errors.workEmail)}
                    aria-invalid={!!(touched.workEmail && errors.workEmail)}
                  />
                  <ErrorMessage
                    name="workEmail"
                    component="p"
                    className="mt-1 text-xs text-red-600"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                <div className={selectWrap}>
                  <Field
                    as="select"
                    name="country"
                    className={inputClass(touched.country, errors.country)}
                    aria-invalid={!!(touched.country && errors.country)}
                  >
                    <option value="">Select Country</option>
                    {countries.map((c) => (
                      <option key={c.value} value={c.value}>
                        {c.label}
                      </option>
                    ))}
                  </Field>
                  <span className={selectChevron}>
                    <FiChevronDown />
                  </span>
                  <ErrorMessage
                    name="country"
                    component="p"
                    className="mt-1 text-xs text-red-600"
                  />
                </div>
                <div>
                  <Field
                    name="phone"
                    placeholder="Phone Number"
                    className={inputClass(touched.phone, errors.phone)}
                    aria-invalid={!!(touched.phone && errors.phone)}
                  />
                  <ErrorMessage
                    name="phone"
                    component="p"
                    className="mt-1 text-xs text-red-600"
                  />
                </div>
                <div className={selectWrap}>
                  <Field
                    as="select"
                    name="service"
                    className={inputClass(touched.service, errors.service)}
                    aria-invalid={!!(touched.service && errors.service)}
                  >
                    {services.map((s) => (
                      <option key={s} value={s} disabled={s === services[0]}>
                        {s}
                      </option>
                    ))}
                  </Field>
                  <span className={selectChevron}>
                    <FiChevronDown />
                  </span>
                  <ErrorMessage
                    name="service"
                    component="p"
                    className="mt-1 text-xs text-red-600"
                  />
                </div>
              </div>
              <div>
                <Field
                  as="textarea"
                  name="message"
                  rows={5}
                  placeholder="Tell Us About Your Project"
                  className={[
                    "w-full rounded-2xl border px-4 py-3 text-sm outline-none",
                    touched.message && errors.message
                      ? "border-red-500 ring-2 ring-red-100"
                      : "border-gray-200 focus:border-gray-300 focus:ring-2 focus:ring-black/10",
                  ].join(" ")}
                  aria-invalid={!!(touched.message && errors.message)}
                />
                <ErrorMessage
                  name="message"
                  component="p"
                  className="mt-1 text-xs text-red-600"
                />
              </div>
              <div className="mt-0 md:mt-5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center gap-3 rounded-full bg-black px-6 py-3 text-base md:text-sm font-semibold shadow-sm transition hover:opacity-90 disabled:opacity-50 text-white"
                >
                  {isSubmitting ? "Sending..." : "Send a Message"}
                </button>
              </div>
              <p className="mt-3 text-xs text-black/60">
                This site is protected by reCAPTCHA and the Google{" "}
                <a
                  className="underline"
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noreferrer"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  className="underline"
                  href="https://policies.google.com/terms"
                  target="_blank"
                  rel="noreferrer"
                >
                  Terms of Service
                </a>{" "}
                apply.
              </p>
            </Form>
          )}
        </Formik>
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
