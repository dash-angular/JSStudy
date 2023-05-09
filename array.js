// Declare an array
let fruits = ["Apple", "Banana", "Orange", "Mango"];

// Accessing elements in the array
console.log(fruits[0]);  // Output: "Apple"
console.log(fruits[2]);  // Output: "Orange"

// Modifying elements in the array
fruits[1] = "Grapes";
console.log(fruits);  // Output: ["Apple", "Grapes", "Orange", "Mango"]

// Adding elements to the end of the array
fruits.push("Pineapple");
console.log(fruits);  // Output: ["Apple", "Grapes", "Orange", "Mango", "Pineapple"]

// Removing the last element from the array
let lastFruit = fruits.pop();
console.log(lastFruit);  // Output: "Pineapple"
console.log(fruits);     // Output: ["Apple", "Grapes", "Orange", "Mango"]

// Finding the index of an element in the array
let index = fruits.indexOf("Orange");
console.log(index);  // Output: 2

// Removing an element from a specific index
let removedFruit = fruits.splice(1, 2);
console.log(removedFruit);  // Output: ["Grapes", "Orange"]
console.log(fruits);        // Output: ["Apple", "Mango"]
