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


<div class='text-center p-10'>
	<p class='text-xl text-center'>Welcome to the Sport Performance Assistant !</p>
</div>

<br />

<div class="flex ">
  <div class=" w-1/3 p-4">
	Calendar of last sessions
    
  </div>
  <div class="flex-initial w-2/3 p-4">
	Radar Chart of Global performance
  </div>
</div>

<br />
<br />
<br />
<br />
<br />


<h2 class='font-semibold'>Todo list important:</h2>
<p>layout workout</p>
<p> integrer layout performance valentin</p>
<p>Calendar of last sessions home page</p>
<p>Home page : qu'est ce que le site?</p>
<p>Verifier ordre date correspond a ordre json</p>
<p> Variation vert rouge pale doux</p>

<br/>

<h2 class='font-semibold'>Todolist moins important : </h2>
<p>Radar chart of sports</p>
<p>Options pour supprimer des données de la base en cas d'erreur</p>
<p>Login / authenthification https://www.nielsvandermolen.com/signup-form-html5-validation-svelte/</p>


<br/>


<h2 class='font-semibold'>Done: </h2>
<p>Work out performance et new session</p>
<p>Data WOrkout </p>
