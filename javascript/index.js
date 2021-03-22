/*const Like = {food : pizza, sport : soccer, singer: java };
function lollin() {console.log(Like.food)}
console.log('Im Fucking Working')*/

/*function sayHello(name, age){
    return `Hello ${name} you are ${age} years old`;
}

const greetNicolas = sayHello("Nicolas", 14)

console.log(greetNicolas);*/

/*const title = document.getElementById("title");

title.innerHTML = "Hi! From JS"
title.style.color = "red";
document.title = 'I own you now';
console.log(title);*/

const title = document.querySelector("#title");

/*title.innerHTML = "Hi! From JS"
title.style.color = "red";
document.title = 'I own you now';*/
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d"

function handleClick(){
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }else{
        title.style.color = BASE_COLOR;
    }
}

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter",handleClick);
}
init();

function handleOffline() {
    console.log("Bye bye")
}

function handleOnline(){
    console.log("Welcome back")
}

window.addEventListener("offline",handleOffline);
window.addEventListener("online", handleOnline);
