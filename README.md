# EDITH investor website

A responsive, single-page Next.js site for EDITH, a wearable AI context assistant that combines multimodal perception, memory, agent planning, and connected actions. The site uses the App Router, TypeScript, Tailwind CSS, Framer Motion, and data-driven content files.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Test the optional investor view at `http://localhost:3000/?investor=true`.

## Where to add assets

Put all public media in `public/media/`. Suggested filenames:

```text
public/media/hero-demo.mp4
public/media/prototype-demo.mp4
public/media/prototype-front.jpg
public/media/prototype-side.jpg
public/media/demo-restaurant.mp4
public/media/demo-object.mp4
public/media/shivam.jpg
```

Then edit `data/siteConfig.ts`. Every media path and founder/social link lives there. Missing files render as deliberate placeholders, so the page will not break.

### Add a local demo video

1. Copy an optimized MP4 to `public/media/prototype-demo.mp4`.
2. In `data/siteConfig.ts`, change `media.prototype.type` from `placeholder` to `video`.
3. Keep `src: "/media/prototype-demo.mp4"`.
4. Optionally add a poster image and set `poster: "/media/prototype-poster.jpg"`.

For the hero, repeat those steps under `media.hero`. The hero always stays muted and loops only its first 20 seconds. The prototype demo starts muted so browsers permit autoplay, and viewers can enable sound using its native video controls. Both use `playsInline` for iPhone compatibility. For best performance, export H.264 MP4 at 1080p or below and aim for roughly 5–10 MB.

### Add a YouTube demo

Change the media object to:

```ts
prototype: {
  type: "youtube" as const,
  src: "https://www.youtube-nocookie.com/embed/YOUR_VIDEO_ID",
  poster: "",
},
```

Vimeo embeds work with the same `youtube` type by using a Vimeo player embed URL.

### Add photos

Set a media item to `type: "image"` and use a path such as `/media/prototype-front.jpg`. Change the founder name and photo together under `founder` in `data/siteConfig.ts`.

## Edit the content

- `data/siteConfig.ts` — media, navigation, contact and social links
- `data/progress.ts` — chronological build log
- `data/useCases.ts` — interactive examples and status tags
- `data/roadmap.ts` — upcoming work
- `app/page.tsx` — long-form page copy

## Email signup with Supabase

The signup form posts to the server-only route at `app/api/follow/route.ts`, which validates and normalizes the address before inserting it into the private `edith_signups` table. Duplicate addresses are accepted without creating duplicate rows. A hidden honeypot filters simple form bots.

### 1. Create a Supabase project and table

1. Go to [Supabase](https://supabase.com/dashboard) and create a project.
2. Open **SQL Editor**, create a new query, and paste the contents of `supabase/schema.sql`.
3. Click **Run**. This creates `public.edith_signups`, enables Row Level Security, and blocks the public browser roles.

### 2. Add local environment variables

1. In Supabase, open **Project Settings → API Keys**.
2. Copy the **Project URL** and a server-side **Secret key** beginning with `sb_secret_`.
3. Copy `.env.example` to `.env.local` and replace the placeholders:

```bash
SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
SUPABASE_SECRET_KEY=sb_secret_YOUR_SECRET_KEY
```

Do not use a `NEXT_PUBLIC_` prefix and never commit `.env.local`. The secret key bypasses RLS and must exist only on the server.

Restart `npm run dev` after changing environment variables. Submit a test address, then open **Table Editor → edith_signups** in Supabase to confirm the row appears.

### 3. Configure Vercel

In the Vercel project, open **Settings → Environment Variables** and add `SUPABASE_URL` and `SUPABASE_SECRET_KEY`. Apply them to Production, Preview, and Development as appropriate, then redeploy the site.

## Analytics

`lib/analytics.ts` contains a typed, provider-neutral tracking hook and the recommended event names. To add Vercel Analytics, install `@vercel/analytics` and add its component in `app/layout.tsx`. For PostHog, add `NEXT_PUBLIC_POSTHOG_KEY` and initialize the client in a small provider component. The site does not require either service to run.

## Deploy

Push the project to GitHub, import it in Vercel, and deploy with the default Next.js settings. Update `metadataBase` in `app/layout.tsx` when the final domain is known.
