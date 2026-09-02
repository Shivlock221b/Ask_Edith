import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
  const honeypot = typeof body?.company === "string" ? body.company.trim() : "";

  // Silently accept bot submissions without storing them.
  if (honeypot) return NextResponse.json({ ok: true });
  if (!/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({ error: "A valid email is required." }, { status: 400 });

  const supabaseUrl = process.env.SUPABASE_URL?.replace(/\/$/, "");
  const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

  if (!supabaseUrl || !supabaseSecretKey) {
    console.error("Supabase signup storage is not configured.");
    return NextResponse.json({ error: "Signup storage is temporarily unavailable." }, { status: 503 });
  }

  let response: Response;
  try {
    response = await fetch(`${supabaseUrl}/rest/v1/edith_signups?on_conflict=email`, {
      method: "POST",
      headers: {
        apikey: supabaseSecretKey,
        "Content-Type": "application/json",
        Prefer: "resolution=ignore-duplicates,return=minimal",
      },
      body: JSON.stringify({ email, source: "website" }),
      cache: "no-store",
    });
  } catch (error) {
    console.error("Supabase signup request could not connect:", error instanceof Error ? error.message : "Unknown network error");
    return NextResponse.json({ error: "Signup storage is temporarily unreachable." }, { status: 503 });
  }

  if (!response.ok) {
    console.error("Supabase signup insert failed:", response.status);
    return NextResponse.json({ error: "Unable to save this signup right now." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
