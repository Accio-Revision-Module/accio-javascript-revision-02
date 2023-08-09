const arr = [1, 2, 3, 4, 5];

// Destructing
const [first, second, ...rest] = arr;
console.log("First -> ", first);
console.log("Second -> ", second);
console.log("Rest -> ", rest);

const arr2 = [...arr, 6, 7];
console.log("Arr2 -> ", arr2);

// Map

const multipliedArr = arr.map((e) => e * 2);
console.log("Multiplied arr-> ", multipliedArr);

// Filter
const evenNumber = arr.filter((e) => e % 2 == 0);
console.log("Even numbers ->", evenNumber);

// Reduce
const sum = arr.reduce((fin, e) => fin + e, 0);

// fin -> 0

// 1st-
// fin = 0, e = 1
// fin + e = 1 (0+1)
// fin -> 1

// 2nd-
// fin = 1, e =2
// fin + e = 3 (1+2)
// fin -> 3

let sumVal = 0;
for (let i = 0; i < arr.length; i++) {
  const e = arr[i];
  sumVal += e;
}

console.log("Sum Val -> ", sumVal);

console.log("Sum -> ", sum);

// Sort
const unsortedArr = [3, 4, 1, 2, 10];
console.log(unsortedArr.sort()); // 1, 10, 2, 3, 4
// Ascending order
console.log(unsortedArr.sort((a, b) => a - b)); // 1, 2, 3, 4, 10

// Descending order
console.log(unsortedArr.sort((a, b) => b - a));

// Find
console.log(
  "Find -> ",
  arr.find((e) => e > 3)
);
