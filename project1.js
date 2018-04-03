console.log("LEVEL 1");
var num1 = 7;
var num2 = 5;
var add = num1 + num2;
var min = num1 - num2;
var times = num1 * num2;
var subs = num1 / num2;
var modulus = num1 % num2;

console.log("num1 = " + num1)
console.log("num2 = " + num2)
console.log("add = " + add);
console.log("min = " + min);
console.log("times = " + times);
console.log("subs = " + subs);
console.log("modulus = " + modulus);

console.log("\n");

console.log("LEVEL 2");
let string7 = "7";
let b00lean = true;

let stringadd = string7 + string7;
let booleanadd = b00lean + b00lean;
console.log("num1 = " + string7);
console.log("num2 = " + b00lean);
console.log("stringadd = " + stringadd);
console.log("booleanadd = " + booleanadd);

console.log("\n");

console.log("LEVEL 3");
let arrNumber = [1, 2, 3, 4, 5];
console.log(arrNumber);
arrNumber.push("yanuar");
for (let i = 0; i < arrNumber.length; i++) {
  console.log(arrNumber[i]);
}

console.log("\n");

console.log("LEVEL 4");
let sentenceA = "Hello World!";
let sentenceB = "Good Bye!";

console.log(sentenceA);
console.log(sentenceB);

console.log("\n");

console.log("LEVEL 5");

let sentenceC = sentenceA + " " + sentenceB;
let sentenceD = `${sentenceA} ${sentenceB}`;

console.log(sentenceC);
console.log(sentenceD);

console.log("\n");

console.log("LEVEL 6");

let sentence1 = "Hello World";
let sentence2 = "Good Bye"
let uppcase1 = sentence1.toUpperCase();
let lowcase2 = sentence2.toLowerCase();
console.log(sentence1);
console.log(sentence2);
console.log(uppcase1);
console.log(lowcase2);

console.log("\n");

console.log("LEVEL 7");

let sentence = "hello goodness";
let arrSentence = sentence.split(' ');
for (let i = 0; i < arrSentence.length; i++) {
  arrSentence[i] = arrSentence[i][0].toUpperCase() + arrSentence[i].slice(1);
}
let sentenceJoin = arrSentence.join(' ');
console.log(sentenceJoin);

console.log("\n");

console.log("LEVEL 8");

var num1 = 5;
var num2 = 10;

console.log("num1 = " + num1);
console.log("num2 = " + num2);

if (num1 > num2) {
  console.log(num1 + " is bigger than " + num2);
} else {
  console.log(num1 + " is smaller than " + num2);
}

console.log("\n");

console.log("LEVEL 9");

var num1 = 5;
var num2 = 10;

console.log("num1 = " + num1);
console.log("num2 = " + num2);

if (num1 > num2) {
  console.log(num1 + " is bigger than " + num2);
} else if (num1 == num2) {
  console.log(num1 + " is equal to " + num2)
} else {
  console.log(num1 + " is smaller than " + num2);
}

console.log("\n");

console.log("LEVEL 10");

var num1 = 5;
var num2 = 10;

console.log("num1 = " + num1);
console.log("num2 = " + num2);

num1 > num2 ? console.log(num1 + " is bigger than " + num2) : console.log(num1 + " is smaller than " + num2);

console.log("\n");

console.log("LEVEL 11");

var angka1 = 10;
var angka2 = 15;
var angka3 = 20;

if ((angka1 > angka2) && (angka1 > angka3)) {
  console.log("true");
} else {
  console.log("false");
}

console.log("\n");

console.log("LEVEL 12");

var result;

function addition(num1, num2) {
  result = num1 + num2;
  return result;
}
console.log(addition(2, 4));

console.log("\n");

console.log("LEVEL 13");

function random(number) {
  var randomNumber;
  randomNumber = Math.floor(Math.random() * 50);
  return randomNumber;
}
console.log(random());

console.log("\n");

console.log("LEVEL 14");

console.log("\n");

console.log("LEVEL 15");

function addition(num1, num2) {
  result = num1 + num2;
  return result;
}

function substract(num1, num2) {
  result = num1 - num2;
  return result;
}

function multiply(num1, num2) {
  result = num1 * num2;
  return result;
}

function divide(num1, num2) {
  result = num1 / num2;
  return result;
}

function modulo(num1, num2) {
  result = num1 % num2;
  return result;
}

console.log("\n");

console.log("LEVEL 16");

function addNumber(num1, num2) {
  var angka1 = substract(num1, num2);
  var angka2 = divide(num1, num2);
  var angka3 = angka1 + angka2;

  return angka3;
}
console.log(addNumber(5, 3));

console.log("\n");

console.log("LEVEL 17");

console.log("\n");

console.log("LEVEL 18");

function calculateSquareArea(side) {
  var result;
  result = side * side;
  return result;
}

function calculateSquarePerimeter(side) {
  var result;
  result = 4 * side;
  return result;
}

function calculateCircleArea(radius) {
  var result;
  result = Math.PI * radius * radius
  return result;
}

function calculateCircleCircumference(radius) {
  var result;
  result = Math.PI * 2 * radius;
  return result;
}

function calculateCubeArea(edge) {
  var result;
  result = 6 * (edge * edge);
  return result;
}

function calculateCubeVolume(edge) {
  var result;
  result = edge * edge * edge;
  return result;
}

function calculateTubeArea(radius, height) {
  var result;
  result = (2 * Math.PI * radius * height) + (2 * Math.PI * radius * radius);
  return result;
}

function calculateTubeVolume(circleArea, height) {
  var result;
  result = circleArea * height;
  return result;
}

console.log(calculateSquareArea(5));
console.log(calculateSquarePerimeter(5));
console.log(calculateCircleArea(5));
console.log(calculateCircleCircumference(5));
console.log(calculateCubeArea(5));
console.log(calculateCubeVolume(5));
console.log(calculateTubeArea(5, 7));
console.log(calculateTubeVolume(78.53, 7));

console.log("\n");

console.log("LEVEL 19");

console.log(calculateTubeVolume(calculateCircleArea(5),7));

console.log("\n");

console.log("LEVEL 20");

console.log("\n");

console.log("LEVEL 21");

var date = new Date();
console.log(date);

var year = date.getFullYear();
console.log("Year = "+year);

var month = date.getMonth();
console.log("Month = "+month);

var day = date.getDate();
console.log("day = "+day);

var weekDay = date.getDay();
console.log("weekDay = "+weekDay);

var hour = date.getHours();
console.log("Hour = "+hour);

var minute = date.getMinutes();
console.log("Minute = "+minute);

var second = date.getSeconds();
console.log("Second = "+second);

var millisecond = date.getMilliseconds();
console.log("Millisecond = "+millisecond);

console.log("\n");

console.log("LEVEL 22");

console.log("\n");

console.log("LEVEL 23");

console.log("\n");

console.log("LEVEL 24");

// curious charizard batch at impactbyte coding bootcamp address book
//
// store name in array;
// store address in array;
// store email in array;
// store students name, address, and email in object;
// retrieve students data from the object;

console.log("\n");

console.log("LEVEL 25");
var  studentArr = ["Yanuar", "Miftah", "Doddy"];
console.log(studentArr);
console.log(studentArr[0]);

console.log("\n");

console.log("LEVEL 26");

var studentNames= [];

function createBio (fullname, age, address) {
  var studentObj = {};
  studentObj.fullName = fullname;
  studentObj.age = age;
  studentObj.email = address;

  studentNames.push(studentObj);
  return result;
}

createBio ("yanuar yudhistira", 30, "Jakarta")
createBio ("Miftah Faris", 24, "Jakarta")
createBio ("Stefanus Doddy", 32, "Jakarta")

console.log (studentNames);

// function readBio () {
//   var text = "";
//   biodata.forEach(function(element) {
//     text += element + "\n";
//   })
//   return text;
// };
//
// console.log(readBio());
//
// function updateBio (biodata) {
//
// };
//
// function deleteBio (biodata) {
//
// };
//
// function searchBio (biodata) {
//
// };
//
//
// console.log("\n");
//
// console.log("LEVEL 27");
//
// console.log("\n");
//
// console.log("LEVEL 28");
// var todo = ["join impactbyte coding bootcamp"];
// console.log(todo);
// console.log(todo[0]);
//
// console.log("\n");
//
// console.log("LEVEL 29");
