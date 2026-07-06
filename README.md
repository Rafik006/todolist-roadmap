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
