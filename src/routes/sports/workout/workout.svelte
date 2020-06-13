
<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`sports/workout.json`).then(r => r.json()).then(data_raw => {
			return { data_raw };
		});
	}	

</script>


<style>
   .red { color: red; }
   .green { color: green; }
</style>

<script>
    import ChartsRadarLeg from './workoutlegs-radar.svelte'
    import ChartsRadarPushUps from './workoutpushups-radar.svelte'
    import ChartsRadarAbdominals from './workoutabdo-radar.svelte'
    import ChartsRadarOthers from './workoutothers-radar.svelte'
    import moment from 'moment';

    export let data_raw
        // Sort list of Json by dates (closest dates to last positions)
    function custom_sort(a, b) {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
    data_raw = data_raw.sort(custom_sort)
    let data_last5 = data_raw.slice(Math.max(data_raw.length-5, 0))
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


    const group_list = {'Legs': ['Squats', 'Stair Climbs', 'Bench Climbs', 'Leg Press'],
    'Push-Ups' : ['Push-Ups', 'Lateral Push-Ups', 'Jumping Push-Ups', 'Close Push-Ups', 'Raised Push-Ups'],
    'Abdominals': ['Abdominal', 'Abdominal Lateral', 'Core Abdominal'],
    'Others': ['Bench', 'Biceps Weight', 'Pull-Ups']}
    function convert_date(date){
	return moment(date, 'YYYY-MM-DD').format('dddd MMMM D Y')
}
    function push_series(x, exercise){
        if (exercise in x){
            return x[exercise]['Series'] * x[exercise]['Number']
        } else return 0
    }
    function last_element(list){
        return list[list.length-1]
    }
    function average_perf(list1, list2){
        let count = 0
        let length = 0
        for (let i in list1){
            if (list2[i] >0 ){
                count += list1[i]/list2[i]
                length +=1
            }
        }
        return count/length *100
    }

    function round_1_decimal(float){
        return Math.round(float * 10) /10
    }

    function mean_list_notnull(list){
        let count = 0
        let length = 0
        list.forEach(elem => { 
            if (elem > 0){
                count += elem
                length += 1
            }})
        return count / length
    }
function get_last_nb_sessions(int, list){
    return list.slice(Math.max(list.length - int, 0))
}

    // LEGS : 
    let squats = []
    let stair_climbs = []
    let bench_climbs = []
    let leg_press = []
    let list_date = []

    data_raw.forEach(x => {
        list_date.push(x['date'])
        
        squats.push(push_series(x, 'Squats'))
        stair_climbs.push(push_series(x, 'Stair Climbs'))
        bench_climbs.push(push_series(x, 'Bench Climbs'))
        leg_press.push(push_series(x, 'Leg Press'))
        
    })

    let last_legs = [last_element(squats),
    last_element(stair_climbs), 
    last_element(bench_climbs), 
    last_element(leg_press)]

    let mean_legs = [mean_list_notnull(squats),
    mean_list_notnull(stair_climbs), 
    mean_list_notnull(bench_climbs), 
    mean_list_notnull(leg_press)]

     export const data_leg_radar = {
    labels: group_list['Legs'],
    datasets: [{
        label: 'Last session',
        data:last_legs,
        borderColor: "#192E5B",
        fill:false
        }, 
    {
        label: 'Average session',
        data:mean_legs,
        borderColor: "#72A2C0",
        fill:false
    }
    ]}

    let leg_global_indicator = round_1_decimal(average_perf(last_legs, mean_legs))

    let pushups = []
    let pushups_lateral = []
    let pushups_jumping = []
    let pushups_close = []
    let raised_pushups = []

    data_raw.forEach(x => {
        pushups.push(push_series(x, 'Push-Ups'))
        pushups_lateral.push(push_series(x, 'Lateral Push-Ups'))
        pushups_jumping.push(push_series(x, 'Jumping Push-Ups'))
        pushups_close.push(push_series(x, 'Close Push-Ups'))
        raised_pushups.push(push_series(x, 'Raised Push-Ups'))
    })

    let last_pushups = [last_element(pushups),
    last_element(pushups_lateral), 
    last_element(pushups_jumping), 
    last_element(pushups_close),
    last_element(raised_pushups),
    ]

    let mean_pushups = [mean_list_notnull(pushups),
    mean_list_notnull(pushups_lateral), 
    mean_list_notnull(pushups_jumping), 
    mean_list_notnull(pushups_close),
    mean_list_notnull(raised_pushups)]

     export const data_pushups_radar = {
    labels: group_list['Push-Ups'],
    datasets: [{
        label: 'Last session',
        data:last_pushups,
        borderColor: "#192E5B",
        fill:false


    }, 
    {
        label: 'Average session',
        data:mean_pushups,
        borderColor: "#72A2C0",
        fill:false


    }
    ]}

    let pushups_global_indicator = round_1_decimal(average_perf(last_pushups, mean_pushups))

    let abdominal = []
    let abdominal_lateral = []
    let abdominal_core = []

    data_raw.forEach(x => {
        abdominal.push(push_series(x, 'Abdominal'))
        abdominal_lateral.push(push_series(x, 'Abdominal Lateral'))
        abdominal_core.push(push_series(x, 'Core Abdominal'))
    })

    let last_abdominal = [last_element(abdominal),
    last_element(abdominal_lateral), 
    last_element(abdominal_core), 
    ]

    let mean_abdominal = [mean_list_notnull(abdominal),
    mean_list_notnull(abdominal_lateral), 
    mean_list_notnull(abdominal_core), 
    ]

     export const data_abdominal_radar = {
    labels: group_list['Abdominals'],
    datasets: [{
        label: 'Last session',
        data:last_abdominal,
        borderColor: "#192E5B",
        fill:false


    }, 
    {
        label: 'Average session',
        data:mean_abdominal,
        borderColor: "#72A2C0",
        fill:false


    }
    ]}

    let abdominal_global_indicator = round_1_decimal(average_perf(last_abdominal, mean_abdominal))


    // Others : 
    //['Bench', 'Biceps Weight', 'Pull-Ups']

    let bench = []
    let biceps_weight = []
    let pullups = []

    data_raw.forEach(x => {
        bench.push(push_series(x, 'Bench'))
        biceps_weight.push(push_series(x, 'Biceps Weight'))
        pullups.push(push_series(x, 'Pull-Ups'))
    })

    let last_others = [last_element(bench),
    last_element(biceps_weight), 
    last_element(pullups), 
    ]

    let mean_others = [mean_list_notnull(bench),
    mean_list_notnull(biceps_weight), 
    mean_list_notnull(pullups), 
    ]

     export const data_others_radar = {
    labels: group_list['Others'],
    datasets: [{
        label: 'Last session',
        data:last_others,
        borderColor: "#192E5B",
        fill:false

}, 
    {
        label: 'Average session',
        data:mean_others,
        borderColor: "#72A2C0",
        fill:false


    }]}

    let others_global_indicator = round_1_decimal(average_perf(last_others, mean_others))



</script> 

<div class='bg-white '>




<div class="mb-20">
    <div class="mb-6 shadow ">
        <img src="workout2.jpg" alt="cycling" class="object-cover h-48 w-full shadow rounded-md">
    </div>
    <div class="flex justify-center mb-16 bg-blue-700 border-2 border-gray-300 shadow-lg rounded-t-md">
        <div class="font-sans Arial text-center p-2 text-3xl text-blue-700 font-semibold bg-blue-100 px-8 tracking-widest">
        Workout Performance
        </div>
    </div>
<div class='p-8'>
    <div class='pb-8'>
        <h1 class="text-blue-800  mb-8 ">Last Sessions</h1>
     
        <div class="italic grid grid-cols-3 divide-x divide-gray-400">
            {#each get_last_nb_sessions(3, list_date) as date}
            <div class="text-center">{convert_date(date)}</div>
            {/each}
        </div>
    </div>

    <div class="divide-y mt-16">
       
       
        <h1 class="text-blue-800">
        Legs
        </h1>

        <div class='m-12 container mx-auto'>
            <table class="table-auto text-center container mx-auto">
            <caption class="font-semibold mb-6 mt-8 text-xl italic text-blue-700">Data for legs</caption>
            <thead class="border-gray-300 italic">
            <tr class="bg-blue-200 border border-gray-300">
            <th class="px-2 py-2"></th>
            <th colspan=2 class="px-2 py-2">Squats </th>
            <th colspan=2 class="px-2 py-2">Stair Climbs</th>
            <th colspan=2 class="px-2 py-2">Bench Climbs</th>
            <th colspan=2 class="px-2 py-2">Leg Press</th>
            </tr>
            <tr class="bg-blue-100 border border-gray-300">
            <th class="px-2 py-2">Date</th>
            <th class="px-2 py-2">Series </th>
            <th class="px-2 py-2">Repet. </th>
            <th class="px-2 py-2">Series </th>
            <th class="px-2 py-2">Repet. </th>
            <th class="px-2 py-2">Series </th>
            <th class="px-2 py-2">Repet. </th>
            <th class="px-2 py-2">Series </th>
            <th class="px-2 py-2">Repet. </th>
            
            </tr>
        </thead>

        <tbody>
        
            {#each data_last5 as data}
            <tr>
            <td class="border px-2 py-2">{data['date']}</td>
            <td class="border px-2 py-2">{data['Squats']['Series']}</td>
            <td class="border px-2 py-2">{data['Squats']['Number']}</td>
            <td class="border px-2 py-2">{data['Stair Climbs']['Series']}</td>
            <td class="border px-2 py-2">{data['Stair Climbs']['Number']}</td>
            <td class="border px-2 py-2">{data['Bench Climbs']['Series']}</td>
            <td class="border px-2 py-2">{data['Bench Climbs']['Number']}</td>
            <td class="border px-2 py-2">{data['Leg Press']['Series']}</td>
            <td class="border px-2 py-2">{data['Leg Press']['Number']}</td>
            </tr>
            {/each}
        </tbody>
        </table>
    </div>
</div>

<div class='text-center'> Your last session was <span class:green="{leg_global_indicator>=100}" class:red="{leg_global_indicator<100}">{leg_global_indicator}%</span> of the average of the sessions where you worked on legs </div>

    <div class="mt-8  m-12  ">
            <caption class="text-center container mx-auto font-semibold mb-6 mt-8 text-xl italic text-blue-700">Performance Radar Chart</caption>
            <ChartsRadarLeg {data_leg_radar} /> 
        </div>

    <div class="divide-y mt-16">
       
       
        <h1 class="text-blue-800">
        Push-Ups
        </h1>

        <div class='m-12 container mx-auto'>
            <table class="table-auto text-center container mx-auto">
            <caption class="font-semibold mb-6 mt-8 text-xl italic text-blue-700">Data for Push-ups</caption>
            <thead class="border-gray-300 italic">
            <tr class="bg-blue-200 border border-gray-300">
            <th class="px-2 py-2"></th>
            <th colspan=2 class="px-2 py-2">Regular </th>
            <th colspan=2 class="px-2 py-2">Lateral</th>
            <th colspan=2 class="px-2 py-2">Jumping</th>
            <th colspan=2 class="px-2 py-2">Close</th>
            <th colspan=2 class="px-2 py-2">Raised</th>
            </tr>
            <tr class="bg-blue-100 border border-gray-300">
            <th class="px-2 py-2">Date</th>
            <th class="px-2 py-2">Series </th>
            <th class="px-2 py-2">Repet. </th>
            <th class="px-2 py-2">Series </th>
            <th class="px-2 py-2">Repet. </th>
            <th class="px-2 py-2">Series </th>
            <th class="px-2 py-2">Repet. </th>
            <th class="px-2 py-2">Series </th>
            <th class="px-2 py-2">Repet. </th>
            <th class="px-2 py-2">Series </th>
            <th class="px-2 py-2">Repet. </th>
            
            </tr>
        </thead>

        <tbody>
        
            {#each data_last5 as data, i}
            <tr>
            <td class="border px-2 py-2">{data['date']}</td>
            <td class="border px-2 py-2">{data['Push-Ups']['Series']}</td>
            <td class="border px-2 py-2">{data['Push-Ups']['Number']}</td>
            <td class="border px-2 py-2">{data['Lateral Push-Ups']['Series']}</td>
            <td class="border px-2 py-2">{data['Lateral Push-Ups']['Number']}</td>
            <td class="border px-2 py-2">{data['Jumping Push-Ups']['Series']}</td>
            <td class="border px-2 py-2">{data['Jumping Push-Ups']['Number']}</td>
            <td class="border px-2 py-2">{data['Close Push-Ups']['Series']}</td>
            <td class="border px-2 py-2">{data['Close Push-Ups']['Number']}</td>
            <td class="border px-2 py-2">{data['Raised Push-Ups']['Series']}</td>
            <td class="border px-2 py-2">{data['Raised Push-Ups']['Number']}</td>
            </tr>
            {/each}
        </tbody>
        </table>
    </div>
</div>
<div class='text-center'> Your last session was <span class:green="{pushups_global_indicator>=100}" class:red="{pushups_global_indicator<100}">{pushups_global_indicator}%</span> of the average of the sessions where you worked on push-ups </div>


    <div class="mt-8  m-12  ">
            <caption class="text-center container mx-auto font-semibold mb-6 mt-8 text-xl italic text-blue-700">Performance Radar Chart</caption>
<ChartsRadarPushUps {data_pushups_radar} /> 
        </div>


    <div class="divide-y mt-16">
       
       
        <h1 class="text-blue-800">
        Abdominals
        </h1>

        <div class='m-12 container mx-auto'>
            <table class="table-auto text-center container mx-auto">
            <caption class="font-semibold mb-6 mt-8 text-xl italic text-blue-700">Data for Abdominals</caption>
            <thead class="border-gray-300 italic">
            <tr class="bg-blue-200 border border-gray-300">
            <th class="px-2 py-2"></th>
            <th colspan=2 class="px-2 py-2">Regular </th>
            <th colspan=2 class="px-2 py-2">Lateral</th>
            <th colspan=2 class="px-2 py-2">Core</th>
            </tr>
            <tr class="bg-blue-100 border border-gray-300">
            <th class="px-2 py-2">Date</th>
            <th class="px-2 py-2">Series </th>
            <th class="px-2 py-2">Repet. </th>
            <th class="px-2 py-2">Series </th>
            <th class="px-2 py-2">Repet. </th>
            <th class="px-2 py-2">Series </th>
            <th class="px-2 py-2">Repet. </th>
            
            </tr>
        </thead>

        <tbody>
        
            {#each data_last5 as data}
            <tr>
            <td class="border px-2 py-2">{data['date']}</td>
            <td class="border px-2 py-2">{data['Abdominal']['Series']}</td>
            <td class="border px-2 py-2">{data['Abdominal']['Number']}</td>
            <td class="border px-2 py-2">{data['Abdominal Lateral']['Series']}</td>
            <td class="border px-2 py-2">{data['Abdominal Lateral']['Number']}</td>
            <td class="border px-2 py-2">{data['Core Abdominal']['Series']}</td>
            <td class="border px-2 py-2">{data['Core Abdominal']['Number']}</td>
            </tr>
            {/each}
        </tbody>
        </table>
    </div>
</div>
<div class='text-center'> Your last session was <span class:green="{abdominal_global_indicator>=100}" class:red="{abdominal_global_indicator<100}">{abdominal_global_indicator}%</span> of the average of the sessions where you worked on abdominals </div>


    <div class="mt-8  m-12  ">
            <caption class="text-center container mx-auto font-semibold mb-6 mt-8 text-xl italic text-blue-700">Performance Radar Chart</caption>
<ChartsRadarAbdominals {data_abdominal_radar} />         </div>


    <div class="divide-y mt-16">
       
       
        <h1 class="text-blue-800">
        Others
        </h1>

        <div class='m-12 container mx-auto'>
            <table class="table-auto text-center container mx-auto">
            <caption class="font-semibold mb-6 mt-8 text-xl italic text-blue-700">Data for Others</caption>
            <thead class="border-gray-300 italic">
            <tr class="bg-blue-200 border border-gray-300">
            <th class="px-2 py-2"></th>
            <th colspan=2 class="px-2 py-2">Bench </th>
            <th colspan=2 class="px-2 py-2">Biceps Weight</th>
            <th colspan=2 class="px-2 py-2">Pull-Ups</th>
            </tr>
            <tr class="bg-blue-100 border border-gray-300">
             <th class="px-2 py-2">Date</th>
            <th class="px-2 py-2">Series </th>
            <th class="px-2 py-2">Repet. </th>
            <th class="px-2 py-2">Series </th>
            <th class="px-2 py-2">Repet. </th>
            <th class="px-2 py-2">Series </th>
            <th class="px-2 py-2">Repet. </th>
            
            </tr>
        </thead>

        <tbody>
        
            {#each data_last5 as data}
            <tr>
            <td class="border px-2 py-2">{data['date']}</td>
            <td class="border px-2 py-2">{data['Bench']['Series']}</td>
            <td class="border px-2 py-2">{data['Bench']['Number']}</td>
            <td class="border px-2 py-2">{data['Biceps Weight']['Series']}</td>
            <td class="border px-2 py-2">{data['Biceps Weight']['Number']}</td>
            <td class="border px-2 py-2">{data['Pull-Ups']['Series']}</td>
            <td class="border px-2 py-2">{data['Pull-Ups']['Number']}</td>
            </tr>
            {/each}
        </tbody>
        </table>
    </div>
</div>
<div class='text-center'> Your last session was <span class:green="{others_global_indicator>=100}" class:red="{others_global_indicator<100}">{others_global_indicator}%</span> of the average of the sessions where you worked on other exercises </div>



    <div class="mt-8  m-12  ">
            <caption class="text-center container mx-auto font-semibold mb-6 mt-8 text-xl italic text-blue-700">Performance Radar Chart</caption>
            <ChartsRadarOthers {data_others_radar} /> 
        </div>


</div>
</div>
</div>



