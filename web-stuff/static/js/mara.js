// https://github.com/chartjs/Chart.js
// https://www.chartjs.org/docs/latest/axes/styling.html
function buildPlot() {
    /* data route */
    const url = "/api/popGb";
    d3.json(url).then(function(response) {
  
      console.log(response);
  
      const data = response;
  
  
         
    });
  }
  
  buildPlot();