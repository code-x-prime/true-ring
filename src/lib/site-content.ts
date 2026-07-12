export interface Feature {
  title: string;
  body: string;
  icon: string;
}

export interface Industry {
  title: string;
  body: string;
  icon: string;
}

export interface Integration {
  name: string;
  icon: string;
}

export interface WhyRow {
  title: string;
  body: string;
  icon: string;
}

export interface Step {
  title: string;
  body: string;
  icon: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export const features: Feature[] = [
  {
    title: "Smart Lead Management",
    body: "Pull in leads from various sources, keep all customer details in order, hand off prospects to the best agents, and follow every single interaction from the opening call right through to the sale. You stay on top of every opportunity with a single central spot for lead management.",
    icon: "/icons/smart-lead-management.svg",
  },
  {
    title: "Auto & Predictive Dialers",
    body: "Help agents get way more done by using smart dialing tools. With Truering, agents can use Auto Dialer, Power Dialer, or Predictive Dialer instead of manually dialing numbers.",
    icon: "/icons/auto-predictive-dialers.svg",
  },
  {
    title: "Click-to-Call",
    body: "Make calls directly from within the CRM, with one click. Cut out mistakes from typing numbers and let agents reach prospects faster while speeding up their response time.",
    icon: "/icons/click-to-call.svg",
  },
  {
    title: "Intelligent IVR Management",
    body: "Create customized IVR applications that route calls to the proper team, reduce wait times, and put customers in a good mood the moment they dial in.",
    icon: "/icons/intelligent-ivr-management.svg",
  },
  {
    title: "Call Recording & Monitoring",
    body: "Automatically record calls you've made and received to verify quality, satisfaction, and adherence to rules, and resolve conflicts with staff. Managers will be able to hear live calls, provide real-time guidance to agents, and maintain service levels.",
    icon: "/icons/call-recording-monitoring.svg",
  },
  {
    title: "Real-Time Analytics",
    body: "Watch important numbers on live dashboards, such as total calls, how quickly replies are delivered, agent output, close rates, dropped calls, and campaign performance. Base your choices on real facts instead of guesses.",
    icon: "/icons/real-time.svg",
  },
  {
    title: "Workflow Automation",
    body: "Set up automatic steps for things like handing out leads, sending follow-up alerts, booking callbacks, and notifying customers. Your team wastes less time on boring jobs and spends more time actually talking to people.",
    icon: "/icons/workflow-automation.svg",
  },
  {
    title: "Secure Cloud-Based Platform",
    body: "Use Truering from any location without dealing with servers or tech headaches. The secure cloud setup provides steady performance, room to grow, and robust protection for companies of all sizes.",
    icon: "/icons/secure-cloud-based-platform.svg",
  },
];

export const industries: Industry[] = [
  {
    title: "Real Estate",
    body: "Follow up on property questions, set automatic reminders, book visits to sites, and handle conversations with buyers all from one main CRM.",
    icon: "/icons/real-estate.svg",
  },
  {
    title: "Education",
    body: "Handle questions about joining, guide students, track applications, and run enrollment drives while ensuring every interested person receives quick replies.",
    icon: "/icons/education.svg",
  },
  {
    title: "Healthcare",
    body: "Organize booking times, send patient alerts, check in after visits, and support services with clear communication paths.",
    icon: "/icons/healthcare.svg",
  },
  {
    title: "Insurance",
    body: "Boost policy sales, handle renewal notices, bring new customers on board, and manage claims with full visibility on every customer exchange.",
    icon: "/icons/insurance.svg",
  },
  {
    title: "BFSI & Lending",
    body: "Process loan requests, make verification calls, handle collections, send payment alerts, and onboard customers while keeping solid records of all calls.",
    icon: "/icons/bsfl-lending.svg",
  },
  {
    title: "Recruitment",
    body: "Schedule candidate assessments, schedule interview dates, monitor placements and update clients all from one place.",
    icon: "/icons/recruitment.svg",
  },
  {
    title: "Ecommerce",
    body: "Support shoppers from start to finish: order updates, shipping details, and return support and follow-up after purchase.",
    icon: "/icons/ecommerce.svg",
  },
  {
    title: "Travel & Hospitality",
    body: "Handle bookings, confirm reservations, give travel help, update plans, and support customers while creating great service moments.",
    icon: "/icons/travel-hospitality.svg",
  },
];

export const integrations: Integration[] = [
  { name: "Salesforce CRM", icon: "/icons/salesforce-crm.svg" },
  { name: "HubSpot", icon: "/icons/hubspot.svg" },
  { name: "Zoho CRM", icon: "/icons/zoho-crm.svg" },
  { name: "LeadSquared", icon: "/icons/leadsquared.svg" },
  { name: "WhatsApp Business", icon: "/icons/whatsApp-business.svg" },
  { name: "Google Sheets", icon: "/icons/google-sheets.svg" },
  { name: "REST APIs", icon: "/icons/rest-apis.svg" },
  { name: "Custom Integrations", icon: "/icons/custom-integrations.svg" },
];

export const whyRows: WhyRow[] = [
  {
    title: "Built to Handle High-Volume Customer Conversations",
    body: "Handle inbound and outbound calls smoothly on a system that scales with your team, departments, and growing call volumes without slowing down.",
    icon: "/icons/inbound-calling.svg",
  },
  {
    title: "Boost Agent Productivity with Smart Automation",
    body: "Reduce manual tasks by leveraging automated lead sharing, smart dialers, follow-up notices, and workflow automation, allowing agents to devote their time to real customer conversations.",
    icon: "/icons/workflow-automation.svg",
  },
  {
    title: "360° Customer View for Smarter Conversations",
    body: "Provide teams with instant access to customer profiles, call history, notes, recordings, and previous conversations to deliver faster, more personalized experiences.",
    icon: "/icons/smart-lead-management.svg",
  },
  {
    title: "Real-Time Performance Analytics & Reporting",
    body: "Keep an eye on call activity, campaign results, agent work, and customer engagement through live dashboards and comprehensive reports that help you make decisions based on actual data.",
    icon: "/icons/track-analyze-improve.svg",
  },
  {
    title: "Enterprise-Ready Security & Cloud Reliability",
    body: "Work with confidence on a secure cloud platform that delivers consistent speed, role-based controls, and scalability to support growth.",
    icon: "/icons/secure-cloud-based-platform.svg",
  },
  {
    title: "Seamless Integrations That Simplify Workflows",
    body: "Link Truering to your current CRM, phone systems, business apps, and APIs to build one connected setup that keeps teams efficient and customer details up to date.",
    icon: "/icons/custom-integrations.svg",
  },
];

export const steps: Step[] = [
  {
    title: "Step 1: Capture Every Lead",
    body: "Collect questions from your site, landing pages, campaigns, social media, APIs, CRM systems and automatically store them in one central database.",
    icon: "/icons/capture-every-lead.svg",
  },
  {
    title: "Step 2: Assign Leads Instantly",
    body: "Share leads using set rules like location, team, availability, or skills to get faster replies and a more balanced workload.",
    icon: "/icons/assign-leads-instantly.svg",
  },
  {
    title: "Step 3: Connect With Customers",
    body: "Manage incoming and outgoing calls using click-to-call, auto-dialers, predictive dialers, IVR, and smart routing, while maintaining complete customer history on a single screen.",
    icon: "/icons/connect-customers.svg",
  },
  {
    title: "Step 4: Track, Analyze & Improve",
    body: "Improve the output and customer interactions of your team by watching each conversation on live dashboards, listening to calls, reviewing performance reports and looking at campaign numbers.",
    icon: "/icons/track-analyze-improve.svg",
  },
];

export const faqs: FAQItem[] = [
  {
    q: "What is Telecalling CRM Software?",
    a: "Telecalling CRM Software serves as a single platform that lets businesses organize customer calls, leads, follow-ups, recordings, and communication records while boosting sales, support, and overall team performance.",
  },
  {
    q: "Does Truering support both inbound and outbound calling?",
    a: "Yes. Truering handles inbound customer support, outbound sales campaigns, collections, booking appointments, customer service, and follow-up work all from the same system.",
  },
  {
    q: "Can Truering integrate with my existing CRM?",
    a: "Yes. Truering integrates with popular CRM systems, WhatsApp, Google Sheets, APIs, and more to streamline everyday business tasks.",
  },
  {
    q: "Is Truering suitable for small businesses?",
    a: "Absolutely. Truering is ideal for startups and small businesses, working teams, and large organizations with a scalable system.",
  },
  {
    q: "Does Truering provide call recording?",
    a: "Yes. The system automatically records calls for quality checks, rule enforcement, training, and performance reviews.",
  },
  {
    q: "Can managers monitor live calls?",
    a: "Yes. The built-in monitoring features let supervisors listen to live conversations, review recordings, get reports, and train agents.",
  },
  {
    q: "Is Truering cloud-based?",
    a: "Yes. Truering operates as a secure cloud solution that allows approved users to access it from anywhere with an internet connection.",
  },
  {
    q: "Which industries can benefit from Truering?",
    a: "Truering is useful for businesses in real estate, education, healthcare, insurance, BFSI, lending, recruitment, e-commerce, travel & hospitality, customer support, and sales.",
  },
];
