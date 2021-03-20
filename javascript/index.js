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

function handleClick(){
    title.style.color = "blue";

}

title.addEventListener("click",handleClick);
