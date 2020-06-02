    
<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`sports/cycling.json`).then(r => r.json()).then(data_raw => {
			return { data_raw };
		});
	}	
    
    export let data_raw
	import Box from './Box.svelte';

</script>



<div class='text-center p-10'>
<h1>Click to sport to enter new session</h1>

</div>




<div class="flex content-start flex-wrap h-48">
  <div class="w-1/2 p-2">
    <div class="text-center  p-2">
		<Box>
			<a href='new_sessions/new_cycling'>
			<p class=' font-bold pb-2'>Cycling</p>
			<img src="cycling.jpg" alt="cycling">
			</a>
		</Box>
	</div>
  </div>

  <div class="w-1/2 p-2">
    <div class=" text-center p-2">
		<Box>
			<a href='new_sessions/new_running'>
			<p class=' font-bold pb-2'>Running</p>
			<img src="running.jpg" alt="running">
			</a>
		</Box>
	</div>
  </div>

  <div class="w-1/2 p-2">
    <div class=" text-center p-2">
		<Box>
		<a href='new_sessions/new_workout'>
		<p class=' font-bold pb-2'>Work-out</p>
		<img src="workout.jpg" alt="workout">
		</a>
		</Box>
	</div>
  </div>
  
  <div class="w-1/2 p-2">
    <div class=" text-center p-2">
		<Box>
		<a href='new_sessions/new_swimming'>
		<p class=' font-bold pb-2'>Swimming</p>
		<img src="swimming.jpg" alt="swimming">
		</a>
		</Box>
	</div>
  </div>
</div>




<!-- Besoin de la liste des sports possibles -->
<!-- Puis pour chaque sport besoin de la liste des métriques à rentrer -->
    

<!-- 
    
    <body class="bg-blue-100 w-screen h-screen">
        <div class="mx-5 my-5">
            <div class="md:flex justify-center">
                <h1 class="font-bold text-3xl text-blue-800">New Session</h1>
            </div>
            <div class="md:flex mt-12 w-full justify-around"> 
                <div class="pb-6"> 
                    <p class="pb-2">Date</p>
                    <input type="date" id="date" name="date" class="shadow hover:shadow-md">
                </div>
                <div class="pb-6">
                    <p class="pb-2">Sports</p>
                    <input type="text" list="sports" id="sport" name="sport" class="shadow hover:shadow-md" value={name} on:change="{() => answer = ''}">
                    <datalist id="sports">
                        <option value="Fitness"></option>
                        <option value="Jogging"></option>
                        <option value="Swimming"></option>
                        <option value="Racing Bike"></option>
                    </datalist>
                </div>
                <div class="pb-6">
                    <p class="pb-2">Exercice</p>
                    <input type="text" list="exercices" id="exercice" name="exercice" class="shadow hover:shadow-md">
                    <datalist id="exercices">
                        <option value="Biceps"></option>
                        <option value="Chest"></option>
                        <option value="Core"></option>
                        <option value="Quads"></option>
                        <option value="Shoulders"></option>
                        <option value="Back"></option>
                        <option value="Triceps"></option>
                        <option value="Glutes"></option>
                    </datalist>
                </div>
                <div class="pb-6">
                    <p class="pb-2">Metrics</p>
                    <input type="text" list="metrics" id="metrics" name="metrics" class="shadow hover:shadow-md">
                </div>
            </div>
        </div>

    </body> 


 -->
