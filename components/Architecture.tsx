"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "./icons";

const nodes = [
  ["01", "Context", "Camera + Mic"], ["02", "Interpret", "Speech + Vision"], ["03", "Reason", "EDITH Core"],
  ["04", "Plan", "Agent + Tools"], ["05", "Control", "Confirm if needed"], ["06", "Outcome", "Answer or Action"],
];

export function Architecture() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="architecture">
      <button className="architecture-title" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
        <span><small>TECHNICAL VIEW</small>Current architecture</span>
        <motion.span animate={{ rotate: expanded ? 45 : 0 }}><Plus className="icon" /></motion.span>
      </button>
      <div className="pipeline">
        {nodes.map(([num, label, value], index) => (
          <div className="pipeline-node" key={num}><small>{num} / {label}</small><strong>{value}</strong>{index < nodes.length - 1 && <span className="flow-line"><i /></span>}</div>
        ))}
      </div>
      <AnimatePresence>
        {expanded && <motion.p className="architecture-note" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>A single wearable interaction becomes one authoritative EDITH interaction. EDITH Core combines speech, optional vision, memory, and intent; selects permissioned tools; requests confirmation for consequential actions; then returns the answer, result, and speech output.</motion.p>}
      </AnimatePresence>
    </div>
  );
}
