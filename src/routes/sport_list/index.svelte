<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`sport_list.json`).then(r => r.json()).then(sports => {
			return { sports };
		});
	}
</script>

<script>
	export let sports;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Sports</title>
</svelte:head>

<h1>Recent sports</h1>

<ul>
	{#each sports as sport}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel='prefetch' href='sport_list/{sport.slug}'>{sport.title}</a></li>
	{/each}
</ul>

<a href='chart'>yep</a>