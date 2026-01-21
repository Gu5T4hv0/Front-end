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
