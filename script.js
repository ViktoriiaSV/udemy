/*
let js = 'amazing';
console.log(40+8+23-10);
console.log("Jonas");
console.log(23);
let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;
let person = "jonas";
let PI = 3.1415;
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);
// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');
javascriptIsFun = 'YES!';
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);
*/

/* 
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher';

lastName = "Schmedtmann";
console.log(lastName);
*/

/*
//Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtman';
console.log(firstName + ' ' + lastName);

//Assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x ++;
x--;
x--;
console.log(x);

//Comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);
*/

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

//Coding Challenge #1

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// let bodyMassIndexMark = massMark / (heightMark * heightMark); 
// console.log(bodyMassIndexMark);
// let bodyMassIndexJohn = massJohn / (heightJohn * heightJohn);
// console.log(bodyMassIndexJohn);

// let markHigherBMI = heightMark > heightJohn;
// console.log(markHigherBMI);

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// let bodyMassIndexMark = massMark / (heightMark * heightMark); 
// console.log(bodyMassIndexMark);
// let bodyMassIndexJohn = massJohn / (heightJohn * heightJohn);
// console.log(bodyMassIndexJohn);

// let markHigherBMI = heightMark > heightJohn;
// console.log(markHigherBMI);

//template literals
/*const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;
const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!'
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job} !`;
console.log(jonasNew);

console.log(`just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple 
lines`);
*/

//if/else

/*const age = 15;
// const isOldEnough = age >= 18;
if(age >= 18) {
console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

//Coding Challenge #2

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;
// let bodyMassIndexMark = massMark / (heightMark * heightMark); 
// let bodyMassIndexJohn = massJohn / (heightJohn * heightJohn);

// if (bodyMassIndexJohn > bodyMassIndexMark) {
//     console.log(`Mark's BMI ${bodyMassIndexMark} is higher than John's ${bodyMassIndexJohn}!`);
// } else {
//     console.log(`John's ${bodyMassIndexJohn} is higher than Mark's BMI ${bodyMassIndexMark}!`);
// }

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2; 
// const BMIJohn = massJohn / heightJohn ** 2;
// const markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, markHigherBMI);

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
// } else {
//     console.log(`John's ${BMIJohn} is higher than Mark's BMI ${BMIMark}!`);
// };

const inputYear = '1991';
console.log(inputYear + 18);