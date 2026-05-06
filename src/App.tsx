import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Tech", href: "#tech" },
  { label: "Contact", href: "#contact" },
] as const;

const SERVICES = [
  {
    index: "01",
    title: "Web Engineering",
    body:
      "High-performance web applications — from streamlined MVPs to enterprise SaaS. We handle authentication, payments, and complex API orchestrations on scalable architectures.",
  },
  {
    index: "02",
    title: "Mobile Systems",
    body:
      "Native-performance iOS and Android applications built with React Native. Focused on fluid UI and robust backend synchronization.",
  },
  {
    index: "03",
    title: "Strategic Consulting",
    body:
      "Architecture audits, technology roadmapping, and CTO-as-a-Service to bridge the gap between business goals and technical execution.",
  },
] as const;

const STACK = [
  {
    i: "01",
    name: "TypeScript",
    body:
      "Strict types from API to component. The contract that keeps a codebase honest at scale.",
  },
  {
    i: "02",
    name: "React",
    body:
      "The web UI baseline. Component-driven, performance-tuned, concurrent rendering when it earns its keep.",
  },
  {
    i: "03",
    name: "Next.js",
    body:
      "Production React: server components, streaming, edge runtime. Full-stack apps without a parallel backend.",
  },
  {
    i: "04",
    name: "Angular",
    body:
      "Enterprise-grade structure. RxJS, dependency injection, opinionated tooling — for teams that need consistency at scale.",
  },
  {
    i: "05",
    name: "Tailwind CSS",
    body:
      "Design tokens as utilities. Visual consistency without a component zoo, naming debates or dead CSS.",
  },
  {
    i: "06",
    name: "Vite",
    body:
      "Instant dev server, optimised production builds. Modern frontend tooling that respects your feedback loop.",
  },
  {
    i: "07",
    name: "React Native",
    body:
      "One codebase, two stores. New Architecture, native modules where it matters, OTA updates for fast iteration.",
  },
  {
    i: "08",
    name: "Node",
    body:
      "The runtime our services live on. Streams, workers and the npm ecosystem — used carefully, not by reflex.",
  },
  {
    i: "09",
    name: "tRPC",
    body:
      "Type-safe RPC between client and server. No codegen, no schema drift, no runtime surprises.",
  },
  {
    i: "10",
    name: "MongoDB",
    body:
      "Document store for non-relational data shapes. Aggregation pipelines, replica sets, Atlas operations.",
  },
  {
    i: "11",
    name: "Supabase",
    body:
      "Managed Postgres with auth, storage and realtime built in. Row-level security at the data layer, portable SQL underneath.",
  },
  {
    i: "12",
    name: "AWS",
    body:
      "Cloud delivery on managed services and infrastructure-as-code. Observability and security baked in from day one.",
  },
  {
    i: "13",
    name: "AI & ML Integration",
    body:
      "LLM integration, retrieval pipelines and structured tool use. Provider-agnostic abstractions for cost and latency control.",
  },
] as const;

const CLIENTS = [
  { src: "/clients/1.svg", aspect: 1070.11 / 99.36 },
  { src: "/clients/2.svg", aspect: 395.85 / 119.06 },
  { src: "/clients/3.svg", aspect: 117.22 / 118.33 },
  { src: "/clients/4.svg", aspect: 432.52 / 122.41 },
  { src: "/clients/5.svg", aspect: 354.49 / 63.2 },
  { src: "/clients/6.svg", aspect: 353.16 / 68.79 },
  { src: "/clients/7.svg", aspect: 357.23 / 105.65 },
  { src: "/clients/8.svg", aspect: 360.41 / 68.7 },
] as const;

const LEGAL_LINE = [
  "THECODEZ DEVELOPMENT SRL",
  "CUI 42684770",
  "Reg. Com. J20/1024/2020",
] as const;

const TERMS_LAST_UPDATED = "May 2026";

type TermsBullet = { readonly label?: string; readonly body: string };
type TermsSection = {
  readonly n: string;
  readonly h: string;
  readonly intro?: readonly string[];
  readonly bullets?: readonly TermsBullet[];
  readonly outro?: readonly string[];
};

const TERMS_SECTIONS: readonly TermsSection[] = [
  {
    n: "01",
    h: "Introduction and Acceptance",
    intro: [
      "These Terms of Service (\"Terms\") govern your access to and use of the website and services provided by THECODEZ DEVELOPMENT SRL (\"thecodez\", \"we\", \"us\", or \"our\"), a company organised and existing under the laws of Romania, with its registered office at Bdul. Dacia 120, Bl. 45, Sc. 1, Ap. 1, Cod 200044, Loc. Craiova, Jud. Dolj, Romania (CUI 42684770, Reg. Com. J20/1024/2020).",
      "By accessing our website or engaging our services, you agree to be bound by these Terms in their entirety. If you do not agree with any part of these Terms, you must not use our website or services.",
      "These Terms constitute a legally binding agreement between you and THECODEZ DEVELOPMENT SRL. If you are accepting these Terms on behalf of a company or other legal entity, you represent and warrant that you have the authority to bind that entity to these Terms.",
    ],
  },
  {
    n: "02",
    h: "Description of Services",
    intro: [
      "THECODEZ DEVELOPMENT SRL provides professional software development, technology consulting, and related digital services. Our offerings include, but are not limited to:",
    ],
    bullets: [
      {
        label: "Web engineering",
        body:
          "Design, development, testing and deployment of high-performance web applications — from MVPs to enterprise SaaS — including authentication, payments and complex API orchestrations on scalable architectures.",
      },
      {
        label: "Mobile systems",
        body:
          "Native-performance iOS and Android applications built with React Native, focused on fluid UI and robust backend synchronisation.",
      },
      {
        label: "Strategic consulting",
        body:
          "Architecture audits, technology roadmapping and CTO-as-a-Service to bridge business goals and technical execution.",
      },
      {
        label: "Maintenance and support",
        body:
          "Ongoing maintenance, updates and technical support for software products we develop.",
      },
    ],
    outro: [
      "The specific scope, deliverables, timelines and pricing for any engagement are defined in individual project proposals and contracts agreed by both parties prior to the commencement of work.",
    ],
  },
  {
    n: "03",
    h: "Engagement Process",
    intro: ["Our standard engagement process is as follows:"],
    bullets: [
      {
        label: "Initial consultation",
        body:
          "We begin with a free initial consultation to understand your requirements, goals and project scope.",
      },
      {
        label: "Proposal",
        body:
          "Based on our consultation, we prepare a detailed project proposal outlining the scope of work, estimated timelines, milestones, deliverables and pricing. All proposals are valid for 30 days from the date of issuance unless otherwise specified.",
      },
      {
        label: "Contract execution",
        body:
          "Upon acceptance of a proposal, both parties execute a formal services agreement that defines the complete terms of the engagement, including payment terms, deliverables, acceptance criteria and other project-specific provisions.",
      },
      {
        label: "Payment terms",
        body:
          "Unless otherwise agreed in the services agreement, a deposit of 30% of the total project fee is due upon contract execution, with the remaining balance invoiced according to the milestone schedule defined in the agreement. All invoices are payable within 14 days of issuance. Late payments may incur interest at a rate of 0.05% per day of delay, as permitted under Romanian law.",
      },
      {
        label: "Project delivery",
        body:
          "Work is delivered according to the agreed timeline and milestones. Each deliverable is subject to a client review and acceptance period as specified in the services agreement.",
      },
    ],
  },
  {
    n: "04",
    h: "Client Obligations",
    intro: ["To ensure the successful delivery of our services, you agree to:"],
    bullets: [
      {
        label: "Provide accurate and complete information",
        body:
          "You shall provide all information, materials, access credentials and feedback necessary for us to perform the services in a timely manner.",
      },
      {
        label: "Designate a point of contact",
        body:
          "You shall designate an authorised representative who will serve as the primary point of contact for all project-related communications and who has the authority to make decisions and provide approvals on your behalf.",
      },
      {
        label: "Timely feedback and approvals",
        body:
          "You shall provide feedback and approvals within the timeframes specified in the services agreement. Delays in providing feedback or approvals may result in corresponding adjustments to the project timeline and, where applicable, additional costs.",
      },
      {
        label: "Compliance with laws",
        body:
          "You shall ensure that any content, materials or instructions you provide to us comply with all applicable laws and regulations and do not infringe the intellectual property rights or other rights of any third party.",
      },
    ],
  },
  {
    n: "05",
    h: "Intellectual Property",
    intro: [
      "Intellectual property rights in connection with our services are governed as follows:",
    ],
    bullets: [
      {
        label: "Client deliverables",
        body:
          "Upon full payment of all fees due under the applicable services agreement, all intellectual property rights in the custom deliverables created specifically for you as part of the engagement (\"Client Deliverables\") are assigned to you. This assignment is effective only upon receipt of full payment.",
      },
      {
        label: "Pre-existing intellectual property",
        body:
          "thecodez retains all rights, title and interest in any pre-existing intellectual property, including but not limited to proprietary frameworks, libraries, tools, methodologies, code snippets, templates and know-how that were developed by thecodez prior to or independently of the engagement (\"Pre-Existing IP\"). Where Pre-Existing IP is incorporated into Client Deliverables, thecodez grants you a non-exclusive, perpetual, worldwide licence to use such Pre-Existing IP solely as part of the Client Deliverables.",
      },
      {
        label: "Third-party components",
        body:
          "Deliverables may incorporate open-source or third-party software components. Such components remain subject to their respective licence terms, which we will identify and disclose to you.",
      },
      {
        label: "Portfolio rights",
        body:
          "Unless otherwise agreed in writing, thecodez reserves the right to reference the engagement and display non-confidential elements of the work in its portfolio and marketing materials.",
      },
    ],
  },
  {
    n: "06",
    h: "Warranties and Disclaimers",
    bullets: [
      {
        body:
          "thecodez warrants that all services will be performed in a professional and workmanlike manner, consistent with generally accepted industry standards.",
      },
      {
        body:
          "We warrant that deliverables will materially conform to the specifications and acceptance criteria defined in the applicable services agreement for a period of 30 days following acceptance (the \"Warranty Period\"). During the Warranty Period, we will correct any material defects or non-conformities at no additional charge.",
      },
      {
        body:
          "Except as expressly stated in these Terms or in an applicable services agreement, all services and deliverables are provided \"as is\" and \"as available\". To the maximum extent permitted by applicable law, thecodez disclaims all other warranties, whether express, implied or statutory, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.",
      },
      {
        body:
          "We do not warrant that our website will be available at all times, uninterrupted or error-free, or that defects will be corrected. The information on our website is provided for general informational purposes only and does not constitute professional advice.",
      },
    ],
  },
  {
    n: "07",
    h: "Limitation of Liability",
    intro: ["To the maximum extent permitted by applicable law:"],
    bullets: [
      {
        body:
          "In no event shall THECODEZ DEVELOPMENT SRL, its directors, employees or agents be liable for any indirect, incidental, special, consequential or punitive damages, including but not limited to loss of profits, revenue, data, business opportunities or goodwill, arising out of or in connection with these Terms, our services or our website, regardless of the theory of liability.",
      },
      {
        body:
          "thecodez's total aggregate liability for all claims arising out of or in connection with any services agreement shall not exceed the total fees paid by you to thecodez under that specific services agreement during the 12-month period preceding the event giving rise to the claim.",
      },
      {
        body:
          "These limitations apply regardless of whether the damages arise from breach of contract, tort (including negligence), strict liability or any other legal theory, and even if thecodez has been advised of the possibility of such damages.",
      },
      {
        body:
          "Nothing in these Terms shall exclude or limit liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited under applicable law.",
      },
    ],
  },
  {
    n: "08",
    h: "Confidentiality",
    intro: [
      "Both parties acknowledge that during the course of an engagement they may receive or have access to confidential information belonging to the other party.",
    ],
    bullets: [
      {
        label: "Definition",
        body:
          "\"Confidential Information\" means any non-public information disclosed by one party (the \"Disclosing Party\") to the other party (the \"Receiving Party\") that is designated as confidential or that, given the nature of the information or the circumstances of disclosure, should reasonably be understood to be confidential. This includes, but is not limited to, business plans, technical specifications, source code, designs, trade secrets, financial information and client data.",
      },
      {
        label: "Obligations",
        body:
          "The Receiving Party agrees to hold all Confidential Information in strict confidence, to use it only for the purposes of the engagement, and not to disclose it to any third party without the Disclosing Party's prior written consent, except to employees, contractors or advisors who need to know the information and are bound by confidentiality obligations at least as protective as those set forth herein.",
      },
      {
        label: "Exclusions",
        body:
          "Confidential Information does not include information that: (a) is or becomes publicly available through no fault of the Receiving Party; (b) was known to the Receiving Party prior to disclosure; (c) is independently developed by the Receiving Party without reference to the Confidential Information; or (d) is required to be disclosed by law, regulation or court order, provided that the Receiving Party gives the Disclosing Party prompt notice of such requirement.",
      },
      {
        label: "Duration",
        body:
          "Confidentiality obligations survive the termination of any engagement for a period of 3 years.",
      },
    ],
  },
  {
    n: "09",
    h: "Termination",
    bullets: [
      {
        body:
          "Either party may terminate a services agreement by providing 30 days' written notice to the other party.",
      },
      {
        body:
          "Either party may terminate a services agreement immediately upon written notice if the other party commits a material breach of the agreement and fails to cure such breach within 15 days after receiving written notice specifying the breach.",
      },
      {
        body:
          "Upon termination by the client without cause, the client shall pay for all services performed and expenses incurred up to the date of termination, as well as any non-cancellable commitments made by thecodez in connection with the engagement.",
      },
      {
        body:
          "Upon termination for any reason: (a) each party shall return or destroy all Confidential Information of the other party; (b) thecodez shall deliver to the client all completed and in-progress deliverables for which payment has been made; and (c) any provisions of these Terms that by their nature should survive termination shall continue in full force and effect, including but not limited to Sections 5, 7, 8 and 11.",
      },
      {
        body:
          "thecodez reserves the right to suspend services if any invoice remains unpaid for more than 30 days past its due date, without prejudice to any other rights or remedies available to thecodez.",
      },
    ],
  },
  {
    n: "10",
    h: "Governing Law and Dispute Resolution",
    intro: [
      "These Terms and any disputes arising out of or in connection with them shall be governed by and construed in accordance with the laws of Romania, without regard to its conflict of law principles. The courts of Craiova, Jud. Dolj, Romania shall have exclusive jurisdiction to settle any dispute or claim arising out of or in connection with these Terms or their subject matter.",
      "Before initiating any legal proceedings, the parties agree to attempt to resolve any dispute through good-faith negotiation for a period of at least 30 days. If the dispute cannot be resolved through negotiation, either party may submit the dispute to mediation in accordance with the Romanian Mediation Law (Law No. 192/2006). If mediation fails to resolve the dispute within 60 days of the appointment of the mediator, either party may proceed to litigation before the competent courts of Craiova, Jud. Dolj.",
    ],
  },
  {
    n: "11",
    h: "General Provisions",
    bullets: [
      {
        label: "Entire agreement",
        body:
          "These Terms, together with any applicable services agreement and its annexes, constitute the entire agreement between the parties with respect to the subject matter hereof and supersede all prior or contemporaneous communications, proposals and agreements, whether oral or written.",
      },
      {
        label: "Amendments",
        body:
          "No amendment or modification of these Terms shall be effective unless made in writing and signed by both parties. We reserve the right to update these Terms as they apply to the use of our website; the updated version will be posted on our website with a revised date.",
      },
      {
        label: "Severability",
        body:
          "If any provision of these Terms is held to be invalid, illegal or unenforceable, the remaining provisions shall continue in full force and effect.",
      },
      {
        label: "Assignment",
        body:
          "You may not assign or transfer any of your rights or obligations under these Terms without our prior written consent. We may assign our rights and obligations under these Terms without your consent in connection with a merger, acquisition or sale of all or substantially all of our assets.",
      },
      {
        label: "Waiver",
        body:
          "The failure of either party to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.",
      },
      {
        label: "Force majeure",
        body:
          "Neither party shall be liable for any failure or delay in performing its obligations where such failure or delay results from circumstances beyond the reasonable control of that party, including but not limited to natural disasters, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, epidemics, internet outages or strikes.",
      },
    ],
  },
  {
    n: "12",
    h: "Contact Information",
    intro: [
      "If you have any questions about these Terms of Service, please contact us:",
    ],
    outro: [
      "THECODEZ DEVELOPMENT SRL",
      "Bdul. Dacia 120, Bl. 45, Sc. 1, Ap. 1, Cod 200044, Loc. Craiova, Jud. Dolj, Romania",
      "Email: hi@thecodez.com",
      "We welcome your questions and feedback and will make every effort to respond promptly.",
    ],
  },
];

export default function App() {
  const [showTerms, setShowTerms] = useState(false);
  const openTerms = () => setShowTerms(true);
  const closeTerms = () => setShowTerms(false);

  return (
    <div className="bg-paper text-ink">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Tech />
        <Clients />
      </main>
      <Footer onOpenTerms={openTerms} />
      {showTerms && <TermsModal onClose={closeTerms} />}
      <CookieBanner onOpenTerms={openTerms} />
    </div>
  );
}

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 104.33 50.01"
      fill="currentColor"
      role="img"
      aria-label="thecodez"
      className={className}
    >
      <path d="M29.78,8.95c1.15,1.31,1.73,3.11,1.73,5.4v9.94h-5.25v-9.33c0-1.15-.3-2.04-.9-2.68-.6-.65-1.41-.97-2.41-.97-1.06,0-1.91.34-2.53,1.01s-.94,1.64-.94,2.88v9.08h-5.25V1.59h5.25v8.71c.49-1.02,1.22-1.83,2.19-2.42.97-.59,2.11-.89,3.42-.89,1.96,0,3.52.65,4.68,1.96Z" />
      <path d="M51.09,16.68h-11.87c.06,1.29.39,2.21.98,2.78.59.56,1.35.84,2.27.84.78,0,1.42-.19,1.93-.58.51-.39.85-.89,1.01-1.5h5.55c-.23,1.21-.72,2.29-1.47,3.24-.76.95-1.72,1.7-2.89,2.24-1.17.54-2.46.81-3.89.81-1.68,0-3.17-.35-4.46-1.06-1.3-.71-2.31-1.72-3.05-3.05-.74-1.33-1.1-2.88-1.1-4.66s.36-3.36,1.09-4.68,1.74-2.33,3.05-3.04c1.31-.7,2.8-1.06,4.48-1.06s3.19.35,4.48,1.04,2.29,1.67,2.99,2.93c.71,1.26,1.06,2.7,1.06,4.34,0,.43-.05.9-.15,1.41ZM45.03,11.94c-.62-.56-1.4-.84-2.31-.84s-1.76.29-2.39.86c-.63.57-.99,1.41-1.08,2.52h6.69c.02-1.13-.28-1.97-.91-2.53Z" />
      <path d="M16.76,32.71c1.49,1.22,2.43,2.89,2.82,5.02h-5.55c-.16-.74-.5-1.31-1.01-1.72s-1.15-.61-1.93-.61c-.92,0-1.68.36-2.27,1.09-.59.73-.89,1.79-.89,3.18s.3,2.45.89,3.17c.59.73,1.35,1.09,2.27,1.09.78,0,1.42-.2,1.93-.61s.85-.98,1.01-1.72h5.55c-.39,2.13-1.33,3.8-2.82,5.02-1.49,1.22-3.34,1.83-5.55,1.83-1.68,0-3.17-.35-4.46-1.06-1.3-.7-2.31-1.72-3.05-3.05-.74-1.33-1.1-2.88-1.1-4.66s.36-3.36,1.09-4.68c.73-1.32,1.74-2.33,3.05-3.04,1.31-.71,2.8-1.06,4.48-1.06,2.21,0,4.06.61,5.55,1.82Z" />
      <path d="M34.88,31.94c1.34.71,2.39,1.72,3.16,3.05.77,1.33,1.15,2.88,1.15,4.66s-.38,3.33-1.15,4.66c-.77,1.33-1.82,2.35-3.16,3.05-1.34.71-2.86,1.06-4.56,1.06s-3.22-.35-4.57-1.06c-1.35-.7-2.41-1.72-3.18-3.05-.77-1.33-1.15-2.88-1.15-4.66s.38-3.33,1.15-4.66c.77-1.33,1.83-2.35,3.18-3.05,1.35-.71,2.87-1.06,4.57-1.06s3.21.35,4.56,1.06ZM27.79,36.51c-.68.73-1.03,1.78-1.03,3.15s.34,2.41,1.03,3.13c.68.72,1.53,1.08,2.53,1.08s1.84-.36,2.52-1.08c.67-.71,1.01-1.76,1.01-3.13s-.34-2.42-1.01-3.15c-.68-.72-1.51-1.09-2.52-1.09s-1.85.36-2.53,1.09Z" />
      <path d="M51.8,31.77c.94.59,1.62,1.4,2.05,2.42v-8.68h5.25v22.7h-5.25v-3.1c-.43,1.02-1.11,1.83-2.05,2.42-.94.59-2.07.89-3.38.89-1.41,0-2.67-.35-3.79-1.06-1.11-.7-1.99-1.72-2.64-3.05-.65-1.33-.97-2.88-.97-4.66s.32-3.36.97-4.68c.64-1.32,1.52-2.33,2.64-3.04s2.38-1.06,3.79-1.06c1.31,0,2.43.3,3.38.89ZM47.4,36.59c-.69.74-1.03,1.76-1.03,3.07s.34,2.33,1.03,3.07c.68.74,1.59,1.1,2.71,1.1s2.01-.38,2.72-1.14c.71-.76,1.06-1.77,1.06-3.04s-.35-2.31-1.06-3.05c-.71-.75-1.61-1.12-2.72-1.12s-2.03.37-2.71,1.1Z" />
      <path d="M78.82,40.61h-11.87c.06,1.29.39,2.21.98,2.78.59.56,1.35.84,2.27.84.78,0,1.42-.19,1.93-.58s.85-.89,1.01-1.5h5.55c-.23,1.21-.72,2.29-1.47,3.24-.76.95-1.72,1.7-2.89,2.24-1.16.54-2.46.81-3.89.81-1.68,0-3.16-.35-4.46-1.06-1.3-.7-2.32-1.72-3.05-3.05-.74-1.33-1.1-2.88-1.1-4.66s.36-3.36,1.09-4.68c.72-1.32,1.74-2.33,3.05-3.04s2.8-1.06,4.48-1.06,3.19.35,4.48,1.04,2.28,1.67,2.99,2.93c.7,1.26,1.06,2.7,1.06,4.34,0,.43-.05.9-.15,1.41ZM72.76,35.87c-.62-.56-1.4-.84-2.32-.84s-1.76.29-2.39.86c-.63.57-.99,1.41-1.07,2.52h6.69c.02-1.13-.28-1.97-.91-2.53Z" />
      <path d="M86.34,43.83h7.92v4.39h-13.65v-4.14l7.36-8.62h-7.24v-4.36h13.22v4.14l-7.61,8.59Z" />
      <path d="M9.64,19.78c-.65,0-1.12-.13-1.4-.4-.28-.27-.41-.74-.41-1.41v-6.38h3.44v-4.42h-3.44V2.97H2.59v14.98c.01,2.25.56,3.87,1.67,4.86,1.11.99,2.67,1.49,4.68,1.49h2.36v-4.51h-1.66Z" />
    </svg>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-grey-200 bg-paper/95 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-12">
          <a
            href="#top"
            aria-label="thecodez — home"
            className="block text-ink transition-opacity hover:opacity-70"
          >
            <Wordmark className="h-5 w-auto md:h-6" />
          </a>

          <div className="flex items-center gap-1 md:gap-8">
            <ul className="hidden items-center gap-10 md:flex">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-mono text-xs uppercase tracking-[0.2em] text-grey-700 transition-colors hover:text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <ThemeToggle />

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden"
            >
              <span className="h-px w-6 bg-ink" />
              <span className="h-px w-6 bg-ink" />
            </button>
          </div>
        </nav>
      </header>

      {open && <MobileMenu onClose={() => setOpen(false)} />}
    </>
  );
}

type Theme = "light" | "dark";
const THEME_KEY = "thecodez:theme";

function readInitialTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(readInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      // localStorage unavailable — toggle still works for the session
    }
  }, [theme]);

  const next: Theme = theme === "light" ? "dark" : "light";

  return (
    <button
      type="button"
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
      onClick={() => setTheme(next)}
      className="flex h-10 w-10 items-center justify-center text-ink transition-opacity hover:opacity-60"
    >
      {theme === "light" ? (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-[18px] w-[18px]"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-[18px] w-[18px]"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 3v1.5M12 19.5V21M3 12h1.5M19.5 12H21M5.64 5.64l1.06 1.06M17.3 17.3l1.06 1.06M5.64 18.36l1.06-1.06M17.3 6.7l1.06-1.06" />
        </svg>
      )}
    </button>
  );
}

const MOBILE_MENU_EXIT_MS = 250;

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setShow(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const handleClose = () => {
    setShow(false);
    window.setTimeout(onClose, MOBILE_MENU_EXIT_MS);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col bg-paper transition-[opacity,transform] duration-[250ms] ease-out md:hidden ${
        show ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
      }`}
    >
      <div className="flex h-16 items-center justify-between border-b border-grey-200 px-6">
        <Wordmark className="h-5 w-auto text-ink" />
        <button
          type="button"
          aria-label="Close menu"
          onClick={handleClose}
          className="flex h-10 w-10 items-center justify-center text-3xl leading-none transition-opacity hover:opacity-60"
        >
          ×
        </button>
      </div>

      <ul className="flex flex-1 flex-col items-stretch justify-center gap-0 px-6">
        {NAV_LINKS.map((l, i) => (
          <li key={l.href}>
            <a
              href={l.href}
              onClick={handleClose}
              className="flex items-baseline justify-between border-b border-grey-200 py-6 font-sans text-5xl font-semibold tracking-tight transition-opacity hover:opacity-70"
            >
              <span>{l.label}</span>
              <span className="font-mono text-xs font-medium tracking-[0.2em] text-grey-500">
                0{i + 1}
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between border-t border-grey-200 px-6 py-6 font-mono text-[10px] uppercase tracking-[0.2em] text-grey-500">
        <span>EST. 2020.06.25</span>
        <span>CRAIOVA · RO</span>
      </div>
    </div>
  );
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (shown) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(true);
      return;
    }
    const node = ref.current;
    if (!node) return;

    // If the element is already at/above the viewport on mount
    // (page loaded mid-scroll, or jumped past), reveal immediately.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      setShown(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [shown]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[opacity,transform] duration-700 ease-out ${
        shown ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-grey-500">
      <span>({index})</span>
      <span className="h-px w-6 bg-grey-300" />
      <span>{label}</span>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[88svh] max-w-7xl flex-col justify-end overflow-hidden px-6 pb-20 pt-28 md:px-12 md:pb-28 md:pt-32"
    >
      {/* Decorative animated layer (behind content) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        {/* Vertical column grid — subtle hairlines */}
        <div className="absolute inset-y-0 left-1/4 w-px bg-grey-200/70" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-grey-200/70" />
        <div className="absolute inset-y-0 left-3/4 w-px bg-grey-200/70" />

        {/* Horizontal scan line travelling top → bottom on a slow loop */}
        <div
          className="absolute inset-x-0 h-px bg-grey-200/70 dark:bg-grey-500"
          style={{ animation: "scan-y 9s linear infinite" }}
        />
      </div>

      <h1 className="relative z-10 font-sans text-[15vw] font-semibold leading-[0.92] tracking-[-0.04em] md:text-[12vw] lg:text-[10rem]">
        Build.
        <br />
        Ship.
        <br />
        Scale.
      </h1>

      <div className="relative z-10 mt-12 grid items-end gap-10 md:mt-16 md:grid-cols-3">
        <p className="text-base leading-relaxed text-grey-700 md:col-span-2 md:max-w-xl md:text-lg">
          We build scalable architecture for products that need to ship — and
          keep shipping. Native mobile and modern web, engineered cleanly from
          the first commit.
        </p>
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-grey-500 md:justify-end">
          <span>(01)</span>
          <span className="h-px w-6 bg-grey-300" />
          <span>Scroll</span>
          <span
            aria-hidden="true"
            className="ml-1 inline-block h-1.5 w-1.5 bg-ink"
            style={{ animation: "pulse-soft 2.4s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section
      id="work"
      className="scroll-mt-24 border-t border-grey-200 bg-paper"
    >
      <Reveal className="mx-auto max-w-7xl px-6 pt-24 md:px-12 md:pt-32">
        <SectionLabel index="02" label="Work" />
        <h2 className="mt-6 max-w-3xl font-sans text-4xl font-semibold leading-[1.05] tracking-[-0.02em] md:text-6xl">
          What we build.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-grey-700 md:text-lg">
          Three practices. One discipline: clean code, predictable delivery,
          built to be handed off and extended.
        </p>
      </Reveal>

      <Reveal
        delay={120}
        className="mx-auto mt-16 max-w-7xl px-6 pb-24 md:px-12 md:pb-32"
      >
        <ul className="grid gap-px overflow-hidden bg-grey-200 md:grid-cols-3">
          {SERVICES.map((s) => (
            <li
              key={s.index}
              className="flex min-h-[280px] flex-col justify-between bg-paper p-8 md:p-10"
            >
              <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-grey-500">
                {s.index} /
              </span>
              <div className="mt-12">
                <h3 className="font-sans text-2xl font-semibold tracking-tight md:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-grey-700 md:text-base">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

const STACK_PREVIEW = 6;

function StackCard({ tech }: { tech: (typeof STACK)[number] }) {
  return (
    <li className="flex min-h-[200px] flex-col justify-between bg-paper p-6 md:p-8">
      <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-grey-500">
        {tech.i} / Stack
      </span>
      <div className="mt-10">
        <h3 className="font-sans text-xl font-semibold uppercase tracking-tight md:text-2xl">
          {tech.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-grey-700 md:text-[15px]">
          {tech.body}
        </p>
      </div>
    </li>
  );
}

function Tech() {
  const [expanded, setExpanded] = useState(false);
  const hidden = STACK.length - STACK_PREVIEW;
  const firstBatch = STACK.slice(0, STACK_PREVIEW);
  const secondBatch = STACK.slice(STACK_PREVIEW);

  return (
    <section
      id="tech"
      className="scroll-mt-24 border-t border-grey-200 bg-paper"
    >
      <Reveal className="mx-auto max-w-7xl px-6 pt-24 md:px-12 md:pt-32">
        <SectionLabel index="03" label="Tech" />
        <h2 className="mt-6 max-w-3xl font-sans text-4xl font-semibold leading-[1.05] tracking-[-0.02em] md:text-6xl">
          Our stack.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-grey-700 md:text-lg">
          Tools we know deeply. We pick the boring, proven choice — then push it
          where the product needs to go.
        </p>
      </Reveal>

      <Reveal
        delay={120}
        className="mx-auto mt-16 max-w-7xl px-6 pb-24 md:px-12 md:pb-32"
      >
        <div className="bg-grey-200">
          <ul className="grid gap-px sm:grid-cols-2 lg:grid-cols-3">
            {firstBatch.map((tech) => (
              <StackCard key={tech.name} tech={tech} />
            ))}
          </ul>

          <div
            id="tech-stack-extra"
            className={`grid transition-[grid-template-rows] duration-500 ease-out ${
              expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
            aria-hidden={!expanded}
          >
            <div className="min-h-0 overflow-hidden">
              <ul
                className={`mt-px grid gap-px transition-opacity duration-500 ease-out sm:grid-cols-2 lg:grid-cols-3 ${
                  expanded ? "opacity-100" : "opacity-0"
                }`}
              >
                {secondBatch.map((tech) => (
                  <StackCard key={tech.name} tech={tech} />
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center md:mt-14">
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            aria-expanded={expanded}
            aria-controls="tech-stack-extra"
            className="group inline-flex items-center gap-3 border border-grey-300 px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-grey-700 transition-colors hover:border-ink hover:text-ink"
          >
            <span>{expanded ? "View less" : `View ${hidden} more`}</span>
            <svg
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className={`h-3 w-3 transition-transform duration-500 ease-out ${
                expanded ? "rotate-180" : ""
              }`}
            >
              <path d="M3 4.5l3 3 3-3" />
            </svg>
          </button>
        </div>
      </Reveal>
    </section>
  );
}

function Clients() {
  const items = [...CLIENTS, ...CLIENTS];
  return (
    <section
      aria-label="Clients"
      className="scroll-mt-24 border-t border-grey-200 bg-paper"
    >
      <Reveal className="py-8 md:py-10">
        <div className="overflow-hidden">
          <ul
            aria-hidden="true"
            className="animate-marquee flex w-max items-center gap-12 md:gap-16"
          >
            {items.map((c, i) => (
              <li
                key={`${c.src}-${i}`}
                className="h-7 shrink-0 bg-grey-700 opacity-40 transition-opacity duration-300 hover:opacity-100 md:h-9"
                style={{
                  aspectRatio: `${c.aspect}`,
                  maskImage: `url(${c.src})`,
                  WebkitMaskImage: `url(${c.src})`,
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                }}
              />
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

function Footer({ onOpenTerms }: { onOpenTerms: () => void }) {
  return (
    <footer
      id="contact"
      className="scroll-mt-24 border-t border-grey-200 bg-paper"
    >
      <Reveal className="mx-auto max-w-7xl px-6 pt-24 md:px-12 md:pt-20">
        <SectionLabel index="04" label="Contact" />
        <h2 className="mt-6 font-sans text-5xl font-semibold leading-[0.95] tracking-[-0.03em] md:text-8xl lg:text-9xl">
          Let&apos;s build.
        </h2>
        <a
          href="mailto:hi@thecodez.com"
          className="group mt-10 inline-flex items-baseline gap-3 font-mono text-lg text-ink underline decoration-grey-300 decoration-1 underline-offset-[6px] transition-colors hover:decoration-ink md:mt-14 md:text-2xl"
        >
          <span aria-hidden="true" className="text-grey-500 transition-colors group-hover:text-ink">
            →
          </span>
          hi@thecodez.com
        </a>
      </Reveal>

      <div className="mt-16 border-t border-grey-200 md:mt-24">
        <Reveal delay={120} className="mx-auto max-w-7xl px-6 md:px-12">
          <p className="pt-6 font-mono text-[11px] leading-relaxed text-grey-500 md:text-xs">
            {LEGAL_LINE.map((item, i) => (
              <span key={item}>
                {i > 0 && (
                  <span aria-hidden="true" className="mx-2 text-grey-300">
                    ·
                  </span>
                )}
                <span className={i === 0 ? "text-ink" : undefined}>{item}</span>
              </span>
            ))}
          </p>
        </Reveal>
      </div>

      <div className="mt-6 border-t border-grey-200 md:mt-10">
        <Reveal delay={200} className="mx-auto max-w-7xl px-6 pb-10 md:px-12">
          <div className="flex flex-col gap-4 pt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-grey-500 md:flex-row md:items-center md:justify-between">
            <span>
              © 2020–{new Date().getFullYear()} THECODEZ DEVELOPMENT SRL. All rights reserved.
            </span>
            <button
              type="button"
              onClick={onOpenTerms}
              className="self-start transition-colors hover:text-ink md:self-auto"
            >
              Terms &amp; Conditions
            </button>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}

const MODAL_EXIT_MS = 250;

function TermsModal({ onClose }: { onClose: () => void }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setShow(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const handleClose = () => {
    setShow(false);
    window.setTimeout(onClose, MODAL_EXIT_MS);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKey);
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = original;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-title"
      className={`fixed inset-0 z-50 flex items-stretch justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-out md:items-center md:p-12 ${
        show ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`relative flex w-full max-w-3xl flex-col bg-paper transition-[transform,opacity] duration-300 ease-out md:max-h-[85vh] md:border md:border-grey-200 ${
          show ? "translate-y-0 opacity-100 md:scale-100" : "translate-y-4 opacity-0 md:translate-y-0 md:scale-[0.98]"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between border-b border-grey-200 bg-paper px-6 py-4 md:px-10">
          <span
            id="terms-title"
            className="font-mono text-xs uppercase tracking-[0.2em] text-grey-500"
          >
            Terms & Conditions
          </span>
          <button
            type="button"
            aria-label="Close terms"
            onClick={handleClose}
            className="flex h-10 w-10 items-center justify-center text-3xl leading-none transition-opacity hover:opacity-60"
          >
            ×
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-10 md:px-12 md:py-14">
          <h1 className="font-sans text-3xl font-semibold tracking-[-0.02em] md:text-5xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-grey-500">
            Last updated · {TERMS_LAST_UPDATED}
          </p>

          <div className="mt-12 space-y-14">
            {TERMS_SECTIONS.map((s) => (
              <section key={s.n} className="border-l border-grey-200 pl-6">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-grey-500">
                  ({s.n})
                </span>
                <h2 className="mt-2 font-sans text-xl font-semibold tracking-tight md:text-2xl">
                  {s.h}
                </h2>

                <div className="mt-5 space-y-5 text-sm leading-relaxed text-grey-700 md:text-base">
                  {s.intro?.map((para, i) => (
                    <p key={`i-${i}`}>{para}</p>
                  ))}

                  {s.bullets && (
                    <ul className="space-y-4">
                      {s.bullets.map((b, i) => (
                        <li
                          key={`b-${i}`}
                          className="grid grid-cols-[auto_1fr] gap-x-4"
                        >
                          <span
                            aria-hidden="true"
                            className="select-none pt-[2px] font-mono text-grey-500"
                          >
                            —
                          </span>
                          <span>
                            {b.label && (
                              <strong className="font-semibold text-ink">
                                {b.label}.
                              </strong>
                            )}
                            {b.label ? " " : ""}
                            {b.body}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {s.outro?.map((para, i) => (
                    <p key={`o-${i}`}>{para}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const COOKIE_KEY = "thecodez:cookie-consent";
const BANNER_EXIT_MS = 350;

function CookieBanner({ onOpenTerms }: { onOpenTerms: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(COOKIE_KEY);
    } catch {
      // localStorage unavailable — show banner anyway
    }
    if (!stored) {
      setMounted(true);
      const id = window.setTimeout(() => setShown(true), 50);
      return () => window.clearTimeout(id);
    }
  }, []);

  const persist = (value: "accepted" | "declined") => {
    try {
      window.localStorage.setItem(COOKIE_KEY, value);
    } catch {
      // localStorage unavailable — silently dismiss
    }
    setShown(false);
    window.setTimeout(() => setMounted(false), BANNER_EXIT_MS);
  };

  if (!mounted) return null;

  return (
    <div
      role="region"
      aria-label="Cookie notice"
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-grey-200 bg-paper/95 backdrop-blur transition-[opacity,transform] duration-[350ms] ease-out ${
        shown ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-5 md:flex-row md:items-center md:justify-between md:gap-10 md:px-12 md:py-6">
        <p className="font-mono text-[11px] leading-relaxed tracking-[0.05em] text-grey-700 md:max-w-2xl md:text-xs">
          We use only essential cookies needed for this site to work. No
          tracking, no third parties.{" "}
          <button
            type="button"
            onClick={onOpenTerms}
            className="underline underline-offset-2 hover:text-ink"
          >
            Read our terms
          </button>
          .
        </p>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => persist("declined")}
            className="border border-grey-300 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-grey-700 transition-colors hover:border-ink hover:text-ink"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => persist("accepted")}
            className="border border-ink bg-ink px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-paper transition-colors hover:bg-grey-900"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
