let num1 = 2;
let num2 = 34;
let num3 = 22;
let num4 = 73;

let number = num1 + num2;
let number2 = num3 - num4;

let finalResult = number * number2;

evenOddResult = finalResult % 2;


if (finalResult % 2 === 0) {
    console.log("even")
}

let result = 7 + 13 / 9 + 7;
let result2 = (100 / 2) * 6;

result = result * result2
console.log(result)

let finalResult2 = result.toFixed(2)
console.log(finalResult2)

console.log(typeof finalResult2)
finalNumber = Number(finalResult2)
console.log(typeof finalNumber)

// Statement 1: The elephant weighs less than the mouse
const eleWeight = 1000;
const mouseWeight = 2;
// Statement 2: The Ostrich is taller than the duck
const ostrichHeight = 2;
const duckHeight = 0.3;
// Statement 3: The two passwords match
const pwd1 = "stromboli";
const pwd2 = "stROmBoLi";

weightComparison = eleWeight < mouseWeight;
heightComparison = ostrichHeight > duckHeight;
pwdMatch = pwd1 === pwd2;

const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);

const coolBandName = "Front ";
const number7 = 242;
console.log(coolBandName + number7); // "Front 242"

const people = "Bros";
const vrai = `Life is good ${people}`
console.log(vrai)

const da = "I can do it ";
const druben = "all day";
console.log(`${da}${druben}`)

const frase = 'she said me "so"'
console.log(frase)

let alpha = "abcdefg"
let test = alpha[2];
console.log(test)

let txt = "What if I had more views?"
let part = txt.substr(7, 14)
console.log(part)

let text1 = "What if I had more views?"
let text2 = txt.toUpperCase()
console.log(text2)

let text = "Hello world \uD800";
let resulto = text.toWellFormed();
console.log(resulto)

let a = "s.k.l.d.e.k.n.f.j.k.d";
let b = a.split(".");
console.log(b)

let userName = "   Bro   "
let expense = 'water   ';
let low = 'outch!'
let price = '30.50';
let tax = 10;
let discount = 5;

let trino = userName.trim()
console.log(`Name: ${trino}`)

let leno = trino.length;
console.log(`Name length: ${leno}`)

let slice = expense.slice(0, 5)
console.log(`Expense: ${slice}`)

let scream = low.toUpperCase();
console.log(`Pain: ${scream}`)

let pt = scream.replace("OUTCH!", "AAII!")
console.log(`Dor: ${pt}`)

console.log(`Original Price: $${price}`)

let taxAmount = (Number(price) / 100) * tax
console.log(`Tax: $${taxAmount.toFixed(2)}`)

let discountAmount = (Number(price) / 100) * discount
console.log(`Discount: $${discountAmount}`)

let finalPrice = Number(price) + taxAmount - discountAmount;
console.log(`Final Price: $${finalPrice}`)