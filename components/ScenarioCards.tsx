"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useCases } from "@/data/useCases";

export function ScenarioCards() {
  const [active, setActive] = useState(0);
  const item = useCases[active];
  return (
    <div className="scenarios">
      <div className="scenario-tabs" role="tablist" aria-label="Use case scenarios">
        {useCases.map((useCase, index) => (
          <button key={useCase.title} role="tab" aria-selected={active === index} onClick={() => setActive(index)}>
            <span>{useCase.number}</span>{useCase.title}<i>{useCase.status}</i>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.article key={item.title} className="scenario-detail" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: .3 }}>
          <div className="scenario-top"><span className={`status status-${item.status.toLowerCase().replaceAll(" ", "-")}`}>{item.status}</span><span>{item.number} / {String(useCases.length).padStart(2, "0")}</span></div>
          <dl>
            <div><dt>Context available</dt><dd>{item.sees}</dd></div>
            <div><dt>What the user asks</dt><dd className="quote">“{item.asks}”</dd></div>
            <div><dt>What EDITH understands</dt><dd>{item.understands}</dd></div>
            <div><dt>Result</dt><dd>{item.outcome}</dd></div>
          </dl>
        </motion.article>
      </AnimatePresence>
    </div>
  );
}
