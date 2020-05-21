<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title >New session</title>
</svelte:head>

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
                    <input type="text" list="sports" id="sport" name="sport" class="shadow hover:shadow-md">
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