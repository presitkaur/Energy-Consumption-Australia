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
        //  get states by index
// var ctx = document.getElementById("plots").getContext('2d');
// var myChart = new Chart(ctx, {
//   type: 'polarArea',
  
//   data: {
//     labels: [data[1].location, 
//       data[2].location, 
//       data[3].location, 
//       data[4].location, 
//       data[5].location, 
//       data[6].location, 
//       data[7].location],

//     datasets: [{
//       backgroundColor: [
//         "#2ecc71",
//         "#3498db",
//         "#95a5a6",
//         "#9b59b6",
//         "#f1c40f",
//         "#e74c3c",
//         "#34495e"
//       ],
//       data: [
//         Math.round(data[1].energy_consumption), 
//         Math.round(data[2].energy_consumption),
//         Math.round(data[3].energy_consumption), 
//         Math.round(data[4].energy_consumption), 
//         Math.round(data[5].energy_consumption), 
//         Math.round(data[6].energy_consumption),
//         Math.round(data[7].energy_consumption)]
//     }],
    
//   }
// })


new Chart(document.getElementById("polar-chart"), {
  type: 'polarArea',
  data: {
    labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [2478,5267,734,784,433]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050'
    }
  }
});

 }
 
});