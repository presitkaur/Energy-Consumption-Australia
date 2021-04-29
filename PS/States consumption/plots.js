// Create an array of each country's numbers
var wa = Object.values(data.wa);
var vic = Object.values(data.vic);
var tas = Object.values(data.tas);
var sa = Object.values(data.sa);
var qld= Object.values(data.qld);
var nt = Object.values(data.nt);
var nsw = Object.values(data.nsw);


// Create an array of music provider labels
var labels = Object.keys(data.wa);

// Display the default plot
function init() {
  var data = [{
    values: wa,
    labels: labels,
    type: "pie"
  }];

  var layout = {
    height: 600,
    width: 800
  };

  Plotly.newPlot("pie", data, layout);
}

// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");
  // Initialize an empty array for the country's data
  var data = [];

  if (dataset == 'wa') {
      data = wa;
  }
  else if (dataset == 'vic') {
      data = vic;
  }
  else if (dataset == 'tas') {
      data = tas;
  }
  else if (dataset == 'sa') {
    data = sa;
}
  else if (dataset == 'qld') {
    data = qld;
}
  else if (dataset == 'nt') {
    data = nt;
}
  else if (dataset == 'nsw') {
    data = nsw;
}
  // Call function to update the chart
  updatePlotly(data);
}

// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("pie", "values", [newdata]);
}

init();
