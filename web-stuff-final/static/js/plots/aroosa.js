//api/pop data
const api_url = '/api/populationAus'
async function getData(){
  const response = await fetch(api_url)
const popData = await response.json();
// console.log(popData)
for (i in popData ){
  const population = popData.map(Element => Element.Population);
  // console.log(population);
  const GDP = popData.map(Element => Element.GDP);
  // console.log(GDP);
  const energy_consumption = popData.map(Element => Element.energy_consumption);
  // console.log(energy_consumption);
  const energy_productivity = popData.map(Element => Element.energy_productivity);
  // console.log(energy_productivity);
  const energy_intensity = popData.map(Element => Element.energy_intensity);
  // console.log(energy_intensity);
  var trace1 = {
    x: [energy_consumption[i]],
    y: [population[i]],
    name: 'Population',
    type: 'bar'
  };
  var trace2 = {
    x: [energy_consumption[i]],
    y: [ GDP[i]],
    name: 'Intensity',
    type: 'bar'
  };
  var trace3 = {
    x: [energy_consumption[i]],
    y: [energy_productivity[i]],
    name: 'Productivity',
    type: 'bar'
  };
  var trace4 = {
    x: [energy_consumption[i]],
    y: [energy_intensity[i]],
    name: 'Intensity',
    type: 'bar'
  };
  var population_energy = [trace1, trace2, trace3, trace4];
  var layout = {barmode: 'group'};
  Plotly.newPlot('plot', population_energy, layout);
}}
getData();