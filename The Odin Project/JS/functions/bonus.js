// Conditionals & Functions
// Smart ATM Simulator

let accountBalance = 1000;
let correctPin = 1234;
let isBlocked = false;
let errorCount = 0;

while (!isBlocked) {
    let pin = Number(prompt("Enter your pin: "));

    if (checkPin(pin)) {
        menu(true);
        break;
    }
}
function checkPin(pass) {
    if (isBlocked) {
        alert("Account is blocked.")
        return false;
    }
    if (pass === correctPin && Number.isInteger(pass)) {
        return true;
    } else {
        errorCount++;

        if (errorCount >= 3) {
            isBlocked = true;
            alert("Too many attempts. Account locked.");
        } else {
            alert(`Incorrect PIN. Attempts left: ${3 - errorCount}`);
        }

        return false;
    }
}
function menu(getPin) {
    if (isBlocked) {
        alert("No actions allowed. Account is locked.");
        return;
    }
    if (getPin === true) {
        let choice = prompt("For check balance - 1\nFor deposit - 2\nFor withdraw - 3");
        switch(choice) {
            case "1":
                checkBalance();
                break;
            case "2":
                let add = Number(prompt("How much do you want to deposit? "));
                if (add <= 0) {
                    alert("Invalid value.");
                } else {
                    deposit(add);
                }
                break;
            case "3":
                let subtract = Number(prompt("How much do you want to withdraw? "));
                if (subtract > 500) {
                    alert("This reached you daily withdraw limit of $500");
                }
                if (subtract > accountBalance) {
                    let reallySubtract = prompt("Insufficient funds. Do you really want to get a negative account? (yes/no)");
                    if (reallySubtract != null && reallySubtract === "yes") {
                        withdraw(subtract);
                    }
                } else {
                    withdraw(subtract);
                }
                break;
        }
    }
}
function checkBalance() {
    console.log(`Your account balance is equal to: $${accountBalance}`);
}
function deposit(amount) {
    if (amount > 1000) {
        accountBalance = accountBalance + amount + 50;
        console.log(`Deposits above $1000 gains a bonus of $50. So the balance is equal to: $${accountBalance}`);
    } else {
        accountBalance += amount;
        console.log(`After the deposit, your account balance is equal to: $${accountBalance}`);
    }
}
function withdraw(amount) {
    accountBalance -= amount;
    console.log(`After the withdraw, your account balance is equal to: $${accountBalance}`);
}