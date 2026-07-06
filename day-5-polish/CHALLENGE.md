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
