import { site, waLink } from "@/lib/site";
import {
  hero, headline, techStack, work, services, secondaryServices,
 industries, process as steps, why, faq,
} from "@/lib/content";
import { Icon } from "./icons";
import {
  Reveal, Counter, HeroVisual, Magnetic, Timeline,
  SavingsBars, PricingTiers, ContactForm,
} from "./interactive";

/* Shared centered heading — har section isse use karta hai taaki eyebrow,
   title aur lede ka spacing poori site me ek jaisa rahe. */
function Head({ eyebrow, title, lede }: { eyebrow: string; title: string; lede?: string }) {
  return (
    <Reveal className="ctrw">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="h2">{title}</h2>
      {lede ? <p className="lede">{lede}</p> : null}
    </Reveal>
  );
}

/* ------------------------------------------------------------------ HERO */
export function Hero() {
  return (
    <section className="hero">
      <div className="wrap hgrid">
        <div className="hleft">
          <span className="trust glass">
            <span className="tdot" />
            {hero.badge}
          </span>

          <h1>
            {/* sr-only me pura text taaki screen readers ko tuta hua na mile */}
            <span className="sr-only">{headline.map((w) => w.text).join(" ")}</span>
            <span aria-hidden>
              {/* Headline lines me toota hai. Har word apne mask ke andar upar
                  slide karta hai — .w overflow-hidden hai, .ln line banata hai. */}
              {headline.reduce<(typeof headline)[number][][]>((lines, w) => {
                lines[lines.length - 1].push(w);
                if (w.br) lines.push([]);
                return lines;
              }, [[]]).map((line, li) => (
                <span className="ln" key={li}>
                  {line.map((w, wi) => (
                    <span className="w" key={wi}>
                      <span
                        className={w.accent ? "grad" : undefined}
                        style={{ animationDelay: `${0.05 + (li * 3 + wi) * 0.06}s` }}
                      >
                        {w.text}
                      </span>
                      {wi < line.length - 1 ? "\u00A0" : ""}
                    </span>
                  ))}
                </span>
              ))}
            </span>
          </h1>

          <p className="hl">{hero.lede}</p>

          <div className="hb">
            <Magnetic href="#contact">
              Book Free Strategy Call <Icon.arrow />
            </Magnetic>
           <Magnetic href={site.socials.portfolio} variant="g" external>
              Explore Our Work
              <span className="pico">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </Magnetic>
          </div>

          <div className="hproof">
            <div className="hgbadge">
              <span className="hgi"><Icon.shield size={17} /></span>
              <span>
                <b>{hero.guarantee.title}</b>
                <em>{hero.guarantee.body}</em>
              </span>
            </div>
            <div className="hmini">
              {hero.mini.map((m, i) => (
                <div key={i}>
                  <span className="hmv">
                    {"value" in m && m.value !== undefined
                      ? <Counter to={m.value as number} suffix={m.suffix ?? ""} />
                      : (m as { text: string }).text}
                  </span>
                  <span className="hml">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <HeroVisual />
      </div>

      <div className="wrap">
        <Reveal d={2} className="tstrip">
          <span className="tsl">Built with the stack your engineers already trust</span>
          <div className="tsg">
            {techStack.map((t) => (
              <span key={t} className="tsi">{t}</span>
            ))}
          </div>
        </Reveal>

        <Reveal d={2} className="hstats">
          {hero.values.map((v) => {
            const Ico = Icon[v.icon as keyof typeof Icon];
            return (
              <div key={v.title}>
                <span className="hsi"><Ico size={17} /></span>
                <span>
                  <b>{v.title}</b>
                  <em>{v.body}</em>
                </span>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- SERVICES */
export function Services() {
  const half = Math.ceil(services.length / 2);
  const cols = [services.slice(0, half), services.slice(half)];

  const card = (v: (typeof services)[number], i: number) => {
    const Ico = Icon[v.i as keyof typeof Icon];
    return (
      <Reveal key={v.h} d={((i % 3) + 1) as 1 | 2 | 3} pop>
        <article className="sc glass shine">
          <span className="si"><Ico /></span>
          <span className="scb">
            <span className="sh">{v.h}</span>
            <span className="stag2">{v.t}</span>
            <p className="sp">{v.p}</p>
            <span className="stack">
              {v.tags.map((t) => <span key={t} className="stk">{t}</span>)}
            </span>
            <p className="sm">{v.m}</p>
          </span>
        </article>
      </Reveal>
    );
  };

  return (
    <section className="svc" id="services">
      <div className="wrap">
        <Head
          eyebrow="Services"
          title="We build AI products businesses actually use"
          lede="We design and develop AI agents, workflow automation, AI SaaS applications, and custom web software that help businesses automate operations, improve efficiency, and scale faster."
        />

        <div className="hub">
          <div className="hubcol">{cols[0].map(card)}</div>

          <div className="hubcore">
            <span className="hbeam" />
            {[4, 3, 2, 1].map((n) => (
              <span key={n} className={`hring h${n === 2 ? "2r" : n}`} />
            ))}
            {[1, 2, 3].map((n) => (
              <span key={n} className={`hwave w${n}`} />
            ))}
            <span className="hlogo">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#04120e" strokeWidth="1.7">
                <path d="M12 2 3 7v10l9 5 9-5V7z" />
                <path d="m3 7 9 5 9-5M12 12v10" />
              </svg>
            </span>
            <span className="hcap">{site.name}</span>

            <svg className="hlines" viewBox="0 0 380 640" fill="none" aria-hidden>
              {[96, 320, 544].map((y) => (
                <path key={`l${y}`} className="hl-p" d={`M190 320 C130 320 108 ${y} 8 ${y}`} />
              ))}
              {[96, 320, 544].map((y) => (
                <path key={`r${y}`} className="hl-p" d={`M190 320 C250 320 272 ${y} 372 ${y}`} />
              ))}

              {/* travelling packets — left side core ki taraf aate hain (input),
                  right side bahar jaate hain (output). Direction deliberate hai. */}
              {[96, 320, 544].map((y, i) => (
                <circle key={`pl${y}`} className="hpk" r="3">
                  <animateMotion
                    dur="3.2s"
                    begin={`${i * 0.5}s`}
                    repeatCount="indefinite"
                    keyPoints="1;0"
                    keyTimes="0;1"
                    calcMode="linear"
                    path={`M190 320 C130 320 108 ${y} 8 ${y}`}
                  />
                </circle>
              ))}
              {[96, 320, 544].map((y, i) => (
                <circle key={`pr${y}`} className="hpk o" r="3">
                  <animateMotion
                    dur="3.2s"
                    begin={`${1.5 + i * 0.5}s`}
                    repeatCount="indefinite"
                    path={`M190 320 C250 320 272 ${y} 372 ${y}`}
                  />
                </circle>
              ))}
            </svg>
          </div>

          <div className="hubcol">{cols[1].map(card)}</div>
        </div>

        <div className="sec2wrap">
          <p className="sec2h">And the product around it</p>
          <div className="sgrid3">
            {secondaryServices.map((v, i) => {
              const Ico = Icon[v.i as keyof typeof Icon];
              return (
                <Reveal key={v.h} d={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                  <div className="sc2 glass">
                    <span className="si2"><Ico size={16} /></span>
                    <span className="s2t">
                      <b>{v.h}</b>
                      <em>{v.p}</em>
                    </span>
                    <span className="s2m">{v.m}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ WORK */
/* ---------------------------------------------------------- CASE STUDIES */
/**
 * Har card problem → solution → outcome dikhata hai, sirf project ka naam
 * nahi. Visitor problem statement me apna business pehchanta hai, aur
 * outcome wo cheez hai jo call book karwati hai.
 */
export function Work() {
  return (
    <section className="wk" id="work">
      <div className="wrap">
        <Head
          eyebrow="Case studies"
          title="Problems we have already solved"
          lede="A mix of client projects and systems built to prove an approach works. Every one of them runs — click through and try it."
        />

        <div className="wkg">
          {work.map((w, i) => {
            const Ico = Icon[w.ic as keyof typeof Icon];
            return (
              <Reveal key={w.h} d={(i + 1) as 1 | 2 | 3} pop>
                <article className="wc glass shine">
                  <div className="wcv">
                    <div className="wci"><Ico /></div>
                  </div>

                  <div className="wcb">
                    <span className="wctype">{w.type}</span>
                    <h3 className="wch">{w.h}</h3>

                    <div className="cs">
                      <div className="csrow">
                        <span className="cslbl bad">Problem</span>
                        <p className="cstxt">{w.problem}</p>
                      </div>
                      <div className="csrow">
                        <span className="cslbl">Solution</span>
                        <p className="cstxt">{w.solution}</p>
                      </div>
                      <div className="csrow out">
                        <span className="cslbl good">Outcome</span>
                        <p className="cstxt strong">{w.outcome}</p>
                      </div>
                    </div>

                    <div className="wcs">
                      {w.stack.map((t) => <span key={t}>{t}</span>)}
                    </div>

                    <div className="wcf">
                      {w.link ? (
                        <a className="wclink" href={w.link} target="_blank" rel="noopener">
                          {w.cta} <Icon.arrow size={13} />
                        </a>
                      ) : (
                        <span className="wclink" style={{ color: "var(--fnt)" }}>
                          Case study soon
                        </span>
                      )}
                      <a className="wcask" href="#contact">
                        Similar problem? <b>Talk to us</b>
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p className="wknote">
            More on the{" "}
            <a href={site.socials.portfolio} target="_blank" rel="noopener">
              full portfolio
            </a>{" "}
            →
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- FOUNDER */
export function Founder() {
  return (
    <section className="fnd" id="about">
      <div className="wrap">
        <Reveal className="fndin glass gbd">
          <div className="fndl">
            <div className="fndph">
              <span className="fndinit">{site.founder.initials}</span>
              <span className="fndring" />
            </div>
            <div className="fndsoc">
              <a href={site.socials.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="fnds">
                <Icon.linkedin />
              </a>
              <a href={site.socials.instagram} target="_blank" rel="noopener" aria-label="Instagram" className="fnds">
                <Icon.instagram />
              </a>
              <a href={site.socials.portfolio} target="_blank" rel="noopener" aria-label="Portfolio" className="fnds">
                <Icon.globe />
              </a>
            </div>
          </div>

          <div className="fndr">
            <span className="eyebrow">Who you work with</span>
            <h3 className="fndh">{site.founder.name}</h3>
            <p className="fndrole">{site.founder.role}</p>
            <p className="fndp">
              I build AI agents, automation, and the web apps around them. Nexora is
              small on purpose — when you hire us, you talk to the person writing the
              code, not an account manager passing messages along.
            </p>
            <p className="fndp">
              That is the whole pitch. Fixed price agreed upfront, demos every few days
              on WhatsApp, and code that ships to your repository. If the first prototype
              does not convince you, you walk away without paying.
            </p>
            <div className="fndcta">
              <Magnetic href="#contact">Talk to me directly</Magnetic>
              <Magnetic href={waLink("Hi Sonu, I saw the Nexora site")} variant="g" external>
                WhatsApp me
              </Magnetic>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ INDUSTRIES */
/* ------------------------------------------------------------ INDUSTRIES */
/**
 * Har card teen layers dikhata hai: problems → solutions → outcome.
 * Problems pehle isliye hain kyunki visitor unme apna business pehchanta
 * hai; solution uske baad zyada relevant lagta hai.
 */
export function Industries() {
  return (
    <section className="mods" id="industries">
      <div className="wrap">
        <Head
          eyebrow="Industries"
          title="Built around how your business actually runs"
          lede="Different industries break in different places. These are the ones we know well enough to spot the bottleneck on the first call."
        />

        <div className="indgrid">
          {industries.map((m, i) => {
            const Ico = Icon[m.ic as keyof typeof Icon];
            return (
              <Reveal key={m.n} d={((i % 3) + 1) as 1 | 2 | 3} pop>
                <div className="ic glass shine">
                  <div className="ichead">
                    <span className="icico"><Ico /></span>
                    <span className="ictx">
                      <span className="ich">{m.n}</span>
                      <span className="icr">{m.r}</span>
                    </span>
                  </div>

                  <div className="icsec">
                    <p className="icslbl bad">What usually breaks</p>
                    <ul className="icpl">
                      {m.problems.map((p: string) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="icsec">
                    <p className="icslbl">What we build</p>
                    <ul className="icdl">
                      {m.solutions.map((x: string[]) => (
                        <li key={x[0]}>
                          <span className="dck" />
                          <span>
                            {x[0]}
                            <em>{x[1]}</em>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="icfoot">
                    <span className="icprice">{m.pr}</span>
                    <span className="icres">{m.res}</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- PROCESS */
/* --------------------------------------------------------------- PROCESS */
/**
 * Timeline pehle, uske turant baad trust grid — dono ek hi section me.
 *
 * Alag "Why choose us" section hata diya kyunki wo timeline ke ekdum baad
 * aata tha aur wahi baat keh raha tha. Ek saath rakhne se "kaise kaam hota
 * hai" aur "kyun bharosa karein" ek hi saans me padha jaata hai.
 */
export function Process() {
  return (
    <section className="pr" id="process">
      <div className="wrap">
        <Head
          eyebrow="How it goes"
          title="Two weeks. Four checkpoints. No surprises."
          lede="You see working software on day four. Every stage ends with something you can open and click, not a status update."
        />

        <Timeline>
          <div className="pgd">
            {steps.map((s, i) => (
              <Reveal key={s.n} d={(i + 1) as 1 | 2 | 3 | 4}>
                <div className="st glass shine">
                  <span className="stnrow">
                    <span className="stn">{s.n}</span>
                    <span className="stwhen">{s.w}</span>
                  </span>
                  <h3 className="sth">{s.h}</h3>
                  <p className="stp">{s.p}</p>
                  {/* Har step ka concrete deliverable — "status update" nahi */}
                  <span className="stout">
                    <span className="stoi" />
                    {s.o}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="tlnote">
            <span className="tlni"><Icon.shield size={15} /></span>
            Stop after checkpoint two and pay nothing. That is the whole guarantee —
            no notice period, no partial invoice.
          </Reveal>
        </Timeline>

        {/* Trust grid — timeline ke turant baad, isliye "process theek hai,
            lekin bharosa kyun karein" wala sawal wahin answer ho jaata hai */}
        <div className="trustwrap">
          <p className="trusth">What you get either way</p>
          <div className="trustg">
            {why.map((w: string[], i: number) => {
              const Ico = Icon[w[0] as keyof typeof Icon];
              return (
                <Reveal key={w[1]} d={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                  <div className="tc glass shine">
                    <span className="tci"><Ico size={19} /></span>
                    <h3 className="tch">{w[1]}</h3>
                    <p className="tcp">{w[2]}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
/* --------------------------------------------------------------- BANNER */
export function Banner({
  title, body, points, cta,
}: {
  title: string; body: string; points: string[]; cta: string;
}) {
  return (
    <section className="bnr">
      <div className="wrap">
        <Reveal className="bnrin glass gbd">
          <div>
            <h3 className="bnrh">{title}</h3>
            <p className="bnrp">{body}</p>
            <div className="bnrl">
              {points.map((p) => <span key={p}>{p}</span>)}
            </div>
          </div>
          <a href="#contact" className="btn btn-p">
            {cta} <Icon.arrow />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- PRICING */
export function Pricing() {
  return (
    <section className="pz" id="pricing">
      <div className="wrap">
        <Head
          eyebrow="Pricing"
          title="Priced by outcome, not by hour"
          lede="Every product has its own fixed price, agreed before a line of code exists. Not sure which one you need? The free scoping call sorts that out."
        />

        <PricingTiers />

        <SavingsBars>
          <div className="savein">
            <span className="savei"><Icon.rupee size={19} /></span>
            <div className="savetx">
              <b>One product costs less than a month of a senior hire</b>
              <em>
                An AI engineer in India runs ₹15–20L a year before tools and ramp-up.
                Most teams need one system built well, once.
              </em>
            </div>
          </div>
          <div className="savecmp">
            <div className="scb">
              <span className="scl">In-house hire, year one</span>
              <span className="scv bad" data-numeric>₹18,00,000</span>
              <span className="scbar"><i className="bad" style={{ width: "100%" }} /></span>
            </div>
            <div className="scb">
              <span className="scl">A Nexora AI agent</span>
              <span className="scv good" data-numeric>₹85,000</span>
              <span className="scbar"><i className="good" style={{ width: "4.7%" }} /></span>
            </div>
            <span className="scnote">Same outcome, under 5% of the annual cost</span>
          </div>
        </SavingsBars>

        <div className="payrow">
          <span className="payi"><Icon.card />UPI · NEFT · Razorpay</span>
          <span className="payi"><Icon.doc />GST invoice · 18% extra</span>
          <span className="payi"><Icon.rupee />40% upfront · 60% on delivery</span>
          <span className="payi"><Icon.clock />International billed in USD</span>
        </div>

        <Reveal className="incl">
          <p className="inclh">Every engagement includes, at no extra cost</p>
          <div className="inclg">
            {[
              "Free scoping call and written plan",
              "Code in your own repository",
              "Deployed to your infrastructure",
              "Handover walkthrough with your team",
              "Direct WhatsApp line, no ticket queue",
              "No lock-in, cancel any time",
            ].map((t) => (
              <span key={t} className="ini"><i />{t}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------- FAQ */
export function Faq() {
  return (
    <section className="fq" id="faq">
      <div className="wrap">
        <Head eyebrow="Questions" title="Frequently asked questions" />
        <div className="fqg">
          {faq.map((f: string[], i: number) => (
            <details key={f[0]} open={i === 0} className="glass">
              <summary>
                {f[0]}
                <Icon.plus />
              </summary>
              <p>{f[1]}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- CONTACT */
export function Contact() {
  return (
    <section className="cta" id="contact">
      <div className="wrap">
        <Reveal className="ctain glass gbd">
          <span className="conic" />
          <div className="cgrid">
            <div className="cleft">
              <span className="eyebrow">Next step</span>
              <h2>Bring the problem. We will bring the plan.</h2>
              <p className="lede">
                Thirty minutes, no pitch deck. Describe what is slow or manual in your
                business and you will leave with a scoped approach and a rough number —
                whether or not you work with us.
              </p>

              <ul className="cwhat">
                {[
                  "A written scope you can take to anyone",
                  "A realistic number, not a range",
                  "An honest answer if AI is the wrong tool",
                ].map((t) => (
                  <li key={t}><span className="cck">✓</span>{t}</li>
                ))}
              </ul>

              <div className="cdirect">
                <a href={waLink()} target="_blank" rel="noopener" className="cdl">
                  <span className="cdi wa"><Icon.whatsapp /></span>
                  <span>
                    <b>WhatsApp</b>
                    <em>Fastest route · usually replies within an hour</em>
                  </span>
                </a>

                <a href={`mailto:${site.contact.email}`} className="cdl">
                  <span className="cdi em"><Icon.mail /></span>
                  <span>
                    <b>{site.contact.email}</b>
                    <em>For briefs, NDAs, and GST paperwork</em>
                  </span>
                </a>

                <a
                  href={waLink("Hi Sonu, can we do a 30-min call?")}
                  target="_blank"
                  rel="noopener"
                  className="cdl"
                >
                  <span className="cdi cal"><Icon.calendar /></span>
                  <span>
                    <b>Book a 30-minute call</b>
                    <em>{site.contact.hours} · over WhatsApp or Meet</em>
                  </span>
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- FOOTER */
export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fg">
          <div>
           <a href="#top" className="logo">
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
            <p className="fp2">
              An AI engineering studio in {site.contact.city}, building agents,
              automation, and the products around them.
            </p>
            <div className="fbadges">
              <span className="fbg"><i />Built in India</span>
              <span className="fbg"><i />GST registered</span>
            </div>
          </div>

          <div>
            <p className="fh2">Services</p>
            <div className="fl2">
              <a href="#services">AI agents</a>
              <a href="#services">Automation</a>
              <a href="#services">Custom AI</a>
              <a href="#services">Web apps</a>
            </div>
          </div>

          <div>
            <p className="fh2">Company</p>
            <div className="fl2">
             <a href="#work">Case studies</a>
              <a href="#industries">Industries</a>
              <a href="#process">Process</a>
              <a href="#about">Meet the founder</a>
            </div>
          </div>

          <div>
            <p className="fh2">Elsewhere</p>
            <div className="fl2">
              <a href={site.socials.linkedin} target="_blank" rel="noopener">LinkedIn</a>
              <a href={site.socials.instagram} target="_blank" rel="noopener">Instagram</a>
              <a href={site.socials.portfolio} target="_blank" rel="noopener">Portfolio</a>
              <a href={`mailto:${site.contact.email}`}>Email</a>
              <a href={waLink()} target="_blank" rel="noopener">WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="fb">
          <span>
            © {new Date().getFullYear()} {site.legalName}. {site.contact.city}, India.
          </span>
          <span>Privacy · Terms</span>
        </div>
      </div>
    </footer>
  );
}