var canvas = document.getElementById('chart');
console.log(canvas)

var ctx = canvas.getContext('2d')

chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Verrazano-Narrows", "Golden Gate", "Mackinac", "George Washington", "Tacoma Narrows"],
    datasets: [{
      label: 'Bridge Spans',
      data: [1298.4, 1280.2, 1158.0, 1067.0, 853.44],
      backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple']
    }]
  }, options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
})
