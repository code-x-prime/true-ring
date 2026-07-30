export interface ServicePageData {
    slug: string;
    title: string;
    eyebrow: string;
    description: string;
    heroTitle: string;
    overview: string;
    stats: string[];
    features: Array<{ title: string; body: string }>;
    benefits: string[];
    relatedIndustries: string[];
    seoTitle?: string;
    seoDescription?: string;
    keywords?: string[];
    faqItems?: Array<{ question: string; answer: string }>;
}

export interface IndustryPageData {
    slug: string;
    title: string;
    eyebrow: string;
    description: string;
    heroTitle: string;
    overview: string;
    stats: string[];
    useCases: Array<{ title: string; body: string }>;
    benefits: string[];
    relatedServices: string[];
    seoTitle?: string;
    seoDescription?: string;
    keywords?: string[];
    faqItems?: Array<{ question: string; answer: string }>;
}

export interface IntegrationPageData {
    slug: string;
    title: string;
    eyebrow: string;
    description: string;
    heroTitle: string;
    overview: string;
    stats: string[];
    features: Array<{ title: string; body: string }>;
    benefits: string[];
    relatedServices: string[];
    seoTitle?: string;
    seoDescription?: string;
    keywords?: string[];
    faqItems?: Array<{ question: string; answer: string }>;
}

export const servicePages: ServicePageData[] = [
    {
        slug: "inbound-call-center-crm-software",
        title: "Inbound Call Center CRM Software",
        eyebrow: "Inbound Support",
        description:
            "Every incoming call gives you a chance to build stronger customer ties. Truering Inbound Call Center CRM Software smartly routes calls, shows customer details instantly, automates support steps, and helps agents fix questions faster from one cloud-based platform.",
        heroTitle: "Inbound Call Center CRM Software That Turns Every Incoming Call into a Better Customer Experience",
        overview:
            "When a customer contacts your business, they expect quick answers, a personal conversation, and real solutions. Inbound Call Center CRM Software combines intelligent call management with CRM so businesses handle incoming calls effectively and give agents quick access to customer histories, previous conversations, support information, and call notes. Teams no longer waste time chasing customers down or switching between tools, resulting in faster, more meaningful conversations that boost satisfaction, resolve more problems the first time, and build stronger, lasting customer relationships. Truering brings together smart call routing, IVR automation, customer history, live monitoring, reporting, and easy CRM integration into one main platform. Since 2015, teams across many fields have relied on our cloud platform to handle high call volumes while keeping service strong, all backed by ISO 27001, ISO 9001, and SOC 2 Audited standards.",
        stats: ["Established Since 2015", "ISO 27001 Certified", "ISO 9001 Certified", "SOC 2 Audited"],
        features: [
            { title: "Intelligent Call Routing", body: "Direct all incoming calls to the right department or free agent based on predetermined rules, reducing transfers and improving first-call fixes." },
            { title: "Interactive Voice Response (IVR)", body: "Create custom self-service options that direct callers to the correct location, reduce wait times, and improve the entire customer journey." },
            { title: "360° Customer Profile", body: "Give agents the full customer story including past conversations, support tickets, and timelines before they even pick up the call." },
            { title: "Automatic Call Recording", body: "Keep secure recordings of every customer conversation for quality checks, compliance, training staff, and future review." },
            { title: "Live Call Monitoring", body: "Watch ongoing conversations in real time, help agents on the spot, and keep service levels steady across all calls." },
            { title: "Smart Call Queues", body: "Deal with lots of calls smoothly using clever queue handling that shortens customer waits and spreads work evenly among agents." },
            { title: "Automatic Ticket Creation", body: "Turn every incoming question into a support ticket automatically so nothing gets lost or forgotten." },
            { title: "Callback Scheduling", body: "Let customers ask for a callback and automatically assign the follow-up job to the right support person." },
            { title: "Real-Time Performance Dashboard", body: "Follow call numbers, average talk time, queue status, agent availability, and service numbers in one main screen." },
            { title: "CRM Integration", body: "Match customer details with your CRM so agents always see the complete picture before starting any conversation." },
            { title: "Workflow Automation", body: "Create automated steps for standard support tasks, alerts, escalations, and follow-ups to streamline daily operations." },
            { title: "Reports & Analytics", body: "Check support results with useful reports on first-call fixes, reply speeds, customer happiness, and agent work levels." },
        ],
        benefits: [
            "Unified Support Hub — manage calls, recordings, tickets, profiles, history, and follow-ups from one smart dashboard.",
            "Smart Call Routing — cut wait times with layered IVR, skill-based directing, smart queues, and automatic call spreading.",
            "360° Customer View — give agents full sight of past conversations, tickets, notes, buying history, recordings, and timelines.",
            "Live Performance Insights — watch 20+ live operation numbers like active calls, queue status, dropped calls, and service levels.",
            "Intelligent Automation — automate ticket making, callback planning, alerts, approvals, follow-ups, escalations, and repeated support jobs.",
            "Trusted Since 2015 — ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited for reliability, safety, and confidence.",
        ],
        relatedIndustries: ["healthcare", "banking-and-financial-services", "insurance", "ecommerce", "education", "travel-and-hospitality", "real-estate", "telecommunications-and-utilities"],
        seoTitle: "Inbound Call Center CRM Software | Truering",
        seoDescription:
            "Truering Inbound Call Center CRM Software helps businesses handle incoming calls with smart routing, IVR, 360° customer profiles, live monitoring, and automation.",
        keywords: ["inbound call center CRM software", "inbound calling CRM", "customer support CRM", "IVR call routing", "live call monitoring"],
        faqItems: [
            { question: "What is Inbound Call Center CRM Software?", answer: "It joins cloud telephony and CRM tools to help companies manage incoming calls, customer details, call directing, support flows, and reports inside one main platform." },
            { question: "Can Truering manage high volumes of inbound customer calls?", answer: "Yes. Truering handles large numbers of incoming calls well using smart directing, queue handling, IVR automation, and live monitoring to keep service excellent." },
            { question: "Does Truering support IVR and intelligent call routing?", answer: "Absolutely. Truering offers custom IVR menus, smart call directing, queue management, and automated workflows that connect callers to the right team quickly." },
            { question: "Which industries benefit from Truering Inbound Call Center CRM?", answer: "Healthcare, banking, insurance, ecommerce, education, travel, real estate, telecommunications, and any business that deals with regular customer questions can improve service with Truering." },
            { question: "Why choose Truering instead of traditional inbound calling software?", answer: "Unlike basic calling systems, Truering combines cloud telephony, CRM, customer history, automation, reporting, IVR, and strong security into one smart platform that improves customer support and daily efficiency." },
        ],
    },
    {
        slug: "outbound-call-center-crm-software",
        title: "Outbound Call Center CRM",
        eyebrow: "Outbound Sales",
        description:
            "Each outbound call has the potential to generate revenue, build relationships, and secure new offers. Truering Outbound Call Center CRM equips your sales team with smart dialing, automated workflows, lead management, live analytics, and cloud telephony to reach more prospects, optimize agent performance, and convert conversations into real business growth.",
        heroTitle: "Outbound Call Center CRM That Turns Every Call into a Revenue Opportunity",
        overview:
            "A phone system is the bare minimum, but growing companies need a phone system enhanced with tools that enable salespeople to communicate with prospects more effectively and close sales faster. Outbound Call Center CRM combines intelligent dialing, lead management, workflow automation, campaign tracking, customer relationship management, and more, all in one central platform. Agents receive prospect information, schedule automated follow-ups, conduct outbound campaigns, and monitor all follow-up interactions from one central screen. This makes calls smoother, provides real talk time for agents, boosts sales volume, and maintains consistent customer engagement. Since 2015, businesses have used Truering to simplify outbound work and gain a new perspective on campaigns and increased sales, all backed by ISO 27001, ISO 9001, and SOC 2 Audited standards.",
        stats: ["Established Since 2015", "ISO 27001 Certified", "ISO 9001 Certified", "SOC 2 Audited"],
        features: [
            { title: "Predictive Dialer", body: "Connect free agents with real prospects. By lowering manual work and missed calls, sales teams get more talk time, run campaigns better, and reach more people each day." },
            { title: "Power Dialer", body: "Keep sales energy high with an automatic Power Dialer that calls the next lead right after each finished talk, minimizing idle time." },
            { title: "Auto Dialer", body: "Run big outbound calling campaigns on autopilot, removing constant hand dialing and keeping outreach steady." },
            { title: "Smart Lead Distribution", body: "Give each lead to the best salesperson using rules based on area, team, campaign, or availability for faster follow-ups and even workloads." },
            { title: "Click-to-Call", body: "Begin customer talks in one click straight from your CRM screen, stopping dialing mistakes and saving time." },
            { title: "Campaign Management", body: "Build, plan, watch, and improve several outbound campaigns from one central screen with data-driven decisions." },
            { title: "CRM Integration", body: "Match customer records, sales actions, follow-ups, call notes, and talk history with your main CRM for more personal conversations." },
            { title: "Workflow Automation", body: "Cut repeated office tasks by automating callbacks, reminders, task giving, lead updates, and customer alerts." },
            { title: "Call Recording", body: "Keep secure recordings of every outbound call for quality checks, sales training, compliance, and performance improvement." },
            { title: "Real-Time Dashboards", body: "Watch live campaign results through interactive screens showing call activity, agent output, lead movement, talk time, and operation details." },
            { title: "Analytics & Reports", body: "Create full reports on campaign results, conversion patterns, call endings, agent efficiency, and customer engagement." },
            { title: "Role-Based Access", body: "Control what users can do by customizing agent, supervisor, and manager roles to protect critical client information." },
        ],
        benefits: [
            "Sales Acceleration — reach twice as many prospects through smart dialing, automatic workflows, and central lead management.",
            "Higher Connect Rates — connect more successfully with Predictive Dialer, Power Dialer, Auto Dialer, Click-to-Call, and intelligent retries.",
            "Faster Follow-Ups — automate callbacks, reminders, lead assignments, and nurturing steps so no sales chance is missed.",
            "Campaign Intelligence — track 20+ live campaign metrics like connect rates, talk time, agent productivity, and conversion patterns.",
            "Smarter Automation — put lead sharing, follow-up sequences, CRM updates, alerts, and repeated office jobs on automatic.",
            "Enterprise Scale — Truering grows easily with your needs, giving reliable cloud communication and smooth campaign running.",
            "Trusted Since 2015 — backed by ISO 27001, ISO 9001, and SOC 2 Audited standards for robust security and reliability.",
        ],
        relatedIndustries: ["real-estate", "banking-and-financial-services", "insurance", "education", "healthcare", "recruitment-and-staffing", "ecommerce", "travel-and-hospitality"],
        seoTitle: "Outbound Call Center CRM | Truering",
        seoDescription:
            "Truering Outbound Call Center CRM helps sales teams accelerate outreach with predictive dialing, power dialing, automation, campaign management, and live analytics.",
        keywords: ["outbound call center CRM", "outbound calling software", "sales dialer software", "predictive dialer", "power dialer CRM"],
        faqItems: [
            { question: "What is Outbound Call Center CRM?", answer: "It is a cloud-based solution that integrates intelligent dialing, lead management, workflow automation, CRM integration, and campaign analytics to boost sales productivity and manage outbound communication effectively." },
            { question: "Which businesses can benefit from Truering Outbound Call Center CRM?", answer: "Truering works well for real estate, banks, insurance, BPOs, education, healthcare, recruitment, e-commerce, travel, and any group that runs high-volume outbound customer communication." },
            { question: "Does Truering support predictive dialers and power dialers?", answer: "Yes. Truering's Predictive Dialer, Power Dialer, Auto Dialer, Click-to-Call, smart lead distribution, campaign management, and workflow automation maximize agent productivity and outbound campaign efficiency." },
            { question: "Can Truering integrate with my existing CRM?", answer: "Absolutely. Truering connects with popular CRM platforms so businesses can match customer info, call history, lead updates, follow-up activities, and communication records while keeping one main customer data source." },
            { question: "Is Truering Outbound Call Center CRM secure?", answer: "Yes. Truering is backed by ISO 27001, ISO 9001, and SOC 2 Audited standards to ensure robust security, compliance, and long-term reliability." },
        ],
    },
    {
        slug: "cloud-telephony-crm",
        title: "Cloud Telephony CRM",
        eyebrow: "Cloud Communications",
        description:
            "Transform how your business talks with Truering Cloud Telephony CRM, a secure cloud-based system that brings calling, customer management, automation, and analytics together. Remove old hardware limits, empower remote teams, and create smooth customer experiences through one smart communication setup.",
        heroTitle: "Cloud Telephony CRM That Keeps Your Business Connected Anytime, Anywhere",
        overview:
            "Cloud Telephony CRM integrates internet-based business calling and customer administration so organizations can manage calling, customer data, recordings, workflows, analytics, and collaboration from a single platform. Unlike traditional PBX systems that require costly hardware, maintenance, and tricky setups, Cloud Telephony CRM runs entirely in the cloud. You can make and receive business calls, retrieve customer information, monitor communication, and collaborate from anywhere with computers, laptops, or cell phones. Since 2015, Truering has helped companies simplify communication with cloud-powered calling, central customer management, workflow automation, live reporting, and easy CRM features. Truering's ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited status gives businesses reliability, data security, and continuous working.",
        stats: ["Established Since 2015", "ISO 27001 Certified", "ISO 9001 Certified", "SOC 2 Audited"],
        features: [
            { title: "Cloud Calling", body: "Let employees make and take business calls over the internet without needing old PBX systems or physical phone lines, giving more freedom and lower setup costs." },
            { title: "Virtual Business Numbers", body: "Set up special virtual numbers for departments, branches, campaigns, or business spots and manage them all from one main dashboard." },
            { title: "Multi-Level IVR", body: "Design an intelligent multi-level telephone menu to greet callers, gather information, and direct them to the appropriate department or individual." },
            { title: "Smart Call Routing", body: "Send calls automatically using skill-based directing, department rules, business hours, priority settings, and availability." },
            { title: "Unified Customer Records", body: "Pull up customer profiles, past talks, call recordings, notes, tickets, follow-ups, and communication history from one central CRM." },
            { title: "Call Recording", body: "Keep secure recordings of every business call for quality checks, staff training, compliance, resolving disagreements, and later use." },
            { title: "Workflow Automation", body: "Put repeated communication jobs on automatic, including callbacks, voicemail sending, CRM updates, follow-up reminders, and task giving." },
            { title: "Live Analytics", body: "Watch 20+ real-time communication metrics like active calls, missed calls, agent availability, queue results, reply times, and call length." },
            { title: "Omnichannel Communication", body: "Handle voice calls along with customer interactions from different channels in one unified platform for a consistent experience." },
            { title: "Mobile Accessibility", body: "Reach your full cloud telephony system through desktop, web, or mobile apps so staff can work securely and efficiently from any location." },
            { title: "Third-Party Integrations", body: "Integrate Truering with CRM, ERP, Helpdesk, HRMS, and more to match customer data, automate workflows, and create a unified system." },
            { title: "Advanced Reporting", body: "Create detailed reports on communication patterns, employee performance, call activities, customer interactions, and operation efficiency." },
        ],
        benefits: [
            "Enterprise Security — backed by ISO 27001, ISO 9001, and SOC 2 Audited standards to protect conversations and data.",
            "100% Cloud Platform — run communication without costly PBX hardware, lower maintenance costs, and support employees from anywhere.",
            "360° Communication Visibility — view call history, recordings, notes, follow-ups, CRM records, and timelines for every customer.",
            "20+ Live Insights — track call volume, active users, missed calls, reply time, queue performance, and communication patterns.",
            "Multi-Location Ready — manage communication across offices, branches, departments, and remote teams from one central platform.",
            "Faster Deployment — start using it in days instead of weeks, with quick onboarding and smooth move-over.",
        ],
        relatedIndustries: ["banking-and-financial-services", "healthcare", "real-estate", "education", "ecommerce", "travel-and-hospitality", "bpo-and-contact-centers"],
        seoTitle: "Cloud Telephony CRM | Truering",
        seoDescription:
            "Truering Cloud Telephony CRM unifies internet calling, CRM, workflow automation, live analytics, and mobile access in one secure cloud platform.",
        keywords: ["cloud telephony CRM", "cloud calling software", "business phone system", "virtual number CRM", "cloud PBX CRM"],
        faqItems: [
            { question: "What is Cloud Telephony CRM?", answer: "It is a cloud-based communication suite combining internet telephone services, CRM, workflow automation, analytics, and call handling features to enable companies to manage communications effectively without relying on conventional PBX hardware." },
            { question: "How is Cloud Telephony CRM different from traditional phone systems?", answer: "Unlike standard PBX systems, Cloud Telephony CRM operates on the Internet, eliminates costly equipment, and provides remote access, smart call routing, CRM integration, automation, and central communication management." },
            { question: "Can remote employees use Truering Cloud Telephony CRM?", answer: "Yes. Employees can safely reach business communication through desktop, web, or mobile apps so they can make and take business calls, manage customers, and work together from almost any place." },
            { question: "Does Truering integrate with existing business applications?", answer: "Yes. Truering connects with popular CRM, ERP, Helpdesk, HRMS, and other business tools so organizations can match customer information, automate workflows, and centralize communication." },
            { question: "Is Truering Cloud Telephony CRM secure?", answer: "Absolutely. Truering's ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited standards offer solid security, compliance, and reliability for safeguarding business communication and customer data." },
        ],
    },
    {
        slug: "telecalling-crm-software",
        title: "Telecalling CRM Software",
        eyebrow: "Unified Telecalling",
        description:
            "The core of any successful business is customer conversations. Truering Telecalling CRM Software integrates calling, customer management, lead tracking, workflow automation, and real-time reporting into one smart platform.",
        heroTitle: "Truering Telecalling CRM Software: Power Every Customer Conversation with Confidence",
        overview:
            "Telecalling CRM Software combines cloud telephony, customer relationship management, smart automation, and live analytics into one powerful system. Businesses use it to manage incoming and outgoing calls, keep customer information on hand, follow up on leads, and track team results without any hassle. Teams stop switching between different tools and immediately have a full view of their customers, sprint through tasks, respond faster, and provide the right attention to individuals to increase productivity, improve relationships, and drive the business forward. Since 2015, Truering has helped teams in different fields make customer conversations simpler, run telecalling work on autopilot, and lift team results from one main spot. As an ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited company, Truering provides strong security, stable operations, and best-in-class speed.",
        stats: ["Established Since 2015", "ISO 27001 Certified", "ISO 9001 Certified", "SOC 2 Audited"],
        features: [
            { title: "Intelligent Inbound & Outbound Calling", body: "Handle customer questions coming in and sales pushes going out from the same main area so every talk stays neat and gets followed up." },
            { title: "Smart Lead Management", body: "Collect, distribute, rank, and maintain warm leads with visibility throughout the entire customer touchpoint." },
            { title: "Auto Dialer & Predictive Dialer", body: "Say goodbye to manual dialing and hello to more real talk time with smart dialing that boosts efficiency and campaign performance." },
            { title: "Power Dialer", body: "Speed up calls and still keep each one personal by linking agents to the next person automatically so waiting drops." },
            { title: "Click-to-Call", body: "Start conversations right away inside your CRM without typing numbers by hand, saving agents time and helping them reply faster." },
            { title: "IVR Management", body: "Give callers a smooth experience with smart IVR paths that send them to the right team fast and cut down hold times." },
            { title: "Automatic Call Recording", body: "Keep safe records of every customer conversation for quality checks, compliance, agent training, and process improvement." },
            { title: "Real-Time Call Tracking", body: "Watch live calls, customer chats, campaign numbers, and agent work through central screens that hand over useful facts." },
            { title: "Workflow Automation", body: "Set up automatic steps for lead sharing, reminder calls, follow-up times, and task handling so daily operations run smoother." },
            { title: "Reports & Analytics", body: "Keep an eye on numbers like total calls, reply speed, close rates, campaign wins, and team output with clear dashboards." },
            { title: "CRM & Business Integrations", body: "Link Truering to your favorite CRM, APIs, WhatsApp, and other tools to make one joined-up system that follows every customer step." },
            { title: "Role-Based User Management", body: "Control what each person can see and do with flexible settings that fit companies of any size." },
        ],
        benefits: [
            "One Unified Business Communication Platform — move past plain calling tools with one central system that mixes CRM, cloud calls, automation, reports, and customer handling.",
            "Intelligent Automation That Saves Time — cut manual work with automatic lead sharing, clever reminders, flow automation, and smart dialing.",
            "Built to Scale with Your Business — whether you run ten agents or hundreds, Truering grows with your call needs and keeps strong performance.",
            "Actionable Insights for Better Decisions — follow every call, campaign, agent, and customer touch with live screens that show full operation pictures.",
            "Seamless Integration Capabilities — connect Truering with existing CRM, APIs, WhatsApp, and business tools without disrupting workflows.",
            "Trusted Since 2015 — nearly ten years of giving steady cloud talk and CRM help that lets companies get better at customer connection.",
            "Enterprise Security & Compliance — built on globally recognized ISO 27001, ISO 9001, and SOC 2 Audited standards.",
        ],
        relatedIndustries: ["real-estate", "healthcare", "education", "banking-and-financial-services", "insurance", "recruitment-and-staffing", "ecommerce", "travel-and-hospitality"],
        seoTitle: "Telecalling CRM Software | Truering",
        seoDescription:
            "Truering Telecalling CRM Software combines cloud telephony, CRM, lead management, automation, and analytics into one platform for sales and support teams.",
        keywords: ["telecalling CRM software", "CRM calling software", "telecalling software", "cloud telephony CRM", "auto dialer CRM"],
        faqItems: [
            { question: "What is Telecalling CRM Software?", answer: "It combines customer relationship management with cloud telephony so companies can handle calls, customer details, lead follow-ups, automation, and reports all in one main communication system." },
            { question: "Can Truering support both inbound and outbound calling operations?", answer: "Yes. Truering handles inbound customer service, outbound sales pushes, appointment setting, collections, customer success, and follow-up work through one smart Telecalling CRM Software system." },
            { question: "Does Truering integrate with existing CRM and business applications?", answer: "Absolutely. Truering connects with top CRM systems, APIs, WhatsApp, Google Sheets, and other business tools to make daily workflow better." },
            { question: "Which businesses can benefit from Truering Telecalling CRM Software?", answer: "Truering works great for real estate, healthcare, education, banking, insurance, recruitment, e-commerce, travel, and any group that needs strong customer communication and telecalling work." },
            { question: "Why should businesses choose Truering over traditional calling software?", answer: "Unlike basic calling apps, Truering combines smart telephony, CRM, automation, analytics, and customer handling into one system that grows with you and helps boost productivity, customer satisfaction, and steady growth." },
        ],
    },
    {
        slug: "ivr-management-software",
        title: "IVR Management System",
        eyebrow: "Automate Customer Journeys",
        description:
            "Create intelligent interactive voice response flows that route callers, collect inputs, provide self-service, and deliver 24/7 support without human intervention. Truering IVR Management System enables businesses to design, deploy, and manage voice menus that improve customer experience and reduce operational workload.",
        heroTitle: "IVR Management System That Routes Callers and Automates Self-Service",
        overview:
            "Most businesses struggle to manage high inbound call volumes, repeated routing errors, long hold times, and frustrated customers. IVR Management System solves these issues by allowing companies to build interactive voice response flows that greet callers, collect inputs, route them to the correct department, and automate routine tasks. Truering offers a visual flow builder, multi-level menus, smart routing rules, and analytics to continuously improve the caller experience. Since 2015, organizations have trusted Truering to modernize customer communication through secure, cloud-based technology backed by ISO 27001, ISO 9001, and SOC 2 Audited standards.",
        stats: ["Established Since 2015", "ISO 27001 Certified", "ISO 9001 Certified", "SOC 2 Audited"],
        features: [
            { title: "Visual Flow Builder", body: "Design interactive voice menus, call routing logic, and self-service paths using a drag-and-drop interface without technical expertise." },
            { title: "Multi-Level IVR Menus", body: "Build nested menus for departments, services, products, languages, regions, or customer segments." },
            { title: "Smart Call Routing", body: "Route callers to the right agents, departments, or voicemail boxes based on DTMF input, language preference, caller ID, or CRM data." },
            { title: "Voice Prompts and Messaging", body: "Upload custom greetings, announcements, hold messages, informational audio, and branded voice prompts for a professional caller experience." },
            { title: "Self-Service Automation", body: "Allow customers to access information, check order status, request callbacks, make selections, or complete routine tasks without speaking to an agent." },
            { title: "Real-Time IVR Monitoring", body: "Track IVR usage, menu completion rates, drop-off points, call abandonment, and customer path analysis to optimize flows." },
            { title: "CRM and Data Integration", body: "Use customer data, call history, and CRM context to personalize routing, responses, and self-service options." },
            { title: "Multi-Language Support", body: "Serve callers in multiple languages to support regional operations and improve customer satisfaction across diverse markets." },
            { title: "Holiday and Business Hours Routing", body: "Configure different IVR behavior, messages, and routing rules based on business hours, holidays, or after-hours support needs." },
            { title: "Post-Call Surveys", body: "Collect customer feedback through automated IVR surveys after calls to measure satisfaction and service quality." },
        ],
        benefits: [
            "Reduce Wait Times — guide callers to the right department or self-service option quickly with smart routing and multi-level menus.",
            "24/7 Self-Service — handle routine inquiries, status checks, callback requests, and information delivery without live agents.",
            "Improve First-Call Resolution — route callers accurately the first time using customer data, input selection, language, and CRM context.",
            "Lower Operational Load — free agents from repetitive routing and simple inquiries so they can focus on complex customer needs.",
            "Data-Driven Optimization — analyze IVR completion rates, drop-offs, menu usage, and call paths to continuously improve the customer journey.",
            "Professional Caller Experience — deliver branded greetings, clear voice prompts, hold messages, and consistent communication every time.",
            "Enterprise-Grade Security — protect customer data with ISO 27001, ISO 9001, and SOC 2 Audited security standards.",
        ],
        relatedIndustries: ["healthcare", "banking-and-financial-services", "insurance", "ecommerce", "education", "travel-and-hospitality", "bpo-and-contact-centers", "retail-and-consumer-goods"],
        seoTitle: "IVR Management System | Truering",
        seoDescription:
            "Truering IVR Management System helps businesses build voice menus, route callers, and automate self-service interactions with ease.",
        keywords: ["ivr management system", "interactive voice response", "ivr software", "automated call routing", "ivr flow builder"],
        faqItems: [
            { question: "What is an IVR Management System?", answer: "An IVR Management System allows businesses to design and manage automated voice menus that greet callers, collect inputs, route calls, and automate routine interactions without requiring live agents." },
            { question: "Can I create custom IVR flows with Truering?", answer: "Yes. Truering includes a visual flow builder that lets you design custom menus, routing rules, self-service options, announcements, and callback workflows." },
            { question: "Does Truering IVR work with CRM data?", answer: "Yes. Truering IVR can use CRM context, caller history, customer data, and previous interactions to personalize routing and self-service responses." },
            { question: "Can Truering IVR support multiple languages?", answer: "Yes. Truering supports multi-language IVR menus and prompts, making it ideal for businesses operating across regions and customer segments." },
            { question: "Which industries benefit from IVR Management System?", answer: "Healthcare, banking, insurance, ecommerce, education, travel, hospitality, retail, BPOs, and contact centers can all improve customer experience and reduce agent workload with IVR automation." },
        ],
    },
    {
        slug: "predictive-dialer-software",
        title: "Predictive Dialer Software",
        eyebrow: "Maximize Agent Talk Time",
        description:
            "Increase live customer conversations with Truering Predictive Dialer Software, an intelligent outbound calling platform that predicts agent availability, automates dialing, and connects representatives only to answered calls. Enhance campaign effectiveness, minimize wasted time, and help your teams have more productive discussions every day.",
        heroTitle: "Predictive Dialer Software That Maximizes Agent Talk Time and Campaign Productivity",
        overview:
            "A manual system of outbound calling campaigns causes low productivity, unanswered calls, and wasted agent time. Predictive Dialer Software uses intelligent algorithms to dial numerous phone numbers and predict agent availability so that once a customer picks up, they are connected to a representative. The software examines call outcomes, average talk time, and agent availability to optimize dialing rates, helping companies maximize real-time conversations and campaign performance. Since 2015, companies have relied on Truering to modernize outbound communication using enterprise-grade cloud technology supported by ISO 27001, ISO 9001, and SOC 2 Audited standards.",
        stats: ["Established Since 2015", "ISO 27001 Certified", "ISO 9001 Certified", "SOC 2 Audited"],
        features: [
            { title: "Predictive Dialing Engine", body: "Predict agent availability automatically and make outbound dialing based on intelligent algorithms, connecting representatives only to calls they can answer." },
            { title: "Intelligent Lead Queue", body: "Prioritize and rank customer leads with configurable rules depending on campaign needs, lead quality, geography, or business priorities." },
            { title: "Live Call Distribution", body: "Automatically distribute connected calls to free agents according to routing rules, team availability, and workload balancing." },
            { title: "CRM Synchronization", body: "Align customer records, communication history, call results, notes, follow-up schedules, and lead status in real time." },
            { title: "Campaign Automation", body: "Design, plan, control, and optimize numerous outbound campaigns in one location with automated dialing plans, segmentation, and follow-up operations." },
            { title: "Call Monitoring", body: "Watch real-time chats and call recordings, and review agent conversations to improve quality, coaching, compliance, and campaign performance." },
            { title: "Performance Analytics", body: "Monitor 20+ real-time campaign metrics like connects, answered calls, talk time, idle time, agent occupancy, abandoned calls, and campaign productivity." },
            { title: "Workflow Automation", body: "Automate callbacks, lead allocation, CRM updates, customer notifications, follow-ups, and repetitive campaign activities." },
            { title: "Third-Party Integrations", body: "Integrate with CRM, ERP, Helpdesk, and business solutions to coordinate customer data, streamline operations, and establish a single integrated outbound platform." },
            { title: "Enterprise Scalability", body: "Support growing teams, high-volume campaigns, multiple departments, and expanding business operations through scalable cloud infrastructure." },
        ],
        benefits: [
            "Intelligent Prediction — continuously assess agent availability, call duration, answer rate, and campaign activity to speed dialing so representatives spend more time speaking with customers.",
            "Higher Agent Occupancy — link representatives with live-answered phones rather than unanswered numbers or busy lines to achieve better occupancy and reduce time wastage.",
            "20+ Live Analytics — view connect rates, agent occupancy, answered calls, abandoned calls, talk time, idle time, campaign progress, and dialing efficiency via smart dashboards.",
            "360° Customer Context — give each agent a full customer view including lead profiles, prior discussions, call recordings, notes, follow-up history, and campaign interactions.",
            "Enterprise Scalability — support thousands of outbound calls each day, various campaigns, departments, and distributed teams with scalable cloud technology.",
            "Secure Communication — secure customer data and business communication with ISO 27001, ISO 9001, and SOC 2 Audited security standards.",
            "Trusted Since 2015 — Truering has enabled businesses to streamline outbound communication using intelligent cloud technology, enterprise reliability, and forward-looking innovation.",
        ],
        relatedIndustries: ["real-estate", "recruitment-and-staffing", "insurance", "banking-and-financial-services", "healthcare", "ecommerce", "bpo-and-contact-centers", "education"],
        seoTitle: "Predictive Dialer Software | Truering",
        seoDescription:
            "Truering Predictive Dialer Software uses intelligent dialing to maximize agent talk time and improve outbound campaign performance.",
        keywords: ["predictive dialer software", "predictive dialer", "outbound dialing software", "campaign dialer", "auto dialer software"],
        faqItems: [
            { question: "What is Predictive Dialer Software?", answer: "It uses intelligent algorithms to automatically dial multiple phone numbers, forecast agent availability, and connect only to answered calls so businesses can maximize productive calls and enhance outbound campaign effectiveness." },
            { question: "What is the difference between a predictive dialer and an auto dialer?", answer: "A Predictive Dialer relies on real-time algorithms to estimate agent availability, maximize dialing rates, and minimize idle time by connecting agents with live answers more efficiently." },
            { question: "Who should employ Predictive Dialer Software?", answer: "It is best suited for BPOs, contact centers, banking, insurance, healthcare, collections, recruitment, real estate, education, and sales departments with high-volume outbound communication." },
            { question: "Is Truering integrated with CRM?", answer: "Yes. Truering can be integrated with major CRM and business applications, enabling organizations to align customer records, campaign activities, follow-ups, communication history, and reporting in a single centralized application." },
            { question: "Is Truering Predictive Dialer Software secure?", answer: "Absolutely. Truering is supported by ISO 27001, ISO 9001, and SOC 2 Audited standards that offer enterprise-level security, compliance, and reliability for large-scale outbound communications." },
        ],
    },
    {
        slug: "call-tracking-crm",
        title: "Call Tracking CRM",
        eyebrow: "Measure Every Conversation",
        description:
            "Understand where every customer call comes from, how every conversation performs, and what drives conversions with Truering Call Tracking CRM. Assign marketing campaigns, gauge team activity, and transform customer interactions into smarter business decisions with a single smart business platform.",
        heroTitle: "Call Tracking CRM That Turns Every Business Call into Actionable Insights",
        overview:
            "Customer calls contain valuable business information, and unless effectively followed up, businesses cannot assess marketing performance, agent output, customer intent, and business opportunity. Call Tracking CRM automatically logs all inbound and outbound communications and associates each call with the respective customer, campaign, and sales activity. From call recordings and customer history to campaign attribution and performance analytics, businesses get full visibility into the role of phone conversations in generating revenue. Since 2015, Truering has helped organizations communicate better with their customers using intelligent cloud technology, supported by ISO 27001, ISO 9001, and SOC 2 Audited standards.",
        stats: ["Established Since 2015", "ISO 27001 Certified", "ISO 9001 Certified", "SOC 2 Audited"],
        features: [
            { title: "Automatic Call Capture", body: "Automatically log all incoming and outgoing business calls with customer information, time, duration, source, and conversation history without manual work." },
            { title: "Campaign Attribution", body: "Determine which marketing campaigns, advertisements, landing pages, keywords, or referral sources drove customer calls to measure ROI." },
            { title: "Customer Interaction Timeline", body: "Add all calls, notes, emails, follow-ups, tickets, meetings, and sales activities in a single customer profile for full context before each discussion." },
            { title: "Missed Call Tracking", body: "Track unanswered calls, unattended inquiries, callback status, and response time to reduce lost business opportunities and improve customer satisfaction." },
            { title: "Performance Analytics", body: "Monitor call volume, response time, campaign success, talk time, agent productivity, customer contact, and conversion patterns via interactive real-time dashboards." },
            { title: "AI-Powered Call Notes", body: "Automate call summaries, conversation outcomes, follow-up actions, and customer notes to reduce manual documentation and improve CRM accuracy." },
            { title: "Workflow Automation", body: "Trigger automatic callbacks, notifications, CRM updates, tasks, tickets, and follow-up workflows based on predefined call outcomes and business rules." },
            { title: "Business Integrations", body: "Integrate telephony, CRM, marketing applications, ERP systems, Helpdesk software, APIs, and business applications into a single communication ecosystem." },
            { title: "Multi-Location Monitoring", body: "Coordinate communication performance across various branches, teams, regions, or departments with centralized reporting and operational visibility." },
        ],
        benefits: [
            "100% Call Visibility — monitor all incoming and outgoing calls with details like call origin, customer, duration, timestamps, recordings, agent details, and call results.",
            "25+ Performance Analytics — track call volumes, missed calls, first-response time, campaign attribution, average handling time, conversion trends, agent activity, and customer engagement.",
            "50+ Campaign Attribution Points — know the source of your calls precisely across Google Ads, Meta campaigns, landing pages, websites, organic search, referrals, WhatsApp, email campaigns, and offline marketing.",
            "Unlimited Call Recording Archive — store, search, and retrieve all business discussions in a single safe repository for quality, coaching, disputes, compliance, and verification.",
            "360° Conversation Timeline — automatically connect calls, emails, WhatsApp messages, notes, follow-ups, tickets, and meetings with a single customer profile.",
            "40+ Intelligent Workflow Triggers — auto-callbacks, CRM updates, ticket creation, lead assignment, follow-ups, escalation rules, and customer notifications based on call results.",
            "Enterprise Analytics Built to Scale — manage 1,000 or 100,000+ customer conversations every month with enterprise-grade reporting, secure cloud infrastructure, and centralized monitoring backed by ISO 27001, ISO 9001, and SOC 2 Audited standards.",
        ],
        relatedIndustries: ["healthcare", "real-estate", "banking-and-financial-services", "insurance", "ecommerce", "education", "legal-and-professional-services", "bpo-and-contact-centers"],
        seoTitle: "Call Tracking CRM | Truering",
        seoDescription:
            "Truering Call Tracking CRM logs, attributes, and analyzes every customer call so businesses can improve marketing, service, and operations.",
        keywords: ["call tracking CRM", "call attribution software", "marketing call tracking", "call analytics CRM", "call performance tracking"],
        faqItems: [
            { question: "What is Call Tracking CRM?", answer: "Call tracking CRMs log, categorize, and process inbound and outbound calls and connect them to customer profiles and sales and marketing campaigns to offer end-to-end visibility of communication." },
            { question: "Can Truering identify which marketing campaigns generate phone calls?", answer: "Yes. Truering tracks calls from different marketing channels, helping companies attribute inquiries to a particular campaign, landing page, advert, and traffic source for improved ROI analysis." },
            { question: "Does Truering automatically record customer calls?", answer: "Yes. All qualified outbound and inbound conversations are automatically captured, safely stored, and connected to customer records for quality control, compliance, coaching, and future use." },
            { question: "Which industries benefit from Call Tracking CRM?", answer: "Call Tracking CRM can be utilized in healthcare, real estate, financial services, insurance, education, ecommerce, professional services, BPOs, and any business where customer calls affect revenue or service quality." },
            { question: "Is Truering Call Tracking CRM suitable for large enterprises?", answer: "Absolutely. Truering serves multi-location companies, high-call intensive settings, advanced reporting, enterprise integrations, and secure cloud infrastructure intended to serve growing businesses." },
        ],
    },
    {
        slug: "power-dialer-software",
        title: "Power Dialer CRM",
        eyebrow: "Continuous Sales Productivity",
        description:
            "Faster outbound sales with Truering Power Dialer CRM: intelligent dialing software that automatically dials the next prospect after each completed call. Less interruption, more daily customer contacts, and enabling your teams to keep sales constantly moving without hand dialing.",
        heroTitle: "Power Dialer CRM That Keeps Every Sales Conversation Moving",
        overview:
            "The time spent searching leads, manually dialing, and updating customer records reduces sales representatives' productivity. Power Dialer CRM eliminates these interruptions by automatically calling the next contact immediately after each successful call while keeping customer details easily accessible. Unlike predictive dialing, which calls many numbers at once, a Power Dialer makes only one call at a time in a predetermined sequence. It gives sales representatives more control over conversations and helps businesses make more calls each day, maintain consistent follow-ups, and improve lead contact. Since 2015, companies have trusted Truering to upgrade outbound communication with enterprise-level cloud computing, CRM, and smart automation, all backed by ISO 27001, ISO 9001, and SOC 2 Audited standards.",
        stats: ["Established Since 2015", "ISO 27001 Certified", "ISO 9001 Certified", "SOC 2 Audited"],
        features: [
            { title: "Sequential Auto Dialing", body: "Dial the next prospect automatically right after each completed conversation, saving manual dialing and unnecessary waiting time." },
            { title: "Smart Lead Queue", body: "Arrange leads by priority, campaign, geography, or sales stage to ensure representatives call at the appropriate place and time." },
            { title: "One-Click CRM Updates", body: "Record call notes, follow-up plans, and lead status automatically after each interaction without duplicate data entry." },
            { title: "Follow-Up Automation", body: "Automatically schedule callbacks, reminders, task assignments, and customer notifications after each conversation." },
            { title: "Complete Customer Timeline", body: "View customer profiles, past conversations, recordings, notes, and communication history through a single centralized CRM." },
            { title: "Call Recording", body: "Record outbound conversations securely for quality monitoring, sales coaching, compliance, and performance review." },
            { title: "Live Sales Dashboard", body: "Monitor 20+ real-time sales metrics like calls closed, active agents, talk time, follow-up status, campaign progress, and productivity data." },
            { title: "Workflow Automation", body: "Automate routine sales tasks like lead assignment, CRM updates, notifications, and follow-ups so representatives can focus on customers and revenue." },
            { title: "Business Integrations", body: "Combine with CRM, ERP, Helpdesk, HRMS, and third-party applications to keep customer information aligned and workflows streamlined." },
            { title: "Mobile Calling", body: "Provide outbound call management, customer information, and follow-up services securely via desktop, web, or mobile applications." },
        ],
        benefits: [
            "Continuous Calling — keep reps in continuous selling mode with auto call progression, eliminating manual dialing between calls.",
            "Faster Follow-Ups — automatically respond to all sales prospects in a timely manner through automated calls, reminders, and workflows.",
            "360° Customer View — give each representative customer insights including past dialogue, recordings, notes, lead history, and interaction timelines.",
            "20+ Live Metrics — measure completed calls, talk time, active agents, follow-up status, campaign progress, conversion trends, and productivity insights.",
            "Enterprise Scalability — support 10 users to enterprise sales teams with a scalable cloud platform handling multiple campaigns, departments, and locations.",
            "Secure Platform — secure business communication and customer data with ISO 27001, ISO 9001, and SOC 2 Audited infrastructure.",
            "Trusted Since 2015 — businesses have relied on Truering to update outbound communication with smart cloud solutions and enterprise-capable innovation.",
        ],
        relatedIndustries: ["real-estate", "banking-and-financial-services", "insurance", "education", "healthcare", "recruitment-and-staffing", "ecommerce", "travel-and-hospitality"],
        seoTitle: "Power Dialer CRM | Truering",
        seoDescription:
            "Truering Power Dialer CRM helps sales teams keep conversations moving with sequential dialing, automated follow-up, and centralized CRM visibility.",
        keywords: ["power dialer CRM", "power dialer software", "sales dialer CRM", "outbound calling software", "sequential auto dialer"],
        faqItems: [
            { question: "What is Power Dialer CRM?", answer: "It manages customer records, follow-ups, and communication history by automatically dialing the next customer right after each conversation has been completed, helping sales teams make more calls each day." },
            { question: "What is the difference between a predictive dialer and a power dialer?", answer: "A Power Dialer makes one call at a time to a prospect after each successful call, giving representatives more control. A Predictive Dialer uses smart algorithms to dial several numbers and only connects agents to answered calls." },
            { question: "What types of businesses are Power Dialer CRM suitable for?", answer: "It suits sales organizations, banks, insurance companies, recruitment, real estate, healthcare, education, e-commerce, and any business that depends on organized outbound calling and regular customer follow-ups." },
            { question: "Is Truering Power Dialer CRM compatible with current CRM?", answer: "Yes. Truering integrates with most major CRM, ERP, Helpdesk, and business applications so businesses can coordinate customer records, communication history, lead updates, and workflow activities in a unified platform." },
            { question: "Is Truering Power Dialer CRM secure?", answer: "Absolutely. Truering operates under ISO 27001, ISO 9001, and SOC 2 Audited standards to provide business-critical outbound communication with the highest levels of security, compliance, and reliability." },
        ],
    },
    {
        slug: "click-to-call-software",
        title: "Click-to-Call CRM",
        eyebrow: "One-Click Calling",
        description:
            "Do away with manual dialing and promote faster customer involvement with Truering Click-to-Call CRM. Hold business discussions instantly through your CRM, improve response times, and help sales and support teams reach more customers while keeping all communication touchpoints in a single smart platform.",
        heroTitle: "Click-to-Call CRM That Connects Every Customer with a Single Click",
        overview:
            "Click-to-Call CRM places your CRM at the heart of business calling, enabling you to make calls in real time with just a single click and automatically log all interactions. Rather than manually entering a customer's phone number, representatives can simply press a button and initiate dialogue. Customer profiles, conversation history, recordings, notes, follow-ups, and communication activities are all kept central so businesses can enhance productivity, decrease response time, and improve customer interactions. Since 2015, Truering has been assisting organizations to modernize customer communication with intelligent cloud telephony, CRM, workflow automation, and enterprise-level security, backed by ISO 27001, ISO 9001, and SOC 2 Audited standards.",
        stats: ["Established Since 2015", "ISO 27001 Certified", "ISO 9001 Certified", "SOC 2 Audited"],
        features: [
            { title: "One-Click Calling", body: "Make customer calls from profiles, lead lists, contact records, or dashboards with a single click, eliminating manual numbers and dialing mistakes." },
            { title: "Unified Customer Profiles", body: "See customer information, past interactions, recordings, notes, follow-up tasks, and communication history on a single screen before each call." },
            { title: "Automatic Call Logging", body: "All incoming and outgoing calls are automatically logged into the CRM with call duration, timestamp, notes, outcomes, and follow-ups." },
            { title: "Smart Contact Management", body: "Manage customers and prospects under a single smart CRM. Search, filter, segment, and access customer information instantly." },
            { title: "Follow-Up Automation", body: "Auto-plan callbacks, follow-ups, reminders, tasks, and notifications right after each conversation so no opportunity is missed." },
            { title: "Call Recording", body: "Record all business conversations safely for quality, compliance, coaching, and dispute resolution." },
            { title: "Live Activity Dashboard", body: "Monitor 20+ live communication metrics like active calls, completed calls, missed calls, agent availability, response times, and customer interactions." },
            { title: "CRM Integrations", body: "Link Truering to top CRM, ERP, Helpdesk, HRMS, and productivity systems to consolidate customer data and streamline communication processes." },
            { title: "Mobile Accessibility", body: "Empower the workforce to make business calls through desktop, web, or mobile apps with all customer information securely available." },
            { title: "Workflow Automation", body: "Automate manual communication activities like CRM updates, callbacks, lead assignments, notifications, ticket creation, and customer follow-ups." },
        ],
        benefits: [
            "Every Click Starts a Conversation — transform customer profiles, lead records, support tickets, and contact lists into calling opportunities in real time.",
            "Built Around Your CRM — keep customer information, history, notes, recordings, and follow-ups linked in one screen.",
            "Seconds Instead of Steps — eliminate typing numbers, dial pads, and application switching with one-button customer access.",
            "Designed for Fast-Moving Teams — inside sales, customer support, account management, and customer success teams can handle more conversations daily.",
            "Communication Without Context Switching — start every call with full transparency into past interactions so employees communicate with confidence.",
            "Grows with Every Department — roll out from one team to sales, support, collections, onboarding, and customer success without extra tools.",
            "Enterprise Foundation You Can Trust — powered by secure cloud infrastructure and ISO 27001, ISO 9001, and SOC 2 Audited standards since 2015.",
        ],
        relatedIndustries: ["real-estate", "banking-and-financial-services", "insurance", "healthcare", "education", "ecommerce", "recruitment-and-staffing", "travel-and-hospitality"],
        seoTitle: "Click-to-Call CRM | Truering",
        seoDescription:
            "Truering Click-to-Call CRM enables sales and support teams to start conversations instantly from the CRM while keeping every interaction logged and organized.",
        keywords: ["click to call CRM", "one click calling", "CRM calling software", "click to call software", "one click dialer CRM"],
        faqItems: [
            { question: "What is Click-to-Call CRM?", answer: "It gives users the ability to start a business call from customer records with just a click. It removes hand dialing and automatically logs communication details, improving speed and customer interaction." },
            { question: "How does Click-to-Call CRM improve business productivity?", answer: "It saves time by eliminating manual dialing and automatically recording all interactions, so teams can respond to more customers and engage in more conversations each day." },
            { question: "Which businesses can benefit from Click-to-Call CRM?", answer: "It is best suited for sales teams, customer care call centers, real estate agencies, banks, insurance companies, healthcare, schools, recruitment agencies, and BPOs that handle efficient customer communication regularly." },
            { question: "Does Truering Click-to-Call CRM integrate with existing business applications?", answer: "Yes. Truering integrates with major CRM, ERP, Helpdesk, HRMS, and other business solutions that allow organizations to centralize customer details and facilitate communication processes." },
            { question: "Is Truering Click-to-Call CRM secure?", answer: "Absolutely. Truering supports ISO 27001, ISO 9001, and SOC 2 Audited standards to provide enterprise-quality security, compliance, and expected performance for all customer interactions." },
        ],
    },
    {
        slug: "auto-dialer-crm",
        title: "Auto Dialer CRM",
        eyebrow: "Automated Outreach",
        description:
            "Scale outbound communication with Truering Auto Dialer CRM, an intelligent platform that automates dialing, streamlines lead management, and accelerates sales campaigns. Connect with more prospects, reduce manual effort, and empower your teams to spend more time selling instead of dialing.",
        heroTitle: "Auto Dialer CRM That Automates Every Call and Maximizes Every Sales Opportunity",
        overview:
            "Handling huge outgoing campaigns manually leads to lost time, uneven follow-up, and reduced productivity. Auto Dialer CRM is an automated dialing and customer relationship management solution that enables businesses to initiate large-scale call campaigns and manage lead organization, customer interactions, and campaign performance through one centralized system. The system automatically makes outgoing calls, displays customer data before each call, records conversations, and updates customer records in real time. Since 2015, Truering has helped organizations revamp outbound communication with intelligent automation, centralized CRM, real-time analytics, and enterprise-grade cloud telephony, all backed by ISO 27001, ISO 9001, and SOC 2 Audited standards.",
        stats: ["Established Since 2015", "ISO 27001 Certified", "ISO 9001 Certified", "SOC 2 Audited"],
        features: [
            { title: "Automated Dialing", body: "Automatically call customer numbers without manual dialing so agents reach more prospects and minimize idle time." },
            { title: "Smart Lead Management", body: "Manage, distribute, and rank customer leads and track them using a single CRM so no sales opportunity is neglected." },
            { title: "Click-to-Call", body: "Make outbound calls to customers with a single direct button, eliminating dialing errors and improving agent productivity." },
            { title: "Campaign Management", body: "Design, plan, execute, and optimize various outbound campaigns through a single dashboard with full performance tracking." },
            { title: "Workflow Automation", body: "Automate callbacks, reminders, lead assignments, customer notifications, CRM updates, and repetitive sales operations." },
            { title: "Unified Customer Records", body: "Keep full customer profiles including call recordings, conversation history, notes, follow-ups, and interaction sequences." },
            { title: "Call Recording", body: "Document all outbound conversations safely for quality, sales coaching, compliance, and performance appraisal." },
            { title: "Live Dashboards", body: "View 20+ real-time campaign indicators like calls made, answered calls, talk time, agent performance, and lead performance." },
            { title: "Analytics & Reports", body: "Produce comprehensive reports on campaign performance, customer interaction, conversion patterns, and agent productivity." },
            { title: "CRM Integrations", body: "Connect Truering to leading CRM, ERP, Helpdesk, and business software to align customer data and streamline workflows." },
        ],
        benefits: [
            "100% Automation — do away with manual dialing and automate outbound calls, lead assignment, follow-ups, and campaign processes.",
            "20+ Live Metrics — track calls made, answered calls, talk time, idle time, agent performance, campaign status, and customer results in real time.",
            "360° Lead Visibility — give salespeople full access to lead profiles, past conversations, recordings, follow-ups, notes, and history.",
            "Enterprise Ready — support startups, growing businesses, and enterprise organizations across multiple campaigns and locations without losing quality.",
            "Rapid Deployment — launch smart campaigns quickly with hassle-free setup and minimal business impact.",
            "Secure Operations — protect customer data and business communication with ISO 27001, ISO 9001, and SOC 2 Audited security.",
            "Trusted Since 2015 — companies have relied on Truering for intelligent automation, scalable cloud computing, and enterprise-level reliability.",
        ],
        relatedIndustries: ["banking-and-financial-services", "insurance", "real-estate", "education", "healthcare", "ecommerce", "recruitment-and-staffing", "travel-and-hospitality"],
        seoTitle: "Auto Dialer CRM | Truering",
        seoDescription:
            "Truering Auto Dialer CRM automates high-volume outbound calling, streamlines lead management, and helps teams maximize sales opportunities with smart automation.",
        keywords: ["auto dialer CRM", "automated outbound calling", "dialer CRM software", "auto dialer software", "outbound campaign automation"],
        faqItems: [
            { question: "What is Auto Dialer CRM?", answer: "It is a cloud-based communication platform that combines automated outbound dialing with customer relationship management, enabling businesses to manage leads, automate campaigns, track interactions, and improve sales productivity from one centralized system." },
            { question: "Which businesses can benefit from Auto Dialer CRM?", answer: "Auto Dialer CRM is ideal for sales teams, BPOs, banking, insurance, healthcare, education, e-commerce, recruitment, collections, and real estate businesses that manage high-volume outbound customer communication." },
            { question: "Does Truering Auto Dialer CRM support CRM integration?", answer: "Yes. Truering integrates with leading CRM and business applications, allowing organizations to synchronize customer records, communication history, follow-ups, call logs, and workflow activities." },
            { question: "Can I monitor campaign performance in real time?", answer: "Absolutely. Truering provides 20+ live dashboards and reporting metrics covering call activity, agent productivity, campaign progress, customer engagement, and operational performance." },
            { question: "Is Truering Auto Dialer CRM secure?", answer: "Yes. Truering is backed by ISO 27001, ISO 9001, and SOC 2 Audited standards, ensuring enterprise-grade security, compliance, and reliability for every outbound communication campaign." },
        ],
    },
    {
        slug: "call-recording-software",
        title: "Call Recording Software",
        eyebrow: "Secure Conversation Capture",
        description:
            "Never lose critical customer conversations with Truering Call Recording Software. Auto-record all business calls, manage, search, and retrieve them in a single secure cloud solution designed to enhance compliance, employee coaching, customer care, and operational transparency.",
        heroTitle: "Call Recording Software That Securely Captures Every Business Conversation",
        overview:
            "Critical customer information, sales commitments, service requests, compliance evidence, and training opportunities are all contained in business conversations. Without a centralized recording system, organizations risk losing important information that could improve customer experience, resolve conflicts, or enhance processes. Call Recording Software automatically logs inbound and outbound business calls and stores all conversations safely in cloud-based storage that is easily searchable. Instead of using manual documentation, businesses can access recordings instantly, assess customer experiences, maintain compliance, train employees, and keep a complete history of communication. Since 2015, Truering has helped businesses modernize communication management with enterprise-grade cloud technology, backed by ISO 27001, ISO 9001, and SOC 2 Audited standards.",
        stats: ["Established Since 2015", "ISO 27001 Certified", "ISO 9001 Certified", "SOC 2 Audited"],
        features: [
            { title: "Automatic Call Recording", body: "Automatically record both incoming and outgoing calls with time records, caller details, agent information, call time, and conversation metadata for easy access." },
            { title: "Smart Recording Search", body: "Search records in seconds by customer name, phone number, agent, department, date, campaign, call duration, or custom filter instead of browsing manually." },
            { title: "Cloud Recording Storage", body: "Securely store business conversations on scalable cloud infrastructure with reliable access, centralized management, and enterprise-level data protection." },
            { title: "Quality Review Workspace", body: "Monitor conversations for customer service, sales coaching, quality control, onboarding, and communication efficiency through a single review interface." },
            { title: "Compliance Recording", body: "Keep safe records of customer communication to support governance, regulatory requirements, contractual needs, audits, and business documentation." },
            { title: "Conversation Timeline", body: "Link all recordings to customer profiles, CRM activities, follow-ups, notes, emails, and past interactions automatically for full communication history." },
            { title: "Secure User Access", body: "Use role-based access and secure authentication to control who can access recordings, departmental archives, and administrator controls." },
            { title: "Intelligent Recording Library", body: "Organize recordings by team, campaign, department, location, or customer account with searchable archives for easier long-term management." },
            { title: "Business Integrations", body: "Combine recordings with CRM, Helpdesk, cloud telephony, ERP, APIs, and business applications to coordinate customer dialogue across your full technology stack." },
            { title: "Multi-Branch Recording Management", body: "Store recordings centrally across multiple offices, departments, branches, and remote teams with a single secure site for enterprise communication management." },
        ],
        benefits: [
            "100% Automatic Recording — automatically record all inbound and outbound conversations without manual intervention, safeguarding important conversations without disrupting daily activities.",
            "1 Million+ Recording Capacity — process and store increasing volumes of communication with quick search, retrieval, and playback across departments and geographic locations.",
            "15+ Smart Search Filters — find any recording within seconds by customer name, phone number, agent, department, extension, campaign, call duration, date, tags, or custom filters.",
            "256-Bit Enterprise Security — secure confidential customer discussions through encryption, secure cloud infrastructure, role-based access, and compliance-driven access control.",
            "90-Day to Unlimited Retention — establish recording retention policies that match operational or regulatory needs, whether short-term storage or long-term archiving.",
            "50+ Quality Review Parameters — assess customer contacts with customizable quality scorecards, coaching checklists, compliance reviews, service criteria, and performance standards.",
            "500+ Teams. One Recording Platform — centralize recordings, simplify administration, and deliver reliable performance through a scalable cloud platform backed by ISO 27001, ISO 9001, and SOC 2 Audited standards.",
        ],
        relatedIndustries: ["banking-and-financial-services", "healthcare", "insurance", "real-estate", "bpo-and-contact-centers", "education", "legal-and-professional-services", "ecommerce-and-retail"],
        seoTitle: "Call Recording Software | Truering",
        seoDescription:
            "Truering Call Recording Software automatically captures, stores, and searches customer conversations for compliance, coaching, and service excellence.",
        keywords: ["call recording software", "call recording system", "secure call recording", "recording software", "business call recording CRM"],
        faqItems: [
            { question: "What is Call Recording Software?", answer: "It automatically logs incoming and outgoing business calls, keeps call recordings safely, and allows organizations to search, listen to, and manage the recordings for quality assurance, compliance, training, and customer support." },
            { question: "Can recordings be searched quickly?", answer: "Yes. Truering provides advanced search capabilities using customer details, phone numbers, agents, departments, campaigns, dates, tags, and other filters, allowing users to retrieve recordings within seconds." },
            { question: "Does Call Recording Software meet compliance needs?", answer: "Absolutely. Truering helps organizations keep safe records of conversations with adjustable retention strategies, user access control, and audit archives to support internal governance and industry compliance." },
            { question: "Can managers use recordings for employee coaching?", answer: "Yes. Managers can review recorded conversations, evaluate communication quality, identify improvement opportunities, deliver structured coaching, and maintain consistent service standards across customer-facing teams." },
            { question: "Can Truering Call Recording Software be scaled to enterprise?", answer: "Yes. Truering supports organizations of any size with enterprise-level cloud infrastructure, secure recording management, flexible retention policies, role-based access controls, and scalable storage to accommodate high-volume communication environments." },
        ],
    },
    {
        slug: "lead-management-software",
        title: "Lead Management CRM",
        eyebrow: "Pipeline Visibility",
        description:
            "Never lose another business opportunity with Truering Lead Management CRM. Engage, store, delegate, develop, and monitor all leads from initial inquiry to eventual conversion through a single smart platform, designed to enhance sales visibility and speed up the pace of business.",
        heroTitle: "Lead Management CRM That Turns Every Inquiry into a Revenue Opportunity",
        overview:
            "When a business expands, handling inquiries using spreadsheets, emails, or disconnected systems results in missed follow-ups, duplicate records, slow response times, and lost revenue. Lead Management CRM consolidates all prospects in a single platform so leads can be monitored, prioritized, and converted easily. Organizations get full visibility of the sales process through lead capture, qualification, assignment, nurturing, and conversion. Sales managers can track pipeline health, automate repetitive processes, and follow up on every opportunity on time. Since 2015, Truering has helped companies simplify their lead operations, all backed by ISO 27001, ISO 9001, and SOC 2 Audited standards.",
        stats: ["Established Since 2015", "ISO 27001 Certified", "ISO 9001 Certified", "SOC 2 Audited"],
        features: [
            { title: "Centralized Lead Capture", body: "Gather web inquiries, landing pages, social media campaigns, phone calls, referrals, and marketing channels into a single centralized CRM automatically." },
            { title: "Smart Lead Assignment", body: "Assign new inquiries by territory, products, department, campaign, workload, or business-specific rules automatically so every lead reaches the right salesperson quickly." },
            { title: "Lead Qualification", body: "Target and rank prospects with customizable qualification rules so sales teams focus on the highest-potential opportunities." },
            { title: "Pipeline Management", body: "Review each lead with configurable sales steps, track deal flow, identify bottlenecks, and stay fully visible into the pipeline from inquiry to conversion." },
            { title: "Follow-Up Automation", body: "Auto-program reminders, calls, emails, task delegations, and follow-ups so every prospect gets timely communication during the purchase process." },
            { title: "Activity Timeline", body: "See all interactions, discussions, notes, meetings, emails, tasks, and follow-ups in one timeline for complete opportunity history." },
            { title: "Sales Performance Dashboard", body: "Track lead inflow, conversion rates, pipeline movement, team activity, pending follow-ups, and performance trends using interactive dashboards." },
            { title: "Duplicate Lead Detection", body: "Automatically detect redundant inquiries and consolidate customer data to keep a clean CRM database and increase reporting accuracy." },
            { title: "Workflow Automation", body: "Automate repetitive sales tasks such as lead routing, approvals, follow-ups, notifications, and CRM updates to decrease manual work." },
            { title: "CRM Integrations", body: "Integrate marketing, ERP, telephony, email, Helpdesk, and third-party business applications with Truering to form a single unified lead management ecosystem." },
        ],
        benefits: [
            "8+ Lead Sources. One CRM — capture inquiries from websites, landing pages, Google Ads, Meta Ads, WhatsApp, phone calls, referrals, email campaigns, and manual imports into one unified platform.",
            "100+ Smart Assignment Rules — automatically allocate leads by territory, product, campaign, language, lead score, availability, business hours, or staff hierarchy.",
            "Unlimited Sales Pipelines — create separate pipelines for products, businesses, geographies, customer segments, or sales processes with configurable stages and probabilities.",
            "40+ Workflow Automations — automate lead assignment, follow-ups, approvals, task creation, notifications, escalations, and CRM updates.",
            "12+ Pipeline Intelligence Dashboards — track the sales funnel with live dashboards, Kanban boards, conversion reports, sales forecasts, activity timelines, and team performance metrics.",
            "30+ Business Integrations — connect Truering with cloud telephony, WhatsApp, email platforms, ERP systems, marketing automation software, APIs, and third-party applications.",
            "500+ User Enterprise Scalability — scale effortlessly with role-based access, centralized administration, secure cloud infrastructure, and ISO 27001, ISO 9001, and SOC 2 Audited reliability.",
        ],
        relatedIndustries: ["real-estate", "banking-and-financial-services", "insurance", "healthcare", "education", "automotive", "manufacturing", "b2b-saas-and-technology"],
        seoTitle: "Lead Management CRM | Truering",
        seoDescription:
            "Truering Lead Management CRM unifies lead capture, assignment, follow-up, and pipeline visibility so every inquiry becomes a conversion opportunity.",
        keywords: ["lead management CRM", "lead tracking software", "sales pipeline CRM", "lead management software", "lead capture CRM"],
        faqItems: [
            { question: "What is Lead Management CRM?", answer: "It assists companies in capturing, organizing, assigning, tracking, and nurturing sales leads across all channels while providing a full view of the customer journey from first touch to conversion." },
            { question: "How does Lead Management CRM improve sales performance?", answer: "It automates lead allocation, follow-up, pipelines, and sales processes so no inquiry is overlooked and managers have better control of team performance and conversion probabilities." },
            { question: "Can Truering capture leads from multiple sources?", answer: "Yes. Truering can consolidate web, landing page, phone, social media campaign, email inquiries, and referrals into a single CRM." },
            { question: "Is the sales pipeline customizable?", answer: "Absolutely. You can customize lead stages, qualification rules, assignment rules, workflows, and approval procedures according to your sales cycle and operating needs." },
            { question: "Is Truering Lead Management CRM suitable for growing businesses?", answer: "Yes. Truering supports businesses of all sizes with scalable infrastructure, automated workflows, enterprise-grade security, and customization for growing sales teams and increasing lead volumes." },
        ],
    },
    {
        slug: "virtual-number-solution",
        title: "Virtual Number Solution",
        eyebrow: "Professional Business Calling",
        description:
            "Establish a professional business presence with virtual phone numbers for marketing, support, sales, and regional operations. Truering Virtual Number Solution enables businesses to manage multiple numbers, route calls intelligently, track performance, and deliver consistent customer experiences across every market.",
        heroTitle: "Virtual Number Solution for Smarter Business Communication",
        overview:
            "Businesses that depend on mobile phones or local landline numbers often find it difficult to manage customer communication at scale, track team performance, and maintain a professional brand image. Virtual Number Solution provides cloud-based business phone numbers that can be mapped to departments, campaigns, locations, or agents without requiring physical phone lines. Truering supports virtual mobile numbers, toll-free numbers, landline-style numbers, and regional numbers with smart routing, call recording, analytics, and CRM integration. Since 2015, Truering has helped businesses build reliable customer communication infrastructure using secure, scalable cloud technology backed by ISO 27001, ISO 9001, and SOC 2 Audited standards.",
        stats: ["Established Since 2015", "ISO 27001 Certified", "ISO 9001 Certified", "SOC 2 Audited"],
        features: [
            { title: "Multiple Number Types", body: "Choose from virtual mobile numbers, toll-free numbers, local numbers, regional numbers, and vanity numbers based on business needs and customer reach." },
            { title: "Smart Call Routing", body: "Route incoming calls to departments, agents, branches, or voicemail using business hours, caller location, language, agent availability, or IVR input." },
            { title: "Call Tracking and Analytics", body: "Track call volume, missed calls, answered calls, duration, source, and campaign performance for each virtual number independently." },
            { title: "CRM Integration", body: "Link every virtual number with your CRM so incoming calls automatically show customer details, history, notes, and previous interactions." },
            { title: "Call Recording and Monitoring", body: "Record, store, and review all business calls linked to virtual numbers for quality assurance, training, compliance, and dispute resolution." },
            { title: "Campaign-Specific Numbers", body: "Assign unique virtual numbers to individual marketing campaigns, channels, or landing pages to measure ROI and optimize marketing spend." },
            { title: "Multi-Location Support", body: "Manage virtual numbers for multiple branches, regions, or departments from a single centralized dashboard." },
            { title: "Voicemail and Call Forwarding", body: "Configure voicemail greetings, call forwarding rules, after-hours behavior, and callback workflows for uninterrupted communication." },
            { title: "Scalable Cloud Infrastructure", body: "Add or remove virtual numbers as your business grows, with no hardware installation or physical phone line dependency." },
            { title: "Secure and Compliant Communication", body: "Protect business and customer data with ISO 27001, ISO 9001, and SOC 2 Audited security standards." },
        ],
        benefits: [
            "Professional Business Presence — present a consistent, professional brand identity with dedicated business numbers instead of personal mobile numbers.",
            "Campaign-Level Tracking — assign unique numbers to campaigns, channels, and regions to measure call attribution and marketing ROI with precision.",
            "Smarter Call Routing — direct callers to the right team, branch, language, or agent automatically based on rules and availability.",
            "Multi-Location Management — manage numbers, routing, and reporting for all branches and regions from one centralized platform.",
            "Complete Call Visibility — monitor 25+ metrics per number including call volume, missed calls, response time, talk time, recordings, and agent performance.",
            "No Hardware Required — deploy virtual numbers instantly over the cloud, scale up or down quickly, and eliminate traditional phone line costs.",
            "Trusted Since 2015 — Truering has delivered secure, scalable cloud communication solutions to businesses across industries with enterprise-grade reliability.",
        ],
        relatedIndustries: ["ecommerce", "real-estate", "healthcare", "education", "travel-and-hospitality", "banking-and-financial-services", "insurance", "bpo-and-contact-centers"],
        seoTitle: "Virtual Number Solution | Truering",
        seoDescription:
            "Truering Virtual Number Solution provides cloud-based business phone numbers with smart routing, call tracking, CRM integration, and enterprise analytics.",
        keywords: ["virtual number solution", "virtual phone number", "business virtual number", "cloud phone number", "toll free number solution"],
        faqItems: [
            { question: "What is a Virtual Number Solution?", answer: "A Virtual Number Solution provides cloud-based business phone numbers that can be used for calls, routing, tracking, and customer communication without requiring physical phone lines." },
            { question: "Can I use virtual numbers for marketing campaigns?", answer: "Yes. Truering allows businesses to assign unique virtual numbers to campaigns, channels, or landing pages to track call attribution and measure marketing performance." },
            { question: "Does Truering support toll-free and regional virtual numbers?", answer: "Yes. Truering supports virtual mobile numbers, toll-free numbers, local numbers, and regional numbers to match business and customer needs." },
            { question: "Can virtual numbers be integrated with CRM?", answer: "Yes. Truering integrates virtual numbers with CRM so incoming calls display customer profiles, interaction history, notes, and previous tickets automatically." },
            { question: "Is Truering Virtual Number Solution secure?", answer: "Yes. Truering is backed by ISO 27001, ISO 9001, and SOC 2 Audited standards, ensuring secure, compliant, and reliable business communication." },
        ],
    },
    {
        slug: "crm-for-telecalling-teams",
        title: "CRM for Telecalling Teams",
        eyebrow: "Built for Call-Centric Sales",
        description:
            "Empower telecalling teams with a CRM designed specifically for high-volume calling operations. Truering CRM for Telecalling Teams combines auto dialing, call scripts, lead management, call recording, real-time analytics, and workflow automation so reps stay productive and managers stay in control.",
        heroTitle: "CRM for Telecalling Teams That Drives More Conversations and Conversions",
        overview:
            "Telecalling teams need more than a generic CRM. They need a system built for dialing, follow-ups, scripts, lead prioritization, real-time monitoring, and conversion tracking. CRM for Telecalling Teams gives call center and inside sales teams everything they need in one platform — click-to-call, auto dialers, power dialers, lead allocation, call recordings, performance dashboards, and automated workflows. Since 2015, Truering has helped businesses transform telecalling operations with cloud-based CRM technology backed by ISO 27001, ISO 9001, and SOC 2 Audited standards.",
        stats: ["Established Since 2015", "ISO 27001 Certified", "ISO 9001 Certified", "SOC 2 Audited"],
        features: [
            { title: "Built-In Auto and Power Dialers", body: "Allow telecallers to place more calls in less time with one-click dialing, auto dialers, and power dialers integrated directly into the CRM." },
            { title: "Lead Allocation and Distribution", body: "Automatically assign leads to telecallers based on region, language, availability, performance, or custom rules to ensure balanced workloads." },
            { title: "Call Scripts and Guided Workflows", body: "Provide agents with dynamic call scripts, objection handling prompts, and step-by-step workflows to maintain message consistency." },
            { title: "Click-to-Call from CRM", body: "Start calls instantly from lead records, contact lists, or campaign queues without switching between applications." },
            { title: "Real-Time Performance Dashboards", body: "Track calls made, answered calls, talk time, conversions, follow-ups, and agent productivity with live dashboards and reports." },
            { title: "Call Recording and Quality Monitoring", body: "Record all telecalling conversations for quality review, coaching, compliance, dispute resolution, and performance improvement." },
            { title: "Automated Follow-Ups and Tasks", body: "Schedule callbacks, reminders, emails, WhatsApp messages, and tasks automatically based on call outcomes and lead status." },
            { title: "Lead Status and Pipeline Management", body: "Move leads through customizable stages, track conversion probability, and manage sales pipelines with complete visibility." },
            { title: "Multi-Campaign Management", body: "Run and manage multiple telecalling campaigns simultaneously with separate lists, scripts, goals, and reporting." },
            { title: "CRM and Business Integrations", body: "Integrate with marketing, sales, ERP, Helpdesk, and communication tools to unify data and streamline telecalling operations." },
        ],
        benefits: [
            "More Calls Per Agent — built-in dialers, click-to-call, and lead queues help telecallers connect with more prospects every day.",
            "Better Lead Conversion — automatic lead allocation, guided scripts, follow-up automation, and pipeline tracking keep leads moving toward conversion.",
            "Complete Call Visibility — monitor 30+ metrics including calls made, answered calls, talk time, conversions, follow-ups, and agent activity in real time.",
            "Improved Agent Productivity — give telecallers one screen with leads, scripts, dialer, notes, and history so they spend less time navigating and more time talking.",
            "Consistent Customer Experience — call scripts, guided workflows, and centralized customer history ensure every conversation is professional and aligned.",
            "Scalable for Growing Teams — onboard new telecallers, campaigns, and branches easily with cloud-based CRM that scales with your business.",
            "Enterprise Security and Compliance — protect customer data and call recordings with ISO 27001, ISO 9001, and SOC 2 Audited standards.",
        ],
        relatedIndustries: ["bpo-and-contact-centers", "real-estate", "insurance", "banking-and-financial-services", "education", "healthcare", "ecommerce", "recruitment-and-staffing"],
        seoTitle: "CRM for Telecalling Teams | Truering",
        seoDescription:
            "Truering CRM for Telecalling Teams combines dialers, lead management, call recording, and real-time analytics to help call-centric sales teams convert more leads.",
        keywords: ["CRM for telecalling teams", "telecalling CRM", "call center CRM", "inside sales CRM", "telecalling software"],
        faqItems: [
            { question: "What is CRM for Telecalling Teams?", answer: "It is a specialized CRM built for high-volume calling teams, combining lead management, auto dialers, call scripts, call recording, analytics, and workflow automation in one platform." },
            { question: "Can Truering CRM handle multiple telecalling campaigns?", answer: "Yes. Truering supports multiple campaigns with separate lead lists, scripts, goals, call queues, and reporting for better campaign management." },
            { question: "Does Truering provide auto dialers for telecalling?", answer: "Yes. Truering includes click-to-call, auto dialer, power dialer, and predictive dialer options to help telecallers connect with more leads efficiently." },
            { question: "Can managers monitor telecaller performance in real time?", answer: "Yes. Truering provides live dashboards and reports for calls made, answered calls, talk time, conversions, follow-ups, and overall agent productivity." },
            { question: "Is Truering CRM for Telecalling Teams secure?", answer: "Yes. Truering follows ISO 27001, ISO 9001, and SOC 2 Audited standards to keep customer data, call recordings, and business communication secure and compliant." },
        ],
    },
];

export const industryPages: IndustryPageData[] = [
    {
        slug: "real-estate",
        title: "Real Estate Telecalling CRM",
        eyebrow: "Property Sales",
        description:
            "Handle all of your property inquiries faster, send out automated follow-ups, and maintain your entire sales pipeline with Truering Real Estate Telecalling CRM.",
        heroTitle: "Real Estate Telecalling CRM That Converts More Property Inquiries into Site Visits",
        overview:
            "A real estate telecalling CRM is a specific type of Customer Relationship Management software that enables builders, developers, brokers, and property consultants to manage inquiries, telecalling tasks, follow-up, and sales pipelines from a single place. Teams no longer depend on spreadsheets or individual tools. Instead, they maintain all leads in one place, document all interactions, automate day-to-day tasks, and build a seamless buying journey that boosts foot traffic and speeds up property transactions. A missed call, late follow-up, or unassigned inquiry can cost you a real estate sale. Truering Real Estate Telecalling CRM is designed to enable developers, builders, brokers, and property consultants to capture all leads, automate their telecalling process, and track the buyer journey from initial inquiry to booking in a single platform. Since 2015, Truering has combined smart CRM automation with cloud telephony to help sales teams respond quicker, make more on-site visits, and increase conversion rates without extra work. From a single residential project to numerous commercial properties, Truering's enterprise-level reliability comes with ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited standards.",
        stats: ["Established Since 2015", "ISO 27001 Certified", "ISO 9001 Certified", "SOC 2 Audited"],
        useCases: [
            { title: "Property Lead Management", body: "Gather and centralize inquiries from property portals, websites, social media campaigns, referrals, and walk-ins in a single CRM with complete customer information and communication history." },
            { title: "One-Click Calling", body: "Reach buyers right away from the CRM without typing numbers. Every call gets logged automatically, saving time and keeping accurate records." },
            { title: "Follow-Up Automation", body: "Set up automatic callbacks, reminders, and tasks so every property enquiry gets timely attention and keeps moving toward a successful close." },
            { title: "Site Visit Scheduling", body: "Arrange property visits with automatic scheduling, reminders, and customer notifications that cut down no-shows and improve buyer engagement." },
            { title: "Sales Pipeline Management", body: "Watch every property inquiry from first contact to booking with custom sales stages that give full visibility into your team’s sales results." },
            { title: "Reports & Analytics", body: "Track telecalling activity, inquiry sources, follow-up results, site visit conversions, and booking trends through live dashboards that help you make better sales decisions." },
        ],
        benefits: [
            "10,000+ property lead capacity keeps every inquiry organized and ready for action",
            "100+ smart lead distribution rules assign enquiries by project, location, campaign, or expertise",
            "40+ sales workflow automations reduce manual follow-ups, callbacks, and routine tasks",
            "30+ business integrations connect telephony, WhatsApp, ERP, marketing, and APIs",
            "25+ sales performance dashboards for inquiry response, productivity, and booking trends",
            "Enterprise-ready CRM with ISO 27001, ISO 9001, and SOC 2 Audited security standards",
        ],
        relatedServices: ["telecalling-crm-software", "lead-management-software", "power-dialer-software", "click-to-call-software"],
        seoTitle: "Real Estate Telecalling CRM | Truering",
        seoDescription:
            "Truering Real Estate Telecalling CRM helps builders, brokers, and developers convert property inquiries into site visits and bookings with automation and smart pipelines.",
        keywords: ["real estate telecalling CRM", "real estate CRM software", "property sales CRM", "real estate lead management CRM"],
    },
    {
        slug: "education",
        title: "Education Telecalling CRM",
        eyebrow: "Admissions Growth",
        description:
            "Turn to Truering Education Telecalling CRM to make admission counseling easier, enable auto follow-ups, and consolidate all student inquiries into one place.",
        heroTitle: "Education Telecalling CRM That Converts More Student Enquiries into Admissions",
        overview:
            "Education Telecalling CRM is built for schools, colleges, universities, coaching institutes, EdTech businesses, and training institutes. It allows them to handle student inquiries, counseling calls, follow-up, and the whole admission process in one place. It helps manage and organize admission teams, respond faster, and provides clarity in discussions that convert more queries into concrete admissions. Each student inquiry is an opportunity to grow your institution, but delayed responses and failure to follow up lead to lost leads. Truering Education Telecalling CRM enables educational bodies to record all inquiries, ensure that counseling work is kept in order, and simplify the entire admissions process, from initial inquiry to final enrollment. Since 2015, businesses have trusted Truering to combine CRM automation and cloud telephony, enabling admission counselors to respond quicker, schedule counseling sessions, and stay in touch with students without added admin work. With ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited security, Truering supplies a secure platform that expands with your organization.",
        stats: ["Established Since 2015", "ISO 27001 Certified", "ISO 9001 Certified", "SOC 2 Audited"],
        useCases: [
            { title: "Student Enquiry Management", body: "Capture inquiries from websites, education portals, social media campaigns, seminars, referrals, and walk-ins to maintain complete student profiles and conversation history." },
            { title: "One-Click Calling", body: "Call prospective students straight from the CRM. The system records every conversation and updates the history automatically." },
            { title: "Admission Follow-Up Automation", body: "Automatically create reminders, callbacks, counseling sessions, document checks, and admission deadlines so no prospective student is forgotten." },
            { title: "Counselling Appointment Management", body: "Schedule and send automatic counseling sessions, campus visits, webinars, and admission interviews." },
            { title: "Admission Pipeline Tracking", body: "Follow every student from the first inquiry through application, counseling, fee payment, and final admission using stages you can change." },
            { title: "Reports & Analytics", body: "Get real-time knowledge of inquiry sources, counselor productivity, conversion rates, campaign results, and trends in admissions." },
        ],
        benefits: [
            "25,000+ student inquiry capacity across courses, campuses, and academic sessions",
            "100+ smart lead distribution rules route every enquiry to the right counselor or program",
            "40+ admission workflow automations for reminders, callbacks, document checks, and CRM updates",
            "30+ business integrations with telephony, WhatsApp, ERP, SIS, and marketing platforms",
            "25+ admission performance dashboards for inquiry response, funnel, and enrollment trends",
            "Enterprise-ready education CRM secured by ISO 27001, ISO 9001, and SOC 2 Audited standards",
        ],
        relatedServices: ["telecalling-crm-software", "lead-management-software", "cloud-telephony-crm", "click-to-call-software"],
        seoTitle: "Education Telecalling CRM | Truering",
        seoDescription:
            "Truering Education Telecalling CRM helps schools, colleges, and EdTech teams manage student inquiries, counseling, and admissions through one smart platform.",
        keywords: ["education telecalling CRM", "admission CRM software", "student inquiry management", "education CRM"],
    },
    {
        slug: "healthcare",
        title: "Healthcare Telecalling CRM",
        eyebrow: "Patient Engagement",
        description:
            "Provide quicker patient service, appointment confirmations, automation, and control each healthcare request on a single smart system with Truering Healthcare Telecalling CRM.",
        heroTitle: "Healthcare Telecalling CRM That Improves Patient Engagement and Appointment Conversions",
        overview:
            "Healthcare Telecalling CRM is a multifunctional customer relationship management system used by hospitals, clinics, diagnostic centers, healthcare organizations, and medical service providers to centrally manage patient inquiries, appointments, follow-ups, and communication processes. It helps healthcare teams provide quicker responses, enhance patient experience, and ensure coherent communication during the patient journey. Patient queries should be responded to promptly, and slow responses can affect patient confidence and hospital income. Truering Healthcare Telecalling CRM assists hospitals, clinics, diagnostic centers, and healthcare providers in communicating with patients and improving communication efficiency by integrating smart CRM automation with cloud telephony. Whether it is appointment time management and follow-up notifications, query management, or patient contact, all communications are structured in a single, secure platform. Trusted by businesses since 2015, Truering helps healthcare organizations enhance operational efficiency while reducing administrative workload. Backed by ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited standards, the platform delivers enterprise-grade security, reliable performance, and scalable communication tools.",
        stats: ["Established Since 2015", "ISO 27001 Certified", "ISO 9001 Certified", "SOC 2 Audited"],
        useCases: [
            { title: "Patient Inquiry Management", body: "Capture enquiries from websites, social media, Google campaigns, referrals, and walk-ins while maintaining complete patient information and communication history in one CRM." },
            { title: "One-Click Calling", body: "Call patients directly from the CRM and automatically log call operations, keeping a full timeline of communication activity." },
            { title: "Appointment Follow-Up Automation", body: "Automate appointment notifications, call-back meetings, consultation notices, health check-up notifications, and follow-ups after treatment to enhance patient interaction." },
            { title: "Doctor Appointment Scheduling", body: "Integrate consultations between departments, physicians, clinics, and healthcare centers with smart journey planning and automatic patient alerts." },
            { title: "Patient Journey Management", body: "Record all patient interactions, from inquiry and appointment booking through consultation, treatment, and follow-up, to manage long-term patient relationships." },
            { title: "Reports & Analytics", body: "Track sources of inquiry, appointment conversions, response rates, telecalling productivity, and operational performance using real-time dashboards." },
        ],
        benefits: [
            "Faster patient response times with centralized inquiry and appointment management",
            "Better patient experience through automated reminders, follow-ups, and scheduling",
            "Multi-doctor and multi-department management from one CRM",
            "Cloud telephony integration for click-to-call, recording, and communication tracking",
            "Real-time telecalling and appointment performance monitoring for managers",
            "Enterprise-grade security with ISO 27001, ISO 9001, and SOC 2 Audited standards",
        ],
        relatedServices: ["telecalling-crm-software", "ivr-management-software", "call-recording-software", "cloud-telephony-crm"],
        seoTitle: "Healthcare Telecalling CRM | Truering",
        seoDescription:
            "Truering Healthcare Telecalling CRM helps hospitals, clinics, and diagnostic centers manage patient inquiries, appointments, and follow-ups through one secure platform.",
        keywords: ["healthcare telecalling CRM", "hospital CRM software", "patient management CRM", "healthcare communication CRM"],
        faqItems: [
            { question: "Is Truering suitable for hospitals and clinics?", answer: "Yes. Truering is designed for hospitals, clinics, diagnostic centers, multi-specialty healthcare groups, and medical service providers to manage patient inquiries, appointments, and communication efficiently." },
            { question: "Can I manage multiple doctors and departments?", answer: "Absolutely. Truering allows you to manage multiple departments, doctors, clinics, appointment schedules, and patient communication workflows from one centralized CRM." },
            { question: "Does Truering integrate with cloud telephony?", answer: "Yes. Truering integrates with cloud telephony to offer click-to-call functionality, automatic call logging, automatic call recording, and full patient communications tracking." },
            { question: "Can healthcare managers monitor telecalling performance?", answer: "Yes. Real-time dashboards enable managers to track patient inquiries, appointment bookings, appointment follow-ups, telecalling productivity, and communication performance." },
        ],
    },
    {
        slug: "insurance",
        title: "Insurance Telecalling CRM",
        eyebrow: "Policy Sales & Retention",
        description:
            "Ease the sale of policies, automate customer follow-ups, and handle all insurance enquiries using intelligent Customer Relationship Management with Truering Insurance Telecalling CRM.",
        heroTitle: "Insurance Telecalling CRM That Converts More Policy Enquiries into Long-Term Customers",
        overview:
            "Insurance Telecalling CRM is a dedicated CRM solution that helps insurance companies, agencies, brokers, and financial advisors handle policy inquiries, telecalling services, renewals, claims management, and customer engagement via a single centralized place. It helps insurance teams sequence all communication, automate follow-ups, and provide customers with personal experiences that enhance policy purchase and retention. Each insurance request is a potential long-term customer, and sporadic follow-ups and communication issues can result in lost policy sales and renewals. Truering Insurance Telecalling CRM helps insurers, brokers, and agencies streamline customer communication, automate telecalling workflows, and manage every policy journey from inquiry to renewal through one intelligent platform. Since 2015, Truering has combined robust CRM automation and cloud telephony to help insurance teams respond quicker, improve advisor productivity, and strengthen customer relationships. Backed by ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited standards, Truering delivers enterprise-grade security, operational reliability, and scalable technology for growing insurance businesses.",
        stats: ["Established Since 2015", "ISO 27001 Certified", "ISO 9001 Certified", "SOC 2 Audited"],
        useCases: [
            { title: "Policy Inquiry Management", body: "Receive inquiries via web pages, online portals, marketing campaigns, referrals, and partner platforms while keeping full customer records and interaction history." },
            { title: "One-Click Calling", body: "Make calls to prospects right out of the CRM and have all conversations, follow-ups, and customer activities recorded automatically." },
            { title: "Renewal Follow-Up Automation", body: "Send automatic reminders for policy renewals, premium payments, documentation, and callbacks to enhance customer retention." },
            { title: "Lead & Policy Pipeline Management", body: "Follow prospects through inquiry, quotation, policy issuance, renewals, upselling, and retention using customizable sales pipelines." },
            { title: "Customer Communication Timeline", body: "Get all calls, emails, WhatsApp messages, notes, quotes, and follow-ups under a single customer profile for more targeted conversations." },
            { title: "Reports & Analytics", body: "Track policy requests, telecalling productivity, renewals, advisor conversion rates, and campaign performance via real-time dashboards." },
        ],
        benefits: [
            "50,000+ policy inquiry capacity across products, advisors, and branches",
            "100+ smart lead distribution rules by product, expertise, location, and priority",
            "40+ insurance workflow automations for renewals, premium alerts, and follow-ups",
            "30+ business integrations with telephony, WhatsApp, ERP, and policy systems",
            "25+ business performance dashboards for sales, renewals, and conversion trends",
            "Enterprise-ready insurance CRM with ISO 27001, ISO 9001, and SOC 2 Audited security",
        ],
        relatedServices: ["telecalling-crm-software", "lead-management-software", "predictive-dialer-software", "call-recording-software"],
        seoTitle: "Insurance Telecalling CRM | Truering",
        seoDescription:
            "Truering Insurance Telecalling CRM helps insurers, brokers, and agencies manage policy inquiries, renewals, and customer relationships through one smart platform.",
        keywords: ["insurance telecalling CRM", "insurance CRM software", "policy sales CRM", "insurance agency CRM"],
        faqItems: [
            { question: "Is Truering suitable for insurance companies and brokers?", answer: "Yes. Truering is designed for insurance companies, agencies, brokers, and financial advisors to handle policy inquiries, telecalling, renewals, and customer relationship management." },
            { question: "Can I manage multiple insurance products?", answer: "Absolutely. You can manage health, life, motor, travel, and general insurance products through a single CRM by creating distinct pipelines and workflows." },
            { question: "Does Truering integrate with cloud telephony?", answer: "Yes. Truering integrates with cloud telephony to provide click-to-call, automatic call logging, call recording, and end-to-end customer communication tracking." },
            { question: "Can managers monitor advisor performance?", answer: "Yes. Real-time dashboards and business reports enable managers to track telecalling activity, policy conversions, renewals, follow-ups, and advisor productivity." },
        ],
    },
    {
        slug: "bfsi-telecalling-crm",
        title: "BFSI Telecalling CRM",
        eyebrow: "Financial Services",
        description:
            "Automate follow-ups, streamline customer communication, and handle all financial inquiries on the same smart platform through Truering BFSI Telecalling CRM.",
        heroTitle: "BFSI Telecalling CRM That Accelerates Customer Acquisition and Financial Sales",
        overview:
            "BFSI Telecalling CRM is a customer relationship management platform designed for banks, NBFCs, financial institutions, lending companies, wealth management firms, fintech enterprises, and insurers. It assists organizations in handling customer inquiries, telecalling campaigns, loan applications, financial product sales, renewals, and customer relationships on a single centralized platform to enhance operational efficiency and customer satisfaction. Customer expectations in the BFSI industry are ever-changing, and the speed of communication and one-on-one interactions are becoming of utmost importance. Truering BFSI Telecalling CRM helps banks, financial institutions, NBFCs, fintech firms, and insurance providers organize all customer interactions effectively, automate sales processes, and enhance customer relations across the financial lifecycle. Since 2015, Truering has integrated smart CRM automation with cloud telephony to ensure financial organizations can achieve better response times, better advisor efficiency, and easier customer management. With ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited standards, Truering provides enterprise-level security, operational resilience, and scalable technology.",
        stats: ["Established Since 2015", "ISO 27001 Certified", "ISO 9001 Certified", "SOC 2 Audited"],
        useCases: [
            { title: "Financial Lead Management", body: "Receive referrals from websites, loan portals, marketing campaigns, branch offices, and digital traffic while retaining comprehensive customer records." },
            { title: "One-Click Calling", body: "Allow advisors and relationship managers to reach out to customers via the CRM and automatically track all calls and interactions." },
            { title: "Automated Customer Follow-Ups", body: "Schedule reminders for loan applications, policy renewals, investment consultations, EMI follow-ups, and customer callbacks without manual work." },
            { title: "Sales & Application Pipeline Management", body: "Follow each customer flow from inquiry and eligibility verification to application processing, authorization, onboarding, and long-term relationship management." },
            { title: "Customer Interaction Timeline", body: "View all calls, emails, WhatsApp messages, notes, document statuses, and follow-ups through a single customer profile." },
            { title: "Reports & Business Analytics", body: "Track team productivity, inquiry sources, sales, loan conversions, customer interactions, and KPIs in real-time dashboards." },
        ],
        benefits: [
            "100,000+ customer record capacity across financial products and business units",
            "100+ smart lead distribution rules by product, branch, advisor, language, and priority",
            "40+ workflow automations for customer onboarding, EMI, renewals, and follow-ups",
            "30+ enterprise integrations with telephony, WhatsApp, ERP, banking, and LOS systems",
            "25+ executive performance dashboards for sales, service, and operational metrics",
            "Enterprise-ready and secure platform with ISO 27001, ISO 9001, and SOC 2 Audited standards",
        ],
        relatedServices: ["telecalling-crm-software", "lead-management-software", "predictive-dialer-software", "cloud-telephony-crm"],
        seoTitle: "BFSI Telecalling CRM | Truering",
        seoDescription:
            "Truering BFSI Telecalling CRM helps banks, NBFCs, fintech, and insurance firms manage financial inquiries, sales, and customer relationships through one platform.",
        keywords: ["BFSI telecalling CRM", "banking CRM software", "financial services CRM", "NBFC CRM"],
        faqItems: [
            { question: "Who can use Truering BFSI Telecalling CRM?", answer: "Truering suits banks, NBFCs, fintech organizations, insurance firms, wealth management firms, lending firms, and other financial organizations interested in simplifying customer communication and sales management." },
            { question: "Can Truering manage multiple financial products?", answer: "Yes. Loans, insurance, investments, credit cards, deposits, wealth management services, and other financial products can be handled in different pipelines within a single CRM." },
            { question: "Does Truering support cloud telephony integration?", answer: "Yes. Truering works with cloud telephony and offers click-to-call, automatic call logging, call recordings, and full customer communication tracking." },
            { question: "Can managers monitor sales and telecalling performance?", answer: "Absolutely. Managers receive real-time dashboards that track advisor productivity, customer interactions, sales conversions, follow-up completion, and operational performance." },
        ],
    },
    {
        slug: "ecommerce-call-center-crm",
        title: "Ecommerce Call Center CRM",
        eyebrow: "Online Retail Support",
        description:
            "Truering Ecommerce Call Center CRM supports and manages customer inquiries, automating support processes and providing excellent shopping experiences.",
        heroTitle: "Ecommerce Call Center CRM That Delivers Faster Customer Support and Higher Order Conversions",
        overview:
            "An e-commerce call center CRM is a customer relationship management platform designed specifically for online retailers, D2C brands, marketplaces, wholesalers, and e-commerce companies. It assists customer support and sales departments in dealing with order inquiries, customer calls, returns, complaints, follow-ups, and post-purchase communications all in a single centralized space, resulting in faster resolutions and improved customer experiences. Contemporary e-commerce hinges on the ability to provide faster responses, personal customer service, and fluid order support at all touchpoints. Truering Ecommerce Call Center CRM helps web-based businesses process customer interactions with an optimum combination of intelligent CRM automation and cloud telephony. Pre-sales queries, order confirmations, return processing, refunds, and after-sales services are all handled using a single platform. Since 2015, Truering has helped e-commerce brands enhance response times, maximize agent productivity, and strengthen customer loyalty without adding complexity. With ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited standards, Truering offers enterprise-level security and scalability.",
        stats: ["Established Since 2015", "ISO 27001 Certified", "ISO 9001 Certified", "SOC 2 Audited"],
        useCases: [
            { title: "Customer Inquiry Management", body: "Capture and retain customer inquiries from websites, marketplaces, social media, WhatsApp, live chat, email, and telephone with comprehensive customer profiles and order history." },
            { title: "One-Click Calling", body: "Empower support staff to make and accept calls from the CRM and have all conversations and interactions recorded automatically." },
            { title: "Automated Customer Follow-Ups", body: "Automatically issue cart recovery, payment confirmations, delivery updates, return requests, refund updates, and more." },
            { title: "Order & Ticket Management", body: "Monitor customer requests, orders, complaints, replacements, refunds, and feedback using structured processes that improve response time." },
            { title: "360° Customer Timeline", body: "Raise each order, call, email, WhatsApp message, support ticket, and customer engagement to a single centralized profile for personalized service." },
            { title: "Reports & Analytics", body: "Track support performance, response times, order inquiries, customer satisfaction, agent productivity, and service quality using real-time dashboards." },
        ],
        benefits: [
            "500,000+ customer interaction capacity that scales as your e-commerce business expands",
            "100+ intelligent ticket routing rules by product, order status, language, and issue type",
            "40+ customer support automations for order confirmations, refunds, delivery updates, and follow-ups",
            "30+ ecommerce integrations with platforms, payment gateways, shipping partners, and ERP",
            "25+ customer service dashboards for response times, resolutions, satisfaction, and KPIs",
            "Enterprise-ready ecommerce CRM with ISO 27001, ISO 9001, and SOC 2 Audited standards",
        ],
        relatedServices: ["telecalling-crm-software", "ivr-management-software", "click-to-call-software", "lead-management-software"],
        seoTitle: "Ecommerce Call Center CRM | Truering",
        seoDescription:
            "Truering Ecommerce Call Center CRM helps online retailers and D2C brands manage customer support, order inquiries, returns, and post-purchase communication.",
        keywords: ["ecommerce call center CRM", "ecommerce CRM software", "D2C customer support CRM", "online retail CRM"],
    },
    {
        slug: "loan-and-lending-crm",
        title: "Loan & Lending CRM",
        eyebrow: "Lending Operations",
        description:
            "Automate loan requests and loan follow-ups and simplify the whole lending process with Truering Loan & Lending CRM.",
        heroTitle: "Loan & Lending CRM That Accelerates Loan Approvals and Customer Conversions",
        overview:
            "Loan & Lending CRM is a dedicated customer relationship management platform intended for banks, NBFCs, fintech companies, mortgage providers, microfinance institutions, and lending businesses. It assists organizations in handling loan applications, borrower communication, document collection, application tracking, approvals, and post-disbursement communication using a single centralized CRM, which enhances organizational efficiency and customer satisfaction. Each loan request can be a winning one for the borrower, yet lack of swift response, paperwork, and detached communication may decrease success rates. Truering Loan & Lending CRM helps lending organizations streamline customer acquisition, automate telecalling workflows, and manage loan applications, inquiries, and document verification through approval, disbursement, and customer retention. Since 2015, businesses have trusted Truering to combine intelligent CRM automation with cloud telephony to help lending teams respond quicker, optimize applications, and create outstanding borrower experiences. With ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited standards, Truering offers security, operational stability, and scalable technology.",
        stats: ["Established Since 2015", "ISO 27001 Certified", "ISO 9001 Certified", "SOC 2 Audited"],
        useCases: [
            { title: "Loan Lead Management", body: "Capture loan applications online, through channel partners, marketing campaigns, referrals, and branch offices while retaining full borrower profiles and communication history." },
            { title: "One-Click Calling", body: "Let loan advisors connect with borrowers directly from the CRM and automatically record all calls, discussions, and follow-up activities." },
            { title: "Automated Borrower Follow-Ups", body: "Automate notifications for document submission, eligibility updates, loan status, EMI reminders, approvals, and customer callbacks." },
            { title: "Loan Application Pipeline", body: "Manage borrowers through customizable pipelines covering inquiry, eligibility check, documentation, credit analysis, approval, disbursement, and post-loan servicing." },
            { title: "Customer Communication Timeline", body: "Keep all borrower interactions in a centralized database including calls, emails, WhatsApp messages, notes, and application updates." },
            { title: "Reports & Performance Analytics", body: "Track inquiry sources, advisor productivity, application status, approval ratios, loan disbursement patterns, and operational performance using real-time dashboards." },
        ],
        benefits: [
            "100,000+ loan inquiry capacity across products, branches, and sales teams",
            "100+ intelligent lead assignment rules by product, branch, geography, and loan amount",
            "40+ lending workflow automations for document reminders, approvals, EMI, and CRM updates",
            "30+ enterprise integrations with telephony, WhatsApp, LOS, ERP, KYC, and APIs",
            "25+ executive business dashboards for pipelines, productivity, approval rates, and KPIs",
            "Enterprise-ready lending platform with ISO 27001, ISO 9001, and SOC 2 Audited standards",
        ],
        relatedServices: ["telecalling-crm-software", "lead-management-software", "predictive-dialer-software", "call-recording-software"],
        seoTitle: "Loan & Lending CRM | Truering",
        seoDescription:
            "Truering Loan & Lending CRM helps banks, NBFCs, and fintech firms automate loan applications, borrower communication, and lending operations through one platform.",
        keywords: ["loan and lending CRM", "lending CRM software", "loan management CRM", "NBFC loan CRM"],
        faqItems: [
            { question: "Who can use Truering Loan & Lending CRM?", answer: "Truering can be used by banks, NBFCs, fintech firms, housing finance providers, mortgage companies, microfinance firms, and small lending businesses." },
            { question: "Can I manage multiple loan products in one CRM?", answer: "Yes. Separate workflows and pipelines allow you to handle personal loans, home loans, business loans, vehicle loans, education loans, gold loans, and all other lending products." },
            { question: "Does Truering integrate with cloud telephony?", answer: "Absolutely. Truering connects with cloud telephony for click-to-call, automatic call logging, call recordings, and full borrower communication tracking." },
            { question: "Can managers monitor loan team performance?", answer: "Yes. Managers can track loan inquiries, application progress, advisor productivity, approval rates, follow-up completion, and overall business performance through real-time dashboards." },
        ],
    },
    {
        slug: "recruitment-and-staffing",
        title: "Recruitment Telecalling CRM",
        eyebrow: "Hiring & Placement",
        description:
            "Automate candidate queries and recruiter follow-ups, and streamline the entire hiring process with Truering Recruitment Telecalling CRM. Make recruitment activities simpler, more effective, and efficient, and help your recruitment teams reach out to candidates more quickly, effectively, and successfully through a single platform.",
        heroTitle: "Recruitment Telecalling CRM That Converts More Candidates into Successful Placements",
        overview:
            "Recruitment Telecalling CRM is a CRM solution that will suit recruitment agencies, staffing organizations, executive search organizations, HR advisory firms, and placement organizations. It helps teams handle candidate queries, recruiter calls, interviews, follow-ups, client needs, and hiring pipelines through a single centralized CRM, enhancing efficiency and applicant placement. The timely communication, the constant contact with the candidates and the effective recruiting procedures make recruitment. Truering Recruitment Telecalling CRM allows recruitment agencies, staffing firms, and HR consultancies to record each candidate request, automate recruiter processes, and manage the entire recruitment process, including sourcing candidates and finding them a successful home. Since 2015, businesses have trusted Truering to integrate intelligent CRM automation with cloud telephony to enable recruiters to respond more quickly, arrange interviews more effectively, and build rapport with candidates without requiring additional administrative work. Truering is an ISO 27001-certified, ISO 9001-certified, and SOC 2-audited company that provides enterprise-level security, operational stability, and scalability that recruiters can depend on to support large-scale recruitment business processes.",
        stats: ["Established Since 2015", "ISO 27001 Certified", "ISO 9001 Certified", "SOC 2 Audited"],
        useCases: [
            { title: "Candidate Lead Management", body: "Receive applicant requests at job boards, career communities, social networks, referrals, job fairs, and direct in-person applications with entire candidate profiles and communication history." },
            { title: "One-Click Calling", body: "Empower recruiters to make direct calls to candidates on the CRM and capture conversations, follow-ups, and communication activities." },
            { title: "Automated Candidate Follow-Ups", body: "Send interview reminders, callback reminders, document submissions, offer reminders, and onboarding messages automatically, keeping all candidates involved." },
            { title: "Interview & Hiring Pipeline Management", body: "Follow through on applications and screening, interviews, rollout, onboarding, and final placement with customizable recruitment pipelines." },
            { title: "Client Requirement Management", body: "Administer vacancies, recruitment needs, recruiter assignments, and candidate submissions while retaining full visibility of all hiring projects." },
            { title: "Reports & Recruitment Analytics", body: "Measure recruiter effectiveness, applicant response, interview conversion, placement, recruitments, hiring schedules and recruitment programs in real-time via dashboards." },
        ],
        benefits: [
            "100,000+ Candidate Record Capacity — organize and maintain huge candidate databases across industries, job categories, customers, and recruiting drives",
            "100+ Intelligent Candidate Assignment Rules — sort candidates automatically by recruiter experience, job position, customer, location, industry or hiring priority",
            "40+ Recruitment Workflow Automations — automate interviews, follow-ups, updates on candidate status, onboarding, recruiter communications and repetitive administrative work",
            "30+ Business Integrations — combine Truering with cloud telephony, WhatsApp, job portals, HRMS, email platforms, APIs and business apps",
            "25+ Recruitment Performance Dashboards — track recruitment performance, hiring pipelines, interview performance, placement rates, and candidate engagement",
            "Enterprise-Ready Recruitment Platform — grow with secure cloud infrastructure compliant with ISO 27001, ISO 9001, and SOC 2 standards",
        ],
        relatedServices: ["telecalling-crm-software", "lead-management-software", "power-dialer-software", "click-to-call-software"],
        seoTitle: "Recruitment Telecalling CRM | Truering",
        seoDescription:
            "Truering Recruitment Telecalling CRM helps recruitment agencies, staffing firms, and HR consultancies automate candidate queries, follow-ups, and hiring pipelines through one smart platform.",
        keywords: ["recruitment telecalling CRM", "recruitment CRM software", "staffing CRM", "hiring CRM", "placement agency CRM"],
        faqItems: [
            { question: "Who is allowed to use Truering Recruitment Telecalling CRM?", answer: "Truering is designed for recruitment agencies, staffing firms, HR consultancies, executive search firms, placement firms, and corporate recruitment teams." },
            { question: "Am I able to handle several customers and vacant positions?", answer: "Yes. Truering enables you to operate out of a single central CRM to manage a wide range of clients, job needs, recruiters, candidates, and hiring pipelines." },
            { question: "Does Truering support cloud telephony?", answer: "Absolutely. Truering is coupled with cloud telephony to create click-to-call, automatic call history, call recording, and full recruiter-candidate tracking." },
            { question: "Are recruitment managers able to monitor recruiter performance?", answer: "Yes. Real-time dashboards enable managers to track recruiter productivity, candidate follow-ups, conversion of interviews to placements, and overall hiring performance." },
        ],
    },
    {
        slug: "travel-and-hospitality",
        title: "Travel & Hospitality CRM",
        eyebrow: "Travel & Bookings",
        description:
            "Manage customer inquiries, automate travel follow-ups, and streamline every guest interaction with Truering Travel & Hospitality CRM. One smart platform enables your sales, reservations, and customer support teams to react faster, boost booking conversion rates, and build lasting customer relationships.",
        heroTitle: "Travel & Hospitality CRM That Delivers Exceptional Guest Experiences and Increases Bookings",
        overview:
            "Travel & Hospitality CRM is a dedicated type of customer relationship management software that is targeted at travel agencies, tour operators, hotels, resorts, hospitality groups, destination management companies (DMCs), and travel service providers. It helps companies handle travel inquiries, bookings, telecalling, guest communication, follow-ups, and customer relationships using a single centralized platform, while also offering personalized travel experiences. All travel requests are a chance to make a memorable customer experience. The Truering Travel and Hospitality CRM system assists travel agencies, hotels, resorts, and hospitality companies in maintaining all guest contact, including the initial inquiry and itinerary presentation, as well as receiving a confirmation of booking, post-trip follow-ups, and redeeming bookings, all in a single platform. Since 2015, businesses have trusted Truering to integrate intelligent CRM automation with cloud telephony that help reservation teams respond to requests more quickly and efficiently while enhancing guest relationships. As an ISO 27001-certified, ISO 9001-certified, and SOC 2 Audited company, Truering offers scalable technology, operational reliability, and a high level of security for growing travel and hospitality industries.",
        stats: ["Established Since 2015", "ISO 27001 Certified", "ISO 9001 Certified", "SOC 2 Audited"],
        useCases: [
            { title: "Travel Inquiry Management", body: "Websites, travel portals, social media, referrals, campaigns, and walk-ins capture inquiries and provide a complete history of traveler profiles and communication." },
            { title: "One-Click Calling", body: "Give travel consultants and reservation executives the opportunity to reach customers in real-time and record all the conversations and inquiries." },
            { title: "Automated Follow-Up Management", body: "Send email schedules to remind quotations, itinerary approvals, booking confirmations and collection of payments, travel documents, and post-trip feedback without manually typing." },
            { title: "Booking & Reservation Pipeline", body: "Follow all customers through inquiry, package selection, booking confirmation, payment, travel completion, and repeat booking with tailor-made workflows and procedures." },
            { title: "360° Guest Communication Timeline", body: "Get all calls, emails, WhatsApp messages, quotes, bookings and customer interactions under one centralized profile to provide individualized guest experiences." },
            { title: "Reports & Business Analytics", body: "Keep track of booking performance, inquiry sources, consultant productivity, conversion rates, customer satisfaction, and revenue patterns with real-time dashboards." },
        ],
        benefits: [
            "100,000+ Travel Enquiry Capacity — process thousands of holiday packages, hotel bookings, tour inquiries, and customer interactions without losing sight of any sales prospect",
            "100+ Smart Lead Distribution Rules — auto-allocate inquiries by destination, travel package, language, consultant expertise, location, or booking priority",
            "40+ Workflow Automations — automate follow-ups on itineraries, payment reminders, booking confirmations, travel document notifications, and customer callbacks",
            "30+ Business Integrations — integrate Truering with cloud telephony, WhatsApp, booking systems, ERP, payment gateways, APIs, and email platforms",
            "25+ Business Performance Dashboards — track consultant productivity, booking conversions, inquiry sources, customer interactions, and revenue KPIs",
            "Enterprise-Ready Hospitality CRM — grow with secure cloud infrastructure with ISO 27001, ISO 9001, and SOC 2 Audited standards",
        ],
        relatedServices: ["telecalling-crm-software", "lead-management-software", "cloud-telephony-crm", "click-to-call-software"],
        seoTitle: "Travel & Hospitality CRM | Truering",
        seoDescription:
            "Truering Travel & Hospitality CRM helps travel agencies, hotels, and resorts manage bookings, guest communication, and reservation pipelines through one smart platform.",
        keywords: ["travel and hospitality CRM", "travel agency CRM", "hotel CRM software", "hospitality CRM", "tour operator CRM"],
        faqItems: [
            { question: "Who can use Truering Travel & Hospitality CRM?", answer: "Truering is designed for travel agencies, tour operators, hotels, resorts, DMCs, hospitality groups, and travel service providers to manage inquiries, bookings, and guest communication." },
            { question: "Can I manage multiple travel packages and destinations?", answer: "Yes. Truering allows you to manage multiple travel packages, destinations, booking workflows, and customer pipelines from a single centralized CRM." },
            { question: "Does Truering integrate with booking systems?", answer: "Absolutely. Truering integrates with booking engines, payment gateways, ERP systems, cloud telephony, WhatsApp, and other travel platforms." },
            { question: "Can managers track consultant and booking performance?", answer: "Yes. Real-time dashboards enable managers to track consultant productivity, booking conversions, inquiry sources, customer satisfaction, and revenue patterns." },
        ],
    },
];

export const integrationPages: IntegrationPageData[] = [
    {
        slug: "api-integration",
        title: "API Integration",
        eyebrow: "Developer Ready",
        description:
            "Link Truering to the apps you already use through solid APIs so you can put workflows on auto, keep customer data in sync, and build one clear communication setup.",
        heroTitle: "API Integration with Truering for Seamless Business Connectivity and Workflow Automation",
        overview:
            "Today’s companies run on several software tools to handle customers, sales, support, and daily work. Truering API Integration lets you combine those systems with safe, flexible APIs so data moves in real time, workflows run on their own, and communications stay linked across every process. Since 2015, companies have relied on Truering's API tools to streamline complex links and boost operational performance and customer satisfaction. Truering is an ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited company to provide secure, dependable, and flexible API connections for businesses of all sizes.",
        stats: ["Established Since 2015", "ISO 27001 Certified", "ISO 9001 Certified", "SOC 2 Audited"],
        features: [
            { title: "REST API Support", body: "Integrate Truering with websites, mobile apps, CRM platforms, ERP systems, and custom software with safe REST APIs that move data reliably." },
            { title: "Real-Time Data Synchronization", body: "Customer details, call activities, communication history, lead records, and business events move across connected apps on their own." },
            { title: "Webhook Support", body: "Get instant alerts for call events, customer activities, lead updates, and workflow triggers so business automation happens right away." },
            { title: "Custom Workflow Automation", body: "Set up workflows that join several business systems, cut manual work, and raise operational efficiency." },
            { title: "Secure API Authentication", body: "Keep business data safe with solid login methods, encrypted conversations, and enterprise-level access controls." },
            { title: "Developer-Friendly Documentation", body: "Speed up setup with full API docs, clear endpoints, and help from Truering experts." },
        ],
        benefits: [
            "100+ API endpoints for communication, automation, customer management, and operational workflows",
            "30+ ready business integrations with CRMs, WhatsApp, ERP, helpdesk, and cloud telephony",
            "Real-time automation for customer communication, call events, alerts, and lead management",
            "Enterprise-grade security and compliance backed by ISO 27001, ISO 9001, and SOC 2 Audited standards",
            "Scalable integration architecture that grows with your business and transaction volume",
            "Dedicated integration support for API setup, testing, launch, and ongoing technical help",
        ],
        relatedServices: ["telecalling-crm-software", "cloud-telephony-crm", "lead-management-software", "call-tracking-crm"],
        seoTitle: "API Integration | Truering",
        seoDescription:
            "Truering API Integration helps businesses connect CRMs, ERPs, helpdesk tools, and apps with secure REST APIs, webhooks, and workflow automation.",
        keywords: ["API integration", "Truering API", "REST API", "workflow automation API", "business API integration"],
    },
    {
        slug: "whatsapp-integration",
        title: "WhatsApp Integration",
        eyebrow: "Business Messaging",
        description:
            "Integrate Truering with WhatsApp for a centralized view of all customer conversations, automatic messaging, customer inquiries, and real-time support from a single platform.",
        heroTitle: "WhatsApp Integration for Faster Customer Communication and Higher Engagement",
        overview:
            "Customers want companies to appear in the apps where they spend their daily hours. Truering WhatsApp Integration enables teams to manage customer communications alongside cloud telephony, giving sales, support, and customer success personnel a unified means to communicate. Since 2015, companies have relied on Truering for its capabilities to put conversations on auto, accelerate responses, and manage customer interactions despite increased volumes. Truering is ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited, providing a secure and flexible platform for growing businesses.",
        stats: ["Established Since 2015", "ISO 27001 Certified", "ISO 9001 Certified", "SOC 2 Audited"],
        features: [
            { title: "Shared Team Inbox", body: "Multiple team members have access to WhatsApp chats from a single inbox so responses are quicker and no personal phones are needed." },
            { title: "Automated Messaging & Templates", body: "Use ready-made templates and easy automation to send welcome messages, follow-ups, reminders, order updates, and customer alerts." },
            { title: "Conversation Assignment", body: "Incoming WhatsApp chats go straight to the right sales or support person based on departments, teams, or the rules you set." },
            { title: "Customer Conversation History", body: "Keep the full record of customer chats, files, notes, and activities so every agent sees the whole picture before they reply." },
            { title: "CRM Synchronization", body: "WhatsApp chats sync with your CRM so customer files stay current and you get a full view of every interaction across channels." },
            { title: "Reports & Conversation Analytics", body: "Watch reply speeds, chat numbers, agent productivity, customer engagement, and messaging results on live dashboards and clear reports." },
        ],
        benefits: [
            "Unlimited customer conversations handled without dropping reply quality",
            "30+ business integrations with CRM, cloud telephony, ERP, helpdesk, and APIs",
            "100+ intelligent automation rules for chat routing, follow-ups, alerts, and repeat messaging",
            "Enterprise-grade security with ISO 27001, ISO 9001, and SOC 2 Audited standards",
            "Higher team productivity through a shared inbox, automatic workflows, and one central place for communication",
            "Built to scale from hundreds to thousands of customer chats each day",
        ],
        relatedServices: ["telecalling-crm-software", "cloud-telephony-crm", "click-to-call-software", "lead-management-software"],
        seoTitle: "WhatsApp Integration | Truering",
        seoDescription:
            "Truering WhatsApp Integration helps businesses manage customer messaging, automation, and team collaboration from one centralized platform.",
        keywords: ["WhatsApp integration", "WhatsApp Business API", "customer messaging CRM", "WhatsApp CRM integration"],
    },
    {
        slug: "hubspot-integration",
        title: "HubSpot Integration",
        eyebrow: "CRM Telephony",
        description:
            "Link Truering to HubSpot so your team can log calls automatically, dial with one click, keep every customer interaction in sync, and give sales, marketing, and support staff one place to handle all talks.",
        heroTitle: "HubSpot Integration with Truering for Smarter Sales, Marketing & Customer Communication",
        overview:
            "HubSpot Integration joins your HubSpot CRM to Truering’s cloud telephony system so teams handle customer talks right inside HubSpot. Every call, follow-up, recording, note, and customer interaction gets pulled in automatically. You end up with full customer visibility and can lift sales speed, customer engagement, and team productivity. While growing businesses require a CRM, they need more than that; they need a solution to keep all customer interactions connected. Truering HubSpot Integration combines reliable cloud telephony with HubSpot CRM to allow sales, marketing, and support teams to dial, monitor calls, configure workflows to go on autopilot, and maintain customer relationships from a single location. Since 2015, companies have relied on Truering for its ability to reduce repetitive manual tasks and enhance team collaboration. Truering's ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited credentials provide a secure, adaptable, and reliable connection.",
        stats: ["Established Since 2015", "ISO 27001 Certified", "ISO 9001 Certified", "SOC 2 Audited"],
        features: [
            { title: "Automatic Call Logging", body: "Incoming, outgoing, missed, and transferred calls land in HubSpot on their own with timestamps, length, agent details, recordings, and customer info." },
            { title: "Click-to-Call from HubSpot", body: "Sales and support staff start calls straight from HubSpot with one click so agents reach prospects sooner and skip extra manual steps." },
            { title: "Customer Screen Pop", body: "Full customer details pop up the moment a call comes in so agents check contact facts, deal history, past conversations, and support notes before they answer." },
            { title: "Call Recordings & Activity Synchronization", body: "Call recordings, notes, outcomes, and the communication trail sync into HubSpot by themselves so every customer interaction stays stored and easy to find." },
            { title: "Real-Time Contact Synchronization", body: "Contacts, customer files, activities, and communication history stay matched between Truering and HubSpot so both systems always hold the right customer details." },
            { title: "Reports & Performance Analytics", body: "Watch call numbers, sales moves, customer engagement, agent productivity, reply speeds, and business results on dashboards that mix CRM and phone data." },
        ],
        benefits: [
            "Automate CRM updates so every customer interaction drops into HubSpot automatically",
            "Improve sales productivity by letting teams dial prospects from HubSpot on one screen",
            "Deliver personalized customer experiences with instant access to history and engagement records",
            "Strengthen team collaboration with matched customer records and live communication updates",
            "Gain actionable business insights from call results, engagement, productivity, and operations",
            "Scale communication with enterprise-grade cloud telephony that grows with your business",
        ],
        relatedServices: ["telecalling-crm-software", "call-tracking-crm", "lead-management-software", "call-recording-software"],
        seoTitle: "HubSpot Integration | Truering",
        seoDescription:
            "Truering HubSpot Integration connects cloud telephony with HubSpot CRM for automatic call logging, click-to-call, and synced customer interactions.",
        keywords: ["HubSpot integration", "HubSpot CRM telephony", "HubSpot call logging", "Truering HubSpot"],
    },
    {
        slug: "zoho-crm-integration",
        title: "Zoho CRM Integration",
        eyebrow: "CRM Telephony",
        description:
            "Integrate Truering with Zoho CRM to automatically record calls, enable click-to-call, coordinate communication between your sales and support teams, and provide your teams with an all-in-one communication platform.",
        heroTitle: "Zoho CRM Integration with Truering for Smarter Customer Communication",
        overview:
            "Zoho CRM Integration links your CRM to Truering's cloud telephony platform, where your teams can handle calls and customer interactions without switching between multiple applications. All outbound and incoming calls, customer conversations, follow-ups, and activities are automatically integrated with Zoho CRM, enabling your business to gain full insight into all customer relationships and improving efficiency in sales and operations. Your CRM should not be just a database of customer details but rather it should assist your teams and allow them to communicate and make more business much quicker. Truering Zoho CRM Integration connects your telephony system to Zoho CRM so that your sales, support, and customer service teams can make and receive calls, manage customer records, and monitor all interactions on a single smart platform. Since 2015, businesses have trusted Truering with its combination of enterprise-level cloud telephony and strong CRM integration. Supported by ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited standards, Truering provides scalable, reliable, and secure integration for businesses of all sizes.",
        stats: ["Established Since 2015", "ISO 27001 Certified", "ISO 9001 Certified", "SOC 2 Audited"],
        features: [
            { title: "Automatic Call Logging", body: "All incoming, outgoing, missed, and transferred calls are automatically recorded in Zoho CRM along with duration, timing, agent names, and customer details." },
            { title: "Click-to-Call from Zoho CRM", body: "From Zoho CRM, sales and support teams can make one-click calls to minimize dialing hours and help departments reach more customers each day." },
            { title: "Customer Screen Pop", body: "Instantly display customer information whenever a call is received so agents can tap contact info, past communications, pending opportunities, and customer history." },
            { title: "Call Recordings & Activity Synchronization", body: "Synchronize call recordings, notes, dispositions, and interaction history automatically with Zoho CRM for comprehensive records of every account." },
            { title: "Real-Time Contact Synchronization", body: "Automatically synchronize contacts and communication events in customer information in both Truering and Zoho CRM so teams always operate with up-to-date data." },
            { title: "Real-Time Reports & Analytics", body: "Measure call traffic, agent performance, response times, unanswered calls, customer interactions, and business performance using integrated dashboards." },
        ],
        benefits: [
            "Eliminate manual data entry with auto-captured call activities, recordings, and follow-up information in Zoho CRM",
            "Respond to customers faster with screen pop, click-to-call, and instant CRM record access",
            "Increase sales team productivity by minimizing time spent switching between applications",
            "Deliver a 360° customer view with all calls, notes, recordings, and interactions logged against CRM records",
            "Improve customer experience with quick responses, tailored interactions, and consistent communication",
            "Make smarter business decisions with real-time dashboards for agent performance, call volumes, and customer engagement",
        ],
        relatedServices: ["telecalling-crm-software", "call-recording-software", "lead-management-software", "power-dialer-software"],
        seoTitle: "Zoho CRM Integration | Truering",
        seoDescription:
            "Truering Zoho CRM Integration connects cloud telephony with Zoho CRM for automatic call logging, click-to-call, screen pop, and real-time sync.",
        keywords: ["Zoho CRM integration", "Zoho telephony integration", "Zoho call logging", "Truering Zoho CRM"],
    },
    {
        slug: "salesforce-integration",
        title: "Salesforce Integration",
        eyebrow: "CRM Telephony",
        description:
            "Link Truering to Salesforce so your team can log calls automatically, dial with one click, keep every customer interaction in sync, and give sales and support staff one place to handle all talks.",
        heroTitle: "Salesforce Integration with Truering for Faster Sales and Smarter Customer Engagement",
        overview:
            "Salesforce Integration joins your Salesforce CRM to Truering’s cloud telephony system so teams handle customer calls right inside Salesforce. Incoming and outgoing calls, follow-ups, recordings, notes, and every customer interaction get pulled in automatically. You end up with the full customer story and can lift sales speed, service quality, and day-to-day productivity. Sales groups do better when calls and customer data sit in the same spot. Truering Salesforce Integration ties cloud telephony straight into Salesforce so people can dial, see customer details right away, set communication workflows on autopilot, and handle every customer interaction from one smart system. Companies have trusted Truering since 2015 because it pairs solid cloud telephony with a strong Salesforce link. Truering is an ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited company, offering a secure, flexible, and stable environment to increase productivity and improve customer relationships.",
        stats: ["Established Since 2015", "ISO 27001 Certified", "ISO 9001 Certified", "SOC 2 Audited"],
        features: [
            { title: "Automatic Call Logging", body: "Every incoming, outgoing, missed, and transferred call lands in Salesforce on its own with duration, timestamps, agent info, and customer details." },
            { title: "Click-to-Call from Salesforce", body: "Sales and support staff start calls straight from Salesforce records with one click so agents reach customers sooner and get more done each day." },
            { title: "Customer Screen Pop", body: "Customer profiles pop up the moment a call comes in so agents check past conversations, open deals, support tickets, and account facts before they pick up." },
            { title: "Call Recordings & Activity Synchronization", body: "Call recordings, notes, outcomes, and the full customer communication trail sync into Salesforce by themselves so every interaction stays on record." },
            { title: "Real-Time Contact Synchronization", body: "Contacts, customer files, and activity logs stay matched between Truering and Salesforce so teams always work with the latest correct details." },
            { title: "Advanced Reports & Analytics", body: "Watch call numbers, agent results, reply speeds, customer engagement, and sales productivity on dashboards that mix CRM and phone data." },
        ],
        benefits: [
            "Automate CRM updates so every customer interaction drops into Salesforce automatically",
            "Improve sales productivity by letting teams dial customers from Salesforce on one screen",
            "Gain a complete customer view with calls, recordings, notes, follow-ups, and communication history inside Salesforce",
            "Enhance customer experience by answering quicker with the full customer picture",
            "Make better business decisions with live dashboards for call results, engagement, sales moves, and team productivity",
            "Increase operational efficiency by reducing repetitive tasks using automation",
        ],
        relatedServices: ["telecalling-crm-software", "call-tracking-crm", "lead-management-software", "call-recording-software"],
        seoTitle: "Salesforce Integration | Truering",
        seoDescription:
            "Truering Salesforce Integration connects cloud telephony with Salesforce CRM for automatic call logging, click-to-call, screen pop, and real-time sync.",
        keywords: ["Salesforce integration", "Salesforce telephony integration", "Salesforce call logging", "Truering Salesforce"],
    },
    {
        slug: "leadsquared-integration",
        title: "LeadSquared Integration",
        eyebrow: "Lead Automation",
        description:
            "Connect Truering to LeadSquared to automate call-logging, allow a click-to-call, or coordinate lead actions, and consolidate all interactions with customers to a single intelligent platform. Respond to leads faster, more productively, and turn more enquiries into customers by integrating cloud telephony.",
        heroTitle: "LeadSquared Integration for Faster Lead Response and Higher Conversions",
        overview:
            "One of the biggest factors in lead conversion is speed. To integrate customer communication and manage all lead engagement with one connected system, Truering LeadSquared Integration brings together LeadSquared CRM with enterprise-grade cloud telephony to enable businesses to respond to enquiries more quickly, automate customer communication, and manage all lead interactions on a single platform. Since 2015, trusted by businesses, Truering helps organizations to drop manual processes, optimize agent productivity, and enhance customer engagement by leveraging intelligent automation. Supported by standards for secure, scaled, and reliable Integration powered by ISO 27001-certified, ISO 27001-certified, and SOC 2-audited services, Truering provides high-performance sales teams across all industries with reliable, scaled integration.",
        stats: ["Established Since 2015", "ISO 27001 Certified", "ISO 9001 Certified", "SOC 2 Audited"],
        features: [
            { title: "Automatic Call Logging", body: "Automatically add all received, outgoing, missed, and transferred calls within LeadSquared, as well as call time, timestamps, recordings, notes, and agent details, without needing to add notes manually to your CRM." },
            { title: "Click-to-Call from LeadSquared", body: "Enable salespeople to make calls through LeadSquared with a simple mouse click and enable them to reach more prospects in less time on their phones by having to make manual dial calls." },
            { title: "Lead Screen Pop", body: "Show full lead details in real-time as customers call. Inquiry history, follow-ups, prior conversations, and lead status is accessible to sales agents before they answer." },
            { title: "Call Recordings & Activity Synchronization", body: "To ensure full lead recording throughout the sales process, automatically keep a call recording, notes, dispositions, and history of customer communications with LeadSquared." },
            { title: "Real-Time Lead Synchronization", body: "Maintain lead records, contact records, activities, and communication history between Truering and LeadSquared to ensure the right customer data." },
            { title: "Advanced Reports & Analytics", body: "Track call positivity, lead response time, agent efficiency, conversion rate, follow-ups, and sales performance with in-depth dashboards and real-time business intelligence." },
        ],
        benefits: [
            "100% Automated Lead Activity — connect all customer interactions within LeadSquared automatically without having to manually update them",
            "99.9% Platform Reliability — enterprise-level cloud infrastructure that supports business communication at scale",
            "30+ Business Integrations — bring together WhatsApp, ERP systems, cloud telephony, APIs, helpdesk platforms, and business applications",
            "Enterprise-Grade Security & Compliance — secure infrastructure with ISO 27001, ISO 9001, and SOC 2 Audited standards",
            "Increase Sales Productivity — enable sales teams with click-to-call, call recording, lead screen pop, and call history",
            "Built for High-Performance Sales Teams — scale smoothly to help businesses grow without affecting speed, reliability, or performance",
        ],
        relatedServices: ["telecalling-crm-software", "lead-management-software", "call-recording-software", "power-dialer-software"],
        seoTitle: "LeadSquared Integration | Truering",
        seoDescription:
            "Truering LeadSquared Integration connects cloud telephony with LeadSquared CRM for automatic call logging, click-to-call, lead screen pop, and real-time sync.",
        keywords: ["LeadSquared integration", "LeadSquared CRM telephony", "LeadSquared call logging", "Truering LeadSquared"],
        faqItems: [
            { question: "What is Truering LeadSquared Integration?", answer: "It connects LeadSquared CRM with Truering's cloud telephony to enable automatic call logging, click-to-call, lead screen pop, and real-time lead synchronization." },
            { question: "Can sales teams make calls directly from LeadSquared?", answer: "Yes. Sales representatives can make calls with a single click from within LeadSquared, eliminating manual dialing and increasing productivity." },
            { question: "Does the integration sync call recordings?", answer: "Absolutely. Call recordings, notes, dispositions, and communication history are automatically synchronized with LeadSquared for complete lead tracking." },
            { question: "Is Truering LeadSquared Integration secure?", answer: "Yes. Truering is backed by ISO 27001, ISO 9001, and SOC 2 Audited standards, ensuring enterprise-grade security for all data." },
        ],
    },
    {
        slug: "google-sheets-integration",
        title: "Google Sheets Integration",
        eyebrow: "Data Automation",
        description:
            "Integrate Truering with Google Sheets on a regular basis to automatically copy call data, customer records, lead information, and business activities to spreadsheets. Eliminate manual data entry, improve reporting efficiency, and enable your teams to make smarter decisions with real-time data.",
        heroTitle: "Google Sheets Integration with Truering for Automated Data Management and Real-Time Business Insights",
        overview:
            "The success of business decisions is directly related to the quality of the data used. The Truering Google Sheets Integration can help organizations automatically track customer touchpoints, call operations, lead data, and operations data in Google Sheets without manual intervention. Regardless of whether you are tracking sales performance, customer support or creating business reports, all the updates occur automatically. Since 2015, Truering, trusted by businesses, has made data management easier using intelligent automation and enhanced team performance and efficiency. Supported by ISO 27001-certified and ISO 9001 certifications and SOC 2 auditing, Truering offers a secure, scalable, enterprise-ready integration that businesses demanding precise, current reporting can use.",
        stats: ["Established Since 2015", "ISO 27001 Certified", "ISO 9001 Certified", "SOC 2 Audited"],
        features: [
            { title: "Automatic Data Synchronization", body: "Automatically export call logs, lead information, customer files, agent actions, and history of communication to Google Sheets without manual exports." },
            { title: "Real-Time Data Updates", body: "Always maintain spreadsheets on the fly as calls, leads, customer interactions, and business activities are logged into Truering." },
            { title: "Custom Data Mapping", body: "Set up which fields, records and business data to be moved into particular Google Sheets to meet your reporting needs." },
            { title: "Automated Report Generation", body: "Create live sales reporting, call performance dashboards, lead tracking sheets and operational reporting with automatically synchronized data." },
            { title: "Centralized Business Data", body: "Have a single spreadsheet containing customer data, communications, sales, and operational statistics that can be safely shared departmentally." },
            { title: "Workflow Automation", body: "Automate processes using the new updated spreadsheet data to simplify reporting, business operations and work processes." },
        ],
        benefits: [
            "100% Automated Data Synchronization — get rid of manual updates to spreadsheets by automatically transferring business data via Truering to Google Sheets",
            "Real-Time Business Visibility — get current business data and live reports without manually exporting data or scheduling it",
            "30+ Business Integrations — integrate Google Sheets with CRM systems, cloud phone apps, WhatsApp, ERP, APIs, and enterprise applications",
            "Enterprise-Grade Security & Compliance — secure business data with ISO 27001, ISO 9001, and SOC 2 Audited standards",
            "Higher Operational Efficiency — automate repeated and redundant administrative functions to ensure time is used analyzing performance",
            "Built to Scale with Growing Businesses — provide stable synchronization whether you have hundreds or millions of records",
        ],
        relatedServices: ["telecalling-crm-software", "cloud-telephony-crm", "lead-management-software", "call-tracking-crm"],
        seoTitle: "Google Sheets Integration | Truering",
        seoDescription:
            "Truering Google Sheets Integration automates call data, lead information, and business activities to spreadsheets for real-time reporting and smarter decisions.",
        keywords: ["Google Sheets integration", "Truering Google Sheets", "automated data sync", "call data spreadsheet", "business reporting integration"],
        faqItems: [
            { question: "What is Truering Google Sheets Integration?", answer: "It automatically exports call logs, lead information, customer records, and business activities from Truering to Google Sheets for real-time reporting and data management." },
            { question: "Does the data sync in real-time?", answer: "Yes. Truering automatically updates Google Sheets as calls, leads, customer interactions, and business activities are logged." },
            { question: "Can I customize which data gets synced?", answer: "Absolutely. You can configure which fields, records, and business data are synchronized to specific Google Sheets based on your reporting needs." },
            { question: "Is the integration secure?", answer: "Yes. Truering is backed by ISO 27001, ISO 9001, and SOC 2 Audited standards, ensuring enterprise-grade security for all data transfers." },
        ],
    },
];
