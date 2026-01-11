console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {

    if (count <= 0){
        console.log("Invalid number");
    }

    for (let i = 1; i <= count; i++){
        if(i % 2 != 0) {
            console.log(i);
        }
    }
}

// printOdds(16);
// printOdds(100);
// printOdds(-6);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){
    if (age == null || isNaN(age)){
        console.log("Please enter a valid age!");
        return;
    }
    if (!userName || userName.trim() == ""){
        console.log("please enter a valid user name!");
        return;
    }

    var aboveSixteen = `Congrats ${userName}, you can drive!`;
    var belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if (age < 16) {
        console.log(belowSixteen);
    } else {
        console.log(aboveSixteen);
    }
}

checkAge("Aaron", 40);
checkAge("Clara", 15);
checkAge();

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
