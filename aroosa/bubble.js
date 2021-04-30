d3.csv("./static/resources/population_gb.csv", function(data) {
  for (var i = 0; i < data.length; i++) {
    console.log(data[i])

// var trace1 = {
//     x: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
//     y: [3996.50,3901.80,3859.60,3705.00,3628.60,3524.60,3452.50,3441.10,3402.60,3329.50,3287.00],
//     text: ['Energy Productivity', '<br>Energy Productivity', '<br>Energy Productivity', '<br>Energy Productivity','<br>Energy Productivity', '<br>Energy Productivity', '<br>Energy Productivity'],
//     // text:['A<br>Energy Productivity', 'B<br>size: 60', 'C<br>size: 80', 'D<br>size: 100'],
//     mode: 'markers',
//     // name :'Energy Productivity'
//     marker: {
//       color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)','rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 
//       'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)'],
//       size: [40, 50, 60, 70,80,90, 100,40,60,60, 100]
//       ,
//     }
//   };
//   var trace2 = {
//     x: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
//     // y: [5843.80,5823.30,5902.20,5887.80,5915.30,5891.40,5897.30,6040.80,6114.60,6159.10,6196.00],
//     y: [250.20,256.30,259.10,269.90,275.60,283.70,289.60,290.60,293.90,300.30,304.20],
//     text: ['Energy Intensity', 'Energy Intensity', 'Energy Intensity','Energy Intensity', 'Energy Intensity','Energy Intensity', 'Energy Intensity','Energy Intensity',],
//     mode: 'markers',
//     marker: {
//       color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)','rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 
//       'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)'],
//       size: [40, 50,50, 60, 70,80,80,60,60,80,100]
//     }
//   };
  
//   var data = [trace1, trace2];
  
//   var layout = {
//     title: 'Australian energy Productivity and energy intensity',
//     xtitle: "Years",
//     ytitle: "Energy",
//     showlegend: false,
//     height: 600,
//     width: 600
//   };
  
//   Plotly.newPlot('plot', data, layout);

}});