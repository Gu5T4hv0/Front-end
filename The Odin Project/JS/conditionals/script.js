// let grade = -5;

// if (90 < grade && grade <= 100) {
//     alert("Excelent")
// } else if (80 <= grade && grade <= 89) {
//     alert("Very Good")
// } else if (70 <= grade && grade <= 79) {
//     alert("Good")
// } else if (60 <= grade && grade <= 69) {
//     alert("Average")
// } else if (51 <= grade && grade <= 59) {
//     alert("Needs Improvement")
// } else if (0 <= grade && grade <= 50) {
//     alert("Failed")
// } else {
//     alert("Invalid score")
// }

let isLoggedIn = true;
let isAdmin = true;
let isBanned = false;
let age = 19;

if (!isLoggedIn) {
    console.log("Please log in")
} else {
    if (isBanned) {
        console.log("Access denied")
    } else {
        if (age < 18) {
            console.log("Age restricted")
        } else {
            if (isAdmin) {
                console.log("Welcome, admin")
            } else {
                console.log("Welcome, user")
            }
        }
    }
}

let command = "help"

switch (command) {
    
    case "start":
        console.log("starten Sie die Anwendung")
        break;

    case "stop":
        console.log("beenden Sie die Anwendung")
        break;

    case "pause":
        console.log("Pausieren Sie die Anwendung")
        break;

    case "resume":
        console.log("Setzen Sie die Bewerbung fort")
        break;

    case "help":
        console.log("Kann ich dir bei etwas helfen?")
        break;

    case "exit":
        console.log("das Programm beenden")
        break;

    default:
        console.log("Unbekannte Eingabe")
        break;
}

this