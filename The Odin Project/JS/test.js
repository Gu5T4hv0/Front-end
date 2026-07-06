let price = 100;
let discount = 10;

let final = price - ((price/100)*discount);

console.log(`The final item costs ${final}`);


const hour_of_day = 17;

if (hour_of_day < 12) {
    console.log("Good morning");
} else if (hour_of_day < 18) {
    console.log("Good afternoon");
} else {
    console.log("Good evening");
}

function multiply(n1, n2) {
    let yea = n1 * n2;
    return yea;
}
console.log(multiply(2, 3))