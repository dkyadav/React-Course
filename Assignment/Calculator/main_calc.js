console.log("included");

var calc_result = document.getElementById("calc_result");
var cur_val_1 = 0;
var cur_val_2 = 0;
var cur_operator = '';

function getValue(v) {
	//calc_result.value += v;

	summary_log(v);

	if (cur_val_1 === 0) {
		calc_result.value = calc_result.value + v;
	} else if (cur_val_1 !== 0 && cur_val_2 === 0) {
		calc_result.value = v;
		cur_val_2 = parseInt(calc_result.value);
	} else if (cur_val_1 !== 0 && cur_val_2 !== 0) {
		calc_result.value += v;
		cur_val_2 = parseInt(calc_result.value);
	}
}

function saveCurrentValue(varNum) {
	if (varNum === "one") {
		cur_val_1 = Number(calc_result.value);
	} else if (varNum === "two") {
		cur_val_2 = Number(calc_result.value);
	}
}

function getOperator(o) {

    if(o !== 'C')
	    summary_log(o);

	switch (o) {
		case "*":
			break;

		case "+":
			console.log("+called");
			saveCurrentValue("one");
            cur_operator = '+';
			break;

		case "-":
            saveCurrentValue("one");
            cur_operator = '-';
			break;

		case "C":
            cur_val_1 = 0;
            cur_val_2 = 0;
            calc_result.value = "";
            summary_log("<hr>");
			break;

		case "=":
            if(cur_operator === "+")
			    calc_result.value = cur_val_1 + cur_val_2;
            else if(cur_operator === "-")
                calc_result.value = cur_val_1 - cur_val_2;

			summary_log(calc_result.value);
			summary_log("<br>");
			break;

		default:
			break;
	}

	console.log(`cur_val_1: ${cur_val_1}`);
	console.log("cur_val_2: " + cur_val_2);
}

function summary_log(char) {
	console.log("here");
	var p_sum = document.getElementById("calc_result_summary");

	p_sum.innerHTML += char;
}

function backspace(){
    console.log(calc_result.value);
    console.log(cur_val_1);
    console.log(cur_val_2);

    calc_result.value = calc_result.value.substr(0,calc_result.value.length-1);


    var temp_d = document.getElementById("calc_result_summary").innerText;
    console.log(temp_d)
    console.log(temp_d.length);

    //document.getElementById("calc_result_summary").innerText = temp_d.substr(0,temp_d.length-1)
    document.getElementById("calc_result_summary").innerText = temp_d.substring(0,temp_d.length-1)
}
