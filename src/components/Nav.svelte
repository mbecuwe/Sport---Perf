<script>
	export let segment;
</script>

<style>

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	 ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block; 
	} 

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: orange;
		display: block;
		bottom: -1px;
	}
</style>

<nav>
<div class="flex justify-between items-center py-0 bg-blue-800">
  <div class="flex-shrink-0 ml-10 cursor-pointer">
    <i class="fas fa-drafting-compass fa-2x text-orange-500"></i>
    <span class="ml-1 text-3xl text-blue-200 font-semibold">SportAssistant</span>
  </div>
  <i class="fas fa-bars fa-2x visible md:invisible mr-10 md:mr-0 text-blue-200 cursor-pointer"></i>
  <ul class="hidden md:flex overflow-x-hidden mr-10 font-semibold">
    <li class="mr-6 p-1">
      <a class="text-white hover:text-blue-300" aria-current='{segment === undefined ? "page" : undefined}' href=".">Home</a>
    </li>
    <li class="mr-6 p-1">
      <a class="text-white hover:text-blue-300" aria-current='{segment === "new_session" ? "page" : undefined}' href="new_session">New Session</a>
    </li>
    <li class="mr-6 p-1">
      <a class="text-white hover:text-blue-300" aria-current='{segment === 'performance' ? "page" : undefined}' href="performance">Performance</a>
    </li>
    <li class="mr-6 p-1">
      <a class="text-white hover:text-blue-300" aria-current='{segment === "about" ? "page" : undefined}' href="about">About</a>
    </li>
    <li class="mr-6 p-1">
      <a class="text-white hover:text-blue-300" aria-current='{segment === "tutorial" ? "page" : undefined}' href="tutorial">Tutorial</a>
    </li>
  </ul>
</div>

</nav>
