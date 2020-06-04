<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`new_sessions/cycling.json`).then(r => r.json()).then(options => {
			return { options };
		});
	}	
</script>

<script>
    let sport = 'cycling'
    let date = null, meters = null, minutes = null, elevation = null;    
    let error_boolean = false;


   async function handleSubmit(event) {
       const post = {sport, date, meters, minutes, elevation}
        await fetch(`new_sessions/cycling.json`, {
            method: "POST", 
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify(post),
        });
        document.getElementById("add_to_me").innerHTML +=  
              "<div class='bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md' role='alert'><div class='flex'><div class='py-1'><svg class='fill-current h-6 w-6 text-teal-500 mr-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path d='M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z'/></svg></div><div><p class='font-bold'>Session was successfully added</p></div></div></div><br/>"; 
        if (response.ok){
            const result = await response.json();
            console.log("result", result)
        }
    }

   function validateMessageEmail(event) {
       let textbox = event.target;
       error_boolean = false;
       if (textbox.value === '') {
            textbox.setCustomValidity('Number required');
        } else if (textbox.validity.typeMismatch){
            error_boolean = true;
            textbox.setCustomValidity('please enter a valid input');
        } else {
           textbox.setCustomValidity('');
        }
        return true;
    }
</script>





<div class="flex ">
  <div class=" w-1/3 p-4">

    <!-- <div class="text-center p-2 text-2xl font-semibold"> -->
    <img class='w-full' src="cycling_drawing.jpeg" alt="cycling"  > 
        <!-- </div> -->

  </div>
  <div class="flex-initial w-2/3 p-2">
  <div class="block uppercase text-center p-2 text-2xl font-semibold">
    Cycling New Session
    </div>
    <div class=" p-2">
        <form
            on:submit|preventDefault="{handleSubmit}"
            on:invalid={validateMessageEmail}
            on:changed={validateMessageEmail}
            on:input={validateMessageEmail}
        >

            <label for="date" class=" block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
            Date
            </label>
        <input bind:value={date} placeholder='date' required type="date" id="date" class="text-center appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"/>
            <br />

        <label for="meters" class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
        Distance (m)</label>
        <input bind:value={meters} placeholder='meters' required type="number" id="meters" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"/>
            <br />


        <label for="minutes" class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
        Minutes</label>
        <input bind:value={minutes} placeholder='minutes' required type="number" id="minutes" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"/>
            <br />

        <label for="elevation" class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
        Elevation (m)</label>
        <input bind:value={elevation} placeholder='elevation' required type="number" id="elevation" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"/>
            <br />


        <div class='flex justify-end my-8'>
        <div class='flex'>
        <button type="submit" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Add Session</button>
        </div>        
        </div>



        </form>
            <br />



        <div id="add_to_me"> 
        </div> 
    </div> 
  </div>
</div>

