const test = document.querySelectorAll("h1");

test[0].textContent = "Hello world!";

console.log(test);

// const h2 = document.getElementById('heading2');
// h2.textContent = "Hello world 2!";
// console.log(h2);
//document.getElementById('heading2').textContent='new content value'
document.getElementById("heading2").innerHTML = "new innerHTML content value";

console.log(document.getElementsByClassName("para"));

function changeOnClick() {
	const change_me = document.getElementsByClassName("para")[2];
	change_me.innerHTML = "Milk";
	change_me.style.fontSize = "35px";
	change_me.style.color = "red";
	change_me.style.backgroundColor = "yellow";
}


