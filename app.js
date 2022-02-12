//IMPUTS
var operatorA = () => parseInt(document.getElementById("input-operatorA").value);
var operatorB = () => parseInt(document.getElementById("input-operatorB").value);

//FUNCTION SUM
var getSum = () => operatorA() + operatorB();
//FUNCTION SUBSTRACTION
var getSubs = () => operatorA() - operatorB();
//FUNCTION MULTIPLICATION
var getMult = () => operatorA() * operatorB();
//FUNCTION DIVISION
var getDiv = () => operatorA() / operatorB();

//FUNCTIONS TO SET THE RESULT
var submitResultSum= () => isNaN(operatorA()) || isNaN(operatorB()) ? document.getElementById("result").innerHTML = "error" : document.getElementById("result").innerHTML = getSum();
var submitResultSubs= () => isNaN(operatorA()) || isNaN(operatorB()) ? document.getElementById("result").innerHTML = "error" : document.getElementById("result").innerHTML = getSubs();
var submitResultMult= () => isNaN(operatorA()) || isNaN(operatorB()) ? document.getElementById("result").innerHTML = "error" : document.getElementById("result").innerHTML = getMult();
var submitResultDiv= () => isNaN(operatorA()) || isNaN(operatorB()) ? document.getElementById("result").innerHTML = "error" : document.getElementById("result").innerHTML = getDiv();

//EVENT LISTENERS
document.getElementById("button-sum").addEventListener("click", submitResultSum);
document.getElementById("button-subtraction").addEventListener("click", submitResultSubs);
document.getElementById("button-multiplication").addEventListener("click", submitResultMult);
document.getElementById("button-division").addEventListener("click", submitResultDiv);

