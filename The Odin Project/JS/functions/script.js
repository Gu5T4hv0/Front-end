// Local and Outer Variables
// Session Message Tracker

let userName = "Bro";
let totalMessageCount = 0;
let sessionStatus = false;

function startSession() {
    let welcomeMessage = "Welcome!" + " " + userName;
    console.log(welcomeMessage)
    if (sessionStatus === false) {
        sessionStatus = "active";
    } else {
        sessionStatus = "active";
    }
    console.log(`The Session status is ${sessionStatus}`);
}

function sendMessage(message) {
    let format = message.toUpperCase();
    if (sessionStatus === "active") {
        console.log(format);
    }
    totalMessageCount += 1;
}

function endSession() {
    let summary = "Lorem ipsum my friend";
    console.log(summary);
    console.log(`Your name is ${userName}`);
    console.log(`Total messages sent: ${totalMessageCount} message(s)`);
    if (sessionStatus === "active") {
        sessionStatus = "inactive";
    }
    console.log(`The Session status is ${sessionStatus}`)
}

function theGreatReset() {
    if (totalMessageCount > 0) {
        totalMessageCount = 0;
    }
    console.log(totalMessageCount)
}

// Parameters
// Smart Notification System

function createNotification(senderName, messageContent, priority) {
    let formatted = `The sender: ${senderName} \nsays: ${messageContent}\nthis message has ${priority} priority`;
    return formatted;
}
const notification = createNotification("Jobert", "I want meat", "high");

function validateNotification(formatted, priority) {
    if (priority === "high") {
        return true;
    }
    return false;
}
const isValid = validateNotification(notification, "high");

function sendNotification(formatted, deliveryType) {
    if (deliveryType === "console") {
        console.log(formatted);
    } else if (deliveryType === "alert") {
        alert(formatted);
    }
}

function scheduleNotification(formatted, delay) {
    console.log(`The message will be sent in ${delay} minutes.`);
}

if (isValid) {
    sendNotification(notification, "console");
} else {
    scheduleNotification(notification, 3);
}

// Default values
// User Action Logger (nasty chatgpt)

function logAction(userName = "Luísa", action = "posts", timestamp = "3/3") {
    return [userName, action, timestamp];
}
const log = logAction();

function formatAction(userName) {
    return userName;
}
const format = formatAction(log[0]);

// The Greeting Generator

// function welcomeUser(name = "Guest", role = "Visitor") {
//     return `Hello, ${name}! Your access level is: ${role}.`
// }
// console.log(welcomeUser());

function getDefaultRole() {
    return "Standard User";
}
function welcomeUser(name = "Guest", role = getDefaultRole()) {
    return `Hello ${name}! Your access level is ${role}`
}
console.log(welcomeUser("Lucas", "Premium User"))

// The Checkout Logic

function calculateTotal(price, tax = 0.07, shipping = 5) {
    return (price * (1 + tax)) + shipping;
}
console.log(calculateTotal(3, undefined, 0));

// Alternative default parameters
// The Smart Search Filter

function getSearchCategory(category) {
    let seasonal = "December";
    if (category === undefined) {
        if (seasonal === "December") {
            category = "Winter Coats";
        } else {
            category = "New Arrivals";
        }
    }
    return `Category: ${category}`;
}
console.log(getSearchCategory());

// The User Settings Sync

function setTheme(theme) {
    console.log(theme ?? "System Default");
}
setTheme(0);
setTheme(null);
setTheme();
setTheme("");

// Returning a value
// The Travel Budgeter

function convertToUSD(amount, exchangeRate) {
    let calculation = amount * exchangeRate;
    let fixed = calculation.toFixed(2);
    return fixed;
}

function final(currency) {
    return `The total cost is $${currency}`;
}
const answer = final(convertToUSD(14, 5.19));
console.log(answer)

// Naming a function
// The Health Monitor

function showStats() {

}

function calcBMI() {

}

function isHeartRateDangerous() {

}

function createHTML() {

}

// everything of functions
// The Barista Bot

function calcTotal(basePrice, extraShots = 0) {
    return basePrice + extraShots * 1.5;
}

function checkIngredientStock(ingredient) {
    if (ingredient === undefined) {
        ingredient = "Water";
    }
    return true;
}

function prepareOrder(drinkName, shots) {
    let isAvailable = checkIngredientStock(drinkName);
    let price = calcTotal(3, shots);
    if (isAvailable) {
        return `Making ${drinkName}. That will be $${price}.`
    } else {
        return `Sorry, we're out of ${drinkName}`
    }
}
console.log(prepareOrder("Cappucino", 2));

function showReceipt(cost, drinkName) {
    return `Your ${drinkName}, costed $${cost} dollars. Enjoy!`;
}
console.log(showReceipt(calcTotal(3, 2), "Cappucino")); 

// Anonymous function

let transformers = [1,2,3,4,5];

const user = function () {
    let userInput = " javascript is fun ";
    let clean = userInput.trim();
    return clean;
};
console.log(user())

// Arrow function
// The Nano-Processor

const cleaner = text => text.toLowerCase().trim();
console.log(cleaner(" jOHN dOE "));

const parser = text => text.split(",");
const parsed = parser("john,doe,25");

const object = ([firstName, lastName, age]) => {return {firstName, lastName, age: Number(age)}};
console.log(object(parsed));

const isAdult = age => age >= 18;
console.log(isAdult(parsed[2]));


// Anonymous functions and arrow functions
// The Data Transformer
const products = [
    {name: 'chair', price: 50, category: 'home'},
    {name: 'table', price: 80, category: 'kitchen'},
    {name: 'tv', price: 100, category: 'electronics'}
];

const currency = products.map(item => `$${item.price}`);
const upper = products.map(item => item.name.toUpperCase());
const merge = [upper, currency];
console.log(merge);

const func = products.filter(function(product){
    return product.price > 50;
});
console.log(func);

const finder = products.find(item => item.category === "electronics");
console.log(finder);

const sum = products.reduce(function(one, another){
    return one + another.price;
}, 0);
console.log(sum);

// Function scope
// The Coffee Shop Calculator

const shopName = "Good Coffee";
const tax = 10;

function calc(tax) {
    const price = 20;
    const math = price + (tax/10);
    return math;
}
function formatter(math) {
    console.log(`Welcome to ${shopName}! Your total is $${math.toFixed(2)}`);
}
formatter(calc(tax));

// everything of functions 2
// The "Fiscal Fitness" Calculator

