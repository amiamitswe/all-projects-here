
let spandBtn = document.querySelector("#spand-btn");
let totalSpand = 0;


const json3 = parseInt(localStorage.getItem('index2'));

document.querySelector("#total__spend").innerHTML = json3;


spandBtn.onclick = function ()
{
  let input2 = document.querySelector("#mb-main__spend").value.replace(/\s+/g,' ').trim();
  newAmount = parseInt(input2);
  if (!isNaN(newAmount)) {

    addTotalSpand(newAmount);
    // totalSpand += newAmount;


  if(json3 !== 0) {

    let tttt;
    tttt = json3 + newAmount;

    let test222 = parseInt(tttt);

    console.log(test222);
    console.log(typeof json3);
    console.log(typeof newAmount);
    
    let spend = JSON.stringify(test222);
    localStorage.setItem('index2', spend);
    displayTotalSpand(json3);
  }

  else {
    let spend = JSON.stringify(totalSpand);
    localStorage.setItem('index2', spend);
  }
   

    // console.log(totalSpand);
    return document.querySelector("#mb-main__spend").value = "";
  }

  else {
    alert("Please give numbers");
    return document.querySelector("#mb-main__spend").value = "";
  }
}  

// console.log(parseInt(json3));


const addTotalSpand = (amount) => {
  totalSpand += amount;
  return;
}

const displayTotalSpand = (amount) => {
  document.querySelector("#total__spend").innerHTML = amount;
}


reset.onclick = function () {
  let json = JSON.stringify(0);
    localStorage.setItem('index2', json);
}



reset.onclick = function () {
  let json = JSON.stringify(0);
  localStorage.setItem('index', json);
  let spend = JSON.stringify(0);
  localStorage.setItem('index2', json);
}