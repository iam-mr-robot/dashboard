new Chart(document.getElementById("mixed-chart"), {
    type: 'bar',
    data: {
      labels: ["00", "1", "2", "3", "4", "5", "6", "7", "8", "9","10","11","11","12","13","14","15","16","17","18","19","20","21","22","23"],
      datasets: [{
          label: "Estoque",
          type: "line",
          borderColor: "#FBB614",
          data: [900,1221,783,1500],
          fill: false
        }, {
          label: "Processado",
          type: "bar",
          backgroundColor: "#E44921",
          data: [0,700,547,478,734],
        }, {
          label: "Impresso",
          type: "bar",
          backgroundColor: "#3e95cd",
          data: [408,547,675,734],
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Population growth (millions): Europe & Africa'
      },
      legend: { display: true }
    }
});