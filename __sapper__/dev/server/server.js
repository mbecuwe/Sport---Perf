'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var sirv = _interopDefault(require('sirv'));
var polka = _interopDefault(require('polka'));
var compression = _interopDefault(require('compression'));
var fs = _interopDefault(require('fs'));
var path = _interopDefault(require('path'));
var Chart$1 = _interopDefault(require('svelte-frappe-charts'));
var Chart$2 = _interopDefault(require('chart.js'));
var Stream = _interopDefault(require('stream'));
var http = _interopDefault(require('http'));
var Url = _interopDefault(require('url'));
var https = _interopDefault(require('https'));
var zlib = _interopDefault(require('zlib'));
var bodyParser = _interopDefault(require('body-parser'));

const mongo = require('mongodb');

let client = null;
let db = null;

async function init(){
    if(!client){
        const url = "mongodb+srv://becuwemartin:vendredi13@cluster0-hgxcl.mongodb.net/test2_database?retryWrites=true&w=majority";
        client = await mongo.MongoClient.connect(url);
        db = client.db('sport_perf_database');
    }
    return {client, db}
}

async function get(req, res) {
	
	const {db} = await init();
	const data_raw = await db.collection("user1_collection").find({sport:'swimming'}).toArray();
	
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(data_raw));

	}

async function post(req, res){
	const {db } = await init();
	const post = req.body;
	const result = await db.collection("user1_collection").insert(post);
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
	res.end(JSON.stringify(result));
}

//https://www.youtube.com/watch?v=H8SYYmrhHiE

var route_0 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get: get,
    post: post
});

async function get$1(req, res) {
	
	const {db} = await init();
	const data_raw = await db.collection("user1_collection").find({sport:'cycling'}).toArray();
	
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(data_raw));

	}

async function post$1(req, res){
	const {db } = await init();
	const post = req.body;
	const result = await db.collection("user1_collection").insert(post);
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
	res.end(JSON.stringify(result));
}

//https://www.youtube.com/watch?v=H8SYYmrhHiE

var route_1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get: get$1,
    post: post$1
});

async function get$2(req, res) {
	
	const {db} = await init();
	const data_raw = await db.collection("user1_collection").find({sport:'running'}).toArray();
	
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(data_raw));

	}

async function post$2(req, res){
	const {db } = await init();
	const post = req.body;
	const result = await db.collection("user1_collection").insert(post);
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
	res.end(JSON.stringify(result));
}

//https://www.youtube.com/watch?v=H8SYYmrhHiE

var route_2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get: get$2,
    post: post$2
});

async function get$3(req, res) {
	
	const {db} = await init();
	const data_raw = await db.collection("user1_collection").find({sport:'workout'}).toArray();
	
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(data_raw));

	}

async function post$3(req, res){
	const {db } = await init();
	const post = req.body;
	const result = await db.collection("user1_collection").insert(post);
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
	res.end(JSON.stringify(result));
}

//https://www.youtube.com/watch?v=H8SYYmrhHiE

var route_3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get: get$3,
    post: post$3
});

async function get$4(req, res) {
	
	const {db} = await init();
	const data_raw = await db.collection("user1_collection").find({sport:'swimming'}).toArray();
	
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(data_raw));
	}

var route_4 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get: get$4
});

// const performance_data = {
//     'swimming': [
//         {'id_session' : 1,
//         'meters': 1500, 
//         'minutes' : 50,
//     'sprint': 2,
//     'date': '30-03-2020'
//         },		
//         {'id_session' : 2,
//         'meters': 1400, 
//         'minutes' : 60,
//     'sprints' : 2,  
//     'date': '01-04-2020'
//         },
//     {'id_session' : 3,
//         'meters': 1400, 
//         'minutes' : 60,
//     'sprints' : 2,  
//     'date': '02-04-2020'
//         },
//     ],
//     'running' : [
//     {'id_session':1,
//     'meters' : 4500,
//     'elevation' : 500,
//     'date': '30-03-2020'
//     },
//     {'id_session':2,
//     'meters' : 5500,
//     'elevation' : 200,
//     'date': '01-04-2020'

//     },
//     {'id_session':3,
//     'meters' : 6000,
//     'elevation' : 400,
//     'date': '02-04-2020'
//     },
// ],
//     'workout' : [
//     {'id_session':1,
//     'date' : '30-03-2020',
//     'session_data': [
//     ]},
//     {'id_session':2,
//     'date' : '30-03-2020',
//     'session_data': [
//     ]},
//     {'id_session':3,
//     'date' : '30-03-2020',
//     'session_data': [
//     ]}
// ],
// 'cycling' : [
//     {'id_session':1,
//     'meters' : 15000,
//     'elevation': 2000,
//     'date': '30-03-2020'
//     },
//     {'id_session':2,
//     'meters' : 14000,
//     'elevation': 2000,
//     'date': '01-04-2020'
//     },
//     {'id_session':3,
//     'meters' : 18000,
//     'elevation': 2000,
//     'date': '02-04-2020'
//     }
// ]
// }





// const cycling_data = performance_data.cycling

// export let list_meters = [];
// export let list_elevation = [];
// export let list_date = [];

// cycling_data.forEach(x => {
//     list_meters.push(x.meters);
//     list_date.push(x.date);
//     list_elevation.push(x.elevation);
// })


// const datas = {
//     labels: list_date,
//     datasets: [{
//         label: 'Meters covered',
//         data:list_meters,
//         // backgroundColor: [
//         //     'rgba(255, 99, 132, 0.2)',
//         //     'rgba(54, 162, 235, 0.2)',
//         //     'rgba(255, 206, 86, 0.2)',
//         //     'rgba(75, 192, 192, 0.2)',
//         //     'rgba(153, 102, 255, 0.2)',
//         //     'rgba(255, 159, 64, 0.2)'
//         // ],
//         // borderColor: [
//         //     'rgba(255, 99, 132, 1)',
//         //     'rgba(54, 162, 235, 1)',
//         //     'rgba(255, 206, 86, 1)',
//         //     'rgba(75, 192, 192, 1)',
//         //     'rgba(153, 102, 255, 1)',
//         //     'rgba(255, 159, 64, 1)'
//         // ],
//         borderWidth: 1
//     }]
// }



// export default datas

var route_5 = /*#__PURE__*/Object.freeze({
    __proto__: null
});

async function get$5(req, res) {
	
	const {db} = await init();
	const data_raw = await db.collection("user1_collection").find({sport:'cycling'}).toArray();

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(data_raw));

	}

var route_6 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get: get$5
});

// const performance_data = {
//     'swimming': [
//         {'id_session' : 1,
//         'meters': 1500, 
//         'minutes' : 50,
//     'sprint': 2,
//     'date': '30-03-2020'
//         },		
//         {'id_session' : 2,
//         'meters': 1400, 
//         'minutes' : 60,
//     'sprints' : 2,  
//     'date': '01-04-2020'
//         },
//     {'id_session' : 3,
//         'meters': 1400, 
//         'minutes' : 60,
//     'sprints' : 2,  
//     'date': '02-04-2020'
//         },
//     ],
//     'running' : [
//     {'id_session':1,
//     'meters' : 4500,
//     'elevation' : 500,
//     'date': '30-03-2020'
//     },
//     {'id_session':2,
//     'meters' : 5500,
//     'elevation' : 200,
//     'date': '01-04-2020'

//     },
//     {'id_session':3,
//     'meters' : 6000,
//     'elevation' : 400,
//     'date': '02-04-2020'
//     },
// ],
//     'workout' : [
//     {'id_session':1,
//     'date' : '30-03-2020',
//     'session_data': [
//     ]},
//     {'id_session':2,
//     'date' : '30-03-2020',
//     'session_data': [
//     ]},
//     {'id_session':3,
//     'date' : '30-03-2020',
//     'session_data': [
//     ]}
// ],
// 'cycling' : [
//     {'id_session':1,
//     'meters' : 15000,
//     'elevation': 2000,
//     'date': '30-03-2020'
//     },
//     {'id_session':2,
//     'meters' : 14000,
//     'elevation': 2000,
//     'date': '01-04-2020'
//     },
//     {'id_session':3,
//     'meters' : 18000,
//     'elevation': 2000,
//     'date': '02-04-2020'
//     }
// ]
// }





// const cycling_data = performance_data.cycling

// export let list_meters = [];
// export let list_elevation = [];
// export let list_date = [];

// cycling_data.forEach(x => {
//     list_meters.push(x.meters);
//     list_date.push(x.date);
//     list_elevation.push(x.elevation);
// })


// const datas = {
//     labels: list_date,
//     datasets: [{
//         label: 'Meters covered',
//         data:list_meters,
//         // backgroundColor: [
//         //     'rgba(255, 99, 132, 0.2)',
//         //     'rgba(54, 162, 235, 0.2)',
//         //     'rgba(255, 206, 86, 0.2)',
//         //     'rgba(75, 192, 192, 0.2)',
//         //     'rgba(153, 102, 255, 0.2)',
//         //     'rgba(255, 159, 64, 0.2)'
//         // ],
//         // borderColor: [
//         //     'rgba(255, 99, 132, 1)',
//         //     'rgba(54, 162, 235, 1)',
//         //     'rgba(255, 206, 86, 1)',
//         //     'rgba(75, 192, 192, 1)',
//         //     'rgba(153, 102, 255, 1)',
//         //     'rgba(255, 159, 64, 1)'
//         // ],
//         borderWidth: 1
//     }]
// }



// export default datas

var route_7 = /*#__PURE__*/Object.freeze({
    __proto__: null
});

async function get$6(req, res) {
	
	const {db} = await init();
	const data_raw = await db.collection("user1_collection").find({sport:'running'}).toArray();
	
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(data_raw));
	}

var route_8 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get: get$6
});

async function get$7(req, res) {
	
	const {db} = await init();
	const data_raw = await db.collection("user1_collection").find({sport:'workout'}).toArray();
	
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(data_raw));
	}

var route_9 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get: get$7
});

const yo = 'we';

// const performance_data = {
//     'swimming': [
//         {'id_session' : 1,
//         'meters': 1500, 
//         'minutes' : 50,
//     'sprint': 2,
//     'date': '30-03-2020'
//         },		
//         {'id_session' : 2,
//         'meters': 1400, 
//         'minutes' : 60,
//     'sprints' : 2,  
//     'date': '01-04-2020'
//         },
//     {'id_session' : 3,
//         'meters': 1400, 
//         'minutes' : 60,
//     'sprints' : 2,  
//     'date': '02-04-2020'
//         },
//     ],
//     'running' : [
//     {'id_session':1,
//     'meters' : 4500,
//     'elevation' : 500,
//     'date': '30-03-2020'
//     },
//     {'id_session':2,
//     'meters' : 5500,
//     'elevation' : 200,
//     'date': '01-04-2020'

//     },
//     {'id_session':3,
//     'meters' : 6000,
//     'elevation' : 400,
//     'date': '02-04-2020'
//     },
// ],
//     'workout' : [
//     {'id_session':1,
//     'date' : '30-03-2020',
//     'session_data': [
//     ]},
//     {'id_session':2,
//     'date' : '30-03-2020',
//     'session_data': [
//     ]},
//     {'id_session':3,
//     'date' : '30-03-2020',
//     'session_data': [
//     ]}
// ],
// 'cycling' : [
//     {'id_session':1,
//     'meters' : 15000,
//     'elevation': 2000,
//     'date': '30-03-2020'
//     },
//     {'id_session':2,
//     'meters' : 14000,
//     'elevation': 2000,
//     'date': '01-04-2020'
//     },
//     {'id_session':3,
//     'meters' : 18000,
//     'elevation': 2000,
//     'date': '02-04-2020'
//     }
// ]
// }





// const cycling_data = performance_data.cycling

// export let list_meters = [];
// export let list_elevation = [];
// export let list_date = [];

// cycling_data.forEach(x => {
//     list_meters.push(x.meters);
//     list_date.push(x.date);
//     list_elevation.push(x.elevation);
// })


// const datas = {
//     labels: list_date,
//     datasets: [{
//         label: 'Meters covered',
//         data:list_meters,
//         // backgroundColor: [
//         //     'rgba(255, 99, 132, 0.2)',
//         //     'rgba(54, 162, 235, 0.2)',
//         //     'rgba(255, 206, 86, 0.2)',
//         //     'rgba(75, 192, 192, 0.2)',
//         //     'rgba(153, 102, 255, 0.2)',
//         //     'rgba(255, 159, 64, 0.2)'
//         // ],
//         // borderColor: [
//         //     'rgba(255, 99, 132, 1)',
//         //     'rgba(54, 162, 235, 1)',
//         //     'rgba(255, 206, 86, 1)',
//         //     'rgba(75, 192, 192, 1)',
//         //     'rgba(153, 102, 255, 1)',
//         //     'rgba(255, 159, 64, 1)'
//         // ],
//         borderWidth: 1
//     }]
// }



// export default datas

var route_10 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': yo
});

/*
console.log(newSession('swimming', [{'param': 'id_session', 'value' : 4}, {'param': 'meters', 'value' : 4}]))

console.log(newSession('swimming', [{'param': 'id_session', 'value' : 4}, {'param': 'meters', 'value' : 4}, {'param': 'minutes', 'value' : 4}, {'param': 'sprints', 'value' : 4}, {'param': 'date', 'value' : 4}]))

console.log(performance_data)
*/


function addCustomSport(sport, ...args){
return 'yeah output'
}


/*


function addCustomExercise(sport, ...args){

}


*/




console.log('everything working');


function test(string){
    return string
}

var sport = {addCustomSport, test};

var route_11 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    addCustomSport: addCustomSport,
    test: test,
    'default': sport
});

async function get$8(req, res) {
	
	const {db} = await init();
	const data_raw = await db.collection("user1_collection").find({}).toArray();
	
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(data_raw));
	}

var route_12 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get: get$8
});

function noop() { }
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error(`Function called outside component initialization`);
    return current_component;
}
function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
}
function afterUpdate(fn) {
    get_current_component().$$.after_update.push(fn);
}
function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
}
const escaped = {
    '"': '&quot;',
    "'": '&#39;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};
function escape(html) {
    return String(html).replace(/["'&<>]/g, match => escaped[match]);
}
function each(items, fn) {
    let str = '';
    for (let i = 0; i < items.length; i += 1) {
        str += fn(items[i], i);
    }
    return str;
}
const missing_component = {
    $$render: () => ''
};
function validate_component(component, name) {
    if (!component || !component.$$render) {
        if (name === 'svelte:component')
            name += ' this={...}';
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
    }
    return component;
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(parent_component ? parent_component.$$.context : []),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, options = {}) => {
            on_destroy = [];
            const result = { title: '', head: '', css: new Set() };
            const html = $$render(result, props, {}, options);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.title + result.head
            };
        },
        $$render
    };
}
function add_attribute(name, value, boolean) {
    if (value == null || (boolean && !value))
        return '';
    return ` ${name}${value === true ? '' : `=${typeof value === 'string' ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}

/* src/routes/chart.svelte generated by Svelte v3.22.3 */

const Chart = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `
 --&gt; --&gt;`;
});

/* src/routes/frappe-charts.svelte generated by Svelte v3.22.3 */

const Frappe_charts = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let data = {
		labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
		datasets: [{ values: [10, 12, 3, 9, 8, 15, 9] }]
	};

	return `${validate_component(Chart$1, "Chart").$$render($$result, { data, type: "line" }, {}, {})}`;
});

/* src/routes/index.svelte generated by Svelte v3.22.3 */

function preload({ params, query }) {
	return this.fetch(`home.json`).then(r => r.json()).then(data_raw => {
		return { data_raw };
	});
}

function custom_sort(a, b) {
	return new Date(a.date).getTime() - new Date(b.date).getTime();
}

const Routes = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { data_raw } = $$props;
	data_raw = data_raw.sort(custom_sort);
	let list_date = [];
	let list_sport = [];

	data_raw.forEach(x => {
		list_date.push(x.date);
		list_sport.push(x.sport);
	});

	if ($$props.data_raw === void 0 && $$bindings.data_raw && data_raw !== void 0) $$bindings.data_raw(data_raw);

	return `${($$result.head += `${($$result.title = `<title>Sport App</title>`, "")}`, "")}

<div class="${""}"><div class="${"mb-6 shadow "}"><img src="${"index.jpg"}" alt="${"work harder sign"}" class="${"antialiased bg-gray-600 object-cover h-48 w-full shadow rounded-md"}"></div>
	
	
	
	<div class="${"p-8"}"><div class="${"flex justify-center mb-8"}"><h1 class="${"text-4xl text-center text-blue-700 font-semibold tracking-widest"}">Welcome to the Sport Performance Assistant !</h1></div>
	

 
<br>

<div class="${"flex "}"><div class="${" w-2/3 p-4"}"><div class="${"divide-y divide-gray-400 "}"><div class="${""}"><h1 class="${"text-blue-800"}">Why using the Sport Assistant App? 
    </h1>
	
	<p class="${"p-4"}">It can be hard to measure progress in sports performance. <br>
	We think this evolution towards better performance is what truly motivate us to give our best in sports sessions.<br>
	This application is here to help you track your progress from one sport session to another.
	</p></div>

<div class="${"pt-8"}"><h1 class="${"text-blue-800"}">How to use the App? 
    </h1>
	<p class="${"p-4"}">Once you finished your sport session, record your performance in the &#39;New Session&#39; tab. <br>
	For now, you can save sessions for running, cycling, swimming and working out. <br>
	Then, go to the &#39;Performance&#39; tab and observe the progress you made.
	</p></div>

<div class="${"pt-8"}"><h1 class="${"text-blue-800"}">What&#39;s next? 
    </h1>
  <div class="${"p-4"}"><p>This is a first version of our website and we intend to improve it further to allow for more features and a better experience.<br>
	We are thinking of implementing options to:</p>
	<lu><li>Add more sports
	</li>
	<li>Delete sessions that were wrongly entered
	</li>
	<li>Add an authentification system
	</li>
	<li>Improve and add new visualizations.
	</li></lu>
	<p>We hope you enjoy our App and that it helps you staying motivated!<br>
	Feel free to contact us to give your thoughts about features you would like to see in the App.</p></div></div></div></div>

  <div class="${"flex-initial w-1/3 p-4"}"><h1 class="${"text-blue-800"}">Calendar of your last sport sessions : 
    </h1><p class="${"flex justify-center"}"><lu>${each([1, 2, 3, 4, 5], i => `<li class="${"p-2"}">${escape(list_date[list_date.length - i])} / ${escape(list_sport[list_sport.length - i])}</li>`)}</lu></p></div></div></div></div>

`;
});

/* src/routes/new_sessions/swimming/new_swimming.svelte generated by Svelte v3.22.3 */

function preload$1({ params, query }) {
	return this.fetch(`new_sessions/swimming.json`).then(r => r.json()).then(options => {
		return { options };
	});
}

const New_swimming = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let date = null, meters = null, minutes = null, nb_sprints = null;

	return `<div class="${"flex "}"><div class="${" w-1/3 p-4"}">
    <img class="${"w-full"}" src="${"swimming_draw.jpg"}" alt="${"swimming"}"> 
        </div>
  <div class="${"flex-initial w-2/3 p-2"}"><div class="${"block uppercase text-center p-2 text-2xl font-semibold"}">Swimming New Session
    </div>
    <div class="${" p-2"}"><form><label for="${"date"}" class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"}">Date
            </label>
        <input placeholder="${"date"}" required type="${"date"}" id="${"date"}" class="${"text-center appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"}"${add_attribute("value", date, 1)}>
            <br>

        <label for="${"meters"}" class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"}">Distance (m)</label>
        <input placeholder="${"meters"}" required type="${"number"}" id="${"meters"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"}"${add_attribute("value", meters, 1)}>
            <br>


        <label for="${"minutes"}" class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"}">Minutes</label>
        <input placeholder="${"minutes"}" required type="${"number"}" id="${"minutes"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"}"${add_attribute("value", minutes, 1)}>
            <br>

        <label for="${"nb_sprints"}" class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"}">Sprints</label>
        <input placeholder="${"number of sprints"}" required type="${"number"}" id="${"nb_sprints"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"}"${add_attribute("value", nb_sprints, 1)}>
            <br>
        <div class="${"flex justify-end my-8"}"><div class="${"flex"}"><button type="${"submit"}" class="${"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"}">Add Session</button></div></div></form>
            <br>



        <div id="${"add_to_me"}"></div></div></div></div>`;
});

/* src/routes/new_sessions/cycling/new_cycling.svelte generated by Svelte v3.22.3 */

function preload$2({ params, query }) {
	return this.fetch(`new_sessions/cycling.json`).then(r => r.json()).then(options => {
		return { options };
	});
}

const New_cycling = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let date = null, meters = null, minutes = null, elevation = null;

	return `<div class="${"flex "}"><div class="${" w-1/3 p-4"}">
    <img class="${"w-full"}" src="${"cycling_drawing.jpeg"}" alt="${"cycling"}"> 
        </div>
  <div class="${"flex-initial w-2/3 p-2"}"><div class="${"block uppercase text-center p-2 text-2xl font-semibold"}">Cycling New Session
    </div>
    <div class="${" p-2"}"><form><label for="${"date"}" class="${" block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"}">Date
            </label>
        <input placeholder="${"date"}" required type="${"date"}" id="${"date"}" class="${"text-center appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"}"${add_attribute("value", date, 1)}>
            <br>

        <label for="${"meters"}" class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"}">Distance (m)</label>
        <input placeholder="${"meters"}" required type="${"number"}" id="${"meters"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"}"${add_attribute("value", meters, 1)}>
            <br>


        <label for="${"minutes"}" class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"}">Minutes</label>
        <input placeholder="${"minutes"}" required type="${"number"}" id="${"minutes"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"}"${add_attribute("value", minutes, 1)}>
            <br>

        <label for="${"elevation"}" class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"}">Elevation (m)</label>
        <input placeholder="${"elevation"}" required type="${"number"}" id="${"elevation"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"}"${add_attribute("value", elevation, 1)}>
            <br>


        <div class="${"flex justify-end my-8"}"><div class="${"flex"}"><button type="${"submit"}" class="${"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"}">Add Session</button></div></div></form>
            <br>



        <div id="${"add_to_me"}"></div></div></div></div>`;
});

/* src/routes/new_sessions/running/new_running.svelte generated by Svelte v3.22.3 */

function preload$3({ params, query }) {
	return this.fetch(`new_sessions/running.json`).then(r => r.json()).then(options => {
		return { options };
	});
}

const New_running = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let date = null, meters = null, minutes = null, elevation = null;

	return `<div class="${"flex "}"><div class="${" w-1/3 p-4"}">
    <img class="${"w-full"}" src="${"runningdraw.png"}" alt="${"running"}"> 
        </div>
  <div class="${"flex-initial w-2/3 p-2"}"><div class="${"block uppercase text-center p-2 text-2xl font-semibold"}">Running New Session
    </div>
    <div class="${" p-2"}"><form><label for="${"date"}" class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"}">Date
            </label>
        <input placeholder="${"date"}" required type="${"date"}" id="${"date"}" class="${"text-center appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"}"${add_attribute("value", date, 1)}>
            <br>

        <label for="${"meters"}" class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"}">Distance (m)</label>
        <input placeholder="${"meters"}" required type="${"number"}" id="${"meters"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"}"${add_attribute("value", meters, 1)}>
            <br>


        <label for="${"minutes"}" class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"}">Minutes</label>
        <input placeholder="${"minutes"}" required type="${"number"}" id="${"minutes"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"}"${add_attribute("value", minutes, 1)}>
            <br>

        <label for="${"elevation"}" class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"}">Elevation (m)</label>
        <input placeholder="${"elevation"}" required type="${"number"}" id="${"elevation"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"}"${add_attribute("value", elevation, 1)}>
            <br>

        <div class="${"flex justify-end my-8"}"><div class="${"flex"}"><button type="${"submit"}" class="${"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"}">Add Session</button></div></div></form>
            <br>



        <div id="${"add_to_me"}"></div></div></div></div>`;
});

/* src/routes/new_sessions/workout/new_workout.svelte generated by Svelte v3.22.3 */

function preload$4({ params, query }) {
	return this.fetch(`new_sessions/workout.json`).then(r => r.json()).then(options => {
		return { options };
	});
}

const New_workout = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let date = null;
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
	let null_var = null;

	return `<div class="${"flex "}"><div class="${" w-1/3 p-4"}">
    <img class="${"w-full"}" src="${"workout_draw.png"}" alt="${"cycling"}"> 
        </div>
  <div class="${"flex-initial w-2/3 p-2"}"><div class="${"block uppercase text-center p-2 text-2xl font-semibold mb-5"}">Workout New Session
    </div>
    <div class="${" p-2"}"><form><div class="${"flex"}"><div class="${"flex w-1/3 m-2"}"><label for="${"date"}" class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold p-2"}">Date
                </label></div>
                <div class="${"flex w-2/3 m-2"}"><input placeholder="${"date"}" required type="${"date"}" id="${"date"}" class="${"text-center appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", date, 1)}></div></div>
            <br>


            <div class="${"flex"}"><div class="${"flex w-1/2 m-2"}"><label class="${"block uppercase tracking-wide  text-grey-darker text-xs font-bold p-2"}">Example </label></div>
                <div class="${"flex w-1/2 m-2"}"><input readonly placeholder="${"series"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", null_var, 1)}></div>    
                <div class="${"flex w-1/2 m-2"}"><input readonly placeholder="${"repetitions"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", null_var, 1)}></div></div>

            <label class="${" block uppercase p-2 tracking-wide text-grey-darker text-xl font-bold m-2"}">Legs</label>

            <div class="${"flex"}"><div class="${"flex w-1/2 m-2"}"><label class="${"block uppercase tracking-wide  text-grey-darker text-xs font-bold p-2"}">Squats</label></div>
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"series"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", squats_series, 1)}></div>    
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"repetitions"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", squats_number, 1)}></div></div>

            <div class="${"flex"}"><div class="${"flex w-1/2 m-2"}"><label class="${"block uppercase p-2 tracking-wide text-grey-darker text-xs font-bold"}">Stair Climbs</label></div>
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"series"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", stair_climbs_series, 1)}></div>    
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"repetitions"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", stair_climbs_number, 1)}></div></div>

            <div class="${"flex"}"><div class="${"flex w-1/2 m-2"}"><label class="${"block uppercase p-2 tracking-wide text-grey-darker text-xs font-bold"}">Bench Climbs</label></div>
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"series"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", bench_climbs_series, 1)}></div>    
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"repetitions"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", bench_climbs_number, 1)}></div></div>
            
            <div class="${"flex"}"><div class="${"flex w-1/2 m-2"}"><label class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold p-2"}">Leg Press</label></div>
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"series"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", leg_press_series, 1)}></div>    
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"repetitions"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", leg_press_number, 1)}></div></div>

            <br>

            <label class="${"block uppercase p-2 tracking-wide text-grey-darker text-xl font-bold m-2"}">Push-ups
            </label>



            <div class="${"flex"}"><div class="${"flex w-1/2 m-2"}"><label class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold p-2"}">Regular</label></div>
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"series"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", pushups_series, 1)}></div>    
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"repetitions"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", pushups_number, 1)}></div></div>

            




            <div class="${"flex"}"><div class="${"flex w-1/2 m-2"}"><label class="${"block uppercase p-2 tracking-wide text-grey-darker text-xs font-bold"}">Lateral</label></div>
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"series"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", pushups_lateral_series, 1)}></div>    
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"repetitions"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", pushups_lateral_number, 1)}></div></div>

            
            
            <div class="${"flex"}"><div class="${"flex w-1/2 m-2"}"><label class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold p-2"}">Jumping</label></div>
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"series"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", pushups_jumping_series, 1)}></div>    
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"repetitions"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", pushups_jumping_number, 1)}></div></div>

            <div class="${"flex"}"><div class="${"flex w-1/2 m-2"}"><label class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold p-2"}">Closing</label></div>
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"series"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", pushups_closing_series, 1)}></div>    
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"repetitions"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", pushups_closing_number, 1)}></div></div>

            <div class="${"flex"}"><div class="${"flex w-1/2 m-2"}"><label class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold p-2"}">Raised</label></div>
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"series"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", pushups_raised_series, 1)}></div>    
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"repetitions"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", pushups_raised_number, 1)}></div></div>

            <br>

            <label class="${"block uppercase p-2 tracking-wide text-grey-darker text-xl font-bold m-2"}">Abdominals
            </label>

            <div class="${"flex"}"><div class="${"flex w-1/2 m-2"}"><label class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold p-2"}">Regular</label></div>
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"series"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", abdominal_series, 1)}></div>    
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"repetitions"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", abdominal_number, 1)}></div></div>

            <div class="${"flex"}"><div class="${"flex w-1/2 m-2"}"><label class="${"block uppercase p-2 tracking-wide text-grey-darker text-xs font-bold"}">Lateral</label></div>
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"series"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", abdominal_lateral_series, 1)}></div>    
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"repetitions"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", abdominal_lateral_number, 1)}></div></div>
            
            <div class="${"flex"}"><div class="${"flex w-1/2 m-2"}"><label class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold p-2"}">Core</label></div>
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"series"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", abdominal_core_series, 1)}></div>    
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"repetitions"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", abdominal_core_number, 1)}></div></div>

            <br>

            <label class="${"block uppercase p-2 tracking-wide text-grey-darker text-xl font-bold m-2"}">Others
            </label>

            <div class="${"flex"}"><div class="${"flex w-1/2 m-2"}"><label class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold p-2"}">Bench</label></div>
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"series"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", bench_series, 1)}></div>    
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"repetitions"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", bench_number, 1)}></div></div>

            <div class="${"flex"}"><div class="${"flex w-1/2 m-2"}"><label class="${"block uppercase p-2 tracking-wide text-grey-darker text-xs font-bold"}">Biceps Weight</label></div>
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"series"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", biceps_weight_series, 1)}></div>    
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"repetitions"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", biceps_weight_number, 1)}></div></div>
            
            <div class="${"flex"}"><div class="${"flex w-1/2 m-2"}"><label class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold p-2"}">Pull-ups</label></div>
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"series"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", pullups_series, 1)}></div>    
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"repetitions"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", pullups_number, 1)}></div></div>



        <div class="${"flex justify-end mx-2 my-8"}"><div class="${"flex"}"><button type="${"submit"}" class="${"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"}">Add Session</button></div></div></form>
            <br>



        <div id="${"add_to_me"}"></div></div></div></div>`;
});

/* src/routes/Box.svelte generated by Svelte v3.22.3 */

const css = {
	code: ".box.svelte-1vpl77v{width:300px;border:1px solid #aaa;border-radius:2px;box-shadow:2px 2px 8px rgba(0,0,0,0.1);padding:1em;margin:0 0 1em 0}",
	map: "{\"version\":3,\"file\":\"Box.svelte\",\"sources\":[\"Box.svelte\"],\"sourcesContent\":[\"<style>\\n\\t.box {\\n\\t\\twidth: 300px;\\n\\t\\tborder: 1px solid #aaa;\\n\\t\\tborder-radius: 2px;\\n\\t\\tbox-shadow: 2px 2px 8px rgba(0,0,0,0.1);\\n\\t\\tpadding: 1em;\\n\\t\\tmargin: 0 0 1em 0;\\n\\t}\\n</style>\\n\\n<div class=\\\"box\\\">\\n\\t<slot></slot>\\n</div>\"],\"names\":[],\"mappings\":\"AACC,IAAI,eAAC,CAAC,AACL,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACvC,OAAO,CAAE,GAAG,CACZ,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,AAClB,CAAC\"}"
};

const Box = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	$$result.css.add(css);
	return `<div class="${"box svelte-1vpl77v"}">${$$slots.default ? $$slots.default({}) : ``}</div>`;
});

/* src/routes/new_session.svelte generated by Svelte v3.22.3 */

const New_session = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `<body class="${""}"><div class="${"bg-blue-100"}"><div class="${"mb-6 shadow "}"><img src="${"workout_3.jpg"}" alt="${"work harder sign"}" class="${"antialiased bg-gray-600 object-cover h-48 w-full shadow rounded-md "}"></div>
	<div class="${"p-8"}"><div class="${""}"><div class="${"flex justify-center mb-8"}"><h1 class="${"text-4xl text-blue-700 font-semibold tracking-widest"}">Add a new Session</h1></div>

	<div class="${"md:flex justify-center mb-8"}"><div class="${"text-center mx-4 md:w-1/2"}"><p class="${"font-semibold tracking-wider text-xl text-blue-700 pb-6"}">Cycling</p>
			<div class="${"hover:shadow-2xl hover:border-blue-800"}"><a href="${"new_sessions/cycling/new_cycling"}"><img src="${"bycicle21.jpg"}" alt="${"cycling"}" class="${"rounded-lg"}"></a></div></div>
		<div class="${" text-center mx-4  md:w-1/2 "}"><p class="${"font-semibold tracking-wider text-xl text-blue-700 pb-6"}">Running</p>
			<div class="${"hover:shadow-2xl hover:border-blue-800"}"><a href="${"new_sessions/running/new_running"}"><img src="${"running1.jpg"}" alt="${"running"}" class="${"rounded-lg"}"></a></div></div></div>
	<div class="${"md:flex justify-center"}"><div class="${" text-center mx-4 md:w-1/2"}"><p class="${"font-semibold tracking-wider text-xl text-blue-700 pb-6"}">Work-out</p>
			<div class="${"hover:shadow-2xl hover:border-blue-800"}"><a href="${"new_sessions/workout/new_workout"}"><img src="${"workout3.jpg"}" alt="${"workout"}" class="${"rounded-lg"}"></a></div></div>
		<div class="${" text-center mx-4  md:w-1/2 "}"><p class="${"font-semibold tracking-wider text-xl text-blue-700 pb-6"}">Swimming</p>
			<div class="${"hover:shadow-2xl hover:border-blue-800"}"><a href="${"new_sessions/swimming/new_swimming"}"><img src="${"swimming2.jpg"}" alt="${"swimming"}" class="${"rounded-lg"}"></a></div></div></div></div></div></div></body>







    

`;
});

/* src/routes/performance.svelte generated by Svelte v3.22.3 */

const Performance = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `<body class="${""}"><div class="${"mb-6 shadow "}"><img src="${"performance.jpg"}" alt="${"work harder sign"}" class="${"antialiased bg-gray-600 object-cover h-48 w-full shadow rounded-md "}"></div>

<div class="${"p-8"}"><div class="${""}"><div class="${""}"><div class="${"flex justify-center mb-8"}"><h1 class="${"text-4xl text-blue-700 font-semibold tracking-widest"}">See your Performance</h1></div>

	<div class="${"md:flex justify-center mb-8"}"><div class="${"text-center mx-4 md:w-1/2"}"><p class="${"font-semibold tracking-wider text-xl text-blue-700 pb-6"}">Cycling</p>
			<div class="${"hover:shadow-2xl hover:border-blue-800"}"><a href="${"sports/cycling/cycling"}"><img src="${"bycicle21.jpg"}" alt="${"cycling"}" class="${"rounded-lg"}"></a></div></div>
		<div class="${" text-center mx-4  md:w-1/2 "}"><p class="${"font-semibold tracking-wider text-xl text-blue-700 pb-6"}">Running</p>
			<div class="${"hover:shadow-2xl hover:border-blue-800"}"><a href="${"sports/running/running"}"><img src="${"running1.jpg"}" alt="${"running"}" class="${"rounded-lg"}"></a></div></div></div>
	<div class="${"md:flex justify-center"}"><div class="${" text-center mx-4 md:w-1/2"}"><p class="${"font-semibold tracking-wider text-xl text-blue-700 pb-6"}">Work-out</p>
			<div class="${"hover:shadow-2xl hover:border-blue-800"}"><a href="${"sports/workout/workout"}"><img src="${"workout3.jpg"}" alt="${"workout"}" class="${"rounded-lg"}"></a></div></div>
		<div class="${" text-center mx-4  md:w-1/2 "}"><p class="${"font-semibold tracking-wider text-xl text-blue-700 pb-6"}">Swimming</p>
			<div class="${"hover:shadow-2xl hover:border-blue-800"}"><a href="${"sports/swimming/swimming"}"><img src="${"swimming2.jpg"}" alt="${"swimming"}" class="${"rounded-lg"}"></a></div></div></div></div></div></div></body>

`;
});

/* src/routes/chartest.svelte generated by Svelte v3.22.3 */

const Chartest = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	function createChart() {
		var ctx = document.getElementById("myChart");

		var myChart = new Chart$2(ctx,
		{
				type: "bar",
				data: {
					labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
					datasets: [
						{
							label: "# of Votes",
							data: [12, 19, 3, 5, 2, 3],
							backgroundColor: [
								"rgba(255, 99, 132, 0.2)",
								"rgba(54, 162, 235, 0.2)",
								"rgba(255, 206, 86, 0.2)",
								"rgba(75, 192, 192, 0.2)",
								"rgba(153, 102, 255, 0.2)",
								"rgba(255, 159, 64, 0.2)"
							],
							borderColor: [
								"rgba(255, 99, 132, 1)",
								"rgba(54, 162, 235, 1)",
								"rgba(255, 206, 86, 1)",
								"rgba(75, 192, 192, 1)",
								"rgba(153, 102, 255, 1)",
								"rgba(255, 159, 64, 1)"
							],
							borderWidth: 1
						}
					]
				},
				options: {
					scales: {
						yAxes: [{ ticks: { beginAtZero: true } }]
					}
				}
			});
	}

	onMount(createChart);
	if ($$props.createChart === void 0 && $$bindings.createChart && createChart !== void 0) $$bindings.createChart(createChart);

	return `
<canvas id="${"myChart"}" width="${"2"}" height="${"1"}"></canvas>`;
});

/* src/routes/tutorial.svelte generated by Svelte v3.22.3 */

const Tutorial = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `<div class="${"mb-6 shadow "}"><img src="${"https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"}" alt="${"mountains"}" class="${"antialiased bg-gray-600 object-cover h-48 w-full shadow rounded-md"}"></div>



<div class="${"flex justify-center p-8"}"><h1 class="${"text-4xl text-blue-700 font-semibold tracking-widest"}">Tutorial</h1></div>
    <div class="${""}"><div class="${" mt-12 justify-center"}"><div class="${"m-16"}"><p class="${"flex justify-center mb-6 font-semibold mb-6 text-xl text-blue-700"}">Where it all starts</p>
                <div class="${"flex justify-center pb-6 "}"><iframe width="${"560"}" height="${"315"}" src="${"https://www.youtube.com/embed/6uG9lsx-EMo?autoplay=1&loop=1&autopause=1"}" frameborder="${"0"}" allow="${"fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen controls autoplay></iframe></div></div>
            <div class="${"m-16"}"><p class="${"flex justify-center mb-6 font-semibold mb-6 text-xl text-blue-700"}">How to use the application</p>
                <div class="${"flex justify-center pb-6 "}"><iframe width="${"560"}" height="${"315"}" src="${"https://www.youtube.com/embed/6uG9lsx-EMo"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen controls autoplay></iframe></div></div></div></div>`;
});

/* src/routes/sports/swimming/swimming-charts.svelte generated by Svelte v3.22.3 */

const Swimming_charts = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { data } = $$props;

	function createChart() {
		var ctx = document.getElementById("myChart");

		var myChart = new Chart$2(ctx,
		{
				type: "line",
				data,
				options: {
					scales: {
						yAxes: [
							{ id: "Meters covered", position: "left" },
							{
								id: "Sprint",
								position: "right",
								gridLines: { display: false }
							}
						]
					}
				}
			});
	}

	onMount(createChart);
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	if ($$props.createChart === void 0 && $$bindings.createChart && createChart !== void 0) $$bindings.createChart(createChart);
	return `<canvas id="${"myChart"}" width="${"2"}" height="${"1"}"></canvas>`;
});

/* src/routes/sports/swimming/swimming.svelte generated by Svelte v3.22.3 */

function preload$5({ params, query }) {
	return this.fetch(`sports/swimming.json`).then(r => r.json()).then(data_raw => {
		return { data_raw };
	});
}

// Sort list of Json by dates (closest dates to last positions)
function custom_sort$1(a, b) {
	return new Date(a.date).getTime() - new Date(b.date).getTime();
}

// TODO: right now including last session, probably should not
// TODO: colors green or red for variations
function get_last_nb_sessions(int, list) {
	return list.slice(Math.max(list.length - int, 0));
}

function dividevector(a, b) {
	return a.map((e, i) => e / b[i]);
}

function variation(x_new, x_old) {
	const variation = Math.round((x_new - x_old) / x_old * 100);
	return variation;
}

function round_2_decimal(float) {
	return Math.round(float * 100) / 100;
}

const Swimming = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { data_raw } = $$props;
	data_raw = data_raw.sort(custom_sort$1);

	// Compute data for charts
	let list_meters = [];

	let list_date = [];
	let list_sprint = [];
	let list_minutes = [];

	data_raw.forEach(x => {
		list_meters.push(x.meters);
		list_date.push(x.date);
		list_sprint.push(x.nb_sprint);
		list_minutes.push(x.minutes);
	});

	const data = {
		labels: list_date,
		datasets: [
			{
				label: "Meters covered",
				yAxisID: "Meters covered",
				data: list_meters,
				borderColor: "#3e95cd",
				fill: false
			},
			{
				label: "Sprint",
				data: list_sprint,
				yAxisID: "Sprint",
				borderColor: "#8e5ea2",
				fill: false
			}
		]
	};

	// TODO: verifiy ordering of dates and sessions
	const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;

	// Compute average distance, speed, sprint, 
	// Last session
	const last_distance = list_meters[list_meters.length - 1];

	const last_hours = list_minutes[list_minutes.length - 1] / 60;
	const last_speed = last_distance / 1000 / last_hours;
	const last_sprint = list_sprint[list_sprint.length - 1];

	// Last 3 sessions
	//const distance_3_session = list_meters.slice(Math.max(list_meters.length - 3, 0))
	const distance_3_session = get_last_nb_sessions(3, list_meters);

	const minutes_3_session = get_last_nb_sessions(3, list_minutes);
	const sprint_3_session = get_last_nb_sessions(3, list_sprint);
	const date_3_session = get_last_nb_sessions(3, list_date);
	const average_3_distance = average(distance_3_session);
	const average_3_sprint = average(sprint_3_session);
	const average_3_speed = average(dividevector(distance_3_session, minutes_3_session)) * 60 / 1000;
	const variation_3_distance = variation(last_distance, average_3_distance);
	const variation_3_speed = variation(last_speed, average_3_speed);
	const variation_3_sprint = variation(last_sprint, average_3_sprint);

	// Last 10 sessions
	const distance_10_session = get_last_nb_sessions(10, list_meters);

	const minutes_10_session = get_last_nb_sessions(10, list_minutes);
	const sprint_10_session = get_last_nb_sessions(10, list_sprint);
	const average_10_distance = average(distance_10_session);
	const average_10_sprint = average(sprint_10_session);
	const average_10_speed = average(dividevector(distance_10_session, minutes_10_session)) * 60 / 1000;
	const variation_10_distance = variation(last_distance, average_10_distance);
	const variation_10_speed = variation(last_speed, average_10_speed);
	const variation_10_sprint = variation(last_sprint, average_10_sprint);
	if ($$props.data_raw === void 0 && $$bindings.data_raw && data_raw !== void 0) $$bindings.data_raw(data_raw);
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);

	return `<div class="${"mb-20"}"><div class="${"mb-6 shadow "}"><img src="${"swimming2.jpg"}" alt="${"cycling"}" class="${"object-cover h-48 w-full shadow rounded-md"}"></div>


    <div class="${"flex justify-center mb-16 bg-blue-700 border-2 border-gray-300 shadow-lg rounded-t-md"}"><div class="${"font-sans Arial text-center p-2 text-3xl text-blue-700 font-semibold bg-blue-100 px-8 tracking-widest"}">Swimming Performance
        </div></div>

<div class="${"p-8"}"><div class="${"pb-8"}"><h1 class="${"text-blue-800  mb-8 "}">Last Sessions</h1>
     
        <div class="${"italic grid grid-cols-3 divide-x divide-gray-400"}">${each(get_last_nb_sessions(3, list_date), date => `<div class="${"text-center"}">${escape(date)}</div>`)}</div></div>

    <div class="${"divide-y mt-16"}"><h1 class="${"text-blue-800"}">Performance Tables</h1>
        <div class="${"m-12 container mx-auto"}"><table class="${"table-auto text-center container mx-auto"}"><caption class="${"font-semibold mb-6 mt-8 text-xl italic text-blue-700"}">Performance evolution of main metrics</caption>
            <thead class="${"border-gray-300 italic"}"><tr class="${"bg-blue-100 border border-gray-300"}"><th class="${"px-4 py-2"}">Metrics</th>
                <th class="${"px-4 py-2"}">Value</th>
                <th colspan="${"2"}" class="${"px-4 py-2 "}">vs. Last 3 sessions</th>
                <th colspan="${"2"}" class="${"px-4 py-2"}">vs. Last 10 sessions</th></tr></thead>
            <tbody><tr><td class="${"border px-4 py-2"}">Distance (m)</td>
                <td class="${"border px-4 py-2"}">${escape(last_distance)}</td>
                <td class="${"border px-4 py-2"}">${escape(Math.round(average_3_distance))}</td>
                <td class="${"border px-4 py-2"}">${escape(variation_3_distance)}%</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal(average_10_distance))}</td>
                <td class="${"border px-4 py-2"}">${escape(variation_10_distance)}%</td></tr>
                <tr class="${"bg-gray-100"}"><td class="${"border px-4 py-2"}">Speed (km/h)</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal(last_speed))}</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal(average_3_speed))}</td>
                <td class="${"border px-4 py-2"}">${escape(variation_3_speed)}%</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal(average_10_speed))}</td>
                <td class="${"border px-4 py-2"}">${escape(variation_10_speed)}%</td></tr>
                <tr><td class="${"border px-4 py-2"}">Sprints</td>
                <td class="${"border px-4 py-2"}">${escape(last_sprint)}</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal(average_3_sprint))}</td>
                <td class="${"border px-4 py-2"}">${escape(variation_3_sprint)}%</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal(average_10_sprint))}</td>
                <td class="${"border px-4 py-2"}">${escape(variation_10_sprint)}%</td></tr></tbody></table></div>



        <div class="${"m-12 container mx-auto"}"><table class="${"table-auto text-center container mx-auto"}"><caption class="${"font-semibold mb-6 mt-8 text-xl italic text-blue-700"}">Performance of last sessions</caption>           
            <thead class="${"italic border-gray-300"}"><tr class="${"bg-blue-100 border border-gray-300"}"><th class="${"px-4 py-2"}">Date</th>
                <th class="${"px-4 py-2"}">Distance (m)</th>
                <th class="${"px-4 py-2"}">Time (min)</th>
                <th class="${"px-4 py-2"}">Speed (km/h)</th>
                <th class="${"px-4 py-2"}">Sprints</th></tr></thead>

            <tbody>${each(distance_3_session, (distance, i) => `<tr><td class="${"border px-4 py-2"}">${escape(date_3_session[i])}</td>
                <td class="${"border px-4 py-2"}">${escape(distance)}</td>
                <td class="${"border px-4 py-2"}">${escape(minutes_3_session[i])}</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal(distance / 1000 / (minutes_3_session[i] / 60)))}</td>
                <td class="${"border px-4 py-2"}">${escape(sprint_3_session[i])}</td>
                

                </tr>`)}</tbody></table></div>
        <div class="${"mt-8"}"><h1 class="${"text-blue-800 mb-8 mt-16"}">Performance Chart</h1>
            ${validate_component(Swimming_charts, "Charts").$$render($$result, { data }, {}, {})}</div></div></div></div>`;
});

/* src/routes/sports/cycling/cycling-charts.svelte generated by Svelte v3.22.3 */

const Cycling_charts = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { data } = $$props;

	function createChart() {
		var ctx = document.getElementById("myChart");

		var myChart = new Chart$2(ctx,
		{
				type: "line",
				data,
				options: {
					scales: {
						yAxes: [
							{ id: "Meters covered", position: "left" },
							{
								id: "elevation",
								position: "right",
								gridLines: { display: false }
							}
						]
					}
				}
			});
	}

	onMount(createChart);
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	if ($$props.createChart === void 0 && $$bindings.createChart && createChart !== void 0) $$bindings.createChart(createChart);
	return `<canvas id="${"myChart"}" width="${"2"}" height="${"1"}"></canvas>`;
});

/* src/routes/sports/cycling/cycling.svelte generated by Svelte v3.22.3 */

function preload$6({ params, query }) {
	return this.fetch(`sports/cycling.json`).then(r => r.json()).then(data_raw => {
		return { data_raw };
	});
}

// Sort list of Json by dates (closest dates to last positions)
function custom_sort$2(a, b) {
	return new Date(a.date).getTime() - new Date(b.date).getTime();
}

// TODO: right now including last session, probably should not
// TODO: colors green or red for variations
function get_last_nb_sessions$1(int, list) {
	return list.slice(Math.max(list.length - int, 0));
}

function dividevector$1(a, b) {
	return a.map((e, i) => e / b[i]);
}

function variation$1(x_new, x_old) {
	const variation = Math.round((x_new - x_old) / x_old * 100);
	return variation;
}

function round_2_decimal$1(float) {
	return Math.round(float * 100) / 100;
}

const Cycling = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { data_raw } = $$props;
	data_raw = data_raw.sort(custom_sort$2);

	// Compute data for charts
	let list_meters = [];

	let list_date = [];
	let list_elevation = [];
	let list_minutes = [];

	data_raw.forEach(x => {
		list_meters.push(x.meters);
		list_date.push(x.date);
		list_elevation.push(x.elevation);
		list_minutes.push(x.minutes);
	});

	const data = {
		labels: list_date,
		datasets: [
			{
				label: "Meters covered",
				yAxisID: "Meters covered",
				data: list_meters,
				borderColor: "#3e95cd",
				fill: false
			},
			{
				label: "elevation",
				data: list_elevation,
				yAxisID: "elevation",
				borderColor: "#8e5ea2",
				fill: false
			}
		]
	};

	// TODO: verifiy ordering of dates and sessions
	const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;

	// Compute average distance, speed, elevation, 
	// Last session
	const last_distance = list_meters[list_meters.length - 1];

	const last_hours = list_minutes[list_minutes.length - 1] / 60;
	const last_speed = last_distance / 1000 / last_hours;
	const last_elevation = list_elevation[list_elevation.length - 1];

	// Last 3 sessions
	//const distance_3_session = list_meters.slice(Math.max(list_meters.length - 3, 0))
	const distance_3_session = get_last_nb_sessions$1(3, list_meters);

	const minutes_3_session = get_last_nb_sessions$1(3, list_minutes);
	const elevation_3_session = get_last_nb_sessions$1(3, list_elevation);
	const date_3_session = get_last_nb_sessions$1(3, list_date);
	const average_3_distance = average(distance_3_session);
	const average_3_elevation = average(elevation_3_session);
	const average_3_speed = average(dividevector$1(distance_3_session, minutes_3_session)) * 60 / 1000;
	const variation_3_distance = variation$1(last_distance, average_3_distance);
	const variation_3_speed = variation$1(last_speed, average_3_speed);
	const variation_3_elevation = variation$1(last_elevation, average_3_elevation);

	// Last 10 sessions
	const distance_10_session = get_last_nb_sessions$1(10, list_meters);

	const minutes_10_session = get_last_nb_sessions$1(10, list_minutes);
	const elevation_10_session = get_last_nb_sessions$1(10, list_elevation);
	const average_10_distance = average(distance_10_session);
	const average_10_elevation = average(elevation_10_session);
	const average_10_speed = average(dividevector$1(distance_10_session, minutes_10_session)) * 60 / 1000;
	const variation_10_distance = variation$1(last_distance, average_10_distance);
	const variation_10_speed = variation$1(last_speed, average_10_speed);
	const variation_10_elevation = variation$1(last_elevation, average_10_elevation);
	if ($$props.data_raw === void 0 && $$bindings.data_raw && data_raw !== void 0) $$bindings.data_raw(data_raw);
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);

	return `<div class="${"mb-20"}"><div class="${"mb-6 shadow "}"><img src="${"bycicle21.jpg"}" alt="${"cycling"}" class="${"object-cover h-48 w-full shadow rounded-md"}"></div>

    
    <div class="${"flex justify-center mb-16 bg-blue-700 border-2 border-gray-300 shadow-lg rounded-t-md"}"><div class="${"font-sans Arial text-center p-2 text-3xl text-blue-700 font-semibold bg-blue-100 px-8 tracking-widest"}">Cycling Performance
        </div></div>
<div class="${"p-8"}"><div class="${"pb-8"}"><h1 class="${"text-blue-800  mb-8 "}">Last Sessions</h1>
     
        <div class="${"italic grid grid-cols-3 divide-x divide-gray-400"}">${each(get_last_nb_sessions$1(3, list_date), date => `<div class="${"text-center"}">${escape(date)}</div>`)}</div></div>

    <div class="${"divide-y mt-16"}"><h1 class="${"text-blue-800"}">Performance Tables</h1>
        <div class="${"m-12 container mx-auto"}"><table class="${"table-auto text-center container mx-auto"}"><caption class="${"font-semibold mb-6 mt-8 text-xl italic text-blue-700"}">Performance evolution of main metrics</caption>
            <thead class="${"border-gray-300 italic"}"><tr class="${"bg-blue-100 border border-gray-300"}"><th class="${"px-4 py-2"}">Metrics</th>
                <th class="${"px-4 py-2"}">Value</th>
                <th colspan="${"2"}" class="${"px-4 py-2 "}">vs. Last 3 sessions</th>
                <th colspan="${"2"}" class="${"px-4 py-2"}">vs. Last 10 sessions</th></tr></thead>
            <tbody><tr><td class="${"border px-4 py-2"}">Distance (m)</td>
                <td class="${"border px-4 py-2"}">${escape(last_distance)}</td>
                <td class="${"border px-4 py-2"}">${escape(Math.round(average_3_distance))}</td>
                <td class="${"border px-4 py-2"}">${escape(variation_3_distance)}%</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal$1(average_10_distance))}</td>
                <td class="${"border px-4 py-2"}">${escape(variation_10_distance)}%</td></tr>
                <tr class="${""}"><td class="${"border px-4 py-2"}">Speed (km/h)</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal$1(last_speed))}</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal$1(average_3_speed))}</td>
                <td class="${"border px-4 py-2"}">${escape(variation_3_speed)}%</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal$1(average_10_speed))}</td>
                <td class="${"border px-4 py-2"}">${escape(variation_10_speed)}%</td></tr>
                <tr><td class="${"border px-4 py-2"}">Elevation</td>
                <td class="${"border px-4 py-2"}">${escape(last_elevation)}</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal$1(average_3_elevation))}</td>
                <td class="${"border px-4 py-2"}">${escape(variation_3_elevation)}%</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal$1(average_10_elevation))}</td>
                <td class="${"border px-4 py-2"}">${escape(variation_10_elevation)}%</td></tr></tbody></table></div>



        <div class="${"m-12 container mx-auto"}"><table class="${"table-auto text-center container mx-auto"}"><caption class="${"font-semibold mb-6 mt-8 text-xl italic text-blue-700"}">Performance of last sessions</caption>
            <thead class="${"italic border-gray-300"}"><tr class="${"bg-blue-100 border border-gray-300"}"><th class="${"px-4 py-2"}">Date</th>
                <th class="${"px-4 py-2"}">Distance (m)</th>
                <th class="${"px-4 py-2"}">Time (min)</th>
                <th class="${"px-4 py-2"}">Speed (km/h)</th>
                <th class="${"px-4 py-2"}">Elevation (m)</th></tr></thead>

            <tbody>${each(distance_3_session, (distance, i) => `<tr><td class="${"border px-4 py-2"}">${escape(date_3_session[i])}</td>
                <td class="${"border px-4 py-2"}">${escape(distance)}</td>
                <td class="${"border px-4 py-2"}">${escape(minutes_3_session[i])}</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal$1(distance / 1000 / (minutes_3_session[i] / 60)))}</td>
                <td class="${"border px-4 py-2"}">${escape(elevation_3_session[i])}</td>
                

                </tr>`)}</tbody></table></div>
        <div class="${"mt-8"}"><h1 class="${"text-blue-800 mb-8 mt-16"}">Performance Chart</h1>
            ${validate_component(Cycling_charts, "Charts").$$render($$result, { data }, {}, {})}</div></div></div></div>






`;
});

/* src/routes/sports/running/running-charts.svelte generated by Svelte v3.22.3 */

const Running_charts = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { data } = $$props;

	function createChart() {
		var ctx = document.getElementById("myChart");

		var myChart = new Chart$2(ctx,
		{
				type: "line",
				data,
				options: {
					scales: {
						yAxes: [
							{ id: "Meters covered", position: "left" },
							{
								id: "Elevation",
								position: "right",
								gridLines: { display: false }
							}
						]
					}
				}
			});
	}

	onMount(createChart);
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	if ($$props.createChart === void 0 && $$bindings.createChart && createChart !== void 0) $$bindings.createChart(createChart);
	return `<canvas id="${"myChart"}" width="${"2"}" height="${"1"}"></canvas>`;
});

/* src/routes/sports/running/running.svelte generated by Svelte v3.22.3 */

function preload$7({ params, query }) {
	return this.fetch(`sports/running.json`).then(r => r.json()).then(data_raw => {
		return { data_raw };
	});
}

// Sort list of Json by dates (closest dates to last positions)
function custom_sort$3(a, b) {
	return new Date(a.date).getTime() - new Date(b.date).getTime();
}

// TODO: right now including last session, probably should not
// TODO: liste des options bool avec les métriques qu'on veut observer (rythme cardiaque)
// TODO: colors green or red for variations
function get_last_nb_sessions$2(int, list) {
	return list.slice(Math.max(list.length - int, 0));
}

function dividevector$2(a, b) {
	return a.map((e, i) => e / b[i]);
}

function variation$2(x_new, x_old) {
	const variation = Math.round((x_new - x_old) / x_old * 100);
	return variation;
}

function round_2_decimal$2(float) {
	return Math.round(float * 100) / 100;
}

const Running = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { data_raw } = $$props;
	data_raw = data_raw.sort(custom_sort$3);

	// Compute data for charts
	let list_meters = [];

	let list_date = [];
	let list_elevation = [];
	let list_minutes = [];

	data_raw.forEach(x => {
		list_meters.push(x.meters);
		list_date.push(x.date);
		list_elevation.push(x.elevation);
		list_minutes.push(x.minutes);
	});

	const data = {
		labels: list_date,
		datasets: [
			{
				label: "Meters covered",
				yAxisID: "Meters covered",
				data: list_meters,
				borderColor: "#3e95cd",
				fill: false
			},
			{
				label: "Elevation",
				data: list_elevation,
				yAxisID: "Elevation",
				borderColor: "#8e5ea2",
				fill: false
			}
		]
	};

	// TODO: verifiy ordering of dates and sessions
	const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;

	// Compute average distance, speed, elevation, 
	// Last session
	const last_distance = list_meters[list_meters.length - 1];

	const last_hours = list_minutes[list_minutes.length - 1] / 60;
	const last_speed = last_distance / 1000 / last_hours;
	const last_elevation = list_elevation[list_elevation.length - 1];

	// Last 3 sessions
	//const distance_3_session = list_meters.slice(Math.max(list_meters.length - 3, 0))
	const distance_3_session = get_last_nb_sessions$2(3, list_meters);

	const minutes_3_session = get_last_nb_sessions$2(3, list_minutes);
	const elevation_3_session = get_last_nb_sessions$2(3, list_elevation);
	const date_3_session = get_last_nb_sessions$2(3, list_date);
	const average_3_distance = average(distance_3_session);
	const average_3_elevation = average(elevation_3_session);
	const average_3_speed = average(dividevector$2(distance_3_session, minutes_3_session)) * 60 / 1000;
	const variation_3_distance = variation$2(last_distance, average_3_distance);
	const variation_3_speed = variation$2(last_speed, average_3_speed);
	const variation_3_elevation = variation$2(last_elevation, average_3_elevation);

	// Last 10 sessions
	const distance_10_session = get_last_nb_sessions$2(10, list_meters);

	const minutes_10_session = get_last_nb_sessions$2(10, list_minutes);
	const elevation_10_session = get_last_nb_sessions$2(10, list_elevation);
	const average_10_distance = average(distance_10_session);
	const average_10_elevation = average(elevation_10_session);
	const average_10_speed = average(dividevector$2(distance_10_session, minutes_10_session)) * 60 / 1000;
	const variation_10_distance = variation$2(last_distance, average_10_distance);
	const variation_10_speed = variation$2(last_speed, average_10_speed);
	const variation_10_elevation = variation$2(last_elevation, average_10_elevation);
	if ($$props.data_raw === void 0 && $$bindings.data_raw && data_raw !== void 0) $$bindings.data_raw(data_raw);
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);

	return `<div class="${"mb-20"}"><div class="${"mb-6 shadow "}"><img src="${"running1.jpg"}" alt="${"cycling"}" class="${"object-cover h-48 w-full shadow rounded-md"}"></div>

    <div class="${"flex justify-center mb-16 bg-blue-700 border-2 border-gray-300 shadow-lg rounded-t-md"}"><div class="${"font-sans Arial text-center p-2 text-3xl text-blue-700 font-semibold bg-blue-100 px-8 tracking-widest"}">Running Performance
        </div></div>
    <div class="${"p-8"}"><div class="${"pb-8"}"><h1 class="${"text-blue-800  mb-8 "}">Last Sessions</h1>
     
        <div class="${"italic grid grid-cols-3 divide-x divide-gray-400"}">${each(get_last_nb_sessions$2(3, list_date), date => `<div class="${"text-center"}">${escape(date)}</div>`)}</div></div>


    <div class="${"divide-y mt-16"}"><h1 class="${"text-blue-800"}">Performance Tables</h1>
        <div class="${"m-12 container mx-auto"}"><table class="${"table-auto text-center container mx-auto"}"><caption class="${"font-semibold mb-6 mt-8 text-xl italic text-blue-700"}">Performance evolution of main metrics</caption>
            <thead class="${"border-gray-300 italic"}"><tr class="${"bg-blue-100 border border-gray-300"}"><th class="${"px-4 py-2"}">Metrics</th>
                <th class="${"px-4 py-2"}">Value</th>
                <th colspan="${"2"}" class="${"px-4 py-2 "}">vs. Last 3 sessions</th>
                <th colspan="${"2"}" class="${"px-4 py-2"}">vs. Last 10 sessions</th></tr></thead>
            <tbody><tr><td class="${"border px-4 py-2"}">Distance (m)</td>
                <td class="${"border px-4 py-2"}">${escape(last_distance)}</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal$2(average_3_distance))}</td>
                <td class="${"border px-4 py-2"}">${escape(variation_3_distance)}%</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal$2(average_10_distance))}</td>
                <td class="${"border px-4 py-2"}">${escape(variation_10_distance)}%</td></tr>
                <tr class="${"bg-gray-100"}"><td class="${"border px-4 py-2"}">Speed (km/h)</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal$2(last_speed))}</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal$2(average_3_speed))}</td>
                <td class="${"border px-4 py-2"}">${escape(variation_3_speed)}%</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal$2(average_10_speed))}</td>
                <td class="${"border px-4 py-2"}">${escape(variation_10_speed)}%</td></tr>
                <tr><td class="${"border px-4 py-2"}">Elevation</td>
                <td class="${"border px-4 py-2"}">${escape(last_elevation)}</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal$2(average_3_elevation))}</td>
                <td class="${"border px-4 py-2"}">${escape(variation_3_elevation)}%</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal$2(average_10_elevation))}</td>
                <td class="${"border px-4 py-2"}">${escape(variation_10_elevation)}%</td></tr></tbody></table></div>

        <div class="${"m-12 container mx-auto"}"><table class="${"table-auto text-center container mx-auto"}"><caption class="${"font-semibold mb-6 mt-8 text-xl italic text-blue-700"}">Performance of last sessions</caption>
            <thead class="${"italic border-gray-300"}"><tr class="${"bg-blue-100 border border-gray-300"}"><th class="${"px-4 py-2"}">Date</th>
                <th class="${"px-4 py-2"}">Distance (m)</th>
                <th class="${"px-4 py-2"}">Time (min)</th>
                <th class="${"px-4 py-2"}">Speed (km/h)</th>
                <th class="${"px-4 py-2"}">Elevation (m)</th></tr></thead>

            <tbody>${each(distance_3_session, (distance, i) => `<tr><td class="${"border px-4 py-2"}">${escape(date_3_session[i])}</td>
                <td class="${"border px-4 py-2"}">${escape(distance)}</td>
                <td class="${"border px-4 py-2"}">${escape(minutes_3_session[i])}</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal$2(distance / 1000 / (minutes_3_session[i] / 60)))}</td>
                <td class="${"border px-4 py-2"}">${escape(elevation_3_session[i])}</td>
                

                </tr>`)}</tbody></table></div>
        <div class="${"mt-8"}"><h1 class="${"text-blue-800 mb-8 mt-16"}">Performance Chart</h1>
            ${validate_component(Running_charts, "Charts").$$render($$result, { data }, {}, {})}</div></div></div></div>


`;
});

/* src/routes/sports/workout/workoutpushups-radar.svelte generated by Svelte v3.22.3 */

const Workoutpushups_radar = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { data_pushups_radar } = $$props;

	function createChart2() {
		var ctx = document.getElementById("myChart10");
		var myChart = new Chart$2(ctx, { type: "radar", data: data_pushups_radar });
	}

	onMount(createChart2);
	if ($$props.data_pushups_radar === void 0 && $$bindings.data_pushups_radar && data_pushups_radar !== void 0) $$bindings.data_pushups_radar(data_pushups_radar);
	if ($$props.createChart2 === void 0 && $$bindings.createChart2 && createChart2 !== void 0) $$bindings.createChart2(createChart2);
	return `<canvas id="${"myChart10"}" width="${"2"}" height="${"1"}"></canvas>`;
});

/* src/routes/sports/workout/workoutothers-radar.svelte generated by Svelte v3.22.3 */

const Workoutothers_radar = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { data_others_radar } = $$props;

	function createChart2() {
		var ctx = document.getElementById("myChart13");
		var myChart = new Chart$2(ctx, { type: "radar", data: data_others_radar });
	}

	onMount(createChart2);
	if ($$props.data_others_radar === void 0 && $$bindings.data_others_radar && data_others_radar !== void 0) $$bindings.data_others_radar(data_others_radar);
	if ($$props.createChart2 === void 0 && $$bindings.createChart2 && createChart2 !== void 0) $$bindings.createChart2(createChart2);
	return `<canvas id="${"myChart13"}" width="${"2"}" height="${"1"}"></canvas>`;
});

/* src/routes/sports/workout/workoutabdo-radar.svelte generated by Svelte v3.22.3 */

const Workoutabdo_radar = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { data_abdominal_radar } = $$props;

	function createChart2() {
		var ctx = document.getElementById("myChart14");

		var myChart = new Chart$2(ctx,
		{
				type: "radar",
				data: data_abdominal_radar
			});
	}

	onMount(createChart2);
	if ($$props.data_abdominal_radar === void 0 && $$bindings.data_abdominal_radar && data_abdominal_radar !== void 0) $$bindings.data_abdominal_radar(data_abdominal_radar);
	if ($$props.createChart2 === void 0 && $$bindings.createChart2 && createChart2 !== void 0) $$bindings.createChart2(createChart2);
	return `<canvas id="${"myChart14"}" width="${"2"}" height="${"1"}"></canvas>`;
});

/* src/routes/sports/workout/workoutlegs-radar.svelte generated by Svelte v3.22.3 */

const Workoutlegs_radar = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { data_leg_radar } = $$props;

	function createChart2() {
		var ctx = document.getElementById("myChart1");
		var myChart = new Chart$2(ctx, { type: "radar", data: data_leg_radar });
	}

	onMount(createChart2);
	if ($$props.data_leg_radar === void 0 && $$bindings.data_leg_radar && data_leg_radar !== void 0) $$bindings.data_leg_radar(data_leg_radar);
	if ($$props.createChart2 === void 0 && $$bindings.createChart2 && createChart2 !== void 0) $$bindings.createChart2(createChart2);
	return `<canvas id="${"myChart1"}" width="${"2"}" height="${"1"}"></canvas>`;
});

/* src/routes/sports/workout/workout-charts.svelte generated by Svelte v3.22.3 */

const Workout_charts = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { data } = $$props;

	function createChart() {
		var ctx = document.getElementById("myChart");

		var myChart = new Chart$2(ctx,
		{
				type: "bar",
				data,
				options: {
					scales: {
						yAxes: [
							{ id: "Meters covered", position: "left" },
							{
								id: "Sprint",
								position: "right",
								gridLines: { display: false }
							}
						]
					}
				}
			});
	}

	onMount(createChart);
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	if ($$props.createChart === void 0 && $$bindings.createChart && createChart !== void 0) $$bindings.createChart(createChart);
	return `<canvas id="${"myChart"}" width="${"2"}" height="${"1"}"></canvas>`;
});

/* src/routes/sports/workout/workout.svelte generated by Svelte v3.22.3 */

function preload$8({ params, query }) {
	return this.fetch(`sports/workout.json`).then(r => r.json()).then(data_raw => {
		return { data_raw };
	});
}

function custom_sort$4(a, b) {
	return new Date(a.date).getTime() - new Date(b.date).getTime();
}

function push_series(x, exercise) {
	if (exercise in x) {
		return x[exercise]["Series"] * x[exercise]["Number"];
	} else return 0;
}

function last_element(list) {
	return list[list.length - 1];
}

function average_perf(list1, list2) {
	let count = 0;
	let length = 0;

	for (let i in list1) {
		if (list2[i] > 0) {
			count += list1[i] / list2[i];
			length += 1;
		}
	}

	return count / length * 100;
}

function round_1_decimal(float) {
	return Math.round(float * 10) / 10;
}

function mean_list_notnull(list) {
	let count = 0;
	let length = 0;

	list.forEach(elem => {
		if (elem > 0) {
			count += elem;
			length += 1;
		}
	});

	return count / length;
}

function get_last_nb_sessions$3(int, list) {
	return list.slice(Math.max(list.length - int, 0));
}

const Workout = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { data_raw } = $$props;
	data_raw = data_raw.sort(custom_sort$4);

	const group_list = {
		"Legs": ["Squats", "Stair Climbs", "Bench Climbs", "Leg Press"],
		"Push-Ups": [
			"Push-Ups",
			"Lateral Push-Ups",
			"Jumping Push-Ups",
			"Close Push-Ups",
			"Raised Push-Ups"
		],
		"Abdominals": ["Abdominal", "Abdominal Lateral", "Core Abdominal"],
		"Others": ["Bench", "Biceps Weight", "Pull-Ups"]
	};

	// LEGS : 
	let squats = [];

	let stair_climbs = [];
	let bench_climbs = [];
	let leg_press = [];
	let list_date = [];

	data_raw.forEach(x => {
		list_date.push(x["date"]);
		squats.push(push_series(x, "Squats"));
		stair_climbs.push(push_series(x, "Stair Climbs"));
		bench_climbs.push(push_series(x, "Bench Climbs"));
		leg_press.push(push_series(x, "Leg Press"));
	});

	let last_legs = [
		last_element(squats),
		last_element(stair_climbs),
		last_element(bench_climbs),
		last_element(leg_press)
	];

	let mean_legs = [
		mean_list_notnull(squats),
		mean_list_notnull(stair_climbs),
		mean_list_notnull(bench_climbs),
		mean_list_notnull(leg_press)
	];

	const data_leg_radar = {
		labels: group_list["Legs"],
		datasets: [
			{ label: "Last session", data: last_legs },
			{
				label: "Average session",
				data: mean_legs
			}
		]
	};

	let leg_global_indicator = round_1_decimal(average_perf(last_legs, mean_legs));
	let pushups = [];
	let pushups_lateral = [];
	let pushups_jumping = [];
	let pushups_close = [];
	let raised_pushups = [];

	data_raw.forEach(x => {
		pushups.push(push_series(x, "Push-Ups"));
		pushups_lateral.push(push_series(x, "Lateral Push-Ups"));
		pushups_jumping.push(push_series(x, "Jumping Push-Ups"));
		pushups_close.push(push_series(x, "Close Push-Ups"));
		raised_pushups.push(push_series(x, "Raised Push-Ups"));
	});

	let last_pushups = [
		last_element(pushups),
		last_element(pushups_lateral),
		last_element(pushups_jumping),
		last_element(pushups_close),
		last_element(raised_pushups)
	];

	let mean_pushups = [
		mean_list_notnull(pushups),
		mean_list_notnull(pushups_lateral),
		mean_list_notnull(pushups_jumping),
		mean_list_notnull(pushups_close),
		mean_list_notnull(raised_pushups)
	];

	const data_pushups_radar = {
		labels: group_list["Push-Ups"],
		datasets: [
			{
				label: "Last session",
				data: last_pushups
			},
			{
				label: "Average session",
				data: mean_pushups
			}
		]
	};

	let pushups_global_indicator = round_1_decimal(average_perf(last_pushups, mean_pushups));
	let abdominal = [];
	let abdominal_lateral = [];
	let abdominal_core = [];

	data_raw.forEach(x => {
		abdominal.push(push_series(x, "Abdominal"));
		abdominal_lateral.push(push_series(x, "Abdominal Lateral"));
		abdominal_core.push(push_series(x, "Core Abdominal"));
	});

	let last_abdominal = [
		last_element(abdominal),
		last_element(abdominal_lateral),
		last_element(abdominal_core)
	];

	let mean_abdominal = [
		mean_list_notnull(abdominal),
		mean_list_notnull(abdominal_lateral),
		mean_list_notnull(abdominal_core)
	];

	const data_abdominal_radar = {
		labels: group_list["Abdominals"],
		datasets: [
			{
				label: "Last session",
				data: last_abdominal
			},
			{
				label: "Average session",
				data: mean_abdominal
			}
		]
	};

	let abdominal_global_indicator = round_1_decimal(average_perf(last_abdominal, mean_abdominal));

	// Others : 
	//['Bench', 'Biceps Weight', 'Pull-Ups']
	let bench = [];

	let biceps_weight = [];
	let pullups = [];

	data_raw.forEach(x => {
		bench.push(push_series(x, "Bench"));
		biceps_weight.push(push_series(x, "Biceps Weight"));
		pullups.push(push_series(x, "Pull-Ups"));
	});

	let last_others = [last_element(bench), last_element(biceps_weight), last_element(pullups)];

	let mean_others = [
		mean_list_notnull(bench),
		mean_list_notnull(biceps_weight),
		mean_list_notnull(pullups)
	];

	const data_others_radar = {
		labels: group_list["Others"],
		datasets: [
			{ label: "Last session", data: last_others },
			{
				label: "Average session",
				data: mean_others
			}
		]
	};

	let others_global_indicator = round_1_decimal(average_perf(last_others, mean_others));
	if ($$props.data_raw === void 0 && $$bindings.data_raw && data_raw !== void 0) $$bindings.data_raw(data_raw);
	if ($$props.data_leg_radar === void 0 && $$bindings.data_leg_radar && data_leg_radar !== void 0) $$bindings.data_leg_radar(data_leg_radar);
	if ($$props.data_pushups_radar === void 0 && $$bindings.data_pushups_radar && data_pushups_radar !== void 0) $$bindings.data_pushups_radar(data_pushups_radar);
	if ($$props.data_abdominal_radar === void 0 && $$bindings.data_abdominal_radar && data_abdominal_radar !== void 0) $$bindings.data_abdominal_radar(data_abdominal_radar);
	if ($$props.data_others_radar === void 0 && $$bindings.data_others_radar && data_others_radar !== void 0) $$bindings.data_others_radar(data_others_radar);

	return `<div class="${"mb-20"}"><div class="${"mb-6 shadow "}"><img src="${"workout2.jpg"}" alt="${"cycling"}" class="${"object-cover h-48 w-full shadow rounded-md"}"></div>
    <div class="${"flex justify-center mb-16 bg-blue-700 border-2 border-gray-300 shadow-lg rounded-t-md"}"><div class="${"font-sans Arial text-center p-2 text-3xl text-blue-700 font-semibold bg-blue-100 px-8 tracking-widest"}">Workout Performance
        </div></div>
<div class="${"p-8"}"><div class="${"pb-8"}"><h1 class="${"text-blue-800  mb-8 "}">Last Sessions</h1>
     
        <div class="${"italic grid grid-cols-3 divide-x divide-gray-400"}">${each(get_last_nb_sessions$3(3, list_date), date => `<div class="${"text-center"}">${escape(date)}</div>`)}</div></div>

    <div class="${"divide-y mt-16"}"><h1 class="${"text-blue-800"}">Legs
        </h1>

        <div class="${"m-12 container mx-auto"}"><table class="${"table-auto text-center container mx-auto"}"><caption class="${"font-semibold mb-6 mt-8 text-xl italic text-blue-700"}">Data for legs</caption>
            <thead class="${"border-gray-300 italic"}"><tr class="${"bg-blue-200 border border-gray-300"}"><th class="${"px-2 py-2"}"></th>
            <th colspan="${"2"}" class="${"px-2 py-2"}">Squats </th>
            <th colspan="${"2"}" class="${"px-2 py-2"}">Stair Climbs</th>
            <th colspan="${"2"}" class="${"px-2 py-2"}">Bench Climbs</th>
            <th colspan="${"2"}" class="${"px-2 py-2"}">Leg Press</th></tr>
            <tr class="${"bg-blue-100 border border-gray-300"}"><th class="${"px-2 py-2"}">Date</th>
            <th class="${"px-2 py-2"}">Series </th>
            <th class="${"px-2 py-2"}">Repet. </th>
            <th class="${"px-2 py-2"}">Series </th>
            <th class="${"px-2 py-2"}">Repet. </th>
            <th class="${"px-2 py-2"}">Series </th>
            <th class="${"px-2 py-2"}">Repet. </th>
            <th class="${"px-2 py-2"}">Series </th>
            <th class="${"px-2 py-2"}">Repet. </th></tr></thead>

        <tbody>${each(data_raw, data => `<tr><td class="${"border px-2 py-2"}">${escape(data["date"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Squats"]["Series"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Squats"]["Number"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Stair Climbs"]["Series"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Stair Climbs"]["Number"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Bench Climbs"]["Series"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Bench Climbs"]["Number"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Leg Press"]["Series"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Leg Press"]["Number"])}</td>
            </tr>`)}</tbody></table></div></div>

Your last session was ${escape(leg_global_indicator)} % of the average of the sessions where you worked on legs

    <div class="${"mt-8  m-12  "}"><caption class="${"text-center container mx-auto font-semibold mb-6 mt-8 text-xl italic text-blue-700"}">Performance Radar Chart</caption>
            ${validate_component(Workoutlegs_radar, "ChartsRadarLeg").$$render($$result, { data_leg_radar }, {}, {})}</div>

    <div class="${"divide-y mt-16"}"><h1 class="${"text-blue-800"}">Push-Ups
        </h1>

        <div class="${"m-12 container mx-auto"}"><table class="${"table-auto text-center container mx-auto"}"><caption class="${"font-semibold mb-6 mt-8 text-xl italic text-blue-700"}">Data for Push-ups</caption>
            <thead class="${"border-gray-300 italic"}"><tr class="${"bg-blue-200 border border-gray-300"}"><th class="${"px-2 py-2"}"></th>
            <th colspan="${"2"}" class="${"px-2 py-2"}">Regular </th>
            <th colspan="${"2"}" class="${"px-2 py-2"}">Lateral</th>
            <th colspan="${"2"}" class="${"px-2 py-2"}">Jumping</th>
            <th colspan="${"2"}" class="${"px-2 py-2"}">Close</th>
            <th colspan="${"2"}" class="${"px-2 py-2"}">Raised</th></tr>
            <tr class="${"bg-blue-100 border border-gray-300"}"><th class="${"px-2 py-2"}">Date</th>
            <th class="${"px-2 py-2"}">Series </th>
            <th class="${"px-2 py-2"}">Repet. </th>
            <th class="${"px-2 py-2"}">Series </th>
            <th class="${"px-2 py-2"}">Repet. </th>
            <th class="${"px-2 py-2"}">Series </th>
            <th class="${"px-2 py-2"}">Repet. </th>
            <th class="${"px-2 py-2"}">Series </th>
            <th class="${"px-2 py-2"}">Repet. </th>
            <th class="${"px-2 py-2"}">Series </th>
            <th class="${"px-2 py-2"}">Repet. </th></tr></thead>

        <tbody>${each(data_raw, data => `<tr><td class="${"border px-2 py-2"}">${escape(data["date"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Push-Ups"]["Series"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Push-Ups"]["Number"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Lateral Push-Ups"]["Series"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Lateral Push-Ups"]["Number"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Jumping Push-Ups"]["Series"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Jumping Push-Ups"]["Number"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Close Push-Ups"]["Series"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Close Push-Ups"]["Number"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Raised Push-Ups"]["Series"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Raised Push-Ups"]["Number"])}</td>
            </tr>`)}</tbody></table></div></div>

Your last session was ${escape(pushups_global_indicator)} % of the average of the sessions where you worked on legs

    <div class="${"mt-8  m-12  "}"><caption class="${"text-center container mx-auto font-semibold mb-6 mt-8 text-xl italic text-blue-700"}">Performance Radar Chart</caption>
${validate_component(Workoutpushups_radar, "ChartsRadarPushUps").$$render($$result, { data_pushups_radar }, {}, {})}</div>


    <div class="${"divide-y mt-16"}"><h1 class="${"text-blue-800"}">Abdominals
        </h1>

        <div class="${"m-12 container mx-auto"}"><table class="${"table-auto text-center container mx-auto"}"><caption class="${"font-semibold mb-6 mt-8 text-xl italic text-blue-700"}">Data for Abdominals</caption>
            <thead class="${"border-gray-300 italic"}"><tr class="${"bg-blue-200 border border-gray-300"}"><th class="${"px-2 py-2"}"></th>
            <th colspan="${"2"}" class="${"px-2 py-2"}">Regular </th>
            <th colspan="${"2"}" class="${"px-2 py-2"}">Lateral</th>
            <th colspan="${"2"}" class="${"px-2 py-2"}">Core</th></tr>
            <tr class="${"bg-blue-100 border border-gray-300"}"><th class="${"px-2 py-2"}">Date</th>
            <th class="${"px-2 py-2"}">Series </th>
            <th class="${"px-2 py-2"}">Repet. </th>
            <th class="${"px-2 py-2"}">Series </th>
            <th class="${"px-2 py-2"}">Repet. </th>
            <th class="${"px-2 py-2"}">Series </th>
            <th class="${"px-2 py-2"}">Repet. </th></tr></thead>

        <tbody>${each(data_raw, data => `<tr><td class="${"border px-2 py-2"}">${escape(data["date"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Abdominal"]["Series"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Abdominal"]["Number"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Abdominal Lateral"]["Series"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Abdominal Lateral"]["Number"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Core Abdominal"]["Series"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Core Abdominal"]["Number"])}</td>
            </tr>`)}</tbody></table></div></div>

Your last session was ${escape(abdominal_global_indicator)} % of the average of the sessions where you worked on abdominals

    <div class="${"mt-8  m-12  "}"><caption class="${"text-center container mx-auto font-semibold mb-6 mt-8 text-xl italic text-blue-700"}">Performance Radar Chart</caption>
${validate_component(Workoutabdo_radar, "ChartsRadarAbdominals").$$render($$result, { data_abdominal_radar }, {}, {})}</div>


    <div class="${"divide-y mt-16"}"><h1 class="${"text-blue-800"}">Others
        </h1>

        <div class="${"m-12 container mx-auto"}"><table class="${"table-auto text-center container mx-auto"}"><caption class="${"font-semibold mb-6 mt-8 text-xl italic text-blue-700"}">Data for Others</caption>
            <thead class="${"border-gray-300 italic"}"><tr class="${"bg-blue-200 border border-gray-300"}"><th class="${"px-2 py-2"}"></th>
            <th colspan="${"2"}" class="${"px-2 py-2"}">Bench </th>
            <th colspan="${"2"}" class="${"px-2 py-2"}">Biceps Weight</th>
            <th colspan="${"2"}" class="${"px-2 py-2"}">Pull-Ups</th></tr>
            <tr class="${"bg-blue-100 border border-gray-300"}"><th class="${"px-2 py-2"}">Date</th>
            <th class="${"px-2 py-2"}">Series </th>
            <th class="${"px-2 py-2"}">Repet. </th>
            <th class="${"px-2 py-2"}">Series </th>
            <th class="${"px-2 py-2"}">Repet. </th>
            <th class="${"px-2 py-2"}">Series </th>
            <th class="${"px-2 py-2"}">Repet. </th></tr></thead>

        <tbody>${each(data_raw, data => `<tr><td class="${"border px-2 py-2"}">${escape(data["date"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Bench"]["Series"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Bench"]["Number"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Biceps Weight"]["Series"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Biceps Weight"]["Number"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Pull-Ups"]["Series"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Pull-Ups"]["Number"])}</td>
            </tr>`)}</tbody></table></div></div>

    Your last session was ${escape(others_global_indicator)} % of the average of the sessions where you worked on others


    <div class="${"mt-8  m-12  "}"><caption class="${"text-center container mx-auto font-semibold mb-6 mt-8 text-xl italic text-blue-700"}">Performance Radar Chart</caption>
            ${validate_component(Workoutothers_radar, "ChartsRadarOthers").$$render($$result, { data_others_radar }, {}, {})}</div></div></div>`;
});

/* src/routes/about.svelte generated by Svelte v3.22.3 */

const About = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `<div class="${"mb-6 shadow "}"><img src="${"work_hader.jpg"}" alt="${"work harder sign"}" class="${"antialiased bg-gray-600 object-cover h-48 w-full shadow rounded-md opacity-75"}"></div>

<div class="${"p-8"}">
    <div class="${"flex justify-center mb-8"}"><h1 class="${"text-4xl text-blue-700 font-semibold tracking-widest"}">About Us</h1></div>

    <div class="${"md:flex justify-center"}"><div class="${"m-2 rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased"}" style="${"\n        background-image: url('https://images.unsplash.com/photo-1500856056008-859079534e9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80');\n        background-repeat: no-repat;\n        background-size: cover;\n        "}"><div class="${"w-1/3"}"><img class="${"rounded-lg shadow-lg antialiased"}" src="${"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}"></div>
            <div class="${"md:w-2/3 w-full px-3 flex flex-row flex-wrap"}"><div class="${"w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0"}"><div class="${"text-2xl text-white leading-tight"}">Martin</div>
                <div class="${"text-normal text-gray-300 hover:text-gray-400 cursor-pointer"}"><span class="${"border-b border-dashed border-gray-500 pb-1"}">Death Star Supervisor</span></div>
                <div class="${"text-sm text-gray-300 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0"}">Last Seen: <b>3 days ago</b></div></div></div></div>  
        <div class="${"m-2 rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased"}" style="${"\n        background-image: url('https://images.unsplash.com/photo-1500856056008-859079534e9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80');\n        background-repeat: no-repat;\n        background-size: cover;\n        "}"><div class="${"w-1/3"}"><img class="${"rounded-lg shadow-lg antialiased"}" src="${"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}"></div>
            <div class="${"md:w-2/3 w-full px-3 flex flex-row flex-wrap"}"><div class="${"w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0"}"><div class="${"text-2xl text-white leading-tight"}">Valentin</div>
                <div class="${"text-normal text-gray-300 hover:text-gray-400 cursor-pointer"}"><span class="${"border-b border-dashed border-gray-500 pb-1"}">Chaos Master</span></div>
                <div class="${"text-sm text-gray-300 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0"}">Last Seen: <b>2 days ago</b></div></div></div></div></div>

    <div class="${"mt-16 mb-8 text-center text-2xl text-blue-800"}">Do you have questions?</div>


        
    <form id="${"contact-me"}" class="${"w-full mx-auto max-w-3xl bg-white shadow p-8 text-gray-700 "}"><h2 class="${"w-full my-2 text-3xl font-bold leading-tight my-5 text-blue-800 tracking-widest"}">Contact form</h2>
        
        <div class="${"flex flex-wrap mb-6"}"><div class="${"relative w-full appearance-none label-floating"}"><input class="${"tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"}" id="${"name"}" type="${"text"}" placeholder="${"Your name"}" required>
                <label for="${"name"}" class="${"absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"}">Your name
                </label></div></div>
        
        <div class="${"flex flex-wrap mb-6"}"><div class="${"relative w-full appearance-none label-floating"}"><input class="${"tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"}" id="${"name"}" type="${"text"}" placeholder="${"Your email"}" required>
                <label for="${"name"}" class="${"absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"}">Your email
                </label></div></div>
        
        <div class="${"flex flex-wrap mb-6"}"><div class="${"relative w-full appearance-none label-floating"}"><textarea class="${"autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"}" id="${"message"}" type="${"text"}" placeholder="${"Message..."}"></textarea>
                    <label for="${"message"}" class="${"absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"}">Message...
                </label></div></div>

        <div class="${""}"><button class="${"w-full shadow bg-blue-700 hover:bg-blue-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"}" type="${"submit"}">Send
            </button></div></form></div>`;
});

/* src/components/Nav.svelte generated by Svelte v3.22.3 */

const css$1 = {
	code: "ul.svelte-ieco35{margin:0;padding:0}ul.svelte-ieco35::after{content:'';display:block;clear:both}li.svelte-ieco35{display:block;float:left}[aria-current].svelte-ieco35{position:relative;display:inline-block}[aria-current].svelte-ieco35::after{position:absolute;content:'';width:calc(100% - 1em);height:2px;background-color:rgb(255,62,0);display:block;bottom:-1px}a.svelte-ieco35{text-decoration:none;padding:1em 0.5em;display:block}[aria-current].svelte-ieco35::after{position:absolute;content:'';width:calc(100% - 1em);height:2px;background-color:orange;display:block;bottom:-1px}",
	map: "{\"version\":3,\"file\":\"Nav.svelte\",\"sources\":[\"Nav.svelte\"],\"sourcesContent\":[\"<script>\\n\\texport let segment;\\n</script>\\n\\n<style>\\n\\t/* nav {\\n\\t\\tborder-bottom: 1px solid rgba(255,62,0,0.1);\\n\\t\\tfont-weight: 300;\\n\\t\\tpadding: 0 1em;\\n\\t} */\\n\\n\\tul {\\n\\t\\tmargin: 0;\\n\\t\\tpadding: 0;\\n\\t}\\n\\n\\t/* clearfix */\\n\\t ul::after {\\n\\t\\tcontent: '';\\n\\t\\tdisplay: block;\\n\\t\\tclear: both;\\n\\t}\\n\\n\\tli {\\n\\t\\tdisplay: block;\\n\\t\\tfloat: left;\\n\\t}\\n\\n\\t[aria-current] {\\n\\t\\tposition: relative;\\n\\t\\tdisplay: inline-block;\\n\\t}\\n\\n\\t[aria-current]::after {\\n\\t\\tposition: absolute;\\n\\t\\tcontent: '';\\n\\t\\twidth: calc(100% - 1em);\\n\\t\\theight: 2px;\\n\\t\\tbackground-color: rgb(255,62,0);\\n\\t\\tdisplay: block;\\n\\t\\tbottom: -1px;\\n\\t}\\n\\n\\ta {\\n\\t\\ttext-decoration: none;\\n\\t\\tpadding: 1em 0.5em;\\n\\t\\tdisplay: block; \\n\\t} \\n\\n\\t[aria-current]::after {\\n\\t\\tposition: absolute;\\n\\t\\tcontent: '';\\n\\t\\twidth: calc(100% - 1em);\\n\\t\\theight: 2px;\\n\\t\\tbackground-color: orange;\\n\\t\\tdisplay: block;\\n\\t\\tbottom: -1px;\\n\\t}\\n</style>\\n\\n<nav>\\n<div class=\\\"flex justify-between items-center py-0 bg-blue-800\\\">\\n  <div class=\\\"flex-shrink-0 ml-10 cursor-pointer\\\">\\n    <i class=\\\"fas fa-drafting-compass fa-2x text-orange-500\\\"></i>\\n    <span class=\\\"ml-1 text-3xl text-blue-200 font-semibold\\\">SportAssistant</span>\\n  </div>\\n  <i class=\\\"fas fa-bars fa-2x visible md:invisible mr-10 md:mr-0 text-blue-200 cursor-pointer\\\"></i>\\n  <ul class=\\\"hidden md:flex overflow-x-hidden mr-10 font-semibold\\\">\\n    <li class=\\\"mr-6 p-1\\\">\\n      <a class=\\\"text-white hover:text-blue-300\\\" aria-current='{segment === undefined ? \\\"page\\\" : undefined}' href=\\\".\\\">Home</a>\\n    </li>\\n    <li class=\\\"mr-6 p-1\\\">\\n      <a class=\\\"text-white hover:text-blue-300\\\" aria-current='{segment === \\\"new_session\\\" ? \\\"page\\\" : undefined}' href=\\\"new_session\\\">New Session</a>\\n    </li>\\n    <li class=\\\"mr-6 p-1\\\">\\n      <a class=\\\"text-white hover:text-blue-300\\\" aria-current='{segment === 'performance' ? \\\"page\\\" : undefined}' href=\\\"performance\\\">Performance</a>\\n    </li>\\n    <li class=\\\"mr-6 p-1\\\">\\n      <a class=\\\"text-white hover:text-blue-300\\\" aria-current='{segment === \\\"about\\\" ? \\\"page\\\" : undefined}' href=\\\"about\\\">About</a>\\n    </li>\\n    <li class=\\\"mr-6 p-1\\\">\\n      <a class=\\\"text-white hover:text-blue-300\\\" aria-current='{segment === \\\"tutorial\\\" ? \\\"page\\\" : undefined}' href=\\\"tutorial\\\">Tutorial</a>\\n    </li>\\n  </ul>\\n</div>\\n\\n<!-- \\n\\n\\t<ul>\\n\\t\\t<li><a aria-current='{segment === undefined ? \\\"page\\\" : undefined}' href='.'>home</a></li>\\n\\t\\t<li><a aria-current='{segment === \\\"new_session\\\" ? \\\"page\\\" : undefined}' href='new_session'>new session</a></li>\\n\\t\\t<li><a aria-current='{segment === \\\"performance\\\" ? \\\"page\\\" : undefined}' href='performance'>performance</a></li>\\n\\t\\t<li><a aria-current='{segment === \\\"about\\\" ? \\\"page\\\" : undefined}' href='about'>about</a></li>\\n\\t\\t<li><a aria-current='{segment === \\\"tutorial\\\" ? \\\"page\\\" : undefined}' href='tutorial'>tutorial</a></li>\\n\\t</ul> -->\\n</nav>\\n\"],\"names\":[],\"mappings\":\"AAWC,EAAE,cAAC,CAAC,AACH,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,AACX,CAAC,AAGA,gBAAE,OAAO,AAAC,CAAC,AACX,OAAO,CAAE,EAAE,CACX,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,AACZ,CAAC,AAED,EAAE,cAAC,CAAC,AACH,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,AACZ,CAAC,AAED,CAAC,YAAY,CAAC,cAAC,CAAC,AACf,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,YAAY,AACtB,CAAC,AAED,CAAC,YAAY,eAAC,OAAO,AAAC,CAAC,AACtB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CACvB,MAAM,CAAE,GAAG,CACX,gBAAgB,CAAE,IAAI,GAAG,CAAC,EAAE,CAAC,CAAC,CAAC,CAC/B,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,IAAI,AACb,CAAC,AAED,CAAC,cAAC,CAAC,AACF,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,GAAG,CAAC,KAAK,CAClB,OAAO,CAAE,KAAK,AACf,CAAC,AAED,CAAC,YAAY,eAAC,OAAO,AAAC,CAAC,AACtB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CACvB,MAAM,CAAE,GAAG,CACX,gBAAgB,CAAE,MAAM,CACxB,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,IAAI,AACb,CAAC\"}"
};

const Nav = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { segment } = $$props;
	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);
	$$result.css.add(css$1);

	return `<nav><div class="${"flex justify-between items-center py-0 bg-blue-800"}"><div class="${"flex-shrink-0 ml-10 cursor-pointer"}"><i class="${"fas fa-drafting-compass fa-2x text-orange-500"}"></i>
    <span class="${"ml-1 text-3xl text-blue-200 font-semibold"}">SportAssistant</span></div>
  <i class="${"fas fa-bars fa-2x visible md:invisible mr-10 md:mr-0 text-blue-200 cursor-pointer"}"></i>
  <ul class="${"hidden md:flex overflow-x-hidden mr-10 font-semibold svelte-ieco35"}"><li class="${"mr-6 p-1 svelte-ieco35"}"><a class="${"text-white hover:text-blue-300 svelte-ieco35"}"${add_attribute("aria-current", segment === undefined ? "page" : undefined, 0)} href="${"."}">Home</a></li>
    <li class="${"mr-6 p-1 svelte-ieco35"}"><a class="${"text-white hover:text-blue-300 svelte-ieco35"}"${add_attribute("aria-current", segment === "new_session" ? "page" : undefined, 0)} href="${"new_session"}">New Session</a></li>
    <li class="${"mr-6 p-1 svelte-ieco35"}"><a class="${"text-white hover:text-blue-300 svelte-ieco35"}"${add_attribute("aria-current", segment === "performance" ? "page" : undefined, 0)} href="${"performance"}">Performance</a></li>
    <li class="${"mr-6 p-1 svelte-ieco35"}"><a class="${"text-white hover:text-blue-300 svelte-ieco35"}"${add_attribute("aria-current", segment === "about" ? "page" : undefined, 0)} href="${"about"}">About</a></li>
    <li class="${"mr-6 p-1 svelte-ieco35"}"><a class="${"text-white hover:text-blue-300 svelte-ieco35"}"${add_attribute("aria-current", segment === "tutorial" ? "page" : undefined, 0)} href="${"tutorial"}">Tutorial</a></li></ul></div>

</nav>`;
});

/* src/routes/_layout.svelte generated by Svelte v3.22.3 */

const css$2 = {
	code: "main.svelte-1qqf5bf{position:relative;max-width:72em;background-color:#ebf8ff;padding:0;margin:0 auto;box-sizing:border-box}",
	map: "{\"version\":3,\"file\":\"_layout.svelte\",\"sources\":[\"_layout.svelte\"],\"sourcesContent\":[\"<script>\\n\\timport Nav from '../components/Nav.svelte';\\n\\n\\texport let segment;\\n</script>\\n\\n<style>\\n\\tmain {\\n\\t\\tposition: relative;\\n\\t\\tmax-width: 72em;\\n\\t\\tbackground-color: #ebf8ff;\\n\\t\\t/* padding: 2em; */\\n\\t\\tpadding: 0;\\n\\t\\tmargin: 0 auto;\\n\\t\\tbox-sizing: border-box;\\n\\t}\\n</style>\\n\\n<Nav {segment}/>\\n <div style=\\\"background-image: url('background4.jpg');    background-size:     cover;             \\n    background-repeat:   no-repeat;\\n    background-position: center center;  \\\"> \\n\\n<main>\\n\\t<slot></slot>\\n</main>\\n\\n</div>\"],\"names\":[],\"mappings\":\"AAOC,IAAI,eAAC,CAAC,AACL,QAAQ,CAAE,QAAQ,CAClB,SAAS,CAAE,IAAI,CACf,gBAAgB,CAAE,OAAO,CAEzB,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,UAAU,CAAE,UAAU,AACvB,CAAC\"}"
};

const Layout = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { segment } = $$props;
	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);
	$$result.css.add(css$2);

	return `${validate_component(Nav, "Nav").$$render($$result, { segment }, {}, {})}
 <div style="${"background-image: url('background4.jpg');    background-size:     cover;             \n    background-repeat:   no-repeat;\n    background-position: center center;  "}"><main class="${"svelte-1qqf5bf"}">${$$slots.default ? $$slots.default({}) : ``}</main></div>`;
});

/* src/routes/_error.svelte generated by Svelte v3.22.3 */

const css$3 = {
	code: "h1.svelte-8od9u6,p.svelte-8od9u6{margin:0 auto}h1.svelte-8od9u6{font-size:2.8em;font-weight:700;margin:0 0 0.5em 0}p.svelte-8od9u6{margin:1em auto}@media(min-width: 480px){h1.svelte-8od9u6{font-size:4em}}",
	map: "{\"version\":3,\"file\":\"_error.svelte\",\"sources\":[\"_error.svelte\"],\"sourcesContent\":[\"<script>\\n\\texport let status;\\n\\texport let error;\\n\\n\\tconst dev = \\\"development\\\" === 'development';\\n</script>\\n\\n<style>\\n\\th1, p {\\n\\t\\tmargin: 0 auto;\\n\\t}\\n\\n\\th1 {\\n\\t\\tfont-size: 2.8em;\\n\\t\\tfont-weight: 700;\\n\\t\\tmargin: 0 0 0.5em 0;\\n\\t}\\n\\n\\tp {\\n\\t\\tmargin: 1em auto;\\n\\t}\\n\\n\\t@media (min-width: 480px) {\\n\\t\\th1 {\\n\\t\\t\\tfont-size: 4em;\\n\\t\\t}\\n\\t}\\n</style>\\n\\n<svelte:head>\\n\\t<title>{status}</title>\\n</svelte:head>\\n\\n<h1>{status}</h1>\\n\\n<p>{error.message}</p>\\n\\n{#if dev && error.stack}\\n\\t<pre>{error.stack}</pre>\\n{/if}\\n\"],\"names\":[],\"mappings\":\"AAQC,gBAAE,CAAE,CAAC,cAAC,CAAC,AACN,MAAM,CAAE,CAAC,CAAC,IAAI,AACf,CAAC,AAED,EAAE,cAAC,CAAC,AACH,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,AACpB,CAAC,AAED,CAAC,cAAC,CAAC,AACF,MAAM,CAAE,GAAG,CAAC,IAAI,AACjB,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAC1B,EAAE,cAAC,CAAC,AACH,SAAS,CAAE,GAAG,AACf,CAAC,AACF,CAAC\"}"
};

const Error$1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { status } = $$props;
	let { error } = $$props;
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	$$result.css.add(css$3);

	return `${($$result.head += `${($$result.title = `<title>${escape(status)}</title>`, "")}`, "")}

<h1 class="${"svelte-8od9u6"}">${escape(status)}</h1>

<p class="${"svelte-8od9u6"}">${escape(error.message)}</p>

${ error.stack
	? `<pre>${escape(error.stack)}</pre>`
	: ``}`;
});

// This file is generated by Sapper — do not edit it!

const manifest = {
	server_routes: [
		{
			// new_sessions/swimming/index.json.js
			pattern: /^\/new_sessions\/swimming\.json$/,
			handlers: route_0,
			params: () => ({})
		},

		{
			// new_sessions/cycling/index.json.js
			pattern: /^\/new_sessions\/cycling\.json$/,
			handlers: route_1,
			params: () => ({})
		},

		{
			// new_sessions/running/index.json.js
			pattern: /^\/new_sessions\/running\.json$/,
			handlers: route_2,
			params: () => ({})
		},

		{
			// new_sessions/workout/index.json.js
			pattern: /^\/new_sessions\/workout\.json$/,
			handlers: route_3,
			params: () => ({})
		},

		{
			// sports/swimming/index.json.js
			pattern: /^\/sports\/swimming\.json$/,
			handlers: route_4,
			params: () => ({})
		},

		{
			// sports/swimming/swimming-data.js
			pattern: /^\/sports\/swimming\/swimming-data\/?$/,
			handlers: route_5,
			params: () => ({})
		},

		{
			// sports/cycling/index.json.js
			pattern: /^\/sports\/cycling\.json$/,
			handlers: route_6,
			params: () => ({})
		},

		{
			// sports/cycling/cycling-data.js
			pattern: /^\/sports\/cycling\/cycling-data\/?$/,
			handlers: route_7,
			params: () => ({})
		},

		{
			// sports/running/index.json.js
			pattern: /^\/sports\/running\.json$/,
			handlers: route_8,
			params: () => ({})
		},

		{
			// sports/workout/index.json.js
			pattern: /^\/sports\/workout\.json$/,
			handlers: route_9,
			params: () => ({})
		},

		{
			// sports/workout/workout-data.js
			pattern: /^\/sports\/workout\/workout-data\/?$/,
			handlers: route_10,
			params: () => ({})
		},

		{
			// sport.js
			pattern: /^\/sport\/?$/,
			handlers: route_11,
			params: () => ({})
		},

		{
			// home/index.json.js
			pattern: /^\/home\.json$/,
			handlers: route_12,
			params: () => ({})
		}
	],

	pages: [
		{
			// index.svelte
			pattern: /^\/$/,
			parts: [
				{ name: "index", file: "index.svelte", component: Routes, preload: preload }
			]
		},

		{
			// frappe-charts.svelte
			pattern: /^\/frappe-charts\/?$/,
			parts: [
				{ name: "frappe$45charts", file: "frappe-charts.svelte", component: Frappe_charts }
			]
		},

		{
			// new_sessions/swimming/new_swimming.svelte
			pattern: /^\/new_sessions\/swimming\/new_swimming\/?$/,
			parts: [
				null,
				null,
				{ name: "new_sessions_swimming_new_swimming", file: "new_sessions/swimming/new_swimming.svelte", component: New_swimming, preload: preload$1 }
			]
		},

		{
			// new_sessions/cycling/new_cycling.svelte
			pattern: /^\/new_sessions\/cycling\/new_cycling\/?$/,
			parts: [
				null,
				null,
				{ name: "new_sessions_cycling_new_cycling", file: "new_sessions/cycling/new_cycling.svelte", component: New_cycling, preload: preload$2 }
			]
		},

		{
			// new_sessions/running/new_running.svelte
			pattern: /^\/new_sessions\/running\/new_running\/?$/,
			parts: [
				null,
				null,
				{ name: "new_sessions_running_new_running", file: "new_sessions/running/new_running.svelte", component: New_running, preload: preload$3 }
			]
		},

		{
			// new_sessions/workout/new_workout.svelte
			pattern: /^\/new_sessions\/workout\/new_workout\/?$/,
			parts: [
				null,
				null,
				{ name: "new_sessions_workout_new_workout", file: "new_sessions/workout/new_workout.svelte", component: New_workout, preload: preload$4 }
			]
		},

		{
			// new_session.svelte
			pattern: /^\/new_session\/?$/,
			parts: [
				{ name: "new_session", file: "new_session.svelte", component: New_session }
			]
		},

		{
			// performance.svelte
			pattern: /^\/performance\/?$/,
			parts: [
				{ name: "performance", file: "performance.svelte", component: Performance }
			]
		},

		{
			// chartest.svelte
			pattern: /^\/chartest\/?$/,
			parts: [
				{ name: "chartest", file: "chartest.svelte", component: Chartest }
			]
		},

		{
			// tutorial.svelte
			pattern: /^\/tutorial\/?$/,
			parts: [
				{ name: "tutorial", file: "tutorial.svelte", component: Tutorial }
			]
		},

		{
			// sports/swimming/swimming-charts.svelte
			pattern: /^\/sports\/swimming\/swimming-charts\/?$/,
			parts: [
				null,
				null,
				{ name: "sports_swimming_swimming$45charts", file: "sports/swimming/swimming-charts.svelte", component: Swimming_charts }
			]
		},

		{
			// sports/swimming/swimming.svelte
			pattern: /^\/sports\/swimming\/swimming\/?$/,
			parts: [
				null,
				null,
				{ name: "sports_swimming_swimming", file: "sports/swimming/swimming.svelte", component: Swimming, preload: preload$5 }
			]
		},

		{
			// sports/cycling/cycling-charts.svelte
			pattern: /^\/sports\/cycling\/cycling-charts\/?$/,
			parts: [
				null,
				null,
				{ name: "sports_cycling_cycling$45charts", file: "sports/cycling/cycling-charts.svelte", component: Cycling_charts }
			]
		},

		{
			// sports/cycling/cycling.svelte
			pattern: /^\/sports\/cycling\/cycling\/?$/,
			parts: [
				null,
				null,
				{ name: "sports_cycling_cycling", file: "sports/cycling/cycling.svelte", component: Cycling, preload: preload$6 }
			]
		},

		{
			// sports/running/running-charts.svelte
			pattern: /^\/sports\/running\/running-charts\/?$/,
			parts: [
				null,
				null,
				{ name: "sports_running_running$45charts", file: "sports/running/running-charts.svelte", component: Running_charts }
			]
		},

		{
			// sports/running/running.svelte
			pattern: /^\/sports\/running\/running\/?$/,
			parts: [
				null,
				null,
				{ name: "sports_running_running", file: "sports/running/running.svelte", component: Running, preload: preload$7 }
			]
		},

		{
			// sports/workout/workoutpushups-radar.svelte
			pattern: /^\/sports\/workout\/workoutpushups-radar\/?$/,
			parts: [
				null,
				null,
				{ name: "sports_workout_workoutpushups$45radar", file: "sports/workout/workoutpushups-radar.svelte", component: Workoutpushups_radar }
			]
		},

		{
			// sports/workout/workoutothers-radar.svelte
			pattern: /^\/sports\/workout\/workoutothers-radar\/?$/,
			parts: [
				null,
				null,
				{ name: "sports_workout_workoutothers$45radar", file: "sports/workout/workoutothers-radar.svelte", component: Workoutothers_radar }
			]
		},

		{
			// sports/workout/workoutabdo-radar.svelte
			pattern: /^\/sports\/workout\/workoutabdo-radar\/?$/,
			parts: [
				null,
				null,
				{ name: "sports_workout_workoutabdo$45radar", file: "sports/workout/workoutabdo-radar.svelte", component: Workoutabdo_radar }
			]
		},

		{
			// sports/workout/workoutlegs-radar.svelte
			pattern: /^\/sports\/workout\/workoutlegs-radar\/?$/,
			parts: [
				null,
				null,
				{ name: "sports_workout_workoutlegs$45radar", file: "sports/workout/workoutlegs-radar.svelte", component: Workoutlegs_radar }
			]
		},

		{
			// sports/workout/workout-charts.svelte
			pattern: /^\/sports\/workout\/workout-charts\/?$/,
			parts: [
				null,
				null,
				{ name: "sports_workout_workout$45charts", file: "sports/workout/workout-charts.svelte", component: Workout_charts }
			]
		},

		{
			// sports/workout/workout.svelte
			pattern: /^\/sports\/workout\/workout\/?$/,
			parts: [
				null,
				null,
				{ name: "sports_workout_workout", file: "sports/workout/workout.svelte", component: Workout, preload: preload$8 }
			]
		},

		{
			// about.svelte
			pattern: /^\/about\/?$/,
			parts: [
				{ name: "about", file: "about.svelte", component: About }
			]
		},

		{
			// chart.svelte
			pattern: /^\/chart\/?$/,
			parts: [
				{ name: "chart", file: "chart.svelte", component: Chart }
			]
		},

		{
			// Box.svelte
			pattern: /^\/Box\/?$/,
			parts: [
				{ name: "Box", file: "Box.svelte", component: Box }
			]
		}
	],

	root: Layout,
	root_preload: () => {},
	error: Error$1
};

const build_dir = "__sapper__/dev";

const src_dir = "src";

const subscriber_queue = [];
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */
function writable(value, start = noop) {
    let stop;
    const subscribers = [];
    function set(new_value) {
        if (safe_not_equal(value, new_value)) {
            value = new_value;
            if (stop) { // store is ready
                const run_queue = !subscriber_queue.length;
                for (let i = 0; i < subscribers.length; i += 1) {
                    const s = subscribers[i];
                    s[1]();
                    subscriber_queue.push(s, value);
                }
                if (run_queue) {
                    for (let i = 0; i < subscriber_queue.length; i += 2) {
                        subscriber_queue[i][0](subscriber_queue[i + 1]);
                    }
                    subscriber_queue.length = 0;
                }
            }
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe(run, invalidate = noop) {
        const subscriber = [run, invalidate];
        subscribers.push(subscriber);
        if (subscribers.length === 1) {
            stop = start(set) || noop;
        }
        run(value);
        return () => {
            const index = subscribers.indexOf(subscriber);
            if (index !== -1) {
                subscribers.splice(index, 1);
            }
            if (subscribers.length === 0) {
                stop();
                stop = null;
            }
        };
    }
    return { set, update, subscribe };
}

const CONTEXT_KEY = {};

/* src/node_modules/@sapper/internal/App.svelte generated by Svelte v3.22.3 */

const App = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { stores } = $$props;
	let { error } = $$props;
	let { status } = $$props;
	let { segments } = $$props;
	let { level0 } = $$props;
	let { level1 = null } = $$props;
	let { notify } = $$props;
	afterUpdate(notify);
	setContext(CONTEXT_KEY, stores);
	if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0) $$bindings.stores(stores);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.segments === void 0 && $$bindings.segments && segments !== void 0) $$bindings.segments(segments);
	if ($$props.level0 === void 0 && $$bindings.level0 && level0 !== void 0) $$bindings.level0(level0);
	if ($$props.level1 === void 0 && $$bindings.level1 && level1 !== void 0) $$bindings.level1(level1);
	if ($$props.notify === void 0 && $$bindings.notify && notify !== void 0) $$bindings.notify(notify);

	return `


${validate_component(Layout, "Layout").$$render($$result, Object.assign({ segment: segments[0] }, level0.props), {}, {
		default: () => `${error
		? `${validate_component(Error$1, "Error").$$render($$result, { error, status }, {}, {})}`
		: `${validate_component(level1.component || missing_component, "svelte:component").$$render($$result, Object.assign(level1.props), {}, {})}`}`
	})}`;
});

/**
 * @param typeMap [Object] Map of MIME type -> Array[extensions]
 * @param ...
 */
function Mime() {
  this._types = Object.create(null);
  this._extensions = Object.create(null);

  for (var i = 0; i < arguments.length; i++) {
    this.define(arguments[i]);
  }

  this.define = this.define.bind(this);
  this.getType = this.getType.bind(this);
  this.getExtension = this.getExtension.bind(this);
}

/**
 * Define mimetype -> extension mappings.  Each key is a mime-type that maps
 * to an array of extensions associated with the type.  The first extension is
 * used as the default extension for the type.
 *
 * e.g. mime.define({'audio/ogg', ['oga', 'ogg', 'spx']});
 *
 * If a type declares an extension that has already been defined, an error will
 * be thrown.  To suppress this error and force the extension to be associated
 * with the new type, pass `force`=true.  Alternatively, you may prefix the
 * extension with "*" to map the type to extension, without mapping the
 * extension to the type.
 *
 * e.g. mime.define({'audio/wav', ['wav']}, {'audio/x-wav', ['*wav']});
 *
 *
 * @param map (Object) type definitions
 * @param force (Boolean) if true, force overriding of existing definitions
 */
Mime.prototype.define = function(typeMap, force) {
  for (var type in typeMap) {
    var extensions = typeMap[type].map(function(t) {return t.toLowerCase()});
    type = type.toLowerCase();

    for (var i = 0; i < extensions.length; i++) {
      var ext = extensions[i];

      // '*' prefix = not the preferred type for this extension.  So fixup the
      // extension, and skip it.
      if (ext[0] == '*') {
        continue;
      }

      if (!force && (ext in this._types)) {
        throw new Error(
          'Attempt to change mapping for "' + ext +
          '" extension from "' + this._types[ext] + '" to "' + type +
          '". Pass `force=true` to allow this, otherwise remove "' + ext +
          '" from the list of extensions for "' + type + '".'
        );
      }

      this._types[ext] = type;
    }

    // Use first extension as default
    if (force || !this._extensions[type]) {
      var ext = extensions[0];
      this._extensions[type] = (ext[0] != '*') ? ext : ext.substr(1);
    }
  }
};

/**
 * Lookup a mime type based on extension
 */
Mime.prototype.getType = function(path) {
  path = String(path);
  var last = path.replace(/^.*[/\\]/, '').toLowerCase();
  var ext = last.replace(/^.*\./, '').toLowerCase();

  var hasPath = last.length < path.length;
  var hasDot = ext.length < last.length - 1;

  return (hasDot || !hasPath) && this._types[ext] || null;
};

/**
 * Return file extension associated with a mime type
 */
Mime.prototype.getExtension = function(type) {
  type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
  return type && this._extensions[type.toLowerCase()] || null;
};

var Mime_1 = Mime;

var standard = {"application/andrew-inset":["ez"],"application/applixware":["aw"],"application/atom+xml":["atom"],"application/atomcat+xml":["atomcat"],"application/atomsvc+xml":["atomsvc"],"application/bdoc":["bdoc"],"application/ccxml+xml":["ccxml"],"application/cdmi-capability":["cdmia"],"application/cdmi-container":["cdmic"],"application/cdmi-domain":["cdmid"],"application/cdmi-object":["cdmio"],"application/cdmi-queue":["cdmiq"],"application/cu-seeme":["cu"],"application/dash+xml":["mpd"],"application/davmount+xml":["davmount"],"application/docbook+xml":["dbk"],"application/dssc+der":["dssc"],"application/dssc+xml":["xdssc"],"application/ecmascript":["ecma","es"],"application/emma+xml":["emma"],"application/epub+zip":["epub"],"application/exi":["exi"],"application/font-tdpfr":["pfr"],"application/geo+json":["geojson"],"application/gml+xml":["gml"],"application/gpx+xml":["gpx"],"application/gxf":["gxf"],"application/gzip":["gz"],"application/hjson":["hjson"],"application/hyperstudio":["stk"],"application/inkml+xml":["ink","inkml"],"application/ipfix":["ipfix"],"application/java-archive":["jar","war","ear"],"application/java-serialized-object":["ser"],"application/java-vm":["class"],"application/javascript":["js","mjs"],"application/json":["json","map"],"application/json5":["json5"],"application/jsonml+json":["jsonml"],"application/ld+json":["jsonld"],"application/lost+xml":["lostxml"],"application/mac-binhex40":["hqx"],"application/mac-compactpro":["cpt"],"application/mads+xml":["mads"],"application/manifest+json":["webmanifest"],"application/marc":["mrc"],"application/marcxml+xml":["mrcx"],"application/mathematica":["ma","nb","mb"],"application/mathml+xml":["mathml"],"application/mbox":["mbox"],"application/mediaservercontrol+xml":["mscml"],"application/metalink+xml":["metalink"],"application/metalink4+xml":["meta4"],"application/mets+xml":["mets"],"application/mods+xml":["mods"],"application/mp21":["m21","mp21"],"application/mp4":["mp4s","m4p"],"application/msword":["doc","dot"],"application/mxf":["mxf"],"application/n-quads":["nq"],"application/n-triples":["nt"],"application/octet-stream":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"],"application/oda":["oda"],"application/oebps-package+xml":["opf"],"application/ogg":["ogx"],"application/omdoc+xml":["omdoc"],"application/onenote":["onetoc","onetoc2","onetmp","onepkg"],"application/oxps":["oxps"],"application/patch-ops-error+xml":["xer"],"application/pdf":["pdf"],"application/pgp-encrypted":["pgp"],"application/pgp-signature":["asc","sig"],"application/pics-rules":["prf"],"application/pkcs10":["p10"],"application/pkcs7-mime":["p7m","p7c"],"application/pkcs7-signature":["p7s"],"application/pkcs8":["p8"],"application/pkix-attr-cert":["ac"],"application/pkix-cert":["cer"],"application/pkix-crl":["crl"],"application/pkix-pkipath":["pkipath"],"application/pkixcmp":["pki"],"application/pls+xml":["pls"],"application/postscript":["ai","eps","ps"],"application/pskc+xml":["pskcxml"],"application/raml+yaml":["raml"],"application/rdf+xml":["rdf","owl"],"application/reginfo+xml":["rif"],"application/relax-ng-compact-syntax":["rnc"],"application/resource-lists+xml":["rl"],"application/resource-lists-diff+xml":["rld"],"application/rls-services+xml":["rs"],"application/rpki-ghostbusters":["gbr"],"application/rpki-manifest":["mft"],"application/rpki-roa":["roa"],"application/rsd+xml":["rsd"],"application/rss+xml":["rss"],"application/rtf":["rtf"],"application/sbml+xml":["sbml"],"application/scvp-cv-request":["scq"],"application/scvp-cv-response":["scs"],"application/scvp-vp-request":["spq"],"application/scvp-vp-response":["spp"],"application/sdp":["sdp"],"application/set-payment-initiation":["setpay"],"application/set-registration-initiation":["setreg"],"application/shf+xml":["shf"],"application/sieve":["siv","sieve"],"application/smil+xml":["smi","smil"],"application/sparql-query":["rq"],"application/sparql-results+xml":["srx"],"application/srgs":["gram"],"application/srgs+xml":["grxml"],"application/sru+xml":["sru"],"application/ssdl+xml":["ssdl"],"application/ssml+xml":["ssml"],"application/tei+xml":["tei","teicorpus"],"application/thraud+xml":["tfi"],"application/timestamped-data":["tsd"],"application/voicexml+xml":["vxml"],"application/wasm":["wasm"],"application/widget":["wgt"],"application/winhlp":["hlp"],"application/wsdl+xml":["wsdl"],"application/wspolicy+xml":["wspolicy"],"application/xaml+xml":["xaml"],"application/xcap-diff+xml":["xdf"],"application/xenc+xml":["xenc"],"application/xhtml+xml":["xhtml","xht"],"application/xml":["xml","xsl","xsd","rng"],"application/xml-dtd":["dtd"],"application/xop+xml":["xop"],"application/xproc+xml":["xpl"],"application/xslt+xml":["xslt"],"application/xspf+xml":["xspf"],"application/xv+xml":["mxml","xhvml","xvml","xvm"],"application/yang":["yang"],"application/yin+xml":["yin"],"application/zip":["zip"],"audio/3gpp":["*3gpp"],"audio/adpcm":["adp"],"audio/basic":["au","snd"],"audio/midi":["mid","midi","kar","rmi"],"audio/mp3":["*mp3"],"audio/mp4":["m4a","mp4a"],"audio/mpeg":["mpga","mp2","mp2a","mp3","m2a","m3a"],"audio/ogg":["oga","ogg","spx"],"audio/s3m":["s3m"],"audio/silk":["sil"],"audio/wav":["wav"],"audio/wave":["*wav"],"audio/webm":["weba"],"audio/xm":["xm"],"font/collection":["ttc"],"font/otf":["otf"],"font/ttf":["ttf"],"font/woff":["woff"],"font/woff2":["woff2"],"image/aces":["exr"],"image/apng":["apng"],"image/bmp":["bmp"],"image/cgm":["cgm"],"image/dicom-rle":["drle"],"image/emf":["emf"],"image/fits":["fits"],"image/g3fax":["g3"],"image/gif":["gif"],"image/heic":["heic"],"image/heic-sequence":["heics"],"image/heif":["heif"],"image/heif-sequence":["heifs"],"image/ief":["ief"],"image/jls":["jls"],"image/jp2":["jp2","jpg2"],"image/jpeg":["jpeg","jpg","jpe"],"image/jpm":["jpm"],"image/jpx":["jpx","jpf"],"image/jxr":["jxr"],"image/ktx":["ktx"],"image/png":["png"],"image/sgi":["sgi"],"image/svg+xml":["svg","svgz"],"image/t38":["t38"],"image/tiff":["tif","tiff"],"image/tiff-fx":["tfx"],"image/webp":["webp"],"image/wmf":["wmf"],"message/disposition-notification":["disposition-notification"],"message/global":["u8msg"],"message/global-delivery-status":["u8dsn"],"message/global-disposition-notification":["u8mdn"],"message/global-headers":["u8hdr"],"message/rfc822":["eml","mime"],"model/3mf":["3mf"],"model/gltf+json":["gltf"],"model/gltf-binary":["glb"],"model/iges":["igs","iges"],"model/mesh":["msh","mesh","silo"],"model/stl":["stl"],"model/vrml":["wrl","vrml"],"model/x3d+binary":["*x3db","x3dbz"],"model/x3d+fastinfoset":["x3db"],"model/x3d+vrml":["*x3dv","x3dvz"],"model/x3d+xml":["x3d","x3dz"],"model/x3d-vrml":["x3dv"],"text/cache-manifest":["appcache","manifest"],"text/calendar":["ics","ifb"],"text/coffeescript":["coffee","litcoffee"],"text/css":["css"],"text/csv":["csv"],"text/html":["html","htm","shtml"],"text/jade":["jade"],"text/jsx":["jsx"],"text/less":["less"],"text/markdown":["markdown","md"],"text/mathml":["mml"],"text/mdx":["mdx"],"text/n3":["n3"],"text/plain":["txt","text","conf","def","list","log","in","ini"],"text/richtext":["rtx"],"text/rtf":["*rtf"],"text/sgml":["sgml","sgm"],"text/shex":["shex"],"text/slim":["slim","slm"],"text/stylus":["stylus","styl"],"text/tab-separated-values":["tsv"],"text/troff":["t","tr","roff","man","me","ms"],"text/turtle":["ttl"],"text/uri-list":["uri","uris","urls"],"text/vcard":["vcard"],"text/vtt":["vtt"],"text/xml":["*xml"],"text/yaml":["yaml","yml"],"video/3gpp":["3gp","3gpp"],"video/3gpp2":["3g2"],"video/h261":["h261"],"video/h263":["h263"],"video/h264":["h264"],"video/jpeg":["jpgv"],"video/jpm":["*jpm","jpgm"],"video/mj2":["mj2","mjp2"],"video/mp2t":["ts"],"video/mp4":["mp4","mp4v","mpg4"],"video/mpeg":["mpeg","mpg","mpe","m1v","m2v"],"video/ogg":["ogv"],"video/quicktime":["qt","mov"],"video/webm":["webm"]};

var lite = new Mime_1(standard);

function get_server_route_handler(routes) {
	async function handle_route(route, req, res, next) {
		req.params = route.params(route.pattern.exec(req.path));

		const method = req.method.toLowerCase();
		// 'delete' cannot be exported from a module because it is a keyword,
		// so check for 'del' instead
		const method_export = method === 'delete' ? 'del' : method;
		const handle_method = route.handlers[method_export];
		if (handle_method) {
			if (process.env.SAPPER_EXPORT) {
				const { write, end, setHeader } = res;
				const chunks = [];
				const headers = {};

				// intercept data so that it can be exported
				res.write = function(chunk) {
					chunks.push(Buffer.from(chunk));
					write.apply(res, arguments);
				};

				res.setHeader = function(name, value) {
					headers[name.toLowerCase()] = value;
					setHeader.apply(res, arguments);
				};

				res.end = function(chunk) {
					if (chunk) chunks.push(Buffer.from(chunk));
					end.apply(res, arguments);

					process.send({
						__sapper__: true,
						event: 'file',
						url: req.url,
						method: req.method,
						status: res.statusCode,
						type: headers['content-type'],
						body: Buffer.concat(chunks).toString()
					});
				};
			}

			const handle_next = (err) => {
				if (err) {
					res.statusCode = 500;
					res.end(err.message);
				} else {
					process.nextTick(next);
				}
			};

			try {
				await handle_method(req, res, handle_next);
			} catch (err) {
				console.error(err);
				handle_next(err);
			}
		} else {
			// no matching handler for method
			process.nextTick(next);
		}
	}

	return function find_route(req, res, next) {
		for (const route of routes) {
			if (route.pattern.test(req.path)) {
				handle_route(route, req, res, next);
				return;
			}
		}

		next();
	};
}

/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 * @public
 */

var parse_1 = parse;
var serialize_1 = serialize;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var encode = encodeURIComponent;
var pairSplitRegExp = /; */;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {};
  var opt = options || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim();
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + opt.expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}

var cookie = {
	parse: parse_1,
	serialize: serialize_1
};

var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$';
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped$1 = {
    '<': '\\u003C',
    '>': '\\u003E',
    '/': '\\u002F',
    '\\': '\\\\',
    '\b': '\\b',
    '\f': '\\f',
    '\n': '\\n',
    '\r': '\\r',
    '\t': '\\t',
    '\0': '\\0',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029'
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function devalue(value) {
    var counts = new Map();
    function walk(thing) {
        if (typeof thing === 'function') {
            throw new Error("Cannot stringify a function");
        }
        if (counts.has(thing)) {
            counts.set(thing, counts.get(thing) + 1);
            return;
        }
        counts.set(thing, 1);
        if (!isPrimitive(thing)) {
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                case 'Date':
                case 'RegExp':
                    return;
                case 'Array':
                    thing.forEach(walk);
                    break;
                case 'Set':
                case 'Map':
                    Array.from(thing).forEach(walk);
                    break;
                default:
                    var proto = Object.getPrototypeOf(thing);
                    if (proto !== Object.prototype &&
                        proto !== null &&
                        Object.getOwnPropertyNames(proto).sort().join('\0') !== objectProtoOwnPropertyNames) {
                        throw new Error("Cannot stringify arbitrary non-POJOs");
                    }
                    if (Object.getOwnPropertySymbols(thing).length > 0) {
                        throw new Error("Cannot stringify POJOs with symbolic keys");
                    }
                    Object.keys(thing).forEach(function (key) { return walk(thing[key]); });
            }
        }
    }
    walk(value);
    var names = new Map();
    Array.from(counts)
        .filter(function (entry) { return entry[1] > 1; })
        .sort(function (a, b) { return b[1] - a[1]; })
        .forEach(function (entry, i) {
        names.set(entry[0], getName(i));
    });
    function stringify(thing) {
        if (names.has(thing)) {
            return names.get(thing);
        }
        if (isPrimitive(thing)) {
            return stringifyPrimitive(thing);
        }
        var type = getType(thing);
        switch (type) {
            case 'Number':
            case 'String':
            case 'Boolean':
                return "Object(" + stringify(thing.valueOf()) + ")";
            case 'RegExp':
                return thing.toString();
            case 'Date':
                return "new Date(" + thing.getTime() + ")";
            case 'Array':
                var members = thing.map(function (v, i) { return i in thing ? stringify(v) : ''; });
                var tail = thing.length === 0 || (thing.length - 1 in thing) ? '' : ',';
                return "[" + members.join(',') + tail + "]";
            case 'Set':
            case 'Map':
                return "new " + type + "([" + Array.from(thing).map(stringify).join(',') + "])";
            default:
                var obj = "{" + Object.keys(thing).map(function (key) { return safeKey(key) + ":" + stringify(thing[key]); }).join(',') + "}";
                var proto = Object.getPrototypeOf(thing);
                if (proto === null) {
                    return Object.keys(thing).length > 0
                        ? "Object.assign(Object.create(null)," + obj + ")"
                        : "Object.create(null)";
                }
                return obj;
        }
    }
    var str = stringify(value);
    if (names.size) {
        var params_1 = [];
        var statements_1 = [];
        var values_1 = [];
        names.forEach(function (name, thing) {
            params_1.push(name);
            if (isPrimitive(thing)) {
                values_1.push(stringifyPrimitive(thing));
                return;
            }
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                    values_1.push("Object(" + stringify(thing.valueOf()) + ")");
                    break;
                case 'RegExp':
                    values_1.push(thing.toString());
                    break;
                case 'Date':
                    values_1.push("new Date(" + thing.getTime() + ")");
                    break;
                case 'Array':
                    values_1.push("Array(" + thing.length + ")");
                    thing.forEach(function (v, i) {
                        statements_1.push(name + "[" + i + "]=" + stringify(v));
                    });
                    break;
                case 'Set':
                    values_1.push("new Set");
                    statements_1.push(name + "." + Array.from(thing).map(function (v) { return "add(" + stringify(v) + ")"; }).join('.'));
                    break;
                case 'Map':
                    values_1.push("new Map");
                    statements_1.push(name + "." + Array.from(thing).map(function (_a) {
                        var k = _a[0], v = _a[1];
                        return "set(" + stringify(k) + ", " + stringify(v) + ")";
                    }).join('.'));
                    break;
                default:
                    values_1.push(Object.getPrototypeOf(thing) === null ? 'Object.create(null)' : '{}');
                    Object.keys(thing).forEach(function (key) {
                        statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
                    });
            }
        });
        statements_1.push("return " + str);
        return "(function(" + params_1.join(',') + "){" + statements_1.join(';') + "}(" + values_1.join(',') + "))";
    }
    else {
        return str;
    }
}
function getName(num) {
    var name = '';
    do {
        name = chars[num % chars.length] + name;
        num = ~~(num / chars.length) - 1;
    } while (num >= 0);
    return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
    return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
    if (typeof thing === 'string')
        return stringifyString(thing);
    if (thing === void 0)
        return 'void 0';
    if (thing === 0 && 1 / thing < 0)
        return '-0';
    var str = String(thing);
    if (typeof thing === 'number')
        return str.replace(/^(-)?0\./, '$1.');
    return str;
}
function getType(thing) {
    return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
    return escaped$1[c] || c;
}
function escapeUnsafeChars(str) {
    return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
    var result = '"';
    for (var i = 0; i < str.length; i += 1) {
        var char = str.charAt(i);
        var code = char.charCodeAt(0);
        if (char === '"') {
            result += '\\"';
        }
        else if (char in escaped$1) {
            result += escaped$1[char];
        }
        else if (code >= 0xd800 && code <= 0xdfff) {
            var next = str.charCodeAt(i + 1);
            // If this is the beginning of a [high, low] surrogate pair,
            // add the next two characters, otherwise escape
            if (code <= 0xdbff && (next >= 0xdc00 && next <= 0xdfff)) {
                result += char + str[++i];
            }
            else {
                result += "\\u" + code.toString(16).toUpperCase();
            }
        }
        else {
            result += char;
        }
    }
    result += '"';
    return result;
}

// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = Stream.Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = require('encoding').convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = Stream.PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof Stream) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof Stream) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof Stream)) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof Stream && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof Stream) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http.STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = Url.parse;
const format_url = Url.format;

const streamDestructionSupported = 'destroy' in Stream.Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof Stream.Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = Stream.PassThrough;
const resolve_url = Url.resolve;

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch(url, opts) {

	// allow custom promise
	if (!fetch.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch.Promise;

	// wrap http.request into fetch
	return new fetch.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https : http).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof Stream.Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib.Z_SYNC_FLUSH,
				finishFlush: zlib.Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib.createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib.createInflate());
					} else {
						body = body.pipe(zlib.createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof zlib.createBrotliDecompress === 'function') {
				body = body.pipe(zlib.createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch.Promise = global.Promise;

function get_page_handler(
	manifest,
	session_getter
) {
	const get_build_info =  () => JSON.parse(fs.readFileSync(path.join(build_dir, 'build.json'), 'utf-8'))
		;

	const template =  () => read_template(src_dir)
		;

	const has_service_worker = fs.existsSync(path.join(build_dir, 'service-worker.js'));

	const { server_routes, pages } = manifest;
	const error_route = manifest.error;

	function bail(req, res, err) {
		console.error(err);

		const message =  escape_html(err.message) ;

		res.statusCode = 500;
		res.end(`<pre>${message}</pre>`);
	}

	function handle_error(req, res, statusCode, error) {
		handle_page({
			pattern: null,
			parts: [
				{ name: null, component: error_route }
			]
		}, req, res, statusCode, error || new Error('Unknown error in preload function'));
	}

	async function handle_page(page, req, res, status = 200, error = null) {
		const is_service_worker_index = req.path === '/service-worker-index.html';
		const build_info




 = get_build_info();

		res.setHeader('Content-Type', 'text/html');
		res.setHeader('Cache-Control',  'no-cache' );

		// preload main.js and current route
		// TODO detect other stuff we can preload? images, CSS, fonts?
		let preloaded_chunks = Array.isArray(build_info.assets.main) ? build_info.assets.main : [build_info.assets.main];
		if (!error && !is_service_worker_index) {
			page.parts.forEach(part => {
				if (!part) return;

				// using concat because it could be a string or an array. thanks webpack!
				preloaded_chunks = preloaded_chunks.concat(build_info.assets[part.name]);
			});
		}

		if (build_info.bundler === 'rollup') {
			// TODO add dependencies and CSS
			const link = preloaded_chunks
				.filter(file => file && !file.match(/\.map$/))
				.map(file => `<${req.baseUrl}/client/${file}>;rel="modulepreload"`)
				.join(', ');

			res.setHeader('Link', link);
		} else {
			const link = preloaded_chunks
				.filter(file => file && !file.match(/\.map$/))
				.map((file) => {
					const as = /\.css$/.test(file) ? 'style' : 'script';
					return `<${req.baseUrl}/client/${file}>;rel="preload";as="${as}"`;
				})
				.join(', ');

			res.setHeader('Link', link);
		}

		const session = session_getter(req, res);

		let redirect;
		let preload_error;

		const preload_context = {
			redirect: (statusCode, location) => {
				if (redirect && (redirect.statusCode !== statusCode || redirect.location !== location)) {
					throw new Error(`Conflicting redirects`);
				}
				location = location.replace(/^\//g, ''); // leading slash (only)
				redirect = { statusCode, location };
			},
			error: (statusCode, message) => {
				preload_error = { statusCode, message };
			},
			fetch: (url, opts) => {
				const parsed = new Url.URL(url, `http://127.0.0.1:${process.env.PORT}${req.baseUrl ? req.baseUrl + '/' :''}`);

				if (opts) {
					opts = Object.assign({}, opts);

					const include_cookies = (
						opts.credentials === 'include' ||
						opts.credentials === 'same-origin' && parsed.origin === `http://127.0.0.1:${process.env.PORT}`
					);

					if (include_cookies) {
						opts.headers = Object.assign({}, opts.headers);

						const cookies = Object.assign(
							{},
							cookie.parse(req.headers.cookie || ''),
							cookie.parse(opts.headers.cookie || '')
						);

						const set_cookie = res.getHeader('Set-Cookie');
						(Array.isArray(set_cookie) ? set_cookie : [set_cookie]).forEach(str => {
							const match = /([^=]+)=([^;]+)/.exec(str);
							if (match) cookies[match[1]] = match[2];
						});

						const str = Object.keys(cookies)
							.map(key => `${key}=${cookies[key]}`)
							.join('; ');

						opts.headers.cookie = str;
					}
				}

				return fetch(parsed.href, opts);
			}
		};

		let preloaded;
		let match;
		let params;

		try {
			const root_preloaded = manifest.root_preload
				? manifest.root_preload.call(preload_context, {
					host: req.headers.host,
					path: req.path,
					query: req.query,
					params: {}
				}, session)
				: {};

			match = error ? null : page.pattern.exec(req.path);


			let toPreload = [root_preloaded];
			if (!is_service_worker_index) {
				toPreload = toPreload.concat(page.parts.map(part => {
					if (!part) return null;

					// the deepest level is used below, to initialise the store
					params = part.params ? part.params(match) : {};

					return part.preload
						? part.preload.call(preload_context, {
							host: req.headers.host,
							path: req.path,
							query: req.query,
							params
						}, session)
						: {};
				}));
			}

			preloaded = await Promise.all(toPreload);
		} catch (err) {
			if (error) {
				return bail(req, res, err)
			}

			preload_error = { statusCode: 500, message: err };
			preloaded = []; // appease TypeScript
		}

		try {
			if (redirect) {
				const location = Url.resolve((req.baseUrl || '') + '/', redirect.location);

				res.statusCode = redirect.statusCode;
				res.setHeader('Location', location);
				res.end();

				return;
			}

			if (preload_error) {
				handle_error(req, res, preload_error.statusCode, preload_error.message);
				return;
			}

			const segments = req.path.split('/').filter(Boolean);

			// TODO make this less confusing
			const layout_segments = [segments[0]];
			let l = 1;

			page.parts.forEach((part, i) => {
				layout_segments[l] = segments[i + 1];
				if (!part) return null;
				l++;
			});

			const props = {
				stores: {
					page: {
						subscribe: writable({
							host: req.headers.host,
							path: req.path,
							query: req.query,
							params
						}).subscribe
					},
					preloading: {
						subscribe: writable(null).subscribe
					},
					session: writable(session)
				},
				segments: layout_segments,
				status: error ? status : 200,
				error: error ? error instanceof Error ? error : { message: error } : null,
				level0: {
					props: preloaded[0]
				},
				level1: {
					segment: segments[0],
					props: {}
				}
			};

			if (!is_service_worker_index) {
				let l = 1;
				for (let i = 0; i < page.parts.length; i += 1) {
					const part = page.parts[i];
					if (!part) continue;

					props[`level${l++}`] = {
						component: part.component,
						props: preloaded[i + 1] || {},
						segment: segments[i]
					};
				}
			}

			const { html, head, css } = App.render(props);

			const serialized = {
				preloaded: `[${preloaded.map(data => try_serialize(data)).join(',')}]`,
				session: session && try_serialize(session, err => {
					throw new Error(`Failed to serialize session data: ${err.message}`);
				}),
				error: error && try_serialize(props.error)
			};

			let script = `__SAPPER__={${[
				error && `error:${serialized.error},status:${status}`,
				`baseUrl:"${req.baseUrl}"`,
				serialized.preloaded && `preloaded:${serialized.preloaded}`,
				serialized.session && `session:${serialized.session}`
			].filter(Boolean).join(',')}};`;

			if (has_service_worker) {
				script += `if('serviceWorker' in navigator)navigator.serviceWorker.register('${req.baseUrl}/service-worker.js');`;
			}

			const file = [].concat(build_info.assets.main).filter(file => file && /\.js$/.test(file))[0];
			const main = `${req.baseUrl}/client/${file}`;

			if (build_info.bundler === 'rollup') {
				if (build_info.legacy_assets) {
					const legacy_main = `${req.baseUrl}/client/legacy/${build_info.legacy_assets.main}`;
					script += `(function(){try{eval("async function x(){}");var main="${main}"}catch(e){main="${legacy_main}"};var s=document.createElement("script");try{new Function("if(0)import('')")();s.src=main;s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main",main);}document.head.appendChild(s);}());`;
				} else {
					script += `var s=document.createElement("script");try{new Function("if(0)import('')")();s.src="${main}";s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main","${main}")}document.head.appendChild(s)`;
				}
			} else {
				script += `</script><script src="${main}">`;
			}

			let styles;

			// TODO make this consistent across apps
			// TODO embed build_info in placeholder.ts
			if (build_info.css && build_info.css.main) {
				const css_chunks = new Set();
				if (build_info.css.main) css_chunks.add(build_info.css.main);
				page.parts.forEach(part => {
					if (!part) return;
					const css_chunks_for_part = build_info.css.chunks[part.file];

					if (css_chunks_for_part) {
						css_chunks_for_part.forEach(file => {
							css_chunks.add(file);
						});
					}
				});

				styles = Array.from(css_chunks)
					.map(href => `<link rel="stylesheet" href="client/${href}">`)
					.join('');
			} else {
				styles = (css && css.code ? `<style>${css.code}</style>` : '');
			}

			// users can set a CSP nonce using res.locals.nonce
			const nonce_attr = (res.locals && res.locals.nonce) ? ` nonce="${res.locals.nonce}"` : '';

			const body = template()
				.replace('%sapper.base%', () => `<base href="${req.baseUrl}/">`)
				.replace('%sapper.scripts%', () => `<script${nonce_attr}>${script}</script>`)
				.replace('%sapper.html%', () => html)
				.replace('%sapper.head%', () => `<noscript id='sapper-head-start'></noscript>${head}<noscript id='sapper-head-end'></noscript>`)
				.replace('%sapper.styles%', () => styles);

			res.statusCode = status;
			res.end(body);
		} catch(err) {
			if (error) {
				bail(req, res, err);
			} else {
				handle_error(req, res, 500, err);
			}
		}
	}

	return function find_route(req, res, next) {
		if (req.path === '/service-worker-index.html') {
			const homePage = pages.find(page => page.pattern.test('/'));
			handle_page(homePage, req, res);
			return;
		}

		for (const page of pages) {
			if (page.pattern.test(req.path)) {
				handle_page(page, req, res);
				return;
			}
		}

		handle_error(req, res, 404, 'Not found');
	};
}

function read_template(dir = build_dir) {
	return fs.readFileSync(`${dir}/template.html`, 'utf-8');
}

function try_serialize(data, fail) {
	try {
		return devalue(data);
	} catch (err) {
		if (fail) fail(err);
		return null;
	}
}

function escape_html(html) {
	const chars = {
		'"' : 'quot',
		"'": '#39',
		'&': 'amp',
		'<' : 'lt',
		'>' : 'gt'
	};

	return html.replace(/["'&<>]/g, c => `&${chars[c]};`);
}

function middleware(opts


 = {}) {
	const { session, ignore } = opts;

	let emitted_basepath = false;

	return compose_handlers(ignore, [
		(req, res, next) => {
			if (req.baseUrl === undefined) {
				let { originalUrl } = req;
				if (req.url === '/' && originalUrl[originalUrl.length - 1] !== '/') {
					originalUrl += '/';
				}

				req.baseUrl = originalUrl
					? originalUrl.slice(0, -req.url.length)
					: '';
			}

			if (!emitted_basepath && process.send) {
				process.send({
					__sapper__: true,
					event: 'basepath',
					basepath: req.baseUrl
				});

				emitted_basepath = true;
			}

			if (req.path === undefined) {
				req.path = req.url.replace(/\?.*/, '');
			}

			next();
		},

		fs.existsSync(path.join(build_dir, 'service-worker.js')) && serve({
			pathname: '/service-worker.js',
			cache_control: 'no-cache, no-store, must-revalidate'
		}),

		fs.existsSync(path.join(build_dir, 'service-worker.js.map')) && serve({
			pathname: '/service-worker.js.map',
			cache_control: 'no-cache, no-store, must-revalidate'
		}),

		serve({
			prefix: '/client/',
			cache_control:  'no-cache' 
		}),

		get_server_route_handler(manifest.server_routes),

		get_page_handler(manifest, session || noop$1)
	].filter(Boolean));
}

function compose_handlers(ignore, handlers) {
	const total = handlers.length;

	function nth_handler(n, req, res, next) {
		if (n >= total) {
			return next();
		}

		handlers[n](req, res, () => nth_handler(n+1, req, res, next));
	}

	return !ignore
		? (req, res, next) => nth_handler(0, req, res, next)
		: (req, res, next) => {
			if (should_ignore(req.path, ignore)) {
				next();
			} else {
				nth_handler(0, req, res, next);
			}
		};
}

function should_ignore(uri, val) {
	if (Array.isArray(val)) return val.some(x => should_ignore(uri, x));
	if (val instanceof RegExp) return val.test(uri);
	if (typeof val === 'function') return val(uri);
	return uri.startsWith(val.charCodeAt(0) === 47 ? val : `/${val}`);
}

function serve({ prefix, pathname, cache_control }



) {
	const filter = pathname
		? (req) => req.path === pathname
		: (req) => req.path.startsWith(prefix);

	const read =  (file) => fs.readFileSync(path.join(build_dir, file))
		;

	return (req, res, next) => {
		if (filter(req)) {
			const type = lite.getType(req.path);

			try {
				const file = path.posix.normalize(decodeURIComponent(req.path));
				const data = read(file);

				res.setHeader('Content-Type', type);
				res.setHeader('Cache-Control', cache_control);
				res.end(data);
			} catch (err) {
				res.statusCode = 404;
				res.end('not found');
			}
		} else {
			next();
		}
	};
}

function noop$1(){}

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		bodyParser.json(),
		middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbm9kZV9tb2R1bGVzL0BsaWIvbW9uZ28uanMiLCIuLi8uLi8uLi9zcmMvcm91dGVzL25ld19zZXNzaW9ucy9zd2ltbWluZy9pbmRleC5qc29uLmpzIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9uZXdfc2Vzc2lvbnMvY3ljbGluZy9pbmRleC5qc29uLmpzIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9uZXdfc2Vzc2lvbnMvcnVubmluZy9pbmRleC5qc29uLmpzIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9uZXdfc2Vzc2lvbnMvd29ya291dC9pbmRleC5qc29uLmpzIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9zcG9ydHMvc3dpbW1pbmcvaW5kZXguanNvbi5qcyIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvc3BvcnRzL3N3aW1taW5nL3N3aW1taW5nLWRhdGEuanMiLCIuLi8uLi8uLi9zcmMvcm91dGVzL3Nwb3J0cy9jeWNsaW5nL2luZGV4Lmpzb24uanMiLCIuLi8uLi8uLi9zcmMvcm91dGVzL3Nwb3J0cy9jeWNsaW5nL2N5Y2xpbmctZGF0YS5qcyIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvc3BvcnRzL3J1bm5pbmcvaW5kZXguanNvbi5qcyIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvc3BvcnRzL3dvcmtvdXQvaW5kZXguanNvbi5qcyIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvc3BvcnRzL3dvcmtvdXQvd29ya291dC1kYXRhLmpzIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9zcG9ydC5qcyIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaG9tZS9pbmRleC5qc29uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9pbnRlcm5hbC9pbmRleC5tanMiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2ZyYXBwZS1jaGFydHMuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9pbmRleC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL25ld19zZXNzaW9ucy9zd2ltbWluZy9uZXdfc3dpbW1pbmcuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9uZXdfc2Vzc2lvbnMvY3ljbGluZy9uZXdfY3ljbGluZy5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL25ld19zZXNzaW9ucy9ydW5uaW5nL25ld19ydW5uaW5nLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvbmV3X3Nlc3Npb25zL3dvcmtvdXQvbmV3X3dvcmtvdXQuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9jaGFydGVzdC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL3Nwb3J0cy9zd2ltbWluZy9zd2ltbWluZy1jaGFydHMuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9zcG9ydHMvc3dpbW1pbmcvc3dpbW1pbmcuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9zcG9ydHMvY3ljbGluZy9jeWNsaW5nLWNoYXJ0cy5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL3Nwb3J0cy9jeWNsaW5nL2N5Y2xpbmcuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9zcG9ydHMvcnVubmluZy9ydW5uaW5nLWNoYXJ0cy5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL3Nwb3J0cy9ydW5uaW5nL3J1bm5pbmcuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9zcG9ydHMvd29ya291dC93b3Jrb3V0cHVzaHVwcy1yYWRhci5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL3Nwb3J0cy93b3Jrb3V0L3dvcmtvdXRvdGhlcnMtcmFkYXIuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9zcG9ydHMvd29ya291dC93b3Jrb3V0YWJkby1yYWRhci5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL3Nwb3J0cy93b3Jrb3V0L3dvcmtvdXRsZWdzLXJhZGFyLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvc3BvcnRzL3dvcmtvdXQvd29ya291dC1jaGFydHMuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9zcG9ydHMvd29ya291dC93b3Jrb3V0LnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05hdi5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL19sYXlvdXQuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9fZXJyb3Iuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL25vZGVfbW9kdWxlcy9Ac2FwcGVyL2ludGVybmFsL21hbmlmZXN0LXNlcnZlci5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlL3N0b3JlL2luZGV4Lm1qcyIsIi4uLy4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9pbnRlcm5hbC9zaGFyZWQubWpzIiwiLi4vLi4vLi4vc3JjL25vZGVfbW9kdWxlcy9Ac2FwcGVyL2ludGVybmFsL0FwcC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvbm9kZV9tb2R1bGVzL0BzYXBwZXIvc2VydmVyLm1qcyIsIi4uLy4uLy4uL3NyYy9zZXJ2ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ28gPSByZXF1aXJlKCdtb25nb2RiJyk7XG5cbmxldCBjbGllbnQgPSBudWxsO1xubGV0IGRiID0gbnVsbDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXQoKXtcbiAgICBpZighY2xpZW50KXtcbiAgICAgICAgY29uc3QgdXJsID0gXCJtb25nb2RiK3NydjovL2JlY3V3ZW1hcnRpbjp2ZW5kcmVkaTEzQGNsdXN0ZXIwLWhneGNsLm1vbmdvZGIubmV0L3Rlc3QyX2RhdGFiYXNlP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiO1xuICAgICAgICBjbGllbnQgPSBhd2FpdCBtb25nby5Nb25nb0NsaWVudC5jb25uZWN0KHVybClcbiAgICAgICAgZGIgPSBjbGllbnQuZGIoJ3Nwb3J0X3BlcmZfZGF0YWJhc2UnKTtcbiAgICB9XG4gICAgcmV0dXJuIHtjbGllbnQsIGRifVxufVxuIiwiaW1wb3J0IHtpbml0fSBmcm9tICdAbGliL21vbmdvJ1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXQocmVxLCByZXMpIHtcblx0XG5cdGNvbnN0IHtkYn0gPSBhd2FpdCBpbml0KCk7XG5cdGNvbnN0IGRhdGFfcmF3ID0gYXdhaXQgZGIuY29sbGVjdGlvbihcInVzZXIxX2NvbGxlY3Rpb25cIikuZmluZCh7c3BvcnQ6J3N3aW1taW5nJ30pLnRvQXJyYXkoKTtcblx0XG5cdHJlcy53cml0ZUhlYWQoMjAwLCB7XG5cdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHR9KTtcblxuXHRyZXMuZW5kKEpTT04uc3RyaW5naWZ5KGRhdGFfcmF3KSk7XG5cblx0fVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9zdChyZXEsIHJlcyl7XG5cdGNvbnN0IHtkYiB9ID0gYXdhaXQgaW5pdCgpXG5cdGNvbnN0IHBvc3QgPSByZXEuYm9keTtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY29sbGVjdGlvbihcInVzZXIxX2NvbGxlY3Rpb25cIikuaW5zZXJ0KHBvc3QpO1xuXHRyZXMud3JpdGVIZWFkKDIwMCwge1xuXHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0fSk7XG5cdHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG59XG5cbi8vaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1IOFNZWW1yaEhpRSIsImltcG9ydCB7aW5pdH0gZnJvbSAnQGxpYi9tb25nbydcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0KHJlcSwgcmVzKSB7XG5cdFxuXHRjb25zdCB7ZGJ9ID0gYXdhaXQgaW5pdCgpO1xuXHRjb25zdCBkYXRhX3JhdyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJ1c2VyMV9jb2xsZWN0aW9uXCIpLmZpbmQoe3Nwb3J0OidjeWNsaW5nJ30pLnRvQXJyYXkoKTtcblx0XG5cdHJlcy53cml0ZUhlYWQoMjAwLCB7XG5cdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHR9KTtcblxuXHRyZXMuZW5kKEpTT04uc3RyaW5naWZ5KGRhdGFfcmF3KSk7XG5cblx0fVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9zdChyZXEsIHJlcyl7XG5cdGNvbnN0IHtkYiB9ID0gYXdhaXQgaW5pdCgpXG5cdGNvbnN0IHBvc3QgPSByZXEuYm9keTtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY29sbGVjdGlvbihcInVzZXIxX2NvbGxlY3Rpb25cIikuaW5zZXJ0KHBvc3QpO1xuXHRyZXMud3JpdGVIZWFkKDIwMCwge1xuXHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0fSk7XG5cdHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG59XG5cbi8vaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1IOFNZWW1yaEhpRSIsImltcG9ydCB7aW5pdH0gZnJvbSAnQGxpYi9tb25nbydcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0KHJlcSwgcmVzKSB7XG5cdFxuXHRjb25zdCB7ZGJ9ID0gYXdhaXQgaW5pdCgpO1xuXHRjb25zdCBkYXRhX3JhdyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJ1c2VyMV9jb2xsZWN0aW9uXCIpLmZpbmQoe3Nwb3J0OidydW5uaW5nJ30pLnRvQXJyYXkoKTtcblx0XG5cdHJlcy53cml0ZUhlYWQoMjAwLCB7XG5cdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHR9KTtcblxuXHRyZXMuZW5kKEpTT04uc3RyaW5naWZ5KGRhdGFfcmF3KSk7XG5cblx0fVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9zdChyZXEsIHJlcyl7XG5cdGNvbnN0IHtkYiB9ID0gYXdhaXQgaW5pdCgpXG5cdGNvbnN0IHBvc3QgPSByZXEuYm9keTtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY29sbGVjdGlvbihcInVzZXIxX2NvbGxlY3Rpb25cIikuaW5zZXJ0KHBvc3QpO1xuXHRyZXMud3JpdGVIZWFkKDIwMCwge1xuXHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0fSk7XG5cdHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG59XG5cbi8vaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1IOFNZWW1yaEhpRSIsImltcG9ydCB7aW5pdH0gZnJvbSAnQGxpYi9tb25nbydcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0KHJlcSwgcmVzKSB7XG5cdFxuXHRjb25zdCB7ZGJ9ID0gYXdhaXQgaW5pdCgpO1xuXHRjb25zdCBkYXRhX3JhdyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJ1c2VyMV9jb2xsZWN0aW9uXCIpLmZpbmQoe3Nwb3J0Oid3b3Jrb3V0J30pLnRvQXJyYXkoKTtcblx0XG5cdHJlcy53cml0ZUhlYWQoMjAwLCB7XG5cdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHR9KTtcblxuXHRyZXMuZW5kKEpTT04uc3RyaW5naWZ5KGRhdGFfcmF3KSk7XG5cblx0fVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9zdChyZXEsIHJlcyl7XG5cdGNvbnN0IHtkYiB9ID0gYXdhaXQgaW5pdCgpXG5cdGNvbnN0IHBvc3QgPSByZXEuYm9keTtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY29sbGVjdGlvbihcInVzZXIxX2NvbGxlY3Rpb25cIikuaW5zZXJ0KHBvc3QpO1xuXHRyZXMud3JpdGVIZWFkKDIwMCwge1xuXHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0fSk7XG5cdHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG59XG5cbi8vaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1IOFNZWW1yaEhpRSIsImltcG9ydCB7aW5pdH0gZnJvbSAnQGxpYi9tb25nbydcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0KHJlcSwgcmVzKSB7XG5cdFxuXHRjb25zdCB7ZGJ9ID0gYXdhaXQgaW5pdCgpO1xuXHRjb25zdCBkYXRhX3JhdyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJ1c2VyMV9jb2xsZWN0aW9uXCIpLmZpbmQoe3Nwb3J0Oidzd2ltbWluZyd9KS50b0FycmF5KCk7XG5cdFxuXHRyZXMud3JpdGVIZWFkKDIwMCwge1xuXHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0fSk7XG5cblx0cmVzLmVuZChKU09OLnN0cmluZ2lmeShkYXRhX3JhdykpO1xuXHR9IiwiXG4vLyBjb25zdCBwZXJmb3JtYW5jZV9kYXRhID0ge1xuLy8gICAgICdzd2ltbWluZyc6IFtcbi8vICAgICAgICAgeydpZF9zZXNzaW9uJyA6IDEsXG4vLyAgICAgICAgICdtZXRlcnMnOiAxNTAwLCBcbi8vICAgICAgICAgJ21pbnV0ZXMnIDogNTAsXG4vLyAgICAgJ3NwcmludCc6IDIsXG4vLyAgICAgJ2RhdGUnOiAnMzAtMDMtMjAyMCdcbi8vICAgICAgICAgfSxcdFx0XG4vLyAgICAgICAgIHsnaWRfc2Vzc2lvbicgOiAyLFxuLy8gICAgICAgICAnbWV0ZXJzJzogMTQwMCwgXG4vLyAgICAgICAgICdtaW51dGVzJyA6IDYwLFxuLy8gICAgICdzcHJpbnRzJyA6IDIsICBcbi8vICAgICAnZGF0ZSc6ICcwMS0wNC0yMDIwJ1xuLy8gICAgICAgICB9LFxuLy8gICAgIHsnaWRfc2Vzc2lvbicgOiAzLFxuLy8gICAgICAgICAnbWV0ZXJzJzogMTQwMCwgXG4vLyAgICAgICAgICdtaW51dGVzJyA6IDYwLFxuLy8gICAgICdzcHJpbnRzJyA6IDIsICBcbi8vICAgICAnZGF0ZSc6ICcwMi0wNC0yMDIwJ1xuLy8gICAgICAgICB9LFxuLy8gICAgIF0sXG4vLyAgICAgJ3J1bm5pbmcnIDogW1xuLy8gICAgIHsnaWRfc2Vzc2lvbic6MSxcbi8vICAgICAnbWV0ZXJzJyA6IDQ1MDAsXG4vLyAgICAgJ2VsZXZhdGlvbicgOiA1MDAsXG4vLyAgICAgJ2RhdGUnOiAnMzAtMDMtMjAyMCdcbi8vICAgICB9LFxuLy8gICAgIHsnaWRfc2Vzc2lvbic6Mixcbi8vICAgICAnbWV0ZXJzJyA6IDU1MDAsXG4vLyAgICAgJ2VsZXZhdGlvbicgOiAyMDAsXG4vLyAgICAgJ2RhdGUnOiAnMDEtMDQtMjAyMCdcblxuLy8gICAgIH0sXG4vLyAgICAgeydpZF9zZXNzaW9uJzozLFxuLy8gICAgICdtZXRlcnMnIDogNjAwMCxcbi8vICAgICAnZWxldmF0aW9uJyA6IDQwMCxcbi8vICAgICAnZGF0ZSc6ICcwMi0wNC0yMDIwJ1xuLy8gICAgIH0sXG4vLyBdLFxuLy8gICAgICd3b3Jrb3V0JyA6IFtcbi8vICAgICB7J2lkX3Nlc3Npb24nOjEsXG4vLyAgICAgJ2RhdGUnIDogJzMwLTAzLTIwMjAnLFxuLy8gICAgICdzZXNzaW9uX2RhdGEnOiBbXG4vLyAgICAgXX0sXG4vLyAgICAgeydpZF9zZXNzaW9uJzoyLFxuLy8gICAgICdkYXRlJyA6ICczMC0wMy0yMDIwJyxcbi8vICAgICAnc2Vzc2lvbl9kYXRhJzogW1xuLy8gICAgIF19LFxuLy8gICAgIHsnaWRfc2Vzc2lvbic6Myxcbi8vICAgICAnZGF0ZScgOiAnMzAtMDMtMjAyMCcsXG4vLyAgICAgJ3Nlc3Npb25fZGF0YSc6IFtcbi8vICAgICBdfVxuLy8gXSxcbi8vICdjeWNsaW5nJyA6IFtcbi8vICAgICB7J2lkX3Nlc3Npb24nOjEsXG4vLyAgICAgJ21ldGVycycgOiAxNTAwMCxcbi8vICAgICAnZWxldmF0aW9uJzogMjAwMCxcbi8vICAgICAnZGF0ZSc6ICczMC0wMy0yMDIwJ1xuLy8gICAgIH0sXG4vLyAgICAgeydpZF9zZXNzaW9uJzoyLFxuLy8gICAgICdtZXRlcnMnIDogMTQwMDAsXG4vLyAgICAgJ2VsZXZhdGlvbic6IDIwMDAsXG4vLyAgICAgJ2RhdGUnOiAnMDEtMDQtMjAyMCdcbi8vICAgICB9LFxuLy8gICAgIHsnaWRfc2Vzc2lvbic6Myxcbi8vICAgICAnbWV0ZXJzJyA6IDE4MDAwLFxuLy8gICAgICdlbGV2YXRpb24nOiAyMDAwLFxuLy8gICAgICdkYXRlJzogJzAyLTA0LTIwMjAnXG4vLyAgICAgfVxuLy8gXVxuLy8gfVxuXG5cblxuXG5cbi8vIGNvbnN0IGN5Y2xpbmdfZGF0YSA9IHBlcmZvcm1hbmNlX2RhdGEuY3ljbGluZ1xuXG4vLyBleHBvcnQgbGV0IGxpc3RfbWV0ZXJzID0gW107XG4vLyBleHBvcnQgbGV0IGxpc3RfZWxldmF0aW9uID0gW107XG4vLyBleHBvcnQgbGV0IGxpc3RfZGF0ZSA9IFtdO1xuXG4vLyBjeWNsaW5nX2RhdGEuZm9yRWFjaCh4ID0+IHtcbi8vICAgICBsaXN0X21ldGVycy5wdXNoKHgubWV0ZXJzKTtcbi8vICAgICBsaXN0X2RhdGUucHVzaCh4LmRhdGUpO1xuLy8gICAgIGxpc3RfZWxldmF0aW9uLnB1c2goeC5lbGV2YXRpb24pO1xuLy8gfSlcblxuXG4vLyBjb25zdCBkYXRhcyA9IHtcbi8vICAgICBsYWJlbHM6IGxpc3RfZGF0ZSxcbi8vICAgICBkYXRhc2V0czogW3tcbi8vICAgICAgICAgbGFiZWw6ICdNZXRlcnMgY292ZXJlZCcsXG4vLyAgICAgICAgIGRhdGE6bGlzdF9tZXRlcnMsXG4vLyAgICAgICAgIC8vIGJhY2tncm91bmRDb2xvcjogW1xuLy8gICAgICAgICAvLyAgICAgJ3JnYmEoMjU1LCA5OSwgMTMyLCAwLjIpJyxcbi8vICAgICAgICAgLy8gICAgICdyZ2JhKDU0LCAxNjIsIDIzNSwgMC4yKScsXG4vLyAgICAgICAgIC8vICAgICAncmdiYSgyNTUsIDIwNiwgODYsIDAuMiknLFxuLy8gICAgICAgICAvLyAgICAgJ3JnYmEoNzUsIDE5MiwgMTkyLCAwLjIpJyxcbi8vICAgICAgICAgLy8gICAgICdyZ2JhKDE1MywgMTAyLCAyNTUsIDAuMiknLFxuLy8gICAgICAgICAvLyAgICAgJ3JnYmEoMjU1LCAxNTksIDY0LCAwLjIpJ1xuLy8gICAgICAgICAvLyBdLFxuLy8gICAgICAgICAvLyBib3JkZXJDb2xvcjogW1xuLy8gICAgICAgICAvLyAgICAgJ3JnYmEoMjU1LCA5OSwgMTMyLCAxKScsXG4vLyAgICAgICAgIC8vICAgICAncmdiYSg1NCwgMTYyLCAyMzUsIDEpJyxcbi8vICAgICAgICAgLy8gICAgICdyZ2JhKDI1NSwgMjA2LCA4NiwgMSknLFxuLy8gICAgICAgICAvLyAgICAgJ3JnYmEoNzUsIDE5MiwgMTkyLCAxKScsXG4vLyAgICAgICAgIC8vICAgICAncmdiYSgxNTMsIDEwMiwgMjU1LCAxKScsXG4vLyAgICAgICAgIC8vICAgICAncmdiYSgyNTUsIDE1OSwgNjQsIDEpJ1xuLy8gICAgICAgICAvLyBdLFxuLy8gICAgICAgICBib3JkZXJXaWR0aDogMVxuLy8gICAgIH1dXG4vLyB9XG5cblxuXG4vLyBleHBvcnQgZGVmYXVsdCBkYXRhcyIsImltcG9ydCB7aW5pdH0gZnJvbSAnQGxpYi9tb25nbydcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldChyZXEsIHJlcykge1xuXHRcblx0Y29uc3Qge2RifSA9IGF3YWl0IGluaXQoKTtcblx0Y29uc3QgZGF0YV9yYXcgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwidXNlcjFfY29sbGVjdGlvblwiKS5maW5kKHtzcG9ydDonY3ljbGluZyd9KS50b0FycmF5KCk7XG5cblx0cmVzLndyaXRlSGVhZCgyMDAsIHtcblx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdH0pO1xuXG5cdHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkoZGF0YV9yYXcpKTtcblxuXHR9XG5cblxuXG4iLCJcbi8vIGNvbnN0IHBlcmZvcm1hbmNlX2RhdGEgPSB7XG4vLyAgICAgJ3N3aW1taW5nJzogW1xuLy8gICAgICAgICB7J2lkX3Nlc3Npb24nIDogMSxcbi8vICAgICAgICAgJ21ldGVycyc6IDE1MDAsIFxuLy8gICAgICAgICAnbWludXRlcycgOiA1MCxcbi8vICAgICAnc3ByaW50JzogMixcbi8vICAgICAnZGF0ZSc6ICczMC0wMy0yMDIwJ1xuLy8gICAgICAgICB9LFx0XHRcbi8vICAgICAgICAgeydpZF9zZXNzaW9uJyA6IDIsXG4vLyAgICAgICAgICdtZXRlcnMnOiAxNDAwLCBcbi8vICAgICAgICAgJ21pbnV0ZXMnIDogNjAsXG4vLyAgICAgJ3NwcmludHMnIDogMiwgIFxuLy8gICAgICdkYXRlJzogJzAxLTA0LTIwMjAnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgeydpZF9zZXNzaW9uJyA6IDMsXG4vLyAgICAgICAgICdtZXRlcnMnOiAxNDAwLCBcbi8vICAgICAgICAgJ21pbnV0ZXMnIDogNjAsXG4vLyAgICAgJ3NwcmludHMnIDogMiwgIFxuLy8gICAgICdkYXRlJzogJzAyLTA0LTIwMjAnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgXSxcbi8vICAgICAncnVubmluZycgOiBbXG4vLyAgICAgeydpZF9zZXNzaW9uJzoxLFxuLy8gICAgICdtZXRlcnMnIDogNDUwMCxcbi8vICAgICAnZWxldmF0aW9uJyA6IDUwMCxcbi8vICAgICAnZGF0ZSc6ICczMC0wMy0yMDIwJ1xuLy8gICAgIH0sXG4vLyAgICAgeydpZF9zZXNzaW9uJzoyLFxuLy8gICAgICdtZXRlcnMnIDogNTUwMCxcbi8vICAgICAnZWxldmF0aW9uJyA6IDIwMCxcbi8vICAgICAnZGF0ZSc6ICcwMS0wNC0yMDIwJ1xuXG4vLyAgICAgfSxcbi8vICAgICB7J2lkX3Nlc3Npb24nOjMsXG4vLyAgICAgJ21ldGVycycgOiA2MDAwLFxuLy8gICAgICdlbGV2YXRpb24nIDogNDAwLFxuLy8gICAgICdkYXRlJzogJzAyLTA0LTIwMjAnXG4vLyAgICAgfSxcbi8vIF0sXG4vLyAgICAgJ3dvcmtvdXQnIDogW1xuLy8gICAgIHsnaWRfc2Vzc2lvbic6MSxcbi8vICAgICAnZGF0ZScgOiAnMzAtMDMtMjAyMCcsXG4vLyAgICAgJ3Nlc3Npb25fZGF0YSc6IFtcbi8vICAgICBdfSxcbi8vICAgICB7J2lkX3Nlc3Npb24nOjIsXG4vLyAgICAgJ2RhdGUnIDogJzMwLTAzLTIwMjAnLFxuLy8gICAgICdzZXNzaW9uX2RhdGEnOiBbXG4vLyAgICAgXX0sXG4vLyAgICAgeydpZF9zZXNzaW9uJzozLFxuLy8gICAgICdkYXRlJyA6ICczMC0wMy0yMDIwJyxcbi8vICAgICAnc2Vzc2lvbl9kYXRhJzogW1xuLy8gICAgIF19XG4vLyBdLFxuLy8gJ2N5Y2xpbmcnIDogW1xuLy8gICAgIHsnaWRfc2Vzc2lvbic6MSxcbi8vICAgICAnbWV0ZXJzJyA6IDE1MDAwLFxuLy8gICAgICdlbGV2YXRpb24nOiAyMDAwLFxuLy8gICAgICdkYXRlJzogJzMwLTAzLTIwMjAnXG4vLyAgICAgfSxcbi8vICAgICB7J2lkX3Nlc3Npb24nOjIsXG4vLyAgICAgJ21ldGVycycgOiAxNDAwMCxcbi8vICAgICAnZWxldmF0aW9uJzogMjAwMCxcbi8vICAgICAnZGF0ZSc6ICcwMS0wNC0yMDIwJ1xuLy8gICAgIH0sXG4vLyAgICAgeydpZF9zZXNzaW9uJzozLFxuLy8gICAgICdtZXRlcnMnIDogMTgwMDAsXG4vLyAgICAgJ2VsZXZhdGlvbic6IDIwMDAsXG4vLyAgICAgJ2RhdGUnOiAnMDItMDQtMjAyMCdcbi8vICAgICB9XG4vLyBdXG4vLyB9XG5cblxuXG5cblxuLy8gY29uc3QgY3ljbGluZ19kYXRhID0gcGVyZm9ybWFuY2VfZGF0YS5jeWNsaW5nXG5cbi8vIGV4cG9ydCBsZXQgbGlzdF9tZXRlcnMgPSBbXTtcbi8vIGV4cG9ydCBsZXQgbGlzdF9lbGV2YXRpb24gPSBbXTtcbi8vIGV4cG9ydCBsZXQgbGlzdF9kYXRlID0gW107XG5cbi8vIGN5Y2xpbmdfZGF0YS5mb3JFYWNoKHggPT4ge1xuLy8gICAgIGxpc3RfbWV0ZXJzLnB1c2goeC5tZXRlcnMpO1xuLy8gICAgIGxpc3RfZGF0ZS5wdXNoKHguZGF0ZSk7XG4vLyAgICAgbGlzdF9lbGV2YXRpb24ucHVzaCh4LmVsZXZhdGlvbik7XG4vLyB9KVxuXG5cbi8vIGNvbnN0IGRhdGFzID0ge1xuLy8gICAgIGxhYmVsczogbGlzdF9kYXRlLFxuLy8gICAgIGRhdGFzZXRzOiBbe1xuLy8gICAgICAgICBsYWJlbDogJ01ldGVycyBjb3ZlcmVkJyxcbi8vICAgICAgICAgZGF0YTpsaXN0X21ldGVycyxcbi8vICAgICAgICAgLy8gYmFja2dyb3VuZENvbG9yOiBbXG4vLyAgICAgICAgIC8vICAgICAncmdiYSgyNTUsIDk5LCAxMzIsIDAuMiknLFxuLy8gICAgICAgICAvLyAgICAgJ3JnYmEoNTQsIDE2MiwgMjM1LCAwLjIpJyxcbi8vICAgICAgICAgLy8gICAgICdyZ2JhKDI1NSwgMjA2LCA4NiwgMC4yKScsXG4vLyAgICAgICAgIC8vICAgICAncmdiYSg3NSwgMTkyLCAxOTIsIDAuMiknLFxuLy8gICAgICAgICAvLyAgICAgJ3JnYmEoMTUzLCAxMDIsIDI1NSwgMC4yKScsXG4vLyAgICAgICAgIC8vICAgICAncmdiYSgyNTUsIDE1OSwgNjQsIDAuMiknXG4vLyAgICAgICAgIC8vIF0sXG4vLyAgICAgICAgIC8vIGJvcmRlckNvbG9yOiBbXG4vLyAgICAgICAgIC8vICAgICAncmdiYSgyNTUsIDk5LCAxMzIsIDEpJyxcbi8vICAgICAgICAgLy8gICAgICdyZ2JhKDU0LCAxNjIsIDIzNSwgMSknLFxuLy8gICAgICAgICAvLyAgICAgJ3JnYmEoMjU1LCAyMDYsIDg2LCAxKScsXG4vLyAgICAgICAgIC8vICAgICAncmdiYSg3NSwgMTkyLCAxOTIsIDEpJyxcbi8vICAgICAgICAgLy8gICAgICdyZ2JhKDE1MywgMTAyLCAyNTUsIDEpJyxcbi8vICAgICAgICAgLy8gICAgICdyZ2JhKDI1NSwgMTU5LCA2NCwgMSknXG4vLyAgICAgICAgIC8vIF0sXG4vLyAgICAgICAgIGJvcmRlcldpZHRoOiAxXG4vLyAgICAgfV1cbi8vIH1cblxuXG5cbi8vIGV4cG9ydCBkZWZhdWx0IGRhdGFzIiwiaW1wb3J0IHtpbml0fSBmcm9tICdAbGliL21vbmdvJ1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXQocmVxLCByZXMpIHtcblx0XG5cdGNvbnN0IHtkYn0gPSBhd2FpdCBpbml0KCk7XG5cdGNvbnN0IGRhdGFfcmF3ID0gYXdhaXQgZGIuY29sbGVjdGlvbihcInVzZXIxX2NvbGxlY3Rpb25cIikuZmluZCh7c3BvcnQ6J3J1bm5pbmcnfSkudG9BcnJheSgpO1xuXHRcblx0cmVzLndyaXRlSGVhZCgyMDAsIHtcblx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdH0pO1xuXG5cdHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkoZGF0YV9yYXcpKTtcblx0fSIsImltcG9ydCB7aW5pdH0gZnJvbSAnQGxpYi9tb25nbydcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0KHJlcSwgcmVzKSB7XG5cdFxuXHRjb25zdCB7ZGJ9ID0gYXdhaXQgaW5pdCgpO1xuXHRjb25zdCBkYXRhX3JhdyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJ1c2VyMV9jb2xsZWN0aW9uXCIpLmZpbmQoe3Nwb3J0Oid3b3Jrb3V0J30pLnRvQXJyYXkoKTtcblx0XG5cdHJlcy53cml0ZUhlYWQoMjAwLCB7XG5cdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHR9KTtcblxuXHRyZXMuZW5kKEpTT04uc3RyaW5naWZ5KGRhdGFfcmF3KSk7XG5cdH0iLCJcblxuY29uc3QgeW8gPSAnd2UnXG5cbmV4cG9ydCBkZWZhdWx0IHlvXG5cbi8vIGNvbnN0IHBlcmZvcm1hbmNlX2RhdGEgPSB7XG4vLyAgICAgJ3N3aW1taW5nJzogW1xuLy8gICAgICAgICB7J2lkX3Nlc3Npb24nIDogMSxcbi8vICAgICAgICAgJ21ldGVycyc6IDE1MDAsIFxuLy8gICAgICAgICAnbWludXRlcycgOiA1MCxcbi8vICAgICAnc3ByaW50JzogMixcbi8vICAgICAnZGF0ZSc6ICczMC0wMy0yMDIwJ1xuLy8gICAgICAgICB9LFx0XHRcbi8vICAgICAgICAgeydpZF9zZXNzaW9uJyA6IDIsXG4vLyAgICAgICAgICdtZXRlcnMnOiAxNDAwLCBcbi8vICAgICAgICAgJ21pbnV0ZXMnIDogNjAsXG4vLyAgICAgJ3NwcmludHMnIDogMiwgIFxuLy8gICAgICdkYXRlJzogJzAxLTA0LTIwMjAnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgeydpZF9zZXNzaW9uJyA6IDMsXG4vLyAgICAgICAgICdtZXRlcnMnOiAxNDAwLCBcbi8vICAgICAgICAgJ21pbnV0ZXMnIDogNjAsXG4vLyAgICAgJ3NwcmludHMnIDogMiwgIFxuLy8gICAgICdkYXRlJzogJzAyLTA0LTIwMjAnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgXSxcbi8vICAgICAncnVubmluZycgOiBbXG4vLyAgICAgeydpZF9zZXNzaW9uJzoxLFxuLy8gICAgICdtZXRlcnMnIDogNDUwMCxcbi8vICAgICAnZWxldmF0aW9uJyA6IDUwMCxcbi8vICAgICAnZGF0ZSc6ICczMC0wMy0yMDIwJ1xuLy8gICAgIH0sXG4vLyAgICAgeydpZF9zZXNzaW9uJzoyLFxuLy8gICAgICdtZXRlcnMnIDogNTUwMCxcbi8vICAgICAnZWxldmF0aW9uJyA6IDIwMCxcbi8vICAgICAnZGF0ZSc6ICcwMS0wNC0yMDIwJ1xuXG4vLyAgICAgfSxcbi8vICAgICB7J2lkX3Nlc3Npb24nOjMsXG4vLyAgICAgJ21ldGVycycgOiA2MDAwLFxuLy8gICAgICdlbGV2YXRpb24nIDogNDAwLFxuLy8gICAgICdkYXRlJzogJzAyLTA0LTIwMjAnXG4vLyAgICAgfSxcbi8vIF0sXG4vLyAgICAgJ3dvcmtvdXQnIDogW1xuLy8gICAgIHsnaWRfc2Vzc2lvbic6MSxcbi8vICAgICAnZGF0ZScgOiAnMzAtMDMtMjAyMCcsXG4vLyAgICAgJ3Nlc3Npb25fZGF0YSc6IFtcbi8vICAgICBdfSxcbi8vICAgICB7J2lkX3Nlc3Npb24nOjIsXG4vLyAgICAgJ2RhdGUnIDogJzMwLTAzLTIwMjAnLFxuLy8gICAgICdzZXNzaW9uX2RhdGEnOiBbXG4vLyAgICAgXX0sXG4vLyAgICAgeydpZF9zZXNzaW9uJzozLFxuLy8gICAgICdkYXRlJyA6ICczMC0wMy0yMDIwJyxcbi8vICAgICAnc2Vzc2lvbl9kYXRhJzogW1xuLy8gICAgIF19XG4vLyBdLFxuLy8gJ2N5Y2xpbmcnIDogW1xuLy8gICAgIHsnaWRfc2Vzc2lvbic6MSxcbi8vICAgICAnbWV0ZXJzJyA6IDE1MDAwLFxuLy8gICAgICdlbGV2YXRpb24nOiAyMDAwLFxuLy8gICAgICdkYXRlJzogJzMwLTAzLTIwMjAnXG4vLyAgICAgfSxcbi8vICAgICB7J2lkX3Nlc3Npb24nOjIsXG4vLyAgICAgJ21ldGVycycgOiAxNDAwMCxcbi8vICAgICAnZWxldmF0aW9uJzogMjAwMCxcbi8vICAgICAnZGF0ZSc6ICcwMS0wNC0yMDIwJ1xuLy8gICAgIH0sXG4vLyAgICAgeydpZF9zZXNzaW9uJzozLFxuLy8gICAgICdtZXRlcnMnIDogMTgwMDAsXG4vLyAgICAgJ2VsZXZhdGlvbic6IDIwMDAsXG4vLyAgICAgJ2RhdGUnOiAnMDItMDQtMjAyMCdcbi8vICAgICB9XG4vLyBdXG4vLyB9XG5cblxuXG5cblxuLy8gY29uc3QgY3ljbGluZ19kYXRhID0gcGVyZm9ybWFuY2VfZGF0YS5jeWNsaW5nXG5cbi8vIGV4cG9ydCBsZXQgbGlzdF9tZXRlcnMgPSBbXTtcbi8vIGV4cG9ydCBsZXQgbGlzdF9lbGV2YXRpb24gPSBbXTtcbi8vIGV4cG9ydCBsZXQgbGlzdF9kYXRlID0gW107XG5cbi8vIGN5Y2xpbmdfZGF0YS5mb3JFYWNoKHggPT4ge1xuLy8gICAgIGxpc3RfbWV0ZXJzLnB1c2goeC5tZXRlcnMpO1xuLy8gICAgIGxpc3RfZGF0ZS5wdXNoKHguZGF0ZSk7XG4vLyAgICAgbGlzdF9lbGV2YXRpb24ucHVzaCh4LmVsZXZhdGlvbik7XG4vLyB9KVxuXG5cbi8vIGNvbnN0IGRhdGFzID0ge1xuLy8gICAgIGxhYmVsczogbGlzdF9kYXRlLFxuLy8gICAgIGRhdGFzZXRzOiBbe1xuLy8gICAgICAgICBsYWJlbDogJ01ldGVycyBjb3ZlcmVkJyxcbi8vICAgICAgICAgZGF0YTpsaXN0X21ldGVycyxcbi8vICAgICAgICAgLy8gYmFja2dyb3VuZENvbG9yOiBbXG4vLyAgICAgICAgIC8vICAgICAncmdiYSgyNTUsIDk5LCAxMzIsIDAuMiknLFxuLy8gICAgICAgICAvLyAgICAgJ3JnYmEoNTQsIDE2MiwgMjM1LCAwLjIpJyxcbi8vICAgICAgICAgLy8gICAgICdyZ2JhKDI1NSwgMjA2LCA4NiwgMC4yKScsXG4vLyAgICAgICAgIC8vICAgICAncmdiYSg3NSwgMTkyLCAxOTIsIDAuMiknLFxuLy8gICAgICAgICAvLyAgICAgJ3JnYmEoMTUzLCAxMDIsIDI1NSwgMC4yKScsXG4vLyAgICAgICAgIC8vICAgICAncmdiYSgyNTUsIDE1OSwgNjQsIDAuMiknXG4vLyAgICAgICAgIC8vIF0sXG4vLyAgICAgICAgIC8vIGJvcmRlckNvbG9yOiBbXG4vLyAgICAgICAgIC8vICAgICAncmdiYSgyNTUsIDk5LCAxMzIsIDEpJyxcbi8vICAgICAgICAgLy8gICAgICdyZ2JhKDU0LCAxNjIsIDIzNSwgMSknLFxuLy8gICAgICAgICAvLyAgICAgJ3JnYmEoMjU1LCAyMDYsIDg2LCAxKScsXG4vLyAgICAgICAgIC8vICAgICAncmdiYSg3NSwgMTkyLCAxOTIsIDEpJyxcbi8vICAgICAgICAgLy8gICAgICdyZ2JhKDE1MywgMTAyLCAyNTUsIDEpJyxcbi8vICAgICAgICAgLy8gICAgICdyZ2JhKDI1NSwgMTU5LCA2NCwgMSknXG4vLyAgICAgICAgIC8vIF0sXG4vLyAgICAgICAgIGJvcmRlcldpZHRoOiAxXG4vLyAgICAgfV1cbi8vIH1cblxuXG5cbi8vIGV4cG9ydCBkZWZhdWx0IGRhdGFzIiwiXG5cbi8vIGNvbnN0IHVzZXJfbGlzdCA9IFtcbi8vICAgICB7XCJuYW1lXCIgOiAnVXNlcjEnLFxuLy8gICAgIFwicGFzc3dvcmRcIiA6IFwicGFzc3dvcmQxXCIsXG4vLyAgICAgJ1VzZXJJZCcgOiAxfSxcbi8vICAgICB7XCJuYW1lXCIgOiAnVXNlcjInLFxuLy8gICAgIFwicGFzc3dvcmRcIiA6IFwicGFzc3dvcmQyXCJcbi8vICAgICAnVXNlcklkJyA6IDJ9LFxuLy8gICAgIHtcIm5hbWVcIiA6ICdVc2VyMycsXG4vLyAgICAgXCJwYXNzd29yZFwiIDogXCJwYXNzd29yZDNcIixcbi8vICAgICAnVXNlcklkJyA6IDN9LFxuLy8gICAgIHtcIm5hbWVcIiA6ICdVc2VyNCcsXG4vLyAgICAgXCJwYXNzd29yZFwiIDogXCJwYXNzd29yZDRcIixcbi8vICAgICAnVXNlcklkJyA6IDR9LFxuLy8gICAgIHtcIm5hbWVcIiA6ICdVc2VyNScsXG4vLyAgICAgXCJwYXNzd29yZFwiIDogXCJwYXNzd29yZDVcIixcbi8vICAgICAnVXNlcklkJyA6IDV9LFxuLy8gICAgIHtcIm5hbWVcIiA6ICdVc2VyNicsXG4vLyAgICAgXCJwYXNzd29yZFwiIDogXCJwYXNzd29yZDZcIixcbi8vICAgICAnVXNlcklkJyA6IDZ9LFxuLy8gICAgIHtcIm5hbWVcIiA6ICdVc2VyNycsXG4vLyAgICAgXCJwYXNzd29yZFwiIDogXCJwYXNzd29yZDdcIixcbi8vICAgICAnVXNlcklkJyA6IDd9XVxuXG5cblxuXG5cblxuY29uc3QgZXhlcmNpc2VfbGlzdCA9IFtcbiAgICB7J3Nwb3J0JzogJ3N3aW1taW5nJywgXG4gICAgJ2ltZ19zcmMnIDogJycsXG4gICAgJ2ZlYXR1cmVzJzpbJ2lkX3Nlc3Npb24nLCAnbWV0ZXJzJywgJ21pbnV0ZXMnLCAnc3ByaW50cycsICdkYXRlJ119LFxuICAgIHsnc3BvcnQnOiAncnVubmluZycsIFxuICAgICdpbWdfc3JjJzogJycsXG4gICAgJ2ZlYXR1cmVzJzpbJ2lkX3Nlc3Npb24nLCAnbWV0ZXJzJywgJ21pbnV0ZXMnLCAnc3ByaW50cycsICdkYXRlJ119LFxuICAgIHsnc3BvcnQnOiAnY3ljbGluZycsIFxuICAgICdpbWdfc3JjJzogJycsXG4gICAgJ2ZlYXR1cmVzJzpbJ2lkX3Nlc3Npb24nLCAnbWV0ZXJzJywgJ21pbnV0ZXMnLCAnc3ByaW50cycsICdkYXRlJ119LFxuICAgIHsnc3BvcnQnOiAnd29ya291dCcsIFxuICAgICdpbWdfc3JjJzogJycsXG4gICAgJ2ZlYXR1cmVzJzpbJ2lkX3Nlc3Npb24nLCAnc2Vzc2lvbl9kYXRhJywgJ2RhdGUnXX0sXG4gIF1cblxuY29uc3Qgd29ya291dF9leGVyY2lzZV9saXN0ID0gW1xuJycsICcnLCAnJ1xuXVxuXG5cblxuY29uc3QgcGVyZl91c2VyMSA9IFt7XG4gICAgJ3Nwb3J0JyA6ICdzd2ltbWluZycsXG4gICAgJ2lkX3Nlc3Npb24nIDogMSxcbiAgICAnZGF0ZScgOiAnMzAtMDMtMjAyMCcsXG4gICAgJ21ldGVycycgOiAxNTAwLFxuICAgICdtaW51dGVzJyA6IDYwLFxuICAgICduYl9zcHJpbnQnIDogM1xufSx7XG4gICAgJ3Nwb3J0JyA6ICdzd2ltbWluZycsXG4gICAgJ2lkX3Nlc3Npb24nIDogMixcbiAgICAnZGF0ZScgOiAnMDEtMDQtMjAyMCcsXG4gICAgJ21ldGVycycgOiAxNjAwLFxuICAgICdtaW51dGVzJyA6IDUxLFxuICAgICduYl9zcHJpbnQnIDogM1xufSx7XG4gICAgJ3Nwb3J0JyA6ICdzd2ltbWluZycsXG4gICAgJ2lkX3Nlc3Npb24nIDogMyxcbiAgICAnZGF0ZScgOiBcIjAyLTA0LTIwMjBcIixcbiAgICAnbWV0ZXJzJyA6IDE1MDAsXG4gICAgJ21pbnV0ZXMnIDogNTQsXG4gICAgJ25iX3NwcmludCcgOiA0XG59LHtcbiAgICAnc3BvcnQnIDogJ3N3aW1taW5nJyxcbiAgICAnaWRfc2Vzc2lvbicgOiA0LFxuICAgICdkYXRlJyA6ICcwMy0wNC0yMDIwJyxcbiAgICAnbWV0ZXJzJyA6IDE3MDAsXG4gICAgJ21pbnV0ZXMnIDogNzAsXG4gICAgJ25iX3NwcmludCcgOiAzXG59LHtcbiAgICAnc3BvcnQnIDogJ3N3aW1taW5nJyxcbiAgICAnaWRfc2Vzc2lvbicgOiA1LFxuICAgICdkYXRlJyA6IFwiMDUtMDQtMjAyMFwiLFxuICAgICdtZXRlcnMnIDogMTIwMCxcbiAgICAnbWludXRlcycgOiA0MCxcbiAgICAnbmJfc3ByaW50JyA6IDJcbn0se1xuICAgICdzcG9ydCcgOiAnc3dpbW1pbmcnLFxuICAgICdpZF9zZXNzaW9uJyA6IDYsXG4gICAgJ2RhdGUnIDogXCIwNy0wNC0yMDIwXCIsXG4gICAgJ21ldGVycycgOiAxNDAwLFxuICAgICdtaW51dGVzJyA6IDUwLFxuICAgICduYl9zcHJpbnQnIDogM1xufVxuXG5dXG5cblxuY29uc3Qgd29ya291dF9leGVyY2lzZSA9IFtcbiAgICB7J25hbWUnOiAnU3F1YXRzJywgJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCAnZ3JvdXAnIDogJ0xlZ3MnfSxcbiAgICB7J25hbWUnOiAnU3RhaXIgQ2xpbWJzJywgJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCAnZ3JvdXAnIDogJ0xlZ3MnfSxcbiAgICB7J25hbWUnOiAnUHVzaC1VcHMnLCdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwnZ3JvdXAnIDogJ1B1c2gtVXBzJ30sXG4gICAgeyduYW1lJzogJ0xhdGVyYWwgUHVzaC1VcHMnLCdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwgJ2dyb3VwJyA6ICdQdXNoLVVwcyd9LFxuICAgIHsnbmFtZSc6ICdKdW1waW5nIFB1c2gtVXBzJywnZmVhdHVyZXMnIDogWydTZXJpZXMnLCAnTnVtYmVyJ10sICdncm91cCcgOiAnUHVzaC1VcHMnfSxcbiAgICB7J25hbWUnOiAnQ2xvc2UgUHVzaC1VcHMnLCdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwgJ2dyb3VwJyA6ICdQdXNoLVVwcyd9LFxuICAgIHsnbmFtZSc6ICdSYWlzZWQgUHVzaC1VcHMnLCdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwgJ2dyb3VwJyA6ICdQdXNoLVVwcyd9LFxuICAgIHsnbmFtZSc6ICdBYmRvbWluYWwnLCdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwgJ2dyb3VwJyA6ICdBYmRvbWluYWxzJ30sXG4gICAgeyduYW1lJzogJ0FiZG9taW5hbCBMYXRlcmFsJywnZmVhdHVyZXMnIDogWydTZXJpZXMnLCAnTnVtYmVyJ10sICdncm91cCcgOiAnQWJkb21pbmFscyd9LFxuICAgIHsnbmFtZSc6ICdDb3JlIEFiZG9taW5hbCcsJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ1NlY29uZHMnXSwgJ2dyb3VwJyA6ICdBYmRvbWluYWxzJ30sXG4gICAgeyduYW1lJzogJ0JlbmNoJywgJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ1dlaWdodCddLCAnZ3JvdXAnIDogJyd9LFxuICAgIHsnbmFtZSc6ICdCaWNlcHMgV2VpZ2h0JywgJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ1dlaWdodCddLCdncm91cCcgOiAnJ30sXG4gICAgeyduYW1lJzogJ1B1bGwgVXBzJywgJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ1dlaWdodCddLCdncm91cCcgOiAnJ30sXG4gICAgIFxuXVxuXG5cblxuY29uc3QgcGVyZjF3b3Jrb3V0ID0ge1xuICAgICdzcG9ydCcgOiAnd29ya291dCcsXG4gICAgJ1NxdWF0cycgOiB7J1NlcmllcycgOiAzLCAnTnVtYmVyJyA6IDMwfSxcbidQdXNoLVVwcycgOiB7J1NlcmllcycgOiAzLCAnTnVtYmVyJyA6IDI1fSxcbidMYXRlcmFsIFB1c2gtVXBzJyA6IHsnU2VyaWVzJyA6IDEsICdOdW1iZXInIDogMjV9LFxuJ0p1bXBpbmcgUHVzaC1VcHMnIDogeydTZXJpZXMnIDogMSwgJ051bWJlcicgOiAyNX0sXG4nQWJkb21pbmFsJyA6IHsnU2VyaWVzJyA6IDMsICdOdW1iZXInIDogMzB9LFxuJ0FiZG9taW5hbCBMYXRlcmFsJyA6IHsnU2VyaWVzJyA6IDMsICdOdW1iZXInIDogMzB9LFxuJ0JpY2VwcyBXZWlnaHQnOiB7J1NlcmllcycgOiAzLCAnV2VpZ2h0JyA6IDE1fVxufVxuXG5cblxuXG5cbmNvbnN0IHBlcmZfVXNlcklkID0gXG4gICAgeydzd2ltbWluZyc6IFtcbiAgICAgICAgeydpZF9zZXNzaW9uJyA6IDEsXG4gICAgICAgICdtZXRlcnMnOiAxNTAwLCBcbiAgICAgICAgJ21pbnV0ZXMnIDogNTAsXG4gICAgJ3NwcmludCc6IDIsXG4gICAgJ2RhdGUnOiAnMzAtMDMtMjAyMCdcbiAgICAgICAgfSxcdFx0XG4gICAgICAgIHsnaWRfc2Vzc2lvbicgOiAyLFxuICAgICAgICAnbWV0ZXJzJzogMTQwMCwgXG4gICAgICAgICdtaW51dGVzJyA6IDYwLFxuICAgICdzcHJpbnRzJyA6IDIsICBcbiAgICAnZGF0ZSc6ICcwMS0wNC0yMDIwJ1xuICAgICAgICB9LFxuICAgIHsnaWRfc2Vzc2lvbicgOiAzLFxuICAgICAgICAnbWV0ZXJzJzogMTQwMCwgXG4gICAgICAgICdtaW51dGVzJyA6IDYwLFxuICAgICdzcHJpbnRzJyA6IDIsICBcbiAgICAnZGF0ZSc6ICcwMi0wNC0yMDIwJ1xuICAgICAgICB9LFxuICAgIF0sXG4gICAgJ3J1bm5pbmcnIDogW1xuICAgIHsnaWRfc2Vzc2lvbic6MSxcbiAgICAnbWV0ZXJzJyA6IDQ1MDAsXG4gICAgJ2VsZXZhdGlvbicgOiA1MDAsXG4gICAgJ2RhdGUnOiAnMzAtMDMtMjAyMCdcbiAgICB9LFxuICAgIHsnaWRfc2Vzc2lvbic6MixcbiAgICAnbWV0ZXJzJyA6IDU1MDAsXG4gICAgJ2VsZXZhdGlvbicgOiAyMDAsXG4gICAgJ2RhdGUnOiAnMDEtMDQtMjAyMCdcblxuICAgIH0sXG4gICAgeydpZF9zZXNzaW9uJzozLFxuICAgICdtZXRlcnMnIDogNjAwMCxcbiAgICAnZWxldmF0aW9uJyA6IDQwMCxcbiAgICAnZGF0ZSc6ICcwMi0wNC0yMDIwJ1xuICAgIH0sXG5dLFxuICAgICd3b3Jrb3V0JyA6IFtcbiAgICB7J2lkX3Nlc3Npb24nOjEsXG4gICAgJ2RhdGUnIDogJzMwLTAzLTIwMjAnLFxuICAgICdzZXNzaW9uX2RhdGEnOiBbXG4gICAgXX0sXG4gICAgeydpZF9zZXNzaW9uJzoyLFxuICAgICdkYXRlJyA6ICczMC0wMy0yMDIwJyxcbiAgICAnc2Vzc2lvbl9kYXRhJzogW1xuICAgIF19LFxuICAgIHsnaWRfc2Vzc2lvbic6MyxcbiAgICAnZGF0ZScgOiAnMzAtMDMtMjAyMCcsXG4gICAgJ3Nlc3Npb25fZGF0YSc6IFtcbiAgICBdfVxuXSxcbidjeWNsaW5nJyA6IFtcbiAgICB7J2lkX3Nlc3Npb24nOjEsXG4gICAgJ21ldGVycycgOiAxNTAwMCxcbiAgICAnZWxldmF0aW9uJzogMjAwMCxcbiAgICAnZGF0ZSc6ICczMC0wMy0yMDIwJ1xuICAgIH0sXG4gICAgeydpZF9zZXNzaW9uJzoyLFxuICAgICdtZXRlcnMnIDogMTQwMDAsXG4gICAgJ2VsZXZhdGlvbic6IDIwMDAsXG4gICAgJ2RhdGUnOiAnMDEtMDQtMjAyMCdcbiAgICB9LFxuICAgIHsnaWRfc2Vzc2lvbic6NCxcbiAgICAnbWV0ZXJzJyA6IDE4MDAwLFxuICAgICdlbGV2YXRpb24nOiAyMDAwLFxuICAgICdkYXRlJzogJzAyLTA0LTIwMjAnXG4gICAgfV19XG5cblxuY29uc3QgcGVyZm9ybWFuY2VfZGF0YSA9IFtcbiAgICB7J3VzZXInIDogJ1VzZXIxJyxcbiAgICAnc3dpbW1pbmcnOiBbXG4gICAgICAgIHsnaWRfc2Vzc2lvbicgOiAxLFxuICAgICAgICAnbWV0ZXJzJzogMTUwMCwgXG4gICAgICAgICdtaW51dGVzJyA6IDUwLFxuICAgICdzcHJpbnQnOiAyLFxuICAgICdkYXRlJzogJzMwLTAzLTIwMjAnXG4gICAgICAgIH0sXHRcdFxuICAgICAgICB7J2lkX3Nlc3Npb24nIDogMixcbiAgICAgICAgJ21ldGVycyc6IDE0MDAsIFxuICAgICAgICAnbWludXRlcycgOiA2MCxcbiAgICAnc3ByaW50cycgOiAyLCAgXG4gICAgJ2RhdGUnOiAnMDEtMDQtMjAyMCdcbiAgICAgICAgfSxcbiAgICB7J2lkX3Nlc3Npb24nIDogMyxcbiAgICAgICAgJ21ldGVycyc6IDE0MDAsIFxuICAgICAgICAnbWludXRlcycgOiA2MCxcbiAgICAnc3ByaW50cycgOiAyLCAgXG4gICAgJ2RhdGUnOiAnMDItMDQtMjAyMCdcbiAgICAgICAgfSxcbiAgICBdLFxuICAgICdydW5uaW5nJyA6IFtcbiAgICB7J2lkX3Nlc3Npb24nOjEsXG4gICAgJ21ldGVycycgOiA0NTAwLFxuICAgICdlbGV2YXRpb24nIDogNTAwLFxuICAgICdkYXRlJzogJzMwLTAzLTIwMjAnXG4gICAgfSxcbiAgICB7J2lkX3Nlc3Npb24nOjIsXG4gICAgJ21ldGVycycgOiA1NTAwLFxuICAgICdlbGV2YXRpb24nIDogMjAwLFxuICAgICdkYXRlJzogJzAxLTA0LTIwMjAnXG5cbiAgICB9LFxuICAgIHsnaWRfc2Vzc2lvbic6MyxcbiAgICAnbWV0ZXJzJyA6IDYwMDAsXG4gICAgJ2VsZXZhdGlvbicgOiA0MDAsXG4gICAgJ2RhdGUnOiAnMDItMDQtMjAyMCdcbiAgICB9LFxuXSxcbiAgICAnd29ya291dCcgOiBbXG4gICAgeydpZF9zZXNzaW9uJzoxLFxuICAgICdkYXRlJyA6ICczMC0wMy0yMDIwJyxcbiAgICAnc2Vzc2lvbl9kYXRhJzogW1xuICAgIF19LFxuICAgIHsnaWRfc2Vzc2lvbic6MixcbiAgICAnZGF0ZScgOiAnMzAtMDMtMjAyMCcsXG4gICAgJ3Nlc3Npb25fZGF0YSc6IFtcbiAgICBdfSxcbiAgICB7J2lkX3Nlc3Npb24nOjMsXG4gICAgJ2RhdGUnIDogJzMwLTAzLTIwMjAnLFxuICAgICdzZXNzaW9uX2RhdGEnOiBbXG4gICAgXX1cbl0sXG4nY3ljbGluZycgOiBbXG4gICAgeydpZF9zZXNzaW9uJzoxLFxuICAgICdtZXRlcnMnIDogMTUwMDAsXG4gICAgJ2VsZXZhdGlvbic6IDIwMDAsXG4gICAgJ2RhdGUnOiAnMzAtMDMtMjAyMCdcbiAgICB9LFxuICAgIHsnaWRfc2Vzc2lvbic6MixcbiAgICAnbWV0ZXJzJyA6IDE0MDAwLFxuICAgICdlbGV2YXRpb24nOiAyMDAwLFxuICAgICdkYXRlJzogJzAxLTA0LTIwMjAnXG4gICAgfSxcbiAgICB7J2lkX3Nlc3Npb24nOjQsXG4gICAgJ21ldGVycycgOiAxODAwMCxcbiAgICAnZWxldmF0aW9uJzogMjAwMCxcbiAgICAnZGF0ZSc6ICcwMi0wNC0yMDIwJ1xuICAgIH1dfSxcblxuXVxuXG5mdW5jdGlvbiBnZXRQZXJmb3JtYW5jZURhdGEoKXtcbnJldHVybiBwZXJmb3JtYW5jZV9kYXRhXG59XG5cbmZ1bmN0aW9uIGdldEV4ZXJjaXNlTGlzdCgpe1xucmV0dXJuIGV4ZXJjaXNlX2xpc3Rcbn1cblxuLy9jb25zb2xlLmxvZyhnZXRQZXJmb3JtYW5jZURhdGEoKSlcbi8vY29uc29sZS5sb2coZ2V0RXhlcmNpc2VMaXN0KCkpXG5cblxuXG5mdW5jdGlvbiBjaGVja0FsbElucHV0UHJvdmlkZWQoc3BvcnQsIGxpc3RPZklucHV0cyl7XG5leGVyY2lzZV9saXN0ID0gZ2V0RXhlcmNpc2VMaXN0KClcbi8vIEZpbmQgcmlnaHQgc3BvcnQgZGF0YVxubmVjZXNzYXJ5X2lucHV0ID0gZXhlcmNpc2VfbGlzdC5maWx0ZXIoZWwgPT4gZWxbJ3Nwb3J0J10gPT0gc3BvcnQpWzBdXG5uZWNlc3NhcnlfaW5wdXQgPSBuZWNlc3NhcnlfaW5wdXQuZmVhdHVyZXNcbi8vIERvbnQgbmVlZCB0byBjaGVjayBmb3IgaWRfc2Vzc2lvblxuaW5kZXggPSBuZWNlc3NhcnlfaW5wdXQuaW5kZXhPZignaWRfc2Vzc2lvbicpXG5uZWNlc3NhcnlfaW5wdXQuc3BsaWNlKGluZGV4LCAxKVxuLy9jb25zb2xlLmxvZyhsaXN0T2ZJbnB1dHMpXG5naXZlbnBhcmFtID0gW11cbmxpc3RPZklucHV0cy5mb3JFYWNoKGVsID0+IGdpdmVucGFyYW0ucHVzaChlbC5wYXJhbSkpXG5pZiAobmVjZXNzYXJ5X2lucHV0LmV2ZXJ5KGVsID0+IGdpdmVucGFyYW0uaW5jbHVkZXMoZWwpKSl7XG4gICAgcmV0dXJuIHRydWVcbn1cbmVsc2UgcmV0dXJuIG5lY2Vzc2FyeV9pbnB1dFxufVxuXG4vKlxuY29uc29sZS5sb2coY2hlY2tBbGxJbnB1dFByb3ZpZGVkKCdzd2ltbWluZycsIFt7J3BhcmFtJzogJ2lkX3Nlc3Npb24nLCAndmFsdWUnIDogNH0sIHsncGFyYW0nOiAnbWV0ZXJzJywgJ3ZhbHVlJyA6IDR9XSkpXG5cbmNvbnNvbGUubG9nKGNoZWNrQWxsSW5wdXRQcm92aWRlZCgnc3dpbW1pbmcnLCBbeydwYXJhbSc6ICdpZF9zZXNzaW9uJywgJ3ZhbHVlJyA6IDR9LCB7J3BhcmFtJzogJ21ldGVycycsICd2YWx1ZScgOiA0fSwgeydwYXJhbSc6ICdtaW51dGVzJywgJ3ZhbHVlJyA6IDR9LCB7J3BhcmFtJzogJ3NwcmludHMnLCAndmFsdWUnIDogNH0sIHsncGFyYW0nOiAnZGF0ZScsICd2YWx1ZScgOiA0fV0pKSBcbiovXG5cblxuZnVuY3Rpb24gbmV3U2Vzc2lvbihzcG9ydCwgbGlzdE9mSW5wdXRzKXsgXG5jaGVjayA9IGNoZWNrQWxsSW5wdXRQcm92aWRlZChzcG9ydCwgbGlzdE9mSW5wdXRzKVxuaWYgKGNoZWNrID09IHRydWUpe1xuICAgIGRpY3QgPSB7fVxuICAgIGxpc3RPZklucHV0cy5mb3JFYWNoKGVsID0+IGRpY3RbZWwucGFyYW1dID0gZWwudmFsdWUpXG4gICAgcGVyZm9ybWFuY2VfZGF0YVtzcG9ydF0ucHVzaChkaWN0KVxuICAgIHJldHVybiAnQWRkZWQgbmV3IHNlc3Npb24gc3VjY2Vzc2Z1bGx5J1xufVxuZWxzZXtcbiAgICByZXR1cm4gYFNvbWUgYXJndW1lbnRzIGFyZSBtaXNzaW5nIHRvIGFkZCBuZXcgc2Vzc2lvbiBmb3IgJHtzcG9ydH06ICR7Y2hlY2t9YFxufVxufVxuXG4vKlxuY29uc29sZS5sb2cobmV3U2Vzc2lvbignc3dpbW1pbmcnLCBbeydwYXJhbSc6ICdpZF9zZXNzaW9uJywgJ3ZhbHVlJyA6IDR9LCB7J3BhcmFtJzogJ21ldGVycycsICd2YWx1ZScgOiA0fV0pKVxuXG5jb25zb2xlLmxvZyhuZXdTZXNzaW9uKCdzd2ltbWluZycsIFt7J3BhcmFtJzogJ2lkX3Nlc3Npb24nLCAndmFsdWUnIDogNH0sIHsncGFyYW0nOiAnbWV0ZXJzJywgJ3ZhbHVlJyA6IDR9LCB7J3BhcmFtJzogJ21pbnV0ZXMnLCAndmFsdWUnIDogNH0sIHsncGFyYW0nOiAnc3ByaW50cycsICd2YWx1ZScgOiA0fSwgeydwYXJhbSc6ICdkYXRlJywgJ3ZhbHVlJyA6IDR9XSkpXG5cbmNvbnNvbGUubG9nKHBlcmZvcm1hbmNlX2RhdGEpXG4qL1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDdXN0b21TcG9ydChzcG9ydCwgLi4uYXJncyl7XG5yZXR1cm4gJ3llYWggb3V0cHV0J1xufVxuXG5cbi8qXG5cblxuZnVuY3Rpb24gYWRkQ3VzdG9tRXhlcmNpc2Uoc3BvcnQsIC4uLmFyZ3Mpe1xuXG59XG5cblxuKi9cblxuXG5cblxuY29uc29sZS5sb2coJ2V2ZXJ5dGhpbmcgd29ya2luZycpXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHRlc3Qoc3RyaW5nKXtcbiAgICByZXR1cm4gc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IHthZGRDdXN0b21TcG9ydCwgdGVzdH0iLCJpbXBvcnQge2luaXR9IGZyb20gJ0BsaWIvbW9uZ28nXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldChyZXEsIHJlcykge1xuXHRcblx0Y29uc3Qge2RifSA9IGF3YWl0IGluaXQoKTtcblx0Y29uc3QgZGF0YV9yYXcgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwidXNlcjFfY29sbGVjdGlvblwiKS5maW5kKHt9KS50b0FycmF5KCk7XG5cdFxuXHRyZXMud3JpdGVIZWFkKDIwMCwge1xuXHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0fSk7XG5cblx0cmVzLmVuZChKU09OLnN0cmluZ2lmeShkYXRhX3JhdykpO1xuXHR9IiwiZnVuY3Rpb24gbm9vcCgpIHsgfVxuY29uc3QgaWRlbnRpdHkgPSB4ID0+IHg7XG5mdW5jdGlvbiBhc3NpZ24odGFyLCBzcmMpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZm9yIChjb25zdCBrIGluIHNyYylcbiAgICAgICAgdGFyW2tdID0gc3JjW2tdO1xuICAgIHJldHVybiB0YXI7XG59XG5mdW5jdGlvbiBpc19wcm9taXNlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG5mdW5jdGlvbiBhZGRfbG9jYXRpb24oZWxlbWVudCwgZmlsZSwgbGluZSwgY29sdW1uLCBjaGFyKSB7XG4gICAgZWxlbWVudC5fX3N2ZWx0ZV9tZXRhID0ge1xuICAgICAgICBsb2M6IHsgZmlsZSwgbGluZSwgY29sdW1uLCBjaGFyIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gcnVuKGZuKSB7XG4gICAgcmV0dXJuIGZuKCk7XG59XG5mdW5jdGlvbiBibGFua19vYmplY3QoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCk7XG59XG5mdW5jdGlvbiBydW5fYWxsKGZucykge1xuICAgIGZucy5mb3JFYWNoKHJ1bik7XG59XG5mdW5jdGlvbiBpc19mdW5jdGlvbih0aGluZykge1xuICAgIHJldHVybiB0eXBlb2YgdGhpbmcgPT09ICdmdW5jdGlvbic7XG59XG5mdW5jdGlvbiBzYWZlX25vdF9lcXVhbChhLCBiKSB7XG4gICAgcmV0dXJuIGEgIT0gYSA/IGIgPT0gYiA6IGEgIT09IGIgfHwgKChhICYmIHR5cGVvZiBhID09PSAnb2JqZWN0JykgfHwgdHlwZW9mIGEgPT09ICdmdW5jdGlvbicpO1xufVxuZnVuY3Rpb24gbm90X2VxdWFsKGEsIGIpIHtcbiAgICByZXR1cm4gYSAhPSBhID8gYiA9PSBiIDogYSAhPT0gYjtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlX3N0b3JlKHN0b3JlLCBuYW1lKSB7XG4gICAgaWYgKHN0b3JlICE9IG51bGwgJiYgdHlwZW9mIHN0b3JlLnN1YnNjcmliZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCcke25hbWV9JyBpcyBub3QgYSBzdG9yZSB3aXRoIGEgJ3N1YnNjcmliZScgbWV0aG9kYCk7XG4gICAgfVxufVxuZnVuY3Rpb24gc3Vic2NyaWJlKHN0b3JlLCAuLi5jYWxsYmFja3MpIHtcbiAgICBpZiAoc3RvcmUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbm9vcDtcbiAgICB9XG4gICAgY29uc3QgdW5zdWIgPSBzdG9yZS5zdWJzY3JpYmUoLi4uY2FsbGJhY2tzKTtcbiAgICByZXR1cm4gdW5zdWIudW5zdWJzY3JpYmUgPyAoKSA9PiB1bnN1Yi51bnN1YnNjcmliZSgpIDogdW5zdWI7XG59XG5mdW5jdGlvbiBnZXRfc3RvcmVfdmFsdWUoc3RvcmUpIHtcbiAgICBsZXQgdmFsdWU7XG4gICAgc3Vic2NyaWJlKHN0b3JlLCBfID0+IHZhbHVlID0gXykoKTtcbiAgICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiBjb21wb25lbnRfc3Vic2NyaWJlKGNvbXBvbmVudCwgc3RvcmUsIGNhbGxiYWNrKSB7XG4gICAgY29tcG9uZW50LiQkLm9uX2Rlc3Ryb3kucHVzaChzdWJzY3JpYmUoc3RvcmUsIGNhbGxiYWNrKSk7XG59XG5mdW5jdGlvbiBjcmVhdGVfc2xvdChkZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGZuKSB7XG4gICAgaWYgKGRlZmluaXRpb24pIHtcbiAgICAgICAgY29uc3Qgc2xvdF9jdHggPSBnZXRfc2xvdF9jb250ZXh0KGRlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZm4pO1xuICAgICAgICByZXR1cm4gZGVmaW5pdGlvblswXShzbG90X2N0eCk7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0X3Nsb3RfY29udGV4dChkZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGZuKSB7XG4gICAgcmV0dXJuIGRlZmluaXRpb25bMV0gJiYgZm5cbiAgICAgICAgPyBhc3NpZ24oJCRzY29wZS5jdHguc2xpY2UoKSwgZGVmaW5pdGlvblsxXShmbihjdHgpKSlcbiAgICAgICAgOiAkJHNjb3BlLmN0eDtcbn1cbmZ1bmN0aW9uIGdldF9zbG90X2NoYW5nZXMoZGVmaW5pdGlvbiwgJCRzY29wZSwgZGlydHksIGZuKSB7XG4gICAgaWYgKGRlZmluaXRpb25bMl0gJiYgZm4pIHtcbiAgICAgICAgY29uc3QgbGV0cyA9IGRlZmluaXRpb25bMl0oZm4oZGlydHkpKTtcbiAgICAgICAgaWYgKCQkc2NvcGUuZGlydHkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGxldHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBsZXRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY29uc3QgbWVyZ2VkID0gW107XG4gICAgICAgICAgICBjb25zdCBsZW4gPSBNYXRoLm1heCgkJHNjb3BlLmRpcnR5Lmxlbmd0aCwgbGV0cy5sZW5ndGgpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIG1lcmdlZFtpXSA9ICQkc2NvcGUuZGlydHlbaV0gfCBsZXRzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1lcmdlZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJCRzY29wZS5kaXJ0eSB8IGxldHM7XG4gICAgfVxuICAgIHJldHVybiAkJHNjb3BlLmRpcnR5O1xufVxuZnVuY3Rpb24gZXhjbHVkZV9pbnRlcm5hbF9wcm9wcyhwcm9wcykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3QgayBpbiBwcm9wcylcbiAgICAgICAgaWYgKGtbMF0gIT09ICckJylcbiAgICAgICAgICAgIHJlc3VsdFtrXSA9IHByb3BzW2tdO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBjb21wdXRlX3Jlc3RfcHJvcHMocHJvcHMsIGtleXMpIHtcbiAgICBjb25zdCByZXN0ID0ge307XG4gICAga2V5cyA9IG5ldyBTZXQoa2V5cyk7XG4gICAgZm9yIChjb25zdCBrIGluIHByb3BzKVxuICAgICAgICBpZiAoIWtleXMuaGFzKGspICYmIGtbMF0gIT09ICckJylcbiAgICAgICAgICAgIHJlc3Rba10gPSBwcm9wc1trXTtcbiAgICByZXR1cm4gcmVzdDtcbn1cbmZ1bmN0aW9uIG9uY2UoZm4pIHtcbiAgICBsZXQgcmFuID0gZmFsc2U7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIGlmIChyYW4pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHJhbiA9IHRydWU7XG4gICAgICAgIGZuLmNhbGwodGhpcywgLi4uYXJncyk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIG51bGxfdG9fZW1wdHkodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG59XG5mdW5jdGlvbiBzZXRfc3RvcmVfdmFsdWUoc3RvcmUsIHJldCwgdmFsdWUgPSByZXQpIHtcbiAgICBzdG9yZS5zZXQodmFsdWUpO1xuICAgIHJldHVybiByZXQ7XG59XG5jb25zdCBoYXNfcHJvcCA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xuZnVuY3Rpb24gYWN0aW9uX2Rlc3Ryb3llcihhY3Rpb25fcmVzdWx0KSB7XG4gICAgcmV0dXJuIGFjdGlvbl9yZXN1bHQgJiYgaXNfZnVuY3Rpb24oYWN0aW9uX3Jlc3VsdC5kZXN0cm95KSA/IGFjdGlvbl9yZXN1bHQuZGVzdHJveSA6IG5vb3A7XG59XG5cbmNvbnN0IGlzX2NsaWVudCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xubGV0IG5vdyA9IGlzX2NsaWVudFxuICAgID8gKCkgPT4gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpXG4gICAgOiAoKSA9PiBEYXRlLm5vdygpO1xubGV0IHJhZiA9IGlzX2NsaWVudCA/IGNiID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShjYikgOiBub29wO1xuLy8gdXNlZCBpbnRlcm5hbGx5IGZvciB0ZXN0aW5nXG5mdW5jdGlvbiBzZXRfbm93KGZuKSB7XG4gICAgbm93ID0gZm47XG59XG5mdW5jdGlvbiBzZXRfcmFmKGZuKSB7XG4gICAgcmFmID0gZm47XG59XG5cbmNvbnN0IHRhc2tzID0gbmV3IFNldCgpO1xuZnVuY3Rpb24gcnVuX3Rhc2tzKG5vdykge1xuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGlmICghdGFzay5jKG5vdykpIHtcbiAgICAgICAgICAgIHRhc2tzLmRlbGV0ZSh0YXNrKTtcbiAgICAgICAgICAgIHRhc2suZigpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHRhc2tzLnNpemUgIT09IDApXG4gICAgICAgIHJhZihydW5fdGFza3MpO1xufVxuLyoqXG4gKiBGb3IgdGVzdGluZyBwdXJwb3NlcyBvbmx5IVxuICovXG5mdW5jdGlvbiBjbGVhcl9sb29wcygpIHtcbiAgICB0YXNrcy5jbGVhcigpO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHRhc2sgdGhhdCBydW5zIG9uIGVhY2ggcmFmIGZyYW1lXG4gKiB1bnRpbCBpdCByZXR1cm5zIGEgZmFsc3kgdmFsdWUgb3IgaXMgYWJvcnRlZFxuICovXG5mdW5jdGlvbiBsb29wKGNhbGxiYWNrKSB7XG4gICAgbGV0IHRhc2s7XG4gICAgaWYgKHRhc2tzLnNpemUgPT09IDApXG4gICAgICAgIHJhZihydW5fdGFza3MpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb21pc2U6IG5ldyBQcm9taXNlKGZ1bGZpbGwgPT4ge1xuICAgICAgICAgICAgdGFza3MuYWRkKHRhc2sgPSB7IGM6IGNhbGxiYWNrLCBmOiBmdWxmaWxsIH0pO1xuICAgICAgICB9KSxcbiAgICAgICAgYWJvcnQoKSB7XG4gICAgICAgICAgICB0YXNrcy5kZWxldGUodGFzayk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBhcHBlbmQodGFyZ2V0LCBub2RlKSB7XG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xufVxuZnVuY3Rpb24gaW5zZXJ0KHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgdGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCBhbmNob3IgfHwgbnVsbCk7XG59XG5mdW5jdGlvbiBkZXRhY2gobm9kZSkge1xuICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbn1cbmZ1bmN0aW9uIGRlc3Ryb3lfZWFjaChpdGVyYXRpb25zLCBkZXRhY2hpbmcpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXJhdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGl0ZXJhdGlvbnNbaV0pXG4gICAgICAgICAgICBpdGVyYXRpb25zW2ldLmQoZGV0YWNoaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiBlbGVtZW50KG5hbWUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKTtcbn1cbmZ1bmN0aW9uIGVsZW1lbnRfaXMobmFtZSwgaXMpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lLCB7IGlzIH0pO1xufVxuZnVuY3Rpb24gb2JqZWN0X3dpdGhvdXRfcHJvcGVydGllcyhvYmosIGV4Y2x1ZGUpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGsgaW4gb2JqKSB7XG4gICAgICAgIGlmIChoYXNfcHJvcChvYmosIGspXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAmJiBleGNsdWRlLmluZGV4T2YoaykgPT09IC0xKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB0YXJnZXRba10gPSBvYmpba107XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIHN2Z19lbGVtZW50KG5hbWUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIG5hbWUpO1xufVxuZnVuY3Rpb24gdGV4dChkYXRhKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEpO1xufVxuZnVuY3Rpb24gc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRleHQoJyAnKTtcbn1cbmZ1bmN0aW9uIGVtcHR5KCkge1xuICAgIHJldHVybiB0ZXh0KCcnKTtcbn1cbmZ1bmN0aW9uIGxpc3Rlbihub2RlLCBldmVudCwgaGFuZGxlciwgb3B0aW9ucykge1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgcmV0dXJuICgpID0+IG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG59XG5mdW5jdGlvbiBwcmV2ZW50X2RlZmF1bHQoZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH07XG59XG5mdW5jdGlvbiBzdG9wX3Byb3BhZ2F0aW9uKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHNlbGYoZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcylcbiAgICAgICAgICAgIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH07XG59XG5mdW5jdGlvbiBhdHRyKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbClcbiAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICBlbHNlIGlmIChub2RlLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpICE9PSB2YWx1ZSlcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBzZXRfYXR0cmlidXRlcyhub2RlLCBhdHRyaWJ1dGVzKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IGRlc2NyaXB0b3JzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMobm9kZS5fX3Byb3RvX18pO1xuICAgIGZvciAoY29uc3Qga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXNba2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGtleSA9PT0gJ3N0eWxlJykge1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5jc3NUZXh0ID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGtleSA9PT0gJ19fdmFsdWUnKSB7XG4gICAgICAgICAgICBub2RlLnZhbHVlID0gbm9kZVtrZXldID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRlc2NyaXB0b3JzW2tleV0gJiYgZGVzY3JpcHRvcnNba2V5XS5zZXQpIHtcbiAgICAgICAgICAgIG5vZGVba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGF0dHIobm9kZSwga2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gc2V0X3N2Z19hdHRyaWJ1dGVzKG5vZGUsIGF0dHJpYnV0ZXMpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGF0dHIobm9kZSwga2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNldF9jdXN0b21fZWxlbWVudF9kYXRhKG5vZGUsIHByb3AsIHZhbHVlKSB7XG4gICAgaWYgKHByb3AgaW4gbm9kZSkge1xuICAgICAgICBub2RlW3Byb3BdID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhdHRyKG5vZGUsIHByb3AsIHZhbHVlKTtcbiAgICB9XG59XG5mdW5jdGlvbiB4bGlua19hdHRyKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBub2RlLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBnZXRfYmluZGluZ19ncm91cF92YWx1ZShncm91cCkge1xuICAgIGNvbnN0IHZhbHVlID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncm91cC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoZ3JvdXBbaV0uY2hlY2tlZClcbiAgICAgICAgICAgIHZhbHVlLnB1c2goZ3JvdXBbaV0uX192YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHRvX251bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gJycgPyB1bmRlZmluZWQgOiArdmFsdWU7XG59XG5mdW5jdGlvbiB0aW1lX3Jhbmdlc190b19hcnJheShyYW5nZXMpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFuZ2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGFycmF5LnB1c2goeyBzdGFydDogcmFuZ2VzLnN0YXJ0KGkpLCBlbmQ6IHJhbmdlcy5lbmQoaSkgfSk7XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbn1cbmZ1bmN0aW9uIGNoaWxkcmVuKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkTm9kZXMpO1xufVxuZnVuY3Rpb24gY2xhaW1fZWxlbWVudChub2RlcywgbmFtZSwgYXR0cmlidXRlcywgc3ZnKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIGlmIChub2RlLm5vZGVOYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgICBsZXQgaiA9IDA7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IG5vZGUuYXR0cmlidXRlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBub2RlLmF0dHJpYnV0ZXNbal07XG4gICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXNbYXR0cmlidXRlLm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZS5uYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbm9kZXMuc3BsaWNlKGksIDEpWzBdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdmcgPyBzdmdfZWxlbWVudChuYW1lKSA6IGVsZW1lbnQobmFtZSk7XG59XG5mdW5jdGlvbiBjbGFpbV90ZXh0KG5vZGVzLCBkYXRhKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAgICAgICBub2RlLmRhdGEgPSAnJyArIGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gbm9kZXMuc3BsaWNlKGksIDEpWzBdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0ZXh0KGRhdGEpO1xufVxuZnVuY3Rpb24gY2xhaW1fc3BhY2Uobm9kZXMpIHtcbiAgICByZXR1cm4gY2xhaW1fdGV4dChub2RlcywgJyAnKTtcbn1cbmZ1bmN0aW9uIHNldF9kYXRhKHRleHQsIGRhdGEpIHtcbiAgICBkYXRhID0gJycgKyBkYXRhO1xuICAgIGlmICh0ZXh0LmRhdGEgIT09IGRhdGEpXG4gICAgICAgIHRleHQuZGF0YSA9IGRhdGE7XG59XG5mdW5jdGlvbiBzZXRfaW5wdXRfdmFsdWUoaW5wdXQsIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICE9IG51bGwgfHwgaW5wdXQudmFsdWUpIHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG59XG5mdW5jdGlvbiBzZXRfaW5wdXRfdHlwZShpbnB1dCwgdHlwZSkge1xuICAgIHRyeSB7XG4gICAgICAgIGlucHV0LnR5cGUgPSB0eXBlO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgfVxufVxuZnVuY3Rpb24gc2V0X3N0eWxlKG5vZGUsIGtleSwgdmFsdWUsIGltcG9ydGFudCkge1xuICAgIG5vZGUuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCB2YWx1ZSwgaW1wb3J0YW50ID8gJ2ltcG9ydGFudCcgOiAnJyk7XG59XG5mdW5jdGlvbiBzZWxlY3Rfb3B0aW9uKHNlbGVjdCwgdmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuICAgICAgICBpZiAob3B0aW9uLl9fdmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gc2VsZWN0X29wdGlvbnMoc2VsZWN0LCB2YWx1ZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0Lm9wdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gc2VsZWN0Lm9wdGlvbnNbaV07XG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IH52YWx1ZS5pbmRleE9mKG9wdGlvbi5fX3ZhbHVlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzZWxlY3RfdmFsdWUoc2VsZWN0KSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRfb3B0aW9uID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJzpjaGVja2VkJykgfHwgc2VsZWN0Lm9wdGlvbnNbMF07XG4gICAgcmV0dXJuIHNlbGVjdGVkX29wdGlvbiAmJiBzZWxlY3RlZF9vcHRpb24uX192YWx1ZTtcbn1cbmZ1bmN0aW9uIHNlbGVjdF9tdWx0aXBsZV92YWx1ZShzZWxlY3QpIHtcbiAgICByZXR1cm4gW10ubWFwLmNhbGwoc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJzpjaGVja2VkJyksIG9wdGlvbiA9PiBvcHRpb24uX192YWx1ZSk7XG59XG4vLyB1bmZvcnR1bmF0ZWx5IHRoaXMgY2FuJ3QgYmUgYSBjb25zdGFudCBhcyB0aGF0IHdvdWxkbid0IGJlIHRyZWUtc2hha2VhYmxlXG4vLyBzbyB3ZSBjYWNoZSB0aGUgcmVzdWx0IGluc3RlYWRcbmxldCBjcm9zc29yaWdpbjtcbmZ1bmN0aW9uIGlzX2Nyb3Nzb3JpZ2luKCkge1xuICAgIGlmIChjcm9zc29yaWdpbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNyb3Nzb3JpZ2luID0gZmFsc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHZvaWQgd2luZG93LnBhcmVudC5kb2N1bWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNyb3Nzb3JpZ2luID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3Jvc3NvcmlnaW47XG59XG5mdW5jdGlvbiBhZGRfcmVzaXplX2xpc3RlbmVyKG5vZGUsIGZuKSB7XG4gICAgY29uc3QgY29tcHV0ZWRfc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIGNvbnN0IHpfaW5kZXggPSAocGFyc2VJbnQoY29tcHV0ZWRfc3R5bGUuekluZGV4KSB8fCAwKSAtIDE7XG4gICAgaWYgKGNvbXB1dGVkX3N0eWxlLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgICAgICBub2RlLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICB9XG4gICAgY29uc3QgaWZyYW1lID0gZWxlbWVudCgnaWZyYW1lJyk7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyBgICtcbiAgICAgICAgYG92ZXJmbG93OiBoaWRkZW47IGJvcmRlcjogMDsgb3BhY2l0eTogMDsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHotaW5kZXg6ICR7el9pbmRleH07YCk7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIGlmcmFtZS50YWJJbmRleCA9IC0xO1xuICAgIGxldCB1bnN1YnNjcmliZTtcbiAgICBpZiAoaXNfY3Jvc3NvcmlnaW4oKSkge1xuICAgICAgICBpZnJhbWUuc3JjID0gYGRhdGE6dGV4dC9odG1sLDxzY3JpcHQ+b25yZXNpemU9ZnVuY3Rpb24oKXtwYXJlbnQucG9zdE1lc3NhZ2UoMCwnKicpfTwvc2NyaXB0PmA7XG4gICAgICAgIHVuc3Vic2NyaWJlID0gbGlzdGVuKHdpbmRvdywgJ21lc3NhZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5zb3VyY2UgPT09IGlmcmFtZS5jb250ZW50V2luZG93KVxuICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWZyYW1lLnNyYyA9ICdhYm91dDpibGFuayc7XG4gICAgICAgIGlmcmFtZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZSA9IGxpc3RlbihpZnJhbWUuY29udGVudFdpbmRvdywgJ3Jlc2l6ZScsIGZuKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgYXBwZW5kKG5vZGUsIGlmcmFtZSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgZGV0YWNoKGlmcmFtZSk7XG4gICAgICAgIGlmICh1bnN1YnNjcmliZSlcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHRvZ2dsZV9jbGFzcyhlbGVtZW50LCBuYW1lLCB0b2dnbGUpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdFt0b2dnbGUgPyAnYWRkJyA6ICdyZW1vdmUnXShuYW1lKTtcbn1cbmZ1bmN0aW9uIGN1c3RvbV9ldmVudCh0eXBlLCBkZXRhaWwpIHtcbiAgICBjb25zdCBlID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgZS5pbml0Q3VzdG9tRXZlbnQodHlwZSwgZmFsc2UsIGZhbHNlLCBkZXRhaWwpO1xuICAgIHJldHVybiBlO1xufVxuZnVuY3Rpb24gcXVlcnlfc2VsZWN0b3JfYWxsKHNlbGVjdG9yLCBwYXJlbnQgPSBkb2N1bWVudC5ib2R5KSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20ocGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbn1cbmNsYXNzIEh0bWxUYWcge1xuICAgIGNvbnN0cnVjdG9yKGh0bWwsIGFuY2hvciA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5lID0gZWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuYSA9IGFuY2hvcjtcbiAgICAgICAgdGhpcy51KGh0bWwpO1xuICAgIH1cbiAgICBtKHRhcmdldCwgYW5jaG9yID0gbnVsbCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaW5zZXJ0KHRhcmdldCwgdGhpcy5uW2ldLCBhbmNob3IpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudCA9IHRhcmdldDtcbiAgICB9XG4gICAgdShodG1sKSB7XG4gICAgICAgIHRoaXMuZS5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICB0aGlzLm4gPSBBcnJheS5mcm9tKHRoaXMuZS5jaGlsZE5vZGVzKTtcbiAgICB9XG4gICAgcChodG1sKSB7XG4gICAgICAgIHRoaXMuZCgpO1xuICAgICAgICB0aGlzLnUoaHRtbCk7XG4gICAgICAgIHRoaXMubSh0aGlzLnQsIHRoaXMuYSk7XG4gICAgfVxuICAgIGQoKSB7XG4gICAgICAgIHRoaXMubi5mb3JFYWNoKGRldGFjaCk7XG4gICAgfVxufVxuXG5jb25zdCBhY3RpdmVfZG9jcyA9IG5ldyBTZXQoKTtcbmxldCBhY3RpdmUgPSAwO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Rhcmtza3lhcHAvc3RyaW5nLWhhc2gvYmxvYi9tYXN0ZXIvaW5kZXguanNcbmZ1bmN0aW9uIGhhc2goc3RyKSB7XG4gICAgbGV0IGhhc2ggPSA1MzgxO1xuICAgIGxldCBpID0gc3RyLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKVxuICAgICAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgXiBzdHIuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gaGFzaCA+Pj4gMDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9ydWxlKG5vZGUsIGEsIGIsIGR1cmF0aW9uLCBkZWxheSwgZWFzZSwgZm4sIHVpZCA9IDApIHtcbiAgICBjb25zdCBzdGVwID0gMTYuNjY2IC8gZHVyYXRpb247XG4gICAgbGV0IGtleWZyYW1lcyA9ICd7XFxuJztcbiAgICBmb3IgKGxldCBwID0gMDsgcCA8PSAxOyBwICs9IHN0ZXApIHtcbiAgICAgICAgY29uc3QgdCA9IGEgKyAoYiAtIGEpICogZWFzZShwKTtcbiAgICAgICAga2V5ZnJhbWVzICs9IHAgKiAxMDAgKyBgJXske2ZuKHQsIDEgLSB0KX19XFxuYDtcbiAgICB9XG4gICAgY29uc3QgcnVsZSA9IGtleWZyYW1lcyArIGAxMDAlIHske2ZuKGIsIDEgLSBiKX19XFxufWA7XG4gICAgY29uc3QgbmFtZSA9IGBfX3N2ZWx0ZV8ke2hhc2gocnVsZSl9XyR7dWlkfWA7XG4gICAgY29uc3QgZG9jID0gbm9kZS5vd25lckRvY3VtZW50O1xuICAgIGFjdGl2ZV9kb2NzLmFkZChkb2MpO1xuICAgIGNvbnN0IHN0eWxlc2hlZXQgPSBkb2MuX19zdmVsdGVfc3R5bGVzaGVldCB8fCAoZG9jLl9fc3ZlbHRlX3N0eWxlc2hlZXQgPSBkb2MuaGVhZC5hcHBlbmRDaGlsZChlbGVtZW50KCdzdHlsZScpKS5zaGVldCk7XG4gICAgY29uc3QgY3VycmVudF9ydWxlcyA9IGRvYy5fX3N2ZWx0ZV9ydWxlcyB8fCAoZG9jLl9fc3ZlbHRlX3J1bGVzID0ge30pO1xuICAgIGlmICghY3VycmVudF9ydWxlc1tuYW1lXSkge1xuICAgICAgICBjdXJyZW50X3J1bGVzW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgc3R5bGVzaGVldC5pbnNlcnRSdWxlKGBAa2V5ZnJhbWVzICR7bmFtZX0gJHtydWxlfWAsIHN0eWxlc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTtcbiAgICB9XG4gICAgY29uc3QgYW5pbWF0aW9uID0gbm9kZS5zdHlsZS5hbmltYXRpb24gfHwgJyc7XG4gICAgbm9kZS5zdHlsZS5hbmltYXRpb24gPSBgJHthbmltYXRpb24gPyBgJHthbmltYXRpb259LCBgIDogYGB9JHtuYW1lfSAke2R1cmF0aW9ufW1zIGxpbmVhciAke2RlbGF5fW1zIDEgYm90aGA7XG4gICAgYWN0aXZlICs9IDE7XG4gICAgcmV0dXJuIG5hbWU7XG59XG5mdW5jdGlvbiBkZWxldGVfcnVsZShub2RlLCBuYW1lKSB7XG4gICAgY29uc3QgcHJldmlvdXMgPSAobm9kZS5zdHlsZS5hbmltYXRpb24gfHwgJycpLnNwbGl0KCcsICcpO1xuICAgIGNvbnN0IG5leHQgPSBwcmV2aW91cy5maWx0ZXIobmFtZVxuICAgICAgICA/IGFuaW0gPT4gYW5pbS5pbmRleE9mKG5hbWUpIDwgMCAvLyByZW1vdmUgc3BlY2lmaWMgYW5pbWF0aW9uXG4gICAgICAgIDogYW5pbSA9PiBhbmltLmluZGV4T2YoJ19fc3ZlbHRlJykgPT09IC0xIC8vIHJlbW92ZSBhbGwgU3ZlbHRlIGFuaW1hdGlvbnNcbiAgICApO1xuICAgIGNvbnN0IGRlbGV0ZWQgPSBwcmV2aW91cy5sZW5ndGggLSBuZXh0Lmxlbmd0aDtcbiAgICBpZiAoZGVsZXRlZCkge1xuICAgICAgICBub2RlLnN0eWxlLmFuaW1hdGlvbiA9IG5leHQuam9pbignLCAnKTtcbiAgICAgICAgYWN0aXZlIC09IGRlbGV0ZWQ7XG4gICAgICAgIGlmICghYWN0aXZlKVxuICAgICAgICAgICAgY2xlYXJfcnVsZXMoKTtcbiAgICB9XG59XG5mdW5jdGlvbiBjbGVhcl9ydWxlcygpIHtcbiAgICByYWYoKCkgPT4ge1xuICAgICAgICBpZiAoYWN0aXZlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBhY3RpdmVfZG9jcy5mb3JFYWNoKGRvYyA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdHlsZXNoZWV0ID0gZG9jLl9fc3ZlbHRlX3N0eWxlc2hlZXQ7XG4gICAgICAgICAgICBsZXQgaSA9IHN0eWxlc2hlZXQuY3NzUnVsZXMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKGktLSlcbiAgICAgICAgICAgICAgICBzdHlsZXNoZWV0LmRlbGV0ZVJ1bGUoaSk7XG4gICAgICAgICAgICBkb2MuX19zdmVsdGVfcnVsZXMgPSB7fTtcbiAgICAgICAgfSk7XG4gICAgICAgIGFjdGl2ZV9kb2NzLmNsZWFyKCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZV9hbmltYXRpb24obm9kZSwgZnJvbSwgZm4sIHBhcmFtcykge1xuICAgIGlmICghZnJvbSlcbiAgICAgICAgcmV0dXJuIG5vb3A7XG4gICAgY29uc3QgdG8gPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChmcm9tLmxlZnQgPT09IHRvLmxlZnQgJiYgZnJvbS5yaWdodCA9PT0gdG8ucmlnaHQgJiYgZnJvbS50b3AgPT09IHRvLnRvcCAmJiBmcm9tLmJvdHRvbSA9PT0gdG8uYm90dG9tKVxuICAgICAgICByZXR1cm4gbm9vcDtcbiAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCBcbiAgICAvLyBAdHMtaWdub3JlIHRvZG86IHNob3VsZCB0aGlzIGJlIHNlcGFyYXRlZCBmcm9tIGRlc3RydWN0dXJpbmc/IE9yIHN0YXJ0L2VuZCBhZGRlZCB0byBwdWJsaWMgYXBpIGFuZCBkb2N1bWVudGF0aW9uP1xuICAgIHN0YXJ0OiBzdGFydF90aW1lID0gbm93KCkgKyBkZWxheSwgXG4gICAgLy8gQHRzLWlnbm9yZSB0b2RvOlxuICAgIGVuZCA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbiwgdGljayA9IG5vb3AsIGNzcyB9ID0gZm4obm9kZSwgeyBmcm9tLCB0byB9LCBwYXJhbXMpO1xuICAgIGxldCBydW5uaW5nID0gdHJ1ZTtcbiAgICBsZXQgc3RhcnRlZCA9IGZhbHNlO1xuICAgIGxldCBuYW1lO1xuICAgIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICBpZiAoY3NzKSB7XG4gICAgICAgICAgICBuYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgMCwgMSwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFkZWxheSkge1xuICAgICAgICAgICAgc3RhcnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgaWYgKGNzcylcbiAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUsIG5hbWUpO1xuICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgfVxuICAgIGxvb3Aobm93ID0+IHtcbiAgICAgICAgaWYgKCFzdGFydGVkICYmIG5vdyA+PSBzdGFydF90aW1lKSB7XG4gICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnRlZCAmJiBub3cgPj0gZW5kKSB7XG4gICAgICAgICAgICB0aWNrKDEsIDApO1xuICAgICAgICAgICAgc3RvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcnVubmluZykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydGVkKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gbm93IC0gc3RhcnRfdGltZTtcbiAgICAgICAgICAgIGNvbnN0IHQgPSAwICsgMSAqIGVhc2luZyhwIC8gZHVyYXRpb24pO1xuICAgICAgICAgICAgdGljayh0LCAxIC0gdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gICAgc3RhcnQoKTtcbiAgICB0aWNrKDAsIDEpO1xuICAgIHJldHVybiBzdG9wO1xufVxuZnVuY3Rpb24gZml4X3Bvc2l0aW9uKG5vZGUpIHtcbiAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgaWYgKHN0eWxlLnBvc2l0aW9uICE9PSAnYWJzb2x1dGUnICYmIHN0eWxlLnBvc2l0aW9uICE9PSAnZml4ZWQnKSB7XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gc3R5bGU7XG4gICAgICAgIGNvbnN0IGEgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBub2RlLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgbm9kZS5zdHlsZS53aWR0aCA9IHdpZHRoO1xuICAgICAgICBub2RlLnN0eWxlLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgYWRkX3RyYW5zZm9ybShub2RlLCBhKTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRfdHJhbnNmb3JtKG5vZGUsIGEpIHtcbiAgICBjb25zdCBiID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoYS5sZWZ0ICE9PSBiLmxlZnQgfHwgYS50b3AgIT09IGIudG9wKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gc3R5bGUudHJhbnNmb3JtID09PSAnbm9uZScgPyAnJyA6IHN0eWxlLnRyYW5zZm9ybTtcbiAgICAgICAgbm9kZS5zdHlsZS50cmFuc2Zvcm0gPSBgJHt0cmFuc2Zvcm19IHRyYW5zbGF0ZSgke2EubGVmdCAtIGIubGVmdH1weCwgJHthLnRvcCAtIGIudG9wfXB4KWA7XG4gICAgfVxufVxuXG5sZXQgY3VycmVudF9jb21wb25lbnQ7XG5mdW5jdGlvbiBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgY3VycmVudF9jb21wb25lbnQgPSBjb21wb25lbnQ7XG59XG5mdW5jdGlvbiBnZXRfY3VycmVudF9jb21wb25lbnQoKSB7XG4gICAgaWYgKCFjdXJyZW50X2NvbXBvbmVudClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGdW5jdGlvbiBjYWxsZWQgb3V0c2lkZSBjb21wb25lbnQgaW5pdGlhbGl6YXRpb25gKTtcbiAgICByZXR1cm4gY3VycmVudF9jb21wb25lbnQ7XG59XG5mdW5jdGlvbiBiZWZvcmVVcGRhdGUoZm4pIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5iZWZvcmVfdXBkYXRlLnB1c2goZm4pO1xufVxuZnVuY3Rpb24gb25Nb3VudChmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLm9uX21vdW50LnB1c2goZm4pO1xufVxuZnVuY3Rpb24gYWZ0ZXJVcGRhdGUoZm4pIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5hZnRlcl91cGRhdGUucHVzaChmbik7XG59XG5mdW5jdGlvbiBvbkRlc3Ryb3koZm4pIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5vbl9kZXN0cm95LnB1c2goZm4pO1xufVxuZnVuY3Rpb24gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCkge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IGdldF9jdXJyZW50X2NvbXBvbmVudCgpO1xuICAgIHJldHVybiAodHlwZSwgZGV0YWlsKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9IGNvbXBvbmVudC4kJC5jYWxsYmFja3NbdHlwZV07XG4gICAgICAgIGlmIChjYWxsYmFja3MpIHtcbiAgICAgICAgICAgIC8vIFRPRE8gYXJlIHRoZXJlIHNpdHVhdGlvbnMgd2hlcmUgZXZlbnRzIGNvdWxkIGJlIGRpc3BhdGNoZWRcbiAgICAgICAgICAgIC8vIGluIGEgc2VydmVyIChub24tRE9NKSBlbnZpcm9ubWVudD9cbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gY3VzdG9tX2V2ZW50KHR5cGUsIGRldGFpbCk7XG4gICAgICAgICAgICBjYWxsYmFja3Muc2xpY2UoKS5mb3JFYWNoKGZuID0+IHtcbiAgICAgICAgICAgICAgICBmbi5jYWxsKGNvbXBvbmVudCwgZXZlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gc2V0Q29udGV4dChrZXksIGNvbnRleHQpIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0LnNldChrZXksIGNvbnRleHQpO1xufVxuZnVuY3Rpb24gZ2V0Q29udGV4dChrZXkpIHtcbiAgICByZXR1cm4gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuY29udGV4dC5nZXQoa2V5KTtcbn1cbi8vIFRPRE8gZmlndXJlIG91dCBpZiB3ZSBzdGlsbCB3YW50IHRvIHN1cHBvcnRcbi8vIHNob3J0aGFuZCBldmVudHMsIG9yIGlmIHdlIHdhbnQgdG8gaW1wbGVtZW50XG4vLyBhIHJlYWwgYnViYmxpbmcgbWVjaGFuaXNtXG5mdW5jdGlvbiBidWJibGUoY29tcG9uZW50LCBldmVudCkge1xuICAgIGNvbnN0IGNhbGxiYWNrcyA9IGNvbXBvbmVudC4kJC5jYWxsYmFja3NbZXZlbnQudHlwZV07XG4gICAgaWYgKGNhbGxiYWNrcykge1xuICAgICAgICBjYWxsYmFja3Muc2xpY2UoKS5mb3JFYWNoKGZuID0+IGZuKGV2ZW50KSk7XG4gICAgfVxufVxuXG5jb25zdCBkaXJ0eV9jb21wb25lbnRzID0gW107XG5jb25zdCBpbnRyb3MgPSB7IGVuYWJsZWQ6IGZhbHNlIH07XG5jb25zdCBiaW5kaW5nX2NhbGxiYWNrcyA9IFtdO1xuY29uc3QgcmVuZGVyX2NhbGxiYWNrcyA9IFtdO1xuY29uc3QgZmx1c2hfY2FsbGJhY2tzID0gW107XG5jb25zdCByZXNvbHZlZF9wcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5sZXQgdXBkYXRlX3NjaGVkdWxlZCA9IGZhbHNlO1xuZnVuY3Rpb24gc2NoZWR1bGVfdXBkYXRlKCkge1xuICAgIGlmICghdXBkYXRlX3NjaGVkdWxlZCkge1xuICAgICAgICB1cGRhdGVfc2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgICAgcmVzb2x2ZWRfcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9XG59XG5mdW5jdGlvbiB0aWNrKCkge1xuICAgIHNjaGVkdWxlX3VwZGF0ZSgpO1xuICAgIHJldHVybiByZXNvbHZlZF9wcm9taXNlO1xufVxuZnVuY3Rpb24gYWRkX3JlbmRlcl9jYWxsYmFjayhmbikge1xuICAgIHJlbmRlcl9jYWxsYmFja3MucHVzaChmbik7XG59XG5mdW5jdGlvbiBhZGRfZmx1c2hfY2FsbGJhY2soZm4pIHtcbiAgICBmbHVzaF9jYWxsYmFja3MucHVzaChmbik7XG59XG5sZXQgZmx1c2hpbmcgPSBmYWxzZTtcbmNvbnN0IHNlZW5fY2FsbGJhY2tzID0gbmV3IFNldCgpO1xuZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgaWYgKGZsdXNoaW5nKVxuICAgICAgICByZXR1cm47XG4gICAgZmx1c2hpbmcgPSB0cnVlO1xuICAgIGRvIHtcbiAgICAgICAgLy8gZmlyc3QsIGNhbGwgYmVmb3JlVXBkYXRlIGZ1bmN0aW9uc1xuICAgICAgICAvLyBhbmQgdXBkYXRlIGNvbXBvbmVudHNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXJ0eV9jb21wb25lbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBkaXJ0eV9jb21wb25lbnRzW2ldO1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICB1cGRhdGUoY29tcG9uZW50LiQkKTtcbiAgICAgICAgfVxuICAgICAgICBkaXJ0eV9jb21wb25lbnRzLmxlbmd0aCA9IDA7XG4gICAgICAgIHdoaWxlIChiaW5kaW5nX2NhbGxiYWNrcy5sZW5ndGgpXG4gICAgICAgICAgICBiaW5kaW5nX2NhbGxiYWNrcy5wb3AoKSgpO1xuICAgICAgICAvLyB0aGVuLCBvbmNlIGNvbXBvbmVudHMgYXJlIHVwZGF0ZWQsIGNhbGxcbiAgICAgICAgLy8gYWZ0ZXJVcGRhdGUgZnVuY3Rpb25zLiBUaGlzIG1heSBjYXVzZVxuICAgICAgICAvLyBzdWJzZXF1ZW50IHVwZGF0ZXMuLi5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW5kZXJfY2FsbGJhY2tzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IHJlbmRlcl9jYWxsYmFja3NbaV07XG4gICAgICAgICAgICBpZiAoIXNlZW5fY2FsbGJhY2tzLmhhcyhjYWxsYmFjaykpIHtcbiAgICAgICAgICAgICAgICAvLyAuLi5zbyBndWFyZCBhZ2FpbnN0IGluZmluaXRlIGxvb3BzXG4gICAgICAgICAgICAgICAgc2Vlbl9jYWxsYmFja3MuYWRkKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlbmRlcl9jYWxsYmFja3MubGVuZ3RoID0gMDtcbiAgICB9IHdoaWxlIChkaXJ0eV9jb21wb25lbnRzLmxlbmd0aCk7XG4gICAgd2hpbGUgKGZsdXNoX2NhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgZmx1c2hfY2FsbGJhY2tzLnBvcCgpKCk7XG4gICAgfVxuICAgIHVwZGF0ZV9zY2hlZHVsZWQgPSBmYWxzZTtcbiAgICBmbHVzaGluZyA9IGZhbHNlO1xuICAgIHNlZW5fY2FsbGJhY2tzLmNsZWFyKCk7XG59XG5mdW5jdGlvbiB1cGRhdGUoJCQpIHtcbiAgICBpZiAoJCQuZnJhZ21lbnQgIT09IG51bGwpIHtcbiAgICAgICAgJCQudXBkYXRlKCk7XG4gICAgICAgIHJ1bl9hbGwoJCQuYmVmb3JlX3VwZGF0ZSk7XG4gICAgICAgIGNvbnN0IGRpcnR5ID0gJCQuZGlydHk7XG4gICAgICAgICQkLmRpcnR5ID0gWy0xXTtcbiAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQucCgkJC5jdHgsIGRpcnR5KTtcbiAgICAgICAgJCQuYWZ0ZXJfdXBkYXRlLmZvckVhY2goYWRkX3JlbmRlcl9jYWxsYmFjayk7XG4gICAgfVxufVxuXG5sZXQgcHJvbWlzZTtcbmZ1bmN0aW9uIHdhaXQoKSB7XG4gICAgaWYgKCFwcm9taXNlKSB7XG4gICAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgcHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHByb21pc2UgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5mdW5jdGlvbiBkaXNwYXRjaChub2RlLCBkaXJlY3Rpb24sIGtpbmQpIHtcbiAgICBub2RlLmRpc3BhdGNoRXZlbnQoY3VzdG9tX2V2ZW50KGAke2RpcmVjdGlvbiA/ICdpbnRybycgOiAnb3V0cm8nfSR7a2luZH1gKSk7XG59XG5jb25zdCBvdXRyb2luZyA9IG5ldyBTZXQoKTtcbmxldCBvdXRyb3M7XG5mdW5jdGlvbiBncm91cF9vdXRyb3MoKSB7XG4gICAgb3V0cm9zID0ge1xuICAgICAgICByOiAwLFxuICAgICAgICBjOiBbXSxcbiAgICAgICAgcDogb3V0cm9zIC8vIHBhcmVudCBncm91cFxuICAgIH07XG59XG5mdW5jdGlvbiBjaGVja19vdXRyb3MoKSB7XG4gICAgaWYgKCFvdXRyb3Mucikge1xuICAgICAgICBydW5fYWxsKG91dHJvcy5jKTtcbiAgICB9XG4gICAgb3V0cm9zID0gb3V0cm9zLnA7XG59XG5mdW5jdGlvbiB0cmFuc2l0aW9uX2luKGJsb2NrLCBsb2NhbCkge1xuICAgIGlmIChibG9jayAmJiBibG9jay5pKSB7XG4gICAgICAgIG91dHJvaW5nLmRlbGV0ZShibG9jayk7XG4gICAgICAgIGJsb2NrLmkobG9jYWwpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRyYW5zaXRpb25fb3V0KGJsb2NrLCBsb2NhbCwgZGV0YWNoLCBjYWxsYmFjaykge1xuICAgIGlmIChibG9jayAmJiBibG9jay5vKSB7XG4gICAgICAgIGlmIChvdXRyb2luZy5oYXMoYmxvY2spKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBvdXRyb2luZy5hZGQoYmxvY2spO1xuICAgICAgICBvdXRyb3MuYy5wdXNoKCgpID0+IHtcbiAgICAgICAgICAgIG91dHJvaW5nLmRlbGV0ZShibG9jayk7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBpZiAoZGV0YWNoKVxuICAgICAgICAgICAgICAgICAgICBibG9jay5kKDEpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBibG9jay5vKGxvY2FsKTtcbiAgICB9XG59XG5jb25zdCBudWxsX3RyYW5zaXRpb24gPSB7IGR1cmF0aW9uOiAwIH07XG5mdW5jdGlvbiBjcmVhdGVfaW5fdHJhbnNpdGlvbihub2RlLCBmbiwgcGFyYW1zKSB7XG4gICAgbGV0IGNvbmZpZyA9IGZuKG5vZGUsIHBhcmFtcyk7XG4gICAgbGV0IHJ1bm5pbmcgPSBmYWxzZTtcbiAgICBsZXQgYW5pbWF0aW9uX25hbWU7XG4gICAgbGV0IHRhc2s7XG4gICAgbGV0IHVpZCA9IDA7XG4gICAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgICAgaWYgKGFuaW1hdGlvbl9uYW1lKVxuICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnbygpIHtcbiAgICAgICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgdGljayA9IG5vb3AsIGNzcyB9ID0gY29uZmlnIHx8IG51bGxfdHJhbnNpdGlvbjtcbiAgICAgICAgaWYgKGNzcylcbiAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgMCwgMSwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcywgdWlkKyspO1xuICAgICAgICB0aWNrKDAsIDEpO1xuICAgICAgICBjb25zdCBzdGFydF90aW1lID0gbm93KCkgKyBkZWxheTtcbiAgICAgICAgY29uc3QgZW5kX3RpbWUgPSBzdGFydF90aW1lICsgZHVyYXRpb247XG4gICAgICAgIGlmICh0YXNrKVxuICAgICAgICAgICAgdGFzay5hYm9ydCgpO1xuICAgICAgICBydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiBkaXNwYXRjaChub2RlLCB0cnVlLCAnc3RhcnQnKSk7XG4gICAgICAgIHRhc2sgPSBsb29wKG5vdyA9PiB7XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGlmIChub3cgPj0gZW5kX3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGljaygxLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgdHJ1ZSwgJ2VuZCcpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChub3cgPj0gc3RhcnRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ID0gZWFzaW5nKChub3cgLSBzdGFydF90aW1lKSAvIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgdGljayh0LCAxIC0gdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJ1bm5pbmc7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgc3RhcnRlZCA9IGZhbHNlO1xuICAgIHJldHVybiB7XG4gICAgICAgIHN0YXJ0KCkge1xuICAgICAgICAgICAgaWYgKHN0YXJ0ZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSk7XG4gICAgICAgICAgICBpZiAoaXNfZnVuY3Rpb24oY29uZmlnKSkge1xuICAgICAgICAgICAgICAgIGNvbmZpZyA9IGNvbmZpZygpO1xuICAgICAgICAgICAgICAgIHdhaXQoKS50aGVuKGdvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGdvKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGludmFsaWRhdGUoKSB7XG4gICAgICAgICAgICBzdGFydGVkID0gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIGVuZCgpIHtcbiAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBjcmVhdGVfb3V0X3RyYW5zaXRpb24obm9kZSwgZm4sIHBhcmFtcykge1xuICAgIGxldCBjb25maWcgPSBmbihub2RlLCBwYXJhbXMpO1xuICAgIGxldCBydW5uaW5nID0gdHJ1ZTtcbiAgICBsZXQgYW5pbWF0aW9uX25hbWU7XG4gICAgY29uc3QgZ3JvdXAgPSBvdXRyb3M7XG4gICAgZ3JvdXAuciArPSAxO1xuICAgIGZ1bmN0aW9uIGdvKCkge1xuICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCB0aWNrID0gbm9vcCwgY3NzIH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuICAgICAgICBpZiAoY3NzKVxuICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCAxLCAwLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzKTtcbiAgICAgICAgY29uc3Qgc3RhcnRfdGltZSA9IG5vdygpICsgZGVsYXk7XG4gICAgICAgIGNvbnN0IGVuZF90aW1lID0gc3RhcnRfdGltZSArIGR1cmF0aW9uO1xuICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IGRpc3BhdGNoKG5vZGUsIGZhbHNlLCAnc3RhcnQnKSk7XG4gICAgICAgIGxvb3Aobm93ID0+IHtcbiAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBlbmRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICB0aWNrKDAsIDEpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCBmYWxzZSwgJ2VuZCcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIS0tZ3JvdXAucikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3aWxsIHJlc3VsdCBpbiBgZW5kKClgIGJlaW5nIGNhbGxlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNvIHdlIGRvbid0IG5lZWQgdG8gY2xlYW4gdXAgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgcnVuX2FsbChncm91cC5jKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChub3cgPj0gc3RhcnRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ID0gZWFzaW5nKChub3cgLSBzdGFydF90aW1lKSAvIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgdGljaygxIC0gdCwgdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJ1bm5pbmc7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoaXNfZnVuY3Rpb24oY29uZmlnKSkge1xuICAgICAgICB3YWl0KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25maWcgPSBjb25maWcoKTtcbiAgICAgICAgICAgIGdvKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZ28oKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZW5kKHJlc2V0KSB7XG4gICAgICAgICAgICBpZiAocmVzZXQgJiYgY29uZmlnLnRpY2spIHtcbiAgICAgICAgICAgICAgICBjb25maWcudGljaygxLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbl9uYW1lKVxuICAgICAgICAgICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG4gICAgICAgICAgICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9iaWRpcmVjdGlvbmFsX3RyYW5zaXRpb24obm9kZSwgZm4sIHBhcmFtcywgaW50cm8pIHtcbiAgICBsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zKTtcbiAgICBsZXQgdCA9IGludHJvID8gMCA6IDE7XG4gICAgbGV0IHJ1bm5pbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgbGV0IHBlbmRpbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgbGV0IGFuaW1hdGlvbl9uYW1lID0gbnVsbDtcbiAgICBmdW5jdGlvbiBjbGVhcl9hbmltYXRpb24oKSB7XG4gICAgICAgIGlmIChhbmltYXRpb25fbmFtZSlcbiAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUsIGFuaW1hdGlvbl9uYW1lKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaW5pdChwcm9ncmFtLCBkdXJhdGlvbikge1xuICAgICAgICBjb25zdCBkID0gcHJvZ3JhbS5iIC0gdDtcbiAgICAgICAgZHVyYXRpb24gKj0gTWF0aC5hYnMoZCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhOiB0LFxuICAgICAgICAgICAgYjogcHJvZ3JhbS5iLFxuICAgICAgICAgICAgZCxcbiAgICAgICAgICAgIGR1cmF0aW9uLFxuICAgICAgICAgICAgc3RhcnQ6IHByb2dyYW0uc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IHByb2dyYW0uc3RhcnQgKyBkdXJhdGlvbixcbiAgICAgICAgICAgIGdyb3VwOiBwcm9ncmFtLmdyb3VwXG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdvKGIpIHtcbiAgICAgICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgdGljayA9IG5vb3AsIGNzcyB9ID0gY29uZmlnIHx8IG51bGxfdHJhbnNpdGlvbjtcbiAgICAgICAgY29uc3QgcHJvZ3JhbSA9IHtcbiAgICAgICAgICAgIHN0YXJ0OiBub3coKSArIGRlbGF5LFxuICAgICAgICAgICAgYlxuICAgICAgICB9O1xuICAgICAgICBpZiAoIWIpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogaW1wcm92ZSB0eXBpbmdzXG4gICAgICAgICAgICBwcm9ncmFtLmdyb3VwID0gb3V0cm9zO1xuICAgICAgICAgICAgb3V0cm9zLnIgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocnVubmluZ19wcm9ncmFtKSB7XG4gICAgICAgICAgICBwZW5kaW5nX3Byb2dyYW0gPSBwcm9ncmFtO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gaWYgdGhpcyBpcyBhbiBpbnRybywgYW5kIHRoZXJlJ3MgYSBkZWxheSwgd2UgbmVlZCB0byBkb1xuICAgICAgICAgICAgLy8gYW4gaW5pdGlhbCB0aWNrIGFuZC9vciBhcHBseSBDU1MgYW5pbWF0aW9uIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICBpZiAoY3NzKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJfYW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCB0LCBiLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChiKVxuICAgICAgICAgICAgICAgIHRpY2soMCwgMSk7XG4gICAgICAgICAgICBydW5uaW5nX3Byb2dyYW0gPSBpbml0KHByb2dyYW0sIGR1cmF0aW9uKTtcbiAgICAgICAgICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4gZGlzcGF0Y2gobm9kZSwgYiwgJ3N0YXJ0JykpO1xuICAgICAgICAgICAgbG9vcChub3cgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwZW5kaW5nX3Byb2dyYW0gJiYgbm93ID4gcGVuZGluZ19wcm9ncmFtLnN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdfcHJvZ3JhbSA9IGluaXQocGVuZGluZ19wcm9ncmFtLCBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHBlbmRpbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vZGUsIHJ1bm5pbmdfcHJvZ3JhbS5iLCAnc3RhcnQnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJfYW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIHQsIHJ1bm5pbmdfcHJvZ3JhbS5iLCBydW5uaW5nX3Byb2dyYW0uZHVyYXRpb24sIDAsIGVhc2luZywgY29uZmlnLmNzcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJ1bm5pbmdfcHJvZ3JhbSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm93ID49IHJ1bm5pbmdfcHJvZ3JhbS5lbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2sodCA9IHJ1bm5pbmdfcHJvZ3JhbS5iLCAxIC0gdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCBydW5uaW5nX3Byb2dyYW0uYiwgJ2VuZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwZW5kaW5nX3Byb2dyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSdyZSBkb25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bm5pbmdfcHJvZ3JhbS5iKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGludHJvIOKAlCB3ZSBjYW4gdGlkeSB1cCBpbW1lZGlhdGVseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcl9hbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG91dHJvIOKAlCBuZWVkcyB0byBiZSBjb29yZGluYXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIS0tcnVubmluZ19wcm9ncmFtLmdyb3VwLnIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydW5fYWxsKHJ1bm5pbmdfcHJvZ3JhbS5ncm91cC5jKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBydW5uaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vdyA+PSBydW5uaW5nX3Byb2dyYW0uc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBub3cgLSBydW5uaW5nX3Byb2dyYW0uc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gcnVubmluZ19wcm9ncmFtLmEgKyBydW5uaW5nX3Byb2dyYW0uZCAqIGVhc2luZyhwIC8gcnVubmluZ19wcm9ncmFtLmR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2sodCwgMSAtIHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAhIShydW5uaW5nX3Byb2dyYW0gfHwgcGVuZGluZ19wcm9ncmFtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHJ1bihiKSB7XG4gICAgICAgICAgICBpZiAoaXNfZnVuY3Rpb24oY29uZmlnKSkge1xuICAgICAgICAgICAgICAgIHdhaXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICBjb25maWcgPSBjb25maWcoKTtcbiAgICAgICAgICAgICAgICAgICAgZ28oYik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBnbyhiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW5kKCkge1xuICAgICAgICAgICAgY2xlYXJfYW5pbWF0aW9uKCk7XG4gICAgICAgICAgICBydW5uaW5nX3Byb2dyYW0gPSBwZW5kaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlX3Byb21pc2UocHJvbWlzZSwgaW5mbykge1xuICAgIGNvbnN0IHRva2VuID0gaW5mby50b2tlbiA9IHt9O1xuICAgIGZ1bmN0aW9uIHVwZGF0ZSh0eXBlLCBpbmRleCwga2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAoaW5mby50b2tlbiAhPT0gdG9rZW4pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGluZm8ucmVzb2x2ZWQgPSB2YWx1ZTtcbiAgICAgICAgbGV0IGNoaWxkX2N0eCA9IGluZm8uY3R4O1xuICAgICAgICBpZiAoa2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNoaWxkX2N0eCA9IGNoaWxkX2N0eC5zbGljZSgpO1xuICAgICAgICAgICAgY2hpbGRfY3R4W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBibG9jayA9IHR5cGUgJiYgKGluZm8uY3VycmVudCA9IHR5cGUpKGNoaWxkX2N0eCk7XG4gICAgICAgIGxldCBuZWVkc19mbHVzaCA9IGZhbHNlO1xuICAgICAgICBpZiAoaW5mby5ibG9jaykge1xuICAgICAgICAgICAgaWYgKGluZm8uYmxvY2tzKSB7XG4gICAgICAgICAgICAgICAgaW5mby5ibG9ja3MuZm9yRWFjaCgoYmxvY2ssIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgIT09IGluZGV4ICYmIGJsb2NrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cF9vdXRyb3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25fb3V0KGJsb2NrLCAxLCAxLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mby5ibG9ja3NbaV0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja19vdXRyb3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5mby5ibG9jay5kKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmxvY2suYygpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbl9pbihibG9jaywgMSk7XG4gICAgICAgICAgICBibG9jay5tKGluZm8ubW91bnQoKSwgaW5mby5hbmNob3IpO1xuICAgICAgICAgICAgbmVlZHNfZmx1c2ggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGluZm8uYmxvY2sgPSBibG9jaztcbiAgICAgICAgaWYgKGluZm8uYmxvY2tzKVxuICAgICAgICAgICAgaW5mby5ibG9ja3NbaW5kZXhdID0gYmxvY2s7XG4gICAgICAgIGlmIChuZWVkc19mbHVzaCkge1xuICAgICAgICAgICAgZmx1c2goKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNfcHJvbWlzZShwcm9taXNlKSkge1xuICAgICAgICBjb25zdCBjdXJyZW50X2NvbXBvbmVudCA9IGdldF9jdXJyZW50X2NvbXBvbmVudCgpO1xuICAgICAgICBwcm9taXNlLnRoZW4odmFsdWUgPT4ge1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KGN1cnJlbnRfY29tcG9uZW50KTtcbiAgICAgICAgICAgIHVwZGF0ZShpbmZvLnRoZW4sIDEsIGluZm8udmFsdWUsIHZhbHVlKTtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChudWxsKTtcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KGN1cnJlbnRfY29tcG9uZW50KTtcbiAgICAgICAgICAgIHVwZGF0ZShpbmZvLmNhdGNoLCAyLCBpbmZvLmVycm9yLCBlcnJvcik7XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQobnVsbCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBpZiB3ZSBwcmV2aW91c2x5IGhhZCBhIHRoZW4vY2F0Y2ggYmxvY2ssIGRlc3Ryb3kgaXRcbiAgICAgICAgaWYgKGluZm8uY3VycmVudCAhPT0gaW5mby5wZW5kaW5nKSB7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby5wZW5kaW5nLCAwKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoaW5mby5jdXJyZW50ICE9PSBpbmZvLnRoZW4pIHtcbiAgICAgICAgICAgIHVwZGF0ZShpbmZvLnRoZW4sIDEsIGluZm8udmFsdWUsIHByb21pc2UpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5mby5yZXNvbHZlZCA9IHByb21pc2U7XG4gICAgfVxufVxuXG5jb25zdCBnbG9iYWxzID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgPyB3aW5kb3dcbiAgICA6IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IGdsb2JhbFRoaXNcbiAgICAgICAgOiBnbG9iYWwpO1xuXG5mdW5jdGlvbiBkZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcbiAgICBibG9jay5kKDEpO1xuICAgIGxvb2t1cC5kZWxldGUoYmxvY2sua2V5KTtcbn1cbmZ1bmN0aW9uIG91dHJvX2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcbiAgICB0cmFuc2l0aW9uX291dChibG9jaywgMSwgMSwgKCkgPT4ge1xuICAgICAgICBsb29rdXAuZGVsZXRlKGJsb2NrLmtleSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmaXhfYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuICAgIGJsb2NrLmYoKTtcbiAgICBkZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApO1xufVxuZnVuY3Rpb24gZml4X2FuZF9vdXRyb19hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgYmxvY2suZigpO1xuICAgIG91dHJvX2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApO1xufVxuZnVuY3Rpb24gdXBkYXRlX2tleWVkX2VhY2gob2xkX2Jsb2NrcywgZGlydHksIGdldF9rZXksIGR5bmFtaWMsIGN0eCwgbGlzdCwgbG9va3VwLCBub2RlLCBkZXN0cm95LCBjcmVhdGVfZWFjaF9ibG9jaywgbmV4dCwgZ2V0X2NvbnRleHQpIHtcbiAgICBsZXQgbyA9IG9sZF9ibG9ja3MubGVuZ3RoO1xuICAgIGxldCBuID0gbGlzdC5sZW5ndGg7XG4gICAgbGV0IGkgPSBvO1xuICAgIGNvbnN0IG9sZF9pbmRleGVzID0ge307XG4gICAgd2hpbGUgKGktLSlcbiAgICAgICAgb2xkX2luZGV4ZXNbb2xkX2Jsb2Nrc1tpXS5rZXldID0gaTtcbiAgICBjb25zdCBuZXdfYmxvY2tzID0gW107XG4gICAgY29uc3QgbmV3X2xvb2t1cCA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBkZWx0YXMgPSBuZXcgTWFwKCk7XG4gICAgaSA9IG47XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgICBjb25zdCBjaGlsZF9jdHggPSBnZXRfY29udGV4dChjdHgsIGxpc3QsIGkpO1xuICAgICAgICBjb25zdCBrZXkgPSBnZXRfa2V5KGNoaWxkX2N0eCk7XG4gICAgICAgIGxldCBibG9jayA9IGxvb2t1cC5nZXQoa2V5KTtcbiAgICAgICAgaWYgKCFibG9jaykge1xuICAgICAgICAgICAgYmxvY2sgPSBjcmVhdGVfZWFjaF9ibG9jayhrZXksIGNoaWxkX2N0eCk7XG4gICAgICAgICAgICBibG9jay5jKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZHluYW1pYykge1xuICAgICAgICAgICAgYmxvY2sucChjaGlsZF9jdHgsIGRpcnR5KTtcbiAgICAgICAgfVxuICAgICAgICBuZXdfbG9va3VwLnNldChrZXksIG5ld19ibG9ja3NbaV0gPSBibG9jayk7XG4gICAgICAgIGlmIChrZXkgaW4gb2xkX2luZGV4ZXMpXG4gICAgICAgICAgICBkZWx0YXMuc2V0KGtleSwgTWF0aC5hYnMoaSAtIG9sZF9pbmRleGVzW2tleV0pKTtcbiAgICB9XG4gICAgY29uc3Qgd2lsbF9tb3ZlID0gbmV3IFNldCgpO1xuICAgIGNvbnN0IGRpZF9tb3ZlID0gbmV3IFNldCgpO1xuICAgIGZ1bmN0aW9uIGluc2VydChibG9jaykge1xuICAgICAgICB0cmFuc2l0aW9uX2luKGJsb2NrLCAxKTtcbiAgICAgICAgYmxvY2subShub2RlLCBuZXh0LCBsb29rdXAuaGFzKGJsb2NrLmtleSkpO1xuICAgICAgICBsb29rdXAuc2V0KGJsb2NrLmtleSwgYmxvY2spO1xuICAgICAgICBuZXh0ID0gYmxvY2suZmlyc3Q7XG4gICAgICAgIG4tLTtcbiAgICB9XG4gICAgd2hpbGUgKG8gJiYgbikge1xuICAgICAgICBjb25zdCBuZXdfYmxvY2sgPSBuZXdfYmxvY2tzW24gLSAxXTtcbiAgICAgICAgY29uc3Qgb2xkX2Jsb2NrID0gb2xkX2Jsb2Nrc1tvIC0gMV07XG4gICAgICAgIGNvbnN0IG5ld19rZXkgPSBuZXdfYmxvY2sua2V5O1xuICAgICAgICBjb25zdCBvbGRfa2V5ID0gb2xkX2Jsb2NrLmtleTtcbiAgICAgICAgaWYgKG5ld19ibG9jayA9PT0gb2xkX2Jsb2NrKSB7XG4gICAgICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgICAgICBuZXh0ID0gbmV3X2Jsb2NrLmZpcnN0O1xuICAgICAgICAgICAgby0tO1xuICAgICAgICAgICAgbi0tO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFuZXdfbG9va3VwLmhhcyhvbGRfa2V5KSkge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIG9sZCBibG9ja1xuICAgICAgICAgICAgZGVzdHJveShvbGRfYmxvY2ssIGxvb2t1cCk7XG4gICAgICAgICAgICBvLS07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIWxvb2t1cC5oYXMobmV3X2tleSkgfHwgd2lsbF9tb3ZlLmhhcyhuZXdfa2V5KSkge1xuICAgICAgICAgICAgaW5zZXJ0KG5ld19ibG9jayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGlkX21vdmUuaGFzKG9sZF9rZXkpKSB7XG4gICAgICAgICAgICBvLS07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGVsdGFzLmdldChuZXdfa2V5KSA+IGRlbHRhcy5nZXQob2xkX2tleSkpIHtcbiAgICAgICAgICAgIGRpZF9tb3ZlLmFkZChuZXdfa2V5KTtcbiAgICAgICAgICAgIGluc2VydChuZXdfYmxvY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgd2lsbF9tb3ZlLmFkZChvbGRfa2V5KTtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB3aGlsZSAoby0tKSB7XG4gICAgICAgIGNvbnN0IG9sZF9ibG9jayA9IG9sZF9ibG9ja3Nbb107XG4gICAgICAgIGlmICghbmV3X2xvb2t1cC5oYXMob2xkX2Jsb2NrLmtleSkpXG4gICAgICAgICAgICBkZXN0cm95KG9sZF9ibG9jaywgbG9va3VwKTtcbiAgICB9XG4gICAgd2hpbGUgKG4pXG4gICAgICAgIGluc2VydChuZXdfYmxvY2tzW24gLSAxXSk7XG4gICAgcmV0dXJuIG5ld19ibG9ja3M7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZV9lYWNoX2tleXMoY3R4LCBsaXN0LCBnZXRfY29udGV4dCwgZ2V0X2tleSkge1xuICAgIGNvbnN0IGtleXMgPSBuZXcgU2V0KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGdldF9rZXkoZ2V0X2NvbnRleHQoY3R4LCBsaXN0LCBpKSk7XG4gICAgICAgIGlmIChrZXlzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBoYXZlIGR1cGxpY2F0ZSBrZXlzIGluIGEga2V5ZWQgZWFjaGApO1xuICAgICAgICB9XG4gICAgICAgIGtleXMuYWRkKGtleSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRfc3ByZWFkX3VwZGF0ZShsZXZlbHMsIHVwZGF0ZXMpIHtcbiAgICBjb25zdCB1cGRhdGUgPSB7fTtcbiAgICBjb25zdCB0b19udWxsX291dCA9IHt9O1xuICAgIGNvbnN0IGFjY291bnRlZF9mb3IgPSB7ICQkc2NvcGU6IDEgfTtcbiAgICBsZXQgaSA9IGxldmVscy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgICBjb25zdCBvID0gbGV2ZWxzW2ldO1xuICAgICAgICBjb25zdCBuID0gdXBkYXRlc1tpXTtcbiAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG8pIHtcbiAgICAgICAgICAgICAgICBpZiAoIShrZXkgaW4gbikpXG4gICAgICAgICAgICAgICAgICAgIHRvX251bGxfb3V0W2tleV0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbikge1xuICAgICAgICAgICAgICAgIGlmICghYWNjb3VudGVkX2ZvcltrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVtrZXldID0gbltrZXldO1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50ZWRfZm9yW2tleV0gPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldmVsc1tpXSA9IG47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvKSB7XG4gICAgICAgICAgICAgICAgYWNjb3VudGVkX2ZvcltrZXldID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0b19udWxsX291dCkge1xuICAgICAgICBpZiAoIShrZXkgaW4gdXBkYXRlKSlcbiAgICAgICAgICAgIHVwZGF0ZVtrZXldID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gdXBkYXRlO1xufVxuZnVuY3Rpb24gZ2V0X3NwcmVhZF9vYmplY3Qoc3ByZWFkX3Byb3BzKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzcHJlYWRfcHJvcHMgPT09ICdvYmplY3QnICYmIHNwcmVhZF9wcm9wcyAhPT0gbnVsbCA/IHNwcmVhZF9wcm9wcyA6IHt9O1xufVxuXG4vLyBzb3VyY2U6IGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2luZGljZXMuaHRtbFxuY29uc3QgYm9vbGVhbl9hdHRyaWJ1dGVzID0gbmV3IFNldChbXG4gICAgJ2FsbG93ZnVsbHNjcmVlbicsXG4gICAgJ2FsbG93cGF5bWVudHJlcXVlc3QnLFxuICAgICdhc3luYycsXG4gICAgJ2F1dG9mb2N1cycsXG4gICAgJ2F1dG9wbGF5JyxcbiAgICAnY2hlY2tlZCcsXG4gICAgJ2NvbnRyb2xzJyxcbiAgICAnZGVmYXVsdCcsXG4gICAgJ2RlZmVyJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdmb3Jtbm92YWxpZGF0ZScsXG4gICAgJ2hpZGRlbicsXG4gICAgJ2lzbWFwJyxcbiAgICAnbG9vcCcsXG4gICAgJ211bHRpcGxlJyxcbiAgICAnbXV0ZWQnLFxuICAgICdub21vZHVsZScsXG4gICAgJ25vdmFsaWRhdGUnLFxuICAgICdvcGVuJyxcbiAgICAncGxheXNpbmxpbmUnLFxuICAgICdyZWFkb25seScsXG4gICAgJ3JlcXVpcmVkJyxcbiAgICAncmV2ZXJzZWQnLFxuICAgICdzZWxlY3RlZCdcbl0pO1xuXG5jb25zdCBpbnZhbGlkX2F0dHJpYnV0ZV9uYW1lX2NoYXJhY3RlciA9IC9bXFxzJ1wiPi89XFx1e0ZERDB9LVxcdXtGREVGfVxcdXtGRkZFfVxcdXtGRkZGfVxcdXsxRkZGRX1cXHV7MUZGRkZ9XFx1ezJGRkZFfVxcdXsyRkZGRn1cXHV7M0ZGRkV9XFx1ezNGRkZGfVxcdXs0RkZGRX1cXHV7NEZGRkZ9XFx1ezVGRkZFfVxcdXs1RkZGRn1cXHV7NkZGRkV9XFx1ezZGRkZGfVxcdXs3RkZGRX1cXHV7N0ZGRkZ9XFx1ezhGRkZFfVxcdXs4RkZGRn1cXHV7OUZGRkV9XFx1ezlGRkZGfVxcdXtBRkZGRX1cXHV7QUZGRkZ9XFx1e0JGRkZFfVxcdXtCRkZGRn1cXHV7Q0ZGRkV9XFx1e0NGRkZGfVxcdXtERkZGRX1cXHV7REZGRkZ9XFx1e0VGRkZFfVxcdXtFRkZGRn1cXHV7RkZGRkV9XFx1e0ZGRkZGfVxcdXsxMEZGRkV9XFx1ezEwRkZGRn1dL3U7XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNhdHRyaWJ1dGVzLTJcbi8vIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNub25jaGFyYWN0ZXJcbmZ1bmN0aW9uIHNwcmVhZChhcmdzLCBjbGFzc2VzX3RvX2FkZCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKHt9LCAuLi5hcmdzKTtcbiAgICBpZiAoY2xhc3Nlc190b19hZGQpIHtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXMuY2xhc3MgPT0gbnVsbCkge1xuICAgICAgICAgICAgYXR0cmlidXRlcy5jbGFzcyA9IGNsYXNzZXNfdG9fYWRkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXR0cmlidXRlcy5jbGFzcyArPSAnICcgKyBjbGFzc2VzX3RvX2FkZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgc3RyID0gJyc7XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgaWYgKGludmFsaWRfYXR0cmlidXRlX25hbWVfY2hhcmFjdGVyLnRlc3QobmFtZSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHZhbHVlID0gYXR0cmlidXRlc1tuYW1lXTtcbiAgICAgICAgaWYgKHZhbHVlID09PSB0cnVlKVxuICAgICAgICAgICAgc3RyICs9IFwiIFwiICsgbmFtZTtcbiAgICAgICAgZWxzZSBpZiAoYm9vbGVhbl9hdHRyaWJ1dGVzLmhhcyhuYW1lLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUpXG4gICAgICAgICAgICAgICAgc3RyICs9IFwiIFwiICsgbmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBzdHIgKz0gYCAke25hbWV9PVwiJHtTdHJpbmcodmFsdWUpLnJlcGxhY2UoL1wiL2csICcmIzM0OycpLnJlcGxhY2UoLycvZywgJyYjMzk7Jyl9XCJgO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHN0cjtcbn1cbmNvbnN0IGVzY2FwZWQgPSB7XG4gICAgJ1wiJzogJyZxdW90OycsXG4gICAgXCInXCI6ICcmIzM5OycsXG4gICAgJyYnOiAnJmFtcDsnLFxuICAgICc8JzogJyZsdDsnLFxuICAgICc+JzogJyZndDsnXG59O1xuZnVuY3Rpb24gZXNjYXBlKGh0bWwpIHtcbiAgICByZXR1cm4gU3RyaW5nKGh0bWwpLnJlcGxhY2UoL1tcIicmPD5dL2csIG1hdGNoID0+IGVzY2FwZWRbbWF0Y2hdKTtcbn1cbmZ1bmN0aW9uIGVhY2goaXRlbXMsIGZuKSB7XG4gICAgbGV0IHN0ciA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgc3RyICs9IGZuKGl0ZW1zW2ldLCBpKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbn1cbmNvbnN0IG1pc3NpbmdfY29tcG9uZW50ID0ge1xuICAgICQkcmVuZGVyOiAoKSA9PiAnJ1xufTtcbmZ1bmN0aW9uIHZhbGlkYXRlX2NvbXBvbmVudChjb21wb25lbnQsIG5hbWUpIHtcbiAgICBpZiAoIWNvbXBvbmVudCB8fCAhY29tcG9uZW50LiQkcmVuZGVyKSB7XG4gICAgICAgIGlmIChuYW1lID09PSAnc3ZlbHRlOmNvbXBvbmVudCcpXG4gICAgICAgICAgICBuYW1lICs9ICcgdGhpcz17Li4ufSc7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgPCR7bmFtZX0+IGlzIG5vdCBhIHZhbGlkIFNTUiBjb21wb25lbnQuIFlvdSBtYXkgbmVlZCB0byByZXZpZXcgeW91ciBidWlsZCBjb25maWcgdG8gZW5zdXJlIHRoYXQgZGVwZW5kZW5jaWVzIGFyZSBjb21waWxlZCwgcmF0aGVyIHRoYW4gaW1wb3J0ZWQgYXMgcHJlLWNvbXBpbGVkIG1vZHVsZXNgKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGRlYnVnKGZpbGUsIGxpbmUsIGNvbHVtbiwgdmFsdWVzKSB7XG4gICAgY29uc29sZS5sb2coYHtAZGVidWd9ICR7ZmlsZSA/IGZpbGUgKyAnICcgOiAnJ30oJHtsaW5lfToke2NvbHVtbn0pYCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIHJldHVybiAnJztcbn1cbmxldCBvbl9kZXN0cm95O1xuZnVuY3Rpb24gY3JlYXRlX3Nzcl9jb21wb25lbnQoZm4pIHtcbiAgICBmdW5jdGlvbiAkJHJlbmRlcihyZXN1bHQsIHByb3BzLCBiaW5kaW5ncywgc2xvdHMpIHtcbiAgICAgICAgY29uc3QgcGFyZW50X2NvbXBvbmVudCA9IGN1cnJlbnRfY29tcG9uZW50O1xuICAgICAgICBjb25zdCAkJCA9IHtcbiAgICAgICAgICAgIG9uX2Rlc3Ryb3ksXG4gICAgICAgICAgICBjb250ZXh0OiBuZXcgTWFwKHBhcmVudF9jb21wb25lbnQgPyBwYXJlbnRfY29tcG9uZW50LiQkLmNvbnRleHQgOiBbXSksXG4gICAgICAgICAgICAvLyB0aGVzZSB3aWxsIGJlIGltbWVkaWF0ZWx5IGRpc2NhcmRlZFxuICAgICAgICAgICAgb25fbW91bnQ6IFtdLFxuICAgICAgICAgICAgYmVmb3JlX3VwZGF0ZTogW10sXG4gICAgICAgICAgICBhZnRlcl91cGRhdGU6IFtdLFxuICAgICAgICAgICAgY2FsbGJhY2tzOiBibGFua19vYmplY3QoKVxuICAgICAgICB9O1xuICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoeyAkJCB9KTtcbiAgICAgICAgY29uc3QgaHRtbCA9IGZuKHJlc3VsdCwgcHJvcHMsIGJpbmRpbmdzLCBzbG90cyk7XG4gICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChwYXJlbnRfY29tcG9uZW50KTtcbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHJlbmRlcjogKHByb3BzID0ge30sIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgb25fZGVzdHJveSA9IFtdO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geyB0aXRsZTogJycsIGhlYWQ6ICcnLCBjc3M6IG5ldyBTZXQoKSB9O1xuICAgICAgICAgICAgY29uc3QgaHRtbCA9ICQkcmVuZGVyKHJlc3VsdCwgcHJvcHMsIHt9LCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJ1bl9hbGwob25fZGVzdHJveSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICAgICAgY3NzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IEFycmF5LmZyb20ocmVzdWx0LmNzcykubWFwKGNzcyA9PiBjc3MuY29kZSkuam9pbignXFxuJyksXG4gICAgICAgICAgICAgICAgICAgIG1hcDogbnVsbCAvLyBUT0RPXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBoZWFkOiByZXN1bHQudGl0bGUgKyByZXN1bHQuaGVhZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgJCRyZW5kZXJcbiAgICB9O1xufVxuZnVuY3Rpb24gYWRkX2F0dHJpYnV0ZShuYW1lLCB2YWx1ZSwgYm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8IChib29sZWFuICYmICF2YWx1ZSkpXG4gICAgICAgIHJldHVybiAnJztcbiAgICByZXR1cm4gYCAke25hbWV9JHt2YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogYD0ke3R5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBKU09OLnN0cmluZ2lmeShlc2NhcGUodmFsdWUpKSA6IGBcIiR7dmFsdWV9XCJgfWB9YDtcbn1cbmZ1bmN0aW9uIGFkZF9jbGFzc2VzKGNsYXNzZXMpIHtcbiAgICByZXR1cm4gY2xhc3NlcyA/IGAgY2xhc3M9XCIke2NsYXNzZXN9XCJgIDogYGA7XG59XG5cbmZ1bmN0aW9uIGJpbmQoY29tcG9uZW50LCBuYW1lLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGluZGV4ID0gY29tcG9uZW50LiQkLnByb3BzW25hbWVdO1xuICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbXBvbmVudC4kJC5ib3VuZFtpbmRleF0gPSBjYWxsYmFjaztcbiAgICAgICAgY2FsbGJhY2soY29tcG9uZW50LiQkLmN0eFtpbmRleF0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZV9jb21wb25lbnQoYmxvY2spIHtcbiAgICBibG9jayAmJiBibG9jay5jKCk7XG59XG5mdW5jdGlvbiBjbGFpbV9jb21wb25lbnQoYmxvY2ssIHBhcmVudF9ub2Rlcykge1xuICAgIGJsb2NrICYmIGJsb2NrLmwocGFyZW50X25vZGVzKTtcbn1cbmZ1bmN0aW9uIG1vdW50X2NvbXBvbmVudChjb21wb25lbnQsIHRhcmdldCwgYW5jaG9yKSB7XG4gICAgY29uc3QgeyBmcmFnbWVudCwgb25fbW91bnQsIG9uX2Rlc3Ryb3ksIGFmdGVyX3VwZGF0ZSB9ID0gY29tcG9uZW50LiQkO1xuICAgIGZyYWdtZW50ICYmIGZyYWdtZW50Lm0odGFyZ2V0LCBhbmNob3IpO1xuICAgIC8vIG9uTW91bnQgaGFwcGVucyBiZWZvcmUgdGhlIGluaXRpYWwgYWZ0ZXJVcGRhdGVcbiAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3X29uX2Rlc3Ryb3kgPSBvbl9tb3VudC5tYXAocnVuKS5maWx0ZXIoaXNfZnVuY3Rpb24pO1xuICAgICAgICBpZiAob25fZGVzdHJveSkge1xuICAgICAgICAgICAgb25fZGVzdHJveS5wdXNoKC4uLm5ld19vbl9kZXN0cm95KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEVkZ2UgY2FzZSAtIGNvbXBvbmVudCB3YXMgZGVzdHJveWVkIGltbWVkaWF0ZWx5LFxuICAgICAgICAgICAgLy8gbW9zdCBsaWtlbHkgYXMgYSByZXN1bHQgb2YgYSBiaW5kaW5nIGluaXRpYWxpc2luZ1xuICAgICAgICAgICAgcnVuX2FsbChuZXdfb25fZGVzdHJveSk7XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50LiQkLm9uX21vdW50ID0gW107XG4gICAgfSk7XG4gICAgYWZ0ZXJfdXBkYXRlLmZvckVhY2goYWRkX3JlbmRlcl9jYWxsYmFjayk7XG59XG5mdW5jdGlvbiBkZXN0cm95X2NvbXBvbmVudChjb21wb25lbnQsIGRldGFjaGluZykge1xuICAgIGNvbnN0ICQkID0gY29tcG9uZW50LiQkO1xuICAgIGlmICgkJC5mcmFnbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBydW5fYWxsKCQkLm9uX2Rlc3Ryb3kpO1xuICAgICAgICAkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5kKGRldGFjaGluZyk7XG4gICAgICAgIC8vIFRPRE8gbnVsbCBvdXQgb3RoZXIgcmVmcywgaW5jbHVkaW5nIGNvbXBvbmVudC4kJCAoYnV0IG5lZWQgdG9cbiAgICAgICAgLy8gcHJlc2VydmUgZmluYWwgc3RhdGU/KVxuICAgICAgICAkJC5vbl9kZXN0cm95ID0gJCQuZnJhZ21lbnQgPSBudWxsO1xuICAgICAgICAkJC5jdHggPSBbXTtcbiAgICB9XG59XG5mdW5jdGlvbiBtYWtlX2RpcnR5KGNvbXBvbmVudCwgaSkge1xuICAgIGlmIChjb21wb25lbnQuJCQuZGlydHlbMF0gPT09IC0xKSB7XG4gICAgICAgIGRpcnR5X2NvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgICAgICBzY2hlZHVsZV91cGRhdGUoKTtcbiAgICAgICAgY29tcG9uZW50LiQkLmRpcnR5LmZpbGwoMCk7XG4gICAgfVxuICAgIGNvbXBvbmVudC4kJC5kaXJ0eVsoaSAvIDMxKSB8IDBdIHw9ICgxIDw8IChpICUgMzEpKTtcbn1cbmZ1bmN0aW9uIGluaXQoY29tcG9uZW50LCBvcHRpb25zLCBpbnN0YW5jZSwgY3JlYXRlX2ZyYWdtZW50LCBub3RfZXF1YWwsIHByb3BzLCBkaXJ0eSA9IFstMV0pIHtcbiAgICBjb25zdCBwYXJlbnRfY29tcG9uZW50ID0gY3VycmVudF9jb21wb25lbnQ7XG4gICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgY29uc3QgcHJvcF92YWx1ZXMgPSBvcHRpb25zLnByb3BzIHx8IHt9O1xuICAgIGNvbnN0ICQkID0gY29tcG9uZW50LiQkID0ge1xuICAgICAgICBmcmFnbWVudDogbnVsbCxcbiAgICAgICAgY3R4OiBudWxsLFxuICAgICAgICAvLyBzdGF0ZVxuICAgICAgICBwcm9wcyxcbiAgICAgICAgdXBkYXRlOiBub29wLFxuICAgICAgICBub3RfZXF1YWwsXG4gICAgICAgIGJvdW5kOiBibGFua19vYmplY3QoKSxcbiAgICAgICAgLy8gbGlmZWN5Y2xlXG4gICAgICAgIG9uX21vdW50OiBbXSxcbiAgICAgICAgb25fZGVzdHJveTogW10sXG4gICAgICAgIGJlZm9yZV91cGRhdGU6IFtdLFxuICAgICAgICBhZnRlcl91cGRhdGU6IFtdLFxuICAgICAgICBjb250ZXh0OiBuZXcgTWFwKHBhcmVudF9jb21wb25lbnQgPyBwYXJlbnRfY29tcG9uZW50LiQkLmNvbnRleHQgOiBbXSksXG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgZWxzZVxuICAgICAgICBjYWxsYmFja3M6IGJsYW5rX29iamVjdCgpLFxuICAgICAgICBkaXJ0eVxuICAgIH07XG4gICAgbGV0IHJlYWR5ID0gZmFsc2U7XG4gICAgJCQuY3R4ID0gaW5zdGFuY2VcbiAgICAgICAgPyBpbnN0YW5jZShjb21wb25lbnQsIHByb3BfdmFsdWVzLCAoaSwgcmV0LCAuLi5yZXN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHJlc3QubGVuZ3RoID8gcmVzdFswXSA6IHJldDtcbiAgICAgICAgICAgIGlmICgkJC5jdHggJiYgbm90X2VxdWFsKCQkLmN0eFtpXSwgJCQuY3R4W2ldID0gdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQkLmJvdW5kW2ldKVxuICAgICAgICAgICAgICAgICAgICAkJC5ib3VuZFtpXSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlYWR5KVxuICAgICAgICAgICAgICAgICAgICBtYWtlX2RpcnR5KGNvbXBvbmVudCwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9KVxuICAgICAgICA6IFtdO1xuICAgICQkLnVwZGF0ZSgpO1xuICAgIHJlYWR5ID0gdHJ1ZTtcbiAgICBydW5fYWxsKCQkLmJlZm9yZV91cGRhdGUpO1xuICAgIC8vIGBmYWxzZWAgYXMgYSBzcGVjaWFsIGNhc2Ugb2Ygbm8gRE9NIGNvbXBvbmVudFxuICAgICQkLmZyYWdtZW50ID0gY3JlYXRlX2ZyYWdtZW50ID8gY3JlYXRlX2ZyYWdtZW50KCQkLmN0eCkgOiBmYWxzZTtcbiAgICBpZiAob3B0aW9ucy50YXJnZXQpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuaHlkcmF0ZSkge1xuICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSBjaGlsZHJlbihvcHRpb25zLnRhcmdldCk7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQubChub2Rlcyk7XG4gICAgICAgICAgICBub2Rlcy5mb3JFYWNoKGRldGFjaCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQuYygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmludHJvKVxuICAgICAgICAgICAgdHJhbnNpdGlvbl9pbihjb21wb25lbnQuJCQuZnJhZ21lbnQpO1xuICAgICAgICBtb3VudF9jb21wb25lbnQoY29tcG9uZW50LCBvcHRpb25zLnRhcmdldCwgb3B0aW9ucy5hbmNob3IpO1xuICAgICAgICBmbHVzaCgpO1xuICAgIH1cbiAgICBzZXRfY3VycmVudF9jb21wb25lbnQocGFyZW50X2NvbXBvbmVudCk7XG59XG5sZXQgU3ZlbHRlRWxlbWVudDtcbmlmICh0eXBlb2YgSFRNTEVsZW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBTdmVsdGVFbGVtZW50ID0gY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0b2RvOiBpbXByb3ZlIHR5cGluZ3NcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuJCQuc2xvdHRlZCkge1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogaW1wcm92ZSB0eXBpbmdzXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLiQkLnNsb3R0ZWRba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGF0dHIsIF9vbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXNbYXR0cl0gPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgICAgIGRlc3Ryb3lfY29tcG9uZW50KHRoaXMsIDEpO1xuICAgICAgICAgICAgdGhpcy4kZGVzdHJveSA9IG5vb3A7XG4gICAgICAgIH1cbiAgICAgICAgJG9uKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAvLyBUT0RPIHNob3VsZCB0aGlzIGRlbGVnYXRlIHRvIGFkZEV2ZW50TGlzdGVuZXI/XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFja3MgPSAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gfHwgKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdID0gW10pKTtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBjYWxsYmFja3MuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgICRzZXQoKSB7XG4gICAgICAgICAgICAvLyBvdmVycmlkZGVuIGJ5IGluc3RhbmNlLCBpZiBpdCBoYXMgcHJvcHNcbiAgICAgICAgfVxuICAgIH07XG59XG5jbGFzcyBTdmVsdGVDb21wb25lbnQge1xuICAgICRkZXN0cm95KCkge1xuICAgICAgICBkZXN0cm95X2NvbXBvbmVudCh0aGlzLCAxKTtcbiAgICAgICAgdGhpcy4kZGVzdHJveSA9IG5vb3A7XG4gICAgfVxuICAgICRvbih0eXBlLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBjYWxsYmFja3MgPSAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gfHwgKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdID0gW10pKTtcbiAgICAgICAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBjYWxsYmFja3MuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAkc2V0KCkge1xuICAgICAgICAvLyBvdmVycmlkZGVuIGJ5IGluc3RhbmNlLCBpZiBpdCBoYXMgcHJvcHNcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoX2Rldih0eXBlLCBkZXRhaWwpIHtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGN1c3RvbV9ldmVudCh0eXBlLCBPYmplY3QuYXNzaWduKHsgdmVyc2lvbjogJzMuMjIuMycgfSwgZGV0YWlsKSkpO1xufVxuZnVuY3Rpb24gYXBwZW5kX2Rldih0YXJnZXQsIG5vZGUpIHtcbiAgICBkaXNwYXRjaF9kZXYoXCJTdmVsdGVET01JbnNlcnRcIiwgeyB0YXJnZXQsIG5vZGUgfSk7XG4gICAgYXBwZW5kKHRhcmdldCwgbm9kZSk7XG59XG5mdW5jdGlvbiBpbnNlcnRfZGV2KHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgZGlzcGF0Y2hfZGV2KFwiU3ZlbHRlRE9NSW5zZXJ0XCIsIHsgdGFyZ2V0LCBub2RlLCBhbmNob3IgfSk7XG4gICAgaW5zZXJ0KHRhcmdldCwgbm9kZSwgYW5jaG9yKTtcbn1cbmZ1bmN0aW9uIGRldGFjaF9kZXYobm9kZSkge1xuICAgIGRpc3BhdGNoX2RldihcIlN2ZWx0ZURPTVJlbW92ZVwiLCB7IG5vZGUgfSk7XG4gICAgZGV0YWNoKG5vZGUpO1xufVxuZnVuY3Rpb24gZGV0YWNoX2JldHdlZW5fZGV2KGJlZm9yZSwgYWZ0ZXIpIHtcbiAgICB3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nICYmIGJlZm9yZS5uZXh0U2libGluZyAhPT0gYWZ0ZXIpIHtcbiAgICAgICAgZGV0YWNoX2RldihiZWZvcmUubmV4dFNpYmxpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRldGFjaF9iZWZvcmVfZGV2KGFmdGVyKSB7XG4gICAgd2hpbGUgKGFmdGVyLnByZXZpb3VzU2libGluZykge1xuICAgICAgICBkZXRhY2hfZGV2KGFmdGVyLnByZXZpb3VzU2libGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gZGV0YWNoX2FmdGVyX2RldihiZWZvcmUpIHtcbiAgICB3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nKSB7XG4gICAgICAgIGRldGFjaF9kZXYoYmVmb3JlLm5leHRTaWJsaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiBsaXN0ZW5fZGV2KG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zLCBoYXNfcHJldmVudF9kZWZhdWx0LCBoYXNfc3RvcF9wcm9wYWdhdGlvbikge1xuICAgIGNvbnN0IG1vZGlmaWVycyA9IG9wdGlvbnMgPT09IHRydWUgPyBbXCJjYXB0dXJlXCJdIDogb3B0aW9ucyA/IEFycmF5LmZyb20oT2JqZWN0LmtleXMob3B0aW9ucykpIDogW107XG4gICAgaWYgKGhhc19wcmV2ZW50X2RlZmF1bHQpXG4gICAgICAgIG1vZGlmaWVycy5wdXNoKCdwcmV2ZW50RGVmYXVsdCcpO1xuICAgIGlmIChoYXNfc3RvcF9wcm9wYWdhdGlvbilcbiAgICAgICAgbW9kaWZpZXJzLnB1c2goJ3N0b3BQcm9wYWdhdGlvbicpO1xuICAgIGRpc3BhdGNoX2RldihcIlN2ZWx0ZURPTUFkZEV2ZW50TGlzdGVuZXJcIiwgeyBub2RlLCBldmVudCwgaGFuZGxlciwgbW9kaWZpZXJzIH0pO1xuICAgIGNvbnN0IGRpc3Bvc2UgPSBsaXN0ZW4obm9kZSwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoX2RldihcIlN2ZWx0ZURPTVJlbW92ZUV2ZW50TGlzdGVuZXJcIiwgeyBub2RlLCBldmVudCwgaGFuZGxlciwgbW9kaWZpZXJzIH0pO1xuICAgICAgICBkaXNwb3NlKCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGF0dHJfZGV2KG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBhdHRyKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKVxuICAgICAgICBkaXNwYXRjaF9kZXYoXCJTdmVsdGVET01SZW1vdmVBdHRyaWJ1dGVcIiwgeyBub2RlLCBhdHRyaWJ1dGUgfSk7XG4gICAgZWxzZVxuICAgICAgICBkaXNwYXRjaF9kZXYoXCJTdmVsdGVET01TZXRBdHRyaWJ1dGVcIiwgeyBub2RlLCBhdHRyaWJ1dGUsIHZhbHVlIH0pO1xufVxuZnVuY3Rpb24gcHJvcF9kZXYobm9kZSwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgbm9kZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICBkaXNwYXRjaF9kZXYoXCJTdmVsdGVET01TZXRQcm9wZXJ0eVwiLCB7IG5vZGUsIHByb3BlcnR5LCB2YWx1ZSB9KTtcbn1cbmZ1bmN0aW9uIGRhdGFzZXRfZGV2KG5vZGUsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIG5vZGUuZGF0YXNldFtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICBkaXNwYXRjaF9kZXYoXCJTdmVsdGVET01TZXREYXRhc2V0XCIsIHsgbm9kZSwgcHJvcGVydHksIHZhbHVlIH0pO1xufVxuZnVuY3Rpb24gc2V0X2RhdGFfZGV2KHRleHQsIGRhdGEpIHtcbiAgICBkYXRhID0gJycgKyBkYXRhO1xuICAgIGlmICh0ZXh0LmRhdGEgPT09IGRhdGEpXG4gICAgICAgIHJldHVybjtcbiAgICBkaXNwYXRjaF9kZXYoXCJTdmVsdGVET01TZXREYXRhXCIsIHsgbm9kZTogdGV4dCwgZGF0YSB9KTtcbiAgICB0ZXh0LmRhdGEgPSBkYXRhO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVfZWFjaF9hcmd1bWVudChhcmcpIHtcbiAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ3N0cmluZycgJiYgIShhcmcgJiYgdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gYXJnKSkge1xuICAgICAgICBsZXQgbXNnID0gJ3sjZWFjaH0gb25seSBpdGVyYXRlcyBvdmVyIGFycmF5LWxpa2Ugb2JqZWN0cy4nO1xuICAgICAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBhcmcgJiYgU3ltYm9sLml0ZXJhdG9yIGluIGFyZykge1xuICAgICAgICAgICAgbXNnICs9ICcgWW91IGNhbiB1c2UgYSBzcHJlYWQgdG8gY29udmVydCB0aGlzIGl0ZXJhYmxlIGludG8gYW4gYXJyYXkuJztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICB9XG59XG5mdW5jdGlvbiB2YWxpZGF0ZV9zbG90cyhuYW1lLCBzbG90LCBrZXlzKSB7XG4gICAgZm9yIChjb25zdCBzbG90X2tleSBvZiBPYmplY3Qua2V5cyhzbG90KSkge1xuICAgICAgICBpZiAoIX5rZXlzLmluZGV4T2Yoc2xvdF9rZXkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYDwke25hbWV9PiByZWNlaXZlZCBhbiB1bmV4cGVjdGVkIHNsb3QgXCIke3Nsb3Rfa2V5fVwiLmApO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgU3ZlbHRlQ29tcG9uZW50RGV2IGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIGlmICghb3B0aW9ucyB8fCAoIW9wdGlvbnMudGFyZ2V0ICYmICFvcHRpb25zLiQkaW5saW5lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAndGFyZ2V0JyBpcyBhIHJlcXVpcmVkIG9wdGlvbmApO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgICRkZXN0cm95KCkge1xuICAgICAgICBzdXBlci4kZGVzdHJveSgpO1xuICAgICAgICB0aGlzLiRkZXN0cm95ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBDb21wb25lbnQgd2FzIGFscmVhZHkgZGVzdHJveWVkYCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgICB9O1xuICAgIH1cbiAgICAkY2FwdHVyZV9zdGF0ZSgpIHsgfVxuICAgICRpbmplY3Rfc3RhdGUoKSB7IH1cbn1cbmZ1bmN0aW9uIGxvb3BfZ3VhcmQodGltZW91dCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHN0YXJ0ID4gdGltZW91dCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbmZpbml0ZSBsb29wIGRldGVjdGVkYCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgeyBIdG1sVGFnLCBTdmVsdGVDb21wb25lbnQsIFN2ZWx0ZUNvbXBvbmVudERldiwgU3ZlbHRlRWxlbWVudCwgYWN0aW9uX2Rlc3Ryb3llciwgYWRkX2F0dHJpYnV0ZSwgYWRkX2NsYXNzZXMsIGFkZF9mbHVzaF9jYWxsYmFjaywgYWRkX2xvY2F0aW9uLCBhZGRfcmVuZGVyX2NhbGxiYWNrLCBhZGRfcmVzaXplX2xpc3RlbmVyLCBhZGRfdHJhbnNmb3JtLCBhZnRlclVwZGF0ZSwgYXBwZW5kLCBhcHBlbmRfZGV2LCBhc3NpZ24sIGF0dHIsIGF0dHJfZGV2LCBiZWZvcmVVcGRhdGUsIGJpbmQsIGJpbmRpbmdfY2FsbGJhY2tzLCBibGFua19vYmplY3QsIGJ1YmJsZSwgY2hlY2tfb3V0cm9zLCBjaGlsZHJlbiwgY2xhaW1fY29tcG9uZW50LCBjbGFpbV9lbGVtZW50LCBjbGFpbV9zcGFjZSwgY2xhaW1fdGV4dCwgY2xlYXJfbG9vcHMsIGNvbXBvbmVudF9zdWJzY3JpYmUsIGNvbXB1dGVfcmVzdF9wcm9wcywgY3JlYXRlRXZlbnREaXNwYXRjaGVyLCBjcmVhdGVfYW5pbWF0aW9uLCBjcmVhdGVfYmlkaXJlY3Rpb25hbF90cmFuc2l0aW9uLCBjcmVhdGVfY29tcG9uZW50LCBjcmVhdGVfaW5fdHJhbnNpdGlvbiwgY3JlYXRlX291dF90cmFuc2l0aW9uLCBjcmVhdGVfc2xvdCwgY3JlYXRlX3Nzcl9jb21wb25lbnQsIGN1cnJlbnRfY29tcG9uZW50LCBjdXN0b21fZXZlbnQsIGRhdGFzZXRfZGV2LCBkZWJ1ZywgZGVzdHJveV9ibG9jaywgZGVzdHJveV9jb21wb25lbnQsIGRlc3Ryb3lfZWFjaCwgZGV0YWNoLCBkZXRhY2hfYWZ0ZXJfZGV2LCBkZXRhY2hfYmVmb3JlX2RldiwgZGV0YWNoX2JldHdlZW5fZGV2LCBkZXRhY2hfZGV2LCBkaXJ0eV9jb21wb25lbnRzLCBkaXNwYXRjaF9kZXYsIGVhY2gsIGVsZW1lbnQsIGVsZW1lbnRfaXMsIGVtcHR5LCBlc2NhcGUsIGVzY2FwZWQsIGV4Y2x1ZGVfaW50ZXJuYWxfcHJvcHMsIGZpeF9hbmRfZGVzdHJveV9ibG9jaywgZml4X2FuZF9vdXRyb19hbmRfZGVzdHJveV9ibG9jaywgZml4X3Bvc2l0aW9uLCBmbHVzaCwgZ2V0Q29udGV4dCwgZ2V0X2JpbmRpbmdfZ3JvdXBfdmFsdWUsIGdldF9jdXJyZW50X2NvbXBvbmVudCwgZ2V0X3Nsb3RfY2hhbmdlcywgZ2V0X3Nsb3RfY29udGV4dCwgZ2V0X3NwcmVhZF9vYmplY3QsIGdldF9zcHJlYWRfdXBkYXRlLCBnZXRfc3RvcmVfdmFsdWUsIGdsb2JhbHMsIGdyb3VwX291dHJvcywgaGFuZGxlX3Byb21pc2UsIGhhc19wcm9wLCBpZGVudGl0eSwgaW5pdCwgaW5zZXJ0LCBpbnNlcnRfZGV2LCBpbnRyb3MsIGludmFsaWRfYXR0cmlidXRlX25hbWVfY2hhcmFjdGVyLCBpc19jbGllbnQsIGlzX2Nyb3Nzb3JpZ2luLCBpc19mdW5jdGlvbiwgaXNfcHJvbWlzZSwgbGlzdGVuLCBsaXN0ZW5fZGV2LCBsb29wLCBsb29wX2d1YXJkLCBtaXNzaW5nX2NvbXBvbmVudCwgbW91bnRfY29tcG9uZW50LCBub29wLCBub3RfZXF1YWwsIG5vdywgbnVsbF90b19lbXB0eSwgb2JqZWN0X3dpdGhvdXRfcHJvcGVydGllcywgb25EZXN0cm95LCBvbk1vdW50LCBvbmNlLCBvdXRyb19hbmRfZGVzdHJveV9ibG9jaywgcHJldmVudF9kZWZhdWx0LCBwcm9wX2RldiwgcXVlcnlfc2VsZWN0b3JfYWxsLCByYWYsIHJ1biwgcnVuX2FsbCwgc2FmZV9ub3RfZXF1YWwsIHNjaGVkdWxlX3VwZGF0ZSwgc2VsZWN0X211bHRpcGxlX3ZhbHVlLCBzZWxlY3Rfb3B0aW9uLCBzZWxlY3Rfb3B0aW9ucywgc2VsZWN0X3ZhbHVlLCBzZWxmLCBzZXRDb250ZXh0LCBzZXRfYXR0cmlidXRlcywgc2V0X2N1cnJlbnRfY29tcG9uZW50LCBzZXRfY3VzdG9tX2VsZW1lbnRfZGF0YSwgc2V0X2RhdGEsIHNldF9kYXRhX2Rldiwgc2V0X2lucHV0X3R5cGUsIHNldF9pbnB1dF92YWx1ZSwgc2V0X25vdywgc2V0X3JhZiwgc2V0X3N0b3JlX3ZhbHVlLCBzZXRfc3R5bGUsIHNldF9zdmdfYXR0cmlidXRlcywgc3BhY2UsIHNwcmVhZCwgc3RvcF9wcm9wYWdhdGlvbiwgc3Vic2NyaWJlLCBzdmdfZWxlbWVudCwgdGV4dCwgdGljaywgdGltZV9yYW5nZXNfdG9fYXJyYXksIHRvX251bWJlciwgdG9nZ2xlX2NsYXNzLCB0cmFuc2l0aW9uX2luLCB0cmFuc2l0aW9uX291dCwgdXBkYXRlX2tleWVkX2VhY2gsIHZhbGlkYXRlX2NvbXBvbmVudCwgdmFsaWRhdGVfZWFjaF9hcmd1bWVudCwgdmFsaWRhdGVfZWFjaF9rZXlzLCB2YWxpZGF0ZV9zbG90cywgdmFsaWRhdGVfc3RvcmUsIHhsaW5rX2F0dHIgfTtcbiIsIjxzY3JpcHQ+XG4gIGltcG9ydCBDaGFydCBmcm9tICdzdmVsdGUtZnJhcHBlLWNoYXJ0cyc7XG4gXG5cbiAgbGV0IGRhdGEgPSB7XG4gICAgbGFiZWxzOiBbJ1N1bicsICdNb24nLCAnVHVlcycsICdXZWQnLCAnVGh1cnMnLCAnRnJpJywgJ1NhdCddLFxuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIHZhbHVlczogWzEwLCAxMiwgMywgOSwgOCwgMTUsIDldXG4gICAgICB9XG4gICAgXVxuICB9O1xuPC9zY3JpcHQ+XG4gXG48Q2hhcnQgZGF0YT17ZGF0YX0gdHlwZT1cImxpbmVcIiAvPiIsIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRpbXBvcnQgRnJhcHBlQ2hhcnQgZnJvbSAnLi9mcmFwcGUtY2hhcnRzLnN2ZWx0ZSdcblx0aW1wb3J0IENoYXJ0SlMgZnJvbSAnLi9jaGFydC5zdmVsdGUnXG5cdGltcG9ydCB7YWRkQ3VzdG9tU3BvcnQsIHRlc3R9IGZyb20gJy4vc3BvcnQuanMnXG5cblx0ZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMsIHF1ZXJ5IH0pIHtcblx0XHRyZXR1cm4gdGhpcy5mZXRjaChgaG9tZS5qc29uYCkudGhlbihyID0+IHIuanNvbigpKS50aGVuKGRhdGFfcmF3ID0+IHtcblx0XHRcdHJldHVybiB7IGRhdGFfcmF3IH07XG5cdFx0fSk7XG5cdH1cdFxuXG48L3NjcmlwdD5cblxuPHNjcmlwdD5cbmV4cG9ydCBsZXQgZGF0YV9yYXdcbiAgICAgICAgLy8gU29ydCBsaXN0IG9mIEpzb24gYnkgZGF0ZXMgKGNsb3Nlc3QgZGF0ZXMgdG8gbGFzdCBwb3NpdGlvbnMpXG4gICAgZnVuY3Rpb24gY3VzdG9tX3NvcnQoYSwgYikge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoYS5kYXRlKS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShiLmRhdGUpLmdldFRpbWUoKTtcbiAgICB9XG5cdGRhdGFfcmF3ID0gZGF0YV9yYXcuc29ydChjdXN0b21fc29ydClcblx0XG5sZXQgbGlzdF9kYXRlID0gW11cbmxldCBsaXN0X3Nwb3J0ID0gW11cbmRhdGFfcmF3LmZvckVhY2goeD0+e1xuXHRsaXN0X2RhdGUucHVzaCh4LmRhdGUpXG5cdGxpc3Rfc3BvcnQucHVzaCh4LnNwb3J0KVxufSlcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+U3BvcnQgQXBwPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxkaXYgY2xhc3M9XCJcIj5cblxuXG48ZGl2IGNsYXNzPVwibWItNiBzaGFkb3cgXCI+XG4gICAgPGltZyBzcmM9XCJpbmRleC5qcGdcIiBhbHQ9XCJ3b3JrIGhhcmRlciBzaWduXCIgY2xhc3M9XCJhbnRpYWxpYXNlZCBiZy1ncmF5LTYwMCBvYmplY3QtY292ZXIgaC00OCB3LWZ1bGwgc2hhZG93IHJvdW5kZWQtbWRcIj5cbjwvZGl2PlxuXHRcblx0XG5cdFxuXHQ8ZGl2IGNsYXNzPSdwLTgnPlxuXHRcbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtYi04XCI+XG4gICAgICAgIDxoMSBjbGFzcz1cInRleHQtNHhsIHRleHQtY2VudGVyIHRleHQtYmx1ZS03MDAgZm9udC1zZW1pYm9sZCB0cmFja2luZy13aWRlc3RcIj5XZWxjb21lIHRvIHRoZSBTcG9ydCBQZXJmb3JtYW5jZSBBc3Npc3RhbnQgITwvaDE+XG4gICAgPC9kaXY+XG5cdFxuXG4gXG48YnIgLz5cblxuPGRpdiBjbGFzcz1cImZsZXggXCI+XG4gIDxkaXYgY2xhc3M9XCIgdy0yLzMgcC00XCI+XG5cdDxkaXYgY2xhc3M9XCJkaXZpZGUteSBkaXZpZGUtZ3JheS00MDAgXCI+XG5cdFxuXHQ8ZGl2IGNsYXNzPScnPlxuXHQ8aDEgY2xhc3M9XCJ0ZXh0LWJsdWUtODAwXCI+XG4gICAgICAgIFdoeSB1c2luZyB0aGUgU3BvcnQgQXNzaXN0YW50IEFwcD8gXG4gICAgPC9oMT5cblx0XG5cdDxwIGNsYXNzPSdwLTQnPkl0IGNhbiBiZSBoYXJkIHRvIG1lYXN1cmUgcHJvZ3Jlc3MgaW4gc3BvcnRzIHBlcmZvcm1hbmNlLiA8YnI+XG5cdFdlIHRoaW5rIHRoaXMgZXZvbHV0aW9uIHRvd2FyZHMgYmV0dGVyIHBlcmZvcm1hbmNlIGlzIHdoYXQgdHJ1bHkgbW90aXZhdGUgdXMgdG8gZ2l2ZSBvdXIgYmVzdCBpbiBzcG9ydHMgc2Vzc2lvbnMuPGJyPlxuXHRUaGlzIGFwcGxpY2F0aW9uIGlzIGhlcmUgdG8gaGVscCB5b3UgdHJhY2sgeW91ciBwcm9ncmVzcyBmcm9tIG9uZSBzcG9ydCBzZXNzaW9uIHRvIGFub3RoZXIuXG5cdDwvcD5cblx0PC9kaXY+XG5cbjxkaXYgY2xhc3M9J3B0LTgnPlxuXHQ8aDEgY2xhc3M9XCJ0ZXh0LWJsdWUtODAwXCI+XG4gICAgICAgIEhvdyB0byB1c2UgdGhlIEFwcD8gXG4gICAgPC9oMT5cblx0PHAgY2xhc3M9J3AtNCc+T25jZSB5b3UgZmluaXNoZWQgeW91ciBzcG9ydCBzZXNzaW9uLCByZWNvcmQgeW91ciBwZXJmb3JtYW5jZSBpbiB0aGUgJ05ldyBTZXNzaW9uJyB0YWIuIDxicj5cblx0Rm9yIG5vdywgeW91IGNhbiBzYXZlIHNlc3Npb25zIGZvciBydW5uaW5nLCBjeWNsaW5nLCBzd2ltbWluZyBhbmQgd29ya2luZyBvdXQuIDxicj5cblx0VGhlbiwgZ28gdG8gdGhlICdQZXJmb3JtYW5jZScgdGFiIGFuZCBvYnNlcnZlIHRoZSBwcm9ncmVzcyB5b3UgbWFkZS5cblx0PC9wPlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9J3B0LTgnPlxuXHQ8aDEgY2xhc3M9XCJ0ZXh0LWJsdWUtODAwXCI+XG4gICAgICAgIFdoYXQncyBuZXh0PyBcbiAgICA8L2gxPlxuICA8ZGl2IGNsYXNzPSdwLTQnPlxuXHQ8cCA+IFRoaXMgaXMgYSBmaXJzdCB2ZXJzaW9uIG9mIG91ciB3ZWJzaXRlIGFuZCB3ZSBpbnRlbmQgdG8gaW1wcm92ZSBpdCBmdXJ0aGVyIHRvIGFsbG93IGZvciBtb3JlIGZlYXR1cmVzIGFuZCBhIGJldHRlciBleHBlcmllbmNlLjxicj5cblx0V2UgYXJlIHRoaW5raW5nIG9mIGltcGxlbWVudGluZyBvcHRpb25zIHRvOjwvcD5cblx0PGx1PlxuXHQ8bGk+QWRkIG1vcmUgc3BvcnRzXG5cdDwvbGk+XG5cdDxsaT5EZWxldGUgc2Vzc2lvbnMgdGhhdCB3ZXJlIHdyb25nbHkgZW50ZXJlZFxuXHQ8L2xpPlxuXHQ8bGk+QWRkIGFuIGF1dGhlbnRpZmljYXRpb24gc3lzdGVtXG5cdDwvbGk+XG5cdDxsaT5JbXByb3ZlIGFuZCBhZGQgbmV3IHZpc3VhbGl6YXRpb25zLlxuXHQ8L2xpPlxuXHQ8L2x1PlxuXHQ8cD5XZSBob3BlIHlvdSBlbmpveSBvdXIgQXBwIGFuZCB0aGF0IGl0IGhlbHBzIHlvdSBzdGF5aW5nIG1vdGl2YXRlZCE8YnI+XG5cdEZlZWwgZnJlZSB0byBjb250YWN0IHVzIHRvIGdpdmUgeW91ciB0aG91Z2h0cyBhYm91dCBmZWF0dXJlcyB5b3Ugd291bGQgbGlrZSB0byBzZWUgaW4gdGhlIEFwcC48L3A+IFxuXHQ8L2Rpdj5cbjwvZGl2PjwvZGl2PlxuXHRcblxuXG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJmbGV4LWluaXRpYWwgdy0xLzMgcC00XCI+XG5cdCAgXG5cdDxoMSBjbGFzcz1cInRleHQtYmx1ZS04MDBcIj5cbiAgICAgICAgQ2FsZW5kYXIgb2YgeW91ciBsYXN0IHNwb3J0IHNlc3Npb25zIDogXG4gICAgPC9oMT48cCBjbGFzcz0nZmxleCBqdXN0aWZ5LWNlbnRlcic+XG5cdDxsdT5cblx0eyNlYWNoIFsxLDIsMyw0LDVdIGFzIGl9XG5cdDxsaSBjbGFzcz0ncC0yJz57bGlzdF9kYXRlW2xpc3RfZGF0ZS5sZW5ndGgtaV19IC8ge2xpc3Rfc3BvcnRbbGlzdF9zcG9ydC5sZW5ndGgtaV19PC9saT5cblxuXHR7L2VhY2h9XG5cdDwvbHU+PC9wPlxuPC9kaXY+XG5cblxuICA8L2Rpdj5cblxuPC9kaXY+XG5cdFxuXG48L2Rpdj5cblxuPCEtLSBcbjxoMiBjbGFzcz0nZm9udC1zZW1pYm9sZCc+VG9kbyBsaXN0IGltcG9ydGFudDo8L2gyPlxuPHA+bGF5b3V0IHdvcmtvdXQ8L3A+XG48cD4gaW50ZWdyZXIgbGF5b3V0IHBlcmZvcm1hbmNlIHZhbGVudGluPC9wPlxuPHA+Q2FsZW5kYXIgb2YgbGFzdCBzZXNzaW9ucyBob21lIHBhZ2U8L3A+XG48cD5Ib21lIHBhZ2UgOiBxdSdlc3QgY2UgcXVlIGxlIHNpdGU/PC9wPlxuPHA+VmVyaWZpZXIgb3JkcmUgZGF0ZSBjb3JyZXNwb25kIGEgb3JkcmUganNvbjwvcD5cbjxwPiBWYXJpYXRpb24gdmVydCByb3VnZSBwYWxlIGRvdXg8L3A+XG48cD5SYWpvdXRlciBpY29ucyBjYWxlbmRyaWVyIHBlcmZvcm1hbmNlPC9wPlxuPGJyLz5cblxuPGgyIGNsYXNzPSdmb250LXNlbWlib2xkJz5Ub2RvbGlzdCBtb2lucyBpbXBvcnRhbnQgOiA8L2gyPlxuPHA+UmFkYXIgY2hhcnQgb2Ygc3BvcnRzPC9wPlxuPHA+T3B0aW9ucyBwb3VyIHN1cHByaW1lciBkZXMgZG9ubsOpZXMgZGUgbGEgYmFzZSBlbiBjYXMgZCdlcnJldXI8L3A+XG48cD5Mb2dpbiAvIGF1dGhlbnRoaWZpY2F0aW9uIGh0dHBzOi8vd3d3Lm5pZWxzdmFuZGVybW9sZW4uY29tL3NpZ251cC1mb3JtLWh0bWw1LXZhbGlkYXRpb24tc3ZlbHRlLzwvcD5cblxuXG48YnIvPlxuXG5cbjxoMiBjbGFzcz0nZm9udC1zZW1pYm9sZCc+RG9uZTogPC9oMj5cbjxwPldvcmsgb3V0IHBlcmZvcm1hbmNlIGV0IG5ldyBzZXNzaW9uPC9wPlxuPHA+RGF0YSBXT3Jrb3V0IDwvcD4gLS0+XG4iLCI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cblx0ZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMsIHF1ZXJ5IH0pIHtcblx0XHRyZXR1cm4gdGhpcy5mZXRjaChgbmV3X3Nlc3Npb25zL3N3aW1taW5nLmpzb25gKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ob3B0aW9ucyA9PiB7XG5cdFx0XHRyZXR1cm4geyBvcHRpb25zIH07XG5cdFx0fSk7XG5cdH1cdFxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gICAgbGV0IHNwb3J0ID0gJ3N3aW1taW5nJ1xuICAgIGxldCBkYXRlID0gbnVsbCwgbWV0ZXJzID0gbnVsbCwgbWludXRlcyA9IG51bGwsIG5iX3NwcmludHMgPSBudWxsOyAgICBcbiAgICBsZXQgZXJyb3JfYm9vbGVhbiA9IGZhbHNlO1xuXG5cbiAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgICAgIGNvbnN0IHBvc3QgPSB7c3BvcnQsIGRhdGUsIG1ldGVycywgbWludXRlcywgbmJfc3ByaW50c31cbiAgICAgICAgYXdhaXQgZmV0Y2goYG5ld19zZXNzaW9ucy9zd2ltbWluZy5qc29uYCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIiwgXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdCksXG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF90b19tZVwiKS5pbm5lckhUTUwgKz0gIFxuICAgICAgICAgICAgICBcIjxkaXYgY2xhc3M9J2JnLXRlYWwtMTAwIGJvcmRlci10LTQgYm9yZGVyLXRlYWwtNTAwIHJvdW5kZWQtYiB0ZXh0LXRlYWwtOTAwIHB4LTQgcHktMyBzaGFkb3ctbWQnIHJvbGU9J2FsZXJ0Jz48ZGl2IGNsYXNzPSdmbGV4Jz48ZGl2IGNsYXNzPSdweS0xJz48c3ZnIGNsYXNzPSdmaWxsLWN1cnJlbnQgaC02IHctNiB0ZXh0LXRlYWwtNTAwIG1yLTQnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDIwIDIwJz48cGF0aCBkPSdNMi45MyAxNy4wN0ExMCAxMCAwIDEgMSAxNy4wNyAyLjkzIDEwIDEwIDAgMCAxIDIuOTMgMTcuMDd6bTEyLjczLTEuNDFBOCA4IDAgMSAwIDQuMzQgNC4zNGE4IDggMCAwIDAgMTEuMzIgMTEuMzJ6TTkgMTFWOWgydjZIOXYtNHptMC02aDJ2Mkg5VjV6Jy8+PC9zdmc+PC9kaXY+PGRpdj48cCBjbGFzcz0nZm9udC1ib2xkJz5TZXNzaW9uIHdhcyBzdWNjZXNzZnVsbHkgYWRkZWQ8L3A+PC9kaXY+PC9kaXY+PC9kaXY+PGJyLz5cIjsgXG4gICAgICAgIGlmIChyZXNwb25zZS5vayl7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdFwiLCByZXN1bHQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgIGZ1bmN0aW9uIHZhbGlkYXRlTWVzc2FnZUVtYWlsKGV2ZW50KSB7XG4gICAgICAgbGV0IHRleHRib3ggPSBldmVudC50YXJnZXQ7XG4gICAgICAgZXJyb3JfYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgIGlmICh0ZXh0Ym94LnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgdGV4dGJveC5zZXRDdXN0b21WYWxpZGl0eSgnTnVtYmVyIHJlcXVpcmVkJyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGV4dGJveC52YWxpZGl0eS50eXBlTWlzbWF0Y2gpe1xuICAgICAgICAgICAgZXJyb3JfYm9vbGVhbiA9IHRydWU7XG4gICAgICAgICAgICB0ZXh0Ym94LnNldEN1c3RvbVZhbGlkaXR5KCdwbGVhc2UgZW50ZXIgYSB2YWxpZCBpbnB1dCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICB0ZXh0Ym94LnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG48L3NjcmlwdD5cblxuXG5cblxuXG48ZGl2IGNsYXNzPVwiZmxleCBcIj5cbiAgPGRpdiBjbGFzcz1cIiB3LTEvMyBwLTRcIj5cblxuICAgIDwhLS0gPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHAtMiB0ZXh0LTJ4bCBmb250LXNlbWlib2xkXCI+IC0tPlxuICAgIDxpbWcgY2xhc3M9J3ctZnVsbCcgc3JjPVwic3dpbW1pbmdfZHJhdy5qcGdcIiBhbHQ9XCJzd2ltbWluZ1wiICA+IFxuICAgICAgICA8IS0tIDwvZGl2PiAtLT5cblxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImZsZXgtaW5pdGlhbCB3LTIvMyBwLTJcIj5cbiAgPGRpdiBjbGFzcz1cImJsb2NrIHVwcGVyY2FzZSB0ZXh0LWNlbnRlciBwLTIgdGV4dC0yeGwgZm9udC1zZW1pYm9sZFwiPlxuICAgIFN3aW1taW5nIE5ldyBTZXNzaW9uXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIiBwLTJcIj5cbiAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIG9uOnN1Ym1pdHxwcmV2ZW50RGVmYXVsdD1cIntoYW5kbGVTdWJtaXR9XCJcbiAgICAgICAgICAgIG9uOmludmFsaWQ9e3ZhbGlkYXRlTWVzc2FnZUVtYWlsfVxuICAgICAgICAgICAgb246Y2hhbmdlZD17dmFsaWRhdGVNZXNzYWdlRW1haWx9XG4gICAgICAgICAgICBvbjppbnB1dD17dmFsaWRhdGVNZXNzYWdlRW1haWx9XG4gICAgICAgID5cblxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRhdGVcIiBjbGFzcz1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JleS1kYXJrZXIgdGV4dC14cyBmb250LWJvbGQgbWItMlwiPlxuICAgICAgICAgICAgRGF0ZVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGJpbmQ6dmFsdWU9e2RhdGV9IHBsYWNlaG9sZGVyPSdkYXRlJyByZXF1aXJlZCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiIGNsYXNzPVwidGV4dC1jZW50ZXIgYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmV5LWxpZ2h0ZXIgdGV4dC1ncmV5LWRhcmtlciBib3JkZXIgYm9yZGVyLXJlZCByb3VuZGVkIHB5LTMgcHgtNCBtYi0zXCIvPlxuICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgPGxhYmVsIGZvcj1cIm1ldGVyc1wiIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCI+XG4gICAgICAgIERpc3RhbmNlIChtKTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPXttZXRlcnN9IHBsYWNlaG9sZGVyPSdtZXRlcnMnIHJlcXVpcmVkIHR5cGU9XCJudW1iZXJcIiBpZD1cIm1ldGVyc1wiIGNsYXNzPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmV5LWxpZ2h0ZXIgdGV4dC1ncmV5LWRhcmtlciBib3JkZXIgYm9yZGVyLXJlZCByb3VuZGVkIHB5LTMgcHgtNCBtYi0zXCIvPlxuICAgICAgICAgICAgPGJyIC8+XG5cblxuICAgICAgICA8bGFiZWwgZm9yPVwibWludXRlc1wiIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCI+XG4gICAgICAgIE1pbnV0ZXM8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17bWludXRlc30gcGxhY2Vob2xkZXI9J21pbnV0ZXMnIHJlcXVpcmVkIHR5cGU9XCJudW1iZXJcIiBpZD1cIm1pbnV0ZXNcIiBjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgYm9yZGVyIGJvcmRlci1yZWQgcm91bmRlZCBweS0zIHB4LTQgbWItM1wiLz5cbiAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgIDxsYWJlbCBmb3I9XCJuYl9zcHJpbnRzXCIgY2xhc3M9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyZXktZGFya2VyIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIj5cbiAgICAgICAgU3ByaW50czwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPXtuYl9zcHJpbnRzfSBwbGFjZWhvbGRlcj0nbnVtYmVyIG9mIHNwcmludHMnIHJlcXVpcmVkIHR5cGU9XCJudW1iZXJcIiBpZD1cIm5iX3NwcmludHNcIiBjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgYm9yZGVyIGJvcmRlci1yZWQgcm91bmRlZCBweS0zIHB4LTQgbWItM1wiLz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IGp1c3RpZnktZW5kIG15LTgnPlxuICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4Jz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJiZy10cmFuc3BhcmVudCBob3ZlcjpiZy1ibHVlLTUwMCB0ZXh0LWJsdWUtNzAwIGZvbnQtc2VtaWJvbGQgaG92ZXI6dGV4dC13aGl0ZSBweS0yIHB4LTQgYm9yZGVyIGJvcmRlci1ibHVlLTUwMCBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZFwiPlxuICAgICAgICBBZGQgU2Vzc2lvbjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj4gICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPGJyIC8+XG5cblxuXG4gICAgICAgIDxkaXYgaWQ9XCJhZGRfdG9fbWVcIj4gXG4gICAgICAgIDwvZGl2PiBcbiAgICA8L2Rpdj4gXG4gIDwvZGl2PlxuPC9kaXY+XG5cbiIsIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRleHBvcnQgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xuXHRcdHJldHVybiB0aGlzLmZldGNoKGBuZXdfc2Vzc2lvbnMvY3ljbGluZy5qc29uYCkudGhlbihyID0+IHIuanNvbigpKS50aGVuKG9wdGlvbnMgPT4ge1xuXHRcdFx0cmV0dXJuIHsgb3B0aW9ucyB9O1xuXHRcdH0pO1xuXHR9XHRcbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuICAgIGxldCBzcG9ydCA9ICdjeWNsaW5nJ1xuICAgIGxldCBkYXRlID0gbnVsbCwgbWV0ZXJzID0gbnVsbCwgbWludXRlcyA9IG51bGwsIGVsZXZhdGlvbiA9IG51bGw7ICAgIFxuICAgIGxldCBlcnJvcl9ib29sZWFuID0gZmFsc2U7XG5cblxuICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgICAgY29uc3QgcG9zdCA9IHtzcG9ydCwgZGF0ZSwgbWV0ZXJzLCBtaW51dGVzLCBlbGV2YXRpb259XG4gICAgICAgIGF3YWl0IGZldGNoKGBuZXdfc2Vzc2lvbnMvY3ljbGluZy5qc29uYCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIiwgXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdCksXG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF90b19tZVwiKS5pbm5lckhUTUwgKz0gIFxuICAgICAgICAgICAgICBcIjxkaXYgY2xhc3M9J2JnLXRlYWwtMTAwIGJvcmRlci10LTQgYm9yZGVyLXRlYWwtNTAwIHJvdW5kZWQtYiB0ZXh0LXRlYWwtOTAwIHB4LTQgcHktMyBzaGFkb3ctbWQnIHJvbGU9J2FsZXJ0Jz48ZGl2IGNsYXNzPSdmbGV4Jz48ZGl2IGNsYXNzPSdweS0xJz48c3ZnIGNsYXNzPSdmaWxsLWN1cnJlbnQgaC02IHctNiB0ZXh0LXRlYWwtNTAwIG1yLTQnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDIwIDIwJz48cGF0aCBkPSdNMi45MyAxNy4wN0ExMCAxMCAwIDEgMSAxNy4wNyAyLjkzIDEwIDEwIDAgMCAxIDIuOTMgMTcuMDd6bTEyLjczLTEuNDFBOCA4IDAgMSAwIDQuMzQgNC4zNGE4IDggMCAwIDAgMTEuMzIgMTEuMzJ6TTkgMTFWOWgydjZIOXYtNHptMC02aDJ2Mkg5VjV6Jy8+PC9zdmc+PC9kaXY+PGRpdj48cCBjbGFzcz0nZm9udC1ib2xkJz5TZXNzaW9uIHdhcyBzdWNjZXNzZnVsbHkgYWRkZWQ8L3A+PC9kaXY+PC9kaXY+PC9kaXY+PGJyLz5cIjsgXG4gICAgICAgIGlmIChyZXNwb25zZS5vayl7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdFwiLCByZXN1bHQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgIGZ1bmN0aW9uIHZhbGlkYXRlTWVzc2FnZUVtYWlsKGV2ZW50KSB7XG4gICAgICAgbGV0IHRleHRib3ggPSBldmVudC50YXJnZXQ7XG4gICAgICAgZXJyb3JfYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgIGlmICh0ZXh0Ym94LnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgdGV4dGJveC5zZXRDdXN0b21WYWxpZGl0eSgnTnVtYmVyIHJlcXVpcmVkJyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGV4dGJveC52YWxpZGl0eS50eXBlTWlzbWF0Y2gpe1xuICAgICAgICAgICAgZXJyb3JfYm9vbGVhbiA9IHRydWU7XG4gICAgICAgICAgICB0ZXh0Ym94LnNldEN1c3RvbVZhbGlkaXR5KCdwbGVhc2UgZW50ZXIgYSB2YWxpZCBpbnB1dCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICB0ZXh0Ym94LnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG48L3NjcmlwdD5cblxuXG5cblxuXG48ZGl2IGNsYXNzPVwiZmxleCBcIj5cbiAgPGRpdiBjbGFzcz1cIiB3LTEvMyBwLTRcIj5cblxuICAgIDwhLS0gPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHAtMiB0ZXh0LTJ4bCBmb250LXNlbWlib2xkXCI+IC0tPlxuICAgIDxpbWcgY2xhc3M9J3ctZnVsbCcgc3JjPVwiY3ljbGluZ19kcmF3aW5nLmpwZWdcIiBhbHQ9XCJjeWNsaW5nXCIgID4gXG4gICAgICAgIDwhLS0gPC9kaXY+IC0tPlxuXG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZmxleC1pbml0aWFsIHctMi8zIHAtMlwiPlxuICA8ZGl2IGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHRleHQtY2VudGVyIHAtMiB0ZXh0LTJ4bCBmb250LXNlbWlib2xkXCI+XG4gICAgQ3ljbGluZyBOZXcgU2Vzc2lvblxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCIgcC0yXCI+XG4gICAgICAgIDxmb3JtXG4gICAgICAgICAgICBvbjpzdWJtaXR8cHJldmVudERlZmF1bHQ9XCJ7aGFuZGxlU3VibWl0fVwiXG4gICAgICAgICAgICBvbjppbnZhbGlkPXt2YWxpZGF0ZU1lc3NhZ2VFbWFpbH1cbiAgICAgICAgICAgIG9uOmNoYW5nZWQ9e3ZhbGlkYXRlTWVzc2FnZUVtYWlsfVxuICAgICAgICAgICAgb246aW5wdXQ9e3ZhbGlkYXRlTWVzc2FnZUVtYWlsfVxuICAgICAgICA+XG5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkYXRlXCIgY2xhc3M9XCIgYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCI+XG4gICAgICAgICAgICBEYXRlXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17ZGF0ZX0gcGxhY2Vob2xkZXI9J2RhdGUnIHJlcXVpcmVkIHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlXCIgY2xhc3M9XCJ0ZXh0LWNlbnRlciBhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcHktMyBweC00IG1iLTNcIi8+XG4gICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICA8bGFiZWwgZm9yPVwibWV0ZXJzXCIgY2xhc3M9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyZXktZGFya2VyIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIj5cbiAgICAgICAgRGlzdGFuY2UgKG0pPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGJpbmQ6dmFsdWU9e21ldGVyc30gcGxhY2Vob2xkZXI9J21ldGVycycgcmVxdWlyZWQgdHlwZT1cIm51bWJlclwiIGlkPVwibWV0ZXJzXCIgY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcHktMyBweC00IG1iLTNcIi8+XG4gICAgICAgICAgICA8YnIgLz5cblxuXG4gICAgICAgIDxsYWJlbCBmb3I9XCJtaW51dGVzXCIgY2xhc3M9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyZXktZGFya2VyIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIj5cbiAgICAgICAgTWludXRlczwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPXttaW51dGVzfSBwbGFjZWhvbGRlcj0nbWludXRlcycgcmVxdWlyZWQgdHlwZT1cIm51bWJlclwiIGlkPVwibWludXRlc1wiIGNsYXNzPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmV5LWxpZ2h0ZXIgdGV4dC1ncmV5LWRhcmtlciBib3JkZXIgYm9yZGVyLXJlZCByb3VuZGVkIHB5LTMgcHgtNCBtYi0zXCIvPlxuICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgPGxhYmVsIGZvcj1cImVsZXZhdGlvblwiIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCI+XG4gICAgICAgIEVsZXZhdGlvbiAobSk8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17ZWxldmF0aW9ufSBwbGFjZWhvbGRlcj0nZWxldmF0aW9uJyByZXF1aXJlZCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJlbGV2YXRpb25cIiBjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgYm9yZGVyIGJvcmRlci1yZWQgcm91bmRlZCBweS0zIHB4LTQgbWItM1wiLz5cbiAgICAgICAgICAgIDxiciAvPlxuXG5cbiAgICAgICAgPGRpdiBjbGFzcz0nZmxleCBqdXN0aWZ5LWVuZCBteS04Jz5cbiAgICAgICAgPGRpdiBjbGFzcz0nZmxleCc+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYmctdHJhbnNwYXJlbnQgaG92ZXI6YmctYmx1ZS01MDAgdGV4dC1ibHVlLTcwMCBmb250LXNlbWlib2xkIGhvdmVyOnRleHQtd2hpdGUgcHktMiBweC00IGJvcmRlciBib3JkZXItYmx1ZS01MDAgaG92ZXI6Ym9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWRcIj5cbiAgICAgICAgQWRkIFNlc3Npb248L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+ICAgICAgICBcbiAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxiciAvPlxuXG5cblxuICAgICAgICA8ZGl2IGlkPVwiYWRkX3RvX21lXCI+IFxuICAgICAgICA8L2Rpdj4gXG4gICAgPC9kaXY+IFxuICA8L2Rpdj5cbjwvZGl2PlxuXG4iLCI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cblx0ZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMsIHF1ZXJ5IH0pIHtcblx0XHRyZXR1cm4gdGhpcy5mZXRjaChgbmV3X3Nlc3Npb25zL3J1bm5pbmcuanNvbmApLnRoZW4ociA9PiByLmpzb24oKSkudGhlbihvcHRpb25zID0+IHtcblx0XHRcdHJldHVybiB7IG9wdGlvbnMgfTtcblx0XHR9KTtcblx0fVx0XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cbiAgICBsZXQgc3BvcnQgPSAncnVubmluZydcbiAgICBsZXQgZGF0ZSA9IG51bGwsIG1ldGVycyA9IG51bGwsIG1pbnV0ZXMgPSBudWxsLCBlbGV2YXRpb24gPSBudWxsOyAgICBcbiAgICBsZXQgZXJyb3JfYm9vbGVhbiA9IGZhbHNlO1xuXG5cbiAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgICAgIGNvbnN0IHBvc3QgPSB7c3BvcnQsIGRhdGUsIG1ldGVycywgbWludXRlcywgZWxldmF0aW9ufVxuICAgICAgICBhd2FpdCBmZXRjaChgbmV3X3Nlc3Npb25zL3J1bm5pbmcuanNvbmAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsIFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3QpLFxuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRfdG9fbWVcIikuaW5uZXJIVE1MICs9ICBcbiAgICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPSdiZy10ZWFsLTEwMCBib3JkZXItdC00IGJvcmRlci10ZWFsLTUwMCByb3VuZGVkLWIgdGV4dC10ZWFsLTkwMCBweC00IHB5LTMgc2hhZG93LW1kJyByb2xlPSdhbGVydCc+PGRpdiBjbGFzcz0nZmxleCc+PGRpdiBjbGFzcz0ncHktMSc+PHN2ZyBjbGFzcz0nZmlsbC1jdXJyZW50IGgtNiB3LTYgdGV4dC10ZWFsLTUwMCBtci00JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyMCAyMCc+PHBhdGggZD0nTTIuOTMgMTcuMDdBMTAgMTAgMCAxIDEgMTcuMDcgMi45MyAxMCAxMCAwIDAgMSAyLjkzIDE3LjA3em0xMi43My0xLjQxQTggOCAwIDEgMCA0LjM0IDQuMzRhOCA4IDAgMCAwIDExLjMyIDExLjMyek05IDExVjloMnY2SDl2LTR6bTAtNmgydjJIOVY1eicvPjwvc3ZnPjwvZGl2PjxkaXY+PHAgY2xhc3M9J2ZvbnQtYm9sZCc+U2Vzc2lvbiB3YXMgc3VjY2Vzc2Z1bGx5IGFkZGVkPC9wPjwvZGl2PjwvZGl2PjwvZGl2Pjxici8+XCI7IFxuICAgICAgICBpZiAocmVzcG9uc2Uub2spe1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHRcIiwgcmVzdWx0KVxuICAgICAgICB9XG4gICAgfVxuXG4gICBmdW5jdGlvbiB2YWxpZGF0ZU1lc3NhZ2VFbWFpbChldmVudCkge1xuICAgICAgIGxldCB0ZXh0Ym94ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgIGVycm9yX2Jvb2xlYW4gPSBmYWxzZTtcbiAgICAgICBpZiAodGV4dGJveC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHRleHRib3guc2V0Q3VzdG9tVmFsaWRpdHkoJ051bWJlciByZXF1aXJlZCcpO1xuICAgICAgICB9IGVsc2UgaWYgKHRleHRib3gudmFsaWRpdHkudHlwZU1pc21hdGNoKXtcbiAgICAgICAgICAgIGVycm9yX2Jvb2xlYW4gPSB0cnVlO1xuICAgICAgICAgICAgdGV4dGJveC5zZXRDdXN0b21WYWxpZGl0eSgncGxlYXNlIGVudGVyIGEgdmFsaWQgaW5wdXQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgdGV4dGJveC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG5cblxuPGRpdiBjbGFzcz1cImZsZXggXCI+XG4gIDxkaXYgY2xhc3M9XCIgdy0xLzMgcC00XCI+XG5cbiAgICA8IS0tIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBwLTIgdGV4dC0yeGwgZm9udC1zZW1pYm9sZFwiPiAtLT5cbiAgICA8aW1nIGNsYXNzPSd3LWZ1bGwnIHNyYz1cInJ1bm5pbmdkcmF3LnBuZ1wiIGFsdD1cInJ1bm5pbmdcIiAgPiBcbiAgICAgICAgPCEtLSA8L2Rpdj4gLS0+XG5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmbGV4LWluaXRpYWwgdy0yLzMgcC0yXCI+XG4gIDxkaXYgY2xhc3M9XCJibG9jayB1cHBlcmNhc2UgdGV4dC1jZW50ZXIgcC0yIHRleHQtMnhsIGZvbnQtc2VtaWJvbGRcIj5cbiAgICBSdW5uaW5nIE5ldyBTZXNzaW9uXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIiBwLTJcIj5cbiAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIG9uOnN1Ym1pdHxwcmV2ZW50RGVmYXVsdD1cIntoYW5kbGVTdWJtaXR9XCJcbiAgICAgICAgICAgIG9uOmludmFsaWQ9e3ZhbGlkYXRlTWVzc2FnZUVtYWlsfVxuICAgICAgICAgICAgb246Y2hhbmdlZD17dmFsaWRhdGVNZXNzYWdlRW1haWx9XG4gICAgICAgICAgICBvbjppbnB1dD17dmFsaWRhdGVNZXNzYWdlRW1haWx9XG4gICAgICAgID5cblxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRhdGVcIiBjbGFzcz1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JleS1kYXJrZXIgdGV4dC14cyBmb250LWJvbGQgbWItMlwiPlxuICAgICAgICAgICAgRGF0ZVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGJpbmQ6dmFsdWU9e2RhdGV9IHBsYWNlaG9sZGVyPSdkYXRlJyByZXF1aXJlZCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiIGNsYXNzPVwidGV4dC1jZW50ZXIgYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmV5LWxpZ2h0ZXIgdGV4dC1ncmV5LWRhcmtlciBib3JkZXIgYm9yZGVyLXJlZCByb3VuZGVkIHB5LTMgcHgtNCBtYi0zXCIvPlxuICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgPGxhYmVsIGZvcj1cIm1ldGVyc1wiIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCI+XG4gICAgICAgIERpc3RhbmNlIChtKTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPXttZXRlcnN9IHBsYWNlaG9sZGVyPSdtZXRlcnMnIHJlcXVpcmVkIHR5cGU9XCJudW1iZXJcIiBpZD1cIm1ldGVyc1wiIGNsYXNzPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmV5LWxpZ2h0ZXIgdGV4dC1ncmV5LWRhcmtlciBib3JkZXIgYm9yZGVyLXJlZCByb3VuZGVkIHB5LTMgcHgtNCBtYi0zXCIvPlxuICAgICAgICAgICAgPGJyIC8+XG5cblxuICAgICAgICA8bGFiZWwgZm9yPVwibWludXRlc1wiIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCI+XG4gICAgICAgIE1pbnV0ZXM8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17bWludXRlc30gcGxhY2Vob2xkZXI9J21pbnV0ZXMnIHJlcXVpcmVkIHR5cGU9XCJudW1iZXJcIiBpZD1cIm1pbnV0ZXNcIiBjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgYm9yZGVyIGJvcmRlci1yZWQgcm91bmRlZCBweS0zIHB4LTQgbWItM1wiLz5cbiAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgIDxsYWJlbCBmb3I9XCJlbGV2YXRpb25cIiBjbGFzcz1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JleS1kYXJrZXIgdGV4dC14cyBmb250LWJvbGQgbWItMlwiPlxuICAgICAgICBFbGV2YXRpb24gKG0pPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGJpbmQ6dmFsdWU9e2VsZXZhdGlvbn0gcGxhY2Vob2xkZXI9J2VsZXZhdGlvbicgcmVxdWlyZWQgdHlwZT1cIm51bWJlclwiIGlkPVwiZWxldmF0aW9uXCIgY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcHktMyBweC00IG1iLTNcIi8+XG4gICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IGp1c3RpZnktZW5kIG15LTgnPlxuICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4Jz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJiZy10cmFuc3BhcmVudCBob3ZlcjpiZy1ibHVlLTUwMCB0ZXh0LWJsdWUtNzAwIGZvbnQtc2VtaWJvbGQgaG92ZXI6dGV4dC13aGl0ZSBweS0yIHB4LTQgYm9yZGVyIGJvcmRlci1ibHVlLTUwMCBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZFwiPlxuICAgICAgICBBZGQgU2Vzc2lvbjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj4gICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPGJyIC8+XG5cblxuXG4gICAgICAgIDxkaXYgaWQ9XCJhZGRfdG9fbWVcIj4gXG4gICAgICAgIDwvZGl2PiBcbiAgICA8L2Rpdj4gXG4gIDwvZGl2PlxuPC9kaXY+XG5cbiIsIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRleHBvcnQgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xuXHRcdHJldHVybiB0aGlzLmZldGNoKGBuZXdfc2Vzc2lvbnMvd29ya291dC5qc29uYCkudGhlbihyID0+IHIuanNvbigpKS50aGVuKG9wdGlvbnMgPT4ge1xuXHRcdFx0cmV0dXJuIHsgb3B0aW9ucyB9O1xuXHRcdH0pO1xuXHR9XHRcbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuICAgIGxldCBzcG9ydCA9ICd3b3Jrb3V0J1xuXG4gICAgbGV0IGRhdGUgPSBudWxsLCBtZXRlcnMgPSAwLCBtaW51dGVzID0gMCwgZWxldmF0aW9uID0gMDsgICAgXG4gICAgbGV0IGVycm9yX2Jvb2xlYW4gPSBmYWxzZTtcblxuICAgIGxldCBzcXVhdHNfc2VyaWVzID0gMDtcbiAgICBsZXQgc3RhaXJfY2xpbWJzX3NlcmllcyA9IDA7XG4gICAgbGV0IGJlbmNoX2NsaW1ic19zZXJpZXMgPSAwO1xuICAgIGxldCBsZWdfcHJlc3Nfc2VyaWVzID0gMDtcbiAgICBsZXQgcHVzaHVwc19zZXJpZXMgPSAwO1xuICAgIGxldCBwdXNodXBzX2xhdGVyYWxfc2VyaWVzID0gMDtcbiAgICBsZXQgcHVzaHVwc19qdW1waW5nX3NlcmllcyA9IDA7XG4gICAgbGV0IHB1c2h1cHNfY2xvc2luZ19zZXJpZXMgPSAwO1xuICAgIGxldCBwdXNodXBzX3JhaXNlZF9zZXJpZXMgPSAwO1xuICAgIGxldCBhYmRvbWluYWxfc2VyaWVzID0gMDtcbiAgICBsZXQgYWJkb21pbmFsX2xhdGVyYWxfc2VyaWVzID0gMDtcbiAgICBsZXQgYWJkb21pbmFsX2NvcmVfc2VyaWVzID0gMDtcbiAgICBsZXQgYmVuY2hfc2VyaWVzID0gMDtcbiAgICBsZXQgYmljZXBzX3dlaWdodF9zZXJpZXMgPSAwO1xuICAgIGxldCBwdWxsdXBzX3NlcmllcyA9IDA7XG5cbiAgICBsZXQgc3F1YXRzX251bWJlciA9IDA7XG4gICAgbGV0IHN0YWlyX2NsaW1ic19udW1iZXIgPSAwO1xuICAgIGxldCBiZW5jaF9jbGltYnNfbnVtYmVyID0gMDtcbiAgICBsZXQgbGVnX3ByZXNzX251bWJlciA9IDA7XG4gICAgbGV0IHB1c2h1cHNfbnVtYmVyID0gMDtcbiAgICBsZXQgcHVzaHVwc19sYXRlcmFsX251bWJlciA9IDA7XG4gICAgbGV0IHB1c2h1cHNfanVtcGluZ19udW1iZXIgPSAwO1xuICAgIGxldCBwdXNodXBzX2Nsb3NpbmdfbnVtYmVyID0gMDtcbiAgICBsZXQgcHVzaHVwc19yYWlzZWRfbnVtYmVyID0gMDtcbiAgICBsZXQgYWJkb21pbmFsX251bWJlciA9IDA7XG4gICAgbGV0IGFiZG9taW5hbF9sYXRlcmFsX251bWJlciA9IDA7XG4gICAgbGV0IGFiZG9taW5hbF9jb3JlX251bWJlciA9IDA7XG4gICAgbGV0IGJlbmNoX251bWJlciA9IDA7XG4gICAgbGV0IGJpY2Vwc193ZWlnaHRfbnVtYmVyID0gMDtcbiAgICBsZXQgcHVsbHVwc19udW1iZXIgPSAwO1xuICAgIFxuICAgIGxldCBudWxsX3ZhciA9IG51bGxcbiAgICAgICAgY29uc3Qgd29ya291dF9leGVyY2lzZSA9IFtcbiAgICB7J25hbWUnOiAnU3F1YXRzJywgJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCAnZ3JvdXAnIDogJ0xlZ3MnfSxcbiAgICB7J25hbWUnOiAnU3RhaXIgQ2xpbWJzJywgJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCAnZ3JvdXAnIDogJ0xlZ3MnfSxcbiAgICB7J25hbWUnOiAnQmVuY2ggQ2xpbWJzJywgJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCAnZ3JvdXAnIDogJ0xlZ3MnfSxcbiAgICB7J25hbWUnOiAnTGVnIFByZXNzJywgJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCAnZ3JvdXAnIDogJ0xlZ3MnfSxcbiAgICBcbiAgICB7J25hbWUnOiAnUHVzaC1VcHMnLCdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwnZ3JvdXAnIDogJ1B1c2gtVXBzJ30sXG4gICAgeyduYW1lJzogJ0xhdGVyYWwgUHVzaC1VcHMnLCdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwgJ2dyb3VwJyA6ICdQdXNoLVVwcyd9LFxuICAgIHsnbmFtZSc6ICdKdW1waW5nIFB1c2gtVXBzJywnZmVhdHVyZXMnIDogWydTZXJpZXMnLCAnTnVtYmVyJ10sICdncm91cCcgOiAnUHVzaC1VcHMnfSxcbiAgICB7J25hbWUnOiAnQ2xvc2UgUHVzaC1VcHMnLCdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwgJ2dyb3VwJyA6ICdQdXNoLVVwcyd9LFxuICAgIHsnbmFtZSc6ICdSYWlzZWQgUHVzaC1VcHMnLCdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwgJ2dyb3VwJyA6ICdQdXNoLVVwcyd9LFxuXG4gICAgeyduYW1lJzogJ0FiZG9taW5hbCcsJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCAnZ3JvdXAnIDogJ0FiZG9taW5hbHMnfSxcbiAgICB7J25hbWUnOiAnQWJkb21pbmFsIExhdGVyYWwnLCdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwgJ2dyb3VwJyA6ICdBYmRvbWluYWxzJ30sXG4gICAgeyduYW1lJzogJ0NvcmUgQWJkb21pbmFsJywnZmVhdHVyZXMnIDogWydTZXJpZXMnLCAnTnVtYmVyJ10sICdncm91cCcgOiAnQWJkb21pbmFscyd9LFxuICAgIFxuICAgIFxuICAgIHsnbmFtZSc6ICdCZW5jaCcsICdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwgJ2dyb3VwJyA6ICdXZWlnaHQnfSxcbiAgICB7J25hbWUnOiAnQmljZXBzIFdlaWdodCcsICdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwnZ3JvdXAnIDogJ1dlaWdodCd9LFxuICAgIHsnbmFtZSc6ICdQdWxsLVVwcycsICdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwnZ3JvdXAnIDogJ1B1bGwtVXBzJ30sXG4gICAgXVxuICAgIFxuICAgIFxuXG5cbiAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgICAgIGNvbnN0IHBvc3QgPSB7J3Nwb3J0Jzogc3BvcnQsIFxuICAgICAgICdkYXRlJyA6IGRhdGUsIFxuXG4gICAgICAgJ1NxdWF0cycgOiB7J1Nlcmllcyc6c3F1YXRzX3NlcmllcywgJ051bWJlcicgOiBzcXVhdHNfbnVtYmVyfSxcbiAgICAgJ1N0YWlyIENsaW1icycgOiB7J1Nlcmllcyc6c3RhaXJfY2xpbWJzX3NlcmllcywgJ051bWJlcicgOiBzdGFpcl9jbGltYnNfbnVtYmVyfSxcbiAgICAgJ0JlbmNoIENsaW1icycgOiB7J1Nlcmllcyc6YmVuY2hfY2xpbWJzX3NlcmllcywgJ051bWJlcicgOiBiZW5jaF9jbGltYnNfbnVtYmVyfSxcbiAgICAgJ0xlZyBQcmVzcycgOiB7J1Nlcmllcyc6bGVnX3ByZXNzX3NlcmllcywgJ051bWJlcicgOiBsZWdfcHJlc3NfbnVtYmVyfSxcblxuICAgICAgICdQdXNoLVVwcycgOiB7J1Nlcmllcyc6cHVzaHVwc19zZXJpZXMsICdOdW1iZXInIDogcHVzaHVwc19udW1iZXJ9LFxuICAgICAnTGF0ZXJhbCBQdXNoLVVwcycgOiB7J1Nlcmllcyc6cHVzaHVwc19sYXRlcmFsX3NlcmllcywgJ051bWJlcicgOiBwdXNodXBzX2xhdGVyYWxfbnVtYmVyfSxcbiAgICAgJ0p1bXBpbmcgUHVzaC1VcHMnIDogeydTZXJpZXMnOnB1c2h1cHNfanVtcGluZ19zZXJpZXMsICdOdW1iZXInIDogcHVzaHVwc19qdW1waW5nX251bWJlcn0sXG4gICAgICdDbG9zZSBQdXNoLVVwcycgOiB7J1Nlcmllcyc6cHVzaHVwc19jbG9zaW5nX3NlcmllcywgJ051bWJlcicgOiBwdXNodXBzX2Nsb3NpbmdfbnVtYmVyfSxcbiAgICAgJ1JhaXNlZCBQdXNoLVVwcycgOiB7J1Nlcmllcyc6cHVzaHVwc19sYXRlcmFsX3NlcmllcywgJ051bWJlcicgOiBwdXNodXBzX2xhdGVyYWxfbnVtYmVyfSxcbiAgICAgICAnQWJkb21pbmFsJyA6IHsnU2VyaWVzJzphYmRvbWluYWxfc2VyaWVzLCAnTnVtYmVyJyA6IGFiZG9taW5hbF9udW1iZXJ9LFxuICAgICAnQWJkb21pbmFsIExhdGVyYWwnIDogeydTZXJpZXMnOmFiZG9taW5hbF9sYXRlcmFsX3NlcmllcywgJ051bWJlcicgOiBhYmRvbWluYWxfbGF0ZXJhbF9udW1iZXJ9LFxuICAgICAnQ29yZSBBYmRvbWluYWwnIDogeydTZXJpZXMnOmFiZG9taW5hbF9jb3JlX3NlcmllcywgJ051bWJlcicgOiBhYmRvbWluYWxfY29yZV9udW1iZXJ9LFxuXG4gICAgJ0JlbmNoJyA6IHsnU2VyaWVzJzpiZW5jaF9zZXJpZXMsICdOdW1iZXInIDogYmVuY2hfbnVtYmVyfSxcbiAgICAgJ0JpY2VwcyBXZWlnaHQnIDogeydTZXJpZXMnOmJpY2Vwc193ZWlnaHRfc2VyaWVzLCAnTnVtYmVyJyA6IGJpY2Vwc193ZWlnaHRfbnVtYmVyfSxcbiAgICAgJ1B1bGwtVXBzJyA6IHsnU2VyaWVzJzpwdWxsdXBzX3NlcmllcywgJ051bWJlcicgOiBwdWxsdXBzX251bWJlcn1cbiAgICAgICBcbiAgICAgICB9XG4gICAgICAgXG4gICAgICAgLy97c3BvcnQsIGRhdGUsIG1ldGVycywgbWludXRlcywgZWxldmF0aW9ufVxuXG5cbiAgICAgICAgYXdhaXQgZmV0Y2goYG5ld19zZXNzaW9ucy93b3Jrb3V0Lmpzb25gLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLCBcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwb3N0KSxcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkX3RvX21lXCIpLmlubmVySFRNTCArPSAgXG4gICAgICAgICAgICAgIFwiPGRpdiBjbGFzcz0nYmctdGVhbC0xMDAgYm9yZGVyLXQtNCBib3JkZXItdGVhbC01MDAgcm91bmRlZC1iIHRleHQtdGVhbC05MDAgcHgtNCBweS0zIHNoYWRvdy1tZCcgcm9sZT0nYWxlcnQnPjxkaXYgY2xhc3M9J2ZsZXgnPjxkaXYgY2xhc3M9J3B5LTEnPjxzdmcgY2xhc3M9J2ZpbGwtY3VycmVudCBoLTYgdy02IHRleHQtdGVhbC01MDAgbXItNCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjAgMjAnPjxwYXRoIGQ9J00yLjkzIDE3LjA3QTEwIDEwIDAgMSAxIDE3LjA3IDIuOTMgMTAgMTAgMCAwIDEgMi45MyAxNy4wN3ptMTIuNzMtMS40MUE4IDggMCAxIDAgNC4zNCA0LjM0YTggOCAwIDAgMCAxMS4zMiAxMS4zMnpNOSAxMVY5aDJ2Nkg5di00em0wLTZoMnYySDlWNXonLz48L3N2Zz48L2Rpdj48ZGl2PjxwIGNsYXNzPSdmb250LWJvbGQnPlNlc3Npb24gd2FzIHN1Y2Nlc3NmdWxseSBhZGRlZDwvcD48L2Rpdj48L2Rpdj48L2Rpdj48YnIvPlwiOyBcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKXtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0XCIsIHJlc3VsdClcbiAgICAgICAgfVxuICAgIH1cblxuICAgZnVuY3Rpb24gdmFsaWRhdGVNZXNzYWdlRW1haWwoZXZlbnQpIHtcbiAgICAgICBsZXQgdGV4dGJveCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICBlcnJvcl9ib29sZWFuID0gZmFsc2U7XG4gICAgICAgaWYgKHRleHRib3gudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICB0ZXh0Ym94LnNldEN1c3RvbVZhbGlkaXR5KCdOdW1iZXIgcmVxdWlyZWQnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0ZXh0Ym94LnZhbGlkaXR5LnR5cGVNaXNtYXRjaCl7XG4gICAgICAgICAgICBlcnJvcl9ib29sZWFuID0gdHJ1ZTtcbiAgICAgICAgICAgIHRleHRib3guc2V0Q3VzdG9tVmFsaWRpdHkoJ3BsZWFzZSBlbnRlciBhIHZhbGlkIGlucHV0Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgIHRleHRib3guc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuXG5cbjxkaXYgY2xhc3M9XCJmbGV4IFwiPlxuICA8ZGl2IGNsYXNzPVwiIHctMS8zIHAtNFwiPlxuXG4gICAgPCEtLSA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgcC0yIHRleHQtMnhsIGZvbnQtc2VtaWJvbGRcIj4gLS0+XG4gICAgPGltZyBjbGFzcz0ndy1mdWxsJyBzcmM9XCJ3b3Jrb3V0X2RyYXcucG5nXCIgYWx0PVwiY3ljbGluZ1wiICA+IFxuICAgICAgICA8IS0tIDwvZGl2PiAtLT5cblxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImZsZXgtaW5pdGlhbCB3LTIvMyBwLTJcIj5cbiAgPGRpdiBjbGFzcz1cImJsb2NrIHVwcGVyY2FzZSB0ZXh0LWNlbnRlciBwLTIgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCBtYi01XCI+XG4gICAgV29ya291dCBOZXcgU2Vzc2lvblxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCIgcC0yXCI+XG4gICAgICAgIDxmb3JtXG4gICAgICAgICAgICBvbjpzdWJtaXR8cHJldmVudERlZmF1bHQ9XCJ7aGFuZGxlU3VibWl0fVwiXG4gICAgICAgICAgICBvbjppbnZhbGlkPXt2YWxpZGF0ZU1lc3NhZ2VFbWFpbH1cbiAgICAgICAgICAgIG9uOmNoYW5nZWQ9e3ZhbGlkYXRlTWVzc2FnZUVtYWlsfVxuICAgICAgICAgICAgb246aW5wdXQ9e3ZhbGlkYXRlTWVzc2FnZUVtYWlsfVxuICAgICAgICA+ICAgXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXgnPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMyBtLTInPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkYXRlXCIgY2xhc3M9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyZXktZGFya2VyIHRleHQteHMgZm9udC1ib2xkIHAtMlwiPlxuICAgICAgICAgICAgICAgIERhdGVcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXggdy0yLzMgbS0yJz5cbiAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPXtkYXRlfSBwbGFjZWhvbGRlcj0nZGF0ZScgcmVxdWlyZWQgdHlwZT1cImRhdGVcIiBpZD1cImRhdGVcIiBjbGFzcz1cInRleHQtY2VudGVyIGFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgYm9yZGVyIGJvcmRlci1yZWQgcm91bmRlZCBwLTJcIi8+XG4gICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJyIC8+XG5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSAgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXhzIGZvbnQtYm9sZCBwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEV4YW1wbGUgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IHctMS8yIG0tMic+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZWFkb25seSBiaW5kOnZhbHVlPXtudWxsX3Zhcn0gcGxhY2Vob2xkZXI9J3NlcmllcycgdHlwZT1cIm51bWJlclwiY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcC0yXCIvPiAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVhZG9ubHkgYmluZDp2YWx1ZT17bnVsbF92YXJ9IHBsYWNlaG9sZGVyPSdyZXBldGl0aW9ucycgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmV5LWxpZ2h0ZXIgdGV4dC1ncmV5LWRhcmtlciBib3JkZXIgYm9yZGVyLXJlZCByb3VuZGVkIHAtMlwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCIgYmxvY2sgdXBwZXJjYXNlIHAtMiB0cmFja2luZy13aWRlIHRleHQtZ3JleS1kYXJrZXIgdGV4dC14bCBmb250LWJvbGQgbS0yXCI+XG4gICAgICAgICAgICAgICAgICAgIExlZ3M8L2xhYmVsPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IHctMS8yIG0tMic+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlICB0ZXh0LWdyZXktZGFya2VyIHRleHQteHMgZm9udC1ib2xkIHAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgU3F1YXRzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IHctMS8yIG0tMic+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPXtzcXVhdHNfc2VyaWVzfSBwbGFjZWhvbGRlcj0nc2VyaWVzJyB0eXBlPVwibnVtYmVyXCJjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgYm9yZGVyIGJvcmRlci1yZWQgcm91bmRlZCBwLTJcIi8+ICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IHctMS8yIG0tMic+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPXtzcXVhdHNfbnVtYmVyfSBwbGFjZWhvbGRlcj0ncmVwZXRpdGlvbnMnIHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgYm9yZGVyIGJvcmRlci1yZWQgcm91bmRlZCBwLTJcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJibG9jayB1cHBlcmNhc2UgcC0yIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXhzIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgU3RhaXIgQ2xpbWJzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IHctMS8yIG0tMic+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPXtzdGFpcl9jbGltYnNfc2VyaWVzfSBwbGFjZWhvbGRlcj0nc2VyaWVzJyB0eXBlPVwibnVtYmVyXCJjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgYm9yZGVyIGJvcmRlci1yZWQgcm91bmRlZCBwLTJcIi8+ICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IHctMS8yIG0tMic+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPXtzdGFpcl9jbGltYnNfbnVtYmVyfSBwbGFjZWhvbGRlcj0ncmVwZXRpdGlvbnMnIHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgYm9yZGVyIGJvcmRlci1yZWQgcm91bmRlZCBwLTJcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJibG9jayB1cHBlcmNhc2UgcC0yIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXhzIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQmVuY2ggQ2xpbWJzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IHctMS8yIG0tMic+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPXtiZW5jaF9jbGltYnNfc2VyaWVzfSBwbGFjZWhvbGRlcj0nc2VyaWVzJyB0eXBlPVwibnVtYmVyXCJjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgYm9yZGVyIGJvcmRlci1yZWQgcm91bmRlZCBwLTJcIi8+ICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IHctMS8yIG0tMic+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPXtiZW5jaF9jbGltYnNfbnVtYmVyfSBwbGFjZWhvbGRlcj0ncmVwZXRpdGlvbnMnIHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgYm9yZGVyIGJvcmRlci1yZWQgcm91bmRlZCBwLTJcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyZXktZGFya2VyIHRleHQteHMgZm9udC1ib2xkIHAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgTGVnIFByZXNzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IHctMS8yIG0tMic+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPXtsZWdfcHJlc3Nfc2VyaWVzfSBwbGFjZWhvbGRlcj0nc2VyaWVzJyB0eXBlPVwibnVtYmVyXCJjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgYm9yZGVyIGJvcmRlci1yZWQgcm91bmRlZCBwLTJcIi8+ICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IHctMS8yIG0tMic+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPXtsZWdfcHJlc3NfbnVtYmVyfSBwbGFjZWhvbGRlcj0ncmVwZXRpdGlvbnMnIHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgYm9yZGVyIGJvcmRlci1yZWQgcm91bmRlZCBwLTJcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJsb2NrIHVwcGVyY2FzZSBwLTIgdHJhY2tpbmctd2lkZSB0ZXh0LWdyZXktZGFya2VyIHRleHQteGwgZm9udC1ib2xkIG0tMlwiPlxuICAgICAgICAgICAgUHVzaC11cHNcbiAgICAgICAgICAgIDwvbGFiZWw+XG5cblxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IHctMS8yIG0tMic+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JleS1kYXJrZXIgdGV4dC14cyBmb250LWJvbGQgcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBSZWd1bGFyPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IHctMS8yIG0tMic+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPXtwdXNodXBzX3Nlcmllc30gcGxhY2Vob2xkZXI9J3NlcmllcycgdHlwZT1cIm51bWJlclwiY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcC0yXCIvPiAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17cHVzaHVwc19udW1iZXJ9IHBsYWNlaG9sZGVyPSdyZXBldGl0aW9ucycgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmV5LWxpZ2h0ZXIgdGV4dC1ncmV5LWRhcmtlciBib3JkZXIgYm9yZGVyLXJlZCByb3VuZGVkIHAtMlwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICBcblxuXG5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJibG9jayB1cHBlcmNhc2UgcC0yIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXhzIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgTGF0ZXJhbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17cHVzaHVwc19sYXRlcmFsX3Nlcmllc30gcGxhY2Vob2xkZXI9J3NlcmllcycgdHlwZT1cIm51bWJlclwiY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcC0yXCIvPiAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17cHVzaHVwc19sYXRlcmFsX251bWJlcn0gcGxhY2Vob2xkZXI9J3JlcGV0aXRpb25zJyB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcC0yXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IHctMS8yIG0tMic+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JleS1kYXJrZXIgdGV4dC14cyBmb250LWJvbGQgcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBKdW1waW5nPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IHctMS8yIG0tMic+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPXtwdXNodXBzX2p1bXBpbmdfc2VyaWVzfSBwbGFjZWhvbGRlcj0nc2VyaWVzJyB0eXBlPVwibnVtYmVyXCJjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgYm9yZGVyIGJvcmRlci1yZWQgcm91bmRlZCBwLTJcIi8+ICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IHctMS8yIG0tMic+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPXtwdXNodXBzX2p1bXBpbmdfbnVtYmVyfSBwbGFjZWhvbGRlcj0ncmVwZXRpdGlvbnMnIHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgYm9yZGVyIGJvcmRlci1yZWQgcm91bmRlZCBwLTJcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyZXktZGFya2VyIHRleHQteHMgZm9udC1ib2xkIHAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2luZzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17cHVzaHVwc19jbG9zaW5nX3Nlcmllc30gcGxhY2Vob2xkZXI9J3NlcmllcycgdHlwZT1cIm51bWJlclwiY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcC0yXCIvPiAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17cHVzaHVwc19jbG9zaW5nX251bWJlcn0gcGxhY2Vob2xkZXI9J3JlcGV0aXRpb25zJyB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcC0yXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXgnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXggdy0xLzIgbS0yJz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXhzIGZvbnQtYm9sZCBwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFJhaXNlZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17cHVzaHVwc19yYWlzZWRfc2VyaWVzfSBwbGFjZWhvbGRlcj0nc2VyaWVzJyB0eXBlPVwibnVtYmVyXCJjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgYm9yZGVyIGJvcmRlci1yZWQgcm91bmRlZCBwLTJcIi8+ICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IHctMS8yIG0tMic+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPXtwdXNodXBzX3JhaXNlZF9udW1iZXJ9IHBsYWNlaG9sZGVyPSdyZXBldGl0aW9ucycgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmV5LWxpZ2h0ZXIgdGV4dC1ncmV5LWRhcmtlciBib3JkZXIgYm9yZGVyLXJlZCByb3VuZGVkIHAtMlwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHAtMiB0cmFja2luZy13aWRlIHRleHQtZ3JleS1kYXJrZXIgdGV4dC14bCBmb250LWJvbGQgbS0yXCI+XG4gICAgICAgICAgICBBYmRvbWluYWxzXG4gICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IHctMS8yIG0tMic+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JleS1kYXJrZXIgdGV4dC14cyBmb250LWJvbGQgcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBSZWd1bGFyPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IHctMS8yIG0tMic+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPXthYmRvbWluYWxfc2VyaWVzfSBwbGFjZWhvbGRlcj0nc2VyaWVzJyB0eXBlPVwibnVtYmVyXCJjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgYm9yZGVyIGJvcmRlci1yZWQgcm91bmRlZCBwLTJcIi8+ICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IHctMS8yIG0tMic+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPXthYmRvbWluYWxfbnVtYmVyfSBwbGFjZWhvbGRlcj0ncmVwZXRpdGlvbnMnIHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgYm9yZGVyIGJvcmRlci1yZWQgcm91bmRlZCBwLTJcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJibG9jayB1cHBlcmNhc2UgcC0yIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXhzIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgTGF0ZXJhbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17YWJkb21pbmFsX2xhdGVyYWxfc2VyaWVzfSBwbGFjZWhvbGRlcj0nc2VyaWVzJyB0eXBlPVwibnVtYmVyXCJjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgYm9yZGVyIGJvcmRlci1yZWQgcm91bmRlZCBwLTJcIi8+ICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IHctMS8yIG0tMic+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPXthYmRvbWluYWxfbGF0ZXJhbF9udW1iZXJ9IHBsYWNlaG9sZGVyPSdyZXBldGl0aW9ucycgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmV5LWxpZ2h0ZXIgdGV4dC1ncmV5LWRhcmtlciBib3JkZXIgYm9yZGVyLXJlZCByb3VuZGVkIHAtMlwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IHctMS8yIG0tMic+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JleS1kYXJrZXIgdGV4dC14cyBmb250LWJvbGQgcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IHctMS8yIG0tMic+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPXthYmRvbWluYWxfY29yZV9zZXJpZXN9IHBsYWNlaG9sZGVyPSdzZXJpZXMnIHR5cGU9XCJudW1iZXJcImNsYXNzPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmV5LWxpZ2h0ZXIgdGV4dC1ncmV5LWRhcmtlciBib3JkZXIgYm9yZGVyLXJlZCByb3VuZGVkIHAtMlwiLz4gICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXggdy0xLzIgbS0yJz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGJpbmQ6dmFsdWU9e2FiZG9taW5hbF9jb3JlX251bWJlcn0gcGxhY2Vob2xkZXI9J3JlcGV0aXRpb25zJyB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcC0yXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJibG9jayB1cHBlcmNhc2UgcC0yIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXhsIGZvbnQtYm9sZCBtLTJcIj5cbiAgICAgICAgICAgIE90aGVyc1xuICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyZXktZGFya2VyIHRleHQteHMgZm9udC1ib2xkIHAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQmVuY2g8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXggdy0xLzIgbS0yJz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGJpbmQ6dmFsdWU9e2JlbmNoX3Nlcmllc30gcGxhY2Vob2xkZXI9J3NlcmllcycgdHlwZT1cIm51bWJlclwiY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcC0yXCIvPiAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17YmVuY2hfbnVtYmVyfSBwbGFjZWhvbGRlcj0ncmVwZXRpdGlvbnMnIHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgYm9yZGVyIGJvcmRlci1yZWQgcm91bmRlZCBwLTJcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJibG9jayB1cHBlcmNhc2UgcC0yIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXhzIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQmljZXBzIFdlaWdodDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17YmljZXBzX3dlaWdodF9zZXJpZXN9IHBsYWNlaG9sZGVyPSdzZXJpZXMnIHR5cGU9XCJudW1iZXJcImNsYXNzPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmV5LWxpZ2h0ZXIgdGV4dC1ncmV5LWRhcmtlciBib3JkZXIgYm9yZGVyLXJlZCByb3VuZGVkIHAtMlwiLz4gICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXggdy0xLzIgbS0yJz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGJpbmQ6dmFsdWU9e2JpY2Vwc193ZWlnaHRfbnVtYmVyfSBwbGFjZWhvbGRlcj0ncmVwZXRpdGlvbnMnIHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgYm9yZGVyIGJvcmRlci1yZWQgcm91bmRlZCBwLTJcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyZXktZGFya2VyIHRleHQteHMgZm9udC1ib2xkIHAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgUHVsbC11cHM8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXggdy0xLzIgbS0yJz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGJpbmQ6dmFsdWU9e3B1bGx1cHNfc2VyaWVzfSBwbGFjZWhvbGRlcj0nc2VyaWVzJyB0eXBlPVwibnVtYmVyXCJjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgYm9yZGVyIGJvcmRlci1yZWQgcm91bmRlZCBwLTJcIi8+ICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IHctMS8yIG0tMic+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPXtwdWxsdXBzX251bWJlcn0gcGxhY2Vob2xkZXI9J3JlcGV0aXRpb25zJyB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcC0yXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgIDxkaXYgY2xhc3M9J2ZsZXgganVzdGlmeS1lbmQgbXgtMiBteS04Jz5cbiAgICAgICAgPGRpdiBjbGFzcz0nZmxleCc+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYmctdHJhbnNwYXJlbnQgaG92ZXI6YmctYmx1ZS01MDAgdGV4dC1ibHVlLTcwMCBmb250LXNlbWlib2xkIGhvdmVyOnRleHQtd2hpdGUgcHktMiBweC00IGJvcmRlciBib3JkZXItYmx1ZS01MDAgaG92ZXI6Ym9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWRcIj5cbiAgICAgICAgQWRkIFNlc3Npb248L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICBcbiAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPGJyIC8+XG5cblxuXG4gICAgICAgIDxkaXYgaWQ9XCJhZGRfdG9fbWVcIj4gXG4gICAgICAgIDwvZGl2PiBcbiAgICA8L2Rpdj4gXG4gIDwvZGl2PlxuPC9kaXY+XG5cbiIsIjwhLS0gPHNjcmlwdD5cbiAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gXCJzdmVsdGVcIjtcbiAgaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qc1wiO1xuICBvbk1vdW50KGFzeW5jICgpID0+IHt9KTtcbiAgZnVuY3Rpb24gcmVuZGVyQ2hhcnQoKSB7XG4gICAgdmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDaGFydFwiKS5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdmFyIGNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuICAgICAgdHlwZTogXCJsaW5lXCIsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhYmVsczogW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCJdLFxuICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcIk15IEZpcnN0IGRhdGFzZXRcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMjU1LCA5OSwgMTMyKVwiLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiKDI1NSwgOTksIDEzMilcIixcbiAgICAgICAgICAgIGRhdGE6IFswLCAxMCwgNSwgMiwgMjAsIDMwLCA0NV1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBvcHRpb25zOiB7fVxuICAgIH0pO1xuICB9XG48L3NjcmlwdD5cblxuPGJ1dHRvbiBvbjpjbGljaz17cmVuZGVyQ2hhcnR9PkxvYWQ8L2J1dHRvbj4gXG48Y2FudmFzIGlkPVwibXlDaGFydFwiPjwvY2FudmFzPiBcblxuLS0+XG48Y2FudmFzIGlkPVwibXlDaGFydFwiIHdpZHRoPVwiMlwiIGhlaWdodD1cIjFcIj48L2NhbnZhcz5cblxuPHNjcmlwdD5cbmltcG9ydCB7IG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlXCI7XG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzXCI7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2hhcnQoKXtcbiAgdmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUNoYXJ0Jyk7XG4gICAgdmFyIG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICAgIHR5cGU6ICdiYXInLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBsYWJlbHM6IFsnUmVkJywgJ0JsdWUnLCAnWWVsbG93JywgJ0dyZWVuJywgJ1B1cnBsZScsICdPcmFuZ2UnXSxcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnIyBvZiBWb3RlcycsXG4gICAgICAgICAgICAgICAgZGF0YTogWzEyLCAxOSwgMywgNSwgMiwgM10sXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwgOTksIDEzMiwgMC4yKScsXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDU0LCAxNjIsIDIzNSwgMC4yKScsXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwgMjA2LCA4NiwgMC4yKScsXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDc1LCAxOTIsIDE5MiwgMC4yKScsXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDE1MywgMTAyLCAyNTUsIDAuMiknLFxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsIDE1OSwgNjQsIDAuMiknXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogW1xuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsIDk5LCAxMzIsIDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoNTQsIDE2MiwgMjM1LCAxKScsXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwgMjA2LCA4NiwgMSknLFxuICAgICAgICAgICAgICAgICAgICAncmdiYSg3NSwgMTkyLCAxOTIsIDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTUzLCAxMDIsIDI1NSwgMSknLFxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsIDE1OSwgNjQsIDEpJ1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDFcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIHNjYWxlczoge1xuICAgICAgICAgICAgICAgIHlBeGVzOiBbe1xuICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgfVxub25Nb3VudChjcmVhdGVDaGFydClcbjwvc2NyaXB0PlxuIiwiPGNhbnZhcyBpZD1cIm15Q2hhcnRcIiB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIxXCI+PC9jYW52YXM+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBvbk1vdW50IH0gZnJvbSBcInN2ZWx0ZVwiO1xuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qc1wiO1xuZXhwb3J0IGxldCBkYXRhOyBcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDaGFydCgpe1xuICB2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Q2hhcnQnKTtcbiAgICB2YXIgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcbiAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICAgICAgICB5QXhlczogXG4gICAgICAgICAgICAgICAgW3tcbiAgICAgICAgaWQ6ICdNZXRlcnMgY292ZXJlZCcsXG4gICAgICAgIHBvc2l0aW9uOiAnbGVmdCcsXG4gICAgICB9LCB7XG4gICAgICAgIGlkOiAnU3ByaW50JyxcbiAgICAgICAgcG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICAgICAgICAgICB9LFxuICAgICAgfV1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gIH1cbm9uTW91bnQoY3JlYXRlQ2hhcnQpXG48L3NjcmlwdD5cbiIsIlxuPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG5cdGV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zLCBxdWVyeSB9KSB7XG5cdFx0cmV0dXJuIHRoaXMuZmV0Y2goYHNwb3J0cy9zd2ltbWluZy5qc29uYCkudGhlbihyID0+IHIuanNvbigpKS50aGVuKGRhdGFfcmF3ID0+IHtcblx0XHRcdHJldHVybiB7IGRhdGFfcmF3IH07XG5cdFx0fSk7XG5cdH1cdFxuICAgIFxuXG48L3NjcmlwdD5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgQ2hhcnRzIGZyb20gJy4vc3dpbW1pbmctY2hhcnRzLnN2ZWx0ZSdcbiAgICBleHBvcnQgbGV0IGRhdGFfcmF3XG4gICAgLy8gU29ydCBsaXN0IG9mIEpzb24gYnkgZGF0ZXMgKGNsb3Nlc3QgZGF0ZXMgdG8gbGFzdCBwb3NpdGlvbnMpXG4gICAgZnVuY3Rpb24gY3VzdG9tX3NvcnQoYSwgYikge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoYS5kYXRlKS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShiLmRhdGUpLmdldFRpbWUoKTtcbiAgICB9XG4gICAgZGF0YV9yYXcgPSBkYXRhX3Jhdy5zb3J0KGN1c3RvbV9zb3J0KVxuXG4vLyBDb21wdXRlIGRhdGEgZm9yIGNoYXJ0c1xuXG4gICAgbGV0IGxpc3RfbWV0ZXJzID0gW107XG4gICAgbGV0IGxpc3RfZGF0ZSA9IFtdO1xuICAgIGxldCBsaXN0X3NwcmludCA9IFtdO1xuICAgIGxldCBsaXN0X21pbnV0ZXMgPSBbXTtcblxuICAgIGRhdGFfcmF3LmZvckVhY2goeCA9PiB7XG4gICAgICAgIGxpc3RfbWV0ZXJzLnB1c2goeC5tZXRlcnMpXG4gICAgICAgIGxpc3RfZGF0ZS5wdXNoKHguZGF0ZSlcbiAgICAgICAgbGlzdF9zcHJpbnQucHVzaCh4Lm5iX3NwcmludClcbiAgICAgICAgbGlzdF9taW51dGVzLnB1c2goeC5taW51dGVzKVxuICAgIH0pXG5cbiAgICBleHBvcnQgY29uc3QgZGF0YSA9IHtcbiAgICBsYWJlbHM6IGxpc3RfZGF0ZSxcbiAgICBkYXRhc2V0czogW3tcbiAgICAgICAgbGFiZWw6ICdNZXRlcnMgY292ZXJlZCcsXG4gICAgICAgIHlBeGlzSUQgOiAnTWV0ZXJzIGNvdmVyZWQnLFxuICAgICAgICBkYXRhOmxpc3RfbWV0ZXJzLFxuICAgICAgICBib3JkZXJDb2xvcjogXCIjM2U5NWNkXCIsXG4gICAgICAgIGZpbGw6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnU3ByaW50JyxcbiAgICAgICAgZGF0YTpsaXN0X3NwcmludCxcbiAgICAgICAgeUF4aXNJRCA6ICdTcHJpbnQnLFxuICAgICAgICBib3JkZXJDb2xvcjogXCIjOGU1ZWEyXCIsXG4gICAgICAgIGZpbGw6IGZhbHNlXG4gICAgfV1cbn1cblxuLy8gVE9ETzogdmVyaWZpeSBvcmRlcmluZyBvZiBkYXRlcyBhbmQgc2Vzc2lvbnNcblxuY29uc3QgYXZlcmFnZSA9IGFyciA9PiBhcnIucmVkdWNlKCAoIHAsIGMgKSA9PiBwICsgYywgMCApIC8gYXJyLmxlbmd0aDtcblxuXG4vLyBUT0RPOiByaWdodCBub3cgaW5jbHVkaW5nIGxhc3Qgc2Vzc2lvbiwgcHJvYmFibHkgc2hvdWxkIG5vdFxuXG4vLyBUT0RPOiBjb2xvcnMgZ3JlZW4gb3IgcmVkIGZvciB2YXJpYXRpb25zXG5mdW5jdGlvbiBnZXRfbGFzdF9uYl9zZXNzaW9ucyhpbnQsIGxpc3Qpe1xuICAgIHJldHVybiBsaXN0LnNsaWNlKE1hdGgubWF4KGxpc3QubGVuZ3RoIC0gaW50LCAwKSlcbn1cblxuZnVuY3Rpb24gZGl2aWRldmVjdG9yKGEsYil7XG4gICAgcmV0dXJuIGEubWFwKChlLGkpID0+IGUgLyBiW2ldKTtcbn1cblxuZnVuY3Rpb24gdmFyaWF0aW9uKHhfbmV3LCB4X29sZCl7XG4gICAgY29uc3QgdmFyaWF0aW9uID0gTWF0aC5yb3VuZCgoeF9uZXcteF9vbGQpL3hfb2xkKjEwMClcbiAgICByZXR1cm4gdmFyaWF0aW9uXG59XG5cbmZ1bmN0aW9uIHJvdW5kXzFfZGVjaW1hbChmbG9hdCl7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoZmxvYXQgKiAxMCkgLzEwXG59XG5cbmZ1bmN0aW9uIHJvdW5kXzJfZGVjaW1hbChmbG9hdCl7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoZmxvYXQgKiAxMDApIC8gMTAwXG59XG5cbi8vIENvbXB1dGUgYXZlcmFnZSBkaXN0YW5jZSwgc3BlZWQsIHNwcmludCwgXG4vLyBMYXN0IHNlc3Npb25cbmNvbnN0IGxhc3RfZGlzdGFuY2UgPSBsaXN0X21ldGVyc1tsaXN0X21ldGVycy5sZW5ndGgtMV1cbmNvbnN0IGxhc3RfaG91cnMgPSBsaXN0X21pbnV0ZXNbbGlzdF9taW51dGVzLmxlbmd0aC0xXS82MFxuY29uc3QgbGFzdF9zcGVlZCA9IGxhc3RfZGlzdGFuY2UvMTAwMC9sYXN0X2hvdXJzXG5jb25zdCBsYXN0X3NwcmludCA9IGxpc3Rfc3ByaW50W2xpc3Rfc3ByaW50Lmxlbmd0aC0xXVxuXG5cbi8vIExhc3QgMyBzZXNzaW9uc1xuLy9jb25zdCBkaXN0YW5jZV8zX3Nlc3Npb24gPSBsaXN0X21ldGVycy5zbGljZShNYXRoLm1heChsaXN0X21ldGVycy5sZW5ndGggLSAzLCAwKSlcblxuY29uc3QgZGlzdGFuY2VfM19zZXNzaW9uID0gZ2V0X2xhc3RfbmJfc2Vzc2lvbnMoMywgbGlzdF9tZXRlcnMpXG5jb25zdCBtaW51dGVzXzNfc2Vzc2lvbiA9IGdldF9sYXN0X25iX3Nlc3Npb25zKDMsIGxpc3RfbWludXRlcylcbmNvbnN0IHNwcmludF8zX3Nlc3Npb24gPSBnZXRfbGFzdF9uYl9zZXNzaW9ucygzLCBsaXN0X3NwcmludClcbmNvbnN0IGRhdGVfM19zZXNzaW9uID0gZ2V0X2xhc3RfbmJfc2Vzc2lvbnMoMywgbGlzdF9kYXRlKVxuXG5cblxuY29uc3QgYXZlcmFnZV8zX2Rpc3RhbmNlID0gYXZlcmFnZShkaXN0YW5jZV8zX3Nlc3Npb24pXG5jb25zdCBhdmVyYWdlXzNfc3ByaW50ID0gYXZlcmFnZShzcHJpbnRfM19zZXNzaW9uKVxuY29uc3QgYXZlcmFnZV8zX3NwZWVkID0gYXZlcmFnZShkaXZpZGV2ZWN0b3IoZGlzdGFuY2VfM19zZXNzaW9uICwgbWludXRlc18zX3Nlc3Npb24pKSAqIDYwLzEwMDAgIFxuXG5jb25zdCB2YXJpYXRpb25fM19kaXN0YW5jZSA9IHZhcmlhdGlvbihsYXN0X2Rpc3RhbmNlLCBhdmVyYWdlXzNfZGlzdGFuY2UpXG5jb25zdCB2YXJpYXRpb25fM19zcGVlZCA9IHZhcmlhdGlvbihsYXN0X3NwZWVkLCBhdmVyYWdlXzNfc3BlZWQpXG5jb25zdCB2YXJpYXRpb25fM19zcHJpbnQgPSB2YXJpYXRpb24obGFzdF9zcHJpbnQsIGF2ZXJhZ2VfM19zcHJpbnQpXG5cbi8vIExhc3QgMTAgc2Vzc2lvbnNcbmNvbnN0IGRpc3RhbmNlXzEwX3Nlc3Npb24gPSBnZXRfbGFzdF9uYl9zZXNzaW9ucygxMCwgbGlzdF9tZXRlcnMpXG5jb25zdCBtaW51dGVzXzEwX3Nlc3Npb24gPSBnZXRfbGFzdF9uYl9zZXNzaW9ucygxMCwgbGlzdF9taW51dGVzKVxuY29uc3Qgc3ByaW50XzEwX3Nlc3Npb24gPSBnZXRfbGFzdF9uYl9zZXNzaW9ucygxMCwgbGlzdF9zcHJpbnQpXG5cbmNvbnN0IGF2ZXJhZ2VfMTBfZGlzdGFuY2UgPSBhdmVyYWdlKGRpc3RhbmNlXzEwX3Nlc3Npb24pXG5jb25zdCBhdmVyYWdlXzEwX3NwcmludCA9IGF2ZXJhZ2Uoc3ByaW50XzEwX3Nlc3Npb24pXG5jb25zdCBhdmVyYWdlXzEwX3NwZWVkID0gYXZlcmFnZShkaXZpZGV2ZWN0b3IoZGlzdGFuY2VfMTBfc2Vzc2lvbiAsIG1pbnV0ZXNfMTBfc2Vzc2lvbikpICogNjAvMTAwMFxuXG5jb25zdCB2YXJpYXRpb25fMTBfZGlzdGFuY2UgPSB2YXJpYXRpb24obGFzdF9kaXN0YW5jZSwgYXZlcmFnZV8xMF9kaXN0YW5jZSlcbmNvbnN0IHZhcmlhdGlvbl8xMF9zcGVlZCA9IHZhcmlhdGlvbihsYXN0X3NwZWVkLCBhdmVyYWdlXzEwX3NwZWVkKVxuY29uc3QgdmFyaWF0aW9uXzEwX3NwcmludCA9IHZhcmlhdGlvbihsYXN0X3NwcmludCwgYXZlcmFnZV8xMF9zcHJpbnQpXG5cbmNvbnN0IG5iX2Rpc3BsYXllZCA9IDNcblxuXG5cbjwvc2NyaXB0PlxuXG5cbjxzdHlsZT5cblxuPC9zdHlsZT5cblxuPGRpdiBjbGFzcz1cIm1iLTIwXCI+XG4gICAgPGRpdiBjbGFzcz1cIm1iLTYgc2hhZG93IFwiPlxuICAgICAgICA8aW1nIHNyYz1cInN3aW1taW5nMi5qcGdcIiBhbHQ9XCJjeWNsaW5nXCIgY2xhc3M9XCJvYmplY3QtY292ZXIgaC00OCB3LWZ1bGwgc2hhZG93IHJvdW5kZWQtbWRcIj5cbiAgICA8L2Rpdj5cblxuXG4gICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgbWItMTYgYmctYmx1ZS03MDAgYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIHNoYWRvdy1sZyByb3VuZGVkLXQtbWRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvbnQtc2FucyBBcmlhbCB0ZXh0LWNlbnRlciBwLTIgdGV4dC0zeGwgdGV4dC1ibHVlLTcwMCBmb250LXNlbWlib2xkIGJnLWJsdWUtMTAwIHB4LTggdHJhY2tpbmctd2lkZXN0XCI+XG4gICAgICAgICAgICBTd2ltbWluZyBQZXJmb3JtYW5jZVxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuPGRpdiBjbGFzcz0ncC04Jz5cbiAgICA8ZGl2IGNsYXNzPSdwYi04Jz5cbiAgICAgICAgPGgxIGNsYXNzPVwidGV4dC1ibHVlLTgwMCAgbWItOCBcIj5MYXN0IFNlc3Npb25zPC9oMT5cbiAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGFsaWMgZ3JpZCBncmlkLWNvbHMtMyBkaXZpZGUteCBkaXZpZGUtZ3JheS00MDBcIj5cbiAgICAgICAgICAgIHsjZWFjaCBnZXRfbGFzdF9uYl9zZXNzaW9ucygzLCBsaXN0X2RhdGUpIGFzIGRhdGV9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj57ZGF0ZX08L2Rpdj5cbiAgICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZGl2aWRlLXkgbXQtMTZcIj5cbiAgICAgICAgPGgxIGNsYXNzPVwidGV4dC1ibHVlLTgwMFwiPlBlcmZvcm1hbmNlIFRhYmxlczwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3M9J20tMTIgY29udGFpbmVyIG14LWF1dG8nPlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUtYXV0byB0ZXh0LWNlbnRlciBjb250YWluZXIgbXgtYXV0b1wiPlxuICAgICAgICAgICAgPGNhcHRpb24gY2xhc3M9XCJmb250LXNlbWlib2xkIG1iLTYgbXQtOCB0ZXh0LXhsIGl0YWxpYyB0ZXh0LWJsdWUtNzAwXCI+UGVyZm9ybWFuY2UgZXZvbHV0aW9uIG9mIG1haW4gbWV0cmljczwvY2FwdGlvbj5cbiAgICAgICAgICAgIDx0aGVhZCBjbGFzcz1cImJvcmRlci1ncmF5LTMwMCBpdGFsaWNcIj5cbiAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJiZy1ibHVlLTEwMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yXCI+TWV0cmljczwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yXCI+VmFsdWU8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjb2xzcGFuPTIgY2xhc3M9XCJweC00IHB5LTIgXCI+dnMuIExhc3QgMyBzZXNzaW9uczwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNvbHNwYW49MiBjbGFzcz1cInB4LTQgcHktMlwiPnZzLiBMYXN0IDEwIHNlc3Npb25zPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPkRpc3RhbmNlIChtKTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntsYXN0X2Rpc3RhbmNlfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntNYXRoLnJvdW5kKGF2ZXJhZ2VfM19kaXN0YW5jZSl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3ZhcmlhdGlvbl8zX2Rpc3RhbmNlfSU8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57cm91bmRfMl9kZWNpbWFsKGF2ZXJhZ2VfMTBfZGlzdGFuY2UpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPnt2YXJpYXRpb25fMTBfZGlzdGFuY2V9JTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJiZy1ncmF5LTEwMFwiPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj5TcGVlZCAoa20vaCk8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57cm91bmRfMl9kZWNpbWFsKGxhc3Rfc3BlZWQpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntyb3VuZF8yX2RlY2ltYWwoYXZlcmFnZV8zX3NwZWVkKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57dmFyaWF0aW9uXzNfc3BlZWR9JTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntyb3VuZF8yX2RlY2ltYWwoYXZlcmFnZV8xMF9zcGVlZCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3ZhcmlhdGlvbl8xMF9zcGVlZH0lPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+U3ByaW50czwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntsYXN0X3NwcmludH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57cm91bmRfMl9kZWNpbWFsKGF2ZXJhZ2VfM19zcHJpbnQpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPnt2YXJpYXRpb25fM19zcHJpbnR9JTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntyb3VuZF8yX2RlY2ltYWwoYXZlcmFnZV8xMF9zcHJpbnQpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPnt2YXJpYXRpb25fMTBfc3ByaW50fSU8L3RkPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgICA8ZGl2IGNsYXNzPSdtLTEyIGNvbnRhaW5lciBteC1hdXRvJz5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlLWF1dG8gdGV4dC1jZW50ZXIgY29udGFpbmVyIG14LWF1dG9cIj5cbiAgICAgICAgICAgIDxjYXB0aW9uIGNsYXNzPVwiZm9udC1zZW1pYm9sZCBtYi02IG10LTggdGV4dC14bCBpdGFsaWMgdGV4dC1ibHVlLTcwMFwiPlBlcmZvcm1hbmNlIG9mIGxhc3Qgc2Vzc2lvbnM8L2NhcHRpb24+ICAgICAgICAgICBcbiAgICAgICAgICAgIDx0aGVhZCBjbGFzcz1cIml0YWxpYyBib3JkZXItZ3JheS0zMDBcIj5cbiAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJiZy1ibHVlLTEwMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yXCI+RGF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yXCI+RGlzdGFuY2UgKG0pPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJweC00IHB5LTJcIj5UaW1lIChtaW4pPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJweC00IHB5LTJcIj5TcGVlZCAoa20vaCk8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTQgcHktMlwiPlNwcmludHM8L3RoPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuXG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB7I2VhY2ggZGlzdGFuY2VfM19zZXNzaW9uIGFzIGRpc3RhbmNlLCBpfVxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e2RhdGVfM19zZXNzaW9uW2ldfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntkaXN0YW5jZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57bWludXRlc18zX3Nlc3Npb25baV19PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3JvdW5kXzJfZGVjaW1hbCgoZGlzdGFuY2UvMTAwMCkgLyAobWludXRlc18zX3Nlc3Npb25baV0vNjApKSB9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3NwcmludF8zX3Nlc3Npb25baV19PC90ZD5cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgey9lYWNofVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibXQtOFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzPVwidGV4dC1ibHVlLTgwMCBtYi04IG10LTE2XCI+UGVyZm9ybWFuY2UgQ2hhcnQ8L2gxPlxuICAgICAgICAgICAgPENoYXJ0cyB7ZGF0YX0gLz4gXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PjwvZGl2PlxuPC9kaXY+XG5cbiIsIjxjYW52YXMgaWQ9XCJteUNoYXJ0XCIgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiMVwiPjwvY2FudmFzPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gXCJzdmVsdGVcIjtcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanNcIjtcbmV4cG9ydCBsZXQgZGF0YTsgXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2hhcnQoKXtcbiAgdmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUNoYXJ0Jyk7XG4gICAgdmFyIG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgICAgICAgeUF4ZXM6IFxuICAgICAgICAgICAgICAgIFt7XG4gICAgICAgIGlkOiAnTWV0ZXJzIGNvdmVyZWQnLFxuICAgICAgICBwb3NpdGlvbjogJ2xlZnQnLFxuICAgICAgfSwge1xuICAgICAgICBpZDogJ2VsZXZhdGlvbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgICAgICAgICAgfSxcbiAgICAgIH1dXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICB9XG5vbk1vdW50KGNyZWF0ZUNoYXJ0KVxuPC9zY3JpcHQ+XG4iLCJcblxuPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG5cdGV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zLCBxdWVyeSB9KSB7XG5cdFx0cmV0dXJuIHRoaXMuZmV0Y2goYHNwb3J0cy9jeWNsaW5nLmpzb25gKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4oZGF0YV9yYXcgPT4ge1xuXHRcdFx0cmV0dXJuIHsgZGF0YV9yYXcgfTtcblx0XHR9KTtcblx0fVx0XG4gICAgXG5cbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBDaGFydHMgZnJvbSAnLi9jeWNsaW5nLWNoYXJ0cy5zdmVsdGUnXG4gICAgZXhwb3J0IGxldCBkYXRhX3Jhd1xuICAgIFxuICAgIC8vIFNvcnQgbGlzdCBvZiBKc29uIGJ5IGRhdGVzIChjbG9zZXN0IGRhdGVzIHRvIGxhc3QgcG9zaXRpb25zKVxuICAgIGZ1bmN0aW9uIGN1c3RvbV9zb3J0KGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGEuZGF0ZSkuZ2V0VGltZSgpIC0gbmV3IERhdGUoYi5kYXRlKS5nZXRUaW1lKCk7XG4gICAgfVxuICAgIGRhdGFfcmF3ID0gZGF0YV9yYXcuc29ydChjdXN0b21fc29ydClcblxuLy8gQ29tcHV0ZSBkYXRhIGZvciBjaGFydHNcblxuICAgIGxldCBsaXN0X21ldGVycyA9IFtdO1xuICAgIGxldCBsaXN0X2RhdGUgPSBbXTtcbiAgICBsZXQgbGlzdF9lbGV2YXRpb24gPSBbXTtcbiAgICBsZXQgbGlzdF9taW51dGVzID0gW107XG5cbiAgICBkYXRhX3Jhdy5mb3JFYWNoKHggPT4ge1xuICAgICAgICBsaXN0X21ldGVycy5wdXNoKHgubWV0ZXJzKVxuICAgICAgICBsaXN0X2RhdGUucHVzaCh4LmRhdGUpXG4gICAgICAgIGxpc3RfZWxldmF0aW9uLnB1c2goeC5lbGV2YXRpb24pXG4gICAgICAgIGxpc3RfbWludXRlcy5wdXNoKHgubWludXRlcylcbiAgICB9KVxuXG4gICAgZXhwb3J0IGNvbnN0IGRhdGEgPSB7XG4gICAgbGFiZWxzOiBsaXN0X2RhdGUsXG4gICAgZGF0YXNldHM6IFt7XG4gICAgICAgIGxhYmVsOiAnTWV0ZXJzIGNvdmVyZWQnLFxuICAgICAgICB5QXhpc0lEIDogJ01ldGVycyBjb3ZlcmVkJyxcbiAgICAgICAgZGF0YTpsaXN0X21ldGVycyxcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzNlOTVjZFwiLFxuICAgICAgICBmaWxsOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ2VsZXZhdGlvbicsXG4gICAgICAgIGRhdGE6bGlzdF9lbGV2YXRpb24sXG4gICAgICAgIHlBeGlzSUQgOiAnZWxldmF0aW9uJyxcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzhlNWVhMlwiLFxuICAgICAgICBmaWxsOiBmYWxzZVxuICAgIH1dXG59XG5cbi8vIFRPRE86IHZlcmlmaXkgb3JkZXJpbmcgb2YgZGF0ZXMgYW5kIHNlc3Npb25zXG5cbmNvbnN0IGF2ZXJhZ2UgPSBhcnIgPT4gYXJyLnJlZHVjZSggKCBwLCBjICkgPT4gcCArIGMsIDAgKSAvIGFyci5sZW5ndGg7XG5cblxuLy8gVE9ETzogcmlnaHQgbm93IGluY2x1ZGluZyBsYXN0IHNlc3Npb24sIHByb2JhYmx5IHNob3VsZCBub3RcblxuLy8gVE9ETzogY29sb3JzIGdyZWVuIG9yIHJlZCBmb3IgdmFyaWF0aW9uc1xuZnVuY3Rpb24gZ2V0X2xhc3RfbmJfc2Vzc2lvbnMoaW50LCBsaXN0KXtcbiAgICByZXR1cm4gbGlzdC5zbGljZShNYXRoLm1heChsaXN0Lmxlbmd0aCAtIGludCwgMCkpXG59XG5cbmZ1bmN0aW9uIGRpdmlkZXZlY3RvcihhLGIpe1xuICAgIHJldHVybiBhLm1hcCgoZSxpKSA9PiBlIC8gYltpXSk7XG59XG5cbmZ1bmN0aW9uIHZhcmlhdGlvbih4X25ldywgeF9vbGQpe1xuICAgIGNvbnN0IHZhcmlhdGlvbiA9IE1hdGgucm91bmQoKHhfbmV3LXhfb2xkKS94X29sZCoxMDApXG4gICAgcmV0dXJuIHZhcmlhdGlvblxufVxuXG5mdW5jdGlvbiByb3VuZF8xX2RlY2ltYWwoZmxvYXQpe1xuICAgIHJldHVybiBNYXRoLnJvdW5kKGZsb2F0ICogMTApIC8xMFxufVxuXG5mdW5jdGlvbiByb3VuZF8yX2RlY2ltYWwoZmxvYXQpe1xuICAgIHJldHVybiBNYXRoLnJvdW5kKGZsb2F0ICogMTAwKSAvIDEwMFxufVxuXG4vLyBDb21wdXRlIGF2ZXJhZ2UgZGlzdGFuY2UsIHNwZWVkLCBlbGV2YXRpb24sIFxuLy8gTGFzdCBzZXNzaW9uXG5jb25zdCBsYXN0X2Rpc3RhbmNlID0gbGlzdF9tZXRlcnNbbGlzdF9tZXRlcnMubGVuZ3RoLTFdXG5jb25zdCBsYXN0X2hvdXJzID0gbGlzdF9taW51dGVzW2xpc3RfbWludXRlcy5sZW5ndGgtMV0vNjBcbmNvbnN0IGxhc3Rfc3BlZWQgPSBsYXN0X2Rpc3RhbmNlLzEwMDAvbGFzdF9ob3Vyc1xuY29uc3QgbGFzdF9lbGV2YXRpb24gPSBsaXN0X2VsZXZhdGlvbltsaXN0X2VsZXZhdGlvbi5sZW5ndGgtMV1cblxuXG4vLyBMYXN0IDMgc2Vzc2lvbnNcbi8vY29uc3QgZGlzdGFuY2VfM19zZXNzaW9uID0gbGlzdF9tZXRlcnMuc2xpY2UoTWF0aC5tYXgobGlzdF9tZXRlcnMubGVuZ3RoIC0gMywgMCkpXG5cbmNvbnN0IGRpc3RhbmNlXzNfc2Vzc2lvbiA9IGdldF9sYXN0X25iX3Nlc3Npb25zKDMsIGxpc3RfbWV0ZXJzKVxuY29uc3QgbWludXRlc18zX3Nlc3Npb24gPSBnZXRfbGFzdF9uYl9zZXNzaW9ucygzLCBsaXN0X21pbnV0ZXMpXG5jb25zdCBlbGV2YXRpb25fM19zZXNzaW9uID0gZ2V0X2xhc3RfbmJfc2Vzc2lvbnMoMywgbGlzdF9lbGV2YXRpb24pXG5jb25zdCBkYXRlXzNfc2Vzc2lvbiA9IGdldF9sYXN0X25iX3Nlc3Npb25zKDMsIGxpc3RfZGF0ZSlcblxuXG5cbmNvbnN0IGF2ZXJhZ2VfM19kaXN0YW5jZSA9IGF2ZXJhZ2UoZGlzdGFuY2VfM19zZXNzaW9uKVxuY29uc3QgYXZlcmFnZV8zX2VsZXZhdGlvbiA9IGF2ZXJhZ2UoZWxldmF0aW9uXzNfc2Vzc2lvbilcbmNvbnN0IGF2ZXJhZ2VfM19zcGVlZCA9IGF2ZXJhZ2UoZGl2aWRldmVjdG9yKGRpc3RhbmNlXzNfc2Vzc2lvbiAsIG1pbnV0ZXNfM19zZXNzaW9uKSkgKiA2MC8xMDAwICBcblxuY29uc3QgdmFyaWF0aW9uXzNfZGlzdGFuY2UgPSB2YXJpYXRpb24obGFzdF9kaXN0YW5jZSwgYXZlcmFnZV8zX2Rpc3RhbmNlKVxuY29uc3QgdmFyaWF0aW9uXzNfc3BlZWQgPSB2YXJpYXRpb24obGFzdF9zcGVlZCwgYXZlcmFnZV8zX3NwZWVkKVxuY29uc3QgdmFyaWF0aW9uXzNfZWxldmF0aW9uID0gdmFyaWF0aW9uKGxhc3RfZWxldmF0aW9uLCBhdmVyYWdlXzNfZWxldmF0aW9uKVxuXG4vLyBMYXN0IDEwIHNlc3Npb25zXG5jb25zdCBkaXN0YW5jZV8xMF9zZXNzaW9uID0gZ2V0X2xhc3RfbmJfc2Vzc2lvbnMoMTAsIGxpc3RfbWV0ZXJzKVxuY29uc3QgbWludXRlc18xMF9zZXNzaW9uID0gZ2V0X2xhc3RfbmJfc2Vzc2lvbnMoMTAsIGxpc3RfbWludXRlcylcbmNvbnN0IGVsZXZhdGlvbl8xMF9zZXNzaW9uID0gZ2V0X2xhc3RfbmJfc2Vzc2lvbnMoMTAsIGxpc3RfZWxldmF0aW9uKVxuXG5jb25zdCBhdmVyYWdlXzEwX2Rpc3RhbmNlID0gYXZlcmFnZShkaXN0YW5jZV8xMF9zZXNzaW9uKVxuY29uc3QgYXZlcmFnZV8xMF9lbGV2YXRpb24gPSBhdmVyYWdlKGVsZXZhdGlvbl8xMF9zZXNzaW9uKVxuY29uc3QgYXZlcmFnZV8xMF9zcGVlZCA9IGF2ZXJhZ2UoZGl2aWRldmVjdG9yKGRpc3RhbmNlXzEwX3Nlc3Npb24gLCBtaW51dGVzXzEwX3Nlc3Npb24pKSAqIDYwLzEwMDBcblxuY29uc3QgdmFyaWF0aW9uXzEwX2Rpc3RhbmNlID0gdmFyaWF0aW9uKGxhc3RfZGlzdGFuY2UsIGF2ZXJhZ2VfMTBfZGlzdGFuY2UpXG5jb25zdCB2YXJpYXRpb25fMTBfc3BlZWQgPSB2YXJpYXRpb24obGFzdF9zcGVlZCwgYXZlcmFnZV8xMF9zcGVlZClcbmNvbnN0IHZhcmlhdGlvbl8xMF9lbGV2YXRpb24gPSB2YXJpYXRpb24obGFzdF9lbGV2YXRpb24sIGF2ZXJhZ2VfMTBfZWxldmF0aW9uKVxuXG5jb25zdCBuYl9kaXNwbGF5ZWQgPSAzXG5cblxuXG48L3NjcmlwdD5cblxuXG48c3R5bGU+XG5cbjwvc3R5bGU+XG48ZGl2IGNsYXNzPVwibWItMjBcIj5cbiAgICA8ZGl2IGNsYXNzPVwibWItNiBzaGFkb3cgXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiYnljaWNsZTIxLmpwZ1wiIGFsdD1cImN5Y2xpbmdcIiBjbGFzcz1cIm9iamVjdC1jb3ZlciBoLTQ4IHctZnVsbCBzaGFkb3cgcm91bmRlZC1tZFwiPlxuICAgIDwvZGl2PlxuXG4gICAgXG4gICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgbWItMTYgYmctYmx1ZS03MDAgYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIHNoYWRvdy1sZyByb3VuZGVkLXQtbWRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvbnQtc2FucyBBcmlhbCB0ZXh0LWNlbnRlciBwLTIgdGV4dC0zeGwgdGV4dC1ibHVlLTcwMCBmb250LXNlbWlib2xkIGJnLWJsdWUtMTAwIHB4LTggdHJhY2tpbmctd2lkZXN0XCI+XG4gICAgICAgICAgICBDeWNsaW5nIFBlcmZvcm1hbmNlXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPGRpdiBjbGFzcz0ncC04Jz5cbiAgICA8ZGl2IGNsYXNzPSdwYi04Jz5cbiAgICAgICAgPGgxIGNsYXNzPVwidGV4dC1ibHVlLTgwMCAgbWItOCBcIj5MYXN0IFNlc3Npb25zPC9oMT5cbiAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGFsaWMgZ3JpZCBncmlkLWNvbHMtMyBkaXZpZGUteCBkaXZpZGUtZ3JheS00MDBcIj5cbiAgICAgICAgICAgIHsjZWFjaCBnZXRfbGFzdF9uYl9zZXNzaW9ucygzLCBsaXN0X2RhdGUpIGFzIGRhdGV9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj57ZGF0ZX08L2Rpdj5cbiAgICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZGl2aWRlLXkgbXQtMTZcIj5cbiAgICAgICAgPGgxIGNsYXNzPVwidGV4dC1ibHVlLTgwMFwiPlBlcmZvcm1hbmNlIFRhYmxlczwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3M9J20tMTIgY29udGFpbmVyIG14LWF1dG8nPlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUtYXV0byB0ZXh0LWNlbnRlciBjb250YWluZXIgbXgtYXV0b1wiPlxuICAgICAgICAgICAgPGNhcHRpb24gY2xhc3M9XCJmb250LXNlbWlib2xkIG1iLTYgbXQtOCB0ZXh0LXhsIGl0YWxpYyB0ZXh0LWJsdWUtNzAwXCI+UGVyZm9ybWFuY2UgZXZvbHV0aW9uIG9mIG1haW4gbWV0cmljczwvY2FwdGlvbj5cbiAgICAgICAgICAgIDx0aGVhZCBjbGFzcz1cImJvcmRlci1ncmF5LTMwMCBpdGFsaWNcIj5cbiAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJiZy1ibHVlLTEwMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yXCI+TWV0cmljczwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yXCI+VmFsdWU8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjb2xzcGFuPTIgY2xhc3M9XCJweC00IHB5LTIgXCI+dnMuIExhc3QgMyBzZXNzaW9uczwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNvbHNwYW49MiBjbGFzcz1cInB4LTQgcHktMlwiPnZzLiBMYXN0IDEwIHNlc3Npb25zPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPkRpc3RhbmNlIChtKTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntsYXN0X2Rpc3RhbmNlfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntNYXRoLnJvdW5kKGF2ZXJhZ2VfM19kaXN0YW5jZSl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3ZhcmlhdGlvbl8zX2Rpc3RhbmNlfSU8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57cm91bmRfMl9kZWNpbWFsKGF2ZXJhZ2VfMTBfZGlzdGFuY2UpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPnt2YXJpYXRpb25fMTBfZGlzdGFuY2V9JTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+U3BlZWQgKGttL2gpPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3JvdW5kXzJfZGVjaW1hbChsYXN0X3NwZWVkKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57cm91bmRfMl9kZWNpbWFsKGF2ZXJhZ2VfM19zcGVlZCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3ZhcmlhdGlvbl8zX3NwZWVkfSU8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57cm91bmRfMl9kZWNpbWFsKGF2ZXJhZ2VfMTBfc3BlZWQpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPnt2YXJpYXRpb25fMTBfc3BlZWR9JTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPkVsZXZhdGlvbjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntsYXN0X2VsZXZhdGlvbn08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57cm91bmRfMl9kZWNpbWFsKGF2ZXJhZ2VfM19lbGV2YXRpb24pfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPnt2YXJpYXRpb25fM19lbGV2YXRpb259JTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntyb3VuZF8yX2RlY2ltYWwoYXZlcmFnZV8xMF9lbGV2YXRpb24pfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPnt2YXJpYXRpb25fMTBfZWxldmF0aW9ufSU8L3RkPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgICA8ZGl2IGNsYXNzPSdtLTEyIGNvbnRhaW5lciBteC1hdXRvJz5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlLWF1dG8gdGV4dC1jZW50ZXIgY29udGFpbmVyIG14LWF1dG9cIj5cbiAgICAgICAgICAgIDxjYXB0aW9uIGNsYXNzPVwiZm9udC1zZW1pYm9sZCBtYi02IG10LTggdGV4dC14bCBpdGFsaWMgdGV4dC1ibHVlLTcwMFwiPlBlcmZvcm1hbmNlIG9mIGxhc3Qgc2Vzc2lvbnM8L2NhcHRpb24+XG4gICAgICAgICAgICA8dGhlYWQgY2xhc3M9XCJpdGFsaWMgYm9yZGVyLWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwiYmctYmx1ZS0xMDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTQgcHktMlwiPkRhdGU8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTQgcHktMlwiPkRpc3RhbmNlIChtKTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yXCI+VGltZSAobWluKTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yXCI+U3BlZWQgKGttL2gpPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJweC00IHB5LTJcIj5FbGV2YXRpb24gKG0pPC90aD5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cblxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgeyNlYWNoIGRpc3RhbmNlXzNfc2Vzc2lvbiBhcyBkaXN0YW5jZSwgaX1cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntkYXRlXzNfc2Vzc2lvbltpXX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57ZGlzdGFuY2V9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e21pbnV0ZXNfM19zZXNzaW9uW2ldfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntyb3VuZF8yX2RlY2ltYWwoKGRpc3RhbmNlLzEwMDApIC8gKG1pbnV0ZXNfM19zZXNzaW9uW2ldLzYwKSkgfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntlbGV2YXRpb25fM19zZXNzaW9uW2ldfTwvdGQ+XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm10LThcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzcz1cInRleHQtYmx1ZS04MDAgbWItOCBtdC0xNlwiPlBlcmZvcm1hbmNlIENoYXJ0PC9oMT5cbiAgICAgICAgICAgIDxDaGFydHMge2RhdGF9IC8+IFxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj48L2Rpdj5cbjwvZGl2PlxuXG5cblxuXG5cblxuPCEtLSBcbjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRleHBvcnQgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xuXHRcdHJldHVybiB0aGlzLmZldGNoKGBzcG9ydHMvY3ljbGluZy5qc29uYCkudGhlbihyID0+IHIuanNvbigpKS50aGVuKGRhdGFfcmF3ID0+IHtcblx0XHRcdHJldHVybiB7IGRhdGFfcmF3IH07XG5cdFx0fSk7XG5cdH1cdFxuICAgIFxuXG48L3NjcmlwdD5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgQ2hhcnRzIGZyb20gJy4vY3ljbGluZy1jaGFydHMuc3ZlbHRlJ1xuICAgIGV4cG9ydCBsZXQgZGF0YV9yYXdcblxuXG4vLyBDb21wdXRlIGRhdGEgZm9yIGNoYXJ0c1xuXG4gICAgbGV0IGxpc3RfbWV0ZXJzID0gW107XG4gICAgbGV0IGxpc3RfZGF0ZSA9IFtdO1xuICAgIGxldCBsaXN0X2VsZXZhdGlvbiA9IFtdO1xuICAgIGxldCBsaXN0X21pbnV0ZXMgPSBbXTtcblxuICAgIGRhdGFfcmF3LmZvckVhY2goeCA9PiB7XG4gICAgICAgIGxpc3RfbWV0ZXJzLnB1c2goeC5tZXRlcnMpXG4gICAgICAgIGxpc3RfZGF0ZS5wdXNoKHguZGF0ZSlcbiAgICAgICAgbGlzdF9lbGV2YXRpb24ucHVzaCh4LmVsZXZhdGlvbilcbiAgICAgICAgbGlzdF9taW51dGVzLnB1c2goeC5taW51dGVzKVxuICAgIH0pXG5cbiAgICBleHBvcnQgY29uc3QgZGF0YSA9IHtcbiAgICBsYWJlbHM6IGxpc3RfZGF0ZSxcbiAgICBkYXRhc2V0czogW3tcbiAgICAgICAgbGFiZWw6ICdNZXRlcnMgY292ZXJlZCcsXG4gICAgICAgIHlBeGlzSUQgOiAnTWV0ZXJzIGNvdmVyZWQnLFxuICAgICAgICBkYXRhOmxpc3RfbWV0ZXJzLFxuICAgICAgICBib3JkZXJDb2xvcjogXCIjM2U5NWNkXCIsXG4gICAgICAgIGZpbGw6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnZWxldmF0aW9uJyxcbiAgICAgICAgZGF0YTpsaXN0X2VsZXZhdGlvbixcbiAgICAgICAgeUF4aXNJRCA6ICdlbGV2YXRpb24nLFxuICAgICAgICBib3JkZXJDb2xvcjogXCIjOGU1ZWEyXCIsXG4gICAgICAgIGZpbGw6IGZhbHNlXG4gICAgfV1cbn1cblxuLy8gVE9ETzogdmVyaWZpeSBvcmRlcmluZyBvZiBkYXRlcyBhbmQgc2Vzc2lvbnNcblxuY29uc3QgYXZlcmFnZSA9IGFyciA9PiBhcnIucmVkdWNlKCAoIHAsIGMgKSA9PiBwICsgYywgMCApIC8gYXJyLmxlbmd0aDtcblxuXG4vLyBUT0RPOiByaWdodCBub3cgaW5jbHVkaW5nIGxhc3Qgc2Vzc2lvbiwgcHJvYmFibHkgc2hvdWxkIG5vdFxuXG4vLyBUT0RPOiBjb2xvcnMgZ3JlZW4gb3IgcmVkIGZvciB2YXJpYXRpb25zXG5mdW5jdGlvbiBnZXRfbGFzdF9uYl9zZXNzaW9ucyhpbnQsIGxpc3Qpe1xuICAgIHJldHVybiBsaXN0LnNsaWNlKE1hdGgubWF4KGxpc3QubGVuZ3RoIC0gaW50LCAwKSlcbn1cblxuZnVuY3Rpb24gZGl2aWRldmVjdG9yKGEsYil7XG4gICAgcmV0dXJuIGEubWFwKChlLGkpID0+IGUgLyBiW2ldKTtcbn1cblxuZnVuY3Rpb24gdmFyaWF0aW9uKHhfbmV3LCB4X29sZCl7XG4gICAgY29uc3QgdmFyaWF0aW9uID0gTWF0aC5yb3VuZCgoeF9uZXcteF9vbGQpL3hfb2xkKjEwMClcbiAgICByZXR1cm4gdmFyaWF0aW9uXG59XG5cbmZ1bmN0aW9uIHJvdW5kXzFfZGVjaW1hbChmbG9hdCl7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoZmxvYXQgKiAxMCkgLzEwXG59XG5cbmZ1bmN0aW9uIHJvdW5kXzJfZGVjaW1hbChmbG9hdCl7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoZmxvYXQgKiAxMDApIC8gMTAwXG59XG5cbi8vIENvbXB1dGUgYXZlcmFnZSBkaXN0YW5jZSwgc3BlZWQsIGVsZXZhdGlvbiwgXG4vLyBMYXN0IHNlc3Npb25cbmNvbnN0IGxhc3RfZGlzdGFuY2UgPSBsaXN0X21ldGVyc1tsaXN0X21ldGVycy5sZW5ndGgtMV1cbmNvbnN0IGxhc3RfaG91cnMgPSBsaXN0X21pbnV0ZXNbbGlzdF9taW51dGVzLmxlbmd0aC0xXS82MFxuY29uc3QgbGFzdF9zcGVlZCA9IGxhc3RfZGlzdGFuY2UvMTAwMC9sYXN0X2hvdXJzXG5jb25zdCBsYXN0X2VsZXZhdGlvbiA9IGxpc3RfZWxldmF0aW9uW2xpc3RfZWxldmF0aW9uLmxlbmd0aC0xXVxuXG5cbi8vIExhc3QgMyBzZXNzaW9uc1xuLy9jb25zdCBkaXN0YW5jZV8zX3Nlc3Npb24gPSBsaXN0X21ldGVycy5zbGljZShNYXRoLm1heChsaXN0X21ldGVycy5sZW5ndGggLSAzLCAwKSlcblxuY29uc3QgZGlzdGFuY2VfM19zZXNzaW9uID0gZ2V0X2xhc3RfbmJfc2Vzc2lvbnMoMywgbGlzdF9tZXRlcnMpXG5jb25zdCBtaW51dGVzXzNfc2Vzc2lvbiA9IGdldF9sYXN0X25iX3Nlc3Npb25zKDMsIGxpc3RfbWludXRlcylcbmNvbnN0IGVsZXZhdGlvbl8zX3Nlc3Npb24gPSBnZXRfbGFzdF9uYl9zZXNzaW9ucygzLCBsaXN0X2VsZXZhdGlvbilcbmNvbnN0IGRhdGVfM19zZXNzaW9uID0gZ2V0X2xhc3RfbmJfc2Vzc2lvbnMoMywgbGlzdF9kYXRlKVxuXG5cblxuY29uc3QgYXZlcmFnZV8zX2Rpc3RhbmNlID0gYXZlcmFnZShkaXN0YW5jZV8zX3Nlc3Npb24pXG5jb25zdCBhdmVyYWdlXzNfZWxldmF0aW9uID0gYXZlcmFnZShlbGV2YXRpb25fM19zZXNzaW9uKVxuY29uc3QgYXZlcmFnZV8zX3NwZWVkID0gYXZlcmFnZShkaXZpZGV2ZWN0b3IoZGlzdGFuY2VfM19zZXNzaW9uICwgbWludXRlc18zX3Nlc3Npb24pKSAqIDYwLzEwMDAgIFxuXG5jb25zdCB2YXJpYXRpb25fM19kaXN0YW5jZSA9IHZhcmlhdGlvbihsYXN0X2Rpc3RhbmNlLCBhdmVyYWdlXzNfZGlzdGFuY2UpXG5jb25zdCB2YXJpYXRpb25fM19zcGVlZCA9IHZhcmlhdGlvbihsYXN0X3NwZWVkLCBhdmVyYWdlXzNfc3BlZWQpXG5jb25zdCB2YXJpYXRpb25fM19lbGV2YXRpb24gPSB2YXJpYXRpb24obGFzdF9lbGV2YXRpb24sIGF2ZXJhZ2VfM19lbGV2YXRpb24pXG5cbi8vIExhc3QgMTAgc2Vzc2lvbnNcbmNvbnN0IGRpc3RhbmNlXzEwX3Nlc3Npb24gPSBnZXRfbGFzdF9uYl9zZXNzaW9ucygxMCwgbGlzdF9tZXRlcnMpXG5jb25zdCBtaW51dGVzXzEwX3Nlc3Npb24gPSBnZXRfbGFzdF9uYl9zZXNzaW9ucygxMCwgbGlzdF9taW51dGVzKVxuY29uc3QgZWxldmF0aW9uXzEwX3Nlc3Npb24gPSBnZXRfbGFzdF9uYl9zZXNzaW9ucygxMCwgbGlzdF9lbGV2YXRpb24pXG5cbmNvbnN0IGF2ZXJhZ2VfMTBfZGlzdGFuY2UgPSBhdmVyYWdlKGRpc3RhbmNlXzEwX3Nlc3Npb24pXG5jb25zdCBhdmVyYWdlXzEwX2VsZXZhdGlvbiA9IGF2ZXJhZ2UoZWxldmF0aW9uXzEwX3Nlc3Npb24pXG5jb25zdCBhdmVyYWdlXzEwX3NwZWVkID0gYXZlcmFnZShkaXZpZGV2ZWN0b3IoZGlzdGFuY2VfMTBfc2Vzc2lvbiAsIG1pbnV0ZXNfMTBfc2Vzc2lvbikpICogNjAvMTAwMFxuXG5jb25zdCB2YXJpYXRpb25fMTBfZGlzdGFuY2UgPSB2YXJpYXRpb24obGFzdF9kaXN0YW5jZSwgYXZlcmFnZV8xMF9kaXN0YW5jZSlcbmNvbnN0IHZhcmlhdGlvbl8xMF9zcGVlZCA9IHZhcmlhdGlvbihsYXN0X3NwZWVkLCBhdmVyYWdlXzEwX3NwZWVkKVxuY29uc3QgdmFyaWF0aW9uXzEwX2VsZXZhdGlvbiA9IHZhcmlhdGlvbihsYXN0X2VsZXZhdGlvbiwgYXZlcmFnZV8xMF9lbGV2YXRpb24pXG5cbmNvbnN0IG5iX2Rpc3BsYXllZCA9IDNcblxuXG5cbjwvc2NyaXB0PlxuXG5cbjxzdHlsZT5cblxuPC9zdHlsZT5cblxuPGRpdiBjbGFzcz1cImZsZXggaC00OFwiPlxuICA8ZGl2IGNsYXNzPVwiZmxleC1pbml0aWFsIHctMi8zIHAtMlwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBwLTIgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCBiZy1ncmF5LTEwMFwiPlxuICAgIEN5Y2xpbmcgUGVyZm9ybWFuY2VcbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmbGV4LWluaXRpYWwgdy0xLzMgcC0yXCI+XG4gICAgPGRpdiBjbGFzcz1cIiB0ZXh0LXJpZ2h0IHAtMlwiPlxuICAgIDxpbWcgc3JjPVwiY3ljbGluZy5qcGdcIiBhbHQ9XCJjeWNsaW5nXCI+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG5cblxuPGRpdiBjbGFzcz0ncHgtMTAnPlxuWW91ciBsYXN0IHNlc3Npb25zIHRvb2sgcGxhY2Ugb246IFxuICAgIDxsdT5cbiAgICB7I2VhY2ggZ2V0X2xhc3RfbmJfc2Vzc2lvbnMoMywgbGlzdF9kYXRlKSBhcyBkYXRlfVxuICAgIDxsaT57ZGF0ZX08L2xpPlxuICAgIHsvZWFjaH1cbiAgICA8L2x1PlxuPC9kaXY+XG5cblxuPGRpdiBjbGFzcz0ncC0xMCc+XG4gICAgPHRhYmxlIGNsYXNzPVwidGFibGUtYXV0byB0ZXh0LWNlbnRlciBcIj5cbiAgICA8dGhlYWQ+XG4gICAgICAgIDx0cj5cbiAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yXCI+TWV0cmljczwvdGg+XG4gICAgICAgIDx0aCBjbGFzcz1cInB4LTQgcHktMlwiPlZhbHVlPC90aD5cbiAgICAgICAgPHRoIGNvbHNwYW49MiBjbGFzcz1cInB4LTQgcHktMiBcIj52cy4gTGFzdCAzIHNlc3Npb25zPC90aD5cbiAgICAgICAgPHRoIGNvbHNwYW49MiBjbGFzcz1cInB4LTQgcHktMlwiPnZzLiBMYXN0IDEwIHNlc3Npb25zPC90aD5cbiAgICAgICAgPC90cj5cbiAgICA8L3RoZWFkPlxuICAgIDx0Ym9keT5cbiAgICAgICAgPHRyPlxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+RGlzdGFuY2UgKG0pPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntsYXN0X2Rpc3RhbmNlfTwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57TWF0aC5yb3VuZChhdmVyYWdlXzNfZGlzdGFuY2UpfTwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57dmFyaWF0aW9uXzNfZGlzdGFuY2V9JTwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57cm91bmRfMl9kZWNpbWFsKGF2ZXJhZ2VfMTBfZGlzdGFuY2UpfTwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57dmFyaWF0aW9uXzEwX2Rpc3RhbmNlfSU8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHIgY2xhc3M9XCJiZy1ncmF5LTEwMFwiPlxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+U3BlZWQgKGttL2gpPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntyb3VuZF8yX2RlY2ltYWwobGFzdF9zcGVlZCl9PC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntyb3VuZF8yX2RlY2ltYWwoYXZlcmFnZV8zX3NwZWVkKX08L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3ZhcmlhdGlvbl8zX3NwZWVkfSU8L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3JvdW5kXzJfZGVjaW1hbChhdmVyYWdlXzEwX3NwZWVkKX08L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3ZhcmlhdGlvbl8xMF9zcGVlZH0lPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyPlxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+RWxldmF0aW9uPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntsYXN0X2VsZXZhdGlvbn08L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3JvdW5kXzJfZGVjaW1hbChhdmVyYWdlXzNfZWxldmF0aW9uKX08L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3ZhcmlhdGlvbl8zX2VsZXZhdGlvbn0lPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntyb3VuZF8yX2RlY2ltYWwoYXZlcmFnZV8xMF9lbGV2YXRpb24pfTwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57dmFyaWF0aW9uXzEwX2VsZXZhdGlvbn0lPC90ZD5cbiBcbiAgICAgICAgPC90cj5cbiAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG48L2Rpdj5cblxuXG5cbjxkaXYgY2xhc3M9J3B4LTEwIHB5LTUnPlxuR2V0IHRoZSBkYXRhIGF2YWlsYWJsZSBpbiB0YWJsZVxuXG4gICAgPGRpdiBjbGFzcz0ncHktNSc+XG4gICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlLWF1dG8gdGV4dC1jZW50ZXIgXCI+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTQgcHktMlwiPkRhdGU8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yXCI+RGlzdGFuY2UgKG0pPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTQgcHktMlwiPlRpbWUgKG1pbik8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yXCI+U3BlZWQgKGttL2gpPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTQgcHktMlwiPkVsZXZhdGlvbiAobSk8L3RoPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuXG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgXG4gICAgICAgICAgICB7I2VhY2ggZGlzdGFuY2VfM19zZXNzaW9uIGFzIGRpc3RhbmNlLCBpfVxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntkYXRlXzNfc2Vzc2lvbltpXX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntkaXN0YW5jZX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPnttaW51dGVzXzNfc2Vzc2lvbltpXX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntyb3VuZF8yX2RlY2ltYWwoKGRpc3RhbmNlLzEwMDApIC8gKG1pbnV0ZXNfM19zZXNzaW9uW2ldLzYwKSkgfTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e2VsZXZhdGlvbl8zX3Nlc3Npb25baV19PC90ZD5cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgey9lYWNofVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuXG5cbjwvZGl2PlxuXG5cbjxkaXYgY2xhc3M9XCJweC0xMCBweS01XCI+XG5cdDxoMyA+U2VlIHlvdXIgZXZvbHV0aW9uIGluIHRoaXMgY2hhcnQ6PC9oMz5cbiAgICAgPENoYXJ0cyB7ZGF0YX0gLz4gXG48L2Rpdj5cbiAtLT5cbiIsIjxjYW52YXMgaWQ9XCJteUNoYXJ0XCIgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiMVwiPjwvY2FudmFzPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gXCJzdmVsdGVcIjtcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanNcIjtcbmV4cG9ydCBsZXQgZGF0YTsgXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2hhcnQoKXtcbiAgdmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUNoYXJ0Jyk7XG4gICAgdmFyIG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgICAgICAgeUF4ZXM6IFxuICAgICAgICAgICAgICAgIFt7XG4gICAgICAgIGlkOiAnTWV0ZXJzIGNvdmVyZWQnLFxuICAgICAgICBwb3NpdGlvbjogJ2xlZnQnLFxuICAgICAgfSwge1xuICAgICAgICBpZDogJ0VsZXZhdGlvbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgICAgICAgICAgfSxcbiAgICAgIH1dXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICB9XG5vbk1vdW50KGNyZWF0ZUNoYXJ0KVxuPC9zY3JpcHQ+XG4iLCJcblxuPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG5cdGV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zLCBxdWVyeSB9KSB7XG5cdFx0cmV0dXJuIHRoaXMuZmV0Y2goYHNwb3J0cy9ydW5uaW5nLmpzb25gKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4oZGF0YV9yYXcgPT4ge1xuXHRcdFx0cmV0dXJuIHsgZGF0YV9yYXcgfTtcblx0XHR9KTtcblx0fVx0XG4gICAgXG5cbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBDaGFydHMgZnJvbSAnLi9ydW5uaW5nLWNoYXJ0cy5zdmVsdGUnXG4gICAgZXhwb3J0IGxldCBkYXRhX3Jhd1xuICAgIC8vIFNvcnQgbGlzdCBvZiBKc29uIGJ5IGRhdGVzIChjbG9zZXN0IGRhdGVzIHRvIGxhc3QgcG9zaXRpb25zKVxuICAgIGZ1bmN0aW9uIGN1c3RvbV9zb3J0KGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGEuZGF0ZSkuZ2V0VGltZSgpIC0gbmV3IERhdGUoYi5kYXRlKS5nZXRUaW1lKCk7XG4gICAgfVxuICAgIGRhdGFfcmF3ID0gZGF0YV9yYXcuc29ydChjdXN0b21fc29ydClcblxuLy8gQ29tcHV0ZSBkYXRhIGZvciBjaGFydHNcblxuICAgIGxldCBsaXN0X21ldGVycyA9IFtdO1xuICAgIGxldCBsaXN0X2RhdGUgPSBbXTtcbiAgICBsZXQgbGlzdF9lbGV2YXRpb24gPSBbXTtcbiAgICBsZXQgbGlzdF9taW51dGVzID0gW107XG5cbiAgICBkYXRhX3Jhdy5mb3JFYWNoKHggPT4ge1xuICAgICAgICBsaXN0X21ldGVycy5wdXNoKHgubWV0ZXJzKVxuICAgICAgICBsaXN0X2RhdGUucHVzaCh4LmRhdGUpXG4gICAgICAgIGxpc3RfZWxldmF0aW9uLnB1c2goeC5lbGV2YXRpb24pXG4gICAgICAgIGxpc3RfbWludXRlcy5wdXNoKHgubWludXRlcylcbiAgICB9KVxuXG4gICAgZXhwb3J0IGNvbnN0IGRhdGEgPSB7XG4gICAgbGFiZWxzOiBsaXN0X2RhdGUsXG4gICAgZGF0YXNldHM6IFt7XG4gICAgICAgIGxhYmVsOiAnTWV0ZXJzIGNvdmVyZWQnLFxuICAgICAgICB5QXhpc0lEIDogJ01ldGVycyBjb3ZlcmVkJyxcbiAgICAgICAgZGF0YTpsaXN0X21ldGVycyxcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzNlOTVjZFwiLFxuICAgICAgICBmaWxsOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ0VsZXZhdGlvbicsXG4gICAgICAgIGRhdGE6bGlzdF9lbGV2YXRpb24sXG4gICAgICAgIHlBeGlzSUQgOiAnRWxldmF0aW9uJyxcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzhlNWVhMlwiLFxuICAgICAgICBmaWxsOiBmYWxzZVxuICAgIH1dXG59XG5cbi8vIFRPRE86IHZlcmlmaXkgb3JkZXJpbmcgb2YgZGF0ZXMgYW5kIHNlc3Npb25zXG5cbmNvbnN0IGF2ZXJhZ2UgPSBhcnIgPT4gYXJyLnJlZHVjZSggKCBwLCBjICkgPT4gcCArIGMsIDAgKSAvIGFyci5sZW5ndGg7XG5cblxuLy8gVE9ETzogcmlnaHQgbm93IGluY2x1ZGluZyBsYXN0IHNlc3Npb24sIHByb2JhYmx5IHNob3VsZCBub3RcblxuLy8gVE9ETzogbGlzdGUgZGVzIG9wdGlvbnMgYm9vbCBhdmVjIGxlcyBtw6l0cmlxdWVzIHF1J29uIHZldXQgb2JzZXJ2ZXIgKHJ5dGhtZSBjYXJkaWFxdWUpXG5cbi8vIFRPRE86IGNvbG9ycyBncmVlbiBvciByZWQgZm9yIHZhcmlhdGlvbnNcblxuXG5mdW5jdGlvbiBnZXRfbGFzdF9uYl9zZXNzaW9ucyhpbnQsIGxpc3Qpe1xuICAgIHJldHVybiBsaXN0LnNsaWNlKE1hdGgubWF4KGxpc3QubGVuZ3RoIC0gaW50LCAwKSlcbn1cblxuZnVuY3Rpb24gZGl2aWRldmVjdG9yKGEsYil7XG4gICAgcmV0dXJuIGEubWFwKChlLGkpID0+IGUgLyBiW2ldKTtcbn1cblxuZnVuY3Rpb24gdmFyaWF0aW9uKHhfbmV3LCB4X29sZCl7XG4gICAgY29uc3QgdmFyaWF0aW9uID0gTWF0aC5yb3VuZCgoeF9uZXcteF9vbGQpL3hfb2xkKjEwMClcbiAgICByZXR1cm4gdmFyaWF0aW9uXG59XG5cbmZ1bmN0aW9uIHJvdW5kXzFfZGVjaW1hbChmbG9hdCl7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoZmxvYXQgKiAxMCkgLzEwXG59XG5cbmZ1bmN0aW9uIHJvdW5kXzJfZGVjaW1hbChmbG9hdCl7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoZmxvYXQgKiAxMDApIC8gMTAwXG59XG5cbi8vIENvbXB1dGUgYXZlcmFnZSBkaXN0YW5jZSwgc3BlZWQsIGVsZXZhdGlvbiwgXG4vLyBMYXN0IHNlc3Npb25cbmNvbnN0IGxhc3RfZGlzdGFuY2UgPSBsaXN0X21ldGVyc1tsaXN0X21ldGVycy5sZW5ndGgtMV1cbmNvbnN0IGxhc3RfaG91cnMgPSBsaXN0X21pbnV0ZXNbbGlzdF9taW51dGVzLmxlbmd0aC0xXS82MFxuY29uc3QgbGFzdF9zcGVlZCA9IGxhc3RfZGlzdGFuY2UvMTAwMC9sYXN0X2hvdXJzXG5jb25zdCBsYXN0X2VsZXZhdGlvbiA9IGxpc3RfZWxldmF0aW9uW2xpc3RfZWxldmF0aW9uLmxlbmd0aC0xXVxuXG5cbi8vIExhc3QgMyBzZXNzaW9uc1xuLy9jb25zdCBkaXN0YW5jZV8zX3Nlc3Npb24gPSBsaXN0X21ldGVycy5zbGljZShNYXRoLm1heChsaXN0X21ldGVycy5sZW5ndGggLSAzLCAwKSlcblxuY29uc3QgZGlzdGFuY2VfM19zZXNzaW9uID0gZ2V0X2xhc3RfbmJfc2Vzc2lvbnMoMywgbGlzdF9tZXRlcnMpXG5jb25zdCBtaW51dGVzXzNfc2Vzc2lvbiA9IGdldF9sYXN0X25iX3Nlc3Npb25zKDMsIGxpc3RfbWludXRlcylcbmNvbnN0IGVsZXZhdGlvbl8zX3Nlc3Npb24gPSBnZXRfbGFzdF9uYl9zZXNzaW9ucygzLCBsaXN0X2VsZXZhdGlvbilcbmNvbnN0IGRhdGVfM19zZXNzaW9uID0gZ2V0X2xhc3RfbmJfc2Vzc2lvbnMoMywgbGlzdF9kYXRlKVxuXG5cblxuY29uc3QgYXZlcmFnZV8zX2Rpc3RhbmNlID0gYXZlcmFnZShkaXN0YW5jZV8zX3Nlc3Npb24pXG5jb25zdCBhdmVyYWdlXzNfZWxldmF0aW9uID0gYXZlcmFnZShlbGV2YXRpb25fM19zZXNzaW9uKVxuY29uc3QgYXZlcmFnZV8zX3NwZWVkID0gYXZlcmFnZShkaXZpZGV2ZWN0b3IoZGlzdGFuY2VfM19zZXNzaW9uICwgbWludXRlc18zX3Nlc3Npb24pKSAqIDYwLzEwMDAgIFxuXG5jb25zdCB2YXJpYXRpb25fM19kaXN0YW5jZSA9IHZhcmlhdGlvbihsYXN0X2Rpc3RhbmNlLCBhdmVyYWdlXzNfZGlzdGFuY2UpXG5jb25zdCB2YXJpYXRpb25fM19zcGVlZCA9IHZhcmlhdGlvbihsYXN0X3NwZWVkLCBhdmVyYWdlXzNfc3BlZWQpXG5jb25zdCB2YXJpYXRpb25fM19lbGV2YXRpb24gPSB2YXJpYXRpb24obGFzdF9lbGV2YXRpb24sIGF2ZXJhZ2VfM19lbGV2YXRpb24pXG5cbi8vIExhc3QgMTAgc2Vzc2lvbnNcbmNvbnN0IGRpc3RhbmNlXzEwX3Nlc3Npb24gPSBnZXRfbGFzdF9uYl9zZXNzaW9ucygxMCwgbGlzdF9tZXRlcnMpXG5jb25zdCBtaW51dGVzXzEwX3Nlc3Npb24gPSBnZXRfbGFzdF9uYl9zZXNzaW9ucygxMCwgbGlzdF9taW51dGVzKVxuY29uc3QgZWxldmF0aW9uXzEwX3Nlc3Npb24gPSBnZXRfbGFzdF9uYl9zZXNzaW9ucygxMCwgbGlzdF9lbGV2YXRpb24pXG5cbmNvbnN0IGF2ZXJhZ2VfMTBfZGlzdGFuY2UgPSBhdmVyYWdlKGRpc3RhbmNlXzEwX3Nlc3Npb24pXG5jb25zdCBhdmVyYWdlXzEwX2VsZXZhdGlvbiA9IGF2ZXJhZ2UoZWxldmF0aW9uXzEwX3Nlc3Npb24pXG5jb25zdCBhdmVyYWdlXzEwX3NwZWVkID0gYXZlcmFnZShkaXZpZGV2ZWN0b3IoZGlzdGFuY2VfMTBfc2Vzc2lvbiAsIG1pbnV0ZXNfMTBfc2Vzc2lvbikpICogNjAvMTAwMFxuXG5jb25zdCB2YXJpYXRpb25fMTBfZGlzdGFuY2UgPSB2YXJpYXRpb24obGFzdF9kaXN0YW5jZSwgYXZlcmFnZV8xMF9kaXN0YW5jZSlcbmNvbnN0IHZhcmlhdGlvbl8xMF9zcGVlZCA9IHZhcmlhdGlvbihsYXN0X3NwZWVkLCBhdmVyYWdlXzEwX3NwZWVkKVxuY29uc3QgdmFyaWF0aW9uXzEwX2VsZXZhdGlvbiA9IHZhcmlhdGlvbihsYXN0X2VsZXZhdGlvbiwgYXZlcmFnZV8xMF9lbGV2YXRpb24pXG5cbmNvbnN0IG5iX2Rpc3BsYXllZCA9IDNcblxuXG5cbjwvc2NyaXB0PlxuXG5cbjxzdHlsZT5cblxuPC9zdHlsZT5cbjxkaXYgY2xhc3M9XCJtYi0yMFwiPlxuXG4gICAgPGRpdiBjbGFzcz1cIm1iLTYgc2hhZG93IFwiPlxuICAgICAgICA8aW1nIHNyYz1cInJ1bm5pbmcxLmpwZ1wiIGFsdD1cImN5Y2xpbmdcIiBjbGFzcz1cIm9iamVjdC1jb3ZlciBoLTQ4IHctZnVsbCBzaGFkb3cgcm91bmRlZC1tZFwiPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgbWItMTYgYmctYmx1ZS03MDAgYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIHNoYWRvdy1sZyByb3VuZGVkLXQtbWRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvbnQtc2FucyBBcmlhbCB0ZXh0LWNlbnRlciBwLTIgdGV4dC0zeGwgdGV4dC1ibHVlLTcwMCBmb250LXNlbWlib2xkIGJnLWJsdWUtMTAwIHB4LTggdHJhY2tpbmctd2lkZXN0XCI+XG4gICAgICAgICAgICBSdW5uaW5nIFBlcmZvcm1hbmNlXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9J3AtOCc+XG4gICAgPGRpdiBjbGFzcz0ncGItOCc+XG4gICAgICAgIDxoMSBjbGFzcz1cInRleHQtYmx1ZS04MDAgIG1iLTggXCI+TGFzdCBTZXNzaW9uczwvaDE+XG4gICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaXRhbGljIGdyaWQgZ3JpZC1jb2xzLTMgZGl2aWRlLXggZGl2aWRlLWdyYXktNDAwXCI+XG4gICAgICAgICAgICB7I2VhY2ggZ2V0X2xhc3RfbmJfc2Vzc2lvbnMoMywgbGlzdF9kYXRlKSBhcyBkYXRlfVxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+e2RhdGV9PC9kaXY+XG4gICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG5cbiAgICA8ZGl2IGNsYXNzPSdkaXZpZGUteSBtdC0xNic+XG4gICAgICAgIDxoMSBjbGFzcz1cInRleHQtYmx1ZS04MDBcIj5QZXJmb3JtYW5jZSBUYWJsZXM8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzPSdtLTEyIGNvbnRhaW5lciBteC1hdXRvJz5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlLWF1dG8gdGV4dC1jZW50ZXIgY29udGFpbmVyIG14LWF1dG9cIj5cbiAgICAgICAgICAgIDxjYXB0aW9uIGNsYXNzPVwiZm9udC1zZW1pYm9sZCBtYi02IG10LTggdGV4dC14bCBpdGFsaWMgdGV4dC1ibHVlLTcwMFwiPlBlcmZvcm1hbmNlIGV2b2x1dGlvbiBvZiBtYWluIG1ldHJpY3M8L2NhcHRpb24+XG4gICAgICAgICAgICA8dGhlYWQgY2xhc3M9XCJib3JkZXItZ3JheS0zMDAgaXRhbGljXCI+XG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwiYmctYmx1ZS0xMDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTQgcHktMlwiPk1ldHJpY3M8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTQgcHktMlwiPlZhbHVlPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY29sc3Bhbj0yIGNsYXNzPVwicHgtNCBweS0yIFwiPnZzLiBMYXN0IDMgc2Vzc2lvbnM8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjb2xzcGFuPTIgY2xhc3M9XCJweC00IHB5LTJcIj52cy4gTGFzdCAxMCBzZXNzaW9uczwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj5EaXN0YW5jZSAobSk8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57bGFzdF9kaXN0YW5jZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57cm91bmRfMl9kZWNpbWFsKGF2ZXJhZ2VfM19kaXN0YW5jZSl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3ZhcmlhdGlvbl8zX2Rpc3RhbmNlfSU8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57cm91bmRfMl9kZWNpbWFsKGF2ZXJhZ2VfMTBfZGlzdGFuY2UpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPnt2YXJpYXRpb25fMTBfZGlzdGFuY2V9JTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJiZy1ncmF5LTEwMFwiPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj5TcGVlZCAoa20vaCk8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57cm91bmRfMl9kZWNpbWFsKGxhc3Rfc3BlZWQpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntyb3VuZF8yX2RlY2ltYWwoYXZlcmFnZV8zX3NwZWVkKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57dmFyaWF0aW9uXzNfc3BlZWR9JTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntyb3VuZF8yX2RlY2ltYWwoYXZlcmFnZV8xMF9zcGVlZCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3ZhcmlhdGlvbl8xMF9zcGVlZH0lPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+RWxldmF0aW9uPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e2xhc3RfZWxldmF0aW9ufTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntyb3VuZF8yX2RlY2ltYWwoYXZlcmFnZV8zX2VsZXZhdGlvbil9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3ZhcmlhdGlvbl8zX2VsZXZhdGlvbn0lPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3JvdW5kXzJfZGVjaW1hbChhdmVyYWdlXzEwX2VsZXZhdGlvbil9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3ZhcmlhdGlvbl8xMF9lbGV2YXRpb259JTwvdGQ+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz0nbS0xMiBjb250YWluZXIgbXgtYXV0byc+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZS1hdXRvIHRleHQtY2VudGVyIGNvbnRhaW5lciBteC1hdXRvXCI+XG4gICAgICAgICAgICA8Y2FwdGlvbiBjbGFzcz1cImZvbnQtc2VtaWJvbGQgbWItNiBtdC04IHRleHQteGwgaXRhbGljIHRleHQtYmx1ZS03MDBcIj5QZXJmb3JtYW5jZSBvZiBsYXN0IHNlc3Npb25zPC9jYXB0aW9uPlxuICAgICAgICAgICAgPHRoZWFkIGNsYXNzPVwiaXRhbGljIGJvcmRlci1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cImJnLWJsdWUtMTAwIGJvcmRlciBib3JkZXItZ3JheS0zMDBcIj5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJweC00IHB5LTJcIj5EYXRlPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJweC00IHB5LTJcIj5EaXN0YW5jZSAobSk8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTQgcHktMlwiPlRpbWUgKG1pbik8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTQgcHktMlwiPlNwZWVkIChrbS9oKTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yXCI+RWxldmF0aW9uIChtKTwvdGg+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHsjZWFjaCBkaXN0YW5jZV8zX3Nlc3Npb24gYXMgZGlzdGFuY2UsIGl9XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57ZGF0ZV8zX3Nlc3Npb25baV19PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e2Rpc3RhbmNlfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPnttaW51dGVzXzNfc2Vzc2lvbltpXX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57cm91bmRfMl9kZWNpbWFsKChkaXN0YW5jZS8xMDAwKSAvIChtaW51dGVzXzNfc2Vzc2lvbltpXS82MCkpIH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57ZWxldmF0aW9uXzNfc2Vzc2lvbltpXX08L3RkPlxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtdC04XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3M9XCJ0ZXh0LWJsdWUtODAwIG1iLTggbXQtMTZcIj5QZXJmb3JtYW5jZSBDaGFydDwvaDE+XG4gICAgICAgICAgICA8Q2hhcnRzIHtkYXRhfSAvPiBcbiAgICAgICAgPC9kaXY+ICAgICAgICBcbiAgICA8L2Rpdj48L2Rpdj5cbjwvZGl2PlxuXG5cbjwhLS0gXG48c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cblx0ZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMsIHF1ZXJ5IH0pIHtcblx0XHRyZXR1cm4gdGhpcy5mZXRjaChgc3BvcnRzL3J1bm5pbmcuanNvbmApLnRoZW4ociA9PiByLmpzb24oKSkudGhlbihkYXRhX3JhdyA9PiB7XG5cdFx0XHRyZXR1cm4geyBkYXRhX3JhdyB9O1xuXHRcdH0pO1xuXHR9XHRcbiAgICBcblxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IENoYXJ0cyBmcm9tICcuL3J1bm5pbmctY2hhcnRzLnN2ZWx0ZSdcbiAgICBleHBvcnQgbGV0IGRhdGFfcmF3XG5cblxuLy8gQ29tcHV0ZSBkYXRhIGZvciBjaGFydHNcblxuICAgIGxldCBsaXN0X21ldGVycyA9IFtdO1xuICAgIGxldCBsaXN0X2RhdGUgPSBbXTtcbiAgICBsZXQgbGlzdF9lbGV2YXRpb24gPSBbXTtcbiAgICBsZXQgbGlzdF9taW51dGVzID0gW107XG5cbiAgICBkYXRhX3Jhdy5mb3JFYWNoKHggPT4ge1xuICAgICAgICBsaXN0X21ldGVycy5wdXNoKHgubWV0ZXJzKVxuICAgICAgICBsaXN0X2RhdGUucHVzaCh4LmRhdGUpXG4gICAgICAgIGxpc3RfZWxldmF0aW9uLnB1c2goeC5lbGV2YXRpb24pXG4gICAgICAgIGxpc3RfbWludXRlcy5wdXNoKHgubWludXRlcylcbiAgICB9KVxuXG4gICAgZXhwb3J0IGNvbnN0IGRhdGEgPSB7XG4gICAgbGFiZWxzOiBsaXN0X2RhdGUsXG4gICAgZGF0YXNldHM6IFt7XG4gICAgICAgIGxhYmVsOiAnTWV0ZXJzIGNvdmVyZWQnLFxuICAgICAgICB5QXhpc0lEIDogJ01ldGVycyBjb3ZlcmVkJyxcbiAgICAgICAgZGF0YTpsaXN0X21ldGVycyxcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzNlOTVjZFwiLFxuICAgICAgICBmaWxsOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ0VsZXZhdGlvbicsXG4gICAgICAgIGRhdGE6bGlzdF9lbGV2YXRpb24sXG4gICAgICAgIHlBeGlzSUQgOiAnRWxldmF0aW9uJyxcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzhlNWVhMlwiLFxuICAgICAgICBmaWxsOiBmYWxzZVxuICAgIH1dXG59XG5cbi8vIFRPRE86IHZlcmlmaXkgb3JkZXJpbmcgb2YgZGF0ZXMgYW5kIHNlc3Npb25zXG5cbmNvbnN0IGF2ZXJhZ2UgPSBhcnIgPT4gYXJyLnJlZHVjZSggKCBwLCBjICkgPT4gcCArIGMsIDAgKSAvIGFyci5sZW5ndGg7XG5cblxuLy8gVE9ETzogcmlnaHQgbm93IGluY2x1ZGluZyBsYXN0IHNlc3Npb24sIHByb2JhYmx5IHNob3VsZCBub3RcblxuLy8gVE9ETzogbGlzdGUgZGVzIG9wdGlvbnMgYm9vbCBhdmVjIGxlcyBtw6l0cmlxdWVzIHF1J29uIHZldXQgb2JzZXJ2ZXIgKHJ5dGhtZSBjYXJkaWFxdWUpXG5cbi8vIFRPRE86IGNvbG9ycyBncmVlbiBvciByZWQgZm9yIHZhcmlhdGlvbnNcblxuXG5mdW5jdGlvbiBnZXRfbGFzdF9uYl9zZXNzaW9ucyhpbnQsIGxpc3Qpe1xuICAgIHJldHVybiBsaXN0LnNsaWNlKE1hdGgubWF4KGxpc3QubGVuZ3RoIC0gaW50LCAwKSlcbn1cblxuZnVuY3Rpb24gZGl2aWRldmVjdG9yKGEsYil7XG4gICAgcmV0dXJuIGEubWFwKChlLGkpID0+IGUgLyBiW2ldKTtcbn1cblxuZnVuY3Rpb24gdmFyaWF0aW9uKHhfbmV3LCB4X29sZCl7XG4gICAgY29uc3QgdmFyaWF0aW9uID0gTWF0aC5yb3VuZCgoeF9uZXcteF9vbGQpL3hfb2xkKjEwMClcbiAgICByZXR1cm4gdmFyaWF0aW9uXG59XG5cbmZ1bmN0aW9uIHJvdW5kXzFfZGVjaW1hbChmbG9hdCl7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoZmxvYXQgKiAxMCkgLzEwXG59XG5cbmZ1bmN0aW9uIHJvdW5kXzJfZGVjaW1hbChmbG9hdCl7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoZmxvYXQgKiAxMDApIC8gMTAwXG59XG5cbi8vIENvbXB1dGUgYXZlcmFnZSBkaXN0YW5jZSwgc3BlZWQsIGVsZXZhdGlvbiwgXG4vLyBMYXN0IHNlc3Npb25cbmNvbnN0IGxhc3RfZGlzdGFuY2UgPSBsaXN0X21ldGVyc1tsaXN0X21ldGVycy5sZW5ndGgtMV1cbmNvbnN0IGxhc3RfaG91cnMgPSBsaXN0X21pbnV0ZXNbbGlzdF9taW51dGVzLmxlbmd0aC0xXS82MFxuY29uc3QgbGFzdF9zcGVlZCA9IGxhc3RfZGlzdGFuY2UvMTAwMC9sYXN0X2hvdXJzXG5jb25zdCBsYXN0X2VsZXZhdGlvbiA9IGxpc3RfZWxldmF0aW9uW2xpc3RfZWxldmF0aW9uLmxlbmd0aC0xXVxuXG5cbi8vIExhc3QgMyBzZXNzaW9uc1xuLy9jb25zdCBkaXN0YW5jZV8zX3Nlc3Npb24gPSBsaXN0X21ldGVycy5zbGljZShNYXRoLm1heChsaXN0X21ldGVycy5sZW5ndGggLSAzLCAwKSlcblxuY29uc3QgZGlzdGFuY2VfM19zZXNzaW9uID0gZ2V0X2xhc3RfbmJfc2Vzc2lvbnMoMywgbGlzdF9tZXRlcnMpXG5jb25zdCBtaW51dGVzXzNfc2Vzc2lvbiA9IGdldF9sYXN0X25iX3Nlc3Npb25zKDMsIGxpc3RfbWludXRlcylcbmNvbnN0IGVsZXZhdGlvbl8zX3Nlc3Npb24gPSBnZXRfbGFzdF9uYl9zZXNzaW9ucygzLCBsaXN0X2VsZXZhdGlvbilcbmNvbnN0IGRhdGVfM19zZXNzaW9uID0gZ2V0X2xhc3RfbmJfc2Vzc2lvbnMoMywgbGlzdF9kYXRlKVxuXG5cblxuY29uc3QgYXZlcmFnZV8zX2Rpc3RhbmNlID0gYXZlcmFnZShkaXN0YW5jZV8zX3Nlc3Npb24pXG5jb25zdCBhdmVyYWdlXzNfZWxldmF0aW9uID0gYXZlcmFnZShlbGV2YXRpb25fM19zZXNzaW9uKVxuY29uc3QgYXZlcmFnZV8zX3NwZWVkID0gYXZlcmFnZShkaXZpZGV2ZWN0b3IoZGlzdGFuY2VfM19zZXNzaW9uICwgbWludXRlc18zX3Nlc3Npb24pKSAqIDYwLzEwMDAgIFxuXG5jb25zdCB2YXJpYXRpb25fM19kaXN0YW5jZSA9IHZhcmlhdGlvbihsYXN0X2Rpc3RhbmNlLCBhdmVyYWdlXzNfZGlzdGFuY2UpXG5jb25zdCB2YXJpYXRpb25fM19zcGVlZCA9IHZhcmlhdGlvbihsYXN0X3NwZWVkLCBhdmVyYWdlXzNfc3BlZWQpXG5jb25zdCB2YXJpYXRpb25fM19lbGV2YXRpb24gPSB2YXJpYXRpb24obGFzdF9lbGV2YXRpb24sIGF2ZXJhZ2VfM19lbGV2YXRpb24pXG5cbi8vIExhc3QgMTAgc2Vzc2lvbnNcbmNvbnN0IGRpc3RhbmNlXzEwX3Nlc3Npb24gPSBnZXRfbGFzdF9uYl9zZXNzaW9ucygxMCwgbGlzdF9tZXRlcnMpXG5jb25zdCBtaW51dGVzXzEwX3Nlc3Npb24gPSBnZXRfbGFzdF9uYl9zZXNzaW9ucygxMCwgbGlzdF9taW51dGVzKVxuY29uc3QgZWxldmF0aW9uXzEwX3Nlc3Npb24gPSBnZXRfbGFzdF9uYl9zZXNzaW9ucygxMCwgbGlzdF9lbGV2YXRpb24pXG5cbmNvbnN0IGF2ZXJhZ2VfMTBfZGlzdGFuY2UgPSBhdmVyYWdlKGRpc3RhbmNlXzEwX3Nlc3Npb24pXG5jb25zdCBhdmVyYWdlXzEwX2VsZXZhdGlvbiA9IGF2ZXJhZ2UoZWxldmF0aW9uXzEwX3Nlc3Npb24pXG5jb25zdCBhdmVyYWdlXzEwX3NwZWVkID0gYXZlcmFnZShkaXZpZGV2ZWN0b3IoZGlzdGFuY2VfMTBfc2Vzc2lvbiAsIG1pbnV0ZXNfMTBfc2Vzc2lvbikpICogNjAvMTAwMFxuXG5jb25zdCB2YXJpYXRpb25fMTBfZGlzdGFuY2UgPSB2YXJpYXRpb24obGFzdF9kaXN0YW5jZSwgYXZlcmFnZV8xMF9kaXN0YW5jZSlcbmNvbnN0IHZhcmlhdGlvbl8xMF9zcGVlZCA9IHZhcmlhdGlvbihsYXN0X3NwZWVkLCBhdmVyYWdlXzEwX3NwZWVkKVxuY29uc3QgdmFyaWF0aW9uXzEwX2VsZXZhdGlvbiA9IHZhcmlhdGlvbihsYXN0X2VsZXZhdGlvbiwgYXZlcmFnZV8xMF9lbGV2YXRpb24pXG5cbmNvbnN0IG5iX2Rpc3BsYXllZCA9IDNcblxuXG5cbjwvc2NyaXB0PlxuXG5cbjxzdHlsZT5cblxuPC9zdHlsZT5cblxuPGRpdiBjbGFzcz1cImZsZXggaC00OFwiPlxuICA8ZGl2IGNsYXNzPVwiZmxleC1pbml0aWFsIHctMi8zIHAtMlwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBwLTIgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCBiZy1ncmF5LTEwMFwiPlxuICAgIFJ1bm5pbmcgUGVyZm9ybWFuY2VcbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmbGV4LWluaXRpYWwgdy0xLzMgcC0yXCI+XG4gICAgPGRpdiBjbGFzcz1cIiB0ZXh0LXJpZ2h0IHAtMlwiPlxuICAgIDxpbWcgc3JjPVwicnVubmluZy5qcGdcIiBhbHQ9XCJydW5uaW5nXCI+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG5cblxuPGRpdiBjbGFzcz0ncHgtMTAnPlxuWW91ciBsYXN0IHNlc3Npb25zIHRvb2sgcGxhY2Ugb246IFxuICAgIDxsdT5cbiAgICB7I2VhY2ggZ2V0X2xhc3RfbmJfc2Vzc2lvbnMoMywgbGlzdF9kYXRlKSBhcyBkYXRlfVxuICAgIDxsaT57ZGF0ZX08L2xpPlxuICAgIHsvZWFjaH1cbiAgICA8L2x1PlxuPC9kaXY+XG5cblxuPGRpdiBjbGFzcz0ncC0xMCc+XG4gICAgPHRhYmxlIGNsYXNzPVwidGFibGUtYXV0byB0ZXh0LWNlbnRlciBcIj5cbiAgICA8dGhlYWQ+XG4gICAgICAgIDx0cj5cbiAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yXCI+TWV0cmljczwvdGg+XG4gICAgICAgIDx0aCBjbGFzcz1cInB4LTQgcHktMlwiPlZhbHVlPC90aD5cbiAgICAgICAgPHRoIGNvbHNwYW49MiBjbGFzcz1cInB4LTQgcHktMiBcIj52cy4gTGFzdCAzIHNlc3Npb25zPC90aD5cbiAgICAgICAgPHRoIGNvbHNwYW49MiBjbGFzcz1cInB4LTQgcHktMlwiPnZzLiBMYXN0IDEwIHNlc3Npb25zPC90aD5cbiAgICAgICAgPC90cj5cbiAgICA8L3RoZWFkPlxuICAgIDx0Ym9keT5cbiAgICAgICAgPHRyPlxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+RGlzdGFuY2UgKG0pPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntsYXN0X2Rpc3RhbmNlfTwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57cm91bmRfMl9kZWNpbWFsKGF2ZXJhZ2VfM19kaXN0YW5jZSl9PC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPnt2YXJpYXRpb25fM19kaXN0YW5jZX0lPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntyb3VuZF8yX2RlY2ltYWwoYXZlcmFnZV8xMF9kaXN0YW5jZSl9PC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPnt2YXJpYXRpb25fMTBfZGlzdGFuY2V9JTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0ciBjbGFzcz1cImJnLWdyYXktMTAwXCI+XG4gICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj5TcGVlZCAoa20vaCk8L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3JvdW5kXzJfZGVjaW1hbChsYXN0X3NwZWVkKX08L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3JvdW5kXzJfZGVjaW1hbChhdmVyYWdlXzNfc3BlZWQpfTwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57dmFyaWF0aW9uXzNfc3BlZWR9JTwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57cm91bmRfMl9kZWNpbWFsKGF2ZXJhZ2VfMTBfc3BlZWQpfTwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57dmFyaWF0aW9uXzEwX3NwZWVkfSU8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+XG4gICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj5FbGV2YXRpb248L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e2xhc3RfZWxldmF0aW9ufTwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57cm91bmRfMl9kZWNpbWFsKGF2ZXJhZ2VfM19lbGV2YXRpb24pfTwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57dmFyaWF0aW9uXzNfZWxldmF0aW9ufSU8L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3JvdW5kXzJfZGVjaW1hbChhdmVyYWdlXzEwX2VsZXZhdGlvbil9PC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPnt2YXJpYXRpb25fMTBfZWxldmF0aW9ufSU8L3RkPlxuIFxuICAgICAgICA8L3RyPlxuICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbjwvZGl2PlxuXG5cblxuPGRpdiBjbGFzcz0ncHgtMTAgcHktNSc+XG5HZXQgdGhlIGRhdGEgYXZhaWxhYmxlIGluIHRhYmxlXG5cbiAgICA8ZGl2IGNsYXNzPSdweS01Jz5cbiAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUtYXV0byB0ZXh0LWNlbnRlciBcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yXCI+RGF0ZTwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3M9XCJweC00IHB5LTJcIj5EaXN0YW5jZSAobSk8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yXCI+VGltZSAobWluKTwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3M9XCJweC00IHB5LTJcIj5TcGVlZCAoa20vaCk8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yXCI+RWxldmF0aW9uIChtKTwvdGg+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICBcbiAgICAgICAgICAgIHsjZWFjaCBkaXN0YW5jZV8zX3Nlc3Npb24gYXMgZGlzdGFuY2UsIGl9XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e2RhdGVfM19zZXNzaW9uW2ldfTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e2Rpc3RhbmNlfTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e21pbnV0ZXNfM19zZXNzaW9uW2ldfTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3JvdW5kXzJfZGVjaW1hbCgoZGlzdGFuY2UvMTAwMCkgLyAobWludXRlc18zX3Nlc3Npb25baV0vNjApKSB9PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57ZWxldmF0aW9uXzNfc2Vzc2lvbltpXX08L3RkPlxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG5cblxuPC9kaXY+XG5cblxuPGRpdiBjbGFzcz1cInB4LTEwIHB5LTVcIj5cblx0PGgzID5TZWUgeW91ciBldm9sdXRpb24gaW4gdGhpcyBjaGFydDo8L2gzPlxuICAgICA8Q2hhcnRzIHtkYXRhfSAvPiBcbjwvZGl2PlxuIC0tPlxuIiwiPGNhbnZhcyBpZD1cIm15Q2hhcnQxMFwiIHdpZHRoPVwiMlwiIGhlaWdodD1cIjFcIj48L2NhbnZhcz5cblxuPHNjcmlwdD5cbmltcG9ydCB7IG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlXCI7XG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzXCI7XG5leHBvcnQgbGV0IGRhdGFfcHVzaHVwc19yYWRhcjsgXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2hhcnQyKCl7XG4gIHZhciBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlDaGFydDEwJyk7XG4gICAgdmFyIG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICAgIHR5cGU6ICdyYWRhcicsXG4gICAgICAgIGRhdGE6IGRhdGFfcHVzaHVwc19yYWRhcixcblxuICAgIH0pO1xuICB9XG5vbk1vdW50KGNyZWF0ZUNoYXJ0Milcbjwvc2NyaXB0PlxuIiwiPGNhbnZhcyBpZD1cIm15Q2hhcnQxM1wiIHdpZHRoPVwiMlwiIGhlaWdodD1cIjFcIj48L2NhbnZhcz5cblxuPHNjcmlwdD5cbmltcG9ydCB7IG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlXCI7XG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzXCI7XG5leHBvcnQgbGV0IGRhdGFfb3RoZXJzX3JhZGFyOyBcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDaGFydDIoKXtcbiAgdmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUNoYXJ0MTMnKTtcbiAgICB2YXIgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcbiAgICAgICAgdHlwZTogJ3JhZGFyJyxcbiAgICAgICAgZGF0YTogZGF0YV9vdGhlcnNfcmFkYXIsXG5cbiAgICB9KTtcbiAgfVxub25Nb3VudChjcmVhdGVDaGFydDIpXG48L3NjcmlwdD5cbiIsIjxjYW52YXMgaWQ9XCJteUNoYXJ0MTRcIiB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIxXCI+PC9jYW52YXM+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBvbk1vdW50IH0gZnJvbSBcInN2ZWx0ZVwiO1xuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qc1wiO1xuZXhwb3J0IGxldCBkYXRhX2FiZG9taW5hbF9yYWRhcjsgXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2hhcnQyKCl7XG4gIHZhciBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlDaGFydDE0Jyk7XG4gICAgdmFyIG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICAgIHR5cGU6ICdyYWRhcicsXG4gICAgICAgIGRhdGE6IGRhdGFfYWJkb21pbmFsX3JhZGFyLFxuXG4gICAgfSk7XG4gIH1cbm9uTW91bnQoY3JlYXRlQ2hhcnQyKVxuPC9zY3JpcHQ+XG4iLCI8Y2FudmFzIGlkPVwibXlDaGFydDFcIiB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIxXCI+PC9jYW52YXM+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBvbk1vdW50IH0gZnJvbSBcInN2ZWx0ZVwiO1xuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qc1wiO1xuZXhwb3J0IGxldCBkYXRhX2xlZ19yYWRhcjsgXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2hhcnQyKCl7XG4gIHZhciBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlDaGFydDEnKTtcbiAgICB2YXIgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcbiAgICAgICAgdHlwZTogJ3JhZGFyJyxcbiAgICAgICAgZGF0YTogZGF0YV9sZWdfcmFkYXIsXG5cbiAgICB9KTtcbiAgfVxub25Nb3VudChjcmVhdGVDaGFydDIpXG48L3NjcmlwdD5cbiIsIjxjYW52YXMgaWQ9XCJteUNoYXJ0XCIgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiMVwiPjwvY2FudmFzPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gXCJzdmVsdGVcIjtcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanNcIjtcbmV4cG9ydCBsZXQgZGF0YTsgXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2hhcnQoKXtcbiAgdmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUNoYXJ0Jyk7XG4gICAgdmFyIG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICAgIHR5cGU6ICdiYXInLFxuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICAgICAgICB5QXhlczogXG4gICAgICAgICAgICAgICAgW3tcbiAgICAgICAgaWQ6ICdNZXRlcnMgY292ZXJlZCcsXG4gICAgICAgIHBvc2l0aW9uOiAnbGVmdCcsXG4gICAgICB9LCB7XG4gICAgICAgIGlkOiAnU3ByaW50JyxcbiAgICAgICAgcG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICAgICAgICAgICB9LFxuICAgICAgfV1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gIH1cbm9uTW91bnQoY3JlYXRlQ2hhcnQpXG48L3NjcmlwdD5cbiIsIlxuPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG5cdGV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zLCBxdWVyeSB9KSB7XG5cdFx0cmV0dXJuIHRoaXMuZmV0Y2goYHNwb3J0cy93b3Jrb3V0Lmpzb25gKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4oZGF0YV9yYXcgPT4ge1xuXHRcdFx0cmV0dXJuIHsgZGF0YV9yYXcgfTtcblx0XHR9KTtcblx0fVx0XG5cbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBDaGFydHNSYWRhckxlZyBmcm9tICcuL3dvcmtvdXRsZWdzLXJhZGFyLnN2ZWx0ZSdcbiAgICBpbXBvcnQgQ2hhcnRzUmFkYXJQdXNoVXBzIGZyb20gJy4vd29ya291dHB1c2h1cHMtcmFkYXIuc3ZlbHRlJ1xuICAgIGltcG9ydCBDaGFydHNSYWRhckFiZG9taW5hbHMgZnJvbSAnLi93b3Jrb3V0YWJkby1yYWRhci5zdmVsdGUnXG4gICAgaW1wb3J0IENoYXJ0c1JhZGFyT3RoZXJzIGZyb20gJy4vd29ya291dG90aGVycy1yYWRhci5zdmVsdGUnXG5cbiAgICBcbiAgICBleHBvcnQgbGV0IGRhdGFfcmF3XG4gICAgICAgIC8vIFNvcnQgbGlzdCBvZiBKc29uIGJ5IGRhdGVzIChjbG9zZXN0IGRhdGVzIHRvIGxhc3QgcG9zaXRpb25zKVxuICAgIGZ1bmN0aW9uIGN1c3RvbV9zb3J0KGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGEuZGF0ZSkuZ2V0VGltZSgpIC0gbmV3IERhdGUoYi5kYXRlKS5nZXRUaW1lKCk7XG4gICAgfVxuICAgIGRhdGFfcmF3ID0gZGF0YV9yYXcuc29ydChjdXN0b21fc29ydClcbiAgICBcbiAgICBjb25zdCB3b3Jrb3V0X2V4ZXJjaXNlID0gW1xuICAgIHsnbmFtZSc6ICdTcXVhdHMnLCAnZmVhdHVyZXMnIDogWydTZXJpZXMnLCAnTnVtYmVyJ10sICdncm91cCcgOiAnTGVncyd9LFxuICAgIHsnbmFtZSc6ICdTdGFpciBDbGltYnMnLCAnZmVhdHVyZXMnIDogWydTZXJpZXMnLCAnTnVtYmVyJ10sICdncm91cCcgOiAnTGVncyd9LFxuICAgIHsnbmFtZSc6ICdCZW5jaCBDbGltYnMnLCAnZmVhdHVyZXMnIDogWydTZXJpZXMnLCAnTnVtYmVyJ10sICdncm91cCcgOiAnTGVncyd9LFxuICAgIHsnbmFtZSc6ICdMZWcgUHJlc3MnLCAnZmVhdHVyZXMnIDogWydTZXJpZXMnLCAnTnVtYmVyJ10sICdncm91cCcgOiAnTGVncyd9LFxuICAgIFxuICAgIHsnbmFtZSc6ICdQdXNoLVVwcycsJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCdncm91cCcgOiAnUHVzaC1VcHMnfSxcbiAgICB7J25hbWUnOiAnTGF0ZXJhbCBQdXNoLVVwcycsJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCAnZ3JvdXAnIDogJ1B1c2gtVXBzJ30sXG4gICAgeyduYW1lJzogJ0p1bXBpbmcgUHVzaC1VcHMnLCdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwgJ2dyb3VwJyA6ICdQdXNoLVVwcyd9LFxuICAgIHsnbmFtZSc6ICdDbG9zZSBQdXNoLVVwcycsJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCAnZ3JvdXAnIDogJ1B1c2gtVXBzJ30sXG4gICAgeyduYW1lJzogJ1JhaXNlZCBQdXNoLVVwcycsJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCAnZ3JvdXAnIDogJ1B1c2gtVXBzJ30sXG5cbiAgICB7J25hbWUnOiAnQWJkb21pbmFsJywnZmVhdHVyZXMnIDogWydTZXJpZXMnLCAnTnVtYmVyJ10sICdncm91cCcgOiAnQWJkb21pbmFscyd9LFxuICAgIHsnbmFtZSc6ICdBYmRvbWluYWwgTGF0ZXJhbCcsJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCAnZ3JvdXAnIDogJ0FiZG9taW5hbHMnfSxcbiAgICB7J25hbWUnOiAnQ29yZSBBYmRvbWluYWwnLCdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwgJ2dyb3VwJyA6ICdBYmRvbWluYWxzJ30sXG4gICAgXG4gICAgXG4gICAgeyduYW1lJzogJ0JlbmNoJywgJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCAnZ3JvdXAnIDogJ1dlaWdodCd9LFxuICAgIHsnbmFtZSc6ICdCaWNlcHMgV2VpZ2h0JywgJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCdncm91cCcgOiAnV2VpZ2h0J30sXG4gICAgeyduYW1lJzogJ1B1bGwtVXBzJywgJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCdncm91cCcgOiAnUHVsbC1VcHMnfSxcbiAgICBdXG5cblxuICAgIGNvbnN0IGdyb3VwX2xpc3QgPSB7J0xlZ3MnOiBbJ1NxdWF0cycsICdTdGFpciBDbGltYnMnLCAnQmVuY2ggQ2xpbWJzJywgJ0xlZyBQcmVzcyddLFxuICAgICdQdXNoLVVwcycgOiBbJ1B1c2gtVXBzJywgJ0xhdGVyYWwgUHVzaC1VcHMnLCAnSnVtcGluZyBQdXNoLVVwcycsICdDbG9zZSBQdXNoLVVwcycsICdSYWlzZWQgUHVzaC1VcHMnXSxcbiAgICAnQWJkb21pbmFscyc6IFsnQWJkb21pbmFsJywgJ0FiZG9taW5hbCBMYXRlcmFsJywgJ0NvcmUgQWJkb21pbmFsJ10sXG4gICAgJ090aGVycyc6IFsnQmVuY2gnLCAnQmljZXBzIFdlaWdodCcsICdQdWxsLVVwcyddfVxuICAgIFxuICAgIGZ1bmN0aW9uIHB1c2hfc2VyaWVzKHgsIGV4ZXJjaXNlKXtcbiAgICAgICAgaWYgKGV4ZXJjaXNlIGluIHgpe1xuICAgICAgICAgICAgcmV0dXJuIHhbZXhlcmNpc2VdWydTZXJpZXMnXSAqIHhbZXhlcmNpc2VdWydOdW1iZXInXVxuICAgICAgICB9IGVsc2UgcmV0dXJuIDBcbiAgICB9XG4gICAgZnVuY3Rpb24gbGFzdF9lbGVtZW50KGxpc3Qpe1xuICAgICAgICByZXR1cm4gbGlzdFtsaXN0Lmxlbmd0aC0xXVxuICAgIH1cbiAgICBmdW5jdGlvbiBhdmVyYWdlX3BlcmYobGlzdDEsIGxpc3QyKXtcbiAgICAgICAgbGV0IGNvdW50ID0gMFxuICAgICAgICBsZXQgbGVuZ3RoID0gMFxuICAgICAgICBmb3IgKGxldCBpIGluIGxpc3QxKXtcbiAgICAgICAgICAgIGlmIChsaXN0MltpXSA+MCApe1xuICAgICAgICAgICAgICAgIGNvdW50ICs9IGxpc3QxW2ldL2xpc3QyW2ldXG4gICAgICAgICAgICAgICAgbGVuZ3RoICs9MVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3VudC9sZW5ndGggKjEwMFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJvdW5kXzFfZGVjaW1hbChmbG9hdCl7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKGZsb2F0ICogMTApIC8xMFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1lYW5fbGlzdF9ub3RudWxsKGxpc3Qpe1xuICAgICAgICBsZXQgY291bnQgPSAwXG4gICAgICAgIGxldCBsZW5ndGggPSAwXG4gICAgICAgIGxpc3QuZm9yRWFjaChlbGVtID0+IHsgXG4gICAgICAgICAgICBpZiAoZWxlbSA+IDApe1xuICAgICAgICAgICAgICAgIGNvdW50ICs9IGVsZW1cbiAgICAgICAgICAgICAgICBsZW5ndGggKz0gMVxuICAgICAgICAgICAgfX0pXG4gICAgICAgIHJldHVybiBjb3VudCAvIGxlbmd0aFxuICAgIH1cbmZ1bmN0aW9uIGdldF9sYXN0X25iX3Nlc3Npb25zKGludCwgbGlzdCl7XG4gICAgcmV0dXJuIGxpc3Quc2xpY2UoTWF0aC5tYXgobGlzdC5sZW5ndGggLSBpbnQsIDApKVxufVxuXG4gICAgLy8gTEVHUyA6IFxuICAgIGxldCBzcXVhdHMgPSBbXVxuICAgIGxldCBzdGFpcl9jbGltYnMgPSBbXVxuICAgIGxldCBiZW5jaF9jbGltYnMgPSBbXVxuICAgIGxldCBsZWdfcHJlc3MgPSBbXVxuICAgIGxldCBsaXN0X2RhdGUgPSBbXVxuXG4gICAgZGF0YV9yYXcuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgbGlzdF9kYXRlLnB1c2goeFsnZGF0ZSddKVxuICAgICAgICBcbiAgICAgICAgc3F1YXRzLnB1c2gocHVzaF9zZXJpZXMoeCwgJ1NxdWF0cycpKVxuICAgICAgICBzdGFpcl9jbGltYnMucHVzaChwdXNoX3Nlcmllcyh4LCAnU3RhaXIgQ2xpbWJzJykpXG4gICAgICAgIGJlbmNoX2NsaW1icy5wdXNoKHB1c2hfc2VyaWVzKHgsICdCZW5jaCBDbGltYnMnKSlcbiAgICAgICAgbGVnX3ByZXNzLnB1c2gocHVzaF9zZXJpZXMoeCwgJ0xlZyBQcmVzcycpKVxuICAgICAgICBcbiAgICB9KVxuXG4gICAgbGV0IGxhc3RfbGVncyA9IFtsYXN0X2VsZW1lbnQoc3F1YXRzKSxcbiAgICBsYXN0X2VsZW1lbnQoc3RhaXJfY2xpbWJzKSwgXG4gICAgbGFzdF9lbGVtZW50KGJlbmNoX2NsaW1icyksIFxuICAgIGxhc3RfZWxlbWVudChsZWdfcHJlc3MpXVxuXG4gICAgbGV0IG1lYW5fbGVncyA9IFttZWFuX2xpc3Rfbm90bnVsbChzcXVhdHMpLFxuICAgIG1lYW5fbGlzdF9ub3RudWxsKHN0YWlyX2NsaW1icyksIFxuICAgIG1lYW5fbGlzdF9ub3RudWxsKGJlbmNoX2NsaW1icyksIFxuICAgIG1lYW5fbGlzdF9ub3RudWxsKGxlZ19wcmVzcyldXG5cbiAgICAgZXhwb3J0IGNvbnN0IGRhdGFfbGVnX3JhZGFyID0ge1xuICAgIGxhYmVsczogZ3JvdXBfbGlzdFsnTGVncyddLFxuICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICBsYWJlbDogJ0xhc3Qgc2Vzc2lvbicsXG4gICAgICAgIGRhdGE6bGFzdF9sZWdzLFxuICAgIH0sIFxuICAgIHtcbiAgICAgICAgbGFiZWw6ICdBdmVyYWdlIHNlc3Npb24nLFxuICAgICAgICBkYXRhOm1lYW5fbGVncyxcbiAgICB9XG4gICAgXX1cblxuICAgIGxldCBsZWdfZ2xvYmFsX2luZGljYXRvciA9IHJvdW5kXzFfZGVjaW1hbChhdmVyYWdlX3BlcmYobGFzdF9sZWdzLCBtZWFuX2xlZ3MpKVxuXG4gICAgbGV0IHB1c2h1cHMgPSBbXVxuICAgIGxldCBwdXNodXBzX2xhdGVyYWwgPSBbXVxuICAgIGxldCBwdXNodXBzX2p1bXBpbmcgPSBbXVxuICAgIGxldCBwdXNodXBzX2Nsb3NlID0gW11cbiAgICBsZXQgcmFpc2VkX3B1c2h1cHMgPSBbXVxuXG4gICAgZGF0YV9yYXcuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgcHVzaHVwcy5wdXNoKHB1c2hfc2VyaWVzKHgsICdQdXNoLVVwcycpKVxuICAgICAgICBwdXNodXBzX2xhdGVyYWwucHVzaChwdXNoX3Nlcmllcyh4LCAnTGF0ZXJhbCBQdXNoLVVwcycpKVxuICAgICAgICBwdXNodXBzX2p1bXBpbmcucHVzaChwdXNoX3Nlcmllcyh4LCAnSnVtcGluZyBQdXNoLVVwcycpKVxuICAgICAgICBwdXNodXBzX2Nsb3NlLnB1c2gocHVzaF9zZXJpZXMoeCwgJ0Nsb3NlIFB1c2gtVXBzJykpXG4gICAgICAgIHJhaXNlZF9wdXNodXBzLnB1c2gocHVzaF9zZXJpZXMoeCwgJ1JhaXNlZCBQdXNoLVVwcycpKVxuICAgIH0pXG5cbiAgICBsZXQgbGFzdF9wdXNodXBzID0gW2xhc3RfZWxlbWVudChwdXNodXBzKSxcbiAgICBsYXN0X2VsZW1lbnQocHVzaHVwc19sYXRlcmFsKSwgXG4gICAgbGFzdF9lbGVtZW50KHB1c2h1cHNfanVtcGluZyksIFxuICAgIGxhc3RfZWxlbWVudChwdXNodXBzX2Nsb3NlKSxcbiAgICBsYXN0X2VsZW1lbnQocmFpc2VkX3B1c2h1cHMpLFxuICAgIF1cblxuICAgIGxldCBtZWFuX3B1c2h1cHMgPSBbbWVhbl9saXN0X25vdG51bGwocHVzaHVwcyksXG4gICAgbWVhbl9saXN0X25vdG51bGwocHVzaHVwc19sYXRlcmFsKSwgXG4gICAgbWVhbl9saXN0X25vdG51bGwocHVzaHVwc19qdW1waW5nKSwgXG4gICAgbWVhbl9saXN0X25vdG51bGwocHVzaHVwc19jbG9zZSksXG4gICAgbWVhbl9saXN0X25vdG51bGwocmFpc2VkX3B1c2h1cHMpXVxuXG4gICAgIGV4cG9ydCBjb25zdCBkYXRhX3B1c2h1cHNfcmFkYXIgPSB7XG4gICAgbGFiZWxzOiBncm91cF9saXN0WydQdXNoLVVwcyddLFxuICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICBsYWJlbDogJ0xhc3Qgc2Vzc2lvbicsXG4gICAgICAgIGRhdGE6bGFzdF9wdXNodXBzLFxuICAgIH0sIFxuICAgIHtcbiAgICAgICAgbGFiZWw6ICdBdmVyYWdlIHNlc3Npb24nLFxuICAgICAgICBkYXRhOm1lYW5fcHVzaHVwcyxcbiAgICB9XG4gICAgXX1cblxuICAgIGxldCBwdXNodXBzX2dsb2JhbF9pbmRpY2F0b3IgPSByb3VuZF8xX2RlY2ltYWwoYXZlcmFnZV9wZXJmKGxhc3RfcHVzaHVwcywgbWVhbl9wdXNodXBzKSlcblxuICAgIGxldCBhYmRvbWluYWwgPSBbXVxuICAgIGxldCBhYmRvbWluYWxfbGF0ZXJhbCA9IFtdXG4gICAgbGV0IGFiZG9taW5hbF9jb3JlID0gW11cblxuICAgIGRhdGFfcmF3LmZvckVhY2goeCA9PiB7XG4gICAgICAgIGFiZG9taW5hbC5wdXNoKHB1c2hfc2VyaWVzKHgsICdBYmRvbWluYWwnKSlcbiAgICAgICAgYWJkb21pbmFsX2xhdGVyYWwucHVzaChwdXNoX3Nlcmllcyh4LCAnQWJkb21pbmFsIExhdGVyYWwnKSlcbiAgICAgICAgYWJkb21pbmFsX2NvcmUucHVzaChwdXNoX3Nlcmllcyh4LCAnQ29yZSBBYmRvbWluYWwnKSlcbiAgICB9KVxuXG4gICAgbGV0IGxhc3RfYWJkb21pbmFsID0gW2xhc3RfZWxlbWVudChhYmRvbWluYWwpLFxuICAgIGxhc3RfZWxlbWVudChhYmRvbWluYWxfbGF0ZXJhbCksIFxuICAgIGxhc3RfZWxlbWVudChhYmRvbWluYWxfY29yZSksIFxuICAgIF1cblxuICAgIGxldCBtZWFuX2FiZG9taW5hbCA9IFttZWFuX2xpc3Rfbm90bnVsbChhYmRvbWluYWwpLFxuICAgIG1lYW5fbGlzdF9ub3RudWxsKGFiZG9taW5hbF9sYXRlcmFsKSwgXG4gICAgbWVhbl9saXN0X25vdG51bGwoYWJkb21pbmFsX2NvcmUpLCBcbiAgICBdXG5cbiAgICAgZXhwb3J0IGNvbnN0IGRhdGFfYWJkb21pbmFsX3JhZGFyID0ge1xuICAgIGxhYmVsczogZ3JvdXBfbGlzdFsnQWJkb21pbmFscyddLFxuICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICBsYWJlbDogJ0xhc3Qgc2Vzc2lvbicsXG4gICAgICAgIGRhdGE6bGFzdF9hYmRvbWluYWwsXG4gICAgfSwgXG4gICAge1xuICAgICAgICBsYWJlbDogJ0F2ZXJhZ2Ugc2Vzc2lvbicsXG4gICAgICAgIGRhdGE6bWVhbl9hYmRvbWluYWwsXG4gICAgfVxuICAgIF19XG5cbiAgICBsZXQgYWJkb21pbmFsX2dsb2JhbF9pbmRpY2F0b3IgPSByb3VuZF8xX2RlY2ltYWwoYXZlcmFnZV9wZXJmKGxhc3RfYWJkb21pbmFsLCBtZWFuX2FiZG9taW5hbCkpXG5cblxuICAgIC8vIE90aGVycyA6IFxuICAgIC8vWydCZW5jaCcsICdCaWNlcHMgV2VpZ2h0JywgJ1B1bGwtVXBzJ11cblxuICAgIGxldCBiZW5jaCA9IFtdXG4gICAgbGV0IGJpY2Vwc193ZWlnaHQgPSBbXVxuICAgIGxldCBwdWxsdXBzID0gW11cblxuICAgIGRhdGFfcmF3LmZvckVhY2goeCA9PiB7XG4gICAgICAgIGJlbmNoLnB1c2gocHVzaF9zZXJpZXMoeCwgJ0JlbmNoJykpXG4gICAgICAgIGJpY2Vwc193ZWlnaHQucHVzaChwdXNoX3Nlcmllcyh4LCAnQmljZXBzIFdlaWdodCcpKVxuICAgICAgICBwdWxsdXBzLnB1c2gocHVzaF9zZXJpZXMoeCwgJ1B1bGwtVXBzJykpXG4gICAgfSlcblxuICAgIGxldCBsYXN0X290aGVycyA9IFtsYXN0X2VsZW1lbnQoYmVuY2gpLFxuICAgIGxhc3RfZWxlbWVudChiaWNlcHNfd2VpZ2h0KSwgXG4gICAgbGFzdF9lbGVtZW50KHB1bGx1cHMpLCBcbiAgICBdXG5cbiAgICBsZXQgbWVhbl9vdGhlcnMgPSBbbWVhbl9saXN0X25vdG51bGwoYmVuY2gpLFxuICAgIG1lYW5fbGlzdF9ub3RudWxsKGJpY2Vwc193ZWlnaHQpLCBcbiAgICBtZWFuX2xpc3Rfbm90bnVsbChwdWxsdXBzKSwgXG4gICAgXVxuXG4gICAgIGV4cG9ydCBjb25zdCBkYXRhX290aGVyc19yYWRhciA9IHtcbiAgICBsYWJlbHM6IGdyb3VwX2xpc3RbJ090aGVycyddLFxuICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICBsYWJlbDogJ0xhc3Qgc2Vzc2lvbicsXG4gICAgICAgIGRhdGE6bGFzdF9vdGhlcnMsfSwgXG4gICAge1xuICAgICAgICBsYWJlbDogJ0F2ZXJhZ2Ugc2Vzc2lvbicsXG4gICAgICAgIGRhdGE6bWVhbl9vdGhlcnMsXG4gICAgfV19XG5cbiAgICBsZXQgb3RoZXJzX2dsb2JhbF9pbmRpY2F0b3IgPSByb3VuZF8xX2RlY2ltYWwoYXZlcmFnZV9wZXJmKGxhc3Rfb3RoZXJzLCBtZWFuX290aGVycykpXG5cblxuXG5cblxuXG5cbjwvc2NyaXB0PiBcblxuXG5cblxuPGRpdiBjbGFzcz1cIm1iLTIwXCI+XG4gICAgPGRpdiBjbGFzcz1cIm1iLTYgc2hhZG93IFwiPlxuICAgICAgICA8aW1nIHNyYz1cIndvcmtvdXQyLmpwZ1wiIGFsdD1cImN5Y2xpbmdcIiBjbGFzcz1cIm9iamVjdC1jb3ZlciBoLTQ4IHctZnVsbCBzaGFkb3cgcm91bmRlZC1tZFwiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIG1iLTE2IGJnLWJsdWUtNzAwIGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCBzaGFkb3ctbGcgcm91bmRlZC10LW1kXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb250LXNhbnMgQXJpYWwgdGV4dC1jZW50ZXIgcC0yIHRleHQtM3hsIHRleHQtYmx1ZS03MDAgZm9udC1zZW1pYm9sZCBiZy1ibHVlLTEwMCBweC04IHRyYWNraW5nLXdpZGVzdFwiPlxuICAgICAgICBXb3Jrb3V0IFBlcmZvcm1hbmNlXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPGRpdiBjbGFzcz0ncC04Jz5cbiAgICA8ZGl2IGNsYXNzPSdwYi04Jz5cbiAgICAgICAgPGgxIGNsYXNzPVwidGV4dC1ibHVlLTgwMCAgbWItOCBcIj5MYXN0IFNlc3Npb25zPC9oMT5cbiAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGFsaWMgZ3JpZCBncmlkLWNvbHMtMyBkaXZpZGUteCBkaXZpZGUtZ3JheS00MDBcIj5cbiAgICAgICAgICAgIHsjZWFjaCBnZXRfbGFzdF9uYl9zZXNzaW9ucygzLCBsaXN0X2RhdGUpIGFzIGRhdGV9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj57ZGF0ZX08L2Rpdj5cbiAgICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZGl2aWRlLXkgbXQtMTZcIj5cbiAgICAgICBcbiAgICAgICBcbiAgICAgICAgPGgxIGNsYXNzPVwidGV4dC1ibHVlLTgwMFwiPlxuICAgICAgICBMZWdzXG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgPGRpdiBjbGFzcz0nbS0xMiBjb250YWluZXIgbXgtYXV0byc+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZS1hdXRvIHRleHQtY2VudGVyIGNvbnRhaW5lciBteC1hdXRvXCI+XG4gICAgICAgICAgICA8Y2FwdGlvbiBjbGFzcz1cImZvbnQtc2VtaWJvbGQgbWItNiBtdC04IHRleHQteGwgaXRhbGljIHRleHQtYmx1ZS03MDBcIj5EYXRhIGZvciBsZWdzPC9jYXB0aW9uPlxuICAgICAgICAgICAgPHRoZWFkIGNsYXNzPVwiYm9yZGVyLWdyYXktMzAwIGl0YWxpY1wiPlxuICAgICAgICAgICAgPHRyIGNsYXNzPVwiYmctYmx1ZS0yMDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtMiBweS0yXCI+PC90aD5cbiAgICAgICAgICAgIDx0aCBjb2xzcGFuPTIgY2xhc3M9XCJweC0yIHB5LTJcIj5TcXVhdHMgPC90aD5cbiAgICAgICAgICAgIDx0aCBjb2xzcGFuPTIgY2xhc3M9XCJweC0yIHB5LTJcIj5TdGFpciBDbGltYnM8L3RoPlxuICAgICAgICAgICAgPHRoIGNvbHNwYW49MiBjbGFzcz1cInB4LTIgcHktMlwiPkJlbmNoIENsaW1iczwvdGg+XG4gICAgICAgICAgICA8dGggY29sc3Bhbj0yIGNsYXNzPVwicHgtMiBweS0yXCI+TGVnIFByZXNzPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHIgY2xhc3M9XCJiZy1ibHVlLTEwMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwXCI+XG4gICAgICAgICAgICA8dGggY2xhc3M9XCJweC0yIHB5LTJcIj5EYXRlPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTIgcHktMlwiPlNlcmllcyA8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtMiBweS0yXCI+UmVwZXQuIDwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3M9XCJweC0yIHB5LTJcIj5TZXJpZXMgPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTIgcHktMlwiPlJlcGV0LiA8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtMiBweS0yXCI+U2VyaWVzIDwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3M9XCJweC0yIHB5LTJcIj5SZXBldC4gPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTIgcHktMlwiPlNlcmllcyA8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtMiBweS0yXCI+UmVwZXQuIDwvdGg+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICBcbiAgICAgICAgICAgIHsjZWFjaCBkYXRhX3JhdyBhcyBkYXRhfVxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTIgcHktMlwiPntkYXRhWydkYXRlJ119PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC0yIHB5LTJcIj57ZGF0YVsnU3F1YXRzJ11bJ1NlcmllcyddfTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtMiBweS0yXCI+e2RhdGFbJ1NxdWF0cyddWydOdW1iZXInXX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTIgcHktMlwiPntkYXRhWydTdGFpciBDbGltYnMnXVsnU2VyaWVzJ119PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC0yIHB5LTJcIj57ZGF0YVsnU3RhaXIgQ2xpbWJzJ11bJ051bWJlciddfTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtMiBweS0yXCI+e2RhdGFbJ0JlbmNoIENsaW1icyddWydTZXJpZXMnXX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTIgcHktMlwiPntkYXRhWydCZW5jaCBDbGltYnMnXVsnTnVtYmVyJ119PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC0yIHB5LTJcIj57ZGF0YVsnTGVnIFByZXNzJ11bJ1NlcmllcyddfTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtMiBweS0yXCI+e2RhdGFbJ0xlZyBQcmVzcyddWydOdW1iZXInXX08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuXG5Zb3VyIGxhc3Qgc2Vzc2lvbiB3YXMge2xlZ19nbG9iYWxfaW5kaWNhdG9yfSAlIG9mIHRoZSBhdmVyYWdlIG9mIHRoZSBzZXNzaW9ucyB3aGVyZSB5b3Ugd29ya2VkIG9uIGxlZ3NcblxuICAgIDxkaXYgY2xhc3M9XCJtdC04ICBtLTEyICBcIj5cbiAgICAgICAgICAgIDxjYXB0aW9uIGNsYXNzPVwidGV4dC1jZW50ZXIgY29udGFpbmVyIG14LWF1dG8gZm9udC1zZW1pYm9sZCBtYi02IG10LTggdGV4dC14bCBpdGFsaWMgdGV4dC1ibHVlLTcwMFwiPlBlcmZvcm1hbmNlIFJhZGFyIENoYXJ0PC9jYXB0aW9uPlxuICAgICAgICAgICAgPENoYXJ0c1JhZGFyTGVnIHtkYXRhX2xlZ19yYWRhcn0gLz4gXG4gICAgICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImRpdmlkZS15IG10LTE2XCI+XG4gICAgICAgXG4gICAgICAgXG4gICAgICAgIDxoMSBjbGFzcz1cInRleHQtYmx1ZS04MDBcIj5cbiAgICAgICAgUHVzaC1VcHNcbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8ZGl2IGNsYXNzPSdtLTEyIGNvbnRhaW5lciBteC1hdXRvJz5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlLWF1dG8gdGV4dC1jZW50ZXIgY29udGFpbmVyIG14LWF1dG9cIj5cbiAgICAgICAgICAgIDxjYXB0aW9uIGNsYXNzPVwiZm9udC1zZW1pYm9sZCBtYi02IG10LTggdGV4dC14bCBpdGFsaWMgdGV4dC1ibHVlLTcwMFwiPkRhdGEgZm9yIFB1c2gtdXBzPC9jYXB0aW9uPlxuICAgICAgICAgICAgPHRoZWFkIGNsYXNzPVwiYm9yZGVyLWdyYXktMzAwIGl0YWxpY1wiPlxuICAgICAgICAgICAgPHRyIGNsYXNzPVwiYmctYmx1ZS0yMDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtMiBweS0yXCI+PC90aD5cbiAgICAgICAgICAgIDx0aCBjb2xzcGFuPTIgY2xhc3M9XCJweC0yIHB5LTJcIj5SZWd1bGFyIDwvdGg+XG4gICAgICAgICAgICA8dGggY29sc3Bhbj0yIGNsYXNzPVwicHgtMiBweS0yXCI+TGF0ZXJhbDwvdGg+XG4gICAgICAgICAgICA8dGggY29sc3Bhbj0yIGNsYXNzPVwicHgtMiBweS0yXCI+SnVtcGluZzwvdGg+XG4gICAgICAgICAgICA8dGggY29sc3Bhbj0yIGNsYXNzPVwicHgtMiBweS0yXCI+Q2xvc2U8L3RoPlxuICAgICAgICAgICAgPHRoIGNvbHNwYW49MiBjbGFzcz1cInB4LTIgcHktMlwiPlJhaXNlZDwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyIGNsYXNzPVwiYmctYmx1ZS0xMDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtMiBweS0yXCI+RGF0ZTwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3M9XCJweC0yIHB5LTJcIj5TZXJpZXMgPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTIgcHktMlwiPlJlcGV0LiA8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtMiBweS0yXCI+U2VyaWVzIDwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3M9XCJweC0yIHB5LTJcIj5SZXBldC4gPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTIgcHktMlwiPlNlcmllcyA8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtMiBweS0yXCI+UmVwZXQuIDwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3M9XCJweC0yIHB5LTJcIj5TZXJpZXMgPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTIgcHktMlwiPlJlcGV0LiA8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtMiBweS0yXCI+U2VyaWVzIDwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3M9XCJweC0yIHB5LTJcIj5SZXBldC4gPC90aD5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cblxuICAgICAgICA8dGJvZHk+XG4gICAgICAgIFxuICAgICAgICAgICAgeyNlYWNoIGRhdGFfcmF3IGFzIGRhdGF9XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtMiBweS0yXCI+e2RhdGFbJ2RhdGUnXX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTIgcHktMlwiPntkYXRhWydQdXNoLVVwcyddWydTZXJpZXMnXX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTIgcHktMlwiPntkYXRhWydQdXNoLVVwcyddWydOdW1iZXInXX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTIgcHktMlwiPntkYXRhWydMYXRlcmFsIFB1c2gtVXBzJ11bJ1NlcmllcyddfTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtMiBweS0yXCI+e2RhdGFbJ0xhdGVyYWwgUHVzaC1VcHMnXVsnTnVtYmVyJ119PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC0yIHB5LTJcIj57ZGF0YVsnSnVtcGluZyBQdXNoLVVwcyddWydTZXJpZXMnXX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTIgcHktMlwiPntkYXRhWydKdW1waW5nIFB1c2gtVXBzJ11bJ051bWJlciddfTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtMiBweS0yXCI+e2RhdGFbJ0Nsb3NlIFB1c2gtVXBzJ11bJ1NlcmllcyddfTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtMiBweS0yXCI+e2RhdGFbJ0Nsb3NlIFB1c2gtVXBzJ11bJ051bWJlciddfTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtMiBweS0yXCI+e2RhdGFbJ1JhaXNlZCBQdXNoLVVwcyddWydTZXJpZXMnXX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTIgcHktMlwiPntkYXRhWydSYWlzZWQgUHVzaC1VcHMnXVsnTnVtYmVyJ119PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG48L2Rpdj5cblxuWW91ciBsYXN0IHNlc3Npb24gd2FzIHtwdXNodXBzX2dsb2JhbF9pbmRpY2F0b3J9ICUgb2YgdGhlIGF2ZXJhZ2Ugb2YgdGhlIHNlc3Npb25zIHdoZXJlIHlvdSB3b3JrZWQgb24gbGVnc1xuXG4gICAgPGRpdiBjbGFzcz1cIm10LTggIG0tMTIgIFwiPlxuICAgICAgICAgICAgPGNhcHRpb24gY2xhc3M9XCJ0ZXh0LWNlbnRlciBjb250YWluZXIgbXgtYXV0byBmb250LXNlbWlib2xkIG1iLTYgbXQtOCB0ZXh0LXhsIGl0YWxpYyB0ZXh0LWJsdWUtNzAwXCI+UGVyZm9ybWFuY2UgUmFkYXIgQ2hhcnQ8L2NhcHRpb24+XG48Q2hhcnRzUmFkYXJQdXNoVXBzIHtkYXRhX3B1c2h1cHNfcmFkYXJ9IC8+IFxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgPGRpdiBjbGFzcz1cImRpdmlkZS15IG10LTE2XCI+XG4gICAgICAgXG4gICAgICAgXG4gICAgICAgIDxoMSBjbGFzcz1cInRleHQtYmx1ZS04MDBcIj5cbiAgICAgICAgQWJkb21pbmFsc1xuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9J20tMTIgY29udGFpbmVyIG14LWF1dG8nPlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUtYXV0byB0ZXh0LWNlbnRlciBjb250YWluZXIgbXgtYXV0b1wiPlxuICAgICAgICAgICAgPGNhcHRpb24gY2xhc3M9XCJmb250LXNlbWlib2xkIG1iLTYgbXQtOCB0ZXh0LXhsIGl0YWxpYyB0ZXh0LWJsdWUtNzAwXCI+RGF0YSBmb3IgQWJkb21pbmFsczwvY2FwdGlvbj5cbiAgICAgICAgICAgIDx0aGVhZCBjbGFzcz1cImJvcmRlci1ncmF5LTMwMCBpdGFsaWNcIj5cbiAgICAgICAgICAgIDx0ciBjbGFzcz1cImJnLWJsdWUtMjAwIGJvcmRlciBib3JkZXItZ3JheS0zMDBcIj5cbiAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTIgcHktMlwiPjwvdGg+XG4gICAgICAgICAgICA8dGggY29sc3Bhbj0yIGNsYXNzPVwicHgtMiBweS0yXCI+UmVndWxhciA8L3RoPlxuICAgICAgICAgICAgPHRoIGNvbHNwYW49MiBjbGFzcz1cInB4LTIgcHktMlwiPkxhdGVyYWw8L3RoPlxuICAgICAgICAgICAgPHRoIGNvbHNwYW49MiBjbGFzcz1cInB4LTIgcHktMlwiPkNvcmU8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0ciBjbGFzcz1cImJnLWJsdWUtMTAwIGJvcmRlciBib3JkZXItZ3JheS0zMDBcIj5cbiAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTIgcHktMlwiPkRhdGU8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtMiBweS0yXCI+U2VyaWVzIDwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3M9XCJweC0yIHB5LTJcIj5SZXBldC4gPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTIgcHktMlwiPlNlcmllcyA8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtMiBweS0yXCI+UmVwZXQuIDwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3M9XCJweC0yIHB5LTJcIj5TZXJpZXMgPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTIgcHktMlwiPlJlcGV0LiA8L3RoPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuXG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgXG4gICAgICAgICAgICB7I2VhY2ggZGF0YV9yYXcgYXMgZGF0YX1cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC0yIHB5LTJcIj57ZGF0YVsnZGF0ZSddfTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtMiBweS0yXCI+e2RhdGFbJ0FiZG9taW5hbCddWydTZXJpZXMnXX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTIgcHktMlwiPntkYXRhWydBYmRvbWluYWwnXVsnTnVtYmVyJ119PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC0yIHB5LTJcIj57ZGF0YVsnQWJkb21pbmFsIExhdGVyYWwnXVsnU2VyaWVzJ119PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC0yIHB5LTJcIj57ZGF0YVsnQWJkb21pbmFsIExhdGVyYWwnXVsnTnVtYmVyJ119PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC0yIHB5LTJcIj57ZGF0YVsnQ29yZSBBYmRvbWluYWwnXVsnU2VyaWVzJ119PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC0yIHB5LTJcIj57ZGF0YVsnQ29yZSBBYmRvbWluYWwnXVsnTnVtYmVyJ119PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG48L2Rpdj5cblxuWW91ciBsYXN0IHNlc3Npb24gd2FzIHthYmRvbWluYWxfZ2xvYmFsX2luZGljYXRvcn0gJSBvZiB0aGUgYXZlcmFnZSBvZiB0aGUgc2Vzc2lvbnMgd2hlcmUgeW91IHdvcmtlZCBvbiBhYmRvbWluYWxzXG5cbiAgICA8ZGl2IGNsYXNzPVwibXQtOCAgbS0xMiAgXCI+XG4gICAgICAgICAgICA8Y2FwdGlvbiBjbGFzcz1cInRleHQtY2VudGVyIGNvbnRhaW5lciBteC1hdXRvIGZvbnQtc2VtaWJvbGQgbWItNiBtdC04IHRleHQteGwgaXRhbGljIHRleHQtYmx1ZS03MDBcIj5QZXJmb3JtYW5jZSBSYWRhciBDaGFydDwvY2FwdGlvbj5cbjxDaGFydHNSYWRhckFiZG9taW5hbHMge2RhdGFfYWJkb21pbmFsX3JhZGFyfSAvPiAgICAgICAgIDwvZGl2PlxuXG5cbiAgICA8ZGl2IGNsYXNzPVwiZGl2aWRlLXkgbXQtMTZcIj5cbiAgICAgICBcbiAgICAgICBcbiAgICAgICAgPGgxIGNsYXNzPVwidGV4dC1ibHVlLTgwMFwiPlxuICAgICAgICBPdGhlcnNcbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8ZGl2IGNsYXNzPSdtLTEyIGNvbnRhaW5lciBteC1hdXRvJz5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlLWF1dG8gdGV4dC1jZW50ZXIgY29udGFpbmVyIG14LWF1dG9cIj5cbiAgICAgICAgICAgIDxjYXB0aW9uIGNsYXNzPVwiZm9udC1zZW1pYm9sZCBtYi02IG10LTggdGV4dC14bCBpdGFsaWMgdGV4dC1ibHVlLTcwMFwiPkRhdGEgZm9yIE90aGVyczwvY2FwdGlvbj5cbiAgICAgICAgICAgIDx0aGVhZCBjbGFzcz1cImJvcmRlci1ncmF5LTMwMCBpdGFsaWNcIj5cbiAgICAgICAgICAgIDx0ciBjbGFzcz1cImJnLWJsdWUtMjAwIGJvcmRlciBib3JkZXItZ3JheS0zMDBcIj5cbiAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTIgcHktMlwiPjwvdGg+XG4gICAgICAgICAgICA8dGggY29sc3Bhbj0yIGNsYXNzPVwicHgtMiBweS0yXCI+QmVuY2ggPC90aD5cbiAgICAgICAgICAgIDx0aCBjb2xzcGFuPTIgY2xhc3M9XCJweC0yIHB5LTJcIj5CaWNlcHMgV2VpZ2h0PC90aD5cbiAgICAgICAgICAgIDx0aCBjb2xzcGFuPTIgY2xhc3M9XCJweC0yIHB5LTJcIj5QdWxsLVVwczwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyIGNsYXNzPVwiYmctYmx1ZS0xMDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTIgcHktMlwiPkRhdGU8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtMiBweS0yXCI+U2VyaWVzIDwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3M9XCJweC0yIHB5LTJcIj5SZXBldC4gPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTIgcHktMlwiPlNlcmllcyA8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtMiBweS0yXCI+UmVwZXQuIDwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3M9XCJweC0yIHB5LTJcIj5TZXJpZXMgPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTIgcHktMlwiPlJlcGV0LiA8L3RoPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuXG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgXG4gICAgICAgICAgICB7I2VhY2ggZGF0YV9yYXcgYXMgZGF0YX1cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC0yIHB5LTJcIj57ZGF0YVsnZGF0ZSddfTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtMiBweS0yXCI+e2RhdGFbJ0JlbmNoJ11bJ1NlcmllcyddfTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtMiBweS0yXCI+e2RhdGFbJ0JlbmNoJ11bJ051bWJlciddfTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtMiBweS0yXCI+e2RhdGFbJ0JpY2VwcyBXZWlnaHQnXVsnU2VyaWVzJ119PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC0yIHB5LTJcIj57ZGF0YVsnQmljZXBzIFdlaWdodCddWydOdW1iZXInXX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTIgcHktMlwiPntkYXRhWydQdWxsLVVwcyddWydTZXJpZXMnXX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTIgcHktMlwiPntkYXRhWydQdWxsLVVwcyddWydOdW1iZXInXX08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuXG4gICAgWW91ciBsYXN0IHNlc3Npb24gd2FzIHtvdGhlcnNfZ2xvYmFsX2luZGljYXRvcn0gJSBvZiB0aGUgYXZlcmFnZSBvZiB0aGUgc2Vzc2lvbnMgd2hlcmUgeW91IHdvcmtlZCBvbiBvdGhlcnNcblxuXG4gICAgPGRpdiBjbGFzcz1cIm10LTggIG0tMTIgIFwiPlxuICAgICAgICAgICAgPGNhcHRpb24gY2xhc3M9XCJ0ZXh0LWNlbnRlciBjb250YWluZXIgbXgtYXV0byBmb250LXNlbWlib2xkIG1iLTYgbXQtOCB0ZXh0LXhsIGl0YWxpYyB0ZXh0LWJsdWUtNzAwXCI+UGVyZm9ybWFuY2UgUmFkYXIgQ2hhcnQ8L2NhcHRpb24+XG4gICAgICAgICAgICA8Q2hhcnRzUmFkYXJPdGhlcnMge2RhdGFfb3RoZXJzX3JhZGFyfSAvPiBcbiAgICAgICAgPC9kaXY+XG5cblxuPC9kaXY+XG48L2Rpdj5cblxuXG5cblxuIiwiPHNjcmlwdD5cblx0ZXhwb3J0IGxldCBzZWdtZW50O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblx0LyogbmF2IHtcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsNjIsMCwwLjEpO1xuXHRcdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdFx0cGFkZGluZzogMCAxZW07XG5cdH0gKi9cblxuXHR1bCB7XG5cdFx0bWFyZ2luOiAwO1xuXHRcdHBhZGRpbmc6IDA7XG5cdH1cblxuXHQvKiBjbGVhcmZpeCAqL1xuXHQgdWw6OmFmdGVyIHtcblx0XHRjb250ZW50OiAnJztcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRjbGVhcjogYm90aDtcblx0fVxuXG5cdGxpIHtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRmbG9hdDogbGVmdDtcblx0fVxuXG5cdFthcmlhLWN1cnJlbnRdIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHR9XG5cblx0W2FyaWEtY3VycmVudF06OmFmdGVyIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Y29udGVudDogJyc7XG5cdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDFlbSk7XG5cdFx0aGVpZ2h0OiAycHg7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSw2MiwwKTtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRib3R0b206IC0xcHg7XG5cdH1cblxuXHRhIHtcblx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0cGFkZGluZzogMWVtIDAuNWVtO1xuXHRcdGRpc3BsYXk6IGJsb2NrOyBcblx0fSBcblxuXHRbYXJpYS1jdXJyZW50XTo6YWZ0ZXIge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRjb250ZW50OiAnJztcblx0XHR3aWR0aDogY2FsYygxMDAlIC0gMWVtKTtcblx0XHRoZWlnaHQ6IDJweDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0Ym90dG9tOiAtMXB4O1xuXHR9XG48L3N0eWxlPlxuXG48bmF2PlxuPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBweS0wIGJnLWJsdWUtODAwXCI+XG4gIDxkaXYgY2xhc3M9XCJmbGV4LXNocmluay0wIG1sLTEwIGN1cnNvci1wb2ludGVyXCI+XG4gICAgPGkgY2xhc3M9XCJmYXMgZmEtZHJhZnRpbmctY29tcGFzcyBmYS0yeCB0ZXh0LW9yYW5nZS01MDBcIj48L2k+XG4gICAgPHNwYW4gY2xhc3M9XCJtbC0xIHRleHQtM3hsIHRleHQtYmx1ZS0yMDAgZm9udC1zZW1pYm9sZFwiPlNwb3J0QXNzaXN0YW50PC9zcGFuPlxuICA8L2Rpdj5cbiAgPGkgY2xhc3M9XCJmYXMgZmEtYmFycyBmYS0yeCB2aXNpYmxlIG1kOmludmlzaWJsZSBtci0xMCBtZDptci0wIHRleHQtYmx1ZS0yMDAgY3Vyc29yLXBvaW50ZXJcIj48L2k+XG4gIDx1bCBjbGFzcz1cImhpZGRlbiBtZDpmbGV4IG92ZXJmbG93LXgtaGlkZGVuIG1yLTEwIGZvbnQtc2VtaWJvbGRcIj5cbiAgICA8bGkgY2xhc3M9XCJtci02IHAtMVwiPlxuICAgICAgPGEgY2xhc3M9XCJ0ZXh0LXdoaXRlIGhvdmVyOnRleHQtYmx1ZS0zMDBcIiBhcmlhLWN1cnJlbnQ9J3tzZWdtZW50ID09PSB1bmRlZmluZWQgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH0nIGhyZWY9XCIuXCI+SG9tZTwvYT5cbiAgICA8L2xpPlxuICAgIDxsaSBjbGFzcz1cIm1yLTYgcC0xXCI+XG4gICAgICA8YSBjbGFzcz1cInRleHQtd2hpdGUgaG92ZXI6dGV4dC1ibHVlLTMwMFwiIGFyaWEtY3VycmVudD0ne3NlZ21lbnQgPT09IFwibmV3X3Nlc3Npb25cIiA/IFwicGFnZVwiIDogdW5kZWZpbmVkfScgaHJlZj1cIm5ld19zZXNzaW9uXCI+TmV3IFNlc3Npb248L2E+XG4gICAgPC9saT5cbiAgICA8bGkgY2xhc3M9XCJtci02IHAtMVwiPlxuICAgICAgPGEgY2xhc3M9XCJ0ZXh0LXdoaXRlIGhvdmVyOnRleHQtYmx1ZS0zMDBcIiBhcmlhLWN1cnJlbnQ9J3tzZWdtZW50ID09PSAncGVyZm9ybWFuY2UnID8gXCJwYWdlXCIgOiB1bmRlZmluZWR9JyBocmVmPVwicGVyZm9ybWFuY2VcIj5QZXJmb3JtYW5jZTwvYT5cbiAgICA8L2xpPlxuICAgIDxsaSBjbGFzcz1cIm1yLTYgcC0xXCI+XG4gICAgICA8YSBjbGFzcz1cInRleHQtd2hpdGUgaG92ZXI6dGV4dC1ibHVlLTMwMFwiIGFyaWEtY3VycmVudD0ne3NlZ21lbnQgPT09IFwiYWJvdXRcIiA/IFwicGFnZVwiIDogdW5kZWZpbmVkfScgaHJlZj1cImFib3V0XCI+QWJvdXQ8L2E+XG4gICAgPC9saT5cbiAgICA8bGkgY2xhc3M9XCJtci02IHAtMVwiPlxuICAgICAgPGEgY2xhc3M9XCJ0ZXh0LXdoaXRlIGhvdmVyOnRleHQtYmx1ZS0zMDBcIiBhcmlhLWN1cnJlbnQ9J3tzZWdtZW50ID09PSBcInR1dG9yaWFsXCIgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH0nIGhyZWY9XCJ0dXRvcmlhbFwiPlR1dG9yaWFsPC9hPlxuICAgIDwvbGk+XG4gIDwvdWw+XG48L2Rpdj5cblxuPCEtLSBcblxuXHQ8dWw+XG5cdFx0PGxpPjxhIGFyaWEtY3VycmVudD0ne3NlZ21lbnQgPT09IHVuZGVmaW5lZCA/IFwicGFnZVwiIDogdW5kZWZpbmVkfScgaHJlZj0nLic+aG9tZTwvYT48L2xpPlxuXHRcdDxsaT48YSBhcmlhLWN1cnJlbnQ9J3tzZWdtZW50ID09PSBcIm5ld19zZXNzaW9uXCIgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH0nIGhyZWY9J25ld19zZXNzaW9uJz5uZXcgc2Vzc2lvbjwvYT48L2xpPlxuXHRcdDxsaT48YSBhcmlhLWN1cnJlbnQ9J3tzZWdtZW50ID09PSBcInBlcmZvcm1hbmNlXCIgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH0nIGhyZWY9J3BlcmZvcm1hbmNlJz5wZXJmb3JtYW5jZTwvYT48L2xpPlxuXHRcdDxsaT48YSBhcmlhLWN1cnJlbnQ9J3tzZWdtZW50ID09PSBcImFib3V0XCIgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH0nIGhyZWY9J2Fib3V0Jz5hYm91dDwvYT48L2xpPlxuXHRcdDxsaT48YSBhcmlhLWN1cnJlbnQ9J3tzZWdtZW50ID09PSBcInR1dG9yaWFsXCIgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH0nIGhyZWY9J3R1dG9yaWFsJz50dXRvcmlhbDwvYT48L2xpPlxuXHQ8L3VsPiAtLT5cbjwvbmF2PlxuIiwiPHNjcmlwdD5cblx0aW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdi5zdmVsdGUnO1xuXG5cdGV4cG9ydCBsZXQgc2VnbWVudDtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cdG1haW4ge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRtYXgtd2lkdGg6IDcyZW07XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ViZjhmZjtcblx0XHQvKiBwYWRkaW5nOiAyZW07ICovXG5cdFx0cGFkZGluZzogMDtcblx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHR9XG48L3N0eWxlPlxuXG48TmF2IHtzZWdtZW50fS8+XG4gPGRpdiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgnYmFja2dyb3VuZDQuanBnJyk7ICAgIGJhY2tncm91bmQtc2l6ZTogICAgIGNvdmVyOyAgICAgICAgICAgICBcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogICBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjsgIFwiPiBcblxuPG1haW4+XG5cdDxzbG90Pjwvc2xvdD5cbjwvbWFpbj5cblxuPC9kaXY+IiwiPHNjcmlwdD5cblx0ZXhwb3J0IGxldCBzdGF0dXM7XG5cdGV4cG9ydCBsZXQgZXJyb3I7XG5cblx0Y29uc3QgZGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHRoMSwgcCB7XG5cdFx0bWFyZ2luOiAwIGF1dG87XG5cdH1cblxuXHRoMSB7XG5cdFx0Zm9udC1zaXplOiAyLjhlbTtcblx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdG1hcmdpbjogMCAwIDAuNWVtIDA7XG5cdH1cblxuXHRwIHtcblx0XHRtYXJnaW46IDFlbSBhdXRvO1xuXHR9XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG5cdFx0aDEge1xuXHRcdFx0Zm9udC1zaXplOiA0ZW07XG5cdFx0fVxuXHR9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT57c3RhdHVzfTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48aDE+e3N0YXR1c308L2gxPlxuXG48cD57ZXJyb3IubWVzc2FnZX08L3A+XG5cbnsjaWYgZGV2ICYmIGVycm9yLnN0YWNrfVxuXHQ8cHJlPntlcnJvci5zdGFja308L3ByZT5cbnsvaWZ9XG4iLCIvLyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IFNhcHBlciDigJQgZG8gbm90IGVkaXQgaXQhXG5pbXBvcnQgKiBhcyByb3V0ZV8wIGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvbmV3X3Nlc3Npb25zL3N3aW1taW5nL2luZGV4Lmpzb24uanNcIjtcbmltcG9ydCAqIGFzIHJvdXRlXzEgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9uZXdfc2Vzc2lvbnMvY3ljbGluZy9pbmRleC5qc29uLmpzXCI7XG5pbXBvcnQgKiBhcyByb3V0ZV8yIGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvbmV3X3Nlc3Npb25zL3J1bm5pbmcvaW5kZXguanNvbi5qc1wiO1xuaW1wb3J0ICogYXMgcm91dGVfMyBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL25ld19zZXNzaW9ucy93b3Jrb3V0L2luZGV4Lmpzb24uanNcIjtcbmltcG9ydCAqIGFzIHJvdXRlXzQgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9zcG9ydHMvc3dpbW1pbmcvaW5kZXguanNvbi5qc1wiO1xuaW1wb3J0ICogYXMgcm91dGVfNSBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL3Nwb3J0cy9zd2ltbWluZy9zd2ltbWluZy1kYXRhLmpzXCI7XG5pbXBvcnQgKiBhcyByb3V0ZV82IGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvc3BvcnRzL2N5Y2xpbmcvaW5kZXguanNvbi5qc1wiO1xuaW1wb3J0ICogYXMgcm91dGVfNyBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL3Nwb3J0cy9jeWNsaW5nL2N5Y2xpbmctZGF0YS5qc1wiO1xuaW1wb3J0ICogYXMgcm91dGVfOCBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL3Nwb3J0cy9ydW5uaW5nL2luZGV4Lmpzb24uanNcIjtcbmltcG9ydCAqIGFzIHJvdXRlXzkgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9zcG9ydHMvd29ya291dC9pbmRleC5qc29uLmpzXCI7XG5pbXBvcnQgKiBhcyByb3V0ZV8xMCBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL3Nwb3J0cy93b3Jrb3V0L3dvcmtvdXQtZGF0YS5qc1wiO1xuaW1wb3J0ICogYXMgcm91dGVfMTEgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9zcG9ydC5qc1wiO1xuaW1wb3J0ICogYXMgcm91dGVfMTIgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9ob21lL2luZGV4Lmpzb24uanNcIjtcbmltcG9ydCBjb21wb25lbnRfMCwgeyBwcmVsb2FkIGFzIHByZWxvYWRfMCB9IGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvaW5kZXguc3ZlbHRlXCI7XG5pbXBvcnQgY29tcG9uZW50XzEgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9mcmFwcGUtY2hhcnRzLnN2ZWx0ZVwiO1xuaW1wb3J0IGNvbXBvbmVudF8yLCB7IHByZWxvYWQgYXMgcHJlbG9hZF8yIH0gZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9uZXdfc2Vzc2lvbnMvc3dpbW1pbmcvbmV3X3N3aW1taW5nLnN2ZWx0ZVwiO1xuaW1wb3J0IGNvbXBvbmVudF8zLCB7IHByZWxvYWQgYXMgcHJlbG9hZF8zIH0gZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9uZXdfc2Vzc2lvbnMvY3ljbGluZy9uZXdfY3ljbGluZy5zdmVsdGVcIjtcbmltcG9ydCBjb21wb25lbnRfNCwgeyBwcmVsb2FkIGFzIHByZWxvYWRfNCB9IGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvbmV3X3Nlc3Npb25zL3J1bm5pbmcvbmV3X3J1bm5pbmcuc3ZlbHRlXCI7XG5pbXBvcnQgY29tcG9uZW50XzUsIHsgcHJlbG9hZCBhcyBwcmVsb2FkXzUgfSBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL25ld19zZXNzaW9ucy93b3Jrb3V0L25ld193b3Jrb3V0LnN2ZWx0ZVwiO1xuaW1wb3J0IGNvbXBvbmVudF82IGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvbmV3X3Nlc3Npb24uc3ZlbHRlXCI7XG5pbXBvcnQgY29tcG9uZW50XzcgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9wZXJmb3JtYW5jZS5zdmVsdGVcIjtcbmltcG9ydCBjb21wb25lbnRfOCBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL2NoYXJ0ZXN0LnN2ZWx0ZVwiO1xuaW1wb3J0IGNvbXBvbmVudF85IGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvdHV0b3JpYWwuc3ZlbHRlXCI7XG5pbXBvcnQgY29tcG9uZW50XzEwIGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvc3BvcnRzL3N3aW1taW5nL3N3aW1taW5nLWNoYXJ0cy5zdmVsdGVcIjtcbmltcG9ydCBjb21wb25lbnRfMTEsIHsgcHJlbG9hZCBhcyBwcmVsb2FkXzExIH0gZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9zcG9ydHMvc3dpbW1pbmcvc3dpbW1pbmcuc3ZlbHRlXCI7XG5pbXBvcnQgY29tcG9uZW50XzEyIGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvc3BvcnRzL2N5Y2xpbmcvY3ljbGluZy1jaGFydHMuc3ZlbHRlXCI7XG5pbXBvcnQgY29tcG9uZW50XzEzLCB7IHByZWxvYWQgYXMgcHJlbG9hZF8xMyB9IGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvc3BvcnRzL2N5Y2xpbmcvY3ljbGluZy5zdmVsdGVcIjtcbmltcG9ydCBjb21wb25lbnRfMTQgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9zcG9ydHMvcnVubmluZy9ydW5uaW5nLWNoYXJ0cy5zdmVsdGVcIjtcbmltcG9ydCBjb21wb25lbnRfMTUsIHsgcHJlbG9hZCBhcyBwcmVsb2FkXzE1IH0gZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9zcG9ydHMvcnVubmluZy9ydW5uaW5nLnN2ZWx0ZVwiO1xuaW1wb3J0IGNvbXBvbmVudF8xNiBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL3Nwb3J0cy93b3Jrb3V0L3dvcmtvdXRwdXNodXBzLXJhZGFyLnN2ZWx0ZVwiO1xuaW1wb3J0IGNvbXBvbmVudF8xNyBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL3Nwb3J0cy93b3Jrb3V0L3dvcmtvdXRvdGhlcnMtcmFkYXIuc3ZlbHRlXCI7XG5pbXBvcnQgY29tcG9uZW50XzE4IGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvc3BvcnRzL3dvcmtvdXQvd29ya291dGFiZG8tcmFkYXIuc3ZlbHRlXCI7XG5pbXBvcnQgY29tcG9uZW50XzE5IGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvc3BvcnRzL3dvcmtvdXQvd29ya291dGxlZ3MtcmFkYXIuc3ZlbHRlXCI7XG5pbXBvcnQgY29tcG9uZW50XzIwIGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvc3BvcnRzL3dvcmtvdXQvd29ya291dC1jaGFydHMuc3ZlbHRlXCI7XG5pbXBvcnQgY29tcG9uZW50XzIxLCB7IHByZWxvYWQgYXMgcHJlbG9hZF8yMSB9IGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvc3BvcnRzL3dvcmtvdXQvd29ya291dC5zdmVsdGVcIjtcbmltcG9ydCBjb21wb25lbnRfMjIgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9hYm91dC5zdmVsdGVcIjtcbmltcG9ydCBjb21wb25lbnRfMjMgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9jaGFydC5zdmVsdGVcIjtcbmltcG9ydCBjb21wb25lbnRfMjQgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9Cb3guc3ZlbHRlXCI7XG5pbXBvcnQgcm9vdCBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL19sYXlvdXQuc3ZlbHRlXCI7XG5pbXBvcnQgZXJyb3IgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9fZXJyb3Iuc3ZlbHRlXCI7XG5cbmNvbnN0IGQgPSBkZWNvZGVVUklDb21wb25lbnQ7XG5cbmV4cG9ydCBjb25zdCBtYW5pZmVzdCA9IHtcblx0c2VydmVyX3JvdXRlczogW1xuXHRcdHtcblx0XHRcdC8vIG5ld19zZXNzaW9ucy9zd2ltbWluZy9pbmRleC5qc29uLmpzXG5cdFx0XHRwYXR0ZXJuOiAvXlxcL25ld19zZXNzaW9uc1xcL3N3aW1taW5nXFwuanNvbiQvLFxuXHRcdFx0aGFuZGxlcnM6IHJvdXRlXzAsXG5cdFx0XHRwYXJhbXM6ICgpID0+ICh7fSlcblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gbmV3X3Nlc3Npb25zL2N5Y2xpbmcvaW5kZXguanNvbi5qc1xuXHRcdFx0cGF0dGVybjogL15cXC9uZXdfc2Vzc2lvbnNcXC9jeWNsaW5nXFwuanNvbiQvLFxuXHRcdFx0aGFuZGxlcnM6IHJvdXRlXzEsXG5cdFx0XHRwYXJhbXM6ICgpID0+ICh7fSlcblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gbmV3X3Nlc3Npb25zL3J1bm5pbmcvaW5kZXguanNvbi5qc1xuXHRcdFx0cGF0dGVybjogL15cXC9uZXdfc2Vzc2lvbnNcXC9ydW5uaW5nXFwuanNvbiQvLFxuXHRcdFx0aGFuZGxlcnM6IHJvdXRlXzIsXG5cdFx0XHRwYXJhbXM6ICgpID0+ICh7fSlcblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gbmV3X3Nlc3Npb25zL3dvcmtvdXQvaW5kZXguanNvbi5qc1xuXHRcdFx0cGF0dGVybjogL15cXC9uZXdfc2Vzc2lvbnNcXC93b3Jrb3V0XFwuanNvbiQvLFxuXHRcdFx0aGFuZGxlcnM6IHJvdXRlXzMsXG5cdFx0XHRwYXJhbXM6ICgpID0+ICh7fSlcblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gc3BvcnRzL3N3aW1taW5nL2luZGV4Lmpzb24uanNcblx0XHRcdHBhdHRlcm46IC9eXFwvc3BvcnRzXFwvc3dpbW1pbmdcXC5qc29uJC8sXG5cdFx0XHRoYW5kbGVyczogcm91dGVfNCxcblx0XHRcdHBhcmFtczogKCkgPT4gKHt9KVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyBzcG9ydHMvc3dpbW1pbmcvc3dpbW1pbmctZGF0YS5qc1xuXHRcdFx0cGF0dGVybjogL15cXC9zcG9ydHNcXC9zd2ltbWluZ1xcL3N3aW1taW5nLWRhdGFcXC8/JC8sXG5cdFx0XHRoYW5kbGVyczogcm91dGVfNSxcblx0XHRcdHBhcmFtczogKCkgPT4gKHt9KVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyBzcG9ydHMvY3ljbGluZy9pbmRleC5qc29uLmpzXG5cdFx0XHRwYXR0ZXJuOiAvXlxcL3Nwb3J0c1xcL2N5Y2xpbmdcXC5qc29uJC8sXG5cdFx0XHRoYW5kbGVyczogcm91dGVfNixcblx0XHRcdHBhcmFtczogKCkgPT4gKHt9KVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyBzcG9ydHMvY3ljbGluZy9jeWNsaW5nLWRhdGEuanNcblx0XHRcdHBhdHRlcm46IC9eXFwvc3BvcnRzXFwvY3ljbGluZ1xcL2N5Y2xpbmctZGF0YVxcLz8kLyxcblx0XHRcdGhhbmRsZXJzOiByb3V0ZV83LFxuXHRcdFx0cGFyYW1zOiAoKSA9PiAoe30pXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIHNwb3J0cy9ydW5uaW5nL2luZGV4Lmpzb24uanNcblx0XHRcdHBhdHRlcm46IC9eXFwvc3BvcnRzXFwvcnVubmluZ1xcLmpzb24kLyxcblx0XHRcdGhhbmRsZXJzOiByb3V0ZV84LFxuXHRcdFx0cGFyYW1zOiAoKSA9PiAoe30pXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIHNwb3J0cy93b3Jrb3V0L2luZGV4Lmpzb24uanNcblx0XHRcdHBhdHRlcm46IC9eXFwvc3BvcnRzXFwvd29ya291dFxcLmpzb24kLyxcblx0XHRcdGhhbmRsZXJzOiByb3V0ZV85LFxuXHRcdFx0cGFyYW1zOiAoKSA9PiAoe30pXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIHNwb3J0cy93b3Jrb3V0L3dvcmtvdXQtZGF0YS5qc1xuXHRcdFx0cGF0dGVybjogL15cXC9zcG9ydHNcXC93b3Jrb3V0XFwvd29ya291dC1kYXRhXFwvPyQvLFxuXHRcdFx0aGFuZGxlcnM6IHJvdXRlXzEwLFxuXHRcdFx0cGFyYW1zOiAoKSA9PiAoe30pXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIHNwb3J0LmpzXG5cdFx0XHRwYXR0ZXJuOiAvXlxcL3Nwb3J0XFwvPyQvLFxuXHRcdFx0aGFuZGxlcnM6IHJvdXRlXzExLFxuXHRcdFx0cGFyYW1zOiAoKSA9PiAoe30pXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIGhvbWUvaW5kZXguanNvbi5qc1xuXHRcdFx0cGF0dGVybjogL15cXC9ob21lXFwuanNvbiQvLFxuXHRcdFx0aGFuZGxlcnM6IHJvdXRlXzEyLFxuXHRcdFx0cGFyYW1zOiAoKSA9PiAoe30pXG5cdFx0fVxuXHRdLFxuXG5cdHBhZ2VzOiBbXG5cdFx0e1xuXHRcdFx0Ly8gaW5kZXguc3ZlbHRlXG5cdFx0XHRwYXR0ZXJuOiAvXlxcLyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0eyBuYW1lOiBcImluZGV4XCIsIGZpbGU6IFwiaW5kZXguc3ZlbHRlXCIsIGNvbXBvbmVudDogY29tcG9uZW50XzAsIHByZWxvYWQ6IHByZWxvYWRfMCB9XG5cdFx0XHRdXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIGZyYXBwZS1jaGFydHMuc3ZlbHRlXG5cdFx0XHRwYXR0ZXJuOiAvXlxcL2ZyYXBwZS1jaGFydHNcXC8/JC8sXG5cdFx0XHRwYXJ0czogW1xuXHRcdFx0XHR7IG5hbWU6IFwiZnJhcHBlJDQ1Y2hhcnRzXCIsIGZpbGU6IFwiZnJhcHBlLWNoYXJ0cy5zdmVsdGVcIiwgY29tcG9uZW50OiBjb21wb25lbnRfMSB9XG5cdFx0XHRdXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIG5ld19zZXNzaW9ucy9zd2ltbWluZy9uZXdfc3dpbW1pbmcuc3ZlbHRlXG5cdFx0XHRwYXR0ZXJuOiAvXlxcL25ld19zZXNzaW9uc1xcL3N3aW1taW5nXFwvbmV3X3N3aW1taW5nXFwvPyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0eyBuYW1lOiBcIm5ld19zZXNzaW9uc19zd2ltbWluZ19uZXdfc3dpbW1pbmdcIiwgZmlsZTogXCJuZXdfc2Vzc2lvbnMvc3dpbW1pbmcvbmV3X3N3aW1taW5nLnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF8yLCBwcmVsb2FkOiBwcmVsb2FkXzIgfVxuXHRcdFx0XVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyBuZXdfc2Vzc2lvbnMvY3ljbGluZy9uZXdfY3ljbGluZy5zdmVsdGVcblx0XHRcdHBhdHRlcm46IC9eXFwvbmV3X3Nlc3Npb25zXFwvY3ljbGluZ1xcL25ld19jeWNsaW5nXFwvPyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0eyBuYW1lOiBcIm5ld19zZXNzaW9uc19jeWNsaW5nX25ld19jeWNsaW5nXCIsIGZpbGU6IFwibmV3X3Nlc3Npb25zL2N5Y2xpbmcvbmV3X2N5Y2xpbmcuc3ZlbHRlXCIsIGNvbXBvbmVudDogY29tcG9uZW50XzMsIHByZWxvYWQ6IHByZWxvYWRfMyB9XG5cdFx0XHRdXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIG5ld19zZXNzaW9ucy9ydW5uaW5nL25ld19ydW5uaW5nLnN2ZWx0ZVxuXHRcdFx0cGF0dGVybjogL15cXC9uZXdfc2Vzc2lvbnNcXC9ydW5uaW5nXFwvbmV3X3J1bm5pbmdcXC8/JC8sXG5cdFx0XHRwYXJ0czogW1xuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHR7IG5hbWU6IFwibmV3X3Nlc3Npb25zX3J1bm5pbmdfbmV3X3J1bm5pbmdcIiwgZmlsZTogXCJuZXdfc2Vzc2lvbnMvcnVubmluZy9uZXdfcnVubmluZy5zdmVsdGVcIiwgY29tcG9uZW50OiBjb21wb25lbnRfNCwgcHJlbG9hZDogcHJlbG9hZF80IH1cblx0XHRcdF1cblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gbmV3X3Nlc3Npb25zL3dvcmtvdXQvbmV3X3dvcmtvdXQuc3ZlbHRlXG5cdFx0XHRwYXR0ZXJuOiAvXlxcL25ld19zZXNzaW9uc1xcL3dvcmtvdXRcXC9uZXdfd29ya291dFxcLz8kLyxcblx0XHRcdHBhcnRzOiBbXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHsgbmFtZTogXCJuZXdfc2Vzc2lvbnNfd29ya291dF9uZXdfd29ya291dFwiLCBmaWxlOiBcIm5ld19zZXNzaW9ucy93b3Jrb3V0L25ld193b3Jrb3V0LnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF81LCBwcmVsb2FkOiBwcmVsb2FkXzUgfVxuXHRcdFx0XVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyBuZXdfc2Vzc2lvbi5zdmVsdGVcblx0XHRcdHBhdHRlcm46IC9eXFwvbmV3X3Nlc3Npb25cXC8/JC8sXG5cdFx0XHRwYXJ0czogW1xuXHRcdFx0XHR7IG5hbWU6IFwibmV3X3Nlc3Npb25cIiwgZmlsZTogXCJuZXdfc2Vzc2lvbi5zdmVsdGVcIiwgY29tcG9uZW50OiBjb21wb25lbnRfNiB9XG5cdFx0XHRdXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIHBlcmZvcm1hbmNlLnN2ZWx0ZVxuXHRcdFx0cGF0dGVybjogL15cXC9wZXJmb3JtYW5jZVxcLz8kLyxcblx0XHRcdHBhcnRzOiBbXG5cdFx0XHRcdHsgbmFtZTogXCJwZXJmb3JtYW5jZVwiLCBmaWxlOiBcInBlcmZvcm1hbmNlLnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF83IH1cblx0XHRcdF1cblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gY2hhcnRlc3Quc3ZlbHRlXG5cdFx0XHRwYXR0ZXJuOiAvXlxcL2NoYXJ0ZXN0XFwvPyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0eyBuYW1lOiBcImNoYXJ0ZXN0XCIsIGZpbGU6IFwiY2hhcnRlc3Quc3ZlbHRlXCIsIGNvbXBvbmVudDogY29tcG9uZW50XzggfVxuXHRcdFx0XVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyB0dXRvcmlhbC5zdmVsdGVcblx0XHRcdHBhdHRlcm46IC9eXFwvdHV0b3JpYWxcXC8/JC8sXG5cdFx0XHRwYXJ0czogW1xuXHRcdFx0XHR7IG5hbWU6IFwidHV0b3JpYWxcIiwgZmlsZTogXCJ0dXRvcmlhbC5zdmVsdGVcIiwgY29tcG9uZW50OiBjb21wb25lbnRfOSB9XG5cdFx0XHRdXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIHNwb3J0cy9zd2ltbWluZy9zd2ltbWluZy1jaGFydHMuc3ZlbHRlXG5cdFx0XHRwYXR0ZXJuOiAvXlxcL3Nwb3J0c1xcL3N3aW1taW5nXFwvc3dpbW1pbmctY2hhcnRzXFwvPyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0eyBuYW1lOiBcInNwb3J0c19zd2ltbWluZ19zd2ltbWluZyQ0NWNoYXJ0c1wiLCBmaWxlOiBcInNwb3J0cy9zd2ltbWluZy9zd2ltbWluZy1jaGFydHMuc3ZlbHRlXCIsIGNvbXBvbmVudDogY29tcG9uZW50XzEwIH1cblx0XHRcdF1cblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gc3BvcnRzL3N3aW1taW5nL3N3aW1taW5nLnN2ZWx0ZVxuXHRcdFx0cGF0dGVybjogL15cXC9zcG9ydHNcXC9zd2ltbWluZ1xcL3N3aW1taW5nXFwvPyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0eyBuYW1lOiBcInNwb3J0c19zd2ltbWluZ19zd2ltbWluZ1wiLCBmaWxlOiBcInNwb3J0cy9zd2ltbWluZy9zd2ltbWluZy5zdmVsdGVcIiwgY29tcG9uZW50OiBjb21wb25lbnRfMTEsIHByZWxvYWQ6IHByZWxvYWRfMTEgfVxuXHRcdFx0XVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyBzcG9ydHMvY3ljbGluZy9jeWNsaW5nLWNoYXJ0cy5zdmVsdGVcblx0XHRcdHBhdHRlcm46IC9eXFwvc3BvcnRzXFwvY3ljbGluZ1xcL2N5Y2xpbmctY2hhcnRzXFwvPyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0eyBuYW1lOiBcInNwb3J0c19jeWNsaW5nX2N5Y2xpbmckNDVjaGFydHNcIiwgZmlsZTogXCJzcG9ydHMvY3ljbGluZy9jeWNsaW5nLWNoYXJ0cy5zdmVsdGVcIiwgY29tcG9uZW50OiBjb21wb25lbnRfMTIgfVxuXHRcdFx0XVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyBzcG9ydHMvY3ljbGluZy9jeWNsaW5nLnN2ZWx0ZVxuXHRcdFx0cGF0dGVybjogL15cXC9zcG9ydHNcXC9jeWNsaW5nXFwvY3ljbGluZ1xcLz8kLyxcblx0XHRcdHBhcnRzOiBbXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHsgbmFtZTogXCJzcG9ydHNfY3ljbGluZ19jeWNsaW5nXCIsIGZpbGU6IFwic3BvcnRzL2N5Y2xpbmcvY3ljbGluZy5zdmVsdGVcIiwgY29tcG9uZW50OiBjb21wb25lbnRfMTMsIHByZWxvYWQ6IHByZWxvYWRfMTMgfVxuXHRcdFx0XVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyBzcG9ydHMvcnVubmluZy9ydW5uaW5nLWNoYXJ0cy5zdmVsdGVcblx0XHRcdHBhdHRlcm46IC9eXFwvc3BvcnRzXFwvcnVubmluZ1xcL3J1bm5pbmctY2hhcnRzXFwvPyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0eyBuYW1lOiBcInNwb3J0c19ydW5uaW5nX3J1bm5pbmckNDVjaGFydHNcIiwgZmlsZTogXCJzcG9ydHMvcnVubmluZy9ydW5uaW5nLWNoYXJ0cy5zdmVsdGVcIiwgY29tcG9uZW50OiBjb21wb25lbnRfMTQgfVxuXHRcdFx0XVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyBzcG9ydHMvcnVubmluZy9ydW5uaW5nLnN2ZWx0ZVxuXHRcdFx0cGF0dGVybjogL15cXC9zcG9ydHNcXC9ydW5uaW5nXFwvcnVubmluZ1xcLz8kLyxcblx0XHRcdHBhcnRzOiBbXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHsgbmFtZTogXCJzcG9ydHNfcnVubmluZ19ydW5uaW5nXCIsIGZpbGU6IFwic3BvcnRzL3J1bm5pbmcvcnVubmluZy5zdmVsdGVcIiwgY29tcG9uZW50OiBjb21wb25lbnRfMTUsIHByZWxvYWQ6IHByZWxvYWRfMTUgfVxuXHRcdFx0XVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyBzcG9ydHMvd29ya291dC93b3Jrb3V0cHVzaHVwcy1yYWRhci5zdmVsdGVcblx0XHRcdHBhdHRlcm46IC9eXFwvc3BvcnRzXFwvd29ya291dFxcL3dvcmtvdXRwdXNodXBzLXJhZGFyXFwvPyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0eyBuYW1lOiBcInNwb3J0c193b3Jrb3V0X3dvcmtvdXRwdXNodXBzJDQ1cmFkYXJcIiwgZmlsZTogXCJzcG9ydHMvd29ya291dC93b3Jrb3V0cHVzaHVwcy1yYWRhci5zdmVsdGVcIiwgY29tcG9uZW50OiBjb21wb25lbnRfMTYgfVxuXHRcdFx0XVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyBzcG9ydHMvd29ya291dC93b3Jrb3V0b3RoZXJzLXJhZGFyLnN2ZWx0ZVxuXHRcdFx0cGF0dGVybjogL15cXC9zcG9ydHNcXC93b3Jrb3V0XFwvd29ya291dG90aGVycy1yYWRhclxcLz8kLyxcblx0XHRcdHBhcnRzOiBbXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHsgbmFtZTogXCJzcG9ydHNfd29ya291dF93b3Jrb3V0b3RoZXJzJDQ1cmFkYXJcIiwgZmlsZTogXCJzcG9ydHMvd29ya291dC93b3Jrb3V0b3RoZXJzLXJhZGFyLnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF8xNyB9XG5cdFx0XHRdXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIHNwb3J0cy93b3Jrb3V0L3dvcmtvdXRhYmRvLXJhZGFyLnN2ZWx0ZVxuXHRcdFx0cGF0dGVybjogL15cXC9zcG9ydHNcXC93b3Jrb3V0XFwvd29ya291dGFiZG8tcmFkYXJcXC8/JC8sXG5cdFx0XHRwYXJ0czogW1xuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHR7IG5hbWU6IFwic3BvcnRzX3dvcmtvdXRfd29ya291dGFiZG8kNDVyYWRhclwiLCBmaWxlOiBcInNwb3J0cy93b3Jrb3V0L3dvcmtvdXRhYmRvLXJhZGFyLnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF8xOCB9XG5cdFx0XHRdXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIHNwb3J0cy93b3Jrb3V0L3dvcmtvdXRsZWdzLXJhZGFyLnN2ZWx0ZVxuXHRcdFx0cGF0dGVybjogL15cXC9zcG9ydHNcXC93b3Jrb3V0XFwvd29ya291dGxlZ3MtcmFkYXJcXC8/JC8sXG5cdFx0XHRwYXJ0czogW1xuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHR7IG5hbWU6IFwic3BvcnRzX3dvcmtvdXRfd29ya291dGxlZ3MkNDVyYWRhclwiLCBmaWxlOiBcInNwb3J0cy93b3Jrb3V0L3dvcmtvdXRsZWdzLXJhZGFyLnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF8xOSB9XG5cdFx0XHRdXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIHNwb3J0cy93b3Jrb3V0L3dvcmtvdXQtY2hhcnRzLnN2ZWx0ZVxuXHRcdFx0cGF0dGVybjogL15cXC9zcG9ydHNcXC93b3Jrb3V0XFwvd29ya291dC1jaGFydHNcXC8/JC8sXG5cdFx0XHRwYXJ0czogW1xuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHR7IG5hbWU6IFwic3BvcnRzX3dvcmtvdXRfd29ya291dCQ0NWNoYXJ0c1wiLCBmaWxlOiBcInNwb3J0cy93b3Jrb3V0L3dvcmtvdXQtY2hhcnRzLnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF8yMCB9XG5cdFx0XHRdXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIHNwb3J0cy93b3Jrb3V0L3dvcmtvdXQuc3ZlbHRlXG5cdFx0XHRwYXR0ZXJuOiAvXlxcL3Nwb3J0c1xcL3dvcmtvdXRcXC93b3Jrb3V0XFwvPyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0eyBuYW1lOiBcInNwb3J0c193b3Jrb3V0X3dvcmtvdXRcIiwgZmlsZTogXCJzcG9ydHMvd29ya291dC93b3Jrb3V0LnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF8yMSwgcHJlbG9hZDogcHJlbG9hZF8yMSB9XG5cdFx0XHRdXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIGFib3V0LnN2ZWx0ZVxuXHRcdFx0cGF0dGVybjogL15cXC9hYm91dFxcLz8kLyxcblx0XHRcdHBhcnRzOiBbXG5cdFx0XHRcdHsgbmFtZTogXCJhYm91dFwiLCBmaWxlOiBcImFib3V0LnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF8yMiB9XG5cdFx0XHRdXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIGNoYXJ0LnN2ZWx0ZVxuXHRcdFx0cGF0dGVybjogL15cXC9jaGFydFxcLz8kLyxcblx0XHRcdHBhcnRzOiBbXG5cdFx0XHRcdHsgbmFtZTogXCJjaGFydFwiLCBmaWxlOiBcImNoYXJ0LnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF8yMyB9XG5cdFx0XHRdXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIEJveC5zdmVsdGVcblx0XHRcdHBhdHRlcm46IC9eXFwvQm94XFwvPyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0eyBuYW1lOiBcIkJveFwiLCBmaWxlOiBcIkJveC5zdmVsdGVcIiwgY29tcG9uZW50OiBjb21wb25lbnRfMjQgfVxuXHRcdFx0XVxuXHRcdH1cblx0XSxcblxuXHRyb290LFxuXHRyb290X3ByZWxvYWQ6ICgpID0+IHt9LFxuXHRlcnJvclxufTtcblxuZXhwb3J0IGNvbnN0IGJ1aWxkX2RpciA9IFwiX19zYXBwZXJfXy9kZXZcIjtcblxuZXhwb3J0IGNvbnN0IHNyY19kaXIgPSBcInNyY1wiO1xuXG5leHBvcnQgY29uc3QgZGV2ID0gdHJ1ZTsiLCJpbXBvcnQgeyBub29wLCBzYWZlX25vdF9lcXVhbCwgc3Vic2NyaWJlLCBydW5fYWxsLCBpc19mdW5jdGlvbiB9IGZyb20gJy4uL2ludGVybmFsJztcbmV4cG9ydCB7IGdldF9zdG9yZV92YWx1ZSBhcyBnZXQgfSBmcm9tICcuLi9pbnRlcm5hbCc7XG5cbmNvbnN0IHN1YnNjcmliZXJfcXVldWUgPSBbXTtcbi8qKlxuICogQ3JlYXRlcyBhIGBSZWFkYWJsZWAgc3RvcmUgdGhhdCBhbGxvd3MgcmVhZGluZyBieSBzdWJzY3JpcHRpb24uXG4gKiBAcGFyYW0gdmFsdWUgaW5pdGlhbCB2YWx1ZVxuICogQHBhcmFtIHtTdGFydFN0b3BOb3RpZmllcn1zdGFydCBzdGFydCBhbmQgc3RvcCBub3RpZmljYXRpb25zIGZvciBzdWJzY3JpcHRpb25zXG4gKi9cbmZ1bmN0aW9uIHJlYWRhYmxlKHZhbHVlLCBzdGFydCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHN1YnNjcmliZTogd3JpdGFibGUodmFsdWUsIHN0YXJ0KS5zdWJzY3JpYmUsXG4gICAgfTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgYFdyaXRhYmxlYCBzdG9yZSB0aGF0IGFsbG93cyBib3RoIHVwZGF0aW5nIGFuZCByZWFkaW5nIGJ5IHN1YnNjcmlwdGlvbi5cbiAqIEBwYXJhbSB7Kj19dmFsdWUgaW5pdGlhbCB2YWx1ZVxuICogQHBhcmFtIHtTdGFydFN0b3BOb3RpZmllcj19c3RhcnQgc3RhcnQgYW5kIHN0b3Agbm90aWZpY2F0aW9ucyBmb3Igc3Vic2NyaXB0aW9uc1xuICovXG5mdW5jdGlvbiB3cml0YWJsZSh2YWx1ZSwgc3RhcnQgPSBub29wKSB7XG4gICAgbGV0IHN0b3A7XG4gICAgY29uc3Qgc3Vic2NyaWJlcnMgPSBbXTtcbiAgICBmdW5jdGlvbiBzZXQobmV3X3ZhbHVlKSB7XG4gICAgICAgIGlmIChzYWZlX25vdF9lcXVhbCh2YWx1ZSwgbmV3X3ZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSBuZXdfdmFsdWU7XG4gICAgICAgICAgICBpZiAoc3RvcCkgeyAvLyBzdG9yZSBpcyByZWFkeVxuICAgICAgICAgICAgICAgIGNvbnN0IHJ1bl9xdWV1ZSA9ICFzdWJzY3JpYmVyX3F1ZXVlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHMgPSBzdWJzY3JpYmVyc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgc1sxXSgpO1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyX3F1ZXVlLnB1c2gocywgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocnVuX3F1ZXVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Vic2NyaWJlcl9xdWV1ZS5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlcl9xdWV1ZVtpXVswXShzdWJzY3JpYmVyX3F1ZXVlW2kgKyAxXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlcl9xdWV1ZS5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGUoZm4pIHtcbiAgICAgICAgc2V0KGZuKHZhbHVlKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN1YnNjcmliZShydW4sIGludmFsaWRhdGUgPSBub29wKSB7XG4gICAgICAgIGNvbnN0IHN1YnNjcmliZXIgPSBbcnVuLCBpbnZhbGlkYXRlXTtcbiAgICAgICAgc3Vic2NyaWJlcnMucHVzaChzdWJzY3JpYmVyKTtcbiAgICAgICAgaWYgKHN1YnNjcmliZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgc3RvcCA9IHN0YXJ0KHNldCkgfHwgbm9vcDtcbiAgICAgICAgfVxuICAgICAgICBydW4odmFsdWUpO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzdWJzY3JpYmVycy5pbmRleE9mKHN1YnNjcmliZXIpO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3Vic2NyaWJlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc3RvcCgpO1xuICAgICAgICAgICAgICAgIHN0b3AgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4geyBzZXQsIHVwZGF0ZSwgc3Vic2NyaWJlIH07XG59XG5mdW5jdGlvbiBkZXJpdmVkKHN0b3JlcywgZm4sIGluaXRpYWxfdmFsdWUpIHtcbiAgICBjb25zdCBzaW5nbGUgPSAhQXJyYXkuaXNBcnJheShzdG9yZXMpO1xuICAgIGNvbnN0IHN0b3Jlc19hcnJheSA9IHNpbmdsZVxuICAgICAgICA/IFtzdG9yZXNdXG4gICAgICAgIDogc3RvcmVzO1xuICAgIGNvbnN0IGF1dG8gPSBmbi5sZW5ndGggPCAyO1xuICAgIHJldHVybiByZWFkYWJsZShpbml0aWFsX3ZhbHVlLCAoc2V0KSA9PiB7XG4gICAgICAgIGxldCBpbml0ZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gW107XG4gICAgICAgIGxldCBwZW5kaW5nID0gMDtcbiAgICAgICAgbGV0IGNsZWFudXAgPSBub29wO1xuICAgICAgICBjb25zdCBzeW5jID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHBlbmRpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmbihzaW5nbGUgPyB2YWx1ZXNbMF0gOiB2YWx1ZXMsIHNldCk7XG4gICAgICAgICAgICBpZiAoYXV0bykge1xuICAgICAgICAgICAgICAgIHNldChyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xlYW51cCA9IGlzX2Z1bmN0aW9uKHJlc3VsdCkgPyByZXN1bHQgOiBub29wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB1bnN1YnNjcmliZXJzID0gc3RvcmVzX2FycmF5Lm1hcCgoc3RvcmUsIGkpID0+IHN1YnNjcmliZShzdG9yZSwgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB2YWx1ZXNbaV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHBlbmRpbmcgJj0gfigxIDw8IGkpO1xuICAgICAgICAgICAgaWYgKGluaXRlZCkge1xuICAgICAgICAgICAgICAgIHN5bmMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgcGVuZGluZyB8PSAoMSA8PCBpKTtcbiAgICAgICAgfSkpO1xuICAgICAgICBpbml0ZWQgPSB0cnVlO1xuICAgICAgICBzeW5jKCk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICAgICAgcnVuX2FsbCh1bnN1YnNjcmliZXJzKTtcbiAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHsgZGVyaXZlZCwgcmVhZGFibGUsIHdyaXRhYmxlIH07XG4iLCJpbXBvcnQgeyB3cml0YWJsZSB9IGZyb20gJ3N2ZWx0ZS9zdG9yZSc7XG5cbmV4cG9ydCBjb25zdCBDT05URVhUX0tFWSA9IHt9O1xuXG5leHBvcnQgY29uc3QgcHJlbG9hZCA9ICgpID0+ICh7fSk7IiwiPCEtLSBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IFNhcHBlciDigJQgZG8gbm90IGVkaXQgaXQhIC0tPlxuPHNjcmlwdD5cblx0aW1wb3J0IHsgc2V0Q29udGV4dCwgYWZ0ZXJVcGRhdGUgfSBmcm9tICdzdmVsdGUnO1xuXHRpbXBvcnQgeyBDT05URVhUX0tFWSB9IGZyb20gJy4vc2hhcmVkJztcblx0aW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9yb3V0ZXMvX2xheW91dC5zdmVsdGUnO1xuXHRpbXBvcnQgRXJyb3IgZnJvbSAnLi4vLi4vLi4vcm91dGVzL19lcnJvci5zdmVsdGUnO1xuXG5cdGV4cG9ydCBsZXQgc3RvcmVzO1xuXHRleHBvcnQgbGV0IGVycm9yO1xuXHRleHBvcnQgbGV0IHN0YXR1cztcblx0ZXhwb3J0IGxldCBzZWdtZW50cztcblx0ZXhwb3J0IGxldCBsZXZlbDA7XG5cdGV4cG9ydCBsZXQgbGV2ZWwxID0gbnVsbDtcblx0ZXhwb3J0IGxldCBub3RpZnk7XG5cblx0YWZ0ZXJVcGRhdGUobm90aWZ5KTtcblx0c2V0Q29udGV4dChDT05URVhUX0tFWSwgc3RvcmVzKTtcbjwvc2NyaXB0PlxuXG48TGF5b3V0IHNlZ21lbnQ9XCJ7c2VnbWVudHNbMF19XCIgey4uLmxldmVsMC5wcm9wc30+XG5cdHsjaWYgZXJyb3J9XG5cdFx0PEVycm9yIHtlcnJvcn0ge3N0YXR1c30vPlxuXHR7OmVsc2V9XG5cdFx0PHN2ZWx0ZTpjb21wb25lbnQgdGhpcz1cIntsZXZlbDEuY29tcG9uZW50fVwiIHsuLi5sZXZlbDEucHJvcHN9Lz5cblx0ey9pZn1cbjwvTGF5b3V0PiIsImltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IGRldiwgYnVpbGRfZGlyLCBzcmNfZGlyLCBtYW5pZmVzdCB9IGZyb20gJy4vaW50ZXJuYWwvbWFuaWZlc3Qtc2VydmVyJztcbmltcG9ydCB7IHdyaXRhYmxlIH0gZnJvbSAnc3ZlbHRlL3N0b3JlJztcbmltcG9ydCBTdHJlYW0gZnJvbSAnc3RyZWFtJztcbmltcG9ydCBodHRwIGZyb20gJ2h0dHAnO1xuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuaW1wb3J0IGh0dHBzIGZyb20gJ2h0dHBzJztcbmltcG9ydCB6bGliIGZyb20gJ3psaWInO1xuaW1wb3J0IEFwcCBmcm9tICcuL2ludGVybmFsL0FwcC5zdmVsdGUnO1xuXG4vKipcbiAqIEBwYXJhbSB0eXBlTWFwIFtPYmplY3RdIE1hcCBvZiBNSU1FIHR5cGUgLT4gQXJyYXlbZXh0ZW5zaW9uc11cbiAqIEBwYXJhbSAuLi5cbiAqL1xuZnVuY3Rpb24gTWltZSgpIHtcbiAgdGhpcy5fdHlwZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB0aGlzLl9leHRlbnNpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHRoaXMuZGVmaW5lKGFyZ3VtZW50c1tpXSk7XG4gIH1cblxuICB0aGlzLmRlZmluZSA9IHRoaXMuZGVmaW5lLmJpbmQodGhpcyk7XG4gIHRoaXMuZ2V0VHlwZSA9IHRoaXMuZ2V0VHlwZS5iaW5kKHRoaXMpO1xuICB0aGlzLmdldEV4dGVuc2lvbiA9IHRoaXMuZ2V0RXh0ZW5zaW9uLmJpbmQodGhpcyk7XG59XG5cbi8qKlxuICogRGVmaW5lIG1pbWV0eXBlIC0+IGV4dGVuc2lvbiBtYXBwaW5ncy4gIEVhY2gga2V5IGlzIGEgbWltZS10eXBlIHRoYXQgbWFwc1xuICogdG8gYW4gYXJyYXkgb2YgZXh0ZW5zaW9ucyBhc3NvY2lhdGVkIHdpdGggdGhlIHR5cGUuICBUaGUgZmlyc3QgZXh0ZW5zaW9uIGlzXG4gKiB1c2VkIGFzIHRoZSBkZWZhdWx0IGV4dGVuc2lvbiBmb3IgdGhlIHR5cGUuXG4gKlxuICogZS5nLiBtaW1lLmRlZmluZSh7J2F1ZGlvL29nZycsIFsnb2dhJywgJ29nZycsICdzcHgnXX0pO1xuICpcbiAqIElmIGEgdHlwZSBkZWNsYXJlcyBhbiBleHRlbnNpb24gdGhhdCBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQsIGFuIGVycm9yIHdpbGxcbiAqIGJlIHRocm93bi4gIFRvIHN1cHByZXNzIHRoaXMgZXJyb3IgYW5kIGZvcmNlIHRoZSBleHRlbnNpb24gdG8gYmUgYXNzb2NpYXRlZFxuICogd2l0aCB0aGUgbmV3IHR5cGUsIHBhc3MgYGZvcmNlYD10cnVlLiAgQWx0ZXJuYXRpdmVseSwgeW91IG1heSBwcmVmaXggdGhlXG4gKiBleHRlbnNpb24gd2l0aCBcIipcIiB0byBtYXAgdGhlIHR5cGUgdG8gZXh0ZW5zaW9uLCB3aXRob3V0IG1hcHBpbmcgdGhlXG4gKiBleHRlbnNpb24gdG8gdGhlIHR5cGUuXG4gKlxuICogZS5nLiBtaW1lLmRlZmluZSh7J2F1ZGlvL3dhdicsIFsnd2F2J119LCB7J2F1ZGlvL3gtd2F2JywgWycqd2F2J119KTtcbiAqXG4gKlxuICogQHBhcmFtIG1hcCAoT2JqZWN0KSB0eXBlIGRlZmluaXRpb25zXG4gKiBAcGFyYW0gZm9yY2UgKEJvb2xlYW4pIGlmIHRydWUsIGZvcmNlIG92ZXJyaWRpbmcgb2YgZXhpc3RpbmcgZGVmaW5pdGlvbnNcbiAqL1xuTWltZS5wcm90b3R5cGUuZGVmaW5lID0gZnVuY3Rpb24odHlwZU1hcCwgZm9yY2UpIHtcbiAgZm9yICh2YXIgdHlwZSBpbiB0eXBlTWFwKSB7XG4gICAgdmFyIGV4dGVuc2lvbnMgPSB0eXBlTWFwW3R5cGVdLm1hcChmdW5jdGlvbih0KSB7cmV0dXJuIHQudG9Mb3dlckNhc2UoKX0pO1xuICAgIHR5cGUgPSB0eXBlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4dGVuc2lvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBleHQgPSBleHRlbnNpb25zW2ldO1xuXG4gICAgICAvLyAnKicgcHJlZml4ID0gbm90IHRoZSBwcmVmZXJyZWQgdHlwZSBmb3IgdGhpcyBleHRlbnNpb24uICBTbyBmaXh1cCB0aGVcbiAgICAgIC8vIGV4dGVuc2lvbiwgYW5kIHNraXAgaXQuXG4gICAgICBpZiAoZXh0WzBdID09ICcqJykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFmb3JjZSAmJiAoZXh0IGluIHRoaXMuX3R5cGVzKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ0F0dGVtcHQgdG8gY2hhbmdlIG1hcHBpbmcgZm9yIFwiJyArIGV4dCArXG4gICAgICAgICAgJ1wiIGV4dGVuc2lvbiBmcm9tIFwiJyArIHRoaXMuX3R5cGVzW2V4dF0gKyAnXCIgdG8gXCInICsgdHlwZSArXG4gICAgICAgICAgJ1wiLiBQYXNzIGBmb3JjZT10cnVlYCB0byBhbGxvdyB0aGlzLCBvdGhlcndpc2UgcmVtb3ZlIFwiJyArIGV4dCArXG4gICAgICAgICAgJ1wiIGZyb20gdGhlIGxpc3Qgb2YgZXh0ZW5zaW9ucyBmb3IgXCInICsgdHlwZSArICdcIi4nXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3R5cGVzW2V4dF0gPSB0eXBlO1xuICAgIH1cblxuICAgIC8vIFVzZSBmaXJzdCBleHRlbnNpb24gYXMgZGVmYXVsdFxuICAgIGlmIChmb3JjZSB8fCAhdGhpcy5fZXh0ZW5zaW9uc1t0eXBlXSkge1xuICAgICAgdmFyIGV4dCA9IGV4dGVuc2lvbnNbMF07XG4gICAgICB0aGlzLl9leHRlbnNpb25zW3R5cGVdID0gKGV4dFswXSAhPSAnKicpID8gZXh0IDogZXh0LnN1YnN0cigxKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogTG9va3VwIGEgbWltZSB0eXBlIGJhc2VkIG9uIGV4dGVuc2lvblxuICovXG5NaW1lLnByb3RvdHlwZS5nZXRUeXBlID0gZnVuY3Rpb24ocGF0aCkge1xuICBwYXRoID0gU3RyaW5nKHBhdGgpO1xuICB2YXIgbGFzdCA9IHBhdGgucmVwbGFjZSgvXi4qWy9cXFxcXS8sICcnKS50b0xvd2VyQ2FzZSgpO1xuICB2YXIgZXh0ID0gbGFzdC5yZXBsYWNlKC9eLipcXC4vLCAnJykudG9Mb3dlckNhc2UoKTtcblxuICB2YXIgaGFzUGF0aCA9IGxhc3QubGVuZ3RoIDwgcGF0aC5sZW5ndGg7XG4gIHZhciBoYXNEb3QgPSBleHQubGVuZ3RoIDwgbGFzdC5sZW5ndGggLSAxO1xuXG4gIHJldHVybiAoaGFzRG90IHx8ICFoYXNQYXRoKSAmJiB0aGlzLl90eXBlc1tleHRdIHx8IG51bGw7XG59O1xuXG4vKipcbiAqIFJldHVybiBmaWxlIGV4dGVuc2lvbiBhc3NvY2lhdGVkIHdpdGggYSBtaW1lIHR5cGVcbiAqL1xuTWltZS5wcm90b3R5cGUuZ2V0RXh0ZW5zaW9uID0gZnVuY3Rpb24odHlwZSkge1xuICB0eXBlID0gL15cXHMqKFteO1xcc10qKS8udGVzdCh0eXBlKSAmJiBSZWdFeHAuJDE7XG4gIHJldHVybiB0eXBlICYmIHRoaXMuX2V4dGVuc2lvbnNbdHlwZS50b0xvd2VyQ2FzZSgpXSB8fCBudWxsO1xufTtcblxudmFyIE1pbWVfMSA9IE1pbWU7XG5cbnZhciBzdGFuZGFyZCA9IHtcImFwcGxpY2F0aW9uL2FuZHJldy1pbnNldFwiOltcImV6XCJdLFwiYXBwbGljYXRpb24vYXBwbGl4d2FyZVwiOltcImF3XCJdLFwiYXBwbGljYXRpb24vYXRvbSt4bWxcIjpbXCJhdG9tXCJdLFwiYXBwbGljYXRpb24vYXRvbWNhdCt4bWxcIjpbXCJhdG9tY2F0XCJdLFwiYXBwbGljYXRpb24vYXRvbXN2Yyt4bWxcIjpbXCJhdG9tc3ZjXCJdLFwiYXBwbGljYXRpb24vYmRvY1wiOltcImJkb2NcIl0sXCJhcHBsaWNhdGlvbi9jY3htbCt4bWxcIjpbXCJjY3htbFwiXSxcImFwcGxpY2F0aW9uL2NkbWktY2FwYWJpbGl0eVwiOltcImNkbWlhXCJdLFwiYXBwbGljYXRpb24vY2RtaS1jb250YWluZXJcIjpbXCJjZG1pY1wiXSxcImFwcGxpY2F0aW9uL2NkbWktZG9tYWluXCI6W1wiY2RtaWRcIl0sXCJhcHBsaWNhdGlvbi9jZG1pLW9iamVjdFwiOltcImNkbWlvXCJdLFwiYXBwbGljYXRpb24vY2RtaS1xdWV1ZVwiOltcImNkbWlxXCJdLFwiYXBwbGljYXRpb24vY3Utc2VlbWVcIjpbXCJjdVwiXSxcImFwcGxpY2F0aW9uL2Rhc2greG1sXCI6W1wibXBkXCJdLFwiYXBwbGljYXRpb24vZGF2bW91bnQreG1sXCI6W1wiZGF2bW91bnRcIl0sXCJhcHBsaWNhdGlvbi9kb2Nib29rK3htbFwiOltcImRia1wiXSxcImFwcGxpY2F0aW9uL2Rzc2MrZGVyXCI6W1wiZHNzY1wiXSxcImFwcGxpY2F0aW9uL2Rzc2MreG1sXCI6W1wieGRzc2NcIl0sXCJhcHBsaWNhdGlvbi9lY21hc2NyaXB0XCI6W1wiZWNtYVwiLFwiZXNcIl0sXCJhcHBsaWNhdGlvbi9lbW1hK3htbFwiOltcImVtbWFcIl0sXCJhcHBsaWNhdGlvbi9lcHViK3ppcFwiOltcImVwdWJcIl0sXCJhcHBsaWNhdGlvbi9leGlcIjpbXCJleGlcIl0sXCJhcHBsaWNhdGlvbi9mb250LXRkcGZyXCI6W1wicGZyXCJdLFwiYXBwbGljYXRpb24vZ2VvK2pzb25cIjpbXCJnZW9qc29uXCJdLFwiYXBwbGljYXRpb24vZ21sK3htbFwiOltcImdtbFwiXSxcImFwcGxpY2F0aW9uL2dweCt4bWxcIjpbXCJncHhcIl0sXCJhcHBsaWNhdGlvbi9neGZcIjpbXCJneGZcIl0sXCJhcHBsaWNhdGlvbi9nemlwXCI6W1wiZ3pcIl0sXCJhcHBsaWNhdGlvbi9oanNvblwiOltcImhqc29uXCJdLFwiYXBwbGljYXRpb24vaHlwZXJzdHVkaW9cIjpbXCJzdGtcIl0sXCJhcHBsaWNhdGlvbi9pbmttbCt4bWxcIjpbXCJpbmtcIixcImlua21sXCJdLFwiYXBwbGljYXRpb24vaXBmaXhcIjpbXCJpcGZpeFwiXSxcImFwcGxpY2F0aW9uL2phdmEtYXJjaGl2ZVwiOltcImphclwiLFwid2FyXCIsXCJlYXJcIl0sXCJhcHBsaWNhdGlvbi9qYXZhLXNlcmlhbGl6ZWQtb2JqZWN0XCI6W1wic2VyXCJdLFwiYXBwbGljYXRpb24vamF2YS12bVwiOltcImNsYXNzXCJdLFwiYXBwbGljYXRpb24vamF2YXNjcmlwdFwiOltcImpzXCIsXCJtanNcIl0sXCJhcHBsaWNhdGlvbi9qc29uXCI6W1wianNvblwiLFwibWFwXCJdLFwiYXBwbGljYXRpb24vanNvbjVcIjpbXCJqc29uNVwiXSxcImFwcGxpY2F0aW9uL2pzb25tbCtqc29uXCI6W1wianNvbm1sXCJdLFwiYXBwbGljYXRpb24vbGQranNvblwiOltcImpzb25sZFwiXSxcImFwcGxpY2F0aW9uL2xvc3QreG1sXCI6W1wibG9zdHhtbFwiXSxcImFwcGxpY2F0aW9uL21hYy1iaW5oZXg0MFwiOltcImhxeFwiXSxcImFwcGxpY2F0aW9uL21hYy1jb21wYWN0cHJvXCI6W1wiY3B0XCJdLFwiYXBwbGljYXRpb24vbWFkcyt4bWxcIjpbXCJtYWRzXCJdLFwiYXBwbGljYXRpb24vbWFuaWZlc3QranNvblwiOltcIndlYm1hbmlmZXN0XCJdLFwiYXBwbGljYXRpb24vbWFyY1wiOltcIm1yY1wiXSxcImFwcGxpY2F0aW9uL21hcmN4bWwreG1sXCI6W1wibXJjeFwiXSxcImFwcGxpY2F0aW9uL21hdGhlbWF0aWNhXCI6W1wibWFcIixcIm5iXCIsXCJtYlwiXSxcImFwcGxpY2F0aW9uL21hdGhtbCt4bWxcIjpbXCJtYXRobWxcIl0sXCJhcHBsaWNhdGlvbi9tYm94XCI6W1wibWJveFwiXSxcImFwcGxpY2F0aW9uL21lZGlhc2VydmVyY29udHJvbCt4bWxcIjpbXCJtc2NtbFwiXSxcImFwcGxpY2F0aW9uL21ldGFsaW5rK3htbFwiOltcIm1ldGFsaW5rXCJdLFwiYXBwbGljYXRpb24vbWV0YWxpbms0K3htbFwiOltcIm1ldGE0XCJdLFwiYXBwbGljYXRpb24vbWV0cyt4bWxcIjpbXCJtZXRzXCJdLFwiYXBwbGljYXRpb24vbW9kcyt4bWxcIjpbXCJtb2RzXCJdLFwiYXBwbGljYXRpb24vbXAyMVwiOltcIm0yMVwiLFwibXAyMVwiXSxcImFwcGxpY2F0aW9uL21wNFwiOltcIm1wNHNcIixcIm00cFwiXSxcImFwcGxpY2F0aW9uL21zd29yZFwiOltcImRvY1wiLFwiZG90XCJdLFwiYXBwbGljYXRpb24vbXhmXCI6W1wibXhmXCJdLFwiYXBwbGljYXRpb24vbi1xdWFkc1wiOltcIm5xXCJdLFwiYXBwbGljYXRpb24vbi10cmlwbGVzXCI6W1wibnRcIl0sXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIjpbXCJiaW5cIixcImRtc1wiLFwibHJmXCIsXCJtYXJcIixcInNvXCIsXCJkaXN0XCIsXCJkaXN0elwiLFwicGtnXCIsXCJicGtcIixcImR1bXBcIixcImVsY1wiLFwiZGVwbG95XCIsXCJleGVcIixcImRsbFwiLFwiZGViXCIsXCJkbWdcIixcImlzb1wiLFwiaW1nXCIsXCJtc2lcIixcIm1zcFwiLFwibXNtXCIsXCJidWZmZXJcIl0sXCJhcHBsaWNhdGlvbi9vZGFcIjpbXCJvZGFcIl0sXCJhcHBsaWNhdGlvbi9vZWJwcy1wYWNrYWdlK3htbFwiOltcIm9wZlwiXSxcImFwcGxpY2F0aW9uL29nZ1wiOltcIm9neFwiXSxcImFwcGxpY2F0aW9uL29tZG9jK3htbFwiOltcIm9tZG9jXCJdLFwiYXBwbGljYXRpb24vb25lbm90ZVwiOltcIm9uZXRvY1wiLFwib25ldG9jMlwiLFwib25ldG1wXCIsXCJvbmVwa2dcIl0sXCJhcHBsaWNhdGlvbi9veHBzXCI6W1wib3hwc1wiXSxcImFwcGxpY2F0aW9uL3BhdGNoLW9wcy1lcnJvcit4bWxcIjpbXCJ4ZXJcIl0sXCJhcHBsaWNhdGlvbi9wZGZcIjpbXCJwZGZcIl0sXCJhcHBsaWNhdGlvbi9wZ3AtZW5jcnlwdGVkXCI6W1wicGdwXCJdLFwiYXBwbGljYXRpb24vcGdwLXNpZ25hdHVyZVwiOltcImFzY1wiLFwic2lnXCJdLFwiYXBwbGljYXRpb24vcGljcy1ydWxlc1wiOltcInByZlwiXSxcImFwcGxpY2F0aW9uL3BrY3MxMFwiOltcInAxMFwiXSxcImFwcGxpY2F0aW9uL3BrY3M3LW1pbWVcIjpbXCJwN21cIixcInA3Y1wiXSxcImFwcGxpY2F0aW9uL3BrY3M3LXNpZ25hdHVyZVwiOltcInA3c1wiXSxcImFwcGxpY2F0aW9uL3BrY3M4XCI6W1wicDhcIl0sXCJhcHBsaWNhdGlvbi9wa2l4LWF0dHItY2VydFwiOltcImFjXCJdLFwiYXBwbGljYXRpb24vcGtpeC1jZXJ0XCI6W1wiY2VyXCJdLFwiYXBwbGljYXRpb24vcGtpeC1jcmxcIjpbXCJjcmxcIl0sXCJhcHBsaWNhdGlvbi9wa2l4LXBraXBhdGhcIjpbXCJwa2lwYXRoXCJdLFwiYXBwbGljYXRpb24vcGtpeGNtcFwiOltcInBraVwiXSxcImFwcGxpY2F0aW9uL3Bscyt4bWxcIjpbXCJwbHNcIl0sXCJhcHBsaWNhdGlvbi9wb3N0c2NyaXB0XCI6W1wiYWlcIixcImVwc1wiLFwicHNcIl0sXCJhcHBsaWNhdGlvbi9wc2tjK3htbFwiOltcInBza2N4bWxcIl0sXCJhcHBsaWNhdGlvbi9yYW1sK3lhbWxcIjpbXCJyYW1sXCJdLFwiYXBwbGljYXRpb24vcmRmK3htbFwiOltcInJkZlwiLFwib3dsXCJdLFwiYXBwbGljYXRpb24vcmVnaW5mbyt4bWxcIjpbXCJyaWZcIl0sXCJhcHBsaWNhdGlvbi9yZWxheC1uZy1jb21wYWN0LXN5bnRheFwiOltcInJuY1wiXSxcImFwcGxpY2F0aW9uL3Jlc291cmNlLWxpc3RzK3htbFwiOltcInJsXCJdLFwiYXBwbGljYXRpb24vcmVzb3VyY2UtbGlzdHMtZGlmZit4bWxcIjpbXCJybGRcIl0sXCJhcHBsaWNhdGlvbi9ybHMtc2VydmljZXMreG1sXCI6W1wicnNcIl0sXCJhcHBsaWNhdGlvbi9ycGtpLWdob3N0YnVzdGVyc1wiOltcImdiclwiXSxcImFwcGxpY2F0aW9uL3Jwa2ktbWFuaWZlc3RcIjpbXCJtZnRcIl0sXCJhcHBsaWNhdGlvbi9ycGtpLXJvYVwiOltcInJvYVwiXSxcImFwcGxpY2F0aW9uL3JzZCt4bWxcIjpbXCJyc2RcIl0sXCJhcHBsaWNhdGlvbi9yc3MreG1sXCI6W1wicnNzXCJdLFwiYXBwbGljYXRpb24vcnRmXCI6W1wicnRmXCJdLFwiYXBwbGljYXRpb24vc2JtbCt4bWxcIjpbXCJzYm1sXCJdLFwiYXBwbGljYXRpb24vc2N2cC1jdi1yZXF1ZXN0XCI6W1wic2NxXCJdLFwiYXBwbGljYXRpb24vc2N2cC1jdi1yZXNwb25zZVwiOltcInNjc1wiXSxcImFwcGxpY2F0aW9uL3NjdnAtdnAtcmVxdWVzdFwiOltcInNwcVwiXSxcImFwcGxpY2F0aW9uL3NjdnAtdnAtcmVzcG9uc2VcIjpbXCJzcHBcIl0sXCJhcHBsaWNhdGlvbi9zZHBcIjpbXCJzZHBcIl0sXCJhcHBsaWNhdGlvbi9zZXQtcGF5bWVudC1pbml0aWF0aW9uXCI6W1wic2V0cGF5XCJdLFwiYXBwbGljYXRpb24vc2V0LXJlZ2lzdHJhdGlvbi1pbml0aWF0aW9uXCI6W1wic2V0cmVnXCJdLFwiYXBwbGljYXRpb24vc2hmK3htbFwiOltcInNoZlwiXSxcImFwcGxpY2F0aW9uL3NpZXZlXCI6W1wic2l2XCIsXCJzaWV2ZVwiXSxcImFwcGxpY2F0aW9uL3NtaWwreG1sXCI6W1wic21pXCIsXCJzbWlsXCJdLFwiYXBwbGljYXRpb24vc3BhcnFsLXF1ZXJ5XCI6W1wicnFcIl0sXCJhcHBsaWNhdGlvbi9zcGFycWwtcmVzdWx0cyt4bWxcIjpbXCJzcnhcIl0sXCJhcHBsaWNhdGlvbi9zcmdzXCI6W1wiZ3JhbVwiXSxcImFwcGxpY2F0aW9uL3NyZ3MreG1sXCI6W1wiZ3J4bWxcIl0sXCJhcHBsaWNhdGlvbi9zcnUreG1sXCI6W1wic3J1XCJdLFwiYXBwbGljYXRpb24vc3NkbCt4bWxcIjpbXCJzc2RsXCJdLFwiYXBwbGljYXRpb24vc3NtbCt4bWxcIjpbXCJzc21sXCJdLFwiYXBwbGljYXRpb24vdGVpK3htbFwiOltcInRlaVwiLFwidGVpY29ycHVzXCJdLFwiYXBwbGljYXRpb24vdGhyYXVkK3htbFwiOltcInRmaVwiXSxcImFwcGxpY2F0aW9uL3RpbWVzdGFtcGVkLWRhdGFcIjpbXCJ0c2RcIl0sXCJhcHBsaWNhdGlvbi92b2ljZXhtbCt4bWxcIjpbXCJ2eG1sXCJdLFwiYXBwbGljYXRpb24vd2FzbVwiOltcIndhc21cIl0sXCJhcHBsaWNhdGlvbi93aWRnZXRcIjpbXCJ3Z3RcIl0sXCJhcHBsaWNhdGlvbi93aW5obHBcIjpbXCJobHBcIl0sXCJhcHBsaWNhdGlvbi93c2RsK3htbFwiOltcIndzZGxcIl0sXCJhcHBsaWNhdGlvbi93c3BvbGljeSt4bWxcIjpbXCJ3c3BvbGljeVwiXSxcImFwcGxpY2F0aW9uL3hhbWwreG1sXCI6W1wieGFtbFwiXSxcImFwcGxpY2F0aW9uL3hjYXAtZGlmZit4bWxcIjpbXCJ4ZGZcIl0sXCJhcHBsaWNhdGlvbi94ZW5jK3htbFwiOltcInhlbmNcIl0sXCJhcHBsaWNhdGlvbi94aHRtbCt4bWxcIjpbXCJ4aHRtbFwiLFwieGh0XCJdLFwiYXBwbGljYXRpb24veG1sXCI6W1wieG1sXCIsXCJ4c2xcIixcInhzZFwiLFwicm5nXCJdLFwiYXBwbGljYXRpb24veG1sLWR0ZFwiOltcImR0ZFwiXSxcImFwcGxpY2F0aW9uL3hvcCt4bWxcIjpbXCJ4b3BcIl0sXCJhcHBsaWNhdGlvbi94cHJvYyt4bWxcIjpbXCJ4cGxcIl0sXCJhcHBsaWNhdGlvbi94c2x0K3htbFwiOltcInhzbHRcIl0sXCJhcHBsaWNhdGlvbi94c3BmK3htbFwiOltcInhzcGZcIl0sXCJhcHBsaWNhdGlvbi94dit4bWxcIjpbXCJteG1sXCIsXCJ4aHZtbFwiLFwieHZtbFwiLFwieHZtXCJdLFwiYXBwbGljYXRpb24veWFuZ1wiOltcInlhbmdcIl0sXCJhcHBsaWNhdGlvbi95aW4reG1sXCI6W1wieWluXCJdLFwiYXBwbGljYXRpb24vemlwXCI6W1wiemlwXCJdLFwiYXVkaW8vM2dwcFwiOltcIiozZ3BwXCJdLFwiYXVkaW8vYWRwY21cIjpbXCJhZHBcIl0sXCJhdWRpby9iYXNpY1wiOltcImF1XCIsXCJzbmRcIl0sXCJhdWRpby9taWRpXCI6W1wibWlkXCIsXCJtaWRpXCIsXCJrYXJcIixcInJtaVwiXSxcImF1ZGlvL21wM1wiOltcIiptcDNcIl0sXCJhdWRpby9tcDRcIjpbXCJtNGFcIixcIm1wNGFcIl0sXCJhdWRpby9tcGVnXCI6W1wibXBnYVwiLFwibXAyXCIsXCJtcDJhXCIsXCJtcDNcIixcIm0yYVwiLFwibTNhXCJdLFwiYXVkaW8vb2dnXCI6W1wib2dhXCIsXCJvZ2dcIixcInNweFwiXSxcImF1ZGlvL3MzbVwiOltcInMzbVwiXSxcImF1ZGlvL3NpbGtcIjpbXCJzaWxcIl0sXCJhdWRpby93YXZcIjpbXCJ3YXZcIl0sXCJhdWRpby93YXZlXCI6W1wiKndhdlwiXSxcImF1ZGlvL3dlYm1cIjpbXCJ3ZWJhXCJdLFwiYXVkaW8veG1cIjpbXCJ4bVwiXSxcImZvbnQvY29sbGVjdGlvblwiOltcInR0Y1wiXSxcImZvbnQvb3RmXCI6W1wib3RmXCJdLFwiZm9udC90dGZcIjpbXCJ0dGZcIl0sXCJmb250L3dvZmZcIjpbXCJ3b2ZmXCJdLFwiZm9udC93b2ZmMlwiOltcIndvZmYyXCJdLFwiaW1hZ2UvYWNlc1wiOltcImV4clwiXSxcImltYWdlL2FwbmdcIjpbXCJhcG5nXCJdLFwiaW1hZ2UvYm1wXCI6W1wiYm1wXCJdLFwiaW1hZ2UvY2dtXCI6W1wiY2dtXCJdLFwiaW1hZ2UvZGljb20tcmxlXCI6W1wiZHJsZVwiXSxcImltYWdlL2VtZlwiOltcImVtZlwiXSxcImltYWdlL2ZpdHNcIjpbXCJmaXRzXCJdLFwiaW1hZ2UvZzNmYXhcIjpbXCJnM1wiXSxcImltYWdlL2dpZlwiOltcImdpZlwiXSxcImltYWdlL2hlaWNcIjpbXCJoZWljXCJdLFwiaW1hZ2UvaGVpYy1zZXF1ZW5jZVwiOltcImhlaWNzXCJdLFwiaW1hZ2UvaGVpZlwiOltcImhlaWZcIl0sXCJpbWFnZS9oZWlmLXNlcXVlbmNlXCI6W1wiaGVpZnNcIl0sXCJpbWFnZS9pZWZcIjpbXCJpZWZcIl0sXCJpbWFnZS9qbHNcIjpbXCJqbHNcIl0sXCJpbWFnZS9qcDJcIjpbXCJqcDJcIixcImpwZzJcIl0sXCJpbWFnZS9qcGVnXCI6W1wianBlZ1wiLFwianBnXCIsXCJqcGVcIl0sXCJpbWFnZS9qcG1cIjpbXCJqcG1cIl0sXCJpbWFnZS9qcHhcIjpbXCJqcHhcIixcImpwZlwiXSxcImltYWdlL2p4clwiOltcImp4clwiXSxcImltYWdlL2t0eFwiOltcImt0eFwiXSxcImltYWdlL3BuZ1wiOltcInBuZ1wiXSxcImltYWdlL3NnaVwiOltcInNnaVwiXSxcImltYWdlL3N2Zyt4bWxcIjpbXCJzdmdcIixcInN2Z3pcIl0sXCJpbWFnZS90MzhcIjpbXCJ0MzhcIl0sXCJpbWFnZS90aWZmXCI6W1widGlmXCIsXCJ0aWZmXCJdLFwiaW1hZ2UvdGlmZi1meFwiOltcInRmeFwiXSxcImltYWdlL3dlYnBcIjpbXCJ3ZWJwXCJdLFwiaW1hZ2Uvd21mXCI6W1wid21mXCJdLFwibWVzc2FnZS9kaXNwb3NpdGlvbi1ub3RpZmljYXRpb25cIjpbXCJkaXNwb3NpdGlvbi1ub3RpZmljYXRpb25cIl0sXCJtZXNzYWdlL2dsb2JhbFwiOltcInU4bXNnXCJdLFwibWVzc2FnZS9nbG9iYWwtZGVsaXZlcnktc3RhdHVzXCI6W1widThkc25cIl0sXCJtZXNzYWdlL2dsb2JhbC1kaXNwb3NpdGlvbi1ub3RpZmljYXRpb25cIjpbXCJ1OG1kblwiXSxcIm1lc3NhZ2UvZ2xvYmFsLWhlYWRlcnNcIjpbXCJ1OGhkclwiXSxcIm1lc3NhZ2UvcmZjODIyXCI6W1wiZW1sXCIsXCJtaW1lXCJdLFwibW9kZWwvM21mXCI6W1wiM21mXCJdLFwibW9kZWwvZ2x0Zitqc29uXCI6W1wiZ2x0ZlwiXSxcIm1vZGVsL2dsdGYtYmluYXJ5XCI6W1wiZ2xiXCJdLFwibW9kZWwvaWdlc1wiOltcImlnc1wiLFwiaWdlc1wiXSxcIm1vZGVsL21lc2hcIjpbXCJtc2hcIixcIm1lc2hcIixcInNpbG9cIl0sXCJtb2RlbC9zdGxcIjpbXCJzdGxcIl0sXCJtb2RlbC92cm1sXCI6W1wid3JsXCIsXCJ2cm1sXCJdLFwibW9kZWwveDNkK2JpbmFyeVwiOltcIip4M2RiXCIsXCJ4M2RielwiXSxcIm1vZGVsL3gzZCtmYXN0aW5mb3NldFwiOltcIngzZGJcIl0sXCJtb2RlbC94M2QrdnJtbFwiOltcIip4M2R2XCIsXCJ4M2R2elwiXSxcIm1vZGVsL3gzZCt4bWxcIjpbXCJ4M2RcIixcIngzZHpcIl0sXCJtb2RlbC94M2QtdnJtbFwiOltcIngzZHZcIl0sXCJ0ZXh0L2NhY2hlLW1hbmlmZXN0XCI6W1wiYXBwY2FjaGVcIixcIm1hbmlmZXN0XCJdLFwidGV4dC9jYWxlbmRhclwiOltcImljc1wiLFwiaWZiXCJdLFwidGV4dC9jb2ZmZWVzY3JpcHRcIjpbXCJjb2ZmZWVcIixcImxpdGNvZmZlZVwiXSxcInRleHQvY3NzXCI6W1wiY3NzXCJdLFwidGV4dC9jc3ZcIjpbXCJjc3ZcIl0sXCJ0ZXh0L2h0bWxcIjpbXCJodG1sXCIsXCJodG1cIixcInNodG1sXCJdLFwidGV4dC9qYWRlXCI6W1wiamFkZVwiXSxcInRleHQvanN4XCI6W1wianN4XCJdLFwidGV4dC9sZXNzXCI6W1wibGVzc1wiXSxcInRleHQvbWFya2Rvd25cIjpbXCJtYXJrZG93blwiLFwibWRcIl0sXCJ0ZXh0L21hdGhtbFwiOltcIm1tbFwiXSxcInRleHQvbWR4XCI6W1wibWR4XCJdLFwidGV4dC9uM1wiOltcIm4zXCJdLFwidGV4dC9wbGFpblwiOltcInR4dFwiLFwidGV4dFwiLFwiY29uZlwiLFwiZGVmXCIsXCJsaXN0XCIsXCJsb2dcIixcImluXCIsXCJpbmlcIl0sXCJ0ZXh0L3JpY2h0ZXh0XCI6W1wicnR4XCJdLFwidGV4dC9ydGZcIjpbXCIqcnRmXCJdLFwidGV4dC9zZ21sXCI6W1wic2dtbFwiLFwic2dtXCJdLFwidGV4dC9zaGV4XCI6W1wic2hleFwiXSxcInRleHQvc2xpbVwiOltcInNsaW1cIixcInNsbVwiXSxcInRleHQvc3R5bHVzXCI6W1wic3R5bHVzXCIsXCJzdHlsXCJdLFwidGV4dC90YWItc2VwYXJhdGVkLXZhbHVlc1wiOltcInRzdlwiXSxcInRleHQvdHJvZmZcIjpbXCJ0XCIsXCJ0clwiLFwicm9mZlwiLFwibWFuXCIsXCJtZVwiLFwibXNcIl0sXCJ0ZXh0L3R1cnRsZVwiOltcInR0bFwiXSxcInRleHQvdXJpLWxpc3RcIjpbXCJ1cmlcIixcInVyaXNcIixcInVybHNcIl0sXCJ0ZXh0L3ZjYXJkXCI6W1widmNhcmRcIl0sXCJ0ZXh0L3Z0dFwiOltcInZ0dFwiXSxcInRleHQveG1sXCI6W1wiKnhtbFwiXSxcInRleHQveWFtbFwiOltcInlhbWxcIixcInltbFwiXSxcInZpZGVvLzNncHBcIjpbXCIzZ3BcIixcIjNncHBcIl0sXCJ2aWRlby8zZ3BwMlwiOltcIjNnMlwiXSxcInZpZGVvL2gyNjFcIjpbXCJoMjYxXCJdLFwidmlkZW8vaDI2M1wiOltcImgyNjNcIl0sXCJ2aWRlby9oMjY0XCI6W1wiaDI2NFwiXSxcInZpZGVvL2pwZWdcIjpbXCJqcGd2XCJdLFwidmlkZW8vanBtXCI6W1wiKmpwbVwiLFwianBnbVwiXSxcInZpZGVvL21qMlwiOltcIm1qMlwiLFwibWpwMlwiXSxcInZpZGVvL21wMnRcIjpbXCJ0c1wiXSxcInZpZGVvL21wNFwiOltcIm1wNFwiLFwibXA0dlwiLFwibXBnNFwiXSxcInZpZGVvL21wZWdcIjpbXCJtcGVnXCIsXCJtcGdcIixcIm1wZVwiLFwibTF2XCIsXCJtMnZcIl0sXCJ2aWRlby9vZ2dcIjpbXCJvZ3ZcIl0sXCJ2aWRlby9xdWlja3RpbWVcIjpbXCJxdFwiLFwibW92XCJdLFwidmlkZW8vd2VibVwiOltcIndlYm1cIl19O1xuXG52YXIgbGl0ZSA9IG5ldyBNaW1lXzEoc3RhbmRhcmQpO1xuXG5mdW5jdGlvbiBnZXRfc2VydmVyX3JvdXRlX2hhbmRsZXIocm91dGVzKSB7XG5cdGFzeW5jIGZ1bmN0aW9uIGhhbmRsZV9yb3V0ZShyb3V0ZSwgcmVxLCByZXMsIG5leHQpIHtcblx0XHRyZXEucGFyYW1zID0gcm91dGUucGFyYW1zKHJvdXRlLnBhdHRlcm4uZXhlYyhyZXEucGF0aCkpO1xuXG5cdFx0Y29uc3QgbWV0aG9kID0gcmVxLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuXHRcdC8vICdkZWxldGUnIGNhbm5vdCBiZSBleHBvcnRlZCBmcm9tIGEgbW9kdWxlIGJlY2F1c2UgaXQgaXMgYSBrZXl3b3JkLFxuXHRcdC8vIHNvIGNoZWNrIGZvciAnZGVsJyBpbnN0ZWFkXG5cdFx0Y29uc3QgbWV0aG9kX2V4cG9ydCA9IG1ldGhvZCA9PT0gJ2RlbGV0ZScgPyAnZGVsJyA6IG1ldGhvZDtcblx0XHRjb25zdCBoYW5kbGVfbWV0aG9kID0gcm91dGUuaGFuZGxlcnNbbWV0aG9kX2V4cG9ydF07XG5cdFx0aWYgKGhhbmRsZV9tZXRob2QpIHtcblx0XHRcdGlmIChwcm9jZXNzLmVudi5TQVBQRVJfRVhQT1JUKSB7XG5cdFx0XHRcdGNvbnN0IHsgd3JpdGUsIGVuZCwgc2V0SGVhZGVyIH0gPSByZXM7XG5cdFx0XHRcdGNvbnN0IGNodW5rcyA9IFtdO1xuXHRcdFx0XHRjb25zdCBoZWFkZXJzID0ge307XG5cblx0XHRcdFx0Ly8gaW50ZXJjZXB0IGRhdGEgc28gdGhhdCBpdCBjYW4gYmUgZXhwb3J0ZWRcblx0XHRcdFx0cmVzLndyaXRlID0gZnVuY3Rpb24oY2h1bmspIHtcblx0XHRcdFx0XHRjaHVua3MucHVzaChCdWZmZXIuZnJvbShjaHVuaykpO1xuXHRcdFx0XHRcdHdyaXRlLmFwcGx5KHJlcywgYXJndW1lbnRzKTtcblx0XHRcdFx0fTtcblxuXHRcdFx0XHRyZXMuc2V0SGVhZGVyID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcblx0XHRcdFx0XHRoZWFkZXJzW25hbWUudG9Mb3dlckNhc2UoKV0gPSB2YWx1ZTtcblx0XHRcdFx0XHRzZXRIZWFkZXIuYXBwbHkocmVzLCBhcmd1bWVudHMpO1xuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdHJlcy5lbmQgPSBmdW5jdGlvbihjaHVuaykge1xuXHRcdFx0XHRcdGlmIChjaHVuaykgY2h1bmtzLnB1c2goQnVmZmVyLmZyb20oY2h1bmspKTtcblx0XHRcdFx0XHRlbmQuYXBwbHkocmVzLCBhcmd1bWVudHMpO1xuXG5cdFx0XHRcdFx0cHJvY2Vzcy5zZW5kKHtcblx0XHRcdFx0XHRcdF9fc2FwcGVyX186IHRydWUsXG5cdFx0XHRcdFx0XHRldmVudDogJ2ZpbGUnLFxuXHRcdFx0XHRcdFx0dXJsOiByZXEudXJsLFxuXHRcdFx0XHRcdFx0bWV0aG9kOiByZXEubWV0aG9kLFxuXHRcdFx0XHRcdFx0c3RhdHVzOiByZXMuc3RhdHVzQ29kZSxcblx0XHRcdFx0XHRcdHR5cGU6IGhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddLFxuXHRcdFx0XHRcdFx0Ym9keTogQnVmZmVyLmNvbmNhdChjaHVua3MpLnRvU3RyaW5nKClcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgaGFuZGxlX25leHQgPSAoZXJyKSA9PiB7XG5cdFx0XHRcdGlmIChlcnIpIHtcblx0XHRcdFx0XHRyZXMuc3RhdHVzQ29kZSA9IDUwMDtcblx0XHRcdFx0XHRyZXMuZW5kKGVyci5tZXNzYWdlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwcm9jZXNzLm5leHRUaWNrKG5leHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBoYW5kbGVfbWV0aG9kKHJlcSwgcmVzLCBoYW5kbGVfbmV4dCk7XG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpO1xuXHRcdFx0XHRoYW5kbGVfbmV4dChlcnIpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBubyBtYXRjaGluZyBoYW5kbGVyIGZvciBtZXRob2Rcblx0XHRcdHByb2Nlc3MubmV4dFRpY2sobmV4dCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZ1bmN0aW9uIGZpbmRfcm91dGUocmVxLCByZXMsIG5leHQpIHtcblx0XHRmb3IgKGNvbnN0IHJvdXRlIG9mIHJvdXRlcykge1xuXHRcdFx0aWYgKHJvdXRlLnBhdHRlcm4udGVzdChyZXEucGF0aCkpIHtcblx0XHRcdFx0aGFuZGxlX3JvdXRlKHJvdXRlLCByZXEsIHJlcywgbmV4dCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRuZXh0KCk7XG5cdH07XG59XG5cbi8qIVxuICogY29va2llXG4gKiBDb3B5cmlnaHQoYykgMjAxMi0yMDE0IFJvbWFuIFNodHlsbWFuXG4gKiBDb3B5cmlnaHQoYykgMjAxNSBEb3VnbGFzIENocmlzdG9waGVyIFdpbHNvblxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqIEBwdWJsaWNcbiAqL1xuXG52YXIgcGFyc2VfMSA9IHBhcnNlO1xudmFyIHNlcmlhbGl6ZV8xID0gc2VyaWFsaXplO1xuXG4vKipcbiAqIE1vZHVsZSB2YXJpYWJsZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBkZWNvZGUgPSBkZWNvZGVVUklDb21wb25lbnQ7XG52YXIgZW5jb2RlID0gZW5jb2RlVVJJQ29tcG9uZW50O1xudmFyIHBhaXJTcGxpdFJlZ0V4cCA9IC87ICovO1xuXG4vKipcbiAqIFJlZ0V4cCB0byBtYXRjaCBmaWVsZC1jb250ZW50IGluIFJGQyA3MjMwIHNlYyAzLjJcbiAqXG4gKiBmaWVsZC1jb250ZW50ID0gZmllbGQtdmNoYXIgWyAxKiggU1AgLyBIVEFCICkgZmllbGQtdmNoYXIgXVxuICogZmllbGQtdmNoYXIgICA9IFZDSEFSIC8gb2JzLXRleHRcbiAqIG9icy10ZXh0ICAgICAgPSAleDgwLUZGXG4gKi9cblxudmFyIGZpZWxkQ29udGVudFJlZ0V4cCA9IC9eW1xcdTAwMDlcXHUwMDIwLVxcdTAwN2VcXHUwMDgwLVxcdTAwZmZdKyQvO1xuXG4vKipcbiAqIFBhcnNlIGEgY29va2llIGhlYWRlci5cbiAqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gY29va2llIGhlYWRlciBzdHJpbmcgaW50byBhbiBvYmplY3RcbiAqIFRoZSBvYmplY3QgaGFzIHRoZSB2YXJpb3VzIGNvb2tpZXMgYXMga2V5cyhuYW1lcykgPT4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybiB7b2JqZWN0fVxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBzdHIgbXVzdCBiZSBhIHN0cmluZycpO1xuICB9XG5cbiAgdmFyIG9iaiA9IHt9O1xuICB2YXIgb3B0ID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHBhaXJzID0gc3RyLnNwbGl0KHBhaXJTcGxpdFJlZ0V4cCk7XG4gIHZhciBkZWMgPSBvcHQuZGVjb2RlIHx8IGRlY29kZTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBhaXIgPSBwYWlyc1tpXTtcbiAgICB2YXIgZXFfaWR4ID0gcGFpci5pbmRleE9mKCc9Jyk7XG5cbiAgICAvLyBza2lwIHRoaW5ncyB0aGF0IGRvbid0IGxvb2sgbGlrZSBrZXk9dmFsdWVcbiAgICBpZiAoZXFfaWR4IDwgMCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIGtleSA9IHBhaXIuc3Vic3RyKDAsIGVxX2lkeCkudHJpbSgpO1xuICAgIHZhciB2YWwgPSBwYWlyLnN1YnN0cigrK2VxX2lkeCwgcGFpci5sZW5ndGgpLnRyaW0oKTtcblxuICAgIC8vIHF1b3RlZCB2YWx1ZXNcbiAgICBpZiAoJ1wiJyA9PSB2YWxbMF0pIHtcbiAgICAgIHZhbCA9IHZhbC5zbGljZSgxLCAtMSk7XG4gICAgfVxuXG4gICAgLy8gb25seSBhc3NpZ24gb25jZVxuICAgIGlmICh1bmRlZmluZWQgPT0gb2JqW2tleV0pIHtcbiAgICAgIG9ialtrZXldID0gdHJ5RGVjb2RlKHZhbCwgZGVjKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIFNlcmlhbGl6ZSBkYXRhIGludG8gYSBjb29raWUgaGVhZGVyLlxuICpcbiAqIFNlcmlhbGl6ZSB0aGUgYSBuYW1lIHZhbHVlIHBhaXIgaW50byBhIGNvb2tpZSBzdHJpbmcgc3VpdGFibGUgZm9yXG4gKiBodHRwIGhlYWRlcnMuIEFuIG9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0IHNwZWNpZmllZCBjb29raWUgcGFyYW1ldGVycy5cbiAqXG4gKiBzZXJpYWxpemUoJ2ZvbycsICdiYXInLCB7IGh0dHBPbmx5OiB0cnVlIH0pXG4gKiAgID0+IFwiZm9vPWJhcjsgaHR0cE9ubHlcIlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gc2VyaWFsaXplKG5hbWUsIHZhbCwgb3B0aW9ucykge1xuICB2YXIgb3B0ID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIGVuYyA9IG9wdC5lbmNvZGUgfHwgZW5jb2RlO1xuXG4gIGlmICh0eXBlb2YgZW5jICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIGVuY29kZSBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICBpZiAoIWZpZWxkQ29udGVudFJlZ0V4cC50ZXN0KG5hbWUpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgbmFtZSBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICB2YXIgdmFsdWUgPSBlbmModmFsKTtcblxuICBpZiAodmFsdWUgJiYgIWZpZWxkQ29udGVudFJlZ0V4cC50ZXN0KHZhbHVlKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IHZhbCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICB2YXIgc3RyID0gbmFtZSArICc9JyArIHZhbHVlO1xuXG4gIGlmIChudWxsICE9IG9wdC5tYXhBZ2UpIHtcbiAgICB2YXIgbWF4QWdlID0gb3B0Lm1heEFnZSAtIDA7XG4gICAgaWYgKGlzTmFOKG1heEFnZSkpIHRocm93IG5ldyBFcnJvcignbWF4QWdlIHNob3VsZCBiZSBhIE51bWJlcicpO1xuICAgIHN0ciArPSAnOyBNYXgtQWdlPScgKyBNYXRoLmZsb29yKG1heEFnZSk7XG4gIH1cblxuICBpZiAob3B0LmRvbWFpbikge1xuICAgIGlmICghZmllbGRDb250ZW50UmVnRXhwLnRlc3Qob3B0LmRvbWFpbikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBkb21haW4gaXMgaW52YWxpZCcpO1xuICAgIH1cblxuICAgIHN0ciArPSAnOyBEb21haW49JyArIG9wdC5kb21haW47XG4gIH1cblxuICBpZiAob3B0LnBhdGgpIHtcbiAgICBpZiAoIWZpZWxkQ29udGVudFJlZ0V4cC50ZXN0KG9wdC5wYXRoKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIHBhdGggaXMgaW52YWxpZCcpO1xuICAgIH1cblxuICAgIHN0ciArPSAnOyBQYXRoPScgKyBvcHQucGF0aDtcbiAgfVxuXG4gIGlmIChvcHQuZXhwaXJlcykge1xuICAgIGlmICh0eXBlb2Ygb3B0LmV4cGlyZXMudG9VVENTdHJpbmcgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBleHBpcmVzIGlzIGludmFsaWQnKTtcbiAgICB9XG5cbiAgICBzdHIgKz0gJzsgRXhwaXJlcz0nICsgb3B0LmV4cGlyZXMudG9VVENTdHJpbmcoKTtcbiAgfVxuXG4gIGlmIChvcHQuaHR0cE9ubHkpIHtcbiAgICBzdHIgKz0gJzsgSHR0cE9ubHknO1xuICB9XG5cbiAgaWYgKG9wdC5zZWN1cmUpIHtcbiAgICBzdHIgKz0gJzsgU2VjdXJlJztcbiAgfVxuXG4gIGlmIChvcHQuc2FtZVNpdGUpIHtcbiAgICB2YXIgc2FtZVNpdGUgPSB0eXBlb2Ygb3B0LnNhbWVTaXRlID09PSAnc3RyaW5nJ1xuICAgICAgPyBvcHQuc2FtZVNpdGUudG9Mb3dlckNhc2UoKSA6IG9wdC5zYW1lU2l0ZTtcblxuICAgIHN3aXRjaCAoc2FtZVNpdGUpIHtcbiAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgc3RyICs9ICc7IFNhbWVTaXRlPVN0cmljdCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbGF4JzpcbiAgICAgICAgc3RyICs9ICc7IFNhbWVTaXRlPUxheCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3RyaWN0JzpcbiAgICAgICAgc3RyICs9ICc7IFNhbWVTaXRlPVN0cmljdCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbm9uZSc6XG4gICAgICAgIHN0ciArPSAnOyBTYW1lU2l0ZT1Ob25lJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gc2FtZVNpdGUgaXMgaW52YWxpZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHI7XG59XG5cbi8qKlxuICogVHJ5IGRlY29kaW5nIGEgc3RyaW5nIHVzaW5nIGEgZGVjb2RpbmcgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHBhcmFtIHtmdW5jdGlvbn0gZGVjb2RlXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHRyeURlY29kZShzdHIsIGRlY29kZSkge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGUoc3RyKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cblxudmFyIGNvb2tpZSA9IHtcblx0cGFyc2U6IHBhcnNlXzEsXG5cdHNlcmlhbGl6ZTogc2VyaWFsaXplXzFcbn07XG5cbnZhciBjaGFycyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXyQnO1xudmFyIHVuc2FmZUNoYXJzID0gL1s8PlxcYlxcZlxcblxcclxcdFxcMFxcdTIwMjhcXHUyMDI5XS9nO1xudmFyIHJlc2VydmVkID0gL14oPzpkb3xpZnxpbnxmb3J8aW50fGxldHxuZXd8dHJ5fHZhcnxieXRlfGNhc2V8Y2hhcnxlbHNlfGVudW18Z290b3xsb25nfHRoaXN8dm9pZHx3aXRofGF3YWl0fGJyZWFrfGNhdGNofGNsYXNzfGNvbnN0fGZpbmFsfGZsb2F0fHNob3J0fHN1cGVyfHRocm93fHdoaWxlfHlpZWxkfGRlbGV0ZXxkb3VibGV8ZXhwb3J0fGltcG9ydHxuYXRpdmV8cmV0dXJufHN3aXRjaHx0aHJvd3N8dHlwZW9mfGJvb2xlYW58ZGVmYXVsdHxleHRlbmRzfGZpbmFsbHl8cGFja2FnZXxwcml2YXRlfGFic3RyYWN0fGNvbnRpbnVlfGRlYnVnZ2VyfGZ1bmN0aW9ufHZvbGF0aWxlfGludGVyZmFjZXxwcm90ZWN0ZWR8dHJhbnNpZW50fGltcGxlbWVudHN8aW5zdGFuY2VvZnxzeW5jaHJvbml6ZWQpJC87XG52YXIgZXNjYXBlZCA9IHtcbiAgICAnPCc6ICdcXFxcdTAwM0MnLFxuICAgICc+JzogJ1xcXFx1MDAzRScsXG4gICAgJy8nOiAnXFxcXHUwMDJGJyxcbiAgICAnXFxcXCc6ICdcXFxcXFxcXCcsXG4gICAgJ1xcYic6ICdcXFxcYicsXG4gICAgJ1xcZic6ICdcXFxcZicsXG4gICAgJ1xcbic6ICdcXFxcbicsXG4gICAgJ1xccic6ICdcXFxccicsXG4gICAgJ1xcdCc6ICdcXFxcdCcsXG4gICAgJ1xcMCc6ICdcXFxcMCcsXG4gICAgJ1xcdTIwMjgnOiAnXFxcXHUyMDI4JyxcbiAgICAnXFx1MjAyOSc6ICdcXFxcdTIwMjknXG59O1xudmFyIG9iamVjdFByb3RvT3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE9iamVjdC5wcm90b3R5cGUpLnNvcnQoKS5qb2luKCdcXDAnKTtcbmZ1bmN0aW9uIGRldmFsdWUodmFsdWUpIHtcbiAgICB2YXIgY291bnRzID0gbmV3IE1hcCgpO1xuICAgIGZ1bmN0aW9uIHdhbGsodGhpbmcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHN0cmluZ2lmeSBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb3VudHMuaGFzKHRoaW5nKSkge1xuICAgICAgICAgICAgY291bnRzLnNldCh0aGluZywgY291bnRzLmdldCh0aGluZykgKyAxKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb3VudHMuc2V0KHRoaW5nLCAxKTtcbiAgICAgICAgaWYgKCFpc1ByaW1pdGl2ZSh0aGluZykpIHtcbiAgICAgICAgICAgIHZhciB0eXBlID0gZ2V0VHlwZSh0aGluZyk7XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdOdW1iZXInOlxuICAgICAgICAgICAgICAgIGNhc2UgJ1N0cmluZyc6XG4gICAgICAgICAgICAgICAgY2FzZSAnQm9vbGVhbic6XG4gICAgICAgICAgICAgICAgY2FzZSAnRGF0ZSc6XG4gICAgICAgICAgICAgICAgY2FzZSAnUmVnRXhwJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0FycmF5JzpcbiAgICAgICAgICAgICAgICAgICAgdGhpbmcuZm9yRWFjaCh3YWxrKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnU2V0JzpcbiAgICAgICAgICAgICAgICBjYXNlICdNYXAnOlxuICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKHRoaW5nKS5mb3JFYWNoKHdhbGspO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpbmcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvdG8gIT09IE9iamVjdC5wcm90b3R5cGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3RvICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhwcm90bykuc29ydCgpLmpvaW4oJ1xcMCcpICE9PSBvYmplY3RQcm90b093blByb3BlcnR5TmFtZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBzdHJpbmdpZnkgYXJiaXRyYXJ5IG5vbi1QT0pPc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0aGluZykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHN0cmluZ2lmeSBQT0pPcyB3aXRoIHN5bWJvbGljIGtleXNcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpbmcpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gd2Fsayh0aGluZ1trZXldKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgd2Fsayh2YWx1ZSk7XG4gICAgdmFyIG5hbWVzID0gbmV3IE1hcCgpO1xuICAgIEFycmF5LmZyb20oY291bnRzKVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChlbnRyeSkgeyByZXR1cm4gZW50cnlbMV0gPiAxOyB9KVxuICAgICAgICAuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYlsxXSAtIGFbMV07IH0pXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChlbnRyeSwgaSkge1xuICAgICAgICBuYW1lcy5zZXQoZW50cnlbMF0sIGdldE5hbWUoaSkpO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIHN0cmluZ2lmeSh0aGluZykge1xuICAgICAgICBpZiAobmFtZXMuaGFzKHRoaW5nKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5hbWVzLmdldCh0aGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUHJpbWl0aXZlKHRoaW5nKSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ2lmeVByaW1pdGl2ZSh0aGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHR5cGUgPSBnZXRUeXBlKHRoaW5nKTtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdOdW1iZXInOlxuICAgICAgICAgICAgY2FzZSAnU3RyaW5nJzpcbiAgICAgICAgICAgIGNhc2UgJ0Jvb2xlYW4nOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9iamVjdChcIiArIHN0cmluZ2lmeSh0aGluZy52YWx1ZU9mKCkpICsgXCIpXCI7XG4gICAgICAgICAgICBjYXNlICdSZWdFeHAnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGluZy50b1N0cmluZygpO1xuICAgICAgICAgICAgY2FzZSAnRGF0ZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibmV3IERhdGUoXCIgKyB0aGluZy5nZXRUaW1lKCkgKyBcIilcIjtcbiAgICAgICAgICAgIGNhc2UgJ0FycmF5JzpcbiAgICAgICAgICAgICAgICB2YXIgbWVtYmVycyA9IHRoaW5nLm1hcChmdW5jdGlvbiAodiwgaSkgeyByZXR1cm4gaSBpbiB0aGluZyA/IHN0cmluZ2lmeSh2KSA6ICcnOyB9KTtcbiAgICAgICAgICAgICAgICB2YXIgdGFpbCA9IHRoaW5nLmxlbmd0aCA9PT0gMCB8fCAodGhpbmcubGVuZ3RoIC0gMSBpbiB0aGluZykgPyAnJyA6ICcsJztcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJbXCIgKyBtZW1iZXJzLmpvaW4oJywnKSArIHRhaWwgKyBcIl1cIjtcbiAgICAgICAgICAgIGNhc2UgJ1NldCc6XG4gICAgICAgICAgICBjYXNlICdNYXAnOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIm5ldyBcIiArIHR5cGUgKyBcIihbXCIgKyBBcnJheS5mcm9tKHRoaW5nKS5tYXAoc3RyaW5naWZ5KS5qb2luKCcsJykgKyBcIl0pXCI7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHZhciBvYmogPSBcIntcIiArIE9iamVjdC5rZXlzKHRoaW5nKS5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gc2FmZUtleShrZXkpICsgXCI6XCIgKyBzdHJpbmdpZnkodGhpbmdba2V5XSk7IH0pLmpvaW4oJywnKSArIFwifVwiO1xuICAgICAgICAgICAgICAgIHZhciBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGluZyk7XG4gICAgICAgICAgICAgICAgaWYgKHByb3RvID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGluZykubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIk9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShudWxsKSxcIiArIG9iaiArIFwiKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiT2JqZWN0LmNyZWF0ZShudWxsKVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBzdHIgPSBzdHJpbmdpZnkodmFsdWUpO1xuICAgIGlmIChuYW1lcy5zaXplKSB7XG4gICAgICAgIHZhciBwYXJhbXNfMSA9IFtdO1xuICAgICAgICB2YXIgc3RhdGVtZW50c18xID0gW107XG4gICAgICAgIHZhciB2YWx1ZXNfMSA9IFtdO1xuICAgICAgICBuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lLCB0aGluZykge1xuICAgICAgICAgICAgcGFyYW1zXzEucHVzaChuYW1lKTtcbiAgICAgICAgICAgIGlmIChpc1ByaW1pdGl2ZSh0aGluZykpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXNfMS5wdXNoKHN0cmluZ2lmeVByaW1pdGl2ZSh0aGluZykpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB0eXBlID0gZ2V0VHlwZSh0aGluZyk7XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdOdW1iZXInOlxuICAgICAgICAgICAgICAgIGNhc2UgJ1N0cmluZyc6XG4gICAgICAgICAgICAgICAgY2FzZSAnQm9vbGVhbic6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc18xLnB1c2goXCJPYmplY3QoXCIgKyBzdHJpbmdpZnkodGhpbmcudmFsdWVPZigpKSArIFwiKVwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnUmVnRXhwJzpcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzXzEucHVzaCh0aGluZy50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnRGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc18xLnB1c2goXCJuZXcgRGF0ZShcIiArIHRoaW5nLmdldFRpbWUoKSArIFwiKVwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnQXJyYXknOlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNfMS5wdXNoKFwiQXJyYXkoXCIgKyB0aGluZy5sZW5ndGggKyBcIilcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaW5nLmZvckVhY2goZnVuY3Rpb24gKHYsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlbWVudHNfMS5wdXNoKG5hbWUgKyBcIltcIiArIGkgKyBcIl09XCIgKyBzdHJpbmdpZnkodikpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnU2V0JzpcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzXzEucHVzaChcIm5ldyBTZXRcIik7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlbWVudHNfMS5wdXNoKG5hbWUgKyBcIi5cIiArIEFycmF5LmZyb20odGhpbmcpLm1hcChmdW5jdGlvbiAodikgeyByZXR1cm4gXCJhZGQoXCIgKyBzdHJpbmdpZnkodikgKyBcIilcIjsgfSkuam9pbignLicpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnTWFwJzpcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzXzEucHVzaChcIm5ldyBNYXBcIik7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlbWVudHNfMS5wdXNoKG5hbWUgKyBcIi5cIiArIEFycmF5LmZyb20odGhpbmcpLm1hcChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrID0gX2FbMF0sIHYgPSBfYVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInNldChcIiArIHN0cmluZ2lmeShrKSArIFwiLCBcIiArIHN0cmluZ2lmeSh2KSArIFwiKVwiO1xuICAgICAgICAgICAgICAgICAgICB9KS5qb2luKCcuJykpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNfMS5wdXNoKE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGluZykgPT09IG51bGwgPyAnT2JqZWN0LmNyZWF0ZShudWxsKScgOiAne30nKTtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpbmcpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVtZW50c18xLnB1c2goXCJcIiArIG5hbWUgKyBzYWZlUHJvcChrZXkpICsgXCI9XCIgKyBzdHJpbmdpZnkodGhpbmdba2V5XSkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHN0YXRlbWVudHNfMS5wdXNoKFwicmV0dXJuIFwiICsgc3RyKTtcbiAgICAgICAgcmV0dXJuIFwiKGZ1bmN0aW9uKFwiICsgcGFyYW1zXzEuam9pbignLCcpICsgXCIpe1wiICsgc3RhdGVtZW50c18xLmpvaW4oJzsnKSArIFwifShcIiArIHZhbHVlc18xLmpvaW4oJywnKSArIFwiKSlcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0TmFtZShudW0pIHtcbiAgICB2YXIgbmFtZSA9ICcnO1xuICAgIGRvIHtcbiAgICAgICAgbmFtZSA9IGNoYXJzW251bSAlIGNoYXJzLmxlbmd0aF0gKyBuYW1lO1xuICAgICAgICBudW0gPSB+fihudW0gLyBjaGFycy5sZW5ndGgpIC0gMTtcbiAgICB9IHdoaWxlIChudW0gPj0gMCk7XG4gICAgcmV0dXJuIHJlc2VydmVkLnRlc3QobmFtZSkgPyBuYW1lICsgXCJfXCIgOiBuYW1lO1xufVxuZnVuY3Rpb24gaXNQcmltaXRpdmUodGhpbmcpIHtcbiAgICByZXR1cm4gT2JqZWN0KHRoaW5nKSAhPT0gdGhpbmc7XG59XG5mdW5jdGlvbiBzdHJpbmdpZnlQcmltaXRpdmUodGhpbmcpIHtcbiAgICBpZiAodHlwZW9mIHRoaW5nID09PSAnc3RyaW5nJylcbiAgICAgICAgcmV0dXJuIHN0cmluZ2lmeVN0cmluZyh0aGluZyk7XG4gICAgaWYgKHRoaW5nID09PSB2b2lkIDApXG4gICAgICAgIHJldHVybiAndm9pZCAwJztcbiAgICBpZiAodGhpbmcgPT09IDAgJiYgMSAvIHRoaW5nIDwgMClcbiAgICAgICAgcmV0dXJuICctMCc7XG4gICAgdmFyIHN0ciA9IFN0cmluZyh0aGluZyk7XG4gICAgaWYgKHR5cGVvZiB0aGluZyA9PT0gJ251bWJlcicpXG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvXigtKT8wXFwuLywgJyQxLicpO1xuICAgIHJldHVybiBzdHI7XG59XG5mdW5jdGlvbiBnZXRUeXBlKHRoaW5nKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0aGluZykuc2xpY2UoOCwgLTEpO1xufVxuZnVuY3Rpb24gZXNjYXBlVW5zYWZlQ2hhcihjKSB7XG4gICAgcmV0dXJuIGVzY2FwZWRbY10gfHwgYztcbn1cbmZ1bmN0aW9uIGVzY2FwZVVuc2FmZUNoYXJzKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSh1bnNhZmVDaGFycywgZXNjYXBlVW5zYWZlQ2hhcik7XG59XG5mdW5jdGlvbiBzYWZlS2V5KGtleSkge1xuICAgIHJldHVybiAvXltfJGEtekEtWl1bXyRhLXpBLVowLTldKiQvLnRlc3Qoa2V5KSA/IGtleSA6IGVzY2FwZVVuc2FmZUNoYXJzKEpTT04uc3RyaW5naWZ5KGtleSkpO1xufVxuZnVuY3Rpb24gc2FmZVByb3Aoa2V5KSB7XG4gICAgcmV0dXJuIC9eW18kYS16QS1aXVtfJGEtekEtWjAtOV0qJC8udGVzdChrZXkpID8gXCIuXCIgKyBrZXkgOiBcIltcIiArIGVzY2FwZVVuc2FmZUNoYXJzKEpTT04uc3RyaW5naWZ5KGtleSkpICsgXCJdXCI7XG59XG5mdW5jdGlvbiBzdHJpbmdpZnlTdHJpbmcoc3RyKSB7XG4gICAgdmFyIHJlc3VsdCA9ICdcIic7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHIuY2hhckF0KGkpO1xuICAgICAgICB2YXIgY29kZSA9IGNoYXIuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgaWYgKGNoYXIgPT09ICdcIicpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAnXFxcXFwiJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaGFyIGluIGVzY2FwZWQpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBlc2NhcGVkW2NoYXJdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvZGUgPj0gMHhkODAwICYmIGNvZGUgPD0gMHhkZmZmKSB7XG4gICAgICAgICAgICB2YXIgbmV4dCA9IHN0ci5jaGFyQ29kZUF0KGkgKyAxKTtcbiAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgdGhlIGJlZ2lubmluZyBvZiBhIFtoaWdoLCBsb3ddIHN1cnJvZ2F0ZSBwYWlyLFxuICAgICAgICAgICAgLy8gYWRkIHRoZSBuZXh0IHR3byBjaGFyYWN0ZXJzLCBvdGhlcndpc2UgZXNjYXBlXG4gICAgICAgICAgICBpZiAoY29kZSA8PSAweGRiZmYgJiYgKG5leHQgPj0gMHhkYzAwICYmIG5leHQgPD0gMHhkZmZmKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBjaGFyICsgc3RyWysraV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCJcXFxcdVwiICsgY29kZS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBjaGFyO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlc3VsdCArPSAnXCInO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS90bXB2YXIvanNkb20vYmxvYi9hYTg1YjJhYmYwNzc2NmZmN2JmNWMxZjZkYWFmYjM3MjZmMmYyZGI1L2xpYi9qc2RvbS9saXZpbmcvYmxvYi5qc1xuXG4vLyBmaXggZm9yIFwiUmVhZGFibGVcIiBpc24ndCBhIG5hbWVkIGV4cG9ydCBpc3N1ZVxuY29uc3QgUmVhZGFibGUgPSBTdHJlYW0uUmVhZGFibGU7XG5cbmNvbnN0IEJVRkZFUiA9IFN5bWJvbCgnYnVmZmVyJyk7XG5jb25zdCBUWVBFID0gU3ltYm9sKCd0eXBlJyk7XG5cbmNsYXNzIEJsb2Ige1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzW1RZUEVdID0gJyc7XG5cblx0XHRjb25zdCBibG9iUGFydHMgPSBhcmd1bWVudHNbMF07XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IGFyZ3VtZW50c1sxXTtcblxuXHRcdGNvbnN0IGJ1ZmZlcnMgPSBbXTtcblx0XHRsZXQgc2l6ZSA9IDA7XG5cblx0XHRpZiAoYmxvYlBhcnRzKSB7XG5cdFx0XHRjb25zdCBhID0gYmxvYlBhcnRzO1xuXHRcdFx0Y29uc3QgbGVuZ3RoID0gTnVtYmVyKGEubGVuZ3RoKTtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3QgZWxlbWVudCA9IGFbaV07XG5cdFx0XHRcdGxldCBidWZmZXI7XG5cdFx0XHRcdGlmIChlbGVtZW50IGluc3RhbmNlb2YgQnVmZmVyKSB7XG5cdFx0XHRcdFx0YnVmZmVyID0gZWxlbWVudDtcblx0XHRcdFx0fSBlbHNlIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoZWxlbWVudCkpIHtcblx0XHRcdFx0XHRidWZmZXIgPSBCdWZmZXIuZnJvbShlbGVtZW50LmJ1ZmZlciwgZWxlbWVudC5ieXRlT2Zmc2V0LCBlbGVtZW50LmJ5dGVMZW5ndGgpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuXHRcdFx0XHRcdGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGVsZW1lbnQpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBCbG9iKSB7XG5cdFx0XHRcdFx0YnVmZmVyID0gZWxlbWVudFtCVUZGRVJdO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJyA/IGVsZW1lbnQgOiBTdHJpbmcoZWxlbWVudCkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNpemUgKz0gYnVmZmVyLmxlbmd0aDtcblx0XHRcdFx0YnVmZmVycy5wdXNoKGJ1ZmZlcik7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpc1tCVUZGRVJdID0gQnVmZmVyLmNvbmNhdChidWZmZXJzKTtcblxuXHRcdGxldCB0eXBlID0gb3B0aW9ucyAmJiBvcHRpb25zLnR5cGUgIT09IHVuZGVmaW5lZCAmJiBTdHJpbmcob3B0aW9ucy50eXBlKS50b0xvd2VyQ2FzZSgpO1xuXHRcdGlmICh0eXBlICYmICEvW15cXHUwMDIwLVxcdTAwN0VdLy50ZXN0KHR5cGUpKSB7XG5cdFx0XHR0aGlzW1RZUEVdID0gdHlwZTtcblx0XHR9XG5cdH1cblx0Z2V0IHNpemUoKSB7XG5cdFx0cmV0dXJuIHRoaXNbQlVGRkVSXS5sZW5ndGg7XG5cdH1cblx0Z2V0IHR5cGUoKSB7XG5cdFx0cmV0dXJuIHRoaXNbVFlQRV07XG5cdH1cblx0dGV4dCgpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXNbQlVGRkVSXS50b1N0cmluZygpKTtcblx0fVxuXHRhcnJheUJ1ZmZlcigpIHtcblx0XHRjb25zdCBidWYgPSB0aGlzW0JVRkZFUl07XG5cdFx0Y29uc3QgYWIgPSBidWYuYnVmZmVyLnNsaWNlKGJ1Zi5ieXRlT2Zmc2V0LCBidWYuYnl0ZU9mZnNldCArIGJ1Zi5ieXRlTGVuZ3RoKTtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGFiKTtcblx0fVxuXHRzdHJlYW0oKSB7XG5cdFx0Y29uc3QgcmVhZGFibGUgPSBuZXcgUmVhZGFibGUoKTtcblx0XHRyZWFkYWJsZS5fcmVhZCA9IGZ1bmN0aW9uICgpIHt9O1xuXHRcdHJlYWRhYmxlLnB1c2godGhpc1tCVUZGRVJdKTtcblx0XHRyZWFkYWJsZS5wdXNoKG51bGwpO1xuXHRcdHJldHVybiByZWFkYWJsZTtcblx0fVxuXHR0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gJ1tvYmplY3QgQmxvYl0nO1xuXHR9XG5cdHNsaWNlKCkge1xuXHRcdGNvbnN0IHNpemUgPSB0aGlzLnNpemU7XG5cblx0XHRjb25zdCBzdGFydCA9IGFyZ3VtZW50c1swXTtcblx0XHRjb25zdCBlbmQgPSBhcmd1bWVudHNbMV07XG5cdFx0bGV0IHJlbGF0aXZlU3RhcnQsIHJlbGF0aXZlRW5kO1xuXHRcdGlmIChzdGFydCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZWxhdGl2ZVN0YXJ0ID0gMDtcblx0XHR9IGVsc2UgaWYgKHN0YXJ0IDwgMCkge1xuXHRcdFx0cmVsYXRpdmVTdGFydCA9IE1hdGgubWF4KHNpemUgKyBzdGFydCwgMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbGF0aXZlU3RhcnQgPSBNYXRoLm1pbihzdGFydCwgc2l6ZSk7XG5cdFx0fVxuXHRcdGlmIChlbmQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmVsYXRpdmVFbmQgPSBzaXplO1xuXHRcdH0gZWxzZSBpZiAoZW5kIDwgMCkge1xuXHRcdFx0cmVsYXRpdmVFbmQgPSBNYXRoLm1heChzaXplICsgZW5kLCAwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVsYXRpdmVFbmQgPSBNYXRoLm1pbihlbmQsIHNpemUpO1xuXHRcdH1cblx0XHRjb25zdCBzcGFuID0gTWF0aC5tYXgocmVsYXRpdmVFbmQgLSByZWxhdGl2ZVN0YXJ0LCAwKTtcblxuXHRcdGNvbnN0IGJ1ZmZlciA9IHRoaXNbQlVGRkVSXTtcblx0XHRjb25zdCBzbGljZWRCdWZmZXIgPSBidWZmZXIuc2xpY2UocmVsYXRpdmVTdGFydCwgcmVsYXRpdmVTdGFydCArIHNwYW4pO1xuXHRcdGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbXSwgeyB0eXBlOiBhcmd1bWVudHNbMl0gfSk7XG5cdFx0YmxvYltCVUZGRVJdID0gc2xpY2VkQnVmZmVyO1xuXHRcdHJldHVybiBibG9iO1xuXHR9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEJsb2IucHJvdG90eXBlLCB7XG5cdHNpemU6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHR0eXBlOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0c2xpY2U6IHsgZW51bWVyYWJsZTogdHJ1ZSB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEJsb2IucHJvdG90eXBlLCBTeW1ib2wudG9TdHJpbmdUYWcsIHtcblx0dmFsdWU6ICdCbG9iJyxcblx0d3JpdGFibGU6IGZhbHNlLFxuXHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0Y29uZmlndXJhYmxlOiB0cnVlXG59KTtcblxuLyoqXG4gKiBmZXRjaC1lcnJvci5qc1xuICpcbiAqIEZldGNoRXJyb3IgaW50ZXJmYWNlIGZvciBvcGVyYXRpb25hbCBlcnJvcnNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZSBGZXRjaEVycm9yIGluc3RhbmNlXG4gKlxuICogQHBhcmFtICAgU3RyaW5nICAgICAgbWVzc2FnZSAgICAgIEVycm9yIG1lc3NhZ2UgZm9yIGh1bWFuXG4gKiBAcGFyYW0gICBTdHJpbmcgICAgICB0eXBlICAgICAgICAgRXJyb3IgdHlwZSBmb3IgbWFjaGluZVxuICogQHBhcmFtICAgU3RyaW5nICAgICAgc3lzdGVtRXJyb3IgIEZvciBOb2RlLmpzIHN5c3RlbSBlcnJvclxuICogQHJldHVybiAgRmV0Y2hFcnJvclxuICovXG5mdW5jdGlvbiBGZXRjaEVycm9yKG1lc3NhZ2UsIHR5cGUsIHN5c3RlbUVycm9yKSB7XG4gIEVycm9yLmNhbGwodGhpcywgbWVzc2FnZSk7XG5cbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgdGhpcy50eXBlID0gdHlwZTtcblxuICAvLyB3aGVuIGVyci50eXBlIGlzIGBzeXN0ZW1gLCBlcnIuY29kZSBjb250YWlucyBzeXN0ZW0gZXJyb3IgY29kZVxuICBpZiAoc3lzdGVtRXJyb3IpIHtcbiAgICB0aGlzLmNvZGUgPSB0aGlzLmVycm5vID0gc3lzdGVtRXJyb3IuY29kZTtcbiAgfVxuXG4gIC8vIGhpZGUgY3VzdG9tIGVycm9yIGltcGxlbWVudGF0aW9uIGRldGFpbHMgZnJvbSBlbmQtdXNlcnNcbiAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XG59XG5cbkZldGNoRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuRmV0Y2hFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBGZXRjaEVycm9yO1xuRmV0Y2hFcnJvci5wcm90b3R5cGUubmFtZSA9ICdGZXRjaEVycm9yJztcblxubGV0IGNvbnZlcnQ7XG50cnkge1xuXHRjb252ZXJ0ID0gcmVxdWlyZSgnZW5jb2RpbmcnKS5jb252ZXJ0O1xufSBjYXRjaCAoZSkge31cblxuY29uc3QgSU5URVJOQUxTID0gU3ltYm9sKCdCb2R5IGludGVybmFscycpO1xuXG4vLyBmaXggYW4gaXNzdWUgd2hlcmUgXCJQYXNzVGhyb3VnaFwiIGlzbid0IGEgbmFtZWQgZXhwb3J0IGZvciBub2RlIDwxMFxuY29uc3QgUGFzc1Rocm91Z2ggPSBTdHJlYW0uUGFzc1Rocm91Z2g7XG5cbi8qKlxuICogQm9keSBtaXhpblxuICpcbiAqIFJlZjogaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI2JvZHlcbiAqXG4gKiBAcGFyYW0gICBTdHJlYW0gIGJvZHkgIFJlYWRhYmxlIHN0cmVhbVxuICogQHBhcmFtICAgT2JqZWN0ICBvcHRzICBSZXNwb25zZSBvcHRpb25zXG4gKiBAcmV0dXJuICBWb2lkXG4gKi9cbmZ1bmN0aW9uIEJvZHkoYm9keSkge1xuXHR2YXIgX3RoaXMgPSB0aGlzO1xuXG5cdHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fSxcblx0ICAgIF9yZWYkc2l6ZSA9IF9yZWYuc2l6ZTtcblxuXHRsZXQgc2l6ZSA9IF9yZWYkc2l6ZSA9PT0gdW5kZWZpbmVkID8gMCA6IF9yZWYkc2l6ZTtcblx0dmFyIF9yZWYkdGltZW91dCA9IF9yZWYudGltZW91dDtcblx0bGV0IHRpbWVvdXQgPSBfcmVmJHRpbWVvdXQgPT09IHVuZGVmaW5lZCA/IDAgOiBfcmVmJHRpbWVvdXQ7XG5cblx0aWYgKGJvZHkgPT0gbnVsbCkge1xuXHRcdC8vIGJvZHkgaXMgdW5kZWZpbmVkIG9yIG51bGxcblx0XHRib2R5ID0gbnVsbDtcblx0fSBlbHNlIGlmIChpc1VSTFNlYXJjaFBhcmFtcyhib2R5KSkge1xuXHRcdC8vIGJvZHkgaXMgYSBVUkxTZWFyY2hQYXJhbXNcblx0XHRib2R5ID0gQnVmZmVyLmZyb20oYm9keS50b1N0cmluZygpKTtcblx0fSBlbHNlIGlmIChpc0Jsb2IoYm9keSkpIDsgZWxzZSBpZiAoQnVmZmVyLmlzQnVmZmVyKGJvZHkpKSA7IGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChib2R5KSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJykge1xuXHRcdC8vIGJvZHkgaXMgQXJyYXlCdWZmZXJcblx0XHRib2R5ID0gQnVmZmVyLmZyb20oYm9keSk7XG5cdH0gZWxzZSBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KGJvZHkpKSB7XG5cdFx0Ly8gYm9keSBpcyBBcnJheUJ1ZmZlclZpZXdcblx0XHRib2R5ID0gQnVmZmVyLmZyb20oYm9keS5idWZmZXIsIGJvZHkuYnl0ZU9mZnNldCwgYm9keS5ieXRlTGVuZ3RoKTtcblx0fSBlbHNlIGlmIChib2R5IGluc3RhbmNlb2YgU3RyZWFtKSA7IGVsc2Uge1xuXHRcdC8vIG5vbmUgb2YgdGhlIGFib3ZlXG5cdFx0Ly8gY29lcmNlIHRvIHN0cmluZyB0aGVuIGJ1ZmZlclxuXHRcdGJvZHkgPSBCdWZmZXIuZnJvbShTdHJpbmcoYm9keSkpO1xuXHR9XG5cdHRoaXNbSU5URVJOQUxTXSA9IHtcblx0XHRib2R5LFxuXHRcdGRpc3R1cmJlZDogZmFsc2UsXG5cdFx0ZXJyb3I6IG51bGxcblx0fTtcblx0dGhpcy5zaXplID0gc2l6ZTtcblx0dGhpcy50aW1lb3V0ID0gdGltZW91dDtcblxuXHRpZiAoYm9keSBpbnN0YW5jZW9mIFN0cmVhbSkge1xuXHRcdGJvZHkub24oJ2Vycm9yJywgZnVuY3Rpb24gKGVycikge1xuXHRcdFx0Y29uc3QgZXJyb3IgPSBlcnIubmFtZSA9PT0gJ0Fib3J0RXJyb3InID8gZXJyIDogbmV3IEZldGNoRXJyb3IoYEludmFsaWQgcmVzcG9uc2UgYm9keSB3aGlsZSB0cnlpbmcgdG8gZmV0Y2ggJHtfdGhpcy51cmx9OiAke2Vyci5tZXNzYWdlfWAsICdzeXN0ZW0nLCBlcnIpO1xuXHRcdFx0X3RoaXNbSU5URVJOQUxTXS5lcnJvciA9IGVycm9yO1xuXHRcdH0pO1xuXHR9XG59XG5cbkJvZHkucHJvdG90eXBlID0ge1xuXHRnZXQgYm9keSgpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFNdLmJvZHk7XG5cdH0sXG5cblx0Z2V0IGJvZHlVc2VkKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMU10uZGlzdHVyYmVkO1xuXHR9LFxuXG5cdC8qKlxuICAqIERlY29kZSByZXNwb25zZSBhcyBBcnJheUJ1ZmZlclxuICAqXG4gICogQHJldHVybiAgUHJvbWlzZVxuICAqL1xuXHRhcnJheUJ1ZmZlcigpIHtcblx0XHRyZXR1cm4gY29uc3VtZUJvZHkuY2FsbCh0aGlzKS50aGVuKGZ1bmN0aW9uIChidWYpIHtcblx0XHRcdHJldHVybiBidWYuYnVmZmVyLnNsaWNlKGJ1Zi5ieXRlT2Zmc2V0LCBidWYuYnl0ZU9mZnNldCArIGJ1Zi5ieXRlTGVuZ3RoKTtcblx0XHR9KTtcblx0fSxcblxuXHQvKipcbiAgKiBSZXR1cm4gcmF3IHJlc3BvbnNlIGFzIEJsb2JcbiAgKlxuICAqIEByZXR1cm4gUHJvbWlzZVxuICAqL1xuXHRibG9iKCkge1xuXHRcdGxldCBjdCA9IHRoaXMuaGVhZGVycyAmJiB0aGlzLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSB8fCAnJztcblx0XHRyZXR1cm4gY29uc3VtZUJvZHkuY2FsbCh0aGlzKS50aGVuKGZ1bmN0aW9uIChidWYpIHtcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKFxuXHRcdFx0Ly8gUHJldmVudCBjb3B5aW5nXG5cdFx0XHRuZXcgQmxvYihbXSwge1xuXHRcdFx0XHR0eXBlOiBjdC50b0xvd2VyQ2FzZSgpXG5cdFx0XHR9KSwge1xuXHRcdFx0XHRbQlVGRkVSXTogYnVmXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fSxcblxuXHQvKipcbiAgKiBEZWNvZGUgcmVzcG9uc2UgYXMganNvblxuICAqXG4gICogQHJldHVybiAgUHJvbWlzZVxuICAqL1xuXHRqc29uKCkge1xuXHRcdHZhciBfdGhpczIgPSB0aGlzO1xuXG5cdFx0cmV0dXJuIGNvbnN1bWVCb2R5LmNhbGwodGhpcykudGhlbihmdW5jdGlvbiAoYnVmZmVyKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyZXR1cm4gSlNPTi5wYXJzZShidWZmZXIudG9TdHJpbmcoKSk7XG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0cmV0dXJuIEJvZHkuUHJvbWlzZS5yZWplY3QobmV3IEZldGNoRXJyb3IoYGludmFsaWQganNvbiByZXNwb25zZSBib2R5IGF0ICR7X3RoaXMyLnVybH0gcmVhc29uOiAke2Vyci5tZXNzYWdlfWAsICdpbnZhbGlkLWpzb24nKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG5cblx0LyoqXG4gICogRGVjb2RlIHJlc3BvbnNlIGFzIHRleHRcbiAgKlxuICAqIEByZXR1cm4gIFByb21pc2VcbiAgKi9cblx0dGV4dCgpIHtcblx0XHRyZXR1cm4gY29uc3VtZUJvZHkuY2FsbCh0aGlzKS50aGVuKGZ1bmN0aW9uIChidWZmZXIpIHtcblx0XHRcdHJldHVybiBidWZmZXIudG9TdHJpbmcoKTtcblx0XHR9KTtcblx0fSxcblxuXHQvKipcbiAgKiBEZWNvZGUgcmVzcG9uc2UgYXMgYnVmZmVyIChub24tc3BlYyBhcGkpXG4gICpcbiAgKiBAcmV0dXJuICBQcm9taXNlXG4gICovXG5cdGJ1ZmZlcigpIHtcblx0XHRyZXR1cm4gY29uc3VtZUJvZHkuY2FsbCh0aGlzKTtcblx0fSxcblxuXHQvKipcbiAgKiBEZWNvZGUgcmVzcG9uc2UgYXMgdGV4dCwgd2hpbGUgYXV0b21hdGljYWxseSBkZXRlY3RpbmcgdGhlIGVuY29kaW5nIGFuZFxuICAqIHRyeWluZyB0byBkZWNvZGUgdG8gVVRGLTggKG5vbi1zcGVjIGFwaSlcbiAgKlxuICAqIEByZXR1cm4gIFByb21pc2VcbiAgKi9cblx0dGV4dENvbnZlcnRlZCgpIHtcblx0XHR2YXIgX3RoaXMzID0gdGhpcztcblxuXHRcdHJldHVybiBjb25zdW1lQm9keS5jYWxsKHRoaXMpLnRoZW4oZnVuY3Rpb24gKGJ1ZmZlcikge1xuXHRcdFx0cmV0dXJuIGNvbnZlcnRCb2R5KGJ1ZmZlciwgX3RoaXMzLmhlYWRlcnMpO1xuXHRcdH0pO1xuXHR9XG59O1xuXG4vLyBJbiBicm93c2VycywgYWxsIHByb3BlcnRpZXMgYXJlIGVudW1lcmFibGUuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhCb2R5LnByb3RvdHlwZSwge1xuXHRib2R5OiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0Ym9keVVzZWQ6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRhcnJheUJ1ZmZlcjogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdGJsb2I6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRqc29uOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0dGV4dDogeyBlbnVtZXJhYmxlOiB0cnVlIH1cbn0pO1xuXG5Cb2R5Lm1peEluID0gZnVuY3Rpb24gKHByb3RvKSB7XG5cdGZvciAoY29uc3QgbmFtZSBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhCb2R5LnByb3RvdHlwZSkpIHtcblx0XHQvLyBpc3RhbmJ1bCBpZ25vcmUgZWxzZTogZnV0dXJlIHByb29mXG5cdFx0aWYgKCEobmFtZSBpbiBwcm90bykpIHtcblx0XHRcdGNvbnN0IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEJvZHkucHJvdG90eXBlLCBuYW1lKTtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgbmFtZSwgZGVzYyk7XG5cdFx0fVxuXHR9XG59O1xuXG4vKipcbiAqIENvbnN1bWUgYW5kIGNvbnZlcnQgYW4gZW50aXJlIEJvZHkgdG8gYSBCdWZmZXIuXG4gKlxuICogUmVmOiBodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1ib2R5LWNvbnN1bWUtYm9keVxuICpcbiAqIEByZXR1cm4gIFByb21pc2VcbiAqL1xuZnVuY3Rpb24gY29uc3VtZUJvZHkoKSB7XG5cdHZhciBfdGhpczQgPSB0aGlzO1xuXG5cdGlmICh0aGlzW0lOVEVSTkFMU10uZGlzdHVyYmVkKSB7XG5cdFx0cmV0dXJuIEJvZHkuUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcihgYm9keSB1c2VkIGFscmVhZHkgZm9yOiAke3RoaXMudXJsfWApKTtcblx0fVxuXG5cdHRoaXNbSU5URVJOQUxTXS5kaXN0dXJiZWQgPSB0cnVlO1xuXG5cdGlmICh0aGlzW0lOVEVSTkFMU10uZXJyb3IpIHtcblx0XHRyZXR1cm4gQm9keS5Qcm9taXNlLnJlamVjdCh0aGlzW0lOVEVSTkFMU10uZXJyb3IpO1xuXHR9XG5cblx0bGV0IGJvZHkgPSB0aGlzLmJvZHk7XG5cblx0Ly8gYm9keSBpcyBudWxsXG5cdGlmIChib2R5ID09PSBudWxsKSB7XG5cdFx0cmV0dXJuIEJvZHkuUHJvbWlzZS5yZXNvbHZlKEJ1ZmZlci5hbGxvYygwKSk7XG5cdH1cblxuXHQvLyBib2R5IGlzIGJsb2Jcblx0aWYgKGlzQmxvYihib2R5KSkge1xuXHRcdGJvZHkgPSBib2R5LnN0cmVhbSgpO1xuXHR9XG5cblx0Ly8gYm9keSBpcyBidWZmZXJcblx0aWYgKEJ1ZmZlci5pc0J1ZmZlcihib2R5KSkge1xuXHRcdHJldHVybiBCb2R5LlByb21pc2UucmVzb2x2ZShib2R5KTtcblx0fVxuXG5cdC8vIGlzdGFuYnVsIGlnbm9yZSBpZjogc2hvdWxkIG5ldmVyIGhhcHBlblxuXHRpZiAoIShib2R5IGluc3RhbmNlb2YgU3RyZWFtKSkge1xuXHRcdHJldHVybiBCb2R5LlByb21pc2UucmVzb2x2ZShCdWZmZXIuYWxsb2MoMCkpO1xuXHR9XG5cblx0Ly8gYm9keSBpcyBzdHJlYW1cblx0Ly8gZ2V0IHJlYWR5IHRvIGFjdHVhbGx5IGNvbnN1bWUgdGhlIGJvZHlcblx0bGV0IGFjY3VtID0gW107XG5cdGxldCBhY2N1bUJ5dGVzID0gMDtcblx0bGV0IGFib3J0ID0gZmFsc2U7XG5cblx0cmV0dXJuIG5ldyBCb2R5LlByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdGxldCByZXNUaW1lb3V0O1xuXG5cdFx0Ly8gYWxsb3cgdGltZW91dCBvbiBzbG93IHJlc3BvbnNlIGJvZHlcblx0XHRpZiAoX3RoaXM0LnRpbWVvdXQpIHtcblx0XHRcdHJlc1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0YWJvcnQgPSB0cnVlO1xuXHRcdFx0XHRyZWplY3QobmV3IEZldGNoRXJyb3IoYFJlc3BvbnNlIHRpbWVvdXQgd2hpbGUgdHJ5aW5nIHRvIGZldGNoICR7X3RoaXM0LnVybH0gKG92ZXIgJHtfdGhpczQudGltZW91dH1tcylgLCAnYm9keS10aW1lb3V0JykpO1xuXHRcdFx0fSwgX3RoaXM0LnRpbWVvdXQpO1xuXHRcdH1cblxuXHRcdC8vIGhhbmRsZSBzdHJlYW0gZXJyb3JzXG5cdFx0Ym9keS5vbignZXJyb3InLCBmdW5jdGlvbiAoZXJyKSB7XG5cdFx0XHRpZiAoZXJyLm5hbWUgPT09ICdBYm9ydEVycm9yJykge1xuXHRcdFx0XHQvLyBpZiB0aGUgcmVxdWVzdCB3YXMgYWJvcnRlZCwgcmVqZWN0IHdpdGggdGhpcyBFcnJvclxuXHRcdFx0XHRhYm9ydCA9IHRydWU7XG5cdFx0XHRcdHJlamVjdChlcnIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gb3RoZXIgZXJyb3JzLCBzdWNoIGFzIGluY29ycmVjdCBjb250ZW50LWVuY29kaW5nXG5cdFx0XHRcdHJlamVjdChuZXcgRmV0Y2hFcnJvcihgSW52YWxpZCByZXNwb25zZSBib2R5IHdoaWxlIHRyeWluZyB0byBmZXRjaCAke190aGlzNC51cmx9OiAke2Vyci5tZXNzYWdlfWAsICdzeXN0ZW0nLCBlcnIpKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGJvZHkub24oJ2RhdGEnLCBmdW5jdGlvbiAoY2h1bmspIHtcblx0XHRcdGlmIChhYm9ydCB8fCBjaHVuayA9PT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmIChfdGhpczQuc2l6ZSAmJiBhY2N1bUJ5dGVzICsgY2h1bmsubGVuZ3RoID4gX3RoaXM0LnNpemUpIHtcblx0XHRcdFx0YWJvcnQgPSB0cnVlO1xuXHRcdFx0XHRyZWplY3QobmV3IEZldGNoRXJyb3IoYGNvbnRlbnQgc2l6ZSBhdCAke190aGlzNC51cmx9IG92ZXIgbGltaXQ6ICR7X3RoaXM0LnNpemV9YCwgJ21heC1zaXplJykpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGFjY3VtQnl0ZXMgKz0gY2h1bmsubGVuZ3RoO1xuXHRcdFx0YWNjdW0ucHVzaChjaHVuayk7XG5cdFx0fSk7XG5cblx0XHRib2R5Lm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoYWJvcnQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjbGVhclRpbWVvdXQocmVzVGltZW91dCk7XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJlc29sdmUoQnVmZmVyLmNvbmNhdChhY2N1bSwgYWNjdW1CeXRlcykpO1xuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdC8vIGhhbmRsZSBzdHJlYW1zIHRoYXQgaGF2ZSBhY2N1bXVsYXRlZCB0b28gbXVjaCBkYXRhIChpc3N1ZSAjNDE0KVxuXHRcdFx0XHRyZWplY3QobmV3IEZldGNoRXJyb3IoYENvdWxkIG5vdCBjcmVhdGUgQnVmZmVyIGZyb20gcmVzcG9uc2UgYm9keSBmb3IgJHtfdGhpczQudXJsfTogJHtlcnIubWVzc2FnZX1gLCAnc3lzdGVtJywgZXJyKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufVxuXG4vKipcbiAqIERldGVjdCBidWZmZXIgZW5jb2RpbmcgYW5kIGNvbnZlcnQgdG8gdGFyZ2V0IGVuY29kaW5nXG4gKiByZWY6IGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMTEvV0QtaHRtbDUtMjAxMTAxMTMvcGFyc2luZy5odG1sI2RldGVybWluaW5nLXRoZS1jaGFyYWN0ZXItZW5jb2RpbmdcbiAqXG4gKiBAcGFyYW0gICBCdWZmZXIgIGJ1ZmZlciAgICBJbmNvbWluZyBidWZmZXJcbiAqIEBwYXJhbSAgIFN0cmluZyAgZW5jb2RpbmcgIFRhcmdldCBlbmNvZGluZ1xuICogQHJldHVybiAgU3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGNvbnZlcnRCb2R5KGJ1ZmZlciwgaGVhZGVycykge1xuXHRpZiAodHlwZW9mIGNvbnZlcnQgIT09ICdmdW5jdGlvbicpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RoZSBwYWNrYWdlIGBlbmNvZGluZ2AgbXVzdCBiZSBpbnN0YWxsZWQgdG8gdXNlIHRoZSB0ZXh0Q29udmVydGVkKCkgZnVuY3Rpb24nKTtcblx0fVxuXG5cdGNvbnN0IGN0ID0gaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpO1xuXHRsZXQgY2hhcnNldCA9ICd1dGYtOCc7XG5cdGxldCByZXMsIHN0cjtcblxuXHQvLyBoZWFkZXJcblx0aWYgKGN0KSB7XG5cdFx0cmVzID0gL2NoYXJzZXQ9KFteO10qKS9pLmV4ZWMoY3QpO1xuXHR9XG5cblx0Ly8gbm8gY2hhcnNldCBpbiBjb250ZW50IHR5cGUsIHBlZWsgYXQgcmVzcG9uc2UgYm9keSBmb3IgYXQgbW9zdCAxMDI0IGJ5dGVzXG5cdHN0ciA9IGJ1ZmZlci5zbGljZSgwLCAxMDI0KS50b1N0cmluZygpO1xuXG5cdC8vIGh0bWw1XG5cdGlmICghcmVzICYmIHN0cikge1xuXHRcdHJlcyA9IC88bWV0YS4rP2NoYXJzZXQ9KFsnXCJdKSguKz8pXFwxL2kuZXhlYyhzdHIpO1xuXHR9XG5cblx0Ly8gaHRtbDRcblx0aWYgKCFyZXMgJiYgc3RyKSB7XG5cdFx0cmVzID0gLzxtZXRhW1xcc10rP2h0dHAtZXF1aXY9KFsnXCJdKWNvbnRlbnQtdHlwZVxcMVtcXHNdKz9jb250ZW50PShbJ1wiXSkoLis/KVxcMi9pLmV4ZWMoc3RyKTtcblxuXHRcdGlmIChyZXMpIHtcblx0XHRcdHJlcyA9IC9jaGFyc2V0PSguKikvaS5leGVjKHJlcy5wb3AoKSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8geG1sXG5cdGlmICghcmVzICYmIHN0cikge1xuXHRcdHJlcyA9IC88XFw/eG1sLis/ZW5jb2Rpbmc9KFsnXCJdKSguKz8pXFwxL2kuZXhlYyhzdHIpO1xuXHR9XG5cblx0Ly8gZm91bmQgY2hhcnNldFxuXHRpZiAocmVzKSB7XG5cdFx0Y2hhcnNldCA9IHJlcy5wb3AoKTtcblxuXHRcdC8vIHByZXZlbnQgZGVjb2RlIGlzc3VlcyB3aGVuIHNpdGVzIHVzZSBpbmNvcnJlY3QgZW5jb2Rpbmdcblx0XHQvLyByZWY6IGh0dHBzOi8vaHNpdm9uZW4uZmkvZW5jb2RpbmctbWVudS9cblx0XHRpZiAoY2hhcnNldCA9PT0gJ2diMjMxMicgfHwgY2hhcnNldCA9PT0gJ2diaycpIHtcblx0XHRcdGNoYXJzZXQgPSAnZ2IxODAzMCc7XG5cdFx0fVxuXHR9XG5cblx0Ly8gdHVybiByYXcgYnVmZmVycyBpbnRvIGEgc2luZ2xlIHV0Zi04IGJ1ZmZlclxuXHRyZXR1cm4gY29udmVydChidWZmZXIsICdVVEYtOCcsIGNoYXJzZXQpLnRvU3RyaW5nKCk7XG59XG5cbi8qKlxuICogRGV0ZWN0IGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICogcmVmOiBodHRwczovL2dpdGh1Yi5jb20vYml0aW5uL25vZGUtZmV0Y2gvaXNzdWVzLzI5NiNpc3N1ZWNvbW1lbnQtMzA3NTk4MTQzXG4gKlxuICogQHBhcmFtICAgT2JqZWN0ICBvYmogICAgIE9iamVjdCB0byBkZXRlY3QgYnkgdHlwZSBvciBicmFuZFxuICogQHJldHVybiAgU3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKG9iaikge1xuXHQvLyBEdWNrLXR5cGluZyBhcyBhIG5lY2Vzc2FyeSBjb25kaXRpb24uXG5cdGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb2JqLmFwcGVuZCAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2Ygb2JqLmRlbGV0ZSAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2Ygb2JqLmdldCAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2Ygb2JqLmdldEFsbCAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2Ygb2JqLmhhcyAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2Ygb2JqLnNldCAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIEJyYW5kLWNoZWNraW5nIGFuZCBtb3JlIGR1Y2stdHlwaW5nIGFzIG9wdGlvbmFsIGNvbmRpdGlvbi5cblx0cmV0dXJuIG9iai5jb25zdHJ1Y3Rvci5uYW1lID09PSAnVVJMU2VhcmNoUGFyYW1zJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgVVJMU2VhcmNoUGFyYW1zXScgfHwgdHlwZW9mIG9iai5zb3J0ID09PSAnZnVuY3Rpb24nO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGBvYmpgIGlzIGEgVzNDIGBCbG9iYCBvYmplY3QgKHdoaWNoIGBGaWxlYCBpbmhlcml0cyBmcm9tKVxuICogQHBhcmFtICB7Kn0gb2JqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc0Jsb2Iob2JqKSB7XG5cdHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqLmFycmF5QnVmZmVyID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmoudHlwZSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIG9iai5zdHJlYW0gPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3RvciA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdzdHJpbmcnICYmIC9eKEJsb2J8RmlsZSkkLy50ZXN0KG9iai5jb25zdHJ1Y3Rvci5uYW1lKSAmJiAvXihCbG9ifEZpbGUpJC8udGVzdChvYmpbU3ltYm9sLnRvU3RyaW5nVGFnXSk7XG59XG5cbi8qKlxuICogQ2xvbmUgYm9keSBnaXZlbiBSZXMvUmVxIGluc3RhbmNlXG4gKlxuICogQHBhcmFtICAgTWl4ZWQgIGluc3RhbmNlICBSZXNwb25zZSBvciBSZXF1ZXN0IGluc3RhbmNlXG4gKiBAcmV0dXJuICBNaXhlZFxuICovXG5mdW5jdGlvbiBjbG9uZShpbnN0YW5jZSkge1xuXHRsZXQgcDEsIHAyO1xuXHRsZXQgYm9keSA9IGluc3RhbmNlLmJvZHk7XG5cblx0Ly8gZG9uJ3QgYWxsb3cgY2xvbmluZyBhIHVzZWQgYm9keVxuXHRpZiAoaW5zdGFuY2UuYm9keVVzZWQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2Nhbm5vdCBjbG9uZSBib2R5IGFmdGVyIGl0IGlzIHVzZWQnKTtcblx0fVxuXG5cdC8vIGNoZWNrIHRoYXQgYm9keSBpcyBhIHN0cmVhbSBhbmQgbm90IGZvcm0tZGF0YSBvYmplY3Rcblx0Ly8gbm90ZTogd2UgY2FuJ3QgY2xvbmUgdGhlIGZvcm0tZGF0YSBvYmplY3Qgd2l0aG91dCBoYXZpbmcgaXQgYXMgYSBkZXBlbmRlbmN5XG5cdGlmIChib2R5IGluc3RhbmNlb2YgU3RyZWFtICYmIHR5cGVvZiBib2R5LmdldEJvdW5kYXJ5ICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0Ly8gdGVlIGluc3RhbmNlIGJvZHlcblx0XHRwMSA9IG5ldyBQYXNzVGhyb3VnaCgpO1xuXHRcdHAyID0gbmV3IFBhc3NUaHJvdWdoKCk7XG5cdFx0Ym9keS5waXBlKHAxKTtcblx0XHRib2R5LnBpcGUocDIpO1xuXHRcdC8vIHNldCBpbnN0YW5jZSBib2R5IHRvIHRlZWQgYm9keSBhbmQgcmV0dXJuIHRoZSBvdGhlciB0ZWVkIGJvZHlcblx0XHRpbnN0YW5jZVtJTlRFUk5BTFNdLmJvZHkgPSBwMTtcblx0XHRib2R5ID0gcDI7XG5cdH1cblxuXHRyZXR1cm4gYm9keTtcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyB0aGUgb3BlcmF0aW9uIFwiZXh0cmFjdCBhIGBDb250ZW50LVR5cGVgIHZhbHVlIGZyb20gfG9iamVjdHxcIiBhc1xuICogc3BlY2lmaWVkIGluIHRoZSBzcGVjaWZpY2F0aW9uOlxuICogaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI2NvbmNlcHQtYm9keWluaXQtZXh0cmFjdFxuICpcbiAqIFRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGluc3RhbmNlLmJvZHkgaXMgcHJlc2VudC5cbiAqXG4gKiBAcGFyYW0gICBNaXhlZCAgaW5zdGFuY2UgIEFueSBvcHRpb25zLmJvZHkgaW5wdXRcbiAqL1xuZnVuY3Rpb24gZXh0cmFjdENvbnRlbnRUeXBlKGJvZHkpIHtcblx0aWYgKGJvZHkgPT09IG51bGwpIHtcblx0XHQvLyBib2R5IGlzIG51bGxcblx0XHRyZXR1cm4gbnVsbDtcblx0fSBlbHNlIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcblx0XHQvLyBib2R5IGlzIHN0cmluZ1xuXHRcdHJldHVybiAndGV4dC9wbGFpbjtjaGFyc2V0PVVURi04Jztcblx0fSBlbHNlIGlmIChpc1VSTFNlYXJjaFBhcmFtcyhib2R5KSkge1xuXHRcdC8vIGJvZHkgaXMgYSBVUkxTZWFyY2hQYXJhbXNcblx0XHRyZXR1cm4gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04Jztcblx0fSBlbHNlIGlmIChpc0Jsb2IoYm9keSkpIHtcblx0XHQvLyBib2R5IGlzIGJsb2Jcblx0XHRyZXR1cm4gYm9keS50eXBlIHx8IG51bGw7XG5cdH0gZWxzZSBpZiAoQnVmZmVyLmlzQnVmZmVyKGJvZHkpKSB7XG5cdFx0Ly8gYm9keSBpcyBidWZmZXJcblx0XHRyZXR1cm4gbnVsbDtcblx0fSBlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYm9keSkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXScpIHtcblx0XHQvLyBib2R5IGlzIEFycmF5QnVmZmVyXG5cdFx0cmV0dXJuIG51bGw7XG5cdH0gZWxzZSBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KGJvZHkpKSB7XG5cdFx0Ly8gYm9keSBpcyBBcnJheUJ1ZmZlclZpZXdcblx0XHRyZXR1cm4gbnVsbDtcblx0fSBlbHNlIGlmICh0eXBlb2YgYm9keS5nZXRCb3VuZGFyeSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdC8vIGRldGVjdCBmb3JtIGRhdGEgaW5wdXQgZnJvbSBmb3JtLWRhdGEgbW9kdWxlXG5cdFx0cmV0dXJuIGBtdWx0aXBhcnQvZm9ybS1kYXRhO2JvdW5kYXJ5PSR7Ym9keS5nZXRCb3VuZGFyeSgpfWA7XG5cdH0gZWxzZSBpZiAoYm9keSBpbnN0YW5jZW9mIFN0cmVhbSkge1xuXHRcdC8vIGJvZHkgaXMgc3RyZWFtXG5cdFx0Ly8gY2FuJ3QgcmVhbGx5IGRvIG11Y2ggYWJvdXQgdGhpc1xuXHRcdHJldHVybiBudWxsO1xuXHR9IGVsc2Uge1xuXHRcdC8vIEJvZHkgY29uc3RydWN0b3IgZGVmYXVsdHMgb3RoZXIgdGhpbmdzIHRvIHN0cmluZ1xuXHRcdHJldHVybiAndGV4dC9wbGFpbjtjaGFyc2V0PVVURi04Jztcblx0fVxufVxuXG4vKipcbiAqIFRoZSBGZXRjaCBTdGFuZGFyZCB0cmVhdHMgdGhpcyBhcyBpZiBcInRvdGFsIGJ5dGVzXCIgaXMgYSBwcm9wZXJ0eSBvbiB0aGUgYm9keS5cbiAqIEZvciB1cywgd2UgaGF2ZSB0byBleHBsaWNpdGx5IGdldCBpdCB3aXRoIGEgZnVuY3Rpb24uXG4gKlxuICogcmVmOiBodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1ib2R5LXRvdGFsLWJ5dGVzXG4gKlxuICogQHBhcmFtICAgQm9keSAgICBpbnN0YW5jZSAgIEluc3RhbmNlIG9mIEJvZHlcbiAqIEByZXR1cm4gIE51bWJlcj8gICAgICAgICAgICBOdW1iZXIgb2YgYnl0ZXMsIG9yIG51bGwgaWYgbm90IHBvc3NpYmxlXG4gKi9cbmZ1bmN0aW9uIGdldFRvdGFsQnl0ZXMoaW5zdGFuY2UpIHtcblx0Y29uc3QgYm9keSA9IGluc3RhbmNlLmJvZHk7XG5cblxuXHRpZiAoYm9keSA9PT0gbnVsbCkge1xuXHRcdC8vIGJvZHkgaXMgbnVsbFxuXHRcdHJldHVybiAwO1xuXHR9IGVsc2UgaWYgKGlzQmxvYihib2R5KSkge1xuXHRcdHJldHVybiBib2R5LnNpemU7XG5cdH0gZWxzZSBpZiAoQnVmZmVyLmlzQnVmZmVyKGJvZHkpKSB7XG5cdFx0Ly8gYm9keSBpcyBidWZmZXJcblx0XHRyZXR1cm4gYm9keS5sZW5ndGg7XG5cdH0gZWxzZSBpZiAoYm9keSAmJiB0eXBlb2YgYm9keS5nZXRMZW5ndGhTeW5jID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0Ly8gZGV0ZWN0IGZvcm0gZGF0YSBpbnB1dCBmcm9tIGZvcm0tZGF0YSBtb2R1bGVcblx0XHRpZiAoYm9keS5fbGVuZ3RoUmV0cmlldmVycyAmJiBib2R5Ll9sZW5ndGhSZXRyaWV2ZXJzLmxlbmd0aCA9PSAwIHx8IC8vIDEueFxuXHRcdGJvZHkuaGFzS25vd25MZW5ndGggJiYgYm9keS5oYXNLbm93bkxlbmd0aCgpKSB7XG5cdFx0XHQvLyAyLnhcblx0XHRcdHJldHVybiBib2R5LmdldExlbmd0aFN5bmMoKTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gYm9keSBpcyBzdHJlYW1cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufVxuXG4vKipcbiAqIFdyaXRlIGEgQm9keSB0byBhIE5vZGUuanMgV3JpdGFibGVTdHJlYW0gKGUuZy4gaHR0cC5SZXF1ZXN0KSBvYmplY3QuXG4gKlxuICogQHBhcmFtICAgQm9keSAgICBpbnN0YW5jZSAgIEluc3RhbmNlIG9mIEJvZHlcbiAqIEByZXR1cm4gIFZvaWRcbiAqL1xuZnVuY3Rpb24gd3JpdGVUb1N0cmVhbShkZXN0LCBpbnN0YW5jZSkge1xuXHRjb25zdCBib2R5ID0gaW5zdGFuY2UuYm9keTtcblxuXG5cdGlmIChib2R5ID09PSBudWxsKSB7XG5cdFx0Ly8gYm9keSBpcyBudWxsXG5cdFx0ZGVzdC5lbmQoKTtcblx0fSBlbHNlIGlmIChpc0Jsb2IoYm9keSkpIHtcblx0XHRib2R5LnN0cmVhbSgpLnBpcGUoZGVzdCk7XG5cdH0gZWxzZSBpZiAoQnVmZmVyLmlzQnVmZmVyKGJvZHkpKSB7XG5cdFx0Ly8gYm9keSBpcyBidWZmZXJcblx0XHRkZXN0LndyaXRlKGJvZHkpO1xuXHRcdGRlc3QuZW5kKCk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gYm9keSBpcyBzdHJlYW1cblx0XHRib2R5LnBpcGUoZGVzdCk7XG5cdH1cbn1cblxuLy8gZXhwb3NlIFByb21pc2VcbkJvZHkuUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xuXG4vKipcbiAqIGhlYWRlcnMuanNcbiAqXG4gKiBIZWFkZXJzIGNsYXNzIG9mZmVycyBjb252ZW5pZW50IGhlbHBlcnNcbiAqL1xuXG5jb25zdCBpbnZhbGlkVG9rZW5SZWdleCA9IC9bXlxcXl9gYS16QS1aXFwtMC05ISMkJSYnKisufH5dLztcbmNvbnN0IGludmFsaWRIZWFkZXJDaGFyUmVnZXggPSAvW15cXHRcXHgyMC1cXHg3ZVxceDgwLVxceGZmXS87XG5cbmZ1bmN0aW9uIHZhbGlkYXRlTmFtZShuYW1lKSB7XG5cdG5hbWUgPSBgJHtuYW1lfWA7XG5cdGlmIChpbnZhbGlkVG9rZW5SZWdleC50ZXN0KG5hbWUpIHx8IG5hbWUgPT09ICcnKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgJHtuYW1lfSBpcyBub3QgYSBsZWdhbCBIVFRQIGhlYWRlciBuYW1lYCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVWYWx1ZSh2YWx1ZSkge1xuXHR2YWx1ZSA9IGAke3ZhbHVlfWA7XG5cdGlmIChpbnZhbGlkSGVhZGVyQ2hhclJlZ2V4LnRlc3QodmFsdWUpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgJHt2YWx1ZX0gaXMgbm90IGEgbGVnYWwgSFRUUCBoZWFkZXIgdmFsdWVgKTtcblx0fVxufVxuXG4vKipcbiAqIEZpbmQgdGhlIGtleSBpbiB0aGUgbWFwIG9iamVjdCBnaXZlbiBhIGhlYWRlciBuYW1lLlxuICpcbiAqIFJldHVybnMgdW5kZWZpbmVkIGlmIG5vdCBmb3VuZC5cbiAqXG4gKiBAcGFyYW0gICBTdHJpbmcgIG5hbWUgIEhlYWRlciBuYW1lXG4gKiBAcmV0dXJuICBTdHJpbmd8VW5kZWZpbmVkXG4gKi9cbmZ1bmN0aW9uIGZpbmQobWFwLCBuYW1lKSB7XG5cdG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cdGZvciAoY29uc3Qga2V5IGluIG1hcCkge1xuXHRcdGlmIChrZXkudG9Mb3dlckNhc2UoKSA9PT0gbmFtZSkge1xuXHRcdFx0cmV0dXJuIGtleTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuY29uc3QgTUFQID0gU3ltYm9sKCdtYXAnKTtcbmNsYXNzIEhlYWRlcnMge1xuXHQvKipcbiAgKiBIZWFkZXJzIGNsYXNzXG4gICpcbiAgKiBAcGFyYW0gICBPYmplY3QgIGhlYWRlcnMgIFJlc3BvbnNlIGhlYWRlcnNcbiAgKiBAcmV0dXJuICBWb2lkXG4gICovXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGxldCBpbml0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQ7XG5cblx0XHR0aGlzW01BUF0gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5cdFx0aWYgKGluaXQgaW5zdGFuY2VvZiBIZWFkZXJzKSB7XG5cdFx0XHRjb25zdCByYXdIZWFkZXJzID0gaW5pdC5yYXcoKTtcblx0XHRcdGNvbnN0IGhlYWRlck5hbWVzID0gT2JqZWN0LmtleXMocmF3SGVhZGVycyk7XG5cblx0XHRcdGZvciAoY29uc3QgaGVhZGVyTmFtZSBvZiBoZWFkZXJOYW1lcykge1xuXHRcdFx0XHRmb3IgKGNvbnN0IHZhbHVlIG9mIHJhd0hlYWRlcnNbaGVhZGVyTmFtZV0pIHtcblx0XHRcdFx0XHR0aGlzLmFwcGVuZChoZWFkZXJOYW1lLCB2YWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFdlIGRvbid0IHdvcnJ5IGFib3V0IGNvbnZlcnRpbmcgcHJvcCB0byBCeXRlU3RyaW5nIGhlcmUgYXMgYXBwZW5kKClcblx0XHQvLyB3aWxsIGhhbmRsZSBpdC5cblx0XHRpZiAoaW5pdCA9PSBudWxsKSA7IGVsc2UgaWYgKHR5cGVvZiBpbml0ID09PSAnb2JqZWN0Jykge1xuXHRcdFx0Y29uc3QgbWV0aG9kID0gaW5pdFtTeW1ib2wuaXRlcmF0b3JdO1xuXHRcdFx0aWYgKG1ldGhvZCAhPSBudWxsKSB7XG5cdFx0XHRcdGlmICh0eXBlb2YgbWV0aG9kICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignSGVhZGVyIHBhaXJzIG11c3QgYmUgaXRlcmFibGUnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIHNlcXVlbmNlPHNlcXVlbmNlPEJ5dGVTdHJpbmc+PlxuXHRcdFx0XHQvLyBOb3RlOiBwZXIgc3BlYyB3ZSBoYXZlIHRvIGZpcnN0IGV4aGF1c3QgdGhlIGxpc3RzIHRoZW4gcHJvY2VzcyB0aGVtXG5cdFx0XHRcdGNvbnN0IHBhaXJzID0gW107XG5cdFx0XHRcdGZvciAoY29uc3QgcGFpciBvZiBpbml0KSB7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBwYWlyICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgcGFpcltTeW1ib2wuaXRlcmF0b3JdICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFYWNoIGhlYWRlciBwYWlyIG11c3QgYmUgaXRlcmFibGUnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cGFpcnMucHVzaChBcnJheS5mcm9tKHBhaXIpKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAoY29uc3QgcGFpciBvZiBwYWlycykge1xuXHRcdFx0XHRcdGlmIChwYWlyLmxlbmd0aCAhPT0gMikge1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRWFjaCBoZWFkZXIgcGFpciBtdXN0IGJlIGEgbmFtZS92YWx1ZSB0dXBsZScpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLmFwcGVuZChwYWlyWzBdLCBwYWlyWzFdKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gcmVjb3JkPEJ5dGVTdHJpbmcsIEJ5dGVTdHJpbmc+XG5cdFx0XHRcdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGluaXQpKSB7XG5cdFx0XHRcdFx0Y29uc3QgdmFsdWUgPSBpbml0W2tleV07XG5cdFx0XHRcdFx0dGhpcy5hcHBlbmQoa2V5LCB2YWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignUHJvdmlkZWQgaW5pdGlhbGl6ZXIgbXVzdCBiZSBhbiBvYmplY3QnKTtcblx0XHR9XG5cdH1cblxuXHQvKipcbiAgKiBSZXR1cm4gY29tYmluZWQgaGVhZGVyIHZhbHVlIGdpdmVuIG5hbWVcbiAgKlxuICAqIEBwYXJhbSAgIFN0cmluZyAgbmFtZSAgSGVhZGVyIG5hbWVcbiAgKiBAcmV0dXJuICBNaXhlZFxuICAqL1xuXHRnZXQobmFtZSkge1xuXHRcdG5hbWUgPSBgJHtuYW1lfWA7XG5cdFx0dmFsaWRhdGVOYW1lKG5hbWUpO1xuXHRcdGNvbnN0IGtleSA9IGZpbmQodGhpc1tNQVBdLCBuYW1lKTtcblx0XHRpZiAoa2V5ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzW01BUF1ba2V5XS5qb2luKCcsICcpO1xuXHR9XG5cblx0LyoqXG4gICogSXRlcmF0ZSBvdmVyIGFsbCBoZWFkZXJzXG4gICpcbiAgKiBAcGFyYW0gICBGdW5jdGlvbiAgY2FsbGJhY2sgIEV4ZWN1dGVkIGZvciBlYWNoIGl0ZW0gd2l0aCBwYXJhbWV0ZXJzICh2YWx1ZSwgbmFtZSwgdGhpc0FyZylcbiAgKiBAcGFyYW0gICBCb29sZWFuICAgdGhpc0FyZyAgIGB0aGlzYCBjb250ZXh0IGZvciBjYWxsYmFjayBmdW5jdGlvblxuICAqIEByZXR1cm4gIFZvaWRcbiAgKi9cblx0Zm9yRWFjaChjYWxsYmFjaykge1xuXHRcdGxldCB0aGlzQXJnID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG5cblx0XHRsZXQgcGFpcnMgPSBnZXRIZWFkZXJzKHRoaXMpO1xuXHRcdGxldCBpID0gMDtcblx0XHR3aGlsZSAoaSA8IHBhaXJzLmxlbmd0aCkge1xuXHRcdFx0dmFyIF9wYWlycyRpID0gcGFpcnNbaV07XG5cdFx0XHRjb25zdCBuYW1lID0gX3BhaXJzJGlbMF0sXG5cdFx0XHQgICAgICB2YWx1ZSA9IF9wYWlycyRpWzFdO1xuXG5cdFx0XHRjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHZhbHVlLCBuYW1lLCB0aGlzKTtcblx0XHRcdHBhaXJzID0gZ2V0SGVhZGVycyh0aGlzKTtcblx0XHRcdGkrKztcblx0XHR9XG5cdH1cblxuXHQvKipcbiAgKiBPdmVyd3JpdGUgaGVhZGVyIHZhbHVlcyBnaXZlbiBuYW1lXG4gICpcbiAgKiBAcGFyYW0gICBTdHJpbmcgIG5hbWUgICBIZWFkZXIgbmFtZVxuICAqIEBwYXJhbSAgIFN0cmluZyAgdmFsdWUgIEhlYWRlciB2YWx1ZVxuICAqIEByZXR1cm4gIFZvaWRcbiAgKi9cblx0c2V0KG5hbWUsIHZhbHVlKSB7XG5cdFx0bmFtZSA9IGAke25hbWV9YDtcblx0XHR2YWx1ZSA9IGAke3ZhbHVlfWA7XG5cdFx0dmFsaWRhdGVOYW1lKG5hbWUpO1xuXHRcdHZhbGlkYXRlVmFsdWUodmFsdWUpO1xuXHRcdGNvbnN0IGtleSA9IGZpbmQodGhpc1tNQVBdLCBuYW1lKTtcblx0XHR0aGlzW01BUF1ba2V5ICE9PSB1bmRlZmluZWQgPyBrZXkgOiBuYW1lXSA9IFt2YWx1ZV07XG5cdH1cblxuXHQvKipcbiAgKiBBcHBlbmQgYSB2YWx1ZSBvbnRvIGV4aXN0aW5nIGhlYWRlclxuICAqXG4gICogQHBhcmFtICAgU3RyaW5nICBuYW1lICAgSGVhZGVyIG5hbWVcbiAgKiBAcGFyYW0gICBTdHJpbmcgIHZhbHVlICBIZWFkZXIgdmFsdWVcbiAgKiBAcmV0dXJuICBWb2lkXG4gICovXG5cdGFwcGVuZChuYW1lLCB2YWx1ZSkge1xuXHRcdG5hbWUgPSBgJHtuYW1lfWA7XG5cdFx0dmFsdWUgPSBgJHt2YWx1ZX1gO1xuXHRcdHZhbGlkYXRlTmFtZShuYW1lKTtcblx0XHR2YWxpZGF0ZVZhbHVlKHZhbHVlKTtcblx0XHRjb25zdCBrZXkgPSBmaW5kKHRoaXNbTUFQXSwgbmFtZSk7XG5cdFx0aWYgKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzW01BUF1ba2V5XS5wdXNoKHZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpc1tNQVBdW25hbWVdID0gW3ZhbHVlXTtcblx0XHR9XG5cdH1cblxuXHQvKipcbiAgKiBDaGVjayBmb3IgaGVhZGVyIG5hbWUgZXhpc3RlbmNlXG4gICpcbiAgKiBAcGFyYW0gICBTdHJpbmcgICBuYW1lICBIZWFkZXIgbmFtZVxuICAqIEByZXR1cm4gIEJvb2xlYW5cbiAgKi9cblx0aGFzKG5hbWUpIHtcblx0XHRuYW1lID0gYCR7bmFtZX1gO1xuXHRcdHZhbGlkYXRlTmFtZShuYW1lKTtcblx0XHRyZXR1cm4gZmluZCh0aGlzW01BUF0sIG5hbWUpICE9PSB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKipcbiAgKiBEZWxldGUgYWxsIGhlYWRlciB2YWx1ZXMgZ2l2ZW4gbmFtZVxuICAqXG4gICogQHBhcmFtICAgU3RyaW5nICBuYW1lICBIZWFkZXIgbmFtZVxuICAqIEByZXR1cm4gIFZvaWRcbiAgKi9cblx0ZGVsZXRlKG5hbWUpIHtcblx0XHRuYW1lID0gYCR7bmFtZX1gO1xuXHRcdHZhbGlkYXRlTmFtZShuYW1lKTtcblx0XHRjb25zdCBrZXkgPSBmaW5kKHRoaXNbTUFQXSwgbmFtZSk7XG5cdFx0aWYgKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRkZWxldGUgdGhpc1tNQVBdW2tleV07XG5cdFx0fVxuXHR9XG5cblx0LyoqXG4gICogUmV0dXJuIHJhdyBoZWFkZXJzIChub24tc3BlYyBhcGkpXG4gICpcbiAgKiBAcmV0dXJuICBPYmplY3RcbiAgKi9cblx0cmF3KCkge1xuXHRcdHJldHVybiB0aGlzW01BUF07XG5cdH1cblxuXHQvKipcbiAgKiBHZXQgYW4gaXRlcmF0b3Igb24ga2V5cy5cbiAgKlxuICAqIEByZXR1cm4gIEl0ZXJhdG9yXG4gICovXG5cdGtleXMoKSB7XG5cdFx0cmV0dXJuIGNyZWF0ZUhlYWRlcnNJdGVyYXRvcih0aGlzLCAna2V5Jyk7XG5cdH1cblxuXHQvKipcbiAgKiBHZXQgYW4gaXRlcmF0b3Igb24gdmFsdWVzLlxuICAqXG4gICogQHJldHVybiAgSXRlcmF0b3JcbiAgKi9cblx0dmFsdWVzKCkge1xuXHRcdHJldHVybiBjcmVhdGVIZWFkZXJzSXRlcmF0b3IodGhpcywgJ3ZhbHVlJyk7XG5cdH1cblxuXHQvKipcbiAgKiBHZXQgYW4gaXRlcmF0b3Igb24gZW50cmllcy5cbiAgKlxuICAqIFRoaXMgaXMgdGhlIGRlZmF1bHQgaXRlcmF0b3Igb2YgdGhlIEhlYWRlcnMgb2JqZWN0LlxuICAqXG4gICogQHJldHVybiAgSXRlcmF0b3JcbiAgKi9cblx0W1N5bWJvbC5pdGVyYXRvcl0oKSB7XG5cdFx0cmV0dXJuIGNyZWF0ZUhlYWRlcnNJdGVyYXRvcih0aGlzLCAna2V5K3ZhbHVlJyk7XG5cdH1cbn1cbkhlYWRlcnMucHJvdG90eXBlLmVudHJpZXMgPSBIZWFkZXJzLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoSGVhZGVycy5wcm90b3R5cGUsIFN5bWJvbC50b1N0cmluZ1RhZywge1xuXHR2YWx1ZTogJ0hlYWRlcnMnLFxuXHR3cml0YWJsZTogZmFsc2UsXG5cdGVudW1lcmFibGU6IGZhbHNlLFxuXHRjb25maWd1cmFibGU6IHRydWVcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhIZWFkZXJzLnByb3RvdHlwZSwge1xuXHRnZXQ6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRmb3JFYWNoOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0c2V0OiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0YXBwZW5kOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0aGFzOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0ZGVsZXRlOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0a2V5czogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdHZhbHVlczogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdGVudHJpZXM6IHsgZW51bWVyYWJsZTogdHJ1ZSB9XG59KTtcblxuZnVuY3Rpb24gZ2V0SGVhZGVycyhoZWFkZXJzKSB7XG5cdGxldCBraW5kID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAna2V5K3ZhbHVlJztcblxuXHRjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoaGVhZGVyc1tNQVBdKS5zb3J0KCk7XG5cdHJldHVybiBrZXlzLm1hcChraW5kID09PSAna2V5JyA/IGZ1bmN0aW9uIChrKSB7XG5cdFx0cmV0dXJuIGsudG9Mb3dlckNhc2UoKTtcblx0fSA6IGtpbmQgPT09ICd2YWx1ZScgPyBmdW5jdGlvbiAoaykge1xuXHRcdHJldHVybiBoZWFkZXJzW01BUF1ba10uam9pbignLCAnKTtcblx0fSA6IGZ1bmN0aW9uIChrKSB7XG5cdFx0cmV0dXJuIFtrLnRvTG93ZXJDYXNlKCksIGhlYWRlcnNbTUFQXVtrXS5qb2luKCcsICcpXTtcblx0fSk7XG59XG5cbmNvbnN0IElOVEVSTkFMID0gU3ltYm9sKCdpbnRlcm5hbCcpO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXJzSXRlcmF0b3IodGFyZ2V0LCBraW5kKSB7XG5cdGNvbnN0IGl0ZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShIZWFkZXJzSXRlcmF0b3JQcm90b3R5cGUpO1xuXHRpdGVyYXRvcltJTlRFUk5BTF0gPSB7XG5cdFx0dGFyZ2V0LFxuXHRcdGtpbmQsXG5cdFx0aW5kZXg6IDBcblx0fTtcblx0cmV0dXJuIGl0ZXJhdG9yO1xufVxuXG5jb25zdCBIZWFkZXJzSXRlcmF0b3JQcm90b3R5cGUgPSBPYmplY3Quc2V0UHJvdG90eXBlT2Yoe1xuXHRuZXh0KCkge1xuXHRcdC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuXHRcdGlmICghdGhpcyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykgIT09IEhlYWRlcnNJdGVyYXRvclByb3RvdHlwZSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignVmFsdWUgb2YgYHRoaXNgIGlzIG5vdCBhIEhlYWRlcnNJdGVyYXRvcicpO1xuXHRcdH1cblxuXHRcdHZhciBfSU5URVJOQUwgPSB0aGlzW0lOVEVSTkFMXTtcblx0XHRjb25zdCB0YXJnZXQgPSBfSU5URVJOQUwudGFyZ2V0LFxuXHRcdCAgICAgIGtpbmQgPSBfSU5URVJOQUwua2luZCxcblx0XHQgICAgICBpbmRleCA9IF9JTlRFUk5BTC5pbmRleDtcblxuXHRcdGNvbnN0IHZhbHVlcyA9IGdldEhlYWRlcnModGFyZ2V0LCBraW5kKTtcblx0XHRjb25zdCBsZW4gPSB2YWx1ZXMubGVuZ3RoO1xuXHRcdGlmIChpbmRleCA+PSBsZW4pIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHZhbHVlOiB1bmRlZmluZWQsXG5cdFx0XHRcdGRvbmU6IHRydWVcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0dGhpc1tJTlRFUk5BTF0uaW5kZXggPSBpbmRleCArIDE7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsdWU6IHZhbHVlc1tpbmRleF0sXG5cdFx0XHRkb25lOiBmYWxzZVxuXHRcdH07XG5cdH1cbn0sIE9iamVjdC5nZXRQcm90b3R5cGVPZihPYmplY3QuZ2V0UHJvdG90eXBlT2YoW11bU3ltYm9sLml0ZXJhdG9yXSgpKSkpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoSGVhZGVyc0l0ZXJhdG9yUHJvdG90eXBlLCBTeW1ib2wudG9TdHJpbmdUYWcsIHtcblx0dmFsdWU6ICdIZWFkZXJzSXRlcmF0b3InLFxuXHR3cml0YWJsZTogZmFsc2UsXG5cdGVudW1lcmFibGU6IGZhbHNlLFxuXHRjb25maWd1cmFibGU6IHRydWVcbn0pO1xuXG4vKipcbiAqIEV4cG9ydCB0aGUgSGVhZGVycyBvYmplY3QgaW4gYSBmb3JtIHRoYXQgTm9kZS5qcyBjYW4gY29uc3VtZS5cbiAqXG4gKiBAcGFyYW0gICBIZWFkZXJzICBoZWFkZXJzXG4gKiBAcmV0dXJuICBPYmplY3RcbiAqL1xuZnVuY3Rpb24gZXhwb3J0Tm9kZUNvbXBhdGlibGVIZWFkZXJzKGhlYWRlcnMpIHtcblx0Y29uc3Qgb2JqID0gT2JqZWN0LmFzc2lnbih7IF9fcHJvdG9fXzogbnVsbCB9LCBoZWFkZXJzW01BUF0pO1xuXG5cdC8vIGh0dHAucmVxdWVzdCgpIG9ubHkgc3VwcG9ydHMgc3RyaW5nIGFzIEhvc3QgaGVhZGVyLiBUaGlzIGhhY2sgbWFrZXNcblx0Ly8gc3BlY2lmeWluZyBjdXN0b20gSG9zdCBoZWFkZXIgcG9zc2libGUuXG5cdGNvbnN0IGhvc3RIZWFkZXJLZXkgPSBmaW5kKGhlYWRlcnNbTUFQXSwgJ0hvc3QnKTtcblx0aWYgKGhvc3RIZWFkZXJLZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdG9ialtob3N0SGVhZGVyS2V5XSA9IG9ialtob3N0SGVhZGVyS2V5XVswXTtcblx0fVxuXG5cdHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgSGVhZGVycyBvYmplY3QgZnJvbSBhbiBvYmplY3Qgb2YgaGVhZGVycywgaWdub3JpbmcgdGhvc2UgdGhhdCBkb1xuICogbm90IGNvbmZvcm0gdG8gSFRUUCBncmFtbWFyIHByb2R1Y3Rpb25zLlxuICpcbiAqIEBwYXJhbSAgIE9iamVjdCAgb2JqICBPYmplY3Qgb2YgaGVhZGVyc1xuICogQHJldHVybiAgSGVhZGVyc1xuICovXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXJzTGVuaWVudChvYmopIHtcblx0Y29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cdGZvciAoY29uc3QgbmFtZSBvZiBPYmplY3Qua2V5cyhvYmopKSB7XG5cdFx0aWYgKGludmFsaWRUb2tlblJlZ2V4LnRlc3QobmFtZSkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRpZiAoQXJyYXkuaXNBcnJheShvYmpbbmFtZV0pKSB7XG5cdFx0XHRmb3IgKGNvbnN0IHZhbCBvZiBvYmpbbmFtZV0pIHtcblx0XHRcdFx0aWYgKGludmFsaWRIZWFkZXJDaGFyUmVnZXgudGVzdCh2YWwpKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGhlYWRlcnNbTUFQXVtuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0aGVhZGVyc1tNQVBdW25hbWVdID0gW3ZhbF07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aGVhZGVyc1tNQVBdW25hbWVdLnB1c2godmFsKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoIWludmFsaWRIZWFkZXJDaGFyUmVnZXgudGVzdChvYmpbbmFtZV0pKSB7XG5cdFx0XHRoZWFkZXJzW01BUF1bbmFtZV0gPSBbb2JqW25hbWVdXTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGhlYWRlcnM7XG59XG5cbmNvbnN0IElOVEVSTkFMUyQxID0gU3ltYm9sKCdSZXNwb25zZSBpbnRlcm5hbHMnKTtcblxuLy8gZml4IGFuIGlzc3VlIHdoZXJlIFwiU1RBVFVTX0NPREVTXCIgYXJlbid0IGEgbmFtZWQgZXhwb3J0IGZvciBub2RlIDwxMFxuY29uc3QgU1RBVFVTX0NPREVTID0gaHR0cC5TVEFUVVNfQ09ERVM7XG5cbi8qKlxuICogUmVzcG9uc2UgY2xhc3NcbiAqXG4gKiBAcGFyYW0gICBTdHJlYW0gIGJvZHkgIFJlYWRhYmxlIHN0cmVhbVxuICogQHBhcmFtICAgT2JqZWN0ICBvcHRzICBSZXNwb25zZSBvcHRpb25zXG4gKiBAcmV0dXJuICBWb2lkXG4gKi9cbmNsYXNzIFJlc3BvbnNlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0bGV0IGJvZHkgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IG51bGw7XG5cdFx0bGV0IG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG5cdFx0Qm9keS5jYWxsKHRoaXMsIGJvZHksIG9wdHMpO1xuXG5cdFx0Y29uc3Qgc3RhdHVzID0gb3B0cy5zdGF0dXMgfHwgMjAwO1xuXHRcdGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRzLmhlYWRlcnMpO1xuXG5cdFx0aWYgKGJvZHkgIT0gbnVsbCAmJiAhaGVhZGVycy5oYXMoJ0NvbnRlbnQtVHlwZScpKSB7XG5cdFx0XHRjb25zdCBjb250ZW50VHlwZSA9IGV4dHJhY3RDb250ZW50VHlwZShib2R5KTtcblx0XHRcdGlmIChjb250ZW50VHlwZSkge1xuXHRcdFx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgY29udGVudFR5cGUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXNbSU5URVJOQUxTJDFdID0ge1xuXHRcdFx0dXJsOiBvcHRzLnVybCxcblx0XHRcdHN0YXR1cyxcblx0XHRcdHN0YXR1c1RleHQ6IG9wdHMuc3RhdHVzVGV4dCB8fCBTVEFUVVNfQ09ERVNbc3RhdHVzXSxcblx0XHRcdGhlYWRlcnMsXG5cdFx0XHRjb3VudGVyOiBvcHRzLmNvdW50ZXJcblx0XHR9O1xuXHR9XG5cblx0Z2V0IHVybCgpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFMkMV0udXJsIHx8ICcnO1xuXHR9XG5cblx0Z2V0IHN0YXR1cygpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFMkMV0uc3RhdHVzO1xuXHR9XG5cblx0LyoqXG4gICogQ29udmVuaWVuY2UgcHJvcGVydHkgcmVwcmVzZW50aW5nIGlmIHRoZSByZXF1ZXN0IGVuZGVkIG5vcm1hbGx5XG4gICovXG5cdGdldCBvaygpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFMkMV0uc3RhdHVzID49IDIwMCAmJiB0aGlzW0lOVEVSTkFMUyQxXS5zdGF0dXMgPCAzMDA7XG5cdH1cblxuXHRnZXQgcmVkaXJlY3RlZCgpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFMkMV0uY291bnRlciA+IDA7XG5cdH1cblxuXHRnZXQgc3RhdHVzVGV4dCgpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFMkMV0uc3RhdHVzVGV4dDtcblx0fVxuXG5cdGdldCBoZWFkZXJzKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMUyQxXS5oZWFkZXJzO1xuXHR9XG5cblx0LyoqXG4gICogQ2xvbmUgdGhpcyByZXNwb25zZVxuICAqXG4gICogQHJldHVybiAgUmVzcG9uc2VcbiAgKi9cblx0Y2xvbmUoKSB7XG5cdFx0cmV0dXJuIG5ldyBSZXNwb25zZShjbG9uZSh0aGlzKSwge1xuXHRcdFx0dXJsOiB0aGlzLnVybCxcblx0XHRcdHN0YXR1czogdGhpcy5zdGF0dXMsXG5cdFx0XHRzdGF0dXNUZXh0OiB0aGlzLnN0YXR1c1RleHQsXG5cdFx0XHRoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG5cdFx0XHRvazogdGhpcy5vayxcblx0XHRcdHJlZGlyZWN0ZWQ6IHRoaXMucmVkaXJlY3RlZFxuXHRcdH0pO1xuXHR9XG59XG5cbkJvZHkubWl4SW4oUmVzcG9uc2UucHJvdG90eXBlKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoUmVzcG9uc2UucHJvdG90eXBlLCB7XG5cdHVybDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdHN0YXR1czogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdG9rOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0cmVkaXJlY3RlZDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdHN0YXR1c1RleHQ6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRoZWFkZXJzOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0Y2xvbmU6IHsgZW51bWVyYWJsZTogdHJ1ZSB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlc3BvbnNlLnByb3RvdHlwZSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG5cdHZhbHVlOiAnUmVzcG9uc2UnLFxuXHR3cml0YWJsZTogZmFsc2UsXG5cdGVudW1lcmFibGU6IGZhbHNlLFxuXHRjb25maWd1cmFibGU6IHRydWVcbn0pO1xuXG5jb25zdCBJTlRFUk5BTFMkMiA9IFN5bWJvbCgnUmVxdWVzdCBpbnRlcm5hbHMnKTtcblxuLy8gZml4IGFuIGlzc3VlIHdoZXJlIFwiZm9ybWF0XCIsIFwicGFyc2VcIiBhcmVuJ3QgYSBuYW1lZCBleHBvcnQgZm9yIG5vZGUgPDEwXG5jb25zdCBwYXJzZV91cmwgPSBVcmwucGFyc2U7XG5jb25zdCBmb3JtYXRfdXJsID0gVXJsLmZvcm1hdDtcblxuY29uc3Qgc3RyZWFtRGVzdHJ1Y3Rpb25TdXBwb3J0ZWQgPSAnZGVzdHJveScgaW4gU3RyZWFtLlJlYWRhYmxlLnByb3RvdHlwZTtcblxuLyoqXG4gKiBDaGVjayBpZiBhIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIFJlcXVlc3QuXG4gKlxuICogQHBhcmFtICAgTWl4ZWQgICBpbnB1dFxuICogQHJldHVybiAgQm9vbGVhblxuICovXG5mdW5jdGlvbiBpc1JlcXVlc3QoaW5wdXQpIHtcblx0cmV0dXJuIHR5cGVvZiBpbnB1dCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGlucHV0W0lOVEVSTkFMUyQyXSA9PT0gJ29iamVjdCc7XG59XG5cbmZ1bmN0aW9uIGlzQWJvcnRTaWduYWwoc2lnbmFsKSB7XG5cdGNvbnN0IHByb3RvID0gc2lnbmFsICYmIHR5cGVvZiBzaWduYWwgPT09ICdvYmplY3QnICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihzaWduYWwpO1xuXHRyZXR1cm4gISEocHJvdG8gJiYgcHJvdG8uY29uc3RydWN0b3IubmFtZSA9PT0gJ0Fib3J0U2lnbmFsJyk7XG59XG5cbi8qKlxuICogUmVxdWVzdCBjbGFzc1xuICpcbiAqIEBwYXJhbSAgIE1peGVkICAgaW5wdXQgIFVybCBvciBSZXF1ZXN0IGluc3RhbmNlXG4gKiBAcGFyYW0gICBPYmplY3QgIGluaXQgICBDdXN0b20gb3B0aW9uc1xuICogQHJldHVybiAgVm9pZFxuICovXG5jbGFzcyBSZXF1ZXN0IHtcblx0Y29uc3RydWN0b3IoaW5wdXQpIHtcblx0XHRsZXQgaW5pdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cblx0XHRsZXQgcGFyc2VkVVJMO1xuXG5cdFx0Ly8gbm9ybWFsaXplIGlucHV0XG5cdFx0aWYgKCFpc1JlcXVlc3QoaW5wdXQpKSB7XG5cdFx0XHRpZiAoaW5wdXQgJiYgaW5wdXQuaHJlZikge1xuXHRcdFx0XHQvLyBpbiBvcmRlciB0byBzdXBwb3J0IE5vZGUuanMnIFVybCBvYmplY3RzOyB0aG91Z2ggV0hBVFdHJ3MgVVJMIG9iamVjdHNcblx0XHRcdFx0Ly8gd2lsbCBmYWxsIGludG8gdGhpcyBicmFuY2ggYWxzbyAoc2luY2UgdGhlaXIgYHRvU3RyaW5nKClgIHdpbGwgcmV0dXJuXG5cdFx0XHRcdC8vIGBocmVmYCBwcm9wZXJ0eSBhbnl3YXkpXG5cdFx0XHRcdHBhcnNlZFVSTCA9IHBhcnNlX3VybChpbnB1dC5ocmVmKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIGNvZXJjZSBpbnB1dCB0byBhIHN0cmluZyBiZWZvcmUgYXR0ZW1wdGluZyB0byBwYXJzZVxuXHRcdFx0XHRwYXJzZWRVUkwgPSBwYXJzZV91cmwoYCR7aW5wdXR9YCk7XG5cdFx0XHR9XG5cdFx0XHRpbnB1dCA9IHt9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwYXJzZWRVUkwgPSBwYXJzZV91cmwoaW5wdXQudXJsKTtcblx0XHR9XG5cblx0XHRsZXQgbWV0aG9kID0gaW5pdC5tZXRob2QgfHwgaW5wdXQubWV0aG9kIHx8ICdHRVQnO1xuXHRcdG1ldGhvZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpO1xuXG5cdFx0aWYgKChpbml0LmJvZHkgIT0gbnVsbCB8fCBpc1JlcXVlc3QoaW5wdXQpICYmIGlucHV0LmJvZHkgIT09IG51bGwpICYmIChtZXRob2QgPT09ICdHRVQnIHx8IG1ldGhvZCA9PT0gJ0hFQUQnKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignUmVxdWVzdCB3aXRoIEdFVC9IRUFEIG1ldGhvZCBjYW5ub3QgaGF2ZSBib2R5Jyk7XG5cdFx0fVxuXG5cdFx0bGV0IGlucHV0Qm9keSA9IGluaXQuYm9keSAhPSBudWxsID8gaW5pdC5ib2R5IDogaXNSZXF1ZXN0KGlucHV0KSAmJiBpbnB1dC5ib2R5ICE9PSBudWxsID8gY2xvbmUoaW5wdXQpIDogbnVsbDtcblxuXHRcdEJvZHkuY2FsbCh0aGlzLCBpbnB1dEJvZHksIHtcblx0XHRcdHRpbWVvdXQ6IGluaXQudGltZW91dCB8fCBpbnB1dC50aW1lb3V0IHx8IDAsXG5cdFx0XHRzaXplOiBpbml0LnNpemUgfHwgaW5wdXQuc2l6ZSB8fCAwXG5cdFx0fSk7XG5cblx0XHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoaW5pdC5oZWFkZXJzIHx8IGlucHV0LmhlYWRlcnMgfHwge30pO1xuXG5cdFx0aWYgKGlucHV0Qm9keSAhPSBudWxsICYmICFoZWFkZXJzLmhhcygnQ29udGVudC1UeXBlJykpIHtcblx0XHRcdGNvbnN0IGNvbnRlbnRUeXBlID0gZXh0cmFjdENvbnRlbnRUeXBlKGlucHV0Qm9keSk7XG5cdFx0XHRpZiAoY29udGVudFR5cGUpIHtcblx0XHRcdFx0aGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsIGNvbnRlbnRUeXBlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRsZXQgc2lnbmFsID0gaXNSZXF1ZXN0KGlucHV0KSA/IGlucHV0LnNpZ25hbCA6IG51bGw7XG5cdFx0aWYgKCdzaWduYWwnIGluIGluaXQpIHNpZ25hbCA9IGluaXQuc2lnbmFsO1xuXG5cdFx0aWYgKHNpZ25hbCAhPSBudWxsICYmICFpc0Fib3J0U2lnbmFsKHNpZ25hbCkpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIHNpZ25hbCB0byBiZSBhbiBpbnN0YW5jZW9mIEFib3J0U2lnbmFsJyk7XG5cdFx0fVxuXG5cdFx0dGhpc1tJTlRFUk5BTFMkMl0gPSB7XG5cdFx0XHRtZXRob2QsXG5cdFx0XHRyZWRpcmVjdDogaW5pdC5yZWRpcmVjdCB8fCBpbnB1dC5yZWRpcmVjdCB8fCAnZm9sbG93Jyxcblx0XHRcdGhlYWRlcnMsXG5cdFx0XHRwYXJzZWRVUkwsXG5cdFx0XHRzaWduYWxcblx0XHR9O1xuXG5cdFx0Ly8gbm9kZS1mZXRjaC1vbmx5IG9wdGlvbnNcblx0XHR0aGlzLmZvbGxvdyA9IGluaXQuZm9sbG93ICE9PSB1bmRlZmluZWQgPyBpbml0LmZvbGxvdyA6IGlucHV0LmZvbGxvdyAhPT0gdW5kZWZpbmVkID8gaW5wdXQuZm9sbG93IDogMjA7XG5cdFx0dGhpcy5jb21wcmVzcyA9IGluaXQuY29tcHJlc3MgIT09IHVuZGVmaW5lZCA/IGluaXQuY29tcHJlc3MgOiBpbnB1dC5jb21wcmVzcyAhPT0gdW5kZWZpbmVkID8gaW5wdXQuY29tcHJlc3MgOiB0cnVlO1xuXHRcdHRoaXMuY291bnRlciA9IGluaXQuY291bnRlciB8fCBpbnB1dC5jb3VudGVyIHx8IDA7XG5cdFx0dGhpcy5hZ2VudCA9IGluaXQuYWdlbnQgfHwgaW5wdXQuYWdlbnQ7XG5cdH1cblxuXHRnZXQgbWV0aG9kKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMUyQyXS5tZXRob2Q7XG5cdH1cblxuXHRnZXQgdXJsKCkge1xuXHRcdHJldHVybiBmb3JtYXRfdXJsKHRoaXNbSU5URVJOQUxTJDJdLnBhcnNlZFVSTCk7XG5cdH1cblxuXHRnZXQgaGVhZGVycygpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFMkMl0uaGVhZGVycztcblx0fVxuXG5cdGdldCByZWRpcmVjdCgpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFMkMl0ucmVkaXJlY3Q7XG5cdH1cblxuXHRnZXQgc2lnbmFsKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMUyQyXS5zaWduYWw7XG5cdH1cblxuXHQvKipcbiAgKiBDbG9uZSB0aGlzIHJlcXVlc3RcbiAgKlxuICAqIEByZXR1cm4gIFJlcXVlc3RcbiAgKi9cblx0Y2xvbmUoKSB7XG5cdFx0cmV0dXJuIG5ldyBSZXF1ZXN0KHRoaXMpO1xuXHR9XG59XG5cbkJvZHkubWl4SW4oUmVxdWVzdC5wcm90b3R5cGUpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVxdWVzdC5wcm90b3R5cGUsIFN5bWJvbC50b1N0cmluZ1RhZywge1xuXHR2YWx1ZTogJ1JlcXVlc3QnLFxuXHR3cml0YWJsZTogZmFsc2UsXG5cdGVudW1lcmFibGU6IGZhbHNlLFxuXHRjb25maWd1cmFibGU6IHRydWVcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhSZXF1ZXN0LnByb3RvdHlwZSwge1xuXHRtZXRob2Q6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHR1cmw6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRoZWFkZXJzOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0cmVkaXJlY3Q6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRjbG9uZTogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdHNpZ25hbDogeyBlbnVtZXJhYmxlOiB0cnVlIH1cbn0pO1xuXG4vKipcbiAqIENvbnZlcnQgYSBSZXF1ZXN0IHRvIE5vZGUuanMgaHR0cCByZXF1ZXN0IG9wdGlvbnMuXG4gKlxuICogQHBhcmFtICAgUmVxdWVzdCAgQSBSZXF1ZXN0IGluc3RhbmNlXG4gKiBAcmV0dXJuICBPYmplY3QgICBUaGUgb3B0aW9ucyBvYmplY3QgdG8gYmUgcGFzc2VkIHRvIGh0dHAucmVxdWVzdFxuICovXG5mdW5jdGlvbiBnZXROb2RlUmVxdWVzdE9wdGlvbnMocmVxdWVzdCkge1xuXHRjb25zdCBwYXJzZWRVUkwgPSByZXF1ZXN0W0lOVEVSTkFMUyQyXS5wYXJzZWRVUkw7XG5cdGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyhyZXF1ZXN0W0lOVEVSTkFMUyQyXS5oZWFkZXJzKTtcblxuXHQvLyBmZXRjaCBzdGVwIDEuM1xuXHRpZiAoIWhlYWRlcnMuaGFzKCdBY2NlcHQnKSkge1xuXHRcdGhlYWRlcnMuc2V0KCdBY2NlcHQnLCAnKi8qJyk7XG5cdH1cblxuXHQvLyBCYXNpYyBmZXRjaFxuXHRpZiAoIXBhcnNlZFVSTC5wcm90b2NvbCB8fCAhcGFyc2VkVVJMLmhvc3RuYW1lKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT25seSBhYnNvbHV0ZSBVUkxzIGFyZSBzdXBwb3J0ZWQnKTtcblx0fVxuXG5cdGlmICghL15odHRwcz86JC8udGVzdChwYXJzZWRVUkwucHJvdG9jb2wpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT25seSBIVFRQKFMpIHByb3RvY29scyBhcmUgc3VwcG9ydGVkJyk7XG5cdH1cblxuXHRpZiAocmVxdWVzdC5zaWduYWwgJiYgcmVxdWVzdC5ib2R5IGluc3RhbmNlb2YgU3RyZWFtLlJlYWRhYmxlICYmICFzdHJlYW1EZXN0cnVjdGlvblN1cHBvcnRlZCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignQ2FuY2VsbGF0aW9uIG9mIHN0cmVhbWVkIHJlcXVlc3RzIHdpdGggQWJvcnRTaWduYWwgaXMgbm90IHN1cHBvcnRlZCBpbiBub2RlIDwgOCcpO1xuXHR9XG5cblx0Ly8gSFRUUC1uZXR3b3JrLW9yLWNhY2hlIGZldGNoIHN0ZXBzIDIuNC0yLjdcblx0bGV0IGNvbnRlbnRMZW5ndGhWYWx1ZSA9IG51bGw7XG5cdGlmIChyZXF1ZXN0LmJvZHkgPT0gbnVsbCAmJiAvXihQT1NUfFBVVCkkL2kudGVzdChyZXF1ZXN0Lm1ldGhvZCkpIHtcblx0XHRjb250ZW50TGVuZ3RoVmFsdWUgPSAnMCc7XG5cdH1cblx0aWYgKHJlcXVlc3QuYm9keSAhPSBudWxsKSB7XG5cdFx0Y29uc3QgdG90YWxCeXRlcyA9IGdldFRvdGFsQnl0ZXMocmVxdWVzdCk7XG5cdFx0aWYgKHR5cGVvZiB0b3RhbEJ5dGVzID09PSAnbnVtYmVyJykge1xuXHRcdFx0Y29udGVudExlbmd0aFZhbHVlID0gU3RyaW5nKHRvdGFsQnl0ZXMpO1xuXHRcdH1cblx0fVxuXHRpZiAoY29udGVudExlbmd0aFZhbHVlKSB7XG5cdFx0aGVhZGVycy5zZXQoJ0NvbnRlbnQtTGVuZ3RoJywgY29udGVudExlbmd0aFZhbHVlKTtcblx0fVxuXG5cdC8vIEhUVFAtbmV0d29yay1vci1jYWNoZSBmZXRjaCBzdGVwIDIuMTFcblx0aWYgKCFoZWFkZXJzLmhhcygnVXNlci1BZ2VudCcpKSB7XG5cdFx0aGVhZGVycy5zZXQoJ1VzZXItQWdlbnQnLCAnbm9kZS1mZXRjaC8xLjAgKCtodHRwczovL2dpdGh1Yi5jb20vYml0aW5uL25vZGUtZmV0Y2gpJyk7XG5cdH1cblxuXHQvLyBIVFRQLW5ldHdvcmstb3ItY2FjaGUgZmV0Y2ggc3RlcCAyLjE1XG5cdGlmIChyZXF1ZXN0LmNvbXByZXNzICYmICFoZWFkZXJzLmhhcygnQWNjZXB0LUVuY29kaW5nJykpIHtcblx0XHRoZWFkZXJzLnNldCgnQWNjZXB0LUVuY29kaW5nJywgJ2d6aXAsZGVmbGF0ZScpO1xuXHR9XG5cblx0bGV0IGFnZW50ID0gcmVxdWVzdC5hZ2VudDtcblx0aWYgKHR5cGVvZiBhZ2VudCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGFnZW50ID0gYWdlbnQocGFyc2VkVVJMKTtcblx0fVxuXG5cdGlmICghaGVhZGVycy5oYXMoJ0Nvbm5lY3Rpb24nKSAmJiAhYWdlbnQpIHtcblx0XHRoZWFkZXJzLnNldCgnQ29ubmVjdGlvbicsICdjbG9zZScpO1xuXHR9XG5cblx0Ly8gSFRUUC1uZXR3b3JrIGZldGNoIHN0ZXAgNC4yXG5cdC8vIGNodW5rZWQgZW5jb2RpbmcgaXMgaGFuZGxlZCBieSBOb2RlLmpzXG5cblx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZFVSTCwge1xuXHRcdG1ldGhvZDogcmVxdWVzdC5tZXRob2QsXG5cdFx0aGVhZGVyczogZXhwb3J0Tm9kZUNvbXBhdGlibGVIZWFkZXJzKGhlYWRlcnMpLFxuXHRcdGFnZW50XG5cdH0pO1xufVxuXG4vKipcbiAqIGFib3J0LWVycm9yLmpzXG4gKlxuICogQWJvcnRFcnJvciBpbnRlcmZhY2UgZm9yIGNhbmNlbGxlZCByZXF1ZXN0c1xuICovXG5cbi8qKlxuICogQ3JlYXRlIEFib3J0RXJyb3IgaW5zdGFuY2VcbiAqXG4gKiBAcGFyYW0gICBTdHJpbmcgICAgICBtZXNzYWdlICAgICAgRXJyb3IgbWVzc2FnZSBmb3IgaHVtYW5cbiAqIEByZXR1cm4gIEFib3J0RXJyb3JcbiAqL1xuZnVuY3Rpb24gQWJvcnRFcnJvcihtZXNzYWdlKSB7XG4gIEVycm9yLmNhbGwodGhpcywgbWVzc2FnZSk7XG5cbiAgdGhpcy50eXBlID0gJ2Fib3J0ZWQnO1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuXG4gIC8vIGhpZGUgY3VzdG9tIGVycm9yIGltcGxlbWVudGF0aW9uIGRldGFpbHMgZnJvbSBlbmQtdXNlcnNcbiAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XG59XG5cbkFib3J0RXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuQWJvcnRFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBBYm9ydEVycm9yO1xuQWJvcnRFcnJvci5wcm90b3R5cGUubmFtZSA9ICdBYm9ydEVycm9yJztcblxuLy8gZml4IGFuIGlzc3VlIHdoZXJlIFwiUGFzc1Rocm91Z2hcIiwgXCJyZXNvbHZlXCIgYXJlbid0IGEgbmFtZWQgZXhwb3J0IGZvciBub2RlIDwxMFxuY29uc3QgUGFzc1Rocm91Z2gkMSA9IFN0cmVhbS5QYXNzVGhyb3VnaDtcbmNvbnN0IHJlc29sdmVfdXJsID0gVXJsLnJlc29sdmU7XG5cbi8qKlxuICogRmV0Y2ggZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0gICBNaXhlZCAgICB1cmwgICBBYnNvbHV0ZSB1cmwgb3IgUmVxdWVzdCBpbnN0YW5jZVxuICogQHBhcmFtICAgT2JqZWN0ICAgb3B0cyAgRmV0Y2ggb3B0aW9uc1xuICogQHJldHVybiAgUHJvbWlzZVxuICovXG5mdW5jdGlvbiBmZXRjaCh1cmwsIG9wdHMpIHtcblxuXHQvLyBhbGxvdyBjdXN0b20gcHJvbWlzZVxuXHRpZiAoIWZldGNoLlByb21pc2UpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ25hdGl2ZSBwcm9taXNlIG1pc3NpbmcsIHNldCBmZXRjaC5Qcm9taXNlIHRvIHlvdXIgZmF2b3JpdGUgYWx0ZXJuYXRpdmUnKTtcblx0fVxuXG5cdEJvZHkuUHJvbWlzZSA9IGZldGNoLlByb21pc2U7XG5cblx0Ly8gd3JhcCBodHRwLnJlcXVlc3QgaW50byBmZXRjaFxuXHRyZXR1cm4gbmV3IGZldGNoLlByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdC8vIGJ1aWxkIHJlcXVlc3Qgb2JqZWN0XG5cdFx0Y29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHVybCwgb3B0cyk7XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IGdldE5vZGVSZXF1ZXN0T3B0aW9ucyhyZXF1ZXN0KTtcblxuXHRcdGNvbnN0IHNlbmQgPSAob3B0aW9ucy5wcm90b2NvbCA9PT0gJ2h0dHBzOicgPyBodHRwcyA6IGh0dHApLnJlcXVlc3Q7XG5cdFx0Y29uc3Qgc2lnbmFsID0gcmVxdWVzdC5zaWduYWw7XG5cblx0XHRsZXQgcmVzcG9uc2UgPSBudWxsO1xuXG5cdFx0Y29uc3QgYWJvcnQgPSBmdW5jdGlvbiBhYm9ydCgpIHtcblx0XHRcdGxldCBlcnJvciA9IG5ldyBBYm9ydEVycm9yKCdUaGUgdXNlciBhYm9ydGVkIGEgcmVxdWVzdC4nKTtcblx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHRpZiAocmVxdWVzdC5ib2R5ICYmIHJlcXVlc3QuYm9keSBpbnN0YW5jZW9mIFN0cmVhbS5SZWFkYWJsZSkge1xuXHRcdFx0XHRyZXF1ZXN0LmJvZHkuZGVzdHJveShlcnJvcik7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXJlc3BvbnNlIHx8ICFyZXNwb25zZS5ib2R5KSByZXR1cm47XG5cdFx0XHRyZXNwb25zZS5ib2R5LmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuXHRcdH07XG5cblx0XHRpZiAoc2lnbmFsICYmIHNpZ25hbC5hYm9ydGVkKSB7XG5cdFx0XHRhYm9ydCgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGFib3J0QW5kRmluYWxpemUgPSBmdW5jdGlvbiBhYm9ydEFuZEZpbmFsaXplKCkge1xuXHRcdFx0YWJvcnQoKTtcblx0XHRcdGZpbmFsaXplKCk7XG5cdFx0fTtcblxuXHRcdC8vIHNlbmQgcmVxdWVzdFxuXHRcdGNvbnN0IHJlcSA9IHNlbmQob3B0aW9ucyk7XG5cdFx0bGV0IHJlcVRpbWVvdXQ7XG5cblx0XHRpZiAoc2lnbmFsKSB7XG5cdFx0XHRzaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBhYm9ydEFuZEZpbmFsaXplKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBmaW5hbGl6ZSgpIHtcblx0XHRcdHJlcS5hYm9ydCgpO1xuXHRcdFx0aWYgKHNpZ25hbCkgc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgYWJvcnRBbmRGaW5hbGl6ZSk7XG5cdFx0XHRjbGVhclRpbWVvdXQocmVxVGltZW91dCk7XG5cdFx0fVxuXG5cdFx0aWYgKHJlcXVlc3QudGltZW91dCkge1xuXHRcdFx0cmVxLm9uY2UoJ3NvY2tldCcsIGZ1bmN0aW9uIChzb2NrZXQpIHtcblx0XHRcdFx0cmVxVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHJlamVjdChuZXcgRmV0Y2hFcnJvcihgbmV0d29yayB0aW1lb3V0IGF0OiAke3JlcXVlc3QudXJsfWAsICdyZXF1ZXN0LXRpbWVvdXQnKSk7XG5cdFx0XHRcdFx0ZmluYWxpemUoKTtcblx0XHRcdFx0fSwgcmVxdWVzdC50aW1lb3V0KTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJlcS5vbignZXJyb3InLCBmdW5jdGlvbiAoZXJyKSB7XG5cdFx0XHRyZWplY3QobmV3IEZldGNoRXJyb3IoYHJlcXVlc3QgdG8gJHtyZXF1ZXN0LnVybH0gZmFpbGVkLCByZWFzb246ICR7ZXJyLm1lc3NhZ2V9YCwgJ3N5c3RlbScsIGVycikpO1xuXHRcdFx0ZmluYWxpemUoKTtcblx0XHR9KTtcblxuXHRcdHJlcS5vbigncmVzcG9uc2UnLCBmdW5jdGlvbiAocmVzKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQocmVxVGltZW91dCk7XG5cblx0XHRcdGNvbnN0IGhlYWRlcnMgPSBjcmVhdGVIZWFkZXJzTGVuaWVudChyZXMuaGVhZGVycyk7XG5cblx0XHRcdC8vIEhUVFAgZmV0Y2ggc3RlcCA1XG5cdFx0XHRpZiAoZmV0Y2guaXNSZWRpcmVjdChyZXMuc3RhdHVzQ29kZSkpIHtcblx0XHRcdFx0Ly8gSFRUUCBmZXRjaCBzdGVwIDUuMlxuXHRcdFx0XHRjb25zdCBsb2NhdGlvbiA9IGhlYWRlcnMuZ2V0KCdMb2NhdGlvbicpO1xuXG5cdFx0XHRcdC8vIEhUVFAgZmV0Y2ggc3RlcCA1LjNcblx0XHRcdFx0Y29uc3QgbG9jYXRpb25VUkwgPSBsb2NhdGlvbiA9PT0gbnVsbCA/IG51bGwgOiByZXNvbHZlX3VybChyZXF1ZXN0LnVybCwgbG9jYXRpb24pO1xuXG5cdFx0XHRcdC8vIEhUVFAgZmV0Y2ggc3RlcCA1LjVcblx0XHRcdFx0c3dpdGNoIChyZXF1ZXN0LnJlZGlyZWN0KSB7XG5cdFx0XHRcdFx0Y2FzZSAnZXJyb3InOlxuXHRcdFx0XHRcdFx0cmVqZWN0KG5ldyBGZXRjaEVycm9yKGByZWRpcmVjdCBtb2RlIGlzIHNldCB0byBlcnJvcjogJHtyZXF1ZXN0LnVybH1gLCAnbm8tcmVkaXJlY3QnKSk7XG5cdFx0XHRcdFx0XHRmaW5hbGl6ZSgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdGNhc2UgJ21hbnVhbCc6XG5cdFx0XHRcdFx0XHQvLyBub2RlLWZldGNoLXNwZWNpZmljIHN0ZXA6IG1ha2UgbWFudWFsIHJlZGlyZWN0IGEgYml0IGVhc2llciB0byB1c2UgYnkgc2V0dGluZyB0aGUgTG9jYXRpb24gaGVhZGVyIHZhbHVlIHRvIHRoZSByZXNvbHZlZCBVUkwuXG5cdFx0XHRcdFx0XHRpZiAobG9jYXRpb25VUkwgIT09IG51bGwpIHtcblx0XHRcdFx0XHRcdFx0Ly8gaGFuZGxlIGNvcnJ1cHRlZCBoZWFkZXJcblx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRoZWFkZXJzLnNldCgnTG9jYXRpb24nLCBsb2NhdGlvblVSTCk7XG5cdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdFx0XHRcdC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBub2RlanMgc2VydmVyIHByZXZlbnQgaW52YWxpZCByZXNwb25zZSBoZWFkZXJzLCB3ZSBjYW4ndCB0ZXN0IHRoaXMgdGhyb3VnaCBub3JtYWwgcmVxdWVzdFxuXHRcdFx0XHRcdFx0XHRcdHJlamVjdChlcnIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdmb2xsb3cnOlxuXHRcdFx0XHRcdFx0Ly8gSFRUUC1yZWRpcmVjdCBmZXRjaCBzdGVwIDJcblx0XHRcdFx0XHRcdGlmIChsb2NhdGlvblVSTCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gSFRUUC1yZWRpcmVjdCBmZXRjaCBzdGVwIDVcblx0XHRcdFx0XHRcdGlmIChyZXF1ZXN0LmNvdW50ZXIgPj0gcmVxdWVzdC5mb2xsb3cpIHtcblx0XHRcdFx0XHRcdFx0cmVqZWN0KG5ldyBGZXRjaEVycm9yKGBtYXhpbXVtIHJlZGlyZWN0IHJlYWNoZWQgYXQ6ICR7cmVxdWVzdC51cmx9YCwgJ21heC1yZWRpcmVjdCcpKTtcblx0XHRcdFx0XHRcdFx0ZmluYWxpemUoKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBIVFRQLXJlZGlyZWN0IGZldGNoIHN0ZXAgNiAoY291bnRlciBpbmNyZW1lbnQpXG5cdFx0XHRcdFx0XHQvLyBDcmVhdGUgYSBuZXcgUmVxdWVzdCBvYmplY3QuXG5cdFx0XHRcdFx0XHRjb25zdCByZXF1ZXN0T3B0cyA9IHtcblx0XHRcdFx0XHRcdFx0aGVhZGVyczogbmV3IEhlYWRlcnMocmVxdWVzdC5oZWFkZXJzKSxcblx0XHRcdFx0XHRcdFx0Zm9sbG93OiByZXF1ZXN0LmZvbGxvdyxcblx0XHRcdFx0XHRcdFx0Y291bnRlcjogcmVxdWVzdC5jb3VudGVyICsgMSxcblx0XHRcdFx0XHRcdFx0YWdlbnQ6IHJlcXVlc3QuYWdlbnQsXG5cdFx0XHRcdFx0XHRcdGNvbXByZXNzOiByZXF1ZXN0LmNvbXByZXNzLFxuXHRcdFx0XHRcdFx0XHRtZXRob2Q6IHJlcXVlc3QubWV0aG9kLFxuXHRcdFx0XHRcdFx0XHRib2R5OiByZXF1ZXN0LmJvZHksXG5cdFx0XHRcdFx0XHRcdHNpZ25hbDogcmVxdWVzdC5zaWduYWwsXG5cdFx0XHRcdFx0XHRcdHRpbWVvdXQ6IHJlcXVlc3QudGltZW91dFxuXHRcdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdFx0Ly8gSFRUUC1yZWRpcmVjdCBmZXRjaCBzdGVwIDlcblx0XHRcdFx0XHRcdGlmIChyZXMuc3RhdHVzQ29kZSAhPT0gMzAzICYmIHJlcXVlc3QuYm9keSAmJiBnZXRUb3RhbEJ5dGVzKHJlcXVlc3QpID09PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdHJlamVjdChuZXcgRmV0Y2hFcnJvcignQ2Fubm90IGZvbGxvdyByZWRpcmVjdCB3aXRoIGJvZHkgYmVpbmcgYSByZWFkYWJsZSBzdHJlYW0nLCAndW5zdXBwb3J0ZWQtcmVkaXJlY3QnKSk7XG5cdFx0XHRcdFx0XHRcdGZpbmFsaXplKCk7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gSFRUUC1yZWRpcmVjdCBmZXRjaCBzdGVwIDExXG5cdFx0XHRcdFx0XHRpZiAocmVzLnN0YXR1c0NvZGUgPT09IDMwMyB8fCAocmVzLnN0YXR1c0NvZGUgPT09IDMwMSB8fCByZXMuc3RhdHVzQ29kZSA9PT0gMzAyKSAmJiByZXF1ZXN0Lm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG5cdFx0XHRcdFx0XHRcdHJlcXVlc3RPcHRzLm1ldGhvZCA9ICdHRVQnO1xuXHRcdFx0XHRcdFx0XHRyZXF1ZXN0T3B0cy5ib2R5ID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRyZXF1ZXN0T3B0cy5oZWFkZXJzLmRlbGV0ZSgnY29udGVudC1sZW5ndGgnKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gSFRUUC1yZWRpcmVjdCBmZXRjaCBzdGVwIDE1XG5cdFx0XHRcdFx0XHRyZXNvbHZlKGZldGNoKG5ldyBSZXF1ZXN0KGxvY2F0aW9uVVJMLCByZXF1ZXN0T3B0cykpKTtcblx0XHRcdFx0XHRcdGZpbmFsaXplKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gcHJlcGFyZSByZXNwb25zZVxuXHRcdFx0cmVzLm9uY2UoJ2VuZCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0aWYgKHNpZ25hbCkgc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgYWJvcnRBbmRGaW5hbGl6ZSk7XG5cdFx0XHR9KTtcblx0XHRcdGxldCBib2R5ID0gcmVzLnBpcGUobmV3IFBhc3NUaHJvdWdoJDEoKSk7XG5cblx0XHRcdGNvbnN0IHJlc3BvbnNlX29wdGlvbnMgPSB7XG5cdFx0XHRcdHVybDogcmVxdWVzdC51cmwsXG5cdFx0XHRcdHN0YXR1czogcmVzLnN0YXR1c0NvZGUsXG5cdFx0XHRcdHN0YXR1c1RleHQ6IHJlcy5zdGF0dXNNZXNzYWdlLFxuXHRcdFx0XHRoZWFkZXJzOiBoZWFkZXJzLFxuXHRcdFx0XHRzaXplOiByZXF1ZXN0LnNpemUsXG5cdFx0XHRcdHRpbWVvdXQ6IHJlcXVlc3QudGltZW91dCxcblx0XHRcdFx0Y291bnRlcjogcmVxdWVzdC5jb3VudGVyXG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBIVFRQLW5ldHdvcmsgZmV0Y2ggc3RlcCAxMi4xLjEuM1xuXHRcdFx0Y29uc3QgY29kaW5ncyA9IGhlYWRlcnMuZ2V0KCdDb250ZW50LUVuY29kaW5nJyk7XG5cblx0XHRcdC8vIEhUVFAtbmV0d29yayBmZXRjaCBzdGVwIDEyLjEuMS40OiBoYW5kbGUgY29udGVudCBjb2RpbmdzXG5cblx0XHRcdC8vIGluIGZvbGxvd2luZyBzY2VuYXJpb3Mgd2UgaWdub3JlIGNvbXByZXNzaW9uIHN1cHBvcnRcblx0XHRcdC8vIDEuIGNvbXByZXNzaW9uIHN1cHBvcnQgaXMgZGlzYWJsZWRcblx0XHRcdC8vIDIuIEhFQUQgcmVxdWVzdFxuXHRcdFx0Ly8gMy4gbm8gQ29udGVudC1FbmNvZGluZyBoZWFkZXJcblx0XHRcdC8vIDQuIG5vIGNvbnRlbnQgcmVzcG9uc2UgKDIwNClcblx0XHRcdC8vIDUuIGNvbnRlbnQgbm90IG1vZGlmaWVkIHJlc3BvbnNlICgzMDQpXG5cdFx0XHRpZiAoIXJlcXVlc3QuY29tcHJlc3MgfHwgcmVxdWVzdC5tZXRob2QgPT09ICdIRUFEJyB8fCBjb2RpbmdzID09PSBudWxsIHx8IHJlcy5zdGF0dXNDb2RlID09PSAyMDQgfHwgcmVzLnN0YXR1c0NvZGUgPT09IDMwNCkge1xuXHRcdFx0XHRyZXNwb25zZSA9IG5ldyBSZXNwb25zZShib2R5LCByZXNwb25zZV9vcHRpb25zKTtcblx0XHRcdFx0cmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRm9yIE5vZGUgdjYrXG5cdFx0XHQvLyBCZSBsZXNzIHN0cmljdCB3aGVuIGRlY29kaW5nIGNvbXByZXNzZWQgcmVzcG9uc2VzLCBzaW5jZSBzb21ldGltZXNcblx0XHRcdC8vIHNlcnZlcnMgc2VuZCBzbGlnaHRseSBpbnZhbGlkIHJlc3BvbnNlcyB0aGF0IGFyZSBzdGlsbCBhY2NlcHRlZFxuXHRcdFx0Ly8gYnkgY29tbW9uIGJyb3dzZXJzLlxuXHRcdFx0Ly8gQWx3YXlzIHVzaW5nIFpfU1lOQ19GTFVTSCBpcyB3aGF0IGNVUkwgZG9lcy5cblx0XHRcdGNvbnN0IHpsaWJPcHRpb25zID0ge1xuXHRcdFx0XHRmbHVzaDogemxpYi5aX1NZTkNfRkxVU0gsXG5cdFx0XHRcdGZpbmlzaEZsdXNoOiB6bGliLlpfU1lOQ19GTFVTSFxuXHRcdFx0fTtcblxuXHRcdFx0Ly8gZm9yIGd6aXBcblx0XHRcdGlmIChjb2RpbmdzID09ICdnemlwJyB8fCBjb2RpbmdzID09ICd4LWd6aXAnKSB7XG5cdFx0XHRcdGJvZHkgPSBib2R5LnBpcGUoemxpYi5jcmVhdGVHdW56aXAoemxpYk9wdGlvbnMpKTtcblx0XHRcdFx0cmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UoYm9keSwgcmVzcG9uc2Vfb3B0aW9ucyk7XG5cdFx0XHRcdHJlc29sdmUocmVzcG9uc2UpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIGZvciBkZWZsYXRlXG5cdFx0XHRpZiAoY29kaW5ncyA9PSAnZGVmbGF0ZScgfHwgY29kaW5ncyA9PSAneC1kZWZsYXRlJykge1xuXHRcdFx0XHQvLyBoYW5kbGUgdGhlIGluZmFtb3VzIHJhdyBkZWZsYXRlIHJlc3BvbnNlIGZyb20gb2xkIHNlcnZlcnNcblx0XHRcdFx0Ly8gYSBoYWNrIGZvciBvbGQgSUlTIGFuZCBBcGFjaGUgc2VydmVyc1xuXHRcdFx0XHRjb25zdCByYXcgPSByZXMucGlwZShuZXcgUGFzc1Rocm91Z2gkMSgpKTtcblx0XHRcdFx0cmF3Lm9uY2UoJ2RhdGEnLCBmdW5jdGlvbiAoY2h1bmspIHtcblx0XHRcdFx0XHQvLyBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zNzUxOTgyOFxuXHRcdFx0XHRcdGlmICgoY2h1bmtbMF0gJiAweDBGKSA9PT0gMHgwOCkge1xuXHRcdFx0XHRcdFx0Ym9keSA9IGJvZHkucGlwZSh6bGliLmNyZWF0ZUluZmxhdGUoKSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGJvZHkgPSBib2R5LnBpcGUoemxpYi5jcmVhdGVJbmZsYXRlUmF3KCkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXNwb25zZSA9IG5ldyBSZXNwb25zZShib2R5LCByZXNwb25zZV9vcHRpb25zKTtcblx0XHRcdFx0XHRyZXNvbHZlKHJlc3BvbnNlKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gZm9yIGJyXG5cdFx0XHRpZiAoY29kaW5ncyA9PSAnYnInICYmIHR5cGVvZiB6bGliLmNyZWF0ZUJyb3RsaURlY29tcHJlc3MgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Ym9keSA9IGJvZHkucGlwZSh6bGliLmNyZWF0ZUJyb3RsaURlY29tcHJlc3MoKSk7XG5cdFx0XHRcdHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKGJvZHksIHJlc3BvbnNlX29wdGlvbnMpO1xuXHRcdFx0XHRyZXNvbHZlKHJlc3BvbnNlKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBvdGhlcndpc2UsIHVzZSByZXNwb25zZSBhcy1pc1xuXHRcdFx0cmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UoYm9keSwgcmVzcG9uc2Vfb3B0aW9ucyk7XG5cdFx0XHRyZXNvbHZlKHJlc3BvbnNlKTtcblx0XHR9KTtcblxuXHRcdHdyaXRlVG9TdHJlYW0ocmVxLCByZXF1ZXN0KTtcblx0fSk7XG59XG4vKipcbiAqIFJlZGlyZWN0IGNvZGUgbWF0Y2hpbmdcbiAqXG4gKiBAcGFyYW0gICBOdW1iZXIgICBjb2RlICBTdGF0dXMgY29kZVxuICogQHJldHVybiAgQm9vbGVhblxuICovXG5mZXRjaC5pc1JlZGlyZWN0ID0gZnVuY3Rpb24gKGNvZGUpIHtcblx0cmV0dXJuIGNvZGUgPT09IDMwMSB8fCBjb2RlID09PSAzMDIgfHwgY29kZSA9PT0gMzAzIHx8IGNvZGUgPT09IDMwNyB8fCBjb2RlID09PSAzMDg7XG59O1xuXG4vLyBleHBvc2UgUHJvbWlzZVxuZmV0Y2guUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xuXG5mdW5jdGlvbiBnZXRfcGFnZV9oYW5kbGVyKFxuXHRtYW5pZmVzdCxcblx0c2Vzc2lvbl9nZXR0ZXJcbikge1xuXHRjb25zdCBnZXRfYnVpbGRfaW5mbyA9IGRldlxuXHRcdD8gKCkgPT4gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMocGF0aC5qb2luKGJ1aWxkX2RpciwgJ2J1aWxkLmpzb24nKSwgJ3V0Zi04JykpXG5cdFx0OiAoYXNzZXRzID0+ICgpID0+IGFzc2V0cykoSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMocGF0aC5qb2luKGJ1aWxkX2RpciwgJ2J1aWxkLmpzb24nKSwgJ3V0Zi04JykpKTtcblxuXHRjb25zdCB0ZW1wbGF0ZSA9IGRldlxuXHRcdD8gKCkgPT4gcmVhZF90ZW1wbGF0ZShzcmNfZGlyKVxuXHRcdDogKHN0ciA9PiAoKSA9PiBzdHIpKHJlYWRfdGVtcGxhdGUoYnVpbGRfZGlyKSk7XG5cblx0Y29uc3QgaGFzX3NlcnZpY2Vfd29ya2VyID0gZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4oYnVpbGRfZGlyLCAnc2VydmljZS13b3JrZXIuanMnKSk7XG5cblx0Y29uc3QgeyBzZXJ2ZXJfcm91dGVzLCBwYWdlcyB9ID0gbWFuaWZlc3Q7XG5cdGNvbnN0IGVycm9yX3JvdXRlID0gbWFuaWZlc3QuZXJyb3I7XG5cblx0ZnVuY3Rpb24gYmFpbChyZXEsIHJlcywgZXJyKSB7XG5cdFx0Y29uc29sZS5lcnJvcihlcnIpO1xuXG5cdFx0Y29uc3QgbWVzc2FnZSA9IGRldiA/IGVzY2FwZV9odG1sKGVyci5tZXNzYWdlKSA6ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3InO1xuXG5cdFx0cmVzLnN0YXR1c0NvZGUgPSA1MDA7XG5cdFx0cmVzLmVuZChgPHByZT4ke21lc3NhZ2V9PC9wcmU+YCk7XG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVfZXJyb3IocmVxLCByZXMsIHN0YXR1c0NvZGUsIGVycm9yKSB7XG5cdFx0aGFuZGxlX3BhZ2Uoe1xuXHRcdFx0cGF0dGVybjogbnVsbCxcblx0XHRcdHBhcnRzOiBbXG5cdFx0XHRcdHsgbmFtZTogbnVsbCwgY29tcG9uZW50OiBlcnJvcl9yb3V0ZSB9XG5cdFx0XHRdXG5cdFx0fSwgcmVxLCByZXMsIHN0YXR1c0NvZGUsIGVycm9yIHx8IG5ldyBFcnJvcignVW5rbm93biBlcnJvciBpbiBwcmVsb2FkIGZ1bmN0aW9uJykpO1xuXHR9XG5cblx0YXN5bmMgZnVuY3Rpb24gaGFuZGxlX3BhZ2UocGFnZSwgcmVxLCByZXMsIHN0YXR1cyA9IDIwMCwgZXJyb3IgPSBudWxsKSB7XG5cdFx0Y29uc3QgaXNfc2VydmljZV93b3JrZXJfaW5kZXggPSByZXEucGF0aCA9PT0gJy9zZXJ2aWNlLXdvcmtlci1pbmRleC5odG1sJztcblx0XHRjb25zdCBidWlsZF9pbmZvXG5cblxuXG5cbiA9IGdldF9idWlsZF9pbmZvKCk7XG5cblx0XHRyZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAndGV4dC9odG1sJyk7XG5cdFx0cmVzLnNldEhlYWRlcignQ2FjaGUtQ29udHJvbCcsIGRldiA/ICduby1jYWNoZScgOiAnbWF4LWFnZT02MDAnKTtcblxuXHRcdC8vIHByZWxvYWQgbWFpbi5qcyBhbmQgY3VycmVudCByb3V0ZVxuXHRcdC8vIFRPRE8gZGV0ZWN0IG90aGVyIHN0dWZmIHdlIGNhbiBwcmVsb2FkPyBpbWFnZXMsIENTUywgZm9udHM/XG5cdFx0bGV0IHByZWxvYWRlZF9jaHVua3MgPSBBcnJheS5pc0FycmF5KGJ1aWxkX2luZm8uYXNzZXRzLm1haW4pID8gYnVpbGRfaW5mby5hc3NldHMubWFpbiA6IFtidWlsZF9pbmZvLmFzc2V0cy5tYWluXTtcblx0XHRpZiAoIWVycm9yICYmICFpc19zZXJ2aWNlX3dvcmtlcl9pbmRleCkge1xuXHRcdFx0cGFnZS5wYXJ0cy5mb3JFYWNoKHBhcnQgPT4ge1xuXHRcdFx0XHRpZiAoIXBhcnQpIHJldHVybjtcblxuXHRcdFx0XHQvLyB1c2luZyBjb25jYXQgYmVjYXVzZSBpdCBjb3VsZCBiZSBhIHN0cmluZyBvciBhbiBhcnJheS4gdGhhbmtzIHdlYnBhY2shXG5cdFx0XHRcdHByZWxvYWRlZF9jaHVua3MgPSBwcmVsb2FkZWRfY2h1bmtzLmNvbmNhdChidWlsZF9pbmZvLmFzc2V0c1twYXJ0Lm5hbWVdKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmIChidWlsZF9pbmZvLmJ1bmRsZXIgPT09ICdyb2xsdXAnKSB7XG5cdFx0XHQvLyBUT0RPIGFkZCBkZXBlbmRlbmNpZXMgYW5kIENTU1xuXHRcdFx0Y29uc3QgbGluayA9IHByZWxvYWRlZF9jaHVua3Ncblx0XHRcdFx0LmZpbHRlcihmaWxlID0+IGZpbGUgJiYgIWZpbGUubWF0Y2goL1xcLm1hcCQvKSlcblx0XHRcdFx0Lm1hcChmaWxlID0+IGA8JHtyZXEuYmFzZVVybH0vY2xpZW50LyR7ZmlsZX0+O3JlbD1cIm1vZHVsZXByZWxvYWRcImApXG5cdFx0XHRcdC5qb2luKCcsICcpO1xuXG5cdFx0XHRyZXMuc2V0SGVhZGVyKCdMaW5rJywgbGluayk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGxpbmsgPSBwcmVsb2FkZWRfY2h1bmtzXG5cdFx0XHRcdC5maWx0ZXIoZmlsZSA9PiBmaWxlICYmICFmaWxlLm1hdGNoKC9cXC5tYXAkLykpXG5cdFx0XHRcdC5tYXAoKGZpbGUpID0+IHtcblx0XHRcdFx0XHRjb25zdCBhcyA9IC9cXC5jc3MkLy50ZXN0KGZpbGUpID8gJ3N0eWxlJyA6ICdzY3JpcHQnO1xuXHRcdFx0XHRcdHJldHVybiBgPCR7cmVxLmJhc2VVcmx9L2NsaWVudC8ke2ZpbGV9PjtyZWw9XCJwcmVsb2FkXCI7YXM9XCIke2FzfVwiYDtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmpvaW4oJywgJyk7XG5cblx0XHRcdHJlcy5zZXRIZWFkZXIoJ0xpbmsnLCBsaW5rKTtcblx0XHR9XG5cblx0XHRjb25zdCBzZXNzaW9uID0gc2Vzc2lvbl9nZXR0ZXIocmVxLCByZXMpO1xuXG5cdFx0bGV0IHJlZGlyZWN0O1xuXHRcdGxldCBwcmVsb2FkX2Vycm9yO1xuXG5cdFx0Y29uc3QgcHJlbG9hZF9jb250ZXh0ID0ge1xuXHRcdFx0cmVkaXJlY3Q6IChzdGF0dXNDb2RlLCBsb2NhdGlvbikgPT4ge1xuXHRcdFx0XHRpZiAocmVkaXJlY3QgJiYgKHJlZGlyZWN0LnN0YXR1c0NvZGUgIT09IHN0YXR1c0NvZGUgfHwgcmVkaXJlY3QubG9jYXRpb24gIT09IGxvY2F0aW9uKSkge1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihgQ29uZmxpY3RpbmcgcmVkaXJlY3RzYCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0bG9jYXRpb24gPSBsb2NhdGlvbi5yZXBsYWNlKC9eXFwvL2csICcnKTsgLy8gbGVhZGluZyBzbGFzaCAob25seSlcblx0XHRcdFx0cmVkaXJlY3QgPSB7IHN0YXR1c0NvZGUsIGxvY2F0aW9uIH07XG5cdFx0XHR9LFxuXHRcdFx0ZXJyb3I6IChzdGF0dXNDb2RlLCBtZXNzYWdlKSA9PiB7XG5cdFx0XHRcdHByZWxvYWRfZXJyb3IgPSB7IHN0YXR1c0NvZGUsIG1lc3NhZ2UgfTtcblx0XHRcdH0sXG5cdFx0XHRmZXRjaDogKHVybCwgb3B0cykgPT4ge1xuXHRcdFx0XHRjb25zdCBwYXJzZWQgPSBuZXcgVXJsLlVSTCh1cmwsIGBodHRwOi8vMTI3LjAuMC4xOiR7cHJvY2Vzcy5lbnYuUE9SVH0ke3JlcS5iYXNlVXJsID8gcmVxLmJhc2VVcmwgKyAnLycgOicnfWApO1xuXG5cdFx0XHRcdGlmIChvcHRzKSB7XG5cdFx0XHRcdFx0b3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdHMpO1xuXG5cdFx0XHRcdFx0Y29uc3QgaW5jbHVkZV9jb29raWVzID0gKFxuXHRcdFx0XHRcdFx0b3B0cy5jcmVkZW50aWFscyA9PT0gJ2luY2x1ZGUnIHx8XG5cdFx0XHRcdFx0XHRvcHRzLmNyZWRlbnRpYWxzID09PSAnc2FtZS1vcmlnaW4nICYmIHBhcnNlZC5vcmlnaW4gPT09IGBodHRwOi8vMTI3LjAuMC4xOiR7cHJvY2Vzcy5lbnYuUE9SVH1gXG5cdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdGlmIChpbmNsdWRlX2Nvb2tpZXMpIHtcblx0XHRcdFx0XHRcdG9wdHMuaGVhZGVycyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdHMuaGVhZGVycyk7XG5cblx0XHRcdFx0XHRcdGNvbnN0IGNvb2tpZXMgPSBPYmplY3QuYXNzaWduKFxuXHRcdFx0XHRcdFx0XHR7fSxcblx0XHRcdFx0XHRcdFx0Y29va2llLnBhcnNlKHJlcS5oZWFkZXJzLmNvb2tpZSB8fCAnJyksXG5cdFx0XHRcdFx0XHRcdGNvb2tpZS5wYXJzZShvcHRzLmhlYWRlcnMuY29va2llIHx8ICcnKVxuXHRcdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdFx0Y29uc3Qgc2V0X2Nvb2tpZSA9IHJlcy5nZXRIZWFkZXIoJ1NldC1Db29raWUnKTtcblx0XHRcdFx0XHRcdChBcnJheS5pc0FycmF5KHNldF9jb29raWUpID8gc2V0X2Nvb2tpZSA6IFtzZXRfY29va2llXSkuZm9yRWFjaChzdHIgPT4ge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBtYXRjaCA9IC8oW149XSspPShbXjtdKykvLmV4ZWMoc3RyKTtcblx0XHRcdFx0XHRcdFx0aWYgKG1hdGNoKSBjb29raWVzW21hdGNoWzFdXSA9IG1hdGNoWzJdO1xuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdGNvbnN0IHN0ciA9IE9iamVjdC5rZXlzKGNvb2tpZXMpXG5cdFx0XHRcdFx0XHRcdC5tYXAoa2V5ID0+IGAke2tleX09JHtjb29raWVzW2tleV19YClcblx0XHRcdFx0XHRcdFx0LmpvaW4oJzsgJyk7XG5cblx0XHRcdFx0XHRcdG9wdHMuaGVhZGVycy5jb29raWUgPSBzdHI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIGZldGNoKHBhcnNlZC5ocmVmLCBvcHRzKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0bGV0IHByZWxvYWRlZDtcblx0XHRsZXQgbWF0Y2g7XG5cdFx0bGV0IHBhcmFtcztcblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByb290X3ByZWxvYWRlZCA9IG1hbmlmZXN0LnJvb3RfcHJlbG9hZFxuXHRcdFx0XHQ/IG1hbmlmZXN0LnJvb3RfcHJlbG9hZC5jYWxsKHByZWxvYWRfY29udGV4dCwge1xuXHRcdFx0XHRcdGhvc3Q6IHJlcS5oZWFkZXJzLmhvc3QsXG5cdFx0XHRcdFx0cGF0aDogcmVxLnBhdGgsXG5cdFx0XHRcdFx0cXVlcnk6IHJlcS5xdWVyeSxcblx0XHRcdFx0XHRwYXJhbXM6IHt9XG5cdFx0XHRcdH0sIHNlc3Npb24pXG5cdFx0XHRcdDoge307XG5cblx0XHRcdG1hdGNoID0gZXJyb3IgPyBudWxsIDogcGFnZS5wYXR0ZXJuLmV4ZWMocmVxLnBhdGgpO1xuXG5cblx0XHRcdGxldCB0b1ByZWxvYWQgPSBbcm9vdF9wcmVsb2FkZWRdO1xuXHRcdFx0aWYgKCFpc19zZXJ2aWNlX3dvcmtlcl9pbmRleCkge1xuXHRcdFx0XHR0b1ByZWxvYWQgPSB0b1ByZWxvYWQuY29uY2F0KHBhZ2UucGFydHMubWFwKHBhcnQgPT4ge1xuXHRcdFx0XHRcdGlmICghcGFydCkgcmV0dXJuIG51bGw7XG5cblx0XHRcdFx0XHQvLyB0aGUgZGVlcGVzdCBsZXZlbCBpcyB1c2VkIGJlbG93LCB0byBpbml0aWFsaXNlIHRoZSBzdG9yZVxuXHRcdFx0XHRcdHBhcmFtcyA9IHBhcnQucGFyYW1zID8gcGFydC5wYXJhbXMobWF0Y2gpIDoge307XG5cblx0XHRcdFx0XHRyZXR1cm4gcGFydC5wcmVsb2FkXG5cdFx0XHRcdFx0XHQ/IHBhcnQucHJlbG9hZC5jYWxsKHByZWxvYWRfY29udGV4dCwge1xuXHRcdFx0XHRcdFx0XHRob3N0OiByZXEuaGVhZGVycy5ob3N0LFxuXHRcdFx0XHRcdFx0XHRwYXRoOiByZXEucGF0aCxcblx0XHRcdFx0XHRcdFx0cXVlcnk6IHJlcS5xdWVyeSxcblx0XHRcdFx0XHRcdFx0cGFyYW1zXG5cdFx0XHRcdFx0XHR9LCBzZXNzaW9uKVxuXHRcdFx0XHRcdFx0OiB7fTtcblx0XHRcdFx0fSkpO1xuXHRcdFx0fVxuXG5cdFx0XHRwcmVsb2FkZWQgPSBhd2FpdCBQcm9taXNlLmFsbCh0b1ByZWxvYWQpO1xuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdHJldHVybiBiYWlsKHJlcSwgcmVzLCBlcnIpXG5cdFx0XHR9XG5cblx0XHRcdHByZWxvYWRfZXJyb3IgPSB7IHN0YXR1c0NvZGU6IDUwMCwgbWVzc2FnZTogZXJyIH07XG5cdFx0XHRwcmVsb2FkZWQgPSBbXTsgLy8gYXBwZWFzZSBUeXBlU2NyaXB0XG5cdFx0fVxuXG5cdFx0dHJ5IHtcblx0XHRcdGlmIChyZWRpcmVjdCkge1xuXHRcdFx0XHRjb25zdCBsb2NhdGlvbiA9IFVybC5yZXNvbHZlKChyZXEuYmFzZVVybCB8fCAnJykgKyAnLycsIHJlZGlyZWN0LmxvY2F0aW9uKTtcblxuXHRcdFx0XHRyZXMuc3RhdHVzQ29kZSA9IHJlZGlyZWN0LnN0YXR1c0NvZGU7XG5cdFx0XHRcdHJlcy5zZXRIZWFkZXIoJ0xvY2F0aW9uJywgbG9jYXRpb24pO1xuXHRcdFx0XHRyZXMuZW5kKCk7XG5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAocHJlbG9hZF9lcnJvcikge1xuXHRcdFx0XHRoYW5kbGVfZXJyb3IocmVxLCByZXMsIHByZWxvYWRfZXJyb3Iuc3RhdHVzQ29kZSwgcHJlbG9hZF9lcnJvci5tZXNzYWdlKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzZWdtZW50cyA9IHJlcS5wYXRoLnNwbGl0KCcvJykuZmlsdGVyKEJvb2xlYW4pO1xuXG5cdFx0XHQvLyBUT0RPIG1ha2UgdGhpcyBsZXNzIGNvbmZ1c2luZ1xuXHRcdFx0Y29uc3QgbGF5b3V0X3NlZ21lbnRzID0gW3NlZ21lbnRzWzBdXTtcblx0XHRcdGxldCBsID0gMTtcblxuXHRcdFx0cGFnZS5wYXJ0cy5mb3JFYWNoKChwYXJ0LCBpKSA9PiB7XG5cdFx0XHRcdGxheW91dF9zZWdtZW50c1tsXSA9IHNlZ21lbnRzW2kgKyAxXTtcblx0XHRcdFx0aWYgKCFwYXJ0KSByZXR1cm4gbnVsbDtcblx0XHRcdFx0bCsrO1xuXHRcdFx0fSk7XG5cblx0XHRcdGNvbnN0IHByb3BzID0ge1xuXHRcdFx0XHRzdG9yZXM6IHtcblx0XHRcdFx0XHRwYWdlOiB7XG5cdFx0XHRcdFx0XHRzdWJzY3JpYmU6IHdyaXRhYmxlKHtcblx0XHRcdFx0XHRcdFx0aG9zdDogcmVxLmhlYWRlcnMuaG9zdCxcblx0XHRcdFx0XHRcdFx0cGF0aDogcmVxLnBhdGgsXG5cdFx0XHRcdFx0XHRcdHF1ZXJ5OiByZXEucXVlcnksXG5cdFx0XHRcdFx0XHRcdHBhcmFtc1xuXHRcdFx0XHRcdFx0fSkuc3Vic2NyaWJlXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRwcmVsb2FkaW5nOiB7XG5cdFx0XHRcdFx0XHRzdWJzY3JpYmU6IHdyaXRhYmxlKG51bGwpLnN1YnNjcmliZVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0c2Vzc2lvbjogd3JpdGFibGUoc2Vzc2lvbilcblx0XHRcdFx0fSxcblx0XHRcdFx0c2VnbWVudHM6IGxheW91dF9zZWdtZW50cyxcblx0XHRcdFx0c3RhdHVzOiBlcnJvciA/IHN0YXR1cyA6IDIwMCxcblx0XHRcdFx0ZXJyb3I6IGVycm9yID8gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yIDogeyBtZXNzYWdlOiBlcnJvciB9IDogbnVsbCxcblx0XHRcdFx0bGV2ZWwwOiB7XG5cdFx0XHRcdFx0cHJvcHM6IHByZWxvYWRlZFswXVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRsZXZlbDE6IHtcblx0XHRcdFx0XHRzZWdtZW50OiBzZWdtZW50c1swXSxcblx0XHRcdFx0XHRwcm9wczoge31cblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0aWYgKCFpc19zZXJ2aWNlX3dvcmtlcl9pbmRleCkge1xuXHRcdFx0XHRsZXQgbCA9IDE7XG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcGFnZS5wYXJ0cy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0XHRcdGNvbnN0IHBhcnQgPSBwYWdlLnBhcnRzW2ldO1xuXHRcdFx0XHRcdGlmICghcGFydCkgY29udGludWU7XG5cblx0XHRcdFx0XHRwcm9wc1tgbGV2ZWwke2wrK31gXSA9IHtcblx0XHRcdFx0XHRcdGNvbXBvbmVudDogcGFydC5jb21wb25lbnQsXG5cdFx0XHRcdFx0XHRwcm9wczogcHJlbG9hZGVkW2kgKyAxXSB8fCB7fSxcblx0XHRcdFx0XHRcdHNlZ21lbnQ6IHNlZ21lbnRzW2ldXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB7IGh0bWwsIGhlYWQsIGNzcyB9ID0gQXBwLnJlbmRlcihwcm9wcyk7XG5cblx0XHRcdGNvbnN0IHNlcmlhbGl6ZWQgPSB7XG5cdFx0XHRcdHByZWxvYWRlZDogYFske3ByZWxvYWRlZC5tYXAoZGF0YSA9PiB0cnlfc2VyaWFsaXplKGRhdGEpKS5qb2luKCcsJyl9XWAsXG5cdFx0XHRcdHNlc3Npb246IHNlc3Npb24gJiYgdHJ5X3NlcmlhbGl6ZShzZXNzaW9uLCBlcnIgPT4ge1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHNlcmlhbGl6ZSBzZXNzaW9uIGRhdGE6ICR7ZXJyLm1lc3NhZ2V9YCk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRlcnJvcjogZXJyb3IgJiYgdHJ5X3NlcmlhbGl6ZShwcm9wcy5lcnJvcilcblx0XHRcdH07XG5cblx0XHRcdGxldCBzY3JpcHQgPSBgX19TQVBQRVJfXz17JHtbXG5cdFx0XHRcdGVycm9yICYmIGBlcnJvcjoke3NlcmlhbGl6ZWQuZXJyb3J9LHN0YXR1czoke3N0YXR1c31gLFxuXHRcdFx0XHRgYmFzZVVybDpcIiR7cmVxLmJhc2VVcmx9XCJgLFxuXHRcdFx0XHRzZXJpYWxpemVkLnByZWxvYWRlZCAmJiBgcHJlbG9hZGVkOiR7c2VyaWFsaXplZC5wcmVsb2FkZWR9YCxcblx0XHRcdFx0c2VyaWFsaXplZC5zZXNzaW9uICYmIGBzZXNzaW9uOiR7c2VyaWFsaXplZC5zZXNzaW9ufWBcblx0XHRcdF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJywnKX19O2A7XG5cblx0XHRcdGlmIChoYXNfc2VydmljZV93b3JrZXIpIHtcblx0XHRcdFx0c2NyaXB0ICs9IGBpZignc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKW5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCcke3JlcS5iYXNlVXJsfS9zZXJ2aWNlLXdvcmtlci5qcycpO2A7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGZpbGUgPSBbXS5jb25jYXQoYnVpbGRfaW5mby5hc3NldHMubWFpbikuZmlsdGVyKGZpbGUgPT4gZmlsZSAmJiAvXFwuanMkLy50ZXN0KGZpbGUpKVswXTtcblx0XHRcdGNvbnN0IG1haW4gPSBgJHtyZXEuYmFzZVVybH0vY2xpZW50LyR7ZmlsZX1gO1xuXG5cdFx0XHRpZiAoYnVpbGRfaW5mby5idW5kbGVyID09PSAncm9sbHVwJykge1xuXHRcdFx0XHRpZiAoYnVpbGRfaW5mby5sZWdhY3lfYXNzZXRzKSB7XG5cdFx0XHRcdFx0Y29uc3QgbGVnYWN5X21haW4gPSBgJHtyZXEuYmFzZVVybH0vY2xpZW50L2xlZ2FjeS8ke2J1aWxkX2luZm8ubGVnYWN5X2Fzc2V0cy5tYWlufWA7XG5cdFx0XHRcdFx0c2NyaXB0ICs9IGAoZnVuY3Rpb24oKXt0cnl7ZXZhbChcImFzeW5jIGZ1bmN0aW9uIHgoKXt9XCIpO3ZhciBtYWluPVwiJHttYWlufVwifWNhdGNoKGUpe21haW49XCIke2xlZ2FjeV9tYWlufVwifTt2YXIgcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3RyeXtuZXcgRnVuY3Rpb24oXCJpZigwKWltcG9ydCgnJylcIikoKTtzLnNyYz1tYWluO3MudHlwZT1cIm1vZHVsZVwiO3MuY3Jvc3NPcmlnaW49XCJ1c2UtY3JlZGVudGlhbHNcIjt9Y2F0Y2goZSl7cy5zcmM9XCIke3JlcS5iYXNlVXJsfS9jbGllbnQvc2hpbXBvcnRAJHtidWlsZF9pbmZvLnNoaW1wb3J0fS5qc1wiO3Muc2V0QXR0cmlidXRlKFwiZGF0YS1tYWluXCIsbWFpbik7fWRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQocyk7fSgpKTtgO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHNjcmlwdCArPSBgdmFyIHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTt0cnl7bmV3IEZ1bmN0aW9uKFwiaWYoMClpbXBvcnQoJycpXCIpKCk7cy5zcmM9XCIke21haW59XCI7cy50eXBlPVwibW9kdWxlXCI7cy5jcm9zc09yaWdpbj1cInVzZS1jcmVkZW50aWFsc1wiO31jYXRjaChlKXtzLnNyYz1cIiR7cmVxLmJhc2VVcmx9L2NsaWVudC9zaGltcG9ydEAke2J1aWxkX2luZm8uc2hpbXBvcnR9LmpzXCI7cy5zZXRBdHRyaWJ1dGUoXCJkYXRhLW1haW5cIixcIiR7bWFpbn1cIil9ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzKWA7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNjcmlwdCArPSBgPC9zY3JpcHQ+PHNjcmlwdCBzcmM9XCIke21haW59XCI+YDtcblx0XHRcdH1cblxuXHRcdFx0bGV0IHN0eWxlcztcblxuXHRcdFx0Ly8gVE9ETyBtYWtlIHRoaXMgY29uc2lzdGVudCBhY3Jvc3MgYXBwc1xuXHRcdFx0Ly8gVE9ETyBlbWJlZCBidWlsZF9pbmZvIGluIHBsYWNlaG9sZGVyLnRzXG5cdFx0XHRpZiAoYnVpbGRfaW5mby5jc3MgJiYgYnVpbGRfaW5mby5jc3MubWFpbikge1xuXHRcdFx0XHRjb25zdCBjc3NfY2h1bmtzID0gbmV3IFNldCgpO1xuXHRcdFx0XHRpZiAoYnVpbGRfaW5mby5jc3MubWFpbikgY3NzX2NodW5rcy5hZGQoYnVpbGRfaW5mby5jc3MubWFpbik7XG5cdFx0XHRcdHBhZ2UucGFydHMuZm9yRWFjaChwYXJ0ID0+IHtcblx0XHRcdFx0XHRpZiAoIXBhcnQpIHJldHVybjtcblx0XHRcdFx0XHRjb25zdCBjc3NfY2h1bmtzX2Zvcl9wYXJ0ID0gYnVpbGRfaW5mby5jc3MuY2h1bmtzW3BhcnQuZmlsZV07XG5cblx0XHRcdFx0XHRpZiAoY3NzX2NodW5rc19mb3JfcGFydCkge1xuXHRcdFx0XHRcdFx0Y3NzX2NodW5rc19mb3JfcGFydC5mb3JFYWNoKGZpbGUgPT4ge1xuXHRcdFx0XHRcdFx0XHRjc3NfY2h1bmtzLmFkZChmaWxlKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0c3R5bGVzID0gQXJyYXkuZnJvbShjc3NfY2h1bmtzKVxuXHRcdFx0XHRcdC5tYXAoaHJlZiA9PiBgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJjbGllbnQvJHtocmVmfVwiPmApXG5cdFx0XHRcdFx0LmpvaW4oJycpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c3R5bGVzID0gKGNzcyAmJiBjc3MuY29kZSA/IGA8c3R5bGU+JHtjc3MuY29kZX08L3N0eWxlPmAgOiAnJyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIHVzZXJzIGNhbiBzZXQgYSBDU1Agbm9uY2UgdXNpbmcgcmVzLmxvY2Fscy5ub25jZVxuXHRcdFx0Y29uc3Qgbm9uY2VfYXR0ciA9IChyZXMubG9jYWxzICYmIHJlcy5sb2NhbHMubm9uY2UpID8gYCBub25jZT1cIiR7cmVzLmxvY2Fscy5ub25jZX1cImAgOiAnJztcblxuXHRcdFx0Y29uc3QgYm9keSA9IHRlbXBsYXRlKClcblx0XHRcdFx0LnJlcGxhY2UoJyVzYXBwZXIuYmFzZSUnLCAoKSA9PiBgPGJhc2UgaHJlZj1cIiR7cmVxLmJhc2VVcmx9L1wiPmApXG5cdFx0XHRcdC5yZXBsYWNlKCclc2FwcGVyLnNjcmlwdHMlJywgKCkgPT4gYDxzY3JpcHQke25vbmNlX2F0dHJ9PiR7c2NyaXB0fTwvc2NyaXB0PmApXG5cdFx0XHRcdC5yZXBsYWNlKCclc2FwcGVyLmh0bWwlJywgKCkgPT4gaHRtbClcblx0XHRcdFx0LnJlcGxhY2UoJyVzYXBwZXIuaGVhZCUnLCAoKSA9PiBgPG5vc2NyaXB0IGlkPSdzYXBwZXItaGVhZC1zdGFydCc+PC9ub3NjcmlwdD4ke2hlYWR9PG5vc2NyaXB0IGlkPSdzYXBwZXItaGVhZC1lbmQnPjwvbm9zY3JpcHQ+YClcblx0XHRcdFx0LnJlcGxhY2UoJyVzYXBwZXIuc3R5bGVzJScsICgpID0+IHN0eWxlcyk7XG5cblx0XHRcdHJlcy5zdGF0dXNDb2RlID0gc3RhdHVzO1xuXHRcdFx0cmVzLmVuZChib2R5KTtcblx0XHR9IGNhdGNoKGVycikge1xuXHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdGJhaWwocmVxLCByZXMsIGVycik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRoYW5kbGVfZXJyb3IocmVxLCByZXMsIDUwMCwgZXJyKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZnVuY3Rpb24gZmluZF9yb3V0ZShyZXEsIHJlcywgbmV4dCkge1xuXHRcdGlmIChyZXEucGF0aCA9PT0gJy9zZXJ2aWNlLXdvcmtlci1pbmRleC5odG1sJykge1xuXHRcdFx0Y29uc3QgaG9tZVBhZ2UgPSBwYWdlcy5maW5kKHBhZ2UgPT4gcGFnZS5wYXR0ZXJuLnRlc3QoJy8nKSk7XG5cdFx0XHRoYW5kbGVfcGFnZShob21lUGFnZSwgcmVxLCByZXMpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgcGFnZSBvZiBwYWdlcykge1xuXHRcdFx0aWYgKHBhZ2UucGF0dGVybi50ZXN0KHJlcS5wYXRoKSkge1xuXHRcdFx0XHRoYW5kbGVfcGFnZShwYWdlLCByZXEsIHJlcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRoYW5kbGVfZXJyb3IocmVxLCByZXMsIDQwNCwgJ05vdCBmb3VuZCcpO1xuXHR9O1xufVxuXG5mdW5jdGlvbiByZWFkX3RlbXBsYXRlKGRpciA9IGJ1aWxkX2Rpcikge1xuXHRyZXR1cm4gZnMucmVhZEZpbGVTeW5jKGAke2Rpcn0vdGVtcGxhdGUuaHRtbGAsICd1dGYtOCcpO1xufVxuXG5mdW5jdGlvbiB0cnlfc2VyaWFsaXplKGRhdGEsIGZhaWwpIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gZGV2YWx1ZShkYXRhKTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0aWYgKGZhaWwpIGZhaWwoZXJyKTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufVxuXG5mdW5jdGlvbiBlc2NhcGVfaHRtbChodG1sKSB7XG5cdGNvbnN0IGNoYXJzID0ge1xuXHRcdCdcIicgOiAncXVvdCcsXG5cdFx0XCInXCI6ICcjMzknLFxuXHRcdCcmJzogJ2FtcCcsXG5cdFx0JzwnIDogJ2x0Jyxcblx0XHQnPicgOiAnZ3QnXG5cdH07XG5cblx0cmV0dXJuIGh0bWwucmVwbGFjZSgvW1wiJyY8Pl0vZywgYyA9PiBgJiR7Y2hhcnNbY119O2ApO1xufVxuXG5mdW5jdGlvbiBtaWRkbGV3YXJlKG9wdHNcblxuXG4gPSB7fSkge1xuXHRjb25zdCB7IHNlc3Npb24sIGlnbm9yZSB9ID0gb3B0cztcblxuXHRsZXQgZW1pdHRlZF9iYXNlcGF0aCA9IGZhbHNlO1xuXG5cdHJldHVybiBjb21wb3NlX2hhbmRsZXJzKGlnbm9yZSwgW1xuXHRcdChyZXEsIHJlcywgbmV4dCkgPT4ge1xuXHRcdFx0aWYgKHJlcS5iYXNlVXJsID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0bGV0IHsgb3JpZ2luYWxVcmwgfSA9IHJlcTtcblx0XHRcdFx0aWYgKHJlcS51cmwgPT09ICcvJyAmJiBvcmlnaW5hbFVybFtvcmlnaW5hbFVybC5sZW5ndGggLSAxXSAhPT0gJy8nKSB7XG5cdFx0XHRcdFx0b3JpZ2luYWxVcmwgKz0gJy8nO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmVxLmJhc2VVcmwgPSBvcmlnaW5hbFVybFxuXHRcdFx0XHRcdD8gb3JpZ2luYWxVcmwuc2xpY2UoMCwgLXJlcS51cmwubGVuZ3RoKVxuXHRcdFx0XHRcdDogJyc7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghZW1pdHRlZF9iYXNlcGF0aCAmJiBwcm9jZXNzLnNlbmQpIHtcblx0XHRcdFx0cHJvY2Vzcy5zZW5kKHtcblx0XHRcdFx0XHRfX3NhcHBlcl9fOiB0cnVlLFxuXHRcdFx0XHRcdGV2ZW50OiAnYmFzZXBhdGgnLFxuXHRcdFx0XHRcdGJhc2VwYXRoOiByZXEuYmFzZVVybFxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRlbWl0dGVkX2Jhc2VwYXRoID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHJlcS5wYXRoID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cmVxLnBhdGggPSByZXEudXJsLnJlcGxhY2UoL1xcPy4qLywgJycpO1xuXHRcdFx0fVxuXG5cdFx0XHRuZXh0KCk7XG5cdFx0fSxcblxuXHRcdGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKGJ1aWxkX2RpciwgJ3NlcnZpY2Utd29ya2VyLmpzJykpICYmIHNlcnZlKHtcblx0XHRcdHBhdGhuYW1lOiAnL3NlcnZpY2Utd29ya2VyLmpzJyxcblx0XHRcdGNhY2hlX2NvbnRyb2w6ICduby1jYWNoZSwgbm8tc3RvcmUsIG11c3QtcmV2YWxpZGF0ZSdcblx0XHR9KSxcblxuXHRcdGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKGJ1aWxkX2RpciwgJ3NlcnZpY2Utd29ya2VyLmpzLm1hcCcpKSAmJiBzZXJ2ZSh7XG5cdFx0XHRwYXRobmFtZTogJy9zZXJ2aWNlLXdvcmtlci5qcy5tYXAnLFxuXHRcdFx0Y2FjaGVfY29udHJvbDogJ25vLWNhY2hlLCBuby1zdG9yZSwgbXVzdC1yZXZhbGlkYXRlJ1xuXHRcdH0pLFxuXG5cdFx0c2VydmUoe1xuXHRcdFx0cHJlZml4OiAnL2NsaWVudC8nLFxuXHRcdFx0Y2FjaGVfY29udHJvbDogZGV2ID8gJ25vLWNhY2hlJyA6ICdtYXgtYWdlPTMxNTM2MDAwLCBpbW11dGFibGUnXG5cdFx0fSksXG5cblx0XHRnZXRfc2VydmVyX3JvdXRlX2hhbmRsZXIobWFuaWZlc3Quc2VydmVyX3JvdXRlcyksXG5cblx0XHRnZXRfcGFnZV9oYW5kbGVyKG1hbmlmZXN0LCBzZXNzaW9uIHx8IG5vb3ApXG5cdF0uZmlsdGVyKEJvb2xlYW4pKTtcbn1cblxuZnVuY3Rpb24gY29tcG9zZV9oYW5kbGVycyhpZ25vcmUsIGhhbmRsZXJzKSB7XG5cdGNvbnN0IHRvdGFsID0gaGFuZGxlcnMubGVuZ3RoO1xuXG5cdGZ1bmN0aW9uIG50aF9oYW5kbGVyKG4sIHJlcSwgcmVzLCBuZXh0KSB7XG5cdFx0aWYgKG4gPj0gdG90YWwpIHtcblx0XHRcdHJldHVybiBuZXh0KCk7XG5cdFx0fVxuXG5cdFx0aGFuZGxlcnNbbl0ocmVxLCByZXMsICgpID0+IG50aF9oYW5kbGVyKG4rMSwgcmVxLCByZXMsIG5leHQpKTtcblx0fVxuXG5cdHJldHVybiAhaWdub3JlXG5cdFx0PyAocmVxLCByZXMsIG5leHQpID0+IG50aF9oYW5kbGVyKDAsIHJlcSwgcmVzLCBuZXh0KVxuXHRcdDogKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG5cdFx0XHRpZiAoc2hvdWxkX2lnbm9yZShyZXEucGF0aCwgaWdub3JlKSkge1xuXHRcdFx0XHRuZXh0KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRudGhfaGFuZGxlcigwLCByZXEsIHJlcywgbmV4dCk7XG5cdFx0XHR9XG5cdFx0fTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkX2lnbm9yZSh1cmksIHZhbCkge1xuXHRpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSByZXR1cm4gdmFsLnNvbWUoeCA9PiBzaG91bGRfaWdub3JlKHVyaSwgeCkpO1xuXHRpZiAodmFsIGluc3RhbmNlb2YgUmVnRXhwKSByZXR1cm4gdmFsLnRlc3QodXJpKTtcblx0aWYgKHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHJldHVybiB2YWwodXJpKTtcblx0cmV0dXJuIHVyaS5zdGFydHNXaXRoKHZhbC5jaGFyQ29kZUF0KDApID09PSA0NyA/IHZhbCA6IGAvJHt2YWx9YCk7XG59XG5cbmZ1bmN0aW9uIHNlcnZlKHsgcHJlZml4LCBwYXRobmFtZSwgY2FjaGVfY29udHJvbCB9XG5cblxuXG4pIHtcblx0Y29uc3QgZmlsdGVyID0gcGF0aG5hbWVcblx0XHQ/IChyZXEpID0+IHJlcS5wYXRoID09PSBwYXRobmFtZVxuXHRcdDogKHJlcSkgPT4gcmVxLnBhdGguc3RhcnRzV2l0aChwcmVmaXgpO1xuXG5cdGNvbnN0IGNhY2hlID0gbmV3IE1hcCgpO1xuXG5cdGNvbnN0IHJlYWQgPSBkZXZcblx0XHQ/IChmaWxlKSA9PiBmcy5yZWFkRmlsZVN5bmMocGF0aC5qb2luKGJ1aWxkX2RpciwgZmlsZSkpXG5cdFx0OiAoZmlsZSkgPT4gKGNhY2hlLmhhcyhmaWxlKSA/IGNhY2hlIDogY2FjaGUuc2V0KGZpbGUsIGZzLnJlYWRGaWxlU3luYyhwYXRoLmpvaW4oYnVpbGRfZGlyLCBmaWxlKSkpKS5nZXQoZmlsZSk7XG5cblx0cmV0dXJuIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuXHRcdGlmIChmaWx0ZXIocmVxKSkge1xuXHRcdFx0Y29uc3QgdHlwZSA9IGxpdGUuZ2V0VHlwZShyZXEucGF0aCk7XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IGZpbGUgPSBwYXRoLnBvc2l4Lm5vcm1hbGl6ZShkZWNvZGVVUklDb21wb25lbnQocmVxLnBhdGgpKTtcblx0XHRcdFx0Y29uc3QgZGF0YSA9IHJlYWQoZmlsZSk7XG5cblx0XHRcdFx0cmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgdHlwZSk7XG5cdFx0XHRcdHJlcy5zZXRIZWFkZXIoJ0NhY2hlLUNvbnRyb2wnLCBjYWNoZV9jb250cm9sKTtcblx0XHRcdFx0cmVzLmVuZChkYXRhKTtcblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRyZXMuc3RhdHVzQ29kZSA9IDQwNDtcblx0XHRcdFx0cmVzLmVuZCgnbm90IGZvdW5kJyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdG5leHQoKTtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIG5vb3AoKXt9XG5cbmV4cG9ydCB7IG1pZGRsZXdhcmUgfTtcbiIsImltcG9ydCBzaXJ2IGZyb20gJ3NpcnYnO1xuaW1wb3J0IHBvbGthIGZyb20gJ3BvbGthJztcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tICdjb21wcmVzc2lvbic7XG5pbXBvcnQgKiBhcyBzYXBwZXIgZnJvbSAnQHNhcHBlci9zZXJ2ZXInO1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xuXG5cbmNvbnN0IHsgUE9SVCwgTk9ERV9FTlYgfSA9IHByb2Nlc3MuZW52O1xuY29uc3QgZGV2ID0gTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc7XG5cbnBvbGthKCkgLy8gWW91IGNhbiBhbHNvIHVzZSBFeHByZXNzXG5cdC51c2UoXG5cdFx0Y29tcHJlc3Npb24oeyB0aHJlc2hvbGQ6IDAgfSksXG5cdFx0c2lydignc3RhdGljJywgeyBkZXYgfSksXG5cdFx0Ym9keVBhcnNlci5qc29uKCksXG5cdFx0c2FwcGVyLm1pZGRsZXdhcmUoKVxuXHQpXG5cdC5saXN0ZW4oUE9SVCwgZXJyID0+IHtcblx0XHRpZiAoZXJyKSBjb25zb2xlLmxvZygnZXJyb3InLCBlcnIpO1xuXHR9KTtcblxuXG4gXG4iXSwibmFtZXMiOlsiZ2V0IiwicG9zdCIsInByZWxvYWQiLCJDaGFydCIsImN1c3RvbV9zb3J0IiwiZ2V0X2xhc3RfbmJfc2Vzc2lvbnMiLCJkaXZpZGV2ZWN0b3IiLCJ2YXJpYXRpb24iLCJyb3VuZF8yX2RlY2ltYWwiLCJjb21wb25lbnRfMCIsInByZWxvYWRfMCIsImNvbXBvbmVudF8xIiwiY29tcG9uZW50XzIiLCJwcmVsb2FkXzIiLCJjb21wb25lbnRfMyIsInByZWxvYWRfMyIsImNvbXBvbmVudF80IiwicHJlbG9hZF80IiwiY29tcG9uZW50XzUiLCJwcmVsb2FkXzUiLCJjb21wb25lbnRfNiIsImNvbXBvbmVudF83IiwiY29tcG9uZW50XzgiLCJjb21wb25lbnRfOSIsImNvbXBvbmVudF8xMCIsImNvbXBvbmVudF8xMSIsInByZWxvYWRfMTEiLCJjb21wb25lbnRfMTIiLCJjb21wb25lbnRfMTMiLCJwcmVsb2FkXzEzIiwiY29tcG9uZW50XzE0IiwiY29tcG9uZW50XzE1IiwicHJlbG9hZF8xNSIsImNvbXBvbmVudF8xNiIsImNvbXBvbmVudF8xNyIsImNvbXBvbmVudF8xOCIsImNvbXBvbmVudF8xOSIsImNvbXBvbmVudF8yMCIsImNvbXBvbmVudF8yMSIsInByZWxvYWRfMjEiLCJjb21wb25lbnRfMjIiLCJjb21wb25lbnRfMjMiLCJjb21wb25lbnRfMjQiLCJyb290IiwiZXJyb3IiLCJlc2NhcGVkIiwibm9vcCIsInNhcHBlci5taWRkbGV3YXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakM7QUFDQSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDbEIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO0FBQ2Q7QUFDTyxlQUFlLElBQUksRUFBRTtBQUM1QixJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUM7QUFDZixRQUFRLE1BQU0sR0FBRyxHQUFHLDZHQUE2RyxDQUFDO0FBQ2xJLFFBQVEsTUFBTSxHQUFHLE1BQU0sS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFDO0FBQ3JELFFBQVEsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUM5QyxLQUFLO0FB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SSxFQUFFLENBQUM7QUFDM0IsQ0FBQyxNQUFNLFFBQVEsR0FBRyxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUM1RjtBQUNBLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7QUFDcEIsRUFBRSxjQUFjLEVBQUUsa0JBQWtCO0FBQ3BDLEVBQUUsQ0FBQyxDQUFDO0FBQ0o7QUFDQSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQ25DO0FBQ0E7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2xITyxlQUFlQSxLQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRTtBQUNwQztBQUNBLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7QUFDM0IsQ0FBQyxNQUFNLFFBQVEsR0FBRyxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUM1RjtBQUNBLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7QUFDcEIsRUFBRSxjQUFjLEVBQUUsa0JBQWtCO0FBQ3BDLEVBQUUsQ0FBQyxDQUFDO0FBQ0o7QUFDQSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQ25DOzs7Ozs7O0FDVk8sZUFBZUEsS0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUU7QUFDcEM7QUFDQSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO0FBQzNCLENBQUMsTUFBTSxRQUFRLEdBQUcsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDNUY7QUFDQSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO0FBQ3BCLEVBQUUsY0FBYyxFQUFFLGtCQUFrQjtBQUNwQyxFQUFFLENBQUMsQ0FBQztBQUNKO0FBQ0EsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUNuQzs7Ozs7OztBQ1hBLE1BQU0sRUFBRSxHQUFHLEtBQUk7QUFHZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzRNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTLGNBQWMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFDOUMsT0FBTyxhQUFhO0FBQ3BCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFDO0FBQ2pDO0FBQ0E7QUFDTyxTQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDNUIsSUFBSSxPQUFPLE1BQU07QUFDakIsQ0FBQztBQUNEO0FBQ0EsWUFBZSxDQUFDLGNBQWMsRUFBRSxJQUFJ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LENBQUMsc0JBQXNCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsa0NBQWtDLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDN3NQO0FBQ0EsSUFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDaEM7QUFDQSxTQUFTLHdCQUF3QixDQUFDLE1BQU0sRUFBRTtBQUMxQyxDQUFDLGVBQWUsWUFBWSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRTtBQUNwRCxFQUFFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUMxRDtBQUNBLEVBQUUsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUMxQztBQUNBO0FBQ0EsRUFBRSxNQUFNLGFBQWEsR0FBRyxNQUFNLEtBQUssUUFBUSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUM7QUFD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
