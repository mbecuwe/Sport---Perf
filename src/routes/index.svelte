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
<p>Mettre cette image en background avec opacite 50</p>
<img src="fitness2.jpg">
<div style="background-image: url('fitness2.jpg');"></div>

<div class="bg-fixed" style="background-image: url('./static/fitness2.jpg')"></div>

<p class='text-xl'>Logged in as Martin!</p>

<p>Weight</p>

<p>Radar chart of sports</p>

<p>Calendar of last sessions</p>


<p>Options pour supprimer des données de la base en cas d'erreur</p>

<p>Login / authenthification https://www.nielsvandermolen.com/signup-form-html5-validation-svelte/</p>