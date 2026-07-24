"use client";

import { useEffect, useRef, useState } from "react";
import { site, waLink } from "@/lib/site";
import { Icon } from "./icons";

/**
 * Saare client-side pieces ek jagah.
 *
 * Architectural note: sirf yahi components JavaScript ship karte hain. Baaki
 * poora page Server Component rehta hai, toh animated hone ke bawajood text
 * server pe render hota hai — LCP aur crawlability dono bache rehte hain.
 */

const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ------------------------------------------------------------------ REVEAL */
export function Reveal({
  children,
  d = 0,
  pop = false,
  className = "",
}: {
  children: React.ReactNode;
  d?: 0 | 1 | 2 | 3 | 4;
  pop?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    if (reduced()) return setSeen(true);
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            setSeen(true);
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-d={d || undefined}
      className={`rv ${pop ? "pop" : ""} ${seen ? "in" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}

/* ----------------------------------------------------------------- COUNTER */
/** Har counter apne viewport entry pe alag chalta hai, ek global trigger se
 *  nahi — warna neeche wale numbers page load pe hi khatam ho jaate hain. */
export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (reduced()) return setN(to);
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          let v = 0;
          const step = Math.max(1, Math.round(to / 34));
          const id = setInterval(() => {
            v += step;
            if (v >= to) {
              v = to;
              clearInterval(id);
            }
            setN(v);
          }, 32);
        }),
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref} className="cn">
      {n}
      {suffix}
    </span>
  );
}

/* --------------------------------------------------------------------- NAV */
export function Nav() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  /* Order page ke section order se match karta hai — visitor click karke
     jahan pahunchta hai, wahi nav me highlight hota hai. */
  const links = [
    ["services", "Services"],
    ["work", "Case studies"],
    ["industries", "Industries"],
    ["features", "How it runs"],
    ["process", "Process"],
    ["pricing", "Pricing"],
    ["faq", "FAQs"],
  ];

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  /* scrollspy — bina iske visitor ko pata nahi chalta wo page pe kahan hai */
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.body.classList.toggle("lock", open);
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", esc);
    return () => removeEventListener("keydown", esc);
  }, [open]);

  return (
    <>
      <nav className={stuck ? "stuck" : ""}>
        <div className="nav-in">
         <a href="#top" className="logo" aria-label={`${site.name} home`}>
            <span aria-hidden className="lm">
              <svg viewBox="0 0 32 32" fill="none">
                <path
                  className="lm-n"
                  d="M9 23V9l14 14V9"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            {site.name}
          </a>

          <div className="navpill">
            {links.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className={active === id ? "act" : undefined}
              >
                {label}
              </a>
            ))}
          </div>

          <a href="#contact" className="loginb">
            Book a call <Icon.arrow size={14} />
          </a>

          <button
            className={`burger ${open ? "on" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mnav ${open ? "open" : ""}`}>
        <p className="msub">Explore</p>
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {label} <Icon.chev />
          </a>
        ))}
        <a href="#about" onClick={() => setOpen(false)}>
          About <Icon.chev />
        </a>
        <a href="#about" onClick={() => setOpen(false)}>
          Meet the founder <Icon.chev />
        </a>
      </div>
    </>
  );
}

/* --------------------------------------------------------------- STARS */
/** Background star field. Canvas isliye hai ki 150 DOM nodes se sasta hai
 *  aur resize pe redraw karke crisp rehta hai. */
export function Stars() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;

    const draw = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      cv.width = innerWidth * dpr;
      cv.height = innerHeight * dpr;
      cv.style.width = innerWidth + "px";
      cv.style.height = innerHeight + "px";
      const x = cv.getContext("2d");
      if (!x) return;
      x.scale(dpr, dpr);
      const n = Math.min(150, Math.round((innerWidth * innerHeight) / 12000));
      for (let i = 0; i < n; i++) {
        x.beginPath();
        x.arc(
          Math.random() * innerWidth,
          Math.random() * innerHeight * 0.85,
          Math.random() * 1.1 + 0.25,
          0,
          7
        );
        x.fillStyle = `rgba(255,255,255,${Math.random() * 0.5 + 0.12})`;
        x.fill();
      }
    };

    draw();
    let t: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(t);
      t = setTimeout(draw, 200);
    };
    addEventListener("resize", onResize);
    return () => {
      removeEventListener("resize", onResize);
      clearTimeout(t);
    };
  }, []);

  return <canvas className="stars" ref={ref} aria-hidden />;
}

/* --------------------------------------------------------- PROGRESS + FAB */
export function ScrollBits() {
  const [pct, setPct] = useState(0);
  const [showFab, setShowFab] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setPct((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100);
      setShowFab(window.scrollY > 700);
    };
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="prog" style={{ width: `${pct}%` }} />
      <a
        className={`fab ${showFab ? "show" : ""}`}
        href={waLink()}
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
      >
        <Icon.whatsapp size={19} />
        <span>WhatsApp</span>
      </a>
    </>
  );
}

/* ------------------------------------------------------------ HERO VISUAL */
/** Orb + orbiting cards. Sab CSS se bana hai, koi image nahi — LCP par asar
 *  nahi padta aur har screen par sharp rehta hai. */
export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced() || !matchMedia("(pointer:fine)").matches) return;
    const orb = ref.current?.querySelector<HTMLElement>(".orbwrap");
    if (!orb) return;

    let px = 0,
      py = 0,
      sy = 0;
    const apply = () => {
      orb.style.transform = `translate(${px * 22}px,${py * 18 + sy}px) rotate(${px * 2.4}deg)`;
    };
    const onMove = (e: PointerEvent) => {
      px = e.clientX / innerWidth - 0.5;
      py = e.clientY / innerHeight - 0.5;
      apply();
      ref.current?.querySelectorAll<HTMLElement>(".fc").forEach((c, i) => {
        const d = (i % 2 ? -1 : 1) * (8 + i * 2.5);
        c.style.marginLeft = `${px * d}px`;
        c.style.marginTop = `${py * d}px`;
      });
    };
    const onScroll = () => {
      sy = Math.min(scrollY * 0.12, 70);
      apply();
    };
    addEventListener("pointermove", onMove);
    addEventListener("scroll", onScroll, { passive: true });
    return () => {
      removeEventListener("pointermove", onMove);
      removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="hviz" ref={ref}>
      <div className="orbwrap">
        <span className="obeam ob1" />
        <span className="obeam ob2" />
        <span className="opulse op1" />
        <span className="opulse op2" />
        <span className="opulse op3" />
        <span className="core">
          <span className="cglow" />
          <span className="cscan" />
          <span className="cring cr1" />
          <span className="cring cr2" />
          <span className="cring cr3" />
          <span className="cmark">N</span>
        </span>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <span key={i} className={`opart p${i}`} />
        ))}
      </div>

      <article className="fc fcA glass gbd">
        <div className="fch">
          <span>Hours reclaimed</span>
          <span className="fcb">This month</span>
        </div>
        <p className="fcn">
          <Counter to={184} />
          <em>h</em>
        </p>
        <p className="fcd">
          <i className="up">▲</i> 24.5% vs last month
        </p>
        <svg className="fcs" viewBox="0 0 120 34" fill="none" preserveAspectRatio="none">
          <path className="spkf" d="M0 28 L20 22 L40 25 L60 14 L80 17 L100 8 L120 4 L120 34 L0 34Z" />
          <path className="spk" d="M0 28 L20 22 L40 25 L60 14 L80 17 L100 8 L120 4" />
          <circle className="spkd" cx="120" cy="4" r="2.6" />
        </svg>
      </article>

      <article className="fc fcB glass gbd">
        <div className="fch">
          <span>Always on</span>
          <span className="fcpill">Live</span>
        </div>
        <p className="fcmini">AI agents run 24/7, escalating only what needs a human.</p>
      </article>

      <article className="fc fcC glass gbd">
        <div className="fch">
          <span>Automations</span>
          <span className="fci2"><Icon.zap size={13} /></span>
        </div>
        <p className="fcn"><Counter to={156} /></p>
        <p className="fcd"><i className="up">▲</i> 48% tasks automated</p>
      </article>

      <article className="fc fcD glass gbd">
        <div className="fch">
          <span>AI Solutions</span>
          <span className="fci2"><Icon.grid size={13} /></span>
        </div>
        <ul className="fcl">
          {["AI Chatbots", "AI Workflows", "AI Analytics"].map((t) => (
            <li key={t}><i />{t}</li>
          ))}
        </ul>
      </article>

      <article className="fc fcE glass gbd">
        <div className="fch">
          <span>SaaS Products</span>
          <span className="fci2"><Icon.cube size={13} /></span>
        </div>
        <ul className="fcl">
          {["Scalable", "Secure", "Future ready"].map((t) => (
            <li key={t}><i />{t}</li>
          ))}
        </ul>
      </article>

      <article className="fc fcF glass gbd">
        <div className="fch">
          <span>Response time</span>
          <span className="fcb">Median</span>
        </div>
        <p className="fcn">
          <Counter to={2} />
          <em>m 14s</em>
        </p>
        <p className="fcd"><i className="up">▲</i> Down from 3 hours</p>
        <svg className="fcs" viewBox="0 0 120 30" fill="none" preserveAspectRatio="none">
          <path className="spkf" d="M0 6 L24 10 L48 8 L72 18 L96 22 L120 26 L120 30 L0 30Z" />
          <path className="spk" d="M0 6 L24 10 L48 8 L72 18 L96 22 L120 26" />
        </svg>
      </article>

      <article className="fc fcG glass gbd">
        <div className="fch">
          <span>AI Assistant</span>
          <span className="fcpill">Online</span>
        </div>
        <div className="chatw">
          <span className="chatb">How can I help you today?</span>
          <span className="chatav">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#04120e" strokeWidth="1.9">
              <circle cx="12" cy="12" r="9" />
              <path d="M9 10h.01M15 10h.01M8.5 14.5a4.5 4.5 0 0 0 7 0" />
            </svg>
          </span>
        </div>
      </article>
    </div>
  );
}

/* ----------------------------------------------------------- MAGNETIC BTN */
export function Magnetic({
  href,
  variant = "p",
  children,
  external = false,
}: {
  href: string;
  variant?: "p" | "g";
  children: React.ReactNode;
  external?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (reduced() || !matchMedia("(pointer:fine)").matches) return;
    const b = ref.current;
    if (!b) return;
    const move = (e: PointerEvent) => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.16}px,${
        (e.clientY - r.top - r.height / 2) * 0.26
      }px)`;
    };
    const leave = () => (b.style.transform = "");
    b.addEventListener("pointermove", move);
    b.addEventListener("pointerleave", leave);
    return () => {
      b.removeEventListener("pointermove", move);
      b.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <a
      ref={ref}
      href={href}
      className={`btn btn-${variant} mag`}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
    >
      {children}
    </a>
  );
}

/* -------------------------------------------------------------- TIMELINE */
export function Timeline({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [lit, setLit] = useState(false);

  useEffect(() => {
    if (reduced()) return setLit(true);
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (!e.isIntersecting) return;
          io.disconnect();
          setLit(true);
          el.querySelectorAll(".st").forEach((c, i) =>
            setTimeout(() => c.classList.add("on"), 160 + i * 340)
          );
        }),
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className={`tlwrap ${lit ? "lit" : ""}`} ref={ref}>
      <div className="tlbar">
        <span className="tlday">Day 0</span>
        <div className="tltrack">
          <span className="tlfill" style={lit ? { width: "100%" } : undefined} />
          {[1, 2, 3, 4].map((i) => (
            <span key={i} className={`tlmk m${i}`} />
          ))}
        </div>
        <span className="tlday">Day 14</span>
      </div>
      {children}
    </div>
  );
}

/* --------------------------------------------------------- SAVINGS BARS */
export function SavingsBars({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [lit, setLit] = useState(false);

  useEffect(() => {
    if (reduced()) return setLit(true);
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            setLit(true);
            io.disconnect();
          }
        }),
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className={`savebar rv ${lit ? "in lit" : ""}`} ref={ref}>
      {children}
    </div>
  );
}

/* -------------------------------------------------------- PRICING TOGGLE */
import { pricing } from "@/lib/content";

export function PricingTiers() {
  const [mode, setMode] = useState<"once" | "retain">("once");
  const tiers = pricing[mode];

  return (
    <>
      <div className="tog glass">
        <button
          className={mode === "once" ? "on" : ""}
          onClick={() => setMode("once")}
        >
          Build it once
        </button>
        <button
          className={mode === "retain" ? "on" : ""}
          onClick={() => setMode("retain")}
        >
          Keep it running<span className="save">monthly</span>
        </button>
      </div>

      <div className="pzg">
        {tiers.map((t, i) => {
          const Ico = Icon[t.ic as keyof typeof Icon];
          return (
            <div key={t.n} className="rv in" data-d={(i % 4) + 1}>
              <div className={`tr glass shine ${t.h ? "hot gbd" : ""}`}>
                {/* Badge slot hamesha render hota hai, chahe badge ho ya na.
                    Warna sirf ek card ka content neeche shift ho jaata hai
                    aur chaaron cards ki lines align nahi hoti. */}
                <span className={`trb ${t.b ? "" : "ghost"}`}>{t.b || "\u00A0"}</span>
                <span className="trico"><Ico /></span>
                <p className="trn">{t.n}</p>
                <p className="trtag">{t.tag}</p>
                <p className="trp">
                  {t.p}
                  {t.sf ? <span className="trsf">{t.sf}</span> : null}
                </p>
                <p className="trs">{t.s}</p>
                <p className="trgst">{t.gst}</p>
                <p className="trd">{t.d}</p>
                <ul className="trl">
                  {t.f.map((x: string) => (
                    <li key={x}>
                      <Icon.check />
                      {x}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`btn ${t.h ? "btn-p" : "btn-g"}`}>
                  {t.c}
                </a>
                <p className="trmini">{t.note}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

/* --------------------------------------------------------------- FORM */
export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState(false);
  const [busy, setBusy] = useState(false);
  const [need, setNeed] = useState("");
  const [budget, setBudget] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const needs = ["AI agent", "Automation", "Web app", "MVP", "Not sure yet"];
  const budgets = ["Under ₹50k", "₹50k–1.5L", "₹1.5L–3L", "₹3L+"];

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    let ok = true;
    f.querySelectorAll<HTMLInputElement>("[required]").forEach((el) => {
      const bad =
        !el.value.trim() ||
        (el.type === "email" && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(el.value));
      el.classList.toggle("err", bad);
      if (bad) ok = false;
    });
    if (!ok) {
      f.querySelector<HTMLElement>(".err")?.focus();
      return;
    }

    const d = Object.fromEntries(new FormData(f)) as Record<string, string>;

    /* Formspree ID na ho toh mailto fallback. Kaam karega, lekin mail client
       na hone par aadhe log drop ho jaate hain — isliye ID zaroor daalna. */
    if (!site.formspreeId) {
      const body = `Name: ${d.name}\nEmail: ${d.email}\nCompany: ${d.company || "-"}\nWhatsApp: ${d.phone || "-"}\nNeed: ${need || "not specified"}\nBudget: ${budget || "not specified"}\n\n${d.msg}`;
      location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
        `Project enquiry — ${d.company || d.name}`
      )}&body=${encodeURIComponent(body)}`;
      setSent(true);
      return;
    }

    setBusy(true);
    try {
      const r = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...d,
          need,
          budget,
          _subject: `Project enquiry — ${d.company || d.name}`,
        }),
      });
      if (!r.ok) throw new Error();
      setSent(true);
      f.reset();
      setNeed("");
      setBudget("");
    } catch {
      setErr(true);
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="cform" ref={formRef} onSubmit={onSubmit} noValidate>
      <p className="cfh">Tell us what is slow</p>

      <div className="frow2">
        <label className="fld">
          <span>Name</span>
          <input name="name" type="text" placeholder="Your name" required
            onInput={(e) => e.currentTarget.classList.remove("err")} />
        </label>
        <label className="fld">
          <span>Work email</span>
          <input name="email" type="email" placeholder="you@company.com" required
            onInput={(e) => e.currentTarget.classList.remove("err")} />
        </label>
      </div>

      <div className="frow2">
        <label className="fld">
          <span>Company</span>
          <input name="company" type="text" placeholder="Company name" />
        </label>
        <label className="fld">
          <span>
            WhatsApp <em>optional</em>
          </span>
          <input name="phone" type="tel" placeholder="+91" />
        </label>
      </div>

      <div className="fld">
        <span>What do you need?</span>
        <div className="chips">
          {needs.map((v) => (
            <button
              key={v}
              type="button"
              className={`chip ${need === v ? "on" : ""}`}
              onClick={() => setNeed(need === v ? "" : v)}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      <div className="fld">
        <span>Rough budget</span>
        <div className="chips">
          {budgets.map((v) => (
            <button
              key={v}
              type="button"
              className={`chip ${budget === v ? "on" : ""}`}
              onClick={() => setBudget(budget === v ? "" : v)}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      <label className="fld">
        <span>The problem, in a line or two</span>
        <textarea name="msg" rows={3} required
          placeholder="Our support team answers the same 40 questions every day..."
          onInput={(e) => e.currentTarget.classList.remove("err")} />
      </label>

      <button type="submit" className="btn btn-p cbtn" disabled={busy}>
        {busy ? "Sending..." : sent ? "Sent" : "Send and book a slot"}
        {!busy && !sent && <Icon.arrow />}
      </button>

      <p className="cnote">
        No sales sequence. One reply from the person who would build it.
      </p>

      {sent && !err && (
        <p className="cok">Thanks — we will reply within one working day.</p>
      )}
      {err && (
        <p className="cok" style={{ color: "#ff8b95", background: "rgba(255,95,109,.1)", borderColor: "rgba(255,95,109,.24)" }}>
          Could not send — please WhatsApp us on {site.contact.whatsappDisplay}.
        </p>
      )}
    </form>
  );
}