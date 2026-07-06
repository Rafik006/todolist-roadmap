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
