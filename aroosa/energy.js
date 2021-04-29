var trace1 = {
    x: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
    y: [3996.50,3901.80,3859.60,3705.00,3628.60,3524.60,3452.50,3441.10,3402.60,3329.50,3287.00],
    name: 'Energy Intensity',
    // marker: {color: 'rgb(55, 83, 109)'},
    // type: 'line'
    mode: 'lines+markers',
//   name: 'linear',
  line: {shape: 'linear'},
  type: 'scatter'
  };
  
  var trace2 = {
    x: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
    // y: [5843.80,5823.30,5902.20,5887.80,5915.30,5891.40,5897.30,6040.80,6114.60,6159.10,6196.00],
    y: [5846,5823,5902,5888,5915,5891,5897,6041,6115,6159,6196],
    name: 'Energy Consumption',
    // 
    mode: 'lines+markers',
//   name: 'spline',
//   text: [''],
  line: {shape: 'spline'},
  type: 'scatter'
  };
  var trace3 = {
    x: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
    // y: [5843.80,5823.30,5902.20,5887.80,5915.30,5891.40,5897.30,6040.80,6114.60,6159.10,6196.00],
    // y: [250.20,256.30,259.10,269.90,275.60,283.70,289.60,290.60,293.90,300.30,304.20],
    y: [2502,2563,2591,2699,2756,2837,2896,2906,2939,3003,3042],
    name: 'Energy Productivity',
    line: {shape: 'vhv'},
  type: 'scatter'
  };
  var data = [trace1, trace2, trace3];
  
  var layout = {
    title: 'Australian Energy update for 2009-2019',
    xaxis: {tickfont: {
        size: 14,
        color: 'rgb(107, 107, 107)'
      }},
    yaxis: {
      title: 'Energy (PJ)',
      titlefont: {
        size: 16,
        color: 'rgb(107, 107, 107)'
      },
      tickfont: {
        size: 14,
        color: 'rgb(107, 107, 107)'
      }
    },
    legend: {
        legend: {
            y: 0.5,
            traceorder: 'reversed',
            font: {size: 16},
            yref: 'paper'
          }}
  };
  
  Plotly.newPlot('plot', data, layout);