new Chart(document.getElementById("mixed-chart"), {
    type: 'bar',
    data: {
      labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","10","11","11","12","13","14","15","16","17","18","19","20","21","22","23"],
      datasets: [{
          label: "Estoque",
          type: "line",
          borderColor: "#2EC4B6",
          data: [900,1221,783,600,580,570,540,590,400,600],
          fill: false
        }, {
          label: "Processado",
          type: "bar",
          backgroundColor: "#E44921",
          data: [0,700,0,478,734,0,700,0,478,734],
        }, {
          label: "Impresso",
          type: "bar",
          backgroundColor: "#011627",
          data: [200,408,547,675,734,200,408,547,675,734],
        }
      ]
    },
    options: {
      title: {
        display: false,
        text: 'estoque - posição 24hs'
      },
      legend: { display: true }
    }
});