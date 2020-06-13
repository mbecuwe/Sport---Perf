<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 72em;
		/* background-color: #ebf8ff; */

		background: linear-gradient(45deg , #c5e1f1 ,#FFFFFF  );
		
		/* padding: 2em; */
		padding: 0;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>
 <div style="background-image: url('background4.jpg');    background-size:     cover;             
    background-repeat:   no-repeat;
    background-position: center center;  "> 

<main>
	<slot></slot>
</main>

</div>