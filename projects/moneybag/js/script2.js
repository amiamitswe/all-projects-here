spandBtn.onclick = function ()
{
  let spendInput = parseInt(document.querySelector("#mb-main__spend").value.replace(/\s+/g,' ').trim());

  if (!isNaN(spendInput)) {

    addTotalSpand(spendInput);

    if(json3 !== 0) {
      let tttt;
      tttt = json3 + spendInput;

      let test222 = parseInt(tttt);
      
      let spend = JSON.stringify(test222);
      localStorage.setItem('index2', spend);
      displayTotalSpand(json3);
      console.log("Data insert success");

      displayTotalSpand(test222);
    }

    else {
      let spend = JSON.stringify(totalSpand);
      localStorage.setItem('index2', spend);
    }

    return document.querySelector("#mb-main__spend").value = "";
  }

  else {
    alert("Please give numbers");
    return document.querySelector("#mb-main__spend").value = "";
  }
}  

const addTotalSpand = (amount) => {
  totalSpand += amount;
  return;
}