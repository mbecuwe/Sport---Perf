<canvas id="myChart14" width="2" height="1"></canvas>

<script>
import { onMount } from "svelte";
import Chart from "chart.js";
export let data_abdominal_radar; 
export function createChart2(){
  var ctx = document.getElementById('myChart14');
    var myChart = new Chart(ctx, {
        type: 'radar',
        data: data_abdominal_radar,

    });
  }
onMount(createChart2)
</script>
