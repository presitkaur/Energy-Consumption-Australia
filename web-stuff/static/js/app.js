//create a function to get data from route (e.g popGB)
 const api_url = '/api/popGb'
 async function getData(){
   const response = await fetch(api_url)
 const data = await response.json();
 console.log(data)
 }
 getData();


