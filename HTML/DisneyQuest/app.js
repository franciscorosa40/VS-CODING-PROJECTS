// VARIABLES

let name = prompt("What is your name?");

//OUTPUT TO CONSOLE

if (name == "Bilbo") {
    console.log("Hand over the ring, Bilbo!")
}

else {
    console.log("Hello, " + name + "!")
}

let company = prompt("How many are in your company?")

if (company <= 10) {
    console.log("You're going to need more than that to make it to Mordor!")
}

else {
    console.log("That's a proper company!")
}

if (company < 2) {
    console.log("You are not making it alone!")
}

else {
    console.log("You are wise for not going alone!")
}