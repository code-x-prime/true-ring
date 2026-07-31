"use client";

import { useState } from "react";
import Link from "next/link";
import {
  IconBriefcase,
  IconMapPin,
  IconSend,
  IconCheck,
  IconUsers,
  IconBuilding,
  IconRocket,
  IconHeartHandshake,
  IconUpload,
} from "@tabler/icons-react";

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
}

const openings: JobOpening[] = [
  {
    id: "telecalling-executive",
    title: "Telecalling Executive / Process Associate",
    department: "Operations & Sales",
    location: "Noida, UP (On-site)",
    type: "Full Time",
    experience: "0 - 3 Years",
    description:
      "Handle inbound and outbound telecalling operations, maintain CRM logs, assist clients with product queries, and maintain top call resolution rates.",
  },
  {
    id: "crm-support-engineer",
    title: "CRM Technical Support Specialist",
    department: "Customer Success",
    location: "Noida, UP (On-site)",
    type: "Full Time",
    experience: "1 - 4 Years",
    description:
      "Support enterprise customers with Truering CRM setup, telephony API configurations, IVR troubleshooting, and client onboarding.",
  },
  {
    id: "b2b-sales-manager",
    title: "B2B Inside Sales Manager",
    department: "Business Development",
    location: "Noida, UP / Hybrid",
    type: "Full Time",
    experience: "2 - 5 Years",
    description:
      "Drive sales of Truering CRM and cloud telephony solutions across SMBs and Enterprise clients in India.",
  },
  {
    id: "fullstack-developer",
    title: "Fullstack Next.js / Node Developer",
    department: "Engineering",
    location: "Noida, UP / Hybrid",
    type: "Full Time",
    experience: "2 - 6 Years",
    description:
      "Build high-performance web interfaces, telecalling workflow tools, and scalable REST/GraphQL APIs for our SaaS stack.",
  },
];

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    role: "",
    resumeUrl: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const baseUrl = (process.env.NEXT_PUBLIC_BRIGHTO_API_URL || "https://www.brightoindia.com").replace(/\/+$/, "");
    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      phone: formData.phone.trim(),
      subject: `[Career Application] ${formData.role || "General Application"} - Truering`,
      message: `Applicant Experience: ${formData.experience || "Not specified"}\nRole Applied For: ${formData.role}\nResume Link: ${formData.resumeUrl || "Not provided"}\nSource Site: Truering Careers\n\nCover Note:\n${formData.message.trim()}`,
      website: "",
    };

    try {
      let response = await fetch(`${baseUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok && response.status === 404) {
        response = await fetch(`${baseUrl}/api/contact-us-api`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...payload,
            company: `Career Applicant - ${formData.experience}`,
            service: formData.role,
            source: "truering_career",
          }),
        });
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Career submit error:", err);
      setSubmitted(true);
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
            <span className="text-ink font-medium">Careers</span>
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
            Join Our Team
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Build the Future of Telecalling CRM with Us
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            We are powered by Brighto Credit Information Pvt. Ltd. Join an ambitious team engineering high-impact cloud telephony and customer communication tools across India.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="px-6 py-16 md:py-20 bg-white border-b border-hairline">
        <div className="mx-auto max-w-7xl md:px-8">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-truering-orange">
              Why Work With Truering
            </span>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
              Culture, Growth & Opportunity
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-hairline bg-mist/20 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-truering-orange-100 text-truering-orange">
                <IconRocket className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold text-ink">Fast Career Growth</h3>
              <p className="mt-2 text-xs text-graphite leading-relaxed">
                Work in a high-growth environment where performance and ownership are recognized instantly.
              </p>
            </div>

            <div className="rounded-2xl border border-hairline bg-mist/20 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-truering-blue-100 text-truering-blue-600">
                <IconUsers className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold text-ink">Collaborative Culture</h3>
              <p className="mt-2 text-xs text-graphite leading-relaxed">
                Work alongside passionate engineers, product innovators, and sales leaders.
              </p>
            </div>

            <div className="rounded-2xl border border-hairline bg-mist/20 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-truering-orange-100 text-truering-orange">
                <IconBuilding className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold text-ink">Enterprise Scale</h3>
              <p className="mt-2 text-xs text-graphite leading-relaxed">
                Build products powering thousands of daily sales and support calls nationwide.
              </p>
            </div>

            <div className="rounded-2xl border border-hairline bg-mist/20 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-truering-blue-100 text-truering-blue-600">
                <IconHeartHandshake className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold text-ink">Great Compensation</h3>
              <p className="mt-2 text-xs text-graphite leading-relaxed">
                Competitive salary packages, performance bonuses, and transparent career milestones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Openings & Application Form */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl md:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_420px]">
            {/* Openings list */}
            <div>
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-truering-blue">
                  Current Vacancies
                </span>
                <h2 className="mt-2 text-3xl font-bold text-ink sm:text-4xl">
                  Explore Open Positions
                </h2>
                <p className="mt-2 text-sm text-graphite">
                  Select a role to apply directly or fill out the application form.
                </p>
              </div>

              <div className="space-y-4">
                {openings.map((job) => (
                  <div
                    key={job.id}
                    className={`rounded-2xl border p-6 transition-all bg-white ${selectedJob === job.title
                        ? "border-truering-orange shadow-md ring-2 ring-truering-orange/20"
                        : "border-hairline hover:border-truering-orange/50 hover:shadow-sm"
                      }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="rounded-full bg-truering-orange/10 px-3 py-1 text-[11px] font-bold text-truering-orange">
                        {job.department}
                      </span>
                      <span className="text-xs font-semibold text-graphite">{job.type}</span>
                    </div>

                    <h3 className="mt-3 text-xl font-bold text-ink">{job.title}</h3>
                    <p className="mt-2 text-sm text-graphite leading-relaxed">{job.description}</p>

                    <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-graphite">
                      <span className="flex items-center gap-1.5">
                        <IconMapPin className="h-4 w-4 text-truering-orange" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <IconBriefcase className="h-4 w-4 text-truering-blue" />
                        {job.experience}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedJob(job.title);
                        setFormData((prev) => ({ ...prev, role: job.title }));
                      }}
                      className="mt-5 inline-flex items-center gap-2 rounded-xl bg-mist hover:bg-truering-orange hover:text-white px-4 py-2 text-xs font-bold text-ink transition-colors"
                    >
                      {selectedJob === job.title ? "Selected for Application ✓" : "Apply for this Role"}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Application form */}
            <div className="sticky top-24 rounded-3xl border border-hairline bg-white p-6 shadow-[0_8px_40px_-16px_rgba(7,30,48,0.12)] sm:p-8">
              {!submitted ? (
                <>
                  <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-truering-orange">
                      Apply Now
                    </span>
                    <h3 className="mt-2 text-2xl font-bold text-ink">Submit Application</h3>
                    <p className="mt-1 text-xs text-graphite">
                      Send your details directly to our HR team at Brighto Credit Information.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1.5">
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
                        className="w-full rounded-xl border border-hairline bg-mist/30 px-3.5 py-2.5 text-sm text-ink outline-none transition-all focus:border-truering-orange focus:bg-white"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-ink">
                        Email Address <span className="text-truering-orange">*</span>
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-hairline bg-mist/30 px-3.5 py-2.5 text-sm text-ink outline-none transition-all focus:border-truering-orange focus:bg-white"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-ink">
                          Phone <span className="text-truering-orange">*</span>
                        </label>
                        <input
                          required
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full rounded-xl border border-hairline bg-mist/30 px-3.5 py-2.5 text-sm text-ink outline-none transition-all focus:border-truering-orange focus:bg-white"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-ink">
                          Experience
                        </label>
                        <input
                          type="text"
                          name="experience"
                          value={formData.experience}
                          onChange={handleChange}
                          placeholder="e.g. 2 Years"
                          className="w-full rounded-xl border border-hairline bg-mist/30 px-3.5 py-2.5 text-sm text-ink outline-none transition-all focus:border-truering-orange focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-ink">
                        Role <span className="text-truering-orange">*</span>
                      </label>
                      <select
                        required
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-hairline bg-mist/30 px-3.5 py-2.5 text-sm text-ink outline-none transition-all focus:border-truering-orange focus:bg-white"
                      >
                        <option value="" disabled>
                          Select role...
                        </option>
                        {openings.map((j) => (
                          <option key={j.id} value={j.title}>
                            {j.title}
                          </option>
                        ))}
                        <option value="General Application">General Application / Other</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-ink">
                        Resume / Drive Link
                      </label>
                      <div className="relative">
                        <input
                          type="url"
                          name="resumeUrl"
                          value={formData.resumeUrl}
                          onChange={handleChange}
                          placeholder="https://drive.google.com/..."
                          className="w-full rounded-xl border border-hairline bg-mist/30 px-3.5 py-2.5 pr-9 text-sm text-ink outline-none transition-all focus:border-truering-orange focus:bg-white"
                        />
                        <IconUpload className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-graphite" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-ink">
                        Cover Note / Message
                      </label>
                      <textarea
                        rows={3}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us briefly about yourself..."
                        className="w-full resize-none rounded-xl border border-hairline bg-mist/30 px-3.5 py-2.5 text-sm text-ink outline-none transition-all focus:border-truering-orange focus:bg-white"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-truering-navy px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-truering-orange disabled:opacity-50"
                    >
                      {loading ? "Submitting..." : "Submit Application"} <IconSend className="h-4 w-4" />
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-12 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <IconCheck className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-ink">Application Submitted!</h3>
                  <p className="mt-2 text-xs text-graphite">
                    Thank you for applying. Our HR team at Brighto Credit Information will review your details and reach out soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-full bg-truering-orange px-5 py-2.5 text-xs font-bold text-white hover:bg-truering-orange-600 transition-all"
                  >
                    Submit another application
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
