console.log("Javascript and Node are working");

// Event Handlers PART 1

//references Though the code is working in the browser is not working on the DEBUG CONSOLE????
const myAlertButton1 = document.getElementById("mybutton1");
console.log("myAlertButton1");

//function
const giveAlert1 = () => {
  alert("button1 clicked");
};

// event
myAlertButton1.addEventListener("click", giveAlert1);

console.log("all code has been ran");

// Event Handlers PART 2

// References:

const BGcolorButton = document.getElementById("mybutton2");
console.log("changeBGcolor"); // this was causing the problem made it into a string and now works

const bodyElement = document.getElementById("bodyColor");

//function
const toggleBGcolor = () => {
  bodyElement.classList.toggle("red-background"); // the big discovery was to put the toggle here
};

// event
BGcolorButton.addEventListener("click", toggleBGcolor);

console.log("all code has been ran");
