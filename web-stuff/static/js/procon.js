const api_url = "/api/producedconsumed"

async function getData(){
    const response = await fetch(api_url)
  const data = await response.json();
  //console.log(data)
 }
 var data = [{
  producefuelName: "Black coal(kt)",
  producePhysicalUnits: 357000,
  pair: "Black coal(kt)",
  consumefuelName: "Black coal(kt)",
  consumePhysicalUnits: 63450
},
{
  producefuelName: "Brown coal(kt)",
  producePhysicalUnits: 65377,
  pair: "Brown coal(kt)",
  consumefuelName: "Brown coal(kt)",
  consumePhysicalUnits: 64885
},
{
  producefuelName: "Natural gas(Mcm)",
  producePhysicalUnits: 62454,
  pair: "Natural gas(Mcm)",
  consumefuelName: "Natural gas(Mcm)",
  consumePhysicalUnits: 32124
},
{
  producefuelName: "Biofuels(PJ)",
  producePhysicalUnits: 18,
  pair: "Biofuels(PJ)",
  consumefuelName: "Biofuels(PJ)",
  consumePhysicalUnits: 20
},
{
  producefuelName: "Wood(kt)",
  producePhysicalUnits: 5885,
  pair: "Wood(kt)",
  consumefuelName: "Wood(kt)",
  consumePhysicalUnits: 5886
},
{
  producefuelName: "Bagasse(kt)",
  producePhysicalUnits: 10112,
  pair: "Bagasse(kt)",
  consumefuelName: "Bagasse(kt)",
  consumePhysicalUnits: 10112
},
{
  producefuelName: "Solar hotwater(PJ)",
  producePhysicalUnits: 10,
  pair: "Solar hotwater(PJ)",
  consumefuelName: "Solar hotwater(PJ)",
  consumePhysicalUnits: 2588
},
{
  producefuelName: "Crude oil and NGL(ML)",
  producePhysicalUnits: 258218,
  pair: "Crude oil and NGL-Petroleum products(ML)",
  consumefuelName: "Petroleum products(ML)",
  consumePhysicalUnits: 59769
},
{
  producefuelName:"Solar PV",
  producePhysicalUnits: 3065,
  pair: "Solar PV-Coke",
  consumefuelName: "Coke",
  consumePhysicalUnits: 2506
},
{
  producefuelName: "Ethane",
  producePhysicalUnits: 408,
  pair: "Ethane-Town gas",
  consumefuelName: "Town gas",
  consumePhysicalUnits: 52
},
{
  producefuelName: "Wind",
  producePhysicalUnits: 5782,
  pair: "Wind-Electricity",
  consumefuelName: "Electricity",
  consumePhysicalUnits: 244448
},
{
  producefuelName: "LPG(ML)",
  producePhysicalUnits: 3741,
  pair: "LPG-Petroleum products(ML)",
  consumefuelName: "Petroleum products(ML)",
  consumePhysicalUnits: 58597
},
];
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

getData();



