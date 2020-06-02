<script>
	import FrappeChart from './frappe-charts.svelte'
	import ChartJS from './chart.svelte'
	import {addCustomSport, test} from './sport.js'
</script>

<style>


	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}



	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Sport App - LogIn</title>
</svelte:head>

<p class='text-xl'>Logged in as Martin!</p>

<p>Weight</p>

<p>Radar chart of sports</p>

<p>Calendar of last sessions</p>