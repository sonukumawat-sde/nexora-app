"use client";

import { useState } from "react";
import { buildTabs } from "@/lib/content";
import { Icon } from "./icons";
import { Counter } from "./interactive";

/**
 * "Inside the build" — tabs ke saath.
 *
 * Pehle teen alternating blocks the, jisse section bahut lamba ho jaata tha
 * aur visitor teesre mockup tak pahunchta hi nahi tha. Ab active demo bada
 * rehta hai, explanation uske saath, aur baaki ek click door.
 *
 * Mockups deliberately abstract nahi hain: chat me asli ticket, pipeline me
 * asli nodes, dashboard me asli metrics. "We build AI" likhne se ye kaafi
 * zyada convincing hai.
 */

/* ---------------------------------------------------- 1. AGENT CHAT MOCK */
function AgentMock() {
  return (
    <div className="fviz glass gbd">
      <div className="vzhead">
        <span className="vzdot" />
        <span className="vztt">support-agent · live</span>
        <span className="vzchip">0.94</span>
      </div>

      <div className="mkw">
        <div className="srcrow">
          {["Zendesk", "Stripe", "Order DB"].map((s) => (
            <span key={s} className="src">
              <i />
              {s}
            </span>
          ))}
        </div>

        <div className="chat-r">
          <span className="av u">U</span>
          <span className="bub">I was billed twice this month</span>
        </div>

        <div className="chat-r ai-r">
          <span className="av b">N</span>
          <span className="bub ai">
            Found duplicate charge on order #4471. Refund issued — you&rsquo;ll see it in
            2 business days.
            <span className="conf">
              <span className="confl">
                <i style={{ width: "94%" }} />
              </span>
              confidence 0.94
            </span>
          </span>
        </div>

        <div className="chat-r">
          <span className="av u">U</span>
          <span className="bub">Can you email me confirmation?</span>
        </div>

        <div className="chat-r ai-r">
          <span className="av b">N</span>
          <span className="bub ai">
            <span className="typ">
              <i />
              <i />
              <i />
            </span>
          </span>
        </div>
      </div>

      <div className="vzfoot">
        {["CRM", "Docs", "Postgres"].map((t) => (
          <span key={t} className="vztool">
            <i className="tdt" />
            {t}
          </span>
        ))}
        <span className="vzhand">Handed to human: 6%</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------- 2. PIPELINE FLOW MOCK */
function PipelineMock() {
  return (
    <div className="fviz glass gbd">
      <div className="vzhead">
        <span className="vzdot" />
        <span className="vztt">intake-pipeline</span>
        <span className="vzchip ok">running</span>
      </div>

      <div className="pipe">
        <svg className="pipesvg" viewBox="0 0 360 200" fill="none">
          <path id="qA" className="dsh" d="M70 42 H160 Q176 42 176 58 V88" />
          <path id="qB" className="dsh" d="M70 100 H176" />
          <path id="qC" className="dsh" d="M70 158 H160 Q176 158 176 142 V112" />
          <path id="qD" className="dsh" d="M244 100 H300" />
          <path className="dsh" d="M244 100 H272 Q284 100 284 88 V56 H300" />
          <path className="dsh" d="M244 100 H272 Q284 100 284 112 V144 H300" />

          <circle className="pdot" r="3.4">
            <animateMotion dur="2.6s" repeatCount="indefinite">
              <mpath href="#qA" />
            </animateMotion>
          </circle>
          <circle className="pdot" r="3.4">
            <animateMotion dur="2.6s" begin="0.9s" repeatCount="indefinite">
              <mpath href="#qB" />
            </animateMotion>
          </circle>
          <circle className="pdot" r="3.4">
            <animateMotion dur="2.6s" begin="1.7s" repeatCount="indefinite">
              <mpath href="#qC" />
            </animateMotion>
          </circle>
          <circle className="pdot out" r="3.4">
            <animateMotion dur="1.5s" begin="1.1s" repeatCount="indefinite">
              <mpath href="#qD" />
            </animateMotion>
          </circle>
        </svg>

        <span className="pn pn1">
          <i className="pni">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <path d="M7 9h10M7 13h6" />
            </svg>
          </i>
          web form
        </span>

        <span className="pn pn2">
          <i className="pni">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </i>
          inbox
        </span>

        <span className="pn pn3">
          <i className="pni">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12a8 8 0 0 1-8 8H7l-4 3v-5a8 8 0 0 1 8-11h2a8 8 0 0 1 8 8z" />
            </svg>
          </i>
          whatsapp
        </span>

        <span className="pn pcore">
          <i className="pni">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
            </svg>
          </i>
          classify + route<em>4 rules</em>
        </span>

        <span className="pn po1">CRM</span>
        <span className="pn po2">Slack</span>
        <span className="pn po3">Sheet</span>
      </div>

      <div className="vzfoot">
        <span className="vzrun">
          Runs today{" "}
          <b>
            <Counter to={47} />
          </b>
        </span>
        <span className="vzrun ok">
          Errors <b>0</b>
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------- 3. DASHBOARD MOCK */
function DashboardMock() {
  const bars = [34, 48, 40, 62, 54, 76, 68, 90, 82, 96];

  return (
    <div className="fviz glass gbd">
      <div className="vzhead">
        <span className="vzdot" />
        <span className="vztt">admin · overview</span>
        <span className="vzchip">Last 30d</span>
      </div>

      <div className="dashw">
        <div className="kpi">
          <div className="kp">
            <b>
              <Counter to={340} />
            </b>
            <span>runs / day</span>
          </div>
          <div className="kp">
            <b>
              <Counter to={94} suffix="%" />
            </b>
            <span>accuracy</span>
          </div>
          <div className="kp">
            <b>₹4.2k</b>
            <span>monthly cost</span>
          </div>
        </div>

        <div className="chartw">
          <svg className="grid2" viewBox="0 0 300 100" preserveAspectRatio="none">
            <line x1="0" y1="25" x2="300" y2="25" />
            <line x1="0" y1="50" x2="300" y2="50" />
            <line x1="0" y1="75" x2="300" y2="75" />
          </svg>
          <div className="bars">
            {bars.map((h, i) => (
              <span
                key={i}
                className="bar"
                style={{ height: `${h}%`, animationDelay: `${i * 0.07}s` }}
              />
            ))}
          </div>
        </div>

        <div className="legend">
          <span>
            <i className="lg1" />
            Automated
          </span>
          <span>
            <i className="lg2" />
            Escalated
          </span>
          <span className="lgtr">Trending up 18%</span>
        </div>
      </div>
    </div>
  );
}

const mocks = [AgentMock, PipelineMock, DashboardMock];

/* --------------------------------------------------------------- SECTION */
export function InsideTheBuild() {
  const [active, setActive] = useState(0);
  const tab = buildTabs[active];
  const Mock = mocks[active];

  return (
    <section className="feat" id="features">
      <div className="wrap">
        <div className="ctrw">
          <span className="eyebrow">Inside the build</span>
          <h2 className="h2">What it actually looks like when it runs</h2>
          <p className="lede">
            Most AI projects stall between the prototype and production. We start at the
            boring part — your data, your tools, your edge cases — so the thing actually
            runs on Monday morning.
          </p>
        </div>

        {/* Tabs */}
        <div className="btabs" role="tablist" aria-label="What we build">
          {buildTabs.map((t, i) => {
            const Ico = Icon[t.icon as keyof typeof Icon];
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={active === i}
                className={`btab ${active === i ? "on" : ""}`}
                onClick={() => setActive(i)}
              >
                <span className="btabi"><Ico size={16} /></span>
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Active tab: explanation + live mockup side by side.
            key={active} se React poora block remount karta hai, jisse
            fade-in animation har switch pe dobara chalti hai. */}
        <div className="bpanel" key={active}>
          <div className="ftxt">
            <span className="eyebrow">{tab.eyebrow}</span>
            <h3 className="fh">{tab.h}</h3>
            <p className="fp">{tab.p}</p>
            <ul className="fl">
              {tab.points.map((t) => (
                <li key={t}>
                  <span className="fck">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <Mock />
        </div>
      </div>
    </section>
  );
}