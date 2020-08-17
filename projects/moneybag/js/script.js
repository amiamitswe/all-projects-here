depositBtn.onclick = () =>
{
  let depositInput = parseInt(document.querySelector("#mb-main__paid").value.replace(/\s+/g,' ').trim());

  if (!isNaN(depositInput)) {
     if (isNaN(deposit)) {
      updateUserDepositIfZeroOrEmpty("index", depositInput);
    }

    else if(deposit !== 0) {
      let depositAmount = deposit + depositInput;
      let depositJson = JSON.stringify(depositAmount);
      localStorage.setItem('index', depositJson);
      displayTotalDeposit(depositAmount);
    }

    else {
      updateUserDepositIfZeroOrEmpty("index", depositInput);
    }

    paidAmount();
  }

  else {
    alert("Please give numbers");
    paidAmount();
  }
}  

const addTotalDeposit = (amount) => {
  totlaDeposit += amount;
  return;
}