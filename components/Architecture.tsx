"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "./icons";

const nodes = [
  ["01", "Capture", "Camera + Mic"], ["02", "Device", "ESP32-S3"], ["03", "Transport", "Wi-Fi / Phone"],
  ["04", "Interpret", "Speech-to-Text"], ["05", "Reason", "Multimodal AI"], ["06", "Return", "Phone / Earbuds"],
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
        {expanded && <motion.p className="architecture-note" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>The device captures only what is needed. Networking, speech recognition, model reasoning and audio delivery stay in the connected phone/cloud layer—keeping v0 inexpensive and easy to iterate.</motion.p>}
      </AnimatePresence>
    </div>
  );
}
