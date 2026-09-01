import { Architecture } from "@/components/Architecture";
import { ArrowUpRight, Play, XLogo } from "@/components/icons";
import { MediaFrame } from "@/components/MediaFrame";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { ScenarioCards } from "@/components/ScenarioCards";
import { SectionHeader } from "@/components/SectionHeader";
import { SignupForm } from "@/components/SignupForm";
import { progress } from "@/data/progress";
import { roadmap } from "@/data/roadmap";
import { siteConfig } from "@/data/siteConfig";
import Image from "next/image";

const ideaSteps = [
  ["01", "Capture", "A tap or hold captures speech, visual context, or both as one interaction."],
  ["02", "Understand", "EDITH Core combines the request with vision, memory, and relevant context."],
  ["03", "Plan", "An agent selects permissioned tools and structures the steps needed to help."],
  ["04", "Act", "EDITH answers directly or completes a connected action—with confirmation when it matters."],
];

const workingTools = ["Vision", "Web search", "Memory", "Notes + tasks", "Translation", "Gmail", "Calendar", "Swiggy", "Codex"];

export default async function Home({ searchParams }: { searchParams: Promise<{ investor?: string }> }) {
  const { investor } = await searchParams;
  const investorMode = investor === "true";
  return (
    <main id="top">
      <Navbar />

      <section className="hero shell">
        <div className="hero-copy">
          <Reveal><p className="status-pill"><span /> EDITH Core · Working prototype · Currently building</p></Reveal>
          <Reveal delay={.05}><h1>EDITH</h1></Reveal>
          <Reveal delay={.1}><p className="hero-title">The interface for AI agents<br />in the real world.</p></Reveal>
          <Reveal delay={.15}><p className="hero-description">See. Hear. Remember. Delegate. Act. EDITH combines a context-aware wearable with an orchestration layer that routes intent to the right agents and connected services.</p></Reveal>
          <Reveal delay={.2} className="hero-actions"><a href="#follow" className="button button-primary">Join early access <ArrowUpRight className="icon" /></a><a href="#demo" className="button button-ghost"><Play className="icon" />Watch the 5-min demo</a></Reveal>
          <Reveal delay={.25}><p className="made-in">Built from India. Designed for everywhere.</p></Reveal>
        </div>
        <div className="hero-visual"><MediaFrame media={siteConfig.media.hero} label="AI-generated EDITH concept enclosure visualization" notice="AI-GENERATED CONCEPT · NOT CURRENT HARDWARE" /></div>
      </section>

      <section className="problem section shell" id="vision">
        <SectionHeader eyebrow="01 / THE PROBLEM" title="We have powerful agents. We still use them like apps." copy="Users open separate interfaces, reconstruct the situation as a prompt, and manually coordinate the steps between an answer and an outcome." />
        <div className="translation-flow">
          <Reveal className="flow-card"><span>01</span><strong>Experience</strong><p>The user sees, hears or encounters something.</p></Reveal>
          <div className="flow-arrow">→</div>
          <Reveal className="flow-card" delay={.08}><span>02</span><strong>Translate</strong><p>The user manually reconstructs that context as a prompt.</p></Reveal>
          <div className="flow-arrow">→</div>
          <Reveal className="flow-card" delay={.16}><span>03</span><strong>Operate</strong><p>The user moves between apps to turn the answer into an action.</p></Reveal>
        </div>
        <Reveal className="problem-statement"><p>Mobile apps needed the smartphone. AI agents need their own interface.</p><strong>EDITH connects context, orchestration, and action in one interaction.</strong></Reveal>
      </section>

      <section className="idea section" id="how-it-works">
        <div className="shell">
          <SectionHeader eyebrow="02 / HOW IT WORKS" title="From a glance to a completed task." />
          <Reveal className="big-flow" aria-label="Physical world to action flow">
            {[
              ["WORLD", "Physical world"], ["E", "EDITH Core"], ["AI", "Agents + tools"], ["↗", "Answer or action"],
            ].map(([mark, label], index) => <div className="big-flow-item" key={label}><span>{mark}</span><strong>{label}</strong>{index < 3 && <i><b /></i>}</div>)}
          </Reveal>
          <div className="idea-grid">
            {ideaSteps.map(([number, title, detail], index) => <Reveal className="idea-card" delay={index * .06} key={number}><span>{number}</span><h3>{title}</h3><p>{detail}</p></Reveal>)}
          </div>
        </div>
      </section>

      <section className="examples section shell">
        <SectionHeader eyebrow="03 / WORKING USE CASES" title="What EDITH can do today." copy="Vision, memory, productivity, commerce, and multi-agent orchestration through the same wearable interaction." />
        <Reveal><ScenarioCards /></Reveal>
      </section>

      <section className="prototype section" id="prototype">
        <div className="shell">
          <SectionHeader eyebrow="04 / WORKING PROTOTYPE" title="EDITH Core — context in, outcome out." copy="The current prototype combines wearable capture, multimodal reasoning, memory, agent planning, permissioned tools, confirmations, and spoken responses in one system." />
          <div id="demo"><MediaFrame media={siteConfig.media.prototype} variant="demo" label="5-min EDITH prototype demo" /></div>
          <div className="capabilities">
            {[["01", "Multimodal perception", "Captures speech, visual context, or both through the wearable."], ["02", "Memory + context", "Recalls useful preferences, facts, and recent interactions when relevant."], ["03", "Agent planning", "Selects validated tools and coordinates multi-step requests across domains."], ["04", "Safe connected action", "Searches, drafts, schedules, orders, books, or delegates—with confirmation where required."]].map(([num, title, copy]) => <Reveal className="capability" key={num}><span>{num}</span><h3>{title}</h3><p>{copy}</p></Reveal>)}
          </div>
          <Reveal className="working-stack"><p>WORKING IN THE CURRENT PROTOTYPE</p><div>{workingTools.map((tool) => <span key={tool}>{tool}<i /></span>)}</div></Reveal>
          <Architecture />
        </div>
      </section>

      {investorMode && (
        <section className="investor-mode shell" aria-label="Investor overview">
          <div className="investor-label"><span /> INVESTOR VIEW ENABLED</div>
          <div className="investor-grid">
            {[["Current stage", "Working multimodal agent prototype / early validation"], ["What we are testing", "Whether wearable context plus safe actions creates new high-frequency AI behaviours."], ["Near-term milestone", "Build a small alpha cohort and identify the most valuable recurring workflows."], ["Current focus", "Product validation, natural interaction, miniaturisation, companion experience, and integration depth."]].map(([title, copy]) => <div key={title}><small>{title}</small><p>{copy}</p></div>)}
          </div>
          <div className="investor-deck-grid">
            <div><small>Platform thesis</small><h3>The device creates distribution. Memory, integrations, and agent usage create recurring value.</h3></div>
            <div><small>Model under test</small><h3>₹6,000 device + ₹500/month AI and agents subscription.</h3></div>
            <div><small>Current ask</small><h3>$10,000 for hardware iterations, deeper orchestration, integrations, and pilot users.</h3></div>
          </div>
        </section>
      )}

      <section className="follow section shell" id="follow">
        <div className="follow-card">
          <Reveal><p className="eyebrow eyebrow-dark">05 / EARLY ACCESS</p><h2>Be among the first to try EDITH.</h2><p>We’re preparing a small early-user group to test EDITH in real routines. Join the list for prototype updates and first access when testing opens.</p></Reveal>
          <Reveal delay={.1}><SignupForm /><small>Early access updates only. No launch-noise machine.</small><a className="follow-social" href={siteConfig.contact.x} target="_blank" rel="noreferrer"><XLogo className="icon" /> Follow EDITH and Shivam on X <span>{siteConfig.contact.xHandle}</span></a></Reveal>
        </div>
      </section>

      <section className="progress-section section shell" id="progress">
        <SectionHeader eyebrow="06 / BUILD LOG" title="Proof, one layer at a time." copy="What has moved from question to working system." />
        <div className="timeline">{progress.map((item, i) => <Reveal className={`timeline-item ${item.current ? "current" : ""}`} delay={i * .04} key={item.title}><div className="timeline-marker"><span>{String(i + 1).padStart(2, "0")}</span></div><div><small>{item.current ? "NOW / WORKING" : "COMPLETE"}</small><h3>{item.title}</h3><p>{item.detail}</p></div></Reveal>)}</div>
      </section>

      <section className="roadmap-section section" id="roadmap">
        <div className="shell"><SectionHeader eyebrow="07 / ROADMAP" title="What we’re building next." copy="The next product milestones, without artificial timelines." />
          <div className="roadmap-grid">{roadmap.map((item, i) => <Reveal className="roadmap-card" delay={i * .04} key={item.number}><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div><ArrowUpRight className="icon" /></Reveal>)}</div>
        </div>
      </section>

      <section className="founder section shell" id="founder">
        <div className="founder-photo">
          {siteConfig.founder.photo ? <Image src={siteConfig.founder.photo} alt={`${siteConfig.founder.name}, founder of EDITH`} fill sizes="(max-width: 700px) 100vw, 35vw" /> : <><span>FOUNDER PHOTO</span><small>Add image in siteConfig.ts</small></>}
        </div>
        <Reveal className="founder-copy"><p className="eyebrow">08 / FOUNDER</p><h2>Built by {siteConfig.founder.name}.</h2><blockquote>“AI becomes far more useful when it understands the situation, remembers what matters, and helps carry the intention through.”</blockquote><p>A National University of Singapore Computer Science graduate and full scholar, I’ve built products across web, mobile, LLM agents, hardware, and firmware. I’m now building EDITH from India and speaking with early users, researchers, builders, and investors thinking beyond the screen.</p><div className="founder-links"><a className="text-link" href={siteConfig.contact.email ? `mailto:${siteConfig.contact.email}` : "#follow"}>Get in touch <ArrowUpRight className="icon" /></a><a className="text-link" href={siteConfig.contact.x} target="_blank" rel="noreferrer"><XLogo className="icon" /> Follow on X</a></div></Reveal>
      </section>

      <section className="closing section shell">
        <Reveal><p className="eyebrow">09 / GET EARLY ACCESS</p><h2>Want to try EDITH<br />before launch?</h2><p>Join the early-user list to hear when prototype testing opens.</p><div className="closing-actions"><a className="button button-primary" href="#follow">Join early access <ArrowUpRight className="icon" /></a><a className="button button-ghost" href="#demo"><Play className="icon" /> Watch the prototype</a><a className="button button-ghost" href="#founder">Talk to the founder</a></div></Reveal>
      </section>

      <footer className="footer shell"><div><a href="#top" className="footer-logo">EDITH</a><p>Building the context and action layer for AI.</p><a className="footer-social" href={siteConfig.contact.x} target="_blank" rel="noreferrer"><XLogo className="icon" /> {siteConfig.contact.xHandle}</a></div><div className="footer-meta"><span>INDIA · 2026</span><span>EDITH CORE / BUILD IN PROGRESS</span></div><a href="#top" className="back-top" aria-label="Back to top">↑</a></footer>
    </main>
  );
}
