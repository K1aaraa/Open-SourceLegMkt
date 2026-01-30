# Build Brief for Software Engineer

## Project: OSL Marketing Ops Hub (Internal + AI Assistant)

### 1) What we are building

A **clean, internal web app** that functions like a “marketing operating system” for the Open-Source Leg. It should feel like a polished internal tool at a company like Apple/Samsung: minimalist, structured, calm, high-clarity.

It is **not** a public marketing website and it should not feel like “training modules.” Instead, it should feel like an internal knowledge + execution environment where someone can:

- access brand assets & templates
- follow playbooks
- track work
- update content safely
- ask an internal-only AI assistant questions grounded in approved OSL resources

### 2) Primary users

- Marketing intern (engineering background, no marketing experience)
- Marketing lead/editor (approves content and assets)
- Admin/PI (read-only overview)

### 3) Core outcomes

If we did this right:

- A new person can operate OSL marketing without needing Kiara.
- Brand stays consistent across posts/decks/flyers.
- Every asset is searchable and versioned.
- Work is trackable (what shipped, what’s next).
- AI answers are grounded and cite internal hub sources.

---

# A. Product Requirements (What it must do)

## A1) Primary modules (must exist)

### Module 1: Knowledge Hub (internal reference pages)

- Structured pages (not random documents)
- Each page reads like a **clear internal reference**, not an onboarding lesson
- Content organized into:
  - OSL context + strategy
  - brand system (logos, colors, fonts, do/don’t)
  - channel playbooks (LinkedIn, X, website updates, Discourse)
  - website update guide (non-coder safe edits)
  - community/outreach playbooks
  - governance + decision logs

**Requirements**

- Support Markdown/MDX pages (or CMS)
- Support internal links between pages
- Support a “last updated” indicator + page owner
- Support “approved” vs “draft” status

### Module 2: Asset Library (templates + photos + deliverables)

A searchable repository for:

- logos, brand kit
- social templates
- slide decks
- flyers/posters
- banners
- business card files
- approved photos & event images

**Required features**

- Upload + preview (image/pdf)
- Tagging + filters (channel, year, event, status)
- Versioning (v1, v2, archived)
- Metadata per asset:
  - title
  - type
  - tags
  - status (draft/approved/archived)
  - usage notes (what can/can’t be changed)
  - linked use cases (e.g., “LinkedIn template”)
- Global search
- “Download package” option for full brand kit

### Module 3: Work Tracker (tasks)

Lightweight internal tracking:

- Kanban view (Backlog / In progress / Review / Done)
- Tasks can link to assets and hub pages

**Task fields**

- title
- owner
- due date
- priority
- category (content, outreach, website, community)
- links to related assets
- notes
- status

### Module 4: Internal AI Assistant (RAG, internal-only)

A chat page inside the website:

- Answers questions using the hub’s internal content
- Must show citations (links to the hub pages/assets it used)
- If it can’t cite sources, it should refuse or say it doesn’t have enough approved info
- Admin controls: choose what gets indexed, re-index button, feedback buttons

---

# B. Look + Feel Requirements (must feel “Apple/Samsung clean”)

## B1) UI design principles

- Minimalist
- High whitespace
- Strong typographic hierarchy
- Subtle borders + soft shadows
- No clutter, no “busy dashboards”
- Clear navigation structure

## B2) Layout requirements

### Global layout

- Top nav (logo + global search + user menu)
- Left sidebar navigation
- Main content area with max width (1100–1200px)
- Consistent spacing and rhythm across all pages

### Navigation structure

Top-level:

1. Hub
2. Brand
3. Playbooks
4. Assets
5. Tasks
6. Website Updates
7. Community
8. AI Assistant
9. Governance

### Page templates

Use consistent templates:

- “Reference page” (docs)
- “Library page” (assets grid + filters)
- “Board page” (kanban)
- “Tool page” (AI assistant)

## B3) Components to build

- Card component (title/subtitle/body/CTA)
- Callouts (info / warning)
- Tag chips
- Data table
- Asset grid with preview
- Global search
- Breadcrumbs
- “Copy link” buttons

---

# C. Technical Requirements (how to build it)

## C1) Recommended stack

- Next.js (App Router)
- Tailwind
- shadcn/ui or custom minimal component system
- Postgres (Supabase recommended)
- Storage for assets (Supabase Storage or S3)
- Auth with domain allowlist
- RAG stack for AI assistant

## C2) Authentication and internal-only enforcement

Even if not private repo, the site itself must be internal-only.

**Rules**

- Require login for all routes
- Allowlist domain(s) for sign-in (e.g., umich.edu)
- RBAC roles:
  - viewer (read only)
  - contributor (upload draft assets, create tasks)
  - editor (approve assets, publish docs)
  - admin (manage users, AI indexing sources)

## C3) Data models required

- Users
- Docs
- Assets
- Tasks
- Logs (audit history)

## C4) Search requirements

- Global search should cover:
  - doc pages titles + content
  - asset titles + tags
  - task titles
- Start simple (Postgres full-text + tags)
- Upgrade later if needed

---

# D. AI Assistant Implementation Detail (tell engineer exactly this)

## D1) Must be RAG with citations

We are not building “a ChatGPT page.” We are building a retrieval-grounded assistant that references OSL internal knowledge.

**RAG Pipeline**

1. Ingest content:
   - MDX docs
   - asset metadata (including usage notes)
2. Chunk documents (~400–800 tokens)
3. Embed + store in vector DB
4. On query:
   - retrieve top-k chunks
   - generate answer
   - display citations linking to those sources

## D2) Guardrails (non-negotiable)

- If no citations → refuse or escalate (“I don’t have that internal info; check X”)
- No technical claims about OSL performance without citing internal/approved sources
- Don’t reveal restricted docs to unauthorized roles

## D3) Admin controls

- Reindex button
- View what sources were retrieved
- Toggle which sections are indexable
- Feedback capture

---

# E. Content Strategy Requirements (so it doesn’t feel like onboarding)

This is important: the site shouldn’t feel like “training.”

### How content should be presented

- As **internal references** and “operating playbooks”
- Like a company internal wiki + execution environment
- No “Welcome to marketing!” tone
- Use calm headings like:
  - “Brand System”
  - “Channel Playbooks”
  - “Release Process”
  - “How we publish”
  - “What we track”
  - “Standards and examples”
- Embed “examples” and “approved patterns” instead of teaching tone

### Content pattern per page

Each page should have:

- Purpose (1 sentence)
- Standard (what we do)
- Process (how we do it)
- Examples (good vs bad)
- Templates/assets linked

---

# F. MVP Scope (what to build first)

## MVP (must ship)

- Auth + allowlist + RBAC
- Docs system (MDX + navigation)
- Asset library (upload, preview, tags, version, search)
- Tasks board (basic kanban)
- AI assistant with RAG + citations

## Phase 2

- Calendar view
- Monthly report export
- Analytics dashboards (content KPIs)
- Automated reminders

---

# G. “Done” Definition (acceptance criteria)

The build is complete when:

1. A user can log in and navigate the hub with clean UI.
2. Docs pages exist and are editable.
3. Asset library supports upload, tagging, preview, versioning, and search.
4. Task board works.
5. AI answers always cite internal sources or refuses.
6. Admin/editor can approve/publish content without code changes.

---

# H. Engineer deliverables (what you want them to hand you)

- Deployed internal site
- Repo with clear README and environment setup
- Admin panel for content + indexing
- Seed content pages + seed templates for demo
- Permission roles implemented
- Basic audit logs

---

## One more thing (PM reality check)

If the engineer is solo, you’ll get the best results by forcing a **two-track build**:

- Track 1: platform + UI + modules (engineer)
- Track 2: content population + templates + examples (you)

Because if the site is empty, it won’t work no matter how beautiful it is.

---

## Next details to confirm

If you want, specify:

- whether you’re using **Supabase** or not
- whether login is **umich only**
- whether docs are **MDX** or CMS

…and we can extend this into:

- exact routes (`/brand`, `/assets`, etc.)
- exact database schema fields
- a Jira-style epic/story backlog
