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