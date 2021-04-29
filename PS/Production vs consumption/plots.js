var trace1 = {
    x: data.map(row => row.pair),
    y: data.map(row => row.producePhysicalUnits),
    text: data.map(row => row.producefuelName),
    name: "Produced",
    type: "bar"
  };
  
  // Trace 2 for the consume Data
  var trace2 = {
    x: data.map(row => row.pair),
    y: data.map(row => row.consumePhysicalUnits),
    text: data.map(row => row.consumefuelName),
    name: "Consumed",
    type: "bar"
  };
  
  // Combining both traces
  var data = [trace1, trace2];
  
  // Apply the group barmode to the layout
  var layout = {
    title: "Energy Produced vs Consumed(Avg) in Australia (2001-2019)",
    barmode: "group"
  };
  
  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("plot", data, layout);