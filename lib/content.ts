/**
 * Saara site content ek jagah.
 *
 * Copy, pricing, projects, FAQ — sab yahan se aata hai. Kuch badalna ho toh
 * sirf ye file kholni padegi, components ko haath lagaye bina. Jab CMS add
 * karenge, yahi wo seam hai jahan se data aayega.
 */

export const hero = {
  badge: "AI systems, live in two weeks",
  lede: "Nexora AI builds intelligent systems, AI products, and digital experiences that help startups and businesses automate, scale and lead in their industry.",
  note: "Free 30-minute call. You leave with a written plan, whether you hire us or not.",
  guarantee: {
    title: "Checkpoint two, risk free",
    body: "Not convinced? Pay nothing, no notice.",
  },
  mini: [
    { value: 2, suffix: " wks", label: "Build time" },
    { text: "Fixed", label: "Price upfront" },
    { value: 100, suffix: "%", label: "You own it" },
  ],
  values: [
    { icon: "zap", title: "AI First", body: "Intelligent by design" },
    { icon: "chart", title: "Scalable", body: "Built for growth" },
    { icon: "shield", title: "Yours to keep", body: "Your repo, your cloud" },
    { icon: "chat", title: "Direct access", body: "Talk to the builder" },
  ],
};

/**
 * Headline word-by-word animate hoti hai, isliye tokens me todi hai.
 * br: true ka matlab us word ke baad nayi line shuru hogi.
 * accent: true wale words pe gradient lagta hai.
 */
export const headline = [
  { text: "We" },
  { text: "don\u2019t" },
  { text: "just" },
  { text: "build", br: true },
  { text: "products." },
  { text: "We", accent: true },
  { text: "build", accent: true, br: true },
  { text: "tomorrow.", accent: true },
];

/** Tech logos strip — ye tools hum sach me use karte hain, isliye legal bhi hai. */
/**
 * Tech strip — jo tools hum sach me use karte hain.
 *
 * Deliberately AI-heavy hai: LangGraph aur pgvector jaise naam un logon ko
 * signal dete hain jo jaante hain, aur baaki ko lagta hai ki hum deep hain.
 * Sirf "OpenAI, Next.js, Postgres" likhne se koi bhi web shop jaisa lagta hai.
 */
/**
 * Tech strip — jo tools hum sach me use karte hain.
 *
 * Order deliberate hai: pehle wo jo visitor pehchanta hai (Next.js, OpenAI),
 * beech me wo jo depth signal karta hai (LangGraph, MCP), aakhir me
 * infrastructure. Marquee loop karti hai isliye shuruaat strong honi chahiye.
 */
export const techStack = [
  "Next.js",
  "TypeScript",
  "OpenAI",
  "LangGraph",
  "MCP",
  "Supabase",
  "Docker",
  "AWS",
];

/**
 * RECENT WORK — apne asli projects yahan bharo.
 *
 * ic    : icon — agent | flow | cube | grid | rocket | pen
 * type  : "Client project" ya "Built to prove it works"
 * link  : live URL, ya "" agar nahi hai
 * res   : koi number ya outcome, ya ""
 *
 * Jo project ready nahi, uska poora object hata do — grid apne aap adjust
 * ho jayegi, kuch aur badalne ki zaroorat nahi.
 */
/**
 * CASE STUDIES — apne asli projects yahan bharo.
 *
 * Structure deliberate hai: problem → solution → outcome. Sirf "kya banaya"
 * dikhane se visitor ko andaza nahi lagta ki uske business me kya hoga.
 * Problem statement wo pehchanta hai, outcome wo yaad rakhta hai.
 *
 * ic    : icon — agent | flow | cube | grid | rocket | pen | phone
 * type  : "Client project" ya "Built to prove it works"
 * link  : live URL, ya "" agar nahi hai
 */
export const work = [
  {
    ic: "agent",
    type: "Built to prove it works",
    h: "Support triage agent",
    problem: "A support inbox where the same 40 questions arrived every day, and replies took hours.",
    solution: "An agent that reads each ticket, classifies it, and drafts a reply with a confidence score before a human sees it.",
    outcome: "94% routing accuracy · replies drafted in seconds",
    stack: ["OpenAI", "Next.js", "Postgres"],
    link: "https://sonukumawat-sde.github.io/",
    cta: "View project",
  },
  {
    ic: "flow",
    type: "Built to prove it works",
    h: "Lead intake automation",
    problem: "Enquiries arrived from a form and an inbox, and good leads went cold before anyone called.",
    solution: "A pipeline that scores every enquiry against set criteria, enriches it, and pushes it into a sheet with a suggested next step.",
    outcome: "Response time under 60 seconds · zero manual sorting",
    stack: ["Node.js", "Webhooks", "Sheets API"],
    link: "https://sonukumawat-sde.github.io/",
    cta: "View project",
  },
  {
    ic: "grid",
    type: "Client project",
    h: "Business dashboard",
    problem: "A team tracking operations across spreadsheets, with no single view and no access control.",
    solution: "An admin panel with authentication, role-based access, and usage analytics, built to hand over to an in-house team.",
    outcome: "One source of truth · handed over with docs",
    stack: ["React", "Node.js", "MongoDB"],
    link: "https://sonukumawat-sde.github.io/",
    cta: "View project",
  },
];
/**
 * SERVICES — hub layout me dikhte hain, teen left aur teen right.
 * Pehle teen AI wale hain (core offering), baad ke teen product wale.
 */
/**
 * SERVICES — hub layout me dikhte hain, teen left aur do right.
 *
 * Har card me 3 tags hain, 5 nahi — card ka width fix hai aur 5 tags do
 * lines le lete hain, jisse cards ki height alag-alag ho jaati hai aur
 * grid tuti hui lagti hai. Baaki features description me aa gaye hain.
 */
/**
 * SERVICES — hub layout me dikhte hain, teen left aur teen right.
 *
 * Har card me 3 tags hain, 5 nahi — card ka width fix hai aur 5 tags do
 * lines le lete hain, jisse cards ki height alag-alag ho jaati hai aur
 * grid tuti hui lagti hai. Baaki features description me aa gaye hain.
 */
export const services = [
  {
    i: "agent",
    h: "AI Agents & Assistants",
    t: "Handles what your team repeats",
    p: "Chatbots, voice assistants, and internal copilots that answer questions, read documents, and complete tasks — wired into your real systems with a clean handoff to a human.",
    tags: ["Chatbots", "Voice AI", "Multi-agent"],
    m: "From ₹85,000 · 2–3 weeks",
  },
  {
    i: "flow",
    h: "AI Workflow Automation",
    t: "Runs while you sleep",
    p: "Intake, tagging, routing, follow-ups. We connect your apps through APIs and n8n so the repetitive work runs overnight and escalates only real decisions.",
    tags: ["n8n", "API integrations", "CRM & email"],
    m: "From ₹45,000 · 1–2 weeks",
  },
  {
    i: "rocket",
    h: "AI SaaS Applications",
    t: "A product, not a prototype",
    p: "Complete AI SaaS platforms with auth, subscriptions, payments, dashboards, and cloud deployment. From idea to a product that can take real users on day one.",
    tags: ["Auth & billing", "Subscriptions", "Cloud deploy"],
    m: "From ₹2,00,000 · 4–6 weeks",
  },
  {
    i: "grid",
    h: "Web Apps & Dashboards",
    t: "The software your team lives in",
    p: "Admin panels, client portals, and analytics dashboards. Fast, secure, and documented well enough that any engineer can take over from us later.",
    tags: ["Admin panels", "Client portals", "Analytics"],
    m: "From ₹70,000 · 2–4 weeks",
  },
  {
    i: "phone",
    h: "Mobile App Development",
    t: "Your product in their pocket",
    p: "High-performance Android and iOS apps, built cross-platform so one codebase ships to both stores. Real-time features and on-device AI where it makes sense.",
    tags: ["Android & iOS", "Cross-platform", "Store deploy"],
    m: "From ₹1,50,000 · 4–6 weeks",
  },
  {
    i: "cube",
    h: "Custom AI Products",
    t: "When nothing off the shelf fits",
    p: "RAG applications, AI search, document intelligence, and recommendation systems. We design the model layer, the interface, and the evaluation loop that keeps it honest.",
    tags: ["RAG", "AI search", "Document AI"],
    m: "From ₹2,00,000 · 4–6 weeks",
  },
];
/** Chhoti services — compact strip me, deliberately kam prominent. */
export const secondaryServices = [
  { i: "pen", h: "Branding and identity", p: "Logo, palette, voice.", m: "From ₹18,000" },
  { i: "grid", h: "Marketing sites", p: "Fast, typed, genuinely designed.", m: "From ₹25,000" },
  { i: "chart", h: "SEO and analytics", p: "Found, measured, improved.", m: "From ₹12,000" },
  { i: "cube", h: "Maintenance and support", p: "We stay after launch.", m: "From ₹8,000/mo" },
];

/**
 * INDUSTRIES — har card apne concrete deliverables list karta hai.
 *
 * Generic descriptions ki jagah specific deliverables isliye hain kyunki
 * visitor unhe apne business me pehchan leta hai: "haan, ye problem hamare
 * paas bhi hai." Yahi cheez call book karwati hai.
 */
/**
 * INDUSTRIES — ab use cases bhi isi ke andar hain.
 *
 * Structure: problems (jo visitor pehchanta hai) → solutions (jo hum banate
 * hain) → outcome (jo wo yaad rakhta hai). Alag Use Cases section hata diya
 * kyunki wo yahi baat dobara keh raha tha, sirf industry ke bina.
 */
export const industries = [
  {
    ic: "cart",
    n: "Ecommerce and D2C",
    r: "Support / Returns / Catalogue",
    problems: [
      "Same order questions answered all day",
      "Return requests piling up in a shared inbox",
      "Product data cleaned by hand before every launch",
    ],
    solutions: [
      ["Order status agent", "Reads your OMS, replies on WhatsApp and email"],
      ["Return request triage", "Auto-approves the clear ones, flags the rest"],
      ["Catalogue enrichment", "Titles, descriptions, and tags at scale"],
    ],
    pr: "From ₹30,000 · 2 weeks",
    res: "70% tickets auto-resolved",
  },
  {
    ic: "steth",
    n: "Clinics and healthcare",
    r: "Scheduling / Records / Follow-ups",
    problems: [
      "Reception spends the day on the phone",
      "No-shows quietly eat the schedule",
      "Patient history read minutes before the consult",
    ],
    solutions: [
      ["Appointment reminder agent", "Confirms, reschedules, and fills gaps"],
      ["Intake note summariser", "History ready before the doctor walks in"],
      ["Follow-up sequences", "Post-visit checks without manual calls"],
    ],
    pr: "From ₹40,000 · 2 weeks",
    res: "No-shows down by a third",
  },
  {
    ic: "home",
    n: "Real estate",
    r: "Leads / Site visits / Documents",
    problems: [
      "Leads arrive from six places at once",
      "Good enquiries go cold before anyone calls",
      "Agreements read line by line, every time",
    ],
    solutions: [
      ["Lead qualification agent", "Scores and routes within 60 seconds"],
      ["Site visit scheduler", "Books, confirms, and reminds automatically"],
      ["Agreement reader", "Pulls key terms out of contracts in seconds"],
    ],
    pr: "From ₹35,000 · 2 weeks",
    res: "Response time under a minute",
  },
  {
    ic: "chart",
    n: "SaaS and startups",
    r: "Onboarding / Support / Churn",
    problems: [
      "Support volume grows faster than the team",
      "Users ask what the docs already answer",
      "Churn shows up only after it happens",
    ],
    solutions: [
      ["In-product AI copilot", "Answers from your own docs, with citations"],
      ["Ticket deflection layer", "Handles repeats before a human sees them"],
      ["Churn early warning", "Flags accounts going quiet, with the reason"],
    ],
    pr: "From ₹55,000 · 3 weeks",
    res: "Support load roughly halved",
  },
  {
    ic: "brief",
    n: "Professional services",
    r: "Proposals / Research / Reporting",
    problems: [
      "Every proposal starts from a blank page",
      "Research eats days before work begins",
      "Client reports rebuilt manually each month",
    ],
    solutions: [
      ["Proposal drafting agent", "Builds from your own past work and tone"],
      ["Research assistant", "Compresses a week of reading into an afternoon"],
      ["Client report generator", "Same format, filled from your data"],
    ],
    pr: "From ₹40,000 · 2 weeks",
    res: "Proposal time cut by 60%",
  },
  {
    ic: "truck",
    n: "Logistics and manufacturing",
    r: "Orders / Invoices / Tracking",
    problems: [
      "POs and invoices arrive as PDFs",
      "Data typed into the system by hand",
      "\u201cWhere is my order\u201d asked all day",
    ],
    solutions: [
      ["Document extraction pipeline", "POs and invoices to structured data"],
      ["Exception routing", "Only the mismatches reach a person"],
      ["Shipment status agent", "Answers from your TMS, instantly"],
    ],
    pr: "From ₹35,000 · 2 weeks",
    res: "Manual entry nearly gone",
  },
];


/**
 * PROCESS — 2 hafte, chaar checkpoints.
 * Har step ke saath ek concrete deliverable (o) hai, "status update" nahi.
 * Yahi cheez proposal ko credible banati hai jab tak client references nahi hain.
 */
export const process = [
  {
    n: "01",
    w: "Days 1-2",
    h: "Scope",
    p: "A call, then a written plan: what gets built, what it costs, and what it deliberately will not do.",
    o: "A scope document, yours to keep",
  },
  {
    n: "02",
    w: "Days 3-5",
    h: "Prototype",
    p: "The riskiest part first, running on your real data. If the approach cannot work, you find out on day four.",
    o: "A working demo you can click",
  },
  {
    n: "03",
    w: "Days 6-11",
    h: "Build",
    p: "Full implementation with evals, error handling, and the unglamorous edge cases nobody demos.",
    o: "Staging environment, updated daily",
  },
  {
    n: "04",
    w: "Days 12-14",
    h: "Ship",
    p: "Deployed to your infrastructure, documented, and your team walked through how it works.",
    o: "Live system, plus 30 days of support",
  },
];

/**
 * WHY US — testimonials ki jagah risk reversal.
 * Format: [icon, title, body]
 */
/**
 * TRUST GRID — process ke neeche dikhta hai.
 *
 * Testimonials ki jagah risk reversal. Chaar points isliye hain ki grid
 * even rahe, aur ye chaaron wo cheezein hain jo naye studio ko bade
 * agencies se alag karti hain.
 *
 * Format: [icon, title, body]
 */
export const why = [
  [
    "rupee",
    "Fixed pricing",
    "You approve the number before a line of code exists. No hourly billing, no scope creep invoice at the end.",
  ],
  [
    "chat",
    "Direct founder access",
    "No account manager relaying messages. You talk to the person writing the code, on WhatsApp, for the whole project.",
  ],
  [
    "shield",
    "Own your code",
    "It ships to your repository and your infrastructure, documented well enough that another engineer can take over.",
  ],
  [
    "rocket",
    "Production-ready delivery",
    "Evals, error handling, monitoring, and a handover walkthrough. Not a demo that breaks on real data.",
  ],
];

/**
 * PRICING — product-wise, generic tiers nahi.
 * once   = one-time builds
 * retain = monthly care plans
 * h: 1 wala card featured hota hai (upar lift + glow).
 */
export const pricing = {
  once: [
    {
      n: "AI Agent",
      ic: "agent",
      b: "",
      p: "₹85,000",
      sf: "",
      s: "2–3 weeks · fixed price",
      tag: "Chatbots, copilots, support agents",
      d: "An agent that talks to your customers or your team, wired into the systems you already run.",
      f: [
        "Connected to your CRM, docs, or database",
        "Guardrails and confidence scoring",
        "Clean handoff to a human",
        "WhatsApp, web, or in-app",
        "30 days post-launch support",
      ],
      gst: "+ 18% GST · 40/60 split",
      note: "Walk away free after checkpoint two",
      c: "Book a call",
      h: 1,
    },
    {
      n: "AI Automation",
      ic: "flow",
      b: "",
      p: "₹45,000",
      sf: "",
      s: "1–2 weeks · fixed price",
      tag: "Pipelines that run without you",
      d: "The repetitive work your team does by hand, turned into pipelines that escalate only real decisions.",
      f: [
        "Triggers from forms, email, or webhooks",
        "Classification and routing rules",
        "Retries and failure alerts",
        "Every run logged and auditable",
        "30 days post-launch support",
      ],
      gst: "+ 18% GST · 40/60 split",
      note: "Cheapest way to test if AI fits",
      c: "Start here",
      h: 0,
    },
    {
      n: "Custom AI / SaaS",
      ic: "cube",
      b: "Biggest build",
      p: "₹2,00,000",
      sf: "",
      s: "4–6 weeks · phased",
      tag: "A product, not a feature",
      d: "A use case no tool on the market covers. Model layer, interface, and the evaluation loop that keeps it honest.",
      f: [
        "RAG over your own data",
        "Fine-tuning or self-hosted models",
        "Multi-user product with billing",
        "Phased delivery with checkpoints",
        "90 days post-launch support",
      ],
      gst: "+ 18% GST · phased billing",
      note: "Priced exactly after the free call",
      c: "Scope it out",
      h: 0,
    },
    {
      n: "Web App",
      ic: "grid",
      b: "",
      p: "₹70,000",
      sf: "",
      s: "2–4 weeks · fixed price",
      tag: "The product around the model",
      d: "Auth, billing, admin, analytics. Built in Next.js and Postgres so any engineer can take over later.",
      f: [
        "Dashboard and admin panel",
        "Auth, roles, and billing",
        "Analytics and usage tracking",
        "Deployed to your infrastructure",
        "30 days post-launch support",
      ],
      gst: "+ 18% GST · 40/60 split",
      note: "Code ships to your repository",
      c: "Book a call",
      h: 0,
    },
  ],
  retain: [
    {
      n: "AI Agent care",
      ic: "agent",
      b: "",
      p: "₹18,000",
      sf: "/mo",
      s: "Monthly · 2 months minimum",
      tag: "Keep your agent sharp",
      d: "Your live agent monitored, retrained on new tickets, and tuned as your product changes.",
      f: [
        "Monthly accuracy review",
        "Prompt and retrieval tuning",
        "New intents added",
        "Reply within 1 working day",
      ],
      gst: "+ 18% GST",
      note: "Cancel with 15 days notice",
      c: "Talk it through",
      h: 0,
    },
    {
      n: "Automation care",
      ic: "flow",
      b: "",
      p: "₹12,000",
      sf: "/mo",
      s: "Monthly · 2 months minimum",
      tag: "Pipelines stay running",
      d: "Monitoring, failure alerts, and small changes as your process evolves.",
      f: [
        "Uptime and failure monitoring",
        "Small rule changes included",
        "Monthly run report",
        "Reply within 1 working day",
      ],
      gst: "+ 18% GST",
      note: "Cancel with 15 days notice",
      c: "Talk it through",
      h: 0,
    },
    {
      n: "Embedded partner",
      ic: "cube",
      b: "Best value",
      p: "₹85,000",
      sf: "/mo",
      s: "Monthly · 3 months minimum",
      tag: "A builder inside your team",
      d: "Dedicated capacity every month for teams shipping AI features continuously.",
      f: [
        "Dedicated build capacity",
        "Roadmap planning with your team",
        "Monitoring and model upkeep",
        "Priority turnaround",
        "Direct WhatsApp line",
      ],
      gst: "+ 18% GST",
      note: "Cancel with 15 days notice",
      c: "Book a call",
      h: 1,
    },
    {
      n: "Product team",
      ic: "grid",
      b: "",
      p: "₹1,60,000",
      sf: "/mo",
      s: "Monthly · 6 months minimum",
      tag: "Two builders, one roadmap",
      d: "Two engineers working alongside your team on a continuous AI and product roadmap.",
      f: [
        "Everything in Embedded",
        "Two dedicated builders",
        "Architecture and code review",
        "Quarterly strategy sessions",
        "Same-day response",
      ],
      gst: "+ 18% GST",
      note: "Cancel with 30 days notice",
      c: "Talk to us",
      h: 0,
    },
  ],
};

/**
 * FAQ — pehli call pe aane wale asli sawal.
 * Format: [question, answer]
 * Ye array JSON-LD FAQ schema bhi generate karta hai, isliye content aur
 * schema kabhi out of sync nahi hote.
 */
export const faq = [
  [
    "You are new — why should I take the risk?",
    "You mostly should not have to. The day-five prototype is the test: it runs on your data, and if it does not convince you, you walk away without paying. We would rather earn the rest of the build than talk you into it.",
  ],
  [
    "Will AI actually solve my problem?",
    "Sometimes the honest answer is no, and we will say so on the call. Plenty of workflows are better fixed with a script, a database, or a process change. We would rather lose the project than sell you a model you do not need.",
  ],
  [
    "Who owns the code?",
    "You do, completely. It ships to your repository and your infrastructure, documented well enough that another engineer can take over. No lock-in, no hosting we control.",
  ],
  [
    "How is this cheaper than hiring someone?",
    "A decent AI engineer in India costs ₹15–20L a year once you add recruiting, tools, and three months of ramp-up. A build with us starts at ₹45,000 and is done in a fortnight. Most teams need one system built well, once — not a salary line forever.",
  ],
  [
    "Which AI models do you use?",
    "Whichever fits the job, and we have no vendor loyalty. The scoping document states which one we picked, what it costs per month at your volume, and why the alternatives lost.",
  ],
  [
    "What do you need from us?",
    "One decision-maker who can answer questions within a day, access to the relevant systems, and a couple of hours a week. Projects slow down over access and approvals far more often than over engineering.",
  ],
  [
    "What if the scope changes mid-build?",
    "Small things we absorb. Anything that shifts the plan gets quoted separately before work starts, so the number you approved stays the number you pay.",
  ],
  [
    "How does payment and GST work?",
    "40% to start, 60% on delivery. UPI, NEFT, or a Razorpay link — whatever is easiest for your accounts team. GST invoice with every payment, 18% on top of the quoted number.",
  ],
  [
    "Will you sign an NDA?",
    "Yes, before the first call if you prefer. Send yours or use ours. We also work on your infrastructure where the data never leaves your servers.",
  ],
  [
    "Can we start small?",
    "Automation is the cheapest entry at ₹45,000 — one workflow, live in a week or two. It is also the fastest way to find out whether AI is worth it for your business at all.",
  ],
];
/**
 * INSIDE THE BUILD — tabs ka content.
 *
 * Teen alternating blocks ki jagah ab tabs hain. Wajah: teen bade mockups
 * stacked karne se section bahut lamba ho jaata tha aur visitor teesre tak
 * pahunchta hi nahi tha. Tabs me active demo bada rehta hai aur explanation
 * uske saath — dono ek saath dikhte hain.
 */
export const buildTabs = [
  {
    id: "agents",
    label: "AI Agents",
    icon: "agent",
    eyebrow: "AI agents",
    h: "Agents that touch your real systems",
    p: "Support triage, research assistants, internal copilots — wired into your CRM, your docs, your database. With guardrails, confidence scores, and a clean handoff to a human when it matters.",
    points: [
      "Connected to the tools you already run",
      "Evals so quality is measured, not guessed",
      "Human approval on anything risky",
    ],
  },
  {
    id: "automation",
    label: "Automation",
    icon: "flow",
    eyebrow: "Automation",
    h: "The manual work, running without you",
    p: "Intake, tagging, routing, reporting, follow-ups. The things your team does by hand every day become pipelines that run overnight and only ping someone when a real decision is needed.",
    points: [
      "Triggers from forms, email, or webhooks",
      "Retries and alerts when something breaks",
      "Every run logged and auditable",
    ],
  },
  {
    id: "products",
    label: "Products",
    icon: "grid",
    eyebrow: "Products",
    h: "The dashboard around the model",
    p: "An AI feature is only half the product. We build the rest — auth, billing, admin, analytics — in Next.js and Postgres, documented well enough that any engineer can take over from us later.",
    points: [
      "Ships to your repo, your infrastructure",
      "Usage and cost visible from day one",
      "No lock-in, no hosting we control",
    ],
  },
];