// This will prompt user to put their name in and capture the user input
//variable is a location where value gets stared 

var playerName = window.prompt("What is your robot's name?");

console.log(playerName);

console.log("This logs a string, good for leaving yourself a message");

//this will do math and log 20

console.log(10+10);

// what is this? - this is a way to make a sentence using the users input

console.log("Our robot's name is " + playerName);

// after user input, data will be stored in playerName. now we can call it during an alert

window.alert(playerName);

// this creates a function named "fight"

function fight() {
    window.alert("The fight has just begun!");
}

// fight();

