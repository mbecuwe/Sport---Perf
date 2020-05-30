

// const user_list = [
//     {"name" : 'User1',
//     "password" : "password1",
//     'UserId' : 1},
//     {"name" : 'User2',
//     "password" : "password2"
//     'UserId' : 2},
//     {"name" : 'User3',
//     "password" : "password3",
//     'UserId' : 3},
//     {"name" : 'User4',
//     "password" : "password4",
//     'UserId' : 4},
//     {"name" : 'User5',
//     "password" : "password5",
//     'UserId' : 5},
//     {"name" : 'User6',
//     "password" : "password6",
//     'UserId' : 6},
//     {"name" : 'User7',
//     "password" : "password7",
//     'UserId' : 7}]






const exercise_list = [
    {'sport': 'swimming', 
    'img_src' : '',
    'features':['id_session', 'meters', 'minutes', 'sprints', 'date']},
    {'sport': 'running', 
    'img_src': '',
    'features':['id_session', 'meters', 'minutes', 'sprints', 'date']},
    {'sport': 'cycling', 
    'img_src': '',
    'features':['id_session', 'meters', 'minutes', 'sprints', 'date']},
    {'sport': 'workout', 
    'img_src': '',
    'features':['id_session', 'session_data', 'date']},
  ]

const workout_exercise_list = [
'', '', ''
]



const perf_user1 = [{
    'sport' : 'swimming',
    'id_session' : 1,
    'date' : '30-03-2020',
    'meters' : 1500,
    'minutes' : 60,
    'nb_sprint' : 3
},{
    'sport' : 'swimming',
    'id_session' : 2,
    'date' : '01-04-2020',
    'meters' : 1600,
    'minutes' : 51,
    'nb_sprint' : 3
},{
    'sport' : 'swimming',
    'id_session' : 3,
    'date' : "02-04-2020",
    'meters' : 1500,
    'minutes' : 54,
    'nb_sprint' : 4
},{
    'sport' : 'swimming',
    'id_session' : 4,
    'date' : '03-04-2020',
    'meters' : 1700,
    'minutes' : 70,
    'nb_sprint' : 3
},{
    'sport' : 'swimming',
    'id_session' : 5,
    'date' : "05-04-2020",
    'meters' : 1200,
    'minutes' : 40,
    'nb_sprint' : 2
},{
    'sport' : 'swimming',
    'id_session' : 6,
    'date' : "07-04-2020",
    'meters' : 1400,
    'minutes' : 50,
    'nb_sprint' : 3
}

]


const perf_UserId = 
    {'swimming': [
        {'id_session' : 1,
        'meters': 1500, 
        'minutes' : 50,
    'sprint': 2,
    'date': '30-03-2020'
        },		
        {'id_session' : 2,
        'meters': 1400, 
        'minutes' : 60,
    'sprints' : 2,  
    'date': '01-04-2020'
        },
    {'id_session' : 3,
        'meters': 1400, 
        'minutes' : 60,
    'sprints' : 2,  
    'date': '02-04-2020'
        },
    ],
    'running' : [
    {'id_session':1,
    'meters' : 4500,
    'elevation' : 500,
    'date': '30-03-2020'
    },
    {'id_session':2,
    'meters' : 5500,
    'elevation' : 200,
    'date': '01-04-2020'

    },
    {'id_session':3,
    'meters' : 6000,
    'elevation' : 400,
    'date': '02-04-2020'
    },
],
    'workout' : [
    {'id_session':1,
    'date' : '30-03-2020',
    'session_data': [
    ]},
    {'id_session':2,
    'date' : '30-03-2020',
    'session_data': [
    ]},
    {'id_session':3,
    'date' : '30-03-2020',
    'session_data': [
    ]}
],
'cycling' : [
    {'id_session':1,
    'meters' : 15000,
    'elevation': 2000,
    'date': '30-03-2020'
    },
    {'id_session':2,
    'meters' : 14000,
    'elevation': 2000,
    'date': '01-04-2020'
    },
    {'id_session':4,
    'meters' : 18000,
    'elevation': 2000,
    'date': '02-04-2020'
    }]}


const performance_data = [
    {'user' : 'User1',
    'swimming': [
        {'id_session' : 1,
        'meters': 1500, 
        'minutes' : 50,
    'sprint': 2,
    'date': '30-03-2020'
        },		
        {'id_session' : 2,
        'meters': 1400, 
        'minutes' : 60,
    'sprints' : 2,  
    'date': '01-04-2020'
        },
    {'id_session' : 3,
        'meters': 1400, 
        'minutes' : 60,
    'sprints' : 2,  
    'date': '02-04-2020'
        },
    ],
    'running' : [
    {'id_session':1,
    'meters' : 4500,
    'elevation' : 500,
    'date': '30-03-2020'
    },
    {'id_session':2,
    'meters' : 5500,
    'elevation' : 200,
    'date': '01-04-2020'

    },
    {'id_session':3,
    'meters' : 6000,
    'elevation' : 400,
    'date': '02-04-2020'
    },
],
    'workout' : [
    {'id_session':1,
    'date' : '30-03-2020',
    'session_data': [
    ]},
    {'id_session':2,
    'date' : '30-03-2020',
    'session_data': [
    ]},
    {'id_session':3,
    'date' : '30-03-2020',
    'session_data': [
    ]}
],
'cycling' : [
    {'id_session':1,
    'meters' : 15000,
    'elevation': 2000,
    'date': '30-03-2020'
    },
    {'id_session':2,
    'meters' : 14000,
    'elevation': 2000,
    'date': '01-04-2020'
    },
    {'id_session':4,
    'meters' : 18000,
    'elevation': 2000,
    'date': '02-04-2020'
    }]},

]

function getPerformanceData(){
return performance_data
}

function getExerciseList(){
return exercise_list
}

//console.log(getPerformanceData())
//console.log(getExerciseList())



function checkAllInputProvided(sport, listOfInputs){
exercise_list = getExerciseList()
// Find right sport data
necessary_input = exercise_list.filter(el => el['sport'] == sport)[0]
necessary_input = necessary_input.features
// Dont need to check for id_session
index = necessary_input.indexOf('id_session')
necessary_input.splice(index, 1)
//console.log(listOfInputs)
givenparam = []
listOfInputs.forEach(el => givenparam.push(el.param))
if (necessary_input.every(el => givenparam.includes(el))){
    return true
}
else return necessary_input
}

/*
console.log(checkAllInputProvided('swimming', [{'param': 'id_session', 'value' : 4}, {'param': 'meters', 'value' : 4}]))

console.log(checkAllInputProvided('swimming', [{'param': 'id_session', 'value' : 4}, {'param': 'meters', 'value' : 4}, {'param': 'minutes', 'value' : 4}, {'param': 'sprints', 'value' : 4}, {'param': 'date', 'value' : 4}])) 
*/


function newSession(sport, listOfInputs){ 
check = checkAllInputProvided(sport, listOfInputs)
if (check == true){
    dict = {}
    listOfInputs.forEach(el => dict[el.param] = el.value)
    performance_data[sport].push(dict)
    return 'Added new session successfully'
}
else{
    return `Some arguments are missing to add new session for ${sport}: ${check}`
}
}

/*
console.log(newSession('swimming', [{'param': 'id_session', 'value' : 4}, {'param': 'meters', 'value' : 4}]))

console.log(newSession('swimming', [{'param': 'id_session', 'value' : 4}, {'param': 'meters', 'value' : 4}, {'param': 'minutes', 'value' : 4}, {'param': 'sprints', 'value' : 4}, {'param': 'date', 'value' : 4}]))

console.log(performance_data)
*/


export function addCustomSport(sport, ...args){
return 'yeah output'
}


/*


function addCustomExercise(sport, ...args){

}


*/




console.log('everything working')


export function test(string){
    return string
}

export default {addCustomSport, test}