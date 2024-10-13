// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(`count: ${count}`);
// }

// const SECRET = "PassWord";
// let typePW = prompt("Enter the password");
// while (typePW !== SECRET) {
//     typePW = prompt("Enter the password");
// }
// alert("Congratulation!");

let input = parseInt(prompt("enter a number"));
while (!input) {
    input = parseInt(prompt("its not a number, enter a number"));
}

const target = Math.floor(Math.random() * input) + 1;
console.log(target);

let tries = 1;

let guess = prompt("guess a number (it you want to quit press 'q')");
while (parseInt(guess) !== target) {
    if (guess === "q") {
        break;
    }
    guess = parseInt(guess);
    if (guess > target) {
        guess = prompt("too high, guess again");
        tries++;
    } else if (guess < target) {
        guess = prompt("too low, guess again");
        tries++;
    } else {
        guess = prompt("invalid input,enter a number");
    }
}
if (guess === "q") {
    console.log("you quit");
}
else {
    console.log(`congrats you tried ${tries} times`);
}