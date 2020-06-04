<canvas id="myChart1" width="2" height="1"></canvas>

<script>
import { onMount } from "svelte";
import Chart from "chart.js";
export let data_leg_radar; 
export function createChart2(){
  var ctx = document.getElementById('myChart1');
    var myChart = new Chart(ctx, {
        type: 'radar',
        data: data_leg_radar,

    });
  }
onMount(createChart2)
</script>
