let first = "";
let last = "";
let nick = "Thuzin";

console.log(first || last || nick || "anonimo")

let inputPassword = "1234";
let inputRecoveryCode = "ABC999";

let correctPassword = "4321";
let correctRecoveryCode = "ABC998";

if (inputPassword === correctPassword || inputRecoveryCode === correctRecoveryCode) {
    alert("access allowed")
} else {
    alert("access not allowed")
}