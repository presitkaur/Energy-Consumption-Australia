const api_url = '/api/popGb'

async function getData(){
  const response = await fetch(api_url)
const data = await response.json();
console.log(data)

for (var i = 0; i < data.length; i++) {
  data.date = data[0].date;
  data.energy_consumption = data[0].energy_consumption;
  data.location = data[0].location;
  console.log(data.energy_consumption);
}}
getData();