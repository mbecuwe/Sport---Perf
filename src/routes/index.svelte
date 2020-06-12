<script context="module">

	export function preload({ params, query }) {
		return this.fetch(`home.json`).then(r => r.json()).then(data_raw => {
			return { data_raw };
		});
	}	

</script>

<script>
export let data_raw
        // Sort list of Json by dates (closest dates to last positions)
    function custom_sort(a, b) {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
	data_raw = data_raw.sort(custom_sort)
	
let list_date = []
let list_sport = []
data_raw.forEach(x=>{
	list_date.push(x.date)
	list_sport.push(x.sport)
})

</script>

<style>

</style>

<svelte:head>
	<title>Sport App</title>
</svelte:head>

<div class="">


<div class="mb-6 shadow ">
    <img src="index.jpg" alt="work harder sign" class="antialiased bg-gray-600 object-cover h-48 w-full shadow rounded-md">
</div>
	
	
	
	<div class='p-8'>
	
    <div class="flex justify-center mb-8">
        <h1 class="text-4xl text-center text-blue-700 font-semibold tracking-widest">Welcome to the Sport Performance Assistant !</h1>
    </div>
	

 
<br />

<div class="flex ">
  <div class=" w-2/3 p-4">
	<div class="divide-y divide-gray-400 ">
	
	<div class=''>
	<h1 class="text-blue-800">
        Why using the Sport Assistant App? 
    </h1>
	
	<p class='p-4'>It can be hard to measure progress in sports performance. <br>
	We think this evolution towards better performance is what truly motivate us to give our best in sports sessions.<br>
	This application is here to help you track your progress from one sport session to another.
	</p>
	</div>

<div class='pt-8'>
	<h1 class="text-blue-800">
        How to use the App? 
    </h1>
	<p class='p-4'>Once you finished your sport session, record your performance in the 'New Session' tab. <br>
	For now, you can save sessions for running, cycling, swimming and working out. <br>
	Then, go to the 'Performance' tab and observe the progress you made.
	</p>
</div>

<div class='pt-8'>
	<h1 class="text-blue-800">
        What's next? 
    </h1>
  <div class='p-4'>
	<p > This is a first version of our website and we intend to improve it further to allow for more features and a better experience.<br>
	We are thinking of implementing options to:</p>
	<lu>
	<li>Add more sports
	</li>
	<li>Delete sessions that were wrongly entered
	</li>
	<li>Add an authentification system
	</li>
	<li>Improve and add new visualizations.
	</li>
	</lu>
	<p>We hope you enjoy our App and that it helps you staying motivated!<br>
	Feel free to contact us to give your thoughts about features you would like to see in the App.</p> 
	</div>
</div></div>
	


  </div>

  <div class="flex-initial w-1/3 p-4">
	  
	<h1 class="text-blue-800">
        Calendar of your last sport sessions : 
    </h1><p class='flex justify-center'>
	<lu>
	{#each [1,2,3,4,5] as i}
	<li class='p-2'>{list_date[list_date.length-i]} / {list_sport[list_sport.length-i]}</li>

	{/each}
	</lu></p>
</div>


  </div>

</div>
	

</div>
