let first = "";
let last = "";
let nick = "Thuzin";

console.log(first || last || nick || "anonimo")

let inputPassword = "1234";
let inputRecoveryCode = "ABC999";

let correctPassword = "4321";
let correctRecoveryCode = "ABC998";

// if (inputPassword === correctPassword || inputRecoveryCode === correctRecoveryCode) {
//     alert("access allowed")
// } else {
//     alert("access not allowed")
// }

let age = 21;
let hasID = true;
let isBanned = true;

if (age >= 18 && hasID == true && isBanned == true) {
    alert("Access Granted")
} else {
    alert("Access Denied")
}