// document.getElementById('anchor').addEventListener('click', function() {
//     console.log('anchor');
//   });

let buttons = document.querySelectorAll("button");
console.log(buttons);

buttons.forEach((btn) => {
	console.log(btn.innerText);
	btn.addEventListener("click", enterNumber(2));
});

function enterNumber(num) {
    console.log(num);
	document.getElementById("inputBox").value = num;
}

function checkAndEnter(e) {
	//console.log(e.innerText)
	document.getElementById("inputBox").value = e.innerText;
}
