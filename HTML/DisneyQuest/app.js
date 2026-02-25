window.alert("Welcome to the Shire!")

// VARIABLES

let userName = prompt("What is your name?")

let company = Number(prompt("How many are in your company?"))

let myName = "Smeagol"

let smeagolParty = company + 1

//OUTPUT TO CONSOLE

if (userName == "Bilbo") {
    console.log("Hand over the ring, Bilbo!")
}

else {
    console.log("Hello, " + userName + "!")
}

if (company == 1) {
    console.log("You are not making it alone!")
}

else {
    console.log("You are wise for not going alone!")
}

if (company <= 10) {
    console.log("You're going to need more than that to make it to Mordor!")
}

else {
    console.log("And with a proper company at that!")
}

console.log(`My name is ${myName}. If you add me to your party, we would be ${smeagolParty}. What do you say?`)