window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title:{
            text: "Energy Consumed By Industries",
            horizontalAlign: "left"
        },
        data: [{
            type: "doughnut",
            startAngle: 60,
            //innerRadius: 60,
            indexLabelFontSize: 17,
            indexLabel: "{label} - (PJ)",
            toolTipContent: "<b>{label}:</b> {y} (PJ)",
            dataPoints: [
                { y: 100, label: "Agriculture" },
                { y: 450, label: "Mining" },
                { y: 1000, label: "Manufacturing" },
                { y: 25, label: "Construction"},
                { y: 1500, label: "Transport"},
                { y: 300, label: "Commercial"},
                { y: 450, label: "Residential"}
            ]
        }]
    });
    chart.render();
    
    }