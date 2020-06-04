<canvas id="myChart13" width="2" height="1"></canvas>

<script>
import { onMount } from "svelte";
import Chart from "chart.js";
export let data_others_radar; 
export function createChart2(){
  var ctx = document.getElementById('myChart13');
    var myChart = new Chart(ctx, {
        type: 'radar',
        data: data_others_radar,

    });
  }
onMount(createChart2)
</script>
