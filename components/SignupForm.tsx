"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight } from "./icons";

export function SignupForm() {
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setState("loading");
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/follow", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: form.get("email"), company: form.get("company") }) });
    setState(response.ok ? "done" : "error");
  }
  if (state === "done") return <p className="form-success">You’re on the build log. Thank you.</p>;
  return (
    <form className="signup-form" onSubmit={submit}>
      <label className="sr-only" htmlFor="email">Email address</label>
      <input id="email" name="email" type="email" placeholder="you@example.com" required autoComplete="email" />
      <label className="signup-honeypot" aria-hidden="true">Company<input name="company" type="text" tabIndex={-1} autoComplete="off" /></label>
      <button type="submit" disabled={state === "loading"}>{state === "loading" ? "Adding…" : "Follow EDITH"}<ArrowUpRight className="icon" /></button>
      {state === "error" && <p role="alert">Something went wrong. Please try again.</p>}
    </form>
  );
}
