
<script>
	import Box from './Box.svelte';
</script>



<div class="flex content-start flex-wrap h-48">
  <div class="w-1/2 p-2">
    <div class="text-center  p-2">
		<Box>
			<a href='sports/cycling/cycling'>
			Cycling
			<img src="cycling.jpg" alt="cycling">
			</a>
		</Box>
	</div>
  </div>

  <div class="w-1/2 p-2">
    <div class=" text-center p-2">
		<Box>
			<a href='sports/running/running'>
			Running
			<img src="running.jpg" alt="running">
			</a>
		</Box>
	</div>
  </div>

  <div class="w-1/2 p-2">
    <div class=" text-center p-2">
		<Box>
		<a href='sports/workout/workout'>
		<p>Work-out</p>
		<img src="workout.jpg" alt="workout">
		</a>
		</Box>
	</div>
  </div>
  
  <div class="w-1/2 p-2">
    <div class=" text-center p-2">
		<Box>
		<a href='sports/swimming/swimming'>
		<p>Swimming</p>
		<img src="swimming.jpg" alt="swimming">
		</a>
		</Box>
	</div>
  </div>
</div>
