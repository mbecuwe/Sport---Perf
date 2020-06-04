
<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`sports/workout.json`).then(r => r.json()).then(data_raw => {
			return { data_raw };
		});
	}	

</script>

<script>
    import ChartsRadarLeg from './workoutlegs-radar.svelte'
    import ChartsRadarPushUps from './workoutpushups-radar.svelte'
    import ChartsRadarAbdominals from './workoutabdo-radar.svelte'
    import ChartsRadarOthers from './workoutothers-radar.svelte'

    
    export let data_raw
    
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


    // LEGS : 
    let squats = []
    let stair_climbs = []
    let bench_climbs = []
    let leg_press = []

    data_raw.forEach(x => {
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
    }, 
    {
        label: 'Average session',
        data:mean_legs,
    }
    ]}

    let leg_global_indicator = round_1_decimal(average_perf(last_legs, mean_legs))

    // PushUps : 
    //['Push-Ups', 'Lateral Push-Ups', 'Jumping Push-Ups', 'Close Push-Ups', 'Raised Push-Ups'],

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
    }, 
    {
        label: 'Average session',
        data:mean_pushups,
    }
    ]}

    let pushups_global_indicator = round_1_decimal(average_perf(last_pushups, mean_pushups))

    // Abdominals : 
    //['Abdominal', 'Abdominal Lateral', 'Core Abdominal']

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
    }, 
    {
        label: 'Average session',
        data:mean_abdominal,
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
        data:last_others,}, 
    {
        label: 'Average session',
        data:mean_others,
    }]}

    let others_global_indicator = round_1_decimal(average_perf(last_others, mean_others))

</script> 

<div class="flex h-48">
  <div class="flex-initial w-2/3 p-2">
    <div class="text-center p-2 text-2xl font-semibold bg-gray-100">
    Workout Performance
    </div>
  </div>
  <div class="flex-initial w-1/3 p-2">
    <div class=" text-right p-2">
    <img src="workout.jpg" alt="workout">
    </div>
  </div>
</div>


<div class="text-2xl font-semibold ">
Legs
</div>
<div class="p-7">
    Your last session was {leg_global_indicator} % of the average of the sessions where you worked on legs
</div>

<ChartsRadarLeg {data_leg_radar} /> 

<div class="text-2xl font-semibold ">
Push-Ups
</div>
<div class="p-7">
    Your last session was {pushups_global_indicator} % of the average of the sessions where you worked on pushups
</div>
<ChartsRadarPushUps {data_pushups_radar} /> 

<div class=" text-2xl font-semibold ">
Abdominals</div>
<div class="p-7">
    Your last session was {abdominal_global_indicator} % of the average of the sessions where you worked on abdominals
</div>
<ChartsRadarAbdominals {data_abdominal_radar} /> 

<div class="text-2xl font-semibold ">
Others
</div>
<div class="p-7">
    Your last session was {others_global_indicator} % of the average of the sessions where you worked on others
</div>
<ChartsRadarOthers {data_others_radar} /> 
