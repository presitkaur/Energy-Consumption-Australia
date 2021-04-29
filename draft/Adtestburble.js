// d3.csv("hairData.csv").then(function(hairData, err) {
//   if (err) throw err;
<<<<<<< HEAD
var allGroup = ["AUS","VIC","NSW","QLD","WA","SA","TAS","NT"]

  //add options to the button
  d3.select("#selectButton")
   .selectAll('myOptions')
      .data(allGroup)
    .enter()
      .append('option')
    .text(function (d) { return d; })// text show in the menu
    .attr("value", function (d) { return d;})// corresponding value returned

=======
>>>>>>> c12143671c19222bb90227565b54eeba46e903a8

function bubbleChart() {
    var width = 940;
  var height = 500;

  // centralising the burbles
  var centre = {x:width/2, y:height/2};

  // strenth to appy to the position forces
  var forceStrenght = 0.03

  // set create nodes and chart functions

  let svg = null;
  let bubbles = null;
  let labels = null;
  let nodes = [];
  let circlesGroup = null

  // charge is dependent on size of the bubbles, so bigger towards the middle
  function charge(d) {
    return Math.pow(d.radius, 2.0) * .01
  }

  // create force simulation and add forces to it
  var simulation = d3 .forceSimulation()
    .force('charge', d3.forceManyBody().strength(charge))
    // .force('center', d3.forceCenter(centre.x, centre.y))
    .force('x', d3.forceX().strength(forceStrenght).x(centre.x))
    .force('y', d3.forceY().strength(forceStrenght).y(centre.y))
    .force('collision', d3.forceCollide().radius(d=> d.radius + 1));
  // prevent simulation from sarting automatically
  simulation.stop();
  
  //  Set up color scale
  // var fillColour = d3.scaleOrdinal()
  //   .domain(["Wood, woodwaste","LPG","Auto gasoline-leaded"," Auto gasoline-unleaded","Aviation gasoline ","Aviation turbine fuel"," Kerosene and Heating oil","Diesel","Fuel oil","Petroleum products nec "," Solvents b ","Lubricants and greases","Bitumen b","Natural gas","Town gas","Solar energy","Electricity","Liquid/Gas Biofuels"])
  //   .range(["#0074D9","#7FDBFF","#39CCCC","#3D9970","#AAAAAA","#D2B4DE","#28B463","#AF601A","#E6B0AA","#3498DB","#26C6DA","#FF1744","#8C9EFF ","#C6FF00","#651FFF","#FF80AB","#FFFF00","#FF6D00",]);
  // // function to read and store data in each node
<<<<<<< HEAD

  
  function createNodes(fuelData) {
    var maxSize = d3.max(fuelData, d => +d.AUS);
=======
  function createNodes(fuelData) {
    var maxSize = d3.max(fuelData, d => +d.y2018_19);
>>>>>>> c12143671c19222bb90227565b54eeba46e903a8

    // size burble based on area
    var radiusScale = d3.scaleSqrt()
      .domain([0,maxSize])
      .range([0,80])

    // use map to convert raw data into node data
    var myNodes = fuelData.map(d=> ({
      ...d,
<<<<<<< HEAD
      radius:radiusScale(+d.AUS),
      size: +d.y2018-19,
      x: Math.random() * 900,
      Y: Math.random() * 800
    
=======
      radius:radiusScale(+d.y2018_19),
      size: +d.y2018-19,
      x: Math.random() * 900,
      Y: Math.random() * 800

>>>>>>> c12143671c19222bb90227565b54eeba46e903a8

    }))
    return myNodes;
  }
<<<<<<< HEAD
  function update(selectedGroup) {
    //create new data with selection
    var dataFilter = data.map(funtion(d){return{value:d[selectedGroup]}})
  }
=======
  
>>>>>>> c12143671c19222bb90227565b54eeba46e903a8

    // Append svg to data

  var chart = function chart(selector,fuelData) {
      // convert data to circle element
      nodes = createNodes(fuelData);

      // create svg element inside selector
      svg = d3.select(selector)
        .append('svg')
        .attr('width', width)
        .attr('height', height)

      // Append an SVG group
      // var chartGroup = svg.append("g")
      //   .attr("transform", `translate(${margin.left}, ${margin.top})`);

      // bind nodes data to circle  element
      var elements = svg.selectAll('.bubble')
<<<<<<< HEAD
        .data()
=======
        .data(nodes,d => d.fuels_consumed)
>>>>>>> c12143671c19222bb90227565b54eeba46e903a8
        .enter()
        .append('g')  
      console.log(elements);

      bubbles = elements
        .append('circle')
        .classed('bubble',true)
        .attr('r', d => d.radius)
        .attr('fill', d=> d.colour)

        // var circlesGroup = chartGroup.selectAll("circle")
        // .data(nodes,d => d.fuels_consumed)
        // .enter()
        // .append('circle')
        // .classed('bubble',true)
        // .attr('r', d => d.radius)
        // .attr('fill', d=> d.colour)

        

   


  

      // set simulations node to our newly created nodes array,to run automaticaly once nodes are set
      simulation.nodes(nodes)
        .on('tick', ticked)
        .restart();

    }
// callback functions called every tick of the force simulation
  function ticked() {
    bubbles
      .attr('cx', d=> d.x)
      .attr('cy', d=> d.y)

    
  }

//   function updateToolTip(chart {

//     // var label;
  
//     // if (chosenXAxis === "hair_length") {
//     //   label = "Hair Length:";
//     // }
//     // else {
//     //   label = "# of Albums:";
//     // }
  
//     var toolTip = d3.tip()
//       .attr("class", "tooltip")
//       .offset([80, -60])
//       .html(function(d) {
//         return (`${d.fuels_consumed}<br> ${d.y2018_19}`);
//       });
  
//     chart.call(toolTip);
  
//     chart.on("mouseover", function(data) {
//       toolTip.show(data);
//     })
//       // onmouseout event
//       .on("mouseout", function(data) {
//         toolTip.hide(data);
//       });
//     }
// // chart = updateToolTip(chart)
// // return chart function from closure
 return chart;
}
<<<<<<< HEAD
 // Step 1: Append tooltip div      
//  var toolTip = d3.select(".bubble")
=======
//  // Step 1: Append tooltip div
//  var toolTip = d3.select("#bubble")
>>>>>>> c12143671c19222bb90227565b54eeba46e903a8
//  .append("div")
//  .classed("tooltip", true);

// // Step 2: Create "mouseover" event listener to display tooltip
<<<<<<< HEAD
// bubbles.on("mouseover", function(d) {
=======
// bubbleChart.on("mouseover", function(d) {
>>>>>>> c12143671c19222bb90227565b54eeba46e903a8
// toolTip.style("display", "block")
//    .html(
//      `<strong>${(d.fuels_consumed)}<strong><hr>${d.y2018_19}
//  pj`)
//    .style("left", d3.event.pageX + "px")
//    .style("top", d3.event.pageY + "px");
// })
// // Step 3: Create "mouseout" event listener to hide tooltip
// .on("mouseout", function() {
//  toolTip.style("display", "none");
// });
// new bubble chart instance
let myBubbleChart = bubbleChart();
function display(data) {
  myBubbleChart('#bubble', data);
}
<<<<<<< HEAD
// bubbles.on("mouseover", function(d) {
// toolTip.style("display", "block")
//    .html(
//      `<strong>${(d.fuels_consumed)}<strong><hr>${d.y2018_19}
//  pj`)
//    .style("left", d3.event.pageX + "px")
//    .style("top", d3.event.pageY + "px");
// })
// // Step 3: Create "mouseout" event listener to hide tooltip
// .on("mouseout", function() {
//  toolTip.style("display", "none");
// });
  

// load data
d3.csv('testfuel2.csv').then(display);


// bubbleChart.on("mouseover", function(d) {
// toolTip.style("display", "block")
//    .html(
//      `<strong>${(d.fuels_consumed)}<strong><hr>${d.y2018_19}
//  pj`)
//    .style("left", d3.event.pageX + "px")
//    .style("top", d3.event.pageY + "px");
// })
// // Step 3: Create "mouseout" event listener to hide tooltip
// .on("mouseout", function() {
//  toolTip.style("display", "none");
// });
=======
  

// load data
d3.csv('testfuel.csv').then(display);
>>>>>>> c12143671c19222bb90227565b54eeba46e903a8

// var chart = updateToolTip(chart)


