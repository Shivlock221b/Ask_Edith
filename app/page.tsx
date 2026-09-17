import { Architecture } from "@/components/Architecture";
import { ArrowUpRight, Play, XLogo } from "@/components/icons";
import { MediaFrame } from "@/components/MediaFrame";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { ScenarioCards } from "@/components/ScenarioCards";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/siteConfig";
import Image from "next/image";

const capabilities = [
  ["01", "Multimodal perception", "Combines speech and visual context from the wearable in one request."],
  ["02", "Memory + context", "Recalls useful preferences, facts, and recent interactions when relevant."],
  ["03", "Agent orchestration", "Plans multi-step work and routes it to the right connected tools."],
  ["04", "Permissioned action", "Searches, drafts, schedules, orders, or delegates—with confirmation where required."],
];

const workingTools = ["Vision", "Web search", "Memory", "Notes + tasks", "Translation", "Gmail", "Calendar", "Swiggy", "Codex"];

const buildScope = [
  ["Hardware interface", "ESP32 camera, microphone, capture controls, and spoken output."],
  ["AI system", "Multimodal reasoning, persistent memory, tool selection, and agent orchestration."],
  ["Connected actions", "Permission-aware workflows across search, productivity, commerce, and coding tools."],
  ["Product experience", "Interaction model, feedback loops, confirmation states, demos, and the web experience."],
];

export default function Home() {
  return (
    <main id="top">
      <Navbar />

      <section className="hero shell">
        <div className="hero-copy">
          <Reveal><p className="status-pill"><span /> Independent working prototype · Built by Shivam Tiwari</p></Reveal>
          <Reveal delay={.05}><h1>EDITH</h1></Reveal>
          <Reveal delay={.1}><p className="hero-title">A wearable interface<br />for AI agents.</p></Reveal>
          <Reveal delay={.15}><p className="hero-description">EDITH sees and hears what the user does, remembers useful context, chooses the right tools, and turns a natural request into an answer or completed action.</p></Reveal>
          <Reveal delay={.2} className="hero-actions">
            <a href="#demo" className="button button-primary"><Play className="icon" />Watch the working demo</a>
            <a href={`mailto:${siteConfig.contact.email}`} className="button button-ghost">Contact Shivam <ArrowUpRight className="icon" /></a>
          </Reveal>
          <Reveal delay={.25}><p className="made-in">Designed and built end to end in India.</p></Reveal>
        </div>
        <div className="hero-visual"><MediaFrame media={siteConfig.media.hero} label="AI-generated EDITH concept enclosure visualization" notice="AI-GENERATED CONCEPT · NOT CURRENT HARDWARE" /></div>
      </section>

      <section className="prototype section" id="demo">
        <div className="shell">
          <SectionHeader eyebrow="01 / WORKING DEMO" title="Context in. Real work out." copy="The prototype connects wearable capture, multimodal reasoning, memory, planning, tools, confirmations, and spoken responses in one end-to-end system." />
          <MediaFrame media={siteConfig.media.prototype} variant="demo" label="EDITH working prototype demo" />
          <div className="capabilities" id="capabilities">
            {capabilities.map(([num, title, copy]) => <Reveal className="capability" key={num}><span>{num}</span><h3>{title}</h3><p>{copy}</p></Reveal>)}
          </div>
          <Reveal className="working-stack"><p>CONNECTED IN THE CURRENT PROTOTYPE</p><div>{workingTools.map((tool) => <span key={tool}>{tool}<i /></span>)}</div></Reveal>
        </div>
      </section>

      <section className="examples section shell" id="use-cases">
        <SectionHeader eyebrow="02 / LIVE FLOWS" title="Five workflows, one interaction model." copy="Each flow starts with natural speech, optional visual context, and the same path from intent to a useful result." />
        <Reveal><ScenarioCards /></Reveal>
      </section>

      <section className="idea section" id="system">
        <div className="shell">
          <SectionHeader eyebrow="03 / SYSTEM" title="From a glance to a completed task." />
          <Reveal className="big-flow" aria-label="Physical world to action flow">
            {[["WORLD", "Physical world"], ["E", "EDITH Core"], ["AI", "Agents + tools"], ["OUT", "Answer or action"]].map(([mark, label], index) => <div className="big-flow-item" key={label}><span>{mark}</span><strong>{label}</strong>{index < 3 && <i><b /></i>}</div>)}
          </Reveal>
          <div className="architecture-wrap"><Architecture /></div>
        </div>
      </section>

      <section className="progress-section section shell" id="build">
        <SectionHeader eyebrow="04 / WHAT I BUILT" title="An end-to-end prototype, not a concept deck." copy="I worked across the device, agent system, integrations, and interaction design to make the complete loop testable." />
        <div className="build-scope">
          {buildScope.map(([title, copy], index) => <Reveal className="build-scope-card" delay={index * .05} key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></Reveal>)}
        </div>
      </section>

      <section className="work section" id="work">
        <div className="shell">
          <SectionHeader eyebrow="05 / SELECTED WORK" title="More products I’ve shipped." copy="EDITH is my deepest recent build. These live products show the broader range of problems I like working on—from marketplaces and commerce to autonomous search." />
          <div className="project-grid">
            {projects.map((project, index) => (
              <Reveal className="project-card" delay={index * .06} key={project.name}>
                <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}>
                  <div className="project-card-top"><span>{project.number}</span><span className="project-live"><i /> LIVE</span></div>
                  <div className="project-card-main"><p>{project.category}</p><h3>{project.name}</h3><p>{project.description}</p></div>
                  <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-link"><span>{project.domain}</span><span>Visit product <ArrowUpRight className="icon" /></span></div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="founder section shell" id="about">
        <div className="founder-photo">
          <Image src={siteConfig.founder.photo} alt={`${siteConfig.founder.name}, creator of EDITH`} fill sizes="(max-width: 700px) 100vw, 35vw" />
        </div>
        <Reveal className="founder-copy">
          <p className="eyebrow">06 / THE BUILDER</p>
          <h2>Built by {siteConfig.founder.name}.</h2>
          <blockquote>“I like building the full loop—from an ambitious interface idea to the hardware, agents, tools, and product experience that make it real.”</blockquote>
          <p>I’m a National University of Singapore Computer Science graduate and full scholar. I build across web, mobile, LLM agents, hardware, and firmware, with a particular interest in multimodal AI and products that move beyond the chat window.</p>
          <p>I’m looking to join a team working on agentic systems, wearables, multimodal products, or new human-computer interfaces.</p>
          <div className="founder-links"><a className="text-link" href={`mailto:${siteConfig.contact.email}`}>Email me <ArrowUpRight className="icon" /></a><a className="text-link" href={siteConfig.contact.x} target="_blank" rel="noreferrer"><XLogo className="icon" /> Follow my work</a></div>
        </Reveal>
      </section>

      <section className="contact section shell" id="contact">
        <Reveal className="contact-card">
          <p className="eyebrow eyebrow-dark">07 / LET&apos;S TALK</p>
          <h2>Building something<br />in this direction?</h2>
          <p>If your team is working on AI agents, multimodal interfaces, wearables, or ambitious new products, I’d love to hear what you’re building.</p>
          <div className="contact-actions"><a className="button contact-primary" href={`mailto:${siteConfig.contact.email}`}>Email Shivam <ArrowUpRight className="icon" /></a><a className="button contact-secondary" href={siteConfig.contact.x} target="_blank" rel="noreferrer"><XLogo className="icon" /> {siteConfig.contact.xHandle}</a></div>
        </Reveal>
      </section>

      <footer className="footer shell"><div><a href="#top" className="footer-logo">SHIVAM TIWARI</a><p>AI agents, full-stack products, hardware, and new interfaces.</p><a className="footer-social" href={siteConfig.contact.x} target="_blank" rel="noreferrer"><XLogo className="icon" /> {siteConfig.contact.xHandle}</a></div><div className="footer-meta"><span>INDIA · 2026</span><span>DESIGN · HARDWARE · AGENTS · FULL STACK</span></div><a href="#top" className="back-top" aria-label="Back to top">↑</a></footer>
    </main>
  );
}
