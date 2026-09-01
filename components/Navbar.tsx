"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "@/data/siteConfig";
import { ArrowUpRight, Close, Menu, Play } from "./icons";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-nav">
      <nav className="nav-inner" aria-label="Primary navigation">
        <a href="#top" className="wordmark" aria-label="EDITH home"><span className="logo-dot" />EDITH <small>/ v0</small></a>
        <div className="nav-links">
          {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </div>
        <a className="nav-cta" href="#follow">Join early access <ArrowUpRight className="icon" /></a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
          {open ? <Close className="icon" /> : <Menu className="icon" />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight className="icon" /></a>)}
            <a href="#follow" onClick={() => setOpen(false)}>Join early access <ArrowUpRight className="icon" /></a>
            <a href="#demo" onClick={() => setOpen(false)}>Watch demo <Play className="icon" /></a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
