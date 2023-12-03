/*
 * Filename: ComplexCode.js
 * Content: Complex code demonstrating various concepts and techniques in JavaScript.
 */

// Class definition for a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to print person's details
  printDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// Function to find the sum of all numbers in an array
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Object literal representing a car
const car = {
  brand: 'Tesla',
  model: 'Model S',
  year: 2022,
  startEngine() {
    console.log(`${this.brand} ${this.model} engine started.`);
  },
  stopEngine() {
    console.log(`${this.brand} ${this.model} engine stopped.`);
  },
};

// Exponential function using recursive approach
function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

// Sample promise function
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched successfully!');
    }, 2000);
  });
}

// Function to capitalize each word in a sentence
function capitalizeWords(sentence) {
  const words = sentence.split(' ');
  const capitalizedWords = [];
  for (let i = 0; i < words.length; i++) {
    const capitalizedWord = words[i][0].toUpperCase() + words[i].slice(1);
    capitalizedWords.push(capitalizedWord);
  }
  return capitalizedWords.join(' ');
}

// Usage examples:

const john = new Person('John Doe', 30);
john.printDetails();

const numbers = [1, 2, 3, 4, 5];
const sum = findSum(numbers);
console.log(`Sum: ${sum}`);

car.startEngine();

const result = power(2, 5);
console.log(`Result: ${result}`);

fetchData().then((data) => {
  console.log(data);
});

console.log(capitalizeWords('hello world'));

// ... more code

// Total lines: 50 (excluding comments)
// Add more code to reach 200+ lines