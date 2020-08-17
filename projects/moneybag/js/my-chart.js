
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {

  var totlaDeposit = deposit;
  var totalSpend = json3;

  var data = google.visualization.arrayToDataTable([
    ["item", "amounts"],
    ["Total Spend", totalSpend],
    ["Total Deposit", totlaDeposit],
  ]);

  var color;

  if (totlaDeposit > totalSpend) {
    color = ["#f5426c","green"];
  }

  else if (totlaDeposit === totalSpend) {
    color = ["#f5429e","#4bf542"];
  }

  else {
    color = ["red","#f5b342"];
  }

  var options = {
    is3D: true,
    backgroundColor: "#54483a",
    chartArea:{left:30,top:60,right:30,bottom:10,width:'100%',height:'100%'},
    colors: color,
    fontSize: 12,
    legend: {position: 'top', textStyle: {color: '#fff', fontSize: 16}}
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart_3d")
  );

  chart.draw(data, options);
}




