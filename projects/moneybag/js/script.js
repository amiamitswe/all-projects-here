
let depositBtn = document.querySelector("#paid-btn");
let reset = document.querySelector("#reset");
let totlaDeposit = 0;


const json2 = parseInt(localStorage.getItem('index'));

document.querySelector("#total__deposit").innerHTML = json2;


depositBtn.onclick = function ()
{
  let input1 = document.querySelector("#mb-main__paid").value.replace(/\s+/g,' ').trim();
  newAmount = parseInt(input1);
  if (!isNaN(newAmount)) {

    addTotalDeposit(newAmount);
    // totlaDeposit += newAmount;


  if(json2 !== 0) {

    let tttt;
    tttt = json2 + newAmount;

    let test222 = parseInt(tttt);

    console.log(test222);
    console.log(typeof json2);
    console.log(typeof newAmount);
    
    let json = JSON.stringify(test222);
    localStorage.setItem('index', json);
    displayTotalDeposit(json2);
  }

  else {
    let json = JSON.stringify(totlaDeposit);
    localStorage.setItem('index', json);
  }
   

    // console.log(totlaDeposit);
    return document.querySelector("#mb-main__paid").value = "";
  }

  else {
    alert("Please give numbers");
    return document.querySelector("#mb-main__paid").value = "";
  }
}  

// console.log(parseInt(json2));


const addTotalDeposit = (amount) => {
  totlaDeposit += amount;
  return;
}

const displayTotalDeposit = (amount) => {
  document.querySelector("#total__deposit").innerHTML = amount;
}


