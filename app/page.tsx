import { Architecture } from "@/components/Architecture";
import { ArrowDown, ArrowUpRight, Play } from "@/components/icons";
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
  ["01", "See / Hear", "EDITH captures relevant visual and audio context."],
  ["02", "Understand", "Multimodal AI combines that context with what the user asks."],
  ["03", "Respond", "A contextual answer returns through the user’s existing audio device."],
  ["04", "Act", "Over time, connected agents can take useful actions across digital services."],
];

const nowItems = [
  ["Multimodal AI", "Models can understand combinations of language, images and audio."],
  ["Cheap sensors", "Cameras, microphones and microcontrollers make rapid hardware experiments practical."],
  ["Smartphones", "Phones already provide networking, compute, location and audio output."],
  ["Agents", "AI is moving from answering questions toward acting through tools and services."],
];

export default async function Home({ searchParams }: { searchParams: Promise<{ investor?: string }> }) {
  const { investor } = await searchParams;
  const investorMode = investor === "true";
  return (
    <main id="top">
      <Navbar />

      <section className="hero shell">
        <div className="hero-copy">
          <Reveal><p className="status-pill"><span /> EDITH v0 · Early prototype · Currently building</p></Reveal>
          <Reveal delay={.05}><h1>EDITH</h1></Reveal>
          <Reveal delay={.1}><p className="hero-title">Give AI eyes and ears<br />in the real world.</p></Reveal>
          <Reveal delay={.15}><p className="hero-description">EDITH is a low-cost context layer that helps AI understand what you see, hear, and do — so you don’t have to explain everything first.</p></Reveal>
          <Reveal delay={.2} className="hero-actions"><a href="#demo" className="button button-primary"><Play className="icon" />Watch the 5-min demo</a><a href="#how-it-works" className="button button-ghost">See how it works <ArrowDown className="icon" /></a></Reveal>
          <Reveal delay={.25}><p className="made-in">Built from India. Designed for everywhere.</p></Reveal>
        </div>
        <div className="hero-visual"><MediaFrame media={siteConfig.media.hero} /></div>
      </section>

      <section className="problem section shell" id="vision">
        <SectionHeader eyebrow="01 / THE PROBLEM" title="AI is powerful. But it is context-starved." copy="Today’s assistants begin only after a person has translated the physical world into words." />
        <div className="translation-flow">
          <Reveal className="flow-card"><span>01</span><strong>Experience</strong><p>The user sees, hears or encounters something.</p></Reveal>
          <div className="flow-arrow">→</div>
          <Reveal className="flow-card" delay={.08}><span>02</span><strong>Translate</strong><p>The user manually reconstructs that context as a prompt.</p></Reveal>
          <div className="flow-arrow">→</div>
          <Reveal className="flow-card" delay={.16}><span>03</span><strong>Interpret</strong><p>AI tries to understand an incomplete description.</p></Reveal>
        </div>
        <Reveal className="prompt-cloud">
          {["What is this?", "Which one should I buy?", "Can you book this place?", "What does this warning mean?", "Where did I put this?"].map((prompt) => <span key={prompt}>“{prompt}”</span>)}
        </Reveal>
        <Reveal className="problem-statement"><p>Most AI interfaces begin only after the user has converted the real world into text.</p><strong>EDITH is designed to remove that translation layer.</strong></Reveal>
      </section>

      <section className="idea section" id="how-it-works">
        <div className="shell">
          <SectionHeader eyebrow="02 / THE EDITH IDEA" title="What if AI already understood the situation?" />
          <Reveal className="big-flow" aria-label="Physical world to action flow">
            {[
              ["WORLD", "Physical world"], ["E", "EDITH"], ["AI", "Reasoning"], ["↗", "Action"],
            ].map(([mark, label], index) => <div className="big-flow-item" key={label}><span>{mark}</span><strong>{label}</strong>{index < 3 && <i><b /></i>}</div>)}
          </Reveal>
          <div className="idea-grid">
            {ideaSteps.map(([number, title, detail], index) => <Reveal className="idea-card" delay={index * .06} key={number}><span>{number}</span><h3>{title}</h3><p>{detail}</p></Reveal>)}
          </div>
        </div>
      </section>

      <section className="examples section shell">
        <SectionHeader eyebrow="03 / REAL-WORLD CONTEXT" title="The shortest prompt is often the most natural one." copy="EDITH connects words like “this”, “here” and “that one” to the world around you. Current and future capabilities are marked clearly." />
        <Reveal><ScenarioCards /></Reveal>
      </section>

      <section className="prototype section" id="prototype">
        <div className="shell">
          <SectionHeader eyebrow="04 / WORKING PROTOTYPE" title="EDITH v0 — very early, but working." copy="Built with inexpensive off-the-shelf components to test one question first: is context-aware interaction genuinely useful?" />
          <div id="demo"><MediaFrame media={siteConfig.media.prototype} variant="demo" label="5-min EDITH prototype demo" /></div>
          <div className="capabilities">
            {[["01", "Visual context", "Camera captures what the user is looking at."], ["02", "Voice query", "The user asks EDITH a contextual question."], ["03", "Multimodal reasoning", "Image and speech are processed together by AI."], ["04", "Audio response", "EDITH responds through a phone or connected earbuds."]].map(([num, title, copy]) => <Reveal className="capability" key={num}><span>{num}</span><h3>{title}</h3><p>{copy}</p></Reveal>)}
          </div>
          <Architecture />
          <Reveal><p className="prototype-goal">The goal of v0 is not miniaturisation. <strong>It is proving that context-aware interaction is useful.</strong></p></Reveal>
        </div>
      </section>

      {investorMode && (
        <section className="investor-mode shell" aria-label="Investor overview">
          <div className="investor-label"><span /> INVESTOR VIEW ENABLED</div>
          <div className="investor-grid">
            {[["Current stage", "Working prototype / early validation"], ["What we are testing", "Whether persistent real-world context creates new high-frequency AI behaviours."], ["Near-term milestone", "Build a small alpha cohort and identify the highest-value recurring use cases."], ["Current focus", "Product validation, miniaturisation, latency, mobile integration and agentic workflows."]].map(([title, copy]) => <div key={title}><small>{title}</small><p>{copy}</p></div>)}
          </div>
        </section>
      )}

      <section className="why-now section shell">
        <SectionHeader eyebrow="05 / WHY NOW" title="Four curves are converging." copy="Together, these shifts make a new kind of interface possible without building an expensive standalone computer for your face." />
        <div className="now-grid">{nowItems.map(([title, copy], i) => <Reveal className="now-card" delay={i * .06} key={title}><span>0{i + 1}</span><div className="orb" /><h3>{title}</h3><p>{copy}</p></Reveal>)}</div>
      </section>

      <section className="philosophy section">
        <div className="shell philosophy-grid">
          <SectionHeader eyebrow="06 / PRODUCT PHILOSOPHY" title="Start lightweight. Let the intelligence live elsewhere." />
          <Reveal className="philosophy-copy"><p>Many smart wearables try to package significant functionality directly inside expensive hardware.</p><p>EDITH starts with a different assumption: use the wearable to capture context, the phone and cloud for computation, and devices people already own for output.</p><div className="benefits">{["Smaller hardware", "Lower cost", "Faster iteration", "Easier model upgrades", "Provider flexibility", "Connected services"].map(x => <span key={x}>{x}</span>)}</div></Reveal>
        </div>
      </section>

      <section className="beyond section">
        <div className="shell">
          <SectionHeader eyebrow="07 / THE BIGGER VISION" title="Beyond the screen." copy="Every major computing shift has reduced how much humans need to translate their intentions for computers." />
          <Reveal className="interface-timeline">{["Keyboard", "Mouse", "Touchscreen", "Voice", "Context-aware AI"].map((item, i) => <div key={item} className={i === 4 ? "active" : ""}><span>0{i + 1}</span><strong>{item}</strong></div>)}</Reveal>
          <Reveal className="vision-statement"><p>The long-term goal is not to build another wearable.</p><h2>It is to build the context layer between humans, AI and the physical world.</h2></Reveal>
        </div>
      </section>

      <section className="progress-section section shell" id="progress">
        <SectionHeader eyebrow="08 / BUILD LOG" title="Proof, one layer at a time." copy="A chronological record of what has moved from question to working system." />
        <div className="timeline">{progress.map((item, i) => <Reveal className={`timeline-item ${item.current ? "current" : ""}`} delay={i * .04} key={item.title}><div className="timeline-marker"><span>{String(i + 1).padStart(2, "0")}</span></div><div><small>{item.current ? "NOW / WORKING" : "COMPLETE"}</small><h3>{item.title}</h3><p>{item.detail}</p></div></Reveal>)}</div>
      </section>

      <section className="roadmap-section section" id="roadmap">
        <div className="shell"><SectionHeader eyebrow="09 / ROADMAP" title="What we’re building next." copy="No theatre. No artificial deadlines. Just the next important questions, in order." />
          <div className="roadmap-grid">{roadmap.map((item, i) => <Reveal className="roadmap-card" delay={i * .04} key={item.number}><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div><ArrowUpRight className="icon" /></Reveal>)}</div>
        </div>
      </section>

      <section className="follow section shell" id="follow">
        <div className="follow-card">
          <Reveal><p className="eyebrow eyebrow-dark">10 / BUILDING IN PUBLIC</p><h2>Follow the experiment.</h2><p>EDITH is still early. The project is being built through rapid prototypes, user experiments and public iteration—not by pretending all the answers are already known.</p></Reveal>
          <Reveal delay={.1}><SignupForm /><small>Occasional build notes. No launch-noise machine.</small></Reveal>
        </div>
      </section>

      <section className="founder section shell" id="founder">
        <div className="founder-photo">
          {siteConfig.founder.photo ? <Image src={siteConfig.founder.photo} alt={`${siteConfig.founder.name}, founder of EDITH`} fill sizes="(max-width: 700px) 100vw, 35vw" /> : <><span>FOUNDER PHOTO</span><small>Add image in siteConfig.ts</small></>}
        </div>
        <Reveal className="founder-copy"><p className="eyebrow">11 / FOUNDER</p><h2>Built by {siteConfig.founder.name}.</h2><blockquote>“I’m building EDITH because I believe the biggest limitation of today’s AI assistants is not intelligence — it is context.”</blockquote><p>I’m currently prototyping EDITH from India using inexpensive hardware, existing smartphones and rapidly improving multimodal models.</p><p>I’m interested in talking to early users, researchers, builders, investors and anyone thinking deeply about how humans will interact with AI beyond the screen.</p><a className="text-link" href={siteConfig.contact.email ? `mailto:${siteConfig.contact.email}` : "#follow"}>Get in touch <ArrowUpRight className="icon" /></a></Reveal>
      </section>

      <section className="closing section shell">
        <Reveal><p className="eyebrow">12 / OPEN CONVERSATION</p><h2>Interested in where<br />this is going?</h2><p>EDITH is at the prototype and experimentation stage. I’m speaking with people interested in context-aware computing, multimodal AI, agents and new human-computer interfaces.</p><div className="closing-actions"><a className="button button-primary" href="#demo"><Play className="icon" /> Watch the prototype</a><a className="button button-ghost" href="#founder">Talk to the founder</a><a className="button button-ghost" href="#follow">Follow progress</a></div></Reveal>
      </section>

      <footer className="footer shell"><div><a href="#top" className="footer-logo">EDITH</a><p>Building the context layer for AI.</p></div><div className="footer-meta"><span>INDIA · 2026</span><span>v0 / BUILD IN PROGRESS</span></div><a href="#top" className="back-top" aria-label="Back to top">↑</a></footer>
    </main>
  );
}
