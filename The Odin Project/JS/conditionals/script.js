let grade = -5;

if (90 < grade && grade <= 100) {
    alert("Excelent")
} else if (80 <= grade && grade <= 89) {
    alert("Very Good")
} else if (70 <= grade && grade <= 79) {
    alert("Good")
} else if (60 <= grade && grade <= 69) {
    alert("Average")
} else if (51 <= grade && grade <= 59) {
    alert("Needs Improvement")
} else if (0 <= grade && grade <= 50) {
    alert("Failed")
} else {
    alert("Invalid score")
}

let isLoggedIn = true;
let isAdmin = true;
let isBanned = false;
let age = 19;

// if (!isLoggedIn) {
//     console.log("Please log in")
// } else {
//     if (isBanned) {
//         console.log("Access denied")
//     } else {
//         if (age < 18) {
//             console.log("Age restricted")
//         } else {
//             if (isAdmin) {
//                 console.log("Welcome, admin")
//             } else {
//                 console.log("Welcome, user")
//             }
//         }
//     }
// }

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

// let isOnline = false;
// let lastActiveMinutes = 2;

// isOnline ? console.log("User is online") : console.log(`The user is offline since ${lastActiveMinutes} minutes ago`)


// let isLoggedIn = true;
// let isAdmin = false;
// let isBanned = false;
// let age = 19;
// let subscription = "enterprise";
// let appMode = "beta";
// let lastActiveMinutes = 2;
// let isOnline = false;

// if (!isLoggedIn) {
//     console.log("Please log in")
// } else {
//     if (isBanned) {
//         console.log("Access denied")
//     } else {
//         if (age < 18) {
//             console.log("Age restricted")
//         } else {
//             switch (subscription) {
//                 case "free":
//                     console.log("limited access")
//                     break;
//                 case "pro":
//                     console.log("full access")
//                     break;
//                 case "enterprise":
//                     console.log("full access + admin tools")
//                     break;
//                 default:
//                     console.log("invalid subscription")
//                     break;
//             }
//             if (appMode === "maintenance" && !isAdmin) {
//                 console.log("block access")
//             } else if (appMode === "beta" || isAdmin) {
//                 console.log("allow access")
//             } else {
//                 console.log("normal access")
//             }
//             isOnline
//                 ? console.log("Online")
//                 : lastActiveMinutes <= 5
//                     ? console.log(`Away since ${lastActiveMinutes} minutes ago`)
//                     : console.log("Offline")
//         }
//     }
// }

let day = "Monday";
let hour = 5;
let isWeekend = true;
let hasMeeting = true;
let mood = "neutral";
let weather = "rainy";

if (isWeekend === true) {
        if ((weather === "sunny" || weather === "cloudy") && mood === "energetic") {
            console.log("You're feeling really energetic in the right day! Go outside! Enjoy!")
        } else {
            console.log("Normy weekend do whatever you want, i dont have suggestions")
        }
}
mood === "energetic"
            ? console.log("You're feeling great today!")
            : console.log("Take it easy, lemon squeezy")
if (hour <= 8) {
    if (isWeekend) {
        console.log("Man sit back, relax, and enjoy the weekend")
    } else {
        console.log("Wake up for life man! Life is NOT a strawberry")
    }
} else if (hour > 8 && hour <= 17) {
    if (hasMeeting) {
        console.log("Remember that you have THAT meeting right now, so prepare for it, it has to be good, dont disapoint me!")
    } else if (!hasMeeting && mood === "tired") {
        console.log("Man I cant believe, you just sleep late last night. You're looking like a Zombie! Take a coffee and enter in the cracking meeting!")
    } else {
        console.log("You have no meetings today. Thanks the Lord! Start working today, better than yesterday!")
    }
} else if (hour > 17) {
    switch (weather) {
        case "sunny":
            console.log("Let's go man, its sunny outside, get out of this sofa, and have fun there outside, get an icecream, go to the swimming pool, idk, you're creative enough to think by yourself!")
            break;
        case "rainy":
            console.log("Oh man, take advantage that its raining, and enter in the vibe of the song 'I think I like when it rains', and stay home watch a movie, invite friends to do something indoors")
            break;
        case "snowy":
            console.log("It snows, make a hot chocolat, watch 'Home Alone' by the sixth time, or do whatever you want, you're free, isnt it?")
            break;
        default:
            console.log("Enjoy the evening!")
            break;
    }
}
