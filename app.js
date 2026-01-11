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

// checkAge("Aaron", 40);
// checkAge("Clara", 15);
// checkAge();

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function whichQuadrant(x, y) {
    if (x === 0 && y === 0) {
        console.log(`(${x}, ${y} is at the origin)`);
    } else if (x === 0) {
        console.log(`${x}, ${y} is on the y axis`);
    } else if (y === 0) {
        console.log(`${x}, ${y} is on the x axis`);
    } else if (x > 0 && y > 0) {
        console.log(`${x}, ${y} is in Quadrant 1`);
    } else if (x < 0 && y > 0) {
        console.log(`${x}, ${y} is in Quadrant 2`);
    } else if (x < 0 && y < 0) {
        console.log(`${x}, ${y} is in Quadrant 3`);
    } else {
        console.log(`${x}, ${y} is in Quadrant 4`);
    }
}

whichQuadrant(3, 5);
whichQuadrant(-2, 0);
whichQuadrant(6, -2);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");



// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
