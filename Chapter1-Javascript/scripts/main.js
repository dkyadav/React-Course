const myHeading = document.querySelectorAll("h1");
myHeading[1].textContent = "Hello world!";

console.log(myHeading)

const h2 = document.getElementById('heading2');
h2.textContent = "Hello world 2!";
console.log(h2);

document.getElementsByClassName("para")[0].innerHTML = "Milk";