# Intern Onboarding Roadmap: HTML/CSS/JS → Todo List CRUD App

**Date:** 2026-07-06
**Status:** Approved by mentor, ready for implementation plan

## 1. Purpose

Give a brand-new intern (no prior dev experience, currently ~30% through
HTML/CSS challenges on w3schools, about to start JS) a self-paced,
one-week roadmap that:

- Finishes the HTML/CSS she still needs and teaches JS fundamentals from
  scratch.
- Has her apply everything by incrementally building **one real project**:
  a todo list app with full CRUD (Create/Read/Update/Delete), persisted
  in `localStorage`, with a polished, prescriptive-spec UI.
- Teaches the git habit (`add` → `commit` → `push`) as a natural part of
  daily progress, not a separate lesson bolted on.
- Treats her as a future strong developer: real explanations, real
  analogies, real code — not a toy simplified beyond usefulness.

This is a **standalone initiative**, unrelated to the RFPOffice codebase.
It lives in its own fresh repo, not inside the RFPOffice workspace.

## 2. Precedent (why this shape)

The mentor has done this before: `~/Desktop/intern/INTRO-TO-GIT` and
`RBKTN-02-25-intro-to-git` (both on GitHub, `Rafik006` / `RBK-TN` orgs)
use a **fork → clone → solve → commit → push** flow, with lesson prose
in markdown files (`revision/Variables.md`, `Functions.md`) paired with a
numbered-TODO exercises file (`main.js`). This roadmap reuses that proven
shape, scaled up to a full week and tied to one evolving project instead
of disconnected exercises.

## 3. Hosting & git workflow

- **Repo:** `github.com/Rafik006/todolist-html-css-js` (template, owned
  by the mentor). Intern **forks** it to her own GitHub account, clones
  her fork locally, and works there.
- **No PR review** — she commits and pushes directly to her fork's
  `main`, matching the `INTRO-TO-GIT` precedent exactly. The mentor
  reviews by looking at her repo/commit history whenever, not via PRs.
- **Commit cadence:** not just one commit at end of day. Each day's
  `CHALLENGE.md` lists **checkpoints** — working milestones within the
  day (e.g. "HTML skeleton renders", "Add-todo works", "Delete works")
  — and tells her to commit at each one. This is the actual mechanism
  for practicing commit/push discipline, not a single daily commit.
- Root `README.md` includes a git refresher (`status`/`add`/`commit`/
  `push`, what a good commit message looks like) so she isn't blocked
  needing to re-learn git mechanics mid-week.

## 4. Content style rule (non-negotiable, applies to every lesson file)

The intern's English level is not strong. Every `LESSON.md` and
`CHALLENGE.md` must:

- Use **simple, short sentences**. Avoid jargon; when a technical term
  is unavoidable, define it in plain words the first time it's used.
- Include a **real-life analogy for every new concept**, before or
  alongside the technical explanation, so the concept sticks. E.g.:
  - Variable → a labeled box you can put something in and change later.
  - Function → a coffee machine: you put something in, it does a fixed
    job, and gives something back out.
  - Array → a shopping list: an ordered list of items.
  - Object → a contact card: named fields (name, phone, email) holding
    values.
  - `localStorage` → a notebook that remembers what you wrote even after
    you close the browser (unlike a whiteboard, which wipes clean).
  - CRUD → a diary: you can write a new entry (Create), read old entries
    (Read), change one (Update), or tear a page out (Delete).
- Keep code examples short and runnable, not abstract.

## 5. Repo structure

```
todolist-html-css-js/
├── README.md                    — welcome, setup, git refresher, week checklist
├── day-1-html/
│   ├── LESSON.md                — remaining HTML: semantic tags, forms/inputs, lists, attributes, basic a11y
│   └── CHALLENGE.md             — build static HTML skeleton of the todo app (no CSS/JS yet)
├── day-2-css/
│   ├── LESSON.md                — remaining CSS: box model, flexbox, custom properties, pseudo-classes, media queries
│   └── CHALLENGE.md             — style the skeleton to match design-spec/ exactly
├── day-3-js-basics/
│   ├── LESSON.md                — variables, functions, conditionals, arrays, DOM selection/events
│   ├── practice.js              — ~10 small numbered TODO exercises (muscle memory before the real app)
│   └── CHALLENGE.md             — wire up "Add Todo" (in-memory, no persistence yet)
├── day-4-js-crud/
│   ├── LESSON.md                — objects, JSON, the localStorage API, event delegation, state-array pattern
│   ├── practice.js
│   └── CHALLENGE.md             — full CRUD + filters + localStorage persistence
├── day-5-polish/
│   └── CHALLENGE.md             — empty state, validation, keyboard support, a11y pass, project README, final commit
├── design-spec/
│   ├── DESIGN_SPEC.md           — exact palette/font/spacing/states
│   └── reference.html           — static, non-interactive mockup she matches pixel-for-pixel
└── project/
    ├── index.html
    ├── styles.css
    └── script.js
```

One evolving `project/` folder — the same 3 files grow from skeleton →
styled → interactive → polished across the week, rather than a new
folder per day. This mirrors how real front-end work feels.

## 6. Day-by-day curriculum

**Day 1 — HTML foundations + skeleton**
Lesson: semantic elements (`header`/`main`/`footer`/`section`), forms
(`input`, `label`, `button`), lists (`ul`/`li`), attributes (`id`,
`class`, `data-*`), what the DOM is, basic accessibility (labels tied to
inputs, meaningful button text).
Challenge: build `project/index.html` — header/title, input + add
button, empty `ul` for the list, filter tabs (All/Active/Completed),
footer (count + "Clear completed"). No styling, no JS yet.
Done when: valid semantic HTML, opens in browser showing a structurally
complete but unstyled page.

**Day 2 — CSS foundations + design-spec implementation**
Lesson: box model, Flexbox (the main layout tool here), CSS custom
properties (`:root { --var }`), pseudo-classes (`:hover`, `:focus`,
`:checked`), pseudo-elements basics, one media query for mobile widths.
Challenge: style `project/styles.css` to match `design-spec/reference.html`
exactly — colors, spacing, card layout, button/tab/checkbox states,
responsive down to ~375px width. Still no JS — pure CSS-matching.

**Day 3 — JS fundamentals I + first interactivity**
Lesson: `let`/`const`, data types, functions (declarations + arrows),
conditionals, arrays + core methods (`push`, `map`, `filter`, `find`),
template literals, `querySelector`/`addEventListener`.
`practice.js`: ~10 small numbered TODO exercises (string/array
manipulation, simple logic), same spirit as the old `main.js`.
Challenge: wire up "Add Todo" — typing + Enter, or clicking Add, appends
a new `<li>` to the DOM. In-memory only (refresh wipes it — that gap is
tomorrow's motivation for `localStorage`).

**Day 4 — JS fundamentals II + full CRUD + localStorage** (heaviest day)
Lesson: objects, `JSON.stringify`/`parse`, the `localStorage` API, event
delegation, modeling state as an array of `{id, text, completed}`
objects.
Challenge — full CRUD:
- Create: add → push to state array → save to `localStorage` → re-render
- Read: on page load, read from `localStorage` and render
- Update: toggle-complete (checkbox click) and edit text (double-click),
  both persisted
- Delete: remove item, persisted
- Filter tabs actually filter the rendered list; footer shows a live
  count of active items; "Clear completed" removes all completed items
Checkpoint commits after each of Create/Read/Update/Delete lands working.

**Day 5 — Polish, edge cases, ship**
Light lesson, mostly application: empty-state message when the list is
empty, input validation (reject empty/whitespace-only text, trim),
keyboard support (Enter to add, Escape to cancel an in-progress edit), a
quick accessibility pass (focus rings, `aria-label`s on icon-only
buttons), a short `project/README.md` (what it does, how to run it,
screenshot), final commit + push.
Optional stretch goals, clearly marked *optional*, for an early finisher:
dark-mode toggle, due dates, drag-to-reorder.

## 7. Pacing

5 weekdays, ~4–6 focused hours/day. Each day's lesson + challenge is
sized to fit that window with some slack for debugging.

## 8. Design spec (prescriptive)

- **Palette:** background `#F5F6FA`, card `#FFFFFF`, border `#E4E7EC`,
  text `#1F2430`, muted text `#6B7280`, accent `#6C5CE7` (hover
  `#5B4BD6`), success/completed `#22C55E`, danger/delete `#EF4444`
  (hover `#DC2626`).
- **Font:** Google Fonts "Poppins" (400/500/600/700) — one family only,
  kept simple for a beginner.
- **Shape/elevation:** 12px radius cards, 8px radius inputs/buttons,
  full-pill filter tabs and checkbox circles, soft shadow
  `0 4px 20px rgba(20,20,43,0.06)`.
- **Layout:** centered card, max-width 480px, vertical stack — header,
  input row, filter-tab pill group, todo list, footer.
- **States spelled out:** input focus ring; button hover / active
  (scale 0.97) / disabled (when input is empty); todo-row hover tint;
  checked state (accent-filled circle + white check + strikethrough +
  muted text); delete-icon hover (danger tint); active vs inactive
  filter tab.
- `design-spec/reference.html` is a real static mockup of this spec, so
  she matches an actual rendered page rather than just reading hex codes.

## 9. Out of scope

- No backend, no build tooling, no framework — plain HTML/CSS/JS only.
- No automated tests (not appropriate for a first-week beginner); daily
  "Definition of Done" checklists in each `CHALLENGE.md` are the
  verification mechanism instead.
- No PR review flow for this iteration.
- Dark mode / due dates / drag-reorder are optional stretch goals only,
  not required for a "done" week.

## 10. Next step

Hand off to the `writing-plans` skill to produce the concrete
implementation plan: the actual `LESSON.md`/`CHALLENGE.md` content for
each day, `DESIGN_SPEC.md`, `design-spec/reference.html`, and the root
`README.md`.
