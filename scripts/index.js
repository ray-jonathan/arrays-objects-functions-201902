// add your solutions here

// Positive Numbers
// Write a function which takes an array of numbers as 
// input and returns a new array containing only the 
// positive numbers in the given array.

function positiveNumbers(arrayOfNumbers){
    const positiveArray = arrayOfNumbers.filter(function (number) {
        return number > 0;
    });
    return positiveArray;
}

/////////////////////////////////////////////////////////////////////////////

// Even Numbers
// Write a function which takes an array of numbers as 
// input and returns a new array containing only the 
// even numbers in the given array.

function evenNumbers(arrayOfNumbers){
    const evenArray = arrayOfNumbers.filter(function (number){
        return (number % 2) == 0;
    });
    return evenArray;
}

/////////////////////////////////////////////////////////////////////////////

// Square the Numbers
// Write a function which takes an array of numbers as 
// input and returns a new array containing result of 
// squaring each of the numbers in the given array by two. 
// Example: squareTheNumbers([1, 2, 3]) should give [1, 4, 9].

function squareTheNumbers(arrayOfNumbers){
    const squareArray = arrayOfNumbers.map(function (number){
        return (number * number);
    });
    return squareArray;
}

/////////////////////////////////////////////////////////////////////////////

// Cities 1
// Write a function which takes an array of city objects like such:

var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];
// as input and returns a new array containing the cities 
// whose temperature is cooler than 70 degrees.

function coolCities(cities){
    const coolArray = cities.filter(function (city){
        return city.temperature < 70.0;
    });
    const coolCitiesArray = coolArray.map(function (city){
        return city.name;
    });
    return coolCitiesArray;
}

/////////////////////////////////////////////////////////////////////////////

// Cities 2
// Write a function which takes an array of city objects 
// like the above problem as input and returns an array 
// of the cities names.

function cityNames(cities){
    const cityNameArray = cities.map(function (city){
        return city.name;
    });
    return cityNameArray;
}

/////////////////////////////////////////////////////////////////////////////

// Good Job!
// Given an array of people's names:

var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];
// Print out 'Good Job, {{name}}!' for each person's name, one on a line.

function goodJob(people){
        people.forEach(function (person){
            console.log(`Good Job, ${person}!`);
});
}

/////////////////////////////////////////////////////////////////////////////

// 3 times
// Given this function:

// function call3Times(fun) {
//   fun();
//   fun();
//   fun();
// }
// Use the call3Times function to print "Hello, world!" 3 times.
function hello(){
    console.log("Hello, world!");
}

function call3Times(hello) {
    hello();
    hello();
    hello();
}

/////////////////////////////////////////////////////////////////////////////

// n times
// You will write a function callNTimes that takes two arguments: times as a 
// number, and fun as a function. It will call that function for that many times. Example:

// > callNTimes(5, hello)
// Hello, world!
// Hello, world!
// Hello, world!
// Hello, world!
// Hello, world!
// You are allowed to use a loop in the implementation of callNTimes.

function hello(){
    console.log("Hello, world!");
}

function callNTimes(number, hello) {
    for (let i = 0; i < number; i++) {
        hello();
    }
}

/////////////////////////////////////////////////////////////////////////////

// Str Multiply
// Write a strMultiply function which takes two arguments:

// str - the string to multiply
// times - number of times to multiply
// Example:

// > strMultiply('abc', 5)
// 'abcabcabcabcabc'
// You may not use the native repeat method that strings provide. 
// But you can use the range function defined below.

// You may use the following range function as is:

function range(min, max){
    var arr = [];
    for (var i = min; i < max; i++) {
        arr.push(i);
    }
    return arr;
}
arr = [0, 1, 2, 3, 4]

function strMultiply(str, times){
    strAddition = '';
    range(0,times).forEach(function () {
        strAddition += str;
    });
    return strAddition;
}

/////////////////////////////////////////////////////////////////////////////

// Sort an array
// Given an array of strings such as the array 
// of names given in one of the "Good Job" problem, 
// sort them by alphabetically order.

function sortPeopleAlpha(people){
    people.sort();
    console.log(people);
}

// Sort an array, 2
// Sort the same array, but not by alphabetically order, 
// but by how long each name is, shortest name first.

function sortPeopleLength(people){
    people.sort(function (a, b){
        return (a.length - b.length);
    });
    return people;
}

// Sort an array, 3
// Given an array of array of products:

var products = [
  { name: 'Basketball', price: 12.00 },
  { name: 'Tennis Racquet', price: 66.00 },
  { name: 'Tennis Balls', price: 9.00 },
  { name: 'Tennis Balls', price: 9.00 }
];
// Sort the array by price.

function sortByPrice(products){
    products.sort(function (a, b){
        return (a.price - b.price);
    });
    return products;
}