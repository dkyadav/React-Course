console.log('index.js included');

// var i = 0

// if(i === "0")
//     console.log("compared")
// else
//     console.log("not compared")

function add()
{
    const number1 = document.getElementById('number1_textbox').value;
    let number2 = document.getElementById('number2_textbox').value;

    var result = parseInt(number1) + Number(number2);

    document.getElementById('resultId').innerHTML = result;
    // <p> , <div>, <span> innerHTML or innerText
}

function commonfn(operator_type){
    let number1 = Number(document.getElementById('number1_textbox').value);
    let number2 = Number(document.getElementById('number2_textbox').value);

    let result = 0;

    if(operator_type === "sub"){
        result = number1 - number2;
    } else if(operator_type == "multiply") {
        result = number1 * number2;
    } else if(operator_type == "divide") {
        result = number1 / number2;
    } else if(operator_type == "pow") {
        result = Math.pow(number1,number2);
    }


    document.getElementById('resultId').innerHTML = result;
}


function numberfn(arg1,arg2,arg3)
{
    console.log(arg1,arg2,arg3);
}

numberfn(1,2,3);

var arrowfn = (arg1,arg2,arg3) => {
    console.log(arg1,arg2,arg3);
}

arrowfn(1,2,3);

const arrowfn_sample = (arg1) => {
    console.log(arg1);

    let arr_elem = document.getElementsByClassName('input_class');

    console.log(arr_elem);

    let number1 = arr_elem[0].value; 
    let number2 = arr_elem[1].value;

    
    //console.log(number1, number2);
    
    var result = Math.pow(parseInt(number1),Number(number2));

    document.getElementById('resultId').innerHTML = result;

}