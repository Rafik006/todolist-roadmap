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
