<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`new_sessions/workout.json`).then(r => r.json()).then(options => {
			return { options };
		});
	}	
</script>

<script>
    let sport = 'workout'

    let date = null, meters = 0, minutes = 0, elevation = 0;    
    let error_boolean = false;

    let squats_series = 0;
    let stair_climbs_series = 0;
    let bench_climbs_series = 0;
    let leg_press_series = 0;
    let pushups_series = 0;
    let pushups_lateral_series = 0;
    let pushups_jumping_series = 0;
    let pushups_closing_series = 0;
    let pushups_raised_series = 0;
    let abdominal_series = 0;
    let abdominal_lateral_series = 0;
    let abdominal_core_series = 0;
    let bench_series = 0;
    let biceps_weight_series = 0;
    let pullups_series = 0;

    let squats_number = 0;
    let stair_climbs_number = 0;
    let bench_climbs_number = 0;
    let leg_press_number = 0;
    let pushups_number = 0;
    let pushups_lateral_number = 0;
    let pushups_jumping_number = 0;
    let pushups_closing_number = 0;
    let pushups_raised_number = 0;
    let abdominal_number = 0;
    let abdominal_lateral_number = 0;
    let abdominal_core_number = 0;
    let bench_number = 0;
    let biceps_weight_number = 0;
    let pullups_number = 0;
    
    let null_var = null
        const workout_exercise = [
    {'name': 'Squats', 'features' : ['Series', 'Number'], 'group' : 'Legs'},
    {'name': 'Stair Climbs', 'features' : ['Series', 'Number'], 'group' : 'Legs'},
    {'name': 'Bench Climbs', 'features' : ['Series', 'Number'], 'group' : 'Legs'},
    {'name': 'Leg Press', 'features' : ['Series', 'Number'], 'group' : 'Legs'},
    
    {'name': 'Push-Ups','features' : ['Series', 'Number'],'group' : 'Push-Ups'},
    {'name': 'Lateral Push-Ups','features' : ['Series', 'Number'], 'group' : 'Push-Ups'},
    {'name': 'Jumping Push-Ups','features' : ['Series', 'Number'], 'group' : 'Push-Ups'},
    {'name': 'Close Push-Ups','features' : ['Series', 'Number'], 'group' : 'Push-Ups'},
    {'name': 'Raised Push-Ups','features' : ['Series', 'Number'], 'group' : 'Push-Ups'},

    {'name': 'Abdominal','features' : ['Series', 'Number'], 'group' : 'Abdominals'},
    {'name': 'Abdominal Lateral','features' : ['Series', 'Number'], 'group' : 'Abdominals'},
    {'name': 'Core Abdominal','features' : ['Series', 'Number'], 'group' : 'Abdominals'},
    
    
    {'name': 'Bench', 'features' : ['Series', 'Number'], 'group' : 'Weight'},
    {'name': 'Biceps Weight', 'features' : ['Series', 'Number'],'group' : 'Weight'},
    {'name': 'Pull-Ups', 'features' : ['Series', 'Number'],'group' : 'Pull-Ups'},
    ]
    
    


   async function handleSubmit(event) {
       const post = {'sport': sport, 
       'date' : date, 

       'Squats' : {'Series':squats_series, 'Number' : squats_number},
     'Stair Climbs' : {'Series':stair_climbs_series, 'Number' : stair_climbs_number},
     'Bench Climbs' : {'Series':bench_climbs_series, 'Number' : bench_climbs_number},
     'Leg Press' : {'Series':leg_press_series, 'Number' : leg_press_number},

       'Push-Ups' : {'Series':pushups_series, 'Number' : pushups_number},
     'Lateral Push-Ups' : {'Series':pushups_lateral_series, 'Number' : pushups_lateral_number},
     'Jumping Push-Ups' : {'Series':pushups_jumping_series, 'Number' : pushups_jumping_number},
     'Close Push-Ups' : {'Series':pushups_closing_series, 'Number' : pushups_closing_number},
     'Raised Push-Ups' : {'Series':pushups_lateral_series, 'Number' : pushups_lateral_number},
       'Abdominal' : {'Series':abdominal_series, 'Number' : abdominal_number},
     'Abdominal Lateral' : {'Series':abdominal_lateral_series, 'Number' : abdominal_lateral_number},
     'Core Abdominal' : {'Series':abdominal_core_series, 'Number' : abdominal_core_number},

    'Bench' : {'Series':bench_series, 'Number' : bench_number},
     'Biceps Weight' : {'Series':biceps_weight_series, 'Number' : biceps_weight_number},
     'Pull-Ups' : {'Series':pullups_series, 'Number' : pullups_number}
       
       }
       
       //{sport, date, meters, minutes, elevation}


        await fetch(`new_sessions/workout.json`, {
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







<div class="mb-20">
    <div class="mb-6 shadow ">
        <img src="workout2.jpg" alt="cycling" class="object-cover h-48 w-full shadow rounded-md">
    </div>
    <div class="flex justify-center mb-16 bg-blue-700 border-2 border-gray-300 shadow-lg rounded-t-md">
        <div class="font-sans Arial text-center p-2 text-3xl text-blue-700 font-semibold bg-blue-100 px-8 tracking-widest">
        Workout New Session
        </div>
    </div>

</div>




<div class="flex justify-center text-blue-700">

  <div class="flex-initial p-2">
    <div class=" p-2">
        <form
            on:submit|preventDefault="{handleSubmit}"
            on:invalid={validateMessageEmail}
            on:changed={validateMessageEmail}
            on:input={validateMessageEmail}
        >   

            <div class='flex'>
            <div class='flex w-1/3 m-2'>
                <label for="date" class="block uppercase tracking-wide text-grey-darker text-xs font-bold p-2">
                Date
                </label>
                </div>
                <div class='flex w-2/3 m-2'>
                     <input bind:value={date} placeholder='date' required type="date" id="date" class="text-center appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"/>
                 </div>    
            </div>
            <br />


            <div class='flex'>
                <div class='flex w-1/2 m-2'>
                    <label class="block uppercase tracking-wide  text-grey-darker text-xs font-bold p-2">
                        Example </label>
                </div>
                <div class='flex w-1/2 m-2'>
                    <input readonly bind:value={null_var} placeholder='series' type="number"class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"/>    
                </div>    
                <div class='flex w-1/2 m-2'>
                    <input readonly bind:value={null_var} placeholder='repetitions' type="number" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"/>
                </div>
            </div>

            <label class=" block uppercase p-2 tracking-wide text-grey-darker text-xl font-bold m-2">
                    Legs</label>

            <div class='flex'>
                <div class='flex w-1/2 m-2'>
                    <label class="block uppercase tracking-wide  text-grey-darker text-xs font-bold p-2">
                        Squats</label>
                </div>
                <div class='flex w-1/2 m-2'>
                    <input bind:value={squats_series} placeholder='series' type="number"class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"/>    
                </div>    
                <div class='flex w-1/2 m-2'>
                    <input bind:value={squats_number} placeholder='repetitions' type="number" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"/>
                </div>
            </div>

            <div class='flex'>
                <div class='flex w-1/2 m-2'>
                    <label class="block uppercase p-2 tracking-wide text-grey-darker text-xs font-bold">
                        Stair Climbs</label>
                </div>
                <div class='flex w-1/2 m-2'>
                    <input bind:value={stair_climbs_series} placeholder='series' type="number"class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"/>    
                </div>    
                <div class='flex w-1/2 m-2'>
                    <input bind:value={stair_climbs_number} placeholder='repetitions' type="number" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"/>
                </div>
            </div>

            <div class='flex'>
                <div class='flex w-1/2 m-2'>
                    <label class="block uppercase p-2 tracking-wide text-grey-darker text-xs font-bold">
                        Bench Climbs</label>
                </div>
                <div class='flex w-1/2 m-2'>
                    <input bind:value={bench_climbs_series} placeholder='series' type="number"class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"/>    
                </div>    
                <div class='flex w-1/2 m-2'>
                    <input bind:value={bench_climbs_number} placeholder='repetitions' type="number" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"/>
                </div>
            </div>
            
            <div class='flex'>
                <div class='flex w-1/2 m-2'>
                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold p-2">
                        Leg Press</label>
                </div>
                <div class='flex w-1/2 m-2'>
                    <input bind:value={leg_press_series} placeholder='series' type="number"class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"/>    
                </div>    
                <div class='flex w-1/2 m-2'>
                    <input bind:value={leg_press_number} placeholder='repetitions' type="number" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"/>
                </div>
            </div>

            <br />

            <label class="block uppercase p-2 tracking-wide text-grey-darker text-xl font-bold m-2">
            Push-ups
            </label>



            <div class='flex'>
                <div class='flex w-1/2 m-2'>
                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold p-2">
                        Regular</label>
                </div>
                <div class='flex w-1/2 m-2'>
                    <input bind:value={pushups_series} placeholder='series' type="number"class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"/>    
                </div>    
                <div class='flex w-1/2 m-2'>
                    <input bind:value={pushups_number} placeholder='repetitions' type="number" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"/>
                </div>
            </div>

            




            <div class='flex'>
                <div class='flex w-1/2 m-2'>
                    <label class="block uppercase p-2 tracking-wide text-grey-darker text-xs font-bold">
                        Lateral</label>
                </div>
                <div class='flex w-1/2 m-2'>
                    <input bind:value={pushups_lateral_series} placeholder='series' type="number"class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"/>    
                </div>    
                <div class='flex w-1/2 m-2'>
                    <input bind:value={pushups_lateral_number} placeholder='repetitions' type="number" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"/>
                </div>
            </div>

            
            
            <div class='flex'>
                <div class='flex w-1/2 m-2'>
                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold p-2">
                        Jumping</label>
                </div>
                <div class='flex w-1/2 m-2'>
                    <input bind:value={pushups_jumping_series} placeholder='series' type="number"class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"/>    
                </div>    
                <div class='flex w-1/2 m-2'>
                    <input bind:value={pushups_jumping_number} placeholder='repetitions' type="number" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"/>
                </div>
            </div>

            <div class='flex'>
                <div class='flex w-1/2 m-2'>
                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold p-2">
                        Closing</label>
                </div>
                <div class='flex w-1/2 m-2'>
                    <input bind:value={pushups_closing_series} placeholder='series' type="number"class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"/>    
                </div>    
                <div class='flex w-1/2 m-2'>
                    <input bind:value={pushups_closing_number} placeholder='repetitions' type="number" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"/>
                </div>
            </div>

            <div class='flex'>
                <div class='flex w-1/2 m-2'>
                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold p-2">
                        Raised</label>
                </div>
                <div class='flex w-1/2 m-2'>
                    <input bind:value={pushups_raised_series} placeholder='series' type="number"class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"/>    
                </div>    
                <div class='flex w-1/2 m-2'>
                    <input bind:value={pushups_raised_number} placeholder='repetitions' type="number" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"/>
                </div>
            </div>

            <br />

            <label class="block uppercase p-2 tracking-wide text-grey-darker text-xl font-bold m-2">
            Abdominals
            </label>

            <div class='flex'>
                <div class='flex w-1/2 m-2'>
                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold p-2">
                        Regular</label>
                </div>
                <div class='flex w-1/2 m-2'>
                    <input bind:value={abdominal_series} placeholder='series' type="number"class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"/>    
                </div>    
                <div class='flex w-1/2 m-2'>
                    <input bind:value={abdominal_number} placeholder='repetitions' type="number" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"/>
                </div>
            </div>

            <div class='flex'>
                <div class='flex w-1/2 m-2'>
                    <label class="block uppercase p-2 tracking-wide text-grey-darker text-xs font-bold">
                        Lateral</label>
                </div>
                <div class='flex w-1/2 m-2'>
                    <input bind:value={abdominal_lateral_series} placeholder='series' type="number"class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"/>    
                </div>    
                <div class='flex w-1/2 m-2'>
                    <input bind:value={abdominal_lateral_number} placeholder='repetitions' type="number" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"/>
                </div>
            </div>
            
            <div class='flex'>
                <div class='flex w-1/2 m-2'>
                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold p-2">
                        Core</label>
                </div>
                <div class='flex w-1/2 m-2'>
                    <input bind:value={abdominal_core_series} placeholder='series' type="number"class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"/>    
                </div>    
                <div class='flex w-1/2 m-2'>
                    <input bind:value={abdominal_core_number} placeholder='repetitions' type="number" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"/>
                </div>
            </div>

            <br />

            <label class="block uppercase p-2 tracking-wide text-grey-darker text-xl font-bold m-2">
            Others
            </label>

            <div class='flex'>
                <div class='flex w-1/2 m-2'>
                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold p-2">
                        Bench</label>
                </div>
                <div class='flex w-1/2 m-2'>
                    <input bind:value={bench_series} placeholder='series' type="number"class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"/>    
                </div>    
                <div class='flex w-1/2 m-2'>
                    <input bind:value={bench_number} placeholder='repetitions' type="number" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"/>
                </div>
            </div>

            <div class='flex'>
                <div class='flex w-1/2 m-2'>
                    <label class="block uppercase p-2 tracking-wide text-grey-darker text-xs font-bold">
                        Biceps Weight</label>
                </div>
                <div class='flex w-1/2 m-2'>
                    <input bind:value={biceps_weight_series} placeholder='series' type="number"class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"/>    
                </div>    
                <div class='flex w-1/2 m-2'>
                    <input bind:value={biceps_weight_number} placeholder='repetitions' type="number" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"/>
                </div>
            </div>
            
            <div class='flex'>
                <div class='flex w-1/2 m-2'>
                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold p-2">
                        Pull-ups</label>
                </div>
                <div class='flex w-1/2 m-2'>
                    <input bind:value={pullups_series} placeholder='series' type="number"class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"/>    
                </div>    
                <div class='flex w-1/2 m-2'>
                    <input bind:value={pullups_number} placeholder='repetitions' type="number" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"/>
                </div>
            </div>



        <div class='flex justify-end mx-2 my-8'>
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

