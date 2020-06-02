
<script context='module'>
	import Box from './Box.svelte';

</script>





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
</div>
