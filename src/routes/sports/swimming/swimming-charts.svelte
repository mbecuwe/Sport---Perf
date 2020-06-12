<canvas id="myChart" width="2" height="1"></canvas>

<script>
import { onMount } from "svelte";
import Chart from "chart.js";
export let data; 
export function createChart(){
  var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            scales: {
                yAxes: 
                [{
        id: 'Distance',
        position: 'left',
        scaleLabel: {
          display: true,
          labelString: 'Distance (m)',
          beginAtZero: true,
      },
      }, {
        id: 'Sprints',
        position: 'right',
          scaleLabel: {
          display: true,
          labelString: 'Sprints',
          beginAtZero: true,
      },
        gridLines: {
                   display: false
               },
      }, {
        id: 'Speed',
        position: 'right',
          scaleLabel: {
          display: true,
          labelString: 'Speed (km/h)',
          beginAtZero: true,
      },
        gridLines: {
                   display: false
               },
      }]

            }
        }
    });
  }
onMount(createChart)
</script>
