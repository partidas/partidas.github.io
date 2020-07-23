/*const myHeading = document.querySelector('h1');
if(myHeading.textContent === "NATURE, Dont you love it? ") {
    alert('Switching Heading!');
    myHeading.textContent = 'Hello world!';
} */

// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/nature-background-mountian-riverside-preview.jpg') {
        myImage.setAttribute ('src', 'images/sequoia.jpeg');
    } else {
        myImage.setAttribute ('src', 'images/nature-background-mountian-riverside-preview.jpg');
    }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Nature is cool, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Nature is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

// Practice code for alerts on clicking the webpage
/*
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
 
// Alert testing creating functions

/*
function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
}

alert(multiply(5,5));
*/