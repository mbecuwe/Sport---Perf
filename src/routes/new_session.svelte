
<script context='module'>
	import Box from './Box.svelte';

</script>



<body class=''>

<div class=''>
	<div class="mb-6 shadow ">
		<img src="workout_3.jpg" alt="new_session" class="antialiased bg-gray-600 object-cover h-48 w-full shadow rounded-md ">
	</div>

	<div class="p-8 pb-16">
	
	
	
    <div class="flex justify-center mb-8">
        <h1 class="text-4xl text-blue-700 font-semibold tracking-widest">Add a new Session</h1>
    </div>

	<div class="md:flex justify-center mb-8">
		<div class="text-center mx-4 md:w-1/2">
			<p class='font-semibold tracking-wider text-xl text-blue-700 pb-6'>Cycling</p>
			<div class="hover:shadow-2xl hover:border-blue-800">
				<a href='new_sessions/cycling/new_cycling'>
				<img src="bycicle21.jpg" alt="cycling"  class="rounded-lg">
				</a>
			</div>
		</div>
		<div class=" text-center mx-4  md:w-1/2 ">
			<p class='font-semibold tracking-wider text-xl text-blue-700 pb-6'>Running</p>
			<div class="hover:shadow-2xl hover:border-blue-800">
				<a href='new_sessions/running/new_running'>
				<img src="running1.jpg" alt="running"  class="rounded-lg">
				</a>
			</div> 
		</div>
	</div>
	<div class="md:flex justify-center">
		<div class=" text-center mx-4 md:w-1/2">
			<p class='font-semibold tracking-wider text-xl text-blue-700 pb-6'>Work-out</p>
			<div class="hover:shadow-2xl hover:border-blue-800">
				<a href='new_sessions/workout/new_workout'>
				<img src="workout3.jpg" alt="workout" class="rounded-lg">
				</a>
			</div>
		</div>
		<div class=" text-center mx-4  md:w-1/2 ">
			<p class='font-semibold tracking-wider text-xl text-blue-700 pb-6'>Swimming</p>
			<div class="hover:shadow-2xl hover:border-blue-800">
				<a href='new_sessions/swimming/new_swimming'>
				<img src="swimming2.jpg" alt="swimming" class="rounded-lg">
				</a>
			</div>
		</div>
	</div>
	</div>
</div>


</body>

<!-- <script context='module'>
	import Box from './Box.svelte';

</script>

<div class='text-center p-10'>
	<h1>Click on sports to see your performance !</h1>
</div>



<div class="flex content-start flex-wrap h-48">
  <div class="w-1/2 p-2">
    <div class="text-center  p-2">
		<Box>
			<a href='sports/cycling/cycling'>
			<p class=' font-bold pb-2'>Cycling</p>
			<img src="cycling.jpg" alt="cycling">
			</a>
		</Box>
	</div>
  </div>

  <div class="w-1/2 p-2">
    <div class=" text-center p-2">
		<Box>
			<a href='sports/running/running'>
			<p class=' font-bold pb-2'>Running</p>
			<img src="running.jpg" alt="running">
			</a>
		</Box>
	</div>
  </div>

  <div class="w-1/2 p-2">
    <div class=" text-center p-2">
		<Box>
		<a href='sports/workout/workout'>
		<p class=' font-bold pb-2'>Work-out</p>
		<img src="workout.jpg" alt="workout">
		</a>
		</Box>
	</div>
  </div>
  
  <div class="w-1/2 p-2">
    <div class=" text-center p-2">
		<Box>
		<a href='sports/swimming/swimming'>
		<p class=' font-bold pb-2'>Swimming</p>
		<img src="swimming.jpg" alt="swimming">
		</a>
		</Box>
	</div>
  </div>
</div> -->



<!--     
<script context="module">
	// export function preload({ params, query }) {
	// 	return this.fetch(`sports/cycling.json`).then(r => r.json()).then(data_raw => {
	// 		return { data_raw };
	// 	});
	// }	
    
  //   export let data_raw
	import Box from './Box.svelte';

</script>



<div class='text-center p-10'>
<h1>Click sports to add new sessions</h1>

</div>




<div class="flex content-start flex-wrap h-48">
  <div class="w-1/2 p-2">
    <div class="text-center  p-2">
		<Box>
			<a href='new_sessions/cycling/new_cycling'>
			<p class=' font-bold pb-2'>Cycling</p>
			<img src="cycling.jpg" alt="cycling">
			</a>
		</Box>
	</div>
  </div>

  <div class="w-1/2 p-2">
    <div class=" text-center p-2">
		<Box>
			<a href='new_sessions/running/new_running'>
			<p class=' font-bold pb-2'>Running</p>
			<img src="running.jpg" alt="running">
			</a>
		</Box>
	</div>
  </div>

  <div class="w-1/2 p-2">
    <div class=" text-center p-2">
		<Box>
		<a href='new_sessions/workout/new_workout'>
		<p class=' font-bold pb-2'>Work-out</p>
		<img src="workout.jpg" alt="workout">
		</a>
		</Box>
	</div>
  </div>
  
  <div class="w-1/2 p-2">
    <div class=" text-center p-2">
		<Box>
		<a href='new_sessions/swimming/new_swimming'>
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
