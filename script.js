const boldTag = document.getElementsByTagName("b")[0];
const pFirst = document.getElementById("first");
const body = document.getElementsByTagName("html")[0];
const firstDiv = document.getElementById("first-div");

// DOM tree and traversal

console.log("Parent of b -> ", boldTag.parentElement);
console.log("Parent of b (node) -> ", boldTag.parentNode);
console.log("Next sibling of first P -> ", pFirst.nextElementSibling);
console.log("Parent of html (element) ->", body.parentElement);
console.log("Parent of html (node) ->", body.parentNode);

console.log(
  "First child of first-div (element) -> ",
  firstDiv.firstElementChild
);
console.log("First child of first-div (node) -> ", firstDiv.firstChild);

console.log("Last child of first-div (element) -> ", firstDiv.lastElementChild);
console.log("Last child of first-div (node) -> ", firstDiv.lastChild);

// DOM get elements

// Using ID
const heading = document.getElementById("heading");
console.log("Get element using ID -> ", heading);

// Using Class
const secondElements = document.getElementsByClassName("second");
console.log("Elements with class second (first)-> ", secondElements[0]);

// Using tag
const pTags = document.getElementsByTagName("p");
console.log("P tags (second) ->", pTags);

// Using name
const inputName = document.getElementsByName("name");
console.log("Using name -> (get the input)", inputName[0]);

// Get it in the form of an array
const secondElementsArr = document.querySelectorAll(".second");
console.log("Query selector second elements -> ", secondElementsArr);

// Using query selector to get the first element
const firstP = document.querySelector("p");
console.log("First p using query selector-> ", firstP);

// DOM manipulation
secondElementsArr.forEach((e) => {
  e.style.color = "red";
});

const node = document.createElement("p");

// node.textContent = "Hello, World!";

node.innerHTML = "<b>Bold</b> - added using JS";

firstDiv.appendChild(node);

console.log("textContent of first-div -> ", firstDiv.textContent);
console.log("innerText of first-div -> ", firstDiv.innerText);

const firstPSecond = document.querySelector(".second");
firstDiv.removeChild(firstPSecond);

// -----------------------------
// TODO
// -----------------------------

const todos = document.getElementById("todos");
const todoInput = document.getElementsByName("todo")[0];
function addTodo() {
  const error = document.createElement("div");
  const errorEl = todos.getElementsByTagName("div")[0];
  if (errorEl) {
    todos.removeChild(errorEl);
  }
  if (!todoInput.value.trim()) {
    error.innerText = "Please write something";
    todos.appendChild(error);
    return;
  }

  const li = document.createElement("li");
  li.innerText = todoInput.value;

  todos.appendChild(li);
  todoInput.value = "";
}
