// reset button
let reset = document.querySelector("#reset");

// script 1 
let depositBtn = document.querySelector("#paid-btn");
let totlaDeposit = 0;

const deposit = parseInt(localStorage.getItem('index'));


// script 2
let spandBtn = document.querySelector("#spand-btn");
let totalSpand = 0;

const json3 = parseInt(localStorage.getItem('index2'));



// show current amount
document.querySelector("#total__deposit").innerHTML = deposit;
document.querySelector("#total__spend").innerHTML = json3;