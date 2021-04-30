d3.csv("resources/population_gb.csv", function(data) {
  for (var i = 0; i < data.length; i++) {
    console.log(data)
// var dotDiv = document.getElementById("dot-chart");
 
// var traceA = {
//   type: "scatter",
//   mode: "markers",
//   x: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
//   // y: [5843.80,5823.30,5902.20,5887.80,5915.30,5891.40,5897.30,6040.80,6114.60,6159.10,6196.00],
//   y: [2502,2563,2591,2699,2756,2837,2896,2906,2939,3003,3042],
//   name: 'Energy Productivity',
//   marker: {
//     color: 'rgba(156, 165, 196, 0.5)',
//     line: {
//       color: 'rgba(156, 165, 196, 1)',
//       width: 1,
//     },
//     symbol: 'circle',
//     size: 20
//   },
//   hoverlabel: {
//     bgcolor: 'black',
//   }
// };
 
// var traceB = {
//   type: "scatter",
//   mode: "markers",
//   x: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
//     y: [3996.50,3901.80,3859.60,3705.00,3628.60,3524.60,3452.50,3441.10,3402.60,3329.50,3287.00],
//   name: 'Energy Intensity',
//   marker: {
//     color: 'rgba(165, 196, 50, 0.5)',
//     line: {
//       color: 'rgba(165, 196, 50, 1)',
//       width: 1,
//     },
//     symbol: 'circle',
//     size: 20
//   },
//   hoverlabel: {
//     bgcolor: 'black',
//   }
// };
 
// var data = [traceA, traceB];
 
// var layout = {
//   title: 'Australian energy Productivity and energy intensity',
//   xaxis: {
//     showgrid: false,
//     showline: true,
//     linecolor: 'rgb(200, 0, 0)',
//     ticks: 'outside',
//     tickcolor: 'rgb(200, 0, 0)',
//     tickwidth: 4
//   },
//   legend: {
//     bgcolor: 'white',
//     borderwidth: 1,
//     bordercolor: 'black',
//     orientation: 'h',
//     xanchor: 'center',
//     x: 0.5,
//     font: {
//       size: 12,
//     }
//   },
//   paper_bgcolor: 'rgb(255, 230, 255)',
//   plot_bgcolor: 'rgb(255, 230, 255)'
// };
 
// Plotly.plot(plot, data, layout);

}});