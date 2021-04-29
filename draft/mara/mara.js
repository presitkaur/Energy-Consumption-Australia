// https://github.com/chartjs/Chart.js
// https://www.chartjs.org/docs/latest/axes/styling.html

// Polar Charts ( Energy Consumed by AUS States)
// Load the data as csv ( will be using json)
d3.csv("/Data/population_gb.csv", function(data) {
        for (var i = 0; i < data.length; i++) {
        // data.date = data[i].date;
        data.energy_consumption = data[i].energy_consumption;
        data.location = data[i].location;
        console.log(data.energy_consumption);
//  get states data by its index
var ctx = document.getElementById("plots").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'polarArea',
  data: {
    labels: [
      data[1].location, 
      data[2].location, 
      data[3].location, 
      data[4].location, 
      data[5].location, 
      data[6].location, 
      data[7].location],
    datasets: [
      {
        label: "Energy Consumption (PJ)",
        backgroundColor: [
        "#003f5c",
        "#386cb0",
        "#bc5090",
        "#ef5675",
        "#7fc97f",
        "#ff764a",
        "#ffa600"
        ],
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
  },
  options: {
    legend: {
      display: true,
      position: 'bottom',
  },
    title: {
      display: true,
      text: 'Average Energy Consumption by State (PJ)'
    },
    scale: {
      ticks: {
         display: true,
         maxTicksLimit: 2
        }}
  }
});
 }
 
});

// / Load the data as csv ( will be using json)
d3.csv("/Data/industry.csv", function(data) {
        for (var i = 0; i < data.length; i++) {
        // data.date = data[i].date;
        data.energy_consumption = data[i].energy_consumption;
        data.industry = data[i].industry;
        console.log(data.energy_consumption);
//  get states data by its index
var ctx = document.getElementById("plot2").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'polarArea',
  data: {
    labels: [
      data[1].industry, 
      data[2].industry, 
      data[3].industry, 
      data[4].industry, 
      data[5].industry, 
      data[6].industry, 
      data[7].industry],
    datasets: [
      {
        label: "Energy Consumption (PJ)",
        backgroundColor: [
        "#003f5c",
        "#386cb0",
        "#bc5090",
        "#ef5675",
        "#7fc97f",
        "#ff764a",
        "#ffa600"
        ],
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
  },
  options: {
    legend: {
      display: true,
      position: 'bottom',
  },
    title: {
      display: true,
      text: 'Average Energy Consumption by State (PJ)'
    },
    scale: {
      ticks: {
         display: true,
         maxTicksLimit: 2
        }}
  }
});
 }
 
});