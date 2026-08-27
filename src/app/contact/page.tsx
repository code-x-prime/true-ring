"use client";

import { useState } from "react";
import Link from "next/link";
import { IconMail, IconPhone, IconMapPin, IconClock, IconBrandLinkedin, IconSend, IconCheck } from "@tabler/icons-react";

const serviceOptions = [
  "Telecalling CRM Software",
  "Cloud Telephony CRM",
  "Auto Dialer CRM",
  "Power Dialer CRM",
  "Predictive Dialer Software",
  "Click-to-Call CRM",
  "Call Tracking CRM",
  "Call Recording Software",
  "Lead Management CRM",
  "IVR Management System",
  "API Integration",
  "WhatsApp Integration",
  "HubSpot Integration",
  "Zoho CRM Integration",
  "Salesforce Integration",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setError("");
    const baseUrl = (process.env.NEXT_PUBLIC_BRIGHTO_API_URL || "https://www.brightoindia.com").replace(/\/+$/, "");
    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      phone: formData.phone.trim(),
      subject: `[Truering] Inquiry for ${formData.service || "Telecalling CRM"}`,
      message: `Company / Organization: ${formData.company || "Not Specified"}\nService Required: ${formData.service}\nSource Site: Truering\n\nMessage:\n${formData.message.trim()}`,
      website: "", // honeypot
      source: "Truering",
      consent: consent ? "true" : "false",
    };

    try {
      // Primary endpoint used in Brighto & Hubcheck
      let response = await fetch(`${baseUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // Fallback endpoint if needed
      if (!response.ok && response.status === 404) {
        response = await fetch(`${baseUrl}/api/contact-us-api`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...payload,
            company: formData.company,
            service: formData.service,
            source: "truering",
          }),
        });
      }

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success !== false) {
        setSubmitted(true);
      } else {
        setError(data.error || "Something went wrong. Please try again or contact us directly.");
      }
    } catch (err) {
      console.error("Contact submission attempt:", err);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-mist/30 text-ink">
      {/* Breadcrumb */}
      <div className="border-b border-hairline/60 bg-white pt-18">
        <div className="mx-auto max-w-7xl px-6 py-3 md:px-8">
          <div className="flex items-center gap-2 text-xs text-graphite">
            <Link href="/" className="hover:text-truering-orange transition-colors">
              Home
            </Link>
            <span className="text-graphite/50">/</span>
            <span className="text-ink font-medium">Contact</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-truering-navy px-6 py-16 md:py-24">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-truering-orange/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-truering-blue/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl text-center text-white md:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-truering-orange" />
            Get in Touch
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Have questions about Truering? Our team is here to help you with demos, integrations, pricing, and support.
          </p>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="relative z-10 -mt-10 px-6">
        <div className="mx-auto max-w-7xl md:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-hairline bg-white p-6 shadow-[0_8px_30px_-12px_rgba(7,30,48,0.12)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(7,30,48,0.16)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-truering-orange-100 text-truering-orange">
                <IconMail className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-sm font-bold uppercase tracking-wider text-graphite">Email Us</h3>
              <a
                href="mailto:support@brightoindia.com"
                className="mt-2 block text-base font-bold text-ink hover:text-truering-orange transition-colors"
              >
                support@brightoindia.com
              </a>
              <p className="mt-1 text-xs text-graphite">We respond within 24 hours</p>
            </div>

            <div className="rounded-2xl border border-hairline bg-white p-6 shadow-[0_8px_30px_-12px_rgba(7,30,48,0.12)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(7,30,48,0.16)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-truering-blue-100 text-truering-blue-600">
                <IconPhone className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-sm font-bold uppercase tracking-wider text-graphite">Call Us</h3>
              <a
                href="tel:+911204539428"
                className="mt-2 block text-base font-bold text-ink hover:text-truering-orange transition-colors"
              >
                +91 120 453 9428
              </a>
              <p className="mt-1 text-xs text-graphite">Mon-Sat, 9 AM - 6 PM IST</p>
            </div>

            <div className="rounded-2xl border border-hairline bg-white p-6 shadow-[0_8px_30px_-12px_rgba(7,30,48,0.12)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(7,30,48,0.16)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-truering-orange-100 text-truering-orange">
                <IconMapPin className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-sm font-bold uppercase tracking-wider text-graphite">Office Address</h3>
              <p className="mt-2 text-base font-bold text-ink">
                C-83, 1st Floor, Sector-2, Noida, India
              </p>
              <p className="mt-1 text-xs text-graphite">Pan-India operations</p>
            </div>

            <div className="rounded-2xl border border-hairline bg-white p-6 shadow-[0_8px_30px_-12px_rgba(7,30,48,0.12)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(7,30,48,0.16)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-truering-blue-100 text-truering-blue-600">
                <IconClock className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-sm font-bold uppercase tracking-wider text-graphite">Working Hours</h3>
              <p className="mt-2 text-base font-bold text-ink">Mon-Sat</p>
              <p className="mt-1 text-xs text-graphite">9:00 AM - 6:00 PM IST</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form + social side */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl md:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_320px]">
            {/* Form */}
            <div className="rounded-3xl border border-hairline bg-white p-6 shadow-[0_8px_40px_-16px_rgba(7,30,48,0.12)] sm:p-10">
              {!submitted ? (
                <>
                  <div className="mb-8">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-truering-blue">
                      Contact Form
                    </span>
                    <h2 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl">
                      Send Us a Message
                    </h2>
                    <p className="mt-3 text-sm text-graphite">
                      Fill in the details below and our team will get back to you within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-ink">
                          Full Name <span className="text-truering-orange">*</span>
                        </label>
                        <input
                          required
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full rounded-xl border border-hairline bg-mist/30 px-4 py-3 text-sm text-ink placeholder:text-graphite/50 outline-none transition-all focus:border-truering-orange focus:bg-white focus:ring-2 focus:ring-truering-orange/10"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-ink">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                          className="w-full rounded-xl border border-hairline bg-mist/30 px-4 py-3 text-sm text-ink placeholder:text-graphite/50 outline-none transition-all focus:border-truering-orange focus:bg-white focus:ring-2 focus:ring-truering-orange/10"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-ink">
                          Email Address <span className="text-truering-orange">*</span>
                        </label>
                        <div className="relative">
                          <input
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@company.com"
                            className="w-full rounded-xl border border-hairline bg-mist/30 px-4 py-3 pr-10 text-sm text-ink placeholder:text-graphite/50 outline-none transition-all focus:border-truering-orange focus:bg-white focus:ring-2 focus:ring-truering-orange/10"
                          />
                          <IconMail className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-truering-orange" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-ink">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full rounded-xl border border-hairline bg-mist/30 px-4 py-3 text-sm text-ink placeholder:text-graphite/50 outline-none transition-all focus:border-truering-orange focus:bg-white focus:ring-2 focus:ring-truering-orange/10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-ink">
                        Service You Need <span className="text-truering-orange">*</span>
                      </label>
                      <select
                        required
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-hairline bg-mist/30 px-4 py-3 text-sm text-ink outline-none transition-all focus:border-truering-orange focus:bg-white focus:ring-2 focus:ring-truering-orange/10"
                      >
                        <option value="" disabled>
                          Select a service...
                        </option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-ink">
                        Message <span className="text-truering-orange">*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your requirements, volumes, geography, timelines..."
                        className="w-full resize-none rounded-xl border border-hairline bg-mist/30 px-4 py-3 text-sm text-ink placeholder:text-graphite/50 outline-none transition-all focus:border-truering-orange focus:bg-white focus:ring-2 focus:ring-truering-orange/10"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        id="consent"
                        type="checkbox"
                        required
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-0.5 h-4 w-4 rounded border-hairline text-truering-orange focus:ring-truering-orange"
                      />
                      <label htmlFor="consent" className="text-xs leading-relaxed text-graphite">
                        I consent to the processing of my personal data in accordance with the{" "}
                        <Link href="/privacy-policy" className="text-truering-orange hover:underline">
                          Privacy Policy
                        </Link>
                        . I understand that my data will be used to respond to my enquiry and will be retained as described.
                      </label>
                    </div>

                    {error && (
                      <p className="text-sm text-red-600" role="alert">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-truering-navy px-6 py-4 text-sm font-bold text-white shadow-lg transition-all hover:bg-truering-orange hover:shadow-[0_16px_40px_-12px_rgba(255,85,0,0.45)] disabled:opacity-50"
                    >
                      {loading ? "Sending..." : "Send Message"} <IconSend className="h-4 w-4" />
                    </button>

                    <p className="text-center text-xs text-graphite">
                      By submitting, you agree to our{" "}
                      <Link href="/privacy-policy" className="text-truering-orange hover:underline">
                        Privacy Policy
                      </Link>{" "}
                      and{" "}
                      <Link href="/terms-conditions" className="text-truering-orange hover:underline">
                        Terms & Conditions
                      </Link>
                      .
                    </p>
                  </form>
                </>
              ) : (
                <div className="py-16 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <IconCheck className="h-10 w-10" />
                  </div>
                  <h2 className="mt-6 text-2xl font-bold text-ink">Thank You!</h2>
                  <p className="mx-auto mt-3 max-w-md text-sm text-graphite">
                    Your message has been received. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-truering-orange px-6 py-3 text-sm font-bold text-white transition-all hover:bg-truering-orange-600"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="rounded-3xl border border-hairline bg-gradient-to-br from-truering-orange to-[#fd732b] p-6 text-white shadow-lg sm:p-8">
                <h3 className="text-xl font-bold">Prefer a quick call?</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/85">
                  Schedule a free demo with our product experts and see how Truering can help your team.
                </p>
                <a
                  href="tel:+911204539428"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-truering-orange transition-transform hover:scale-[1.03]"
                >
                  <IconPhone className="h-4 w-4" /> Call +91 120 453 9428
                </a>
              </div>

              <div className="rounded-3xl border border-hairline bg-white p-6 shadow-[0_8px_30px_-12px_rgba(7,30,48,0.12)] sm:p-8">
                <h3 className="text-lg font-bold text-ink">Connect with us</h3>
                <p className="mt-2 text-sm text-graphite">
                  Follow us on LinkedIn for product updates, tips, and industry insights.
                </p>
                <div className="mt-5 flex items-center gap-4">
                  <a
                    href="https://www.linkedin.com/company/brighto-credit-information-pvt.-ltd./"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#0A66C2] px-4 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.03]"
                  >
                    <IconBrandLinkedin className="h-5 w-5" /> LinkedIn
                  </a>
                  <a
                    href="mailto:support@brightoindia.com"
                    className="inline-flex items-center gap-2 rounded-xl border-2 border-truering-orange px-4 py-3 text-sm font-bold text-truering-orange transition-all hover:bg-truering-orange hover:text-white"
                  >
                    <IconMail className="h-5 w-5" /> Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
