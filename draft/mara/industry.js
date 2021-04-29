// / Load the data as csv ( will be using json)
d3.csv("/Data/energy_final.csv", function(data) {
        for (var i = 0; i < data.length; i++) {
        // data.date = data[i].date;
        data.energy_consumption = data[i].energy_consumption;
        data.industry = data[i].industry;
        console.log(data.energy_consumption);

//  get states data by its index
var ctx = document.getElementById("plot2").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: [
      data[1].industry, 
      data[2].industry, 
      data[3].industry, 
      data[4].industry, 
      data[5].industry, 
      data[6].industry, 
      data[7].industry],
      datasets: [ {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [
          Math.round(data[1].energy_consumption), 
          Math.round(data[2].energy_consumption),
          Math.round(data[3].energy_consumption), 
          Math.round(data[4].energy_consumption), 
          Math.round(data[5].energy_consumption), 
          Math.round(data[6].energy_consumption),
          Math.round(data[7].energy_consumption)]
        }
      ]
    }})

}})