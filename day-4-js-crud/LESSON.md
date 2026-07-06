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
