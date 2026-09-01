# EDITH Flow Updates Summary

Generated: 2026-09-01

This document summarizes the current EDITH prototype after the latest architecture, hardware, provider, agent, tool, and demo-readiness updates.

## Product Snapshot

EDITH is now a wearable AI context assistant prototype. A physical button interaction can capture what the user is seeing, what the user is saying, or both, then route that multimodal context through EDITH Core to answer, remember, search, translate, draft, schedule, order, book, or delegate coding tasks.

The central product loop is:

```text
User taps or holds EDITH
-> ESP32 camera and/or microphone captures context
-> Next.js backend receives image/audio
-> Deepgram transcribes speech
-> Gemini/Groq-compatible EDITH reasoning analyzes text and optional image
-> LLM planner chooses tools when needed
-> EDITH executes safe tools or creates pending confirmations
-> UI displays transcript, image, tool metadata, answer, and speech output
```

## Input Flows

### ESP32 Wearable Flow

The ESP32-S3 Sense flow is the main hardware path.

Supported modes:

- `audio-only`: single touch records WAV audio only.
- `image-audio`: double touch captures JPEG image and records WAV audio.

Headers used by the device:

```text
X-Device-Id: edith-xiao-s3-001
X-Interaction-Id: <shared interaction id>
X-Edith-Mode: audio-only | image-audio
```

Important behavior:

- One button interaction maps to one EDITH interaction.
- Image and audio uploads can arrive in either order.
- Audio-only interactions do not require an image.
- Image-audio interactions wait for both image and transcript.
- Processing is idempotent so the same interaction is not run twice.
- Files are stored locally or in Vercel Blob depending on storage driver.

### Legacy IP Camera / Old Phone Flow

The original RTSP/RTMP frame-capture path is still preserved.

Capabilities:

- Accept RTSP or RTMP stream URL.
- Backend captures one still frame with FFmpeg.
- Browser does not try to play RTSP directly.
- User can ask typed or voice questions about the captured image.

### Browser / Dev Console Flow

The development console supports local testing without ESP32 hardware.

It can simulate:

- audio-only interactions
- image-audio interactions
- streaming audio events
- VAD outcomes
- device health/state
- memory writes and recalls
- tool planning
- TTS
- translation

## Backend Architecture

EDITH Core now uses an authoritative interaction model:

```text
interaction
  id
  deviceId
  mode
  image?
  audio?
  transcript?
  intent?
  agent?
  toolsUsed[]
  status
  response?
  model?
  error?
  metadata
  createdAt
  updatedAt
```

Main statuses:

- `waiting`
- `transcribing`
- `processing`
- `complete`
- `failed`

Main server modules:

- `lib/edith/interactions.ts`: interaction lifecycle and processing.
- `lib/edith/storage.ts`: local and Vercel Blob-compatible storage.
- `lib/edith/transcribeAudio.ts`: STT abstraction.
- `lib/edith/analyze.ts`: text-only and image-plus-text EDITH analysis.
- `lib/edith/intentRouter.ts`: intent routing.
- `lib/edith/agents.ts`: first-party agent registry and permissions.
- `lib/edith/llmToolPlanner.ts`: LLM-based structured tool planning.
- `lib/edith/toolRegistry.ts`: tool schemas, permissions, and execution.
- `lib/edith/orchestrator.ts`: multi-step tool execution and confirmation handling.
- `lib/edith/context.ts`: unified context builder.
- `lib/edith/memory.ts`: semantic and episodic memory.
- `lib/edith/thoughtCapture.ts`: notes, tasks, ideas, decisions.
- `lib/edith/tts.ts`: TTS provider abstraction.
- `lib/edith/translation.ts`: translation provider abstraction.
- `lib/edith/audioStream.ts`: browser/server streaming audio protocol.
- `lib/edith/codingBridge.ts`: Codex desktop bridge client.
- `lib/edith/swiggyTools.ts`: EDITH-facing Swiggy tools.

## API Routes

### Core Interaction Routes

- `POST /api/edith/esp32-audio`
  - Receives ESP32 WAV audio.
  - Saves audio.
  - Runs STT.
  - Stores transcript.
  - Triggers EDITH processing when ready.

- `POST /api/edith/esp32-capture`
  - Receives ESP32 JPEG image.
  - Saves image.
  - Associates image with interaction.
  - Triggers EDITH processing when ready.

- `GET /api/edith/interactions/latest`
  - Returns latest interaction for UI polling/status.

- `POST /api/ask-edith`
  - Legacy image plus voice/typed question path.

- `POST /api/edith/analyze-capture`
  - Analyze a stored capture with a typed question.

### Provider / Utility Routes

- `POST /api/edith/tts`
- `POST /api/edith/translate`
- `POST /api/edith/audio-stream`
- `GET/POST /api/edith/context`
- `POST /api/edith/intent`
- `GET/POST /api/edith/agents`
- `GET/POST /api/edith/tools`

### Device Routes

- `POST /api/edith/device/status`
- `GET /api/edith/device/status`
- `GET /api/edith/device/[deviceId]`
- `GET/POST /api/edith/device-state`

### Memory / Thought Routes

- `GET/POST /api/edith/memory`
- `GET/POST /api/edith/thoughts`

### Integration Routes

- Google:
  - `GET /api/integrations/google/connect`
  - `GET /api/integrations/google/callback`
  - `GET /api/integrations/google/status`
  - `POST /api/integrations/google/disconnect`
  - `POST /api/integrations/execute`

- Swiggy:
  - `GET /api/swiggy/auth/start`
  - `GET /api/swiggy/auth/callback`
  - `GET /api/swiggy/auth/status`
  - `POST /api/swiggy/auth/logout`
  - `POST /api/swiggy/dineout/confirm`
  - `POST /api/swiggy/food/confirm`
  - `POST /api/swiggy/instamart/confirm`

- Waitlist:
  - `POST /api/waitlist`

## Configured Agents

### Planner Agent

ID: `edith-planner`

Purpose:

- Executes validated LLM-proposed tool plans across domains.
- Lets EDITH move away from purely deterministic planning.
- Backend permissions, schemas, risk classes, and confirmations remain authoritative.

Tools:

- memory tools
- notes
- time
- translation
- search
- Gmail
- Calendar
- Codex
- Swiggy

### General Agent

ID: `edith-general`

Purpose:

- Normal conversation.
- Broad questions.
- Safe fallback answers.
- Commands that do not need specialist agents.

Tools:

- `time.current`

### Vision Agent

ID: `edith-vision`

Purpose:

- Questions grounded in captured images.
- OCR-like reading.
- Scene understanding.
- Labels, signs, diagrams, screenshots, products, medicine packaging, menus.

Tools:

- None by default. The LLM/vision model answers directly unless the planner routes to a tool.

### Search Agent

ID: `edith-search`

Purpose:

- Fresh information and external lookup.
- Visual/audio questions that require the web.

Tools:

- `search.web`
- `memory.remember`

Provider:

- Tavily when configured.

### Memory Agent

ID: `edith-memory`

Purpose:

- Remember user preferences/facts.
- Recall relevant past facts.
- Forget stored facts with confirmation.

Tools:

- `memory.remember`
- `memory.recall`
- `memory.forget`

Storage:

- Local JSON or Supabase pgvector.

Embeddings:

- Gemini embeddings when configured.

### Notes Agent

ID: `edith-notes`

Purpose:

- Capture notes, ideas, tasks, decisions, reminders, meeting notes, people, places, purchases, and other useful thoughts.

Tools:

- `notes.create`

Behavior:

- Planner-cleaned note content can be force-captured even if the classifier is uncertain.

### Translation Agent

ID: `edith-translation`

Purpose:

- Translate spoken or visible text.
- Useful for signs, labels, menus, and conversations.

Tools:

- `translation.translate`

Provider:

- Gemini when configured.
- Rule-based fallback for local/mock testing.

### Email Agent

ID: `edith-email`

Purpose:

- Search Gmail.
- Read email messages.
- Create Gmail drafts.
- Send confirmed email.

Tools:

- `gmail.search`
- `gmail.get_message`
- `gmail.create_draft`
- `gmail.send`

Safety:

- Sending email is high-risk and requires explicit confirmation.

### Calendar Agent

ID: `edith-calendar`

Purpose:

- List events.
- Get event details.
- Create events.
- Update events.
- Delete events.

Tools:

- `calendar.list_events`
- `calendar.get_event`
- `calendar.create_event`
- `calendar.update_event`
- `calendar.delete_event`

Safety:

- Create, update, and delete actions require confirmation.

### Coding Agent

ID: `edith-coding`

Purpose:

- Delegates explicit coding tasks to Codex through the local EDITH Desktop Bridge.
- Supports creating sessions, sending follow-up messages, checking status, receiving latest result, and forwarding approval decisions.

Tools:

- `coding.list_sessions`
- `coding.start_session`
- `coding.send_message`
- `coding.get_status`
- `coding.get_latest_result`
- `coding.approve`
- `coding.reject`

Bridge:

- `npm run bridge`
- Supports `exec` and `app-server` transports.
- App-server mode supports session streaming and approvals.

### Swiggy Agent

ID: `edith-swiggy`

Purpose:

- Swiggy Food search and cart actions.
- Instamart search and cart actions.
- Dineout restaurant/table booking flow.

Tools:

- `swiggy.search`
- `swiggy.cart_check`
- `swiggy.prepare_action`
- `swiggy.add_to_cart`
- `swiggy.confirm_pending`

Safety:

- Search and cart reads are read-only.
- Add-to-cart is low-risk write.
- Order placement and Dineout booking require confirmation.
- EDITH does not place orders/bookings without explicit user approval.

Recent robustness updates:

- “Card” is treated as a likely STT error for “cart”.
- “Suki” is treated as a likely STT error for “Swiggy”.
- Generic Swiggy cart checks now return partial success if Food cart works but Instamart cart fails.

## Tool Capabilities

### Search

Working use cases:

- Search current web results.
- Search from a visual/audio prompt.
- Ask for official websites, prices, documentation, current information, and summaries.

Example:

```text
Search the web for the official Raspberry Pi website and tell me the domain.
```

### Vision

Working use cases:

- Read labels.
- Explain diagrams.
- Summarize whiteboards.
- Describe visible objects.
- Translate visible text through the translation flow.
- Ask follow-up questions using memory/context.

Examples:

```text
What medicine is this?
Read this label and explain it simply.
Summarize this whiteboard.
Translate the visible text.
```

### Speech-To-Text

Provider:

- Deepgram.

Working paths:

- ESP32 WAV upload transcription.
- Browser audio transcription.
- Streaming browser audio route.

Audio format for ESP32:

```text
WAV, 16 kHz, 16-bit PCM, mono
```

### Text-To-Speech

Working paths:

- Browser speech synthesis in the main UI.
- Server-side `/api/edith/tts` route.
- Deepgram TTS when configured.
- Local tone fallback for development.

### Memory

Working use cases:

- Remember preferences.
- Recall semantic facts.
- Recall recent episodic interactions.
- Use memory in final answer context.
- Forget memories with confirmation.
- Privacy behavior for sensitive flows.

Examples:

```text
Remember that my demo beverage is saffron lemonade.
What is my demo beverage?
Forget that memory about my demo beverage.
```

### Notes And Tasks

Working use cases:

- Capture notes.
- Capture tasks.
- Capture ideas.
- Capture decisions.
- Capture reminders.

Examples:

```text
Note this down: the demo needs a final battery check.
Add a task to test the glasses microphone before recording.
I just had an idea: use EDITH for classrooms.
```

### Gmail

Working use cases:

- Search Gmail.
- Summarize latest/relevant emails.
- Create drafts.
- Send emails after required confirmation.

Examples:

```text
Search my Gmail for newer than seven days and summarize the latest email.
Create a Gmail draft to myself with subject EDITH demo and body The demo checklist is ready.
Send that draft.
```

### Calendar

Working use cases:

- List events.
- Create events with confirmation.
- Update/delete events with confirmation.

Examples:

```text
What calendar events do I have tomorrow?
Create a calendar event tomorrow at 5 PM called EDITH demo rehearsal.
Yes.
```

### Codex

Working use cases:

- Check current Codex sessions.
- Start a Codex session in an allowed project.
- Ask Codex to inspect, review, edit, test, or summarize code.
- Ask for latest Codex result.
- Forward approval or rejection when Codex requests permission.

Examples:

```text
Check my current Codex sessions.
Start a Codex session in rental AI and inspect the README.
Ask Codex to review the unit tests.
What is the latest Codex result?
```

Recent robustness updates:

- “Codec” and “codecs” are treated as likely STT errors for “Codex”.
- Planner plans that only list sessions for a true delegation request are repaired/rejected so EDITH sends a real Codex message.

### Swiggy Food

Working use cases:

- Search Food items.
- Read Food cart.
- Add Food item to cart without placing order.
- Prepare Food order for confirmation.
- Confirm pending Food order.

Examples:

```text
Search Swiggy Food for masala dosa.
Check my Swiggy Food cart.
Add masala dosa to my Swiggy Food cart.
Order dosa on Swiggy.
Yes, order it.
```

### Instamart

Working use cases:

- Search grocery items.
- Add grocery item to cart when MCP/store supports it.
- Prepare grocery order for confirmation.
- Confirm pending Instamart order.
- Read cart when Instamart `get_cart` is available.

Examples:

```text
Search milk on Instamart.
Add milk to my Instamart cart.
Order milk from Instamart.
Check my Instamart cart.
```

Known current caveat:

- In latest manual probing, Instamart address lookup and product search worked, but `instamart.get_cart` returned: “The store is unavailable at the moment. Please try again after some time.”
- This appears to be an Instamart MCP/store availability issue, not a login issue.

### Swiggy Dineout

Working use cases:

- Search Dineout restaurants.
- Infer restaurant booking intent from speech and optional image.
- Prepare table booking.
- Verify restaurant confidence.
- Check available slots.
- Create pending booking.
- Confirm booking with user approval.

Examples:

```text
Book a table for two at Kiskey Whiskey tomorrow at 8 PM.
Book a table here for two tonight at 8 PM.
Yes, book it.
```

Safety:

- EDITH must show/know the proposed restaurant, date, time, and guest count before confirmation.
- Booking only happens after explicit confirmation.

## Confirmations And Risk Controls

EDITH separates tool actions by risk:

- Read-only:
  - search
  - Gmail search/read
  - calendar list/get
  - Swiggy search/cart check
  - Codex status/list

- Low-risk write:
  - notes create
  - memory remember
  - Gmail draft
  - Swiggy add-to-cart
  - Codex start/send message

- High-risk:
  - Gmail send
  - calendar create/update/delete
  - memory forget
  - Swiggy checkout/order
  - Dineout booking
  - Codex approval forwarding

High-risk actions create pending actions and require explicit user confirmation.

Recent confirmation improvement:

- A standalone “yes” or “no” is only treated as confirmation if there is an active pending action.
- Without a pending action, “yes” or “no” remains a normal transcript.

## Provider Setup

Real providers configured or supported:

- Gemini:
  - vision/text reasoning
  - embeddings
  - translation

- Deepgram:
  - speech-to-text
  - text-to-speech

- Supabase pgvector:
  - semantic memory storage

- Tavily:
  - web search

- Google OAuth:
  - Gmail
  - Calendar

- Swiggy MCP:
  - Food
  - Instamart
  - Dineout

- Codex Desktop Bridge:
  - local coding agent integration

- Vercel Blob:
  - deployable ESP32 media and state storage

## Storage

Local development:

- Captures under `public/captures/edith/<interactionId>/`.
- Interaction state in `data/edith-interactions.json`.
- Memories in local JSON or Supabase.
- Swiggy session/pending state in `data/swiggy-*.json`.
- Google integration state in local storage or configured integration storage.
- Waitlist signups in `data/edith-waitlist.json` by default.

Deployment-ready:

- `EDITH_STORAGE_DRIVER=vercel-blob` stores captures and interaction state in Vercel Blob.
- Supabase pgvector can store semantic memory.
- Waitlist can optionally use Supabase if `EDITH_WAITLIST_TABLE` is set.

## Frontend Updates

### Main Website

The `/` page has been upgraded into a public EDITH landing page for investors and future customers.

Sections:

- EDITH hero
- value proposition
- capability cards
- customer use cases
- prototype progress
- early access signup
- live local prototype console

New asset:

- `public/edith-hero.png`

### Prototype UI

The live prototype UI remains available on the homepage.

It supports:

- IP camera / old phone mode
- ESP32 capture mode
- latest interaction display
- image preview
- transcript display
- answer display
- device status
- source mode selector
- browser speech controls
- Swiggy/Google integration controls where applicable

### Dev Console

Available at:

```text
/dev/edith
```

It supports:

- provider status
- text simulation
- image/audio simulation
- interaction inspector
- device state/health
- memory
- tools
- agents
- translation
- TTS

## Covered Use Cases

### Accessibility

- Read signs, labels, screens, and printed text.
- Explain what is visible.
- Translate visible text.
- Speak responses aloud.

### Elder Care

- Read medicine labels.
- Explain visible health-related text carefully.
- Advise confirming medical decisions with a doctor, pharmacist, or caregiver.
- Create reminders and notes.

### Student Learning

- Explain diagrams.
- Summarize whiteboards.
- Search educational context.
- Remember learning preferences.
- Capture tasks and study notes.

### Productivity

- Search the web.
- Read and draft Gmail.
- Create calendar events.
- Capture notes/tasks.
- Delegate coding tasks to Codex.
- Remember project decisions.

### Commerce / Daily Life

- Search Swiggy Food.
- Search Instamart groceries.
- Add items to carts.
- Prepare orders.
- Book restaurant tables through Dineout.
- Require confirmation before final purchase/booking.

### Developer / Builder Workflow

- Start Codex sessions.
- Ask Codex to inspect files.
- Ask Codex to review tests.
- Ask for latest Codex result.
- Handle Codex approvals through bridge/app-server mode.

## Demo-Ready Phrases

Reliable demo phrases:

```text
Search the web for the official Raspberry Pi website and tell me the domain.
```

```text
Search Swiggy Food for masala dosa.
```

```text
Check my Swiggy Food cart.
```

```text
Search milk on Instamart.
```

```text
Search my Gmail for newer than seven days and summarize the latest email.
```

```text
Create a Gmail draft to myself with subject EDITH demo and body The demo checklist is ready.
```

```text
What calendar events do I have tomorrow?
```

```text
Create a calendar event tomorrow at 5 PM called EDITH demo rehearsal.
```

```text
Remember that my demo beverage is saffron lemonade.
```

```text
What is my demo beverage?
```

```text
Note this down: the demo needs a final battery check.
```

```text
Add a task to test the glasses microphone before recording.
```

```text
Check my current Codex sessions.
```

```text
Ask Codex to review the unit tests.
```

```text
What is the latest Codex result?
```

## Current Caveats

- The normal ESP32 firmware still uploads full WAV files after recording; true ESP32 realtime streaming STT is available server-side but not yet used by the current firmware.
- Browser/UI updates still rely on polling for latest interactions.
- Instamart `get_cart` can fail with store-unavailable responses even when auth and search work.
- High-risk actions depend on confirmation state and provider availability.
- Codex live operation requires `npm run bridge` to be running separately.
- Cloud deployment requires Vercel Blob for ESP32 media/state if not using a database.
- The RTSP/IP camera flow remains local-first because deployed Vercel functions cannot reach private LAN camera streams.

## Verification Assets

Important docs:

- `docs/EDITH_DEMO_RUNBOOK.md`
- `docs/EDITH_CORE_ARCHITECTURE.md`
- `docs/EDITH_REAL_PROVIDERS.md`
- `docs/EDITH_REAL_PROVIDER_SMOKE_REPORT.md`
- `docs/EDITH_LLM_PLANNER.md`
- `docs/EDITH_CODEX_APP_SERVER_REPORT.md`
- `docs/EDITH_DEV_CONSOLE.md`
- `README.md`

Important tests/scripts:

- `npm run test`
- `npm run build`
- `npm run test:demo-readiness`
- `npm run test:swiggy-smoke`
- `npm run test:google-smoke`
- `npm run test:bridge-smoke`
- `npm run test:planner-eval`

## Strategic Summary

EDITH has moved from a frame-capture prototype into a first-party agent platform for wearable context. The current system supports multimodal perception, speech, memory, tool use, confirmations, local hardware intake, and app integrations. The architecture is still simple enough for local iteration, but it now has clear seams for cloud storage, real providers, and future ESP32 firmware improvements.

