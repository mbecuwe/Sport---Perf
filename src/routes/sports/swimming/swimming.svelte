
<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`sports/swimming.json`).then(r => r.json()).then(data_raw => {
			return { data_raw };
		});
	}	
    

</script>

<script>
    import Charts from './swimming-charts.svelte'
    export let data_raw


// Compute data for charts

    let list_meters = [];
    let list_date = [];
    let list_sprint = [];
    let list_minutes = [];

    data_raw.forEach(x => {
        list_meters.push(x.meters)
        list_date.push(x.date)
        list_sprint.push(x.nb_sprint)
        list_minutes.push(x.minutes)
    })

    export const data = {
    labels: list_date,
    datasets: [{
        label: 'Meters covered',
        yAxisID : 'Meters covered',
        data:list_meters,
        borderColor: "#3e95cd",
        fill: false
    },
    {
        label: 'Sprint',
        data:list_sprint,
        yAxisID : 'Sprint',
        borderColor: "#8e5ea2",
        fill: false
    }]
}

// TODO: verifiy ordering of dates and sessions

const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;


// TODO: right now including last session, probably should not

// TODO: colors green or red for variations
function get_last_nb_sessions(int, list){
    return list.slice(Math.max(list.length - int, 0))
}

function dividevector(a,b){
    return a.map((e,i) => e / b[i]);
}

function variation(x_new, x_old){
    const variation = Math.round((x_new-x_old)/x_old*100)
    return variation
}

function round_1_decimal(float){
    return Math.round(float * 10) /10
}

function round_2_decimal(float){
    return Math.round(float * 100) / 100
}

// Compute average distance, speed, sprint, 
// Last session
const last_distance = list_meters[list_meters.length-1]
const last_hours = list_minutes[list_minutes.length-1]/60
const last_speed = last_distance/1000/last_hours
const last_sprint = list_sprint[list_sprint.length-1]


// Last 3 sessions
//const distance_3_session = list_meters.slice(Math.max(list_meters.length - 3, 0))

const distance_3_session = get_last_nb_sessions(3, list_meters)
const minutes_3_session = get_last_nb_sessions(3, list_minutes)
const sprint_3_session = get_last_nb_sessions(3, list_sprint)
const date_3_session = get_last_nb_sessions(3, list_date)



const average_3_distance = average(distance_3_session)
const average_3_sprint = average(sprint_3_session)
const average_3_speed = average(dividevector(distance_3_session , minutes_3_session)) * 60/1000  

const variation_3_distance = variation(last_distance, average_3_distance)
const variation_3_speed = variation(last_speed, average_3_speed)
const variation_3_sprint = variation(last_sprint, average_3_sprint)

// Last 10 sessions
const distance_10_session = get_last_nb_sessions(10, list_meters)
const minutes_10_session = get_last_nb_sessions(10, list_minutes)
const sprint_10_session = get_last_nb_sessions(10, list_sprint)

const average_10_distance = average(distance_10_session)
const average_10_sprint = average(sprint_10_session)
const average_10_speed = average(dividevector(distance_10_session , minutes_10_session)) * 60/1000

const variation_10_distance = variation(last_distance, average_10_distance)
const variation_10_speed = variation(last_speed, average_10_speed)
const variation_10_sprint = variation(last_sprint, average_10_sprint)

const nb_displayed = 3



</script>


<style>

</style>

<div class="mb-20">
    <div class="mb-6 shadow ">
        <img src="swimming2.jpg" alt="cycling" class="object-cover h-48 w-full shadow rounded-md">
    </div>


    <div class="flex justify-center mb-16 bg-blue-700 border-2 border-gray-300 shadow-lg rounded-t-md">
        <div class="font-sans Arial text-center p-2 text-3xl text-blue-700 font-semibold bg-blue-100 px-8 tracking-widest">
            Swimming Performance
        </div>
    </div>


    <div class='pb-8'>
        <h1 class="text-blue-800  mb-8 ">Last Sessions</h1>
     
        <div class="italic grid grid-cols-3 divide-x divide-gray-400">
            {#each get_last_nb_sessions(3, list_date) as date}
            <div class="text-center">{date}</div>
            {/each}
        </div>
    </div>

    <div class="divide-y mt-16">
        <h1 class="text-blue-800">Performance Tables</h1>
        <div class='m-12 container mx-auto'>
            <table class="table-auto text-center container mx-auto">
            <caption class="font-semibold mb-6 mt-8 text-xl italic text-blue-700">Performance evolution of main metrics</caption>
            <thead class="border-gray-300 italic">
                <tr class="bg-blue-100 border border-gray-300">
                <th class="px-4 py-2">Metrics</th>
                <th class="px-4 py-2">Value</th>
                <th colspan=2 class="px-4 py-2 ">vs. Last 3 sessions</th>
                <th colspan=2 class="px-4 py-2">vs. Last 10 sessions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td class="border px-4 py-2">Distance (m)</td>
                <td class="border px-4 py-2">{last_distance}</td>
                <td class="border px-4 py-2">{Math.round(average_3_distance)}</td>
                <td class="border px-4 py-2">{variation_3_distance}%</td>
                <td class="border px-4 py-2">{round_2_decimal(average_10_distance)}</td>
                <td class="border px-4 py-2">{variation_10_distance}%</td>
                </tr>
                <tr class="bg-gray-100">
                <td class="border px-4 py-2">Speed (km/h)</td>
                <td class="border px-4 py-2">{round_2_decimal(last_speed)}</td>
                <td class="border px-4 py-2">{round_2_decimal(average_3_speed)}</td>
                <td class="border px-4 py-2">{variation_3_speed}%</td>
                <td class="border px-4 py-2">{round_2_decimal(average_10_speed)}</td>
                <td class="border px-4 py-2">{variation_10_speed}%</td>
                </tr>
                <tr>
                <td class="border px-4 py-2">Sprints</td>
                <td class="border px-4 py-2">{last_sprint}</td>
                <td class="border px-4 py-2">{round_2_decimal(average_3_sprint)}</td>
                <td class="border px-4 py-2">{variation_3_sprint}%</td>
                <td class="border px-4 py-2">{round_2_decimal(average_10_sprint)}</td>
                <td class="border px-4 py-2">{variation_10_sprint}%</td>
        
                </tr>
            </tbody>
            </table>
        </div>



        <div class='m-12 container mx-auto'>
            <table class="table-auto text-center container mx-auto">
            <caption class="font-semibold mb-6 mt-8 text-xl italic text-blue-700">Performance of last sessions</caption>           
            <thead class="italic border-gray-300">
                <tr class="bg-blue-100 border border-gray-300">
                <th class="px-4 py-2">Date</th>
                <th class="px-4 py-2">Distance (m)</th>
                <th class="px-4 py-2">Time (min)</th>
                <th class="px-4 py-2">Speed (km/h)</th>
                <th class="px-4 py-2">Sprints</th>
                
                </tr>
            </thead>

            <tbody>
            
                {#each distance_3_session as distance, i}
                <tr>
                <td class="border px-4 py-2">{date_3_session[i]}</td>
                <td class="border px-4 py-2">{distance}</td>
                <td class="border px-4 py-2">{minutes_3_session[i]}</td>
                <td class="border px-4 py-2">{round_2_decimal((distance/1000) / (minutes_3_session[i]/60)) }</td>
                <td class="border px-4 py-2">{sprint_3_session[i]}</td>
                

                </tr>
                {/each}
            </tbody>
            </table>
        </div>
        <div class="mt-8">
            <h1 class="text-blue-800 mb-8 mt-16">Performance Chart</h1>
            <Charts {data} /> 
        </div>
    </div>
</div>

