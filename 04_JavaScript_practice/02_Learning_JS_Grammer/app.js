// console.log("Before If Conditional")
// let random = Math.round(Math.random() * 10)
// if (random > 5) {
//     console.log(`Your Number Is ${random}`);
//     console.log(random)
// };
// console.log("After If Conditional")

// const dayOfWeek = "Saturday";

// if (dayOfWeek === "Monday") {
//     console.log("I hate monday");
// }
// else if (dayOfWeek === "Saturday") {
//     console.log("Yay this is Saturday!");
// }

const password = prompt("Please enter a password");

if (password.length < 8) {
    alert("Password must be at least 8 characters long");
}
else {
    if (password.indexOf(" ") === -1) {
        alert("Password cannot contain spaces");
    }
    else {
        console.log("Password has no spaces init");
    }
}
