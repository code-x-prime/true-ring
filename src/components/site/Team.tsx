"use client";

import { useState } from "react";
import Image from "next/image";
import { IconX } from "@tabler/icons-react";
import { SectionHeading } from "@/components/site/SectionHeading";

type TeamMember = (typeof TEAM_MEMBERS)[number];

const TEAM_MEMBERS = [
  {
    name: "Faiz Alam",
    role: "Founder & Director",
    photo: "/team/faiz-aalam.png",
    accent: "#091C8C",
    bio: [
      "Faiz Alam is a seasoned BFSI professional with a 10-year track record of driving operational excellence and market expansion. As the Founder of Brighto, he is dedicated to establishing the firm as a gold standard for trust and reliability in India's financial sector.",
      "Faiz's leadership style is rooted in his \"turnaround\" mindset—taking challenged operations and transforming them into high-growth engines. His background includes significant leadership stints at Onicra and Serco BPO, where he gained a reputation for building high-performing cultures and executing high-impact initiatives.",
    ],
    competencies: [
      { label: "Strategic Vision", desc: "Scaling BFSI operations in both high-growth and mature markets." },
      { label: "Operational Excellence", desc: "Creating efficient, value-driven processes that improve bottom lines." },
      { label: "Leadership", desc: "Mentoring top-tier talent and fostering a culture of performance." },
    ],
    education: "MBA (Marketing & Finance) – Jamia Hamdard University",
  },
  {
    name: "Shweta Dhiman",
    role: "Director of HR & Administration",
    photo: "/team/shweta-dhiman.png",
    accent: "#EA580C",
    bio: [
      "Ms. Shweta Dhiman is a seasoned leader and a versatile force in the corporate world, bringing decades of managerial expertise to Brighto India. With a career defined by innovation and strategic foresight, she has consistently proven herself as an invaluable asset to the private and BPO sectors.",
      "Shweta's professional journey includes pivotal roles at prestigious organizations such as HCL, Serco BPO, Net Ambit, TeamLease, and Save the Children. This diverse background allows her to approach human capital management with a unique, \"out-of-the-box\" perspective, blending corporate efficiency with social responsibility.",
      "An alumna of Lucknow University with an MBA in HR, Shweta currently leads our HR and Administrative divisions. She is the driving force behind the implementation of the \"Brighto Lines,\" ensuring that our organizational culture remains as vibrant and forward-thinking as her leadership style.",
    ],
    competencies: [],
    education: "MBA (HR) – Lucknow University",
  },
  {
    name: "Rohin Jain",
    role: "Sales Director",
    photo: "/team/rohin-jain.png",
    accent: "#059669",
    bio: [
      "Rohin Jain is a Sales Director working in the financial services sector. He is responsible for managing sales operations, handling clients, and supporting overall business growth.",
      "He focuses on building strong customer relationships and helping clients choose the right loan solutions based on their needs. He also works closely with his team to achieve sales targets and ensure smooth operations.",
      "Rohin is known for his good communication skills, dedication, and practical approach. His goal is to provide reliable service and maintain long-term trust with customers.",
    ],
    competencies: [],
    education: "",
  },
  {
    name: "Gaurav Kumar",
    role: "IT Project Manager",
    photo: "/team/gaurav-dubey.jpg",
    accent: "#7C3AED",
    bio: [
      "Gaurav Kumar is a seasoned IT Project Manager with a 12-year track record of leading diverse teams to deliver 70+ national and international projects on schedule and under budget. Based in Patna, Bihar, he drives innovation in web development and e-commerce, mastering Agile practices to achieve 30% faster deliveries and 95% client satisfaction.",
      "Gaurav's leadership style is rooted in his \"delivery-first\" mindset—turning complex scopes into seamless successes across e-commerce (Magento, Shopify), web (WordPress), and CRM platforms. His career highlights include coordinating high-impact IT initiatives at leading firms, building high-performing teams, and excelling in client relationships and risk mitigation.",
    ],
    competencies: [
      { label: "Strategic Project Delivery", desc: "Scaling IT projects in dynamic national and global markets." },
      { label: "Agile Mastery", desc: "Streamlining team coordination and processes for optimal efficiency." },
      { label: "Client Excellence", desc: "Fostering trust through superior communication and results." },
    ],
    education: "",
  },
];

function TeamMemberModal({ member, onClose }: { member: TeamMember; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm"
      style={{ zIndex: 10000 }}
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full my-auto"
        style={{ maxHeight: "85vh", overflowY: "auto" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-mist hover:bg-hairline flex items-center justify-center transition-colors"
        >
          <IconX className="w-5 h-5 text-graphite" />
        </button>

        <div className="p-6 sm:p-8">
          <div className="flex items-start gap-4 mb-6">
            <div
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 bg-mist"
              style={{ border: `2px solid ${member.accent}` }}
            >
              <Image
                src={member.photo}
                alt={member.name}
                fill
                className="object-cover object-top rounded-2xl"
                sizes="96px"
              />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-ink">{member.name}</h3>
              <p className="text-sm font-semibold mt-1" style={{ color: member.accent }}>
                {member.role}
              </p>
            </div>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-graphite leading-relaxed">
            {member.bio.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {member.competencies.length > 0 && (
            <div className="mt-6 pt-6 border-t border-hairline">
              <p className="text-xs font-bold text-ink uppercase tracking-widest mb-3">Core Competencies</p>
              <div className="space-y-2.5">
                {member.competencies.map((c) => (
                  <p key={c.label} className="text-sm text-graphite leading-relaxed">
                    <span className="font-semibold text-ink">{c.label}:</span> {c.desc}
                  </p>
                ))}
              </div>
            </div>
          )}

          {member.education && (
            <div className="mt-6 pt-6 border-t border-hairline">
              <p className="text-xs font-bold text-ink uppercase tracking-widest mb-2">Academic Foundation</p>
              <p className="text-sm text-graphite">{member.education}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function Team() {
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);

  return (
    <section className="bg-background relative z-10 py-16 sm:py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Experts"
          title="Meet the Team Behind Truering"
          intro="Truering is a product of Brighto Credit Information Private Limited, led by an experienced team driving verification and risk operations across India."
          align="center"
        />

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {TEAM_MEMBERS.map((member) => (
            <button
              key={member.name}
              type="button"
              onClick={() => setActiveMember(member)}
              className="group text-left cursor-pointer"
            >
              <div
                className="relative aspect-3/4 rounded-2xl overflow-hidden bg-mist border border-hairline/70 mb-4 shadow-sm hover:shadow-md transition-all duration-300"
                style={{ borderTop: `3px solid ${member.accent}` }}
              >
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <h3 className="font-bold text-ink text-base sm:text-lg">{member.name}</h3>
              <p className="text-sm font-medium" style={{ color: member.accent }}>
                {member.role}
              </p>
            </button>
          ))}
        </div>
      </div>

      {activeMember && <TeamMemberModal member={activeMember} onClose={() => setActiveMember(null)} />}
    </section>
  );
}
