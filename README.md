# Javascript Revision - 02

## 1. Javascript Revision: DOM

### a. Introduction to DOM

The Document Object Model (DOM) represents the structure of a webpage as a tree of nodes. It enables programs to dynamically manipulate content and structure.

### b. DOM Tree and Traversal

Learn how to navigate the DOM tree using methods like `parentNode`, `nextSibling`, `firstChild`, and more.

### c. Reading DOM Elements

Access elements using:

- `getElementById("id")`
- `getElementsByClassName("class")`
- `getElementsByTagName("tag")`

### d. DOM Methods

Manipulate the DOM using:

- `createElement("tag")`
- `appendChild(child)`
- `removeChild(child)`

### e. Manipulating/Accessing Page Content

Work with:

- `innerText`
- `textContent`
- `innerHTML`

### f. Dynamically Creating Content to the Page

Create and insert content like paragraphs or lists dynamically.

## 2. Add or Remove Elements from Page

Add elements with `appendChild` and remove them using `removeChild`.

## 3. Array Destructuring and Spread Operator

### a. Array Destructuring

Unpack values from arrays:

```javascript
const [first, second] = [10, 20];
```

### b. Spread Operator

Expand an array into individual elements:

```javascript
const arr2 = [...arr1, 3, 4];
```

## 4. Iterators on Arrays

### a. Map

Create a new array by calling a function on each element:

```javascript
const squares = numbers.map((x) => x * x);
```

### b. Filter

Create an array with elements that pass a test:

```javascript
const evens = numbers.filter((n) => n % 2 === 0);
```

### c. Reduce

Reduce an array to a single value:

```javascript
const sum = numbers.reduce((acc, val) => acc + val, 0);
```

### d. Sort

Sort an array:

```javascript
numbers.sort((a, b) => a - b);
```

### e. forEach

Execute a function on each element:

```javascript
numbers.forEach((n) => console.log(n));
```

### f. Find

Find the first element that satisfies a function:

```javascript
const found = numbers.find((n) => n > 10);
```

---
