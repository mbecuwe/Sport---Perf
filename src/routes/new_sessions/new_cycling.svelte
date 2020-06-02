

<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`new_sessions.json`).then(r => r.json()).then(options => {
			return { options };
		});
	}	
    
</script>


<script>

    export let options;


    let list = []

    options.forEach(x => {
        list.push(x.features)
    })
    console.log(list)
    
    
    
    let error_boolean = false;

   async function handleSubmit(event) {
       console.log(1)
       console.log(event);
       console.log(1)
       console.log(event.target);
       console.log(1)
       console.log(event.target.email.value);
       console.log(1)
       console.log(event.target.password.value);
    }

   function validateMessageEmail(event) {
       let textbox = event.target;
       error_boolean = false;
       if (textbox.value === '') {
            textbox.setCustomValidity('Required email address');
        } else if (textbox.validity.typeMismatch){
            error_boolean = true;
            textbox.setCustomValidity('please enter a valid email address');
        } else {
           textbox.setCustomValidity('');
        }
        return true;
    }
</script>



<form
    on:submit|preventDefault="{handleSubmit}"
    on:invalid={validateMessageEmail}
    on:changed={validateMessageEmail}
    on:input={validateMessageEmail}
>
  <label for="email">Email</label>
  <input required type="number" id="email" />
  {#if error_boolean}
    <h1> OH NO! AN ERRROR!</h1>
  {/if}

  <label for="password">Password</label>
  <input required type="number" id="password" />

  <button type="submit">Create account</button>
</form>







<div class="flex h-48">
  <div class="flex-initial w-2/3 p-2">
    <div class="text-center p-2 text-2xl font-semibold bg-gray-100">
    Cycling New Session
    </div>
  </div>
  <div class="flex-initial w-1/3 p-2">
    <div class=" text-right p-2">
    <img src="cycling.jpg" alt="cycling">
    </div>
  </div>
</div>



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
                <!-- <div class="pb-6">
                    <p class="pb-2">Sports</p>

                    
                    <input type="text" list="sports" id="sport" name="sport" class="shadow hover:shadow-md" value={name} on:change="{() => answer = ''}">
                    <datalist id="sports">
                        <option value="Fitness"></option>
                        <option value="Jogging"></option>
                        <option value="Swimming"></option>
                        <option value="Racing Bike"></option>
                    </datalist>
                </div> -->


                <div class="pb-6">
                    <p class="pb-2">Meters</p>
                <input type="number" id="meters" name="meters" class="shadow hover:shadow-md">    
                </div>


                <div class="pb-6">
                    <p class="pb-2">Minutes</p>
                <input type="number" id="minutes" name="minutes" class="shadow hover:shadow-md">    
                </div>

                <div class="pb-6">
                    <p class="pb-2">Elevation</p>
                <input type="number" id="elevation" name="elevation" class="shadow hover:shadow-md">    
                </div>
            </div>
        </div>

    </body> 

<!-- Check that all inputs are provided : -->




<!-- 
<form on:submit|preventDefault="{handleSubmit}" >
  <label class='bg-blue-100' for="email">Email</label>
  <input required type="number" id="email" />

  <label for="password">Password</label>
  <input required type="number" id="password" />
  
  <button type="submit">Create account</button>
</form>

<script>
   async function handleSubmit(event) {
        console.log(event);
        console.log(event.target);
        console.log(event.target.email.value);
        console.log(event.target.password.value);
    }
</script> -->

