// Declare an array of objects
let cars = [
  { make: "Toyota", model: "Corolla", year: 2018 },
  { make: "Honda", model: "Civic", year: 2019 },
  { make: "Ford", model: "Mustang", year: 2020 }
];

// Accessing properties of objects in the array
console.log(cars[0].make);   // Output: "Toyota"
console.log(cars[1].model);  // Output: "Civic"

// Modifying properties of objects in the array
cars[2].year = 2021;
console.log(cars[2]);  // Output: { make: "Ford", model: "Mustang", year: 2021 }

// Adding objects to the array
cars.push({ make: "Tesla", model: "Model S", year: 2022 });
console.log(cars);  // Output: 
/*
[
  { make: "Toyota", model: "Corolla", year: 2018 },
  { make: "Honda", model: "Civic", year: 2019 },
  { make: "Ford", model: "Mustang", year: 2021 },
  { make: "Tesla", model: "Model S", year: 2022 }
]
*/
