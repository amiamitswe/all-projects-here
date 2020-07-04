reset.onclick = () => {

  let passowrd = prompt("Your password Please");

  if (passowrd === "  ") {
    let json = JSON.stringify(0);
    localStorage.setItem('index', json);
    localStorage.setItem('index2', json);
    displayTotalDeposit(0);
    displayTotalSpand(0);
  }
  else {
    alert("password Error !!!");
  }
}


const displayTotalDeposit = (amount) => {
  document.querySelector("#total__deposit").innerHTML = amount;
}

const displayTotalSpand = (amount) => {
  document.querySelector("#total__spend").innerHTML = amount;
}


const paidAmount = () => document.querySelector("#mb-main__paid").value = "";



const updateUserDepositIfZeroOrEmpty = (index, data) => {
  let depositJson = JSON.stringify(data);
  localStorage.setItem(index, depositJson);
  displayTotalDeposit(depositJson);
}