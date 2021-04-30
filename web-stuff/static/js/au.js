var trace2 = {
    x: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
    y: [1462225, 1492456,1529212,1589129,1630206,1671501,1708151,1755478,1797041,1849880,1884969],
    name: 'GDP',
    marker: {color: 'rgb(55, 83, 109)'},
    type: 'bar'
  };
  
  var trace1 = {
    x: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
    // y: [5843.80,5823.30,5902.20,5887.80,5915.30,5891.40,5897.30,6040.80,6114.60,6159.10,6196.00],
    y: [21691653,22031750,22340024,22733465,23128129,23475686,23815995,24190907,24601860,24982688,25357553],
    name: 'Population',
    marker: {color: 'rgb(26, 118, 255)'},
    type: 'bar'
  };
 
  var data = [trace1, trace2];
  
  var layout = {
    title: 'Australia Population vs GDP',
    xaxis: {tickfont: {
        size: 14,
        color: 'rgb(107, 107, 107)'
      }},
    yaxis: {
      title: 'GDP (USD Billions)',
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
      x: 0,
      y: 1.0,
      bgcolor: 'rgba(255, 255, 255, 0)',
      bordercolor: 'rgba(255, 255, 255, 0)'
    },
    barmode: 'group',
    bargap: 0.15,
    bargroupgap: 0.1
  };
  
  Plotly.newPlot('plot', data, layout);