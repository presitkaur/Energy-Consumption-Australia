
// /api/pop data
const api_url = '/api/pop'

async function getData(){
  const response = await fetch(api_url)
const data = await response.json();
console.log(data)

for (var i = 0; i < data.length; i++) {
  // Converting a string to a date
  console.log(data)
  
}
};
getData();