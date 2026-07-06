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
