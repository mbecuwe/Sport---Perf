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
	const data_raw = await db.collection("sport_list_collection").find({sport:'cycling'}).toArray();
	



	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(data_raw));

	}

var route_0 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get: get
});

// import sports from './_sports.js';

// const contents = JSON.stringify(sports.map(sport => {
// 	return {
// 		title: sport.title,
// 		slug: sport.slug
// 	};
// }));

// export function get(req, res) {
// 	res.writeHead(200, {
// 		'Content-Type': 'application/json'
// 	});

// 	res.end(contents);
// }

var route_1 = /*#__PURE__*/Object.freeze({
    __proto__: null
});

// import sports from './_sports.js';

// const lookup = new Map();
// sports.forEach(sport => {
// 	lookup.set(sport.slug, JSON.stringify(sport));
// });

// export function get(req, res, next) {
// 	// the `slug` parameter is available because
// 	// this file is called [slug].json.js
// 	const { slug } = req.params;

// 	if (lookup.has(slug)) {
// 		res.writeHead(200, {
// 			'Content-Type': 'application/json'
// 		});

// 		res.end(lookup.get(slug));
// 	} else {
// 		res.writeHead(404, {
// 			'Content-Type': 'application/json'
// 		});

// 		res.end(JSON.stringify({
// 			message: `Not found`
// 		}));
// 	}
// }

var route_2 = /*#__PURE__*/Object.freeze({
    __proto__: null
});

async function get$1(req, res) {
	
	const {db} = await init();
	const data_raw = await db.collection("user1_collection").find({sport:'swimming'}).toArray();
	
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(data_raw));
	}

var route_3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get: get$1
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

var route_4 = /*#__PURE__*/Object.freeze({
    __proto__: null
});

async function get$2(req, res) {
	
	const {db} = await init();
	const data_raw = await db.collection("user1_collection").find({sport:'cycling'}).toArray();
	



	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(data_raw));

	}

var route_5 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get: get$2
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

var route_6 = /*#__PURE__*/Object.freeze({
    __proto__: null
});

async function get$3(req, res) {
	
	const {db} = await init();
	const data_raw = await db.collection("user1_collection").find({sport:'running'}).toArray();
	
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(data_raw));
	}

var route_7 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get: get$3
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

var route_8 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    addCustomSport: addCustomSport,
    test: test,
    'default': sport
});

async function get$4(req, res) {
	
	const {db} = await init();
	const posts = await db.collection("test2_collection").find({}).toArray();
	
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(posts));
	console.log('posts');
	console.log(posts);
}

var route_9 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get: get$4
});

//import posts from './_posts.js';


async function get$5(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;
	const {db} = await init();
	const post = await db.collection("test2_collection").findOne( {slug});
	if (post) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify(post));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}

var route_10 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get: get$5
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

/* src\routes\frappe-charts.svelte generated by Svelte v3.22.3 */

const Frappe_charts = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let data = {
		labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
		datasets: [{ values: [10, 12, 3, 9, 8, 15, 9] }]
	};

	return `${validate_component(Chart$1, "Chart").$$render($$result, { data, type: "line" }, {}, {})}`;
});

/* src\routes\chart.svelte generated by Svelte v3.22.3 */

const Chart = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `
 --&gt; --&gt;`;
});

/* src\routes\index.svelte generated by Svelte v3.22.3 */

const css = {
	code: "@media(min-width: 480px){}",
	map: "{\"version\":3,\"file\":\"index.svelte\",\"sources\":[\"index.svelte\"],\"sourcesContent\":[\"<script>\\r\\n\\timport FrappeChart from './frappe-charts.svelte'\\r\\n\\timport ChartJS from './chart.svelte'\\r\\n\\timport {addCustomSport, test} from './sport.js'\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n\\r\\n\\r\\n\\th1 {\\r\\n\\t\\tfont-size: 2.8em;\\r\\n\\t\\ttext-transform: uppercase;\\r\\n\\t\\tfont-weight: 700;\\r\\n\\t\\tmargin: 0 0 0.5em 0;\\r\\n\\t}\\r\\n\\r\\n\\r\\n\\r\\n\\t@media (min-width: 480px) {\\r\\n\\t\\th1 {\\r\\n\\t\\t\\tfont-size: 4em;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n</style>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<title>Sport App - LogIn</title>\\r\\n</svelte:head>\\r\\n<p>Mettre cette image en background avec opacite 50</p>\\r\\n<img src=\\\"fitness2.jpg\\\">\\r\\n<div style=\\\"background-image: url('fitness2.jpg');\\\"></div>\\r\\n\\r\\n<div class=\\\"bg-fixed\\\" style=\\\"background-image: url('./static/fitness2.jpg')\\\"></div>\\r\\n\\r\\n<p class='text-xl'>Logged in as Martin!</p>\\r\\n\\r\\n<p>Weight</p>\\r\\n\\r\\n<p>Radar chart of sports</p>\\r\\n\\r\\n<p>Calendar of last sessions</p>\\r\\n\\r\\n\\r\\n<p>Options pour supprimer des données de la base en cas d'erreur</p>\\r\\n\\r\\n<p>Login / authenthification https://www.nielsvandermolen.com/signup-form-html5-validation-svelte/</p>\"],\"names\":[],\"mappings\":\"AAkBC,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAI3B,CAAC\"}"
};

const Routes = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	$$result.css.add(css);

	return `${($$result.head += `${($$result.title = `<title>Sport App - LogIn</title>`, "")}`, "")}
<p>Mettre cette image en background avec opacite 50</p>
<img src="${"fitness2.jpg"}">
<div style="${"background-image: url('fitness2.jpg');"}"></div>

<div class="${"bg-fixed"}" style="${"background-image: url('./static/fitness2.jpg')"}"></div>

<p class="${"text-xl"}">Logged in as Martin!</p>

<p>Weight</p>

<p>Radar chart of sports</p>

<p>Calendar of last sessions</p>


<p>Options pour supprimer des données de la base en cas d&#39;erreur</p>

<p>Login / authenthification https://www.nielsvandermolen.com/signup-form-html5-validation-svelte/</p>`;
});

/* src\routes\new_sessions\new_cycling.svelte generated by Svelte v3.22.3 */

function preload({ params, query }) {
	return this.fetch(`new_sessions.json`).then(r => r.json()).then(options => {
		return { options };
	});
}

const New_cycling = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { options } = $$props;
	let list = [];

	options.forEach(x => {
		list.push(x.features);
	});

	console.log(list);

	if ($$props.options === void 0 && $$bindings.options && options !== void 0) $$bindings.options(options);

	return `<form><label for="${"email"}">Email</label>
  <input required type="${"number"}" id="${"email"}">
  ${ ``}

  <label for="${"password"}">Password</label>
  <input required type="${"number"}" id="${"password"}">

  <button type="${"submit"}">Create account</button></form>







<div class="${"flex h-48"}"><div class="${"flex-initial w-2/3 p-2"}"><div class="${"text-center p-2 text-2xl font-semibold bg-gray-100"}">Cycling New Session
    </div></div>
  <div class="${"flex-initial w-1/3 p-2"}"><div class="${" text-right p-2"}"><img src="${"cycling.jpg"}" alt="${"cycling"}"></div></div></div>



    <body class="${"bg-blue-100 w-screen h-screen"}"><div class="${"mx-5 my-5"}"><div class="${"md:flex justify-center"}"><h1 class="${"font-bold text-3xl text-blue-800"}">New Session</h1></div>
            <div class="${"md:flex mt-12 w-full justify-around"}"><div class="${"pb-6"}"><p class="${"pb-2"}">Date</p>
                    <input type="${"date"}" id="${"date"}" name="${"date"}" class="${"shadow hover:shadow-md"}"></div>
                


                <div class="${"pb-6"}"><p class="${"pb-2"}">Meters</p>
                <input type="${"number"}" id="${"meters"}" name="${"meters"}" class="${"shadow hover:shadow-md"}"></div>


                <div class="${"pb-6"}"><p class="${"pb-2"}">Minutes</p>
                <input type="${"number"}" id="${"minutes"}" name="${"minutes"}" class="${"shadow hover:shadow-md"}"></div>

                <div class="${"pb-6"}"><p class="${"pb-2"}">Elevation</p>
                <input type="${"number"}" id="${"elevation"}" name="${"elevation"}" class="${"shadow hover:shadow-md"}"></div></div></div></body> 






`;
});

/* src\routes\Box.svelte generated by Svelte v3.22.3 */

const css$1 = {
	code: ".box.svelte-vukbuc{width:300px;border:1px solid #aaa;border-radius:2px;box-shadow:2px 2px 8px rgba(0,0,0,0.1);padding:1em;margin:0 0 1em 0}",
	map: "{\"version\":3,\"file\":\"Box.svelte\",\"sources\":[\"Box.svelte\"],\"sourcesContent\":[\"<style>\\r\\n\\t.box {\\r\\n\\t\\twidth: 300px;\\r\\n\\t\\tborder: 1px solid #aaa;\\r\\n\\t\\tborder-radius: 2px;\\r\\n\\t\\tbox-shadow: 2px 2px 8px rgba(0,0,0,0.1);\\r\\n\\t\\tpadding: 1em;\\r\\n\\t\\tmargin: 0 0 1em 0;\\r\\n\\t}\\r\\n</style>\\r\\n\\r\\n<div class=\\\"box\\\">\\r\\n\\t<slot></slot>\\r\\n</div>\"],\"names\":[],\"mappings\":\"AACC,IAAI,cAAC,CAAC,AACL,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACvC,OAAO,CAAE,GAAG,CACZ,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,AAClB,CAAC\"}"
};

const Box = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	$$result.css.add(css$1);
	return `<div class="${"box svelte-vukbuc"}">${$$slots.default ? $$slots.default({}) : ``}</div>`;
});

/* src\routes\new_session.svelte generated by Svelte v3.22.3 */

function preload$1({ params, query }) {
	return this.fetch(`sports/cycling.json`).then(r => r.json()).then(data_raw => {
		return { data_raw };
	});
}

const New_session = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `<div class="${"text-center p-10"}"><h1>Click to sport to enter new session</h1></div>




<div class="${"flex content-start flex-wrap h-48"}"><div class="${"w-1/2 p-2"}"><div class="${"text-center  p-2"}">${validate_component(Box, "Box").$$render($$result, {}, {}, {
		default: () => `<a href="${"new_sessions/new_cycling"}"><p class="${" font-bold pb-2"}">Cycling</p>
			<img src="${"cycling.jpg"}" alt="${"cycling"}"></a>`
	})}</div></div>

  <div class="${"w-1/2 p-2"}"><div class="${" text-center p-2"}">${validate_component(Box, "Box").$$render($$result, {}, {}, {
		default: () => `<a href="${"new_sessions/new_running"}"><p class="${" font-bold pb-2"}">Running</p>
			<img src="${"running.jpg"}" alt="${"running"}"></a>`
	})}</div></div>

  <div class="${"w-1/2 p-2"}"><div class="${" text-center p-2"}">${validate_component(Box, "Box").$$render($$result, {}, {}, {
		default: () => `<a href="${"new_sessions/new_workout"}"><p class="${" font-bold pb-2"}">Work-out</p>
		<img src="${"workout.jpg"}" alt="${"workout"}"></a>`
	})}</div></div>
  
  <div class="${"w-1/2 p-2"}"><div class="${" text-center p-2"}">${validate_component(Box, "Box").$$render($$result, {}, {}, {
		default: () => `<a href="${"new_sessions/new_swimming"}"><p class="${" font-bold pb-2"}">Swimming</p>
		<img src="${"swimming.jpg"}" alt="${"swimming"}"></a>`
	})}</div></div></div>






    

`;
});

/* src\routes\performance.svelte generated by Svelte v3.22.3 */

const Performance = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `<body><div class="${"md:flex justify-center mb-8"}"><div class="${"text-center mx-4 md:w-1/2"}"><p class="${"font-semibold tracking-wider text-xl text-blue-700 pb-6"}">Cycling</p>
			<div class="${"hover:shadow-2xl hover:border-blue-800"}"><a href="${"sports/cycling/cycling"}"><img src="${"bycicle21.jpg"}" alt="${"cycling"}" class="${"rounded"}"></a></div></div>
		<div class="${" text-center mx-4  md:w-1/2 "}"><p class="${"font-semibold tracking-wider text-xl text-blue-700 pb-6"}">Running</p>
			<div class="${"hover:shadow-2xl hover:border-blue-800"}"><a href="${"sports/running/running"}"><img src="${"running1.jpg"}" alt="${"running"}" class="${"rounded"}"></a></div></div></div>
	<div class="${"md:flex justify-center"}"><div class="${" text-center mx-4 md:w-1/2"}"><p class="${"font-semibold tracking-wider text-xl text-blue-700 pb-6"}">Work-out</p>
			<div class="${"hover:shadow-2xl hover:border-blue-800"}"><a href="${"sports/workout/workout"}"><img src="${"workout3.jpg"}" alt="${"workout"}" class="${"rounded"}"></a></div></div>
		<div class="${" text-center mx-4  md:w-1/2 "}"><p class="${"font-semibold tracking-wider text-xl text-blue-700 pb-6"}">Swimming</p>
			<div class="${"hover:shadow-2xl hover:border-blue-800"}"><a href="${"sports/swimming/swimming"}"><img src="${"swimming2.jpg"}" alt="${"swimming"}" class="${"rounded"}"></a></div></div></div></body>`;
});

/* src\routes\sport_list\index.svelte generated by Svelte v3.22.3 */

const Sport_list = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `
		 --&gt;`;
});

/* src\routes\sport_list\[slug].svelte generated by Svelte v3.22.3 */

const U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return ``;
});

/* src\routes\chartest.svelte generated by Svelte v3.22.3 */

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

/* src\routes\tutorial.svelte generated by Svelte v3.22.3 */

const Tutorial = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `<div class="${"mb-6 shadow "}"><img src="${"https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"}" alt="${"mountains"}" class="${"antialiased bg-gray-600 object-cover h-48 w-full shadow rounded-md"}"></div>

<div class="${"flex justify-center"}"><h1 class="${"text-4xl text-blue-700 font-semibold tracking-widest"}">Tutorial</h1></div>
    <div class="${""}"><div class="${" mt-12 xl:flex justify-around"}"><div class="${"m-16"}"><p class="${"flex justify-center mb-6 font-semibold mb-6 text-xl text-blue-700"}">Where it all starts</p>
                <div class="${"flex justify-center pb-6 "}"><iframe width="${"560"}" height="${"315"}" src="${"https://www.youtube.com/embed/6uG9lsx-EMo?autoplay=1&loop=1&autopause=1"}" frameborder="${"0"}" allow="${"fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen controls autoplay></iframe></div></div>
            <div class="${"m-16"}"><p class="${"flex justify-center mb-6 font-semibold mb-6 text-xl text-blue-700"}">How to use the application</p>
                <div class="${"flex justify-center pb-6 "}"><iframe width="${"560"}" height="${"315"}" src="${"https://www.youtube.com/embed/6uG9lsx-EMo"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen controls autoplay></iframe></div></div></div></div>`;
});

/* src\routes\sports\swimming\swimming-charts.svelte generated by Svelte v3.22.3 */

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

/* src\routes\sports\swimming\swimming.svelte generated by Svelte v3.22.3 */

function preload$2({ params, query }) {
	return this.fetch(`sports/swimming.json`).then(r => r.json()).then(data_raw => {
		return { data_raw };
	});
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


    <div class="${"pb-8"}"><h1 class="${"text-blue-800  mb-8 "}">Last Sessions</h1>
     
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
            ${validate_component(Swimming_charts, "Charts").$$render($$result, { data }, {}, {})}</div></div></div>`;
});

/* src\routes\sports\cycling\cycling-charts.svelte generated by Svelte v3.22.3 */

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

/* src\routes\sports\cycling\cycling.svelte generated by Svelte v3.22.3 */

function preload$3({ params, query }) {
	return this.fetch(`sports/cycling.json`).then(r => r.json()).then(data_raw => {
		return { data_raw };
	});
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

	return `<div class="${"mb-20"}"><div class="${"mb-6 shadow "}"><img src="${"bycicle2.jpg"}" alt="${"cycling"}" class="${"object-cover h-48 w-full shadow rounded-md"}"></div>


    <div class="${"flex justify-center mb-16 bg-blue-700 border-2 border-gray-300 shadow-lg rounded-t-md"}"><div class="${"font-sans Arial text-center p-2 text-3xl text-blue-700 font-semibold bg-blue-100 px-8 tracking-widest"}">Cycling Performance
        </div></div>

    <div class="${"pb-8"}"><h1 class="${"text-blue-800  mb-8 "}">Last Sessions</h1>
     
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
            ${validate_component(Cycling_charts, "Charts").$$render($$result, { data }, {}, {})}</div></div></div>`;
});

/* src\routes\sports\running\running-charts.svelte generated by Svelte v3.22.3 */

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

/* src\routes\sports\running\running.svelte generated by Svelte v3.22.3 */

function preload$4({ params, query }) {
	return this.fetch(`sports/running.json`).then(r => r.json()).then(data_raw => {
		return { data_raw };
	});
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

    <div class="${"pb-8"}"><h1 class="${"text-blue-800  mb-8 "}">Last Sessions</h1>
     
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
            ${validate_component(Running_charts, "Charts").$$render($$result, { data }, {}, {})}</div></div></div>`;
});

/* src\routes\sports\workout\workout.svelte generated by Svelte v3.22.3 */

const Workout = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return ``;
});

/* src\routes\about.svelte generated by Svelte v3.22.3 */

const About = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `<div class="${"mb-6 shadow "}"><img src="${"work_hader.jpg"}" alt="${"work harder sign"}" class="${"antialiased bg-gray-600 object-cover h-48 w-full shadow rounded-md"}"></div>

    <div class="${"flex justify-center mb-8"}"><h1 class="${"text-4xl text-blue-700 font-semibold tracking-widest"}">About Us</h1></div>

    <div class="${"md:flex justify-center"}"><div class="${"m-2 rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased"}" style="${"\r\n        background-image: url('https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');\r\n        background-repeat: no-repat;\r\n        background-size: cover;\r\n        background-blend-mode: multiply ;\r\n        "}"><div class="${"w-1/3"}"><img class="${"rounded-lg shadow-lg antialiased"}" src="${"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}"></div>
            <div class="${"md:w-2/3 w-full px-3 flex flex-row flex-wrap"}"><div class="${"w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0"}"><div class="${"text-2xl text-white leading-tight"}">Martin</div>
                <div class="${"text-normal text-gray-300 hover:text-gray-400 cursor-pointer"}"><span class="${"border-b border-dashed border-gray-500 pb-1"}">Death Star Supervisor</span></div>
                <div class="${"text-sm text-gray-300 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0"}">Last Seen: <b>2 days ago</b></div></div></div></div>  
        <div class="${"m-2 rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased"}" style="${"\r\n        background-image: url('https://images.unsplash.com/photo-1500856056008-859079534e9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80');\r\n        background-repeat: no-repat;\r\n        background-size: cover;\r\n        background-blend-mode: ;\r\n        "}"><div class="${"w-1/3"}"><img class="${"rounded-lg shadow-lg antialiased"}" src="${"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}"></div>
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
            </button></div></form>`;
});

/* src\routes\blog\index.svelte generated by Svelte v3.22.3 */

const css$2 = {
	code: "ul.svelte-1she90c{margin:0 0 1em 0;line-height:1.5}",
	map: "{\"version\":3,\"file\":\"index.svelte\",\"sources\":[\"index.svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\r\\n\\texport function preload({ params, query }) {\\r\\n\\t\\treturn this.fetch(`blog.json`).then(r => r.json()).then(posts => {\\r\\n\\t\\t\\treturn { posts };\\r\\n\\t\\t});\\r\\n\\t\\t\\r\\n\\t}\\r\\n</script>\\r\\n\\r\\n<script>\\r\\n\\texport let posts;\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n\\tul {\\r\\n\\t\\tmargin: 0 0 1em 0;\\r\\n\\t\\tline-height: 1.5;\\r\\n\\t}\\r\\n</style>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<title>Blog</title>\\r\\n</svelte:head>\\r\\n\\r\\n<h1>Recent posts</h1>\\r\\n\\r\\n<ul>\\r\\n\\t{#each posts as post}\\r\\n\\t\\t<!-- we're using the non-standard `rel=prefetch` attribute to\\r\\n\\t\\t\\t\\ttell Sapper to load the data for the page as soon as\\r\\n\\t\\t\\t\\tthe user hovers over the link or taps it, instead of\\r\\n\\t\\t\\t\\twaiting for the 'click' event -->\\r\\n\\t\\t<li><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li>\\r\\n\\t{/each}\\r\\n</ul>\"],\"names\":[],\"mappings\":\"AAcC,EAAE,eAAC,CAAC,AACH,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CACjB,WAAW,CAAE,GAAG,AACjB,CAAC\"}"
};

function preload$5({ params, query }) {
	return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
		return { posts };
	});
}

const Blog = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { posts } = $$props;
	if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0) $$bindings.posts(posts);
	$$result.css.add(css$2);

	return `${($$result.head += `${($$result.title = `<title>Blog</title>`, "")}`, "")}

<h1>Recent posts</h1>

<ul class="${"svelte-1she90c"}">${each(posts, post => `
		<li><a rel="${"prefetch"}" href="${"blog/" + escape(post.slug)}">${escape(post.title)}</a></li>`)}</ul>`;
});

/* src\routes\blog\[slug].svelte generated by Svelte v3.22.3 */

const css$3 = {
	code: ".content.svelte-dkhkxh h2{font-size:1.4em;font-weight:500}.content.svelte-dkhkxh pre{background-color:#f9f9f9;box-shadow:inset 1px 1px 5px rgba(0,0,0,0.05);padding:0.5em;border-radius:2px;overflow-x:auto}.content.svelte-dkhkxh pre code{background-color:transparent;padding:0}.content.svelte-dkhkxh ul{line-height:1.5}.content.svelte-dkhkxh li{margin:0 0 0.5em 0}",
	map: "{\"version\":3,\"file\":\"[slug].svelte\",\"sources\":[\"[slug].svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\r\\n\\texport async function preload({ params, query }) {\\r\\n\\t\\t// the `slug` parameter is available because\\r\\n\\t\\t// this file is called [slug].svelte\\r\\n\\t\\tconst res = await this.fetch(`blog/${params.slug}.json`);\\r\\n\\t\\tconst data = await res.json();\\r\\n\\t\\tconsole.log(data)\\r\\n\\t\\tif (res.status === 200) {\\r\\n\\t\\t\\treturn { post: data };\\r\\n\\t\\t} else {\\r\\n\\t\\t\\tthis.error(res.status, data.message);\\r\\n\\t\\t}\\r\\n\\t}\\r\\n</script>\\r\\n\\r\\n<script>\\r\\n\\texport let post;\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n\\t/*\\r\\n\\t\\tBy default, CSS is locally scoped to the component,\\r\\n\\t\\tand any unused styles are dead-code-eliminated.\\r\\n\\t\\tIn this page, Svelte can't know which elements are\\r\\n\\t\\tgoing to appear inside the {{{post.html}}} block,\\r\\n\\t\\tso we have to use the :global(...) modifier to target\\r\\n\\t\\tall elements inside .content\\r\\n\\t*/\\r\\n\\t.content :global(h2) {\\r\\n\\t\\tfont-size: 1.4em;\\r\\n\\t\\tfont-weight: 500;\\r\\n\\t}\\r\\n\\r\\n\\t.content :global(pre) {\\r\\n\\t\\tbackground-color: #f9f9f9;\\r\\n\\t\\tbox-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);\\r\\n\\t\\tpadding: 0.5em;\\r\\n\\t\\tborder-radius: 2px;\\r\\n\\t\\toverflow-x: auto;\\r\\n\\t}\\r\\n\\r\\n\\t.content :global(pre) :global(code) {\\r\\n\\t\\tbackground-color: transparent;\\r\\n\\t\\tpadding: 0;\\r\\n\\t}\\r\\n\\r\\n\\t.content :global(ul) {\\r\\n\\t\\tline-height: 1.5;\\r\\n\\t}\\r\\n\\r\\n\\t.content :global(li) {\\r\\n\\t\\tmargin: 0 0 0.5em 0;\\r\\n\\t}\\r\\n</style>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<title>{post.title}</title>\\r\\n</svelte:head>\\r\\n\\r\\n<h1>{post.title}</h1>\\r\\n\\r\\n<div class='content'>\\r\\n\\t{@html post.html}\\r\\n</div>\\r\\n\"],\"names\":[],\"mappings\":\"AA4BC,sBAAQ,CAAC,AAAQ,EAAE,AAAE,CAAC,AACrB,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,AACjB,CAAC,AAED,sBAAQ,CAAC,AAAQ,GAAG,AAAE,CAAC,AACtB,gBAAgB,CAAE,OAAO,CACzB,UAAU,CAAE,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAC9C,OAAO,CAAE,KAAK,CACd,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,IAAI,AACjB,CAAC,AAED,sBAAQ,CAAC,AAAQ,GAAG,AAAC,CAAC,AAAQ,IAAI,AAAE,CAAC,AACpC,gBAAgB,CAAE,WAAW,CAC7B,OAAO,CAAE,CAAC,AACX,CAAC,AAED,sBAAQ,CAAC,AAAQ,EAAE,AAAE,CAAC,AACrB,WAAW,CAAE,GAAG,AACjB,CAAC,AAED,sBAAQ,CAAC,AAAQ,EAAE,AAAE,CAAC,AACrB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,AACpB,CAAC\"}"
};

async function preload$6({ params, query }) {
	// the `slug` parameter is available because
	// this file is called [slug].svelte
	const res = await this.fetch(`blog/${params.slug}.json`);

	const data = await res.json();
	console.log(data);

	if (res.status === 200) {
		return { post: data };
	} else {
		this.error(res.status, data.message);
	}
}

const U5Bslugu5D$1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { post } = $$props;
	if ($$props.post === void 0 && $$bindings.post && post !== void 0) $$bindings.post(post);
	$$result.css.add(css$3);

	return `${($$result.head += `${($$result.title = `<title>${escape(post.title)}</title>`, "")}`, "")}

<h1>${escape(post.title)}</h1>

<div class="${"content svelte-dkhkxh"}">${post.html}</div>`;
});

/* src\components\Nav.svelte generated by Svelte v3.22.3 */

const css$4 = {
	code: "nav.svelte-1mrc921{border-bottom:1px solid rgba(255,62,0,0.1);font-weight:300;padding:0 1em}ul.svelte-1mrc921{margin:0;padding:0}ul.svelte-1mrc921::after{content:'';display:block;clear:both}li.svelte-1mrc921{display:block;float:left}[aria-current].svelte-1mrc921{position:relative;display:inline-block}[aria-current].svelte-1mrc921::after{position:absolute;content:'';width:calc(100% - 1em);height:2px;background-color:rgb(255,62,0);display:block;bottom:-1px}a.svelte-1mrc921{text-decoration:none;padding:1em 0.5em;display:block}",
	map: "{\"version\":3,\"file\":\"Nav.svelte\",\"sources\":[\"Nav.svelte\"],\"sourcesContent\":[\"<script>\\r\\n\\texport let segment;\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n\\tnav {\\r\\n\\t\\tborder-bottom: 1px solid rgba(255,62,0,0.1);\\r\\n\\t\\tfont-weight: 300;\\r\\n\\t\\tpadding: 0 1em;\\r\\n\\t}\\r\\n\\r\\n\\tul {\\r\\n\\t\\tmargin: 0;\\r\\n\\t\\tpadding: 0;\\r\\n\\t}\\r\\n\\r\\n\\t/* clearfix */\\r\\n\\tul::after {\\r\\n\\t\\tcontent: '';\\r\\n\\t\\tdisplay: block;\\r\\n\\t\\tclear: both;\\r\\n\\t}\\r\\n\\r\\n\\tli {\\r\\n\\t\\tdisplay: block;\\r\\n\\t\\tfloat: left;\\r\\n\\t}\\r\\n\\r\\n\\t[aria-current] {\\r\\n\\t\\tposition: relative;\\r\\n\\t\\tdisplay: inline-block;\\r\\n\\t}\\r\\n\\r\\n\\t[aria-current]::after {\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\tcontent: '';\\r\\n\\t\\twidth: calc(100% - 1em);\\r\\n\\t\\theight: 2px;\\r\\n\\t\\tbackground-color: rgb(255,62,0);\\r\\n\\t\\tdisplay: block;\\r\\n\\t\\tbottom: -1px;\\r\\n\\t}\\r\\n\\r\\n\\ta {\\r\\n\\t\\ttext-decoration: none;\\r\\n\\t\\tpadding: 1em 0.5em;\\r\\n\\t\\tdisplay: block;\\r\\n\\t}\\r\\n</style>\\r\\n\\r\\n<nav>\\r\\n\\t<ul>\\r\\n\\t\\t<li><a aria-current='{segment === undefined ? \\\"page\\\" : undefined}' href='.'>home</a></li>\\r\\n\\t\\t<!-- <li><a rel=prefetch aria-current='{segment === \\\"blog\\\" ? \\\"page\\\" : undefined}' href='blog'>blog</a></li> -->\\r\\n\\r\\n\\t\\t<li><a aria-current='{segment === \\\"new_session\\\" ? \\\"page\\\" : undefined}' href='new_session'>new session</a></li>\\r\\n\\r\\n\\t\\t<li><a aria-current='{segment === \\\"performance\\\" ? \\\"page\\\" : undefined}' href='performance'>performance</a></li>\\r\\n\\r\\n\\t\\t<li><a aria-current='{segment === \\\"about\\\" ? \\\"page\\\" : undefined}' href='about'>about</a></li>\\r\\n\\t\\t<li><a aria-current='{segment === \\\"tutorial\\\" ? \\\"page\\\" : undefined}' href='tutorial'>tutorial</a></li>\\r\\n\\r\\n\\t\\t<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches\\r\\n\\t\\t     the blog data when we hover over the link or tap it on a touchscreen -->\\r\\n\\t</ul>\\r\\n</nav>\\r\\n\"],\"names\":[],\"mappings\":\"AAKC,GAAG,eAAC,CAAC,AACJ,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,EAAE,CAAC,CAAC,CAAC,GAAG,CAAC,CAC3C,WAAW,CAAE,GAAG,CAChB,OAAO,CAAE,CAAC,CAAC,GAAG,AACf,CAAC,AAED,EAAE,eAAC,CAAC,AACH,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,AACX,CAAC,AAGD,iBAAE,OAAO,AAAC,CAAC,AACV,OAAO,CAAE,EAAE,CACX,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,AACZ,CAAC,AAED,EAAE,eAAC,CAAC,AACH,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,AACZ,CAAC,AAED,CAAC,YAAY,CAAC,eAAC,CAAC,AACf,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,YAAY,AACtB,CAAC,AAED,CAAC,YAAY,gBAAC,OAAO,AAAC,CAAC,AACtB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CACvB,MAAM,CAAE,GAAG,CACX,gBAAgB,CAAE,IAAI,GAAG,CAAC,EAAE,CAAC,CAAC,CAAC,CAC/B,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,IAAI,AACb,CAAC,AAED,CAAC,eAAC,CAAC,AACF,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,GAAG,CAAC,KAAK,CAClB,OAAO,CAAE,KAAK,AACf,CAAC\"}"
};

const Nav = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { segment } = $$props;
	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);
	$$result.css.add(css$4);

	return `<nav class="${"svelte-1mrc921"}"><ul class="${"svelte-1mrc921"}"><li class="${"svelte-1mrc921"}"><a${add_attribute("aria-current", segment === undefined ? "page" : undefined, 0)} href="${"."}" class="${"svelte-1mrc921"}">home</a></li>
		

		<li class="${"svelte-1mrc921"}"><a${add_attribute("aria-current", segment === "new_session" ? "page" : undefined, 0)} href="${"new_session"}" class="${"svelte-1mrc921"}">new session</a></li>

		<li class="${"svelte-1mrc921"}"><a${add_attribute("aria-current", segment === "performance" ? "page" : undefined, 0)} href="${"performance"}" class="${"svelte-1mrc921"}">performance</a></li>

		<li class="${"svelte-1mrc921"}"><a${add_attribute("aria-current", segment === "about" ? "page" : undefined, 0)} href="${"about"}" class="${"svelte-1mrc921"}">about</a></li>
		<li class="${"svelte-1mrc921"}"><a${add_attribute("aria-current", segment === "tutorial" ? "page" : undefined, 0)} href="${"tutorial"}" class="${"svelte-1mrc921"}">tutorial</a></li>

		</ul></nav>`;
});

/* src\routes\_layout.svelte generated by Svelte v3.22.3 */

const css$5 = {
	code: "main.svelte-1tyvcu5{position:relative;max-width:56em;background-color:white;padding:2em;margin:0 auto;box-sizing:border-box}",
	map: "{\"version\":3,\"file\":\"_layout.svelte\",\"sources\":[\"_layout.svelte\"],\"sourcesContent\":[\"<script>\\r\\n\\timport Nav from '../components/Nav.svelte';\\r\\n\\r\\n\\texport let segment;\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n\\tmain {\\r\\n\\t\\tposition: relative;\\r\\n\\t\\tmax-width: 56em;\\r\\n\\t\\tbackground-color: white;\\r\\n\\t\\tpadding: 2em;\\r\\n\\t\\tmargin: 0 auto;\\r\\n\\t\\tbox-sizing: border-box;\\r\\n\\t}\\r\\n</style>\\r\\n\\r\\n<Nav {segment}/>\\r\\n\\r\\n<main>\\r\\n\\t<slot></slot>\\r\\n</main>\"],\"names\":[],\"mappings\":\"AAOC,IAAI,eAAC,CAAC,AACL,QAAQ,CAAE,QAAQ,CAClB,SAAS,CAAE,IAAI,CACf,gBAAgB,CAAE,KAAK,CACvB,OAAO,CAAE,GAAG,CACZ,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,UAAU,CAAE,UAAU,AACvB,CAAC\"}"
};

const Layout = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { segment } = $$props;
	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);
	$$result.css.add(css$5);

	return `${validate_component(Nav, "Nav").$$render($$result, { segment }, {}, {})}

<main class="${"svelte-1tyvcu5"}">${$$slots.default ? $$slots.default({}) : ``}</main>`;
});

/* src\routes\_error.svelte generated by Svelte v3.22.3 */

const css$6 = {
	code: "h1.svelte-13vgy2g,p.svelte-13vgy2g{margin:0 auto}h1.svelte-13vgy2g{font-size:2.8em;font-weight:700;margin:0 0 0.5em 0}p.svelte-13vgy2g{margin:1em auto}@media(min-width: 480px){h1.svelte-13vgy2g{font-size:4em}}",
	map: "{\"version\":3,\"file\":\"_error.svelte\",\"sources\":[\"_error.svelte\"],\"sourcesContent\":[\"<script>\\r\\n\\texport let status;\\r\\n\\texport let error;\\r\\n\\r\\n\\tconst dev = \\\"development\\\" === 'development';\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n\\th1, p {\\r\\n\\t\\tmargin: 0 auto;\\r\\n\\t}\\r\\n\\r\\n\\th1 {\\r\\n\\t\\tfont-size: 2.8em;\\r\\n\\t\\tfont-weight: 700;\\r\\n\\t\\tmargin: 0 0 0.5em 0;\\r\\n\\t}\\r\\n\\r\\n\\tp {\\r\\n\\t\\tmargin: 1em auto;\\r\\n\\t}\\r\\n\\r\\n\\t@media (min-width: 480px) {\\r\\n\\t\\th1 {\\r\\n\\t\\t\\tfont-size: 4em;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n</style>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<title>{status}</title>\\r\\n</svelte:head>\\r\\n\\r\\n<h1>{status}</h1>\\r\\n\\r\\n<p>{error.message}</p>\\r\\n\\r\\n{#if dev && error.stack}\\r\\n\\t<pre>{error.stack}</pre>\\r\\n{/if}\\r\\n\"],\"names\":[],\"mappings\":\"AAQC,iBAAE,CAAE,CAAC,eAAC,CAAC,AACN,MAAM,CAAE,CAAC,CAAC,IAAI,AACf,CAAC,AAED,EAAE,eAAC,CAAC,AACH,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,AACpB,CAAC,AAED,CAAC,eAAC,CAAC,AACF,MAAM,CAAE,GAAG,CAAC,IAAI,AACjB,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAC1B,EAAE,eAAC,CAAC,AACH,SAAS,CAAE,GAAG,AACf,CAAC,AACF,CAAC\"}"
};

const Error$1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { status } = $$props;
	let { error } = $$props;
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	$$result.css.add(css$6);

	return `${($$result.head += `${($$result.title = `<title>${escape(status)}</title>`, "")}`, "")}

<h1 class="${"svelte-13vgy2g"}">${escape(status)}</h1>

<p class="${"svelte-13vgy2g"}">${escape(error.message)}</p>

${ error.stack
	? `<pre>${escape(error.stack)}</pre>`
	: ``}`;
});

// This file is generated by Sapper — do not edit it!

const d = decodeURIComponent;

const manifest = {
	server_routes: [
		{
			// new_sessions/index.json.js
			pattern: /^\/new_sessions\.json$/,
			handlers: route_0,
			params: () => ({})
		},

		{
			// sport_list/index.json.js
			pattern: /^\/sport_list\.json$/,
			handlers: route_1,
			params: () => ({})
		},

		{
			// sport_list/[slug].json.js
			pattern: /^\/sport_list\/([^\/]+?)\.json$/,
			handlers: route_2,
			params: match => ({ slug: d(match[1]) })
		},

		{
			// sports/swimming/index.json.js
			pattern: /^\/sports\/swimming\.json$/,
			handlers: route_3,
			params: () => ({})
		},

		{
			// sports/swimming/swimming-data.js
			pattern: /^\/sports\/swimming\/swimming-data\/?$/,
			handlers: route_4,
			params: () => ({})
		},

		{
			// sports/cycling/index.json.js
			pattern: /^\/sports\/cycling\.json$/,
			handlers: route_5,
			params: () => ({})
		},

		{
			// sports/cycling/cycling-data.js
			pattern: /^\/sports\/cycling\/cycling-data\/?$/,
			handlers: route_6,
			params: () => ({})
		},

		{
			// sports/running/index.json.js
			pattern: /^\/sports\/running\.json$/,
			handlers: route_7,
			params: () => ({})
		},

		{
			// sport.js
			pattern: /^\/sport\/?$/,
			handlers: route_8,
			params: () => ({})
		},

		{
			// blog/index.json.js
			pattern: /^\/blog\.json$/,
			handlers: route_9,
			params: () => ({})
		},

		{
			// blog/[slug].json.js
			pattern: /^\/blog\/([^\/]+?)\.json$/,
			handlers: route_10,
			params: match => ({ slug: d(match[1]) })
		}
	],

	pages: [
		{
			// index.svelte
			pattern: /^\/$/,
			parts: [
				{ name: "index", file: "index.svelte", component: Routes }
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
			// new_sessions/new_cycling.svelte
			pattern: /^\/new_sessions\/new_cycling\/?$/,
			parts: [
				null,
				{ name: "new_sessions_new_cycling", file: "new_sessions/new_cycling.svelte", component: New_cycling, preload: preload }
			]
		},

		{
			// new_session.svelte
			pattern: /^\/new_session\/?$/,
			parts: [
				{ name: "new_session", file: "new_session.svelte", component: New_session, preload: preload$1 }
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
			// sport_list/index.svelte
			pattern: /^\/sport_list\/?$/,
			parts: [
				{ name: "sport_list", file: "sport_list/index.svelte", component: Sport_list }
			]
		},

		{
			// sport_list/[slug].svelte
			pattern: /^\/sport_list\/([^\/]+?)\/?$/,
			parts: [
				null,
				{ name: "sport_list_$slug", file: "sport_list/[slug].svelte", component: U5Bslugu5D, params: match => ({ slug: d(match[1]) }) }
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
				{ name: "sports_swimming_swimming", file: "sports/swimming/swimming.svelte", component: Swimming, preload: preload$2 }
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
				{ name: "sports_cycling_cycling", file: "sports/cycling/cycling.svelte", component: Cycling, preload: preload$3 }
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
				{ name: "sports_running_running", file: "sports/running/running.svelte", component: Running, preload: preload$4 }
			]
		},

		{
			// sports/workout/workout.svelte
			pattern: /^\/sports\/workout\/workout\/?$/,
			parts: [
				null,
				null,
				{ name: "sports_workout_workout", file: "sports/workout/workout.svelte", component: Workout }
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
			// blog/index.svelte
			pattern: /^\/blog\/?$/,
			parts: [
				{ name: "blog", file: "blog/index.svelte", component: Blog, preload: preload$5 }
			]
		},

		{
			// blog/[slug].svelte
			pattern: /^\/blog\/([^\/]+?)\/?$/,
			parts: [
				null,
				{ name: "blog_$slug", file: "blog/[slug].svelte", component: U5Bslugu5D$1, preload: preload$6, params: match => ({ slug: d(match[1]) }) }
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

/* src\node_modules\@sapper\internal\App.svelte generated by Svelte v3.22.3 */

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
		middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});


// 	const MongoClient = require('mongodb').MongoClient;
// 	const url = "mongodb+srv://becuwemartin:vendredi13@cluster0-hgxcl.mongodb.net/test2_database?retryWrites=true&w=majority";
// 	// Use connect method to connect to the Server
// MongoClient.connect(url, function(err, client) {
	
// 	const db = client.db("test2_database");
	
// 	var cursor = db.collection('test2_collection').find({});
	
// 	function iterateFunc(doc) {
// 		console.log(JSON.stringify(doc, null, 4));
// 	 }
	 
// 	 function errorFunc(error) {
// 		console.log(error);
// 	 }
// 	 cursor.forEach(iterateFunc, errorFunc);
// 	 client.close();
//   });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbm9kZV9tb2R1bGVzL0BsaWIvbW9uZ28uanMiLCIuLi8uLi8uLi9zcmMvcm91dGVzL25ld19zZXNzaW9ucy9pbmRleC5qc29uLmpzIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9zcG9ydF9saXN0L2luZGV4Lmpzb24uanMiLCIuLi8uLi8uLi9zcmMvcm91dGVzL3Nwb3J0X2xpc3QvW3NsdWddLmpzb24uanMiLCIuLi8uLi8uLi9zcmMvcm91dGVzL3Nwb3J0cy9zd2ltbWluZy9pbmRleC5qc29uLmpzIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9zcG9ydHMvc3dpbW1pbmcvc3dpbW1pbmctZGF0YS5qcyIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvc3BvcnRzL2N5Y2xpbmcvaW5kZXguanNvbi5qcyIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvc3BvcnRzL2N5Y2xpbmcvY3ljbGluZy1kYXRhLmpzIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9zcG9ydHMvcnVubmluZy9pbmRleC5qc29uLmpzIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9zcG9ydC5qcyIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYmxvZy9pbmRleC5qc29uLmpzIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9ibG9nL1tzbHVnXS5qc29uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9pbnRlcm5hbC9pbmRleC5tanMiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2ZyYXBwZS1jaGFydHMuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9uZXdfc2Vzc2lvbnMvbmV3X2N5Y2xpbmcuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9uZXdfc2Vzc2lvbi5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2NoYXJ0ZXN0LnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvc3BvcnRzL3N3aW1taW5nL3N3aW1taW5nLWNoYXJ0cy5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL3Nwb3J0cy9zd2ltbWluZy9zd2ltbWluZy5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL3Nwb3J0cy9jeWNsaW5nL2N5Y2xpbmctY2hhcnRzLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvc3BvcnRzL2N5Y2xpbmcvY3ljbGluZy5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL3Nwb3J0cy9ydW5uaW5nL3J1bm5pbmctY2hhcnRzLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvc3BvcnRzL3J1bm5pbmcvcnVubmluZy5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2Jsb2cvaW5kZXguc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9ibG9nL1tzbHVnXS5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9OYXYuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9fbGF5b3V0LnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvX2Vycm9yLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9pbnRlcm5hbC9tYW5pZmVzdC1zZXJ2ZXIubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zdG9yZS9pbmRleC5tanMiLCIuLi8uLi8uLi9zcmMvbm9kZV9tb2R1bGVzL0BzYXBwZXIvaW50ZXJuYWwvc2hhcmVkLm1qcyIsIi4uLy4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9pbnRlcm5hbC9BcHAuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL25vZGVfbW9kdWxlcy9Ac2FwcGVyL3NlcnZlci5tanMiLCIuLi8uLi8uLi9zcmMvc2VydmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvID0gcmVxdWlyZSgnbW9uZ29kYicpO1xyXG5cclxubGV0IGNsaWVudCA9IG51bGw7XHJcbmxldCBkYiA9IG51bGw7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgaWYoIWNsaWVudCl7XHJcbiAgICAgICAgY29uc3QgdXJsID0gXCJtb25nb2RiK3NydjovL2JlY3V3ZW1hcnRpbjp2ZW5kcmVkaTEzQGNsdXN0ZXIwLWhneGNsLm1vbmdvZGIubmV0L3Rlc3QyX2RhdGFiYXNlP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiO1xyXG4gICAgICAgIGNsaWVudCA9IGF3YWl0IG1vbmdvLk1vbmdvQ2xpZW50LmNvbm5lY3QodXJsKVxyXG4gICAgICAgIGRiID0gY2xpZW50LmRiKCdzcG9ydF9wZXJmX2RhdGFiYXNlJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge2NsaWVudCwgZGJ9XHJcbn0iLCJpbXBvcnQge2luaXR9IGZyb20gJ0BsaWIvbW9uZ28nXHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldChyZXEsIHJlcykge1xyXG5cdFxyXG5cdGNvbnN0IHtkYn0gPSBhd2FpdCBpbml0KCk7XHJcblx0Y29uc3QgZGF0YV9yYXcgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwic3BvcnRfbGlzdF9jb2xsZWN0aW9uXCIpLmZpbmQoe3Nwb3J0OidjeWNsaW5nJ30pLnRvQXJyYXkoKTtcclxuXHRcclxuXHJcblxyXG5cclxuXHRyZXMud3JpdGVIZWFkKDIwMCwge1xyXG5cdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG5cdH0pO1xyXG5cclxuXHRyZXMuZW5kKEpTT04uc3RyaW5naWZ5KGRhdGFfcmF3KSk7XHJcblxyXG5cdH0iLCIvLyBpbXBvcnQgc3BvcnRzIGZyb20gJy4vX3Nwb3J0cy5qcyc7XHJcblxyXG4vLyBjb25zdCBjb250ZW50cyA9IEpTT04uc3RyaW5naWZ5KHNwb3J0cy5tYXAoc3BvcnQgPT4ge1xyXG4vLyBcdHJldHVybiB7XHJcbi8vIFx0XHR0aXRsZTogc3BvcnQudGl0bGUsXHJcbi8vIFx0XHRzbHVnOiBzcG9ydC5zbHVnXHJcbi8vIFx0fTtcclxuLy8gfSkpO1xyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldChyZXEsIHJlcykge1xyXG4vLyBcdHJlcy53cml0ZUhlYWQoMjAwLCB7XHJcbi8vIFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbi8vIFx0fSk7XHJcblxyXG4vLyBcdHJlcy5lbmQoY29udGVudHMpO1xyXG4vLyB9IiwiLy8gaW1wb3J0IHNwb3J0cyBmcm9tICcuL19zcG9ydHMuanMnO1xyXG5cclxuLy8gY29uc3QgbG9va3VwID0gbmV3IE1hcCgpO1xyXG4vLyBzcG9ydHMuZm9yRWFjaChzcG9ydCA9PiB7XHJcbi8vIFx0bG9va3VwLnNldChzcG9ydC5zbHVnLCBKU09OLnN0cmluZ2lmeShzcG9ydCkpO1xyXG4vLyB9KTtcclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBnZXQocmVxLCByZXMsIG5leHQpIHtcclxuLy8gXHQvLyB0aGUgYHNsdWdgIHBhcmFtZXRlciBpcyBhdmFpbGFibGUgYmVjYXVzZVxyXG4vLyBcdC8vIHRoaXMgZmlsZSBpcyBjYWxsZWQgW3NsdWddLmpzb24uanNcclxuLy8gXHRjb25zdCB7IHNsdWcgfSA9IHJlcS5wYXJhbXM7XHJcblxyXG4vLyBcdGlmIChsb29rdXAuaGFzKHNsdWcpKSB7XHJcbi8vIFx0XHRyZXMud3JpdGVIZWFkKDIwMCwge1xyXG4vLyBcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbi8vIFx0XHR9KTtcclxuXHJcbi8vIFx0XHRyZXMuZW5kKGxvb2t1cC5nZXQoc2x1ZykpO1xyXG4vLyBcdH0gZWxzZSB7XHJcbi8vIFx0XHRyZXMud3JpdGVIZWFkKDQwNCwge1xyXG4vLyBcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbi8vIFx0XHR9KTtcclxuXHJcbi8vIFx0XHRyZXMuZW5kKEpTT04uc3RyaW5naWZ5KHtcclxuLy8gXHRcdFx0bWVzc2FnZTogYE5vdCBmb3VuZGBcclxuLy8gXHRcdH0pKTtcclxuLy8gXHR9XHJcbi8vIH1cclxuIiwiaW1wb3J0IHtpbml0fSBmcm9tICdAbGliL21vbmdvJ1xyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXQocmVxLCByZXMpIHtcclxuXHRcclxuXHRjb25zdCB7ZGJ9ID0gYXdhaXQgaW5pdCgpO1xyXG5cdGNvbnN0IGRhdGFfcmF3ID0gYXdhaXQgZGIuY29sbGVjdGlvbihcInVzZXIxX2NvbGxlY3Rpb25cIikuZmluZCh7c3BvcnQ6J3N3aW1taW5nJ30pLnRvQXJyYXkoKTtcclxuXHRcclxuXHRyZXMud3JpdGVIZWFkKDIwMCwge1xyXG5cdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG5cdH0pO1xyXG5cclxuXHRyZXMuZW5kKEpTT04uc3RyaW5naWZ5KGRhdGFfcmF3KSk7XHJcblx0fSIsIlxyXG4vLyBjb25zdCBwZXJmb3JtYW5jZV9kYXRhID0ge1xyXG4vLyAgICAgJ3N3aW1taW5nJzogW1xyXG4vLyAgICAgICAgIHsnaWRfc2Vzc2lvbicgOiAxLFxyXG4vLyAgICAgICAgICdtZXRlcnMnOiAxNTAwLCBcclxuLy8gICAgICAgICAnbWludXRlcycgOiA1MCxcclxuLy8gICAgICdzcHJpbnQnOiAyLFxyXG4vLyAgICAgJ2RhdGUnOiAnMzAtMDMtMjAyMCdcclxuLy8gICAgICAgICB9LFx0XHRcclxuLy8gICAgICAgICB7J2lkX3Nlc3Npb24nIDogMixcclxuLy8gICAgICAgICAnbWV0ZXJzJzogMTQwMCwgXHJcbi8vICAgICAgICAgJ21pbnV0ZXMnIDogNjAsXHJcbi8vICAgICAnc3ByaW50cycgOiAyLCAgXHJcbi8vICAgICAnZGF0ZSc6ICcwMS0wNC0yMDIwJ1xyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICB7J2lkX3Nlc3Npb24nIDogMyxcclxuLy8gICAgICAgICAnbWV0ZXJzJzogMTQwMCwgXHJcbi8vICAgICAgICAgJ21pbnV0ZXMnIDogNjAsXHJcbi8vICAgICAnc3ByaW50cycgOiAyLCAgXHJcbi8vICAgICAnZGF0ZSc6ICcwMi0wNC0yMDIwJ1xyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICBdLFxyXG4vLyAgICAgJ3J1bm5pbmcnIDogW1xyXG4vLyAgICAgeydpZF9zZXNzaW9uJzoxLFxyXG4vLyAgICAgJ21ldGVycycgOiA0NTAwLFxyXG4vLyAgICAgJ2VsZXZhdGlvbicgOiA1MDAsXHJcbi8vICAgICAnZGF0ZSc6ICczMC0wMy0yMDIwJ1xyXG4vLyAgICAgfSxcclxuLy8gICAgIHsnaWRfc2Vzc2lvbic6MixcclxuLy8gICAgICdtZXRlcnMnIDogNTUwMCxcclxuLy8gICAgICdlbGV2YXRpb24nIDogMjAwLFxyXG4vLyAgICAgJ2RhdGUnOiAnMDEtMDQtMjAyMCdcclxuXHJcbi8vICAgICB9LFxyXG4vLyAgICAgeydpZF9zZXNzaW9uJzozLFxyXG4vLyAgICAgJ21ldGVycycgOiA2MDAwLFxyXG4vLyAgICAgJ2VsZXZhdGlvbicgOiA0MDAsXHJcbi8vICAgICAnZGF0ZSc6ICcwMi0wNC0yMDIwJ1xyXG4vLyAgICAgfSxcclxuLy8gXSxcclxuLy8gICAgICd3b3Jrb3V0JyA6IFtcclxuLy8gICAgIHsnaWRfc2Vzc2lvbic6MSxcclxuLy8gICAgICdkYXRlJyA6ICczMC0wMy0yMDIwJyxcclxuLy8gICAgICdzZXNzaW9uX2RhdGEnOiBbXHJcbi8vICAgICBdfSxcclxuLy8gICAgIHsnaWRfc2Vzc2lvbic6MixcclxuLy8gICAgICdkYXRlJyA6ICczMC0wMy0yMDIwJyxcclxuLy8gICAgICdzZXNzaW9uX2RhdGEnOiBbXHJcbi8vICAgICBdfSxcclxuLy8gICAgIHsnaWRfc2Vzc2lvbic6MyxcclxuLy8gICAgICdkYXRlJyA6ICczMC0wMy0yMDIwJyxcclxuLy8gICAgICdzZXNzaW9uX2RhdGEnOiBbXHJcbi8vICAgICBdfVxyXG4vLyBdLFxyXG4vLyAnY3ljbGluZycgOiBbXHJcbi8vICAgICB7J2lkX3Nlc3Npb24nOjEsXHJcbi8vICAgICAnbWV0ZXJzJyA6IDE1MDAwLFxyXG4vLyAgICAgJ2VsZXZhdGlvbic6IDIwMDAsXHJcbi8vICAgICAnZGF0ZSc6ICczMC0wMy0yMDIwJ1xyXG4vLyAgICAgfSxcclxuLy8gICAgIHsnaWRfc2Vzc2lvbic6MixcclxuLy8gICAgICdtZXRlcnMnIDogMTQwMDAsXHJcbi8vICAgICAnZWxldmF0aW9uJzogMjAwMCxcclxuLy8gICAgICdkYXRlJzogJzAxLTA0LTIwMjAnXHJcbi8vICAgICB9LFxyXG4vLyAgICAgeydpZF9zZXNzaW9uJzozLFxyXG4vLyAgICAgJ21ldGVycycgOiAxODAwMCxcclxuLy8gICAgICdlbGV2YXRpb24nOiAyMDAwLFxyXG4vLyAgICAgJ2RhdGUnOiAnMDItMDQtMjAyMCdcclxuLy8gICAgIH1cclxuLy8gXVxyXG4vLyB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gY29uc3QgY3ljbGluZ19kYXRhID0gcGVyZm9ybWFuY2VfZGF0YS5jeWNsaW5nXHJcblxyXG4vLyBleHBvcnQgbGV0IGxpc3RfbWV0ZXJzID0gW107XHJcbi8vIGV4cG9ydCBsZXQgbGlzdF9lbGV2YXRpb24gPSBbXTtcclxuLy8gZXhwb3J0IGxldCBsaXN0X2RhdGUgPSBbXTtcclxuXHJcbi8vIGN5Y2xpbmdfZGF0YS5mb3JFYWNoKHggPT4ge1xyXG4vLyAgICAgbGlzdF9tZXRlcnMucHVzaCh4Lm1ldGVycyk7XHJcbi8vICAgICBsaXN0X2RhdGUucHVzaCh4LmRhdGUpO1xyXG4vLyAgICAgbGlzdF9lbGV2YXRpb24ucHVzaCh4LmVsZXZhdGlvbik7XHJcbi8vIH0pXHJcblxyXG5cclxuLy8gY29uc3QgZGF0YXMgPSB7XHJcbi8vICAgICBsYWJlbHM6IGxpc3RfZGF0ZSxcclxuLy8gICAgIGRhdGFzZXRzOiBbe1xyXG4vLyAgICAgICAgIGxhYmVsOiAnTWV0ZXJzIGNvdmVyZWQnLFxyXG4vLyAgICAgICAgIGRhdGE6bGlzdF9tZXRlcnMsXHJcbi8vICAgICAgICAgLy8gYmFja2dyb3VuZENvbG9yOiBbXHJcbi8vICAgICAgICAgLy8gICAgICdyZ2JhKDI1NSwgOTksIDEzMiwgMC4yKScsXHJcbi8vICAgICAgICAgLy8gICAgICdyZ2JhKDU0LCAxNjIsIDIzNSwgMC4yKScsXHJcbi8vICAgICAgICAgLy8gICAgICdyZ2JhKDI1NSwgMjA2LCA4NiwgMC4yKScsXHJcbi8vICAgICAgICAgLy8gICAgICdyZ2JhKDc1LCAxOTIsIDE5MiwgMC4yKScsXHJcbi8vICAgICAgICAgLy8gICAgICdyZ2JhKDE1MywgMTAyLCAyNTUsIDAuMiknLFxyXG4vLyAgICAgICAgIC8vICAgICAncmdiYSgyNTUsIDE1OSwgNjQsIDAuMiknXHJcbi8vICAgICAgICAgLy8gXSxcclxuLy8gICAgICAgICAvLyBib3JkZXJDb2xvcjogW1xyXG4vLyAgICAgICAgIC8vICAgICAncmdiYSgyNTUsIDk5LCAxMzIsIDEpJyxcclxuLy8gICAgICAgICAvLyAgICAgJ3JnYmEoNTQsIDE2MiwgMjM1LCAxKScsXHJcbi8vICAgICAgICAgLy8gICAgICdyZ2JhKDI1NSwgMjA2LCA4NiwgMSknLFxyXG4vLyAgICAgICAgIC8vICAgICAncmdiYSg3NSwgMTkyLCAxOTIsIDEpJyxcclxuLy8gICAgICAgICAvLyAgICAgJ3JnYmEoMTUzLCAxMDIsIDI1NSwgMSknLFxyXG4vLyAgICAgICAgIC8vICAgICAncmdiYSgyNTUsIDE1OSwgNjQsIDEpJ1xyXG4vLyAgICAgICAgIC8vIF0sXHJcbi8vICAgICAgICAgYm9yZGVyV2lkdGg6IDFcclxuLy8gICAgIH1dXHJcbi8vIH1cclxuXHJcblxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgZGF0YXMiLCJpbXBvcnQge2luaXR9IGZyb20gJ0BsaWIvbW9uZ28nXHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldChyZXEsIHJlcykge1xyXG5cdFxyXG5cdGNvbnN0IHtkYn0gPSBhd2FpdCBpbml0KCk7XHJcblx0Y29uc3QgZGF0YV9yYXcgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwidXNlcjFfY29sbGVjdGlvblwiKS5maW5kKHtzcG9ydDonY3ljbGluZyd9KS50b0FycmF5KCk7XHJcblx0XHJcblxyXG5cclxuXHJcblx0cmVzLndyaXRlSGVhZCgyMDAsIHtcclxuXHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuXHR9KTtcclxuXHJcblx0cmVzLmVuZChKU09OLnN0cmluZ2lmeShkYXRhX3JhdykpO1xyXG5cclxuXHR9IiwiXHJcbi8vIGNvbnN0IHBlcmZvcm1hbmNlX2RhdGEgPSB7XHJcbi8vICAgICAnc3dpbW1pbmcnOiBbXHJcbi8vICAgICAgICAgeydpZF9zZXNzaW9uJyA6IDEsXHJcbi8vICAgICAgICAgJ21ldGVycyc6IDE1MDAsIFxyXG4vLyAgICAgICAgICdtaW51dGVzJyA6IDUwLFxyXG4vLyAgICAgJ3NwcmludCc6IDIsXHJcbi8vICAgICAnZGF0ZSc6ICczMC0wMy0yMDIwJ1xyXG4vLyAgICAgICAgIH0sXHRcdFxyXG4vLyAgICAgICAgIHsnaWRfc2Vzc2lvbicgOiAyLFxyXG4vLyAgICAgICAgICdtZXRlcnMnOiAxNDAwLCBcclxuLy8gICAgICAgICAnbWludXRlcycgOiA2MCxcclxuLy8gICAgICdzcHJpbnRzJyA6IDIsICBcclxuLy8gICAgICdkYXRlJzogJzAxLTA0LTIwMjAnXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgIHsnaWRfc2Vzc2lvbicgOiAzLFxyXG4vLyAgICAgICAgICdtZXRlcnMnOiAxNDAwLCBcclxuLy8gICAgICAgICAnbWludXRlcycgOiA2MCxcclxuLy8gICAgICdzcHJpbnRzJyA6IDIsICBcclxuLy8gICAgICdkYXRlJzogJzAyLTA0LTIwMjAnXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgIF0sXHJcbi8vICAgICAncnVubmluZycgOiBbXHJcbi8vICAgICB7J2lkX3Nlc3Npb24nOjEsXHJcbi8vICAgICAnbWV0ZXJzJyA6IDQ1MDAsXHJcbi8vICAgICAnZWxldmF0aW9uJyA6IDUwMCxcclxuLy8gICAgICdkYXRlJzogJzMwLTAzLTIwMjAnXHJcbi8vICAgICB9LFxyXG4vLyAgICAgeydpZF9zZXNzaW9uJzoyLFxyXG4vLyAgICAgJ21ldGVycycgOiA1NTAwLFxyXG4vLyAgICAgJ2VsZXZhdGlvbicgOiAyMDAsXHJcbi8vICAgICAnZGF0ZSc6ICcwMS0wNC0yMDIwJ1xyXG5cclxuLy8gICAgIH0sXHJcbi8vICAgICB7J2lkX3Nlc3Npb24nOjMsXHJcbi8vICAgICAnbWV0ZXJzJyA6IDYwMDAsXHJcbi8vICAgICAnZWxldmF0aW9uJyA6IDQwMCxcclxuLy8gICAgICdkYXRlJzogJzAyLTA0LTIwMjAnXHJcbi8vICAgICB9LFxyXG4vLyBdLFxyXG4vLyAgICAgJ3dvcmtvdXQnIDogW1xyXG4vLyAgICAgeydpZF9zZXNzaW9uJzoxLFxyXG4vLyAgICAgJ2RhdGUnIDogJzMwLTAzLTIwMjAnLFxyXG4vLyAgICAgJ3Nlc3Npb25fZGF0YSc6IFtcclxuLy8gICAgIF19LFxyXG4vLyAgICAgeydpZF9zZXNzaW9uJzoyLFxyXG4vLyAgICAgJ2RhdGUnIDogJzMwLTAzLTIwMjAnLFxyXG4vLyAgICAgJ3Nlc3Npb25fZGF0YSc6IFtcclxuLy8gICAgIF19LFxyXG4vLyAgICAgeydpZF9zZXNzaW9uJzozLFxyXG4vLyAgICAgJ2RhdGUnIDogJzMwLTAzLTIwMjAnLFxyXG4vLyAgICAgJ3Nlc3Npb25fZGF0YSc6IFtcclxuLy8gICAgIF19XHJcbi8vIF0sXHJcbi8vICdjeWNsaW5nJyA6IFtcclxuLy8gICAgIHsnaWRfc2Vzc2lvbic6MSxcclxuLy8gICAgICdtZXRlcnMnIDogMTUwMDAsXHJcbi8vICAgICAnZWxldmF0aW9uJzogMjAwMCxcclxuLy8gICAgICdkYXRlJzogJzMwLTAzLTIwMjAnXHJcbi8vICAgICB9LFxyXG4vLyAgICAgeydpZF9zZXNzaW9uJzoyLFxyXG4vLyAgICAgJ21ldGVycycgOiAxNDAwMCxcclxuLy8gICAgICdlbGV2YXRpb24nOiAyMDAwLFxyXG4vLyAgICAgJ2RhdGUnOiAnMDEtMDQtMjAyMCdcclxuLy8gICAgIH0sXHJcbi8vICAgICB7J2lkX3Nlc3Npb24nOjMsXHJcbi8vICAgICAnbWV0ZXJzJyA6IDE4MDAwLFxyXG4vLyAgICAgJ2VsZXZhdGlvbic6IDIwMDAsXHJcbi8vICAgICAnZGF0ZSc6ICcwMi0wNC0yMDIwJ1xyXG4vLyAgICAgfVxyXG4vLyBdXHJcbi8vIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBjb25zdCBjeWNsaW5nX2RhdGEgPSBwZXJmb3JtYW5jZV9kYXRhLmN5Y2xpbmdcclxuXHJcbi8vIGV4cG9ydCBsZXQgbGlzdF9tZXRlcnMgPSBbXTtcclxuLy8gZXhwb3J0IGxldCBsaXN0X2VsZXZhdGlvbiA9IFtdO1xyXG4vLyBleHBvcnQgbGV0IGxpc3RfZGF0ZSA9IFtdO1xyXG5cclxuLy8gY3ljbGluZ19kYXRhLmZvckVhY2goeCA9PiB7XHJcbi8vICAgICBsaXN0X21ldGVycy5wdXNoKHgubWV0ZXJzKTtcclxuLy8gICAgIGxpc3RfZGF0ZS5wdXNoKHguZGF0ZSk7XHJcbi8vICAgICBsaXN0X2VsZXZhdGlvbi5wdXNoKHguZWxldmF0aW9uKTtcclxuLy8gfSlcclxuXHJcblxyXG4vLyBjb25zdCBkYXRhcyA9IHtcclxuLy8gICAgIGxhYmVsczogbGlzdF9kYXRlLFxyXG4vLyAgICAgZGF0YXNldHM6IFt7XHJcbi8vICAgICAgICAgbGFiZWw6ICdNZXRlcnMgY292ZXJlZCcsXHJcbi8vICAgICAgICAgZGF0YTpsaXN0X21ldGVycyxcclxuLy8gICAgICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuLy8gICAgICAgICAvLyAgICAgJ3JnYmEoMjU1LCA5OSwgMTMyLCAwLjIpJyxcclxuLy8gICAgICAgICAvLyAgICAgJ3JnYmEoNTQsIDE2MiwgMjM1LCAwLjIpJyxcclxuLy8gICAgICAgICAvLyAgICAgJ3JnYmEoMjU1LCAyMDYsIDg2LCAwLjIpJyxcclxuLy8gICAgICAgICAvLyAgICAgJ3JnYmEoNzUsIDE5MiwgMTkyLCAwLjIpJyxcclxuLy8gICAgICAgICAvLyAgICAgJ3JnYmEoMTUzLCAxMDIsIDI1NSwgMC4yKScsXHJcbi8vICAgICAgICAgLy8gICAgICdyZ2JhKDI1NSwgMTU5LCA2NCwgMC4yKSdcclxuLy8gICAgICAgICAvLyBdLFxyXG4vLyAgICAgICAgIC8vIGJvcmRlckNvbG9yOiBbXHJcbi8vICAgICAgICAgLy8gICAgICdyZ2JhKDI1NSwgOTksIDEzMiwgMSknLFxyXG4vLyAgICAgICAgIC8vICAgICAncmdiYSg1NCwgMTYyLCAyMzUsIDEpJyxcclxuLy8gICAgICAgICAvLyAgICAgJ3JnYmEoMjU1LCAyMDYsIDg2LCAxKScsXHJcbi8vICAgICAgICAgLy8gICAgICdyZ2JhKDc1LCAxOTIsIDE5MiwgMSknLFxyXG4vLyAgICAgICAgIC8vICAgICAncmdiYSgxNTMsIDEwMiwgMjU1LCAxKScsXHJcbi8vICAgICAgICAgLy8gICAgICdyZ2JhKDI1NSwgMTU5LCA2NCwgMSknXHJcbi8vICAgICAgICAgLy8gXSxcclxuLy8gICAgICAgICBib3JkZXJXaWR0aDogMVxyXG4vLyAgICAgfV1cclxuLy8gfVxyXG5cclxuXHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBkYXRhcyIsImltcG9ydCB7aW5pdH0gZnJvbSAnQGxpYi9tb25nbydcclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0KHJlcSwgcmVzKSB7XHJcblx0XHJcblx0Y29uc3Qge2RifSA9IGF3YWl0IGluaXQoKTtcclxuXHRjb25zdCBkYXRhX3JhdyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJ1c2VyMV9jb2xsZWN0aW9uXCIpLmZpbmQoe3Nwb3J0OidydW5uaW5nJ30pLnRvQXJyYXkoKTtcclxuXHRcclxuXHRyZXMud3JpdGVIZWFkKDIwMCwge1xyXG5cdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG5cdH0pO1xyXG5cclxuXHRyZXMuZW5kKEpTT04uc3RyaW5naWZ5KGRhdGFfcmF3KSk7XHJcblx0fSIsIlxyXG5cclxuLy8gY29uc3QgdXNlcl9saXN0ID0gW1xyXG4vLyAgICAge1wibmFtZVwiIDogJ1VzZXIxJyxcclxuLy8gICAgIFwicGFzc3dvcmRcIiA6IFwicGFzc3dvcmQxXCIsXHJcbi8vICAgICAnVXNlcklkJyA6IDF9LFxyXG4vLyAgICAge1wibmFtZVwiIDogJ1VzZXIyJyxcclxuLy8gICAgIFwicGFzc3dvcmRcIiA6IFwicGFzc3dvcmQyXCJcclxuLy8gICAgICdVc2VySWQnIDogMn0sXHJcbi8vICAgICB7XCJuYW1lXCIgOiAnVXNlcjMnLFxyXG4vLyAgICAgXCJwYXNzd29yZFwiIDogXCJwYXNzd29yZDNcIixcclxuLy8gICAgICdVc2VySWQnIDogM30sXHJcbi8vICAgICB7XCJuYW1lXCIgOiAnVXNlcjQnLFxyXG4vLyAgICAgXCJwYXNzd29yZFwiIDogXCJwYXNzd29yZDRcIixcclxuLy8gICAgICdVc2VySWQnIDogNH0sXHJcbi8vICAgICB7XCJuYW1lXCIgOiAnVXNlcjUnLFxyXG4vLyAgICAgXCJwYXNzd29yZFwiIDogXCJwYXNzd29yZDVcIixcclxuLy8gICAgICdVc2VySWQnIDogNX0sXHJcbi8vICAgICB7XCJuYW1lXCIgOiAnVXNlcjYnLFxyXG4vLyAgICAgXCJwYXNzd29yZFwiIDogXCJwYXNzd29yZDZcIixcclxuLy8gICAgICdVc2VySWQnIDogNn0sXHJcbi8vICAgICB7XCJuYW1lXCIgOiAnVXNlcjcnLFxyXG4vLyAgICAgXCJwYXNzd29yZFwiIDogXCJwYXNzd29yZDdcIixcclxuLy8gICAgICdVc2VySWQnIDogN31dXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IGV4ZXJjaXNlX2xpc3QgPSBbXHJcbiAgICB7J3Nwb3J0JzogJ3N3aW1taW5nJywgXHJcbiAgICAnaW1nX3NyYycgOiAnJyxcclxuICAgICdmZWF0dXJlcyc6WydpZF9zZXNzaW9uJywgJ21ldGVycycsICdtaW51dGVzJywgJ3NwcmludHMnLCAnZGF0ZSddfSxcclxuICAgIHsnc3BvcnQnOiAncnVubmluZycsIFxyXG4gICAgJ2ltZ19zcmMnOiAnJyxcclxuICAgICdmZWF0dXJlcyc6WydpZF9zZXNzaW9uJywgJ21ldGVycycsICdtaW51dGVzJywgJ3NwcmludHMnLCAnZGF0ZSddfSxcclxuICAgIHsnc3BvcnQnOiAnY3ljbGluZycsIFxyXG4gICAgJ2ltZ19zcmMnOiAnJyxcclxuICAgICdmZWF0dXJlcyc6WydpZF9zZXNzaW9uJywgJ21ldGVycycsICdtaW51dGVzJywgJ3NwcmludHMnLCAnZGF0ZSddfSxcclxuICAgIHsnc3BvcnQnOiAnd29ya291dCcsIFxyXG4gICAgJ2ltZ19zcmMnOiAnJyxcclxuICAgICdmZWF0dXJlcyc6WydpZF9zZXNzaW9uJywgJ3Nlc3Npb25fZGF0YScsICdkYXRlJ119LFxyXG4gIF1cclxuXHJcbmNvbnN0IHdvcmtvdXRfZXhlcmNpc2VfbGlzdCA9IFtcclxuJycsICcnLCAnJ1xyXG5dXHJcblxyXG5cclxuXHJcbmNvbnN0IHBlcmZfdXNlcjEgPSBbe1xyXG4gICAgJ3Nwb3J0JyA6ICdzd2ltbWluZycsXHJcbiAgICAnaWRfc2Vzc2lvbicgOiAxLFxyXG4gICAgJ2RhdGUnIDogJzMwLTAzLTIwMjAnLFxyXG4gICAgJ21ldGVycycgOiAxNTAwLFxyXG4gICAgJ21pbnV0ZXMnIDogNjAsXHJcbiAgICAnbmJfc3ByaW50JyA6IDNcclxufSx7XHJcbiAgICAnc3BvcnQnIDogJ3N3aW1taW5nJyxcclxuICAgICdpZF9zZXNzaW9uJyA6IDIsXHJcbiAgICAnZGF0ZScgOiAnMDEtMDQtMjAyMCcsXHJcbiAgICAnbWV0ZXJzJyA6IDE2MDAsXHJcbiAgICAnbWludXRlcycgOiA1MSxcclxuICAgICduYl9zcHJpbnQnIDogM1xyXG59LHtcclxuICAgICdzcG9ydCcgOiAnc3dpbW1pbmcnLFxyXG4gICAgJ2lkX3Nlc3Npb24nIDogMyxcclxuICAgICdkYXRlJyA6IFwiMDItMDQtMjAyMFwiLFxyXG4gICAgJ21ldGVycycgOiAxNTAwLFxyXG4gICAgJ21pbnV0ZXMnIDogNTQsXHJcbiAgICAnbmJfc3ByaW50JyA6IDRcclxufSx7XHJcbiAgICAnc3BvcnQnIDogJ3N3aW1taW5nJyxcclxuICAgICdpZF9zZXNzaW9uJyA6IDQsXHJcbiAgICAnZGF0ZScgOiAnMDMtMDQtMjAyMCcsXHJcbiAgICAnbWV0ZXJzJyA6IDE3MDAsXHJcbiAgICAnbWludXRlcycgOiA3MCxcclxuICAgICduYl9zcHJpbnQnIDogM1xyXG59LHtcclxuICAgICdzcG9ydCcgOiAnc3dpbW1pbmcnLFxyXG4gICAgJ2lkX3Nlc3Npb24nIDogNSxcclxuICAgICdkYXRlJyA6IFwiMDUtMDQtMjAyMFwiLFxyXG4gICAgJ21ldGVycycgOiAxMjAwLFxyXG4gICAgJ21pbnV0ZXMnIDogNDAsXHJcbiAgICAnbmJfc3ByaW50JyA6IDJcclxufSx7XHJcbiAgICAnc3BvcnQnIDogJ3N3aW1taW5nJyxcclxuICAgICdpZF9zZXNzaW9uJyA6IDYsXHJcbiAgICAnZGF0ZScgOiBcIjA3LTA0LTIwMjBcIixcclxuICAgICdtZXRlcnMnIDogMTQwMCxcclxuICAgICdtaW51dGVzJyA6IDUwLFxyXG4gICAgJ25iX3NwcmludCcgOiAzXHJcbn1cclxuXHJcbl1cclxuXHJcblxyXG5jb25zdCBwZXJmX1VzZXJJZCA9IFxyXG4gICAgeydzd2ltbWluZyc6IFtcclxuICAgICAgICB7J2lkX3Nlc3Npb24nIDogMSxcclxuICAgICAgICAnbWV0ZXJzJzogMTUwMCwgXHJcbiAgICAgICAgJ21pbnV0ZXMnIDogNTAsXHJcbiAgICAnc3ByaW50JzogMixcclxuICAgICdkYXRlJzogJzMwLTAzLTIwMjAnXHJcbiAgICAgICAgfSxcdFx0XHJcbiAgICAgICAgeydpZF9zZXNzaW9uJyA6IDIsXHJcbiAgICAgICAgJ21ldGVycyc6IDE0MDAsIFxyXG4gICAgICAgICdtaW51dGVzJyA6IDYwLFxyXG4gICAgJ3NwcmludHMnIDogMiwgIFxyXG4gICAgJ2RhdGUnOiAnMDEtMDQtMjAyMCdcclxuICAgICAgICB9LFxyXG4gICAgeydpZF9zZXNzaW9uJyA6IDMsXHJcbiAgICAgICAgJ21ldGVycyc6IDE0MDAsIFxyXG4gICAgICAgICdtaW51dGVzJyA6IDYwLFxyXG4gICAgJ3NwcmludHMnIDogMiwgIFxyXG4gICAgJ2RhdGUnOiAnMDItMDQtMjAyMCdcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxuICAgICdydW5uaW5nJyA6IFtcclxuICAgIHsnaWRfc2Vzc2lvbic6MSxcclxuICAgICdtZXRlcnMnIDogNDUwMCxcclxuICAgICdlbGV2YXRpb24nIDogNTAwLFxyXG4gICAgJ2RhdGUnOiAnMzAtMDMtMjAyMCdcclxuICAgIH0sXHJcbiAgICB7J2lkX3Nlc3Npb24nOjIsXHJcbiAgICAnbWV0ZXJzJyA6IDU1MDAsXHJcbiAgICAnZWxldmF0aW9uJyA6IDIwMCxcclxuICAgICdkYXRlJzogJzAxLTA0LTIwMjAnXHJcblxyXG4gICAgfSxcclxuICAgIHsnaWRfc2Vzc2lvbic6MyxcclxuICAgICdtZXRlcnMnIDogNjAwMCxcclxuICAgICdlbGV2YXRpb24nIDogNDAwLFxyXG4gICAgJ2RhdGUnOiAnMDItMDQtMjAyMCdcclxuICAgIH0sXHJcbl0sXHJcbiAgICAnd29ya291dCcgOiBbXHJcbiAgICB7J2lkX3Nlc3Npb24nOjEsXHJcbiAgICAnZGF0ZScgOiAnMzAtMDMtMjAyMCcsXHJcbiAgICAnc2Vzc2lvbl9kYXRhJzogW1xyXG4gICAgXX0sXHJcbiAgICB7J2lkX3Nlc3Npb24nOjIsXHJcbiAgICAnZGF0ZScgOiAnMzAtMDMtMjAyMCcsXHJcbiAgICAnc2Vzc2lvbl9kYXRhJzogW1xyXG4gICAgXX0sXHJcbiAgICB7J2lkX3Nlc3Npb24nOjMsXHJcbiAgICAnZGF0ZScgOiAnMzAtMDMtMjAyMCcsXHJcbiAgICAnc2Vzc2lvbl9kYXRhJzogW1xyXG4gICAgXX1cclxuXSxcclxuJ2N5Y2xpbmcnIDogW1xyXG4gICAgeydpZF9zZXNzaW9uJzoxLFxyXG4gICAgJ21ldGVycycgOiAxNTAwMCxcclxuICAgICdlbGV2YXRpb24nOiAyMDAwLFxyXG4gICAgJ2RhdGUnOiAnMzAtMDMtMjAyMCdcclxuICAgIH0sXHJcbiAgICB7J2lkX3Nlc3Npb24nOjIsXHJcbiAgICAnbWV0ZXJzJyA6IDE0MDAwLFxyXG4gICAgJ2VsZXZhdGlvbic6IDIwMDAsXHJcbiAgICAnZGF0ZSc6ICcwMS0wNC0yMDIwJ1xyXG4gICAgfSxcclxuICAgIHsnaWRfc2Vzc2lvbic6NCxcclxuICAgICdtZXRlcnMnIDogMTgwMDAsXHJcbiAgICAnZWxldmF0aW9uJzogMjAwMCxcclxuICAgICdkYXRlJzogJzAyLTA0LTIwMjAnXHJcbiAgICB9XX1cclxuXHJcblxyXG5jb25zdCBwZXJmb3JtYW5jZV9kYXRhID0gW1xyXG4gICAgeyd1c2VyJyA6ICdVc2VyMScsXHJcbiAgICAnc3dpbW1pbmcnOiBbXHJcbiAgICAgICAgeydpZF9zZXNzaW9uJyA6IDEsXHJcbiAgICAgICAgJ21ldGVycyc6IDE1MDAsIFxyXG4gICAgICAgICdtaW51dGVzJyA6IDUwLFxyXG4gICAgJ3NwcmludCc6IDIsXHJcbiAgICAnZGF0ZSc6ICczMC0wMy0yMDIwJ1xyXG4gICAgICAgIH0sXHRcdFxyXG4gICAgICAgIHsnaWRfc2Vzc2lvbicgOiAyLFxyXG4gICAgICAgICdtZXRlcnMnOiAxNDAwLCBcclxuICAgICAgICAnbWludXRlcycgOiA2MCxcclxuICAgICdzcHJpbnRzJyA6IDIsICBcclxuICAgICdkYXRlJzogJzAxLTA0LTIwMjAnXHJcbiAgICAgICAgfSxcclxuICAgIHsnaWRfc2Vzc2lvbicgOiAzLFxyXG4gICAgICAgICdtZXRlcnMnOiAxNDAwLCBcclxuICAgICAgICAnbWludXRlcycgOiA2MCxcclxuICAgICdzcHJpbnRzJyA6IDIsICBcclxuICAgICdkYXRlJzogJzAyLTA0LTIwMjAnXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICAncnVubmluZycgOiBbXHJcbiAgICB7J2lkX3Nlc3Npb24nOjEsXHJcbiAgICAnbWV0ZXJzJyA6IDQ1MDAsXHJcbiAgICAnZWxldmF0aW9uJyA6IDUwMCxcclxuICAgICdkYXRlJzogJzMwLTAzLTIwMjAnXHJcbiAgICB9LFxyXG4gICAgeydpZF9zZXNzaW9uJzoyLFxyXG4gICAgJ21ldGVycycgOiA1NTAwLFxyXG4gICAgJ2VsZXZhdGlvbicgOiAyMDAsXHJcbiAgICAnZGF0ZSc6ICcwMS0wNC0yMDIwJ1xyXG5cclxuICAgIH0sXHJcbiAgICB7J2lkX3Nlc3Npb24nOjMsXHJcbiAgICAnbWV0ZXJzJyA6IDYwMDAsXHJcbiAgICAnZWxldmF0aW9uJyA6IDQwMCxcclxuICAgICdkYXRlJzogJzAyLTA0LTIwMjAnXHJcbiAgICB9LFxyXG5dLFxyXG4gICAgJ3dvcmtvdXQnIDogW1xyXG4gICAgeydpZF9zZXNzaW9uJzoxLFxyXG4gICAgJ2RhdGUnIDogJzMwLTAzLTIwMjAnLFxyXG4gICAgJ3Nlc3Npb25fZGF0YSc6IFtcclxuICAgIF19LFxyXG4gICAgeydpZF9zZXNzaW9uJzoyLFxyXG4gICAgJ2RhdGUnIDogJzMwLTAzLTIwMjAnLFxyXG4gICAgJ3Nlc3Npb25fZGF0YSc6IFtcclxuICAgIF19LFxyXG4gICAgeydpZF9zZXNzaW9uJzozLFxyXG4gICAgJ2RhdGUnIDogJzMwLTAzLTIwMjAnLFxyXG4gICAgJ3Nlc3Npb25fZGF0YSc6IFtcclxuICAgIF19XHJcbl0sXHJcbidjeWNsaW5nJyA6IFtcclxuICAgIHsnaWRfc2Vzc2lvbic6MSxcclxuICAgICdtZXRlcnMnIDogMTUwMDAsXHJcbiAgICAnZWxldmF0aW9uJzogMjAwMCxcclxuICAgICdkYXRlJzogJzMwLTAzLTIwMjAnXHJcbiAgICB9LFxyXG4gICAgeydpZF9zZXNzaW9uJzoyLFxyXG4gICAgJ21ldGVycycgOiAxNDAwMCxcclxuICAgICdlbGV2YXRpb24nOiAyMDAwLFxyXG4gICAgJ2RhdGUnOiAnMDEtMDQtMjAyMCdcclxuICAgIH0sXHJcbiAgICB7J2lkX3Nlc3Npb24nOjQsXHJcbiAgICAnbWV0ZXJzJyA6IDE4MDAwLFxyXG4gICAgJ2VsZXZhdGlvbic6IDIwMDAsXHJcbiAgICAnZGF0ZSc6ICcwMi0wNC0yMDIwJ1xyXG4gICAgfV19LFxyXG5cclxuXVxyXG5cclxuZnVuY3Rpb24gZ2V0UGVyZm9ybWFuY2VEYXRhKCl7XHJcbnJldHVybiBwZXJmb3JtYW5jZV9kYXRhXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEV4ZXJjaXNlTGlzdCgpe1xyXG5yZXR1cm4gZXhlcmNpc2VfbGlzdFxyXG59XHJcblxyXG4vL2NvbnNvbGUubG9nKGdldFBlcmZvcm1hbmNlRGF0YSgpKVxyXG4vL2NvbnNvbGUubG9nKGdldEV4ZXJjaXNlTGlzdCgpKVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjaGVja0FsbElucHV0UHJvdmlkZWQoc3BvcnQsIGxpc3RPZklucHV0cyl7XHJcbmV4ZXJjaXNlX2xpc3QgPSBnZXRFeGVyY2lzZUxpc3QoKVxyXG4vLyBGaW5kIHJpZ2h0IHNwb3J0IGRhdGFcclxubmVjZXNzYXJ5X2lucHV0ID0gZXhlcmNpc2VfbGlzdC5maWx0ZXIoZWwgPT4gZWxbJ3Nwb3J0J10gPT0gc3BvcnQpWzBdXHJcbm5lY2Vzc2FyeV9pbnB1dCA9IG5lY2Vzc2FyeV9pbnB1dC5mZWF0dXJlc1xyXG4vLyBEb250IG5lZWQgdG8gY2hlY2sgZm9yIGlkX3Nlc3Npb25cclxuaW5kZXggPSBuZWNlc3NhcnlfaW5wdXQuaW5kZXhPZignaWRfc2Vzc2lvbicpXHJcbm5lY2Vzc2FyeV9pbnB1dC5zcGxpY2UoaW5kZXgsIDEpXHJcbi8vY29uc29sZS5sb2cobGlzdE9mSW5wdXRzKVxyXG5naXZlbnBhcmFtID0gW11cclxubGlzdE9mSW5wdXRzLmZvckVhY2goZWwgPT4gZ2l2ZW5wYXJhbS5wdXNoKGVsLnBhcmFtKSlcclxuaWYgKG5lY2Vzc2FyeV9pbnB1dC5ldmVyeShlbCA9PiBnaXZlbnBhcmFtLmluY2x1ZGVzKGVsKSkpe1xyXG4gICAgcmV0dXJuIHRydWVcclxufVxyXG5lbHNlIHJldHVybiBuZWNlc3NhcnlfaW5wdXRcclxufVxyXG5cclxuLypcclxuY29uc29sZS5sb2coY2hlY2tBbGxJbnB1dFByb3ZpZGVkKCdzd2ltbWluZycsIFt7J3BhcmFtJzogJ2lkX3Nlc3Npb24nLCAndmFsdWUnIDogNH0sIHsncGFyYW0nOiAnbWV0ZXJzJywgJ3ZhbHVlJyA6IDR9XSkpXHJcblxyXG5jb25zb2xlLmxvZyhjaGVja0FsbElucHV0UHJvdmlkZWQoJ3N3aW1taW5nJywgW3sncGFyYW0nOiAnaWRfc2Vzc2lvbicsICd2YWx1ZScgOiA0fSwgeydwYXJhbSc6ICdtZXRlcnMnLCAndmFsdWUnIDogNH0sIHsncGFyYW0nOiAnbWludXRlcycsICd2YWx1ZScgOiA0fSwgeydwYXJhbSc6ICdzcHJpbnRzJywgJ3ZhbHVlJyA6IDR9LCB7J3BhcmFtJzogJ2RhdGUnLCAndmFsdWUnIDogNH1dKSkgXHJcbiovXHJcblxyXG5cclxuZnVuY3Rpb24gbmV3U2Vzc2lvbihzcG9ydCwgbGlzdE9mSW5wdXRzKXsgXHJcbmNoZWNrID0gY2hlY2tBbGxJbnB1dFByb3ZpZGVkKHNwb3J0LCBsaXN0T2ZJbnB1dHMpXHJcbmlmIChjaGVjayA9PSB0cnVlKXtcclxuICAgIGRpY3QgPSB7fVxyXG4gICAgbGlzdE9mSW5wdXRzLmZvckVhY2goZWwgPT4gZGljdFtlbC5wYXJhbV0gPSBlbC52YWx1ZSlcclxuICAgIHBlcmZvcm1hbmNlX2RhdGFbc3BvcnRdLnB1c2goZGljdClcclxuICAgIHJldHVybiAnQWRkZWQgbmV3IHNlc3Npb24gc3VjY2Vzc2Z1bGx5J1xyXG59XHJcbmVsc2V7XHJcbiAgICByZXR1cm4gYFNvbWUgYXJndW1lbnRzIGFyZSBtaXNzaW5nIHRvIGFkZCBuZXcgc2Vzc2lvbiBmb3IgJHtzcG9ydH06ICR7Y2hlY2t9YFxyXG59XHJcbn1cclxuXHJcbi8qXHJcbmNvbnNvbGUubG9nKG5ld1Nlc3Npb24oJ3N3aW1taW5nJywgW3sncGFyYW0nOiAnaWRfc2Vzc2lvbicsICd2YWx1ZScgOiA0fSwgeydwYXJhbSc6ICdtZXRlcnMnLCAndmFsdWUnIDogNH1dKSlcclxuXHJcbmNvbnNvbGUubG9nKG5ld1Nlc3Npb24oJ3N3aW1taW5nJywgW3sncGFyYW0nOiAnaWRfc2Vzc2lvbicsICd2YWx1ZScgOiA0fSwgeydwYXJhbSc6ICdtZXRlcnMnLCAndmFsdWUnIDogNH0sIHsncGFyYW0nOiAnbWludXRlcycsICd2YWx1ZScgOiA0fSwgeydwYXJhbSc6ICdzcHJpbnRzJywgJ3ZhbHVlJyA6IDR9LCB7J3BhcmFtJzogJ2RhdGUnLCAndmFsdWUnIDogNH1dKSlcclxuXHJcbmNvbnNvbGUubG9nKHBlcmZvcm1hbmNlX2RhdGEpXHJcbiovXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZEN1c3RvbVNwb3J0KHNwb3J0LCAuLi5hcmdzKXtcclxucmV0dXJuICd5ZWFoIG91dHB1dCdcclxufVxyXG5cclxuXHJcbi8qXHJcblxyXG5cclxuZnVuY3Rpb24gYWRkQ3VzdG9tRXhlcmNpc2Uoc3BvcnQsIC4uLmFyZ3Mpe1xyXG5cclxufVxyXG5cclxuXHJcbiovXHJcblxyXG5cclxuXHJcblxyXG5jb25zb2xlLmxvZygnZXZlcnl0aGluZyB3b3JraW5nJylcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGVzdChzdHJpbmcpe1xyXG4gICAgcmV0dXJuIHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7YWRkQ3VzdG9tU3BvcnQsIHRlc3R9IiwiaW1wb3J0IHtpbml0fSBmcm9tICdAbGliL21vbmdvJ1xyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXQocmVxLCByZXMpIHtcclxuXHRcclxuXHRjb25zdCB7ZGJ9ID0gYXdhaXQgaW5pdCgpO1xyXG5cdGNvbnN0IHBvc3RzID0gYXdhaXQgZGIuY29sbGVjdGlvbihcInRlc3QyX2NvbGxlY3Rpb25cIikuZmluZCh7fSkudG9BcnJheSgpO1xyXG5cdFxyXG5cdHJlcy53cml0ZUhlYWQoMjAwLCB7XHJcblx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcblx0fSk7XHJcblxyXG5cdHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkocG9zdHMpKTtcclxuXHRjb25zb2xlLmxvZygncG9zdHMnKVxyXG5cdGNvbnNvbGUubG9nKHBvc3RzKVxyXG59IiwiLy9pbXBvcnQgcG9zdHMgZnJvbSAnLi9fcG9zdHMuanMnO1xyXG5pbXBvcnQge2luaXR9IGZyb20gJ0BsaWIvbW9uZ28nO1xyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXQocmVxLCByZXMsIG5leHQpIHtcclxuXHQvLyB0aGUgYHNsdWdgIHBhcmFtZXRlciBpcyBhdmFpbGFibGUgYmVjYXVzZVxyXG5cdC8vIHRoaXMgZmlsZSBpcyBjYWxsZWQgW3NsdWddLmpzb24uanNcclxuXHRjb25zdCB7IHNsdWcgfSA9IHJlcS5wYXJhbXM7XHJcblx0Y29uc3Qge2RifSA9IGF3YWl0IGluaXQoKTtcclxuXHRjb25zdCBwb3N0ID0gYXdhaXQgZGIuY29sbGVjdGlvbihcInRlc3QyX2NvbGxlY3Rpb25cIikuZmluZE9uZSgge3NsdWd9KVxyXG5cdGlmIChwb3N0KSB7XHJcblx0XHRyZXMud3JpdGVIZWFkKDIwMCwge1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXMuZW5kKEpTT04uc3RyaW5naWZ5KHBvc3QpKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmVzLndyaXRlSGVhZCg0MDQsIHtcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmVzLmVuZChKU09OLnN0cmluZ2lmeSh7XHJcblx0XHRcdG1lc3NhZ2U6IGBOb3QgZm91bmRgXHJcblx0XHR9KSk7XHJcblx0fVxyXG59XHJcbiIsImZ1bmN0aW9uIG5vb3AoKSB7IH1cbmNvbnN0IGlkZW50aXR5ID0geCA9PiB4O1xuZnVuY3Rpb24gYXNzaWduKHRhciwgc3JjKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGZvciAoY29uc3QgayBpbiBzcmMpXG4gICAgICAgIHRhcltrXSA9IHNyY1trXTtcbiAgICByZXR1cm4gdGFyO1xufVxuZnVuY3Rpb24gaXNfcHJvbWlzZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gYWRkX2xvY2F0aW9uKGVsZW1lbnQsIGZpbGUsIGxpbmUsIGNvbHVtbiwgY2hhcikge1xuICAgIGVsZW1lbnQuX19zdmVsdGVfbWV0YSA9IHtcbiAgICAgICAgbG9jOiB7IGZpbGUsIGxpbmUsIGNvbHVtbiwgY2hhciB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJ1bihmbikge1xuICAgIHJldHVybiBmbigpO1xufVxuZnVuY3Rpb24gYmxhbmtfb2JqZWN0KCkge1xuICAgIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwpO1xufVxuZnVuY3Rpb24gcnVuX2FsbChmbnMpIHtcbiAgICBmbnMuZm9yRWFjaChydW4pO1xufVxuZnVuY3Rpb24gaXNfZnVuY3Rpb24odGhpbmcpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gc2FmZV9ub3RfZXF1YWwoYSwgYikge1xuICAgIHJldHVybiBhICE9IGEgPyBiID09IGIgOiBhICE9PSBiIHx8ICgoYSAmJiB0eXBlb2YgYSA9PT0gJ29iamVjdCcpIHx8IHR5cGVvZiBhID09PSAnZnVuY3Rpb24nKTtcbn1cbmZ1bmN0aW9uIG5vdF9lcXVhbChhLCBiKSB7XG4gICAgcmV0dXJuIGEgIT0gYSA/IGIgPT0gYiA6IGEgIT09IGI7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZV9zdG9yZShzdG9yZSwgbmFtZSkge1xuICAgIGlmIChzdG9yZSAhPSBudWxsICYmIHR5cGVvZiBzdG9yZS5zdWJzY3JpYmUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAnJHtuYW1lfScgaXMgbm90IGEgc3RvcmUgd2l0aCBhICdzdWJzY3JpYmUnIG1ldGhvZGApO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHN1YnNjcmliZShzdG9yZSwgLi4uY2FsbGJhY2tzKSB7XG4gICAgaWYgKHN0b3JlID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG5vb3A7XG4gICAgfVxuICAgIGNvbnN0IHVuc3ViID0gc3RvcmUuc3Vic2NyaWJlKC4uLmNhbGxiYWNrcyk7XG4gICAgcmV0dXJuIHVuc3ViLnVuc3Vic2NyaWJlID8gKCkgPT4gdW5zdWIudW5zdWJzY3JpYmUoKSA6IHVuc3ViO1xufVxuZnVuY3Rpb24gZ2V0X3N0b3JlX3ZhbHVlKHN0b3JlKSB7XG4gICAgbGV0IHZhbHVlO1xuICAgIHN1YnNjcmliZShzdG9yZSwgXyA9PiB2YWx1ZSA9IF8pKCk7XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gY29tcG9uZW50X3N1YnNjcmliZShjb21wb25lbnQsIHN0b3JlLCBjYWxsYmFjaykge1xuICAgIGNvbXBvbmVudC4kJC5vbl9kZXN0cm95LnB1c2goc3Vic2NyaWJlKHN0b3JlLCBjYWxsYmFjaykpO1xufVxuZnVuY3Rpb24gY3JlYXRlX3Nsb3QoZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBmbikge1xuICAgIGlmIChkZWZpbml0aW9uKSB7XG4gICAgICAgIGNvbnN0IHNsb3RfY3R4ID0gZ2V0X3Nsb3RfY29udGV4dChkZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGZuKTtcbiAgICAgICAgcmV0dXJuIGRlZmluaXRpb25bMF0oc2xvdF9jdHgpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldF9zbG90X2NvbnRleHQoZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBmbikge1xuICAgIHJldHVybiBkZWZpbml0aW9uWzFdICYmIGZuXG4gICAgICAgID8gYXNzaWduKCQkc2NvcGUuY3R4LnNsaWNlKCksIGRlZmluaXRpb25bMV0oZm4oY3R4KSkpXG4gICAgICAgIDogJCRzY29wZS5jdHg7XG59XG5mdW5jdGlvbiBnZXRfc2xvdF9jaGFuZ2VzKGRlZmluaXRpb24sICQkc2NvcGUsIGRpcnR5LCBmbikge1xuICAgIGlmIChkZWZpbml0aW9uWzJdICYmIGZuKSB7XG4gICAgICAgIGNvbnN0IGxldHMgPSBkZWZpbml0aW9uWzJdKGZuKGRpcnR5KSk7XG4gICAgICAgIGlmICgkJHNjb3BlLmRpcnR5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBsZXRzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbGV0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lcmdlZCA9IFtdO1xuICAgICAgICAgICAgY29uc3QgbGVuID0gTWF0aC5tYXgoJCRzY29wZS5kaXJ0eS5sZW5ndGgsIGxldHMubGVuZ3RoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBtZXJnZWRbaV0gPSAkJHNjb3BlLmRpcnR5W2ldIHwgbGV0c1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtZXJnZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICQkc2NvcGUuZGlydHkgfCBsZXRzO1xuICAgIH1cbiAgICByZXR1cm4gJCRzY29wZS5kaXJ0eTtcbn1cbmZ1bmN0aW9uIGV4Y2x1ZGVfaW50ZXJuYWxfcHJvcHMocHJvcHMpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGsgaW4gcHJvcHMpXG4gICAgICAgIGlmIChrWzBdICE9PSAnJCcpXG4gICAgICAgICAgICByZXN1bHRba10gPSBwcm9wc1trXTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gY29tcHV0ZV9yZXN0X3Byb3BzKHByb3BzLCBrZXlzKSB7XG4gICAgY29uc3QgcmVzdCA9IHt9O1xuICAgIGtleXMgPSBuZXcgU2V0KGtleXMpO1xuICAgIGZvciAoY29uc3QgayBpbiBwcm9wcylcbiAgICAgICAgaWYgKCFrZXlzLmhhcyhrKSAmJiBrWzBdICE9PSAnJCcpXG4gICAgICAgICAgICByZXN0W2tdID0gcHJvcHNba107XG4gICAgcmV0dXJuIHJlc3Q7XG59XG5mdW5jdGlvbiBvbmNlKGZuKSB7XG4gICAgbGV0IHJhbiA9IGZhbHNlO1xuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICBpZiAocmFuKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICByYW4gPSB0cnVlO1xuICAgICAgICBmbi5jYWxsKHRoaXMsIC4uLmFyZ3MpO1xuICAgIH07XG59XG5mdW5jdGlvbiBudWxsX3RvX2VtcHR5KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xufVxuZnVuY3Rpb24gc2V0X3N0b3JlX3ZhbHVlKHN0b3JlLCByZXQsIHZhbHVlID0gcmV0KSB7XG4gICAgc3RvcmUuc2V0KHZhbHVlKTtcbiAgICByZXR1cm4gcmV0O1xufVxuY29uc3QgaGFzX3Byb3AgPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbmZ1bmN0aW9uIGFjdGlvbl9kZXN0cm95ZXIoYWN0aW9uX3Jlc3VsdCkge1xuICAgIHJldHVybiBhY3Rpb25fcmVzdWx0ICYmIGlzX2Z1bmN0aW9uKGFjdGlvbl9yZXN1bHQuZGVzdHJveSkgPyBhY3Rpb25fcmVzdWx0LmRlc3Ryb3kgOiBub29wO1xufVxuXG5jb25zdCBpc19jbGllbnQgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbmxldCBub3cgPSBpc19jbGllbnRcbiAgICA/ICgpID0+IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKVxuICAgIDogKCkgPT4gRGF0ZS5ub3coKTtcbmxldCByYWYgPSBpc19jbGllbnQgPyBjYiA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2IpIDogbm9vcDtcbi8vIHVzZWQgaW50ZXJuYWxseSBmb3IgdGVzdGluZ1xuZnVuY3Rpb24gc2V0X25vdyhmbikge1xuICAgIG5vdyA9IGZuO1xufVxuZnVuY3Rpb24gc2V0X3JhZihmbikge1xuICAgIHJhZiA9IGZuO1xufVxuXG5jb25zdCB0YXNrcyA9IG5ldyBTZXQoKTtcbmZ1bmN0aW9uIHJ1bl90YXNrcyhub3cpIHtcbiAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBpZiAoIXRhc2suYyhub3cpKSB7XG4gICAgICAgICAgICB0YXNrcy5kZWxldGUodGFzayk7XG4gICAgICAgICAgICB0YXNrLmYoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh0YXNrcy5zaXplICE9PSAwKVxuICAgICAgICByYWYocnVuX3Rhc2tzKTtcbn1cbi8qKlxuICogRm9yIHRlc3RpbmcgcHVycG9zZXMgb25seSFcbiAqL1xuZnVuY3Rpb24gY2xlYXJfbG9vcHMoKSB7XG4gICAgdGFza3MuY2xlYXIoKTtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB0YXNrIHRoYXQgcnVucyBvbiBlYWNoIHJhZiBmcmFtZVxuICogdW50aWwgaXQgcmV0dXJucyBhIGZhbHN5IHZhbHVlIG9yIGlzIGFib3J0ZWRcbiAqL1xuZnVuY3Rpb24gbG9vcChjYWxsYmFjaykge1xuICAgIGxldCB0YXNrO1xuICAgIGlmICh0YXNrcy5zaXplID09PSAwKVxuICAgICAgICByYWYocnVuX3Rhc2tzKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9taXNlOiBuZXcgUHJvbWlzZShmdWxmaWxsID0+IHtcbiAgICAgICAgICAgIHRhc2tzLmFkZCh0YXNrID0geyBjOiBjYWxsYmFjaywgZjogZnVsZmlsbCB9KTtcbiAgICAgICAgfSksXG4gICAgICAgIGFib3J0KCkge1xuICAgICAgICAgICAgdGFza3MuZGVsZXRlKHRhc2spO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kKHRhcmdldCwgbm9kZSkge1xuICAgIHRhcmdldC5hcHBlbmRDaGlsZChub2RlKTtcbn1cbmZ1bmN0aW9uIGluc2VydCh0YXJnZXQsIG5vZGUsIGFuY2hvcikge1xuICAgIHRhcmdldC5pbnNlcnRCZWZvcmUobm9kZSwgYW5jaG9yIHx8IG51bGwpO1xufVxuZnVuY3Rpb24gZGV0YWNoKG5vZGUpIHtcbiAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG59XG5mdW5jdGlvbiBkZXN0cm95X2VhY2goaXRlcmF0aW9ucywgZGV0YWNoaW5nKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVyYXRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChpdGVyYXRpb25zW2ldKVxuICAgICAgICAgICAgaXRlcmF0aW9uc1tpXS5kKGRldGFjaGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gZWxlbWVudChuYW1lKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XG59XG5mdW5jdGlvbiBlbGVtZW50X2lzKG5hbWUsIGlzKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSwgeyBpcyB9KTtcbn1cbmZ1bmN0aW9uIG9iamVjdF93aXRob3V0X3Byb3BlcnRpZXMob2JqLCBleGNsdWRlKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0ge307XG4gICAgZm9yIChjb25zdCBrIGluIG9iaikge1xuICAgICAgICBpZiAoaGFzX3Byb3Aob2JqLCBrKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgJiYgZXhjbHVkZS5pbmRleE9mKGspID09PSAtMSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdGFyZ2V0W2tdID0gb2JqW2tdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBzdmdfZWxlbWVudChuYW1lKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCBuYW1lKTtcbn1cbmZ1bmN0aW9uIHRleHQoZGF0YSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhKTtcbn1cbmZ1bmN0aW9uIHNwYWNlKCkge1xuICAgIHJldHVybiB0ZXh0KCcgJyk7XG59XG5mdW5jdGlvbiBlbXB0eSgpIHtcbiAgICByZXR1cm4gdGV4dCgnJyk7XG59XG5mdW5jdGlvbiBsaXN0ZW4obm9kZSwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIHJldHVybiAoKSA9PiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcHJldmVudF9kZWZhdWx0KGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gc3RvcF9wcm9wYWdhdGlvbihmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH07XG59XG5mdW5jdGlvbiBzZWxmKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMpXG4gICAgICAgICAgICBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gYXR0cihub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwpXG4gICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgZWxzZSBpZiAobm9kZS5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKSAhPT0gdmFsdWUpXG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xufVxuZnVuY3Rpb24gc2V0X2F0dHJpYnV0ZXMobm9kZSwgYXR0cmlidXRlcykge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBkZXNjcmlwdG9ycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG5vZGUuX19wcm90b19fKTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGlmIChhdHRyaWJ1dGVzW2tleV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChrZXkgPT09ICdzdHlsZScpIHtcbiAgICAgICAgICAgIG5vZGUuc3R5bGUuY3NzVGV4dCA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChrZXkgPT09ICdfX3ZhbHVlJykge1xuICAgICAgICAgICAgbm9kZS52YWx1ZSA9IG5vZGVba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkZXNjcmlwdG9yc1trZXldICYmIGRlc2NyaXB0b3JzW2tleV0uc2V0KSB7XG4gICAgICAgICAgICBub2RlW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhdHRyKG5vZGUsIGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHNldF9zdmdfYXR0cmlidXRlcyhub2RlLCBhdHRyaWJ1dGVzKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICBhdHRyKG5vZGUsIGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzZXRfY3VzdG9tX2VsZW1lbnRfZGF0YShub2RlLCBwcm9wLCB2YWx1ZSkge1xuICAgIGlmIChwcm9wIGluIG5vZGUpIHtcbiAgICAgICAgbm9kZVtwcm9wXSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYXR0cihub2RlLCBwcm9wLCB2YWx1ZSk7XG4gICAgfVxufVxuZnVuY3Rpb24geGxpbmtfYXR0cihub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsIGF0dHJpYnV0ZSwgdmFsdWUpO1xufVxuZnVuY3Rpb24gZ2V0X2JpbmRpbmdfZ3JvdXBfdmFsdWUoZ3JvdXApIHtcbiAgICBjb25zdCB2YWx1ZSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JvdXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGdyb3VwW2ldLmNoZWNrZWQpXG4gICAgICAgICAgICB2YWx1ZS5wdXNoKGdyb3VwW2ldLl9fdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiB0b19udW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09ICcnID8gdW5kZWZpbmVkIDogK3ZhbHVlO1xufVxuZnVuY3Rpb24gdGltZV9yYW5nZXNfdG9fYXJyYXkocmFuZ2VzKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmdlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBhcnJheS5wdXNoKHsgc3RhcnQ6IHJhbmdlcy5zdGFydChpKSwgZW5kOiByYW5nZXMuZW5kKGkpIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG59XG5mdW5jdGlvbiBjaGlsZHJlbihlbGVtZW50KSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oZWxlbWVudC5jaGlsZE5vZGVzKTtcbn1cbmZ1bmN0aW9uIGNsYWltX2VsZW1lbnQobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMsIHN2Zykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICBpZiAobm9kZS5ub2RlTmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgbGV0IGogPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBub2RlLmF0dHJpYnV0ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlID0gbm9kZS5hdHRyaWJ1dGVzW2pdO1xuICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzW2F0dHJpYnV0ZS5uYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUubmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5vZGVzLnNwbGljZShpLCAxKVswXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3ZnID8gc3ZnX2VsZW1lbnQobmFtZSkgOiBlbGVtZW50KG5hbWUpO1xufVxuZnVuY3Rpb24gY2xhaW1fdGV4dChub2RlcywgZGF0YSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMykge1xuICAgICAgICAgICAgbm9kZS5kYXRhID0gJycgKyBkYXRhO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGVzLnNwbGljZShpLCAxKVswXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGV4dChkYXRhKTtcbn1cbmZ1bmN0aW9uIGNsYWltX3NwYWNlKG5vZGVzKSB7XG4gICAgcmV0dXJuIGNsYWltX3RleHQobm9kZXMsICcgJyk7XG59XG5mdW5jdGlvbiBzZXRfZGF0YSh0ZXh0LCBkYXRhKSB7XG4gICAgZGF0YSA9ICcnICsgZGF0YTtcbiAgICBpZiAodGV4dC5kYXRhICE9PSBkYXRhKVxuICAgICAgICB0ZXh0LmRhdGEgPSBkYXRhO1xufVxuZnVuY3Rpb24gc2V0X2lucHV0X3ZhbHVlKGlucHV0LCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAhPSBudWxsIHx8IGlucHV0LnZhbHVlKSB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gdmFsdWU7XG4gICAgfVxufVxuZnVuY3Rpb24gc2V0X2lucHV0X3R5cGUoaW5wdXQsIHR5cGUpIHtcbiAgICB0cnkge1xuICAgICAgICBpbnB1dC50eXBlID0gdHlwZTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNldF9zdHlsZShub2RlLCBrZXksIHZhbHVlLCBpbXBvcnRhbnQpIHtcbiAgICBub2RlLnN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUsIGltcG9ydGFudCA/ICdpbXBvcnRhbnQnIDogJycpO1xufVxuZnVuY3Rpb24gc2VsZWN0X29wdGlvbihzZWxlY3QsIHZhbHVlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBzZWxlY3Qub3B0aW9uc1tpXTtcbiAgICAgICAgaWYgKG9wdGlvbi5fX3ZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHNlbGVjdF9vcHRpb25zKHNlbGVjdCwgdmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB+dmFsdWUuaW5kZXhPZihvcHRpb24uX192YWx1ZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gc2VsZWN0X3ZhbHVlKHNlbGVjdCkge1xuICAgIGNvbnN0IHNlbGVjdGVkX29wdGlvbiA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCc6Y2hlY2tlZCcpIHx8IHNlbGVjdC5vcHRpb25zWzBdO1xuICAgIHJldHVybiBzZWxlY3RlZF9vcHRpb24gJiYgc2VsZWN0ZWRfb3B0aW9uLl9fdmFsdWU7XG59XG5mdW5jdGlvbiBzZWxlY3RfbXVsdGlwbGVfdmFsdWUoc2VsZWN0KSB7XG4gICAgcmV0dXJuIFtdLm1hcC5jYWxsKHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCc6Y2hlY2tlZCcpLCBvcHRpb24gPT4gb3B0aW9uLl9fdmFsdWUpO1xufVxuLy8gdW5mb3J0dW5hdGVseSB0aGlzIGNhbid0IGJlIGEgY29uc3RhbnQgYXMgdGhhdCB3b3VsZG4ndCBiZSB0cmVlLXNoYWtlYWJsZVxuLy8gc28gd2UgY2FjaGUgdGhlIHJlc3VsdCBpbnN0ZWFkXG5sZXQgY3Jvc3NvcmlnaW47XG5mdW5jdGlvbiBpc19jcm9zc29yaWdpbigpIHtcbiAgICBpZiAoY3Jvc3NvcmlnaW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjcm9zc29yaWdpbiA9IGZhbHNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB2b2lkIHdpbmRvdy5wYXJlbnQuZG9jdW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjcm9zc29yaWdpbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNyb3Nzb3JpZ2luO1xufVxuZnVuY3Rpb24gYWRkX3Jlc2l6ZV9saXN0ZW5lcihub2RlLCBmbikge1xuICAgIGNvbnN0IGNvbXB1dGVkX3N0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBjb25zdCB6X2luZGV4ID0gKHBhcnNlSW50KGNvbXB1dGVkX3N0eWxlLnpJbmRleCkgfHwgMCkgLSAxO1xuICAgIGlmIChjb21wdXRlZF9zdHlsZS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgbm9kZS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgfVxuICAgIGNvbnN0IGlmcmFtZSA9IGVsZW1lbnQoJ2lmcmFtZScpO1xuICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGRpc3BsYXk6IGJsb2NrOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgbGVmdDogMDsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgYCArXG4gICAgICAgIGBvdmVyZmxvdzogaGlkZGVuOyBib3JkZXI6IDA7IG9wYWNpdHk6IDA7IHBvaW50ZXItZXZlbnRzOiBub25lOyB6LWluZGV4OiAke3pfaW5kZXh9O2ApO1xuICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICBpZnJhbWUudGFiSW5kZXggPSAtMTtcbiAgICBsZXQgdW5zdWJzY3JpYmU7XG4gICAgaWYgKGlzX2Nyb3Nzb3JpZ2luKCkpIHtcbiAgICAgICAgaWZyYW1lLnNyYyA9IGBkYXRhOnRleHQvaHRtbCw8c2NyaXB0Pm9ucmVzaXplPWZ1bmN0aW9uKCl7cGFyZW50LnBvc3RNZXNzYWdlKDAsJyonKX08L3NjcmlwdD5gO1xuICAgICAgICB1bnN1YnNjcmliZSA9IGxpc3Rlbih3aW5kb3csICdtZXNzYWdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBpZnJhbWUuY29udGVudFdpbmRvdylcbiAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmcmFtZS5zcmMgPSAnYWJvdXQ6YmxhbmsnO1xuICAgICAgICBpZnJhbWUub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUgPSBsaXN0ZW4oaWZyYW1lLmNvbnRlbnRXaW5kb3csICdyZXNpemUnLCBmbik7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGFwcGVuZChub2RlLCBpZnJhbWUpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGRldGFjaChpZnJhbWUpO1xuICAgICAgICBpZiAodW5zdWJzY3JpYmUpXG4gICAgICAgICAgICB1bnN1YnNjcmliZSgpO1xuICAgIH07XG59XG5mdW5jdGlvbiB0b2dnbGVfY2xhc3MoZWxlbWVudCwgbmFtZSwgdG9nZ2xlKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3RbdG9nZ2xlID8gJ2FkZCcgOiAncmVtb3ZlJ10obmFtZSk7XG59XG5mdW5jdGlvbiBjdXN0b21fZXZlbnQodHlwZSwgZGV0YWlsKSB7XG4gICAgY29uc3QgZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgIGUuaW5pdEN1c3RvbUV2ZW50KHR5cGUsIGZhbHNlLCBmYWxzZSwgZGV0YWlsKTtcbiAgICByZXR1cm4gZTtcbn1cbmZ1bmN0aW9uIHF1ZXJ5X3NlbGVjdG9yX2FsbChzZWxlY3RvciwgcGFyZW50ID0gZG9jdW1lbnQuYm9keSkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG59XG5jbGFzcyBIdG1sVGFnIHtcbiAgICBjb25zdHJ1Y3RvcihodG1sLCBhbmNob3IgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuZSA9IGVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmEgPSBhbmNob3I7XG4gICAgICAgIHRoaXMudShodG1sKTtcbiAgICB9XG4gICAgbSh0YXJnZXQsIGFuY2hvciA9IG51bGwpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm4ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGluc2VydCh0YXJnZXQsIHRoaXMubltpXSwgYW5jaG9yKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnQgPSB0YXJnZXQ7XG4gICAgfVxuICAgIHUoaHRtbCkge1xuICAgICAgICB0aGlzLmUuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgdGhpcy5uID0gQXJyYXkuZnJvbSh0aGlzLmUuY2hpbGROb2Rlcyk7XG4gICAgfVxuICAgIHAoaHRtbCkge1xuICAgICAgICB0aGlzLmQoKTtcbiAgICAgICAgdGhpcy51KGh0bWwpO1xuICAgICAgICB0aGlzLm0odGhpcy50LCB0aGlzLmEpO1xuICAgIH1cbiAgICBkKCkge1xuICAgICAgICB0aGlzLm4uZm9yRWFjaChkZXRhY2gpO1xuICAgIH1cbn1cblxuY29uc3QgYWN0aXZlX2RvY3MgPSBuZXcgU2V0KCk7XG5sZXQgYWN0aXZlID0gMDtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXJrc2t5YXBwL3N0cmluZy1oYXNoL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG5mdW5jdGlvbiBoYXNoKHN0cikge1xuICAgIGxldCBoYXNoID0gNTM4MTtcbiAgICBsZXQgaSA9IHN0ci5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSlcbiAgICAgICAgaGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpIF4gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGhhc2ggPj4+IDA7XG59XG5mdW5jdGlvbiBjcmVhdGVfcnVsZShub2RlLCBhLCBiLCBkdXJhdGlvbiwgZGVsYXksIGVhc2UsIGZuLCB1aWQgPSAwKSB7XG4gICAgY29uc3Qgc3RlcCA9IDE2LjY2NiAvIGR1cmF0aW9uO1xuICAgIGxldCBrZXlmcmFtZXMgPSAne1xcbic7XG4gICAgZm9yIChsZXQgcCA9IDA7IHAgPD0gMTsgcCArPSBzdGVwKSB7XG4gICAgICAgIGNvbnN0IHQgPSBhICsgKGIgLSBhKSAqIGVhc2UocCk7XG4gICAgICAgIGtleWZyYW1lcyArPSBwICogMTAwICsgYCV7JHtmbih0LCAxIC0gdCl9fVxcbmA7XG4gICAgfVxuICAgIGNvbnN0IHJ1bGUgPSBrZXlmcmFtZXMgKyBgMTAwJSB7JHtmbihiLCAxIC0gYil9fVxcbn1gO1xuICAgIGNvbnN0IG5hbWUgPSBgX19zdmVsdGVfJHtoYXNoKHJ1bGUpfV8ke3VpZH1gO1xuICAgIGNvbnN0IGRvYyA9IG5vZGUub3duZXJEb2N1bWVudDtcbiAgICBhY3RpdmVfZG9jcy5hZGQoZG9jKTtcbiAgICBjb25zdCBzdHlsZXNoZWV0ID0gZG9jLl9fc3ZlbHRlX3N0eWxlc2hlZXQgfHwgKGRvYy5fX3N2ZWx0ZV9zdHlsZXNoZWV0ID0gZG9jLmhlYWQuYXBwZW5kQ2hpbGQoZWxlbWVudCgnc3R5bGUnKSkuc2hlZXQpO1xuICAgIGNvbnN0IGN1cnJlbnRfcnVsZXMgPSBkb2MuX19zdmVsdGVfcnVsZXMgfHwgKGRvYy5fX3N2ZWx0ZV9ydWxlcyA9IHt9KTtcbiAgICBpZiAoIWN1cnJlbnRfcnVsZXNbbmFtZV0pIHtcbiAgICAgICAgY3VycmVudF9ydWxlc1tuYW1lXSA9IHRydWU7XG4gICAgICAgIHN0eWxlc2hlZXQuaW5zZXJ0UnVsZShgQGtleWZyYW1lcyAke25hbWV9ICR7cnVsZX1gLCBzdHlsZXNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG4gICAgfVxuICAgIGNvbnN0IGFuaW1hdGlvbiA9IG5vZGUuc3R5bGUuYW5pbWF0aW9uIHx8ICcnO1xuICAgIG5vZGUuc3R5bGUuYW5pbWF0aW9uID0gYCR7YW5pbWF0aW9uID8gYCR7YW5pbWF0aW9ufSwgYCA6IGBgfSR7bmFtZX0gJHtkdXJhdGlvbn1tcyBsaW5lYXIgJHtkZWxheX1tcyAxIGJvdGhgO1xuICAgIGFjdGl2ZSArPSAxO1xuICAgIHJldHVybiBuYW1lO1xufVxuZnVuY3Rpb24gZGVsZXRlX3J1bGUobm9kZSwgbmFtZSkge1xuICAgIGNvbnN0IHByZXZpb3VzID0gKG5vZGUuc3R5bGUuYW5pbWF0aW9uIHx8ICcnKS5zcGxpdCgnLCAnKTtcbiAgICBjb25zdCBuZXh0ID0gcHJldmlvdXMuZmlsdGVyKG5hbWVcbiAgICAgICAgPyBhbmltID0+IGFuaW0uaW5kZXhPZihuYW1lKSA8IDAgLy8gcmVtb3ZlIHNwZWNpZmljIGFuaW1hdGlvblxuICAgICAgICA6IGFuaW0gPT4gYW5pbS5pbmRleE9mKCdfX3N2ZWx0ZScpID09PSAtMSAvLyByZW1vdmUgYWxsIFN2ZWx0ZSBhbmltYXRpb25zXG4gICAgKTtcbiAgICBjb25zdCBkZWxldGVkID0gcHJldmlvdXMubGVuZ3RoIC0gbmV4dC5sZW5ndGg7XG4gICAgaWYgKGRlbGV0ZWQpIHtcbiAgICAgICAgbm9kZS5zdHlsZS5hbmltYXRpb24gPSBuZXh0LmpvaW4oJywgJyk7XG4gICAgICAgIGFjdGl2ZSAtPSBkZWxldGVkO1xuICAgICAgICBpZiAoIWFjdGl2ZSlcbiAgICAgICAgICAgIGNsZWFyX3J1bGVzKCk7XG4gICAgfVxufVxuZnVuY3Rpb24gY2xlYXJfcnVsZXMoKSB7XG4gICAgcmFmKCgpID0+IHtcbiAgICAgICAgaWYgKGFjdGl2ZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgYWN0aXZlX2RvY3MuZm9yRWFjaChkb2MgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVzaGVldCA9IGRvYy5fX3N2ZWx0ZV9zdHlsZXNoZWV0O1xuICAgICAgICAgICAgbGV0IGkgPSBzdHlsZXNoZWV0LmNzc1J1bGVzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlIChpLS0pXG4gICAgICAgICAgICAgICAgc3R5bGVzaGVldC5kZWxldGVSdWxlKGkpO1xuICAgICAgICAgICAgZG9jLl9fc3ZlbHRlX3J1bGVzID0ge307XG4gICAgICAgIH0pO1xuICAgICAgICBhY3RpdmVfZG9jcy5jbGVhcigpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVfYW5pbWF0aW9uKG5vZGUsIGZyb20sIGZuLCBwYXJhbXMpIHtcbiAgICBpZiAoIWZyb20pXG4gICAgICAgIHJldHVybiBub29wO1xuICAgIGNvbnN0IHRvID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoZnJvbS5sZWZ0ID09PSB0by5sZWZ0ICYmIGZyb20ucmlnaHQgPT09IHRvLnJpZ2h0ICYmIGZyb20udG9wID09PSB0by50b3AgJiYgZnJvbS5ib3R0b20gPT09IHRvLmJvdHRvbSlcbiAgICAgICAgcmV0dXJuIG5vb3A7XG4gICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgXG4gICAgLy8gQHRzLWlnbm9yZSB0b2RvOiBzaG91bGQgdGhpcyBiZSBzZXBhcmF0ZWQgZnJvbSBkZXN0cnVjdHVyaW5nPyBPciBzdGFydC9lbmQgYWRkZWQgdG8gcHVibGljIGFwaSBhbmQgZG9jdW1lbnRhdGlvbj9cbiAgICBzdGFydDogc3RhcnRfdGltZSA9IG5vdygpICsgZGVsYXksIFxuICAgIC8vIEB0cy1pZ25vcmUgdG9kbzpcbiAgICBlbmQgPSBzdGFydF90aW1lICsgZHVyYXRpb24sIHRpY2sgPSBub29wLCBjc3MgfSA9IGZuKG5vZGUsIHsgZnJvbSwgdG8gfSwgcGFyYW1zKTtcbiAgICBsZXQgcnVubmluZyA9IHRydWU7XG4gICAgbGV0IHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICBsZXQgbmFtZTtcbiAgICBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgaWYgKGNzcykge1xuICAgICAgICAgICAgbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIDAsIDEsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZGVsYXkpIHtcbiAgICAgICAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIGlmIChjc3MpXG4gICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBuYW1lKTtcbiAgICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgIH1cbiAgICBsb29wKG5vdyA9PiB7XG4gICAgICAgIGlmICghc3RhcnRlZCAmJiBub3cgPj0gc3RhcnRfdGltZSkge1xuICAgICAgICAgICAgc3RhcnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0ZWQgJiYgbm93ID49IGVuZCkge1xuICAgICAgICAgICAgdGljaygxLCAwKTtcbiAgICAgICAgICAgIHN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJ1bm5pbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnRlZCkge1xuICAgICAgICAgICAgY29uc3QgcCA9IG5vdyAtIHN0YXJ0X3RpbWU7XG4gICAgICAgICAgICBjb25zdCB0ID0gMCArIDEgKiBlYXNpbmcocCAvIGR1cmF0aW9uKTtcbiAgICAgICAgICAgIHRpY2sodCwgMSAtIHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICAgIHN0YXJ0KCk7XG4gICAgdGljaygwLCAxKTtcbiAgICByZXR1cm4gc3RvcDtcbn1cbmZ1bmN0aW9uIGZpeF9wb3NpdGlvbihub2RlKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIGlmIChzdHlsZS5wb3NpdGlvbiAhPT0gJ2Fic29sdXRlJyAmJiBzdHlsZS5wb3NpdGlvbiAhPT0gJ2ZpeGVkJykge1xuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHN0eWxlO1xuICAgICAgICBjb25zdCBhID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgbm9kZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIG5vZGUuc3R5bGUud2lkdGggPSB3aWR0aDtcbiAgICAgICAgbm9kZS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGFkZF90cmFuc2Zvcm0obm9kZSwgYSk7XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkX3RyYW5zZm9ybShub2RlLCBhKSB7XG4gICAgY29uc3QgYiA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKGEubGVmdCAhPT0gYi5sZWZ0IHx8IGEudG9wICE9PSBiLnRvcCkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybSA9PT0gJ25vbmUnID8gJycgOiBzdHlsZS50cmFuc2Zvcm07XG4gICAgICAgIG5vZGUuc3R5bGUudHJhbnNmb3JtID0gYCR7dHJhbnNmb3JtfSB0cmFuc2xhdGUoJHthLmxlZnQgLSBiLmxlZnR9cHgsICR7YS50b3AgLSBiLnRvcH1weClgO1xuICAgIH1cbn1cblxubGV0IGN1cnJlbnRfY29tcG9uZW50O1xuZnVuY3Rpb24gc2V0X2N1cnJlbnRfY29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIGN1cnJlbnRfY29tcG9uZW50ID0gY29tcG9uZW50O1xufVxuZnVuY3Rpb24gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkge1xuICAgIGlmICghY3VycmVudF9jb21wb25lbnQpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRnVuY3Rpb24gY2FsbGVkIG91dHNpZGUgY29tcG9uZW50IGluaXRpYWxpemF0aW9uYCk7XG4gICAgcmV0dXJuIGN1cnJlbnRfY29tcG9uZW50O1xufVxuZnVuY3Rpb24gYmVmb3JlVXBkYXRlKGZuKSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuYmVmb3JlX3VwZGF0ZS5wdXNoKGZuKTtcbn1cbmZ1bmN0aW9uIG9uTW91bnQoZm4pIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5vbl9tb3VudC5wdXNoKGZuKTtcbn1cbmZ1bmN0aW9uIGFmdGVyVXBkYXRlKGZuKSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuYWZ0ZXJfdXBkYXRlLnB1c2goZm4pO1xufVxuZnVuY3Rpb24gb25EZXN0cm95KGZuKSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQub25fZGVzdHJveS5wdXNoKGZuKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSBnZXRfY3VycmVudF9jb21wb25lbnQoKTtcbiAgICByZXR1cm4gKHR5cGUsIGRldGFpbCkgPT4ge1xuICAgICAgICBjb25zdCBjYWxsYmFja3MgPSBjb21wb25lbnQuJCQuY2FsbGJhY2tzW3R5cGVdO1xuICAgICAgICBpZiAoY2FsbGJhY2tzKSB7XG4gICAgICAgICAgICAvLyBUT0RPIGFyZSB0aGVyZSBzaXR1YXRpb25zIHdoZXJlIGV2ZW50cyBjb3VsZCBiZSBkaXNwYXRjaGVkXG4gICAgICAgICAgICAvLyBpbiBhIHNlcnZlciAobm9uLURPTSkgZW52aXJvbm1lbnQ/XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IGN1c3RvbV9ldmVudCh0eXBlLCBkZXRhaWwpO1xuICAgICAgICAgICAgY2FsbGJhY2tzLnNsaWNlKCkuZm9yRWFjaChmbiA9PiB7XG4gICAgICAgICAgICAgICAgZm4uY2FsbChjb21wb25lbnQsIGV2ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHNldENvbnRleHQoa2V5LCBjb250ZXh0KSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuY29udGV4dC5zZXQoa2V5LCBjb250ZXh0KTtcbn1cbmZ1bmN0aW9uIGdldENvbnRleHQoa2V5KSB7XG4gICAgcmV0dXJuIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmNvbnRleHQuZ2V0KGtleSk7XG59XG4vLyBUT0RPIGZpZ3VyZSBvdXQgaWYgd2Ugc3RpbGwgd2FudCB0byBzdXBwb3J0XG4vLyBzaG9ydGhhbmQgZXZlbnRzLCBvciBpZiB3ZSB3YW50IHRvIGltcGxlbWVudFxuLy8gYSByZWFsIGJ1YmJsaW5nIG1lY2hhbmlzbVxuZnVuY3Rpb24gYnViYmxlKGNvbXBvbmVudCwgZXZlbnQpIHtcbiAgICBjb25zdCBjYWxsYmFja3MgPSBjb21wb25lbnQuJCQuY2FsbGJhY2tzW2V2ZW50LnR5cGVdO1xuICAgIGlmIChjYWxsYmFja3MpIHtcbiAgICAgICAgY2FsbGJhY2tzLnNsaWNlKCkuZm9yRWFjaChmbiA9PiBmbihldmVudCkpO1xuICAgIH1cbn1cblxuY29uc3QgZGlydHlfY29tcG9uZW50cyA9IFtdO1xuY29uc3QgaW50cm9zID0geyBlbmFibGVkOiBmYWxzZSB9O1xuY29uc3QgYmluZGluZ19jYWxsYmFja3MgPSBbXTtcbmNvbnN0IHJlbmRlcl9jYWxsYmFja3MgPSBbXTtcbmNvbnN0IGZsdXNoX2NhbGxiYWNrcyA9IFtdO1xuY29uc3QgcmVzb2x2ZWRfcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xubGV0IHVwZGF0ZV9zY2hlZHVsZWQgPSBmYWxzZTtcbmZ1bmN0aW9uIHNjaGVkdWxlX3VwZGF0ZSgpIHtcbiAgICBpZiAoIXVwZGF0ZV9zY2hlZHVsZWQpIHtcbiAgICAgICAgdXBkYXRlX3NjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgIHJlc29sdmVkX3Byb21pc2UudGhlbihmbHVzaCk7XG4gICAgfVxufVxuZnVuY3Rpb24gdGljaygpIHtcbiAgICBzY2hlZHVsZV91cGRhdGUoKTtcbiAgICByZXR1cm4gcmVzb2x2ZWRfcHJvbWlzZTtcbn1cbmZ1bmN0aW9uIGFkZF9yZW5kZXJfY2FsbGJhY2soZm4pIHtcbiAgICByZW5kZXJfY2FsbGJhY2tzLnB1c2goZm4pO1xufVxuZnVuY3Rpb24gYWRkX2ZsdXNoX2NhbGxiYWNrKGZuKSB7XG4gICAgZmx1c2hfY2FsbGJhY2tzLnB1c2goZm4pO1xufVxubGV0IGZsdXNoaW5nID0gZmFsc2U7XG5jb25zdCBzZWVuX2NhbGxiYWNrcyA9IG5ldyBTZXQoKTtcbmZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIGlmIChmbHVzaGluZylcbiAgICAgICAgcmV0dXJuO1xuICAgIGZsdXNoaW5nID0gdHJ1ZTtcbiAgICBkbyB7XG4gICAgICAgIC8vIGZpcnN0LCBjYWxsIGJlZm9yZVVwZGF0ZSBmdW5jdGlvbnNcbiAgICAgICAgLy8gYW5kIHVwZGF0ZSBjb21wb25lbnRzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlydHlfY29tcG9uZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gZGlydHlfY29tcG9uZW50c1tpXTtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgdXBkYXRlKGNvbXBvbmVudC4kJCk7XG4gICAgICAgIH1cbiAgICAgICAgZGlydHlfY29tcG9uZW50cy5sZW5ndGggPSAwO1xuICAgICAgICB3aGlsZSAoYmluZGluZ19jYWxsYmFja3MubGVuZ3RoKVxuICAgICAgICAgICAgYmluZGluZ19jYWxsYmFja3MucG9wKCkoKTtcbiAgICAgICAgLy8gdGhlbiwgb25jZSBjb21wb25lbnRzIGFyZSB1cGRhdGVkLCBjYWxsXG4gICAgICAgIC8vIGFmdGVyVXBkYXRlIGZ1bmN0aW9ucy4gVGhpcyBtYXkgY2F1c2VcbiAgICAgICAgLy8gc3Vic2VxdWVudCB1cGRhdGVzLi4uXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVuZGVyX2NhbGxiYWNrcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSByZW5kZXJfY2FsbGJhY2tzW2ldO1xuICAgICAgICAgICAgaWYgKCFzZWVuX2NhbGxiYWNrcy5oYXMoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICAgICAgLy8gLi4uc28gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBsb29wc1xuICAgICAgICAgICAgICAgIHNlZW5fY2FsbGJhY2tzLmFkZChjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZW5kZXJfY2FsbGJhY2tzLmxlbmd0aCA9IDA7XG4gICAgfSB3aGlsZSAoZGlydHlfY29tcG9uZW50cy5sZW5ndGgpO1xuICAgIHdoaWxlIChmbHVzaF9jYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgICAgIGZsdXNoX2NhbGxiYWNrcy5wb3AoKSgpO1xuICAgIH1cbiAgICB1cGRhdGVfc2NoZWR1bGVkID0gZmFsc2U7XG4gICAgZmx1c2hpbmcgPSBmYWxzZTtcbiAgICBzZWVuX2NhbGxiYWNrcy5jbGVhcigpO1xufVxuZnVuY3Rpb24gdXBkYXRlKCQkKSB7XG4gICAgaWYgKCQkLmZyYWdtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICQkLnVwZGF0ZSgpO1xuICAgICAgICBydW5fYWxsKCQkLmJlZm9yZV91cGRhdGUpO1xuICAgICAgICBjb25zdCBkaXJ0eSA9ICQkLmRpcnR5O1xuICAgICAgICAkJC5kaXJ0eSA9IFstMV07XG4gICAgICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50LnAoJCQuY3R4LCBkaXJ0eSk7XG4gICAgICAgICQkLmFmdGVyX3VwZGF0ZS5mb3JFYWNoKGFkZF9yZW5kZXJfY2FsbGJhY2spO1xuICAgIH1cbn1cblxubGV0IHByb21pc2U7XG5mdW5jdGlvbiB3YWl0KCkge1xuICAgIGlmICghcHJvbWlzZSkge1xuICAgICAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIHByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBwcm9taXNlID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBwcm9taXNlO1xufVxuZnVuY3Rpb24gZGlzcGF0Y2gobm9kZSwgZGlyZWN0aW9uLCBraW5kKSB7XG4gICAgbm9kZS5kaXNwYXRjaEV2ZW50KGN1c3RvbV9ldmVudChgJHtkaXJlY3Rpb24gPyAnaW50cm8nIDogJ291dHJvJ30ke2tpbmR9YCkpO1xufVxuY29uc3Qgb3V0cm9pbmcgPSBuZXcgU2V0KCk7XG5sZXQgb3V0cm9zO1xuZnVuY3Rpb24gZ3JvdXBfb3V0cm9zKCkge1xuICAgIG91dHJvcyA9IHtcbiAgICAgICAgcjogMCxcbiAgICAgICAgYzogW10sXG4gICAgICAgIHA6IG91dHJvcyAvLyBwYXJlbnQgZ3JvdXBcbiAgICB9O1xufVxuZnVuY3Rpb24gY2hlY2tfb3V0cm9zKCkge1xuICAgIGlmICghb3V0cm9zLnIpIHtcbiAgICAgICAgcnVuX2FsbChvdXRyb3MuYyk7XG4gICAgfVxuICAgIG91dHJvcyA9IG91dHJvcy5wO1xufVxuZnVuY3Rpb24gdHJhbnNpdGlvbl9pbihibG9jaywgbG9jYWwpIHtcbiAgICBpZiAoYmxvY2sgJiYgYmxvY2suaSkge1xuICAgICAgICBvdXRyb2luZy5kZWxldGUoYmxvY2spO1xuICAgICAgICBibG9jay5pKGxvY2FsKTtcbiAgICB9XG59XG5mdW5jdGlvbiB0cmFuc2l0aW9uX291dChibG9jaywgbG9jYWwsIGRldGFjaCwgY2FsbGJhY2spIHtcbiAgICBpZiAoYmxvY2sgJiYgYmxvY2subykge1xuICAgICAgICBpZiAob3V0cm9pbmcuaGFzKGJsb2NrKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgb3V0cm9pbmcuYWRkKGJsb2NrKTtcbiAgICAgICAgb3V0cm9zLmMucHVzaCgoKSA9PiB7XG4gICAgICAgICAgICBvdXRyb2luZy5kZWxldGUoYmxvY2spO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRldGFjaClcbiAgICAgICAgICAgICAgICAgICAgYmxvY2suZCgxKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYmxvY2subyhsb2NhbCk7XG4gICAgfVxufVxuY29uc3QgbnVsbF90cmFuc2l0aW9uID0geyBkdXJhdGlvbjogMCB9O1xuZnVuY3Rpb24gY3JlYXRlX2luX3RyYW5zaXRpb24obm9kZSwgZm4sIHBhcmFtcykge1xuICAgIGxldCBjb25maWcgPSBmbihub2RlLCBwYXJhbXMpO1xuICAgIGxldCBydW5uaW5nID0gZmFsc2U7XG4gICAgbGV0IGFuaW1hdGlvbl9uYW1lO1xuICAgIGxldCB0YXNrO1xuICAgIGxldCB1aWQgPSAwO1xuICAgIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgICAgIGlmIChhbmltYXRpb25fbmFtZSlcbiAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUsIGFuaW1hdGlvbl9uYW1lKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ28oKSB7XG4gICAgICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDMwMCwgZWFzaW5nID0gaWRlbnRpdHksIHRpY2sgPSBub29wLCBjc3MgfSA9IGNvbmZpZyB8fCBudWxsX3RyYW5zaXRpb247XG4gICAgICAgIGlmIChjc3MpXG4gICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIDAsIDEsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MsIHVpZCsrKTtcbiAgICAgICAgdGljaygwLCAxKTtcbiAgICAgICAgY29uc3Qgc3RhcnRfdGltZSA9IG5vdygpICsgZGVsYXk7XG4gICAgICAgIGNvbnN0IGVuZF90aW1lID0gc3RhcnRfdGltZSArIGR1cmF0aW9uO1xuICAgICAgICBpZiAodGFzaylcbiAgICAgICAgICAgIHRhc2suYWJvcnQoKTtcbiAgICAgICAgcnVubmluZyA9IHRydWU7XG4gICAgICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4gZGlzcGF0Y2gobm9kZSwgdHJ1ZSwgJ3N0YXJ0JykpO1xuICAgICAgICB0YXNrID0gbG9vcChub3cgPT4ge1xuICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAobm93ID49IGVuZF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpY2soMSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vZGUsIHRydWUsICdlbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm93ID49IHN0YXJ0X3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IGVhc2luZygobm93IC0gc3RhcnRfdGltZSkgLyBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRpY2sodCwgMSAtIHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBydW5uaW5nO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGV0IHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdGFydCgpIHtcbiAgICAgICAgICAgIGlmIChzdGFydGVkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUpO1xuICAgICAgICAgICAgaWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICBjb25maWcgPSBjb25maWcoKTtcbiAgICAgICAgICAgICAgICB3YWl0KCkudGhlbihnbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBnbygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBpbnZhbGlkYXRlKCkge1xuICAgICAgICAgICAgc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBlbmQoKSB7XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlX291dF90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMpIHtcbiAgICBsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zKTtcbiAgICBsZXQgcnVubmluZyA9IHRydWU7XG4gICAgbGV0IGFuaW1hdGlvbl9uYW1lO1xuICAgIGNvbnN0IGdyb3VwID0gb3V0cm9zO1xuICAgIGdyb3VwLnIgKz0gMTtcbiAgICBmdW5jdGlvbiBnbygpIHtcbiAgICAgICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgdGljayA9IG5vb3AsIGNzcyB9ID0gY29uZmlnIHx8IG51bGxfdHJhbnNpdGlvbjtcbiAgICAgICAgaWYgKGNzcylcbiAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgMSwgMCwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcyk7XG4gICAgICAgIGNvbnN0IHN0YXJ0X3RpbWUgPSBub3coKSArIGRlbGF5O1xuICAgICAgICBjb25zdCBlbmRfdGltZSA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbjtcbiAgICAgICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiBkaXNwYXRjaChub2RlLCBmYWxzZSwgJ3N0YXJ0JykpO1xuICAgICAgICBsb29wKG5vdyA9PiB7XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGlmIChub3cgPj0gZW5kX3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGljaygwLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgZmFsc2UsICdlbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEtLWdyb3VwLnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2lsbCByZXN1bHQgaW4gYGVuZCgpYCBiZWluZyBjYWxsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzbyB3ZSBkb24ndCBuZWVkIHRvIGNsZWFuIHVwIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bl9hbGwoZ3JvdXAuYyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm93ID49IHN0YXJ0X3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IGVhc2luZygobm93IC0gc3RhcnRfdGltZSkgLyBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRpY2soMSAtIHQsIHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBydW5uaW5nO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcbiAgICAgICAgd2FpdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uZmlnID0gY29uZmlnKCk7XG4gICAgICAgICAgICBnbygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGdvKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGVuZChyZXNldCkge1xuICAgICAgICAgICAgaWYgKHJlc2V0ICYmIGNvbmZpZy50aWNrKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLnRpY2soMSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25fbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuICAgICAgICAgICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBjcmVhdGVfYmlkaXJlY3Rpb25hbF90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMsIGludHJvKSB7XG4gICAgbGV0IGNvbmZpZyA9IGZuKG5vZGUsIHBhcmFtcyk7XG4gICAgbGV0IHQgPSBpbnRybyA/IDAgOiAxO1xuICAgIGxldCBydW5uaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgIGxldCBwZW5kaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgIGxldCBhbmltYXRpb25fbmFtZSA9IG51bGw7XG4gICAgZnVuY3Rpb24gY2xlYXJfYW5pbWF0aW9uKCkge1xuICAgICAgICBpZiAoYW5pbWF0aW9uX25hbWUpXG4gICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGluaXQocHJvZ3JhbSwgZHVyYXRpb24pIHtcbiAgICAgICAgY29uc3QgZCA9IHByb2dyYW0uYiAtIHQ7XG4gICAgICAgIGR1cmF0aW9uICo9IE1hdGguYWJzKGQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYTogdCxcbiAgICAgICAgICAgIGI6IHByb2dyYW0uYixcbiAgICAgICAgICAgIGQsXG4gICAgICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgICAgIHN0YXJ0OiBwcm9ncmFtLnN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBwcm9ncmFtLnN0YXJ0ICsgZHVyYXRpb24sXG4gICAgICAgICAgICBncm91cDogcHJvZ3JhbS5ncm91cFxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBnbyhiKSB7XG4gICAgICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDMwMCwgZWFzaW5nID0gaWRlbnRpdHksIHRpY2sgPSBub29wLCBjc3MgfSA9IGNvbmZpZyB8fCBudWxsX3RyYW5zaXRpb247XG4gICAgICAgIGNvbnN0IHByb2dyYW0gPSB7XG4gICAgICAgICAgICBzdGFydDogbm93KCkgKyBkZWxheSxcbiAgICAgICAgICAgIGJcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCFiKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRvZG86IGltcHJvdmUgdHlwaW5nc1xuICAgICAgICAgICAgcHJvZ3JhbS5ncm91cCA9IG91dHJvcztcbiAgICAgICAgICAgIG91dHJvcy5yICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJ1bm5pbmdfcHJvZ3JhbSkge1xuICAgICAgICAgICAgcGVuZGluZ19wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGlmIHRoaXMgaXMgYW4gaW50cm8sIGFuZCB0aGVyZSdzIGEgZGVsYXksIHdlIG5lZWQgdG8gZG9cbiAgICAgICAgICAgIC8vIGFuIGluaXRpYWwgdGljayBhbmQvb3IgYXBwbHkgQ1NTIGFuaW1hdGlvbiBpbW1lZGlhdGVseVxuICAgICAgICAgICAgaWYgKGNzcykge1xuICAgICAgICAgICAgICAgIGNsZWFyX2FuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgdCwgYiwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYilcbiAgICAgICAgICAgICAgICB0aWNrKDAsIDEpO1xuICAgICAgICAgICAgcnVubmluZ19wcm9ncmFtID0gaW5pdChwcm9ncmFtLCBkdXJhdGlvbik7XG4gICAgICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IGRpc3BhdGNoKG5vZGUsIGIsICdzdGFydCcpKTtcbiAgICAgICAgICAgIGxvb3Aobm93ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGVuZGluZ19wcm9ncmFtICYmIG5vdyA+IHBlbmRpbmdfcHJvZ3JhbS5zdGFydCkge1xuICAgICAgICAgICAgICAgICAgICBydW5uaW5nX3Byb2dyYW0gPSBpbml0KHBlbmRpbmdfcHJvZ3JhbSwgZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCBydW5uaW5nX3Byb2dyYW0uYiwgJ3N0YXJ0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyX2FuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCB0LCBydW5uaW5nX3Byb2dyYW0uYiwgcnVubmluZ19wcm9ncmFtLmR1cmF0aW9uLCAwLCBlYXNpbmcsIGNvbmZpZy5jc3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChydW5uaW5nX3Byb2dyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBydW5uaW5nX3Byb2dyYW0uZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrKHQgPSBydW5uaW5nX3Byb2dyYW0uYiwgMSAtIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgcnVubmluZ19wcm9ncmFtLmIsICdlbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcGVuZGluZ19wcm9ncmFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UncmUgZG9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChydW5uaW5nX3Byb2dyYW0uYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnRybyDigJQgd2UgY2FuIHRpZHkgdXAgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJfYW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvdXRybyDigJQgbmVlZHMgdG8gYmUgY29vcmRpbmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEtLXJ1bm5pbmdfcHJvZ3JhbS5ncm91cC5yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVuX2FsbChydW5uaW5nX3Byb2dyYW0uZ3JvdXAuYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcnVubmluZ19wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChub3cgPj0gcnVubmluZ19wcm9ncmFtLnN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwID0gbm93IC0gcnVubmluZ19wcm9ncmFtLnN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IHJ1bm5pbmdfcHJvZ3JhbS5hICsgcnVubmluZ19wcm9ncmFtLmQgKiBlYXNpbmcocCAvIHJ1bm5pbmdfcHJvZ3JhbS5kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrKHQsIDEgLSB0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gISEocnVubmluZ19wcm9ncmFtIHx8IHBlbmRpbmdfcHJvZ3JhbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBydW4oYikge1xuICAgICAgICAgICAgaWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICB3YWl0KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnID0gY29uZmlnKCk7XG4gICAgICAgICAgICAgICAgICAgIGdvKGIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZ28oYik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVuZCgpIHtcbiAgICAgICAgICAgIGNsZWFyX2FuaW1hdGlvbigpO1xuICAgICAgICAgICAgcnVubmluZ19wcm9ncmFtID0gcGVuZGluZ19wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGhhbmRsZV9wcm9taXNlKHByb21pc2UsIGluZm8pIHtcbiAgICBjb25zdCB0b2tlbiA9IGluZm8udG9rZW4gPSB7fTtcbiAgICBmdW5jdGlvbiB1cGRhdGUodHlwZSwgaW5kZXgsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKGluZm8udG9rZW4gIT09IHRva2VuKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpbmZvLnJlc29sdmVkID0gdmFsdWU7XG4gICAgICAgIGxldCBjaGlsZF9jdHggPSBpbmZvLmN0eDtcbiAgICAgICAgaWYgKGtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjaGlsZF9jdHggPSBjaGlsZF9jdHguc2xpY2UoKTtcbiAgICAgICAgICAgIGNoaWxkX2N0eFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYmxvY2sgPSB0eXBlICYmIChpbmZvLmN1cnJlbnQgPSB0eXBlKShjaGlsZF9jdHgpO1xuICAgICAgICBsZXQgbmVlZHNfZmx1c2ggPSBmYWxzZTtcbiAgICAgICAgaWYgKGluZm8uYmxvY2spIHtcbiAgICAgICAgICAgIGlmIChpbmZvLmJsb2Nrcykge1xuICAgICAgICAgICAgICAgIGluZm8uYmxvY2tzLmZvckVhY2goKGJsb2NrLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpICE9PSBpbmRleCAmJiBibG9jaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBfb3V0cm9zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uX291dChibG9jaywgMSwgMSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZm8uYmxvY2tzW2ldID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tfb3V0cm9zKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGluZm8uYmxvY2suZCgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJsb2NrLmMoKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb25faW4oYmxvY2ssIDEpO1xuICAgICAgICAgICAgYmxvY2subShpbmZvLm1vdW50KCksIGluZm8uYW5jaG9yKTtcbiAgICAgICAgICAgIG5lZWRzX2ZsdXNoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpbmZvLmJsb2NrID0gYmxvY2s7XG4gICAgICAgIGlmIChpbmZvLmJsb2NrcylcbiAgICAgICAgICAgIGluZm8uYmxvY2tzW2luZGV4XSA9IGJsb2NrO1xuICAgICAgICBpZiAobmVlZHNfZmx1c2gpIHtcbiAgICAgICAgICAgIGZsdXNoKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzX3Byb21pc2UocHJvbWlzZSkpIHtcbiAgICAgICAgY29uc3QgY3VycmVudF9jb21wb25lbnQgPSBnZXRfY3VycmVudF9jb21wb25lbnQoKTtcbiAgICAgICAgcHJvbWlzZS50aGVuKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjdXJyZW50X2NvbXBvbmVudCk7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby50aGVuLCAxLCBpbmZvLnZhbHVlLCB2YWx1ZSk7XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQobnVsbCk7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjdXJyZW50X2NvbXBvbmVudCk7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby5jYXRjaCwgMiwgaW5mby5lcnJvciwgZXJyb3IpO1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KG51bGwpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gaWYgd2UgcHJldmlvdXNseSBoYWQgYSB0aGVuL2NhdGNoIGJsb2NrLCBkZXN0cm95IGl0XG4gICAgICAgIGlmIChpbmZvLmN1cnJlbnQgIT09IGluZm8ucGVuZGluZykge1xuICAgICAgICAgICAgdXBkYXRlKGluZm8ucGVuZGluZywgMCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGluZm8uY3VycmVudCAhPT0gaW5mby50aGVuKSB7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby50aGVuLCAxLCBpbmZvLnZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGluZm8ucmVzb2x2ZWQgPSBwcm9taXNlO1xuICAgIH1cbn1cblxuY29uc3QgZ2xvYmFscyA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgID8gd2luZG93XG4gICAgOiB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyBnbG9iYWxUaGlzXG4gICAgICAgIDogZ2xvYmFsKTtcblxuZnVuY3Rpb24gZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgYmxvY2suZCgxKTtcbiAgICBsb29rdXAuZGVsZXRlKGJsb2NrLmtleSk7XG59XG5mdW5jdGlvbiBvdXRyb19hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgdHJhbnNpdGlvbl9vdXQoYmxvY2ssIDEsIDEsICgpID0+IHtcbiAgICAgICAgbG9va3VwLmRlbGV0ZShibG9jay5rZXkpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZml4X2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcbiAgICBibG9jay5mKCk7XG4gICAgZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKTtcbn1cbmZ1bmN0aW9uIGZpeF9hbmRfb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuICAgIGJsb2NrLmYoKTtcbiAgICBvdXRyb19hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZV9rZXllZF9lYWNoKG9sZF9ibG9ja3MsIGRpcnR5LCBnZXRfa2V5LCBkeW5hbWljLCBjdHgsIGxpc3QsIGxvb2t1cCwgbm9kZSwgZGVzdHJveSwgY3JlYXRlX2VhY2hfYmxvY2ssIG5leHQsIGdldF9jb250ZXh0KSB7XG4gICAgbGV0IG8gPSBvbGRfYmxvY2tzLmxlbmd0aDtcbiAgICBsZXQgbiA9IGxpc3QubGVuZ3RoO1xuICAgIGxldCBpID0gbztcbiAgICBjb25zdCBvbGRfaW5kZXhlcyA9IHt9O1xuICAgIHdoaWxlIChpLS0pXG4gICAgICAgIG9sZF9pbmRleGVzW29sZF9ibG9ja3NbaV0ua2V5XSA9IGk7XG4gICAgY29uc3QgbmV3X2Jsb2NrcyA9IFtdO1xuICAgIGNvbnN0IG5ld19sb29rdXAgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgZGVsdGFzID0gbmV3IE1hcCgpO1xuICAgIGkgPSBuO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgY29uc3QgY2hpbGRfY3R4ID0gZ2V0X2NvbnRleHQoY3R4LCBsaXN0LCBpKTtcbiAgICAgICAgY29uc3Qga2V5ID0gZ2V0X2tleShjaGlsZF9jdHgpO1xuICAgICAgICBsZXQgYmxvY2sgPSBsb29rdXAuZ2V0KGtleSk7XG4gICAgICAgIGlmICghYmxvY2spIHtcbiAgICAgICAgICAgIGJsb2NrID0gY3JlYXRlX2VhY2hfYmxvY2soa2V5LCBjaGlsZF9jdHgpO1xuICAgICAgICAgICAgYmxvY2suYygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGR5bmFtaWMpIHtcbiAgICAgICAgICAgIGJsb2NrLnAoY2hpbGRfY3R4LCBkaXJ0eSk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3X2xvb2t1cC5zZXQoa2V5LCBuZXdfYmxvY2tzW2ldID0gYmxvY2spO1xuICAgICAgICBpZiAoa2V5IGluIG9sZF9pbmRleGVzKVxuICAgICAgICAgICAgZGVsdGFzLnNldChrZXksIE1hdGguYWJzKGkgLSBvbGRfaW5kZXhlc1trZXldKSk7XG4gICAgfVxuICAgIGNvbnN0IHdpbGxfbW92ZSA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBkaWRfbW92ZSA9IG5ldyBTZXQoKTtcbiAgICBmdW5jdGlvbiBpbnNlcnQoYmxvY2spIHtcbiAgICAgICAgdHJhbnNpdGlvbl9pbihibG9jaywgMSk7XG4gICAgICAgIGJsb2NrLm0obm9kZSwgbmV4dCwgbG9va3VwLmhhcyhibG9jay5rZXkpKTtcbiAgICAgICAgbG9va3VwLnNldChibG9jay5rZXksIGJsb2NrKTtcbiAgICAgICAgbmV4dCA9IGJsb2NrLmZpcnN0O1xuICAgICAgICBuLS07XG4gICAgfVxuICAgIHdoaWxlIChvICYmIG4pIHtcbiAgICAgICAgY29uc3QgbmV3X2Jsb2NrID0gbmV3X2Jsb2Nrc1tuIC0gMV07XG4gICAgICAgIGNvbnN0IG9sZF9ibG9jayA9IG9sZF9ibG9ja3NbbyAtIDFdO1xuICAgICAgICBjb25zdCBuZXdfa2V5ID0gbmV3X2Jsb2NrLmtleTtcbiAgICAgICAgY29uc3Qgb2xkX2tleSA9IG9sZF9ibG9jay5rZXk7XG4gICAgICAgIGlmIChuZXdfYmxvY2sgPT09IG9sZF9ibG9jaykge1xuICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICAgICAgbmV4dCA9IG5ld19ibG9jay5maXJzdDtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgICAgIG4tLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghbmV3X2xvb2t1cC5oYXMob2xkX2tleSkpIHtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBvbGQgYmxvY2tcbiAgICAgICAgICAgIGRlc3Ryb3kob2xkX2Jsb2NrLCBsb29rdXApO1xuICAgICAgICAgICAgby0tO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFsb29rdXAuaGFzKG5ld19rZXkpIHx8IHdpbGxfbW92ZS5oYXMobmV3X2tleSkpIHtcbiAgICAgICAgICAgIGluc2VydChuZXdfYmxvY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRpZF9tb3ZlLmhhcyhvbGRfa2V5KSkge1xuICAgICAgICAgICAgby0tO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRlbHRhcy5nZXQobmV3X2tleSkgPiBkZWx0YXMuZ2V0KG9sZF9rZXkpKSB7XG4gICAgICAgICAgICBkaWRfbW92ZS5hZGQobmV3X2tleSk7XG4gICAgICAgICAgICBpbnNlcnQobmV3X2Jsb2NrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHdpbGxfbW92ZS5hZGQob2xkX2tleSk7XG4gICAgICAgICAgICBvLS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgd2hpbGUgKG8tLSkge1xuICAgICAgICBjb25zdCBvbGRfYmxvY2sgPSBvbGRfYmxvY2tzW29dO1xuICAgICAgICBpZiAoIW5ld19sb29rdXAuaGFzKG9sZF9ibG9jay5rZXkpKVxuICAgICAgICAgICAgZGVzdHJveShvbGRfYmxvY2ssIGxvb2t1cCk7XG4gICAgfVxuICAgIHdoaWxlIChuKVxuICAgICAgICBpbnNlcnQobmV3X2Jsb2Nrc1tuIC0gMV0pO1xuICAgIHJldHVybiBuZXdfYmxvY2tzO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVfZWFjaF9rZXlzKGN0eCwgbGlzdCwgZ2V0X2NvbnRleHQsIGdldF9rZXkpIHtcbiAgICBjb25zdCBrZXlzID0gbmV3IFNldCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBrZXkgPSBnZXRfa2V5KGdldF9jb250ZXh0KGN0eCwgbGlzdCwgaSkpO1xuICAgICAgICBpZiAoa2V5cy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgaGF2ZSBkdXBsaWNhdGUga2V5cyBpbiBhIGtleWVkIGVhY2hgKTtcbiAgICAgICAgfVxuICAgICAgICBrZXlzLmFkZChrZXkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0X3NwcmVhZF91cGRhdGUobGV2ZWxzLCB1cGRhdGVzKSB7XG4gICAgY29uc3QgdXBkYXRlID0ge307XG4gICAgY29uc3QgdG9fbnVsbF9vdXQgPSB7fTtcbiAgICBjb25zdCBhY2NvdW50ZWRfZm9yID0geyAkJHNjb3BlOiAxIH07XG4gICAgbGV0IGkgPSBsZXZlbHMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgY29uc3QgbyA9IGxldmVsc1tpXTtcbiAgICAgICAgY29uc3QgbiA9IHVwZGF0ZXNbaV07XG4gICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEoa2V5IGluIG4pKVxuICAgICAgICAgICAgICAgICAgICB0b19udWxsX291dFtrZXldID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG4pIHtcbiAgICAgICAgICAgICAgICBpZiAoIWFjY291bnRlZF9mb3Jba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVba2V5XSA9IG5ba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudGVkX2ZvcltrZXldID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXZlbHNbaV0gPSBuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbykge1xuICAgICAgICAgICAgICAgIGFjY291bnRlZF9mb3Jba2V5XSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdG9fbnVsbF9vdXQpIHtcbiAgICAgICAgaWYgKCEoa2V5IGluIHVwZGF0ZSkpXG4gICAgICAgICAgICB1cGRhdGVba2V5XSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHVwZGF0ZTtcbn1cbmZ1bmN0aW9uIGdldF9zcHJlYWRfb2JqZWN0KHNwcmVhZF9wcm9wcykge1xuICAgIHJldHVybiB0eXBlb2Ygc3ByZWFkX3Byb3BzID09PSAnb2JqZWN0JyAmJiBzcHJlYWRfcHJvcHMgIT09IG51bGwgPyBzcHJlYWRfcHJvcHMgOiB7fTtcbn1cblxuLy8gc291cmNlOiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbmRpY2VzLmh0bWxcbmNvbnN0IGJvb2xlYW5fYXR0cmlidXRlcyA9IG5ldyBTZXQoW1xuICAgICdhbGxvd2Z1bGxzY3JlZW4nLFxuICAgICdhbGxvd3BheW1lbnRyZXF1ZXN0JyxcbiAgICAnYXN5bmMnLFxuICAgICdhdXRvZm9jdXMnLFxuICAgICdhdXRvcGxheScsXG4gICAgJ2NoZWNrZWQnLFxuICAgICdjb250cm9scycsXG4gICAgJ2RlZmF1bHQnLFxuICAgICdkZWZlcicsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnZm9ybW5vdmFsaWRhdGUnLFxuICAgICdoaWRkZW4nLFxuICAgICdpc21hcCcsXG4gICAgJ2xvb3AnLFxuICAgICdtdWx0aXBsZScsXG4gICAgJ211dGVkJyxcbiAgICAnbm9tb2R1bGUnLFxuICAgICdub3ZhbGlkYXRlJyxcbiAgICAnb3BlbicsXG4gICAgJ3BsYXlzaW5saW5lJyxcbiAgICAncmVhZG9ubHknLFxuICAgICdyZXF1aXJlZCcsXG4gICAgJ3JldmVyc2VkJyxcbiAgICAnc2VsZWN0ZWQnXG5dKTtcblxuY29uc3QgaW52YWxpZF9hdHRyaWJ1dGVfbmFtZV9jaGFyYWN0ZXIgPSAvW1xccydcIj4vPVxcdXtGREQwfS1cXHV7RkRFRn1cXHV7RkZGRX1cXHV7RkZGRn1cXHV7MUZGRkV9XFx1ezFGRkZGfVxcdXsyRkZGRX1cXHV7MkZGRkZ9XFx1ezNGRkZFfVxcdXszRkZGRn1cXHV7NEZGRkV9XFx1ezRGRkZGfVxcdXs1RkZGRX1cXHV7NUZGRkZ9XFx1ezZGRkZFfVxcdXs2RkZGRn1cXHV7N0ZGRkV9XFx1ezdGRkZGfVxcdXs4RkZGRX1cXHV7OEZGRkZ9XFx1ezlGRkZFfVxcdXs5RkZGRn1cXHV7QUZGRkV9XFx1e0FGRkZGfVxcdXtCRkZGRX1cXHV7QkZGRkZ9XFx1e0NGRkZFfVxcdXtDRkZGRn1cXHV7REZGRkV9XFx1e0RGRkZGfVxcdXtFRkZGRX1cXHV7RUZGRkZ9XFx1e0ZGRkZFfVxcdXtGRkZGRn1cXHV7MTBGRkZFfVxcdXsxMEZGRkZ9XS91O1xuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc3ludGF4Lmh0bWwjYXR0cmlidXRlcy0yXG4vLyBodHRwczovL2luZnJhLnNwZWMud2hhdHdnLm9yZy8jbm9uY2hhcmFjdGVyXG5mdW5jdGlvbiBzcHJlYWQoYXJncywgY2xhc3Nlc190b19hZGQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbih7fSwgLi4uYXJncyk7XG4gICAgaWYgKGNsYXNzZXNfdG9fYWRkKSB7XG4gICAgICAgIGlmIChhdHRyaWJ1dGVzLmNsYXNzID09IG51bGwpIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMuY2xhc3MgPSBjbGFzc2VzX3RvX2FkZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMuY2xhc3MgKz0gJyAnICsgY2xhc3Nlc190b19hZGQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IHN0ciA9ICcnO1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgIGlmIChpbnZhbGlkX2F0dHJpYnV0ZV9uYW1lX2NoYXJhY3Rlci50ZXN0KG5hbWUpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGF0dHJpYnV0ZXNbbmFtZV07XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgIHN0ciArPSBcIiBcIiArIG5hbWU7XG4gICAgICAgIGVsc2UgaWYgKGJvb2xlYW5fYXR0cmlidXRlcy5oYXMobmFtZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlKVxuICAgICAgICAgICAgICAgIHN0ciArPSBcIiBcIiArIG5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgc3RyICs9IGAgJHtuYW1lfT1cIiR7U3RyaW5nKHZhbHVlKS5yZXBsYWNlKC9cIi9nLCAnJiMzNDsnKS5yZXBsYWNlKC8nL2csICcmIzM5OycpfVwiYDtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzdHI7XG59XG5jb25zdCBlc2NhcGVkID0ge1xuICAgICdcIic6ICcmcXVvdDsnLFxuICAgIFwiJ1wiOiAnJiMzOTsnLFxuICAgICcmJzogJyZhbXA7JyxcbiAgICAnPCc6ICcmbHQ7JyxcbiAgICAnPic6ICcmZ3Q7J1xufTtcbmZ1bmN0aW9uIGVzY2FwZShodG1sKSB7XG4gICAgcmV0dXJuIFN0cmluZyhodG1sKS5yZXBsYWNlKC9bXCInJjw+XS9nLCBtYXRjaCA9PiBlc2NhcGVkW21hdGNoXSk7XG59XG5mdW5jdGlvbiBlYWNoKGl0ZW1zLCBmbikge1xuICAgIGxldCBzdHIgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHN0ciArPSBmbihpdGVtc1tpXSwgaSk7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG59XG5jb25zdCBtaXNzaW5nX2NvbXBvbmVudCA9IHtcbiAgICAkJHJlbmRlcjogKCkgPT4gJydcbn07XG5mdW5jdGlvbiB2YWxpZGF0ZV9jb21wb25lbnQoY29tcG9uZW50LCBuYW1lKSB7XG4gICAgaWYgKCFjb21wb25lbnQgfHwgIWNvbXBvbmVudC4kJHJlbmRlcikge1xuICAgICAgICBpZiAobmFtZSA9PT0gJ3N2ZWx0ZTpjb21wb25lbnQnKVxuICAgICAgICAgICAgbmFtZSArPSAnIHRoaXM9ey4uLn0nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYDwke25hbWV9PiBpcyBub3QgYSB2YWxpZCBTU1IgY29tcG9uZW50LiBZb3UgbWF5IG5lZWQgdG8gcmV2aWV3IHlvdXIgYnVpbGQgY29uZmlnIHRvIGVuc3VyZSB0aGF0IGRlcGVuZGVuY2llcyBhcmUgY29tcGlsZWQsIHJhdGhlciB0aGFuIGltcG9ydGVkIGFzIHByZS1jb21waWxlZCBtb2R1bGVzYCk7XG4gICAgfVxuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5mdW5jdGlvbiBkZWJ1ZyhmaWxlLCBsaW5lLCBjb2x1bW4sIHZhbHVlcykge1xuICAgIGNvbnNvbGUubG9nKGB7QGRlYnVnfSAke2ZpbGUgPyBmaWxlICsgJyAnIDogJyd9KCR7bGluZX06JHtjb2x1bW59KWApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICByZXR1cm4gJyc7XG59XG5sZXQgb25fZGVzdHJveTtcbmZ1bmN0aW9uIGNyZWF0ZV9zc3JfY29tcG9uZW50KGZuKSB7XG4gICAgZnVuY3Rpb24gJCRyZW5kZXIocmVzdWx0LCBwcm9wcywgYmluZGluZ3MsIHNsb3RzKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudF9jb21wb25lbnQgPSBjdXJyZW50X2NvbXBvbmVudDtcbiAgICAgICAgY29uc3QgJCQgPSB7XG4gICAgICAgICAgICBvbl9kZXN0cm95LFxuICAgICAgICAgICAgY29udGV4dDogbmV3IE1hcChwYXJlbnRfY29tcG9uZW50ID8gcGFyZW50X2NvbXBvbmVudC4kJC5jb250ZXh0IDogW10pLFxuICAgICAgICAgICAgLy8gdGhlc2Ugd2lsbCBiZSBpbW1lZGlhdGVseSBkaXNjYXJkZWRcbiAgICAgICAgICAgIG9uX21vdW50OiBbXSxcbiAgICAgICAgICAgIGJlZm9yZV91cGRhdGU6IFtdLFxuICAgICAgICAgICAgYWZ0ZXJfdXBkYXRlOiBbXSxcbiAgICAgICAgICAgIGNhbGxiYWNrczogYmxhbmtfb2JqZWN0KClcbiAgICAgICAgfTtcbiAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KHsgJCQgfSk7XG4gICAgICAgIGNvbnN0IGh0bWwgPSBmbihyZXN1bHQsIHByb3BzLCBiaW5kaW5ncywgc2xvdHMpO1xuICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQocGFyZW50X2NvbXBvbmVudCk7XG4gICAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICByZW5kZXI6IChwcm9wcyA9IHt9LCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIG9uX2Rlc3Ryb3kgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHsgdGl0bGU6ICcnLCBoZWFkOiAnJywgY3NzOiBuZXcgU2V0KCkgfTtcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSAkJHJlbmRlcihyZXN1bHQsIHByb3BzLCB7fSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBydW5fYWxsKG9uX2Rlc3Ryb3kpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBodG1sLFxuICAgICAgICAgICAgICAgIGNzczoge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBBcnJheS5mcm9tKHJlc3VsdC5jc3MpLm1hcChjc3MgPT4gY3NzLmNvZGUpLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICBtYXA6IG51bGwgLy8gVE9ET1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGVhZDogcmVzdWx0LnRpdGxlICsgcmVzdWx0LmhlYWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgICQkcmVuZGVyXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGFkZF9hdHRyaWJ1dGUobmFtZSwgdmFsdWUsIGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCAoYm9vbGVhbiAmJiAhdmFsdWUpKVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgcmV0dXJuIGAgJHtuYW1lfSR7dmFsdWUgPT09IHRydWUgPyAnJyA6IGA9JHt0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gSlNPTi5zdHJpbmdpZnkoZXNjYXBlKHZhbHVlKSkgOiBgXCIke3ZhbHVlfVwiYH1gfWA7XG59XG5mdW5jdGlvbiBhZGRfY2xhc3NlcyhjbGFzc2VzKSB7XG4gICAgcmV0dXJuIGNsYXNzZXMgPyBgIGNsYXNzPVwiJHtjbGFzc2VzfVwiYCA6IGBgO1xufVxuXG5mdW5jdGlvbiBiaW5kKGNvbXBvbmVudCwgbmFtZSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBpbmRleCA9IGNvbXBvbmVudC4kJC5wcm9wc1tuYW1lXTtcbiAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb21wb25lbnQuJCQuYm91bmRbaW5kZXhdID0gY2FsbGJhY2s7XG4gICAgICAgIGNhbGxiYWNrKGNvbXBvbmVudC4kJC5jdHhbaW5kZXhdKTtcbiAgICB9XG59XG5mdW5jdGlvbiBjcmVhdGVfY29tcG9uZW50KGJsb2NrKSB7XG4gICAgYmxvY2sgJiYgYmxvY2suYygpO1xufVxuZnVuY3Rpb24gY2xhaW1fY29tcG9uZW50KGJsb2NrLCBwYXJlbnRfbm9kZXMpIHtcbiAgICBibG9jayAmJiBibG9jay5sKHBhcmVudF9ub2Rlcyk7XG59XG5mdW5jdGlvbiBtb3VudF9jb21wb25lbnQoY29tcG9uZW50LCB0YXJnZXQsIGFuY2hvcikge1xuICAgIGNvbnN0IHsgZnJhZ21lbnQsIG9uX21vdW50LCBvbl9kZXN0cm95LCBhZnRlcl91cGRhdGUgfSA9IGNvbXBvbmVudC4kJDtcbiAgICBmcmFnbWVudCAmJiBmcmFnbWVudC5tKHRhcmdldCwgYW5jaG9yKTtcbiAgICAvLyBvbk1vdW50IGhhcHBlbnMgYmVmb3JlIHRoZSBpbml0aWFsIGFmdGVyVXBkYXRlXG4gICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld19vbl9kZXN0cm95ID0gb25fbW91bnQubWFwKHJ1bikuZmlsdGVyKGlzX2Z1bmN0aW9uKTtcbiAgICAgICAgaWYgKG9uX2Rlc3Ryb3kpIHtcbiAgICAgICAgICAgIG9uX2Rlc3Ryb3kucHVzaCguLi5uZXdfb25fZGVzdHJveSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBFZGdlIGNhc2UgLSBjb21wb25lbnQgd2FzIGRlc3Ryb3llZCBpbW1lZGlhdGVseSxcbiAgICAgICAgICAgIC8vIG1vc3QgbGlrZWx5IGFzIGEgcmVzdWx0IG9mIGEgYmluZGluZyBpbml0aWFsaXNpbmdcbiAgICAgICAgICAgIHJ1bl9hbGwobmV3X29uX2Rlc3Ryb3kpO1xuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudC4kJC5vbl9tb3VudCA9IFtdO1xuICAgIH0pO1xuICAgIGFmdGVyX3VwZGF0ZS5mb3JFYWNoKGFkZF9yZW5kZXJfY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gZGVzdHJveV9jb21wb25lbnQoY29tcG9uZW50LCBkZXRhY2hpbmcpIHtcbiAgICBjb25zdCAkJCA9IGNvbXBvbmVudC4kJDtcbiAgICBpZiAoJCQuZnJhZ21lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcnVuX2FsbCgkJC5vbl9kZXN0cm95KTtcbiAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQuZChkZXRhY2hpbmcpO1xuICAgICAgICAvLyBUT0RPIG51bGwgb3V0IG90aGVyIHJlZnMsIGluY2x1ZGluZyBjb21wb25lbnQuJCQgKGJ1dCBuZWVkIHRvXG4gICAgICAgIC8vIHByZXNlcnZlIGZpbmFsIHN0YXRlPylcbiAgICAgICAgJCQub25fZGVzdHJveSA9ICQkLmZyYWdtZW50ID0gbnVsbDtcbiAgICAgICAgJCQuY3R4ID0gW107XG4gICAgfVxufVxuZnVuY3Rpb24gbWFrZV9kaXJ0eShjb21wb25lbnQsIGkpIHtcbiAgICBpZiAoY29tcG9uZW50LiQkLmRpcnR5WzBdID09PSAtMSkge1xuICAgICAgICBkaXJ0eV9jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICAgICAgc2NoZWR1bGVfdXBkYXRlKCk7XG4gICAgICAgIGNvbXBvbmVudC4kJC5kaXJ0eS5maWxsKDApO1xuICAgIH1cbiAgICBjb21wb25lbnQuJCQuZGlydHlbKGkgLyAzMSkgfCAwXSB8PSAoMSA8PCAoaSAlIDMxKSk7XG59XG5mdW5jdGlvbiBpbml0KGNvbXBvbmVudCwgb3B0aW9ucywgaW5zdGFuY2UsIGNyZWF0ZV9mcmFnbWVudCwgbm90X2VxdWFsLCBwcm9wcywgZGlydHkgPSBbLTFdKSB7XG4gICAgY29uc3QgcGFyZW50X2NvbXBvbmVudCA9IGN1cnJlbnRfY29tcG9uZW50O1xuICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpO1xuICAgIGNvbnN0IHByb3BfdmFsdWVzID0gb3B0aW9ucy5wcm9wcyB8fCB7fTtcbiAgICBjb25zdCAkJCA9IGNvbXBvbmVudC4kJCA9IHtcbiAgICAgICAgZnJhZ21lbnQ6IG51bGwsXG4gICAgICAgIGN0eDogbnVsbCxcbiAgICAgICAgLy8gc3RhdGVcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIHVwZGF0ZTogbm9vcCxcbiAgICAgICAgbm90X2VxdWFsLFxuICAgICAgICBib3VuZDogYmxhbmtfb2JqZWN0KCksXG4gICAgICAgIC8vIGxpZmVjeWNsZVxuICAgICAgICBvbl9tb3VudDogW10sXG4gICAgICAgIG9uX2Rlc3Ryb3k6IFtdLFxuICAgICAgICBiZWZvcmVfdXBkYXRlOiBbXSxcbiAgICAgICAgYWZ0ZXJfdXBkYXRlOiBbXSxcbiAgICAgICAgY29udGV4dDogbmV3IE1hcChwYXJlbnRfY29tcG9uZW50ID8gcGFyZW50X2NvbXBvbmVudC4kJC5jb250ZXh0IDogW10pLFxuICAgICAgICAvLyBldmVyeXRoaW5nIGVsc2VcbiAgICAgICAgY2FsbGJhY2tzOiBibGFua19vYmplY3QoKSxcbiAgICAgICAgZGlydHlcbiAgICB9O1xuICAgIGxldCByZWFkeSA9IGZhbHNlO1xuICAgICQkLmN0eCA9IGluc3RhbmNlXG4gICAgICAgID8gaW5zdGFuY2UoY29tcG9uZW50LCBwcm9wX3ZhbHVlcywgKGksIHJldCwgLi4ucmVzdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByZXN0Lmxlbmd0aCA/IHJlc3RbMF0gOiByZXQ7XG4gICAgICAgICAgICBpZiAoJCQuY3R4ICYmIG5vdF9lcXVhbCgkJC5jdHhbaV0sICQkLmN0eFtpXSA9IHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICgkJC5ib3VuZFtpXSlcbiAgICAgICAgICAgICAgICAgICAgJCQuYm91bmRbaV0odmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChyZWFkeSlcbiAgICAgICAgICAgICAgICAgICAgbWFrZV9kaXJ0eShjb21wb25lbnQsIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSlcbiAgICAgICAgOiBbXTtcbiAgICAkJC51cGRhdGUoKTtcbiAgICByZWFkeSA9IHRydWU7XG4gICAgcnVuX2FsbCgkJC5iZWZvcmVfdXBkYXRlKTtcbiAgICAvLyBgZmFsc2VgIGFzIGEgc3BlY2lhbCBjYXNlIG9mIG5vIERPTSBjb21wb25lbnRcbiAgICAkJC5mcmFnbWVudCA9IGNyZWF0ZV9mcmFnbWVudCA/IGNyZWF0ZV9mcmFnbWVudCgkJC5jdHgpIDogZmFsc2U7XG4gICAgaWYgKG9wdGlvbnMudGFyZ2V0KSB7XG4gICAgICAgIGlmIChvcHRpb25zLmh5ZHJhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gY2hpbGRyZW4ob3B0aW9ucy50YXJnZXQpO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgICAgICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50Lmwobm9kZXMpO1xuICAgICAgICAgICAgbm9kZXMuZm9yRWFjaChkZXRhY2gpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgICAgICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50LmMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5pbnRybylcbiAgICAgICAgICAgIHRyYW5zaXRpb25faW4oY29tcG9uZW50LiQkLmZyYWdtZW50KTtcbiAgICAgICAgbW91bnRfY29tcG9uZW50KGNvbXBvbmVudCwgb3B0aW9ucy50YXJnZXQsIG9wdGlvbnMuYW5jaG9yKTtcbiAgICAgICAgZmx1c2goKTtcbiAgICB9XG4gICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KHBhcmVudF9jb21wb25lbnQpO1xufVxubGV0IFN2ZWx0ZUVsZW1lbnQ7XG5pZiAodHlwZW9mIEhUTUxFbGVtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgU3ZlbHRlRWxlbWVudCA9IGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogaW1wcm92ZSB0eXBpbmdzXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLiQkLnNsb3R0ZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRvZG86IGltcHJvdmUgdHlwaW5nc1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy4kJC5zbG90dGVkW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhhdHRyLCBfb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzW2F0dHJdID0gbmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgJGRlc3Ryb3koKSB7XG4gICAgICAgICAgICBkZXN0cm95X2NvbXBvbmVudCh0aGlzLCAxKTtcbiAgICAgICAgICAgIHRoaXMuJGRlc3Ryb3kgPSBub29wO1xuICAgICAgICB9XG4gICAgICAgICRvbih0eXBlLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgLy8gVE9ETyBzaG91bGQgdGhpcyBkZWxlZ2F0ZSB0byBhZGRFdmVudExpc3RlbmVyP1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdIHx8ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSA9IFtdKSk7XG4gICAgICAgICAgICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gY2FsbGJhY2tzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAkc2V0KCkge1xuICAgICAgICAgICAgLy8gb3ZlcnJpZGRlbiBieSBpbnN0YW5jZSwgaWYgaXQgaGFzIHByb3BzXG4gICAgICAgIH1cbiAgICB9O1xufVxuY2xhc3MgU3ZlbHRlQ29tcG9uZW50IHtcbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgZGVzdHJveV9jb21wb25lbnQodGhpcywgMSk7XG4gICAgICAgIHRoaXMuJGRlc3Ryb3kgPSBub29wO1xuICAgIH1cbiAgICAkb24odHlwZSwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdIHx8ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSA9IFtdKSk7XG4gICAgICAgIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gY2FsbGJhY2tzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICBjYWxsYmFja3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgJHNldCgpIHtcbiAgICAgICAgLy8gb3ZlcnJpZGRlbiBieSBpbnN0YW5jZSwgaWYgaXQgaGFzIHByb3BzXG4gICAgfVxufVxuXG5mdW5jdGlvbiBkaXNwYXRjaF9kZXYodHlwZSwgZGV0YWlsKSB7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChjdXN0b21fZXZlbnQodHlwZSwgT2JqZWN0LmFzc2lnbih7IHZlcnNpb246ICczLjIyLjMnIH0sIGRldGFpbCkpKTtcbn1cbmZ1bmN0aW9uIGFwcGVuZF9kZXYodGFyZ2V0LCBub2RlKSB7XG4gICAgZGlzcGF0Y2hfZGV2KFwiU3ZlbHRlRE9NSW5zZXJ0XCIsIHsgdGFyZ2V0LCBub2RlIH0pO1xuICAgIGFwcGVuZCh0YXJnZXQsIG5vZGUpO1xufVxuZnVuY3Rpb24gaW5zZXJ0X2Rldih0YXJnZXQsIG5vZGUsIGFuY2hvcikge1xuICAgIGRpc3BhdGNoX2RldihcIlN2ZWx0ZURPTUluc2VydFwiLCB7IHRhcmdldCwgbm9kZSwgYW5jaG9yIH0pO1xuICAgIGluc2VydCh0YXJnZXQsIG5vZGUsIGFuY2hvcik7XG59XG5mdW5jdGlvbiBkZXRhY2hfZGV2KG5vZGUpIHtcbiAgICBkaXNwYXRjaF9kZXYoXCJTdmVsdGVET01SZW1vdmVcIiwgeyBub2RlIH0pO1xuICAgIGRldGFjaChub2RlKTtcbn1cbmZ1bmN0aW9uIGRldGFjaF9iZXR3ZWVuX2RldihiZWZvcmUsIGFmdGVyKSB7XG4gICAgd2hpbGUgKGJlZm9yZS5uZXh0U2libGluZyAmJiBiZWZvcmUubmV4dFNpYmxpbmcgIT09IGFmdGVyKSB7XG4gICAgICAgIGRldGFjaF9kZXYoYmVmb3JlLm5leHRTaWJsaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkZXRhY2hfYmVmb3JlX2RldihhZnRlcikge1xuICAgIHdoaWxlIChhZnRlci5wcmV2aW91c1NpYmxpbmcpIHtcbiAgICAgICAgZGV0YWNoX2RldihhZnRlci5wcmV2aW91c1NpYmxpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRldGFjaF9hZnRlcl9kZXYoYmVmb3JlKSB7XG4gICAgd2hpbGUgKGJlZm9yZS5uZXh0U2libGluZykge1xuICAgICAgICBkZXRhY2hfZGV2KGJlZm9yZS5uZXh0U2libGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gbGlzdGVuX2Rldihub2RlLCBldmVudCwgaGFuZGxlciwgb3B0aW9ucywgaGFzX3ByZXZlbnRfZGVmYXVsdCwgaGFzX3N0b3BfcHJvcGFnYXRpb24pIHtcbiAgICBjb25zdCBtb2RpZmllcnMgPSBvcHRpb25zID09PSB0cnVlID8gW1wiY2FwdHVyZVwiXSA6IG9wdGlvbnMgPyBBcnJheS5mcm9tKE9iamVjdC5rZXlzKG9wdGlvbnMpKSA6IFtdO1xuICAgIGlmIChoYXNfcHJldmVudF9kZWZhdWx0KVxuICAgICAgICBtb2RpZmllcnMucHVzaCgncHJldmVudERlZmF1bHQnKTtcbiAgICBpZiAoaGFzX3N0b3BfcHJvcGFnYXRpb24pXG4gICAgICAgIG1vZGlmaWVycy5wdXNoKCdzdG9wUHJvcGFnYXRpb24nKTtcbiAgICBkaXNwYXRjaF9kZXYoXCJTdmVsdGVET01BZGRFdmVudExpc3RlbmVyXCIsIHsgbm9kZSwgZXZlbnQsIGhhbmRsZXIsIG1vZGlmaWVycyB9KTtcbiAgICBjb25zdCBkaXNwb3NlID0gbGlzdGVuKG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaF9kZXYoXCJTdmVsdGVET01SZW1vdmVFdmVudExpc3RlbmVyXCIsIHsgbm9kZSwgZXZlbnQsIGhhbmRsZXIsIG1vZGlmaWVycyB9KTtcbiAgICAgICAgZGlzcG9zZSgpO1xuICAgIH07XG59XG5mdW5jdGlvbiBhdHRyX2Rldihub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgYXR0cihub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICBpZiAodmFsdWUgPT0gbnVsbClcbiAgICAgICAgZGlzcGF0Y2hfZGV2KFwiU3ZlbHRlRE9NUmVtb3ZlQXR0cmlidXRlXCIsIHsgbm9kZSwgYXR0cmlidXRlIH0pO1xuICAgIGVsc2VcbiAgICAgICAgZGlzcGF0Y2hfZGV2KFwiU3ZlbHRlRE9NU2V0QXR0cmlidXRlXCIsIHsgbm9kZSwgYXR0cmlidXRlLCB2YWx1ZSB9KTtcbn1cbmZ1bmN0aW9uIHByb3BfZGV2KG5vZGUsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIG5vZGVbcHJvcGVydHldID0gdmFsdWU7XG4gICAgZGlzcGF0Y2hfZGV2KFwiU3ZlbHRlRE9NU2V0UHJvcGVydHlcIiwgeyBub2RlLCBwcm9wZXJ0eSwgdmFsdWUgfSk7XG59XG5mdW5jdGlvbiBkYXRhc2V0X2Rldihub2RlLCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBub2RlLmRhdGFzZXRbcHJvcGVydHldID0gdmFsdWU7XG4gICAgZGlzcGF0Y2hfZGV2KFwiU3ZlbHRlRE9NU2V0RGF0YXNldFwiLCB7IG5vZGUsIHByb3BlcnR5LCB2YWx1ZSB9KTtcbn1cbmZ1bmN0aW9uIHNldF9kYXRhX2Rldih0ZXh0LCBkYXRhKSB7XG4gICAgZGF0YSA9ICcnICsgZGF0YTtcbiAgICBpZiAodGV4dC5kYXRhID09PSBkYXRhKVxuICAgICAgICByZXR1cm47XG4gICAgZGlzcGF0Y2hfZGV2KFwiU3ZlbHRlRE9NU2V0RGF0YVwiLCB7IG5vZGU6IHRleHQsIGRhdGEgfSk7XG4gICAgdGV4dC5kYXRhID0gZGF0YTtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlX2VhY2hfYXJndW1lbnQoYXJnKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcgIT09ICdzdHJpbmcnICYmICEoYXJnICYmIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIGFyZykpIHtcbiAgICAgICAgbGV0IG1zZyA9ICd7I2VhY2h9IG9ubHkgaXRlcmF0ZXMgb3ZlciBhcnJheS1saWtlIG9iamVjdHMuJztcbiAgICAgICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgYXJnICYmIFN5bWJvbC5pdGVyYXRvciBpbiBhcmcpIHtcbiAgICAgICAgICAgIG1zZyArPSAnIFlvdSBjYW4gdXNlIGEgc3ByZWFkIHRvIGNvbnZlcnQgdGhpcyBpdGVyYWJsZSBpbnRvIGFuIGFycmF5Lic7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gdmFsaWRhdGVfc2xvdHMobmFtZSwgc2xvdCwga2V5cykge1xuICAgIGZvciAoY29uc3Qgc2xvdF9rZXkgb2YgT2JqZWN0LmtleXMoc2xvdCkpIHtcbiAgICAgICAgaWYgKCF+a2V5cy5pbmRleE9mKHNsb3Rfa2V5KSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGA8JHtuYW1lfT4gcmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBzbG90IFwiJHtzbG90X2tleX1cIi5gKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmNsYXNzIFN2ZWx0ZUNvbXBvbmVudERldiBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBpZiAoIW9wdGlvbnMgfHwgKCFvcHRpb25zLnRhcmdldCAmJiAhb3B0aW9ucy4kJGlubGluZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJ3RhcmdldCcgaXMgYSByZXF1aXJlZCBvcHRpb25gKTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgc3VwZXIuJGRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy4kZGVzdHJveSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgQ29tcG9uZW50IHdhcyBhbHJlYWR5IGRlc3Ryb3llZGApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgfTtcbiAgICB9XG4gICAgJGNhcHR1cmVfc3RhdGUoKSB7IH1cbiAgICAkaW5qZWN0X3N0YXRlKCkgeyB9XG59XG5mdW5jdGlvbiBsb29wX2d1YXJkKHRpbWVvdXQpIHtcbiAgICBjb25zdCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKERhdGUubm93KCkgLSBzdGFydCA+IHRpbWVvdXQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW5maW5pdGUgbG9vcCBkZXRlY3RlZGApO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IHsgSHRtbFRhZywgU3ZlbHRlQ29tcG9uZW50LCBTdmVsdGVDb21wb25lbnREZXYsIFN2ZWx0ZUVsZW1lbnQsIGFjdGlvbl9kZXN0cm95ZXIsIGFkZF9hdHRyaWJ1dGUsIGFkZF9jbGFzc2VzLCBhZGRfZmx1c2hfY2FsbGJhY2ssIGFkZF9sb2NhdGlvbiwgYWRkX3JlbmRlcl9jYWxsYmFjaywgYWRkX3Jlc2l6ZV9saXN0ZW5lciwgYWRkX3RyYW5zZm9ybSwgYWZ0ZXJVcGRhdGUsIGFwcGVuZCwgYXBwZW5kX2RldiwgYXNzaWduLCBhdHRyLCBhdHRyX2RldiwgYmVmb3JlVXBkYXRlLCBiaW5kLCBiaW5kaW5nX2NhbGxiYWNrcywgYmxhbmtfb2JqZWN0LCBidWJibGUsIGNoZWNrX291dHJvcywgY2hpbGRyZW4sIGNsYWltX2NvbXBvbmVudCwgY2xhaW1fZWxlbWVudCwgY2xhaW1fc3BhY2UsIGNsYWltX3RleHQsIGNsZWFyX2xvb3BzLCBjb21wb25lbnRfc3Vic2NyaWJlLCBjb21wdXRlX3Jlc3RfcHJvcHMsIGNyZWF0ZUV2ZW50RGlzcGF0Y2hlciwgY3JlYXRlX2FuaW1hdGlvbiwgY3JlYXRlX2JpZGlyZWN0aW9uYWxfdHJhbnNpdGlvbiwgY3JlYXRlX2NvbXBvbmVudCwgY3JlYXRlX2luX3RyYW5zaXRpb24sIGNyZWF0ZV9vdXRfdHJhbnNpdGlvbiwgY3JlYXRlX3Nsb3QsIGNyZWF0ZV9zc3JfY29tcG9uZW50LCBjdXJyZW50X2NvbXBvbmVudCwgY3VzdG9tX2V2ZW50LCBkYXRhc2V0X2RldiwgZGVidWcsIGRlc3Ryb3lfYmxvY2ssIGRlc3Ryb3lfY29tcG9uZW50LCBkZXN0cm95X2VhY2gsIGRldGFjaCwgZGV0YWNoX2FmdGVyX2RldiwgZGV0YWNoX2JlZm9yZV9kZXYsIGRldGFjaF9iZXR3ZWVuX2RldiwgZGV0YWNoX2RldiwgZGlydHlfY29tcG9uZW50cywgZGlzcGF0Y2hfZGV2LCBlYWNoLCBlbGVtZW50LCBlbGVtZW50X2lzLCBlbXB0eSwgZXNjYXBlLCBlc2NhcGVkLCBleGNsdWRlX2ludGVybmFsX3Byb3BzLCBmaXhfYW5kX2Rlc3Ryb3lfYmxvY2ssIGZpeF9hbmRfb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2ssIGZpeF9wb3NpdGlvbiwgZmx1c2gsIGdldENvbnRleHQsIGdldF9iaW5kaW5nX2dyb3VwX3ZhbHVlLCBnZXRfY3VycmVudF9jb21wb25lbnQsIGdldF9zbG90X2NoYW5nZXMsIGdldF9zbG90X2NvbnRleHQsIGdldF9zcHJlYWRfb2JqZWN0LCBnZXRfc3ByZWFkX3VwZGF0ZSwgZ2V0X3N0b3JlX3ZhbHVlLCBnbG9iYWxzLCBncm91cF9vdXRyb3MsIGhhbmRsZV9wcm9taXNlLCBoYXNfcHJvcCwgaWRlbnRpdHksIGluaXQsIGluc2VydCwgaW5zZXJ0X2RldiwgaW50cm9zLCBpbnZhbGlkX2F0dHJpYnV0ZV9uYW1lX2NoYXJhY3RlciwgaXNfY2xpZW50LCBpc19jcm9zc29yaWdpbiwgaXNfZnVuY3Rpb24sIGlzX3Byb21pc2UsIGxpc3RlbiwgbGlzdGVuX2RldiwgbG9vcCwgbG9vcF9ndWFyZCwgbWlzc2luZ19jb21wb25lbnQsIG1vdW50X2NvbXBvbmVudCwgbm9vcCwgbm90X2VxdWFsLCBub3csIG51bGxfdG9fZW1wdHksIG9iamVjdF93aXRob3V0X3Byb3BlcnRpZXMsIG9uRGVzdHJveSwgb25Nb3VudCwgb25jZSwgb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2ssIHByZXZlbnRfZGVmYXVsdCwgcHJvcF9kZXYsIHF1ZXJ5X3NlbGVjdG9yX2FsbCwgcmFmLCBydW4sIHJ1bl9hbGwsIHNhZmVfbm90X2VxdWFsLCBzY2hlZHVsZV91cGRhdGUsIHNlbGVjdF9tdWx0aXBsZV92YWx1ZSwgc2VsZWN0X29wdGlvbiwgc2VsZWN0X29wdGlvbnMsIHNlbGVjdF92YWx1ZSwgc2VsZiwgc2V0Q29udGV4dCwgc2V0X2F0dHJpYnV0ZXMsIHNldF9jdXJyZW50X2NvbXBvbmVudCwgc2V0X2N1c3RvbV9lbGVtZW50X2RhdGEsIHNldF9kYXRhLCBzZXRfZGF0YV9kZXYsIHNldF9pbnB1dF90eXBlLCBzZXRfaW5wdXRfdmFsdWUsIHNldF9ub3csIHNldF9yYWYsIHNldF9zdG9yZV92YWx1ZSwgc2V0X3N0eWxlLCBzZXRfc3ZnX2F0dHJpYnV0ZXMsIHNwYWNlLCBzcHJlYWQsIHN0b3BfcHJvcGFnYXRpb24sIHN1YnNjcmliZSwgc3ZnX2VsZW1lbnQsIHRleHQsIHRpY2ssIHRpbWVfcmFuZ2VzX3RvX2FycmF5LCB0b19udW1iZXIsIHRvZ2dsZV9jbGFzcywgdHJhbnNpdGlvbl9pbiwgdHJhbnNpdGlvbl9vdXQsIHVwZGF0ZV9rZXllZF9lYWNoLCB2YWxpZGF0ZV9jb21wb25lbnQsIHZhbGlkYXRlX2VhY2hfYXJndW1lbnQsIHZhbGlkYXRlX2VhY2hfa2V5cywgdmFsaWRhdGVfc2xvdHMsIHZhbGlkYXRlX3N0b3JlLCB4bGlua19hdHRyIH07XG4iLCI8c2NyaXB0PlxyXG4gIGltcG9ydCBDaGFydCBmcm9tICdzdmVsdGUtZnJhcHBlLWNoYXJ0cyc7XHJcbiBcclxuXHJcbiAgbGV0IGRhdGEgPSB7XHJcbiAgICBsYWJlbHM6IFsnU3VuJywgJ01vbicsICdUdWVzJywgJ1dlZCcsICdUaHVycycsICdGcmknLCAnU2F0J10sXHJcbiAgICBkYXRhc2V0czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdmFsdWVzOiBbMTAsIDEyLCAzLCA5LCA4LCAxNSwgOV1cclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH07XHJcbjwvc2NyaXB0PlxyXG4gXHJcbjxDaGFydCBkYXRhPXtkYXRhfSB0eXBlPVwibGluZVwiIC8+IiwiXHJcblxyXG48c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cclxuXHRleHBvcnQgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZmV0Y2goYG5ld19zZXNzaW9ucy5qc29uYCkudGhlbihyID0+IHIuanNvbigpKS50aGVuKG9wdGlvbnMgPT4ge1xyXG5cdFx0XHRyZXR1cm4geyBvcHRpb25zIH07XHJcblx0XHR9KTtcclxuXHR9XHRcclxuICAgIFxyXG48L3NjcmlwdD5cclxuXHJcblxyXG48c2NyaXB0PlxyXG5cclxuICAgIGV4cG9ydCBsZXQgb3B0aW9ucztcclxuXHJcblxyXG4gICAgbGV0IGxpc3QgPSBbXVxyXG5cclxuICAgIG9wdGlvbnMuZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICBsaXN0LnB1c2goeC5mZWF0dXJlcylcclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmxvZyhsaXN0KVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgbGV0IGVycm9yX2Jvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xyXG4gICAgICAgY29uc29sZS5sb2coMSlcclxuICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgIGNvbnNvbGUubG9nKDEpXHJcbiAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xyXG4gICAgICAgY29uc29sZS5sb2coMSlcclxuICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5lbWFpbC52YWx1ZSk7XHJcbiAgICAgICBjb25zb2xlLmxvZygxKVxyXG4gICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnBhc3N3b3JkLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgIGZ1bmN0aW9uIHZhbGlkYXRlTWVzc2FnZUVtYWlsKGV2ZW50KSB7XHJcbiAgICAgICBsZXQgdGV4dGJveCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgIGVycm9yX2Jvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgIGlmICh0ZXh0Ym94LnZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICB0ZXh0Ym94LnNldEN1c3RvbVZhbGlkaXR5KCdSZXF1aXJlZCBlbWFpbCBhZGRyZXNzJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0ZXh0Ym94LnZhbGlkaXR5LnR5cGVNaXNtYXRjaCl7XHJcbiAgICAgICAgICAgIGVycm9yX2Jvb2xlYW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB0ZXh0Ym94LnNldEN1c3RvbVZhbGlkaXR5KCdwbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICB0ZXh0Ym94LnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuXHJcblxyXG48Zm9ybVxyXG4gICAgb246c3VibWl0fHByZXZlbnREZWZhdWx0PVwie2hhbmRsZVN1Ym1pdH1cIlxyXG4gICAgb246aW52YWxpZD17dmFsaWRhdGVNZXNzYWdlRW1haWx9XHJcbiAgICBvbjpjaGFuZ2VkPXt2YWxpZGF0ZU1lc3NhZ2VFbWFpbH1cclxuICAgIG9uOmlucHV0PXt2YWxpZGF0ZU1lc3NhZ2VFbWFpbH1cclxuPlxyXG4gIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cIm51bWJlclwiIGlkPVwiZW1haWxcIiAvPlxyXG4gIHsjaWYgZXJyb3JfYm9vbGVhbn1cclxuICAgIDxoMT4gT0ggTk8hIEFOIEVSUlJPUiE8L2gxPlxyXG4gIHsvaWZ9XHJcblxyXG4gIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cIm51bWJlclwiIGlkPVwicGFzc3dvcmRcIiAvPlxyXG5cclxuICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5DcmVhdGUgYWNjb3VudDwvYnV0dG9uPlxyXG48L2Zvcm0+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG48ZGl2IGNsYXNzPVwiZmxleCBoLTQ4XCI+XHJcbiAgPGRpdiBjbGFzcz1cImZsZXgtaW5pdGlhbCB3LTIvMyBwLTJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBwLTIgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCBiZy1ncmF5LTEwMFwiPlxyXG4gICAgQ3ljbGluZyBOZXcgU2Vzc2lvblxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImZsZXgtaW5pdGlhbCB3LTEvMyBwLTJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCIgdGV4dC1yaWdodCBwLTJcIj5cclxuICAgIDxpbWcgc3JjPVwiY3ljbGluZy5qcGdcIiBhbHQ9XCJjeWNsaW5nXCI+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICA8Ym9keSBjbGFzcz1cImJnLWJsdWUtMTAwIHctc2NyZWVuIGgtc2NyZWVuXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm14LTUgbXktNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQ6ZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwiZm9udC1ib2xkIHRleHQtM3hsIHRleHQtYmx1ZS04MDBcIj5OZXcgU2Vzc2lvbjwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQ6ZmxleCBtdC0xMiB3LWZ1bGwganVzdGlmeS1hcm91bmRcIj4gXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYi02XCI+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicGItMlwiPkRhdGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlXCIgbmFtZT1cImRhdGVcIiBjbGFzcz1cInNoYWRvdyBob3ZlcjpzaGFkb3ctbWRcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwicGItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicGItMlwiPlNwb3J0czwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbGlzdD1cInNwb3J0c1wiIGlkPVwic3BvcnRcIiBuYW1lPVwic3BvcnRcIiBjbGFzcz1cInNoYWRvdyBob3ZlcjpzaGFkb3ctbWRcIiB2YWx1ZT17bmFtZX0gb246Y2hhbmdlPVwieygpID0+IGFuc3dlciA9ICcnfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkYXRhbGlzdCBpZD1cInNwb3J0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRml0bmVzc1wiPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSm9nZ2luZ1wiPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU3dpbW1pbmdcIj48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJhY2luZyBCaWtlXCI+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kYXRhbGlzdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAtLT5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBiLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInBiLTJcIj5NZXRlcnM8L3A+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwibWV0ZXJzXCIgbmFtZT1cIm1ldGVyc1wiIGNsYXNzPVwic2hhZG93IGhvdmVyOnNoYWRvdy1tZFwiPiAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicGItMlwiPk1pbnV0ZXM8L3A+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwibWludXRlc1wiIG5hbWU9XCJtaW51dGVzXCIgY2xhc3M9XCJzaGFkb3cgaG92ZXI6c2hhZG93LW1kXCI+ICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBiLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInBiLTJcIj5FbGV2YXRpb248L3A+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwiZWxldmF0aW9uXCIgbmFtZT1cImVsZXZhdGlvblwiIGNsYXNzPVwic2hhZG93IGhvdmVyOnNoYWRvdy1tZFwiPiAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2JvZHk+IFxyXG5cclxuPCEtLSBDaGVjayB0aGF0IGFsbCBpbnB1dHMgYXJlIHByb3ZpZGVkIDogLS0+XHJcblxyXG5cclxuXHJcblxyXG48IS0tIFxyXG48Zm9ybSBvbjpzdWJtaXR8cHJldmVudERlZmF1bHQ9XCJ7aGFuZGxlU3VibWl0fVwiID5cclxuICA8bGFiZWwgY2xhc3M9J2JnLWJsdWUtMTAwJyBmb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cIm51bWJlclwiIGlkPVwiZW1haWxcIiAvPlxyXG5cclxuICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJudW1iZXJcIiBpZD1cInBhc3N3b3JkXCIgLz5cclxuICBcclxuICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5DcmVhdGUgYWNjb3VudDwvYnV0dG9uPlxyXG48L2Zvcm0+XHJcblxyXG48c2NyaXB0PlxyXG4gICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQuZW1haWwudmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5wYXNzd29yZC52YWx1ZSk7XHJcbiAgICB9XHJcbjwvc2NyaXB0PiAtLT5cclxuXHJcbiIsIiAgICBcclxuPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XHJcblx0ZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMsIHF1ZXJ5IH0pIHtcclxuXHRcdHJldHVybiB0aGlzLmZldGNoKGBzcG9ydHMvY3ljbGluZy5qc29uYCkudGhlbihyID0+IHIuanNvbigpKS50aGVuKGRhdGFfcmF3ID0+IHtcclxuXHRcdFx0cmV0dXJuIHsgZGF0YV9yYXcgfTtcclxuXHRcdH0pO1xyXG5cdH1cdFxyXG4gICAgXHJcbiAgICBleHBvcnQgbGV0IGRhdGFfcmF3XHJcblx0aW1wb3J0IEJveCBmcm9tICcuL0JveC5zdmVsdGUnO1xyXG5cclxuPC9zY3JpcHQ+XHJcblxyXG5cclxuXHJcbjxkaXYgY2xhc3M9J3RleHQtY2VudGVyIHAtMTAnPlxyXG48aDE+Q2xpY2sgdG8gc3BvcnQgdG8gZW50ZXIgbmV3IHNlc3Npb248L2gxPlxyXG5cclxuPC9kaXY+XHJcblxyXG5cclxuXHJcblxyXG48ZGl2IGNsYXNzPVwiZmxleCBjb250ZW50LXN0YXJ0IGZsZXgtd3JhcCBoLTQ4XCI+XHJcbiAgPGRpdiBjbGFzcz1cInctMS8yIHAtMlwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyICBwLTJcIj5cclxuXHRcdDxCb3g+XHJcblx0XHRcdDxhIGhyZWY9J25ld19zZXNzaW9ucy9uZXdfY3ljbGluZyc+XHJcblx0XHRcdDxwIGNsYXNzPScgZm9udC1ib2xkIHBiLTInPkN5Y2xpbmc8L3A+XHJcblx0XHRcdDxpbWcgc3JjPVwiY3ljbGluZy5qcGdcIiBhbHQ9XCJjeWNsaW5nXCI+XHJcblx0XHRcdDwvYT5cclxuXHRcdDwvQm94PlxyXG5cdDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPVwidy0xLzIgcC0yXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiIHRleHQtY2VudGVyIHAtMlwiPlxyXG5cdFx0PEJveD5cclxuXHRcdFx0PGEgaHJlZj0nbmV3X3Nlc3Npb25zL25ld19ydW5uaW5nJz5cclxuXHRcdFx0PHAgY2xhc3M9JyBmb250LWJvbGQgcGItMic+UnVubmluZzwvcD5cclxuXHRcdFx0PGltZyBzcmM9XCJydW5uaW5nLmpwZ1wiIGFsdD1cInJ1bm5pbmdcIj5cclxuXHRcdFx0PC9hPlxyXG5cdFx0PC9Cb3g+XHJcblx0PC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJ3LTEvMiBwLTJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCIgdGV4dC1jZW50ZXIgcC0yXCI+XHJcblx0XHQ8Qm94PlxyXG5cdFx0PGEgaHJlZj0nbmV3X3Nlc3Npb25zL25ld193b3Jrb3V0Jz5cclxuXHRcdDxwIGNsYXNzPScgZm9udC1ib2xkIHBiLTInPldvcmstb3V0PC9wPlxyXG5cdFx0PGltZyBzcmM9XCJ3b3Jrb3V0LmpwZ1wiIGFsdD1cIndvcmtvdXRcIj5cclxuXHRcdDwvYT5cclxuXHRcdDwvQm94PlxyXG5cdDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIFxyXG4gIDxkaXYgY2xhc3M9XCJ3LTEvMiBwLTJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCIgdGV4dC1jZW50ZXIgcC0yXCI+XHJcblx0XHQ8Qm94PlxyXG5cdFx0PGEgaHJlZj0nbmV3X3Nlc3Npb25zL25ld19zd2ltbWluZyc+XHJcblx0XHQ8cCBjbGFzcz0nIGZvbnQtYm9sZCBwYi0yJz5Td2ltbWluZzwvcD5cclxuXHRcdDxpbWcgc3JjPVwic3dpbW1pbmcuanBnXCIgYWx0PVwic3dpbW1pbmdcIj5cclxuXHRcdDwvYT5cclxuXHRcdDwvQm94PlxyXG5cdDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcbjwhLS0gQmVzb2luIGRlIGxhIGxpc3RlIGRlcyBzcG9ydHMgcG9zc2libGVzIC0tPlxyXG48IS0tIFB1aXMgcG91ciBjaGFxdWUgc3BvcnQgYmVzb2luIGRlIGxhIGxpc3RlIGRlcyBtw6l0cmlxdWVzIMOgIHJlbnRyZXIgLS0+XHJcbiAgICBcclxuXHJcbjwhLS0gXHJcbiAgICBcclxuICAgIDxib2R5IGNsYXNzPVwiYmctYmx1ZS0xMDAgdy1zY3JlZW4gaC1zY3JlZW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibXgtNSBteS01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZDpmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJmb250LWJvbGQgdGV4dC0zeGwgdGV4dC1ibHVlLTgwMFwiPk5ldyBTZXNzaW9uPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZDpmbGV4IG10LTEyIHctZnVsbCBqdXN0aWZ5LWFyb3VuZFwiPiBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYi02XCI+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicGItMlwiPkRhdGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlXCIgbmFtZT1cImRhdGVcIiBjbGFzcz1cInNoYWRvdyBob3ZlcjpzaGFkb3ctbWRcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBiLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInBiLTJcIj5TcG9ydHM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbGlzdD1cInNwb3J0c1wiIGlkPVwic3BvcnRcIiBuYW1lPVwic3BvcnRcIiBjbGFzcz1cInNoYWRvdyBob3ZlcjpzaGFkb3ctbWRcIiB2YWx1ZT17bmFtZX0gb246Y2hhbmdlPVwieygpID0+IGFuc3dlciA9ICcnfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkYXRhbGlzdCBpZD1cInNwb3J0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRml0bmVzc1wiPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSm9nZ2luZ1wiPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU3dpbW1pbmdcIj48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJhY2luZyBCaWtlXCI+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kYXRhbGlzdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBiLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInBiLTJcIj5FeGVyY2ljZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBsaXN0PVwiZXhlcmNpY2VzXCIgaWQ9XCJleGVyY2ljZVwiIG5hbWU9XCJleGVyY2ljZVwiIGNsYXNzPVwic2hhZG93IGhvdmVyOnNoYWRvdy1tZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkYXRhbGlzdCBpZD1cImV4ZXJjaWNlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQmljZXBzXCI+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDaGVzdFwiPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ29yZVwiPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUXVhZHNcIj48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNob3VsZGVyc1wiPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQmFja1wiPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVHJpY2Vwc1wiPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR2x1dGVzXCI+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kYXRhbGlzdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBiLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInBiLTJcIj5NZXRyaWNzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGxpc3Q9XCJtZXRyaWNzXCIgaWQ9XCJtZXRyaWNzXCIgbmFtZT1cIm1ldHJpY3NcIiBjbGFzcz1cInNoYWRvdyBob3ZlcjpzaGFkb3ctbWRcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2JvZHk+IFxyXG5cclxuXHJcbiAtLT5cclxuIiwiPCEtLSA8c2NyaXB0PlxyXG4gIGltcG9ydCB7IG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlXCI7XHJcbiAgaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qc1wiO1xyXG4gIG9uTW91bnQoYXN5bmMgKCkgPT4ge30pO1xyXG4gIGZ1bmN0aW9uIHJlbmRlckNoYXJ0KCkge1xyXG4gICAgdmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDaGFydFwiKS5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICB2YXIgY2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgICAgIHR5cGU6IFwibGluZVwiLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbGFiZWxzOiBbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIl0sXHJcbiAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiTXkgRmlyc3QgZGF0YXNldFwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDI1NSwgOTksIDEzMilcIixcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiKDI1NSwgOTksIDEzMilcIixcclxuICAgICAgICAgICAgZGF0YTogWzAsIDEwLCA1LCAyLCAyMCwgMzAsIDQ1XVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAgb3B0aW9uczoge31cclxuICAgIH0pO1xyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48YnV0dG9uIG9uOmNsaWNrPXtyZW5kZXJDaGFydH0+TG9hZDwvYnV0dG9uPiBcclxuPGNhbnZhcyBpZD1cIm15Q2hhcnRcIj48L2NhbnZhcz4gXHJcblxyXG4tLT5cclxuPGNhbnZhcyBpZD1cIm15Q2hhcnRcIiB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIxXCI+PC9jYW52YXM+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBvbk1vdW50IH0gZnJvbSBcInN2ZWx0ZVwiO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDaGFydCgpe1xyXG4gIHZhciBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlDaGFydCcpO1xyXG4gICAgdmFyIG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgICAgICAgdHlwZTogJ2JhcicsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBsYWJlbHM6IFsnUmVkJywgJ0JsdWUnLCAnWWVsbG93JywgJ0dyZWVuJywgJ1B1cnBsZScsICdPcmFuZ2UnXSxcclxuICAgICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJyMgb2YgVm90ZXMnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogWzEyLCAxOSwgMywgNSwgMiwgM10sXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsIDk5LCAxMzIsIDAuMiknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDU0LCAxNjIsIDIzNSwgMC4yKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LCAyMDYsIDg2LCAwLjIpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSg3NSwgMTkyLCAxOTIsIDAuMiknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDE1MywgMTAyLCAyNTUsIDAuMiknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwgMTU5LCA2NCwgMC4yKSdcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwgOTksIDEzMiwgMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDU0LCAxNjIsIDIzNSwgMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwgMjA2LCA4NiwgMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDc1LCAxOTIsIDE5MiwgMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDE1MywgMTAyLCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsIDE1OSwgNjQsIDEpJ1xyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICAgICAgeUF4ZXM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5vbk1vdW50KGNyZWF0ZUNoYXJ0KVxyXG48L3NjcmlwdD5cclxuIiwiPGNhbnZhcyBpZD1cIm15Q2hhcnRcIiB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIxXCI+PC9jYW52YXM+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBvbk1vdW50IH0gZnJvbSBcInN2ZWx0ZVwiO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzXCI7XHJcbmV4cG9ydCBsZXQgZGF0YTsgXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDaGFydCgpe1xyXG4gIHZhciBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlDaGFydCcpO1xyXG4gICAgdmFyIG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgICAgIHlBeGVzOiBcclxuICAgICAgICAgICAgICAgIFt7XHJcbiAgICAgICAgaWQ6ICdNZXRlcnMgY292ZXJlZCcsXHJcbiAgICAgICAgcG9zaXRpb246ICdsZWZ0JyxcclxuICAgICAgfSwge1xyXG4gICAgICAgIGlkOiAnU3ByaW50JyxcclxuICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0JyxcclxuICAgICAgICBncmlkTGluZXM6IHtcclxuICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICAgICAgIH0sXHJcbiAgICAgIH1dXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5vbk1vdW50KGNyZWF0ZUNoYXJ0KVxyXG48L3NjcmlwdD5cclxuIiwiXHJcbjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxyXG5cdGV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zLCBxdWVyeSB9KSB7XHJcblx0XHRyZXR1cm4gdGhpcy5mZXRjaChgc3BvcnRzL3N3aW1taW5nLmpzb25gKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4oZGF0YV9yYXcgPT4ge1xyXG5cdFx0XHRyZXR1cm4geyBkYXRhX3JhdyB9O1xyXG5cdFx0fSk7XHJcblx0fVx0XHJcbiAgICBcclxuXHJcbjwvc2NyaXB0PlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBDaGFydHMgZnJvbSAnLi9zd2ltbWluZy1jaGFydHMuc3ZlbHRlJ1xyXG4gICAgZXhwb3J0IGxldCBkYXRhX3Jhd1xyXG5cclxuXHJcbi8vIENvbXB1dGUgZGF0YSBmb3IgY2hhcnRzXHJcblxyXG4gICAgbGV0IGxpc3RfbWV0ZXJzID0gW107XHJcbiAgICBsZXQgbGlzdF9kYXRlID0gW107XHJcbiAgICBsZXQgbGlzdF9zcHJpbnQgPSBbXTtcclxuICAgIGxldCBsaXN0X21pbnV0ZXMgPSBbXTtcclxuXHJcbiAgICBkYXRhX3Jhdy5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgIGxpc3RfbWV0ZXJzLnB1c2goeC5tZXRlcnMpXHJcbiAgICAgICAgbGlzdF9kYXRlLnB1c2goeC5kYXRlKVxyXG4gICAgICAgIGxpc3Rfc3ByaW50LnB1c2goeC5uYl9zcHJpbnQpXHJcbiAgICAgICAgbGlzdF9taW51dGVzLnB1c2goeC5taW51dGVzKVxyXG4gICAgfSlcclxuXHJcbiAgICBleHBvcnQgY29uc3QgZGF0YSA9IHtcclxuICAgIGxhYmVsczogbGlzdF9kYXRlLFxyXG4gICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgbGFiZWw6ICdNZXRlcnMgY292ZXJlZCcsXHJcbiAgICAgICAgeUF4aXNJRCA6ICdNZXRlcnMgY292ZXJlZCcsXHJcbiAgICAgICAgZGF0YTpsaXN0X21ldGVycyxcclxuICAgICAgICBib3JkZXJDb2xvcjogXCIjM2U5NWNkXCIsXHJcbiAgICAgICAgZmlsbDogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6ICdTcHJpbnQnLFxyXG4gICAgICAgIGRhdGE6bGlzdF9zcHJpbnQsXHJcbiAgICAgICAgeUF4aXNJRCA6ICdTcHJpbnQnLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiBcIiM4ZTVlYTJcIixcclxuICAgICAgICBmaWxsOiBmYWxzZVxyXG4gICAgfV1cclxufVxyXG5cclxuLy8gVE9ETzogdmVyaWZpeSBvcmRlcmluZyBvZiBkYXRlcyBhbmQgc2Vzc2lvbnNcclxuXHJcbmNvbnN0IGF2ZXJhZ2UgPSBhcnIgPT4gYXJyLnJlZHVjZSggKCBwLCBjICkgPT4gcCArIGMsIDAgKSAvIGFyci5sZW5ndGg7XHJcblxyXG5cclxuLy8gVE9ETzogcmlnaHQgbm93IGluY2x1ZGluZyBsYXN0IHNlc3Npb24sIHByb2JhYmx5IHNob3VsZCBub3RcclxuXHJcbi8vIFRPRE86IGNvbG9ycyBncmVlbiBvciByZWQgZm9yIHZhcmlhdGlvbnNcclxuZnVuY3Rpb24gZ2V0X2xhc3RfbmJfc2Vzc2lvbnMoaW50LCBsaXN0KXtcclxuICAgIHJldHVybiBsaXN0LnNsaWNlKE1hdGgubWF4KGxpc3QubGVuZ3RoIC0gaW50LCAwKSlcclxufVxyXG5cclxuZnVuY3Rpb24gZGl2aWRldmVjdG9yKGEsYil7XHJcbiAgICByZXR1cm4gYS5tYXAoKGUsaSkgPT4gZSAvIGJbaV0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2YXJpYXRpb24oeF9uZXcsIHhfb2xkKXtcclxuICAgIGNvbnN0IHZhcmlhdGlvbiA9IE1hdGgucm91bmQoKHhfbmV3LXhfb2xkKS94X29sZCoxMDApXHJcbiAgICByZXR1cm4gdmFyaWF0aW9uXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJvdW5kXzFfZGVjaW1hbChmbG9hdCl7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChmbG9hdCAqIDEwKSAvMTBcclxufVxyXG5cclxuZnVuY3Rpb24gcm91bmRfMl9kZWNpbWFsKGZsb2F0KXtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKGZsb2F0ICogMTAwKSAvIDEwMFxyXG59XHJcblxyXG4vLyBDb21wdXRlIGF2ZXJhZ2UgZGlzdGFuY2UsIHNwZWVkLCBzcHJpbnQsIFxyXG4vLyBMYXN0IHNlc3Npb25cclxuY29uc3QgbGFzdF9kaXN0YW5jZSA9IGxpc3RfbWV0ZXJzW2xpc3RfbWV0ZXJzLmxlbmd0aC0xXVxyXG5jb25zdCBsYXN0X2hvdXJzID0gbGlzdF9taW51dGVzW2xpc3RfbWludXRlcy5sZW5ndGgtMV0vNjBcclxuY29uc3QgbGFzdF9zcGVlZCA9IGxhc3RfZGlzdGFuY2UvMTAwMC9sYXN0X2hvdXJzXHJcbmNvbnN0IGxhc3Rfc3ByaW50ID0gbGlzdF9zcHJpbnRbbGlzdF9zcHJpbnQubGVuZ3RoLTFdXHJcblxyXG5cclxuLy8gTGFzdCAzIHNlc3Npb25zXHJcbi8vY29uc3QgZGlzdGFuY2VfM19zZXNzaW9uID0gbGlzdF9tZXRlcnMuc2xpY2UoTWF0aC5tYXgobGlzdF9tZXRlcnMubGVuZ3RoIC0gMywgMCkpXHJcblxyXG5jb25zdCBkaXN0YW5jZV8zX3Nlc3Npb24gPSBnZXRfbGFzdF9uYl9zZXNzaW9ucygzLCBsaXN0X21ldGVycylcclxuY29uc3QgbWludXRlc18zX3Nlc3Npb24gPSBnZXRfbGFzdF9uYl9zZXNzaW9ucygzLCBsaXN0X21pbnV0ZXMpXHJcbmNvbnN0IHNwcmludF8zX3Nlc3Npb24gPSBnZXRfbGFzdF9uYl9zZXNzaW9ucygzLCBsaXN0X3NwcmludClcclxuY29uc3QgZGF0ZV8zX3Nlc3Npb24gPSBnZXRfbGFzdF9uYl9zZXNzaW9ucygzLCBsaXN0X2RhdGUpXHJcblxyXG5cclxuXHJcbmNvbnN0IGF2ZXJhZ2VfM19kaXN0YW5jZSA9IGF2ZXJhZ2UoZGlzdGFuY2VfM19zZXNzaW9uKVxyXG5jb25zdCBhdmVyYWdlXzNfc3ByaW50ID0gYXZlcmFnZShzcHJpbnRfM19zZXNzaW9uKVxyXG5jb25zdCBhdmVyYWdlXzNfc3BlZWQgPSBhdmVyYWdlKGRpdmlkZXZlY3RvcihkaXN0YW5jZV8zX3Nlc3Npb24gLCBtaW51dGVzXzNfc2Vzc2lvbikpICogNjAvMTAwMCAgXHJcblxyXG5jb25zdCB2YXJpYXRpb25fM19kaXN0YW5jZSA9IHZhcmlhdGlvbihsYXN0X2Rpc3RhbmNlLCBhdmVyYWdlXzNfZGlzdGFuY2UpXHJcbmNvbnN0IHZhcmlhdGlvbl8zX3NwZWVkID0gdmFyaWF0aW9uKGxhc3Rfc3BlZWQsIGF2ZXJhZ2VfM19zcGVlZClcclxuY29uc3QgdmFyaWF0aW9uXzNfc3ByaW50ID0gdmFyaWF0aW9uKGxhc3Rfc3ByaW50LCBhdmVyYWdlXzNfc3ByaW50KVxyXG5cclxuLy8gTGFzdCAxMCBzZXNzaW9uc1xyXG5jb25zdCBkaXN0YW5jZV8xMF9zZXNzaW9uID0gZ2V0X2xhc3RfbmJfc2Vzc2lvbnMoMTAsIGxpc3RfbWV0ZXJzKVxyXG5jb25zdCBtaW51dGVzXzEwX3Nlc3Npb24gPSBnZXRfbGFzdF9uYl9zZXNzaW9ucygxMCwgbGlzdF9taW51dGVzKVxyXG5jb25zdCBzcHJpbnRfMTBfc2Vzc2lvbiA9IGdldF9sYXN0X25iX3Nlc3Npb25zKDEwLCBsaXN0X3NwcmludClcclxuXHJcbmNvbnN0IGF2ZXJhZ2VfMTBfZGlzdGFuY2UgPSBhdmVyYWdlKGRpc3RhbmNlXzEwX3Nlc3Npb24pXHJcbmNvbnN0IGF2ZXJhZ2VfMTBfc3ByaW50ID0gYXZlcmFnZShzcHJpbnRfMTBfc2Vzc2lvbilcclxuY29uc3QgYXZlcmFnZV8xMF9zcGVlZCA9IGF2ZXJhZ2UoZGl2aWRldmVjdG9yKGRpc3RhbmNlXzEwX3Nlc3Npb24gLCBtaW51dGVzXzEwX3Nlc3Npb24pKSAqIDYwLzEwMDBcclxuXHJcbmNvbnN0IHZhcmlhdGlvbl8xMF9kaXN0YW5jZSA9IHZhcmlhdGlvbihsYXN0X2Rpc3RhbmNlLCBhdmVyYWdlXzEwX2Rpc3RhbmNlKVxyXG5jb25zdCB2YXJpYXRpb25fMTBfc3BlZWQgPSB2YXJpYXRpb24obGFzdF9zcGVlZCwgYXZlcmFnZV8xMF9zcGVlZClcclxuY29uc3QgdmFyaWF0aW9uXzEwX3NwcmludCA9IHZhcmlhdGlvbihsYXN0X3NwcmludCwgYXZlcmFnZV8xMF9zcHJpbnQpXHJcblxyXG5jb25zdCBuYl9kaXNwbGF5ZWQgPSAzXHJcblxyXG5cclxuXHJcbjwvc2NyaXB0PlxyXG5cclxuXHJcbjxzdHlsZT5cclxuXHJcbjwvc3R5bGU+XHJcblxyXG48ZGl2IGNsYXNzPVwibWItMjBcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJtYi02IHNoYWRvdyBcIj5cclxuICAgICAgICA8aW1nIHNyYz1cInN3aW1taW5nMi5qcGdcIiBhbHQ9XCJjeWNsaW5nXCIgY2xhc3M9XCJvYmplY3QtY292ZXIgaC00OCB3LWZ1bGwgc2hhZG93IHJvdW5kZWQtbWRcIj5cclxuICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtYi0xNiBiZy1ibHVlLTcwMCBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgc2hhZG93LWxnIHJvdW5kZWQtdC1tZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb250LXNhbnMgQXJpYWwgdGV4dC1jZW50ZXIgcC0yIHRleHQtM3hsIHRleHQtYmx1ZS03MDAgZm9udC1zZW1pYm9sZCBiZy1ibHVlLTEwMCBweC04IHRyYWNraW5nLXdpZGVzdFwiPlxyXG4gICAgICAgICAgICBTd2ltbWluZyBQZXJmb3JtYW5jZVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG5cclxuICAgIDxkaXYgY2xhc3M9J3BiLTgnPlxyXG4gICAgICAgIDxoMSBjbGFzcz1cInRleHQtYmx1ZS04MDAgIG1iLTggXCI+TGFzdCBTZXNzaW9uczwvaDE+XHJcbiAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIml0YWxpYyBncmlkIGdyaWQtY29scy0zIGRpdmlkZS14IGRpdmlkZS1ncmF5LTQwMFwiPlxyXG4gICAgICAgICAgICB7I2VhY2ggZ2V0X2xhc3RfbmJfc2Vzc2lvbnMoMywgbGlzdF9kYXRlKSBhcyBkYXRlfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj57ZGF0ZX08L2Rpdj5cclxuICAgICAgICAgICAgey9lYWNofVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImRpdmlkZS15IG10LTE2XCI+XHJcbiAgICAgICAgPGgxIGNsYXNzPVwidGV4dC1ibHVlLTgwMFwiPlBlcmZvcm1hbmNlIFRhYmxlczwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0nbS0xMiBjb250YWluZXIgbXgtYXV0byc+XHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlLWF1dG8gdGV4dC1jZW50ZXIgY29udGFpbmVyIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgPGNhcHRpb24gY2xhc3M9XCJmb250LXNlbWlib2xkIG1iLTYgbXQtOCB0ZXh0LXhsIGl0YWxpYyB0ZXh0LWJsdWUtNzAwXCI+UGVyZm9ybWFuY2UgZXZvbHV0aW9uIG9mIG1haW4gbWV0cmljczwvY2FwdGlvbj5cclxuICAgICAgICAgICAgPHRoZWFkIGNsYXNzPVwiYm9yZGVyLWdyYXktMzAwIGl0YWxpY1wiPlxyXG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwiYmctYmx1ZS0xMDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yXCI+TWV0cmljczwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJweC00IHB5LTJcIj5WYWx1ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggY29sc3Bhbj0yIGNsYXNzPVwicHgtNCBweS0yIFwiPnZzLiBMYXN0IDMgc2Vzc2lvbnM8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIGNvbHNwYW49MiBjbGFzcz1cInB4LTQgcHktMlwiPnZzLiBMYXN0IDEwIHNlc3Npb25zPC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj5EaXN0YW5jZSAobSk8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntsYXN0X2Rpc3RhbmNlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e01hdGgucm91bmQoYXZlcmFnZV8zX2Rpc3RhbmNlKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPnt2YXJpYXRpb25fM19kaXN0YW5jZX0lPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57cm91bmRfMl9kZWNpbWFsKGF2ZXJhZ2VfMTBfZGlzdGFuY2UpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3ZhcmlhdGlvbl8xMF9kaXN0YW5jZX0lPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJiZy1ncmF5LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPlNwZWVkIChrbS9oKTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3JvdW5kXzJfZGVjaW1hbChsYXN0X3NwZWVkKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntyb3VuZF8yX2RlY2ltYWwoYXZlcmFnZV8zX3NwZWVkKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPnt2YXJpYXRpb25fM19zcGVlZH0lPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57cm91bmRfMl9kZWNpbWFsKGF2ZXJhZ2VfMTBfc3BlZWQpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3ZhcmlhdGlvbl8xMF9zcGVlZH0lPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+U3ByaW50czwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e2xhc3Rfc3ByaW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3JvdW5kXzJfZGVjaW1hbChhdmVyYWdlXzNfc3ByaW50KX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPnt2YXJpYXRpb25fM19zcHJpbnR9JTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3JvdW5kXzJfZGVjaW1hbChhdmVyYWdlXzEwX3NwcmludCl9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57dmFyaWF0aW9uXzEwX3NwcmludH0lPC90ZD5cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz0nbS0xMiBjb250YWluZXIgbXgtYXV0byc+XHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlLWF1dG8gdGV4dC1jZW50ZXIgY29udGFpbmVyIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgPGNhcHRpb24gY2xhc3M9XCJmb250LXNlbWlib2xkIG1iLTYgbXQtOCB0ZXh0LXhsIGl0YWxpYyB0ZXh0LWJsdWUtNzAwXCI+UGVyZm9ybWFuY2Ugb2YgbGFzdCBzZXNzaW9uczwvY2FwdGlvbj4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8dGhlYWQgY2xhc3M9XCJpdGFsaWMgYm9yZGVyLWdyYXktMzAwXCI+XHJcbiAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJiZy1ibHVlLTEwMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwXCI+XHJcbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJweC00IHB5LTJcIj5EYXRlPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTQgcHktMlwiPkRpc3RhbmNlIChtKTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJweC00IHB5LTJcIj5UaW1lIChtaW4pPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTQgcHktMlwiPlNwZWVkIChrbS9oKTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJweC00IHB5LTJcIj5TcHJpbnRzPC90aD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuXHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7I2VhY2ggZGlzdGFuY2VfM19zZXNzaW9uIGFzIGRpc3RhbmNlLCBpfVxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntkYXRlXzNfc2Vzc2lvbltpXX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntkaXN0YW5jZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPnttaW51dGVzXzNfc2Vzc2lvbltpXX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntyb3VuZF8yX2RlY2ltYWwoKGRpc3RhbmNlLzEwMDApIC8gKG1pbnV0ZXNfM19zZXNzaW9uW2ldLzYwKSkgfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3NwcmludF8zX3Nlc3Npb25baV19PC90ZD5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICB7L2VhY2h9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm10LThcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzPVwidGV4dC1ibHVlLTgwMCBtYi04IG10LTE2XCI+UGVyZm9ybWFuY2UgQ2hhcnQ8L2gxPlxyXG4gICAgICAgICAgICA8Q2hhcnRzIHtkYXRhfSAvPiBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbiIsIjxjYW52YXMgaWQ9XCJteUNoYXJ0XCIgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiMVwiPjwvY2FudmFzPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gXCJzdmVsdGVcIjtcclxuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qc1wiO1xyXG5leHBvcnQgbGV0IGRhdGE7IFxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2hhcnQoKXtcclxuICB2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Q2hhcnQnKTtcclxuICAgIHZhciBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xyXG4gICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICAgICAgICB5QXhlczogXHJcbiAgICAgICAgICAgICAgICBbe1xyXG4gICAgICAgIGlkOiAnTWV0ZXJzIGNvdmVyZWQnLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnbGVmdCcsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBpZDogJ2VsZXZhdGlvbicsXHJcbiAgICAgICAgcG9zaXRpb246ICdyaWdodCcsXHJcbiAgICAgICAgZ3JpZExpbmVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgICAgICAgICAgICB9LFxyXG4gICAgICB9XVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxub25Nb3VudChjcmVhdGVDaGFydClcclxuPC9zY3JpcHQ+XHJcbiIsIlxyXG48c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cclxuXHRleHBvcnQgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZmV0Y2goYHNwb3J0cy9jeWNsaW5nLmpzb25gKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4oZGF0YV9yYXcgPT4ge1xyXG5cdFx0XHRyZXR1cm4geyBkYXRhX3JhdyB9O1xyXG5cdFx0fSk7XHJcblx0fVx0XHJcbiAgICBcclxuXHJcbjwvc2NyaXB0PlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBDaGFydHMgZnJvbSAnLi9jeWNsaW5nLWNoYXJ0cy5zdmVsdGUnXHJcbiAgICBleHBvcnQgbGV0IGRhdGFfcmF3XHJcblxyXG5cclxuLy8gQ29tcHV0ZSBkYXRhIGZvciBjaGFydHNcclxuXHJcbiAgICBsZXQgbGlzdF9tZXRlcnMgPSBbXTtcclxuICAgIGxldCBsaXN0X2RhdGUgPSBbXTtcclxuICAgIGxldCBsaXN0X2VsZXZhdGlvbiA9IFtdO1xyXG4gICAgbGV0IGxpc3RfbWludXRlcyA9IFtdO1xyXG5cclxuICAgIGRhdGFfcmF3LmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgbGlzdF9tZXRlcnMucHVzaCh4Lm1ldGVycylcclxuICAgICAgICBsaXN0X2RhdGUucHVzaCh4LmRhdGUpXHJcbiAgICAgICAgbGlzdF9lbGV2YXRpb24ucHVzaCh4LmVsZXZhdGlvbilcclxuICAgICAgICBsaXN0X21pbnV0ZXMucHVzaCh4Lm1pbnV0ZXMpXHJcbiAgICB9KVxyXG5cclxuICAgIGV4cG9ydCBjb25zdCBkYXRhID0ge1xyXG4gICAgbGFiZWxzOiBsaXN0X2RhdGUsXHJcbiAgICBkYXRhc2V0czogW3tcclxuICAgICAgICBsYWJlbDogJ01ldGVycyBjb3ZlcmVkJyxcclxuICAgICAgICB5QXhpc0lEIDogJ01ldGVycyBjb3ZlcmVkJyxcclxuICAgICAgICBkYXRhOmxpc3RfbWV0ZXJzLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiBcIiMzZTk1Y2RcIixcclxuICAgICAgICBmaWxsOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogJ2VsZXZhdGlvbicsXHJcbiAgICAgICAgZGF0YTpsaXN0X2VsZXZhdGlvbixcclxuICAgICAgICB5QXhpc0lEIDogJ2VsZXZhdGlvbicsXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzhlNWVhMlwiLFxyXG4gICAgICAgIGZpbGw6IGZhbHNlXHJcbiAgICB9XVxyXG59XHJcblxyXG4vLyBUT0RPOiB2ZXJpZml5IG9yZGVyaW5nIG9mIGRhdGVzIGFuZCBzZXNzaW9uc1xyXG5cclxuY29uc3QgYXZlcmFnZSA9IGFyciA9PiBhcnIucmVkdWNlKCAoIHAsIGMgKSA9PiBwICsgYywgMCApIC8gYXJyLmxlbmd0aDtcclxuXHJcblxyXG4vLyBUT0RPOiByaWdodCBub3cgaW5jbHVkaW5nIGxhc3Qgc2Vzc2lvbiwgcHJvYmFibHkgc2hvdWxkIG5vdFxyXG5cclxuLy8gVE9ETzogY29sb3JzIGdyZWVuIG9yIHJlZCBmb3IgdmFyaWF0aW9uc1xyXG5mdW5jdGlvbiBnZXRfbGFzdF9uYl9zZXNzaW9ucyhpbnQsIGxpc3Qpe1xyXG4gICAgcmV0dXJuIGxpc3Quc2xpY2UoTWF0aC5tYXgobGlzdC5sZW5ndGggLSBpbnQsIDApKVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXZpZGV2ZWN0b3IoYSxiKXtcclxuICAgIHJldHVybiBhLm1hcCgoZSxpKSA9PiBlIC8gYltpXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhcmlhdGlvbih4X25ldywgeF9vbGQpe1xyXG4gICAgY29uc3QgdmFyaWF0aW9uID0gTWF0aC5yb3VuZCgoeF9uZXcteF9vbGQpL3hfb2xkKjEwMClcclxuICAgIHJldHVybiB2YXJpYXRpb25cclxufVxyXG5cclxuZnVuY3Rpb24gcm91bmRfMV9kZWNpbWFsKGZsb2F0KXtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKGZsb2F0ICogMTApIC8xMFxyXG59XHJcblxyXG5mdW5jdGlvbiByb3VuZF8yX2RlY2ltYWwoZmxvYXQpe1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoZmxvYXQgKiAxMDApIC8gMTAwXHJcbn1cclxuXHJcbi8vIENvbXB1dGUgYXZlcmFnZSBkaXN0YW5jZSwgc3BlZWQsIGVsZXZhdGlvbiwgXHJcbi8vIExhc3Qgc2Vzc2lvblxyXG5jb25zdCBsYXN0X2Rpc3RhbmNlID0gbGlzdF9tZXRlcnNbbGlzdF9tZXRlcnMubGVuZ3RoLTFdXHJcbmNvbnN0IGxhc3RfaG91cnMgPSBsaXN0X21pbnV0ZXNbbGlzdF9taW51dGVzLmxlbmd0aC0xXS82MFxyXG5jb25zdCBsYXN0X3NwZWVkID0gbGFzdF9kaXN0YW5jZS8xMDAwL2xhc3RfaG91cnNcclxuY29uc3QgbGFzdF9lbGV2YXRpb24gPSBsaXN0X2VsZXZhdGlvbltsaXN0X2VsZXZhdGlvbi5sZW5ndGgtMV1cclxuXHJcblxyXG4vLyBMYXN0IDMgc2Vzc2lvbnNcclxuLy9jb25zdCBkaXN0YW5jZV8zX3Nlc3Npb24gPSBsaXN0X21ldGVycy5zbGljZShNYXRoLm1heChsaXN0X21ldGVycy5sZW5ndGggLSAzLCAwKSlcclxuXHJcbmNvbnN0IGRpc3RhbmNlXzNfc2Vzc2lvbiA9IGdldF9sYXN0X25iX3Nlc3Npb25zKDMsIGxpc3RfbWV0ZXJzKVxyXG5jb25zdCBtaW51dGVzXzNfc2Vzc2lvbiA9IGdldF9sYXN0X25iX3Nlc3Npb25zKDMsIGxpc3RfbWludXRlcylcclxuY29uc3QgZWxldmF0aW9uXzNfc2Vzc2lvbiA9IGdldF9sYXN0X25iX3Nlc3Npb25zKDMsIGxpc3RfZWxldmF0aW9uKVxyXG5jb25zdCBkYXRlXzNfc2Vzc2lvbiA9IGdldF9sYXN0X25iX3Nlc3Npb25zKDMsIGxpc3RfZGF0ZSlcclxuXHJcblxyXG5cclxuY29uc3QgYXZlcmFnZV8zX2Rpc3RhbmNlID0gYXZlcmFnZShkaXN0YW5jZV8zX3Nlc3Npb24pXHJcbmNvbnN0IGF2ZXJhZ2VfM19lbGV2YXRpb24gPSBhdmVyYWdlKGVsZXZhdGlvbl8zX3Nlc3Npb24pXHJcbmNvbnN0IGF2ZXJhZ2VfM19zcGVlZCA9IGF2ZXJhZ2UoZGl2aWRldmVjdG9yKGRpc3RhbmNlXzNfc2Vzc2lvbiAsIG1pbnV0ZXNfM19zZXNzaW9uKSkgKiA2MC8xMDAwICBcclxuXHJcbmNvbnN0IHZhcmlhdGlvbl8zX2Rpc3RhbmNlID0gdmFyaWF0aW9uKGxhc3RfZGlzdGFuY2UsIGF2ZXJhZ2VfM19kaXN0YW5jZSlcclxuY29uc3QgdmFyaWF0aW9uXzNfc3BlZWQgPSB2YXJpYXRpb24obGFzdF9zcGVlZCwgYXZlcmFnZV8zX3NwZWVkKVxyXG5jb25zdCB2YXJpYXRpb25fM19lbGV2YXRpb24gPSB2YXJpYXRpb24obGFzdF9lbGV2YXRpb24sIGF2ZXJhZ2VfM19lbGV2YXRpb24pXHJcblxyXG4vLyBMYXN0IDEwIHNlc3Npb25zXHJcbmNvbnN0IGRpc3RhbmNlXzEwX3Nlc3Npb24gPSBnZXRfbGFzdF9uYl9zZXNzaW9ucygxMCwgbGlzdF9tZXRlcnMpXHJcbmNvbnN0IG1pbnV0ZXNfMTBfc2Vzc2lvbiA9IGdldF9sYXN0X25iX3Nlc3Npb25zKDEwLCBsaXN0X21pbnV0ZXMpXHJcbmNvbnN0IGVsZXZhdGlvbl8xMF9zZXNzaW9uID0gZ2V0X2xhc3RfbmJfc2Vzc2lvbnMoMTAsIGxpc3RfZWxldmF0aW9uKVxyXG5cclxuY29uc3QgYXZlcmFnZV8xMF9kaXN0YW5jZSA9IGF2ZXJhZ2UoZGlzdGFuY2VfMTBfc2Vzc2lvbilcclxuY29uc3QgYXZlcmFnZV8xMF9lbGV2YXRpb24gPSBhdmVyYWdlKGVsZXZhdGlvbl8xMF9zZXNzaW9uKVxyXG5jb25zdCBhdmVyYWdlXzEwX3NwZWVkID0gYXZlcmFnZShkaXZpZGV2ZWN0b3IoZGlzdGFuY2VfMTBfc2Vzc2lvbiAsIG1pbnV0ZXNfMTBfc2Vzc2lvbikpICogNjAvMTAwMFxyXG5cclxuY29uc3QgdmFyaWF0aW9uXzEwX2Rpc3RhbmNlID0gdmFyaWF0aW9uKGxhc3RfZGlzdGFuY2UsIGF2ZXJhZ2VfMTBfZGlzdGFuY2UpXHJcbmNvbnN0IHZhcmlhdGlvbl8xMF9zcGVlZCA9IHZhcmlhdGlvbihsYXN0X3NwZWVkLCBhdmVyYWdlXzEwX3NwZWVkKVxyXG5jb25zdCB2YXJpYXRpb25fMTBfZWxldmF0aW9uID0gdmFyaWF0aW9uKGxhc3RfZWxldmF0aW9uLCBhdmVyYWdlXzEwX2VsZXZhdGlvbilcclxuXHJcbmNvbnN0IG5iX2Rpc3BsYXllZCA9IDNcclxuXHJcblxyXG5cclxuPC9zY3JpcHQ+XHJcblxyXG5cclxuPHN0eWxlPlxyXG5cclxuPC9zdHlsZT5cclxuPGRpdiBjbGFzcz1cIm1iLTIwXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWItNiBzaGFkb3cgXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJieWNpY2xlMi5qcGdcIiBhbHQ9XCJjeWNsaW5nXCIgY2xhc3M9XCJvYmplY3QtY292ZXIgaC00OCB3LWZ1bGwgc2hhZG93IHJvdW5kZWQtbWRcIj5cclxuICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtYi0xNiBiZy1ibHVlLTcwMCBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgc2hhZG93LWxnIHJvdW5kZWQtdC1tZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb250LXNhbnMgQXJpYWwgdGV4dC1jZW50ZXIgcC0yIHRleHQtM3hsIHRleHQtYmx1ZS03MDAgZm9udC1zZW1pYm9sZCBiZy1ibHVlLTEwMCBweC04IHRyYWNraW5nLXdpZGVzdFwiPlxyXG4gICAgICAgICAgICBDeWNsaW5nIFBlcmZvcm1hbmNlXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPSdwYi04Jz5cclxuICAgICAgICA8aDEgY2xhc3M9XCJ0ZXh0LWJsdWUtODAwICBtYi04IFwiPkxhc3QgU2Vzc2lvbnM8L2gxPlxyXG4gICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGFsaWMgZ3JpZCBncmlkLWNvbHMtMyBkaXZpZGUteCBkaXZpZGUtZ3JheS00MDBcIj5cclxuICAgICAgICAgICAgeyNlYWNoIGdldF9sYXN0X25iX3Nlc3Npb25zKDMsIGxpc3RfZGF0ZSkgYXMgZGF0ZX1cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+e2RhdGV9PC9kaXY+XHJcbiAgICAgICAgICAgIHsvZWFjaH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJkaXZpZGUteSBtdC0xNlwiPlxyXG4gICAgICAgIDxoMSBjbGFzcz1cInRleHQtYmx1ZS04MDBcIj5QZXJmb3JtYW5jZSBUYWJsZXM8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J20tMTIgY29udGFpbmVyIG14LWF1dG8nPlxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZS1hdXRvIHRleHQtY2VudGVyIGNvbnRhaW5lciBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxjYXB0aW9uIGNsYXNzPVwiZm9udC1zZW1pYm9sZCBtYi02IG10LTggdGV4dC14bCBpdGFsaWMgdGV4dC1ibHVlLTcwMFwiPlBlcmZvcm1hbmNlIGV2b2x1dGlvbiBvZiBtYWluIG1ldHJpY3M8L2NhcHRpb24+XHJcbiAgICAgICAgICAgIDx0aGVhZCBjbGFzcz1cImJvcmRlci1ncmF5LTMwMCBpdGFsaWNcIj5cclxuICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cImJnLWJsdWUtMTAwIGJvcmRlciBib3JkZXItZ3JheS0zMDBcIj5cclxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTQgcHktMlwiPk1ldHJpY3M8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yXCI+VmFsdWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIGNvbHNwYW49MiBjbGFzcz1cInB4LTQgcHktMiBcIj52cy4gTGFzdCAzIHNlc3Npb25zPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBjb2xzcGFuPTIgY2xhc3M9XCJweC00IHB5LTJcIj52cy4gTGFzdCAxMCBzZXNzaW9uczwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+RGlzdGFuY2UgKG0pPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57bGFzdF9kaXN0YW5jZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntNYXRoLnJvdW5kKGF2ZXJhZ2VfM19kaXN0YW5jZSl9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57dmFyaWF0aW9uXzNfZGlzdGFuY2V9JTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3JvdW5kXzJfZGVjaW1hbChhdmVyYWdlXzEwX2Rpc3RhbmNlKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPnt2YXJpYXRpb25fMTBfZGlzdGFuY2V9JTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+U3BlZWQgKGttL2gpPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57cm91bmRfMl9kZWNpbWFsKGxhc3Rfc3BlZWQpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3JvdW5kXzJfZGVjaW1hbChhdmVyYWdlXzNfc3BlZWQpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3ZhcmlhdGlvbl8zX3NwZWVkfSU8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntyb3VuZF8yX2RlY2ltYWwoYXZlcmFnZV8xMF9zcGVlZCl9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57dmFyaWF0aW9uXzEwX3NwZWVkfSU8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj5FbGV2YXRpb248L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntsYXN0X2VsZXZhdGlvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntyb3VuZF8yX2RlY2ltYWwoYXZlcmFnZV8zX2VsZXZhdGlvbil9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57dmFyaWF0aW9uXzNfZWxldmF0aW9ufSU8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntyb3VuZF8yX2RlY2ltYWwoYXZlcmFnZV8xMF9lbGV2YXRpb24pfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3ZhcmlhdGlvbl8xMF9lbGV2YXRpb259JTwvdGQ+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9J20tMTIgY29udGFpbmVyIG14LWF1dG8nPlxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZS1hdXRvIHRleHQtY2VudGVyIGNvbnRhaW5lciBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxjYXB0aW9uIGNsYXNzPVwiZm9udC1zZW1pYm9sZCBtYi02IG10LTggdGV4dC14bCBpdGFsaWMgdGV4dC1ibHVlLTcwMFwiPlBlcmZvcm1hbmNlIG9mIGxhc3Qgc2Vzc2lvbnM8L2NhcHRpb24+XHJcbiAgICAgICAgICAgIDx0aGVhZCBjbGFzcz1cIml0YWxpYyBib3JkZXItZ3JheS0zMDBcIj5cclxuICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cImJnLWJsdWUtMTAwIGJvcmRlciBib3JkZXItZ3JheS0zMDBcIj5cclxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTQgcHktMlwiPkRhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yXCI+RGlzdGFuY2UgKG0pPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTQgcHktMlwiPlRpbWUgKG1pbik8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yXCI+U3BlZWQgKGttL2gpPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTQgcHktMlwiPkVsZXZhdGlvbiAobSk8L3RoPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsjZWFjaCBkaXN0YW5jZV8zX3Nlc3Npb24gYXMgZGlzdGFuY2UsIGl9XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e2RhdGVfM19zZXNzaW9uW2ldfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e2Rpc3RhbmNlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e21pbnV0ZXNfM19zZXNzaW9uW2ldfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3JvdW5kXzJfZGVjaW1hbCgoZGlzdGFuY2UvMTAwMCkgLyAobWludXRlc18zX3Nlc3Npb25baV0vNjApKSB9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57ZWxldmF0aW9uXzNfc2Vzc2lvbltpXX08L3RkPlxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIHsvZWFjaH1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibXQtOFwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3M9XCJ0ZXh0LWJsdWUtODAwIG1iLTggbXQtMTZcIj5QZXJmb3JtYW5jZSBDaGFydDwvaDE+XHJcbiAgICAgICAgICAgIDxDaGFydHMge2RhdGF9IC8+IFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuXHJcbiIsIjxjYW52YXMgaWQ9XCJteUNoYXJ0XCIgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiMVwiPjwvY2FudmFzPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gXCJzdmVsdGVcIjtcclxuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qc1wiO1xyXG5leHBvcnQgbGV0IGRhdGE7IFxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2hhcnQoKXtcclxuICB2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Q2hhcnQnKTtcclxuICAgIHZhciBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xyXG4gICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICAgICAgICB5QXhlczogXHJcbiAgICAgICAgICAgICAgICBbe1xyXG4gICAgICAgIGlkOiAnTWV0ZXJzIGNvdmVyZWQnLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnbGVmdCcsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBpZDogJ0VsZXZhdGlvbicsXHJcbiAgICAgICAgcG9zaXRpb246ICdyaWdodCcsXHJcbiAgICAgICAgZ3JpZExpbmVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgICAgICAgICAgICB9LFxyXG4gICAgICB9XVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxub25Nb3VudChjcmVhdGVDaGFydClcclxuPC9zY3JpcHQ+XHJcbiIsIlxyXG48c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cclxuXHRleHBvcnQgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZmV0Y2goYHNwb3J0cy9ydW5uaW5nLmpzb25gKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4oZGF0YV9yYXcgPT4ge1xyXG5cdFx0XHRyZXR1cm4geyBkYXRhX3JhdyB9O1xyXG5cdFx0fSk7XHJcblx0fVx0XHJcbiAgICBcclxuXHJcbjwvc2NyaXB0PlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBDaGFydHMgZnJvbSAnLi9ydW5uaW5nLWNoYXJ0cy5zdmVsdGUnXHJcbiAgICBleHBvcnQgbGV0IGRhdGFfcmF3XHJcblxyXG5cclxuLy8gQ29tcHV0ZSBkYXRhIGZvciBjaGFydHNcclxuXHJcbiAgICBsZXQgbGlzdF9tZXRlcnMgPSBbXTtcclxuICAgIGxldCBsaXN0X2RhdGUgPSBbXTtcclxuICAgIGxldCBsaXN0X2VsZXZhdGlvbiA9IFtdO1xyXG4gICAgbGV0IGxpc3RfbWludXRlcyA9IFtdO1xyXG5cclxuICAgIGRhdGFfcmF3LmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgbGlzdF9tZXRlcnMucHVzaCh4Lm1ldGVycylcclxuICAgICAgICBsaXN0X2RhdGUucHVzaCh4LmRhdGUpXHJcbiAgICAgICAgbGlzdF9lbGV2YXRpb24ucHVzaCh4LmVsZXZhdGlvbilcclxuICAgICAgICBsaXN0X21pbnV0ZXMucHVzaCh4Lm1pbnV0ZXMpXHJcbiAgICB9KVxyXG5cclxuICAgIGV4cG9ydCBjb25zdCBkYXRhID0ge1xyXG4gICAgbGFiZWxzOiBsaXN0X2RhdGUsXHJcbiAgICBkYXRhc2V0czogW3tcclxuICAgICAgICBsYWJlbDogJ01ldGVycyBjb3ZlcmVkJyxcclxuICAgICAgICB5QXhpc0lEIDogJ01ldGVycyBjb3ZlcmVkJyxcclxuICAgICAgICBkYXRhOmxpc3RfbWV0ZXJzLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiBcIiMzZTk1Y2RcIixcclxuICAgICAgICBmaWxsOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogJ0VsZXZhdGlvbicsXHJcbiAgICAgICAgZGF0YTpsaXN0X2VsZXZhdGlvbixcclxuICAgICAgICB5QXhpc0lEIDogJ0VsZXZhdGlvbicsXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzhlNWVhMlwiLFxyXG4gICAgICAgIGZpbGw6IGZhbHNlXHJcbiAgICB9XVxyXG59XHJcblxyXG4vLyBUT0RPOiB2ZXJpZml5IG9yZGVyaW5nIG9mIGRhdGVzIGFuZCBzZXNzaW9uc1xyXG5cclxuY29uc3QgYXZlcmFnZSA9IGFyciA9PiBhcnIucmVkdWNlKCAoIHAsIGMgKSA9PiBwICsgYywgMCApIC8gYXJyLmxlbmd0aDtcclxuXHJcblxyXG4vLyBUT0RPOiByaWdodCBub3cgaW5jbHVkaW5nIGxhc3Qgc2Vzc2lvbiwgcHJvYmFibHkgc2hvdWxkIG5vdFxyXG5cclxuLy8gVE9ETzogbGlzdGUgZGVzIG9wdGlvbnMgYm9vbCBhdmVjIGxlcyBtw6l0cmlxdWVzIHF1J29uIHZldXQgb2JzZXJ2ZXIgKHJ5dGhtZSBjYXJkaWFxdWUpXHJcblxyXG4vLyBUT0RPOiBjb2xvcnMgZ3JlZW4gb3IgcmVkIGZvciB2YXJpYXRpb25zXHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0X2xhc3RfbmJfc2Vzc2lvbnMoaW50LCBsaXN0KXtcclxuICAgIHJldHVybiBsaXN0LnNsaWNlKE1hdGgubWF4KGxpc3QubGVuZ3RoIC0gaW50LCAwKSlcclxufVxyXG5cclxuZnVuY3Rpb24gZGl2aWRldmVjdG9yKGEsYil7XHJcbiAgICByZXR1cm4gYS5tYXAoKGUsaSkgPT4gZSAvIGJbaV0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2YXJpYXRpb24oeF9uZXcsIHhfb2xkKXtcclxuICAgIGNvbnN0IHZhcmlhdGlvbiA9IE1hdGgucm91bmQoKHhfbmV3LXhfb2xkKS94X29sZCoxMDApXHJcbiAgICByZXR1cm4gdmFyaWF0aW9uXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJvdW5kXzFfZGVjaW1hbChmbG9hdCl7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChmbG9hdCAqIDEwKSAvMTBcclxufVxyXG5cclxuZnVuY3Rpb24gcm91bmRfMl9kZWNpbWFsKGZsb2F0KXtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKGZsb2F0ICogMTAwKSAvIDEwMFxyXG59XHJcblxyXG4vLyBDb21wdXRlIGF2ZXJhZ2UgZGlzdGFuY2UsIHNwZWVkLCBlbGV2YXRpb24sIFxyXG4vLyBMYXN0IHNlc3Npb25cclxuY29uc3QgbGFzdF9kaXN0YW5jZSA9IGxpc3RfbWV0ZXJzW2xpc3RfbWV0ZXJzLmxlbmd0aC0xXVxyXG5jb25zdCBsYXN0X2hvdXJzID0gbGlzdF9taW51dGVzW2xpc3RfbWludXRlcy5sZW5ndGgtMV0vNjBcclxuY29uc3QgbGFzdF9zcGVlZCA9IGxhc3RfZGlzdGFuY2UvMTAwMC9sYXN0X2hvdXJzXHJcbmNvbnN0IGxhc3RfZWxldmF0aW9uID0gbGlzdF9lbGV2YXRpb25bbGlzdF9lbGV2YXRpb24ubGVuZ3RoLTFdXHJcblxyXG5cclxuLy8gTGFzdCAzIHNlc3Npb25zXHJcbi8vY29uc3QgZGlzdGFuY2VfM19zZXNzaW9uID0gbGlzdF9tZXRlcnMuc2xpY2UoTWF0aC5tYXgobGlzdF9tZXRlcnMubGVuZ3RoIC0gMywgMCkpXHJcblxyXG5jb25zdCBkaXN0YW5jZV8zX3Nlc3Npb24gPSBnZXRfbGFzdF9uYl9zZXNzaW9ucygzLCBsaXN0X21ldGVycylcclxuY29uc3QgbWludXRlc18zX3Nlc3Npb24gPSBnZXRfbGFzdF9uYl9zZXNzaW9ucygzLCBsaXN0X21pbnV0ZXMpXHJcbmNvbnN0IGVsZXZhdGlvbl8zX3Nlc3Npb24gPSBnZXRfbGFzdF9uYl9zZXNzaW9ucygzLCBsaXN0X2VsZXZhdGlvbilcclxuY29uc3QgZGF0ZV8zX3Nlc3Npb24gPSBnZXRfbGFzdF9uYl9zZXNzaW9ucygzLCBsaXN0X2RhdGUpXHJcblxyXG5cclxuXHJcbmNvbnN0IGF2ZXJhZ2VfM19kaXN0YW5jZSA9IGF2ZXJhZ2UoZGlzdGFuY2VfM19zZXNzaW9uKVxyXG5jb25zdCBhdmVyYWdlXzNfZWxldmF0aW9uID0gYXZlcmFnZShlbGV2YXRpb25fM19zZXNzaW9uKVxyXG5jb25zdCBhdmVyYWdlXzNfc3BlZWQgPSBhdmVyYWdlKGRpdmlkZXZlY3RvcihkaXN0YW5jZV8zX3Nlc3Npb24gLCBtaW51dGVzXzNfc2Vzc2lvbikpICogNjAvMTAwMCAgXHJcblxyXG5jb25zdCB2YXJpYXRpb25fM19kaXN0YW5jZSA9IHZhcmlhdGlvbihsYXN0X2Rpc3RhbmNlLCBhdmVyYWdlXzNfZGlzdGFuY2UpXHJcbmNvbnN0IHZhcmlhdGlvbl8zX3NwZWVkID0gdmFyaWF0aW9uKGxhc3Rfc3BlZWQsIGF2ZXJhZ2VfM19zcGVlZClcclxuY29uc3QgdmFyaWF0aW9uXzNfZWxldmF0aW9uID0gdmFyaWF0aW9uKGxhc3RfZWxldmF0aW9uLCBhdmVyYWdlXzNfZWxldmF0aW9uKVxyXG5cclxuLy8gTGFzdCAxMCBzZXNzaW9uc1xyXG5jb25zdCBkaXN0YW5jZV8xMF9zZXNzaW9uID0gZ2V0X2xhc3RfbmJfc2Vzc2lvbnMoMTAsIGxpc3RfbWV0ZXJzKVxyXG5jb25zdCBtaW51dGVzXzEwX3Nlc3Npb24gPSBnZXRfbGFzdF9uYl9zZXNzaW9ucygxMCwgbGlzdF9taW51dGVzKVxyXG5jb25zdCBlbGV2YXRpb25fMTBfc2Vzc2lvbiA9IGdldF9sYXN0X25iX3Nlc3Npb25zKDEwLCBsaXN0X2VsZXZhdGlvbilcclxuXHJcbmNvbnN0IGF2ZXJhZ2VfMTBfZGlzdGFuY2UgPSBhdmVyYWdlKGRpc3RhbmNlXzEwX3Nlc3Npb24pXHJcbmNvbnN0IGF2ZXJhZ2VfMTBfZWxldmF0aW9uID0gYXZlcmFnZShlbGV2YXRpb25fMTBfc2Vzc2lvbilcclxuY29uc3QgYXZlcmFnZV8xMF9zcGVlZCA9IGF2ZXJhZ2UoZGl2aWRldmVjdG9yKGRpc3RhbmNlXzEwX3Nlc3Npb24gLCBtaW51dGVzXzEwX3Nlc3Npb24pKSAqIDYwLzEwMDBcclxuXHJcbmNvbnN0IHZhcmlhdGlvbl8xMF9kaXN0YW5jZSA9IHZhcmlhdGlvbihsYXN0X2Rpc3RhbmNlLCBhdmVyYWdlXzEwX2Rpc3RhbmNlKVxyXG5jb25zdCB2YXJpYXRpb25fMTBfc3BlZWQgPSB2YXJpYXRpb24obGFzdF9zcGVlZCwgYXZlcmFnZV8xMF9zcGVlZClcclxuY29uc3QgdmFyaWF0aW9uXzEwX2VsZXZhdGlvbiA9IHZhcmlhdGlvbihsYXN0X2VsZXZhdGlvbiwgYXZlcmFnZV8xMF9lbGV2YXRpb24pXHJcblxyXG5jb25zdCBuYl9kaXNwbGF5ZWQgPSAzXHJcblxyXG5cclxuXHJcbjwvc2NyaXB0PlxyXG5cclxuXHJcbjxzdHlsZT5cclxuXHJcbjwvc3R5bGU+XHJcbjxkaXYgY2xhc3M9XCJtYi0yMFwiPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJtYi02IHNoYWRvdyBcIj5cclxuICAgICAgICA8aW1nIHNyYz1cInJ1bm5pbmcxLmpwZ1wiIGFsdD1cImN5Y2xpbmdcIiBjbGFzcz1cIm9iamVjdC1jb3ZlciBoLTQ4IHctZnVsbCBzaGFkb3cgcm91bmRlZC1tZFwiPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgbWItMTYgYmctYmx1ZS03MDAgYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIHNoYWRvdy1sZyByb3VuZGVkLXQtbWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udC1zYW5zIEFyaWFsIHRleHQtY2VudGVyIHAtMiB0ZXh0LTN4bCB0ZXh0LWJsdWUtNzAwIGZvbnQtc2VtaWJvbGQgYmctYmx1ZS0xMDAgcHgtOCB0cmFja2luZy13aWRlc3RcIj5cclxuICAgICAgICAgICAgUnVubmluZyBQZXJmb3JtYW5jZVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz0ncGItOCc+XHJcbiAgICAgICAgPGgxIGNsYXNzPVwidGV4dC1ibHVlLTgwMCAgbWItOCBcIj5MYXN0IFNlc3Npb25zPC9oMT5cclxuICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaXRhbGljIGdyaWQgZ3JpZC1jb2xzLTMgZGl2aWRlLXggZGl2aWRlLWdyYXktNDAwXCI+XHJcbiAgICAgICAgICAgIHsjZWFjaCBnZXRfbGFzdF9uYl9zZXNzaW9ucygzLCBsaXN0X2RhdGUpIGFzIGRhdGV9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPntkYXRlfTwvZGl2PlxyXG4gICAgICAgICAgICB7L2VhY2h9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgPGRpdiBjbGFzcz0nZGl2aWRlLXkgbXQtMTYnPlxyXG4gICAgICAgIDxoMSBjbGFzcz1cInRleHQtYmx1ZS04MDBcIj5QZXJmb3JtYW5jZSBUYWJsZXM8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J20tMTIgY29udGFpbmVyIG14LWF1dG8nPlxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZS1hdXRvIHRleHQtY2VudGVyIGNvbnRhaW5lciBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxjYXB0aW9uIGNsYXNzPVwiZm9udC1zZW1pYm9sZCBtYi02IG10LTggdGV4dC14bCBpdGFsaWMgdGV4dC1ibHVlLTcwMFwiPlBlcmZvcm1hbmNlIGV2b2x1dGlvbiBvZiBtYWluIG1ldHJpY3M8L2NhcHRpb24+XHJcbiAgICAgICAgICAgIDx0aGVhZCBjbGFzcz1cImJvcmRlci1ncmF5LTMwMCBpdGFsaWNcIj5cclxuICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cImJnLWJsdWUtMTAwIGJvcmRlciBib3JkZXItZ3JheS0zMDBcIj5cclxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTQgcHktMlwiPk1ldHJpY3M8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yXCI+VmFsdWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIGNvbHNwYW49MiBjbGFzcz1cInB4LTQgcHktMiBcIj52cy4gTGFzdCAzIHNlc3Npb25zPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBjb2xzcGFuPTIgY2xhc3M9XCJweC00IHB5LTJcIj52cy4gTGFzdCAxMCBzZXNzaW9uczwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+RGlzdGFuY2UgKG0pPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57bGFzdF9kaXN0YW5jZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntyb3VuZF8yX2RlY2ltYWwoYXZlcmFnZV8zX2Rpc3RhbmNlKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPnt2YXJpYXRpb25fM19kaXN0YW5jZX0lPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57cm91bmRfMl9kZWNpbWFsKGF2ZXJhZ2VfMTBfZGlzdGFuY2UpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3ZhcmlhdGlvbl8xMF9kaXN0YW5jZX0lPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJiZy1ncmF5LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPlNwZWVkIChrbS9oKTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3JvdW5kXzJfZGVjaW1hbChsYXN0X3NwZWVkKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntyb3VuZF8yX2RlY2ltYWwoYXZlcmFnZV8zX3NwZWVkKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPnt2YXJpYXRpb25fM19zcGVlZH0lPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57cm91bmRfMl9kZWNpbWFsKGF2ZXJhZ2VfMTBfc3BlZWQpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3ZhcmlhdGlvbl8xMF9zcGVlZH0lPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+RWxldmF0aW9uPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57bGFzdF9lbGV2YXRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57cm91bmRfMl9kZWNpbWFsKGF2ZXJhZ2VfM19lbGV2YXRpb24pfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3ZhcmlhdGlvbl8zX2VsZXZhdGlvbn0lPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57cm91bmRfMl9kZWNpbWFsKGF2ZXJhZ2VfMTBfZWxldmF0aW9uKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPnt2YXJpYXRpb25fMTBfZWxldmF0aW9ufSU8L3RkPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz0nbS0xMiBjb250YWluZXIgbXgtYXV0byc+XHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlLWF1dG8gdGV4dC1jZW50ZXIgY29udGFpbmVyIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgPGNhcHRpb24gY2xhc3M9XCJmb250LXNlbWlib2xkIG1iLTYgbXQtOCB0ZXh0LXhsIGl0YWxpYyB0ZXh0LWJsdWUtNzAwXCI+UGVyZm9ybWFuY2Ugb2YgbGFzdCBzZXNzaW9uczwvY2FwdGlvbj5cclxuICAgICAgICAgICAgPHRoZWFkIGNsYXNzPVwiaXRhbGljIGJvcmRlci1ncmF5LTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwiYmctYmx1ZS0xMDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yXCI+RGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJweC00IHB5LTJcIj5EaXN0YW5jZSAobSk8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yXCI+VGltZSAobWluKTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJweC00IHB5LTJcIj5TcGVlZCAoa20vaCk8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yXCI+RWxldmF0aW9uIChtKTwvdGg+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcblxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgeyNlYWNoIGRpc3RhbmNlXzNfc2Vzc2lvbiBhcyBkaXN0YW5jZSwgaX1cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57ZGF0ZV8zX3Nlc3Npb25baV19PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57ZGlzdGFuY2V9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57bWludXRlc18zX3Nlc3Npb25baV19PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57cm91bmRfMl9kZWNpbWFsKChkaXN0YW5jZS8xMDAwKSAvIChtaW51dGVzXzNfc2Vzc2lvbltpXS82MCkpIH08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntlbGV2YXRpb25fM19zZXNzaW9uW2ldfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgey9lYWNofVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtdC04XCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzcz1cInRleHQtYmx1ZS04MDAgbWItOCBtdC0xNlwiPlBlcmZvcm1hbmNlIENoYXJ0PC9oMT5cclxuICAgICAgICAgICAgPENoYXJ0cyB7ZGF0YX0gLz4gXHJcbiAgICAgICAgPC9kaXY+ICAgICAgICBcclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuIiwiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XHJcblx0ZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMsIHF1ZXJ5IH0pIHtcclxuXHRcdHJldHVybiB0aGlzLmZldGNoKGBibG9nLmpzb25gKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ocG9zdHMgPT4ge1xyXG5cdFx0XHRyZXR1cm4geyBwb3N0cyB9O1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgbGV0IHBvc3RzO1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHR1bCB7XHJcblx0XHRtYXJnaW46IDAgMCAxZW0gMDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxLjU7XHJcblx0fVxyXG48L3N0eWxlPlxyXG5cclxuPHN2ZWx0ZTpoZWFkPlxyXG5cdDx0aXRsZT5CbG9nPC90aXRsZT5cclxuPC9zdmVsdGU6aGVhZD5cclxuXHJcbjxoMT5SZWNlbnQgcG9zdHM8L2gxPlxyXG5cclxuPHVsPlxyXG5cdHsjZWFjaCBwb3N0cyBhcyBwb3N0fVxyXG5cdFx0PCEtLSB3ZSdyZSB1c2luZyB0aGUgbm9uLXN0YW5kYXJkIGByZWw9cHJlZmV0Y2hgIGF0dHJpYnV0ZSB0b1xyXG5cdFx0XHRcdHRlbGwgU2FwcGVyIHRvIGxvYWQgdGhlIGRhdGEgZm9yIHRoZSBwYWdlIGFzIHNvb24gYXNcclxuXHRcdFx0XHR0aGUgdXNlciBob3ZlcnMgb3ZlciB0aGUgbGluayBvciB0YXBzIGl0LCBpbnN0ZWFkIG9mXHJcblx0XHRcdFx0d2FpdGluZyBmb3IgdGhlICdjbGljaycgZXZlbnQgLS0+XHJcblx0XHQ8bGk+PGEgcmVsPSdwcmVmZXRjaCcgaHJlZj0nYmxvZy97cG9zdC5zbHVnfSc+e3Bvc3QudGl0bGV9PC9hPjwvbGk+XHJcblx0ey9lYWNofVxyXG48L3VsPiIsIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxyXG5cdGV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zLCBxdWVyeSB9KSB7XHJcblx0XHQvLyB0aGUgYHNsdWdgIHBhcmFtZXRlciBpcyBhdmFpbGFibGUgYmVjYXVzZVxyXG5cdFx0Ly8gdGhpcyBmaWxlIGlzIGNhbGxlZCBbc2x1Z10uc3ZlbHRlXHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCB0aGlzLmZldGNoKGBibG9nLyR7cGFyYW1zLnNsdWd9Lmpzb25gKTtcclxuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cdFx0Y29uc29sZS5sb2coZGF0YSlcclxuXHRcdGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcclxuXHRcdFx0cmV0dXJuIHsgcG9zdDogZGF0YSB9O1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5lcnJvcihyZXMuc3RhdHVzLCBkYXRhLm1lc3NhZ2UpO1xyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBsZXQgcG9zdDtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblx0LypcclxuXHRcdEJ5IGRlZmF1bHQsIENTUyBpcyBsb2NhbGx5IHNjb3BlZCB0byB0aGUgY29tcG9uZW50LFxyXG5cdFx0YW5kIGFueSB1bnVzZWQgc3R5bGVzIGFyZSBkZWFkLWNvZGUtZWxpbWluYXRlZC5cclxuXHRcdEluIHRoaXMgcGFnZSwgU3ZlbHRlIGNhbid0IGtub3cgd2hpY2ggZWxlbWVudHMgYXJlXHJcblx0XHRnb2luZyB0byBhcHBlYXIgaW5zaWRlIHRoZSB7e3twb3N0Lmh0bWx9fX0gYmxvY2ssXHJcblx0XHRzbyB3ZSBoYXZlIHRvIHVzZSB0aGUgOmdsb2JhbCguLi4pIG1vZGlmaWVyIHRvIHRhcmdldFxyXG5cdFx0YWxsIGVsZW1lbnRzIGluc2lkZSAuY29udGVudFxyXG5cdCovXHJcblx0LmNvbnRlbnQgOmdsb2JhbChoMikge1xyXG5cdFx0Zm9udC1zaXplOiAxLjRlbTtcclxuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0fVxyXG5cclxuXHQuY29udGVudCA6Z2xvYmFsKHByZSkge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuXHRcdGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggNXB4IHJnYmEoMCwwLDAsMC4wNSk7XHJcblx0XHRwYWRkaW5nOiAwLjVlbTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDJweDtcclxuXHRcdG92ZXJmbG93LXg6IGF1dG87XHJcblx0fVxyXG5cclxuXHQuY29udGVudCA6Z2xvYmFsKHByZSkgOmdsb2JhbChjb2RlKSB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRcdHBhZGRpbmc6IDA7XHJcblx0fVxyXG5cclxuXHQuY29udGVudCA6Z2xvYmFsKHVsKSB7XHJcblx0XHRsaW5lLWhlaWdodDogMS41O1xyXG5cdH1cclxuXHJcblx0LmNvbnRlbnQgOmdsb2JhbChsaSkge1xyXG5cdFx0bWFyZ2luOiAwIDAgMC41ZW0gMDtcclxuXHR9XHJcbjwvc3R5bGU+XHJcblxyXG48c3ZlbHRlOmhlYWQ+XHJcblx0PHRpdGxlPntwb3N0LnRpdGxlfTwvdGl0bGU+XHJcbjwvc3ZlbHRlOmhlYWQ+XHJcblxyXG48aDE+e3Bvc3QudGl0bGV9PC9oMT5cclxuXHJcbjxkaXYgY2xhc3M9J2NvbnRlbnQnPlxyXG5cdHtAaHRtbCBwb3N0Lmh0bWx9XHJcbjwvZGl2PlxyXG4iLCI8c2NyaXB0PlxyXG5cdGV4cG9ydCBsZXQgc2VnbWVudDtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblx0bmF2IHtcclxuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSw2MiwwLDAuMSk7XHJcblx0XHRmb250LXdlaWdodDogMzAwO1xyXG5cdFx0cGFkZGluZzogMCAxZW07XHJcblx0fVxyXG5cclxuXHR1bCB7XHJcblx0XHRtYXJnaW46IDA7XHJcblx0XHRwYWRkaW5nOiAwO1xyXG5cdH1cclxuXHJcblx0LyogY2xlYXJmaXggKi9cclxuXHR1bDo6YWZ0ZXIge1xyXG5cdFx0Y29udGVudDogJyc7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdGNsZWFyOiBib3RoO1xyXG5cdH1cclxuXHJcblx0bGkge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRmbG9hdDogbGVmdDtcclxuXHR9XHJcblxyXG5cdFthcmlhLWN1cnJlbnRdIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR9XHJcblxyXG5cdFthcmlhLWN1cnJlbnRdOjphZnRlciB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRjb250ZW50OiAnJztcclxuXHRcdHdpZHRoOiBjYWxjKDEwMCUgLSAxZW0pO1xyXG5cdFx0aGVpZ2h0OiAycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LDYyLDApO1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRib3R0b206IC0xcHg7XHJcblx0fVxyXG5cclxuXHRhIHtcclxuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdHBhZGRpbmc6IDFlbSAwLjVlbTtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdH1cclxuPC9zdHlsZT5cclxuXHJcbjxuYXY+XHJcblx0PHVsPlxyXG5cdFx0PGxpPjxhIGFyaWEtY3VycmVudD0ne3NlZ21lbnQgPT09IHVuZGVmaW5lZCA/IFwicGFnZVwiIDogdW5kZWZpbmVkfScgaHJlZj0nLic+aG9tZTwvYT48L2xpPlxyXG5cdFx0PCEtLSA8bGk+PGEgcmVsPXByZWZldGNoIGFyaWEtY3VycmVudD0ne3NlZ21lbnQgPT09IFwiYmxvZ1wiID8gXCJwYWdlXCIgOiB1bmRlZmluZWR9JyBocmVmPSdibG9nJz5ibG9nPC9hPjwvbGk+IC0tPlxyXG5cclxuXHRcdDxsaT48YSBhcmlhLWN1cnJlbnQ9J3tzZWdtZW50ID09PSBcIm5ld19zZXNzaW9uXCIgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH0nIGhyZWY9J25ld19zZXNzaW9uJz5uZXcgc2Vzc2lvbjwvYT48L2xpPlxyXG5cclxuXHRcdDxsaT48YSBhcmlhLWN1cnJlbnQ9J3tzZWdtZW50ID09PSBcInBlcmZvcm1hbmNlXCIgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH0nIGhyZWY9J3BlcmZvcm1hbmNlJz5wZXJmb3JtYW5jZTwvYT48L2xpPlxyXG5cclxuXHRcdDxsaT48YSBhcmlhLWN1cnJlbnQ9J3tzZWdtZW50ID09PSBcImFib3V0XCIgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH0nIGhyZWY9J2Fib3V0Jz5hYm91dDwvYT48L2xpPlxyXG5cdFx0PGxpPjxhIGFyaWEtY3VycmVudD0ne3NlZ21lbnQgPT09IFwidHV0b3JpYWxcIiA/IFwicGFnZVwiIDogdW5kZWZpbmVkfScgaHJlZj0ndHV0b3JpYWwnPnR1dG9yaWFsPC9hPjwvbGk+XHJcblxyXG5cdFx0PCEtLSBmb3IgdGhlIGJsb2cgbGluaywgd2UncmUgdXNpbmcgcmVsPXByZWZldGNoIHNvIHRoYXQgU2FwcGVyIHByZWZldGNoZXNcclxuXHRcdCAgICAgdGhlIGJsb2cgZGF0YSB3aGVuIHdlIGhvdmVyIG92ZXIgdGhlIGxpbmsgb3IgdGFwIGl0IG9uIGEgdG91Y2hzY3JlZW4gLS0+XHJcblx0PC91bD5cclxuPC9uYXY+XHJcbiIsIjxzY3JpcHQ+XHJcblx0aW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdi5zdmVsdGUnO1xyXG5cclxuXHRleHBvcnQgbGV0IHNlZ21lbnQ7XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdG1haW4ge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0bWF4LXdpZHRoOiA1NmVtO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0XHRwYWRkaW5nOiAyZW07XHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0fVxyXG48L3N0eWxlPlxyXG5cclxuPE5hdiB7c2VnbWVudH0vPlxyXG5cclxuPG1haW4+XHJcblx0PHNsb3Q+PC9zbG90PlxyXG48L21haW4+IiwiPHNjcmlwdD5cclxuXHRleHBvcnQgbGV0IHN0YXR1cztcclxuXHRleHBvcnQgbGV0IGVycm9yO1xyXG5cclxuXHRjb25zdCBkZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JztcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblx0aDEsIHAge1xyXG5cdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0fVxyXG5cclxuXHRoMSB7XHJcblx0XHRmb250LXNpemU6IDIuOGVtO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdG1hcmdpbjogMCAwIDAuNWVtIDA7XHJcblx0fVxyXG5cclxuXHRwIHtcclxuXHRcdG1hcmdpbjogMWVtIGF1dG87XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcclxuXHRcdGgxIHtcclxuXHRcdFx0Zm9udC1zaXplOiA0ZW07XHJcblx0XHR9XHJcblx0fVxyXG48L3N0eWxlPlxyXG5cclxuPHN2ZWx0ZTpoZWFkPlxyXG5cdDx0aXRsZT57c3RhdHVzfTwvdGl0bGU+XHJcbjwvc3ZlbHRlOmhlYWQ+XHJcblxyXG48aDE+e3N0YXR1c308L2gxPlxyXG5cclxuPHA+e2Vycm9yLm1lc3NhZ2V9PC9wPlxyXG5cclxueyNpZiBkZXYgJiYgZXJyb3Iuc3RhY2t9XHJcblx0PHByZT57ZXJyb3Iuc3RhY2t9PC9wcmU+XHJcbnsvaWZ9XHJcbiIsIi8vIFRoaXMgZmlsZSBpcyBnZW5lcmF0ZWQgYnkgU2FwcGVyIOKAlCBkbyBub3QgZWRpdCBpdCFcbmltcG9ydCAqIGFzIHJvdXRlXzAgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9uZXdfc2Vzc2lvbnMvaW5kZXguanNvbi5qc1wiO1xuaW1wb3J0ICogYXMgcm91dGVfMSBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL3Nwb3J0X2xpc3QvaW5kZXguanNvbi5qc1wiO1xuaW1wb3J0ICogYXMgcm91dGVfMiBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL3Nwb3J0X2xpc3QvW3NsdWddLmpzb24uanNcIjtcbmltcG9ydCAqIGFzIHJvdXRlXzMgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9zcG9ydHMvc3dpbW1pbmcvaW5kZXguanNvbi5qc1wiO1xuaW1wb3J0ICogYXMgcm91dGVfNCBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL3Nwb3J0cy9zd2ltbWluZy9zd2ltbWluZy1kYXRhLmpzXCI7XG5pbXBvcnQgKiBhcyByb3V0ZV81IGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvc3BvcnRzL2N5Y2xpbmcvaW5kZXguanNvbi5qc1wiO1xuaW1wb3J0ICogYXMgcm91dGVfNiBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL3Nwb3J0cy9jeWNsaW5nL2N5Y2xpbmctZGF0YS5qc1wiO1xuaW1wb3J0ICogYXMgcm91dGVfNyBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL3Nwb3J0cy9ydW5uaW5nL2luZGV4Lmpzb24uanNcIjtcbmltcG9ydCAqIGFzIHJvdXRlXzggZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9zcG9ydC5qc1wiO1xuaW1wb3J0ICogYXMgcm91dGVfOSBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL2Jsb2cvaW5kZXguanNvbi5qc1wiO1xuaW1wb3J0ICogYXMgcm91dGVfMTAgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9ibG9nL1tzbHVnXS5qc29uLmpzXCI7XG5pbXBvcnQgY29tcG9uZW50XzAgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9pbmRleC5zdmVsdGVcIjtcbmltcG9ydCBjb21wb25lbnRfMSBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL2ZyYXBwZS1jaGFydHMuc3ZlbHRlXCI7XG5pbXBvcnQgY29tcG9uZW50XzIsIHsgcHJlbG9hZCBhcyBwcmVsb2FkXzIgfSBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL25ld19zZXNzaW9ucy9uZXdfY3ljbGluZy5zdmVsdGVcIjtcbmltcG9ydCBjb21wb25lbnRfMywgeyBwcmVsb2FkIGFzIHByZWxvYWRfMyB9IGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvbmV3X3Nlc3Npb24uc3ZlbHRlXCI7XG5pbXBvcnQgY29tcG9uZW50XzQgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9wZXJmb3JtYW5jZS5zdmVsdGVcIjtcbmltcG9ydCBjb21wb25lbnRfNSBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL3Nwb3J0X2xpc3QvaW5kZXguc3ZlbHRlXCI7XG5pbXBvcnQgY29tcG9uZW50XzYgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9zcG9ydF9saXN0L1tzbHVnXS5zdmVsdGVcIjtcbmltcG9ydCBjb21wb25lbnRfNyBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL2NoYXJ0ZXN0LnN2ZWx0ZVwiO1xuaW1wb3J0IGNvbXBvbmVudF84IGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvdHV0b3JpYWwuc3ZlbHRlXCI7XG5pbXBvcnQgY29tcG9uZW50XzkgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9zcG9ydHMvc3dpbW1pbmcvc3dpbW1pbmctY2hhcnRzLnN2ZWx0ZVwiO1xuaW1wb3J0IGNvbXBvbmVudF8xMCwgeyBwcmVsb2FkIGFzIHByZWxvYWRfMTAgfSBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL3Nwb3J0cy9zd2ltbWluZy9zd2ltbWluZy5zdmVsdGVcIjtcbmltcG9ydCBjb21wb25lbnRfMTEgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9zcG9ydHMvY3ljbGluZy9jeWNsaW5nLWNoYXJ0cy5zdmVsdGVcIjtcbmltcG9ydCBjb21wb25lbnRfMTIsIHsgcHJlbG9hZCBhcyBwcmVsb2FkXzEyIH0gZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9zcG9ydHMvY3ljbGluZy9jeWNsaW5nLnN2ZWx0ZVwiO1xuaW1wb3J0IGNvbXBvbmVudF8xMyBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL3Nwb3J0cy9ydW5uaW5nL3J1bm5pbmctY2hhcnRzLnN2ZWx0ZVwiO1xuaW1wb3J0IGNvbXBvbmVudF8xNCwgeyBwcmVsb2FkIGFzIHByZWxvYWRfMTQgfSBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL3Nwb3J0cy9ydW5uaW5nL3J1bm5pbmcuc3ZlbHRlXCI7XG5pbXBvcnQgY29tcG9uZW50XzE1IGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvc3BvcnRzL3dvcmtvdXQvd29ya291dC5zdmVsdGVcIjtcbmltcG9ydCBjb21wb25lbnRfMTYgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9hYm91dC5zdmVsdGVcIjtcbmltcG9ydCBjb21wb25lbnRfMTcgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9jaGFydC5zdmVsdGVcIjtcbmltcG9ydCBjb21wb25lbnRfMTgsIHsgcHJlbG9hZCBhcyBwcmVsb2FkXzE4IH0gZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9ibG9nL2luZGV4LnN2ZWx0ZVwiO1xuaW1wb3J0IGNvbXBvbmVudF8xOSwgeyBwcmVsb2FkIGFzIHByZWxvYWRfMTkgfSBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL2Jsb2cvW3NsdWddLnN2ZWx0ZVwiO1xuaW1wb3J0IGNvbXBvbmVudF8yMCBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL0JveC5zdmVsdGVcIjtcbmltcG9ydCByb290IGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvX2xheW91dC5zdmVsdGVcIjtcbmltcG9ydCBlcnJvciBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL19lcnJvci5zdmVsdGVcIjtcblxuY29uc3QgZCA9IGRlY29kZVVSSUNvbXBvbmVudDtcblxuZXhwb3J0IGNvbnN0IG1hbmlmZXN0ID0ge1xuXHRzZXJ2ZXJfcm91dGVzOiBbXG5cdFx0e1xuXHRcdFx0Ly8gbmV3X3Nlc3Npb25zL2luZGV4Lmpzb24uanNcblx0XHRcdHBhdHRlcm46IC9eXFwvbmV3X3Nlc3Npb25zXFwuanNvbiQvLFxuXHRcdFx0aGFuZGxlcnM6IHJvdXRlXzAsXG5cdFx0XHRwYXJhbXM6ICgpID0+ICh7fSlcblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gc3BvcnRfbGlzdC9pbmRleC5qc29uLmpzXG5cdFx0XHRwYXR0ZXJuOiAvXlxcL3Nwb3J0X2xpc3RcXC5qc29uJC8sXG5cdFx0XHRoYW5kbGVyczogcm91dGVfMSxcblx0XHRcdHBhcmFtczogKCkgPT4gKHt9KVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyBzcG9ydF9saXN0L1tzbHVnXS5qc29uLmpzXG5cdFx0XHRwYXR0ZXJuOiAvXlxcL3Nwb3J0X2xpc3RcXC8oW15cXC9dKz8pXFwuanNvbiQvLFxuXHRcdFx0aGFuZGxlcnM6IHJvdXRlXzIsXG5cdFx0XHRwYXJhbXM6IG1hdGNoID0+ICh7IHNsdWc6IGQobWF0Y2hbMV0pIH0pXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIHNwb3J0cy9zd2ltbWluZy9pbmRleC5qc29uLmpzXG5cdFx0XHRwYXR0ZXJuOiAvXlxcL3Nwb3J0c1xcL3N3aW1taW5nXFwuanNvbiQvLFxuXHRcdFx0aGFuZGxlcnM6IHJvdXRlXzMsXG5cdFx0XHRwYXJhbXM6ICgpID0+ICh7fSlcblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gc3BvcnRzL3N3aW1taW5nL3N3aW1taW5nLWRhdGEuanNcblx0XHRcdHBhdHRlcm46IC9eXFwvc3BvcnRzXFwvc3dpbW1pbmdcXC9zd2ltbWluZy1kYXRhXFwvPyQvLFxuXHRcdFx0aGFuZGxlcnM6IHJvdXRlXzQsXG5cdFx0XHRwYXJhbXM6ICgpID0+ICh7fSlcblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gc3BvcnRzL2N5Y2xpbmcvaW5kZXguanNvbi5qc1xuXHRcdFx0cGF0dGVybjogL15cXC9zcG9ydHNcXC9jeWNsaW5nXFwuanNvbiQvLFxuXHRcdFx0aGFuZGxlcnM6IHJvdXRlXzUsXG5cdFx0XHRwYXJhbXM6ICgpID0+ICh7fSlcblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gc3BvcnRzL2N5Y2xpbmcvY3ljbGluZy1kYXRhLmpzXG5cdFx0XHRwYXR0ZXJuOiAvXlxcL3Nwb3J0c1xcL2N5Y2xpbmdcXC9jeWNsaW5nLWRhdGFcXC8/JC8sXG5cdFx0XHRoYW5kbGVyczogcm91dGVfNixcblx0XHRcdHBhcmFtczogKCkgPT4gKHt9KVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyBzcG9ydHMvcnVubmluZy9pbmRleC5qc29uLmpzXG5cdFx0XHRwYXR0ZXJuOiAvXlxcL3Nwb3J0c1xcL3J1bm5pbmdcXC5qc29uJC8sXG5cdFx0XHRoYW5kbGVyczogcm91dGVfNyxcblx0XHRcdHBhcmFtczogKCkgPT4gKHt9KVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyBzcG9ydC5qc1xuXHRcdFx0cGF0dGVybjogL15cXC9zcG9ydFxcLz8kLyxcblx0XHRcdGhhbmRsZXJzOiByb3V0ZV84LFxuXHRcdFx0cGFyYW1zOiAoKSA9PiAoe30pXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIGJsb2cvaW5kZXguanNvbi5qc1xuXHRcdFx0cGF0dGVybjogL15cXC9ibG9nXFwuanNvbiQvLFxuXHRcdFx0aGFuZGxlcnM6IHJvdXRlXzksXG5cdFx0XHRwYXJhbXM6ICgpID0+ICh7fSlcblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gYmxvZy9bc2x1Z10uanNvbi5qc1xuXHRcdFx0cGF0dGVybjogL15cXC9ibG9nXFwvKFteXFwvXSs/KVxcLmpzb24kLyxcblx0XHRcdGhhbmRsZXJzOiByb3V0ZV8xMCxcblx0XHRcdHBhcmFtczogbWF0Y2ggPT4gKHsgc2x1ZzogZChtYXRjaFsxXSkgfSlcblx0XHR9XG5cdF0sXG5cblx0cGFnZXM6IFtcblx0XHR7XG5cdFx0XHQvLyBpbmRleC5zdmVsdGVcblx0XHRcdHBhdHRlcm46IC9eXFwvJC8sXG5cdFx0XHRwYXJ0czogW1xuXHRcdFx0XHR7IG5hbWU6IFwiaW5kZXhcIiwgZmlsZTogXCJpbmRleC5zdmVsdGVcIiwgY29tcG9uZW50OiBjb21wb25lbnRfMCB9XG5cdFx0XHRdXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIGZyYXBwZS1jaGFydHMuc3ZlbHRlXG5cdFx0XHRwYXR0ZXJuOiAvXlxcL2ZyYXBwZS1jaGFydHNcXC8/JC8sXG5cdFx0XHRwYXJ0czogW1xuXHRcdFx0XHR7IG5hbWU6IFwiZnJhcHBlJDQ1Y2hhcnRzXCIsIGZpbGU6IFwiZnJhcHBlLWNoYXJ0cy5zdmVsdGVcIiwgY29tcG9uZW50OiBjb21wb25lbnRfMSB9XG5cdFx0XHRdXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIG5ld19zZXNzaW9ucy9uZXdfY3ljbGluZy5zdmVsdGVcblx0XHRcdHBhdHRlcm46IC9eXFwvbmV3X3Nlc3Npb25zXFwvbmV3X2N5Y2xpbmdcXC8/JC8sXG5cdFx0XHRwYXJ0czogW1xuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHR7IG5hbWU6IFwibmV3X3Nlc3Npb25zX25ld19jeWNsaW5nXCIsIGZpbGU6IFwibmV3X3Nlc3Npb25zL25ld19jeWNsaW5nLnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF8yLCBwcmVsb2FkOiBwcmVsb2FkXzIgfVxuXHRcdFx0XVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyBuZXdfc2Vzc2lvbi5zdmVsdGVcblx0XHRcdHBhdHRlcm46IC9eXFwvbmV3X3Nlc3Npb25cXC8/JC8sXG5cdFx0XHRwYXJ0czogW1xuXHRcdFx0XHR7IG5hbWU6IFwibmV3X3Nlc3Npb25cIiwgZmlsZTogXCJuZXdfc2Vzc2lvbi5zdmVsdGVcIiwgY29tcG9uZW50OiBjb21wb25lbnRfMywgcHJlbG9hZDogcHJlbG9hZF8zIH1cblx0XHRcdF1cblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gcGVyZm9ybWFuY2Uuc3ZlbHRlXG5cdFx0XHRwYXR0ZXJuOiAvXlxcL3BlcmZvcm1hbmNlXFwvPyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0eyBuYW1lOiBcInBlcmZvcm1hbmNlXCIsIGZpbGU6IFwicGVyZm9ybWFuY2Uuc3ZlbHRlXCIsIGNvbXBvbmVudDogY29tcG9uZW50XzQgfVxuXHRcdFx0XVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyBzcG9ydF9saXN0L2luZGV4LnN2ZWx0ZVxuXHRcdFx0cGF0dGVybjogL15cXC9zcG9ydF9saXN0XFwvPyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0eyBuYW1lOiBcInNwb3J0X2xpc3RcIiwgZmlsZTogXCJzcG9ydF9saXN0L2luZGV4LnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF81IH1cblx0XHRcdF1cblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gc3BvcnRfbGlzdC9bc2x1Z10uc3ZlbHRlXG5cdFx0XHRwYXR0ZXJuOiAvXlxcL3Nwb3J0X2xpc3RcXC8oW15cXC9dKz8pXFwvPyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0eyBuYW1lOiBcInNwb3J0X2xpc3RfJHNsdWdcIiwgZmlsZTogXCJzcG9ydF9saXN0L1tzbHVnXS5zdmVsdGVcIiwgY29tcG9uZW50OiBjb21wb25lbnRfNiwgcGFyYW1zOiBtYXRjaCA9PiAoeyBzbHVnOiBkKG1hdGNoWzFdKSB9KSB9XG5cdFx0XHRdXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIGNoYXJ0ZXN0LnN2ZWx0ZVxuXHRcdFx0cGF0dGVybjogL15cXC9jaGFydGVzdFxcLz8kLyxcblx0XHRcdHBhcnRzOiBbXG5cdFx0XHRcdHsgbmFtZTogXCJjaGFydGVzdFwiLCBmaWxlOiBcImNoYXJ0ZXN0LnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF83IH1cblx0XHRcdF1cblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gdHV0b3JpYWwuc3ZlbHRlXG5cdFx0XHRwYXR0ZXJuOiAvXlxcL3R1dG9yaWFsXFwvPyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0eyBuYW1lOiBcInR1dG9yaWFsXCIsIGZpbGU6IFwidHV0b3JpYWwuc3ZlbHRlXCIsIGNvbXBvbmVudDogY29tcG9uZW50XzggfVxuXHRcdFx0XVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyBzcG9ydHMvc3dpbW1pbmcvc3dpbW1pbmctY2hhcnRzLnN2ZWx0ZVxuXHRcdFx0cGF0dGVybjogL15cXC9zcG9ydHNcXC9zd2ltbWluZ1xcL3N3aW1taW5nLWNoYXJ0c1xcLz8kLyxcblx0XHRcdHBhcnRzOiBbXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHsgbmFtZTogXCJzcG9ydHNfc3dpbW1pbmdfc3dpbW1pbmckNDVjaGFydHNcIiwgZmlsZTogXCJzcG9ydHMvc3dpbW1pbmcvc3dpbW1pbmctY2hhcnRzLnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF85IH1cblx0XHRcdF1cblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gc3BvcnRzL3N3aW1taW5nL3N3aW1taW5nLnN2ZWx0ZVxuXHRcdFx0cGF0dGVybjogL15cXC9zcG9ydHNcXC9zd2ltbWluZ1xcL3N3aW1taW5nXFwvPyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0eyBuYW1lOiBcInNwb3J0c19zd2ltbWluZ19zd2ltbWluZ1wiLCBmaWxlOiBcInNwb3J0cy9zd2ltbWluZy9zd2ltbWluZy5zdmVsdGVcIiwgY29tcG9uZW50OiBjb21wb25lbnRfMTAsIHByZWxvYWQ6IHByZWxvYWRfMTAgfVxuXHRcdFx0XVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyBzcG9ydHMvY3ljbGluZy9jeWNsaW5nLWNoYXJ0cy5zdmVsdGVcblx0XHRcdHBhdHRlcm46IC9eXFwvc3BvcnRzXFwvY3ljbGluZ1xcL2N5Y2xpbmctY2hhcnRzXFwvPyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0eyBuYW1lOiBcInNwb3J0c19jeWNsaW5nX2N5Y2xpbmckNDVjaGFydHNcIiwgZmlsZTogXCJzcG9ydHMvY3ljbGluZy9jeWNsaW5nLWNoYXJ0cy5zdmVsdGVcIiwgY29tcG9uZW50OiBjb21wb25lbnRfMTEgfVxuXHRcdFx0XVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyBzcG9ydHMvY3ljbGluZy9jeWNsaW5nLnN2ZWx0ZVxuXHRcdFx0cGF0dGVybjogL15cXC9zcG9ydHNcXC9jeWNsaW5nXFwvY3ljbGluZ1xcLz8kLyxcblx0XHRcdHBhcnRzOiBbXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHsgbmFtZTogXCJzcG9ydHNfY3ljbGluZ19jeWNsaW5nXCIsIGZpbGU6IFwic3BvcnRzL2N5Y2xpbmcvY3ljbGluZy5zdmVsdGVcIiwgY29tcG9uZW50OiBjb21wb25lbnRfMTIsIHByZWxvYWQ6IHByZWxvYWRfMTIgfVxuXHRcdFx0XVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyBzcG9ydHMvcnVubmluZy9ydW5uaW5nLWNoYXJ0cy5zdmVsdGVcblx0XHRcdHBhdHRlcm46IC9eXFwvc3BvcnRzXFwvcnVubmluZ1xcL3J1bm5pbmctY2hhcnRzXFwvPyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0eyBuYW1lOiBcInNwb3J0c19ydW5uaW5nX3J1bm5pbmckNDVjaGFydHNcIiwgZmlsZTogXCJzcG9ydHMvcnVubmluZy9ydW5uaW5nLWNoYXJ0cy5zdmVsdGVcIiwgY29tcG9uZW50OiBjb21wb25lbnRfMTMgfVxuXHRcdFx0XVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyBzcG9ydHMvcnVubmluZy9ydW5uaW5nLnN2ZWx0ZVxuXHRcdFx0cGF0dGVybjogL15cXC9zcG9ydHNcXC9ydW5uaW5nXFwvcnVubmluZ1xcLz8kLyxcblx0XHRcdHBhcnRzOiBbXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHsgbmFtZTogXCJzcG9ydHNfcnVubmluZ19ydW5uaW5nXCIsIGZpbGU6IFwic3BvcnRzL3J1bm5pbmcvcnVubmluZy5zdmVsdGVcIiwgY29tcG9uZW50OiBjb21wb25lbnRfMTQsIHByZWxvYWQ6IHByZWxvYWRfMTQgfVxuXHRcdFx0XVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyBzcG9ydHMvd29ya291dC93b3Jrb3V0LnN2ZWx0ZVxuXHRcdFx0cGF0dGVybjogL15cXC9zcG9ydHNcXC93b3Jrb3V0XFwvd29ya291dFxcLz8kLyxcblx0XHRcdHBhcnRzOiBbXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHsgbmFtZTogXCJzcG9ydHNfd29ya291dF93b3Jrb3V0XCIsIGZpbGU6IFwic3BvcnRzL3dvcmtvdXQvd29ya291dC5zdmVsdGVcIiwgY29tcG9uZW50OiBjb21wb25lbnRfMTUgfVxuXHRcdFx0XVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyBhYm91dC5zdmVsdGVcblx0XHRcdHBhdHRlcm46IC9eXFwvYWJvdXRcXC8/JC8sXG5cdFx0XHRwYXJ0czogW1xuXHRcdFx0XHR7IG5hbWU6IFwiYWJvdXRcIiwgZmlsZTogXCJhYm91dC5zdmVsdGVcIiwgY29tcG9uZW50OiBjb21wb25lbnRfMTYgfVxuXHRcdFx0XVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyBjaGFydC5zdmVsdGVcblx0XHRcdHBhdHRlcm46IC9eXFwvY2hhcnRcXC8/JC8sXG5cdFx0XHRwYXJ0czogW1xuXHRcdFx0XHR7IG5hbWU6IFwiY2hhcnRcIiwgZmlsZTogXCJjaGFydC5zdmVsdGVcIiwgY29tcG9uZW50OiBjb21wb25lbnRfMTcgfVxuXHRcdFx0XVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyBibG9nL2luZGV4LnN2ZWx0ZVxuXHRcdFx0cGF0dGVybjogL15cXC9ibG9nXFwvPyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0eyBuYW1lOiBcImJsb2dcIiwgZmlsZTogXCJibG9nL2luZGV4LnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF8xOCwgcHJlbG9hZDogcHJlbG9hZF8xOCB9XG5cdFx0XHRdXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIGJsb2cvW3NsdWddLnN2ZWx0ZVxuXHRcdFx0cGF0dGVybjogL15cXC9ibG9nXFwvKFteXFwvXSs/KVxcLz8kLyxcblx0XHRcdHBhcnRzOiBbXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHsgbmFtZTogXCJibG9nXyRzbHVnXCIsIGZpbGU6IFwiYmxvZy9bc2x1Z10uc3ZlbHRlXCIsIGNvbXBvbmVudDogY29tcG9uZW50XzE5LCBwcmVsb2FkOiBwcmVsb2FkXzE5LCBwYXJhbXM6IG1hdGNoID0+ICh7IHNsdWc6IGQobWF0Y2hbMV0pIH0pIH1cblx0XHRcdF1cblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gQm94LnN2ZWx0ZVxuXHRcdFx0cGF0dGVybjogL15cXC9Cb3hcXC8/JC8sXG5cdFx0XHRwYXJ0czogW1xuXHRcdFx0XHR7IG5hbWU6IFwiQm94XCIsIGZpbGU6IFwiQm94LnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF8yMCB9XG5cdFx0XHRdXG5cdFx0fVxuXHRdLFxuXG5cdHJvb3QsXG5cdHJvb3RfcHJlbG9hZDogKCkgPT4ge30sXG5cdGVycm9yXG59O1xuXG5leHBvcnQgY29uc3QgYnVpbGRfZGlyID0gXCJfX3NhcHBlcl9fL2RldlwiO1xuXG5leHBvcnQgY29uc3Qgc3JjX2RpciA9IFwic3JjXCI7XG5cbmV4cG9ydCBjb25zdCBkZXYgPSB0cnVlOyIsImltcG9ydCB7IG5vb3AsIHNhZmVfbm90X2VxdWFsLCBzdWJzY3JpYmUsIHJ1bl9hbGwsIGlzX2Z1bmN0aW9uIH0gZnJvbSAnLi4vaW50ZXJuYWwnO1xuZXhwb3J0IHsgZ2V0X3N0b3JlX3ZhbHVlIGFzIGdldCB9IGZyb20gJy4uL2ludGVybmFsJztcblxuY29uc3Qgc3Vic2NyaWJlcl9xdWV1ZSA9IFtdO1xuLyoqXG4gKiBDcmVhdGVzIGEgYFJlYWRhYmxlYCBzdG9yZSB0aGF0IGFsbG93cyByZWFkaW5nIGJ5IHN1YnNjcmlwdGlvbi5cbiAqIEBwYXJhbSB2YWx1ZSBpbml0aWFsIHZhbHVlXG4gKiBAcGFyYW0ge1N0YXJ0U3RvcE5vdGlmaWVyfXN0YXJ0IHN0YXJ0IGFuZCBzdG9wIG5vdGlmaWNhdGlvbnMgZm9yIHN1YnNjcmlwdGlvbnNcbiAqL1xuZnVuY3Rpb24gcmVhZGFibGUodmFsdWUsIHN0YXJ0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3Vic2NyaWJlOiB3cml0YWJsZSh2YWx1ZSwgc3RhcnQpLnN1YnNjcmliZSxcbiAgICB9O1xufVxuLyoqXG4gKiBDcmVhdGUgYSBgV3JpdGFibGVgIHN0b3JlIHRoYXQgYWxsb3dzIGJvdGggdXBkYXRpbmcgYW5kIHJlYWRpbmcgYnkgc3Vic2NyaXB0aW9uLlxuICogQHBhcmFtIHsqPX12YWx1ZSBpbml0aWFsIHZhbHVlXG4gKiBAcGFyYW0ge1N0YXJ0U3RvcE5vdGlmaWVyPX1zdGFydCBzdGFydCBhbmQgc3RvcCBub3RpZmljYXRpb25zIGZvciBzdWJzY3JpcHRpb25zXG4gKi9cbmZ1bmN0aW9uIHdyaXRhYmxlKHZhbHVlLCBzdGFydCA9IG5vb3ApIHtcbiAgICBsZXQgc3RvcDtcbiAgICBjb25zdCBzdWJzY3JpYmVycyA9IFtdO1xuICAgIGZ1bmN0aW9uIHNldChuZXdfdmFsdWUpIHtcbiAgICAgICAgaWYgKHNhZmVfbm90X2VxdWFsKHZhbHVlLCBuZXdfdmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG5ld192YWx1ZTtcbiAgICAgICAgICAgIGlmIChzdG9wKSB7IC8vIHN0b3JlIGlzIHJlYWR5XG4gICAgICAgICAgICAgICAgY29uc3QgcnVuX3F1ZXVlID0gIXN1YnNjcmliZXJfcXVldWUubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Vic2NyaWJlcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcyA9IHN1YnNjcmliZXJzW2ldO1xuICAgICAgICAgICAgICAgICAgICBzWzFdKCk7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJfcXVldWUucHVzaChzLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChydW5fcXVldWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJzY3JpYmVyX3F1ZXVlLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyX3F1ZXVlW2ldWzBdKHN1YnNjcmliZXJfcXVldWVbaSArIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyX3F1ZXVlLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZShmbikge1xuICAgICAgICBzZXQoZm4odmFsdWUpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3Vic2NyaWJlKHJ1biwgaW52YWxpZGF0ZSA9IG5vb3ApIHtcbiAgICAgICAgY29uc3Qgc3Vic2NyaWJlciA9IFtydW4sIGludmFsaWRhdGVdO1xuICAgICAgICBzdWJzY3JpYmVycy5wdXNoKHN1YnNjcmliZXIpO1xuICAgICAgICBpZiAoc3Vic2NyaWJlcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBzdG9wID0gc3RhcnQoc2V0KSB8fCBub29wO1xuICAgICAgICB9XG4gICAgICAgIHJ1bih2YWx1ZSk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHN1YnNjcmliZXJzLmluZGV4T2Yoc3Vic2NyaWJlcik7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdWJzY3JpYmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBzdG9wKCk7XG4gICAgICAgICAgICAgICAgc3RvcCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7IHNldCwgdXBkYXRlLCBzdWJzY3JpYmUgfTtcbn1cbmZ1bmN0aW9uIGRlcml2ZWQoc3RvcmVzLCBmbiwgaW5pdGlhbF92YWx1ZSkge1xuICAgIGNvbnN0IHNpbmdsZSA9ICFBcnJheS5pc0FycmF5KHN0b3Jlcyk7XG4gICAgY29uc3Qgc3RvcmVzX2FycmF5ID0gc2luZ2xlXG4gICAgICAgID8gW3N0b3Jlc11cbiAgICAgICAgOiBzdG9yZXM7XG4gICAgY29uc3QgYXV0byA9IGZuLmxlbmd0aCA8IDI7XG4gICAgcmV0dXJuIHJlYWRhYmxlKGluaXRpYWxfdmFsdWUsIChzZXQpID0+IHtcbiAgICAgICAgbGV0IGluaXRlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBbXTtcbiAgICAgICAgbGV0IHBlbmRpbmcgPSAwO1xuICAgICAgICBsZXQgY2xlYW51cCA9IG5vb3A7XG4gICAgICAgIGNvbnN0IHN5bmMgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAocGVuZGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZuKHNpbmdsZSA/IHZhbHVlc1swXSA6IHZhbHVlcywgc2V0KTtcbiAgICAgICAgICAgIGlmIChhdXRvKSB7XG4gICAgICAgICAgICAgICAgc2V0KHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGVhbnVwID0gaXNfZnVuY3Rpb24ocmVzdWx0KSA/IHJlc3VsdCA6IG5vb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHVuc3Vic2NyaWJlcnMgPSBzdG9yZXNfYXJyYXkubWFwKChzdG9yZSwgaSkgPT4gc3Vic2NyaWJlKHN0b3JlLCAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHZhbHVlc1tpXSA9IHZhbHVlO1xuICAgICAgICAgICAgcGVuZGluZyAmPSB+KDEgPDwgaSk7XG4gICAgICAgICAgICBpZiAoaW5pdGVkKSB7XG4gICAgICAgICAgICAgICAgc3luYygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBwZW5kaW5nIHw9ICgxIDw8IGkpO1xuICAgICAgICB9KSk7XG4gICAgICAgIGluaXRlZCA9IHRydWU7XG4gICAgICAgIHN5bmMoKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgICAgICBydW5fYWxsKHVuc3Vic2NyaWJlcnMpO1xuICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICB9O1xuICAgIH0pO1xufVxuXG5leHBvcnQgeyBkZXJpdmVkLCByZWFkYWJsZSwgd3JpdGFibGUgfTtcbiIsImltcG9ydCB7IHdyaXRhYmxlIH0gZnJvbSAnc3ZlbHRlL3N0b3JlJztcblxuZXhwb3J0IGNvbnN0IENPTlRFWFRfS0VZID0ge307XG5cbmV4cG9ydCBjb25zdCBwcmVsb2FkID0gKCkgPT4gKHt9KTsiLCI8IS0tIFRoaXMgZmlsZSBpcyBnZW5lcmF0ZWQgYnkgU2FwcGVyIOKAlCBkbyBub3QgZWRpdCBpdCEgLS0+XG48c2NyaXB0PlxuXHRpbXBvcnQgeyBzZXRDb250ZXh0LCBhZnRlclVwZGF0ZSB9IGZyb20gJ3N2ZWx0ZSc7XG5cdGltcG9ydCB7IENPTlRFWFRfS0VZIH0gZnJvbSAnLi9zaGFyZWQnO1xuXHRpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL3JvdXRlcy9fbGF5b3V0LnN2ZWx0ZSc7XG5cdGltcG9ydCBFcnJvciBmcm9tICcuLi8uLi8uLi9yb3V0ZXMvX2Vycm9yLnN2ZWx0ZSc7XG5cblx0ZXhwb3J0IGxldCBzdG9yZXM7XG5cdGV4cG9ydCBsZXQgZXJyb3I7XG5cdGV4cG9ydCBsZXQgc3RhdHVzO1xuXHRleHBvcnQgbGV0IHNlZ21lbnRzO1xuXHRleHBvcnQgbGV0IGxldmVsMDtcblx0ZXhwb3J0IGxldCBsZXZlbDEgPSBudWxsO1xuXHRleHBvcnQgbGV0IG5vdGlmeTtcblxuXHRhZnRlclVwZGF0ZShub3RpZnkpO1xuXHRzZXRDb250ZXh0KENPTlRFWFRfS0VZLCBzdG9yZXMpO1xuPC9zY3JpcHQ+XG5cbjxMYXlvdXQgc2VnbWVudD1cIntzZWdtZW50c1swXX1cIiB7Li4ubGV2ZWwwLnByb3BzfT5cblx0eyNpZiBlcnJvcn1cblx0XHQ8RXJyb3Ige2Vycm9yfSB7c3RhdHVzfS8+XG5cdHs6ZWxzZX1cblx0XHQ8c3ZlbHRlOmNvbXBvbmVudCB0aGlzPVwie2xldmVsMS5jb21wb25lbnR9XCIgey4uLmxldmVsMS5wcm9wc30vPlxuXHR7L2lmfVxuPC9MYXlvdXQ+IiwiaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgZGV2LCBidWlsZF9kaXIsIHNyY19kaXIsIG1hbmlmZXN0IH0gZnJvbSAnLi9pbnRlcm5hbC9tYW5pZmVzdC1zZXJ2ZXInO1xuaW1wb3J0IHsgd3JpdGFibGUgfSBmcm9tICdzdmVsdGUvc3RvcmUnO1xuaW1wb3J0IFN0cmVhbSBmcm9tICdzdHJlYW0nO1xuaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCc7XG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5pbXBvcnQgaHR0cHMgZnJvbSAnaHR0cHMnO1xuaW1wb3J0IHpsaWIgZnJvbSAnemxpYic7XG5pbXBvcnQgQXBwIGZyb20gJy4vaW50ZXJuYWwvQXBwLnN2ZWx0ZSc7XG5cbi8qKlxuICogQHBhcmFtIHR5cGVNYXAgW09iamVjdF0gTWFwIG9mIE1JTUUgdHlwZSAtPiBBcnJheVtleHRlbnNpb25zXVxuICogQHBhcmFtIC4uLlxuICovXG5mdW5jdGlvbiBNaW1lKCkge1xuICB0aGlzLl90eXBlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHRoaXMuX2V4dGVuc2lvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdGhpcy5kZWZpbmUoYXJndW1lbnRzW2ldKTtcbiAgfVxuXG4gIHRoaXMuZGVmaW5lID0gdGhpcy5kZWZpbmUuYmluZCh0aGlzKTtcbiAgdGhpcy5nZXRUeXBlID0gdGhpcy5nZXRUeXBlLmJpbmQodGhpcyk7XG4gIHRoaXMuZ2V0RXh0ZW5zaW9uID0gdGhpcy5nZXRFeHRlbnNpb24uYmluZCh0aGlzKTtcbn1cblxuLyoqXG4gKiBEZWZpbmUgbWltZXR5cGUgLT4gZXh0ZW5zaW9uIG1hcHBpbmdzLiAgRWFjaCBrZXkgaXMgYSBtaW1lLXR5cGUgdGhhdCBtYXBzXG4gKiB0byBhbiBhcnJheSBvZiBleHRlbnNpb25zIGFzc29jaWF0ZWQgd2l0aCB0aGUgdHlwZS4gIFRoZSBmaXJzdCBleHRlbnNpb24gaXNcbiAqIHVzZWQgYXMgdGhlIGRlZmF1bHQgZXh0ZW5zaW9uIGZvciB0aGUgdHlwZS5cbiAqXG4gKiBlLmcuIG1pbWUuZGVmaW5lKHsnYXVkaW8vb2dnJywgWydvZ2EnLCAnb2dnJywgJ3NweCddfSk7XG4gKlxuICogSWYgYSB0eXBlIGRlY2xhcmVzIGFuIGV4dGVuc2lvbiB0aGF0IGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZCwgYW4gZXJyb3Igd2lsbFxuICogYmUgdGhyb3duLiAgVG8gc3VwcHJlc3MgdGhpcyBlcnJvciBhbmQgZm9yY2UgdGhlIGV4dGVuc2lvbiB0byBiZSBhc3NvY2lhdGVkXG4gKiB3aXRoIHRoZSBuZXcgdHlwZSwgcGFzcyBgZm9yY2VgPXRydWUuICBBbHRlcm5hdGl2ZWx5LCB5b3UgbWF5IHByZWZpeCB0aGVcbiAqIGV4dGVuc2lvbiB3aXRoIFwiKlwiIHRvIG1hcCB0aGUgdHlwZSB0byBleHRlbnNpb24sIHdpdGhvdXQgbWFwcGluZyB0aGVcbiAqIGV4dGVuc2lvbiB0byB0aGUgdHlwZS5cbiAqXG4gKiBlLmcuIG1pbWUuZGVmaW5lKHsnYXVkaW8vd2F2JywgWyd3YXYnXX0sIHsnYXVkaW8veC13YXYnLCBbJyp3YXYnXX0pO1xuICpcbiAqXG4gKiBAcGFyYW0gbWFwIChPYmplY3QpIHR5cGUgZGVmaW5pdGlvbnNcbiAqIEBwYXJhbSBmb3JjZSAoQm9vbGVhbikgaWYgdHJ1ZSwgZm9yY2Ugb3ZlcnJpZGluZyBvZiBleGlzdGluZyBkZWZpbml0aW9uc1xuICovXG5NaW1lLnByb3RvdHlwZS5kZWZpbmUgPSBmdW5jdGlvbih0eXBlTWFwLCBmb3JjZSkge1xuICBmb3IgKHZhciB0eXBlIGluIHR5cGVNYXApIHtcbiAgICB2YXIgZXh0ZW5zaW9ucyA9IHR5cGVNYXBbdHlwZV0ubWFwKGZ1bmN0aW9uKHQpIHtyZXR1cm4gdC50b0xvd2VyQ2FzZSgpfSk7XG4gICAgdHlwZSA9IHR5cGUudG9Mb3dlckNhc2UoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXh0ZW5zaW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGV4dCA9IGV4dGVuc2lvbnNbaV07XG5cbiAgICAgIC8vICcqJyBwcmVmaXggPSBub3QgdGhlIHByZWZlcnJlZCB0eXBlIGZvciB0aGlzIGV4dGVuc2lvbi4gIFNvIGZpeHVwIHRoZVxuICAgICAgLy8gZXh0ZW5zaW9uLCBhbmQgc2tpcCBpdC5cbiAgICAgIGlmIChleHRbMF0gPT0gJyonKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWZvcmNlICYmIChleHQgaW4gdGhpcy5fdHlwZXMpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnQXR0ZW1wdCB0byBjaGFuZ2UgbWFwcGluZyBmb3IgXCInICsgZXh0ICtcbiAgICAgICAgICAnXCIgZXh0ZW5zaW9uIGZyb20gXCInICsgdGhpcy5fdHlwZXNbZXh0XSArICdcIiB0byBcIicgKyB0eXBlICtcbiAgICAgICAgICAnXCIuIFBhc3MgYGZvcmNlPXRydWVgIHRvIGFsbG93IHRoaXMsIG90aGVyd2lzZSByZW1vdmUgXCInICsgZXh0ICtcbiAgICAgICAgICAnXCIgZnJvbSB0aGUgbGlzdCBvZiBleHRlbnNpb25zIGZvciBcIicgKyB0eXBlICsgJ1wiLidcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fdHlwZXNbZXh0XSA9IHR5cGU7XG4gICAgfVxuXG4gICAgLy8gVXNlIGZpcnN0IGV4dGVuc2lvbiBhcyBkZWZhdWx0XG4gICAgaWYgKGZvcmNlIHx8ICF0aGlzLl9leHRlbnNpb25zW3R5cGVdKSB7XG4gICAgICB2YXIgZXh0ID0gZXh0ZW5zaW9uc1swXTtcbiAgICAgIHRoaXMuX2V4dGVuc2lvbnNbdHlwZV0gPSAoZXh0WzBdICE9ICcqJykgPyBleHQgOiBleHQuc3Vic3RyKDEpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBMb29rdXAgYSBtaW1lIHR5cGUgYmFzZWQgb24gZXh0ZW5zaW9uXG4gKi9cbk1pbWUucHJvdG90eXBlLmdldFR5cGUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHBhdGggPSBTdHJpbmcocGF0aCk7XG4gIHZhciBsYXN0ID0gcGF0aC5yZXBsYWNlKC9eLipbL1xcXFxdLywgJycpLnRvTG93ZXJDYXNlKCk7XG4gIHZhciBleHQgPSBsYXN0LnJlcGxhY2UoL14uKlxcLi8sICcnKS50b0xvd2VyQ2FzZSgpO1xuXG4gIHZhciBoYXNQYXRoID0gbGFzdC5sZW5ndGggPCBwYXRoLmxlbmd0aDtcbiAgdmFyIGhhc0RvdCA9IGV4dC5sZW5ndGggPCBsYXN0Lmxlbmd0aCAtIDE7XG5cbiAgcmV0dXJuIChoYXNEb3QgfHwgIWhhc1BhdGgpICYmIHRoaXMuX3R5cGVzW2V4dF0gfHwgbnVsbDtcbn07XG5cbi8qKlxuICogUmV0dXJuIGZpbGUgZXh0ZW5zaW9uIGFzc29jaWF0ZWQgd2l0aCBhIG1pbWUgdHlwZVxuICovXG5NaW1lLnByb3RvdHlwZS5nZXRFeHRlbnNpb24gPSBmdW5jdGlvbih0eXBlKSB7XG4gIHR5cGUgPSAvXlxccyooW147XFxzXSopLy50ZXN0KHR5cGUpICYmIFJlZ0V4cC4kMTtcbiAgcmV0dXJuIHR5cGUgJiYgdGhpcy5fZXh0ZW5zaW9uc1t0eXBlLnRvTG93ZXJDYXNlKCldIHx8IG51bGw7XG59O1xuXG52YXIgTWltZV8xID0gTWltZTtcblxudmFyIHN0YW5kYXJkID0ge1wiYXBwbGljYXRpb24vYW5kcmV3LWluc2V0XCI6W1wiZXpcIl0sXCJhcHBsaWNhdGlvbi9hcHBsaXh3YXJlXCI6W1wiYXdcIl0sXCJhcHBsaWNhdGlvbi9hdG9tK3htbFwiOltcImF0b21cIl0sXCJhcHBsaWNhdGlvbi9hdG9tY2F0K3htbFwiOltcImF0b21jYXRcIl0sXCJhcHBsaWNhdGlvbi9hdG9tc3ZjK3htbFwiOltcImF0b21zdmNcIl0sXCJhcHBsaWNhdGlvbi9iZG9jXCI6W1wiYmRvY1wiXSxcImFwcGxpY2F0aW9uL2NjeG1sK3htbFwiOltcImNjeG1sXCJdLFwiYXBwbGljYXRpb24vY2RtaS1jYXBhYmlsaXR5XCI6W1wiY2RtaWFcIl0sXCJhcHBsaWNhdGlvbi9jZG1pLWNvbnRhaW5lclwiOltcImNkbWljXCJdLFwiYXBwbGljYXRpb24vY2RtaS1kb21haW5cIjpbXCJjZG1pZFwiXSxcImFwcGxpY2F0aW9uL2NkbWktb2JqZWN0XCI6W1wiY2RtaW9cIl0sXCJhcHBsaWNhdGlvbi9jZG1pLXF1ZXVlXCI6W1wiY2RtaXFcIl0sXCJhcHBsaWNhdGlvbi9jdS1zZWVtZVwiOltcImN1XCJdLFwiYXBwbGljYXRpb24vZGFzaCt4bWxcIjpbXCJtcGRcIl0sXCJhcHBsaWNhdGlvbi9kYXZtb3VudCt4bWxcIjpbXCJkYXZtb3VudFwiXSxcImFwcGxpY2F0aW9uL2RvY2Jvb2sreG1sXCI6W1wiZGJrXCJdLFwiYXBwbGljYXRpb24vZHNzYytkZXJcIjpbXCJkc3NjXCJdLFwiYXBwbGljYXRpb24vZHNzYyt4bWxcIjpbXCJ4ZHNzY1wiXSxcImFwcGxpY2F0aW9uL2VjbWFzY3JpcHRcIjpbXCJlY21hXCIsXCJlc1wiXSxcImFwcGxpY2F0aW9uL2VtbWEreG1sXCI6W1wiZW1tYVwiXSxcImFwcGxpY2F0aW9uL2VwdWIremlwXCI6W1wiZXB1YlwiXSxcImFwcGxpY2F0aW9uL2V4aVwiOltcImV4aVwiXSxcImFwcGxpY2F0aW9uL2ZvbnQtdGRwZnJcIjpbXCJwZnJcIl0sXCJhcHBsaWNhdGlvbi9nZW8ranNvblwiOltcImdlb2pzb25cIl0sXCJhcHBsaWNhdGlvbi9nbWwreG1sXCI6W1wiZ21sXCJdLFwiYXBwbGljYXRpb24vZ3B4K3htbFwiOltcImdweFwiXSxcImFwcGxpY2F0aW9uL2d4ZlwiOltcImd4ZlwiXSxcImFwcGxpY2F0aW9uL2d6aXBcIjpbXCJnelwiXSxcImFwcGxpY2F0aW9uL2hqc29uXCI6W1wiaGpzb25cIl0sXCJhcHBsaWNhdGlvbi9oeXBlcnN0dWRpb1wiOltcInN0a1wiXSxcImFwcGxpY2F0aW9uL2lua21sK3htbFwiOltcImlua1wiLFwiaW5rbWxcIl0sXCJhcHBsaWNhdGlvbi9pcGZpeFwiOltcImlwZml4XCJdLFwiYXBwbGljYXRpb24vamF2YS1hcmNoaXZlXCI6W1wiamFyXCIsXCJ3YXJcIixcImVhclwiXSxcImFwcGxpY2F0aW9uL2phdmEtc2VyaWFsaXplZC1vYmplY3RcIjpbXCJzZXJcIl0sXCJhcHBsaWNhdGlvbi9qYXZhLXZtXCI6W1wiY2xhc3NcIl0sXCJhcHBsaWNhdGlvbi9qYXZhc2NyaXB0XCI6W1wianNcIixcIm1qc1wiXSxcImFwcGxpY2F0aW9uL2pzb25cIjpbXCJqc29uXCIsXCJtYXBcIl0sXCJhcHBsaWNhdGlvbi9qc29uNVwiOltcImpzb241XCJdLFwiYXBwbGljYXRpb24vanNvbm1sK2pzb25cIjpbXCJqc29ubWxcIl0sXCJhcHBsaWNhdGlvbi9sZCtqc29uXCI6W1wianNvbmxkXCJdLFwiYXBwbGljYXRpb24vbG9zdCt4bWxcIjpbXCJsb3N0eG1sXCJdLFwiYXBwbGljYXRpb24vbWFjLWJpbmhleDQwXCI6W1wiaHF4XCJdLFwiYXBwbGljYXRpb24vbWFjLWNvbXBhY3Rwcm9cIjpbXCJjcHRcIl0sXCJhcHBsaWNhdGlvbi9tYWRzK3htbFwiOltcIm1hZHNcIl0sXCJhcHBsaWNhdGlvbi9tYW5pZmVzdCtqc29uXCI6W1wid2VibWFuaWZlc3RcIl0sXCJhcHBsaWNhdGlvbi9tYXJjXCI6W1wibXJjXCJdLFwiYXBwbGljYXRpb24vbWFyY3htbCt4bWxcIjpbXCJtcmN4XCJdLFwiYXBwbGljYXRpb24vbWF0aGVtYXRpY2FcIjpbXCJtYVwiLFwibmJcIixcIm1iXCJdLFwiYXBwbGljYXRpb24vbWF0aG1sK3htbFwiOltcIm1hdGhtbFwiXSxcImFwcGxpY2F0aW9uL21ib3hcIjpbXCJtYm94XCJdLFwiYXBwbGljYXRpb24vbWVkaWFzZXJ2ZXJjb250cm9sK3htbFwiOltcIm1zY21sXCJdLFwiYXBwbGljYXRpb24vbWV0YWxpbmsreG1sXCI6W1wibWV0YWxpbmtcIl0sXCJhcHBsaWNhdGlvbi9tZXRhbGluazQreG1sXCI6W1wibWV0YTRcIl0sXCJhcHBsaWNhdGlvbi9tZXRzK3htbFwiOltcIm1ldHNcIl0sXCJhcHBsaWNhdGlvbi9tb2RzK3htbFwiOltcIm1vZHNcIl0sXCJhcHBsaWNhdGlvbi9tcDIxXCI6W1wibTIxXCIsXCJtcDIxXCJdLFwiYXBwbGljYXRpb24vbXA0XCI6W1wibXA0c1wiLFwibTRwXCJdLFwiYXBwbGljYXRpb24vbXN3b3JkXCI6W1wiZG9jXCIsXCJkb3RcIl0sXCJhcHBsaWNhdGlvbi9teGZcIjpbXCJteGZcIl0sXCJhcHBsaWNhdGlvbi9uLXF1YWRzXCI6W1wibnFcIl0sXCJhcHBsaWNhdGlvbi9uLXRyaXBsZXNcIjpbXCJudFwiXSxcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiOltcImJpblwiLFwiZG1zXCIsXCJscmZcIixcIm1hclwiLFwic29cIixcImRpc3RcIixcImRpc3R6XCIsXCJwa2dcIixcImJwa1wiLFwiZHVtcFwiLFwiZWxjXCIsXCJkZXBsb3lcIixcImV4ZVwiLFwiZGxsXCIsXCJkZWJcIixcImRtZ1wiLFwiaXNvXCIsXCJpbWdcIixcIm1zaVwiLFwibXNwXCIsXCJtc21cIixcImJ1ZmZlclwiXSxcImFwcGxpY2F0aW9uL29kYVwiOltcIm9kYVwiXSxcImFwcGxpY2F0aW9uL29lYnBzLXBhY2thZ2UreG1sXCI6W1wib3BmXCJdLFwiYXBwbGljYXRpb24vb2dnXCI6W1wib2d4XCJdLFwiYXBwbGljYXRpb24vb21kb2MreG1sXCI6W1wib21kb2NcIl0sXCJhcHBsaWNhdGlvbi9vbmVub3RlXCI6W1wib25ldG9jXCIsXCJvbmV0b2MyXCIsXCJvbmV0bXBcIixcIm9uZXBrZ1wiXSxcImFwcGxpY2F0aW9uL294cHNcIjpbXCJveHBzXCJdLFwiYXBwbGljYXRpb24vcGF0Y2gtb3BzLWVycm9yK3htbFwiOltcInhlclwiXSxcImFwcGxpY2F0aW9uL3BkZlwiOltcInBkZlwiXSxcImFwcGxpY2F0aW9uL3BncC1lbmNyeXB0ZWRcIjpbXCJwZ3BcIl0sXCJhcHBsaWNhdGlvbi9wZ3Atc2lnbmF0dXJlXCI6W1wiYXNjXCIsXCJzaWdcIl0sXCJhcHBsaWNhdGlvbi9waWNzLXJ1bGVzXCI6W1wicHJmXCJdLFwiYXBwbGljYXRpb24vcGtjczEwXCI6W1wicDEwXCJdLFwiYXBwbGljYXRpb24vcGtjczctbWltZVwiOltcInA3bVwiLFwicDdjXCJdLFwiYXBwbGljYXRpb24vcGtjczctc2lnbmF0dXJlXCI6W1wicDdzXCJdLFwiYXBwbGljYXRpb24vcGtjczhcIjpbXCJwOFwiXSxcImFwcGxpY2F0aW9uL3BraXgtYXR0ci1jZXJ0XCI6W1wiYWNcIl0sXCJhcHBsaWNhdGlvbi9wa2l4LWNlcnRcIjpbXCJjZXJcIl0sXCJhcHBsaWNhdGlvbi9wa2l4LWNybFwiOltcImNybFwiXSxcImFwcGxpY2F0aW9uL3BraXgtcGtpcGF0aFwiOltcInBraXBhdGhcIl0sXCJhcHBsaWNhdGlvbi9wa2l4Y21wXCI6W1wicGtpXCJdLFwiYXBwbGljYXRpb24vcGxzK3htbFwiOltcInBsc1wiXSxcImFwcGxpY2F0aW9uL3Bvc3RzY3JpcHRcIjpbXCJhaVwiLFwiZXBzXCIsXCJwc1wiXSxcImFwcGxpY2F0aW9uL3Bza2MreG1sXCI6W1wicHNrY3htbFwiXSxcImFwcGxpY2F0aW9uL3JhbWwreWFtbFwiOltcInJhbWxcIl0sXCJhcHBsaWNhdGlvbi9yZGYreG1sXCI6W1wicmRmXCIsXCJvd2xcIl0sXCJhcHBsaWNhdGlvbi9yZWdpbmZvK3htbFwiOltcInJpZlwiXSxcImFwcGxpY2F0aW9uL3JlbGF4LW5nLWNvbXBhY3Qtc3ludGF4XCI6W1wicm5jXCJdLFwiYXBwbGljYXRpb24vcmVzb3VyY2UtbGlzdHMreG1sXCI6W1wicmxcIl0sXCJhcHBsaWNhdGlvbi9yZXNvdXJjZS1saXN0cy1kaWZmK3htbFwiOltcInJsZFwiXSxcImFwcGxpY2F0aW9uL3Jscy1zZXJ2aWNlcyt4bWxcIjpbXCJyc1wiXSxcImFwcGxpY2F0aW9uL3Jwa2ktZ2hvc3RidXN0ZXJzXCI6W1wiZ2JyXCJdLFwiYXBwbGljYXRpb24vcnBraS1tYW5pZmVzdFwiOltcIm1mdFwiXSxcImFwcGxpY2F0aW9uL3Jwa2ktcm9hXCI6W1wicm9hXCJdLFwiYXBwbGljYXRpb24vcnNkK3htbFwiOltcInJzZFwiXSxcImFwcGxpY2F0aW9uL3Jzcyt4bWxcIjpbXCJyc3NcIl0sXCJhcHBsaWNhdGlvbi9ydGZcIjpbXCJydGZcIl0sXCJhcHBsaWNhdGlvbi9zYm1sK3htbFwiOltcInNibWxcIl0sXCJhcHBsaWNhdGlvbi9zY3ZwLWN2LXJlcXVlc3RcIjpbXCJzY3FcIl0sXCJhcHBsaWNhdGlvbi9zY3ZwLWN2LXJlc3BvbnNlXCI6W1wic2NzXCJdLFwiYXBwbGljYXRpb24vc2N2cC12cC1yZXF1ZXN0XCI6W1wic3BxXCJdLFwiYXBwbGljYXRpb24vc2N2cC12cC1yZXNwb25zZVwiOltcInNwcFwiXSxcImFwcGxpY2F0aW9uL3NkcFwiOltcInNkcFwiXSxcImFwcGxpY2F0aW9uL3NldC1wYXltZW50LWluaXRpYXRpb25cIjpbXCJzZXRwYXlcIl0sXCJhcHBsaWNhdGlvbi9zZXQtcmVnaXN0cmF0aW9uLWluaXRpYXRpb25cIjpbXCJzZXRyZWdcIl0sXCJhcHBsaWNhdGlvbi9zaGYreG1sXCI6W1wic2hmXCJdLFwiYXBwbGljYXRpb24vc2lldmVcIjpbXCJzaXZcIixcInNpZXZlXCJdLFwiYXBwbGljYXRpb24vc21pbCt4bWxcIjpbXCJzbWlcIixcInNtaWxcIl0sXCJhcHBsaWNhdGlvbi9zcGFycWwtcXVlcnlcIjpbXCJycVwiXSxcImFwcGxpY2F0aW9uL3NwYXJxbC1yZXN1bHRzK3htbFwiOltcInNyeFwiXSxcImFwcGxpY2F0aW9uL3NyZ3NcIjpbXCJncmFtXCJdLFwiYXBwbGljYXRpb24vc3Jncyt4bWxcIjpbXCJncnhtbFwiXSxcImFwcGxpY2F0aW9uL3NydSt4bWxcIjpbXCJzcnVcIl0sXCJhcHBsaWNhdGlvbi9zc2RsK3htbFwiOltcInNzZGxcIl0sXCJhcHBsaWNhdGlvbi9zc21sK3htbFwiOltcInNzbWxcIl0sXCJhcHBsaWNhdGlvbi90ZWkreG1sXCI6W1widGVpXCIsXCJ0ZWljb3JwdXNcIl0sXCJhcHBsaWNhdGlvbi90aHJhdWQreG1sXCI6W1widGZpXCJdLFwiYXBwbGljYXRpb24vdGltZXN0YW1wZWQtZGF0YVwiOltcInRzZFwiXSxcImFwcGxpY2F0aW9uL3ZvaWNleG1sK3htbFwiOltcInZ4bWxcIl0sXCJhcHBsaWNhdGlvbi93YXNtXCI6W1wid2FzbVwiXSxcImFwcGxpY2F0aW9uL3dpZGdldFwiOltcIndndFwiXSxcImFwcGxpY2F0aW9uL3dpbmhscFwiOltcImhscFwiXSxcImFwcGxpY2F0aW9uL3dzZGwreG1sXCI6W1wid3NkbFwiXSxcImFwcGxpY2F0aW9uL3dzcG9saWN5K3htbFwiOltcIndzcG9saWN5XCJdLFwiYXBwbGljYXRpb24veGFtbCt4bWxcIjpbXCJ4YW1sXCJdLFwiYXBwbGljYXRpb24veGNhcC1kaWZmK3htbFwiOltcInhkZlwiXSxcImFwcGxpY2F0aW9uL3hlbmMreG1sXCI6W1wieGVuY1wiXSxcImFwcGxpY2F0aW9uL3hodG1sK3htbFwiOltcInhodG1sXCIsXCJ4aHRcIl0sXCJhcHBsaWNhdGlvbi94bWxcIjpbXCJ4bWxcIixcInhzbFwiLFwieHNkXCIsXCJybmdcIl0sXCJhcHBsaWNhdGlvbi94bWwtZHRkXCI6W1wiZHRkXCJdLFwiYXBwbGljYXRpb24veG9wK3htbFwiOltcInhvcFwiXSxcImFwcGxpY2F0aW9uL3hwcm9jK3htbFwiOltcInhwbFwiXSxcImFwcGxpY2F0aW9uL3hzbHQreG1sXCI6W1wieHNsdFwiXSxcImFwcGxpY2F0aW9uL3hzcGYreG1sXCI6W1wieHNwZlwiXSxcImFwcGxpY2F0aW9uL3h2K3htbFwiOltcIm14bWxcIixcInhodm1sXCIsXCJ4dm1sXCIsXCJ4dm1cIl0sXCJhcHBsaWNhdGlvbi95YW5nXCI6W1wieWFuZ1wiXSxcImFwcGxpY2F0aW9uL3lpbit4bWxcIjpbXCJ5aW5cIl0sXCJhcHBsaWNhdGlvbi96aXBcIjpbXCJ6aXBcIl0sXCJhdWRpby8zZ3BwXCI6W1wiKjNncHBcIl0sXCJhdWRpby9hZHBjbVwiOltcImFkcFwiXSxcImF1ZGlvL2Jhc2ljXCI6W1wiYXVcIixcInNuZFwiXSxcImF1ZGlvL21pZGlcIjpbXCJtaWRcIixcIm1pZGlcIixcImthclwiLFwicm1pXCJdLFwiYXVkaW8vbXAzXCI6W1wiKm1wM1wiXSxcImF1ZGlvL21wNFwiOltcIm00YVwiLFwibXA0YVwiXSxcImF1ZGlvL21wZWdcIjpbXCJtcGdhXCIsXCJtcDJcIixcIm1wMmFcIixcIm1wM1wiLFwibTJhXCIsXCJtM2FcIl0sXCJhdWRpby9vZ2dcIjpbXCJvZ2FcIixcIm9nZ1wiLFwic3B4XCJdLFwiYXVkaW8vczNtXCI6W1wiczNtXCJdLFwiYXVkaW8vc2lsa1wiOltcInNpbFwiXSxcImF1ZGlvL3dhdlwiOltcIndhdlwiXSxcImF1ZGlvL3dhdmVcIjpbXCIqd2F2XCJdLFwiYXVkaW8vd2VibVwiOltcIndlYmFcIl0sXCJhdWRpby94bVwiOltcInhtXCJdLFwiZm9udC9jb2xsZWN0aW9uXCI6W1widHRjXCJdLFwiZm9udC9vdGZcIjpbXCJvdGZcIl0sXCJmb250L3R0ZlwiOltcInR0ZlwiXSxcImZvbnQvd29mZlwiOltcIndvZmZcIl0sXCJmb250L3dvZmYyXCI6W1wid29mZjJcIl0sXCJpbWFnZS9hY2VzXCI6W1wiZXhyXCJdLFwiaW1hZ2UvYXBuZ1wiOltcImFwbmdcIl0sXCJpbWFnZS9ibXBcIjpbXCJibXBcIl0sXCJpbWFnZS9jZ21cIjpbXCJjZ21cIl0sXCJpbWFnZS9kaWNvbS1ybGVcIjpbXCJkcmxlXCJdLFwiaW1hZ2UvZW1mXCI6W1wiZW1mXCJdLFwiaW1hZ2UvZml0c1wiOltcImZpdHNcIl0sXCJpbWFnZS9nM2ZheFwiOltcImczXCJdLFwiaW1hZ2UvZ2lmXCI6W1wiZ2lmXCJdLFwiaW1hZ2UvaGVpY1wiOltcImhlaWNcIl0sXCJpbWFnZS9oZWljLXNlcXVlbmNlXCI6W1wiaGVpY3NcIl0sXCJpbWFnZS9oZWlmXCI6W1wiaGVpZlwiXSxcImltYWdlL2hlaWYtc2VxdWVuY2VcIjpbXCJoZWlmc1wiXSxcImltYWdlL2llZlwiOltcImllZlwiXSxcImltYWdlL2psc1wiOltcImpsc1wiXSxcImltYWdlL2pwMlwiOltcImpwMlwiLFwianBnMlwiXSxcImltYWdlL2pwZWdcIjpbXCJqcGVnXCIsXCJqcGdcIixcImpwZVwiXSxcImltYWdlL2pwbVwiOltcImpwbVwiXSxcImltYWdlL2pweFwiOltcImpweFwiLFwianBmXCJdLFwiaW1hZ2UvanhyXCI6W1wianhyXCJdLFwiaW1hZ2Uva3R4XCI6W1wia3R4XCJdLFwiaW1hZ2UvcG5nXCI6W1wicG5nXCJdLFwiaW1hZ2Uvc2dpXCI6W1wic2dpXCJdLFwiaW1hZ2Uvc3ZnK3htbFwiOltcInN2Z1wiLFwic3ZnelwiXSxcImltYWdlL3QzOFwiOltcInQzOFwiXSxcImltYWdlL3RpZmZcIjpbXCJ0aWZcIixcInRpZmZcIl0sXCJpbWFnZS90aWZmLWZ4XCI6W1widGZ4XCJdLFwiaW1hZ2Uvd2VicFwiOltcIndlYnBcIl0sXCJpbWFnZS93bWZcIjpbXCJ3bWZcIl0sXCJtZXNzYWdlL2Rpc3Bvc2l0aW9uLW5vdGlmaWNhdGlvblwiOltcImRpc3Bvc2l0aW9uLW5vdGlmaWNhdGlvblwiXSxcIm1lc3NhZ2UvZ2xvYmFsXCI6W1widThtc2dcIl0sXCJtZXNzYWdlL2dsb2JhbC1kZWxpdmVyeS1zdGF0dXNcIjpbXCJ1OGRzblwiXSxcIm1lc3NhZ2UvZ2xvYmFsLWRpc3Bvc2l0aW9uLW5vdGlmaWNhdGlvblwiOltcInU4bWRuXCJdLFwibWVzc2FnZS9nbG9iYWwtaGVhZGVyc1wiOltcInU4aGRyXCJdLFwibWVzc2FnZS9yZmM4MjJcIjpbXCJlbWxcIixcIm1pbWVcIl0sXCJtb2RlbC8zbWZcIjpbXCIzbWZcIl0sXCJtb2RlbC9nbHRmK2pzb25cIjpbXCJnbHRmXCJdLFwibW9kZWwvZ2x0Zi1iaW5hcnlcIjpbXCJnbGJcIl0sXCJtb2RlbC9pZ2VzXCI6W1wiaWdzXCIsXCJpZ2VzXCJdLFwibW9kZWwvbWVzaFwiOltcIm1zaFwiLFwibWVzaFwiLFwic2lsb1wiXSxcIm1vZGVsL3N0bFwiOltcInN0bFwiXSxcIm1vZGVsL3ZybWxcIjpbXCJ3cmxcIixcInZybWxcIl0sXCJtb2RlbC94M2QrYmluYXJ5XCI6W1wiKngzZGJcIixcIngzZGJ6XCJdLFwibW9kZWwveDNkK2Zhc3RpbmZvc2V0XCI6W1wieDNkYlwiXSxcIm1vZGVsL3gzZCt2cm1sXCI6W1wiKngzZHZcIixcIngzZHZ6XCJdLFwibW9kZWwveDNkK3htbFwiOltcIngzZFwiLFwieDNkelwiXSxcIm1vZGVsL3gzZC12cm1sXCI6W1wieDNkdlwiXSxcInRleHQvY2FjaGUtbWFuaWZlc3RcIjpbXCJhcHBjYWNoZVwiLFwibWFuaWZlc3RcIl0sXCJ0ZXh0L2NhbGVuZGFyXCI6W1wiaWNzXCIsXCJpZmJcIl0sXCJ0ZXh0L2NvZmZlZXNjcmlwdFwiOltcImNvZmZlZVwiLFwibGl0Y29mZmVlXCJdLFwidGV4dC9jc3NcIjpbXCJjc3NcIl0sXCJ0ZXh0L2NzdlwiOltcImNzdlwiXSxcInRleHQvaHRtbFwiOltcImh0bWxcIixcImh0bVwiLFwic2h0bWxcIl0sXCJ0ZXh0L2phZGVcIjpbXCJqYWRlXCJdLFwidGV4dC9qc3hcIjpbXCJqc3hcIl0sXCJ0ZXh0L2xlc3NcIjpbXCJsZXNzXCJdLFwidGV4dC9tYXJrZG93blwiOltcIm1hcmtkb3duXCIsXCJtZFwiXSxcInRleHQvbWF0aG1sXCI6W1wibW1sXCJdLFwidGV4dC9tZHhcIjpbXCJtZHhcIl0sXCJ0ZXh0L24zXCI6W1wibjNcIl0sXCJ0ZXh0L3BsYWluXCI6W1widHh0XCIsXCJ0ZXh0XCIsXCJjb25mXCIsXCJkZWZcIixcImxpc3RcIixcImxvZ1wiLFwiaW5cIixcImluaVwiXSxcInRleHQvcmljaHRleHRcIjpbXCJydHhcIl0sXCJ0ZXh0L3J0ZlwiOltcIipydGZcIl0sXCJ0ZXh0L3NnbWxcIjpbXCJzZ21sXCIsXCJzZ21cIl0sXCJ0ZXh0L3NoZXhcIjpbXCJzaGV4XCJdLFwidGV4dC9zbGltXCI6W1wic2xpbVwiLFwic2xtXCJdLFwidGV4dC9zdHlsdXNcIjpbXCJzdHlsdXNcIixcInN0eWxcIl0sXCJ0ZXh0L3RhYi1zZXBhcmF0ZWQtdmFsdWVzXCI6W1widHN2XCJdLFwidGV4dC90cm9mZlwiOltcInRcIixcInRyXCIsXCJyb2ZmXCIsXCJtYW5cIixcIm1lXCIsXCJtc1wiXSxcInRleHQvdHVydGxlXCI6W1widHRsXCJdLFwidGV4dC91cmktbGlzdFwiOltcInVyaVwiLFwidXJpc1wiLFwidXJsc1wiXSxcInRleHQvdmNhcmRcIjpbXCJ2Y2FyZFwiXSxcInRleHQvdnR0XCI6W1widnR0XCJdLFwidGV4dC94bWxcIjpbXCIqeG1sXCJdLFwidGV4dC95YW1sXCI6W1wieWFtbFwiLFwieW1sXCJdLFwidmlkZW8vM2dwcFwiOltcIjNncFwiLFwiM2dwcFwiXSxcInZpZGVvLzNncHAyXCI6W1wiM2cyXCJdLFwidmlkZW8vaDI2MVwiOltcImgyNjFcIl0sXCJ2aWRlby9oMjYzXCI6W1wiaDI2M1wiXSxcInZpZGVvL2gyNjRcIjpbXCJoMjY0XCJdLFwidmlkZW8vanBlZ1wiOltcImpwZ3ZcIl0sXCJ2aWRlby9qcG1cIjpbXCIqanBtXCIsXCJqcGdtXCJdLFwidmlkZW8vbWoyXCI6W1wibWoyXCIsXCJtanAyXCJdLFwidmlkZW8vbXAydFwiOltcInRzXCJdLFwidmlkZW8vbXA0XCI6W1wibXA0XCIsXCJtcDR2XCIsXCJtcGc0XCJdLFwidmlkZW8vbXBlZ1wiOltcIm1wZWdcIixcIm1wZ1wiLFwibXBlXCIsXCJtMXZcIixcIm0ydlwiXSxcInZpZGVvL29nZ1wiOltcIm9ndlwiXSxcInZpZGVvL3F1aWNrdGltZVwiOltcInF0XCIsXCJtb3ZcIl0sXCJ2aWRlby93ZWJtXCI6W1wid2VibVwiXX07XG5cbnZhciBsaXRlID0gbmV3IE1pbWVfMShzdGFuZGFyZCk7XG5cbmZ1bmN0aW9uIGdldF9zZXJ2ZXJfcm91dGVfaGFuZGxlcihyb3V0ZXMpIHtcblx0YXN5bmMgZnVuY3Rpb24gaGFuZGxlX3JvdXRlKHJvdXRlLCByZXEsIHJlcywgbmV4dCkge1xuXHRcdHJlcS5wYXJhbXMgPSByb3V0ZS5wYXJhbXMocm91dGUucGF0dGVybi5leGVjKHJlcS5wYXRoKSk7XG5cblx0XHRjb25zdCBtZXRob2QgPSByZXEubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG5cdFx0Ly8gJ2RlbGV0ZScgY2Fubm90IGJlIGV4cG9ydGVkIGZyb20gYSBtb2R1bGUgYmVjYXVzZSBpdCBpcyBhIGtleXdvcmQsXG5cdFx0Ly8gc28gY2hlY2sgZm9yICdkZWwnIGluc3RlYWRcblx0XHRjb25zdCBtZXRob2RfZXhwb3J0ID0gbWV0aG9kID09PSAnZGVsZXRlJyA/ICdkZWwnIDogbWV0aG9kO1xuXHRcdGNvbnN0IGhhbmRsZV9tZXRob2QgPSByb3V0ZS5oYW5kbGVyc1ttZXRob2RfZXhwb3J0XTtcblx0XHRpZiAoaGFuZGxlX21ldGhvZCkge1xuXHRcdFx0aWYgKHByb2Nlc3MuZW52LlNBUFBFUl9FWFBPUlQpIHtcblx0XHRcdFx0Y29uc3QgeyB3cml0ZSwgZW5kLCBzZXRIZWFkZXIgfSA9IHJlcztcblx0XHRcdFx0Y29uc3QgY2h1bmtzID0gW107XG5cdFx0XHRcdGNvbnN0IGhlYWRlcnMgPSB7fTtcblxuXHRcdFx0XHQvLyBpbnRlcmNlcHQgZGF0YSBzbyB0aGF0IGl0IGNhbiBiZSBleHBvcnRlZFxuXHRcdFx0XHRyZXMud3JpdGUgPSBmdW5jdGlvbihjaHVuaykge1xuXHRcdFx0XHRcdGNodW5rcy5wdXNoKEJ1ZmZlci5mcm9tKGNodW5rKSk7XG5cdFx0XHRcdFx0d3JpdGUuYXBwbHkocmVzLCBhcmd1bWVudHMpO1xuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdHJlcy5zZXRIZWFkZXIgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuXHRcdFx0XHRcdGhlYWRlcnNbbmFtZS50b0xvd2VyQ2FzZSgpXSA9IHZhbHVlO1xuXHRcdFx0XHRcdHNldEhlYWRlci5hcHBseShyZXMsIGFyZ3VtZW50cyk7XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0cmVzLmVuZCA9IGZ1bmN0aW9uKGNodW5rKSB7XG5cdFx0XHRcdFx0aWYgKGNodW5rKSBjaHVua3MucHVzaChCdWZmZXIuZnJvbShjaHVuaykpO1xuXHRcdFx0XHRcdGVuZC5hcHBseShyZXMsIGFyZ3VtZW50cyk7XG5cblx0XHRcdFx0XHRwcm9jZXNzLnNlbmQoe1xuXHRcdFx0XHRcdFx0X19zYXBwZXJfXzogdHJ1ZSxcblx0XHRcdFx0XHRcdGV2ZW50OiAnZmlsZScsXG5cdFx0XHRcdFx0XHR1cmw6IHJlcS51cmwsXG5cdFx0XHRcdFx0XHRtZXRob2Q6IHJlcS5tZXRob2QsXG5cdFx0XHRcdFx0XHRzdGF0dXM6IHJlcy5zdGF0dXNDb2RlLFxuXHRcdFx0XHRcdFx0dHlwZTogaGVhZGVyc1snY29udGVudC10eXBlJ10sXG5cdFx0XHRcdFx0XHRib2R5OiBCdWZmZXIuY29uY2F0KGNodW5rcykudG9TdHJpbmcoKVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBoYW5kbGVfbmV4dCA9IChlcnIpID0+IHtcblx0XHRcdFx0aWYgKGVycikge1xuXHRcdFx0XHRcdHJlcy5zdGF0dXNDb2RlID0gNTAwO1xuXHRcdFx0XHRcdHJlcy5lbmQoZXJyLm1lc3NhZ2UpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHByb2Nlc3MubmV4dFRpY2sobmV4dCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IGhhbmRsZV9tZXRob2QocmVxLCByZXMsIGhhbmRsZV9uZXh0KTtcblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGVycik7XG5cdFx0XHRcdGhhbmRsZV9uZXh0KGVycik7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIG5vIG1hdGNoaW5nIGhhbmRsZXIgZm9yIG1ldGhvZFxuXHRcdFx0cHJvY2Vzcy5uZXh0VGljayhuZXh0KTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZnVuY3Rpb24gZmluZF9yb3V0ZShyZXEsIHJlcywgbmV4dCkge1xuXHRcdGZvciAoY29uc3Qgcm91dGUgb2Ygcm91dGVzKSB7XG5cdFx0XHRpZiAocm91dGUucGF0dGVybi50ZXN0KHJlcS5wYXRoKSkge1xuXHRcdFx0XHRoYW5kbGVfcm91dGUocm91dGUsIHJlcSwgcmVzLCBuZXh0KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdG5leHQoKTtcblx0fTtcbn1cblxuLyohXG4gKiBjb29raWVcbiAqIENvcHlyaWdodChjKSAyMDEyLTIwMTQgUm9tYW4gU2h0eWxtYW5cbiAqIENvcHlyaWdodChjKSAyMDE1IERvdWdsYXMgQ2hyaXN0b3BoZXIgV2lsc29uXG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICogQHB1YmxpY1xuICovXG5cbnZhciBwYXJzZV8xID0gcGFyc2U7XG52YXIgc2VyaWFsaXplXzEgPSBzZXJpYWxpemU7XG5cbi8qKlxuICogTW9kdWxlIHZhcmlhYmxlcy5cbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIGRlY29kZSA9IGRlY29kZVVSSUNvbXBvbmVudDtcbnZhciBlbmNvZGUgPSBlbmNvZGVVUklDb21wb25lbnQ7XG52YXIgcGFpclNwbGl0UmVnRXhwID0gLzsgKi87XG5cbi8qKlxuICogUmVnRXhwIHRvIG1hdGNoIGZpZWxkLWNvbnRlbnQgaW4gUkZDIDcyMzAgc2VjIDMuMlxuICpcbiAqIGZpZWxkLWNvbnRlbnQgPSBmaWVsZC12Y2hhciBbIDEqKCBTUCAvIEhUQUIgKSBmaWVsZC12Y2hhciBdXG4gKiBmaWVsZC12Y2hhciAgID0gVkNIQVIgLyBvYnMtdGV4dFxuICogb2JzLXRleHQgICAgICA9ICV4ODAtRkZcbiAqL1xuXG52YXIgZmllbGRDb250ZW50UmVnRXhwID0gL15bXFx1MDAwOVxcdTAwMjAtXFx1MDA3ZVxcdTAwODAtXFx1MDBmZl0rJC87XG5cbi8qKlxuICogUGFyc2UgYSBjb29raWUgaGVhZGVyLlxuICpcbiAqIFBhcnNlIHRoZSBnaXZlbiBjb29raWUgaGVhZGVyIHN0cmluZyBpbnRvIGFuIG9iamVjdFxuICogVGhlIG9iamVjdCBoYXMgdGhlIHZhcmlvdXMgY29va2llcyBhcyBrZXlzKG5hbWVzKSA9PiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IHN0ciBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gIH1cblxuICB2YXIgb2JqID0ge307XG4gIHZhciBvcHQgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcGFpcnMgPSBzdHIuc3BsaXQocGFpclNwbGl0UmVnRXhwKTtcbiAgdmFyIGRlYyA9IG9wdC5kZWNvZGUgfHwgZGVjb2RlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGFpcnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGFpciA9IHBhaXJzW2ldO1xuICAgIHZhciBlcV9pZHggPSBwYWlyLmluZGV4T2YoJz0nKTtcblxuICAgIC8vIHNraXAgdGhpbmdzIHRoYXQgZG9uJ3QgbG9vayBsaWtlIGtleT12YWx1ZVxuICAgIGlmIChlcV9pZHggPCAwKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIga2V5ID0gcGFpci5zdWJzdHIoMCwgZXFfaWR4KS50cmltKCk7XG4gICAgdmFyIHZhbCA9IHBhaXIuc3Vic3RyKCsrZXFfaWR4LCBwYWlyLmxlbmd0aCkudHJpbSgpO1xuXG4gICAgLy8gcXVvdGVkIHZhbHVlc1xuICAgIGlmICgnXCInID09IHZhbFswXSkge1xuICAgICAgdmFsID0gdmFsLnNsaWNlKDEsIC0xKTtcbiAgICB9XG5cbiAgICAvLyBvbmx5IGFzc2lnbiBvbmNlXG4gICAgaWYgKHVuZGVmaW5lZCA9PSBvYmpba2V5XSkge1xuICAgICAgb2JqW2tleV0gPSB0cnlEZWNvZGUodmFsLCBkZWMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogU2VyaWFsaXplIGRhdGEgaW50byBhIGNvb2tpZSBoZWFkZXIuXG4gKlxuICogU2VyaWFsaXplIHRoZSBhIG5hbWUgdmFsdWUgcGFpciBpbnRvIGEgY29va2llIHN0cmluZyBzdWl0YWJsZSBmb3JcbiAqIGh0dHAgaGVhZGVycy4gQW4gb3B0aW9uYWwgb3B0aW9ucyBvYmplY3Qgc3BlY2lmaWVkIGNvb2tpZSBwYXJhbWV0ZXJzLlxuICpcbiAqIHNlcmlhbGl6ZSgnZm9vJywgJ2JhcicsIHsgaHR0cE9ubHk6IHRydWUgfSlcbiAqICAgPT4gXCJmb289YmFyOyBodHRwT25seVwiXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWxcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBzZXJpYWxpemUobmFtZSwgdmFsLCBvcHRpb25zKSB7XG4gIHZhciBvcHQgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgZW5jID0gb3B0LmVuY29kZSB8fCBlbmNvZGU7XG5cbiAgaWYgKHR5cGVvZiBlbmMgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gZW5jb2RlIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIGlmICghZmllbGRDb250ZW50UmVnRXhwLnRlc3QobmFtZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBuYW1lIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHZhciB2YWx1ZSA9IGVuYyh2YWwpO1xuXG4gIGlmICh2YWx1ZSAmJiAhZmllbGRDb250ZW50UmVnRXhwLnRlc3QodmFsdWUpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgdmFsIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHZhciBzdHIgPSBuYW1lICsgJz0nICsgdmFsdWU7XG5cbiAgaWYgKG51bGwgIT0gb3B0Lm1heEFnZSkge1xuICAgIHZhciBtYXhBZ2UgPSBvcHQubWF4QWdlIC0gMDtcbiAgICBpZiAoaXNOYU4obWF4QWdlKSkgdGhyb3cgbmV3IEVycm9yKCdtYXhBZ2Ugc2hvdWxkIGJlIGEgTnVtYmVyJyk7XG4gICAgc3RyICs9ICc7IE1heC1BZ2U9JyArIE1hdGguZmxvb3IobWF4QWdlKTtcbiAgfVxuXG4gIGlmIChvcHQuZG9tYWluKSB7XG4gICAgaWYgKCFmaWVsZENvbnRlbnRSZWdFeHAudGVzdChvcHQuZG9tYWluKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIGRvbWFpbiBpcyBpbnZhbGlkJyk7XG4gICAgfVxuXG4gICAgc3RyICs9ICc7IERvbWFpbj0nICsgb3B0LmRvbWFpbjtcbiAgfVxuXG4gIGlmIChvcHQucGF0aCkge1xuICAgIGlmICghZmllbGRDb250ZW50UmVnRXhwLnRlc3Qob3B0LnBhdGgpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gcGF0aCBpcyBpbnZhbGlkJyk7XG4gICAgfVxuXG4gICAgc3RyICs9ICc7IFBhdGg9JyArIG9wdC5wYXRoO1xuICB9XG5cbiAgaWYgKG9wdC5leHBpcmVzKSB7XG4gICAgaWYgKHR5cGVvZiBvcHQuZXhwaXJlcy50b1VUQ1N0cmluZyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIGV4cGlyZXMgaXMgaW52YWxpZCcpO1xuICAgIH1cblxuICAgIHN0ciArPSAnOyBFeHBpcmVzPScgKyBvcHQuZXhwaXJlcy50b1VUQ1N0cmluZygpO1xuICB9XG5cbiAgaWYgKG9wdC5odHRwT25seSkge1xuICAgIHN0ciArPSAnOyBIdHRwT25seSc7XG4gIH1cblxuICBpZiAob3B0LnNlY3VyZSkge1xuICAgIHN0ciArPSAnOyBTZWN1cmUnO1xuICB9XG5cbiAgaWYgKG9wdC5zYW1lU2l0ZSkge1xuICAgIHZhciBzYW1lU2l0ZSA9IHR5cGVvZiBvcHQuc2FtZVNpdGUgPT09ICdzdHJpbmcnXG4gICAgICA/IG9wdC5zYW1lU2l0ZS50b0xvd2VyQ2FzZSgpIDogb3B0LnNhbWVTaXRlO1xuXG4gICAgc3dpdGNoIChzYW1lU2l0ZSkge1xuICAgICAgY2FzZSB0cnVlOlxuICAgICAgICBzdHIgKz0gJzsgU2FtZVNpdGU9U3RyaWN0JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdsYXgnOlxuICAgICAgICBzdHIgKz0gJzsgU2FtZVNpdGU9TGF4JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdHJpY3QnOlxuICAgICAgICBzdHIgKz0gJzsgU2FtZVNpdGU9U3RyaWN0JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdub25lJzpcbiAgICAgICAgc3RyICs9ICc7IFNhbWVTaXRlPU5vbmUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBzYW1lU2l0ZSBpcyBpbnZhbGlkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0cjtcbn1cblxuLyoqXG4gKiBUcnkgZGVjb2RpbmcgYSBzdHJpbmcgdXNpbmcgYSBkZWNvZGluZyBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBkZWNvZGVcbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gdHJ5RGVjb2RlKHN0ciwgZGVjb2RlKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZShzdHIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG52YXIgY29va2llID0ge1xuXHRwYXJzZTogcGFyc2VfMSxcblx0c2VyaWFsaXplOiBzZXJpYWxpemVfMVxufTtcblxudmFyIGNoYXJzID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpfJCc7XG52YXIgdW5zYWZlQ2hhcnMgPSAvWzw+XFxiXFxmXFxuXFxyXFx0XFwwXFx1MjAyOFxcdTIwMjldL2c7XG52YXIgcmVzZXJ2ZWQgPSAvXig/OmRvfGlmfGlufGZvcnxpbnR8bGV0fG5ld3x0cnl8dmFyfGJ5dGV8Y2FzZXxjaGFyfGVsc2V8ZW51bXxnb3RvfGxvbmd8dGhpc3x2b2lkfHdpdGh8YXdhaXR8YnJlYWt8Y2F0Y2h8Y2xhc3N8Y29uc3R8ZmluYWx8ZmxvYXR8c2hvcnR8c3VwZXJ8dGhyb3d8d2hpbGV8eWllbGR8ZGVsZXRlfGRvdWJsZXxleHBvcnR8aW1wb3J0fG5hdGl2ZXxyZXR1cm58c3dpdGNofHRocm93c3x0eXBlb2Z8Ym9vbGVhbnxkZWZhdWx0fGV4dGVuZHN8ZmluYWxseXxwYWNrYWdlfHByaXZhdGV8YWJzdHJhY3R8Y29udGludWV8ZGVidWdnZXJ8ZnVuY3Rpb258dm9sYXRpbGV8aW50ZXJmYWNlfHByb3RlY3RlZHx0cmFuc2llbnR8aW1wbGVtZW50c3xpbnN0YW5jZW9mfHN5bmNocm9uaXplZCkkLztcbnZhciBlc2NhcGVkID0ge1xuICAgICc8JzogJ1xcXFx1MDAzQycsXG4gICAgJz4nOiAnXFxcXHUwMDNFJyxcbiAgICAnLyc6ICdcXFxcdTAwMkYnLFxuICAgICdcXFxcJzogJ1xcXFxcXFxcJyxcbiAgICAnXFxiJzogJ1xcXFxiJyxcbiAgICAnXFxmJzogJ1xcXFxmJyxcbiAgICAnXFxuJzogJ1xcXFxuJyxcbiAgICAnXFxyJzogJ1xcXFxyJyxcbiAgICAnXFx0JzogJ1xcXFx0JyxcbiAgICAnXFwwJzogJ1xcXFwwJyxcbiAgICAnXFx1MjAyOCc6ICdcXFxcdTIwMjgnLFxuICAgICdcXHUyMDI5JzogJ1xcXFx1MjAyOSdcbn07XG52YXIgb2JqZWN0UHJvdG9Pd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoT2JqZWN0LnByb3RvdHlwZSkuc29ydCgpLmpvaW4oJ1xcMCcpO1xuZnVuY3Rpb24gZGV2YWx1ZSh2YWx1ZSkge1xuICAgIHZhciBjb3VudHMgPSBuZXcgTWFwKCk7XG4gICAgZnVuY3Rpb24gd2Fsayh0aGluZykge1xuICAgICAgICBpZiAodHlwZW9mIHRoaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3Qgc3RyaW5naWZ5IGEgZnVuY3Rpb25cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvdW50cy5oYXModGhpbmcpKSB7XG4gICAgICAgICAgICBjb3VudHMuc2V0KHRoaW5nLCBjb3VudHMuZ2V0KHRoaW5nKSArIDEpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50cy5zZXQodGhpbmcsIDEpO1xuICAgICAgICBpZiAoIWlzUHJpbWl0aXZlKHRoaW5nKSkge1xuICAgICAgICAgICAgdmFyIHR5cGUgPSBnZXRUeXBlKHRoaW5nKTtcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ051bWJlcic6XG4gICAgICAgICAgICAgICAgY2FzZSAnU3RyaW5nJzpcbiAgICAgICAgICAgICAgICBjYXNlICdCb29sZWFuJzpcbiAgICAgICAgICAgICAgICBjYXNlICdEYXRlJzpcbiAgICAgICAgICAgICAgICBjYXNlICdSZWdFeHAnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgY2FzZSAnQXJyYXknOlxuICAgICAgICAgICAgICAgICAgICB0aGluZy5mb3JFYWNoKHdhbGspO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdTZXQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ01hcCc6XG4gICAgICAgICAgICAgICAgICAgIEFycmF5LmZyb20odGhpbmcpLmZvckVhY2god2Fsayk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGluZyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm90byAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdG8gIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHByb3RvKS5zb3J0KCkuam9pbignXFwwJykgIT09IG9iamVjdFByb3RvT3duUHJvcGVydHlOYW1lcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHN0cmluZ2lmeSBhcmJpdHJhcnkgbm9uLVBPSk9zXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRoaW5nKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3Qgc3RyaW5naWZ5IFBPSk9zIHdpdGggc3ltYm9saWMga2V5c1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh0aGluZykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiB3YWxrKHRoaW5nW2tleV0pOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB3YWxrKHZhbHVlKTtcbiAgICB2YXIgbmFtZXMgPSBuZXcgTWFwKCk7XG4gICAgQXJyYXkuZnJvbShjb3VudHMpXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGVudHJ5KSB7IHJldHVybiBlbnRyeVsxXSA+IDE7IH0pXG4gICAgICAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBiWzFdIC0gYVsxXTsgfSlcbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKGVudHJ5LCBpKSB7XG4gICAgICAgIG5hbWVzLnNldChlbnRyeVswXSwgZ2V0TmFtZShpKSk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gc3RyaW5naWZ5KHRoaW5nKSB7XG4gICAgICAgIGlmIChuYW1lcy5oYXModGhpbmcpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmFtZXMuZ2V0KHRoaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNQcmltaXRpdmUodGhpbmcpKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5naWZ5UHJpbWl0aXZlKHRoaW5nKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdHlwZSA9IGdldFR5cGUodGhpbmcpO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ051bWJlcic6XG4gICAgICAgICAgICBjYXNlICdTdHJpbmcnOlxuICAgICAgICAgICAgY2FzZSAnQm9vbGVhbic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT2JqZWN0KFwiICsgc3RyaW5naWZ5KHRoaW5nLnZhbHVlT2YoKSkgKyBcIilcIjtcbiAgICAgICAgICAgIGNhc2UgJ1JlZ0V4cCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaW5nLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBjYXNlICdEYXRlJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJuZXcgRGF0ZShcIiArIHRoaW5nLmdldFRpbWUoKSArIFwiKVwiO1xuICAgICAgICAgICAgY2FzZSAnQXJyYXknOlxuICAgICAgICAgICAgICAgIHZhciBtZW1iZXJzID0gdGhpbmcubWFwKGZ1bmN0aW9uICh2LCBpKSB7IHJldHVybiBpIGluIHRoaW5nID8gc3RyaW5naWZ5KHYpIDogJyc7IH0pO1xuICAgICAgICAgICAgICAgIHZhciB0YWlsID0gdGhpbmcubGVuZ3RoID09PSAwIHx8ICh0aGluZy5sZW5ndGggLSAxIGluIHRoaW5nKSA/ICcnIDogJywnO1xuICAgICAgICAgICAgICAgIHJldHVybiBcIltcIiArIG1lbWJlcnMuam9pbignLCcpICsgdGFpbCArIFwiXVwiO1xuICAgICAgICAgICAgY2FzZSAnU2V0JzpcbiAgICAgICAgICAgIGNhc2UgJ01hcCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibmV3IFwiICsgdHlwZSArIFwiKFtcIiArIEFycmF5LmZyb20odGhpbmcpLm1hcChzdHJpbmdpZnkpLmpvaW4oJywnKSArIFwiXSlcIjtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdmFyIG9iaiA9IFwie1wiICsgT2JqZWN0LmtleXModGhpbmcpLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBzYWZlS2V5KGtleSkgKyBcIjpcIiArIHN0cmluZ2lmeSh0aGluZ1trZXldKTsgfSkuam9pbignLCcpICsgXCJ9XCI7XG4gICAgICAgICAgICAgICAgdmFyIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaW5nKTtcbiAgICAgICAgICAgICAgICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaW5nKS5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKG51bGwpLFwiICsgb2JqICsgXCIpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJPYmplY3QuY3JlYXRlKG51bGwpXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIHN0ciA9IHN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgaWYgKG5hbWVzLnNpemUpIHtcbiAgICAgICAgdmFyIHBhcmFtc18xID0gW107XG4gICAgICAgIHZhciBzdGF0ZW1lbnRzXzEgPSBbXTtcbiAgICAgICAgdmFyIHZhbHVlc18xID0gW107XG4gICAgICAgIG5hbWVzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUsIHRoaW5nKSB7XG4gICAgICAgICAgICBwYXJhbXNfMS5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgaWYgKGlzUHJpbWl0aXZlKHRoaW5nKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlc18xLnB1c2goc3RyaW5naWZ5UHJpbWl0aXZlKHRoaW5nKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHR5cGUgPSBnZXRUeXBlKHRoaW5nKTtcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ051bWJlcic6XG4gICAgICAgICAgICAgICAgY2FzZSAnU3RyaW5nJzpcbiAgICAgICAgICAgICAgICBjYXNlICdCb29sZWFuJzpcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzXzEucHVzaChcIk9iamVjdChcIiArIHN0cmluZ2lmeSh0aGluZy52YWx1ZU9mKCkpICsgXCIpXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdSZWdFeHAnOlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNfMS5wdXNoKHRoaW5nLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdEYXRlJzpcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzXzEucHVzaChcIm5ldyBEYXRlKFwiICsgdGhpbmcuZ2V0VGltZSgpICsgXCIpXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdBcnJheSc6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc18xLnB1c2goXCJBcnJheShcIiArIHRoaW5nLmxlbmd0aCArIFwiKVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpbmcuZm9yRWFjaChmdW5jdGlvbiAodiwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVtZW50c18xLnB1c2gobmFtZSArIFwiW1wiICsgaSArIFwiXT1cIiArIHN0cmluZ2lmeSh2KSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdTZXQnOlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNfMS5wdXNoKFwibmV3IFNldFwiKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVtZW50c18xLnB1c2gobmFtZSArIFwiLlwiICsgQXJyYXkuZnJvbSh0aGluZykubWFwKGZ1bmN0aW9uICh2KSB7IHJldHVybiBcImFkZChcIiArIHN0cmluZ2lmeSh2KSArIFwiKVwiOyB9KS5qb2luKCcuJykpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdNYXAnOlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNfMS5wdXNoKFwibmV3IE1hcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVtZW50c18xLnB1c2gobmFtZSArIFwiLlwiICsgQXJyYXkuZnJvbSh0aGluZykubWFwKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGsgPSBfYVswXSwgdiA9IF9hWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwic2V0KFwiICsgc3RyaW5naWZ5KGspICsgXCIsIFwiICsgc3RyaW5naWZ5KHYpICsgXCIpXCI7XG4gICAgICAgICAgICAgICAgICAgIH0pLmpvaW4oJy4nKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc18xLnB1c2goT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaW5nKSA9PT0gbnVsbCA/ICdPYmplY3QuY3JlYXRlKG51bGwpJyA6ICd7fScpO1xuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh0aGluZykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZW1lbnRzXzEucHVzaChcIlwiICsgbmFtZSArIHNhZmVQcm9wKGtleSkgKyBcIj1cIiArIHN0cmluZ2lmeSh0aGluZ1trZXldKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc3RhdGVtZW50c18xLnB1c2goXCJyZXR1cm4gXCIgKyBzdHIpO1xuICAgICAgICByZXR1cm4gXCIoZnVuY3Rpb24oXCIgKyBwYXJhbXNfMS5qb2luKCcsJykgKyBcIil7XCIgKyBzdGF0ZW1lbnRzXzEuam9pbignOycpICsgXCJ9KFwiICsgdmFsdWVzXzEuam9pbignLCcpICsgXCIpKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXROYW1lKG51bSkge1xuICAgIHZhciBuYW1lID0gJyc7XG4gICAgZG8ge1xuICAgICAgICBuYW1lID0gY2hhcnNbbnVtICUgY2hhcnMubGVuZ3RoXSArIG5hbWU7XG4gICAgICAgIG51bSA9IH5+KG51bSAvIGNoYXJzLmxlbmd0aCkgLSAxO1xuICAgIH0gd2hpbGUgKG51bSA+PSAwKTtcbiAgICByZXR1cm4gcmVzZXJ2ZWQudGVzdChuYW1lKSA/IG5hbWUgKyBcIl9cIiA6IG5hbWU7XG59XG5mdW5jdGlvbiBpc1ByaW1pdGl2ZSh0aGluZykge1xuICAgIHJldHVybiBPYmplY3QodGhpbmcpICE9PSB0aGluZztcbn1cbmZ1bmN0aW9uIHN0cmluZ2lmeVByaW1pdGl2ZSh0aGluZykge1xuICAgIGlmICh0eXBlb2YgdGhpbmcgPT09ICdzdHJpbmcnKVxuICAgICAgICByZXR1cm4gc3RyaW5naWZ5U3RyaW5nKHRoaW5nKTtcbiAgICBpZiAodGhpbmcgPT09IHZvaWQgMClcbiAgICAgICAgcmV0dXJuICd2b2lkIDAnO1xuICAgIGlmICh0aGluZyA9PT0gMCAmJiAxIC8gdGhpbmcgPCAwKVxuICAgICAgICByZXR1cm4gJy0wJztcbiAgICB2YXIgc3RyID0gU3RyaW5nKHRoaW5nKTtcbiAgICBpZiAodHlwZW9mIHRoaW5nID09PSAnbnVtYmVyJylcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eKC0pPzBcXC4vLCAnJDEuJyk7XG4gICAgcmV0dXJuIHN0cjtcbn1cbmZ1bmN0aW9uIGdldFR5cGUodGhpbmcpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHRoaW5nKS5zbGljZSg4LCAtMSk7XG59XG5mdW5jdGlvbiBlc2NhcGVVbnNhZmVDaGFyKGMpIHtcbiAgICByZXR1cm4gZXNjYXBlZFtjXSB8fCBjO1xufVxuZnVuY3Rpb24gZXNjYXBlVW5zYWZlQ2hhcnMoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKHVuc2FmZUNoYXJzLCBlc2NhcGVVbnNhZmVDaGFyKTtcbn1cbmZ1bmN0aW9uIHNhZmVLZXkoa2V5KSB7XG4gICAgcmV0dXJuIC9eW18kYS16QS1aXVtfJGEtekEtWjAtOV0qJC8udGVzdChrZXkpID8ga2V5IDogZXNjYXBlVW5zYWZlQ2hhcnMoSlNPTi5zdHJpbmdpZnkoa2V5KSk7XG59XG5mdW5jdGlvbiBzYWZlUHJvcChrZXkpIHtcbiAgICByZXR1cm4gL15bXyRhLXpBLVpdW18kYS16QS1aMC05XSokLy50ZXN0KGtleSkgPyBcIi5cIiArIGtleSA6IFwiW1wiICsgZXNjYXBlVW5zYWZlQ2hhcnMoSlNPTi5zdHJpbmdpZnkoa2V5KSkgKyBcIl1cIjtcbn1cbmZ1bmN0aW9uIHN0cmluZ2lmeVN0cmluZyhzdHIpIHtcbiAgICB2YXIgcmVzdWx0ID0gJ1wiJztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgY2hhciA9IHN0ci5jaGFyQXQoaSk7XG4gICAgICAgIHZhciBjb2RlID0gY2hhci5jaGFyQ29kZUF0KDApO1xuICAgICAgICBpZiAoY2hhciA9PT0gJ1wiJykge1xuICAgICAgICAgICAgcmVzdWx0ICs9ICdcXFxcXCInO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoYXIgaW4gZXNjYXBlZCkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IGVzY2FwZWRbY2hhcl07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29kZSA+PSAweGQ4MDAgJiYgY29kZSA8PSAweGRmZmYpIHtcbiAgICAgICAgICAgIHZhciBuZXh0ID0gc3RyLmNoYXJDb2RlQXQoaSArIDEpO1xuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyB0aGUgYmVnaW5uaW5nIG9mIGEgW2hpZ2gsIGxvd10gc3Vycm9nYXRlIHBhaXIsXG4gICAgICAgICAgICAvLyBhZGQgdGhlIG5leHQgdHdvIGNoYXJhY3RlcnMsIG90aGVyd2lzZSBlc2NhcGVcbiAgICAgICAgICAgIGlmIChjb2RlIDw9IDB4ZGJmZiAmJiAobmV4dCA+PSAweGRjMDAgJiYgbmV4dCA8PSAweGRmZmYpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IGNoYXIgKyBzdHJbKytpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBcIlxcXFx1XCIgKyBjb2RlLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ICs9IGNoYXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0ICs9ICdcIic7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3RtcHZhci9qc2RvbS9ibG9iL2FhODViMmFiZjA3NzY2ZmY3YmY1YzFmNmRhYWZiMzcyNmYyZjJkYjUvbGliL2pzZG9tL2xpdmluZy9ibG9iLmpzXG5cbi8vIGZpeCBmb3IgXCJSZWFkYWJsZVwiIGlzbid0IGEgbmFtZWQgZXhwb3J0IGlzc3VlXG5jb25zdCBSZWFkYWJsZSA9IFN0cmVhbS5SZWFkYWJsZTtcblxuY29uc3QgQlVGRkVSID0gU3ltYm9sKCdidWZmZXInKTtcbmNvbnN0IFRZUEUgPSBTeW1ib2woJ3R5cGUnKTtcblxuY2xhc3MgQmxvYiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXNbVFlQRV0gPSAnJztcblxuXHRcdGNvbnN0IGJsb2JQYXJ0cyA9IGFyZ3VtZW50c1swXTtcblx0XHRjb25zdCBvcHRpb25zID0gYXJndW1lbnRzWzFdO1xuXG5cdFx0Y29uc3QgYnVmZmVycyA9IFtdO1xuXHRcdGxldCBzaXplID0gMDtcblxuXHRcdGlmIChibG9iUGFydHMpIHtcblx0XHRcdGNvbnN0IGEgPSBibG9iUGFydHM7XG5cdFx0XHRjb25zdCBsZW5ndGggPSBOdW1iZXIoYS5sZW5ndGgpO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBlbGVtZW50ID0gYVtpXTtcblx0XHRcdFx0bGV0IGJ1ZmZlcjtcblx0XHRcdFx0aWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBCdWZmZXIpIHtcblx0XHRcdFx0XHRidWZmZXIgPSBlbGVtZW50O1xuXHRcdFx0XHR9IGVsc2UgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhlbGVtZW50KSkge1xuXHRcdFx0XHRcdGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGVsZW1lbnQuYnVmZmVyLCBlbGVtZW50LmJ5dGVPZmZzZXQsIGVsZW1lbnQuYnl0ZUxlbmd0aCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG5cdFx0XHRcdFx0YnVmZmVyID0gQnVmZmVyLmZyb20oZWxlbWVudCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEJsb2IpIHtcblx0XHRcdFx0XHRidWZmZXIgPSBlbGVtZW50W0JVRkZFUl07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YnVmZmVyID0gQnVmZmVyLmZyb20odHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnID8gZWxlbWVudCA6IFN0cmluZyhlbGVtZW50KSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0c2l6ZSArPSBidWZmZXIubGVuZ3RoO1xuXHRcdFx0XHRidWZmZXJzLnB1c2goYnVmZmVyKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzW0JVRkZFUl0gPSBCdWZmZXIuY29uY2F0KGJ1ZmZlcnMpO1xuXG5cdFx0bGV0IHR5cGUgPSBvcHRpb25zICYmIG9wdGlvbnMudHlwZSAhPT0gdW5kZWZpbmVkICYmIFN0cmluZyhvcHRpb25zLnR5cGUpLnRvTG93ZXJDYXNlKCk7XG5cdFx0aWYgKHR5cGUgJiYgIS9bXlxcdTAwMjAtXFx1MDA3RV0vLnRlc3QodHlwZSkpIHtcblx0XHRcdHRoaXNbVFlQRV0gPSB0eXBlO1xuXHRcdH1cblx0fVxuXHRnZXQgc2l6ZSgpIHtcblx0XHRyZXR1cm4gdGhpc1tCVUZGRVJdLmxlbmd0aDtcblx0fVxuXHRnZXQgdHlwZSgpIHtcblx0XHRyZXR1cm4gdGhpc1tUWVBFXTtcblx0fVxuXHR0ZXh0KCkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpc1tCVUZGRVJdLnRvU3RyaW5nKCkpO1xuXHR9XG5cdGFycmF5QnVmZmVyKCkge1xuXHRcdGNvbnN0IGJ1ZiA9IHRoaXNbQlVGRkVSXTtcblx0XHRjb25zdCBhYiA9IGJ1Zi5idWZmZXIuc2xpY2UoYnVmLmJ5dGVPZmZzZXQsIGJ1Zi5ieXRlT2Zmc2V0ICsgYnVmLmJ5dGVMZW5ndGgpO1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoYWIpO1xuXHR9XG5cdHN0cmVhbSgpIHtcblx0XHRjb25zdCByZWFkYWJsZSA9IG5ldyBSZWFkYWJsZSgpO1xuXHRcdHJlYWRhYmxlLl9yZWFkID0gZnVuY3Rpb24gKCkge307XG5cdFx0cmVhZGFibGUucHVzaCh0aGlzW0JVRkZFUl0pO1xuXHRcdHJlYWRhYmxlLnB1c2gobnVsbCk7XG5cdFx0cmV0dXJuIHJlYWRhYmxlO1xuXHR9XG5cdHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiAnW29iamVjdCBCbG9iXSc7XG5cdH1cblx0c2xpY2UoKSB7XG5cdFx0Y29uc3Qgc2l6ZSA9IHRoaXMuc2l6ZTtcblxuXHRcdGNvbnN0IHN0YXJ0ID0gYXJndW1lbnRzWzBdO1xuXHRcdGNvbnN0IGVuZCA9IGFyZ3VtZW50c1sxXTtcblx0XHRsZXQgcmVsYXRpdmVTdGFydCwgcmVsYXRpdmVFbmQ7XG5cdFx0aWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJlbGF0aXZlU3RhcnQgPSAwO1xuXHRcdH0gZWxzZSBpZiAoc3RhcnQgPCAwKSB7XG5cdFx0XHRyZWxhdGl2ZVN0YXJ0ID0gTWF0aC5tYXgoc2l6ZSArIHN0YXJ0LCAwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVsYXRpdmVTdGFydCA9IE1hdGgubWluKHN0YXJ0LCBzaXplKTtcblx0XHR9XG5cdFx0aWYgKGVuZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZWxhdGl2ZUVuZCA9IHNpemU7XG5cdFx0fSBlbHNlIGlmIChlbmQgPCAwKSB7XG5cdFx0XHRyZWxhdGl2ZUVuZCA9IE1hdGgubWF4KHNpemUgKyBlbmQsIDApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZWxhdGl2ZUVuZCA9IE1hdGgubWluKGVuZCwgc2l6ZSk7XG5cdFx0fVxuXHRcdGNvbnN0IHNwYW4gPSBNYXRoLm1heChyZWxhdGl2ZUVuZCAtIHJlbGF0aXZlU3RhcnQsIDApO1xuXG5cdFx0Y29uc3QgYnVmZmVyID0gdGhpc1tCVUZGRVJdO1xuXHRcdGNvbnN0IHNsaWNlZEJ1ZmZlciA9IGJ1ZmZlci5zbGljZShyZWxhdGl2ZVN0YXJ0LCByZWxhdGl2ZVN0YXJ0ICsgc3Bhbik7XG5cdFx0Y29uc3QgYmxvYiA9IG5ldyBCbG9iKFtdLCB7IHR5cGU6IGFyZ3VtZW50c1syXSB9KTtcblx0XHRibG9iW0JVRkZFUl0gPSBzbGljZWRCdWZmZXI7XG5cdFx0cmV0dXJuIGJsb2I7XG5cdH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQmxvYi5wcm90b3R5cGUsIHtcblx0c2l6ZTogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdHR5cGU6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRzbGljZTogeyBlbnVtZXJhYmxlOiB0cnVlIH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQmxvYi5wcm90b3R5cGUsIFN5bWJvbC50b1N0cmluZ1RhZywge1xuXHR2YWx1ZTogJ0Jsb2InLFxuXHR3cml0YWJsZTogZmFsc2UsXG5cdGVudW1lcmFibGU6IGZhbHNlLFxuXHRjb25maWd1cmFibGU6IHRydWVcbn0pO1xuXG4vKipcbiAqIGZldGNoLWVycm9yLmpzXG4gKlxuICogRmV0Y2hFcnJvciBpbnRlcmZhY2UgZm9yIG9wZXJhdGlvbmFsIGVycm9yc1xuICovXG5cbi8qKlxuICogQ3JlYXRlIEZldGNoRXJyb3IgaW5zdGFuY2VcbiAqXG4gKiBAcGFyYW0gICBTdHJpbmcgICAgICBtZXNzYWdlICAgICAgRXJyb3IgbWVzc2FnZSBmb3IgaHVtYW5cbiAqIEBwYXJhbSAgIFN0cmluZyAgICAgIHR5cGUgICAgICAgICBFcnJvciB0eXBlIGZvciBtYWNoaW5lXG4gKiBAcGFyYW0gICBTdHJpbmcgICAgICBzeXN0ZW1FcnJvciAgRm9yIE5vZGUuanMgc3lzdGVtIGVycm9yXG4gKiBAcmV0dXJuICBGZXRjaEVycm9yXG4gKi9cbmZ1bmN0aW9uIEZldGNoRXJyb3IobWVzc2FnZSwgdHlwZSwgc3lzdGVtRXJyb3IpIHtcbiAgRXJyb3IuY2FsbCh0aGlzLCBtZXNzYWdlKTtcblxuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICB0aGlzLnR5cGUgPSB0eXBlO1xuXG4gIC8vIHdoZW4gZXJyLnR5cGUgaXMgYHN5c3RlbWAsIGVyci5jb2RlIGNvbnRhaW5zIHN5c3RlbSBlcnJvciBjb2RlXG4gIGlmIChzeXN0ZW1FcnJvcikge1xuICAgIHRoaXMuY29kZSA9IHRoaXMuZXJybm8gPSBzeXN0ZW1FcnJvci5jb2RlO1xuICB9XG5cbiAgLy8gaGlkZSBjdXN0b20gZXJyb3IgaW1wbGVtZW50YXRpb24gZGV0YWlscyBmcm9tIGVuZC11c2Vyc1xuICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcbn1cblxuRmV0Y2hFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG5GZXRjaEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEZldGNoRXJyb3I7XG5GZXRjaEVycm9yLnByb3RvdHlwZS5uYW1lID0gJ0ZldGNoRXJyb3InO1xuXG5sZXQgY29udmVydDtcbnRyeSB7XG5cdGNvbnZlcnQgPSByZXF1aXJlKCdlbmNvZGluZycpLmNvbnZlcnQ7XG59IGNhdGNoIChlKSB7fVxuXG5jb25zdCBJTlRFUk5BTFMgPSBTeW1ib2woJ0JvZHkgaW50ZXJuYWxzJyk7XG5cbi8vIGZpeCBhbiBpc3N1ZSB3aGVyZSBcIlBhc3NUaHJvdWdoXCIgaXNuJ3QgYSBuYW1lZCBleHBvcnQgZm9yIG5vZGUgPDEwXG5jb25zdCBQYXNzVGhyb3VnaCA9IFN0cmVhbS5QYXNzVGhyb3VnaDtcblxuLyoqXG4gKiBCb2R5IG1peGluXG4gKlxuICogUmVmOiBodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jYm9keVxuICpcbiAqIEBwYXJhbSAgIFN0cmVhbSAgYm9keSAgUmVhZGFibGUgc3RyZWFtXG4gKiBAcGFyYW0gICBPYmplY3QgIG9wdHMgIFJlc3BvbnNlIG9wdGlvbnNcbiAqIEByZXR1cm4gIFZvaWRcbiAqL1xuZnVuY3Rpb24gQm9keShib2R5KSB7XG5cdHZhciBfdGhpcyA9IHRoaXM7XG5cblx0dmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9LFxuXHQgICAgX3JlZiRzaXplID0gX3JlZi5zaXplO1xuXG5cdGxldCBzaXplID0gX3JlZiRzaXplID09PSB1bmRlZmluZWQgPyAwIDogX3JlZiRzaXplO1xuXHR2YXIgX3JlZiR0aW1lb3V0ID0gX3JlZi50aW1lb3V0O1xuXHRsZXQgdGltZW91dCA9IF9yZWYkdGltZW91dCA9PT0gdW5kZWZpbmVkID8gMCA6IF9yZWYkdGltZW91dDtcblxuXHRpZiAoYm9keSA9PSBudWxsKSB7XG5cdFx0Ly8gYm9keSBpcyB1bmRlZmluZWQgb3IgbnVsbFxuXHRcdGJvZHkgPSBudWxsO1xuXHR9IGVsc2UgaWYgKGlzVVJMU2VhcmNoUGFyYW1zKGJvZHkpKSB7XG5cdFx0Ly8gYm9keSBpcyBhIFVSTFNlYXJjaFBhcmFtc1xuXHRcdGJvZHkgPSBCdWZmZXIuZnJvbShib2R5LnRvU3RyaW5nKCkpO1xuXHR9IGVsc2UgaWYgKGlzQmxvYihib2R5KSkgOyBlbHNlIGlmIChCdWZmZXIuaXNCdWZmZXIoYm9keSkpIDsgZWxzZSBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGJvZHkpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nKSB7XG5cdFx0Ly8gYm9keSBpcyBBcnJheUJ1ZmZlclxuXHRcdGJvZHkgPSBCdWZmZXIuZnJvbShib2R5KTtcblx0fSBlbHNlIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoYm9keSkpIHtcblx0XHQvLyBib2R5IGlzIEFycmF5QnVmZmVyVmlld1xuXHRcdGJvZHkgPSBCdWZmZXIuZnJvbShib2R5LmJ1ZmZlciwgYm9keS5ieXRlT2Zmc2V0LCBib2R5LmJ5dGVMZW5ndGgpO1xuXHR9IGVsc2UgaWYgKGJvZHkgaW5zdGFuY2VvZiBTdHJlYW0pIDsgZWxzZSB7XG5cdFx0Ly8gbm9uZSBvZiB0aGUgYWJvdmVcblx0XHQvLyBjb2VyY2UgdG8gc3RyaW5nIHRoZW4gYnVmZmVyXG5cdFx0Ym9keSA9IEJ1ZmZlci5mcm9tKFN0cmluZyhib2R5KSk7XG5cdH1cblx0dGhpc1tJTlRFUk5BTFNdID0ge1xuXHRcdGJvZHksXG5cdFx0ZGlzdHVyYmVkOiBmYWxzZSxcblx0XHRlcnJvcjogbnVsbFxuXHR9O1xuXHR0aGlzLnNpemUgPSBzaXplO1xuXHR0aGlzLnRpbWVvdXQgPSB0aW1lb3V0O1xuXG5cdGlmIChib2R5IGluc3RhbmNlb2YgU3RyZWFtKSB7XG5cdFx0Ym9keS5vbignZXJyb3InLCBmdW5jdGlvbiAoZXJyKSB7XG5cdFx0XHRjb25zdCBlcnJvciA9IGVyci5uYW1lID09PSAnQWJvcnRFcnJvcicgPyBlcnIgOiBuZXcgRmV0Y2hFcnJvcihgSW52YWxpZCByZXNwb25zZSBib2R5IHdoaWxlIHRyeWluZyB0byBmZXRjaCAke190aGlzLnVybH06ICR7ZXJyLm1lc3NhZ2V9YCwgJ3N5c3RlbScsIGVycik7XG5cdFx0XHRfdGhpc1tJTlRFUk5BTFNdLmVycm9yID0gZXJyb3I7XG5cdFx0fSk7XG5cdH1cbn1cblxuQm9keS5wcm90b3R5cGUgPSB7XG5cdGdldCBib2R5KCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMU10uYm9keTtcblx0fSxcblxuXHRnZXQgYm9keVVzZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTXS5kaXN0dXJiZWQ7XG5cdH0sXG5cblx0LyoqXG4gICogRGVjb2RlIHJlc3BvbnNlIGFzIEFycmF5QnVmZmVyXG4gICpcbiAgKiBAcmV0dXJuICBQcm9taXNlXG4gICovXG5cdGFycmF5QnVmZmVyKCkge1xuXHRcdHJldHVybiBjb25zdW1lQm9keS5jYWxsKHRoaXMpLnRoZW4oZnVuY3Rpb24gKGJ1Zikge1xuXHRcdFx0cmV0dXJuIGJ1Zi5idWZmZXIuc2xpY2UoYnVmLmJ5dGVPZmZzZXQsIGJ1Zi5ieXRlT2Zmc2V0ICsgYnVmLmJ5dGVMZW5ndGgpO1xuXHRcdH0pO1xuXHR9LFxuXG5cdC8qKlxuICAqIFJldHVybiByYXcgcmVzcG9uc2UgYXMgQmxvYlxuICAqXG4gICogQHJldHVybiBQcm9taXNlXG4gICovXG5cdGJsb2IoKSB7XG5cdFx0bGV0IGN0ID0gdGhpcy5oZWFkZXJzICYmIHRoaXMuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpIHx8ICcnO1xuXHRcdHJldHVybiBjb25zdW1lQm9keS5jYWxsKHRoaXMpLnRoZW4oZnVuY3Rpb24gKGJ1Zikge1xuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oXG5cdFx0XHQvLyBQcmV2ZW50IGNvcHlpbmdcblx0XHRcdG5ldyBCbG9iKFtdLCB7XG5cdFx0XHRcdHR5cGU6IGN0LnRvTG93ZXJDYXNlKClcblx0XHRcdH0pLCB7XG5cdFx0XHRcdFtCVUZGRVJdOiBidWZcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9LFxuXG5cdC8qKlxuICAqIERlY29kZSByZXNwb25zZSBhcyBqc29uXG4gICpcbiAgKiBAcmV0dXJuICBQcm9taXNlXG4gICovXG5cdGpzb24oKSB7XG5cdFx0dmFyIF90aGlzMiA9IHRoaXM7XG5cblx0XHRyZXR1cm4gY29uc3VtZUJvZHkuY2FsbCh0aGlzKS50aGVuKGZ1bmN0aW9uIChidWZmZXIpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJldHVybiBKU09OLnBhcnNlKGJ1ZmZlci50b1N0cmluZygpKTtcblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRyZXR1cm4gQm9keS5Qcm9taXNlLnJlamVjdChuZXcgRmV0Y2hFcnJvcihgaW52YWxpZCBqc29uIHJlc3BvbnNlIGJvZHkgYXQgJHtfdGhpczIudXJsfSByZWFzb246ICR7ZXJyLm1lc3NhZ2V9YCwgJ2ludmFsaWQtanNvbicpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSxcblxuXHQvKipcbiAgKiBEZWNvZGUgcmVzcG9uc2UgYXMgdGV4dFxuICAqXG4gICogQHJldHVybiAgUHJvbWlzZVxuICAqL1xuXHR0ZXh0KCkge1xuXHRcdHJldHVybiBjb25zdW1lQm9keS5jYWxsKHRoaXMpLnRoZW4oZnVuY3Rpb24gKGJ1ZmZlcikge1xuXHRcdFx0cmV0dXJuIGJ1ZmZlci50b1N0cmluZygpO1xuXHRcdH0pO1xuXHR9LFxuXG5cdC8qKlxuICAqIERlY29kZSByZXNwb25zZSBhcyBidWZmZXIgKG5vbi1zcGVjIGFwaSlcbiAgKlxuICAqIEByZXR1cm4gIFByb21pc2VcbiAgKi9cblx0YnVmZmVyKCkge1xuXHRcdHJldHVybiBjb25zdW1lQm9keS5jYWxsKHRoaXMpO1xuXHR9LFxuXG5cdC8qKlxuICAqIERlY29kZSByZXNwb25zZSBhcyB0ZXh0LCB3aGlsZSBhdXRvbWF0aWNhbGx5IGRldGVjdGluZyB0aGUgZW5jb2RpbmcgYW5kXG4gICogdHJ5aW5nIHRvIGRlY29kZSB0byBVVEYtOCAobm9uLXNwZWMgYXBpKVxuICAqXG4gICogQHJldHVybiAgUHJvbWlzZVxuICAqL1xuXHR0ZXh0Q29udmVydGVkKCkge1xuXHRcdHZhciBfdGhpczMgPSB0aGlzO1xuXG5cdFx0cmV0dXJuIGNvbnN1bWVCb2R5LmNhbGwodGhpcykudGhlbihmdW5jdGlvbiAoYnVmZmVyKSB7XG5cdFx0XHRyZXR1cm4gY29udmVydEJvZHkoYnVmZmVyLCBfdGhpczMuaGVhZGVycyk7XG5cdFx0fSk7XG5cdH1cbn07XG5cbi8vIEluIGJyb3dzZXJzLCBhbGwgcHJvcGVydGllcyBhcmUgZW51bWVyYWJsZS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEJvZHkucHJvdG90eXBlLCB7XG5cdGJvZHk6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRib2R5VXNlZDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdGFycmF5QnVmZmVyOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0YmxvYjogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdGpzb246IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHR0ZXh0OiB7IGVudW1lcmFibGU6IHRydWUgfVxufSk7XG5cbkJvZHkubWl4SW4gPSBmdW5jdGlvbiAocHJvdG8pIHtcblx0Zm9yIChjb25zdCBuYW1lIG9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKEJvZHkucHJvdG90eXBlKSkge1xuXHRcdC8vIGlzdGFuYnVsIGlnbm9yZSBlbHNlOiBmdXR1cmUgcHJvb2Zcblx0XHRpZiAoIShuYW1lIGluIHByb3RvKSkge1xuXHRcdFx0Y29uc3QgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoQm9keS5wcm90b3R5cGUsIG5hbWUpO1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCBuYW1lLCBkZXNjKTtcblx0XHR9XG5cdH1cbn07XG5cbi8qKlxuICogQ29uc3VtZSBhbmQgY29udmVydCBhbiBlbnRpcmUgQm9keSB0byBhIEJ1ZmZlci5cbiAqXG4gKiBSZWY6IGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LWJvZHktY29uc3VtZS1ib2R5XG4gKlxuICogQHJldHVybiAgUHJvbWlzZVxuICovXG5mdW5jdGlvbiBjb25zdW1lQm9keSgpIHtcblx0dmFyIF90aGlzNCA9IHRoaXM7XG5cblx0aWYgKHRoaXNbSU5URVJOQUxTXS5kaXN0dXJiZWQpIHtcblx0XHRyZXR1cm4gQm9keS5Qcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKGBib2R5IHVzZWQgYWxyZWFkeSBmb3I6ICR7dGhpcy51cmx9YCkpO1xuXHR9XG5cblx0dGhpc1tJTlRFUk5BTFNdLmRpc3R1cmJlZCA9IHRydWU7XG5cblx0aWYgKHRoaXNbSU5URVJOQUxTXS5lcnJvcikge1xuXHRcdHJldHVybiBCb2R5LlByb21pc2UucmVqZWN0KHRoaXNbSU5URVJOQUxTXS5lcnJvcik7XG5cdH1cblxuXHRsZXQgYm9keSA9IHRoaXMuYm9keTtcblxuXHQvLyBib2R5IGlzIG51bGxcblx0aWYgKGJvZHkgPT09IG51bGwpIHtcblx0XHRyZXR1cm4gQm9keS5Qcm9taXNlLnJlc29sdmUoQnVmZmVyLmFsbG9jKDApKTtcblx0fVxuXG5cdC8vIGJvZHkgaXMgYmxvYlxuXHRpZiAoaXNCbG9iKGJvZHkpKSB7XG5cdFx0Ym9keSA9IGJvZHkuc3RyZWFtKCk7XG5cdH1cblxuXHQvLyBib2R5IGlzIGJ1ZmZlclxuXHRpZiAoQnVmZmVyLmlzQnVmZmVyKGJvZHkpKSB7XG5cdFx0cmV0dXJuIEJvZHkuUHJvbWlzZS5yZXNvbHZlKGJvZHkpO1xuXHR9XG5cblx0Ly8gaXN0YW5idWwgaWdub3JlIGlmOiBzaG91bGQgbmV2ZXIgaGFwcGVuXG5cdGlmICghKGJvZHkgaW5zdGFuY2VvZiBTdHJlYW0pKSB7XG5cdFx0cmV0dXJuIEJvZHkuUHJvbWlzZS5yZXNvbHZlKEJ1ZmZlci5hbGxvYygwKSk7XG5cdH1cblxuXHQvLyBib2R5IGlzIHN0cmVhbVxuXHQvLyBnZXQgcmVhZHkgdG8gYWN0dWFsbHkgY29uc3VtZSB0aGUgYm9keVxuXHRsZXQgYWNjdW0gPSBbXTtcblx0bGV0IGFjY3VtQnl0ZXMgPSAwO1xuXHRsZXQgYWJvcnQgPSBmYWxzZTtcblxuXHRyZXR1cm4gbmV3IEJvZHkuUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0bGV0IHJlc1RpbWVvdXQ7XG5cblx0XHQvLyBhbGxvdyB0aW1lb3V0IG9uIHNsb3cgcmVzcG9uc2UgYm9keVxuXHRcdGlmIChfdGhpczQudGltZW91dCkge1xuXHRcdFx0cmVzVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRhYm9ydCA9IHRydWU7XG5cdFx0XHRcdHJlamVjdChuZXcgRmV0Y2hFcnJvcihgUmVzcG9uc2UgdGltZW91dCB3aGlsZSB0cnlpbmcgdG8gZmV0Y2ggJHtfdGhpczQudXJsfSAob3ZlciAke190aGlzNC50aW1lb3V0fW1zKWAsICdib2R5LXRpbWVvdXQnKSk7XG5cdFx0XHR9LCBfdGhpczQudGltZW91dCk7XG5cdFx0fVxuXG5cdFx0Ly8gaGFuZGxlIHN0cmVhbSBlcnJvcnNcblx0XHRib2R5Lm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnIpIHtcblx0XHRcdGlmIChlcnIubmFtZSA9PT0gJ0Fib3J0RXJyb3InKSB7XG5cdFx0XHRcdC8vIGlmIHRoZSByZXF1ZXN0IHdhcyBhYm9ydGVkLCByZWplY3Qgd2l0aCB0aGlzIEVycm9yXG5cdFx0XHRcdGFib3J0ID0gdHJ1ZTtcblx0XHRcdFx0cmVqZWN0KGVycik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBvdGhlciBlcnJvcnMsIHN1Y2ggYXMgaW5jb3JyZWN0IGNvbnRlbnQtZW5jb2Rpbmdcblx0XHRcdFx0cmVqZWN0KG5ldyBGZXRjaEVycm9yKGBJbnZhbGlkIHJlc3BvbnNlIGJvZHkgd2hpbGUgdHJ5aW5nIHRvIGZldGNoICR7X3RoaXM0LnVybH06ICR7ZXJyLm1lc3NhZ2V9YCwgJ3N5c3RlbScsIGVycikpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ym9keS5vbignZGF0YScsIGZ1bmN0aW9uIChjaHVuaykge1xuXHRcdFx0aWYgKGFib3J0IHx8IGNodW5rID09PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKF90aGlzNC5zaXplICYmIGFjY3VtQnl0ZXMgKyBjaHVuay5sZW5ndGggPiBfdGhpczQuc2l6ZSkge1xuXHRcdFx0XHRhYm9ydCA9IHRydWU7XG5cdFx0XHRcdHJlamVjdChuZXcgRmV0Y2hFcnJvcihgY29udGVudCBzaXplIGF0ICR7X3RoaXM0LnVybH0gb3ZlciBsaW1pdDogJHtfdGhpczQuc2l6ZX1gLCAnbWF4LXNpemUnKSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0YWNjdW1CeXRlcyArPSBjaHVuay5sZW5ndGg7XG5cdFx0XHRhY2N1bS5wdXNoKGNodW5rKTtcblx0XHR9KTtcblxuXHRcdGJvZHkub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmIChhYm9ydCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNsZWFyVGltZW91dChyZXNUaW1lb3V0KTtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmVzb2x2ZShCdWZmZXIuY29uY2F0KGFjY3VtLCBhY2N1bUJ5dGVzKSk7XG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0Ly8gaGFuZGxlIHN0cmVhbXMgdGhhdCBoYXZlIGFjY3VtdWxhdGVkIHRvbyBtdWNoIGRhdGEgKGlzc3VlICM0MTQpXG5cdFx0XHRcdHJlamVjdChuZXcgRmV0Y2hFcnJvcihgQ291bGQgbm90IGNyZWF0ZSBCdWZmZXIgZnJvbSByZXNwb25zZSBib2R5IGZvciAke190aGlzNC51cmx9OiAke2Vyci5tZXNzYWdlfWAsICdzeXN0ZW0nLCBlcnIpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59XG5cbi8qKlxuICogRGV0ZWN0IGJ1ZmZlciBlbmNvZGluZyBhbmQgY29udmVydCB0byB0YXJnZXQgZW5jb2RpbmdcbiAqIHJlZjogaHR0cDovL3d3dy53My5vcmcvVFIvMjAxMS9XRC1odG1sNS0yMDExMDExMy9wYXJzaW5nLmh0bWwjZGV0ZXJtaW5pbmctdGhlLWNoYXJhY3Rlci1lbmNvZGluZ1xuICpcbiAqIEBwYXJhbSAgIEJ1ZmZlciAgYnVmZmVyICAgIEluY29taW5nIGJ1ZmZlclxuICogQHBhcmFtICAgU3RyaW5nICBlbmNvZGluZyAgVGFyZ2V0IGVuY29kaW5nXG4gKiBAcmV0dXJuICBTdHJpbmdcbiAqL1xuZnVuY3Rpb24gY29udmVydEJvZHkoYnVmZmVyLCBoZWFkZXJzKSB7XG5cdGlmICh0eXBlb2YgY29udmVydCAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdHRocm93IG5ldyBFcnJvcignVGhlIHBhY2thZ2UgYGVuY29kaW5nYCBtdXN0IGJlIGluc3RhbGxlZCB0byB1c2UgdGhlIHRleHRDb252ZXJ0ZWQoKSBmdW5jdGlvbicpO1xuXHR9XG5cblx0Y29uc3QgY3QgPSBoZWFkZXJzLmdldCgnY29udGVudC10eXBlJyk7XG5cdGxldCBjaGFyc2V0ID0gJ3V0Zi04Jztcblx0bGV0IHJlcywgc3RyO1xuXG5cdC8vIGhlYWRlclxuXHRpZiAoY3QpIHtcblx0XHRyZXMgPSAvY2hhcnNldD0oW147XSopL2kuZXhlYyhjdCk7XG5cdH1cblxuXHQvLyBubyBjaGFyc2V0IGluIGNvbnRlbnQgdHlwZSwgcGVlayBhdCByZXNwb25zZSBib2R5IGZvciBhdCBtb3N0IDEwMjQgYnl0ZXNcblx0c3RyID0gYnVmZmVyLnNsaWNlKDAsIDEwMjQpLnRvU3RyaW5nKCk7XG5cblx0Ly8gaHRtbDVcblx0aWYgKCFyZXMgJiYgc3RyKSB7XG5cdFx0cmVzID0gLzxtZXRhLis/Y2hhcnNldD0oWydcIl0pKC4rPylcXDEvaS5leGVjKHN0cik7XG5cdH1cblxuXHQvLyBodG1sNFxuXHRpZiAoIXJlcyAmJiBzdHIpIHtcblx0XHRyZXMgPSAvPG1ldGFbXFxzXSs/aHR0cC1lcXVpdj0oWydcIl0pY29udGVudC10eXBlXFwxW1xcc10rP2NvbnRlbnQ9KFsnXCJdKSguKz8pXFwyL2kuZXhlYyhzdHIpO1xuXG5cdFx0aWYgKHJlcykge1xuXHRcdFx0cmVzID0gL2NoYXJzZXQ9KC4qKS9pLmV4ZWMocmVzLnBvcCgpKTtcblx0XHR9XG5cdH1cblxuXHQvLyB4bWxcblx0aWYgKCFyZXMgJiYgc3RyKSB7XG5cdFx0cmVzID0gLzxcXD94bWwuKz9lbmNvZGluZz0oWydcIl0pKC4rPylcXDEvaS5leGVjKHN0cik7XG5cdH1cblxuXHQvLyBmb3VuZCBjaGFyc2V0XG5cdGlmIChyZXMpIHtcblx0XHRjaGFyc2V0ID0gcmVzLnBvcCgpO1xuXG5cdFx0Ly8gcHJldmVudCBkZWNvZGUgaXNzdWVzIHdoZW4gc2l0ZXMgdXNlIGluY29ycmVjdCBlbmNvZGluZ1xuXHRcdC8vIHJlZjogaHR0cHM6Ly9oc2l2b25lbi5maS9lbmNvZGluZy1tZW51L1xuXHRcdGlmIChjaGFyc2V0ID09PSAnZ2IyMzEyJyB8fCBjaGFyc2V0ID09PSAnZ2JrJykge1xuXHRcdFx0Y2hhcnNldCA9ICdnYjE4MDMwJztcblx0XHR9XG5cdH1cblxuXHQvLyB0dXJuIHJhdyBidWZmZXJzIGludG8gYSBzaW5nbGUgdXRmLTggYnVmZmVyXG5cdHJldHVybiBjb252ZXJ0KGJ1ZmZlciwgJ1VURi04JywgY2hhcnNldCkudG9TdHJpbmcoKTtcbn1cblxuLyoqXG4gKiBEZXRlY3QgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKiByZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9iaXRpbm4vbm9kZS1mZXRjaC9pc3N1ZXMvMjk2I2lzc3VlY29tbWVudC0zMDc1OTgxNDNcbiAqXG4gKiBAcGFyYW0gICBPYmplY3QgIG9iaiAgICAgT2JqZWN0IHRvIGRldGVjdCBieSB0eXBlIG9yIGJyYW5kXG4gKiBAcmV0dXJuICBTdHJpbmdcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXMob2JqKSB7XG5cdC8vIER1Y2stdHlwaW5nIGFzIGEgbmVjZXNzYXJ5IGNvbmRpdGlvbi5cblx0aWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IHR5cGVvZiBvYmouYXBwZW5kICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBvYmouZGVsZXRlICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBvYmouZ2V0ICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBvYmouZ2V0QWxsICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBvYmouaGFzICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBvYmouc2V0ICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gQnJhbmQtY2hlY2tpbmcgYW5kIG1vcmUgZHVjay10eXBpbmcgYXMgb3B0aW9uYWwgY29uZGl0aW9uLlxuXHRyZXR1cm4gb2JqLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdVUkxTZWFyY2hQYXJhbXMnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBVUkxTZWFyY2hQYXJhbXNdJyB8fCB0eXBlb2Ygb2JqLnNvcnQgPT09ICdmdW5jdGlvbic7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYG9iamAgaXMgYSBXM0MgYEJsb2JgIG9iamVjdCAod2hpY2ggYEZpbGVgIGluaGVyaXRzIGZyb20pXG4gKiBAcGFyYW0gIHsqfSBvYmpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzQmxvYihvYmopIHtcblx0cmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIHR5cGVvZiBvYmouYXJyYXlCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai50eXBlID09PSAnc3RyaW5nJyAmJiB0eXBlb2Ygb2JqLnN0cmVhbSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouY29uc3RydWN0b3IubmFtZSA9PT0gJ3N0cmluZycgJiYgL14oQmxvYnxGaWxlKSQvLnRlc3Qob2JqLmNvbnN0cnVjdG9yLm5hbWUpICYmIC9eKEJsb2J8RmlsZSkkLy50ZXN0KG9ialtTeW1ib2wudG9TdHJpbmdUYWddKTtcbn1cblxuLyoqXG4gKiBDbG9uZSBib2R5IGdpdmVuIFJlcy9SZXEgaW5zdGFuY2VcbiAqXG4gKiBAcGFyYW0gICBNaXhlZCAgaW5zdGFuY2UgIFJlc3BvbnNlIG9yIFJlcXVlc3QgaW5zdGFuY2VcbiAqIEByZXR1cm4gIE1peGVkXG4gKi9cbmZ1bmN0aW9uIGNsb25lKGluc3RhbmNlKSB7XG5cdGxldCBwMSwgcDI7XG5cdGxldCBib2R5ID0gaW5zdGFuY2UuYm9keTtcblxuXHQvLyBkb24ndCBhbGxvdyBjbG9uaW5nIGEgdXNlZCBib2R5XG5cdGlmIChpbnN0YW5jZS5ib2R5VXNlZCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignY2Fubm90IGNsb25lIGJvZHkgYWZ0ZXIgaXQgaXMgdXNlZCcpO1xuXHR9XG5cblx0Ly8gY2hlY2sgdGhhdCBib2R5IGlzIGEgc3RyZWFtIGFuZCBub3QgZm9ybS1kYXRhIG9iamVjdFxuXHQvLyBub3RlOiB3ZSBjYW4ndCBjbG9uZSB0aGUgZm9ybS1kYXRhIG9iamVjdCB3aXRob3V0IGhhdmluZyBpdCBhcyBhIGRlcGVuZGVuY3lcblx0aWYgKGJvZHkgaW5zdGFuY2VvZiBTdHJlYW0gJiYgdHlwZW9mIGJvZHkuZ2V0Qm91bmRhcnkgIT09ICdmdW5jdGlvbicpIHtcblx0XHQvLyB0ZWUgaW5zdGFuY2UgYm9keVxuXHRcdHAxID0gbmV3IFBhc3NUaHJvdWdoKCk7XG5cdFx0cDIgPSBuZXcgUGFzc1Rocm91Z2goKTtcblx0XHRib2R5LnBpcGUocDEpO1xuXHRcdGJvZHkucGlwZShwMik7XG5cdFx0Ly8gc2V0IGluc3RhbmNlIGJvZHkgdG8gdGVlZCBib2R5IGFuZCByZXR1cm4gdGhlIG90aGVyIHRlZWQgYm9keVxuXHRcdGluc3RhbmNlW0lOVEVSTkFMU10uYm9keSA9IHAxO1xuXHRcdGJvZHkgPSBwMjtcblx0fVxuXG5cdHJldHVybiBib2R5O1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIHRoZSBvcGVyYXRpb24gXCJleHRyYWN0IGEgYENvbnRlbnQtVHlwZWAgdmFsdWUgZnJvbSB8b2JqZWN0fFwiIGFzXG4gKiBzcGVjaWZpZWQgaW4gdGhlIHNwZWNpZmljYXRpb246XG4gKiBodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1ib2R5aW5pdC1leHRyYWN0XG4gKlxuICogVGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgaW5zdGFuY2UuYm9keSBpcyBwcmVzZW50LlxuICpcbiAqIEBwYXJhbSAgIE1peGVkICBpbnN0YW5jZSAgQW55IG9wdGlvbnMuYm9keSBpbnB1dFxuICovXG5mdW5jdGlvbiBleHRyYWN0Q29udGVudFR5cGUoYm9keSkge1xuXHRpZiAoYm9keSA9PT0gbnVsbCkge1xuXHRcdC8vIGJvZHkgaXMgbnVsbFxuXHRcdHJldHVybiBudWxsO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuXHRcdC8vIGJvZHkgaXMgc3RyaW5nXG5cdFx0cmV0dXJuICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnO1xuXHR9IGVsc2UgaWYgKGlzVVJMU2VhcmNoUGFyYW1zKGJvZHkpKSB7XG5cdFx0Ly8gYm9keSBpcyBhIFVSTFNlYXJjaFBhcmFtc1xuXHRcdHJldHVybiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLTgnO1xuXHR9IGVsc2UgaWYgKGlzQmxvYihib2R5KSkge1xuXHRcdC8vIGJvZHkgaXMgYmxvYlxuXHRcdHJldHVybiBib2R5LnR5cGUgfHwgbnVsbDtcblx0fSBlbHNlIGlmIChCdWZmZXIuaXNCdWZmZXIoYm9keSkpIHtcblx0XHQvLyBib2R5IGlzIGJ1ZmZlclxuXHRcdHJldHVybiBudWxsO1xuXHR9IGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChib2R5KSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJykge1xuXHRcdC8vIGJvZHkgaXMgQXJyYXlCdWZmZXJcblx0XHRyZXR1cm4gbnVsbDtcblx0fSBlbHNlIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoYm9keSkpIHtcblx0XHQvLyBib2R5IGlzIEFycmF5QnVmZmVyVmlld1xuXHRcdHJldHVybiBudWxsO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBib2R5LmdldEJvdW5kYXJ5ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0Ly8gZGV0ZWN0IGZvcm0gZGF0YSBpbnB1dCBmcm9tIGZvcm0tZGF0YSBtb2R1bGVcblx0XHRyZXR1cm4gYG11bHRpcGFydC9mb3JtLWRhdGE7Ym91bmRhcnk9JHtib2R5LmdldEJvdW5kYXJ5KCl9YDtcblx0fSBlbHNlIGlmIChib2R5IGluc3RhbmNlb2YgU3RyZWFtKSB7XG5cdFx0Ly8gYm9keSBpcyBzdHJlYW1cblx0XHQvLyBjYW4ndCByZWFsbHkgZG8gbXVjaCBhYm91dCB0aGlzXG5cdFx0cmV0dXJuIG51bGw7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gQm9keSBjb25zdHJ1Y3RvciBkZWZhdWx0cyBvdGhlciB0aGluZ3MgdG8gc3RyaW5nXG5cdFx0cmV0dXJuICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnO1xuXHR9XG59XG5cbi8qKlxuICogVGhlIEZldGNoIFN0YW5kYXJkIHRyZWF0cyB0aGlzIGFzIGlmIFwidG90YWwgYnl0ZXNcIiBpcyBhIHByb3BlcnR5IG9uIHRoZSBib2R5LlxuICogRm9yIHVzLCB3ZSBoYXZlIHRvIGV4cGxpY2l0bHkgZ2V0IGl0IHdpdGggYSBmdW5jdGlvbi5cbiAqXG4gKiByZWY6IGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LWJvZHktdG90YWwtYnl0ZXNcbiAqXG4gKiBAcGFyYW0gICBCb2R5ICAgIGluc3RhbmNlICAgSW5zdGFuY2Ugb2YgQm9keVxuICogQHJldHVybiAgTnVtYmVyPyAgICAgICAgICAgIE51bWJlciBvZiBieXRlcywgb3IgbnVsbCBpZiBub3QgcG9zc2libGVcbiAqL1xuZnVuY3Rpb24gZ2V0VG90YWxCeXRlcyhpbnN0YW5jZSkge1xuXHRjb25zdCBib2R5ID0gaW5zdGFuY2UuYm9keTtcblxuXG5cdGlmIChib2R5ID09PSBudWxsKSB7XG5cdFx0Ly8gYm9keSBpcyBudWxsXG5cdFx0cmV0dXJuIDA7XG5cdH0gZWxzZSBpZiAoaXNCbG9iKGJvZHkpKSB7XG5cdFx0cmV0dXJuIGJvZHkuc2l6ZTtcblx0fSBlbHNlIGlmIChCdWZmZXIuaXNCdWZmZXIoYm9keSkpIHtcblx0XHQvLyBib2R5IGlzIGJ1ZmZlclxuXHRcdHJldHVybiBib2R5Lmxlbmd0aDtcblx0fSBlbHNlIGlmIChib2R5ICYmIHR5cGVvZiBib2R5LmdldExlbmd0aFN5bmMgPT09ICdmdW5jdGlvbicpIHtcblx0XHQvLyBkZXRlY3QgZm9ybSBkYXRhIGlucHV0IGZyb20gZm9ybS1kYXRhIG1vZHVsZVxuXHRcdGlmIChib2R5Ll9sZW5ndGhSZXRyaWV2ZXJzICYmIGJvZHkuX2xlbmd0aFJldHJpZXZlcnMubGVuZ3RoID09IDAgfHwgLy8gMS54XG5cdFx0Ym9keS5oYXNLbm93bkxlbmd0aCAmJiBib2R5Lmhhc0tub3duTGVuZ3RoKCkpIHtcblx0XHRcdC8vIDIueFxuXHRcdFx0cmV0dXJuIGJvZHkuZ2V0TGVuZ3RoU3luYygpO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fSBlbHNlIHtcblx0XHQvLyBib2R5IGlzIHN0cmVhbVxuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cbi8qKlxuICogV3JpdGUgYSBCb2R5IHRvIGEgTm9kZS5qcyBXcml0YWJsZVN0cmVhbSAoZS5nLiBodHRwLlJlcXVlc3QpIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0gICBCb2R5ICAgIGluc3RhbmNlICAgSW5zdGFuY2Ugb2YgQm9keVxuICogQHJldHVybiAgVm9pZFxuICovXG5mdW5jdGlvbiB3cml0ZVRvU3RyZWFtKGRlc3QsIGluc3RhbmNlKSB7XG5cdGNvbnN0IGJvZHkgPSBpbnN0YW5jZS5ib2R5O1xuXG5cblx0aWYgKGJvZHkgPT09IG51bGwpIHtcblx0XHQvLyBib2R5IGlzIG51bGxcblx0XHRkZXN0LmVuZCgpO1xuXHR9IGVsc2UgaWYgKGlzQmxvYihib2R5KSkge1xuXHRcdGJvZHkuc3RyZWFtKCkucGlwZShkZXN0KTtcblx0fSBlbHNlIGlmIChCdWZmZXIuaXNCdWZmZXIoYm9keSkpIHtcblx0XHQvLyBib2R5IGlzIGJ1ZmZlclxuXHRcdGRlc3Qud3JpdGUoYm9keSk7XG5cdFx0ZGVzdC5lbmQoKTtcblx0fSBlbHNlIHtcblx0XHQvLyBib2R5IGlzIHN0cmVhbVxuXHRcdGJvZHkucGlwZShkZXN0KTtcblx0fVxufVxuXG4vLyBleHBvc2UgUHJvbWlzZVxuQm9keS5Qcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG5cbi8qKlxuICogaGVhZGVycy5qc1xuICpcbiAqIEhlYWRlcnMgY2xhc3Mgb2ZmZXJzIGNvbnZlbmllbnQgaGVscGVyc1xuICovXG5cbmNvbnN0IGludmFsaWRUb2tlblJlZ2V4ID0gL1teXFxeX2BhLXpBLVpcXC0wLTkhIyQlJicqKy58fl0vO1xuY29uc3QgaW52YWxpZEhlYWRlckNoYXJSZWdleCA9IC9bXlxcdFxceDIwLVxceDdlXFx4ODAtXFx4ZmZdLztcblxuZnVuY3Rpb24gdmFsaWRhdGVOYW1lKG5hbWUpIHtcblx0bmFtZSA9IGAke25hbWV9YDtcblx0aWYgKGludmFsaWRUb2tlblJlZ2V4LnRlc3QobmFtZSkgfHwgbmFtZSA9PT0gJycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGAke25hbWV9IGlzIG5vdCBhIGxlZ2FsIEhUVFAgaGVhZGVyIG5hbWVgKTtcblx0fVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVZhbHVlKHZhbHVlKSB7XG5cdHZhbHVlID0gYCR7dmFsdWV9YDtcblx0aWYgKGludmFsaWRIZWFkZXJDaGFyUmVnZXgudGVzdCh2YWx1ZSkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGAke3ZhbHVlfSBpcyBub3QgYSBsZWdhbCBIVFRQIGhlYWRlciB2YWx1ZWApO1xuXHR9XG59XG5cbi8qKlxuICogRmluZCB0aGUga2V5IGluIHRoZSBtYXAgb2JqZWN0IGdpdmVuIGEgaGVhZGVyIG5hbWUuXG4gKlxuICogUmV0dXJucyB1bmRlZmluZWQgaWYgbm90IGZvdW5kLlxuICpcbiAqIEBwYXJhbSAgIFN0cmluZyAgbmFtZSAgSGVhZGVyIG5hbWVcbiAqIEByZXR1cm4gIFN0cmluZ3xVbmRlZmluZWRcbiAqL1xuZnVuY3Rpb24gZmluZChtYXAsIG5hbWUpIHtcblx0bmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblx0Zm9yIChjb25zdCBrZXkgaW4gbWFwKSB7XG5cdFx0aWYgKGtleS50b0xvd2VyQ2FzZSgpID09PSBuYW1lKSB7XG5cdFx0XHRyZXR1cm4ga2V5O1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5jb25zdCBNQVAgPSBTeW1ib2woJ21hcCcpO1xuY2xhc3MgSGVhZGVycyB7XG5cdC8qKlxuICAqIEhlYWRlcnMgY2xhc3NcbiAgKlxuICAqIEBwYXJhbSAgIE9iamVjdCAgaGVhZGVycyAgUmVzcG9uc2UgaGVhZGVyc1xuICAqIEByZXR1cm4gIFZvaWRcbiAgKi9cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0bGV0IGluaXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZDtcblxuXHRcdHRoaXNbTUFQXSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cblx0XHRpZiAoaW5pdCBpbnN0YW5jZW9mIEhlYWRlcnMpIHtcblx0XHRcdGNvbnN0IHJhd0hlYWRlcnMgPSBpbml0LnJhdygpO1xuXHRcdFx0Y29uc3QgaGVhZGVyTmFtZXMgPSBPYmplY3Qua2V5cyhyYXdIZWFkZXJzKTtcblxuXHRcdFx0Zm9yIChjb25zdCBoZWFkZXJOYW1lIG9mIGhlYWRlck5hbWVzKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgdmFsdWUgb2YgcmF3SGVhZGVyc1toZWFkZXJOYW1lXSkge1xuXHRcdFx0XHRcdHRoaXMuYXBwZW5kKGhlYWRlck5hbWUsIHZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gV2UgZG9uJ3Qgd29ycnkgYWJvdXQgY29udmVydGluZyBwcm9wIHRvIEJ5dGVTdHJpbmcgaGVyZSBhcyBhcHBlbmQoKVxuXHRcdC8vIHdpbGwgaGFuZGxlIGl0LlxuXHRcdGlmIChpbml0ID09IG51bGwpIDsgZWxzZSBpZiAodHlwZW9mIGluaXQgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRjb25zdCBtZXRob2QgPSBpbml0W1N5bWJvbC5pdGVyYXRvcl07XG5cdFx0XHRpZiAobWV0aG9kICE9IG51bGwpIHtcblx0XHRcdFx0aWYgKHR5cGVvZiBtZXRob2QgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdIZWFkZXIgcGFpcnMgbXVzdCBiZSBpdGVyYWJsZScpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gc2VxdWVuY2U8c2VxdWVuY2U8Qnl0ZVN0cmluZz4+XG5cdFx0XHRcdC8vIE5vdGU6IHBlciBzcGVjIHdlIGhhdmUgdG8gZmlyc3QgZXhoYXVzdCB0aGUgbGlzdHMgdGhlbiBwcm9jZXNzIHRoZW1cblx0XHRcdFx0Y29uc3QgcGFpcnMgPSBbXTtcblx0XHRcdFx0Zm9yIChjb25zdCBwYWlyIG9mIGluaXQpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIHBhaXIgIT09ICdvYmplY3QnIHx8IHR5cGVvZiBwYWlyW1N5bWJvbC5pdGVyYXRvcl0gIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0VhY2ggaGVhZGVyIHBhaXIgbXVzdCBiZSBpdGVyYWJsZScpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRwYWlycy5wdXNoKEFycmF5LmZyb20ocGFpcikpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG5cdFx0XHRcdFx0aWYgKHBhaXIubGVuZ3RoICE9PSAyKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFYWNoIGhlYWRlciBwYWlyIG11c3QgYmUgYSBuYW1lL3ZhbHVlIHR1cGxlJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuYXBwZW5kKHBhaXJbMF0sIHBhaXJbMV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyByZWNvcmQ8Qnl0ZVN0cmluZywgQnl0ZVN0cmluZz5cblx0XHRcdFx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoaW5pdCkpIHtcblx0XHRcdFx0XHRjb25zdCB2YWx1ZSA9IGluaXRba2V5XTtcblx0XHRcdFx0XHR0aGlzLmFwcGVuZChrZXksIHZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm92aWRlZCBpbml0aWFsaXplciBtdXN0IGJlIGFuIG9iamVjdCcpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuICAqIFJldHVybiBjb21iaW5lZCBoZWFkZXIgdmFsdWUgZ2l2ZW4gbmFtZVxuICAqXG4gICogQHBhcmFtICAgU3RyaW5nICBuYW1lICBIZWFkZXIgbmFtZVxuICAqIEByZXR1cm4gIE1peGVkXG4gICovXG5cdGdldChuYW1lKSB7XG5cdFx0bmFtZSA9IGAke25hbWV9YDtcblx0XHR2YWxpZGF0ZU5hbWUobmFtZSk7XG5cdFx0Y29uc3Qga2V5ID0gZmluZCh0aGlzW01BUF0sIG5hbWUpO1xuXHRcdGlmIChrZXkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXNbTUFQXVtrZXldLmpvaW4oJywgJyk7XG5cdH1cblxuXHQvKipcbiAgKiBJdGVyYXRlIG92ZXIgYWxsIGhlYWRlcnNcbiAgKlxuICAqIEBwYXJhbSAgIEZ1bmN0aW9uICBjYWxsYmFjayAgRXhlY3V0ZWQgZm9yIGVhY2ggaXRlbSB3aXRoIHBhcmFtZXRlcnMgKHZhbHVlLCBuYW1lLCB0aGlzQXJnKVxuICAqIEBwYXJhbSAgIEJvb2xlYW4gICB0aGlzQXJnICAgYHRoaXNgIGNvbnRleHQgZm9yIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICogQHJldHVybiAgVm9pZFxuICAqL1xuXHRmb3JFYWNoKGNhbGxiYWNrKSB7XG5cdFx0bGV0IHRoaXNBcmcgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcblxuXHRcdGxldCBwYWlycyA9IGdldEhlYWRlcnModGhpcyk7XG5cdFx0bGV0IGkgPSAwO1xuXHRcdHdoaWxlIChpIDwgcGFpcnMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgX3BhaXJzJGkgPSBwYWlyc1tpXTtcblx0XHRcdGNvbnN0IG5hbWUgPSBfcGFpcnMkaVswXSxcblx0XHRcdCAgICAgIHZhbHVlID0gX3BhaXJzJGlbMV07XG5cblx0XHRcdGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdmFsdWUsIG5hbWUsIHRoaXMpO1xuXHRcdFx0cGFpcnMgPSBnZXRIZWFkZXJzKHRoaXMpO1xuXHRcdFx0aSsrO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuICAqIE92ZXJ3cml0ZSBoZWFkZXIgdmFsdWVzIGdpdmVuIG5hbWVcbiAgKlxuICAqIEBwYXJhbSAgIFN0cmluZyAgbmFtZSAgIEhlYWRlciBuYW1lXG4gICogQHBhcmFtICAgU3RyaW5nICB2YWx1ZSAgSGVhZGVyIHZhbHVlXG4gICogQHJldHVybiAgVm9pZFxuICAqL1xuXHRzZXQobmFtZSwgdmFsdWUpIHtcblx0XHRuYW1lID0gYCR7bmFtZX1gO1xuXHRcdHZhbHVlID0gYCR7dmFsdWV9YDtcblx0XHR2YWxpZGF0ZU5hbWUobmFtZSk7XG5cdFx0dmFsaWRhdGVWYWx1ZSh2YWx1ZSk7XG5cdFx0Y29uc3Qga2V5ID0gZmluZCh0aGlzW01BUF0sIG5hbWUpO1xuXHRcdHRoaXNbTUFQXVtrZXkgIT09IHVuZGVmaW5lZCA/IGtleSA6IG5hbWVdID0gW3ZhbHVlXTtcblx0fVxuXG5cdC8qKlxuICAqIEFwcGVuZCBhIHZhbHVlIG9udG8gZXhpc3RpbmcgaGVhZGVyXG4gICpcbiAgKiBAcGFyYW0gICBTdHJpbmcgIG5hbWUgICBIZWFkZXIgbmFtZVxuICAqIEBwYXJhbSAgIFN0cmluZyAgdmFsdWUgIEhlYWRlciB2YWx1ZVxuICAqIEByZXR1cm4gIFZvaWRcbiAgKi9cblx0YXBwZW5kKG5hbWUsIHZhbHVlKSB7XG5cdFx0bmFtZSA9IGAke25hbWV9YDtcblx0XHR2YWx1ZSA9IGAke3ZhbHVlfWA7XG5cdFx0dmFsaWRhdGVOYW1lKG5hbWUpO1xuXHRcdHZhbGlkYXRlVmFsdWUodmFsdWUpO1xuXHRcdGNvbnN0IGtleSA9IGZpbmQodGhpc1tNQVBdLCBuYW1lKTtcblx0XHRpZiAoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXNbTUFQXVtrZXldLnB1c2godmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzW01BUF1bbmFtZV0gPSBbdmFsdWVdO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuICAqIENoZWNrIGZvciBoZWFkZXIgbmFtZSBleGlzdGVuY2VcbiAgKlxuICAqIEBwYXJhbSAgIFN0cmluZyAgIG5hbWUgIEhlYWRlciBuYW1lXG4gICogQHJldHVybiAgQm9vbGVhblxuICAqL1xuXHRoYXMobmFtZSkge1xuXHRcdG5hbWUgPSBgJHtuYW1lfWA7XG5cdFx0dmFsaWRhdGVOYW1lKG5hbWUpO1xuXHRcdHJldHVybiBmaW5kKHRoaXNbTUFQXSwgbmFtZSkgIT09IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKlxuICAqIERlbGV0ZSBhbGwgaGVhZGVyIHZhbHVlcyBnaXZlbiBuYW1lXG4gICpcbiAgKiBAcGFyYW0gICBTdHJpbmcgIG5hbWUgIEhlYWRlciBuYW1lXG4gICogQHJldHVybiAgVm9pZFxuICAqL1xuXHRkZWxldGUobmFtZSkge1xuXHRcdG5hbWUgPSBgJHtuYW1lfWA7XG5cdFx0dmFsaWRhdGVOYW1lKG5hbWUpO1xuXHRcdGNvbnN0IGtleSA9IGZpbmQodGhpc1tNQVBdLCBuYW1lKTtcblx0XHRpZiAoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGRlbGV0ZSB0aGlzW01BUF1ba2V5XTtcblx0XHR9XG5cdH1cblxuXHQvKipcbiAgKiBSZXR1cm4gcmF3IGhlYWRlcnMgKG5vbi1zcGVjIGFwaSlcbiAgKlxuICAqIEByZXR1cm4gIE9iamVjdFxuICAqL1xuXHRyYXcoKSB7XG5cdFx0cmV0dXJuIHRoaXNbTUFQXTtcblx0fVxuXG5cdC8qKlxuICAqIEdldCBhbiBpdGVyYXRvciBvbiBrZXlzLlxuICAqXG4gICogQHJldHVybiAgSXRlcmF0b3JcbiAgKi9cblx0a2V5cygpIHtcblx0XHRyZXR1cm4gY3JlYXRlSGVhZGVyc0l0ZXJhdG9yKHRoaXMsICdrZXknKTtcblx0fVxuXG5cdC8qKlxuICAqIEdldCBhbiBpdGVyYXRvciBvbiB2YWx1ZXMuXG4gICpcbiAgKiBAcmV0dXJuICBJdGVyYXRvclxuICAqL1xuXHR2YWx1ZXMoKSB7XG5cdFx0cmV0dXJuIGNyZWF0ZUhlYWRlcnNJdGVyYXRvcih0aGlzLCAndmFsdWUnKTtcblx0fVxuXG5cdC8qKlxuICAqIEdldCBhbiBpdGVyYXRvciBvbiBlbnRyaWVzLlxuICAqXG4gICogVGhpcyBpcyB0aGUgZGVmYXVsdCBpdGVyYXRvciBvZiB0aGUgSGVhZGVycyBvYmplY3QuXG4gICpcbiAgKiBAcmV0dXJuICBJdGVyYXRvclxuICAqL1xuXHRbU3ltYm9sLml0ZXJhdG9yXSgpIHtcblx0XHRyZXR1cm4gY3JlYXRlSGVhZGVyc0l0ZXJhdG9yKHRoaXMsICdrZXkrdmFsdWUnKTtcblx0fVxufVxuSGVhZGVycy5wcm90b3R5cGUuZW50cmllcyA9IEhlYWRlcnMucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShIZWFkZXJzLnByb3RvdHlwZSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG5cdHZhbHVlOiAnSGVhZGVycycsXG5cdHdyaXRhYmxlOiBmYWxzZSxcblx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdGNvbmZpZ3VyYWJsZTogdHJ1ZVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEhlYWRlcnMucHJvdG90eXBlLCB7XG5cdGdldDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdGZvckVhY2g6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRzZXQ6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRhcHBlbmQ6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRoYXM6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRkZWxldGU6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRrZXlzOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0dmFsdWVzOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0ZW50cmllczogeyBlbnVtZXJhYmxlOiB0cnVlIH1cbn0pO1xuXG5mdW5jdGlvbiBnZXRIZWFkZXJzKGhlYWRlcnMpIHtcblx0bGV0IGtpbmQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICdrZXkrdmFsdWUnO1xuXG5cdGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhoZWFkZXJzW01BUF0pLnNvcnQoKTtcblx0cmV0dXJuIGtleXMubWFwKGtpbmQgPT09ICdrZXknID8gZnVuY3Rpb24gKGspIHtcblx0XHRyZXR1cm4gay50b0xvd2VyQ2FzZSgpO1xuXHR9IDoga2luZCA9PT0gJ3ZhbHVlJyA/IGZ1bmN0aW9uIChrKSB7XG5cdFx0cmV0dXJuIGhlYWRlcnNbTUFQXVtrXS5qb2luKCcsICcpO1xuXHR9IDogZnVuY3Rpb24gKGspIHtcblx0XHRyZXR1cm4gW2sudG9Mb3dlckNhc2UoKSwgaGVhZGVyc1tNQVBdW2tdLmpvaW4oJywgJyldO1xuXHR9KTtcbn1cblxuY29uc3QgSU5URVJOQUwgPSBTeW1ib2woJ2ludGVybmFsJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcnNJdGVyYXRvcih0YXJnZXQsIGtpbmQpIHtcblx0Y29uc3QgaXRlcmF0b3IgPSBPYmplY3QuY3JlYXRlKEhlYWRlcnNJdGVyYXRvclByb3RvdHlwZSk7XG5cdGl0ZXJhdG9yW0lOVEVSTkFMXSA9IHtcblx0XHR0YXJnZXQsXG5cdFx0a2luZCxcblx0XHRpbmRleDogMFxuXHR9O1xuXHRyZXR1cm4gaXRlcmF0b3I7XG59XG5cbmNvbnN0IEhlYWRlcnNJdGVyYXRvclByb3RvdHlwZSA9IE9iamVjdC5zZXRQcm90b3R5cGVPZih7XG5cdG5leHQoKSB7XG5cdFx0Ly8gaXN0YW5idWwgaWdub3JlIGlmXG5cdFx0aWYgKCF0aGlzIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSAhPT0gSGVhZGVyc0l0ZXJhdG9yUHJvdG90eXBlKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdWYWx1ZSBvZiBgdGhpc2AgaXMgbm90IGEgSGVhZGVyc0l0ZXJhdG9yJyk7XG5cdFx0fVxuXG5cdFx0dmFyIF9JTlRFUk5BTCA9IHRoaXNbSU5URVJOQUxdO1xuXHRcdGNvbnN0IHRhcmdldCA9IF9JTlRFUk5BTC50YXJnZXQsXG5cdFx0ICAgICAga2luZCA9IF9JTlRFUk5BTC5raW5kLFxuXHRcdCAgICAgIGluZGV4ID0gX0lOVEVSTkFMLmluZGV4O1xuXG5cdFx0Y29uc3QgdmFsdWVzID0gZ2V0SGVhZGVycyh0YXJnZXQsIGtpbmQpO1xuXHRcdGNvbnN0IGxlbiA9IHZhbHVlcy5sZW5ndGg7XG5cdFx0aWYgKGluZGV4ID49IGxlbikge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dmFsdWU6IHVuZGVmaW5lZCxcblx0XHRcdFx0ZG9uZTogdHJ1ZVxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHR0aGlzW0lOVEVSTkFMXS5pbmRleCA9IGluZGV4ICsgMTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHR2YWx1ZTogdmFsdWVzW2luZGV4XSxcblx0XHRcdGRvbmU6IGZhbHNlXG5cdFx0fTtcblx0fVxufSwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE9iamVjdC5nZXRQcm90b3R5cGVPZihbXVtTeW1ib2wuaXRlcmF0b3JdKCkpKSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShIZWFkZXJzSXRlcmF0b3JQcm90b3R5cGUsIFN5bWJvbC50b1N0cmluZ1RhZywge1xuXHR2YWx1ZTogJ0hlYWRlcnNJdGVyYXRvcicsXG5cdHdyaXRhYmxlOiBmYWxzZSxcblx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdGNvbmZpZ3VyYWJsZTogdHJ1ZVxufSk7XG5cbi8qKlxuICogRXhwb3J0IHRoZSBIZWFkZXJzIG9iamVjdCBpbiBhIGZvcm0gdGhhdCBOb2RlLmpzIGNhbiBjb25zdW1lLlxuICpcbiAqIEBwYXJhbSAgIEhlYWRlcnMgIGhlYWRlcnNcbiAqIEByZXR1cm4gIE9iamVjdFxuICovXG5mdW5jdGlvbiBleHBvcnROb2RlQ29tcGF0aWJsZUhlYWRlcnMoaGVhZGVycykge1xuXHRjb25zdCBvYmogPSBPYmplY3QuYXNzaWduKHsgX19wcm90b19fOiBudWxsIH0sIGhlYWRlcnNbTUFQXSk7XG5cblx0Ly8gaHR0cC5yZXF1ZXN0KCkgb25seSBzdXBwb3J0cyBzdHJpbmcgYXMgSG9zdCBoZWFkZXIuIFRoaXMgaGFjayBtYWtlc1xuXHQvLyBzcGVjaWZ5aW5nIGN1c3RvbSBIb3N0IGhlYWRlciBwb3NzaWJsZS5cblx0Y29uc3QgaG9zdEhlYWRlcktleSA9IGZpbmQoaGVhZGVyc1tNQVBdLCAnSG9zdCcpO1xuXHRpZiAoaG9zdEhlYWRlcktleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0b2JqW2hvc3RIZWFkZXJLZXldID0gb2JqW2hvc3RIZWFkZXJLZXldWzBdO1xuXHR9XG5cblx0cmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBIZWFkZXJzIG9iamVjdCBmcm9tIGFuIG9iamVjdCBvZiBoZWFkZXJzLCBpZ25vcmluZyB0aG9zZSB0aGF0IGRvXG4gKiBub3QgY29uZm9ybSB0byBIVFRQIGdyYW1tYXIgcHJvZHVjdGlvbnMuXG4gKlxuICogQHBhcmFtICAgT2JqZWN0ICBvYmogIE9iamVjdCBvZiBoZWFkZXJzXG4gKiBAcmV0dXJuICBIZWFkZXJzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcnNMZW5pZW50KG9iaikge1xuXHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0Zm9yIChjb25zdCBuYW1lIG9mIE9iamVjdC5rZXlzKG9iaikpIHtcblx0XHRpZiAoaW52YWxpZFRva2VuUmVnZXgudGVzdChuYW1lKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGlmIChBcnJheS5pc0FycmF5KG9ialtuYW1lXSkpIHtcblx0XHRcdGZvciAoY29uc3QgdmFsIG9mIG9ialtuYW1lXSkge1xuXHRcdFx0XHRpZiAoaW52YWxpZEhlYWRlckNoYXJSZWdleC50ZXN0KHZhbCkpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoaGVhZGVyc1tNQVBdW25hbWVdID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRoZWFkZXJzW01BUF1bbmFtZV0gPSBbdmFsXTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRoZWFkZXJzW01BUF1bbmFtZV0ucHVzaCh2YWwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmICghaW52YWxpZEhlYWRlckNoYXJSZWdleC50ZXN0KG9ialtuYW1lXSkpIHtcblx0XHRcdGhlYWRlcnNbTUFQXVtuYW1lXSA9IFtvYmpbbmFtZV1dO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gaGVhZGVycztcbn1cblxuY29uc3QgSU5URVJOQUxTJDEgPSBTeW1ib2woJ1Jlc3BvbnNlIGludGVybmFscycpO1xuXG4vLyBmaXggYW4gaXNzdWUgd2hlcmUgXCJTVEFUVVNfQ09ERVNcIiBhcmVuJ3QgYSBuYW1lZCBleHBvcnQgZm9yIG5vZGUgPDEwXG5jb25zdCBTVEFUVVNfQ09ERVMgPSBodHRwLlNUQVRVU19DT0RFUztcblxuLyoqXG4gKiBSZXNwb25zZSBjbGFzc1xuICpcbiAqIEBwYXJhbSAgIFN0cmVhbSAgYm9keSAgUmVhZGFibGUgc3RyZWFtXG4gKiBAcGFyYW0gICBPYmplY3QgIG9wdHMgIFJlc3BvbnNlIG9wdGlvbnNcbiAqIEByZXR1cm4gIFZvaWRcbiAqL1xuY2xhc3MgUmVzcG9uc2Uge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRsZXQgYm9keSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogbnVsbDtcblx0XHRsZXQgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cblx0XHRCb2R5LmNhbGwodGhpcywgYm9keSwgb3B0cyk7XG5cblx0XHRjb25zdCBzdGF0dXMgPSBvcHRzLnN0YXR1cyB8fCAyMDA7XG5cdFx0Y29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdHMuaGVhZGVycyk7XG5cblx0XHRpZiAoYm9keSAhPSBudWxsICYmICFoZWFkZXJzLmhhcygnQ29udGVudC1UeXBlJykpIHtcblx0XHRcdGNvbnN0IGNvbnRlbnRUeXBlID0gZXh0cmFjdENvbnRlbnRUeXBlKGJvZHkpO1xuXHRcdFx0aWYgKGNvbnRlbnRUeXBlKSB7XG5cdFx0XHRcdGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCBjb250ZW50VHlwZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpc1tJTlRFUk5BTFMkMV0gPSB7XG5cdFx0XHR1cmw6IG9wdHMudXJsLFxuXHRcdFx0c3RhdHVzLFxuXHRcdFx0c3RhdHVzVGV4dDogb3B0cy5zdGF0dXNUZXh0IHx8IFNUQVRVU19DT0RFU1tzdGF0dXNdLFxuXHRcdFx0aGVhZGVycyxcblx0XHRcdGNvdW50ZXI6IG9wdHMuY291bnRlclxuXHRcdH07XG5cdH1cblxuXHRnZXQgdXJsKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMUyQxXS51cmwgfHwgJyc7XG5cdH1cblxuXHRnZXQgc3RhdHVzKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMUyQxXS5zdGF0dXM7XG5cdH1cblxuXHQvKipcbiAgKiBDb252ZW5pZW5jZSBwcm9wZXJ0eSByZXByZXNlbnRpbmcgaWYgdGhlIHJlcXVlc3QgZW5kZWQgbm9ybWFsbHlcbiAgKi9cblx0Z2V0IG9rKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMUyQxXS5zdGF0dXMgPj0gMjAwICYmIHRoaXNbSU5URVJOQUxTJDFdLnN0YXR1cyA8IDMwMDtcblx0fVxuXG5cdGdldCByZWRpcmVjdGVkKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMUyQxXS5jb3VudGVyID4gMDtcblx0fVxuXG5cdGdldCBzdGF0dXNUZXh0KCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMUyQxXS5zdGF0dXNUZXh0O1xuXHR9XG5cblx0Z2V0IGhlYWRlcnMoKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTJDFdLmhlYWRlcnM7XG5cdH1cblxuXHQvKipcbiAgKiBDbG9uZSB0aGlzIHJlc3BvbnNlXG4gICpcbiAgKiBAcmV0dXJuICBSZXNwb25zZVxuICAqL1xuXHRjbG9uZSgpIHtcblx0XHRyZXR1cm4gbmV3IFJlc3BvbnNlKGNsb25lKHRoaXMpLCB7XG5cdFx0XHR1cmw6IHRoaXMudXJsLFxuXHRcdFx0c3RhdHVzOiB0aGlzLnN0YXR1cyxcblx0XHRcdHN0YXR1c1RleHQ6IHRoaXMuc3RhdHVzVGV4dCxcblx0XHRcdGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcblx0XHRcdG9rOiB0aGlzLm9rLFxuXHRcdFx0cmVkaXJlY3RlZDogdGhpcy5yZWRpcmVjdGVkXG5cdFx0fSk7XG5cdH1cbn1cblxuQm9keS5taXhJbihSZXNwb25zZS5wcm90b3R5cGUpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhSZXNwb25zZS5wcm90b3R5cGUsIHtcblx0dXJsOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0c3RhdHVzOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0b2s6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRyZWRpcmVjdGVkOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0c3RhdHVzVGV4dDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdGhlYWRlcnM6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRjbG9uZTogeyBlbnVtZXJhYmxlOiB0cnVlIH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVzcG9uc2UucHJvdG90eXBlLCBTeW1ib2wudG9TdHJpbmdUYWcsIHtcblx0dmFsdWU6ICdSZXNwb25zZScsXG5cdHdyaXRhYmxlOiBmYWxzZSxcblx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdGNvbmZpZ3VyYWJsZTogdHJ1ZVxufSk7XG5cbmNvbnN0IElOVEVSTkFMUyQyID0gU3ltYm9sKCdSZXF1ZXN0IGludGVybmFscycpO1xuXG4vLyBmaXggYW4gaXNzdWUgd2hlcmUgXCJmb3JtYXRcIiwgXCJwYXJzZVwiIGFyZW4ndCBhIG5hbWVkIGV4cG9ydCBmb3Igbm9kZSA8MTBcbmNvbnN0IHBhcnNlX3VybCA9IFVybC5wYXJzZTtcbmNvbnN0IGZvcm1hdF91cmwgPSBVcmwuZm9ybWF0O1xuXG5jb25zdCBzdHJlYW1EZXN0cnVjdGlvblN1cHBvcnRlZCA9ICdkZXN0cm95JyBpbiBTdHJlYW0uUmVhZGFibGUucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrIGlmIGEgdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgUmVxdWVzdC5cbiAqXG4gKiBAcGFyYW0gICBNaXhlZCAgIGlucHV0XG4gKiBAcmV0dXJuICBCb29sZWFuXG4gKi9cbmZ1bmN0aW9uIGlzUmVxdWVzdChpbnB1dCkge1xuXHRyZXR1cm4gdHlwZW9mIGlucHV0ID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgaW5wdXRbSU5URVJOQUxTJDJdID09PSAnb2JqZWN0Jztcbn1cblxuZnVuY3Rpb24gaXNBYm9ydFNpZ25hbChzaWduYWwpIHtcblx0Y29uc3QgcHJvdG8gPSBzaWduYWwgJiYgdHlwZW9mIHNpZ25hbCA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKHNpZ25hbCk7XG5cdHJldHVybiAhIShwcm90byAmJiBwcm90by5jb25zdHJ1Y3Rvci5uYW1lID09PSAnQWJvcnRTaWduYWwnKTtcbn1cblxuLyoqXG4gKiBSZXF1ZXN0IGNsYXNzXG4gKlxuICogQHBhcmFtICAgTWl4ZWQgICBpbnB1dCAgVXJsIG9yIFJlcXVlc3QgaW5zdGFuY2VcbiAqIEBwYXJhbSAgIE9iamVjdCAgaW5pdCAgIEN1c3RvbSBvcHRpb25zXG4gKiBAcmV0dXJuICBWb2lkXG4gKi9cbmNsYXNzIFJlcXVlc3Qge1xuXHRjb25zdHJ1Y3RvcihpbnB1dCkge1xuXHRcdGxldCBpbml0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuXHRcdGxldCBwYXJzZWRVUkw7XG5cblx0XHQvLyBub3JtYWxpemUgaW5wdXRcblx0XHRpZiAoIWlzUmVxdWVzdChpbnB1dCkpIHtcblx0XHRcdGlmIChpbnB1dCAmJiBpbnB1dC5ocmVmKSB7XG5cdFx0XHRcdC8vIGluIG9yZGVyIHRvIHN1cHBvcnQgTm9kZS5qcycgVXJsIG9iamVjdHM7IHRob3VnaCBXSEFUV0cncyBVUkwgb2JqZWN0c1xuXHRcdFx0XHQvLyB3aWxsIGZhbGwgaW50byB0aGlzIGJyYW5jaCBhbHNvIChzaW5jZSB0aGVpciBgdG9TdHJpbmcoKWAgd2lsbCByZXR1cm5cblx0XHRcdFx0Ly8gYGhyZWZgIHByb3BlcnR5IGFueXdheSlcblx0XHRcdFx0cGFyc2VkVVJMID0gcGFyc2VfdXJsKGlucHV0LmhyZWYpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gY29lcmNlIGlucHV0IHRvIGEgc3RyaW5nIGJlZm9yZSBhdHRlbXB0aW5nIHRvIHBhcnNlXG5cdFx0XHRcdHBhcnNlZFVSTCA9IHBhcnNlX3VybChgJHtpbnB1dH1gKTtcblx0XHRcdH1cblx0XHRcdGlucHV0ID0ge307XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBhcnNlZFVSTCA9IHBhcnNlX3VybChpbnB1dC51cmwpO1xuXHRcdH1cblxuXHRcdGxldCBtZXRob2QgPSBpbml0Lm1ldGhvZCB8fCBpbnB1dC5tZXRob2QgfHwgJ0dFVCc7XG5cdFx0bWV0aG9kID0gbWV0aG9kLnRvVXBwZXJDYXNlKCk7XG5cblx0XHRpZiAoKGluaXQuYm9keSAhPSBudWxsIHx8IGlzUmVxdWVzdChpbnB1dCkgJiYgaW5wdXQuYm9keSAhPT0gbnVsbCkgJiYgKG1ldGhvZCA9PT0gJ0dFVCcgfHwgbWV0aG9kID09PSAnSEVBRCcpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdSZXF1ZXN0IHdpdGggR0VUL0hFQUQgbWV0aG9kIGNhbm5vdCBoYXZlIGJvZHknKTtcblx0XHR9XG5cblx0XHRsZXQgaW5wdXRCb2R5ID0gaW5pdC5ib2R5ICE9IG51bGwgPyBpbml0LmJvZHkgOiBpc1JlcXVlc3QoaW5wdXQpICYmIGlucHV0LmJvZHkgIT09IG51bGwgPyBjbG9uZShpbnB1dCkgOiBudWxsO1xuXG5cdFx0Qm9keS5jYWxsKHRoaXMsIGlucHV0Qm9keSwge1xuXHRcdFx0dGltZW91dDogaW5pdC50aW1lb3V0IHx8IGlucHV0LnRpbWVvdXQgfHwgMCxcblx0XHRcdHNpemU6IGluaXQuc2l6ZSB8fCBpbnB1dC5zaXplIHx8IDBcblx0XHR9KTtcblxuXHRcdGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyhpbml0LmhlYWRlcnMgfHwgaW5wdXQuaGVhZGVycyB8fCB7fSk7XG5cblx0XHRpZiAoaW5wdXRCb2R5ICE9IG51bGwgJiYgIWhlYWRlcnMuaGFzKCdDb250ZW50LVR5cGUnKSkge1xuXHRcdFx0Y29uc3QgY29udGVudFR5cGUgPSBleHRyYWN0Q29udGVudFR5cGUoaW5wdXRCb2R5KTtcblx0XHRcdGlmIChjb250ZW50VHlwZSkge1xuXHRcdFx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgY29udGVudFR5cGUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGxldCBzaWduYWwgPSBpc1JlcXVlc3QoaW5wdXQpID8gaW5wdXQuc2lnbmFsIDogbnVsbDtcblx0XHRpZiAoJ3NpZ25hbCcgaW4gaW5pdCkgc2lnbmFsID0gaW5pdC5zaWduYWw7XG5cblx0XHRpZiAoc2lnbmFsICE9IG51bGwgJiYgIWlzQWJvcnRTaWduYWwoc2lnbmFsKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgc2lnbmFsIHRvIGJlIGFuIGluc3RhbmNlb2YgQWJvcnRTaWduYWwnKTtcblx0XHR9XG5cblx0XHR0aGlzW0lOVEVSTkFMUyQyXSA9IHtcblx0XHRcdG1ldGhvZCxcblx0XHRcdHJlZGlyZWN0OiBpbml0LnJlZGlyZWN0IHx8IGlucHV0LnJlZGlyZWN0IHx8ICdmb2xsb3cnLFxuXHRcdFx0aGVhZGVycyxcblx0XHRcdHBhcnNlZFVSTCxcblx0XHRcdHNpZ25hbFxuXHRcdH07XG5cblx0XHQvLyBub2RlLWZldGNoLW9ubHkgb3B0aW9uc1xuXHRcdHRoaXMuZm9sbG93ID0gaW5pdC5mb2xsb3cgIT09IHVuZGVmaW5lZCA/IGluaXQuZm9sbG93IDogaW5wdXQuZm9sbG93ICE9PSB1bmRlZmluZWQgPyBpbnB1dC5mb2xsb3cgOiAyMDtcblx0XHR0aGlzLmNvbXByZXNzID0gaW5pdC5jb21wcmVzcyAhPT0gdW5kZWZpbmVkID8gaW5pdC5jb21wcmVzcyA6IGlucHV0LmNvbXByZXNzICE9PSB1bmRlZmluZWQgPyBpbnB1dC5jb21wcmVzcyA6IHRydWU7XG5cdFx0dGhpcy5jb3VudGVyID0gaW5pdC5jb3VudGVyIHx8IGlucHV0LmNvdW50ZXIgfHwgMDtcblx0XHR0aGlzLmFnZW50ID0gaW5pdC5hZ2VudCB8fCBpbnB1dC5hZ2VudDtcblx0fVxuXG5cdGdldCBtZXRob2QoKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTJDJdLm1ldGhvZDtcblx0fVxuXG5cdGdldCB1cmwoKSB7XG5cdFx0cmV0dXJuIGZvcm1hdF91cmwodGhpc1tJTlRFUk5BTFMkMl0ucGFyc2VkVVJMKTtcblx0fVxuXG5cdGdldCBoZWFkZXJzKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMUyQyXS5oZWFkZXJzO1xuXHR9XG5cblx0Z2V0IHJlZGlyZWN0KCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMUyQyXS5yZWRpcmVjdDtcblx0fVxuXG5cdGdldCBzaWduYWwoKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTJDJdLnNpZ25hbDtcblx0fVxuXG5cdC8qKlxuICAqIENsb25lIHRoaXMgcmVxdWVzdFxuICAqXG4gICogQHJldHVybiAgUmVxdWVzdFxuICAqL1xuXHRjbG9uZSgpIHtcblx0XHRyZXR1cm4gbmV3IFJlcXVlc3QodGhpcyk7XG5cdH1cbn1cblxuQm9keS5taXhJbihSZXF1ZXN0LnByb3RvdHlwZSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZXF1ZXN0LnByb3RvdHlwZSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG5cdHZhbHVlOiAnUmVxdWVzdCcsXG5cdHdyaXRhYmxlOiBmYWxzZSxcblx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdGNvbmZpZ3VyYWJsZTogdHJ1ZVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFJlcXVlc3QucHJvdG90eXBlLCB7XG5cdG1ldGhvZDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdHVybDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdGhlYWRlcnM6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRyZWRpcmVjdDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdGNsb25lOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0c2lnbmFsOiB7IGVudW1lcmFibGU6IHRydWUgfVxufSk7XG5cbi8qKlxuICogQ29udmVydCBhIFJlcXVlc3QgdG8gTm9kZS5qcyBodHRwIHJlcXVlc3Qgb3B0aW9ucy5cbiAqXG4gKiBAcGFyYW0gICBSZXF1ZXN0ICBBIFJlcXVlc3QgaW5zdGFuY2VcbiAqIEByZXR1cm4gIE9iamVjdCAgIFRoZSBvcHRpb25zIG9iamVjdCB0byBiZSBwYXNzZWQgdG8gaHR0cC5yZXF1ZXN0XG4gKi9cbmZ1bmN0aW9uIGdldE5vZGVSZXF1ZXN0T3B0aW9ucyhyZXF1ZXN0KSB7XG5cdGNvbnN0IHBhcnNlZFVSTCA9IHJlcXVlc3RbSU5URVJOQUxTJDJdLnBhcnNlZFVSTDtcblx0Y29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHJlcXVlc3RbSU5URVJOQUxTJDJdLmhlYWRlcnMpO1xuXG5cdC8vIGZldGNoIHN0ZXAgMS4zXG5cdGlmICghaGVhZGVycy5oYXMoJ0FjY2VwdCcpKSB7XG5cdFx0aGVhZGVycy5zZXQoJ0FjY2VwdCcsICcqLyonKTtcblx0fVxuXG5cdC8vIEJhc2ljIGZldGNoXG5cdGlmICghcGFyc2VkVVJMLnByb3RvY29sIHx8ICFwYXJzZWRVUkwuaG9zdG5hbWUpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPbmx5IGFic29sdXRlIFVSTHMgYXJlIHN1cHBvcnRlZCcpO1xuXHR9XG5cblx0aWYgKCEvXmh0dHBzPzokLy50ZXN0KHBhcnNlZFVSTC5wcm90b2NvbCkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPbmx5IEhUVFAoUykgcHJvdG9jb2xzIGFyZSBzdXBwb3J0ZWQnKTtcblx0fVxuXG5cdGlmIChyZXF1ZXN0LnNpZ25hbCAmJiByZXF1ZXN0LmJvZHkgaW5zdGFuY2VvZiBTdHJlYW0uUmVhZGFibGUgJiYgIXN0cmVhbURlc3RydWN0aW9uU3VwcG9ydGVkKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdDYW5jZWxsYXRpb24gb2Ygc3RyZWFtZWQgcmVxdWVzdHMgd2l0aCBBYm9ydFNpZ25hbCBpcyBub3Qgc3VwcG9ydGVkIGluIG5vZGUgPCA4Jyk7XG5cdH1cblxuXHQvLyBIVFRQLW5ldHdvcmstb3ItY2FjaGUgZmV0Y2ggc3RlcHMgMi40LTIuN1xuXHRsZXQgY29udGVudExlbmd0aFZhbHVlID0gbnVsbDtcblx0aWYgKHJlcXVlc3QuYm9keSA9PSBudWxsICYmIC9eKFBPU1R8UFVUKSQvaS50ZXN0KHJlcXVlc3QubWV0aG9kKSkge1xuXHRcdGNvbnRlbnRMZW5ndGhWYWx1ZSA9ICcwJztcblx0fVxuXHRpZiAocmVxdWVzdC5ib2R5ICE9IG51bGwpIHtcblx0XHRjb25zdCB0b3RhbEJ5dGVzID0gZ2V0VG90YWxCeXRlcyhyZXF1ZXN0KTtcblx0XHRpZiAodHlwZW9mIHRvdGFsQnl0ZXMgPT09ICdudW1iZXInKSB7XG5cdFx0XHRjb250ZW50TGVuZ3RoVmFsdWUgPSBTdHJpbmcodG90YWxCeXRlcyk7XG5cdFx0fVxuXHR9XG5cdGlmIChjb250ZW50TGVuZ3RoVmFsdWUpIHtcblx0XHRoZWFkZXJzLnNldCgnQ29udGVudC1MZW5ndGgnLCBjb250ZW50TGVuZ3RoVmFsdWUpO1xuXHR9XG5cblx0Ly8gSFRUUC1uZXR3b3JrLW9yLWNhY2hlIGZldGNoIHN0ZXAgMi4xMVxuXHRpZiAoIWhlYWRlcnMuaGFzKCdVc2VyLUFnZW50JykpIHtcblx0XHRoZWFkZXJzLnNldCgnVXNlci1BZ2VudCcsICdub2RlLWZldGNoLzEuMCAoK2h0dHBzOi8vZ2l0aHViLmNvbS9iaXRpbm4vbm9kZS1mZXRjaCknKTtcblx0fVxuXG5cdC8vIEhUVFAtbmV0d29yay1vci1jYWNoZSBmZXRjaCBzdGVwIDIuMTVcblx0aWYgKHJlcXVlc3QuY29tcHJlc3MgJiYgIWhlYWRlcnMuaGFzKCdBY2NlcHQtRW5jb2RpbmcnKSkge1xuXHRcdGhlYWRlcnMuc2V0KCdBY2NlcHQtRW5jb2RpbmcnLCAnZ3ppcCxkZWZsYXRlJyk7XG5cdH1cblxuXHRsZXQgYWdlbnQgPSByZXF1ZXN0LmFnZW50O1xuXHRpZiAodHlwZW9mIGFnZW50ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0YWdlbnQgPSBhZ2VudChwYXJzZWRVUkwpO1xuXHR9XG5cblx0aWYgKCFoZWFkZXJzLmhhcygnQ29ubmVjdGlvbicpICYmICFhZ2VudCkge1xuXHRcdGhlYWRlcnMuc2V0KCdDb25uZWN0aW9uJywgJ2Nsb3NlJyk7XG5cdH1cblxuXHQvLyBIVFRQLW5ldHdvcmsgZmV0Y2ggc3RlcCA0LjJcblx0Ly8gY2h1bmtlZCBlbmNvZGluZyBpcyBoYW5kbGVkIGJ5IE5vZGUuanNcblxuXHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkVVJMLCB7XG5cdFx0bWV0aG9kOiByZXF1ZXN0Lm1ldGhvZCxcblx0XHRoZWFkZXJzOiBleHBvcnROb2RlQ29tcGF0aWJsZUhlYWRlcnMoaGVhZGVycyksXG5cdFx0YWdlbnRcblx0fSk7XG59XG5cbi8qKlxuICogYWJvcnQtZXJyb3IuanNcbiAqXG4gKiBBYm9ydEVycm9yIGludGVyZmFjZSBmb3IgY2FuY2VsbGVkIHJlcXVlc3RzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGUgQWJvcnRFcnJvciBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSAgIFN0cmluZyAgICAgIG1lc3NhZ2UgICAgICBFcnJvciBtZXNzYWdlIGZvciBodW1hblxuICogQHJldHVybiAgQWJvcnRFcnJvclxuICovXG5mdW5jdGlvbiBBYm9ydEVycm9yKG1lc3NhZ2UpIHtcbiAgRXJyb3IuY2FsbCh0aGlzLCBtZXNzYWdlKTtcblxuICB0aGlzLnR5cGUgPSAnYWJvcnRlZCc7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG5cbiAgLy8gaGlkZSBjdXN0b20gZXJyb3IgaW1wbGVtZW50YXRpb24gZGV0YWlscyBmcm9tIGVuZC11c2Vyc1xuICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcbn1cblxuQWJvcnRFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG5BYm9ydEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEFib3J0RXJyb3I7XG5BYm9ydEVycm9yLnByb3RvdHlwZS5uYW1lID0gJ0Fib3J0RXJyb3InO1xuXG4vLyBmaXggYW4gaXNzdWUgd2hlcmUgXCJQYXNzVGhyb3VnaFwiLCBcInJlc29sdmVcIiBhcmVuJ3QgYSBuYW1lZCBleHBvcnQgZm9yIG5vZGUgPDEwXG5jb25zdCBQYXNzVGhyb3VnaCQxID0gU3RyZWFtLlBhc3NUaHJvdWdoO1xuY29uc3QgcmVzb2x2ZV91cmwgPSBVcmwucmVzb2x2ZTtcblxuLyoqXG4gKiBGZXRjaCBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSAgIE1peGVkICAgIHVybCAgIEFic29sdXRlIHVybCBvciBSZXF1ZXN0IGluc3RhbmNlXG4gKiBAcGFyYW0gICBPYmplY3QgICBvcHRzICBGZXRjaCBvcHRpb25zXG4gKiBAcmV0dXJuICBQcm9taXNlXG4gKi9cbmZ1bmN0aW9uIGZldGNoKHVybCwgb3B0cykge1xuXG5cdC8vIGFsbG93IGN1c3RvbSBwcm9taXNlXG5cdGlmICghZmV0Y2guUHJvbWlzZSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignbmF0aXZlIHByb21pc2UgbWlzc2luZywgc2V0IGZldGNoLlByb21pc2UgdG8geW91ciBmYXZvcml0ZSBhbHRlcm5hdGl2ZScpO1xuXHR9XG5cblx0Qm9keS5Qcm9taXNlID0gZmV0Y2guUHJvbWlzZTtcblxuXHQvLyB3cmFwIGh0dHAucmVxdWVzdCBpbnRvIGZldGNoXG5cdHJldHVybiBuZXcgZmV0Y2guUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0Ly8gYnVpbGQgcmVxdWVzdCBvYmplY3Rcblx0XHRjb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QodXJsLCBvcHRzKTtcblx0XHRjb25zdCBvcHRpb25zID0gZ2V0Tm9kZVJlcXVlc3RPcHRpb25zKHJlcXVlc3QpO1xuXG5cdFx0Y29uc3Qgc2VuZCA9IChvcHRpb25zLnByb3RvY29sID09PSAnaHR0cHM6JyA/IGh0dHBzIDogaHR0cCkucmVxdWVzdDtcblx0XHRjb25zdCBzaWduYWwgPSByZXF1ZXN0LnNpZ25hbDtcblxuXHRcdGxldCByZXNwb25zZSA9IG51bGw7XG5cblx0XHRjb25zdCBhYm9ydCA9IGZ1bmN0aW9uIGFib3J0KCkge1xuXHRcdFx0bGV0IGVycm9yID0gbmV3IEFib3J0RXJyb3IoJ1RoZSB1c2VyIGFib3J0ZWQgYSByZXF1ZXN0LicpO1xuXHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdGlmIChyZXF1ZXN0LmJvZHkgJiYgcmVxdWVzdC5ib2R5IGluc3RhbmNlb2YgU3RyZWFtLlJlYWRhYmxlKSB7XG5cdFx0XHRcdHJlcXVlc3QuYm9keS5kZXN0cm95KGVycm9yKTtcblx0XHRcdH1cblx0XHRcdGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlLmJvZHkpIHJldHVybjtcblx0XHRcdHJlc3BvbnNlLmJvZHkuZW1pdCgnZXJyb3InLCBlcnJvcik7XG5cdFx0fTtcblxuXHRcdGlmIChzaWduYWwgJiYgc2lnbmFsLmFib3J0ZWQpIHtcblx0XHRcdGFib3J0KCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgYWJvcnRBbmRGaW5hbGl6ZSA9IGZ1bmN0aW9uIGFib3J0QW5kRmluYWxpemUoKSB7XG5cdFx0XHRhYm9ydCgpO1xuXHRcdFx0ZmluYWxpemUoKTtcblx0XHR9O1xuXG5cdFx0Ly8gc2VuZCByZXF1ZXN0XG5cdFx0Y29uc3QgcmVxID0gc2VuZChvcHRpb25zKTtcblx0XHRsZXQgcmVxVGltZW91dDtcblxuXHRcdGlmIChzaWduYWwpIHtcblx0XHRcdHNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIGFib3J0QW5kRmluYWxpemUpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGZpbmFsaXplKCkge1xuXHRcdFx0cmVxLmFib3J0KCk7XG5cdFx0XHRpZiAoc2lnbmFsKSBzaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBhYm9ydEFuZEZpbmFsaXplKTtcblx0XHRcdGNsZWFyVGltZW91dChyZXFUaW1lb3V0KTtcblx0XHR9XG5cblx0XHRpZiAocmVxdWVzdC50aW1lb3V0KSB7XG5cdFx0XHRyZXEub25jZSgnc29ja2V0JywgZnVuY3Rpb24gKHNvY2tldCkge1xuXHRcdFx0XHRyZXFUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0cmVqZWN0KG5ldyBGZXRjaEVycm9yKGBuZXR3b3JrIHRpbWVvdXQgYXQ6ICR7cmVxdWVzdC51cmx9YCwgJ3JlcXVlc3QtdGltZW91dCcpKTtcblx0XHRcdFx0XHRmaW5hbGl6ZSgpO1xuXHRcdFx0XHR9LCByZXF1ZXN0LnRpbWVvdXQpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmVxLm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnIpIHtcblx0XHRcdHJlamVjdChuZXcgRmV0Y2hFcnJvcihgcmVxdWVzdCB0byAke3JlcXVlc3QudXJsfSBmYWlsZWQsIHJlYXNvbjogJHtlcnIubWVzc2FnZX1gLCAnc3lzdGVtJywgZXJyKSk7XG5cdFx0XHRmaW5hbGl6ZSgpO1xuXHRcdH0pO1xuXG5cdFx0cmVxLm9uKCdyZXNwb25zZScsIGZ1bmN0aW9uIChyZXMpIHtcblx0XHRcdGNsZWFyVGltZW91dChyZXFUaW1lb3V0KTtcblxuXHRcdFx0Y29uc3QgaGVhZGVycyA9IGNyZWF0ZUhlYWRlcnNMZW5pZW50KHJlcy5oZWFkZXJzKTtcblxuXHRcdFx0Ly8gSFRUUCBmZXRjaCBzdGVwIDVcblx0XHRcdGlmIChmZXRjaC5pc1JlZGlyZWN0KHJlcy5zdGF0dXNDb2RlKSkge1xuXHRcdFx0XHQvLyBIVFRQIGZldGNoIHN0ZXAgNS4yXG5cdFx0XHRcdGNvbnN0IGxvY2F0aW9uID0gaGVhZGVycy5nZXQoJ0xvY2F0aW9uJyk7XG5cblx0XHRcdFx0Ly8gSFRUUCBmZXRjaCBzdGVwIDUuM1xuXHRcdFx0XHRjb25zdCBsb2NhdGlvblVSTCA9IGxvY2F0aW9uID09PSBudWxsID8gbnVsbCA6IHJlc29sdmVfdXJsKHJlcXVlc3QudXJsLCBsb2NhdGlvbik7XG5cblx0XHRcdFx0Ly8gSFRUUCBmZXRjaCBzdGVwIDUuNVxuXHRcdFx0XHRzd2l0Y2ggKHJlcXVlc3QucmVkaXJlY3QpIHtcblx0XHRcdFx0XHRjYXNlICdlcnJvcic6XG5cdFx0XHRcdFx0XHRyZWplY3QobmV3IEZldGNoRXJyb3IoYHJlZGlyZWN0IG1vZGUgaXMgc2V0IHRvIGVycm9yOiAke3JlcXVlc3QudXJsfWAsICduby1yZWRpcmVjdCcpKTtcblx0XHRcdFx0XHRcdGZpbmFsaXplKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0Y2FzZSAnbWFudWFsJzpcblx0XHRcdFx0XHRcdC8vIG5vZGUtZmV0Y2gtc3BlY2lmaWMgc3RlcDogbWFrZSBtYW51YWwgcmVkaXJlY3QgYSBiaXQgZWFzaWVyIHRvIHVzZSBieSBzZXR0aW5nIHRoZSBMb2NhdGlvbiBoZWFkZXIgdmFsdWUgdG8gdGhlIHJlc29sdmVkIFVSTC5cblx0XHRcdFx0XHRcdGlmIChsb2NhdGlvblVSTCAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHQvLyBoYW5kbGUgY29ycnVwdGVkIGhlYWRlclxuXHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdGhlYWRlcnMuc2V0KCdMb2NhdGlvbicsIGxvY2F0aW9uVVJMKTtcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gaXN0YW5idWwgaWdub3JlIG5leHQ6IG5vZGVqcyBzZXJ2ZXIgcHJldmVudCBpbnZhbGlkIHJlc3BvbnNlIGhlYWRlcnMsIHdlIGNhbid0IHRlc3QgdGhpcyB0aHJvdWdoIG5vcm1hbCByZXF1ZXN0XG5cdFx0XHRcdFx0XHRcdFx0cmVqZWN0KGVycik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ2ZvbGxvdyc6XG5cdFx0XHRcdFx0XHQvLyBIVFRQLXJlZGlyZWN0IGZldGNoIHN0ZXAgMlxuXHRcdFx0XHRcdFx0aWYgKGxvY2F0aW9uVVJMID09PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBIVFRQLXJlZGlyZWN0IGZldGNoIHN0ZXAgNVxuXHRcdFx0XHRcdFx0aWYgKHJlcXVlc3QuY291bnRlciA+PSByZXF1ZXN0LmZvbGxvdykge1xuXHRcdFx0XHRcdFx0XHRyZWplY3QobmV3IEZldGNoRXJyb3IoYG1heGltdW0gcmVkaXJlY3QgcmVhY2hlZCBhdDogJHtyZXF1ZXN0LnVybH1gLCAnbWF4LXJlZGlyZWN0JykpO1xuXHRcdFx0XHRcdFx0XHRmaW5hbGl6ZSgpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIEhUVFAtcmVkaXJlY3QgZmV0Y2ggc3RlcCA2IChjb3VudGVyIGluY3JlbWVudClcblx0XHRcdFx0XHRcdC8vIENyZWF0ZSBhIG5ldyBSZXF1ZXN0IG9iamVjdC5cblx0XHRcdFx0XHRcdGNvbnN0IHJlcXVlc3RPcHRzID0ge1xuXHRcdFx0XHRcdFx0XHRoZWFkZXJzOiBuZXcgSGVhZGVycyhyZXF1ZXN0LmhlYWRlcnMpLFxuXHRcdFx0XHRcdFx0XHRmb2xsb3c6IHJlcXVlc3QuZm9sbG93LFxuXHRcdFx0XHRcdFx0XHRjb3VudGVyOiByZXF1ZXN0LmNvdW50ZXIgKyAxLFxuXHRcdFx0XHRcdFx0XHRhZ2VudDogcmVxdWVzdC5hZ2VudCxcblx0XHRcdFx0XHRcdFx0Y29tcHJlc3M6IHJlcXVlc3QuY29tcHJlc3MsXG5cdFx0XHRcdFx0XHRcdG1ldGhvZDogcmVxdWVzdC5tZXRob2QsXG5cdFx0XHRcdFx0XHRcdGJvZHk6IHJlcXVlc3QuYm9keSxcblx0XHRcdFx0XHRcdFx0c2lnbmFsOiByZXF1ZXN0LnNpZ25hbCxcblx0XHRcdFx0XHRcdFx0dGltZW91dDogcmVxdWVzdC50aW1lb3V0XG5cdFx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0XHQvLyBIVFRQLXJlZGlyZWN0IGZldGNoIHN0ZXAgOVxuXHRcdFx0XHRcdFx0aWYgKHJlcy5zdGF0dXNDb2RlICE9PSAzMDMgJiYgcmVxdWVzdC5ib2R5ICYmIGdldFRvdGFsQnl0ZXMocmVxdWVzdCkgPT09IG51bGwpIHtcblx0XHRcdFx0XHRcdFx0cmVqZWN0KG5ldyBGZXRjaEVycm9yKCdDYW5ub3QgZm9sbG93IHJlZGlyZWN0IHdpdGggYm9keSBiZWluZyBhIHJlYWRhYmxlIHN0cmVhbScsICd1bnN1cHBvcnRlZC1yZWRpcmVjdCcpKTtcblx0XHRcdFx0XHRcdFx0ZmluYWxpemUoKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBIVFRQLXJlZGlyZWN0IGZldGNoIHN0ZXAgMTFcblx0XHRcdFx0XHRcdGlmIChyZXMuc3RhdHVzQ29kZSA9PT0gMzAzIHx8IChyZXMuc3RhdHVzQ29kZSA9PT0gMzAxIHx8IHJlcy5zdGF0dXNDb2RlID09PSAzMDIpICYmIHJlcXVlc3QubWV0aG9kID09PSAnUE9TVCcpIHtcblx0XHRcdFx0XHRcdFx0cmVxdWVzdE9wdHMubWV0aG9kID0gJ0dFVCc7XG5cdFx0XHRcdFx0XHRcdHJlcXVlc3RPcHRzLmJvZHkgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdHJlcXVlc3RPcHRzLmhlYWRlcnMuZGVsZXRlKCdjb250ZW50LWxlbmd0aCcpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBIVFRQLXJlZGlyZWN0IGZldGNoIHN0ZXAgMTVcblx0XHRcdFx0XHRcdHJlc29sdmUoZmV0Y2gobmV3IFJlcXVlc3QobG9jYXRpb25VUkwsIHJlcXVlc3RPcHRzKSkpO1xuXHRcdFx0XHRcdFx0ZmluYWxpemUoKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBwcmVwYXJlIHJlc3BvbnNlXG5cdFx0XHRyZXMub25jZSgnZW5kJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRpZiAoc2lnbmFsKSBzaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBhYm9ydEFuZEZpbmFsaXplKTtcblx0XHRcdH0pO1xuXHRcdFx0bGV0IGJvZHkgPSByZXMucGlwZShuZXcgUGFzc1Rocm91Z2gkMSgpKTtcblxuXHRcdFx0Y29uc3QgcmVzcG9uc2Vfb3B0aW9ucyA9IHtcblx0XHRcdFx0dXJsOiByZXF1ZXN0LnVybCxcblx0XHRcdFx0c3RhdHVzOiByZXMuc3RhdHVzQ29kZSxcblx0XHRcdFx0c3RhdHVzVGV4dDogcmVzLnN0YXR1c01lc3NhZ2UsXG5cdFx0XHRcdGhlYWRlcnM6IGhlYWRlcnMsXG5cdFx0XHRcdHNpemU6IHJlcXVlc3Quc2l6ZSxcblx0XHRcdFx0dGltZW91dDogcmVxdWVzdC50aW1lb3V0LFxuXHRcdFx0XHRjb3VudGVyOiByZXF1ZXN0LmNvdW50ZXJcblx0XHRcdH07XG5cblx0XHRcdC8vIEhUVFAtbmV0d29yayBmZXRjaCBzdGVwIDEyLjEuMS4zXG5cdFx0XHRjb25zdCBjb2RpbmdzID0gaGVhZGVycy5nZXQoJ0NvbnRlbnQtRW5jb2RpbmcnKTtcblxuXHRcdFx0Ly8gSFRUUC1uZXR3b3JrIGZldGNoIHN0ZXAgMTIuMS4xLjQ6IGhhbmRsZSBjb250ZW50IGNvZGluZ3NcblxuXHRcdFx0Ly8gaW4gZm9sbG93aW5nIHNjZW5hcmlvcyB3ZSBpZ25vcmUgY29tcHJlc3Npb24gc3VwcG9ydFxuXHRcdFx0Ly8gMS4gY29tcHJlc3Npb24gc3VwcG9ydCBpcyBkaXNhYmxlZFxuXHRcdFx0Ly8gMi4gSEVBRCByZXF1ZXN0XG5cdFx0XHQvLyAzLiBubyBDb250ZW50LUVuY29kaW5nIGhlYWRlclxuXHRcdFx0Ly8gNC4gbm8gY29udGVudCByZXNwb25zZSAoMjA0KVxuXHRcdFx0Ly8gNS4gY29udGVudCBub3QgbW9kaWZpZWQgcmVzcG9uc2UgKDMwNClcblx0XHRcdGlmICghcmVxdWVzdC5jb21wcmVzcyB8fCByZXF1ZXN0Lm1ldGhvZCA9PT0gJ0hFQUQnIHx8IGNvZGluZ3MgPT09IG51bGwgfHwgcmVzLnN0YXR1c0NvZGUgPT09IDIwNCB8fCByZXMuc3RhdHVzQ29kZSA9PT0gMzA0KSB7XG5cdFx0XHRcdHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKGJvZHksIHJlc3BvbnNlX29wdGlvbnMpO1xuXHRcdFx0XHRyZXNvbHZlKHJlc3BvbnNlKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBGb3IgTm9kZSB2Nitcblx0XHRcdC8vIEJlIGxlc3Mgc3RyaWN0IHdoZW4gZGVjb2RpbmcgY29tcHJlc3NlZCByZXNwb25zZXMsIHNpbmNlIHNvbWV0aW1lc1xuXHRcdFx0Ly8gc2VydmVycyBzZW5kIHNsaWdodGx5IGludmFsaWQgcmVzcG9uc2VzIHRoYXQgYXJlIHN0aWxsIGFjY2VwdGVkXG5cdFx0XHQvLyBieSBjb21tb24gYnJvd3NlcnMuXG5cdFx0XHQvLyBBbHdheXMgdXNpbmcgWl9TWU5DX0ZMVVNIIGlzIHdoYXQgY1VSTCBkb2VzLlxuXHRcdFx0Y29uc3QgemxpYk9wdGlvbnMgPSB7XG5cdFx0XHRcdGZsdXNoOiB6bGliLlpfU1lOQ19GTFVTSCxcblx0XHRcdFx0ZmluaXNoRmx1c2g6IHpsaWIuWl9TWU5DX0ZMVVNIXG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBmb3IgZ3ppcFxuXHRcdFx0aWYgKGNvZGluZ3MgPT0gJ2d6aXAnIHx8IGNvZGluZ3MgPT0gJ3gtZ3ppcCcpIHtcblx0XHRcdFx0Ym9keSA9IGJvZHkucGlwZSh6bGliLmNyZWF0ZUd1bnppcCh6bGliT3B0aW9ucykpO1xuXHRcdFx0XHRyZXNwb25zZSA9IG5ldyBSZXNwb25zZShib2R5LCByZXNwb25zZV9vcHRpb25zKTtcblx0XHRcdFx0cmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gZm9yIGRlZmxhdGVcblx0XHRcdGlmIChjb2RpbmdzID09ICdkZWZsYXRlJyB8fCBjb2RpbmdzID09ICd4LWRlZmxhdGUnKSB7XG5cdFx0XHRcdC8vIGhhbmRsZSB0aGUgaW5mYW1vdXMgcmF3IGRlZmxhdGUgcmVzcG9uc2UgZnJvbSBvbGQgc2VydmVyc1xuXHRcdFx0XHQvLyBhIGhhY2sgZm9yIG9sZCBJSVMgYW5kIEFwYWNoZSBzZXJ2ZXJzXG5cdFx0XHRcdGNvbnN0IHJhdyA9IHJlcy5waXBlKG5ldyBQYXNzVGhyb3VnaCQxKCkpO1xuXHRcdFx0XHRyYXcub25jZSgnZGF0YScsIGZ1bmN0aW9uIChjaHVuaykge1xuXHRcdFx0XHRcdC8vIHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM3NTE5ODI4XG5cdFx0XHRcdFx0aWYgKChjaHVua1swXSAmIDB4MEYpID09PSAweDA4KSB7XG5cdFx0XHRcdFx0XHRib2R5ID0gYm9keS5waXBlKHpsaWIuY3JlYXRlSW5mbGF0ZSgpKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ym9keSA9IGJvZHkucGlwZSh6bGliLmNyZWF0ZUluZmxhdGVSYXcoKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKGJvZHksIHJlc3BvbnNlX29wdGlvbnMpO1xuXHRcdFx0XHRcdHJlc29sdmUocmVzcG9uc2UpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBmb3IgYnJcblx0XHRcdGlmIChjb2RpbmdzID09ICdicicgJiYgdHlwZW9mIHpsaWIuY3JlYXRlQnJvdGxpRGVjb21wcmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRib2R5ID0gYm9keS5waXBlKHpsaWIuY3JlYXRlQnJvdGxpRGVjb21wcmVzcygpKTtcblx0XHRcdFx0cmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UoYm9keSwgcmVzcG9uc2Vfb3B0aW9ucyk7XG5cdFx0XHRcdHJlc29sdmUocmVzcG9uc2UpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIG90aGVyd2lzZSwgdXNlIHJlc3BvbnNlIGFzLWlzXG5cdFx0XHRyZXNwb25zZSA9IG5ldyBSZXNwb25zZShib2R5LCByZXNwb25zZV9vcHRpb25zKTtcblx0XHRcdHJlc29sdmUocmVzcG9uc2UpO1xuXHRcdH0pO1xuXG5cdFx0d3JpdGVUb1N0cmVhbShyZXEsIHJlcXVlc3QpO1xuXHR9KTtcbn1cbi8qKlxuICogUmVkaXJlY3QgY29kZSBtYXRjaGluZ1xuICpcbiAqIEBwYXJhbSAgIE51bWJlciAgIGNvZGUgIFN0YXR1cyBjb2RlXG4gKiBAcmV0dXJuICBCb29sZWFuXG4gKi9cbmZldGNoLmlzUmVkaXJlY3QgPSBmdW5jdGlvbiAoY29kZSkge1xuXHRyZXR1cm4gY29kZSA9PT0gMzAxIHx8IGNvZGUgPT09IDMwMiB8fCBjb2RlID09PSAzMDMgfHwgY29kZSA9PT0gMzA3IHx8IGNvZGUgPT09IDMwODtcbn07XG5cbi8vIGV4cG9zZSBQcm9taXNlXG5mZXRjaC5Qcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG5cbmZ1bmN0aW9uIGdldF9wYWdlX2hhbmRsZXIoXG5cdG1hbmlmZXN0LFxuXHRzZXNzaW9uX2dldHRlclxuKSB7XG5cdGNvbnN0IGdldF9idWlsZF9pbmZvID0gZGV2XG5cdFx0PyAoKSA9PiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhwYXRoLmpvaW4oYnVpbGRfZGlyLCAnYnVpbGQuanNvbicpLCAndXRmLTgnKSlcblx0XHQ6IChhc3NldHMgPT4gKCkgPT4gYXNzZXRzKShKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhwYXRoLmpvaW4oYnVpbGRfZGlyLCAnYnVpbGQuanNvbicpLCAndXRmLTgnKSkpO1xuXG5cdGNvbnN0IHRlbXBsYXRlID0gZGV2XG5cdFx0PyAoKSA9PiByZWFkX3RlbXBsYXRlKHNyY19kaXIpXG5cdFx0OiAoc3RyID0+ICgpID0+IHN0cikocmVhZF90ZW1wbGF0ZShidWlsZF9kaXIpKTtcblxuXHRjb25zdCBoYXNfc2VydmljZV93b3JrZXIgPSBmcy5leGlzdHNTeW5jKHBhdGguam9pbihidWlsZF9kaXIsICdzZXJ2aWNlLXdvcmtlci5qcycpKTtcblxuXHRjb25zdCB7IHNlcnZlcl9yb3V0ZXMsIHBhZ2VzIH0gPSBtYW5pZmVzdDtcblx0Y29uc3QgZXJyb3Jfcm91dGUgPSBtYW5pZmVzdC5lcnJvcjtcblxuXHRmdW5jdGlvbiBiYWlsKHJlcSwgcmVzLCBlcnIpIHtcblx0XHRjb25zb2xlLmVycm9yKGVycik7XG5cblx0XHRjb25zdCBtZXNzYWdlID0gZGV2ID8gZXNjYXBlX2h0bWwoZXJyLm1lc3NhZ2UpIDogJ0ludGVybmFsIHNlcnZlciBlcnJvcic7XG5cblx0XHRyZXMuc3RhdHVzQ29kZSA9IDUwMDtcblx0XHRyZXMuZW5kKGA8cHJlPiR7bWVzc2FnZX08L3ByZT5gKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZV9lcnJvcihyZXEsIHJlcywgc3RhdHVzQ29kZSwgZXJyb3IpIHtcblx0XHRoYW5kbGVfcGFnZSh7XG5cdFx0XHRwYXR0ZXJuOiBudWxsLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0eyBuYW1lOiBudWxsLCBjb21wb25lbnQ6IGVycm9yX3JvdXRlIH1cblx0XHRcdF1cblx0XHR9LCByZXEsIHJlcywgc3RhdHVzQ29kZSwgZXJyb3IgfHwgbmV3IEVycm9yKCdVbmtub3duIGVycm9yIGluIHByZWxvYWQgZnVuY3Rpb24nKSk7XG5cdH1cblxuXHRhc3luYyBmdW5jdGlvbiBoYW5kbGVfcGFnZShwYWdlLCByZXEsIHJlcywgc3RhdHVzID0gMjAwLCBlcnJvciA9IG51bGwpIHtcblx0XHRjb25zdCBpc19zZXJ2aWNlX3dvcmtlcl9pbmRleCA9IHJlcS5wYXRoID09PSAnL3NlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWwnO1xuXHRcdGNvbnN0IGJ1aWxkX2luZm9cblxuXG5cblxuID0gZ2V0X2J1aWxkX2luZm8oKTtcblxuXHRcdHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKTtcblx0XHRyZXMuc2V0SGVhZGVyKCdDYWNoZS1Db250cm9sJywgZGV2ID8gJ25vLWNhY2hlJyA6ICdtYXgtYWdlPTYwMCcpO1xuXG5cdFx0Ly8gcHJlbG9hZCBtYWluLmpzIGFuZCBjdXJyZW50IHJvdXRlXG5cdFx0Ly8gVE9ETyBkZXRlY3Qgb3RoZXIgc3R1ZmYgd2UgY2FuIHByZWxvYWQ/IGltYWdlcywgQ1NTLCBmb250cz9cblx0XHRsZXQgcHJlbG9hZGVkX2NodW5rcyA9IEFycmF5LmlzQXJyYXkoYnVpbGRfaW5mby5hc3NldHMubWFpbikgPyBidWlsZF9pbmZvLmFzc2V0cy5tYWluIDogW2J1aWxkX2luZm8uYXNzZXRzLm1haW5dO1xuXHRcdGlmICghZXJyb3IgJiYgIWlzX3NlcnZpY2Vfd29ya2VyX2luZGV4KSB7XG5cdFx0XHRwYWdlLnBhcnRzLmZvckVhY2gocGFydCA9PiB7XG5cdFx0XHRcdGlmICghcGFydCkgcmV0dXJuO1xuXG5cdFx0XHRcdC8vIHVzaW5nIGNvbmNhdCBiZWNhdXNlIGl0IGNvdWxkIGJlIGEgc3RyaW5nIG9yIGFuIGFycmF5LiB0aGFua3Mgd2VicGFjayFcblx0XHRcdFx0cHJlbG9hZGVkX2NodW5rcyA9IHByZWxvYWRlZF9jaHVua3MuY29uY2F0KGJ1aWxkX2luZm8uYXNzZXRzW3BhcnQubmFtZV0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKGJ1aWxkX2luZm8uYnVuZGxlciA9PT0gJ3JvbGx1cCcpIHtcblx0XHRcdC8vIFRPRE8gYWRkIGRlcGVuZGVuY2llcyBhbmQgQ1NTXG5cdFx0XHRjb25zdCBsaW5rID0gcHJlbG9hZGVkX2NodW5rc1xuXHRcdFx0XHQuZmlsdGVyKGZpbGUgPT4gZmlsZSAmJiAhZmlsZS5tYXRjaCgvXFwubWFwJC8pKVxuXHRcdFx0XHQubWFwKGZpbGUgPT4gYDwke3JlcS5iYXNlVXJsfS9jbGllbnQvJHtmaWxlfT47cmVsPVwibW9kdWxlcHJlbG9hZFwiYClcblx0XHRcdFx0LmpvaW4oJywgJyk7XG5cblx0XHRcdHJlcy5zZXRIZWFkZXIoJ0xpbmsnLCBsaW5rKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgbGluayA9IHByZWxvYWRlZF9jaHVua3Ncblx0XHRcdFx0LmZpbHRlcihmaWxlID0+IGZpbGUgJiYgIWZpbGUubWF0Y2goL1xcLm1hcCQvKSlcblx0XHRcdFx0Lm1hcCgoZmlsZSkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGFzID0gL1xcLmNzcyQvLnRlc3QoZmlsZSkgPyAnc3R5bGUnIDogJ3NjcmlwdCc7XG5cdFx0XHRcdFx0cmV0dXJuIGA8JHtyZXEuYmFzZVVybH0vY2xpZW50LyR7ZmlsZX0+O3JlbD1cInByZWxvYWRcIjthcz1cIiR7YXN9XCJgO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuam9pbignLCAnKTtcblxuXHRcdFx0cmVzLnNldEhlYWRlcignTGluaycsIGxpbmspO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNlc3Npb24gPSBzZXNzaW9uX2dldHRlcihyZXEsIHJlcyk7XG5cblx0XHRsZXQgcmVkaXJlY3Q7XG5cdFx0bGV0IHByZWxvYWRfZXJyb3I7XG5cblx0XHRjb25zdCBwcmVsb2FkX2NvbnRleHQgPSB7XG5cdFx0XHRyZWRpcmVjdDogKHN0YXR1c0NvZGUsIGxvY2F0aW9uKSA9PiB7XG5cdFx0XHRcdGlmIChyZWRpcmVjdCAmJiAocmVkaXJlY3Quc3RhdHVzQ29kZSAhPT0gc3RhdHVzQ29kZSB8fCByZWRpcmVjdC5sb2NhdGlvbiAhPT0gbG9jYXRpb24pKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBDb25mbGljdGluZyByZWRpcmVjdHNgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsb2NhdGlvbiA9IGxvY2F0aW9uLnJlcGxhY2UoL15cXC8vZywgJycpOyAvLyBsZWFkaW5nIHNsYXNoIChvbmx5KVxuXHRcdFx0XHRyZWRpcmVjdCA9IHsgc3RhdHVzQ29kZSwgbG9jYXRpb24gfTtcblx0XHRcdH0sXG5cdFx0XHRlcnJvcjogKHN0YXR1c0NvZGUsIG1lc3NhZ2UpID0+IHtcblx0XHRcdFx0cHJlbG9hZF9lcnJvciA9IHsgc3RhdHVzQ29kZSwgbWVzc2FnZSB9O1xuXHRcdFx0fSxcblx0XHRcdGZldGNoOiAodXJsLCBvcHRzKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHBhcnNlZCA9IG5ldyBVcmwuVVJMKHVybCwgYGh0dHA6Ly8xMjcuMC4wLjE6JHtwcm9jZXNzLmVudi5QT1JUfSR7cmVxLmJhc2VVcmwgPyByZXEuYmFzZVVybCArICcvJyA6Jyd9YCk7XG5cblx0XHRcdFx0aWYgKG9wdHMpIHtcblx0XHRcdFx0XHRvcHRzID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0cyk7XG5cblx0XHRcdFx0XHRjb25zdCBpbmNsdWRlX2Nvb2tpZXMgPSAoXG5cdFx0XHRcdFx0XHRvcHRzLmNyZWRlbnRpYWxzID09PSAnaW5jbHVkZScgfHxcblx0XHRcdFx0XHRcdG9wdHMuY3JlZGVudGlhbHMgPT09ICdzYW1lLW9yaWdpbicgJiYgcGFyc2VkLm9yaWdpbiA9PT0gYGh0dHA6Ly8xMjcuMC4wLjE6JHtwcm9jZXNzLmVudi5QT1JUfWBcblx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0aWYgKGluY2x1ZGVfY29va2llcykge1xuXHRcdFx0XHRcdFx0b3B0cy5oZWFkZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0cy5oZWFkZXJzKTtcblxuXHRcdFx0XHRcdFx0Y29uc3QgY29va2llcyA9IE9iamVjdC5hc3NpZ24oXG5cdFx0XHRcdFx0XHRcdHt9LFxuXHRcdFx0XHRcdFx0XHRjb29raWUucGFyc2UocmVxLmhlYWRlcnMuY29va2llIHx8ICcnKSxcblx0XHRcdFx0XHRcdFx0Y29va2llLnBhcnNlKG9wdHMuaGVhZGVycy5jb29raWUgfHwgJycpXG5cdFx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0XHRjb25zdCBzZXRfY29va2llID0gcmVzLmdldEhlYWRlcignU2V0LUNvb2tpZScpO1xuXHRcdFx0XHRcdFx0KEFycmF5LmlzQXJyYXkoc2V0X2Nvb2tpZSkgPyBzZXRfY29va2llIDogW3NldF9jb29raWVdKS5mb3JFYWNoKHN0ciA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IG1hdGNoID0gLyhbXj1dKyk9KFteO10rKS8uZXhlYyhzdHIpO1xuXHRcdFx0XHRcdFx0XHRpZiAobWF0Y2gpIGNvb2tpZXNbbWF0Y2hbMV1dID0gbWF0Y2hbMl07XG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0Y29uc3Qgc3RyID0gT2JqZWN0LmtleXMoY29va2llcylcblx0XHRcdFx0XHRcdFx0Lm1hcChrZXkgPT4gYCR7a2V5fT0ke2Nvb2tpZXNba2V5XX1gKVxuXHRcdFx0XHRcdFx0XHQuam9pbignOyAnKTtcblxuXHRcdFx0XHRcdFx0b3B0cy5oZWFkZXJzLmNvb2tpZSA9IHN0cjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gZmV0Y2gocGFyc2VkLmhyZWYsIG9wdHMpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRsZXQgcHJlbG9hZGVkO1xuXHRcdGxldCBtYXRjaDtcblx0XHRsZXQgcGFyYW1zO1xuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJvb3RfcHJlbG9hZGVkID0gbWFuaWZlc3Qucm9vdF9wcmVsb2FkXG5cdFx0XHRcdD8gbWFuaWZlc3Qucm9vdF9wcmVsb2FkLmNhbGwocHJlbG9hZF9jb250ZXh0LCB7XG5cdFx0XHRcdFx0aG9zdDogcmVxLmhlYWRlcnMuaG9zdCxcblx0XHRcdFx0XHRwYXRoOiByZXEucGF0aCxcblx0XHRcdFx0XHRxdWVyeTogcmVxLnF1ZXJ5LFxuXHRcdFx0XHRcdHBhcmFtczoge31cblx0XHRcdFx0fSwgc2Vzc2lvbilcblx0XHRcdFx0OiB7fTtcblxuXHRcdFx0bWF0Y2ggPSBlcnJvciA/IG51bGwgOiBwYWdlLnBhdHRlcm4uZXhlYyhyZXEucGF0aCk7XG5cblxuXHRcdFx0bGV0IHRvUHJlbG9hZCA9IFtyb290X3ByZWxvYWRlZF07XG5cdFx0XHRpZiAoIWlzX3NlcnZpY2Vfd29ya2VyX2luZGV4KSB7XG5cdFx0XHRcdHRvUHJlbG9hZCA9IHRvUHJlbG9hZC5jb25jYXQocGFnZS5wYXJ0cy5tYXAocGFydCA9PiB7XG5cdFx0XHRcdFx0aWYgKCFwYXJ0KSByZXR1cm4gbnVsbDtcblxuXHRcdFx0XHRcdC8vIHRoZSBkZWVwZXN0IGxldmVsIGlzIHVzZWQgYmVsb3csIHRvIGluaXRpYWxpc2UgdGhlIHN0b3JlXG5cdFx0XHRcdFx0cGFyYW1zID0gcGFydC5wYXJhbXMgPyBwYXJ0LnBhcmFtcyhtYXRjaCkgOiB7fTtcblxuXHRcdFx0XHRcdHJldHVybiBwYXJ0LnByZWxvYWRcblx0XHRcdFx0XHRcdD8gcGFydC5wcmVsb2FkLmNhbGwocHJlbG9hZF9jb250ZXh0LCB7XG5cdFx0XHRcdFx0XHRcdGhvc3Q6IHJlcS5oZWFkZXJzLmhvc3QsXG5cdFx0XHRcdFx0XHRcdHBhdGg6IHJlcS5wYXRoLFxuXHRcdFx0XHRcdFx0XHRxdWVyeTogcmVxLnF1ZXJ5LFxuXHRcdFx0XHRcdFx0XHRwYXJhbXNcblx0XHRcdFx0XHRcdH0sIHNlc3Npb24pXG5cdFx0XHRcdFx0XHQ6IHt9O1xuXHRcdFx0XHR9KSk7XG5cdFx0XHR9XG5cblx0XHRcdHByZWxvYWRlZCA9IGF3YWl0IFByb21pc2UuYWxsKHRvUHJlbG9hZCk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0cmV0dXJuIGJhaWwocmVxLCByZXMsIGVycilcblx0XHRcdH1cblxuXHRcdFx0cHJlbG9hZF9lcnJvciA9IHsgc3RhdHVzQ29kZTogNTAwLCBtZXNzYWdlOiBlcnIgfTtcblx0XHRcdHByZWxvYWRlZCA9IFtdOyAvLyBhcHBlYXNlIFR5cGVTY3JpcHRcblx0XHR9XG5cblx0XHR0cnkge1xuXHRcdFx0aWYgKHJlZGlyZWN0KSB7XG5cdFx0XHRcdGNvbnN0IGxvY2F0aW9uID0gVXJsLnJlc29sdmUoKHJlcS5iYXNlVXJsIHx8ICcnKSArICcvJywgcmVkaXJlY3QubG9jYXRpb24pO1xuXG5cdFx0XHRcdHJlcy5zdGF0dXNDb2RlID0gcmVkaXJlY3Quc3RhdHVzQ29kZTtcblx0XHRcdFx0cmVzLnNldEhlYWRlcignTG9jYXRpb24nLCBsb2NhdGlvbik7XG5cdFx0XHRcdHJlcy5lbmQoKTtcblxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmIChwcmVsb2FkX2Vycm9yKSB7XG5cdFx0XHRcdGhhbmRsZV9lcnJvcihyZXEsIHJlcywgcHJlbG9hZF9lcnJvci5zdGF0dXNDb2RlLCBwcmVsb2FkX2Vycm9yLm1lc3NhZ2UpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHNlZ21lbnRzID0gcmVxLnBhdGguc3BsaXQoJy8nKS5maWx0ZXIoQm9vbGVhbik7XG5cblx0XHRcdC8vIFRPRE8gbWFrZSB0aGlzIGxlc3MgY29uZnVzaW5nXG5cdFx0XHRjb25zdCBsYXlvdXRfc2VnbWVudHMgPSBbc2VnbWVudHNbMF1dO1xuXHRcdFx0bGV0IGwgPSAxO1xuXG5cdFx0XHRwYWdlLnBhcnRzLmZvckVhY2goKHBhcnQsIGkpID0+IHtcblx0XHRcdFx0bGF5b3V0X3NlZ21lbnRzW2xdID0gc2VnbWVudHNbaSArIDFdO1xuXHRcdFx0XHRpZiAoIXBhcnQpIHJldHVybiBudWxsO1xuXHRcdFx0XHRsKys7XG5cdFx0XHR9KTtcblxuXHRcdFx0Y29uc3QgcHJvcHMgPSB7XG5cdFx0XHRcdHN0b3Jlczoge1xuXHRcdFx0XHRcdHBhZ2U6IHtcblx0XHRcdFx0XHRcdHN1YnNjcmliZTogd3JpdGFibGUoe1xuXHRcdFx0XHRcdFx0XHRob3N0OiByZXEuaGVhZGVycy5ob3N0LFxuXHRcdFx0XHRcdFx0XHRwYXRoOiByZXEucGF0aCxcblx0XHRcdFx0XHRcdFx0cXVlcnk6IHJlcS5xdWVyeSxcblx0XHRcdFx0XHRcdFx0cGFyYW1zXG5cdFx0XHRcdFx0XHR9KS5zdWJzY3JpYmVcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHByZWxvYWRpbmc6IHtcblx0XHRcdFx0XHRcdHN1YnNjcmliZTogd3JpdGFibGUobnVsbCkuc3Vic2NyaWJlXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzZXNzaW9uOiB3cml0YWJsZShzZXNzaW9uKVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzZWdtZW50czogbGF5b3V0X3NlZ21lbnRzLFxuXHRcdFx0XHRzdGF0dXM6IGVycm9yID8gc3RhdHVzIDogMjAwLFxuXHRcdFx0XHRlcnJvcjogZXJyb3IgPyBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IgOiB7IG1lc3NhZ2U6IGVycm9yIH0gOiBudWxsLFxuXHRcdFx0XHRsZXZlbDA6IHtcblx0XHRcdFx0XHRwcm9wczogcHJlbG9hZGVkWzBdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGxldmVsMToge1xuXHRcdFx0XHRcdHNlZ21lbnQ6IHNlZ21lbnRzWzBdLFxuXHRcdFx0XHRcdHByb3BzOiB7fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAoIWlzX3NlcnZpY2Vfd29ya2VyX2luZGV4KSB7XG5cdFx0XHRcdGxldCBsID0gMTtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwYWdlLnBhcnRzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRcdFx0Y29uc3QgcGFydCA9IHBhZ2UucGFydHNbaV07XG5cdFx0XHRcdFx0aWYgKCFwYXJ0KSBjb250aW51ZTtcblxuXHRcdFx0XHRcdHByb3BzW2BsZXZlbCR7bCsrfWBdID0ge1xuXHRcdFx0XHRcdFx0Y29tcG9uZW50OiBwYXJ0LmNvbXBvbmVudCxcblx0XHRcdFx0XHRcdHByb3BzOiBwcmVsb2FkZWRbaSArIDFdIHx8IHt9LFxuXHRcdFx0XHRcdFx0c2VnbWVudDogc2VnbWVudHNbaV1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHsgaHRtbCwgaGVhZCwgY3NzIH0gPSBBcHAucmVuZGVyKHByb3BzKTtcblxuXHRcdFx0Y29uc3Qgc2VyaWFsaXplZCA9IHtcblx0XHRcdFx0cHJlbG9hZGVkOiBgWyR7cHJlbG9hZGVkLm1hcChkYXRhID0+IHRyeV9zZXJpYWxpemUoZGF0YSkpLmpvaW4oJywnKX1dYCxcblx0XHRcdFx0c2Vzc2lvbjogc2Vzc2lvbiAmJiB0cnlfc2VyaWFsaXplKHNlc3Npb24sIGVyciA9PiB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gc2VyaWFsaXplIHNlc3Npb24gZGF0YTogJHtlcnIubWVzc2FnZX1gKTtcblx0XHRcdFx0fSksXG5cdFx0XHRcdGVycm9yOiBlcnJvciAmJiB0cnlfc2VyaWFsaXplKHByb3BzLmVycm9yKVxuXHRcdFx0fTtcblxuXHRcdFx0bGV0IHNjcmlwdCA9IGBfX1NBUFBFUl9fPXske1tcblx0XHRcdFx0ZXJyb3IgJiYgYGVycm9yOiR7c2VyaWFsaXplZC5lcnJvcn0sc3RhdHVzOiR7c3RhdHVzfWAsXG5cdFx0XHRcdGBiYXNlVXJsOlwiJHtyZXEuYmFzZVVybH1cImAsXG5cdFx0XHRcdHNlcmlhbGl6ZWQucHJlbG9hZGVkICYmIGBwcmVsb2FkZWQ6JHtzZXJpYWxpemVkLnByZWxvYWRlZH1gLFxuXHRcdFx0XHRzZXJpYWxpemVkLnNlc3Npb24gJiYgYHNlc3Npb246JHtzZXJpYWxpemVkLnNlc3Npb259YFxuXHRcdFx0XS5maWx0ZXIoQm9vbGVhbikuam9pbignLCcpfX07YDtcblxuXHRcdFx0aWYgKGhhc19zZXJ2aWNlX3dvcmtlcikge1xuXHRcdFx0XHRzY3JpcHQgKz0gYGlmKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJyR7cmVxLmJhc2VVcmx9L3NlcnZpY2Utd29ya2VyLmpzJyk7YDtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZmlsZSA9IFtdLmNvbmNhdChidWlsZF9pbmZvLmFzc2V0cy5tYWluKS5maWx0ZXIoZmlsZSA9PiBmaWxlICYmIC9cXC5qcyQvLnRlc3QoZmlsZSkpWzBdO1xuXHRcdFx0Y29uc3QgbWFpbiA9IGAke3JlcS5iYXNlVXJsfS9jbGllbnQvJHtmaWxlfWA7XG5cblx0XHRcdGlmIChidWlsZF9pbmZvLmJ1bmRsZXIgPT09ICdyb2xsdXAnKSB7XG5cdFx0XHRcdGlmIChidWlsZF9pbmZvLmxlZ2FjeV9hc3NldHMpIHtcblx0XHRcdFx0XHRjb25zdCBsZWdhY3lfbWFpbiA9IGAke3JlcS5iYXNlVXJsfS9jbGllbnQvbGVnYWN5LyR7YnVpbGRfaW5mby5sZWdhY3lfYXNzZXRzLm1haW59YDtcblx0XHRcdFx0XHRzY3JpcHQgKz0gYChmdW5jdGlvbigpe3RyeXtldmFsKFwiYXN5bmMgZnVuY3Rpb24geCgpe31cIik7dmFyIG1haW49XCIke21haW59XCJ9Y2F0Y2goZSl7bWFpbj1cIiR7bGVnYWN5X21haW59XCJ9O3ZhciBzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7dHJ5e25ldyBGdW5jdGlvbihcImlmKDApaW1wb3J0KCcnKVwiKSgpO3Muc3JjPW1haW47cy50eXBlPVwibW9kdWxlXCI7cy5jcm9zc09yaWdpbj1cInVzZS1jcmVkZW50aWFsc1wiO31jYXRjaChlKXtzLnNyYz1cIiR7cmVxLmJhc2VVcmx9L2NsaWVudC9zaGltcG9ydEAke2J1aWxkX2luZm8uc2hpbXBvcnR9LmpzXCI7cy5zZXRBdHRyaWJ1dGUoXCJkYXRhLW1haW5cIixtYWluKTt9ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzKTt9KCkpO2A7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c2NyaXB0ICs9IGB2YXIgcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3RyeXtuZXcgRnVuY3Rpb24oXCJpZigwKWltcG9ydCgnJylcIikoKTtzLnNyYz1cIiR7bWFpbn1cIjtzLnR5cGU9XCJtb2R1bGVcIjtzLmNyb3NzT3JpZ2luPVwidXNlLWNyZWRlbnRpYWxzXCI7fWNhdGNoKGUpe3Muc3JjPVwiJHtyZXEuYmFzZVVybH0vY2xpZW50L3NoaW1wb3J0QCR7YnVpbGRfaW5mby5zaGltcG9ydH0uanNcIjtzLnNldEF0dHJpYnV0ZShcImRhdGEtbWFpblwiLFwiJHttYWlufVwiKX1kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHMpYDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2NyaXB0ICs9IGA8L3NjcmlwdD48c2NyaXB0IHNyYz1cIiR7bWFpbn1cIj5gO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgc3R5bGVzO1xuXG5cdFx0XHQvLyBUT0RPIG1ha2UgdGhpcyBjb25zaXN0ZW50IGFjcm9zcyBhcHBzXG5cdFx0XHQvLyBUT0RPIGVtYmVkIGJ1aWxkX2luZm8gaW4gcGxhY2Vob2xkZXIudHNcblx0XHRcdGlmIChidWlsZF9pbmZvLmNzcyAmJiBidWlsZF9pbmZvLmNzcy5tYWluKSB7XG5cdFx0XHRcdGNvbnN0IGNzc19jaHVua3MgPSBuZXcgU2V0KCk7XG5cdFx0XHRcdGlmIChidWlsZF9pbmZvLmNzcy5tYWluKSBjc3NfY2h1bmtzLmFkZChidWlsZF9pbmZvLmNzcy5tYWluKTtcblx0XHRcdFx0cGFnZS5wYXJ0cy5mb3JFYWNoKHBhcnQgPT4ge1xuXHRcdFx0XHRcdGlmICghcGFydCkgcmV0dXJuO1xuXHRcdFx0XHRcdGNvbnN0IGNzc19jaHVua3NfZm9yX3BhcnQgPSBidWlsZF9pbmZvLmNzcy5jaHVua3NbcGFydC5maWxlXTtcblxuXHRcdFx0XHRcdGlmIChjc3NfY2h1bmtzX2Zvcl9wYXJ0KSB7XG5cdFx0XHRcdFx0XHRjc3NfY2h1bmtzX2Zvcl9wYXJ0LmZvckVhY2goZmlsZSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNzc19jaHVua3MuYWRkKGZpbGUpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRzdHlsZXMgPSBBcnJheS5mcm9tKGNzc19jaHVua3MpXG5cdFx0XHRcdFx0Lm1hcChocmVmID0+IGA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImNsaWVudC8ke2hyZWZ9XCI+YClcblx0XHRcdFx0XHQuam9pbignJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzdHlsZXMgPSAoY3NzICYmIGNzcy5jb2RlID8gYDxzdHlsZT4ke2Nzcy5jb2RlfTwvc3R5bGU+YCA6ICcnKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gdXNlcnMgY2FuIHNldCBhIENTUCBub25jZSB1c2luZyByZXMubG9jYWxzLm5vbmNlXG5cdFx0XHRjb25zdCBub25jZV9hdHRyID0gKHJlcy5sb2NhbHMgJiYgcmVzLmxvY2Fscy5ub25jZSkgPyBgIG5vbmNlPVwiJHtyZXMubG9jYWxzLm5vbmNlfVwiYCA6ICcnO1xuXG5cdFx0XHRjb25zdCBib2R5ID0gdGVtcGxhdGUoKVxuXHRcdFx0XHQucmVwbGFjZSgnJXNhcHBlci5iYXNlJScsICgpID0+IGA8YmFzZSBocmVmPVwiJHtyZXEuYmFzZVVybH0vXCI+YClcblx0XHRcdFx0LnJlcGxhY2UoJyVzYXBwZXIuc2NyaXB0cyUnLCAoKSA9PiBgPHNjcmlwdCR7bm9uY2VfYXR0cn0+JHtzY3JpcHR9PC9zY3JpcHQ+YClcblx0XHRcdFx0LnJlcGxhY2UoJyVzYXBwZXIuaHRtbCUnLCAoKSA9PiBodG1sKVxuXHRcdFx0XHQucmVwbGFjZSgnJXNhcHBlci5oZWFkJScsICgpID0+IGA8bm9zY3JpcHQgaWQ9J3NhcHBlci1oZWFkLXN0YXJ0Jz48L25vc2NyaXB0PiR7aGVhZH08bm9zY3JpcHQgaWQ9J3NhcHBlci1oZWFkLWVuZCc+PC9ub3NjcmlwdD5gKVxuXHRcdFx0XHQucmVwbGFjZSgnJXNhcHBlci5zdHlsZXMlJywgKCkgPT4gc3R5bGVzKTtcblxuXHRcdFx0cmVzLnN0YXR1c0NvZGUgPSBzdGF0dXM7XG5cdFx0XHRyZXMuZW5kKGJvZHkpO1xuXHRcdH0gY2F0Y2goZXJyKSB7XG5cdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0YmFpbChyZXEsIHJlcywgZXJyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGhhbmRsZV9lcnJvcihyZXEsIHJlcywgNTAwLCBlcnIpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmdW5jdGlvbiBmaW5kX3JvdXRlKHJlcSwgcmVzLCBuZXh0KSB7XG5cdFx0aWYgKHJlcS5wYXRoID09PSAnL3NlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWwnKSB7XG5cdFx0XHRjb25zdCBob21lUGFnZSA9IHBhZ2VzLmZpbmQocGFnZSA9PiBwYWdlLnBhdHRlcm4udGVzdCgnLycpKTtcblx0XHRcdGhhbmRsZV9wYWdlKGhvbWVQYWdlLCByZXEsIHJlcyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBwYWdlIG9mIHBhZ2VzKSB7XG5cdFx0XHRpZiAocGFnZS5wYXR0ZXJuLnRlc3QocmVxLnBhdGgpKSB7XG5cdFx0XHRcdGhhbmRsZV9wYWdlKHBhZ2UsIHJlcSwgcmVzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGhhbmRsZV9lcnJvcihyZXEsIHJlcywgNDA0LCAnTm90IGZvdW5kJyk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIHJlYWRfdGVtcGxhdGUoZGlyID0gYnVpbGRfZGlyKSB7XG5cdHJldHVybiBmcy5yZWFkRmlsZVN5bmMoYCR7ZGlyfS90ZW1wbGF0ZS5odG1sYCwgJ3V0Zi04Jyk7XG59XG5cbmZ1bmN0aW9uIHRyeV9zZXJpYWxpemUoZGF0YSwgZmFpbCkge1xuXHR0cnkge1xuXHRcdHJldHVybiBkZXZhbHVlKGRhdGEpO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHRpZiAoZmFpbCkgZmFpbChlcnIpO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGVzY2FwZV9odG1sKGh0bWwpIHtcblx0Y29uc3QgY2hhcnMgPSB7XG5cdFx0J1wiJyA6ICdxdW90Jyxcblx0XHRcIidcIjogJyMzOScsXG5cdFx0JyYnOiAnYW1wJyxcblx0XHQnPCcgOiAnbHQnLFxuXHRcdCc+JyA6ICdndCdcblx0fTtcblxuXHRyZXR1cm4gaHRtbC5yZXBsYWNlKC9bXCInJjw+XS9nLCBjID0+IGAmJHtjaGFyc1tjXX07YCk7XG59XG5cbmZ1bmN0aW9uIG1pZGRsZXdhcmUob3B0c1xuXG5cbiA9IHt9KSB7XG5cdGNvbnN0IHsgc2Vzc2lvbiwgaWdub3JlIH0gPSBvcHRzO1xuXG5cdGxldCBlbWl0dGVkX2Jhc2VwYXRoID0gZmFsc2U7XG5cblx0cmV0dXJuIGNvbXBvc2VfaGFuZGxlcnMoaWdub3JlLCBbXG5cdFx0KHJlcSwgcmVzLCBuZXh0KSA9PiB7XG5cdFx0XHRpZiAocmVxLmJhc2VVcmwgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRsZXQgeyBvcmlnaW5hbFVybCB9ID0gcmVxO1xuXHRcdFx0XHRpZiAocmVxLnVybCA9PT0gJy8nICYmIG9yaWdpbmFsVXJsW29yaWdpbmFsVXJsLmxlbmd0aCAtIDFdICE9PSAnLycpIHtcblx0XHRcdFx0XHRvcmlnaW5hbFVybCArPSAnLyc7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXEuYmFzZVVybCA9IG9yaWdpbmFsVXJsXG5cdFx0XHRcdFx0PyBvcmlnaW5hbFVybC5zbGljZSgwLCAtcmVxLnVybC5sZW5ndGgpXG5cdFx0XHRcdFx0OiAnJztcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFlbWl0dGVkX2Jhc2VwYXRoICYmIHByb2Nlc3Muc2VuZCkge1xuXHRcdFx0XHRwcm9jZXNzLnNlbmQoe1xuXHRcdFx0XHRcdF9fc2FwcGVyX186IHRydWUsXG5cdFx0XHRcdFx0ZXZlbnQ6ICdiYXNlcGF0aCcsXG5cdFx0XHRcdFx0YmFzZXBhdGg6IHJlcS5iYXNlVXJsXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGVtaXR0ZWRfYmFzZXBhdGggPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAocmVxLnBhdGggPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRyZXEucGF0aCA9IHJlcS51cmwucmVwbGFjZSgvXFw/LiovLCAnJyk7XG5cdFx0XHR9XG5cblx0XHRcdG5leHQoKTtcblx0XHR9LFxuXG5cdFx0ZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4oYnVpbGRfZGlyLCAnc2VydmljZS13b3JrZXIuanMnKSkgJiYgc2VydmUoe1xuXHRcdFx0cGF0aG5hbWU6ICcvc2VydmljZS13b3JrZXIuanMnLFxuXHRcdFx0Y2FjaGVfY29udHJvbDogJ25vLWNhY2hlLCBuby1zdG9yZSwgbXVzdC1yZXZhbGlkYXRlJ1xuXHRcdH0pLFxuXG5cdFx0ZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4oYnVpbGRfZGlyLCAnc2VydmljZS13b3JrZXIuanMubWFwJykpICYmIHNlcnZlKHtcblx0XHRcdHBhdGhuYW1lOiAnL3NlcnZpY2Utd29ya2VyLmpzLm1hcCcsXG5cdFx0XHRjYWNoZV9jb250cm9sOiAnbm8tY2FjaGUsIG5vLXN0b3JlLCBtdXN0LXJldmFsaWRhdGUnXG5cdFx0fSksXG5cblx0XHRzZXJ2ZSh7XG5cdFx0XHRwcmVmaXg6ICcvY2xpZW50LycsXG5cdFx0XHRjYWNoZV9jb250cm9sOiBkZXYgPyAnbm8tY2FjaGUnIDogJ21heC1hZ2U9MzE1MzYwMDAsIGltbXV0YWJsZSdcblx0XHR9KSxcblxuXHRcdGdldF9zZXJ2ZXJfcm91dGVfaGFuZGxlcihtYW5pZmVzdC5zZXJ2ZXJfcm91dGVzKSxcblxuXHRcdGdldF9wYWdlX2hhbmRsZXIobWFuaWZlc3QsIHNlc3Npb24gfHwgbm9vcClcblx0XS5maWx0ZXIoQm9vbGVhbikpO1xufVxuXG5mdW5jdGlvbiBjb21wb3NlX2hhbmRsZXJzKGlnbm9yZSwgaGFuZGxlcnMpIHtcblx0Y29uc3QgdG90YWwgPSBoYW5kbGVycy5sZW5ndGg7XG5cblx0ZnVuY3Rpb24gbnRoX2hhbmRsZXIobiwgcmVxLCByZXMsIG5leHQpIHtcblx0XHRpZiAobiA+PSB0b3RhbCkge1xuXHRcdFx0cmV0dXJuIG5leHQoKTtcblx0XHR9XG5cblx0XHRoYW5kbGVyc1tuXShyZXEsIHJlcywgKCkgPT4gbnRoX2hhbmRsZXIobisxLCByZXEsIHJlcywgbmV4dCkpO1xuXHR9XG5cblx0cmV0dXJuICFpZ25vcmVcblx0XHQ/IChyZXEsIHJlcywgbmV4dCkgPT4gbnRoX2hhbmRsZXIoMCwgcmVxLCByZXMsIG5leHQpXG5cdFx0OiAocmVxLCByZXMsIG5leHQpID0+IHtcblx0XHRcdGlmIChzaG91bGRfaWdub3JlKHJlcS5wYXRoLCBpZ25vcmUpKSB7XG5cdFx0XHRcdG5leHQoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG50aF9oYW5kbGVyKDAsIHJlcSwgcmVzLCBuZXh0KTtcblx0XHRcdH1cblx0XHR9O1xufVxuXG5mdW5jdGlvbiBzaG91bGRfaWdub3JlKHVyaSwgdmFsKSB7XG5cdGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHJldHVybiB2YWwuc29tZSh4ID0+IHNob3VsZF9pZ25vcmUodXJpLCB4KSk7XG5cdGlmICh2YWwgaW5zdGFuY2VvZiBSZWdFeHApIHJldHVybiB2YWwudGVzdCh1cmkpO1xuXHRpZiAodHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHZhbCh1cmkpO1xuXHRyZXR1cm4gdXJpLnN0YXJ0c1dpdGgodmFsLmNoYXJDb2RlQXQoMCkgPT09IDQ3ID8gdmFsIDogYC8ke3ZhbH1gKTtcbn1cblxuZnVuY3Rpb24gc2VydmUoeyBwcmVmaXgsIHBhdGhuYW1lLCBjYWNoZV9jb250cm9sIH1cblxuXG5cbikge1xuXHRjb25zdCBmaWx0ZXIgPSBwYXRobmFtZVxuXHRcdD8gKHJlcSkgPT4gcmVxLnBhdGggPT09IHBhdGhuYW1lXG5cdFx0OiAocmVxKSA9PiByZXEucGF0aC5zdGFydHNXaXRoKHByZWZpeCk7XG5cblx0Y29uc3QgY2FjaGUgPSBuZXcgTWFwKCk7XG5cblx0Y29uc3QgcmVhZCA9IGRldlxuXHRcdD8gKGZpbGUpID0+IGZzLnJlYWRGaWxlU3luYyhwYXRoLmpvaW4oYnVpbGRfZGlyLCBmaWxlKSlcblx0XHQ6IChmaWxlKSA9PiAoY2FjaGUuaGFzKGZpbGUpID8gY2FjaGUgOiBjYWNoZS5zZXQoZmlsZSwgZnMucmVhZEZpbGVTeW5jKHBhdGguam9pbihidWlsZF9kaXIsIGZpbGUpKSkpLmdldChmaWxlKTtcblxuXHRyZXR1cm4gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG5cdFx0aWYgKGZpbHRlcihyZXEpKSB7XG5cdFx0XHRjb25zdCB0eXBlID0gbGl0ZS5nZXRUeXBlKHJlcS5wYXRoKTtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgZmlsZSA9IHBhdGgucG9zaXgubm9ybWFsaXplKGRlY29kZVVSSUNvbXBvbmVudChyZXEucGF0aCkpO1xuXHRcdFx0XHRjb25zdCBkYXRhID0gcmVhZChmaWxlKTtcblxuXHRcdFx0XHRyZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCB0eXBlKTtcblx0XHRcdFx0cmVzLnNldEhlYWRlcignQ2FjaGUtQ29udHJvbCcsIGNhY2hlX2NvbnRyb2wpO1xuXHRcdFx0XHRyZXMuZW5kKGRhdGEpO1xuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdHJlcy5zdGF0dXNDb2RlID0gNDA0O1xuXHRcdFx0XHRyZXMuZW5kKCdub3QgZm91bmQnKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0bmV4dCgpO1xuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gbm9vcCgpe31cblxuZXhwb3J0IHsgbWlkZGxld2FyZSB9O1xuIiwiaW1wb3J0IHNpcnYgZnJvbSAnc2lydic7XHJcbmltcG9ydCBwb2xrYSBmcm9tICdwb2xrYSc7XHJcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tICdjb21wcmVzc2lvbic7XHJcbmltcG9ydCAqIGFzIHNhcHBlciBmcm9tICdAc2FwcGVyL3NlcnZlcic7XHJcblxyXG5jb25zdCB7IFBPUlQsIE5PREVfRU5WIH0gPSBwcm9jZXNzLmVudjtcclxuY29uc3QgZGV2ID0gTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc7XHJcblxyXG5wb2xrYSgpIC8vIFlvdSBjYW4gYWxzbyB1c2UgRXhwcmVzc1xyXG5cdC51c2UoXHJcblx0XHRjb21wcmVzc2lvbih7IHRocmVzaG9sZDogMCB9KSxcclxuXHRcdHNpcnYoJ3N0YXRpYycsIHsgZGV2IH0pLFxyXG5cdFx0c2FwcGVyLm1pZGRsZXdhcmUoKVxyXG5cdClcclxuXHQubGlzdGVuKFBPUlQsIGVyciA9PiB7XHJcblx0XHRpZiAoZXJyKSBjb25zb2xlLmxvZygnZXJyb3InLCBlcnIpO1xyXG5cdH0pO1xyXG5cclxuXHJcbi8vIFx0Y29uc3QgTW9uZ29DbGllbnQgPSByZXF1aXJlKCdtb25nb2RiJykuTW9uZ29DbGllbnQ7XHJcbi8vIFx0Y29uc3QgdXJsID0gXCJtb25nb2RiK3NydjovL2JlY3V3ZW1hcnRpbjp2ZW5kcmVkaTEzQGNsdXN0ZXIwLWhneGNsLm1vbmdvZGIubmV0L3Rlc3QyX2RhdGFiYXNlP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiO1xyXG4vLyBcdC8vIFVzZSBjb25uZWN0IG1ldGhvZCB0byBjb25uZWN0IHRvIHRoZSBTZXJ2ZXJcclxuLy8gTW9uZ29DbGllbnQuY29ubmVjdCh1cmwsIGZ1bmN0aW9uKGVyciwgY2xpZW50KSB7XHJcblx0XHJcbi8vIFx0Y29uc3QgZGIgPSBjbGllbnQuZGIoXCJ0ZXN0Ml9kYXRhYmFzZVwiKTtcclxuXHRcclxuLy8gXHR2YXIgY3Vyc29yID0gZGIuY29sbGVjdGlvbigndGVzdDJfY29sbGVjdGlvbicpLmZpbmQoe30pO1xyXG5cdFxyXG4vLyBcdGZ1bmN0aW9uIGl0ZXJhdGVGdW5jKGRvYykge1xyXG4vLyBcdFx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZG9jLCBudWxsLCA0KSk7XHJcbi8vIFx0IH1cclxuXHQgXHJcbi8vIFx0IGZ1bmN0aW9uIGVycm9yRnVuYyhlcnJvcikge1xyXG4vLyBcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG4vLyBcdCB9XHJcbi8vIFx0IGN1cnNvci5mb3JFYWNoKGl0ZXJhdGVGdW5jLCBlcnJvckZ1bmMpO1xyXG4vLyBcdCBjbGllbnQuY2xvc2UoKTtcclxuLy8gICB9KTtcclxuICBcclxuXHJcblxyXG4gXHJcbiJdLCJuYW1lcyI6WyJnZXQiLCJwcmVsb2FkIiwiQ2hhcnQiLCJnZXRfbGFzdF9uYl9zZXNzaW9ucyIsImRpdmlkZXZlY3RvciIsInZhcmlhdGlvbiIsInJvdW5kXzJfZGVjaW1hbCIsImNvbXBvbmVudF8wIiwiY29tcG9uZW50XzEiLCJjb21wb25lbnRfMiIsInByZWxvYWRfMiIsImNvbXBvbmVudF8zIiwicHJlbG9hZF8zIiwiY29tcG9uZW50XzQiLCJjb21wb25lbnRfNSIsImNvbXBvbmVudF82IiwiY29tcG9uZW50XzciLCJjb21wb25lbnRfOCIsImNvbXBvbmVudF85IiwiY29tcG9uZW50XzEwIiwicHJlbG9hZF8xMCIsImNvbXBvbmVudF8xMSIsImNvbXBvbmVudF8xMiIsInByZWxvYWRfMTIiLCJjb21wb25lbnRfMTMiLCJjb21wb25lbnRfMTQiLCJwcmVsb2FkXzE0IiwiY29tcG9uZW50XzE1IiwiY29tcG9uZW50XzE2IiwiY29tcG9uZW50XzE3IiwiY29tcG9uZW50XzE4IiwicHJlbG9hZF8xOCIsImNvbXBvbmVudF8xOSIsInByZWxvYWRfMTkiLCJjb21wb25lbnRfMjAiLCJyb290IiwiZXJyb3IiLCJlc2NhcGVkIiwibm9vcCIsInNhcHBlci5taWRkbGV3YXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNqQztBQUNBLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztBQUNsQixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFDZDtBQUNPLGVBQWUsSUFBSSxFQUFFO0FBQzVCLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQztBQUNmLFFBQVEsTUFBTSxHQUFHLEdBQUcsNkdBQTZHLENBQUM7QUFDbEksUUFBUSxNQUFNLEdBQUcsTUFBTSxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUM7QUFDckQsUUFBUSxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQzlDLEtBQUs7QUFDTCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO0FBQ3ZCOztBQ1RPLGVBQWUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUU7QUFDcEM7QUFDQSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO0FBQzNCLENBQUMsTUFBTSxRQUFRLEdBQUcsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO0FBQ3BCLEVBQUUsY0FBYyxFQUFFLGtCQUFrQjtBQUNwQyxFQUFFLENBQUMsQ0FBQztBQUNKO0FBQ0EsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUNuQztBQUNBOzs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDeEJPLGVBQWVBLEtBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO0FBQ3BDO0FBQ0EsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztBQUMzQixDQUFDLE1BQU0sUUFBUSxHQUFHLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQzdGO0FBQ0EsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtBQUNwQixFQUFFLGNBQWMsRUFBRSxrQkFBa0I7QUFDcEMsRUFBRSxDQUFDLENBQUM7QUFDSjtBQUNBLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDbkM7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2xITyxlQUFlQSxLQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRTtBQUNwQztBQUNBLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7QUFDM0IsQ0FBQyxNQUFNLFFBQVEsR0FBRyxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7QUFDcEIsRUFBRSxjQUFjLEVBQUUsa0JBQWtCO0FBQ3BDLEVBQUUsQ0FBQyxDQUFDO0FBQ0o7QUFDQSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQ25DO0FBQ0E7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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R0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQzlCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDMUMsTUFBTSxJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUIsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyRSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsU0FBUyxJQUFJLEVBQUU7QUFDeEMsRUFBRSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3RCLEVBQUUsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDeEQsRUFBRSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNwRDtBQUNBLEVBQUUsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQzFDLEVBQUUsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUM1QztBQUNBLEVBQUUsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQztBQUMxRCxDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNB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QVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLHlDQUF5QyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENB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TyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwRyxNQUFNLENBQUM7QUFDUDtBQUNBLEtBQUssSUFBSSxlQUFlLEVBQUU7QUFDMUIsTUFBTSxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNyRDtBQUNBLE1BQU0sTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU07QUFDbkMsT0FBTyxFQUFFO0FBQ1QsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQztBQUM3QyxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO0FBQzlDLE9BQU8sQ0FBQztBQUNSO0FBQ0EsTUFBTSxNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3JELE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxHQUFHLElBQUk7QUFDN0UsT0FBTyxNQUFNLEtBQUssR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakQsT0FBTyxJQUFJLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9DLE9BQU8sQ0FBQyxDQUFDO0FBQ1Q7QUFDQSxNQUFNLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3RDLFFBQVEsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzVDLFFBQVEsSUFBSSxDQUFD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
