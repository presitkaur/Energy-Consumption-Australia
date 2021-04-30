
// /api/pop data
const api_url = '/api/pop'

async function getData(){
  const response = await fetch(api_url)
const data = await response.json();
console.log(data)

for (var i = 0; i < data.length; i++) {
  // data.GDP = data[i].GDP (e.g)
  
}
};
getData();