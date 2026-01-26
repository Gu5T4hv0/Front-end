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