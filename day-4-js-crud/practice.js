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
