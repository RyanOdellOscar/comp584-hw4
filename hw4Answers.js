//Exercise 1: Formatting and Naming (Code Correction)
var newVariable = 10;
if (newVariable == 10) {
    console.log("The variable is corrected");
}

// Exercise 2: Defining Core Data Types (Coding)
let myParagraph = `This is a paragraph that
contains a string of text.
It can span multiple lines.`;
let myFloat = 3.14;
let isTrue = true;
console.log(myParagraph);
console.log(myFloat);
console.log(isTrue);

// Exercise 3: Single-Line Comments (Coding)
let currentScore = 95;
// comment = This variable holds the current score of the student in the test
console.log(currentScore);

// Exercise 4: Equality Comparison (Coding)
console.log('100' === 100); // should be false
console.log('100' == 100); // should be true

// Exercise 5: Ternary Operator (Coding)
let isWeekend = false;
let schedule;
schedule = isWeekend ? "Day off" : "class day"; // if isWeekend, the schedule is a day off
console.log("today should be class day");
console.log(schedule);

// Exercise 6: If/Else Structure (Coding)
let userAge = 16;
// Write if/else statement for access granted at age 18 and older
if (userAge >= 18) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}

// Exercise 7: Logical AND Operator (Coding)
let hasPermission = true;
let itemCount = 3;
// Write if statement using AND operator:
if (hasPermission && itemCount < 5) {
    console.log("Ready to process"); // logs if both are true
}

// Exercise 8: For Loop (Coding)
for(let i = 1; i <= 5; i++) {
    console.log(i);
}

// Exercise 9: Loop Control (Coding)
for(let i = 0; i <= 9; i++) {
    console.log(i);
    // breaks after logging 7
    if (i == 7) {
        break;
    }
}

// Exercise 10: Ensuring Execution (Coding)
let counter = 10;
// Write do while loop:
do {
    console.log("Running once"); 
} while (counter < 10); //loop runs at least once

// Exercise 11: Function Definition (Coding)
function calculateArea(width, height) {
    return width * height;
}
resultArea = calculateArea(5, 10);
console.log(resultArea); // should be 50

// Exercise 12: Array Manipulation (Coding)
let fruitList = ['Apple', 'Banana'];
fruitList.push('Grape'); // adds 'Grape' to the end of the array
fruitList.pop(); // remove the first item in the array
console.log("the index of Banana is: " + fruitList.indexOf('Banana')) // should be 1

// Exercise 13: Array Copying (Coding)
let originalData = [1, 2, 3, 4, 5];
// Write slice method:
let clonedData = originalData.slice(2, 4); // data copied depends on the start index and how many items to slice
console.log(clonedData); // should be [3, 4]

// Exercise 14: Object Constructor (Coding)
function Animal(species, sound) {
    this.species = species;
    this.sound = sound;
}
console.log("Animal constructor defined");

// Exercise 15: Object Instantiation (Coding)
let dog = new Animal('Canine', 'Woof');
let cat = new Animal('Feline', 'Meow');
let animalArray = [dog, cat];
console.log(animalArray[0].sound); // should be woof
console.log(animalArray[1].sound); // should be meow