# Intern Todolist Roadmap Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Author the complete `todolist-html-css-js` repo: a 5-day, self-paced HTML/CSS/JS curriculum (lesson + challenge per day) that has a beginner intern build a todo-list CRUD app with `localStorage`, matching a prescriptive design spec, while practicing git commit/push.

**Architecture:** One evolving `project/` folder (`index.html`/`styles.css`/`script.js`) that the intern builds across 5 days, driven by per-day `LESSON.md` + `CHALLENGE.md` pairs. A `design-spec/` folder gives her an exact visual target (`DESIGN_SPEC.md` + a static `reference.html` mockup) to match. This plan produces the **instructional scaffolding only** — `LESSON.md`, `CHALLENGE.md`, `practice.js`, `DESIGN_SPEC.md`, `reference.html`, root `README.md`. It does **not** write `project/index.html`/`styles.css`/`script.js` — those are the intern's own work product, deliberately left for her to build.

**Tech Stack:** Plain HTML5, CSS3 (Flexbox, custom properties), vanilla JS (ES6+), `localStorage` Web API, Google Fonts (Poppins). No build tools, no frameworks, no backend.

## Global Constraints

- **Content style (every LESSON.md/CHALLENGE.md):** simple, short-sentence English (intern's English level is not strong); every new technical concept must be introduced with a real-life analogy before or alongside the technical explanation.
- **Git workflow:** intern forks `github.com/Rafik006/todolist-html-css-js`, clones her fork, commits + pushes directly to her fork's `main` — no PR review for this iteration.
- **Pacing:** 5 weekdays, ~4-6 focused hours/day per day-folder.
- **Design spec is prescriptive** — exact palette/font/spacing/states below (Task 2), not open-ended.
- **Out of scope:** no backend, no build tooling, no framework, no automated test suite for the intern's code (her `CHALLENGE.md` Definition-of-Done checklists are the verification mechanism). Dark mode / due dates / drag-reorder are optional stretch goals only, never required.
- **DOM contract (fixed now, used consistently in every later task — see Task 3 for the full list):** `#todo-form`, `#todo-input`, `#add-btn`, `.filter-tab[data-filter]`, `#todo-list`, `.todo-item`, `.todo-check`, `.todo-text`, `.todo-delete`, `#empty-state`, `#items-left`, `#clear-completed`.
- **Design tokens (fixed now, used consistently in Task 2 and every CHALLENGE.md that touches CSS):** background `#F5F6FA`, card `#FFFFFF`, border `#E4E7EC`, text `#1F2430`, muted text `#6B7280`, accent `#6C5CE7` (hover `#5B4BD6`), success `#22C55E`, danger `#EF4444` (hover `#DC2626`); font "Poppins" (400/500/600/700); radii 12px (card) / 8px (input/button) / pill (tabs, checkbox); shadow `0 4px 20px rgba(20,20,43,0.06)`.
- **State model (fixed now, used in Day 3/4):** each todo is `{ id: string, text: string, completed: boolean }`; `id` generated with `Date.now().toString()`; full array persisted under `localStorage` key `"todos"` via `JSON.stringify`/`JSON.parse`.

---

### Task 1: Repo scaffold — root README + gitignore + project placeholder

**Files:**
- Create: `README.md`
- Create: `.gitignore`
- Create: `project/README.md`

**Interfaces:**
- Produces: the setup + git-refresher instructions every later day's `CHALLENGE.md` assumes the intern has already read.

- [ ] **Step 1: Write `README.md`**

```markdown
# My Todo List — 1 Week Coding Challenge

Welcome! This week you are going to learn **HTML**, **CSS**, and
**JavaScript** by building a real project: a **Todo List app**. You will
be able to add tasks, check them done, edit them, delete them, and your
tasks will still be there tomorrow (we save them in your browser).

You don't need to know anything yet. Go slow, read carefully, and try
things yourself before asking for help. Every big developer started
exactly where you are now.

## What you will build

A todo list app that:
- Adds a new task when you type it and press "Add".
- Lets you mark a task as done (with a nice checkmark).
- Lets you edit a task's text.
- Lets you delete a task.
- Remembers your tasks even after you close the browser.
- Looks clean and professional (you will match an exact design).

## What you will learn

- **Day 1:** HTML — the skeleton of a web page.
- **Day 2:** CSS — the styling and colors of a web page.
- **Day 3:** JavaScript basics — how to make a page interactive.
- **Day 4:** More JavaScript — saving data, and the 4 basic actions every
  app needs: Create, Read, Update, Delete (we call this **CRUD**).
- **Day 5:** Polish — making small details feel great, and writing docs.

You will also practice **git** — a tool that saves snapshots of your
work, like a save-point in a video game, so you never lose progress.

## One-time setup (do this once, before Day 1)

1. **Fork this repo.** "Fork" means: make your own copy of this repo on
   your own GitHub account. Click the "Fork" button on the GitHub page.
2. **Clone your fork** — this downloads your copy onto your computer.
   Open a terminal and run (replace `YourUserName`):
   ```sh
   git clone https://github.com/YourUserName/todolist-html-css-js.git
   cd todolist-html-css-js
   ```
3. **Open the folder in VS Code** (or any code editor).
4. (Optional, but nice) Install the **"Live Server"** extension in VS
   Code. It lets you see your changes in the browser instantly. If you
   don't want to install anything, you can just double-click
   `project/index.html` to open it in your browser — that also works
   fine for this project.
5. Set your name and email in git, so your commits are labeled as yours:
   ```sh
   git config --global user.name "Your Name"
   git config --global user.email "your@email.com"
   ```

## Git refresher — the 4 commands you'll use every day

Think of git like a **save-game system**. `commit` is like saving your
game at a checkpoint. `push` is like uploading that save to the cloud, so
it's safe even if your computer breaks.

```sh
git status              # see what files changed
git add <file>           # pick which changes to save (like selecting what to save)
git commit -m "message"  # save a checkpoint, with a short note about what you did
git push origin main     # upload your checkpoints to GitHub
```

A good commit message is short and says **what** changed, for example:
`"Add HTML skeleton for todo app"` or `"Style the todo item hover state"`.
Not: `"stuff"` or `"changes"`.

## How each day works

Each day has a folder, like `day-1-html/`. Inside:

- **`LESSON.md`** — read this first. It teaches you the ideas for the day,
  with simple explanations and real-life examples.
- **`CHALLENGE.md`** — after reading the lesson, do this. It tells you
  exactly what to build, with a checklist. It also tells you when to
  `git commit` and `git push` — do this every time it tells you to, even
  if the feature feels small. That's how you build the commit habit.

All your actual app code lives in one place: the `project/` folder. It
starts nearly empty, and you will keep adding to the same 3 files
(`index.html`, `styles.css`, `script.js`) all week.

There's also a `design-spec/` folder — it shows you **exactly** what your
app should look like once it's styled (Day 2).

## Your week checklist

- [ ] Day 1 — HTML skeleton done and pushed
- [ ] Day 2 — CSS matches the design spec, done and pushed
- [ ] Day 3 — Adding a task works (not saved yet), done and pushed
- [ ] Day 4 — Full CRUD + saving works, done and pushed
- [ ] Day 5 — Polish + project README done and pushed

Good luck! Take your time, and don't be afraid to make mistakes — that's
how you learn.
```

- [ ] **Step 2: Write `.gitignore`**

```
.DS_Store
Thumbs.db
.vscode/
```

- [ ] **Step 3: Write `project/README.md`** (placeholder explaining the empty folder)

```markdown
# project/

This folder is empty on purpose!

Starting on **Day 1**, you will create `index.html` here. On Day 2 you'll
add `styles.css`, and on Day 3 you'll add `script.js`. By the end of the
week, this folder holds your whole todo list app.

Follow the `CHALLENGE.md` file in each day's folder — it tells you
exactly what to create here.
```

- [ ] **Step 4: Verify**

Run: `test -f README.md && test -f .gitignore && test -f project/README.md && echo OK`
Expected: `OK`

Run: `grep -c "git push origin main" README.md`
Expected: a number ≥ 1 (confirms the git refresher is present)

- [ ] **Step 5: Commit**

```bash
cd ~/Desktop/intern/todolist-html-css-js
git add README.md .gitignore project/README.md
git commit -m "docs: add root README, gitignore, and project placeholder"
```

---

### Task 2: Design spec — DESIGN_SPEC.md + reference.html

**Files:**
- Create: `design-spec/DESIGN_SPEC.md`
- Create: `design-spec/reference.html`

**Interfaces:**
- Consumes: design tokens + DOM contract from Global Constraints above.
- Produces: the exact class names (`.app-card`, `.todo-form`, `.todo-input`,
  `.add-btn`, `.filter-tabs`, `.filter-tab`, `.todo-list`, `.todo-item`,
  `.todo-check`, `.todo-text`, `.todo-delete`, `.app-footer`, `.clear-btn`)
  that Day 1's HTML challenge, Day 2's CSS challenge, and Day 3/4's JS
  challenges must all use consistently.

- [ ] **Step 1: Write `design-spec/DESIGN_SPEC.md`**

```markdown
# Design Spec — Todo List App

This is the exact look your app should have once you finish Day 2 (CSS).
Open `reference.html` in your browser next to your own `project/index.html`
and compare them side by side.

## Colors

| Name | Hex | Used for |
|---|---|---|
| Background | `#F5F6FA` | page background |
| Card | `#FFFFFF` | the main white card |
| Border | `#E4E7EC` | hairline borders |
| Text | `#1F2430` | main text |
| Muted text | `#6B7280` | subtitles, counts, secondary text |
| Accent | `#6C5CE7` | Add button, active filter tab, checked box |
| Accent (hover) | `#5B4BD6` | Add button on hover |
| Success | `#22C55E` | completed checkmark |
| Danger | `#EF4444` | delete icon on hover |
| Danger (hover) | `#DC2626` | delete icon, darker hover |

## Font

Google Fonts **"Poppins"**, weights 400, 500, 600, 700. Add this to the
`<head>` of your `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
```

## Spacing scale

Use these everywhere instead of random numbers, so spacing stays
consistent: `4px, 8px, 12px, 16px, 24px, 32px`.

## Shapes

- Card corners: `12px` rounded.
- Input/button corners: `8px` rounded.
- Filter tabs and the round checkbox: fully round (`border-radius: 9999px`).
- Card shadow: `box-shadow: 0 4px 20px rgba(20, 20, 43, 0.06);` (soft, not a
  hard black shadow).

## Layout

One centered white card, max-width `480px`, vertical stack, in this order:
1. Header (title + subtitle)
2. The add-task form (input + button, side by side)
3. Filter tabs (All / Active / Completed)
4. The list of tasks
5. Footer (items-left count + "Clear completed" button)

## States (what changes on interaction)

- **Input focus:** border turns accent-colored, plus a soft glow ring.
- **Add button:** normal = accent background; hover = darker accent;
  clicked = shrinks very slightly (`scale(0.97)`); disabled (empty input)
  = grey background, not clickable.
- **Todo row hover:** very light background tint.
- **Checkbox:** unchecked = just a circle outline; checked = filled with
  the success color plus a white checkmark, and the task text gets a
  strikethrough and turns muted-colored.
- **Delete icon:** normal = muted color, no background; hover = danger
  color with a soft red background tint.
- **Filter tab:** active = accent background, white text; inactive =
  transparent background, muted text; hover (inactive) = light background
  tint.

## Reference file

`reference.html` in this folder is a real, working example of this exact
design (no JavaScript — it's just a picture, not an interactive app).
Open it in your browser and compare it to your own app as you build.
```

- [ ] **Step 2: Write `design-spec/reference.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Design Reference — Todo List (no JS here, just the look)</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  :root {
    --color-bg: #F5F6FA;
    --color-card: #FFFFFF;
    --color-border: #E4E7EC;
    --color-text: #1F2430;
    --color-text-muted: #6B7280;
    --color-accent: #6C5CE7;
    --color-accent-hover: #5B4BD6;
    --color-success: #22C55E;
    --color-danger: #EF4444;
    --space-1: 4px;
    --space-2: 8px;
    --space-3: 12px;
    --space-4: 16px;
    --space-5: 24px;
    --space-6: 32px;
    --radius-card: 12px;
    --radius-input: 8px;
    --radius-pill: 9999px;
    --shadow-card: 0 4px 20px rgba(20, 20, 43, 0.06);
  }

  * { box-sizing: border-box; }

  body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: var(--space-6) var(--space-4);
    background: var(--color-bg);
    font-family: 'Poppins', sans-serif;
    color: var(--color-text);
  }

  .app-card {
    width: 100%;
    max-width: 480px;
    background: var(--color-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-card);
    box-shadow: var(--shadow-card);
    padding: var(--space-6);
  }

  .app-header h1 {
    margin: 0;
    font-size: 24px;
    font-weight: 700;
  }

  .app-subtitle {
    margin: var(--space-1) 0 var(--space-5);
    color: var(--color-text-muted);
    font-size: 14px;
  }

  .todo-form {
    display: flex;
    gap: var(--space-2);
    margin-bottom: var(--space-4);
  }

  .todo-input {
    flex: 1;
    padding: var(--space-3) var(--space-4);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-input);
    font-family: inherit;
    font-size: 14px;
    color: var(--color-text);
    outline: none;
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
  }

  .todo-input:focus {
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px rgba(108, 92, 231, 0.15);
  }

  .add-btn {
    padding: var(--space-3) var(--space-5);
    border: none;
    border-radius: var(--radius-input);
    background: var(--color-accent);
    color: #fff;
    font-family: inherit;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.15s ease, transform 0.1s ease;
  }

  .add-btn:hover { background: var(--color-accent-hover); }
  .add-btn:active { transform: scale(0.97); }
  .add-btn:disabled {
    background: var(--color-border);
    color: var(--color-text-muted);
    cursor: not-allowed;
  }

  .filter-tabs {
    display: flex;
    gap: var(--space-2);
    margin-bottom: var(--space-4);
  }

  .filter-tab {
    padding: var(--space-2) var(--space-4);
    border: none;
    border-radius: var(--radius-pill);
    background: transparent;
    color: var(--color-text-muted);
    font-family: inherit;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.15s ease, color 0.15s ease;
  }

  .filter-tab:hover { background: var(--color-bg); }

  .filter-tab.active {
    background: var(--color-accent);
    color: #fff;
  }

  .todo-list {
    list-style: none;
    margin: 0 0 var(--space-4);
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
  }

  .todo-item {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    padding: var(--space-3);
    border-radius: var(--radius-input);
    transition: background 0.15s ease;
  }

  .todo-item:hover { background: var(--color-bg); }

  .todo-check {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    border-radius: var(--radius-pill);
    border: 2px solid var(--color-border);
    background: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    font-size: 12px;
    line-height: 1;
    color: #fff;
  }

  .todo-check.checked {
    background: var(--color-success);
    border-color: var(--color-success);
  }

  .todo-text {
    flex: 1;
    font-size: 14px;
  }

  .todo-item.completed .todo-text {
    text-decoration: line-through;
    color: var(--color-text-muted);
  }

  .todo-delete {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    color: var(--color-text-muted);
    border-radius: var(--radius-input);
    cursor: pointer;
    font-size: 14px;
    transition: background 0.15s ease, color 0.15s ease;
  }

  .todo-delete:hover {
    background: rgba(239, 68, 68, 0.1);
    color: var(--color-danger);
  }

  .app-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: var(--space-4);
    border-top: 1px solid var(--color-border);
    font-size: 13px;
    color: var(--color-text-muted);
  }

  .clear-btn {
    border: none;
    background: transparent;
    color: var(--color-text-muted);
    font-family: inherit;
    font-size: 13px;
    cursor: pointer;
    text-decoration: underline;
  }

  .clear-btn:hover { color: var(--color-danger); }
</style>
</head>
<body>
<main class="app-card">
  <header class="app-header">
    <h1>My Tasks</h1>
    <p class="app-subtitle">Stay on top of your day</p>
  </header>

  <form class="todo-form">
    <input type="text" class="todo-input" placeholder="What do you need to do?">
    <button type="submit" class="add-btn">Add</button>
  </form>

  <div class="filter-tabs">
    <button class="filter-tab active">All</button>
    <button class="filter-tab">Active</button>
    <button class="filter-tab">Completed</button>
  </div>

  <ul class="todo-list">
    <li class="todo-item">
      <button class="todo-check" aria-label="Mark complete"></button>
      <span class="todo-text">Buy milk and eggs</span>
      <button class="todo-delete" aria-label="Delete task">✕</button>
    </li>
    <li class="todo-item">
      <button class="todo-check" aria-label="Mark complete"></button>
      <span class="todo-text">Finish the CSS lesson</span>
      <button class="todo-delete" aria-label="Delete task">✕</button>
    </li>
    <li class="todo-item completed">
      <button class="todo-check checked" aria-label="Mark incomplete">✓</button>
      <span class="todo-text">Read the HTML lesson</span>
      <button class="todo-delete" aria-label="Delete task">✕</button>
    </li>
  </ul>

  <footer class="app-footer">
    <span>2 items left</span>
    <button class="clear-btn">Clear completed</button>
  </footer>
</main>
</body>
</html>
```

- [ ] **Step 3: Verify**

Run: `grep -o '#[0-9A-F]\{6\}' design-spec/DESIGN_SPEC.md | sort -u | wc -l`
Expected: `9` (the 9 distinct hex colors documented)

Run: `grep -c "todo-item\|todo-check\|todo-delete\|filter-tab" design-spec/reference.html`
Expected: a number ≥ 4 (confirms the required class names are present)

Run: `python3 -c "import re,sys; s=open('design-spec/reference.html').read(); assert s.count('<div')+s.count('<header')+s.count('<footer')+s.count('<form')+s.count('<ul')+s.count('<button')+s.count('<span')+s.count('<li') == s.count('</div>')+s.count('</header>')+s.count('</footer>')+s.count('</form>')+s.count('</ul>')+s.count('</button>')+s.count('</span>')+s.count('</li>'); print('OK')"`
Expected: `OK` (basic open/close tag balance sanity check)

- [ ] **Step 4: Commit**

```bash
git add design-spec/DESIGN_SPEC.md design-spec/reference.html
git commit -m "docs: add design spec and static reference mockup"
```

---

### Task 3: Day 1 — HTML lesson + challenge

**Files:**
- Create: `day-1-html/LESSON.md`
- Create: `day-1-html/CHALLENGE.md`

**Interfaces:**
- Consumes: DOM contract from Global Constraints.
- Produces: the exact `id`/`class` names that Day 2 (CSS), Day 3 (add-todo),
  and Day 4 (CRUD) all target: `#todo-form`, `#todo-input`, `#add-btn`,
  `.filter-tab` (`data-filter="all"/"active"/"completed"`), `#todo-list`,
  `#empty-state`, `#items-left`, `#clear-completed`.

- [ ] **Step 1: Write `day-1-html/LESSON.md`**

```markdown
# Day 1: HTML — Building the Skeleton

Today you learn HTML and build the frame of your todo app. Think of
today like building the **frame of a house** — no paint, no furniture
yet, just the walls and rooms in the right place.

## 1. What is HTML?

HTML stands for HyperText Markup Language. It's not a programming
language — it doesn't calculate anything. It just describes **what is on
the page**: "this is a title", "this is a button", "this is a list".

## 2. The basic skeleton of every page

Every HTML page starts with the same shape:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Page</title>
</head>
<body>
  <!-- everything visible goes here -->
</body>
</html>
```

- `<!DOCTYPE html>` tells the browser "this is a modern HTML page".
- `<head>` holds information ABOUT the page (its title, fonts, styles) —
  nothing in here is directly visible.
- `<body>` holds everything the user actually SEES.

## 3. Semantic tags — labeled rooms in a house

A house isn't just four walls — it has labeled rooms: kitchen, bedroom,
bathroom. HTML has "semantic" tags that work the same way — they say what
each part of the page is FOR:

- `<header>` — the top area, like the entrance of a house.
- `<main>` — the main content, like the living room.
- `<footer>` — the bottom area, like a basement or utility room.
- `<section>` — a labeled section inside a bigger area.

Using the right tag for the right job helps browsers, search engines, and
people using screen readers understand your page.

## 4. Attributes — a name tag with extra details

An attribute adds extra information to a tag, like a name tag at a
conference that also lists your job title. Attributes go inside the
opening tag:

```html
<button id="add-btn" class="add-btn">Add</button>
```

- `id="add-btn"` — a unique name for THIS ONE element (only one element
  on the page should ever have a given id). Later, JavaScript uses the id
  to find this exact element.
- `class="add-btn"` — a label you can reuse on many elements, mainly used
  by CSS to style them the same way.
- Other common attributes: `type`, `placeholder`, `href`, `src`.

## 5. Forms and inputs — like a form at the doctor's office

When you visit a doctor for the first time, you fill out a paper form:
name, text boxes to write in, a button to submit it. HTML forms work the
same way:

```html
<form>
  <input type="text" placeholder="Your name">
  <button type="submit">Send</button>
</form>
```

- `<input type="text">` — a box where the user types text.
- `placeholder="..."` — light grey hint text shown before they type
  anything (it disappears once they start typing).
- `<button type="submit">` — pressing it submits the form.

## 6. Lists — like a shopping list

A shopping list is just an ordered set of items. HTML has the same idea:

```html
<ul>
  <li>Milk</li>
  <li>Eggs</li>
  <li>Bread</li>
</ul>
```

- `<ul>` = "unordered list" (a list with bullet points, no numbers).
- `<li>` = "list item" — one entry in the list.

Our todo list will be one `<ul>`, and every task will be one `<li>`.

## 7. The DOM (just a preview — JavaScript comes on Day 3)

When a browser loads your HTML, it builds a tree in memory called the
**DOM** (Document Object Model). Think of your HTML as the blueprint, and
the DOM as the actual built house, that JavaScript can later walk into
and rearrange furniture in (add elements, remove elements, change text).
You don't need to do anything with the DOM today — just know it exists,
and that `id`s and `class`es you add today are the "door handles"
JavaScript will grab onto later.

## 8. Accessibility basics — clear signs for everyone

A well-designed building has clear signs so EVERYONE can find their way,
including people who can't see well. Websites need the same thing:

- Every input should have a `label` or an `aria-label` describing what
  it's for, so someone using a screen reader knows what to type.
- Buttons that only show an icon (no text) need an `aria-label`, e.g.
  `<button aria-label="Delete task">✕</button>`.

## Recap

Today you learned: the page skeleton, semantic tags (`header`/`main`/
`footer`), attributes (`id`/`class`), forms (`input`/`button`), lists
(`ul`/`li`), what the DOM is, and basic accessibility. Now go build the
skeleton of your todo app in `CHALLENGE.md`.
```

- [ ] **Step 2: Write `day-1-html/CHALLENGE.md`**

```markdown
# Day 1 Challenge: Build the Todo App Skeleton

**Goal:** create `project/index.html` — the HTML skeleton of your todo
app. No colors, no fonts, no JavaScript yet — just the correct structure.
It will look plain and ugly today. That's expected! Day 2 makes it pretty.

## What to build

Create the file `project/index.html`. Inside `<body>`, build this
structure. **Use these exact `id` and `class` names** — later lessons
(CSS, then JavaScript) depend on them being exactly right:

- A `<main class="app-card">` wrapping everything below.
- Inside it, a `<header class="app-header">` containing:
  - An `<h1>` with your app's title (e.g. "My Tasks").
  - A `<p class="app-subtitle">` with a short subtitle (e.g. "Stay on top
    of your day").
- A `<form id="todo-form" class="todo-form">` containing:
  - An `<input type="text" id="todo-input" class="todo-input">` with a
    `placeholder` and an `aria-label` (e.g. `aria-label="New task"`).
  - A `<button type="submit" id="add-btn" class="add-btn">Add</button>`.
- A `<div class="filter-tabs">` containing 3 buttons:
  - `<button class="filter-tab active" data-filter="all">All</button>`
  - `<button class="filter-tab" data-filter="active">Active</button>`
  - `<button class="filter-tab" data-filter="completed">Completed</button>`
- An empty `<ul id="todo-list" class="todo-list"></ul>` — leave it empty,
  JavaScript will fill it with tasks on Day 3/4.
- A `<p id="empty-state" class="empty-state" hidden>No tasks yet. Add your
  first one above!</p>` — the `hidden` attribute hides it for now.
- A `<footer class="app-footer">` containing:
  - `<span id="items-left">0 items left</span>`
  - `<button id="clear-completed" class="clear-btn">Clear completed</button>`

Don't forget the page skeleton around it (`<!DOCTYPE html>`, `<html
lang="en">`, `<head>` with a `<meta charset="UTF-8">` and a `<title>`).

## Definition of Done

- [ ] `project/index.html` exists and opens in a browser without errors.
- [ ] Every id/class listed above is present, spelled exactly as shown.
- [ ] The page shows: a title, a subtitle, a text box + Add button, 3
  filter buttons, an empty list area, and a footer with a count + a
  "Clear completed" button (even though nothing works yet — that's fine).
- [ ] You used at least one semantic tag correctly (`header`, `main`,
  `footer`, `form`).

## Commit checkpoint

Once the page looks structurally right in your browser (even unstyled):

```sh
git add project/index.html
git commit -m "Add HTML skeleton for todo app"
git push origin main
```

Check your checklist box for Day 1 in the root `README.md`, then move to
`day-2-css/LESSON.md`.
```

- [ ] **Step 3: Verify**

Run: `grep -c "coffee machine\|labeled box\|shopping list\|doctor" day-1-html/LESSON.md`
(Note: Day 1 doesn't use "coffee machine"/"labeled box" — this specific
check is for later days. For Day 1, instead run:)

Run: `grep -c "house\|shopping list\|doctor" day-1-html/LESSON.md`
Expected: a number ≥ 3 (confirms real-life analogies are present)

Run: `grep -c "todo-input\|add-btn\|todo-list\|filter-tab\|items-left\|clear-completed\|empty-state" day-1-html/CHALLENGE.md`
Expected: a number ≥ 7 (confirms every required id/class from the DOM
contract is specified in the challenge)

- [ ] **Step 4: Commit**

```bash
git add day-1-html/LESSON.md day-1-html/CHALLENGE.md
git commit -m "docs: add Day 1 HTML lesson and challenge"
```

---

### Task 4: Day 2 — CSS lesson + challenge

**Files:**
- Create: `day-2-css/LESSON.md`
- Create: `day-2-css/CHALLENGE.md`

**Interfaces:**
- Consumes: class names from Task 3, design tokens from Global Constraints,
  `design-spec/reference.html` from Task 2.
- Produces: a styled `project/styles.css` (built by the intern) that Day
  3/4 JavaScript will toggle classes on (`.completed`, `.checked`,
  `.active`) without needing new CSS.

- [ ] **Step 1: Write `day-2-css/LESSON.md`**

```markdown
# Day 2: CSS — Making It Look Good

Today you style the skeleton you built yesterday. If HTML is the frame
of a house, CSS is the paint, the furniture, and the layout — it's what
makes a house feel like a home.

## 1. The box model — a picture frame

Every element on a page is a box, made of 4 layers, just like a framed
picture on a wall:

- **content** — the picture itself (your text or image).
- **padding** — the white mat around the picture, inside the frame.
- **border** — the frame itself.
- **margin** — the empty wall space around the frame, keeping it apart
  from other pictures.

```css
.card {
  padding: 16px;   /* space inside, between border and content */
  border: 1px solid #E4E7EC;
  margin: 24px;    /* space outside, between this box and others */
}
```

## 2. Flexbox — arranging chairs in a row

Flexbox is a way to line up elements, like arranging chairs around a
table — all in a row, or all in a column, evenly spaced, and it
automatically adjusts if you add or remove a chair.

```css
.todo-form {
  display: flex;      /* turn on flexbox */
  gap: 8px;           /* space between each child */
}
```

By default, `display: flex` lines children up in a row, side by side.
Add `flex-direction: column;` to stack them instead, top to bottom.

## 3. CSS custom properties (variables) — your paint palette

Imagine painting every room in a house using the exact same 5 paint cans,
instead of mixing new paint every time — everything matches. CSS custom
properties work the same way: define a color once, reuse it everywhere.

```css
:root {
  --color-accent: #6C5CE7;
}

.add-btn {
  background: var(--color-accent);
}
```

If you ever want to change your accent color, you change it in ONE place
(`:root`), and it updates everywhere automatically.

## 4. Pseudo-classes — a light switch that glows when your hand is near

A pseudo-class styles an element only in a certain SITUATION, without you
needing to add a new class in your HTML:

- `:hover` — when the mouse is over the element (like a light switch that
  glows softly when your hand is near it).
- `:focus` — when the element is selected/active (like a text box you
  just clicked into).
- `:checked` — for checkboxes, when they're checked.

```css
.add-btn:hover {
  background: #5B4BD6;
}
```

## 5. Transitions — a door closing softly, not slamming

A transition makes a CSS change happen smoothly over time, instead of
instantly — like a soft-close door instead of one that slams shut.

```css
.add-btn {
  transition: background 0.15s ease;
}
```

Now when `.add-btn`'s background changes (e.g. on hover), it fades
smoothly over 0.15 seconds instead of snapping instantly.

## 6. Media queries — clothes that fit the room they're in

A media query changes your CSS depending on the screen size — like
clothes that resize themselves depending on whether you're in a big room
or a small one.

```css
@media (max-width: 480px) {
  .app-card {
    padding: 16px;
  }
}
```

This rule only applies when the screen is 480px wide or narrower (like a
phone).

## Recap

Today you learned: the box model, Flexbox layout, CSS variables,
pseudo-classes (`:hover`/`:focus`/`:checked`), transitions, and media
queries. Now go style your app in `CHALLENGE.md` to match the design
spec exactly.
```

- [ ] **Step 2: Write `day-2-css/CHALLENGE.md`**

```markdown
# Day 2 Challenge: Style Your Todo App

**Goal:** create `project/styles.css`, link it in `project/index.html`,
and style everything to match `design-spec/reference.html` exactly.

## Steps

1. In `project/index.html`'s `<head>`, add the Google Font link and a
   link to your stylesheet:
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="styles.css">
   ```
2. Open `design-spec/DESIGN_SPEC.md` and `design-spec/reference.html`
   side-by-side with your own `project/index.html` in the browser.
3. In `project/styles.css`, define the CSS variables listed in
   `DESIGN_SPEC.md` inside a `:root { ... }` block first.
4. Style each part, one at a time, checking your browser after each one:
   - `.app-card` — the white card, centered, max-width 480px, rounded
     corners, soft shadow.
   - `.app-header h1` and `.app-subtitle` — sizes and colors.
   - `.todo-form`, `.todo-input`, `.add-btn` — the input + button row,
     plus the input's `:focus` state and the button's `:hover`/`:active`
     states.
   - `.filter-tabs` and `.filter-tab` (including `.filter-tab.active`).
   - `.todo-list` and `.todo-item` (including the `:hover` tint).
   - `.todo-check` (including `.todo-check.checked`) and `.todo-delete`
     (including its hover color).
   - `.todo-item.completed .todo-text` — strikethrough + muted color.
   - `.app-footer` and `.clear-btn`.
   - A media query for screens narrower than 480px.

**Tip:** you don't have JavaScript yet, so you can't click things to see
the `.completed`/`.checked`/`.active` states. To test them, temporarily
add the class by hand in your HTML (e.g. `class="todo-item completed"`),
look at it in the browser, then remove it once you're happy — it will be
added automatically by your own code on Day 3/4.

## Definition of Done

- [ ] `project/styles.css` exists and is linked from `index.html`.
- [ ] Every color, spacing value, and radius matches `DESIGN_SPEC.md`.
- [ ] Your page, viewed in the browser, looks the same as
  `design-spec/reference.html` (colors, spacing, fonts, shapes).
- [ ] Input focus, button hover/active, filter-tab active, todo-item
  hover, checked, completed, and delete-hover states all look right when
  tested (see the Tip above).
- [ ] The layout still looks good on a narrow (~375px) browser window.

## Commit checkpoints

Commit after each milestone, not just once at the end:

```sh
git add project/index.html project/styles.css
git commit -m "Style the app card, header, and form"
# ... keep working ...
git add project/styles.css
git commit -m "Style filter tabs and todo item states"
# ... when fully matching the design spec ...
git add project/styles.css
git commit -m "Finish matching todo app to design spec"
git push origin main
```

Check your Day 2 box in the root `README.md`, then move to
`day-3-js-basics/LESSON.md`.
```

- [ ] **Step 3: Verify**

Run: `grep -c "picture frame\|arranging chairs\|paint palette\|light switch\|door\|clothes" day-2-css/LESSON.md`
Expected: a number ≥ 5 (confirms real-life analogies present)

Run: `grep -c "todo-item\|todo-check\|filter-tab\|todo-delete\|app-card" day-2-css/CHALLENGE.md`
Expected: a number ≥ 5 (confirms the challenge references the real class
names from Day 1/design-spec, not made-up ones)

- [ ] **Step 4: Commit**

```bash
git add day-2-css/LESSON.md day-2-css/CHALLENGE.md
git commit -m "docs: add Day 2 CSS lesson and challenge"
```

---

### Task 5: Day 3 — JS basics lesson + practice + challenge

**Files:**
- Create: `day-3-js-basics/LESSON.md`
- Create: `day-3-js-basics/practice.js`
- Create: `day-3-js-basics/CHALLENGE.md`

**Interfaces:**
- Consumes: `#todo-form`, `#todo-input`, `#todo-list`, `.todo-item`,
  `.todo-check`, `.todo-text`, `.todo-delete` from Task 3.
- Produces: the in-memory "Add Todo" behavior that Task 6 (Day 4) upgrades
  to persist to `localStorage`.

- [ ] **Step 1: Write `day-3-js-basics/LESSON.md`**

```markdown
# Day 3: JavaScript Basics — Making the Page Interactive

HTML is the skeleton, CSS is the paint — JavaScript (JS) is what makes
the page actually DO something: react to clicks, remember things, change
what's on screen.

## 1. Variables — a labeled box

A variable is like a labeled box you can put something into, and change
later.

```js
let taskName = "Buy milk";
console.log(taskName); // "Buy milk"
taskName = "Buy milk and eggs"; // you can change what's in the box
```

Use `let` when the value can change later. Use `const` when it should
never change (e.g. `const taskList = document.querySelector("#todo-list");`
— you're not changing WHICH element that is, even if its contents change).

## 2. Functions — a coffee machine

A function is like a coffee machine: you put something in (beans,
water), it does a fixed job (brewing), and it gives you something back
(coffee). You can use it over and over.

```js
function greet(name) {
  return "Hello, " + name + "!";
}

greet("Sara"); // "Hello, Sara!"
greet("Ali");  // "Hello, Ali!"
```

There's also a shorter way to write small functions, called an "arrow
function":

```js
const greet = (name) => {
  return "Hello, " + name + "!";
};
```

Both versions work the same way.

## 3. Conditionals — a fork in the road

A conditional is like a sign at a fork in the road: "If it's raining,
take the umbrella. Otherwise, take sunglasses."

```js
let isRaining = true;

if (isRaining) {
  console.log("Take the umbrella");
} else {
  console.log("Take sunglasses");
}
```

## 4. Arrays — a shopping list

An array is an ordered list of items, just like a shopping list.

```js
let shoppingList = ["milk", "eggs", "bread"];
shoppingList[0]; // "milk" (lists start counting from 0, not 1!)
```

Arrays have built-in tools ("methods") to work with the list:

- **`.push(item)`** — add an item to the end of the list.
  ```js
  shoppingList.push("butter"); // ["milk", "eggs", "bread", "butter"]
  ```
- **`.filter(...)`** — make a NEW list with only the items that pass a
  test, e.g. "only fruits":
  ```js
  let numbers = [1, 2, 3, 4, 5, 6];
  let evens = numbers.filter((n) => n % 2 === 0); // [2, 4, 6]
  ```
- **`.map(...)`** — make a NEW list where every item is transformed the
  same way, e.g. "make every name uppercase":
  ```js
  let names = ["ana", "leo"];
  let shouting = names.map((n) => n.toUpperCase()); // ["ANA", "LEO"]
  ```
- **`.find(...)`** — find and return the FIRST item that passes a test:
  ```js
  let people = [{ name: "Ana" }, { name: "Leo" }];
  let found = people.find((p) => p.name === "Leo"); // { name: "Leo" }
  ```
- **`.forEach(...)`** — do something with EVERY item, one at a time (used
  a lot for drawing a list on the screen):
  ```js
  shoppingList.forEach((item) => {
    console.log("I need to buy: " + item);
  });
  ```

## 5. Template literals — filling in the blanks

A template literal lets you build a string with variables inside it,
using backticks (`` ` ``) instead of quotes:

```js
let name = "Sara";
console.log(`Hello, ${name}!`); // "Hello, Sara!"
```

This is easier to read than `"Hello, " + name + "!"` once strings get
longer.

## 6. Talking to the page — `querySelector` and `addEventListener`

`querySelector` is like pointing your finger at exactly the element you
want on the page, using the same kind of selector you used in CSS:

```js
const input = document.querySelector("#todo-input");
const form = document.querySelector("#todo-form");
```

`addEventListener` is like telling the page: "when this happens, ring
this bell" — run a function whenever an event (like a click, or a form
submit) happens:

```js
form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop the page from reloading
  console.log("Form was submitted!");
});
```

`event.preventDefault()` stops the browser's normal behavior (reloading
the page when a form is submitted) so YOUR code can handle it instead.

## Recap

Today you learned: variables, functions, conditionals, arrays (and
`push`/`filter`/`map`/`find`/`forEach`), template literals, and how to
grab elements and listen for events. First, warm up with
`practice.js`. Then do `CHALLENGE.md`.
```

- [ ] **Step 2: Write `day-3-js-basics/practice.js`**

```js
// Day 3 Practice — do these BEFORE the challenge, to warm up.
// Read each instruction, write your code below it, then check your
// work by running: node day-3-js-basics/practice.js

// *****************************  1  ***********************
// Create a variable called favoriteFood and give it any value.
// Then console.log it.


// *****************************  2  ***********************
// Write a function called greet(name) that returns "Hello, " + name + "!"
// Call it with your own name and console.log the result.

function greet(name) {
  // TODO: your work goes here
}


// *****************************  3  ***********************
// Write a function called isAdult(age) that returns true if age is 18
// or more, and false otherwise. Use an if/else.
// isAdult(20) => true
// isAdult(10) => false

function isAdult(age) {
  // TODO: your work goes here
}


// *****************************  4  ***********************
// Given this array of numbers, use .filter() to create a new array
// called evenNumbers with only the even numbers. console.log it.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// TODO: your work goes here


// *****************************  5  ***********************
// Given this array of names, use .map() to create a new array called
// shoutingNames where every name is in UPPERCASE. console.log it.
const names = ["ana", "leo", "sara"];

// TODO: your work goes here


// *****************************  6  ***********************
// Given this array of people, use .find() to find the person named
// "Leo" and console.log them.
const people = [
  { name: "Ana", age: 25 },
  { name: "Leo", age: 30 },
  { name: "Sara", age: 22 },
];

// TODO: your work goes here


// *****************************  7  ***********************
// Write a function called sumArray(numbersArray) that adds up every
// number in the array and returns the total. Use a for loop or .forEach().
// sumArray([1, 2, 3]) => 6

function sumArray(numbersArray) {
  // TODO: your work goes here
}


// *****************************  8  ***********************
// Write a function called countVowels(word) that returns how many
// vowels (a, e, i, o, u) are in the word.
// countVowels("banana") => 3

function countVowels(word) {
  // TODO: your work goes here
}


// *****************************  9  ***********************
// Write a function called reverseString(word) that returns the word
// spelled backwards.
// reverseString("hello") => "olleh"
// Hint: word.split("") turns a string into an array of letters.

function reverseString(word) {
  // TODO: your work goes here
}


// *****************************  10  ***********************
// Write a function called findLongestWord(wordsArray) that returns the
// longest word in the array.
// findLongestWord(["cat", "elephant", "dog"]) => "elephant"

function findLongestWord(wordsArray) {
  // TODO: your work goes here
}
```

- [ ] **Step 3: Write `day-3-js-basics/CHALLENGE.md`**

```markdown
# Day 3 Challenge: Make "Add Task" Work

**Goal:** create `project/script.js`, link it, and make it so typing a
task and pressing "Add" (or Enter) shows it in the list. This is
in-memory only for now — refreshing the page will lose your tasks. That's
OK, that's exactly why Day 4 exists (saving data).

## Steps

1. At the bottom of `project/index.html`'s `<body>`, add:
   ```html
   <script src="script.js"></script>
   ```
2. In `project/script.js`, grab the elements you need:
   ```js
   const form = document.querySelector("#todo-form");
   const input = document.querySelector("#todo-input");
   const list = document.querySelector("#todo-list");
   ```
3. Listen for the form being submitted:
   ```js
   form.addEventListener("submit", (event) => {
     event.preventDefault();
     // your code goes here
   });
   ```
4. Inside that listener:
   - Read `input.value` and remove extra spaces from the start/end
     (hint: strings have a `.trim()` method).
   - If the trimmed text is empty, do nothing (`return;`).
   - Otherwise, build a new `<li>` matching this exact shape (use
     `document.createElement` and `.innerHTML`, or build it piece by
     piece — your choice):
     ```html
     <li class="todo-item">
       <button class="todo-check" aria-label="Mark complete"></button>
       <span class="todo-text">Buy milk</span>
       <button class="todo-delete" aria-label="Delete task">✕</button>
     </li>
     ```
     (replace "Buy milk" with the text the user typed)
   - Append it to `list` with `list.appendChild(...)`.
   - Clear the input afterwards: `input.value = "";`

Don't worry about making the checkbox or delete button actually DO
anything yet — that's Day 4. Just get new tasks appearing in the list.

## Definition of Done

- [ ] Typing text and clicking "Add" (or pressing Enter) adds a new task
  to the visible list.
- [ ] Adding an empty or blank (spaces-only) task does nothing.
- [ ] The input box clears itself after adding a task.
- [ ] The new `<li>` uses the exact same classes as the reference design
  (`.todo-item`, `.todo-check`, `.todo-text`, `.todo-delete`), so it
  already looks styled correctly (thanks to your Day 2 CSS).

## Commit checkpoint

```sh
git add project/index.html project/script.js
git commit -m "Add in-memory add-task functionality"
git push origin main
```

Check your Day 3 box in the root `README.md`, then move to
`day-4-js-crud/LESSON.md`.
```

- [ ] **Step 4: Verify**

Run: `node --check day-3-js-basics/practice.js`
Expected: no output (means the file has valid JavaScript syntax)

Run: `grep -c "coffee machine\|labeled box\|shopping list\|fork in the road\|pointing your finger\|ringing a bell\|ring this bell" day-3-js-basics/LESSON.md`
Expected: a number ≥ 5 (confirms real-life analogies present)

Run: `grep -c "todo-input\|todo-form\|todo-list\|todo-item\|todo-check\|todo-text\|todo-delete" day-3-js-basics/CHALLENGE.md`
Expected: a number ≥ 5 (confirms it targets the real DOM contract)

- [ ] **Step 5: Commit**

```bash
git add day-3-js-basics/LESSON.md day-3-js-basics/practice.js day-3-js-basics/CHALLENGE.md
git commit -m "docs: add Day 3 JS basics lesson, practice, and challenge"
```

---

### Task 6: Day 4 — JS CRUD + localStorage lesson + practice + challenge

**Files:**
- Create: `day-4-js-crud/LESSON.md`
- Create: `day-4-js-crud/practice.js`
- Create: `day-4-js-crud/CHALLENGE.md`

**Interfaces:**
- Consumes: state model (`{id, text, completed}`, `localStorage` key
  `"todos"`) from Global Constraints; DOM contract from Task 3; in-memory
  add-task code from Task 5.
- Produces: `renderTodos()`, `saveTodos()`, `loadTodos()` behavior (named
  in the challenge) that Task 7 (Day 5 polish) builds on top of without
  changing.

- [ ] **Step 1: Write `day-4-js-crud/LESSON.md`**

```markdown
# Day 4: Saving Data + Full CRUD

Today is the big day: your tasks will actually be SAVED, so they're still
there tomorrow. You'll also finish the last 3 letters of "CRUD" — Create
(you did this on Day 3), Read, Update, Delete.

## 1. Objects — a contact card

An object holds named pieces of information together, like a contact
card: name, phone number, email — all on one card.

```js
const todo = {
  id: "1",
  text: "Buy milk",
  completed: false,
};

todo.text; // "Buy milk"
todo.completed = true; // you can change a field, just like updating a contact card
```

Our whole todo list will be an ARRAY of these objects — a stack of
contact cards, one per task.

## 2. JSON — folding a letter into an envelope

`localStorage` (next section) can only store plain TEXT, not real
JavaScript objects/arrays. So we need to convert back and forth:

- **`JSON.stringify(data)`** — turns an object/array into a text string.
  Like folding a letter to fit in an envelope.
- **`JSON.parse(text)`** — turns that text string back into a real
  object/array. Like unfolding the letter to read it again.

```js
const todos = [{ id: "1", text: "Buy milk", completed: false }];

const asText = JSON.stringify(todos);
console.log(asText); // '[{"id":"1","text":"Buy milk","completed":false}]'

const backToArray = JSON.parse(asText);
console.log(backToArray[0].text); // "Buy milk"
```

## 3. `localStorage` — a notebook that remembers

A whiteboard gets wiped clean when you close the room. `localStorage` is
like a notebook instead — it remembers what you wrote even after you
close your browser and come back tomorrow. It only stores text, so we
always combine it with `JSON.stringify`/`JSON.parse`:

```js
// saving
localStorage.setItem("todos", JSON.stringify(todos));

// loading (later, even after closing the browser)
const saved = localStorage.getItem("todos"); // text, or null if nothing saved yet
const todos = saved ? JSON.parse(saved) : [];

// removing everything under that key
localStorage.removeItem("todos");
```

## 4. Event delegation — one security guard, not one per door

If a building has 50 apartments, you don't need 50 separate security
guards, one per door — you can have ONE guard at the main entrance who
checks everyone coming in. That's "event delegation": instead of adding a
click listener to every single todo item (there could be dozens, and new
ones get added all the time), you add ONE listener to the whole list
(`#todo-list`), and check WHICH exact button was clicked:

```js
list.addEventListener("click", (event) => {
  if (event.target.classList.contains("todo-delete")) {
    // the delete button (on some item) was clicked
  }
  if (event.target.classList.contains("todo-check")) {
    // the checkbox (on some item) was clicked
  }
});
```

`event.target` is the exact element that was clicked. `.classList.contains(...)`
checks if it has a certain class.

## 5. State-array pattern — draw from the data, don't hand-edit the page

Instead of hunting for one `<li>` on the page and editing it directly
every time something changes, we use one rule all week:

> The array (`todos`) is the single source of truth. The screen is just
> a PICTURE of that array. Whenever the array changes, we redraw the
> whole picture.

So the pattern for every action (add/toggle/edit/delete) is always the
same 3 steps:
1. Change the `todos` array (add, remove, or edit an item).
2. Save it: `saveTodos()`.
3. Redraw the screen from scratch: `renderTodos()`.

This feels like more work than editing the page directly, but it means
your data and your screen can never disagree with each other — which is
exactly what will make Day 5's polish easy instead of buggy.

## Recap

Today you learned: objects, JSON, `localStorage`, event delegation, and
the state-array pattern. Warm up with `practice.js`, then build full
CRUD + saving in `CHALLENGE.md`.
```

- [ ] **Step 2: Write `day-4-js-crud/practice.js`**

```js
// Day 4 Practice — do these BEFORE the challenge, to warm up.
// Check your work by running: node day-4-js-crud/practice.js

// *****************************  1  ***********************
// Create an object called person with fields name and age (any values).
// console.log person.name


// *****************************  2  ***********************
// Write a function updateAge(person, newAge) that sets person.age to
// newAge and returns the updated person.
// updateAge({ name: "Ana", age: 20 }, 21) => { name: "Ana", age: 21 }

function updateAge(person, newAge) {
  // TODO: your work goes here
}


// *****************************  3  ***********************
// Turn this object into a JSON string using JSON.stringify, and
// console.log the string.
const book = { title: "The Hobbit", pages: 310 };

// TODO: your work goes here


// *****************************  4  ***********************
// This is a JSON string. Turn it back into a real object using
// JSON.parse, then console.log its "title" field.
const bookAsText = '{"title":"Dune","pages":412}';

// TODO: your work goes here


// *****************************  5  ***********************
// Given this array of todo-like objects, write toggleTodo(todos, id)
// that returns a NEW array where the item with the matching id has its
// "completed" field flipped (true becomes false, false becomes true).
// Use .map(). Don't change the other items.
const sampleTodos = [
  { id: "1", text: "Buy milk", completed: false },
  { id: "2", text: "Walk the dog", completed: false },
];
// toggleTodo(sampleTodos, "2")
// => [{ id: "1", text: "Buy milk", completed: false },
//     { id: "2", text: "Walk the dog", completed: true }]

function toggleTodo(todos, id) {
  // TODO: your work goes here
}


// *****************************  6  ***********************
// Write deleteTodo(todos, id) that returns a NEW array WITHOUT the item
// that has the matching id. Use .filter().
// deleteTodo(sampleTodos, "1") => [{ id: "2", text: "Walk the dog", completed: false }]

function deleteTodo(todos, id) {
  // TODO: your work goes here
}


// *****************************  7  ***********************
// Write countActive(todos) that returns how many todos have
// completed === false. Use .filter().length
// countActive(sampleTodos) => 2

function countActive(todos) {
  // TODO: your work goes here
}


// *****************************  8  ***********************
// localStorage doesn't exist here in Node, so let's practice the same
// SAVE/LOAD pattern using a plain object as a stand-in "storage".
// Write saveData(store, key, value) that saves value (as a JSON string)
// into store[key]. Write loadData(store, key) that reads store[key] and
// turns it back into a real value with JSON.parse (return null if the
// key doesn't exist in store).
const fakeStorage = {};

function saveData(store, key, value) {
  // TODO: your work goes here
}

function loadData(store, key) {
  // TODO: your work goes here
}

// Try it:
// saveData(fakeStorage, "todos", sampleTodos);
// loadData(fakeStorage, "todos") should give you back an array equal to sampleTodos
```

- [ ] **Step 3: Write `day-4-js-crud/CHALLENGE.md`**

```markdown
# Day 4 Challenge: Full CRUD + Saving

**Goal:** your todo app fully works — add, check off, edit, delete, and
everything survives a page refresh. This is the biggest day. Take it one
piece at a time, and commit after each piece works.

## The plan

Rewrite `project/script.js` around one array as your source of truth:

```js
let todos = [];        // each item: { id, text, completed }
let currentFilter = "all"; // "all" | "active" | "completed"
```

Build these functions (use these exact names — later days rely on them):

- **`saveTodos()`** — `localStorage.setItem("todos", JSON.stringify(todos));`
- **`loadTodos()`** — read `localStorage.getItem("todos")`; if it exists,
  `JSON.parse` it into `todos`; if not (first time ever), leave `todos`
  as `[]`. Call this once, when the page first loads.
- **`renderTodos()`** — the one function that draws the whole list:
  1. Clear `list.innerHTML = ""`.
  2. Filter `todos` based on `currentFilter` (show all / only
     `completed === false` / only `completed === true`).
  3. `.forEach()` over the filtered todos, building each `<li>` (same
     shape as Day 3, plus add `class="todo-item completed"` and
     `class="todo-check checked"` when `todo.completed` is true).
  4. Update `#items-left` text to the count of NOT-completed todos (use
     the full `todos` array, not the filtered one).
  5. Show `#empty-state` (remove the `hidden` attribute) only when the
     full `todos` array (not the filtered list) has zero items; hide it
     otherwise.
  Call `renderTodos()` any time `todos` changes.

## Wire up each action (checkpoint after each one)

1. **Create (you have most of this from Day 3):** on form submit, push
   `{ id: Date.now().toString(), text: trimmedText, completed: false }`
   into `todos`, then `saveTodos()`, then `renderTodos()`.
   → Commit: `"Add create + save for new todos"`

2. **Read:** call `loadTodos()` then `renderTodos()` once, right when the
   script runs (not inside any event listener). Test it: add a task,
   refresh the page — it should still be there.
   → Commit: `"Load saved todos on page start"`

3. **Update (toggle + edit), using event delegation on `#todo-list`:**
   - Click on `.todo-check` → find the matching todo by id (use its
     parent `<li>`'s stored id — add `data-id="..."` to each `<li>` when
     you build it in `renderTodos()`, so you can read it back with
     `event.target.closest(".todo-item").dataset.id`), flip its
     `completed`, `saveTodos()`, `renderTodos()`.
   - Double-click on `.todo-text` → replace it with an
     `<input class="todo-edit-input">` pre-filled with the current text,
     and focus it. On Enter or on blur, save the new (trimmed) text into
     that todo, `saveTodos()`, `renderTodos()`. On Escape, cancel without
     saving (just `renderTodos()` again to redraw the original text).
   → Commit: `"Add toggle-complete and edit-text"`

4. **Delete:** click on `.todo-delete` (same delegated listener) → find
   the id the same way, remove that todo from the array (`.filter()`),
   `saveTodos()`, `renderTodos()`.
   → Commit: `"Add delete todo"`

5. **Filters:** click listeners on each `.filter-tab` → set
   `currentFilter` to that button's `data-filter` value, move the
   `active` class to the clicked tab, `renderTodos()`.
   → Commit: `"Add working filter tabs"`

6. **Clear completed:** click on `#clear-completed` → keep only the
   not-completed todos (`.filter()`), `saveTodos()`, `renderTodos()`.
   → Commit: `"Add clear completed button"`

## Definition of Done

- [ ] Adding, refreshing the page, checking off, editing, deleting, and
  filtering all work exactly as described above.
- [ ] After a full page refresh, all your tasks and their
  completed/not-completed state are exactly as you left them.
- [ ] The items-left count and empty-state message are always correct.
- [ ] You did NOT add one click listener per todo item — you used ONE
  delegated listener on `#todo-list` (check your code: you should see
  `list.addEventListener` only once for clicks).

## Final commit + push

```sh
git add project/script.js
git commit -m "Finish full CRUD with localStorage persistence"
git push origin main
```

Check your Day 4 box in the root `README.md`, then move to
`day-5-polish/CHALLENGE.md`.
```

- [ ] **Step 4: Verify**

Run: `node --check day-4-js-crud/practice.js`
Expected: no output

Run: `grep -c "contact card\|envelope\|notebook\|security guard\|draw from the data\|picture of that array" day-4-js-crud/LESSON.md`
Expected: a number ≥ 5

Run: `grep -c "saveTodos\|loadTodos\|renderTodos\|currentFilter\|data-id" day-4-js-crud/CHALLENGE.md`
Expected: a number ≥ 4 (confirms the fixed function/state names are used
consistently, matching Global Constraints)

- [ ] **Step 5: Commit**

```bash
git add day-4-js-crud/LESSON.md day-4-js-crud/practice.js day-4-js-crud/CHALLENGE.md
git commit -m "docs: add Day 4 JS CRUD lesson, practice, and challenge"
```

---

### Task 7: Day 5 — polish challenge

**Files:**
- Create: `day-5-polish/CHALLENGE.md`

**Interfaces:**
- Consumes: `renderTodos()`/`saveTodos()`/`loadTodos()` and full CRUD from
  Task 6 — this task only refines behavior, it introduces no new function
  names.

- [ ] **Step 1: Write `day-5-polish/CHALLENGE.md`**

```markdown
# Day 5 Challenge: Polish + Ship

**Goal:** small details, real-world edge cases, and writing docs for your
own project. This is what turns "it works" into "it feels great to use."

## Checklist

1. **Empty state, double-checked:** `#empty-state` should show ONLY when
   your full `todos` array is empty — not just when a filter (like
   "Completed") happens to show zero items. Test: add 2 tasks, filter to
   "Completed" with none checked off — the list should just look empty,
   WITHOUT the "No tasks yet" message (because you still have 2 tasks
   overall, they're just hidden by the filter).

2. **Input validation:** confirm that adding an empty or whitespace-only
   task does nothing (you likely built this on Day 3 — just re-test it).

3. **Bonus (optional) — disabled Add button:** make `#add-btn` show the
   `disabled` grey style from the design spec whenever the input is
   empty. Hint: listen for the `"input"` event on `#todo-input`, and set
   `addBtn.disabled = input.value.trim().length === 0;` — the CSS
   `:disabled` style you wrote on Day 2 will apply automatically.

4. **Keyboard support:**
   - Enter to add a task — you already get this for free from `<form>`
     submission.
   - In edit mode (from Day 4): Enter saves, Escape cancels. Test both.

5. **Accessibility pass:**
   - Every icon-only button (`.todo-check`, `.todo-delete`) has an
     `aria-label`.
   - The `#todo-input` has an `aria-label` or an associated `<label>`.
   - Click into `#todo-input` and press Tab a few times — you should be
     able to reach the Add button, filter tabs, and each todo's buttons,
     in a sensible order, with a visible focus outline.

6. **Write `project/README.md`** (replace the placeholder text) covering:
   - What the app does, in 2-3 sentences.
   - How to run it (open `project/index.html` in a browser, or use Live
     Server).
   - A screenshot (optional, if you know how to take one — save it as
     `project/screenshot.png` and reference it with
     `![screenshot](screenshot.png)`).

## Optional stretch goals (only if you finish early — not required)

- **Dark mode toggle:** add a second set of CSS variable values for dark
  colors, a toggle button, and remember the user's choice in
  `localStorage` (a new key, e.g. `"theme"`).
- **Due dates:** add a `<input type="date">` to the form, store it on
  each todo object, and display it on the task.
- **Drag to reorder:** look up the HTML5 Drag and Drop API — this is an
  advanced, more involved feature, just for fun if you want to push
  further.

## Definition of Done (this is the end of the week!)

- [ ] All of Day 1-4's Definition of Done items still pass.
- [ ] Empty-state only shows when there are truly zero tasks overall.
- [ ] Keyboard support (Enter/Escape) works during editing.
- [ ] Every icon-only button has an `aria-label`.
- [ ] `project/README.md` is written and accurate.

## Final commit + push

```sh
git add project/
git commit -m "Polish todo app: accessibility, validation, and docs"
git push origin main
```

Check your Day 5 box (and the last one!) in the root `README.md`.
**Congratulations — you built a real, working, well-designed app this
week.**
```

- [ ] **Step 2: Verify**

Run: `grep -c "empty-state\|aria-label\|README" day-5-polish/CHALLENGE.md`
Expected: a number ≥ 3

- [ ] **Step 3: Commit**

```bash
git add day-5-polish/CHALLENGE.md
git commit -m "docs: add Day 5 polish challenge"
```

---

### Task 8: Final consistency pass

**Files:**
- Modify: none (verification-only task)

**Interfaces:**
- Consumes: every file from Tasks 1-7.

- [ ] **Step 1: Cross-check the DOM contract is used identically everywhere**

Run:
```bash
cd ~/Desktop/intern/todolist-html-css-js
for id in todo-form todo-input add-btn todo-list items-left clear-completed empty-state; do
  echo "=== $id ==="
  grep -rl "$id" day-1-html design-spec day-3-js-basics day-4-js-crud
done
```
Expected: every id prints at least the relevant day-1 + design-spec files,
and (for the ones used in JS) the day-3/day-4 files too. If any id is
missing from a file that should reference it, fix that file now.

- [ ] **Step 2: Confirm the week checklist in root README matches the 5 day folders**

Run: `ls -d day-*-*/ && grep -c "Day [1-5]" README.md`
Expected: 5 folders listed; grep count ≥ 5

- [ ] **Step 3: Confirm every LESSON.md and CHALLENGE.md is non-empty and committed**

Run: `git status --short`
Expected: empty output (nothing uncommitted)

Run: `git log --oneline`
Expected: one commit per Task 1-7 (8-9 commits total), all present

- [ ] **Step 4: Note the one manual (human) step remaining**

This plan does not create the GitHub remote or push — that requires the
mentor's GitHub credentials. Before the intern can fork it, run:

```bash
cd ~/Desktop/intern/todolist-html-css-js
gh repo create Rafik006/todolist-html-css-js --public --source=. --remote=origin
git push -u origin main
```

(If `gh` isn't installed/authenticated, create the repo manually at
github.com/new named `todolist-html-css-js` under the `Rafik006` account,
then `git remote add origin git@github.com:Rafik006/todolist-html-css-js.git`
and `git push -u origin main`.)

- [ ] **Step 5: Commit** (only needed if Step 1 found and fixed anything)

```bash
git add -A
git commit -m "fix: consistency corrections across day folders"
```
